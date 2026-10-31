<h1 id="amazon-lightsail">Amazon Lightsail v2016-11-28</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Amazon Lightsail is the easiest way to get started with Amazon Web Services (Amazon Web Services) for developers who need to build websites or web applications. It includes everything you need to launch your project quickly - instances (virtual private servers), container services, storage buckets, managed databases, SSD-based block storage, static IP addresses, load balancers, content delivery network (CDN) distributions, DNS management of registered domains, and resource snapshots (backups) - for a low, predictable monthly price.</p> <p>You can manage your Lightsail resources using the Lightsail console, Lightsail API, Command Line Interface (CLI), or SDKs. For more information about Lightsail concepts and tasks, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-set-up-access-keys-to-use-sdk-api-cli">Amazon Lightsail Developer Guide</a>.</p> <p>This API Reference provides detailed information about the actions, data types, parameters, and errors of the Lightsail service. For more information about the supported Amazon Web Services Regions, endpoints, and service quotas of the Lightsail service, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail Endpoints and Quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>

Base URLs:

* <a href="http://lightsail.us-east-1.amazonaws.com">http://lightsail.us-east-1.amazonaws.com</a> - The Amazon Lightsail multi-region endpoint

* <a href="https://lightsail.us-east-1.amazonaws.com">https://lightsail.us-east-1.amazonaws.com</a> - The Amazon Lightsail multi-region endpoint

* <a href="http://lightsail.cn-north-1.amazonaws.com.cn">http://lightsail.cn-north-1.amazonaws.com.cn</a> - The Amazon Lightsail endpoint for China (Beijing) and China (Ningxia)

* <a href="https://lightsail.cn-north-1.amazonaws.com.cn">https://lightsail.cn-north-1.amazonaws.com.cn</a> - The Amazon Lightsail endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/lightsail/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-lightsail-default">Default</h1>

## AllocateStaticIp

<a id="opIdAllocateStaticIp"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.AllocateStaticIp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.AllocateStaticIp' \
  -d '{
    "staticIpName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.AllocateStaticIp`

Allocates a static IP address.

> Body parameter

```json
{
  "staticIpName": {}
}
```

<h3 id="allocatestaticip-parameters">Parameters</h3>

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
|body|body|[AllocateStaticIpRequest](#schemaallocatestaticiprequest)|true|none|
|» staticIpName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.AllocateStaticIp|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="allocatestaticip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AllocateStaticIpResult](#schemaallocatestaticipresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AttachCertificateToDistribution

<a id="opIdAttachCertificateToDistribution"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.AttachCertificateToDistribution' \
  -d '{
    "distributionName": {},
    "certificateName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution`

<p>Attaches an SSL/TLS certificate to your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After the certificate is attached, your distribution accepts HTTPS traffic for all of the domains that are associated with the certificate.</p> <p>Use the <code>CreateCertificate</code> action to create a certificate that you can attach to your distribution.</p> <important> <p>Only certificates created in the <code>us-east-1</code> Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the <code>us-east-1</code> Region.</p> </important>

> Body parameter

```json
{
  "distributionName": {},
  "certificateName": {}
}
```

<h3 id="attachcertificatetodistribution-parameters">Parameters</h3>

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
|body|body|[AttachCertificateToDistributionRequest](#schemaattachcertificatetodistributionrequest)|true|none|
|» distributionName|body|object|true|none|
|» certificateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.AttachCertificateToDistribution|

> Example responses

> 200 Response

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="attachcertificatetodistribution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachCertificateToDistributionResult](#schemaattachcertificatetodistributionresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AttachDisk

<a id="opIdAttachDisk"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.AttachDisk' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.AttachDisk' \
  -d '{
    "diskName": {},
    "instanceName": {},
    "diskPath": {},
    "autoMounting": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.AttachDisk`

<p>Attaches a block storage disk to a running or stopped Lightsail instance and exposes it to the instance with the specified disk name.</p> <p>The <code>attach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "diskName": {},
  "instanceName": {},
  "diskPath": {},
  "autoMounting": {}
}
```

<h3 id="attachdisk-parameters">Parameters</h3>

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
|body|body|[AttachDiskRequest](#schemaattachdiskrequest)|true|none|
|» diskName|body|object|true|none|
|» instanceName|body|object|true|none|
|» diskPath|body|object|true|none|
|» autoMounting|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.AttachDisk|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="attachdisk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachDiskResult](#schemaattachdiskresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AttachInstancesToLoadBalancer

<a id="opIdAttachInstancesToLoadBalancer"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.AttachInstancesToLoadBalancer' \
  -d '{
    "loadBalancerName": {},
    "instanceNames": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer`

<p>Attaches one or more Lightsail instances to a load balancer.</p> <p>After some time, the instances are attached to the load balancer and the health check status is available.</p> <p>The <code>attach instances to load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "loadBalancerName": {},
  "instanceNames": {}
}
```

<h3 id="attachinstancestoloadbalancer-parameters">Parameters</h3>

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
|body|body|[AttachInstancesToLoadBalancerRequest](#schemaattachinstancestoloadbalancerrequest)|true|none|
|» loadBalancerName|body|object|true|none|
|» instanceNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.AttachInstancesToLoadBalancer|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="attachinstancestoloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachInstancesToLoadBalancerResult](#schemaattachinstancestoloadbalancerresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AttachLoadBalancerTlsCertificate

<a id="opIdAttachLoadBalancerTlsCertificate"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.AttachLoadBalancerTlsCertificate' \
  -d '{
    "loadBalancerName": {},
    "certificateName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate`

<p>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>Once you create and validate your certificate, you can attach it to your load balancer. You can also use this API to rotate the certificates on your account. Use the <code>AttachLoadBalancerTlsCertificate</code> action with the non-attached certificate, and it will replace the existing one and become the attached certificate.</p> <p>The <code>AttachLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "loadBalancerName": {},
  "certificateName": {}
}
```

<h3 id="attachloadbalancertlscertificate-parameters">Parameters</h3>

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
|body|body|[AttachLoadBalancerTlsCertificateRequest](#schemaattachloadbalancertlscertificaterequest)|true|none|
|» loadBalancerName|body|object|true|none|
|» certificateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.AttachLoadBalancerTlsCertificate|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="attachloadbalancertlscertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachLoadBalancerTlsCertificateResult](#schemaattachloadbalancertlscertificateresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AttachStaticIp

<a id="opIdAttachStaticIp"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.AttachStaticIp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.AttachStaticIp' \
  -d '{
    "staticIpName": {},
    "instanceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.AttachStaticIp`

Attaches a static IP address to a specific Amazon Lightsail instance.

> Body parameter

```json
{
  "staticIpName": {},
  "instanceName": {}
}
```

<h3 id="attachstaticip-parameters">Parameters</h3>

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
|body|body|[AttachStaticIpRequest](#schemaattachstaticiprequest)|true|none|
|» staticIpName|body|object|true|none|
|» instanceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.AttachStaticIp|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="attachstaticip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachStaticIpResult](#schemaattachstaticipresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CloseInstancePublicPorts

<a id="opIdCloseInstancePublicPorts"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CloseInstancePublicPorts' \
  -d '{
    "portInfo": {
      "fromPort": {},
      "toPort": {},
      "protocol": {},
      "cidrs": {},
      "ipv6Cidrs": {},
      "cidrListAliases": {}
    },
    "instanceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts`

<p>Closes ports for a specific Amazon Lightsail instance.</p> <p>The <code>CloseInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "portInfo": {
    "fromPort": {},
    "toPort": {},
    "protocol": {},
    "cidrs": {},
    "ipv6Cidrs": {},
    "cidrListAliases": {}
  },
  "instanceName": {}
}
```

<h3 id="closeinstancepublicports-parameters">Parameters</h3>

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
|body|body|[CloseInstancePublicPortsRequest](#schemacloseinstancepublicportsrequest)|true|none|
|» portInfo|body|object|true|none|
|» » fromPort|body|object|false|none|
|» » toPort|body|object|false|none|
|» » protocol|body|object|false|none|
|» » cidrs|body|object|false|none|
|» » ipv6Cidrs|body|object|false|none|
|» » cidrListAliases|body|object|false|none|
|» instanceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CloseInstancePublicPorts|

> Example responses

> 200 Response

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="closeinstancepublicports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloseInstancePublicPortsResult](#schemacloseinstancepublicportsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CopySnapshot

<a id="opIdCopySnapshot"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CopySnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CopySnapshot' \
  -d '{
    "sourceSnapshotName": {},
    "sourceResourceName": {},
    "restoreDate": {},
    "useLatestRestorableAutoSnapshot": {},
    "targetSnapshotName": {},
    "sourceRegion": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CopySnapshot`

<p>Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an automatic snapshot of an instance or disk as a manual snapshot. This operation can also be used to copy a manual or automatic snapshot of an instance or a disk from one Amazon Web Services Region to another in Amazon Lightsail.</p> <p>When copying a <i>manual snapshot</i>, be sure to define the <code>source region</code>, <code>source snapshot name</code>, and <code>target snapshot name</code> parameters.</p> <p>When copying an <i>automatic snapshot</i>, be sure to define the <code>source region</code>, <code>source resource name</code>, <code>target snapshot name</code>, and either the <code>restore date</code> or the <code>use latest restorable auto snapshot</code> parameters.</p>

> Body parameter

```json
{
  "sourceSnapshotName": {},
  "sourceResourceName": {},
  "restoreDate": {},
  "useLatestRestorableAutoSnapshot": {},
  "targetSnapshotName": {},
  "sourceRegion": {}
}
```

<h3 id="copysnapshot-parameters">Parameters</h3>

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
|body|body|[CopySnapshotRequest](#schemacopysnapshotrequest)|true|none|
|» sourceSnapshotName|body|object|false|none|
|» sourceResourceName|body|object|false|none|
|» restoreDate|body|object|false|none|
|» useLatestRestorableAutoSnapshot|body|object|false|none|
|» targetSnapshotName|body|object|true|none|
|» sourceRegion|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CopySnapshot|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="copysnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CopySnapshotResult](#schemacopysnapshotresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBucket

<a id="opIdCreateBucket"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateBucket' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateBucket' \
  -d '{
    "bucketName": {},
    "bundleId": {},
    "tags": {},
    "enableObjectVersioning": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateBucket`

<p>Creates an Amazon Lightsail bucket.</p> <p>A bucket is a cloud storage resource available in the Lightsail object storage service. Use buckets to store objects such as data and its descriptive metadata. For more information about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

> Body parameter

```json
{
  "bucketName": {},
  "bundleId": {},
  "tags": {},
  "enableObjectVersioning": {}
}
```

<h3 id="createbucket-parameters">Parameters</h3>

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
|body|body|[CreateBucketRequest](#schemacreatebucketrequest)|true|none|
|» bucketName|body|object|true|none|
|» bundleId|body|object|true|none|
|» tags|body|object|false|none|
|» enableObjectVersioning|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateBucket|

> Example responses

> 200 Response

```json
{
  "bucket": {
    "resourceType": {},
    "accessRules": {
      "getObject": {},
      "allowPublicOverrides": {}
    },
    "arn": {},
    "bundleId": {},
    "createdAt": {},
    "url": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "name": {},
    "supportCode": {},
    "tags": {},
    "objectVersioning": {},
    "ableToUpdateBundle": {},
    "readonlyAccessAccounts": {},
    "resourcesReceivingAccess": {},
    "state": {
      "code": {},
      "message": {}
    },
    "accessLogConfig": {
      "enabled": {},
      "destination": {},
      "prefix": {}
    }
  },
  "operations": {}
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

<h3 id="createbucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBucketResult](#schemacreatebucketresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|ServiceException|[ServiceException](#schemaserviceexception)|
|483|483|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBucketAccessKey

<a id="opIdCreateBucketAccessKey"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateBucketAccessKey' \
  -d '{
    "bucketName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey`

<p>Creates a new access key for the specified Amazon Lightsail bucket. Access keys consist of an access key ID and corresponding secret access key.</p> <p>Access keys grant full programmatic access to the specified bucket and its objects. You can have a maximum of two access keys per bucket. Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketAccessKeys.html">GetBucketAccessKeys</a> action to get a list of current access keys for a specific bucket. For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> <important> <p>The <code>secretAccessKey</code> value is returned only in response to the <code>CreateBucketAccessKey</code> action. You can get a secret access key only when you first create an access key; you cannot get the secret access key later. If you lose the secret access key, you must create a new access key.</p> </important>

> Body parameter

```json
{
  "bucketName": {}
}
```

<h3 id="createbucketaccesskey-parameters">Parameters</h3>

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
|body|body|[CreateBucketAccessKeyRequest](#schemacreatebucketaccesskeyrequest)|true|none|
|» bucketName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateBucketAccessKey|

> Example responses

> 200 Response

```json
{
  "accessKey": {
    "accessKeyId": {},
    "secretAccessKey": {},
    "status": {},
    "createdAt": {},
    "lastUsed": {
      "lastUsedDate": {},
      "region": {},
      "serviceName": {}
    }
  },
  "operations": {}
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

<h3 id="createbucketaccesskey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBucketAccessKeyResult](#schemacreatebucketaccesskeyresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCertificate

<a id="opIdCreateCertificate"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateCertificate' \
  -d '{
    "certificateName": {},
    "domainName": {},
    "subjectAlternativeNames": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateCertificate`

<p>Creates an SSL/TLS certificate for an Amazon Lightsail content delivery network (CDN) distribution and a container service.</p> <p>After the certificate is valid, use the <code>AttachCertificateToDistribution</code> action to use the certificate and its domains with your distribution. Or use the <code>UpdateContainerService</code> action to use the certificate and its domains with your container service.</p> <important> <p>Only certificates created in the <code>us-east-1</code> Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the <code>us-east-1</code> Region.</p> </important>

> Body parameter

```json
{
  "certificateName": {},
  "domainName": {},
  "subjectAlternativeNames": {},
  "tags": {}
}
```

<h3 id="createcertificate-parameters">Parameters</h3>

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
|body|body|[CreateCertificateRequest](#schemacreatecertificaterequest)|true|none|
|» certificateName|body|object|true|none|
|» domainName|body|object|true|none|
|» subjectAlternativeNames|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateCertificate|

> Example responses

> 200 Response

```json
{
  "certificate": {
    "certificateArn": {},
    "certificateName": {},
    "domainName": {},
    "certificateDetail": {
      "arn": {},
      "name": {},
      "domainName": {},
      "status": {},
      "serialNumber": {},
      "subjectAlternativeNames": {},
      "domainValidationRecords": {},
      "requestFailureReason": {},
      "inUseResourceCount": {},
      "keyAlgorithm": {},
      "createdAt": {},
      "issuedAt": {},
      "issuerCA": {},
      "notBefore": {},
      "notAfter": {},
      "eligibleToRenew": {},
      "renewalSummary": {
        "domainValidationRecords": {},
        "renewalStatus": {},
        "renewalStatusReason": {},
        "updatedAt": {}
      },
      "revokedAt": {},
      "revocationReason": {},
      "tags": {},
      "supportCode": {}
    },
    "tags": {}
  },
  "operations": {}
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

<h3 id="createcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCertificateResult](#schemacreatecertificateresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCloudFormationStack

<a id="opIdCreateCloudFormationStack"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateCloudFormationStack' \
  -d '{
    "instances": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack`

<p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack records</code> operation to get a list of the CloudFormation stacks created.</p> <important> <p>Wait until after your new Amazon EC2 instance is created before running the <code>create cloud formation stack</code> operation again with the same export snapshot record.</p> </important>

> Body parameter

```json
{
  "instances": {}
}
```

<h3 id="createcloudformationstack-parameters">Parameters</h3>

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
|body|body|[CreateCloudFormationStackRequest](#schemacreatecloudformationstackrequest)|true|none|
|» instances|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateCloudFormationStack|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="createcloudformationstack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCloudFormationStackResult](#schemacreatecloudformationstackresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateContactMethod

<a id="opIdCreateContactMethod"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateContactMethod' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateContactMethod' \
  -d '{
    "protocol": {},
    "contactEndpoint": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateContactMethod`

<p>Creates an email or SMS text message contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>

> Body parameter

```json
{
  "protocol": {},
  "contactEndpoint": {}
}
```

<h3 id="createcontactmethod-parameters">Parameters</h3>

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
|body|body|[CreateContactMethodRequest](#schemacreatecontactmethodrequest)|true|none|
|» protocol|body|object|true|none|
|» contactEndpoint|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateContactMethod|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="createcontactmethod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateContactMethodResult](#schemacreatecontactmethodresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateContainerService

<a id="opIdCreateContainerService"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateContainerService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateContainerService' \
  -d '{
    "serviceName": {},
    "power": {},
    "scale": {},
    "tags": {},
    "publicDomainNames": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "deployment": {
      "containers": {
        "property1": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        },
        "property2": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        }
      },
      "publicEndpoint": {
        "containerName": {},
        "containerPort": {},
        "healthCheck": {
          "healthyThreshold": {},
          "unhealthyThreshold": {},
          "timeoutSeconds": {},
          "intervalSeconds": {},
          "path": {},
          "successCodes": {}
        }
      }
    },
    "privateRegistryAccess": {
      "ecrImagePullerRole": {
        "isActive": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateContainerService`

<p>Creates an Amazon Lightsail container service.</p> <p>A Lightsail container service is a compute resource to which you can deploy containers. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-services">Container services in Amazon Lightsail</a> in the <i>Lightsail Dev Guide</i>.</p>

> Body parameter

```json
{
  "serviceName": {},
  "power": {},
  "scale": {},
  "tags": {},
  "publicDomainNames": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "deployment": {
    "containers": {
      "property1": {
        "image": {},
        "command": {},
        "environment": {
          "property1": "string",
          "property2": "string"
        },
        "ports": {
          "property1": "HTTP",
          "property2": "HTTP"
        }
      },
      "property2": {
        "image": {},
        "command": {},
        "environment": {
          "property1": "string",
          "property2": "string"
        },
        "ports": {
          "property1": "HTTP",
          "property2": "HTTP"
        }
      }
    },
    "publicEndpoint": {
      "containerName": {},
      "containerPort": {},
      "healthCheck": {
        "healthyThreshold": {},
        "unhealthyThreshold": {},
        "timeoutSeconds": {},
        "intervalSeconds": {},
        "path": {},
        "successCodes": {}
      }
    }
  },
  "privateRegistryAccess": {
    "ecrImagePullerRole": {
      "isActive": {}
    }
  }
}
```

<h3 id="createcontainerservice-parameters">Parameters</h3>

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
|body|body|[CreateContainerServiceRequest](#schemacreatecontainerservicerequest)|true|none|
|» serviceName|body|object|true|none|
|» power|body|object|true|none|
|» scale|body|object|true|none|
|» tags|body|object|false|none|
|» publicDomainNames|body|object|false|none|
|» » **additionalProperties**|body|[ContainerServicePublicDomainsList](#schemacontainerservicepublicdomainslist)|false|none|
|» deployment|body|object|false|none|
|» » containers|body|object|false|none|
|» » » **additionalProperties**|body|[Container](#schemacontainer)|false|Describes the settings of a container that will be launched, or that is launched, to an Amazon Lightsail container service.|
|» » publicEndpoint|body|object|false|none|
|» » » containerName|body|object|true|none|
|» » » containerPort|body|object|true|none|
|» » » healthCheck|body|object|false|none|
|» » » » healthyThreshold|body|object|false|none|
|» » » » unhealthyThreshold|body|object|false|none|
|» » » » timeoutSeconds|body|object|false|none|
|» » » » intervalSeconds|body|object|false|none|
|» » » » path|body|object|false|none|
|» » » » successCodes|body|object|false|none|
|» privateRegistryAccess|body|object|false|none|
|» » ecrImagePullerRole|body|object|false|none|
|» » » isActive|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateContainerService|

> Example responses

> 200 Response

```json
{
  "containerService": {
    "containerServiceName": {},
    "arn": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "power": {},
    "powerId": {},
    "state": {},
    "stateDetail": {
      "code": {},
      "message": {}
    },
    "scale": {},
    "currentDeployment": {
      "version": {},
      "state": {},
      "containers": {
        "property1": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        },
        "property2": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        }
      },
      "publicEndpoint": {
        "containerName": {},
        "containerPort": {},
        "healthCheck": {
          "healthyThreshold": {},
          "unhealthyThreshold": {},
          "timeoutSeconds": {},
          "intervalSeconds": {},
          "path": {},
          "successCodes": {}
        }
      },
      "createdAt": {}
    },
    "nextDeployment": {
      "version": {},
      "state": {},
      "containers": {
        "property1": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        },
        "property2": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        }
      },
      "publicEndpoint": {
        "containerName": {},
        "containerPort": {},
        "healthCheck": {
          "healthyThreshold": {},
          "unhealthyThreshold": {},
          "timeoutSeconds": {},
          "intervalSeconds": {},
          "path": {},
          "successCodes": {}
        }
      },
      "createdAt": {}
    },
    "isDisabled": {},
    "principalArn": {},
    "privateDomainName": {},
    "publicDomainNames": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "url": {},
    "privateRegistryAccess": {
      "ecrImagePullerRole": {
        "isActive": {},
        "principalArn": {}
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="createcontainerservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateContainerServiceResult](#schemacreatecontainerserviceresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateContainerServiceDeployment

<a id="opIdCreateContainerServiceDeployment"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateContainerServiceDeployment' \
  -d '{
    "serviceName": {},
    "containers": {
      "property1": {
        "image": {},
        "command": {},
        "environment": {
          "property1": "string",
          "property2": "string"
        },
        "ports": {
          "property1": "HTTP",
          "property2": "HTTP"
        }
      },
      "property2": {
        "image": {},
        "command": {},
        "environment": {
          "property1": "string",
          "property2": "string"
        },
        "ports": {
          "property1": "HTTP",
          "property2": "HTTP"
        }
      }
    },
    "publicEndpoint": {
      "containerName": {},
      "containerPort": {},
      "healthCheck": {
        "healthyThreshold": {},
        "unhealthyThreshold": {},
        "timeoutSeconds": {},
        "intervalSeconds": {},
        "path": {},
        "successCodes": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment`

<p>Creates a deployment for your Amazon Lightsail container service.</p> <p>A deployment specifies the containers that will be launched on the container service and their settings, such as the ports to open, the environment variables to apply, and the launch command to run. It also specifies the container that will serve as the public endpoint of the deployment and its settings, such as the HTTP or HTTPS port to use, and the health check configuration.</p> <p>You can deploy containers to your container service using container images from a public registry such as Amazon ECR Public, or from your local machine. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-container-images">Creating container images for your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

> Body parameter

```json
{
  "serviceName": {},
  "containers": {
    "property1": {
      "image": {},
      "command": {},
      "environment": {
        "property1": "string",
        "property2": "string"
      },
      "ports": {
        "property1": "HTTP",
        "property2": "HTTP"
      }
    },
    "property2": {
      "image": {},
      "command": {},
      "environment": {
        "property1": "string",
        "property2": "string"
      },
      "ports": {
        "property1": "HTTP",
        "property2": "HTTP"
      }
    }
  },
  "publicEndpoint": {
    "containerName": {},
    "containerPort": {},
    "healthCheck": {
      "healthyThreshold": {},
      "unhealthyThreshold": {},
      "timeoutSeconds": {},
      "intervalSeconds": {},
      "path": {},
      "successCodes": {}
    }
  }
}
```

<h3 id="createcontainerservicedeployment-parameters">Parameters</h3>

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
|body|body|[CreateContainerServiceDeploymentRequest](#schemacreatecontainerservicedeploymentrequest)|true|none|
|» serviceName|body|object|true|none|
|» containers|body|object|false|none|
|» » **additionalProperties**|body|[Container](#schemacontainer)|false|Describes the settings of a container that will be launched, or that is launched, to an Amazon Lightsail container service.|
|» publicEndpoint|body|object|false|none|
|» » containerName|body|object|true|none|
|» » containerPort|body|object|true|none|
|» » healthCheck|body|object|false|none|
|» » » healthyThreshold|body|object|false|none|
|» » » unhealthyThreshold|body|object|false|none|
|» » » timeoutSeconds|body|object|false|none|
|» » » intervalSeconds|body|object|false|none|
|» » » path|body|object|false|none|
|» » » successCodes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateContainerServiceDeployment|

> Example responses

> 200 Response

```json
{
  "containerService": {
    "containerServiceName": {},
    "arn": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "power": {},
    "powerId": {},
    "state": {},
    "stateDetail": {
      "code": {},
      "message": {}
    },
    "scale": {},
    "currentDeployment": {
      "version": {},
      "state": {},
      "containers": {
        "property1": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        },
        "property2": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        }
      },
      "publicEndpoint": {
        "containerName": {},
        "containerPort": {},
        "healthCheck": {
          "healthyThreshold": {},
          "unhealthyThreshold": {},
          "timeoutSeconds": {},
          "intervalSeconds": {},
          "path": {},
          "successCodes": {}
        }
      },
      "createdAt": {}
    },
    "nextDeployment": {
      "version": {},
      "state": {},
      "containers": {
        "property1": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        },
        "property2": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        }
      },
      "publicEndpoint": {
        "containerName": {},
        "containerPort": {},
        "healthCheck": {
          "healthyThreshold": {},
          "unhealthyThreshold": {},
          "timeoutSeconds": {},
          "intervalSeconds": {},
          "path": {},
          "successCodes": {}
        }
      },
      "createdAt": {}
    },
    "isDisabled": {},
    "principalArn": {},
    "privateDomainName": {},
    "publicDomainNames": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "url": {},
    "privateRegistryAccess": {
      "ecrImagePullerRole": {
        "isActive": {},
        "principalArn": {}
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="createcontainerservicedeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateContainerServiceDeploymentResult](#schemacreatecontainerservicedeploymentresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateContainerServiceRegistryLogin

<a id="opIdCreateContainerServiceRegistryLogin"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateContainerServiceRegistryLogin' \
  -d '{}'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin`

<p>Creates a temporary set of log in credentials that you can use to log in to the Docker process on your local machine. After you're logged in, you can use the native Docker commands to push your local container images to the container image registry of your Amazon Lightsail account so that you can use them with your Lightsail container service. The log in credentials expire 12 hours after they are created, at which point you will need to create a new set of log in credentials.</p> <note> <p>You can only push container images to the container service registry of your Lightsail account. You cannot pull container images or perform any other container image management actions on the container service registry.</p> </note> <p>After you push your container images to the container image registry of your Lightsail account, use the <code>RegisterContainerImage</code> action to register the pushed images to a specific Lightsail container service.</p> <note> <p>This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </note>

> Body parameter

```json
{}
```

<h3 id="createcontainerserviceregistrylogin-parameters">Parameters</h3>

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
|body|body|[CreateContainerServiceRegistryLoginRequest](#schemacreatecontainerserviceregistryloginrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateContainerServiceRegistryLogin|

> Example responses

> 200 Response

```json
{
  "registryLogin": {
    "username": {},
    "password": {},
    "expiresAt": {},
    "registry": {}
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

<h3 id="createcontainerserviceregistrylogin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateContainerServiceRegistryLoginResult](#schemacreatecontainerserviceregistryloginresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDisk

<a id="opIdCreateDisk"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateDisk' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateDisk' \
  -d '{
    "diskName": {},
    "availabilityZone": {},
    "sizeInGb": {},
    "tags": {},
    "addOns": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateDisk`

<p>Creates a block storage disk that can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "diskName": {},
  "availabilityZone": {},
  "sizeInGb": {},
  "tags": {},
  "addOns": {}
}
```

<h3 id="createdisk-parameters">Parameters</h3>

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
|body|body|[CreateDiskRequest](#schemacreatediskrequest)|true|none|
|» diskName|body|object|true|none|
|» availabilityZone|body|object|true|none|
|» sizeInGb|body|object|true|none|
|» tags|body|object|false|none|
|» addOns|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateDisk|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="createdisk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDiskResult](#schemacreatediskresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDiskFromSnapshot

<a id="opIdCreateDiskFromSnapshot"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateDiskFromSnapshot' \
  -d '{
    "diskName": {},
    "diskSnapshotName": {},
    "availabilityZone": {},
    "sizeInGb": {},
    "tags": {},
    "addOns": {},
    "sourceDiskName": {},
    "restoreDate": {},
    "useLatestRestorableAutoSnapshot": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot`

<p>Creates a block storage disk from a manual or automatic snapshot of a disk. The resulting disk can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "diskName": {},
  "diskSnapshotName": {},
  "availabilityZone": {},
  "sizeInGb": {},
  "tags": {},
  "addOns": {},
  "sourceDiskName": {},
  "restoreDate": {},
  "useLatestRestorableAutoSnapshot": {}
}
```

<h3 id="creatediskfromsnapshot-parameters">Parameters</h3>

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
|body|body|[CreateDiskFromSnapshotRequest](#schemacreatediskfromsnapshotrequest)|true|none|
|» diskName|body|object|true|none|
|» diskSnapshotName|body|object|false|none|
|» availabilityZone|body|object|true|none|
|» sizeInGb|body|object|true|none|
|» tags|body|object|false|none|
|» addOns|body|object|false|none|
|» sourceDiskName|body|object|false|none|
|» restoreDate|body|object|false|none|
|» useLatestRestorableAutoSnapshot|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateDiskFromSnapshot|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="creatediskfromsnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDiskFromSnapshotResult](#schemacreatediskfromsnapshotresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDiskSnapshot

<a id="opIdCreateDiskSnapshot"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateDiskSnapshot' \
  -d '{
    "diskName": {},
    "diskSnapshotName": {},
    "instanceName": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot`

<p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make copies of disks, and to save data before shutting down a Lightsail instance.</p> <p>You can take a snapshot of an attached disk that is in use; however, snapshots only capture data that has been written to your disk at the time the snapshot command is issued. This may exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the disk long enough to take a snapshot, your snapshot should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should unmount the disk from within the Lightsail instance, issue the create disk snapshot command, and then remount the disk to ensure a consistent and complete snapshot. You may remount and use your disk while the snapshot status is pending.</p> <p>You can also use this operation to create a snapshot of an instance's system volume. You might want to do this, for example, to recover data from the system volume of a botched instance or to create a backup of the system volume like you would for a block storage disk. To create a snapshot of a system volume, just define the <code>instance name</code> parameter when issuing the snapshot command, and a snapshot of the defined instance's system volume will be created. After the snapshot is available, you can create a block storage disk from the snapshot and attach it to a running instance to access the data on the disk.</p> <p>The <code>create disk snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "diskName": {},
  "diskSnapshotName": {},
  "instanceName": {},
  "tags": {}
}
```

<h3 id="createdisksnapshot-parameters">Parameters</h3>

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
|body|body|[CreateDiskSnapshotRequest](#schemacreatedisksnapshotrequest)|true|none|
|» diskName|body|object|false|none|
|» diskSnapshotName|body|object|true|none|
|» instanceName|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateDiskSnapshot|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="createdisksnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDiskSnapshotResult](#schemacreatedisksnapshotresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDistribution

<a id="opIdCreateDistribution"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateDistribution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateDistribution' \
  -d '{
    "distributionName": {},
    "origin": {
      "name": {},
      "regionName": {},
      "protocolPolicy": {}
    },
    "defaultCacheBehavior": {
      "behavior": {}
    },
    "cacheBehaviorSettings": {
      "defaultTTL": {},
      "minimumTTL": {},
      "maximumTTL": {},
      "allowedHTTPMethods": {},
      "cachedHTTPMethods": {},
      "forwardedCookies": {
        "option": {},
        "cookiesAllowList": {}
      },
      "forwardedHeaders": {
        "option": {},
        "headersAllowList": {}
      },
      "forwardedQueryStrings": {
        "option": {},
        "queryStringsAllowList": {}
      }
    },
    "cacheBehaviors": {},
    "bundleId": {},
    "ipAddressType": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateDistribution`

<p>Creates an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A distribution is a globally distributed network of caching servers that improve the performance of your website or web application hosted on a Lightsail instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-content-delivery-network-distributions">Content delivery networks in Amazon Lightsail</a>.</p>

> Body parameter

```json
{
  "distributionName": {},
  "origin": {
    "name": {},
    "regionName": {},
    "protocolPolicy": {}
  },
  "defaultCacheBehavior": {
    "behavior": {}
  },
  "cacheBehaviorSettings": {
    "defaultTTL": {},
    "minimumTTL": {},
    "maximumTTL": {},
    "allowedHTTPMethods": {},
    "cachedHTTPMethods": {},
    "forwardedCookies": {
      "option": {},
      "cookiesAllowList": {}
    },
    "forwardedHeaders": {
      "option": {},
      "headersAllowList": {}
    },
    "forwardedQueryStrings": {
      "option": {},
      "queryStringsAllowList": {}
    }
  },
  "cacheBehaviors": {},
  "bundleId": {},
  "ipAddressType": {},
  "tags": {}
}
```

<h3 id="createdistribution-parameters">Parameters</h3>

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
|body|body|[CreateDistributionRequest](#schemacreatedistributionrequest)|true|none|
|» distributionName|body|object|true|none|
|» origin|body|object|true|none|
|» » name|body|object|false|none|
|» » regionName|body|object|false|none|
|» » protocolPolicy|body|object|false|none|
|» defaultCacheBehavior|body|object|true|none|
|» » behavior|body|object|false|none|
|» cacheBehaviorSettings|body|object|false|none|
|» » defaultTTL|body|object|false|none|
|» » minimumTTL|body|object|false|none|
|» » maximumTTL|body|object|false|none|
|» » allowedHTTPMethods|body|object|false|none|
|» » cachedHTTPMethods|body|object|false|none|
|» » forwardedCookies|body|object|false|none|
|» » » option|body|object|false|none|
|» » » cookiesAllowList|body|object|false|none|
|» » forwardedHeaders|body|object|false|none|
|» » » option|body|object|false|none|
|» » » headersAllowList|body|object|false|none|
|» » forwardedQueryStrings|body|object|false|none|
|» » » option|body|object|false|none|
|» » » queryStringsAllowList|body|object|false|none|
|» cacheBehaviors|body|object|false|none|
|» bundleId|body|object|true|none|
|» ipAddressType|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateDistribution|

> Example responses

> 200 Response

```json
{
  "distribution": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "alternativeDomainNames": {},
    "status": {},
    "isEnabled": {},
    "domainName": {},
    "bundleId": {},
    "certificateName": {},
    "origin": {
      "name": {},
      "resourceType": {},
      "regionName": {},
      "protocolPolicy": {}
    },
    "originPublicDNS": {},
    "defaultCacheBehavior": {
      "behavior": {}
    },
    "cacheBehaviorSettings": {
      "defaultTTL": {},
      "minimumTTL": {},
      "maximumTTL": {},
      "allowedHTTPMethods": {},
      "cachedHTTPMethods": {},
      "forwardedCookies": {
        "option": {},
        "cookiesAllowList": {}
      },
      "forwardedHeaders": {
        "option": {},
        "headersAllowList": {}
      },
      "forwardedQueryStrings": {
        "option": {},
        "queryStringsAllowList": {}
      }
    },
    "cacheBehaviors": {},
    "ableToUpdateBundle": {},
    "ipAddressType": {},
    "tags": {}
  },
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="createdistribution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDistributionResult](#schemacreatedistributionresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDomain

<a id="opIdCreateDomain"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateDomain' \
  -d '{
    "domainName": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateDomain`

<p>Creates a domain resource for the specified domain (e.g., example.com).</p> <p>The <code>create domain</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "domainName": {},
  "tags": {}
}
```

<h3 id="createdomain-parameters">Parameters</h3>

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
|body|body|[CreateDomainRequest](#schemacreatedomainrequest)|true|none|
|» domainName|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateDomain|

> Example responses

> 200 Response

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="createdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDomainResult](#schemacreatedomainresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDomainEntry

<a id="opIdCreateDomainEntry"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateDomainEntry' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateDomainEntry' \
  -d '{
    "domainName": {},
    "domainEntry": {
      "id": {},
      "name": {},
      "target": {},
      "isAlias": {},
      "type": {},
      "options": {
        "property1": "string",
        "property2": "string"
      }
    }
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateDomainEntry`

<p>Creates one of the following domain name system (DNS) records in a domain DNS zone: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).</p> <p>The <code>create domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "domainName": {},
  "domainEntry": {
    "id": {},
    "name": {},
    "target": {},
    "isAlias": {},
    "type": {},
    "options": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="createdomainentry-parameters">Parameters</h3>

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
|body|body|[CreateDomainEntryRequest](#schemacreatedomainentryrequest)|true|none|
|» domainName|body|object|true|none|
|» domainEntry|body|object|true|none|
|» » id|body|object|false|none|
|» » name|body|object|false|none|
|» » target|body|object|false|none|
|» » isAlias|body|object|false|none|
|» » type|body|object|false|none|
|» » options|body|object|false|none|
|» » » **additionalProperties**|body|[string](#schemastring)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateDomainEntry|

> Example responses

> 200 Response

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="createdomainentry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDomainEntryResult](#schemacreatedomainentryresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGUISessionAccessDetails

<a id="opIdCreateGUISessionAccessDetails"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateGUISessionAccessDetails' \
  -d '{
    "resourceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails`

<p>Creates two URLs that are used to access a virtual computer’s graphical user interface (GUI) session. The primary URL initiates a web-based NICE DCV session to the virtual computer's application. The secondary URL initiates a web-based NICE DCV session to the virtual computer's operating session. </p> <p>Use <code>StartGUISession</code> to open the session.</p>

> Body parameter

```json
{
  "resourceName": {}
}
```

<h3 id="createguisessionaccessdetails-parameters">Parameters</h3>

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
|body|body|[CreateGUISessionAccessDetailsRequest](#schemacreateguisessionaccessdetailsrequest)|true|none|
|» resourceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateGUISessionAccessDetails|

> Example responses

> 200 Response

```json
{
  "resourceName": {},
  "status": {},
  "percentageComplete": {},
  "failureReason": {},
  "sessions": {}
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

<h3 id="createguisessionaccessdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGUISessionAccessDetailsResult](#schemacreateguisessionaccessdetailsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateInstanceSnapshot

<a id="opIdCreateInstanceSnapshot"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateInstanceSnapshot' \
  -d '{
    "instanceSnapshotName": {},
    "instanceName": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot`

<p>Creates a snapshot of a specific virtual private server, or <i>instance</i>. You can use a snapshot to create a new instance that is based on that snapshot.</p> <p>The <code>create instance snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "instanceSnapshotName": {},
  "instanceName": {},
  "tags": {}
}
```

<h3 id="createinstancesnapshot-parameters">Parameters</h3>

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
|body|body|[CreateInstanceSnapshotRequest](#schemacreateinstancesnapshotrequest)|true|none|
|» instanceSnapshotName|body|object|true|none|
|» instanceName|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateInstanceSnapshot|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="createinstancesnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateInstanceSnapshotResult](#schemacreateinstancesnapshotresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateInstances

<a id="opIdCreateInstances"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateInstances' \
  -d '{
    "instanceNames": {},
    "availabilityZone": {},
    "customImageName": {},
    "blueprintId": {},
    "bundleId": {},
    "userData": {},
    "keyPairName": {},
    "tags": {},
    "addOns": {},
    "ipAddressType": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateInstances`

<p>Creates one or more Amazon Lightsail instances.</p> <p>The <code>create instances</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "instanceNames": {},
  "availabilityZone": {},
  "customImageName": {},
  "blueprintId": {},
  "bundleId": {},
  "userData": {},
  "keyPairName": {},
  "tags": {},
  "addOns": {},
  "ipAddressType": {}
}
```

<h3 id="createinstances-parameters">Parameters</h3>

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
|body|body|[CreateInstancesRequest](#schemacreateinstancesrequest)|true|none|
|» instanceNames|body|object|true|none|
|» availabilityZone|body|object|true|none|
|» customImageName|body|object|false|none|
|» blueprintId|body|object|true|none|
|» bundleId|body|object|true|none|
|» userData|body|object|false|none|
|» keyPairName|body|object|false|none|
|» tags|body|object|false|none|
|» addOns|body|object|false|none|
|» ipAddressType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateInstances|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="createinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateInstancesResult](#schemacreateinstancesresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateInstancesFromSnapshot

<a id="opIdCreateInstancesFromSnapshot"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateInstancesFromSnapshot' \
  -d '{
    "instanceNames": {},
    "attachedDiskMapping": {
      "property1": [
        {
          "originalDiskPath": {},
          "newDiskName": {}
        }
      ],
      "property2": [
        {
          "originalDiskPath": {},
          "newDiskName": {}
        }
      ]
    },
    "availabilityZone": {},
    "instanceSnapshotName": {},
    "bundleId": {},
    "userData": {},
    "keyPairName": {},
    "tags": {},
    "addOns": {},
    "ipAddressType": {},
    "sourceInstanceName": {},
    "restoreDate": {},
    "useLatestRestorableAutoSnapshot": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot`

<p>Creates one or more new instances from a manual or automatic snapshot of an instance.</p> <p>The <code>create instances from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "instanceNames": {},
  "attachedDiskMapping": {
    "property1": [
      {
        "originalDiskPath": {},
        "newDiskName": {}
      }
    ],
    "property2": [
      {
        "originalDiskPath": {},
        "newDiskName": {}
      }
    ]
  },
  "availabilityZone": {},
  "instanceSnapshotName": {},
  "bundleId": {},
  "userData": {},
  "keyPairName": {},
  "tags": {},
  "addOns": {},
  "ipAddressType": {},
  "sourceInstanceName": {},
  "restoreDate": {},
  "useLatestRestorableAutoSnapshot": {}
}
```

<h3 id="createinstancesfromsnapshot-parameters">Parameters</h3>

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
|body|body|[CreateInstancesFromSnapshotRequest](#schemacreateinstancesfromsnapshotrequest)|true|none|
|» instanceNames|body|object|true|none|
|» attachedDiskMapping|body|object|false|none|
|» » **additionalProperties**|body|[DiskMapList](#schemadiskmaplist)|false|none|
|» availabilityZone|body|object|true|none|
|» instanceSnapshotName|body|object|false|none|
|» bundleId|body|object|true|none|
|» userData|body|object|false|none|
|» keyPairName|body|object|false|none|
|» tags|body|object|false|none|
|» addOns|body|object|false|none|
|» ipAddressType|body|object|false|none|
|» sourceInstanceName|body|object|false|none|
|» restoreDate|body|object|false|none|
|» useLatestRestorableAutoSnapshot|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateInstancesFromSnapshot|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="createinstancesfromsnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateInstancesFromSnapshotResult](#schemacreateinstancesfromsnapshotresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateKeyPair

<a id="opIdCreateKeyPair"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateKeyPair' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateKeyPair' \
  -d '{
    "keyPairName": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateKeyPair`

<p>Creates a custom SSH key pair that you can use with an Amazon Lightsail instance.</p> <note> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html">DownloadDefaultKeyPair</a> action to create a Lightsail default key pair in an Amazon Web Services Region where a default key pair does not currently exist.</p> </note> <p>The <code>create key pair</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "keyPairName": {},
  "tags": {}
}
```

<h3 id="createkeypair-parameters">Parameters</h3>

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
|body|body|[CreateKeyPairRequest](#schemacreatekeypairrequest)|true|none|
|» keyPairName|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateKeyPair|

> Example responses

> 200 Response

```json
{
  "keyPair": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "fingerprint": {}
  },
  "publicKeyBase64": {},
  "privateKeyBase64": {},
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="createkeypair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateKeyPairResult](#schemacreatekeypairresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLoadBalancer

<a id="opIdCreateLoadBalancer"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateLoadBalancer' \
  -d '{
    "loadBalancerName": {},
    "instancePort": {},
    "healthCheckPath": {},
    "certificateName": {},
    "certificateDomainName": {},
    "certificateAlternativeNames": {},
    "tags": {},
    "ipAddressType": {},
    "tlsPolicyName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer`

<p>Creates a Lightsail load balancer. To learn more about deciding whether to load balance your application, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/configure-lightsail-instances-for-load-balancing">Configure your Lightsail instances for load balancing</a>. You can create up to 5 load balancers per AWS Region in your account.</p> <p>When you create a load balancer, you can specify a unique name and port settings. To change additional load balancer settings, use the <code>UpdateLoadBalancerAttribute</code> operation.</p> <p>The <code>create load balancer</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "loadBalancerName": {},
  "instancePort": {},
  "healthCheckPath": {},
  "certificateName": {},
  "certificateDomainName": {},
  "certificateAlternativeNames": {},
  "tags": {},
  "ipAddressType": {},
  "tlsPolicyName": {}
}
```

<h3 id="createloadbalancer-parameters">Parameters</h3>

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
|body|body|[CreateLoadBalancerRequest](#schemacreateloadbalancerrequest)|true|none|
|» loadBalancerName|body|object|true|none|
|» instancePort|body|object|true|none|
|» healthCheckPath|body|object|false|none|
|» certificateName|body|object|false|none|
|» certificateDomainName|body|object|false|none|
|» certificateAlternativeNames|body|object|false|none|
|» tags|body|object|false|none|
|» ipAddressType|body|object|false|none|
|» tlsPolicyName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateLoadBalancer|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="createloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLoadBalancerResult](#schemacreateloadbalancerresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLoadBalancerTlsCertificate

<a id="opIdCreateLoadBalancerTlsCertificate"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateLoadBalancerTlsCertificate' \
  -d '{
    "loadBalancerName": {},
    "certificateName": {},
    "certificateDomainName": {},
    "certificateAlternativeNames": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate`

<p>Creates an SSL/TLS certificate for an Amazon Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>The <code>CreateLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "loadBalancerName": {},
  "certificateName": {},
  "certificateDomainName": {},
  "certificateAlternativeNames": {},
  "tags": {}
}
```

<h3 id="createloadbalancertlscertificate-parameters">Parameters</h3>

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
|body|body|[CreateLoadBalancerTlsCertificateRequest](#schemacreateloadbalancertlscertificaterequest)|true|none|
|» loadBalancerName|body|object|true|none|
|» certificateName|body|object|true|none|
|» certificateDomainName|body|object|true|none|
|» certificateAlternativeNames|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateLoadBalancerTlsCertificate|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="createloadbalancertlscertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLoadBalancerTlsCertificateResult](#schemacreateloadbalancertlscertificateresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRelationalDatabase

<a id="opIdCreateRelationalDatabase"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateRelationalDatabase' \
  -d '{
    "relationalDatabaseName": {},
    "availabilityZone": {},
    "relationalDatabaseBlueprintId": {},
    "relationalDatabaseBundleId": {},
    "masterDatabaseName": {},
    "masterUsername": {},
    "masterUserPassword": {},
    "preferredBackupWindow": {},
    "preferredMaintenanceWindow": {},
    "publiclyAccessible": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase`

<p>Creates a new database in Amazon Lightsail.</p> <p>The <code>create relational database</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "relationalDatabaseName": {},
  "availabilityZone": {},
  "relationalDatabaseBlueprintId": {},
  "relationalDatabaseBundleId": {},
  "masterDatabaseName": {},
  "masterUsername": {},
  "masterUserPassword": {},
  "preferredBackupWindow": {},
  "preferredMaintenanceWindow": {},
  "publiclyAccessible": {},
  "tags": {}
}
```

<h3 id="createrelationaldatabase-parameters">Parameters</h3>

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
|body|body|[CreateRelationalDatabaseRequest](#schemacreaterelationaldatabaserequest)|true|none|
|» relationalDatabaseName|body|object|true|none|
|» availabilityZone|body|object|false|none|
|» relationalDatabaseBlueprintId|body|object|true|none|
|» relationalDatabaseBundleId|body|object|true|none|
|» masterDatabaseName|body|object|true|none|
|» masterUsername|body|object|true|none|
|» masterUserPassword|body|object|false|none|
|» preferredBackupWindow|body|object|false|none|
|» preferredMaintenanceWindow|body|object|false|none|
|» publiclyAccessible|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateRelationalDatabase|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="createrelationaldatabase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRelationalDatabaseResult](#schemacreaterelationaldatabaseresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRelationalDatabaseFromSnapshot

<a id="opIdCreateRelationalDatabaseFromSnapshot"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateRelationalDatabaseFromSnapshot' \
  -d '{
    "relationalDatabaseName": {},
    "availabilityZone": {},
    "publiclyAccessible": {},
    "relationalDatabaseSnapshotName": {},
    "relationalDatabaseBundleId": {},
    "sourceRelationalDatabaseName": {},
    "restoreTime": {},
    "useLatestRestorableTime": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot`

<p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p> <p>You can create a new database from a snapshot in if something goes wrong with your original database, or to change it to a different plan, such as a high availability or standard plan.</p> <p>The <code>create relational database from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "relationalDatabaseName": {},
  "availabilityZone": {},
  "publiclyAccessible": {},
  "relationalDatabaseSnapshotName": {},
  "relationalDatabaseBundleId": {},
  "sourceRelationalDatabaseName": {},
  "restoreTime": {},
  "useLatestRestorableTime": {},
  "tags": {}
}
```

<h3 id="createrelationaldatabasefromsnapshot-parameters">Parameters</h3>

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
|body|body|[CreateRelationalDatabaseFromSnapshotRequest](#schemacreaterelationaldatabasefromsnapshotrequest)|true|none|
|» relationalDatabaseName|body|object|true|none|
|» availabilityZone|body|object|false|none|
|» publiclyAccessible|body|object|false|none|
|» relationalDatabaseSnapshotName|body|object|false|none|
|» relationalDatabaseBundleId|body|object|false|none|
|» sourceRelationalDatabaseName|body|object|false|none|
|» restoreTime|body|object|false|none|
|» useLatestRestorableTime|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateRelationalDatabaseFromSnapshot|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="createrelationaldatabasefromsnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRelationalDatabaseFromSnapshotResult](#schemacreaterelationaldatabasefromsnapshotresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRelationalDatabaseSnapshot

<a id="opIdCreateRelationalDatabaseSnapshot"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.CreateRelationalDatabaseSnapshot' \
  -d '{
    "relationalDatabaseName": {},
    "relationalDatabaseSnapshotName": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot`

<p>Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups, to make copies of a database, and to save data before deleting a database.</p> <p>The <code>create relational database snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "relationalDatabaseName": {},
  "relationalDatabaseSnapshotName": {},
  "tags": {}
}
```

<h3 id="createrelationaldatabasesnapshot-parameters">Parameters</h3>

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
|body|body|[CreateRelationalDatabaseSnapshotRequest](#schemacreaterelationaldatabasesnapshotrequest)|true|none|
|» relationalDatabaseName|body|object|true|none|
|» relationalDatabaseSnapshotName|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.CreateRelationalDatabaseSnapshot|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="createrelationaldatabasesnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRelationalDatabaseSnapshotResult](#schemacreaterelationaldatabasesnapshotresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAlarm

<a id="opIdDeleteAlarm"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteAlarm' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteAlarm' \
  -d '{
    "alarmName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteAlarm`

<p>Deletes an alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>

> Body parameter

```json
{
  "alarmName": {}
}
```

<h3 id="deletealarm-parameters">Parameters</h3>

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
|body|body|[DeleteAlarmRequest](#schemadeletealarmrequest)|true|none|
|» alarmName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteAlarm|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="deletealarm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAlarmResult](#schemadeletealarmresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|483|483|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAutoSnapshot

<a id="opIdDeleteAutoSnapshot"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteAutoSnapshot' \
  -d '{
    "resourceName": {},
    "date": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot`

Deletes an automatic snapshot of an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.

> Body parameter

```json
{
  "resourceName": {},
  "date": {}
}
```

<h3 id="deleteautosnapshot-parameters">Parameters</h3>

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
|body|body|[DeleteAutoSnapshotRequest](#schemadeleteautosnapshotrequest)|true|none|
|» resourceName|body|object|true|none|
|» date|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteAutoSnapshot|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="deleteautosnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAutoSnapshotResult](#schemadeleteautosnapshotresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucket

<a id="opIdDeleteBucket"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteBucket' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteBucket' \
  -d '{
    "bucketName": {},
    "forceDelete": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteBucket`

<p>Deletes a Amazon Lightsail bucket.</p> <note> <p>When you delete your bucket, the bucket name is released and can be reused for a new bucket in your account or another Amazon Web Services account.</p> </note>

> Body parameter

```json
{
  "bucketName": {},
  "forceDelete": {}
}
```

<h3 id="deletebucket-parameters">Parameters</h3>

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
|body|body|[DeleteBucketRequest](#schemadeletebucketrequest)|true|none|
|» bucketName|body|object|true|none|
|» forceDelete|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteBucket|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="deletebucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBucketResult](#schemadeletebucketresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucketAccessKey

<a id="opIdDeleteBucketAccessKey"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteBucketAccessKey' \
  -d '{
    "bucketName": {},
    "accessKeyId": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey`

<p>Deletes an access key for the specified Amazon Lightsail bucket.</p> <p>We recommend that you delete an access key if the secret access key is compromised.</p> <p>For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

> Body parameter

```json
{
  "bucketName": {},
  "accessKeyId": {}
}
```

<h3 id="deletebucketaccesskey-parameters">Parameters</h3>

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
|body|body|[DeleteBucketAccessKeyRequest](#schemadeletebucketaccesskeyrequest)|true|none|
|» bucketName|body|object|true|none|
|» accessKeyId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteBucketAccessKey|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="deletebucketaccesskey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBucketAccessKeyResult](#schemadeletebucketaccesskeyresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCertificate

<a id="opIdDeleteCertificate"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteCertificate' \
  -d '{
    "certificateName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteCertificate`

<p>Deletes an SSL/TLS certificate for your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Certificates that are currently attached to a distribution cannot be deleted. Use the <code>DetachCertificateFromDistribution</code> action to detach a certificate from a distribution.</p>

> Body parameter

```json
{
  "certificateName": {}
}
```

<h3 id="deletecertificate-parameters">Parameters</h3>

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
|body|body|[DeleteCertificateRequest](#schemadeletecertificaterequest)|true|none|
|» certificateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteCertificate|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="deletecertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCertificateResult](#schemadeletecertificateresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteContactMethod

<a id="opIdDeleteContactMethod"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteContactMethod' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteContactMethod' \
  -d '{
    "protocol": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteContactMethod`

<p>Deletes a contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>

> Body parameter

```json
{
  "protocol": {}
}
```

<h3 id="deletecontactmethod-parameters">Parameters</h3>

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
|body|body|[DeleteContactMethodRequest](#schemadeletecontactmethodrequest)|true|none|
|» protocol|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteContactMethod|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="deletecontactmethod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteContactMethodResult](#schemadeletecontactmethodresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|483|483|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteContainerImage

<a id="opIdDeleteContainerImage"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteContainerImage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteContainerImage' \
  -d '{
    "serviceName": {},
    "image": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteContainerImage`

Deletes a container image that is registered to your Amazon Lightsail container service.

> Body parameter

```json
{
  "serviceName": {},
  "image": {}
}
```

<h3 id="deletecontainerimage-parameters">Parameters</h3>

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
|body|body|[DeleteContainerImageRequest](#schemadeletecontainerimagerequest)|true|none|
|» serviceName|body|object|true|none|
|» image|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteContainerImage|

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

<h3 id="deletecontainerimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteContainerImageResult](#schemadeletecontainerimageresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteContainerService

<a id="opIdDeleteContainerService"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteContainerService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteContainerService' \
  -d '{
    "serviceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteContainerService`

Deletes your Amazon Lightsail container service.

> Body parameter

```json
{
  "serviceName": {}
}
```

<h3 id="deletecontainerservice-parameters">Parameters</h3>

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
|body|body|[DeleteContainerServiceRequest](#schemadeletecontainerservicerequest)|true|none|
|» serviceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteContainerService|

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

<h3 id="deletecontainerservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteContainerServiceResult](#schemadeletecontainerserviceresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDisk

<a id="opIdDeleteDisk"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteDisk' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteDisk' \
  -d '{
    "diskName": {},
    "forceDeleteAddOns": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteDisk`

<p>Deletes the specified block storage disk. The disk must be in the <code>available</code> state (not attached to a Lightsail instance).</p> <note> <p>The disk may remain in the <code>deleting</code> state for several minutes.</p> </note> <p>The <code>delete disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "diskName": {},
  "forceDeleteAddOns": {}
}
```

<h3 id="deletedisk-parameters">Parameters</h3>

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
|body|body|[DeleteDiskRequest](#schemadeletediskrequest)|true|none|
|» diskName|body|object|true|none|
|» forceDeleteAddOns|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteDisk|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="deletedisk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDiskResult](#schemadeletediskresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDiskSnapshot

<a id="opIdDeleteDiskSnapshot"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteDiskSnapshot' \
  -d '{
    "diskSnapshotName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot`

<p>Deletes the specified disk snapshot.</p> <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the disk.</p> <p>The <code>delete disk snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "diskSnapshotName": {}
}
```

<h3 id="deletedisksnapshot-parameters">Parameters</h3>

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
|body|body|[DeleteDiskSnapshotRequest](#schemadeletedisksnapshotrequest)|true|none|
|» diskSnapshotName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteDiskSnapshot|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="deletedisksnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDiskSnapshotResult](#schemadeletedisksnapshotresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDistribution

<a id="opIdDeleteDistribution"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteDistribution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteDistribution' \
  -d '{
    "distributionName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteDistribution`

Deletes your Amazon Lightsail content delivery network (CDN) distribution.

> Body parameter

```json
{
  "distributionName": {}
}
```

<h3 id="deletedistribution-parameters">Parameters</h3>

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
|body|body|[DeleteDistributionRequest](#schemadeletedistributionrequest)|true|none|
|» distributionName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteDistribution|

> Example responses

> 200 Response

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="deletedistribution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDistributionResult](#schemadeletedistributionresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDomain

<a id="opIdDeleteDomain"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteDomain' \
  -d '{
    "domainName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteDomain`

<p>Deletes the specified domain recordset and all of its domain records.</p> <p>The <code>delete domain</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "domainName": {}
}
```

<h3 id="deletedomain-parameters">Parameters</h3>

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
|body|body|[DeleteDomainRequest](#schemadeletedomainrequest)|true|none|
|» domainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteDomain|

> Example responses

> 200 Response

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="deletedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDomainResult](#schemadeletedomainresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDomainEntry

<a id="opIdDeleteDomainEntry"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteDomainEntry' \
  -d '{
    "domainName": {},
    "domainEntry": {
      "id": {},
      "name": {},
      "target": {},
      "isAlias": {},
      "type": {},
      "options": {
        "property1": "string",
        "property2": "string"
      }
    }
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry`

<p>Deletes a specific domain entry.</p> <p>The <code>delete domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "domainName": {},
  "domainEntry": {
    "id": {},
    "name": {},
    "target": {},
    "isAlias": {},
    "type": {},
    "options": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="deletedomainentry-parameters">Parameters</h3>

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
|body|body|[DeleteDomainEntryRequest](#schemadeletedomainentryrequest)|true|none|
|» domainName|body|object|true|none|
|» domainEntry|body|object|true|none|
|» » id|body|object|false|none|
|» » name|body|object|false|none|
|» » target|body|object|false|none|
|» » isAlias|body|object|false|none|
|» » type|body|object|false|none|
|» » options|body|object|false|none|
|» » » **additionalProperties**|body|[string](#schemastring)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteDomainEntry|

> Example responses

> 200 Response

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="deletedomainentry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDomainEntryResult](#schemadeletedomainentryresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteInstance

<a id="opIdDeleteInstance"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteInstance' \
  -d '{
    "instanceName": {},
    "forceDeleteAddOns": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteInstance`

<p>Deletes an Amazon Lightsail instance.</p> <p>The <code>delete instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "instanceName": {},
  "forceDeleteAddOns": {}
}
```

<h3 id="deleteinstance-parameters">Parameters</h3>

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
|body|body|[DeleteInstanceRequest](#schemadeleteinstancerequest)|true|none|
|» instanceName|body|object|true|none|
|» forceDeleteAddOns|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteInstance|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="deleteinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteInstanceResult](#schemadeleteinstanceresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteInstanceSnapshot

<a id="opIdDeleteInstanceSnapshot"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteInstanceSnapshot' \
  -d '{
    "instanceSnapshotName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot`

<p>Deletes a specific snapshot of a virtual private server (or <i>instance</i>).</p> <p>The <code>delete instance snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "instanceSnapshotName": {}
}
```

<h3 id="deleteinstancesnapshot-parameters">Parameters</h3>

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
|body|body|[DeleteInstanceSnapshotRequest](#schemadeleteinstancesnapshotrequest)|true|none|
|» instanceSnapshotName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteInstanceSnapshot|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="deleteinstancesnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteInstanceSnapshotResult](#schemadeleteinstancesnapshotresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteKeyPair

<a id="opIdDeleteKeyPair"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteKeyPair' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteKeyPair' \
  -d '{
    "keyPairName": {},
    "expectedFingerprint": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteKeyPair`

<p>Deletes the specified key pair by removing the public key from Amazon Lightsail.</p> <p>You can delete key pairs that were created using the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ImportKeyPair.html">ImportKeyPair</a> and <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateKeyPair.html">CreateKeyPair</a> actions, as well as the Lightsail default key pair. A new default key pair will not be created unless you launch an instance without specifying a custom key pair, or you call the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html">DownloadDefaultKeyPair</a> API. </p> <p>The <code>delete key pair</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>key pair name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "keyPairName": {},
  "expectedFingerprint": {}
}
```

<h3 id="deletekeypair-parameters">Parameters</h3>

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
|body|body|[DeleteKeyPairRequest](#schemadeletekeypairrequest)|true|none|
|» keyPairName|body|object|true|none|
|» expectedFingerprint|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteKeyPair|

> Example responses

> 200 Response

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="deletekeypair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteKeyPairResult](#schemadeletekeypairresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteKnownHostKeys

<a id="opIdDeleteKnownHostKeys"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteKnownHostKeys' \
  -d '{
    "instanceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys`

<p>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance. This operation enables the Lightsail browser-based SSH or RDP clients to connect to the instance after a host key mismatch.</p> <important> <p>Perform this operation only if you were expecting the host key or certificate mismatch or if you are familiar with the new host key or certificate on the instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-troubleshooting-browser-based-ssh-rdp-client-connection">Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP client</a>.</p> </important>

> Body parameter

```json
{
  "instanceName": {}
}
```

<h3 id="deleteknownhostkeys-parameters">Parameters</h3>

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
|body|body|[DeleteKnownHostKeysRequest](#schemadeleteknownhostkeysrequest)|true|none|
|» instanceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteKnownHostKeys|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="deleteknownhostkeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteKnownHostKeysResult](#schemadeleteknownhostkeysresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLoadBalancer

<a id="opIdDeleteLoadBalancer"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteLoadBalancer' \
  -d '{
    "loadBalancerName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer`

<p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the load balancer is deleted, you will need to create a new load balancer, create a new certificate, and verify domain ownership again.</p> <p>The <code>delete load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "loadBalancerName": {}
}
```

<h3 id="deleteloadbalancer-parameters">Parameters</h3>

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
|body|body|[DeleteLoadBalancerRequest](#schemadeleteloadbalancerrequest)|true|none|
|» loadBalancerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteLoadBalancer|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="deleteloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLoadBalancerResult](#schemadeleteloadbalancerresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLoadBalancerTlsCertificate

<a id="opIdDeleteLoadBalancerTlsCertificate"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteLoadBalancerTlsCertificate' \
  -d '{
    "loadBalancerName": {},
    "certificateName": {},
    "force": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate`

<p>Deletes an SSL/TLS certificate associated with a Lightsail load balancer.</p> <p>The <code>DeleteLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "loadBalancerName": {},
  "certificateName": {},
  "force": {}
}
```

<h3 id="deleteloadbalancertlscertificate-parameters">Parameters</h3>

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
|body|body|[DeleteLoadBalancerTlsCertificateRequest](#schemadeleteloadbalancertlscertificaterequest)|true|none|
|» loadBalancerName|body|object|true|none|
|» certificateName|body|object|true|none|
|» force|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteLoadBalancerTlsCertificate|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="deleteloadbalancertlscertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLoadBalancerTlsCertificateResult](#schemadeleteloadbalancertlscertificateresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRelationalDatabase

<a id="opIdDeleteRelationalDatabase"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteRelationalDatabase' \
  -d '{
    "relationalDatabaseName": {},
    "skipFinalSnapshot": {},
    "finalRelationalDatabaseSnapshotName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase`

<p>Deletes a database in Amazon Lightsail.</p> <p>The <code>delete relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "relationalDatabaseName": {},
  "skipFinalSnapshot": {},
  "finalRelationalDatabaseSnapshotName": {}
}
```

<h3 id="deleterelationaldatabase-parameters">Parameters</h3>

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
|body|body|[DeleteRelationalDatabaseRequest](#schemadeleterelationaldatabaserequest)|true|none|
|» relationalDatabaseName|body|object|true|none|
|» skipFinalSnapshot|body|object|false|none|
|» finalRelationalDatabaseSnapshotName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteRelationalDatabase|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="deleterelationaldatabase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRelationalDatabaseResult](#schemadeleterelationaldatabaseresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRelationalDatabaseSnapshot

<a id="opIdDeleteRelationalDatabaseSnapshot"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DeleteRelationalDatabaseSnapshot' \
  -d '{
    "relationalDatabaseSnapshotName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot`

<p>Deletes a database snapshot in Amazon Lightsail.</p> <p>The <code>delete relational database snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "relationalDatabaseSnapshotName": {}
}
```

<h3 id="deleterelationaldatabasesnapshot-parameters">Parameters</h3>

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
|body|body|[DeleteRelationalDatabaseSnapshotRequest](#schemadeleterelationaldatabasesnapshotrequest)|true|none|
|» relationalDatabaseSnapshotName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DeleteRelationalDatabaseSnapshot|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="deleterelationaldatabasesnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRelationalDatabaseSnapshotResult](#schemadeleterelationaldatabasesnapshotresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetachCertificateFromDistribution

<a id="opIdDetachCertificateFromDistribution"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DetachCertificateFromDistribution' \
  -d '{
    "distributionName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution`

<p>Detaches an SSL/TLS certificate from your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After the certificate is detached, your distribution stops accepting traffic for all of the domains that are associated with the certificate.</p>

> Body parameter

```json
{
  "distributionName": {}
}
```

<h3 id="detachcertificatefromdistribution-parameters">Parameters</h3>

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
|body|body|[DetachCertificateFromDistributionRequest](#schemadetachcertificatefromdistributionrequest)|true|none|
|» distributionName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DetachCertificateFromDistribution|

> Example responses

> 200 Response

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="detachcertificatefromdistribution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachCertificateFromDistributionResult](#schemadetachcertificatefromdistributionresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetachDisk

<a id="opIdDetachDisk"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DetachDisk' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DetachDisk' \
  -d '{
    "diskName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DetachDisk`

<p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount any file systems on the device within your operating system before stopping the instance and detaching the disk.</p> <p>The <code>detach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "diskName": {}
}
```

<h3 id="detachdisk-parameters">Parameters</h3>

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
|body|body|[DetachDiskRequest](#schemadetachdiskrequest)|true|none|
|» diskName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DetachDisk|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="detachdisk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachDiskResult](#schemadetachdiskresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetachInstancesFromLoadBalancer

<a id="opIdDetachInstancesFromLoadBalancer"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DetachInstancesFromLoadBalancer' \
  -d '{
    "loadBalancerName": {},
    "instanceNames": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer`

<p>Detaches the specified instances from a Lightsail load balancer.</p> <p>This operation waits until the instances are no longer needed before they are detached from the load balancer.</p> <p>The <code>detach instances from load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "loadBalancerName": {},
  "instanceNames": {}
}
```

<h3 id="detachinstancesfromloadbalancer-parameters">Parameters</h3>

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
|body|body|[DetachInstancesFromLoadBalancerRequest](#schemadetachinstancesfromloadbalancerrequest)|true|none|
|» loadBalancerName|body|object|true|none|
|» instanceNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DetachInstancesFromLoadBalancer|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="detachinstancesfromloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachInstancesFromLoadBalancerResult](#schemadetachinstancesfromloadbalancerresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetachStaticIp

<a id="opIdDetachStaticIp"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DetachStaticIp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DetachStaticIp' \
  -d '{
    "staticIpName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DetachStaticIp`

Detaches a static IP from the Amazon Lightsail instance to which it is attached.

> Body parameter

```json
{
  "staticIpName": {}
}
```

<h3 id="detachstaticip-parameters">Parameters</h3>

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
|body|body|[DetachStaticIpRequest](#schemadetachstaticiprequest)|true|none|
|» staticIpName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DetachStaticIp|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="detachstaticip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachStaticIpResult](#schemadetachstaticipresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableAddOn

<a id="opIdDisableAddOn"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DisableAddOn' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DisableAddOn' \
  -d '{
    "addOnType": {},
    "resourceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.DisableAddOn`

Disables an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.

> Body parameter

```json
{
  "addOnType": {},
  "resourceName": {}
}
```

<h3 id="disableaddon-parameters">Parameters</h3>

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
|body|body|[DisableAddOnRequest](#schemadisableaddonrequest)|true|none|
|» addOnType|body|object|true|none|
|» resourceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DisableAddOn|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="disableaddon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableAddOnResult](#schemadisableaddonresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DownloadDefaultKeyPair

<a id="opIdDownloadDefaultKeyPair"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.DownloadDefaultKeyPair' \
  -d '{}'
```

`POST /#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair`

<p>Downloads the regional Amazon Lightsail default key pair.</p> <p>This action also creates a Lightsail default key pair if a default key pair does not currently exist in the Amazon Web Services Region.</p>

> Body parameter

```json
{}
```

<h3 id="downloaddefaultkeypair-parameters">Parameters</h3>

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
|body|body|[DownloadDefaultKeyPairRequest](#schemadownloaddefaultkeypairrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.DownloadDefaultKeyPair|

> Example responses

> 200 Response

```json
{
  "publicKeyBase64": {},
  "privateKeyBase64": {},
  "createdAt": {}
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

<h3 id="downloaddefaultkeypair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DownloadDefaultKeyPairResult](#schemadownloaddefaultkeypairresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableAddOn

<a id="opIdEnableAddOn"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.EnableAddOn' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.EnableAddOn' \
  -d '{
    "resourceName": {},
    "addOnRequest": {
      "addOnType": {},
      "autoSnapshotAddOnRequest": {
        "snapshotTimeOfDay": {}
      },
      "stopInstanceOnIdleRequest": {
        "threshold": {},
        "duration": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.EnableAddOn`

Enables or modifies an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.

> Body parameter

```json
{
  "resourceName": {},
  "addOnRequest": {
    "addOnType": {},
    "autoSnapshotAddOnRequest": {
      "snapshotTimeOfDay": {}
    },
    "stopInstanceOnIdleRequest": {
      "threshold": {},
      "duration": {}
    }
  }
}
```

<h3 id="enableaddon-parameters">Parameters</h3>

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
|body|body|[EnableAddOnRequest](#schemaenableaddonrequest)|true|none|
|» resourceName|body|object|true|none|
|» addOnRequest|body|object|true|none|
|» » addOnType|body|object|true|none|
|» » autoSnapshotAddOnRequest|body|object|false|none|
|» » » snapshotTimeOfDay|body|object|false|none|
|» » stopInstanceOnIdleRequest|body|object|false|none|
|» » » threshold|body|object|false|none|
|» » » duration|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.EnableAddOn|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="enableaddon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableAddOnResult](#schemaenableaddonresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExportSnapshot

<a id="opIdExportSnapshot"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.ExportSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.ExportSnapshot' \
  -d '{
    "sourceSnapshotName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.ExportSnapshot`

<p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2). This operation results in an export snapshot record that can be used with the <code>create cloud formation stack</code> operation to create new Amazon EC2 instances.</p> <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the source Lightsail snapshot.</p> <p/> <p>The <code>export snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>source snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p> <note> <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code> operations to get a list of snapshots that you can export to Amazon EC2.</p> </note>

> Body parameter

```json
{
  "sourceSnapshotName": {}
}
```

<h3 id="exportsnapshot-parameters">Parameters</h3>

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
|body|body|[ExportSnapshotRequest](#schemaexportsnapshotrequest)|true|none|
|» sourceSnapshotName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.ExportSnapshot|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="exportsnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportSnapshotResult](#schemaexportsnapshotresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetActiveNames

<a id="opIdGetActiveNames"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetActiveNames' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetActiveNames' \
  -d '{
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetActiveNames`

Returns the names of all active (not deleted) resources.

> Body parameter

```json
{
  "pageToken": {}
}
```

<h3 id="getactivenames-parameters">Parameters</h3>

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
|body|body|[GetActiveNamesRequest](#schemagetactivenamesrequest)|true|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetActiveNames|

> Example responses

> 200 Response

```json
{
  "activeNames": {},
  "nextPageToken": {}
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

<h3 id="getactivenames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetActiveNamesResult](#schemagetactivenamesresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAlarms

<a id="opIdGetAlarms"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetAlarms' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetAlarms' \
  -d '{
    "alarmName": {},
    "pageToken": {},
    "monitoredResourceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetAlarms`

<p>Returns information about the configured alarms. Specify an alarm name in your request to return information about a specific alarm, or specify a monitored resource name to return information about all alarms for a specific resource.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>

> Body parameter

```json
{
  "alarmName": {},
  "pageToken": {},
  "monitoredResourceName": {}
}
```

<h3 id="getalarms-parameters">Parameters</h3>

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
|body|body|[GetAlarmsRequest](#schemagetalarmsrequest)|true|none|
|» alarmName|body|object|false|none|
|» pageToken|body|object|false|none|
|» monitoredResourceName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetAlarms|

> Example responses

> 200 Response

```json
{
  "alarms": {},
  "nextPageToken": {}
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

<h3 id="getalarms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAlarmsResult](#schemagetalarmsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|483|483|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAutoSnapshots

<a id="opIdGetAutoSnapshots"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetAutoSnapshots' \
  -d '{
    "resourceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots`

Returns the available automatic snapshots for an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.

> Body parameter

```json
{
  "resourceName": {}
}
```

<h3 id="getautosnapshots-parameters">Parameters</h3>

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
|body|body|[GetAutoSnapshotsRequest](#schemagetautosnapshotsrequest)|true|none|
|» resourceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetAutoSnapshots|

> Example responses

> 200 Response

```json
{
  "resourceName": {},
  "resourceType": {},
  "autoSnapshots": {}
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

<h3 id="getautosnapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAutoSnapshotsResult](#schemagetautosnapshotsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBlueprints

<a id="opIdGetBlueprints"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetBlueprints' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetBlueprints' \
  -d '{
    "includeInactive": {},
    "pageToken": {},
    "appCategory": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetBlueprints`

<p>Returns the list of available instance images, or <i>blueprints</i>. You can use a blueprint to create a new instance already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose.</p> <note> <p>Use active blueprints when creating new instances. Inactive blueprints are listed to support customers with existing instances and are not necessarily available to create new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.</p> </note>

> Body parameter

```json
{
  "includeInactive": {},
  "pageToken": {},
  "appCategory": {}
}
```

<h3 id="getblueprints-parameters">Parameters</h3>

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
|body|body|[GetBlueprintsRequest](#schemagetblueprintsrequest)|true|none|
|» includeInactive|body|object|false|none|
|» pageToken|body|object|false|none|
|» appCategory|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetBlueprints|

> Example responses

> 200 Response

```json
{
  "blueprints": {},
  "nextPageToken": {}
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

<h3 id="getblueprints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBlueprintsResult](#schemagetblueprintsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketAccessKeys

<a id="opIdGetBucketAccessKeys"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetBucketAccessKeys' \
  -d '{
    "bucketName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys`

<p>Returns the existing access key IDs for the specified Amazon Lightsail bucket.</p> <important> <p>This action does not return the secret access key value of an access key. You can get a secret access key only when you create it from the response of the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action. If you lose the secret access key, you must create a new access key.</p> </important>

> Body parameter

```json
{
  "bucketName": {}
}
```

<h3 id="getbucketaccesskeys-parameters">Parameters</h3>

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
|body|body|[GetBucketAccessKeysRequest](#schemagetbucketaccesskeysrequest)|true|none|
|» bucketName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetBucketAccessKeys|

> Example responses

> 200 Response

```json
{
  "accessKeys": {}
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

<h3 id="getbucketaccesskeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketAccessKeysResult](#schemagetbucketaccesskeysresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketBundles

<a id="opIdGetBucketBundles"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetBucketBundles' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetBucketBundles' \
  -d '{
    "includeInactive": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetBucketBundles`

<p>Returns the bundles that you can apply to a Amazon Lightsail bucket.</p> <p>The bucket bundle specifies the monthly cost, storage quota, and data transfer quota for a bucket.</p> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html">UpdateBucketBundle</a> action to update the bundle for a bucket.</p>

> Body parameter

```json
{
  "includeInactive": {}
}
```

<h3 id="getbucketbundles-parameters">Parameters</h3>

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
|body|body|[GetBucketBundlesRequest](#schemagetbucketbundlesrequest)|true|none|
|» includeInactive|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetBucketBundles|

> Example responses

> 200 Response

```json
{
  "bundles": {}
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

<h3 id="getbucketbundles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketBundlesResult](#schemagetbucketbundlesresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|ServiceException|[ServiceException](#schemaserviceexception)|
|483|483|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketMetricData

<a id="opIdGetBucketMetricData"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetBucketMetricData' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetBucketMetricData' \
  -d '{
    "bucketName": {},
    "metricName": {},
    "startTime": {},
    "endTime": {},
    "period": {},
    "statistics": {},
    "unit": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetBucketMetricData`

<p>Returns the data points of a specific metric for an Amazon Lightsail bucket.</p> <p>Metrics report the utilization of a bucket. View and collect metric data regularly to monitor the number of objects stored in a bucket (including object versions) and the storage space used by those objects.</p>

> Body parameter

```json
{
  "bucketName": {},
  "metricName": {},
  "startTime": {},
  "endTime": {},
  "period": {},
  "statistics": {},
  "unit": {}
}
```

<h3 id="getbucketmetricdata-parameters">Parameters</h3>

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
|body|body|[GetBucketMetricDataRequest](#schemagetbucketmetricdatarequest)|true|none|
|» bucketName|body|object|true|none|
|» metricName|body|object|true|none|
|» startTime|body|object|true|none|
|» endTime|body|object|true|none|
|» period|body|object|true|none|
|» statistics|body|object|true|none|
|» unit|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetBucketMetricData|

> Example responses

> 200 Response

```json
{
  "metricName": {},
  "metricData": {}
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

<h3 id="getbucketmetricdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketMetricDataResult](#schemagetbucketmetricdataresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBuckets

<a id="opIdGetBuckets"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetBuckets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetBuckets' \
  -d '{
    "bucketName": {},
    "pageToken": {},
    "includeConnectedResources": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetBuckets`

<p>Returns information about one or more Amazon Lightsail buckets. The information returned includes the synchronization status of the Amazon Simple Storage Service (Amazon S3) account-level block public access feature for your Lightsail buckets.</p> <p>For more information about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

> Body parameter

```json
{
  "bucketName": {},
  "pageToken": {},
  "includeConnectedResources": {}
}
```

<h3 id="getbuckets-parameters">Parameters</h3>

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
|body|body|[GetBucketsRequest](#schemagetbucketsrequest)|true|none|
|» bucketName|body|object|false|none|
|» pageToken|body|object|false|none|
|» includeConnectedResources|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetBuckets|

> Example responses

> 200 Response

```json
{
  "buckets": {},
  "nextPageToken": {},
  "accountLevelBpaSync": {
    "status": {},
    "lastSyncedAt": {},
    "message": {},
    "bpaImpactsLightsail": {}
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

<h3 id="getbuckets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketsResult](#schemagetbucketsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBundles

<a id="opIdGetBundles"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetBundles' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetBundles' \
  -d '{
    "includeInactive": {},
    "pageToken": {},
    "appCategory": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetBundles`

<p>Returns the bundles that you can apply to an Amazon Lightsail instance when you create it.</p> <p>A bundle describes the specifications of an instance, such as the monthly cost, amount of memory, the number of vCPUs, amount of storage space, and monthly network data transfer quota.</p> <note> <p>Bundles are referred to as <i>instance plans</i> in the Lightsail console.</p> </note>

> Body parameter

```json
{
  "includeInactive": {},
  "pageToken": {},
  "appCategory": {}
}
```

<h3 id="getbundles-parameters">Parameters</h3>

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
|body|body|[GetBundlesRequest](#schemagetbundlesrequest)|true|none|
|» includeInactive|body|object|false|none|
|» pageToken|body|object|false|none|
|» appCategory|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetBundles|

> Example responses

> 200 Response

```json
{
  "bundles": {},
  "nextPageToken": {}
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

<h3 id="getbundles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBundlesResult](#schemagetbundlesresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCertificates

<a id="opIdGetCertificates"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetCertificates' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetCertificates' \
  -d '{
    "certificateStatuses": {},
    "includeCertificateDetails": {},
    "certificateName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetCertificates`

<p>Returns information about one or more Amazon Lightsail SSL/TLS certificates.</p> <note> <p>To get a summary of a certificate, ommit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note>

> Body parameter

```json
{
  "certificateStatuses": {},
  "includeCertificateDetails": {},
  "certificateName": {}
}
```

<h3 id="getcertificates-parameters">Parameters</h3>

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
|body|body|[GetCertificatesRequest](#schemagetcertificatesrequest)|true|none|
|» certificateStatuses|body|object|false|none|
|» includeCertificateDetails|body|object|false|none|
|» certificateName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetCertificates|

> Example responses

> 200 Response

```json
{
  "certificates": {}
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

<h3 id="getcertificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCertificatesResult](#schemagetcertificatesresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCloudFormationStackRecords

<a id="opIdGetCloudFormationStackRecords"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetCloudFormationStackRecords' \
  -d '{
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords`

<p>Returns the CloudFormation stack record created as a result of the <code>create cloud formation stack</code> operation.</p> <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail snapshot.</p>

> Body parameter

```json
{
  "pageToken": {}
}
```

<h3 id="getcloudformationstackrecords-parameters">Parameters</h3>

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
|body|body|[GetCloudFormationStackRecordsRequest](#schemagetcloudformationstackrecordsrequest)|true|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetCloudFormationStackRecords|

> Example responses

> 200 Response

```json
{
  "cloudFormationStackRecords": {},
  "nextPageToken": {}
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

<h3 id="getcloudformationstackrecords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCloudFormationStackRecordsResult](#schemagetcloudformationstackrecordsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContactMethods

<a id="opIdGetContactMethods"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetContactMethods' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetContactMethods' \
  -d '{
    "protocols": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetContactMethods`

<p>Returns information about the configured contact methods. Specify a protocol in your request to return information about a specific contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>

> Body parameter

```json
{
  "protocols": {}
}
```

<h3 id="getcontactmethods-parameters">Parameters</h3>

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
|body|body|[GetContactMethodsRequest](#schemagetcontactmethodsrequest)|true|none|
|» protocols|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetContactMethods|

> Example responses

> 200 Response

```json
{
  "contactMethods": {}
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

<h3 id="getcontactmethods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContactMethodsResult](#schemagetcontactmethodsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContainerAPIMetadata

<a id="opIdGetContainerAPIMetadata"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetContainerAPIMetadata' \
  -d '{}'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata`

Returns information about Amazon Lightsail containers, such as the current version of the Lightsail Control (lightsailctl) plugin.

> Body parameter

```json
{}
```

<h3 id="getcontainerapimetadata-parameters">Parameters</h3>

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
|body|body|[GetContainerAPIMetadataRequest](#schemagetcontainerapimetadatarequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetContainerAPIMetadata|

> Example responses

> 200 Response

```json
{
  "metadata": {}
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

<h3 id="getcontainerapimetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContainerAPIMetadataResult](#schemagetcontainerapimetadataresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContainerImages

<a id="opIdGetContainerImages"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetContainerImages' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetContainerImages' \
  -d '{
    "serviceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetContainerImages`

<p>Returns the container images that are registered to your Amazon Lightsail container service.</p> <note> <p>If you created a deployment on your Lightsail container service that uses container images from a public registry like Docker Hub, those images are not returned as part of this action. Those images are not registered to your Lightsail container service.</p> </note>

> Body parameter

```json
{
  "serviceName": {}
}
```

<h3 id="getcontainerimages-parameters">Parameters</h3>

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
|body|body|[GetContainerImagesRequest](#schemagetcontainerimagesrequest)|true|none|
|» serviceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetContainerImages|

> Example responses

> 200 Response

```json
{
  "containerImages": {}
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

<h3 id="getcontainerimages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContainerImagesResult](#schemagetcontainerimagesresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContainerLog

<a id="opIdGetContainerLog"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetContainerLog' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetContainerLog' \
  -d '{
    "serviceName": {},
    "containerName": {},
    "startTime": {},
    "endTime": {},
    "filterPattern": {},
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetContainerLog`

<p>Returns the log events of a container of your Amazon Lightsail container service.</p> <p>If your container service has more than one node (i.e., a scale greater than 1), then the log events that are returned for the specified container are merged from all nodes on your container service.</p> <note> <p>Container logs are retained for a certain amount of time. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>

> Body parameter

```json
{
  "serviceName": {},
  "containerName": {},
  "startTime": {},
  "endTime": {},
  "filterPattern": {},
  "pageToken": {}
}
```

<h3 id="getcontainerlog-parameters">Parameters</h3>

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
|body|body|[GetContainerLogRequest](#schemagetcontainerlogrequest)|true|none|
|» serviceName|body|object|true|none|
|» containerName|body|object|true|none|
|» startTime|body|object|false|none|
|» endTime|body|object|false|none|
|» filterPattern|body|object|false|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetContainerLog|

> Example responses

> 200 Response

```json
{
  "logEvents": {},
  "nextPageToken": {}
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

<h3 id="getcontainerlog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContainerLogResult](#schemagetcontainerlogresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContainerServiceDeployments

<a id="opIdGetContainerServiceDeployments"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetContainerServiceDeployments' \
  -d '{
    "serviceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments`

<p>Returns the deployments for your Amazon Lightsail container service</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p> <p>The deployments are ordered by version in ascending order. The newest version is listed at the top of the response.</p> <note> <p>A set number of deployments are kept before the oldest one is replaced with the newest one. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>

> Body parameter

```json
{
  "serviceName": {}
}
```

<h3 id="getcontainerservicedeployments-parameters">Parameters</h3>

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
|body|body|[GetContainerServiceDeploymentsRequest](#schemagetcontainerservicedeploymentsrequest)|true|none|
|» serviceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetContainerServiceDeployments|

> Example responses

> 200 Response

```json
{
  "deployments": {}
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

<h3 id="getcontainerservicedeployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContainerServiceDeploymentsResult](#schemagetcontainerservicedeploymentsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContainerServiceMetricData

<a id="opIdGetContainerServiceMetricData"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetContainerServiceMetricData' \
  -d '{
    "serviceName": {},
    "metricName": {},
    "startTime": {},
    "endTime": {},
    "period": {},
    "statistics": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData`

<p>Returns the data points of a specific metric of your Amazon Lightsail container service.</p> <p>Metrics report the utilization of your resources. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

> Body parameter

```json
{
  "serviceName": {},
  "metricName": {},
  "startTime": {},
  "endTime": {},
  "period": {},
  "statistics": {}
}
```

<h3 id="getcontainerservicemetricdata-parameters">Parameters</h3>

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
|body|body|[GetContainerServiceMetricDataRequest](#schemagetcontainerservicemetricdatarequest)|true|none|
|» serviceName|body|object|true|none|
|» metricName|body|object|true|none|
|» startTime|body|object|true|none|
|» endTime|body|object|true|none|
|» period|body|object|true|none|
|» statistics|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetContainerServiceMetricData|

> Example responses

> 200 Response

```json
{
  "metricName": {},
  "metricData": {}
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

<h3 id="getcontainerservicemetricdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContainerServiceMetricDataResult](#schemagetcontainerservicemetricdataresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContainerServicePowers

<a id="opIdGetContainerServicePowers"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetContainerServicePowers' \
  -d '{}'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers`

<p>Returns the list of powers that can be specified for your Amazon Lightsail container services.</p> <p>The power specifies the amount of memory, the number of vCPUs, and the base price of the container service.</p>

> Body parameter

```json
{}
```

<h3 id="getcontainerservicepowers-parameters">Parameters</h3>

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
|body|body|[GetContainerServicePowersRequest](#schemagetcontainerservicepowersrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetContainerServicePowers|

> Example responses

> 200 Response

```json
{
  "powers": {}
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

<h3 id="getcontainerservicepowers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContainerServicePowersResult](#schemagetcontainerservicepowersresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContainerServices

<a id="opIdGetContainerServices"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetContainerServices' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetContainerServices' \
  -d '{
    "serviceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetContainerServices`

Returns information about one or more of your Amazon Lightsail container services.

> Body parameter

```json
{
  "serviceName": {}
}
```

<h3 id="getcontainerservices-parameters">Parameters</h3>

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
|body|body|[GetContainerServicesRequest](#schemagetcontainerservicesrequest)|true|none|
|» serviceName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetContainerServices|

> Example responses

> 200 Response

```json
{
  "containerServices": {}
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

<h3 id="getcontainerservices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContainerServicesListResult](#schemacontainerserviceslistresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCostEstimate

<a id="opIdGetCostEstimate"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetCostEstimate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetCostEstimate' \
  -d '{
    "resourceName": {},
    "startTime": {},
    "endTime": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetCostEstimate`

Retrieves information about the cost estimate for a specified resource. A cost estimate will not generate for a resource that has been deleted.

> Body parameter

```json
{
  "resourceName": {},
  "startTime": {},
  "endTime": {}
}
```

<h3 id="getcostestimate-parameters">Parameters</h3>

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
|body|body|[GetCostEstimateRequest](#schemagetcostestimaterequest)|true|none|
|» resourceName|body|object|true|none|
|» startTime|body|object|true|none|
|» endTime|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetCostEstimate|

> Example responses

> 200 Response

```json
{
  "resourcesBudgetEstimate": {}
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

<h3 id="getcostestimate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCostEstimateResult](#schemagetcostestimateresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDisk

<a id="opIdGetDisk"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetDisk' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetDisk' \
  -d '{
    "diskName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetDisk`

Returns information about a specific block storage disk.

> Body parameter

```json
{
  "diskName": {}
}
```

<h3 id="getdisk-parameters">Parameters</h3>

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
|body|body|[GetDiskRequest](#schemagetdiskrequest)|true|none|
|» diskName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetDisk|

> Example responses

> 200 Response

```json
{
  "disk": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "addOns": {},
    "sizeInGb": {},
    "isSystemDisk": {},
    "iops": {},
    "path": {},
    "state": {},
    "attachedTo": {},
    "isAttached": {},
    "attachmentState": {},
    "gbInUse": {},
    "autoMountStatus": {}
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

<h3 id="getdisk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDiskResult](#schemagetdiskresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDiskSnapshot

<a id="opIdGetDiskSnapshot"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetDiskSnapshot' \
  -d '{
    "diskSnapshotName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot`

Returns information about a specific block storage disk snapshot.

> Body parameter

```json
{
  "diskSnapshotName": {}
}
```

<h3 id="getdisksnapshot-parameters">Parameters</h3>

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
|body|body|[GetDiskSnapshotRequest](#schemagetdisksnapshotrequest)|true|none|
|» diskSnapshotName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetDiskSnapshot|

> Example responses

> 200 Response

```json
{
  "diskSnapshot": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "sizeInGb": {},
    "state": {},
    "progress": {},
    "fromDiskName": {},
    "fromDiskArn": {},
    "fromInstanceName": {},
    "fromInstanceArn": {},
    "isFromAutoSnapshot": {}
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

<h3 id="getdisksnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDiskSnapshotResult](#schemagetdisksnapshotresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDiskSnapshots

<a id="opIdGetDiskSnapshots"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetDiskSnapshots' \
  -d '{
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots`

Returns information about all block storage disk snapshots in your AWS account and region.

> Body parameter

```json
{
  "pageToken": {}
}
```

<h3 id="getdisksnapshots-parameters">Parameters</h3>

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
|body|body|[GetDiskSnapshotsRequest](#schemagetdisksnapshotsrequest)|true|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetDiskSnapshots|

> Example responses

> 200 Response

```json
{
  "diskSnapshots": {},
  "nextPageToken": {}
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

<h3 id="getdisksnapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDiskSnapshotsResult](#schemagetdisksnapshotsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDisks

<a id="opIdGetDisks"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetDisks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetDisks' \
  -d '{
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetDisks`

Returns information about all block storage disks in your AWS account and region.

> Body parameter

```json
{
  "pageToken": {}
}
```

<h3 id="getdisks-parameters">Parameters</h3>

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
|body|body|[GetDisksRequest](#schemagetdisksrequest)|true|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetDisks|

> Example responses

> 200 Response

```json
{
  "disks": {},
  "nextPageToken": {}
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

<h3 id="getdisks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDisksResult](#schemagetdisksresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDistributionBundles

<a id="opIdGetDistributionBundles"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetDistributionBundles' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetDistributionBundles' \
  -d '{}'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetDistributionBundles`

<p>Returns the bundles that can be applied to your Amazon Lightsail content delivery network (CDN) distributions.</p> <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution.</p>

> Body parameter

```json
{}
```

<h3 id="getdistributionbundles-parameters">Parameters</h3>

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
|body|body|[GetDistributionBundlesRequest](#schemagetdistributionbundlesrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetDistributionBundles|

> Example responses

> 200 Response

```json
{
  "bundles": {}
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

<h3 id="getdistributionbundles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDistributionBundlesResult](#schemagetdistributionbundlesresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDistributionLatestCacheReset

<a id="opIdGetDistributionLatestCacheReset"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetDistributionLatestCacheReset' \
  -d '{
    "distributionName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset`

Returns the timestamp and status of the last cache reset of a specific Amazon Lightsail content delivery network (CDN) distribution.

> Body parameter

```json
{
  "distributionName": {}
}
```

<h3 id="getdistributionlatestcachereset-parameters">Parameters</h3>

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
|body|body|[GetDistributionLatestCacheResetRequest](#schemagetdistributionlatestcacheresetrequest)|true|none|
|» distributionName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetDistributionLatestCacheReset|

> Example responses

> 200 Response

```json
{
  "status": {},
  "createTime": {}
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

<h3 id="getdistributionlatestcachereset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDistributionLatestCacheResetResult](#schemagetdistributionlatestcacheresetresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDistributionMetricData

<a id="opIdGetDistributionMetricData"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetDistributionMetricData' \
  -d '{
    "distributionName": {},
    "metricName": {},
    "startTime": {},
    "endTime": {},
    "period": {},
    "unit": {},
    "statistics": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData`

<p>Returns the data points of a specific metric for an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

> Body parameter

```json
{
  "distributionName": {},
  "metricName": {},
  "startTime": {},
  "endTime": {},
  "period": {},
  "unit": {},
  "statistics": {}
}
```

<h3 id="getdistributionmetricdata-parameters">Parameters</h3>

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
|body|body|[GetDistributionMetricDataRequest](#schemagetdistributionmetricdatarequest)|true|none|
|» distributionName|body|object|true|none|
|» metricName|body|object|true|none|
|» startTime|body|object|true|none|
|» endTime|body|object|true|none|
|» period|body|object|true|none|
|» unit|body|object|true|none|
|» statistics|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetDistributionMetricData|

> Example responses

> 200 Response

```json
{
  "metricName": {},
  "metricData": {}
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

<h3 id="getdistributionmetricdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDistributionMetricDataResult](#schemagetdistributionmetricdataresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDistributions

<a id="opIdGetDistributions"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetDistributions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetDistributions' \
  -d '{
    "distributionName": {},
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetDistributions`

Returns information about one or more of your Amazon Lightsail content delivery network (CDN) distributions.

> Body parameter

```json
{
  "distributionName": {},
  "pageToken": {}
}
```

<h3 id="getdistributions-parameters">Parameters</h3>

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
|body|body|[GetDistributionsRequest](#schemagetdistributionsrequest)|true|none|
|» distributionName|body|object|false|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetDistributions|

> Example responses

> 200 Response

```json
{
  "distributions": {},
  "nextPageToken": {}
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

<h3 id="getdistributions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDistributionsResult](#schemagetdistributionsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDomain

<a id="opIdGetDomain"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetDomain' \
  -d '{
    "domainName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetDomain`

Returns information about a specific domain recordset.

> Body parameter

```json
{
  "domainName": {}
}
```

<h3 id="getdomain-parameters">Parameters</h3>

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
|body|body|[GetDomainRequest](#schemagetdomainrequest)|true|none|
|» domainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetDomain|

> Example responses

> 200 Response

```json
{
  "domain": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "domainEntries": {},
    "registeredDomainDelegationInfo": {
      "nameServersUpdateState": {
        "code": {},
        "message": {}
      },
      "r53HostedZoneDeletionState": {
        "code": {},
        "message": {}
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

<h3 id="getdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDomainResult](#schemagetdomainresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDomains

<a id="opIdGetDomains"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetDomains' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetDomains' \
  -d '{
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetDomains`

Returns a list of all domains in the user's account.

> Body parameter

```json
{
  "pageToken": {}
}
```

<h3 id="getdomains-parameters">Parameters</h3>

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
|body|body|[GetDomainsRequest](#schemagetdomainsrequest)|true|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetDomains|

> Example responses

> 200 Response

```json
{
  "domains": {},
  "nextPageToken": {}
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

<h3 id="getdomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDomainsResult](#schemagetdomainsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetExportSnapshotRecords

<a id="opIdGetExportSnapshotRecords"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetExportSnapshotRecords' \
  -d '{
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords`

<p>Returns all export snapshot records created as a result of the <code>export snapshot</code> operation.</p> <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related resources with the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCloudFormationStack.html">CreateCloudFormationStack</a> action.</p>

> Body parameter

```json
{
  "pageToken": {}
}
```

<h3 id="getexportsnapshotrecords-parameters">Parameters</h3>

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
|body|body|[GetExportSnapshotRecordsRequest](#schemagetexportsnapshotrecordsrequest)|true|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetExportSnapshotRecords|

> Example responses

> 200 Response

```json
{
  "exportSnapshotRecords": {},
  "nextPageToken": {}
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

<h3 id="getexportsnapshotrecords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetExportSnapshotRecordsResult](#schemagetexportsnapshotrecordsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInstance

<a id="opIdGetInstance"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetInstance' \
  -d '{
    "instanceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetInstance`

Returns information about a specific Amazon Lightsail instance, which is a virtual private server.

> Body parameter

```json
{
  "instanceName": {}
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
|» instanceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetInstance|

> Example responses

> 200 Response

```json
{
  "instance": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "blueprintId": {},
    "blueprintName": {},
    "bundleId": {},
    "addOns": {},
    "isStaticIp": {},
    "privateIpAddress": {},
    "publicIpAddress": {},
    "ipv6Addresses": {},
    "ipAddressType": {},
    "hardware": {
      "cpuCount": {},
      "disks": {},
      "ramSizeInGb": {}
    },
    "networking": {
      "monthlyTransfer": {
        "gbPerMonthAllocated": {}
      },
      "ports": {}
    },
    "state": {
      "code": {},
      "name": {}
    },
    "username": {},
    "sshKeyName": {},
    "metadataOptions": {
      "state": {},
      "httpTokens": {},
      "httpEndpoint": {},
      "httpPutResponseHopLimit": {},
      "httpProtocolIpv6": {}
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

<h3 id="getinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInstanceResult](#schemagetinstanceresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInstanceAccessDetails

<a id="opIdGetInstanceAccessDetails"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetInstanceAccessDetails' \
  -d '{
    "instanceName": {},
    "protocol": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails`

<p>Returns temporary SSH keys you can use to connect to a specific virtual private server, or <i>instance</i>.</p> <p>The <code>get instance access details</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "instanceName": {},
  "protocol": {}
}
```

<h3 id="getinstanceaccessdetails-parameters">Parameters</h3>

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
|body|body|[GetInstanceAccessDetailsRequest](#schemagetinstanceaccessdetailsrequest)|true|none|
|» instanceName|body|object|true|none|
|» protocol|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetInstanceAccessDetails|

> Example responses

> 200 Response

```json
{
  "accessDetails": {
    "certKey": {},
    "expiresAt": {},
    "ipAddress": {},
    "password": {},
    "passwordData": {
      "ciphertext": {},
      "keyPairName": {}
    },
    "privateKey": {},
    "protocol": {},
    "instanceName": {},
    "username": {},
    "hostKeys": {}
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

<h3 id="getinstanceaccessdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInstanceAccessDetailsResult](#schemagetinstanceaccessdetailsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInstanceMetricData

<a id="opIdGetInstanceMetricData"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetInstanceMetricData' \
  -d '{
    "instanceName": {},
    "metricName": {},
    "period": {},
    "startTime": {},
    "endTime": {},
    "unit": {},
    "statistics": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData`

<p>Returns the data points for the specified Amazon Lightsail instance metric, given an instance name.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

> Body parameter

```json
{
  "instanceName": {},
  "metricName": {},
  "period": {},
  "startTime": {},
  "endTime": {},
  "unit": {},
  "statistics": {}
}
```

<h3 id="getinstancemetricdata-parameters">Parameters</h3>

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
|body|body|[GetInstanceMetricDataRequest](#schemagetinstancemetricdatarequest)|true|none|
|» instanceName|body|object|true|none|
|» metricName|body|object|true|none|
|» period|body|object|true|none|
|» startTime|body|object|true|none|
|» endTime|body|object|true|none|
|» unit|body|object|true|none|
|» statistics|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetInstanceMetricData|

> Example responses

> 200 Response

```json
{
  "metricName": {},
  "metricData": {}
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

<h3 id="getinstancemetricdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInstanceMetricDataResult](#schemagetinstancemetricdataresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInstancePortStates

<a id="opIdGetInstancePortStates"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetInstancePortStates' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetInstancePortStates' \
  -d '{
    "instanceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetInstancePortStates`

Returns the firewall port states for a specific Amazon Lightsail instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.

> Body parameter

```json
{
  "instanceName": {}
}
```

<h3 id="getinstanceportstates-parameters">Parameters</h3>

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
|body|body|[GetInstancePortStatesRequest](#schemagetinstanceportstatesrequest)|true|none|
|» instanceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetInstancePortStates|

> Example responses

> 200 Response

```json
{
  "portStates": {}
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

<h3 id="getinstanceportstates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInstancePortStatesResult](#schemagetinstanceportstatesresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInstanceSnapshot

<a id="opIdGetInstanceSnapshot"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetInstanceSnapshot' \
  -d '{
    "instanceSnapshotName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot`

Returns information about a specific instance snapshot.

> Body parameter

```json
{
  "instanceSnapshotName": {}
}
```

<h3 id="getinstancesnapshot-parameters">Parameters</h3>

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
|body|body|[GetInstanceSnapshotRequest](#schemagetinstancesnapshotrequest)|true|none|
|» instanceSnapshotName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetInstanceSnapshot|

> Example responses

> 200 Response

```json
{
  "instanceSnapshot": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "state": {},
    "progress": {},
    "fromAttachedDisks": {},
    "fromInstanceName": {},
    "fromInstanceArn": {},
    "fromBlueprintId": {},
    "fromBundleId": {},
    "isFromAutoSnapshot": {},
    "sizeInGb": {}
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

<h3 id="getinstancesnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInstanceSnapshotResult](#schemagetinstancesnapshotresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInstanceSnapshots

<a id="opIdGetInstanceSnapshots"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetInstanceSnapshots' \
  -d '{
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots`

Returns all instance snapshots for the user's account.

> Body parameter

```json
{
  "pageToken": {}
}
```

<h3 id="getinstancesnapshots-parameters">Parameters</h3>

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
|body|body|[GetInstanceSnapshotsRequest](#schemagetinstancesnapshotsrequest)|true|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetInstanceSnapshots|

> Example responses

> 200 Response

```json
{
  "instanceSnapshots": {},
  "nextPageToken": {}
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

<h3 id="getinstancesnapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInstanceSnapshotsResult](#schemagetinstancesnapshotsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInstanceState

<a id="opIdGetInstanceState"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetInstanceState' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetInstanceState' \
  -d '{
    "instanceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetInstanceState`

Returns the state of a specific instance. Works on one instance at a time.

> Body parameter

```json
{
  "instanceName": {}
}
```

<h3 id="getinstancestate-parameters">Parameters</h3>

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
|body|body|[GetInstanceStateRequest](#schemagetinstancestaterequest)|true|none|
|» instanceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetInstanceState|

> Example responses

> 200 Response

```json
{
  "state": {
    "code": {},
    "name": {}
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

<h3 id="getinstancestate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInstanceStateResult](#schemagetinstancestateresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInstances

<a id="opIdGetInstances"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetInstances' \
  -d '{
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetInstances`

Returns information about all Amazon Lightsail virtual private servers, or <i>instances</i>.

> Body parameter

```json
{
  "pageToken": {}
}
```

<h3 id="getinstances-parameters">Parameters</h3>

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
|body|body|[GetInstancesRequest](#schemagetinstancesrequest)|true|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetInstances|

> Example responses

> 200 Response

```json
{
  "instances": {},
  "nextPageToken": {}
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

<h3 id="getinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInstancesResult](#schemagetinstancesresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetKeyPair

<a id="opIdGetKeyPair"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetKeyPair' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetKeyPair' \
  -d '{
    "keyPairName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetKeyPair`

Returns information about a specific key pair.

> Body parameter

```json
{
  "keyPairName": {}
}
```

<h3 id="getkeypair-parameters">Parameters</h3>

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
|body|body|[GetKeyPairRequest](#schemagetkeypairrequest)|true|none|
|» keyPairName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetKeyPair|

> Example responses

> 200 Response

```json
{
  "keyPair": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "fingerprint": {}
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

<h3 id="getkeypair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetKeyPairResult](#schemagetkeypairresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetKeyPairs

<a id="opIdGetKeyPairs"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetKeyPairs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetKeyPairs' \
  -d '{
    "pageToken": {},
    "includeDefaultKeyPair": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetKeyPairs`

Returns information about all key pairs in the user's account.

> Body parameter

```json
{
  "pageToken": {},
  "includeDefaultKeyPair": {}
}
```

<h3 id="getkeypairs-parameters">Parameters</h3>

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
|body|body|[GetKeyPairsRequest](#schemagetkeypairsrequest)|true|none|
|» pageToken|body|object|false|none|
|» includeDefaultKeyPair|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetKeyPairs|

> Example responses

> 200 Response

```json
{
  "keyPairs": {},
  "nextPageToken": {}
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

<h3 id="getkeypairs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetKeyPairsResult](#schemagetkeypairsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLoadBalancer

<a id="opIdGetLoadBalancer"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetLoadBalancer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetLoadBalancer' \
  -d '{
    "loadBalancerName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetLoadBalancer`

Returns information about the specified Lightsail load balancer.

> Body parameter

```json
{
  "loadBalancerName": {}
}
```

<h3 id="getloadbalancer-parameters">Parameters</h3>

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
|body|body|[GetLoadBalancerRequest](#schemagetloadbalancerrequest)|true|none|
|» loadBalancerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetLoadBalancer|

> Example responses

> 200 Response

```json
{
  "loadBalancer": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "dnsName": {},
    "state": {},
    "protocol": {},
    "publicPorts": {},
    "healthCheckPath": {},
    "instancePort": {},
    "instanceHealthSummary": {},
    "tlsCertificateSummaries": {},
    "configurationOptions": {
      "property1": "string",
      "property2": "string"
    },
    "ipAddressType": {},
    "httpsRedirectionEnabled": {},
    "tlsPolicyName": {}
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

<h3 id="getloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLoadBalancerResult](#schemagetloadbalancerresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLoadBalancerMetricData

<a id="opIdGetLoadBalancerMetricData"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetLoadBalancerMetricData' \
  -d '{
    "loadBalancerName": {},
    "metricName": {},
    "period": {},
    "startTime": {},
    "endTime": {},
    "unit": {},
    "statistics": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData`

<p>Returns information about health metrics for your Lightsail load balancer.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

> Body parameter

```json
{
  "loadBalancerName": {},
  "metricName": {},
  "period": {},
  "startTime": {},
  "endTime": {},
  "unit": {},
  "statistics": {}
}
```

<h3 id="getloadbalancermetricdata-parameters">Parameters</h3>

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
|body|body|[GetLoadBalancerMetricDataRequest](#schemagetloadbalancermetricdatarequest)|true|none|
|» loadBalancerName|body|object|true|none|
|» metricName|body|object|true|none|
|» period|body|object|true|none|
|» startTime|body|object|true|none|
|» endTime|body|object|true|none|
|» unit|body|object|true|none|
|» statistics|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetLoadBalancerMetricData|

> Example responses

> 200 Response

```json
{
  "metricName": {},
  "metricData": {}
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

<h3 id="getloadbalancermetricdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLoadBalancerMetricDataResult](#schemagetloadbalancermetricdataresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLoadBalancerTlsCertificates

<a id="opIdGetLoadBalancerTlsCertificates"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetLoadBalancerTlsCertificates' \
  -d '{
    "loadBalancerName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates`

<p>Returns information about the TLS certificates that are associated with the specified Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer. One is active and the other is inactive.</p>

> Body parameter

```json
{
  "loadBalancerName": {}
}
```

<h3 id="getloadbalancertlscertificates-parameters">Parameters</h3>

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
|body|body|[GetLoadBalancerTlsCertificatesRequest](#schemagetloadbalancertlscertificatesrequest)|true|none|
|» loadBalancerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetLoadBalancerTlsCertificates|

> Example responses

> 200 Response

```json
{
  "tlsCertificates": {}
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

<h3 id="getloadbalancertlscertificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLoadBalancerTlsCertificatesResult](#schemagetloadbalancertlscertificatesresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLoadBalancerTlsPolicies

<a id="opIdGetLoadBalancerTlsPolicies"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetLoadBalancerTlsPolicies' \
  -d '{
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies`

<p>Returns a list of TLS security policies that you can apply to Lightsail load balancers.</p> <p>For more information about load balancer TLS security policies, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load balancers</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

> Body parameter

```json
{
  "pageToken": {}
}
```

<h3 id="getloadbalancertlspolicies-parameters">Parameters</h3>

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
|body|body|[GetLoadBalancerTlsPoliciesRequest](#schemagetloadbalancertlspoliciesrequest)|true|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetLoadBalancerTlsPolicies|

> Example responses

> 200 Response

```json
{
  "tlsPolicies": {},
  "nextPageToken": {}
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

<h3 id="getloadbalancertlspolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLoadBalancerTlsPoliciesResult](#schemagetloadbalancertlspoliciesresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|483|483|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLoadBalancers

<a id="opIdGetLoadBalancers"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetLoadBalancers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetLoadBalancers' \
  -d '{
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetLoadBalancers`

Returns information about all load balancers in an account.

> Body parameter

```json
{
  "pageToken": {}
}
```

<h3 id="getloadbalancers-parameters">Parameters</h3>

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
|body|body|[GetLoadBalancersRequest](#schemagetloadbalancersrequest)|true|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetLoadBalancers|

> Example responses

> 200 Response

```json
{
  "loadBalancers": {},
  "nextPageToken": {}
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

<h3 id="getloadbalancers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLoadBalancersResult](#schemagetloadbalancersresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOperation

<a id="opIdGetOperation"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetOperation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetOperation' \
  -d '{
    "operationId": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetOperation`

Returns information about a specific operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.

> Body parameter

```json
{
  "operationId": {}
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
|» operationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetOperation|

> Example responses

> 200 Response

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="getoperation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOperationResult](#schemagetoperationresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOperations

<a id="opIdGetOperations"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetOperations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetOperations' \
  -d '{
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetOperations`

<p>Returns information about all operations.</p> <p>Results are returned from oldest to newest, up to a maximum of 200. Results can be paged by making each subsequent call to <code>GetOperations</code> use the maximum (last) <code>statusChangedAt</code> value from the previous request.</p>

> Body parameter

```json
{
  "pageToken": {}
}
```

<h3 id="getoperations-parameters">Parameters</h3>

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
|body|body|[GetOperationsRequest](#schemagetoperationsrequest)|true|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetOperations|

> Example responses

> 200 Response

```json
{
  "operations": {},
  "nextPageToken": {}
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

<h3 id="getoperations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOperationsResult](#schemagetoperationsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOperationsForResource

<a id="opIdGetOperationsForResource"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetOperationsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetOperationsForResource' \
  -d '{
    "resourceName": {},
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetOperationsForResource`

Gets operations for a specific resource (e.g., an instance or a static IP).

> Body parameter

```json
{
  "resourceName": {},
  "pageToken": {}
}
```

<h3 id="getoperationsforresource-parameters">Parameters</h3>

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
|body|body|[GetOperationsForResourceRequest](#schemagetoperationsforresourcerequest)|true|none|
|» resourceName|body|object|true|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetOperationsForResource|

> Example responses

> 200 Response

```json
{
  "operations": {},
  "nextPageCount": {},
  "nextPageToken": {}
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

<h3 id="getoperationsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOperationsForResourceResult](#schemagetoperationsforresourceresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRegions

<a id="opIdGetRegions"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetRegions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetRegions' \
  -d '{
    "includeAvailabilityZones": {},
    "includeRelationalDatabaseAvailabilityZones": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetRegions`

Returns a list of all valid regions for Amazon Lightsail. Use the <code>include availability zones</code> parameter to also return the Availability Zones in a region.

> Body parameter

```json
{
  "includeAvailabilityZones": {},
  "includeRelationalDatabaseAvailabilityZones": {}
}
```

<h3 id="getregions-parameters">Parameters</h3>

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
|body|body|[GetRegionsRequest](#schemagetregionsrequest)|true|none|
|» includeAvailabilityZones|body|object|false|none|
|» includeRelationalDatabaseAvailabilityZones|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetRegions|

> Example responses

> 200 Response

```json
{
  "regions": {}
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

<h3 id="getregions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRegionsResult](#schemagetregionsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRelationalDatabase

<a id="opIdGetRelationalDatabase"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetRelationalDatabase' \
  -d '{
    "relationalDatabaseName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase`

Returns information about a specific database in Amazon Lightsail.

> Body parameter

```json
{
  "relationalDatabaseName": {}
}
```

<h3 id="getrelationaldatabase-parameters">Parameters</h3>

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
|body|body|[GetRelationalDatabaseRequest](#schemagetrelationaldatabaserequest)|true|none|
|» relationalDatabaseName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetRelationalDatabase|

> Example responses

> 200 Response

```json
{
  "relationalDatabase": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "relationalDatabaseBlueprintId": {},
    "relationalDatabaseBundleId": {},
    "masterDatabaseName": {},
    "hardware": {
      "cpuCount": {},
      "diskSizeInGb": {},
      "ramSizeInGb": {}
    },
    "state": {},
    "secondaryAvailabilityZone": {},
    "backupRetentionEnabled": {},
    "pendingModifiedValues": {
      "masterUserPassword": {},
      "engineVersion": {},
      "backupRetentionEnabled": {}
    },
    "engine": {},
    "engineVersion": {},
    "latestRestorableTime": {},
    "masterUsername": {},
    "parameterApplyStatus": {},
    "preferredBackupWindow": {},
    "preferredMaintenanceWindow": {},
    "publiclyAccessible": {},
    "masterEndpoint": {
      "port": {},
      "address": {}
    },
    "pendingMaintenanceActions": {},
    "caCertificateIdentifier": {}
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

<h3 id="getrelationaldatabase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRelationalDatabaseResult](#schemagetrelationaldatabaseresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRelationalDatabaseBlueprints

<a id="opIdGetRelationalDatabaseBlueprints"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetRelationalDatabaseBlueprints' \
  -d '{
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints`

<p>Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes the major engine version of a database.</p> <p>You can use a blueprint ID to create a new database that runs a specific database engine.</p>

> Body parameter

```json
{
  "pageToken": {}
}
```

<h3 id="getrelationaldatabaseblueprints-parameters">Parameters</h3>

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
|body|body|[GetRelationalDatabaseBlueprintsRequest](#schemagetrelationaldatabaseblueprintsrequest)|true|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetRelationalDatabaseBlueprints|

> Example responses

> 200 Response

```json
{
  "blueprints": {},
  "nextPageToken": {}
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

<h3 id="getrelationaldatabaseblueprints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRelationalDatabaseBlueprintsResult](#schemagetrelationaldatabaseblueprintsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRelationalDatabaseBundles

<a id="opIdGetRelationalDatabaseBundles"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetRelationalDatabaseBundles' \
  -d '{
    "pageToken": {},
    "includeInactive": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles`

<p>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the performance specifications for a database.</p> <p>You can use a bundle ID to create a new database with explicit performance specifications.</p>

> Body parameter

```json
{
  "pageToken": {},
  "includeInactive": {}
}
```

<h3 id="getrelationaldatabasebundles-parameters">Parameters</h3>

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
|body|body|[GetRelationalDatabaseBundlesRequest](#schemagetrelationaldatabasebundlesrequest)|true|none|
|» pageToken|body|object|false|none|
|» includeInactive|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetRelationalDatabaseBundles|

> Example responses

> 200 Response

```json
{
  "bundles": {},
  "nextPageToken": {}
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

<h3 id="getrelationaldatabasebundles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRelationalDatabaseBundlesResult](#schemagetrelationaldatabasebundlesresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRelationalDatabaseEvents

<a id="opIdGetRelationalDatabaseEvents"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetRelationalDatabaseEvents' \
  -d '{
    "relationalDatabaseName": {},
    "durationInMinutes": {},
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents`

Returns a list of events for a specific database in Amazon Lightsail.

> Body parameter

```json
{
  "relationalDatabaseName": {},
  "durationInMinutes": {},
  "pageToken": {}
}
```

<h3 id="getrelationaldatabaseevents-parameters">Parameters</h3>

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
|body|body|[GetRelationalDatabaseEventsRequest](#schemagetrelationaldatabaseeventsrequest)|true|none|
|» relationalDatabaseName|body|object|true|none|
|» durationInMinutes|body|object|false|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetRelationalDatabaseEvents|

> Example responses

> 200 Response

```json
{
  "relationalDatabaseEvents": {},
  "nextPageToken": {}
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

<h3 id="getrelationaldatabaseevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRelationalDatabaseEventsResult](#schemagetrelationaldatabaseeventsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRelationalDatabaseLogEvents

<a id="opIdGetRelationalDatabaseLogEvents"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetRelationalDatabaseLogEvents' \
  -d '{
    "relationalDatabaseName": {},
    "logStreamName": {},
    "startTime": {},
    "endTime": {},
    "startFromHead": {},
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents`

Returns a list of log events for a database in Amazon Lightsail.

> Body parameter

```json
{
  "relationalDatabaseName": {},
  "logStreamName": {},
  "startTime": {},
  "endTime": {},
  "startFromHead": {},
  "pageToken": {}
}
```

<h3 id="getrelationaldatabaselogevents-parameters">Parameters</h3>

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
|body|body|[GetRelationalDatabaseLogEventsRequest](#schemagetrelationaldatabaselogeventsrequest)|true|none|
|» relationalDatabaseName|body|object|true|none|
|» logStreamName|body|object|true|none|
|» startTime|body|object|false|none|
|» endTime|body|object|false|none|
|» startFromHead|body|object|false|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetRelationalDatabaseLogEvents|

> Example responses

> 200 Response

```json
{
  "resourceLogEvents": {},
  "nextBackwardToken": {},
  "nextForwardToken": {}
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

<h3 id="getrelationaldatabaselogevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRelationalDatabaseLogEventsResult](#schemagetrelationaldatabaselogeventsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRelationalDatabaseLogStreams

<a id="opIdGetRelationalDatabaseLogStreams"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetRelationalDatabaseLogStreams' \
  -d '{
    "relationalDatabaseName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams`

Returns a list of available log streams for a specific database in Amazon Lightsail.

> Body parameter

```json
{
  "relationalDatabaseName": {}
}
```

<h3 id="getrelationaldatabaselogstreams-parameters">Parameters</h3>

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
|body|body|[GetRelationalDatabaseLogStreamsRequest](#schemagetrelationaldatabaselogstreamsrequest)|true|none|
|» relationalDatabaseName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetRelationalDatabaseLogStreams|

> Example responses

> 200 Response

```json
{
  "logStreams": {}
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

<h3 id="getrelationaldatabaselogstreams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRelationalDatabaseLogStreamsResult](#schemagetrelationaldatabaselogstreamsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRelationalDatabaseMasterUserPassword

<a id="opIdGetRelationalDatabaseMasterUserPassword"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetRelationalDatabaseMasterUserPassword' \
  -d '{
    "relationalDatabaseName": {},
    "passwordVersion": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword`

<p>Returns the current, previous, or pending versions of the master user password for a Lightsail database.</p> <p>The <code>GetRelationalDatabaseMasterUserPassword</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName.</p>

> Body parameter

```json
{
  "relationalDatabaseName": {},
  "passwordVersion": {}
}
```

<h3 id="getrelationaldatabasemasteruserpassword-parameters">Parameters</h3>

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
|body|body|[GetRelationalDatabaseMasterUserPasswordRequest](#schemagetrelationaldatabasemasteruserpasswordrequest)|true|none|
|» relationalDatabaseName|body|object|true|none|
|» passwordVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetRelationalDatabaseMasterUserPassword|

> Example responses

> 200 Response

```json
{
  "masterUserPassword": {},
  "createdAt": {}
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

<h3 id="getrelationaldatabasemasteruserpassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRelationalDatabaseMasterUserPasswordResult](#schemagetrelationaldatabasemasteruserpasswordresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRelationalDatabaseMetricData

<a id="opIdGetRelationalDatabaseMetricData"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetRelationalDatabaseMetricData' \
  -d '{
    "relationalDatabaseName": {},
    "metricName": {},
    "period": {},
    "startTime": {},
    "endTime": {},
    "unit": {},
    "statistics": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData`

<p>Returns the data points of the specified metric for a database in Amazon Lightsail.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

> Body parameter

```json
{
  "relationalDatabaseName": {},
  "metricName": {},
  "period": {},
  "startTime": {},
  "endTime": {},
  "unit": {},
  "statistics": {}
}
```

<h3 id="getrelationaldatabasemetricdata-parameters">Parameters</h3>

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
|body|body|[GetRelationalDatabaseMetricDataRequest](#schemagetrelationaldatabasemetricdatarequest)|true|none|
|» relationalDatabaseName|body|object|true|none|
|» metricName|body|object|true|none|
|» period|body|object|true|none|
|» startTime|body|object|true|none|
|» endTime|body|object|true|none|
|» unit|body|object|true|none|
|» statistics|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetRelationalDatabaseMetricData|

> Example responses

> 200 Response

```json
{
  "metricName": {},
  "metricData": {}
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

<h3 id="getrelationaldatabasemetricdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRelationalDatabaseMetricDataResult](#schemagetrelationaldatabasemetricdataresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRelationalDatabaseParameters

<a id="opIdGetRelationalDatabaseParameters"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetRelationalDatabaseParameters' \
  -d '{
    "relationalDatabaseName": {},
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters`

<p>Returns all of the runtime parameters offered by the underlying database software, or engine, for a specific database in Amazon Lightsail.</p> <p>In addition to the parameter names and values, this operation returns other information about each parameter. This information includes whether changes require a reboot, whether the parameter is modifiable, the allowed values, and the data types.</p>

> Body parameter

```json
{
  "relationalDatabaseName": {},
  "pageToken": {}
}
```

<h3 id="getrelationaldatabaseparameters-parameters">Parameters</h3>

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
|body|body|[GetRelationalDatabaseParametersRequest](#schemagetrelationaldatabaseparametersrequest)|true|none|
|» relationalDatabaseName|body|object|true|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetRelationalDatabaseParameters|

> Example responses

> 200 Response

```json
{
  "parameters": {},
  "nextPageToken": {}
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

<h3 id="getrelationaldatabaseparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRelationalDatabaseParametersResult](#schemagetrelationaldatabaseparametersresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRelationalDatabaseSnapshot

<a id="opIdGetRelationalDatabaseSnapshot"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetRelationalDatabaseSnapshot' \
  -d '{
    "relationalDatabaseSnapshotName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot`

Returns information about a specific database snapshot in Amazon Lightsail.

> Body parameter

```json
{
  "relationalDatabaseSnapshotName": {}
}
```

<h3 id="getrelationaldatabasesnapshot-parameters">Parameters</h3>

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
|body|body|[GetRelationalDatabaseSnapshotRequest](#schemagetrelationaldatabasesnapshotrequest)|true|none|
|» relationalDatabaseSnapshotName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetRelationalDatabaseSnapshot|

> Example responses

> 200 Response

```json
{
  "relationalDatabaseSnapshot": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "engine": {},
    "engineVersion": {},
    "sizeInGb": {},
    "state": {},
    "fromRelationalDatabaseName": {},
    "fromRelationalDatabaseArn": {},
    "fromRelationalDatabaseBundleId": {},
    "fromRelationalDatabaseBlueprintId": {}
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

<h3 id="getrelationaldatabasesnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRelationalDatabaseSnapshotResult](#schemagetrelationaldatabasesnapshotresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRelationalDatabaseSnapshots

<a id="opIdGetRelationalDatabaseSnapshots"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetRelationalDatabaseSnapshots' \
  -d '{
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots`

Returns information about all of your database snapshots in Amazon Lightsail.

> Body parameter

```json
{
  "pageToken": {}
}
```

<h3 id="getrelationaldatabasesnapshots-parameters">Parameters</h3>

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
|body|body|[GetRelationalDatabaseSnapshotsRequest](#schemagetrelationaldatabasesnapshotsrequest)|true|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetRelationalDatabaseSnapshots|

> Example responses

> 200 Response

```json
{
  "relationalDatabaseSnapshots": {},
  "nextPageToken": {}
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

<h3 id="getrelationaldatabasesnapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRelationalDatabaseSnapshotsResult](#schemagetrelationaldatabasesnapshotsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRelationalDatabases

<a id="opIdGetRelationalDatabases"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetRelationalDatabases' \
  -d '{
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases`

Returns information about all of your databases in Amazon Lightsail.

> Body parameter

```json
{
  "pageToken": {}
}
```

<h3 id="getrelationaldatabases-parameters">Parameters</h3>

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
|body|body|[GetRelationalDatabasesRequest](#schemagetrelationaldatabasesrequest)|true|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetRelationalDatabases|

> Example responses

> 200 Response

```json
{
  "relationalDatabases": {},
  "nextPageToken": {}
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

<h3 id="getrelationaldatabases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRelationalDatabasesResult](#schemagetrelationaldatabasesresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStaticIp

<a id="opIdGetStaticIp"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetStaticIp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetStaticIp' \
  -d '{
    "staticIpName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetStaticIp`

Returns information about an Amazon Lightsail static IP.

> Body parameter

```json
{
  "staticIpName": {}
}
```

<h3 id="getstaticip-parameters">Parameters</h3>

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
|body|body|[GetStaticIpRequest](#schemagetstaticiprequest)|true|none|
|» staticIpName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetStaticIp|

> Example responses

> 200 Response

```json
{
  "staticIp": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "ipAddress": {},
    "attachedTo": {},
    "isAttached": {}
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

<h3 id="getstaticip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStaticIpResult](#schemagetstaticipresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStaticIps

<a id="opIdGetStaticIps"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.GetStaticIps' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.GetStaticIps' \
  -d '{
    "pageToken": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.GetStaticIps`

Returns information about all static IPs in the user's account.

> Body parameter

```json
{
  "pageToken": {}
}
```

<h3 id="getstaticips-parameters">Parameters</h3>

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
|body|body|[GetStaticIpsRequest](#schemagetstaticipsrequest)|true|none|
|» pageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.GetStaticIps|

> Example responses

> 200 Response

```json
{
  "staticIps": {},
  "nextPageToken": {}
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

<h3 id="getstaticips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStaticIpsResult](#schemagetstaticipsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportKeyPair

<a id="opIdImportKeyPair"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.ImportKeyPair' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.ImportKeyPair' \
  -d '{
    "keyPairName": {},
    "publicKeyBase64": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.ImportKeyPair`

Imports a public SSH key from a specific key pair.

> Body parameter

```json
{
  "keyPairName": {},
  "publicKeyBase64": {}
}
```

<h3 id="importkeypair-parameters">Parameters</h3>

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
|body|body|[ImportKeyPairRequest](#schemaimportkeypairrequest)|true|none|
|» keyPairName|body|object|true|none|
|» publicKeyBase64|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.ImportKeyPair|

> Example responses

> 200 Response

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="importkeypair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportKeyPairResult](#schemaimportkeypairresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## IsVpcPeered

<a id="opIdIsVpcPeered"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.IsVpcPeered' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.IsVpcPeered' \
  -d '{}'
```

`POST /#X-Amz-Target=Lightsail_20161128.IsVpcPeered`

Returns a Boolean value indicating whether your Lightsail VPC is peered.

> Body parameter

```json
{}
```

<h3 id="isvpcpeered-parameters">Parameters</h3>

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
|body|body|[IsVpcPeeredRequest](#schemaisvpcpeeredrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.IsVpcPeered|

> Example responses

> 200 Response

```json
{
  "isPeered": {}
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

<h3 id="isvpcpeered-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IsVpcPeeredResult](#schemaisvpcpeeredresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## OpenInstancePublicPorts

<a id="opIdOpenInstancePublicPorts"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.OpenInstancePublicPorts' \
  -d '{
    "portInfo": {
      "fromPort": {},
      "toPort": {},
      "protocol": {},
      "cidrs": {},
      "ipv6Cidrs": {},
      "cidrListAliases": {}
    },
    "instanceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts`

<p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol.</p> <p>The <code>OpenInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "portInfo": {
    "fromPort": {},
    "toPort": {},
    "protocol": {},
    "cidrs": {},
    "ipv6Cidrs": {},
    "cidrListAliases": {}
  },
  "instanceName": {}
}
```

<h3 id="openinstancepublicports-parameters">Parameters</h3>

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
|body|body|[OpenInstancePublicPortsRequest](#schemaopeninstancepublicportsrequest)|true|none|
|» portInfo|body|object|true|none|
|» » fromPort|body|object|false|none|
|» » toPort|body|object|false|none|
|» » protocol|body|object|false|none|
|» » cidrs|body|object|false|none|
|» » ipv6Cidrs|body|object|false|none|
|» » cidrListAliases|body|object|false|none|
|» instanceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.OpenInstancePublicPorts|

> Example responses

> 200 Response

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="openinstancepublicports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[OpenInstancePublicPortsResult](#schemaopeninstancepublicportsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PeerVpc

<a id="opIdPeerVpc"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.PeerVpc' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.PeerVpc' \
  -d '{}'
```

`POST /#X-Amz-Target=Lightsail_20161128.PeerVpc`

Peers the Lightsail VPC with the user's default VPC.

> Body parameter

```json
{}
```

<h3 id="peervpc-parameters">Parameters</h3>

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
|body|body|[PeerVpcRequest](#schemapeervpcrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.PeerVpc|

> Example responses

> 200 Response

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="peervpc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PeerVpcResult](#schemapeervpcresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAlarm

<a id="opIdPutAlarm"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.PutAlarm' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.PutAlarm' \
  -d '{
    "alarmName": {},
    "metricName": {},
    "monitoredResourceName": {},
    "comparisonOperator": {},
    "threshold": {},
    "evaluationPeriods": {},
    "datapointsToAlarm": {},
    "treatMissingData": {},
    "contactProtocols": {},
    "notificationTriggers": {},
    "notificationEnabled": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.PutAlarm`

<p>Creates or updates an alarm, and associates it with the specified metric.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> <p>When this action creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. The alarm is then evaluated with the updated configuration.</p>

> Body parameter

```json
{
  "alarmName": {},
  "metricName": {},
  "monitoredResourceName": {},
  "comparisonOperator": {},
  "threshold": {},
  "evaluationPeriods": {},
  "datapointsToAlarm": {},
  "treatMissingData": {},
  "contactProtocols": {},
  "notificationTriggers": {},
  "notificationEnabled": {}
}
```

<h3 id="putalarm-parameters">Parameters</h3>

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
|body|body|[PutAlarmRequest](#schemaputalarmrequest)|true|none|
|» alarmName|body|object|true|none|
|» metricName|body|object|true|none|
|» monitoredResourceName|body|object|true|none|
|» comparisonOperator|body|object|true|none|
|» threshold|body|object|true|none|
|» evaluationPeriods|body|object|true|none|
|» datapointsToAlarm|body|object|false|none|
|» treatMissingData|body|object|false|none|
|» contactProtocols|body|object|false|none|
|» notificationTriggers|body|object|false|none|
|» notificationEnabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.PutAlarm|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="putalarm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAlarmResult](#schemaputalarmresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutInstancePublicPorts

<a id="opIdPutInstancePublicPorts"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.PutInstancePublicPorts' \
  -d '{
    "portInfos": {},
    "instanceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts`

<p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol. This action also closes all currently open ports that are not included in the request. Include all of the ports and the protocols you want to open in your <code>PutInstancePublicPorts</code>request. Or use the <code>OpenInstancePublicPorts</code> action to open ports without closing currently open ports.</p> <p>The <code>PutInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "portInfos": {},
  "instanceName": {}
}
```

<h3 id="putinstancepublicports-parameters">Parameters</h3>

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
|body|body|[PutInstancePublicPortsRequest](#schemaputinstancepublicportsrequest)|true|none|
|» portInfos|body|object|true|none|
|» instanceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.PutInstancePublicPorts|

> Example responses

> 200 Response

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="putinstancepublicports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutInstancePublicPortsResult](#schemaputinstancepublicportsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RebootInstance

<a id="opIdRebootInstance"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.RebootInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.RebootInstance' \
  -d '{
    "instanceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.RebootInstance`

<p>Restarts a specific instance.</p> <p>The <code>reboot instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "instanceName": {}
}
```

<h3 id="rebootinstance-parameters">Parameters</h3>

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
|body|body|[RebootInstanceRequest](#schemarebootinstancerequest)|true|none|
|» instanceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.RebootInstance|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="rebootinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RebootInstanceResult](#schemarebootinstanceresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RebootRelationalDatabase

<a id="opIdRebootRelationalDatabase"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.RebootRelationalDatabase' \
  -d '{
    "relationalDatabaseName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase`

<p>Restarts a specific database in Amazon Lightsail.</p> <p>The <code>reboot relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "relationalDatabaseName": {}
}
```

<h3 id="rebootrelationaldatabase-parameters">Parameters</h3>

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
|body|body|[RebootRelationalDatabaseRequest](#schemarebootrelationaldatabaserequest)|true|none|
|» relationalDatabaseName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.RebootRelationalDatabase|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="rebootrelationaldatabase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RebootRelationalDatabaseResult](#schemarebootrelationaldatabaseresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterContainerImage

<a id="opIdRegisterContainerImage"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.RegisterContainerImage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.RegisterContainerImage' \
  -d '{
    "serviceName": {},
    "label": {},
    "digest": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.RegisterContainerImage`

<p>Registers a container image to your Amazon Lightsail container service.</p> <note> <p>This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </note>

> Body parameter

```json
{
  "serviceName": {},
  "label": {},
  "digest": {}
}
```

<h3 id="registercontainerimage-parameters">Parameters</h3>

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
|body|body|[RegisterContainerImageRequest](#schemaregistercontainerimagerequest)|true|none|
|» serviceName|body|object|true|none|
|» label|body|object|true|none|
|» digest|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.RegisterContainerImage|

> Example responses

> 200 Response

```json
{
  "containerImage": {
    "image": {},
    "digest": {},
    "createdAt": {}
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

<h3 id="registercontainerimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterContainerImageResult](#schemaregistercontainerimageresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ReleaseStaticIp

<a id="opIdReleaseStaticIp"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.ReleaseStaticIp' \
  -d '{
    "staticIpName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp`

Deletes a specific static IP from your account.

> Body parameter

```json
{
  "staticIpName": {}
}
```

<h3 id="releasestaticip-parameters">Parameters</h3>

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
|body|body|[ReleaseStaticIpRequest](#schemareleasestaticiprequest)|true|none|
|» staticIpName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.ReleaseStaticIp|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="releasestaticip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReleaseStaticIpResult](#schemareleasestaticipresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResetDistributionCache

<a id="opIdResetDistributionCache"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.ResetDistributionCache' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.ResetDistributionCache' \
  -d '{
    "distributionName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.ResetDistributionCache`

<p>Deletes currently cached content from your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After resetting the cache, the next time a content request is made, your distribution pulls, serves, and caches it from the origin.</p>

> Body parameter

```json
{
  "distributionName": {}
}
```

<h3 id="resetdistributioncache-parameters">Parameters</h3>

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
|body|body|[ResetDistributionCacheRequest](#schemaresetdistributioncacherequest)|true|none|
|» distributionName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.ResetDistributionCache|

> Example responses

> 200 Response

```json
{
  "status": {},
  "createTime": {},
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="resetdistributioncache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResetDistributionCacheResult](#schemaresetdistributioncacheresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendContactMethodVerification

<a id="opIdSendContactMethodVerification"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.SendContactMethodVerification' \
  -d '{
    "protocol": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification`

<p>Sends a verification request to an email contact method to ensure it's owned by the requester. SMS contact methods don't need to be verified.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p> <p>A verification request is sent to the contact method when you initially create it. Use this action to send another verification request if a previous verification request was deleted, or has expired.</p> <important> <p>Notifications are not sent to an email contact method until after it is verified, and confirmed as valid.</p> </important>

> Body parameter

```json
{
  "protocol": {}
}
```

<h3 id="sendcontactmethodverification-parameters">Parameters</h3>

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
|body|body|[SendContactMethodVerificationRequest](#schemasendcontactmethodverificationrequest)|true|none|
|» protocol|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.SendContactMethodVerification|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="sendcontactmethodverification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendContactMethodVerificationResult](#schemasendcontactmethodverificationresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|483|483|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetIpAddressType

<a id="opIdSetIpAddressType"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.SetIpAddressType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.SetIpAddressType' \
  -d '{
    "resourceType": {},
    "resourceName": {},
    "ipAddressType": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.SetIpAddressType`

<p>Sets the IP address type for an Amazon Lightsail resource.</p> <p>Use this action to enable dual-stack for a resource, which enables IPv4 and IPv6 for the specified resource. Alternately, you can use this action to disable dual-stack, and enable IPv4 only.</p>

> Body parameter

```json
{
  "resourceType": {},
  "resourceName": {},
  "ipAddressType": {}
}
```

<h3 id="setipaddresstype-parameters">Parameters</h3>

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
|body|body|[SetIpAddressTypeRequest](#schemasetipaddresstyperequest)|true|none|
|» resourceType|body|object|true|none|
|» resourceName|body|object|true|none|
|» ipAddressType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.SetIpAddressType|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="setipaddresstype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetIpAddressTypeResult](#schemasetipaddresstyperesult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetResourceAccessForBucket

<a id="opIdSetResourceAccessForBucket"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.SetResourceAccessForBucket' \
  -d '{
    "resourceName": {},
    "bucketName": {},
    "access": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket`

<p>Sets the Amazon Lightsail resources that can access the specified Lightsail bucket.</p> <p>Lightsail buckets currently support setting access for Lightsail instances in the same Amazon Web Services Region.</p>

> Body parameter

```json
{
  "resourceName": {},
  "bucketName": {},
  "access": {}
}
```

<h3 id="setresourceaccessforbucket-parameters">Parameters</h3>

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
|body|body|[SetResourceAccessForBucketRequest](#schemasetresourceaccessforbucketrequest)|true|none|
|» resourceName|body|object|true|none|
|» bucketName|body|object|true|none|
|» access|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.SetResourceAccessForBucket|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="setresourceaccessforbucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetResourceAccessForBucketResult](#schemasetresourceaccessforbucketresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartGUISession

<a id="opIdStartGUISession"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.StartGUISession' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.StartGUISession' \
  -d '{
    "resourceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.StartGUISession`

Initiates a graphical user interface (GUI) session that’s used to access a virtual computer’s operating system and application. The session will be active for 1 hour. Use this action to resume the session after it expires. 

> Body parameter

```json
{
  "resourceName": {}
}
```

<h3 id="startguisession-parameters">Parameters</h3>

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
|body|body|[StartGUISessionRequest](#schemastartguisessionrequest)|true|none|
|» resourceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.StartGUISession|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="startguisession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartGUISessionResult](#schemastartguisessionresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartInstance

<a id="opIdStartInstance"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.StartInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.StartInstance' \
  -d '{
    "instanceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.StartInstance`

<p>Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the <code>reboot instance</code> operation.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip">Amazon Lightsail Developer Guide</a>.</p> </note> <p>The <code>start instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "instanceName": {}
}
```

<h3 id="startinstance-parameters">Parameters</h3>

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
|body|body|[StartInstanceRequest](#schemastartinstancerequest)|true|none|
|» instanceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.StartInstance|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="startinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartInstanceResult](#schemastartinstanceresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartRelationalDatabase

<a id="opIdStartRelationalDatabase"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.StartRelationalDatabase' \
  -d '{
    "relationalDatabaseName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase`

<p>Starts a specific database from a stopped state in Amazon Lightsail. To restart a database, use the <code>reboot relational database</code> operation.</p> <p>The <code>start relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "relationalDatabaseName": {}
}
```

<h3 id="startrelationaldatabase-parameters">Parameters</h3>

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
|body|body|[StartRelationalDatabaseRequest](#schemastartrelationaldatabaserequest)|true|none|
|» relationalDatabaseName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.StartRelationalDatabase|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="startrelationaldatabase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartRelationalDatabaseResult](#schemastartrelationaldatabaseresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopGUISession

<a id="opIdStopGUISession"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.StopGUISession' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.StopGUISession' \
  -d '{
    "resourceName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.StopGUISession`

Terminates a web-based NICE DCV session that’s used to access a virtual computer’s operating system or application. The session will close and any unsaved data will be lost.

> Body parameter

```json
{
  "resourceName": {}
}
```

<h3 id="stopguisession-parameters">Parameters</h3>

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
|body|body|[StopGUISessionRequest](#schemastopguisessionrequest)|true|none|
|» resourceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.StopGUISession|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="stopguisession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopGUISessionResult](#schemastopguisessionresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopInstance

<a id="opIdStopInstance"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.StopInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.StopInstance' \
  -d '{
    "instanceName": {},
    "force": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.StopInstance`

<p>Stops a specific Amazon Lightsail instance that is currently running.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip">Amazon Lightsail Developer Guide</a>.</p> </note> <p>The <code>stop instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "instanceName": {},
  "force": {}
}
```

<h3 id="stopinstance-parameters">Parameters</h3>

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
|body|body|[StopInstanceRequest](#schemastopinstancerequest)|true|none|
|» instanceName|body|object|true|none|
|» force|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.StopInstance|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="stopinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopInstanceResult](#schemastopinstanceresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopRelationalDatabase

<a id="opIdStopRelationalDatabase"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.StopRelationalDatabase' \
  -d '{
    "relationalDatabaseName": {},
    "relationalDatabaseSnapshotName": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase`

<p>Stops a specific database that is currently running in Amazon Lightsail.</p> <p>The <code>stop relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "relationalDatabaseName": {},
  "relationalDatabaseSnapshotName": {}
}
```

<h3 id="stoprelationaldatabase-parameters">Parameters</h3>

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
|body|body|[StopRelationalDatabaseRequest](#schemastoprelationaldatabaserequest)|true|none|
|» relationalDatabaseName|body|object|true|none|
|» relationalDatabaseSnapshotName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.StopRelationalDatabase|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="stoprelationaldatabase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopRelationalDatabaseResult](#schemastoprelationaldatabaseresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.TagResource' \
  -d '{
    "resourceName": {},
    "resourceArn": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.TagResource`

<p>Adds one or more tags to the specified Amazon Lightsail resource. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p> <p>The <code>tag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "resourceName": {},
  "resourceArn": {},
  "tags": {}
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
|» resourceName|body|object|true|none|
|» resourceArn|body|object|false|none|
|» tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.TagResource|

> Example responses

> 200 Response

```json
{
  "operations": {}
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
|200|OK|Success|[TagResourceResult](#schematagresourceresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TestAlarm

<a id="opIdTestAlarm"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.TestAlarm' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.TestAlarm' \
  -d '{
    "alarmName": {},
    "state": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.TestAlarm`

<p>Tests an alarm by displaying a banner on the Amazon Lightsail console. If a notification trigger is configured for the specified alarm, the test also sends a notification to the notification protocol (<code>Email</code> and/or <code>SMS</code>) configured for the alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>

> Body parameter

```json
{
  "alarmName": {},
  "state": {}
}
```

<h3 id="testalarm-parameters">Parameters</h3>

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
|body|body|[TestAlarmRequest](#schematestalarmrequest)|true|none|
|» alarmName|body|object|true|none|
|» state|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.TestAlarm|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="testalarm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestAlarmResult](#schematestalarmresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|483|483|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UnpeerVpc

<a id="opIdUnpeerVpc"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.UnpeerVpc' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.UnpeerVpc' \
  -d '{}'
```

`POST /#X-Amz-Target=Lightsail_20161128.UnpeerVpc`

Unpeers the Lightsail VPC from the user's default VPC.

> Body parameter

```json
{}
```

<h3 id="unpeervpc-parameters">Parameters</h3>

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
|body|body|[UnpeerVpcRequest](#schemaunpeervpcrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.UnpeerVpc|

> Example responses

> 200 Response

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="unpeervpc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UnpeerVpcResult](#schemaunpeervpcresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.UntagResource' \
  -d '{
    "resourceName": {},
    "resourceArn": {},
    "tagKeys": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.UntagResource`

<p>Deletes the specified set of tag keys and their values from the specified Amazon Lightsail resource.</p> <p>The <code>untag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "resourceName": {},
  "resourceArn": {},
  "tagKeys": {}
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
|» resourceName|body|object|true|none|
|» resourceArn|body|object|false|none|
|» tagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.UntagResource|

> Example responses

> 200 Response

```json
{
  "operations": {}
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
|200|OK|Success|[UntagResourceResult](#schemauntagresourceresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBucket

<a id="opIdUpdateBucket"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.UpdateBucket' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.UpdateBucket' \
  -d '{
    "bucketName": {},
    "accessRules": {
      "getObject": {},
      "allowPublicOverrides": {}
    },
    "versioning": {},
    "readonlyAccessAccounts": {},
    "accessLogConfig": {
      "enabled": {},
      "destination": {},
      "prefix": {}
    }
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.UpdateBucket`

<p>Updates an existing Amazon Lightsail bucket.</p> <p>Use this action to update the configuration of an existing bucket, such as versioning, public accessibility, and the Amazon Web Services accounts that can access the bucket.</p>

> Body parameter

```json
{
  "bucketName": {},
  "accessRules": {
    "getObject": {},
    "allowPublicOverrides": {}
  },
  "versioning": {},
  "readonlyAccessAccounts": {},
  "accessLogConfig": {
    "enabled": {},
    "destination": {},
    "prefix": {}
  }
}
```

<h3 id="updatebucket-parameters">Parameters</h3>

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
|body|body|[UpdateBucketRequest](#schemaupdatebucketrequest)|true|none|
|» bucketName|body|object|true|none|
|» accessRules|body|object|false|none|
|» » getObject|body|object|false|none|
|» » allowPublicOverrides|body|object|false|none|
|» versioning|body|object|false|none|
|» readonlyAccessAccounts|body|object|false|none|
|» accessLogConfig|body|object|false|none|
|» » enabled|body|object|true|none|
|» » destination|body|object|false|none|
|» » prefix|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.UpdateBucket|

> Example responses

> 200 Response

```json
{
  "bucket": {
    "resourceType": {},
    "accessRules": {
      "getObject": {},
      "allowPublicOverrides": {}
    },
    "arn": {},
    "bundleId": {},
    "createdAt": {},
    "url": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "name": {},
    "supportCode": {},
    "tags": {},
    "objectVersioning": {},
    "ableToUpdateBundle": {},
    "readonlyAccessAccounts": {},
    "resourcesReceivingAccess": {},
    "state": {
      "code": {},
      "message": {}
    },
    "accessLogConfig": {
      "enabled": {},
      "destination": {},
      "prefix": {}
    }
  },
  "operations": {}
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

<h3 id="updatebucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBucketResult](#schemaupdatebucketresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBucketBundle

<a id="opIdUpdateBucketBundle"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.UpdateBucketBundle' \
  -d '{
    "bucketName": {},
    "bundleId": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle`

<p>Updates the bundle, or storage plan, of an existing Amazon Lightsail bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket. You can update a bucket's bundle only one time within a monthly Amazon Web Services billing cycle. To determine if you can update a bucket's bundle, use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBuckets.html">GetBuckets</a> action. The <code>ableToUpdateBundle</code> parameter in the response will indicate whether you can currently update a bucket's bundle.</p> <p>Update a bucket's bundle if it's consistently going over its storage space or data transfer quota, or if a bucket's usage is consistently in the lower range of its storage space or data transfer quota. Due to the unpredictable usage fluctuations that a bucket might experience, we strongly recommend that you update a bucket's bundle only as a long-term strategy, instead of as a short-term, monthly cost-cutting measure. Choose a bucket bundle that will provide the bucket with ample storage space and data transfer for a long time to come.</p>

> Body parameter

```json
{
  "bucketName": {},
  "bundleId": {}
}
```

<h3 id="updatebucketbundle-parameters">Parameters</h3>

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
|body|body|[UpdateBucketBundleRequest](#schemaupdatebucketbundlerequest)|true|none|
|» bucketName|body|object|true|none|
|» bundleId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.UpdateBucketBundle|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="updatebucketbundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBucketBundleResult](#schemaupdatebucketbundleresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateContainerService

<a id="opIdUpdateContainerService"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.UpdateContainerService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.UpdateContainerService' \
  -d '{
    "serviceName": {},
    "power": {},
    "scale": {},
    "isDisabled": {},
    "publicDomainNames": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "privateRegistryAccess": {
      "ecrImagePullerRole": {
        "isActive": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.UpdateContainerService`

Updates the configuration of your Amazon Lightsail container service, such as its power, scale, and public domain names.

> Body parameter

```json
{
  "serviceName": {},
  "power": {},
  "scale": {},
  "isDisabled": {},
  "publicDomainNames": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "privateRegistryAccess": {
    "ecrImagePullerRole": {
      "isActive": {}
    }
  }
}
```

<h3 id="updatecontainerservice-parameters">Parameters</h3>

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
|body|body|[UpdateContainerServiceRequest](#schemaupdatecontainerservicerequest)|true|none|
|» serviceName|body|object|true|none|
|» power|body|object|false|none|
|» scale|body|object|false|none|
|» isDisabled|body|object|false|none|
|» publicDomainNames|body|object|false|none|
|» » **additionalProperties**|body|[ContainerServicePublicDomainsList](#schemacontainerservicepublicdomainslist)|false|none|
|» privateRegistryAccess|body|object|false|none|
|» » ecrImagePullerRole|body|object|false|none|
|» » » isActive|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.UpdateContainerService|

> Example responses

> 200 Response

```json
{
  "containerService": {
    "containerServiceName": {},
    "arn": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "power": {},
    "powerId": {},
    "state": {},
    "stateDetail": {
      "code": {},
      "message": {}
    },
    "scale": {},
    "currentDeployment": {
      "version": {},
      "state": {},
      "containers": {
        "property1": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        },
        "property2": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        }
      },
      "publicEndpoint": {
        "containerName": {},
        "containerPort": {},
        "healthCheck": {
          "healthyThreshold": {},
          "unhealthyThreshold": {},
          "timeoutSeconds": {},
          "intervalSeconds": {},
          "path": {},
          "successCodes": {}
        }
      },
      "createdAt": {}
    },
    "nextDeployment": {
      "version": {},
      "state": {},
      "containers": {
        "property1": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        },
        "property2": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        }
      },
      "publicEndpoint": {
        "containerName": {},
        "containerPort": {},
        "healthCheck": {
          "healthyThreshold": {},
          "unhealthyThreshold": {},
          "timeoutSeconds": {},
          "intervalSeconds": {},
          "path": {},
          "successCodes": {}
        }
      },
      "createdAt": {}
    },
    "isDisabled": {},
    "principalArn": {},
    "privateDomainName": {},
    "publicDomainNames": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "url": {},
    "privateRegistryAccess": {
      "ecrImagePullerRole": {
        "isActive": {},
        "principalArn": {}
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updatecontainerservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateContainerServiceResult](#schemaupdatecontainerserviceresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDistribution

<a id="opIdUpdateDistribution"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.UpdateDistribution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.UpdateDistribution' \
  -d '{
    "distributionName": {},
    "origin": {
      "name": {},
      "regionName": {},
      "protocolPolicy": {}
    },
    "defaultCacheBehavior": {
      "behavior": {}
    },
    "cacheBehaviorSettings": {
      "defaultTTL": {},
      "minimumTTL": {},
      "maximumTTL": {},
      "allowedHTTPMethods": {},
      "cachedHTTPMethods": {},
      "forwardedCookies": {
        "option": {},
        "cookiesAllowList": {}
      },
      "forwardedHeaders": {
        "option": {},
        "headersAllowList": {}
      },
      "forwardedQueryStrings": {
        "option": {},
        "queryStringsAllowList": {}
      }
    },
    "cacheBehaviors": {},
    "isEnabled": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.UpdateDistribution`

<p>Updates an existing Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Use this action to update the configuration of your existing distribution.</p>

> Body parameter

```json
{
  "distributionName": {},
  "origin": {
    "name": {},
    "regionName": {},
    "protocolPolicy": {}
  },
  "defaultCacheBehavior": {
    "behavior": {}
  },
  "cacheBehaviorSettings": {
    "defaultTTL": {},
    "minimumTTL": {},
    "maximumTTL": {},
    "allowedHTTPMethods": {},
    "cachedHTTPMethods": {},
    "forwardedCookies": {
      "option": {},
      "cookiesAllowList": {}
    },
    "forwardedHeaders": {
      "option": {},
      "headersAllowList": {}
    },
    "forwardedQueryStrings": {
      "option": {},
      "queryStringsAllowList": {}
    }
  },
  "cacheBehaviors": {},
  "isEnabled": {}
}
```

<h3 id="updatedistribution-parameters">Parameters</h3>

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
|body|body|[UpdateDistributionRequest](#schemaupdatedistributionrequest)|true|none|
|» distributionName|body|object|true|none|
|» origin|body|object|false|none|
|» » name|body|object|false|none|
|» » regionName|body|object|false|none|
|» » protocolPolicy|body|object|false|none|
|» defaultCacheBehavior|body|object|false|none|
|» » behavior|body|object|false|none|
|» cacheBehaviorSettings|body|object|false|none|
|» » defaultTTL|body|object|false|none|
|» » minimumTTL|body|object|false|none|
|» » maximumTTL|body|object|false|none|
|» » allowedHTTPMethods|body|object|false|none|
|» » cachedHTTPMethods|body|object|false|none|
|» » forwardedCookies|body|object|false|none|
|» » » option|body|object|false|none|
|» » » cookiesAllowList|body|object|false|none|
|» » forwardedHeaders|body|object|false|none|
|» » » option|body|object|false|none|
|» » » headersAllowList|body|object|false|none|
|» » forwardedQueryStrings|body|object|false|none|
|» » » option|body|object|false|none|
|» » » queryStringsAllowList|body|object|false|none|
|» cacheBehaviors|body|object|false|none|
|» isEnabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.UpdateDistribution|

> Example responses

> 200 Response

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="updatedistribution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDistributionResult](#schemaupdatedistributionresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDistributionBundle

<a id="opIdUpdateDistributionBundle"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.UpdateDistributionBundle' \
  -d '{
    "distributionName": {},
    "bundleId": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle`

<p>Updates the bundle of your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution.</p> <p>Update your distribution's bundle if your distribution is going over its monthly network transfer quota and is incurring an overage fee.</p> <p>You can update your distribution's bundle only one time within your monthly Amazon Web Services billing cycle. To determine if you can update your distribution's bundle, use the <code>GetDistributions</code> action. The <code>ableToUpdateBundle</code> parameter in the result will indicate whether you can currently update your distribution's bundle.</p>

> Body parameter

```json
{
  "distributionName": {},
  "bundleId": {}
}
```

<h3 id="updatedistributionbundle-parameters">Parameters</h3>

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
|body|body|[UpdateDistributionBundleRequest](#schemaupdatedistributionbundlerequest)|true|none|
|» distributionName|body|object|false|none|
|» bundleId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.UpdateDistributionBundle|

> Example responses

> 200 Response

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="updatedistributionbundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDistributionBundleResult](#schemaupdatedistributionbundleresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDomainEntry

<a id="opIdUpdateDomainEntry"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.UpdateDomainEntry' \
  -d '{
    "domainName": {},
    "domainEntry": {
      "id": {},
      "name": {},
      "target": {},
      "isAlias": {},
      "type": {},
      "options": {
        "property1": "string",
        "property2": "string"
      }
    }
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry`

<p>Updates a domain recordset after it is created.</p> <p>The <code>update domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "domainName": {},
  "domainEntry": {
    "id": {},
    "name": {},
    "target": {},
    "isAlias": {},
    "type": {},
    "options": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="updatedomainentry-parameters">Parameters</h3>

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
|body|body|[UpdateDomainEntryRequest](#schemaupdatedomainentryrequest)|true|none|
|» domainName|body|object|true|none|
|» domainEntry|body|object|true|none|
|» » id|body|object|false|none|
|» » name|body|object|false|none|
|» » target|body|object|false|none|
|» » isAlias|body|object|false|none|
|» » type|body|object|false|none|
|» » options|body|object|false|none|
|» » » **additionalProperties**|body|[string](#schemastring)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.UpdateDomainEntry|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="updatedomainentry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDomainEntryResult](#schemaupdatedomainentryresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateInstanceMetadataOptions

<a id="opIdUpdateInstanceMetadataOptions"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.UpdateInstanceMetadataOptions' \
  -d '{
    "instanceName": {},
    "httpTokens": {},
    "httpEndpoint": {},
    "httpPutResponseHopLimit": {},
    "httpProtocolIpv6": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions`

Modifies the Amazon Lightsail instance metadata parameters on a running or stopped instance. When you modify the parameters on a running instance, the <code>GetInstance</code> or <code>GetInstances</code> API operation initially responds with a state of <code>pending</code>. After the parameter modifications are successfully applied, the state changes to <code>applied</code> in subsequent <code>GetInstance</code> or <code>GetInstances</code> API calls. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-instance-metadata-service">Use IMDSv2 with an Amazon Lightsail instance</a> in the <i>Amazon Lightsail Developer Guide</i>.

> Body parameter

```json
{
  "instanceName": {},
  "httpTokens": {},
  "httpEndpoint": {},
  "httpPutResponseHopLimit": {},
  "httpProtocolIpv6": {}
}
```

<h3 id="updateinstancemetadataoptions-parameters">Parameters</h3>

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
|body|body|[UpdateInstanceMetadataOptionsRequest](#schemaupdateinstancemetadataoptionsrequest)|true|none|
|» instanceName|body|object|true|none|
|» httpTokens|body|object|false|none|
|» httpEndpoint|body|object|false|none|
|» httpPutResponseHopLimit|body|object|false|none|
|» httpProtocolIpv6|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.UpdateInstanceMetadataOptions|

> Example responses

> 200 Response

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
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

<h3 id="updateinstancemetadataoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateInstanceMetadataOptionsResult](#schemaupdateinstancemetadataoptionsresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLoadBalancerAttribute

<a id="opIdUpdateLoadBalancerAttribute"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.UpdateLoadBalancerAttribute' \
  -d '{
    "loadBalancerName": {},
    "attributeName": {},
    "attributeValue": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute`

<p>Updates the specified attribute for a load balancer. You can only update one attribute at a time.</p> <p>The <code>update load balancer attribute</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "loadBalancerName": {},
  "attributeName": {},
  "attributeValue": {}
}
```

<h3 id="updateloadbalancerattribute-parameters">Parameters</h3>

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
|body|body|[UpdateLoadBalancerAttributeRequest](#schemaupdateloadbalancerattributerequest)|true|none|
|» loadBalancerName|body|object|true|none|
|» attributeName|body|object|true|none|
|» attributeValue|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.UpdateLoadBalancerAttribute|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="updateloadbalancerattribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLoadBalancerAttributeResult](#schemaupdateloadbalancerattributeresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRelationalDatabase

<a id="opIdUpdateRelationalDatabase"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.UpdateRelationalDatabase' \
  -d '{
    "relationalDatabaseName": {},
    "masterUserPassword": {},
    "rotateMasterUserPassword": {},
    "preferredBackupWindow": {},
    "preferredMaintenanceWindow": {},
    "enableBackupRetention": {},
    "disableBackupRetention": {},
    "publiclyAccessible": {},
    "applyImmediately": {},
    "caCertificateIdentifier": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase`

<p>Allows the update of one or more attributes of a database in Amazon Lightsail.</p> <p>Updates are applied immediately, or in cases where the updates could result in an outage, are applied during the database's predefined maintenance window.</p> <p>The <code>update relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "relationalDatabaseName": {},
  "masterUserPassword": {},
  "rotateMasterUserPassword": {},
  "preferredBackupWindow": {},
  "preferredMaintenanceWindow": {},
  "enableBackupRetention": {},
  "disableBackupRetention": {},
  "publiclyAccessible": {},
  "applyImmediately": {},
  "caCertificateIdentifier": {}
}
```

<h3 id="updaterelationaldatabase-parameters">Parameters</h3>

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
|body|body|[UpdateRelationalDatabaseRequest](#schemaupdaterelationaldatabaserequest)|true|none|
|» relationalDatabaseName|body|object|true|none|
|» masterUserPassword|body|object|false|none|
|» rotateMasterUserPassword|body|object|false|none|
|» preferredBackupWindow|body|object|false|none|
|» preferredMaintenanceWindow|body|object|false|none|
|» enableBackupRetention|body|object|false|none|
|» disableBackupRetention|body|object|false|none|
|» publiclyAccessible|body|object|false|none|
|» applyImmediately|body|object|false|none|
|» caCertificateIdentifier|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.UpdateRelationalDatabase|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="updaterelationaldatabase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRelationalDatabaseResult](#schemaupdaterelationaldatabaseresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRelationalDatabaseParameters

<a id="opIdUpdateRelationalDatabaseParameters"></a>

> Code samples

```bash
curl 'https://lightsail.us-east-1.amazonaws.com/#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Lightsail_20161128.UpdateRelationalDatabaseParameters' \
  -d '{
    "relationalDatabaseName": {},
    "parameters": {}
  }'
```

`POST /#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters`

<p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p> <p>Parameter updates don't cause outages; therefore, their application is not subject to the preferred maintenance window. However, there are two ways in which parameter updates are applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a <code>dynamic</code> apply type are applied immediately. Parameters marked with a <code>pending-reboot</code> apply type are applied only after the database is rebooted using the <code>reboot relational database</code> operation.</p> <p>The <code>update relational database parameters</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

> Body parameter

```json
{
  "relationalDatabaseName": {},
  "parameters": {}
}
```

<h3 id="updaterelationaldatabaseparameters-parameters">Parameters</h3>

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
|body|body|[UpdateRelationalDatabaseParametersRequest](#schemaupdaterelationaldatabaseparametersrequest)|true|none|
|» relationalDatabaseName|body|object|true|none|
|» parameters|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Lightsail_20161128.UpdateRelationalDatabaseParameters|

> Example responses

> 200 Response

```json
{
  "operations": {}
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

<h3 id="updaterelationaldatabaseparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRelationalDatabaseParametersResult](#schemaupdaterelationaldatabaseparametersresult)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|OperationFailureException|[OperationFailureException](#schemaoperationfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|AccountSetupInProgressException|[AccountSetupInProgressException](#schemaaccountsetupinprogressexception)|
|486|486|UnauthenticatedException|[UnauthenticatedException](#schemaunauthenticatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AllocateStaticIpResult">AllocateStaticIpResult</h2>
<!-- backwards compatibility -->
<a id="schemaallocatestaticipresult"></a>
<a id="schema_AllocateStaticIpResult"></a>
<a id="tocSallocatestaticipresult"></a>
<a id="tocsallocatestaticipresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_AllocateStaticIpRequest">AllocateStaticIpRequest</h2>
<!-- backwards compatibility -->
<a id="schemaallocatestaticiprequest"></a>
<a id="schema_AllocateStaticIpRequest"></a>
<a id="tocSallocatestaticiprequest"></a>
<a id="tocsallocatestaticiprequest"></a>

```json
{
  "staticIpName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|staticIpName|object|true|none|none|

<h2 id="tocS_ServiceException">ServiceException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceexception"></a>
<a id="schema_ServiceException"></a>
<a id="tocSserviceexception"></a>
<a id="tocsserviceexception"></a>

```json
null
```

<h2 id="tocS_InvalidInputException">InvalidInputException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinputexception"></a>
<a id="schema_InvalidInputException"></a>
<a id="tocSinvalidinputexception"></a>
<a id="tocsinvalidinputexception"></a>

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

<h2 id="tocS_OperationFailureException">OperationFailureException</h2>
<!-- backwards compatibility -->
<a id="schemaoperationfailureexception"></a>
<a id="schema_OperationFailureException"></a>
<a id="tocSoperationfailureexception"></a>
<a id="tocsoperationfailureexception"></a>

```json
null
```

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_AccountSetupInProgressException">AccountSetupInProgressException</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsetupinprogressexception"></a>
<a id="schema_AccountSetupInProgressException"></a>
<a id="tocSaccountsetupinprogressexception"></a>
<a id="tocsaccountsetupinprogressexception"></a>

```json
null
```

<h2 id="tocS_UnauthenticatedException">UnauthenticatedException</h2>
<!-- backwards compatibility -->
<a id="schemaunauthenticatedexception"></a>
<a id="schema_UnauthenticatedException"></a>
<a id="tocSunauthenticatedexception"></a>
<a id="tocsunauthenticatedexception"></a>

```json
null
```

<h2 id="tocS_AttachCertificateToDistributionResult">AttachCertificateToDistributionResult</h2>
<!-- backwards compatibility -->
<a id="schemaattachcertificatetodistributionresult"></a>
<a id="schema_AttachCertificateToDistributionResult"></a>
<a id="tocSattachcertificatetodistributionresult"></a>
<a id="tocsattachcertificatetodistributionresult"></a>

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|object|false|none|none|

<h2 id="tocS_AttachCertificateToDistributionRequest">AttachCertificateToDistributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattachcertificatetodistributionrequest"></a>
<a id="schema_AttachCertificateToDistributionRequest"></a>
<a id="tocSattachcertificatetodistributionrequest"></a>
<a id="tocsattachcertificatetodistributionrequest"></a>

```json
{
  "distributionName": {},
  "certificateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distributionName|object|true|none|none|
|certificateName|object|true|none|none|

<h2 id="tocS_AttachDiskResult">AttachDiskResult</h2>
<!-- backwards compatibility -->
<a id="schemaattachdiskresult"></a>
<a id="schema_AttachDiskResult"></a>
<a id="tocSattachdiskresult"></a>
<a id="tocsattachdiskresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_AttachDiskRequest">AttachDiskRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattachdiskrequest"></a>
<a id="schema_AttachDiskRequest"></a>
<a id="tocSattachdiskrequest"></a>
<a id="tocsattachdiskrequest"></a>

```json
{
  "diskName": {},
  "instanceName": {},
  "diskPath": {},
  "autoMounting": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskName|object|true|none|none|
|instanceName|object|true|none|none|
|diskPath|object|true|none|none|
|autoMounting|object|false|none|none|

<h2 id="tocS_AttachInstancesToLoadBalancerResult">AttachInstancesToLoadBalancerResult</h2>
<!-- backwards compatibility -->
<a id="schemaattachinstancestoloadbalancerresult"></a>
<a id="schema_AttachInstancesToLoadBalancerResult"></a>
<a id="tocSattachinstancestoloadbalancerresult"></a>
<a id="tocsattachinstancestoloadbalancerresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_AttachInstancesToLoadBalancerRequest">AttachInstancesToLoadBalancerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattachinstancestoloadbalancerrequest"></a>
<a id="schema_AttachInstancesToLoadBalancerRequest"></a>
<a id="tocSattachinstancestoloadbalancerrequest"></a>
<a id="tocsattachinstancestoloadbalancerrequest"></a>

```json
{
  "loadBalancerName": {},
  "instanceNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loadBalancerName|object|true|none|none|
|instanceNames|object|true|none|none|

<h2 id="tocS_AttachLoadBalancerTlsCertificateResult">AttachLoadBalancerTlsCertificateResult</h2>
<!-- backwards compatibility -->
<a id="schemaattachloadbalancertlscertificateresult"></a>
<a id="schema_AttachLoadBalancerTlsCertificateResult"></a>
<a id="tocSattachloadbalancertlscertificateresult"></a>
<a id="tocsattachloadbalancertlscertificateresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_AttachLoadBalancerTlsCertificateRequest">AttachLoadBalancerTlsCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattachloadbalancertlscertificaterequest"></a>
<a id="schema_AttachLoadBalancerTlsCertificateRequest"></a>
<a id="tocSattachloadbalancertlscertificaterequest"></a>
<a id="tocsattachloadbalancertlscertificaterequest"></a>

```json
{
  "loadBalancerName": {},
  "certificateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loadBalancerName|object|true|none|none|
|certificateName|object|true|none|none|

<h2 id="tocS_AttachStaticIpResult">AttachStaticIpResult</h2>
<!-- backwards compatibility -->
<a id="schemaattachstaticipresult"></a>
<a id="schema_AttachStaticIpResult"></a>
<a id="tocSattachstaticipresult"></a>
<a id="tocsattachstaticipresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_AttachStaticIpRequest">AttachStaticIpRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattachstaticiprequest"></a>
<a id="schema_AttachStaticIpRequest"></a>
<a id="tocSattachstaticiprequest"></a>
<a id="tocsattachstaticiprequest"></a>

```json
{
  "staticIpName": {},
  "instanceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|staticIpName|object|true|none|none|
|instanceName|object|true|none|none|

<h2 id="tocS_CloseInstancePublicPortsResult">CloseInstancePublicPortsResult</h2>
<!-- backwards compatibility -->
<a id="schemacloseinstancepublicportsresult"></a>
<a id="schema_CloseInstancePublicPortsResult"></a>
<a id="tocScloseinstancepublicportsresult"></a>
<a id="tocscloseinstancepublicportsresult"></a>

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|object|false|none|none|

<h2 id="tocS_CloseInstancePublicPortsRequest">CloseInstancePublicPortsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacloseinstancepublicportsrequest"></a>
<a id="schema_CloseInstancePublicPortsRequest"></a>
<a id="tocScloseinstancepublicportsrequest"></a>
<a id="tocscloseinstancepublicportsrequest"></a>

```json
{
  "portInfo": {
    "fromPort": {},
    "toPort": {},
    "protocol": {},
    "cidrs": {},
    "ipv6Cidrs": {},
    "cidrListAliases": {}
  },
  "instanceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portInfo|object|true|none|none|
|instanceName|object|true|none|none|

<h2 id="tocS_CopySnapshotResult">CopySnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemacopysnapshotresult"></a>
<a id="schema_CopySnapshotResult"></a>
<a id="tocScopysnapshotresult"></a>
<a id="tocscopysnapshotresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_CopySnapshotRequest">CopySnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemacopysnapshotrequest"></a>
<a id="schema_CopySnapshotRequest"></a>
<a id="tocScopysnapshotrequest"></a>
<a id="tocscopysnapshotrequest"></a>

```json
{
  "sourceSnapshotName": {},
  "sourceResourceName": {},
  "restoreDate": {},
  "useLatestRestorableAutoSnapshot": {},
  "targetSnapshotName": {},
  "sourceRegion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceSnapshotName|object|false|none|none|
|sourceResourceName|object|false|none|none|
|restoreDate|object|false|none|none|
|useLatestRestorableAutoSnapshot|object|false|none|none|
|targetSnapshotName|object|true|none|none|
|sourceRegion|object|true|none|none|

<h2 id="tocS_CreateBucketResult">CreateBucketResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatebucketresult"></a>
<a id="schema_CreateBucketResult"></a>
<a id="tocScreatebucketresult"></a>
<a id="tocscreatebucketresult"></a>

```json
{
  "bucket": {
    "resourceType": {},
    "accessRules": {
      "getObject": {},
      "allowPublicOverrides": {}
    },
    "arn": {},
    "bundleId": {},
    "createdAt": {},
    "url": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "name": {},
    "supportCode": {},
    "tags": {},
    "objectVersioning": {},
    "ableToUpdateBundle": {},
    "readonlyAccessAccounts": {},
    "resourcesReceivingAccess": {},
    "state": {
      "code": {},
      "message": {}
    },
    "accessLogConfig": {
      "enabled": {},
      "destination": {},
      "prefix": {}
    }
  },
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|false|none|none|
|operations|object|false|none|none|

<h2 id="tocS_CreateBucketRequest">CreateBucketRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebucketrequest"></a>
<a id="schema_CreateBucketRequest"></a>
<a id="tocScreatebucketrequest"></a>
<a id="tocscreatebucketrequest"></a>

```json
{
  "bucketName": {},
  "bundleId": {},
  "tags": {},
  "enableObjectVersioning": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|
|bundleId|object|true|none|none|
|tags|object|false|none|none|
|enableObjectVersioning|object|false|none|none|

<h2 id="tocS_CreateBucketAccessKeyResult">CreateBucketAccessKeyResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatebucketaccesskeyresult"></a>
<a id="schema_CreateBucketAccessKeyResult"></a>
<a id="tocScreatebucketaccesskeyresult"></a>
<a id="tocscreatebucketaccesskeyresult"></a>

```json
{
  "accessKey": {
    "accessKeyId": {},
    "secretAccessKey": {},
    "status": {},
    "createdAt": {},
    "lastUsed": {
      "lastUsedDate": {},
      "region": {},
      "serviceName": {}
    }
  },
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessKey|object|false|none|none|
|operations|object|false|none|none|

<h2 id="tocS_CreateBucketAccessKeyRequest">CreateBucketAccessKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebucketaccesskeyrequest"></a>
<a id="schema_CreateBucketAccessKeyRequest"></a>
<a id="tocScreatebucketaccesskeyrequest"></a>
<a id="tocscreatebucketaccesskeyrequest"></a>

```json
{
  "bucketName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|

<h2 id="tocS_CreateCertificateResult">CreateCertificateResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatecertificateresult"></a>
<a id="schema_CreateCertificateResult"></a>
<a id="tocScreatecertificateresult"></a>
<a id="tocscreatecertificateresult"></a>

```json
{
  "certificate": {
    "certificateArn": {},
    "certificateName": {},
    "domainName": {},
    "certificateDetail": {
      "arn": {},
      "name": {},
      "domainName": {},
      "status": {},
      "serialNumber": {},
      "subjectAlternativeNames": {},
      "domainValidationRecords": {},
      "requestFailureReason": {},
      "inUseResourceCount": {},
      "keyAlgorithm": {},
      "createdAt": {},
      "issuedAt": {},
      "issuerCA": {},
      "notBefore": {},
      "notAfter": {},
      "eligibleToRenew": {},
      "renewalSummary": {
        "domainValidationRecords": {},
        "renewalStatus": {},
        "renewalStatusReason": {},
        "updatedAt": {}
      },
      "revokedAt": {},
      "revocationReason": {},
      "tags": {},
      "supportCode": {}
    },
    "tags": {}
  },
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|object|false|none|none|
|operations|object|false|none|none|

<h2 id="tocS_CreateCertificateRequest">CreateCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecertificaterequest"></a>
<a id="schema_CreateCertificateRequest"></a>
<a id="tocScreatecertificaterequest"></a>
<a id="tocscreatecertificaterequest"></a>

```json
{
  "certificateName": {},
  "domainName": {},
  "subjectAlternativeNames": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateName|object|true|none|none|
|domainName|object|true|none|none|
|subjectAlternativeNames|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateCloudFormationStackResult">CreateCloudFormationStackResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatecloudformationstackresult"></a>
<a id="schema_CreateCloudFormationStackResult"></a>
<a id="tocScreatecloudformationstackresult"></a>
<a id="tocscreatecloudformationstackresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_CreateCloudFormationStackRequest">CreateCloudFormationStackRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecloudformationstackrequest"></a>
<a id="schema_CreateCloudFormationStackRequest"></a>
<a id="tocScreatecloudformationstackrequest"></a>
<a id="tocscreatecloudformationstackrequest"></a>

```json
{
  "instances": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instances|object|true|none|none|

<h2 id="tocS_CreateContactMethodResult">CreateContactMethodResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactmethodresult"></a>
<a id="schema_CreateContactMethodResult"></a>
<a id="tocScreatecontactmethodresult"></a>
<a id="tocscreatecontactmethodresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_CreateContactMethodRequest">CreateContactMethodRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactmethodrequest"></a>
<a id="schema_CreateContactMethodRequest"></a>
<a id="tocScreatecontactmethodrequest"></a>
<a id="tocscreatecontactmethodrequest"></a>

```json
{
  "protocol": {},
  "contactEndpoint": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|protocol|object|true|none|none|
|contactEndpoint|object|true|none|none|

<h2 id="tocS_CreateContainerServiceResult">CreateContainerServiceResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontainerserviceresult"></a>
<a id="schema_CreateContainerServiceResult"></a>
<a id="tocScreatecontainerserviceresult"></a>
<a id="tocscreatecontainerserviceresult"></a>

```json
{
  "containerService": {
    "containerServiceName": {},
    "arn": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "power": {},
    "powerId": {},
    "state": {},
    "stateDetail": {
      "code": {},
      "message": {}
    },
    "scale": {},
    "currentDeployment": {
      "version": {},
      "state": {},
      "containers": {
        "property1": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        },
        "property2": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        }
      },
      "publicEndpoint": {
        "containerName": {},
        "containerPort": {},
        "healthCheck": {
          "healthyThreshold": {},
          "unhealthyThreshold": {},
          "timeoutSeconds": {},
          "intervalSeconds": {},
          "path": {},
          "successCodes": {}
        }
      },
      "createdAt": {}
    },
    "nextDeployment": {
      "version": {},
      "state": {},
      "containers": {
        "property1": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        },
        "property2": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        }
      },
      "publicEndpoint": {
        "containerName": {},
        "containerPort": {},
        "healthCheck": {
          "healthyThreshold": {},
          "unhealthyThreshold": {},
          "timeoutSeconds": {},
          "intervalSeconds": {},
          "path": {},
          "successCodes": {}
        }
      },
      "createdAt": {}
    },
    "isDisabled": {},
    "principalArn": {},
    "privateDomainName": {},
    "publicDomainNames": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "url": {},
    "privateRegistryAccess": {
      "ecrImagePullerRole": {
        "isActive": {},
        "principalArn": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerService|object|false|none|none|

<h2 id="tocS_CreateContainerServiceRequest">CreateContainerServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontainerservicerequest"></a>
<a id="schema_CreateContainerServiceRequest"></a>
<a id="tocScreatecontainerservicerequest"></a>
<a id="tocscreatecontainerservicerequest"></a>

```json
{
  "serviceName": {},
  "power": {},
  "scale": {},
  "tags": {},
  "publicDomainNames": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "deployment": {
    "containers": {
      "property1": {
        "image": {},
        "command": {},
        "environment": {
          "property1": "string",
          "property2": "string"
        },
        "ports": {
          "property1": "HTTP",
          "property2": "HTTP"
        }
      },
      "property2": {
        "image": {},
        "command": {},
        "environment": {
          "property1": "string",
          "property2": "string"
        },
        "ports": {
          "property1": "HTTP",
          "property2": "HTTP"
        }
      }
    },
    "publicEndpoint": {
      "containerName": {},
      "containerPort": {},
      "healthCheck": {
        "healthyThreshold": {},
        "unhealthyThreshold": {},
        "timeoutSeconds": {},
        "intervalSeconds": {},
        "path": {},
        "successCodes": {}
      }
    }
  },
  "privateRegistryAccess": {
    "ecrImagePullerRole": {
      "isActive": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|object|true|none|none|
|power|object|true|none|none|
|scale|object|true|none|none|
|tags|object|false|none|none|
|publicDomainNames|object|false|none|none|
|deployment|object|false|none|none|
|privateRegistryAccess|object|false|none|none|

<h2 id="tocS_CreateContainerServiceDeploymentResult">CreateContainerServiceDeploymentResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontainerservicedeploymentresult"></a>
<a id="schema_CreateContainerServiceDeploymentResult"></a>
<a id="tocScreatecontainerservicedeploymentresult"></a>
<a id="tocscreatecontainerservicedeploymentresult"></a>

```json
{
  "containerService": {
    "containerServiceName": {},
    "arn": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "power": {},
    "powerId": {},
    "state": {},
    "stateDetail": {
      "code": {},
      "message": {}
    },
    "scale": {},
    "currentDeployment": {
      "version": {},
      "state": {},
      "containers": {
        "property1": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        },
        "property2": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        }
      },
      "publicEndpoint": {
        "containerName": {},
        "containerPort": {},
        "healthCheck": {
          "healthyThreshold": {},
          "unhealthyThreshold": {},
          "timeoutSeconds": {},
          "intervalSeconds": {},
          "path": {},
          "successCodes": {}
        }
      },
      "createdAt": {}
    },
    "nextDeployment": {
      "version": {},
      "state": {},
      "containers": {
        "property1": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        },
        "property2": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        }
      },
      "publicEndpoint": {
        "containerName": {},
        "containerPort": {},
        "healthCheck": {
          "healthyThreshold": {},
          "unhealthyThreshold": {},
          "timeoutSeconds": {},
          "intervalSeconds": {},
          "path": {},
          "successCodes": {}
        }
      },
      "createdAt": {}
    },
    "isDisabled": {},
    "principalArn": {},
    "privateDomainName": {},
    "publicDomainNames": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "url": {},
    "privateRegistryAccess": {
      "ecrImagePullerRole": {
        "isActive": {},
        "principalArn": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerService|object|false|none|none|

<h2 id="tocS_CreateContainerServiceDeploymentRequest">CreateContainerServiceDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontainerservicedeploymentrequest"></a>
<a id="schema_CreateContainerServiceDeploymentRequest"></a>
<a id="tocScreatecontainerservicedeploymentrequest"></a>
<a id="tocscreatecontainerservicedeploymentrequest"></a>

```json
{
  "serviceName": {},
  "containers": {
    "property1": {
      "image": {},
      "command": {},
      "environment": {
        "property1": "string",
        "property2": "string"
      },
      "ports": {
        "property1": "HTTP",
        "property2": "HTTP"
      }
    },
    "property2": {
      "image": {},
      "command": {},
      "environment": {
        "property1": "string",
        "property2": "string"
      },
      "ports": {
        "property1": "HTTP",
        "property2": "HTTP"
      }
    }
  },
  "publicEndpoint": {
    "containerName": {},
    "containerPort": {},
    "healthCheck": {
      "healthyThreshold": {},
      "unhealthyThreshold": {},
      "timeoutSeconds": {},
      "intervalSeconds": {},
      "path": {},
      "successCodes": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|object|true|none|none|
|containers|object|false|none|none|
|publicEndpoint|object|false|none|none|

<h2 id="tocS_CreateContainerServiceRegistryLoginResult">CreateContainerServiceRegistryLoginResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontainerserviceregistryloginresult"></a>
<a id="schema_CreateContainerServiceRegistryLoginResult"></a>
<a id="tocScreatecontainerserviceregistryloginresult"></a>
<a id="tocscreatecontainerserviceregistryloginresult"></a>

```json
{
  "registryLogin": {
    "username": {},
    "password": {},
    "expiresAt": {},
    "registry": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryLogin|object|false|none|none|

<h2 id="tocS_CreateContainerServiceRegistryLoginRequest">CreateContainerServiceRegistryLoginRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontainerserviceregistryloginrequest"></a>
<a id="schema_CreateContainerServiceRegistryLoginRequest"></a>
<a id="tocScreatecontainerserviceregistryloginrequest"></a>
<a id="tocscreatecontainerserviceregistryloginrequest"></a>

```json
{}
```

<h2 id="tocS_CreateDiskResult">CreateDiskResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatediskresult"></a>
<a id="schema_CreateDiskResult"></a>
<a id="tocScreatediskresult"></a>
<a id="tocscreatediskresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_CreateDiskRequest">CreateDiskRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatediskrequest"></a>
<a id="schema_CreateDiskRequest"></a>
<a id="tocScreatediskrequest"></a>
<a id="tocscreatediskrequest"></a>

```json
{
  "diskName": {},
  "availabilityZone": {},
  "sizeInGb": {},
  "tags": {},
  "addOns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskName|object|true|none|none|
|availabilityZone|object|true|none|none|
|sizeInGb|object|true|none|none|
|tags|object|false|none|none|
|addOns|object|false|none|none|

<h2 id="tocS_CreateDiskFromSnapshotResult">CreateDiskFromSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatediskfromsnapshotresult"></a>
<a id="schema_CreateDiskFromSnapshotResult"></a>
<a id="tocScreatediskfromsnapshotresult"></a>
<a id="tocscreatediskfromsnapshotresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_CreateDiskFromSnapshotRequest">CreateDiskFromSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatediskfromsnapshotrequest"></a>
<a id="schema_CreateDiskFromSnapshotRequest"></a>
<a id="tocScreatediskfromsnapshotrequest"></a>
<a id="tocscreatediskfromsnapshotrequest"></a>

```json
{
  "diskName": {},
  "diskSnapshotName": {},
  "availabilityZone": {},
  "sizeInGb": {},
  "tags": {},
  "addOns": {},
  "sourceDiskName": {},
  "restoreDate": {},
  "useLatestRestorableAutoSnapshot": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskName|object|true|none|none|
|diskSnapshotName|object|false|none|none|
|availabilityZone|object|true|none|none|
|sizeInGb|object|true|none|none|
|tags|object|false|none|none|
|addOns|object|false|none|none|
|sourceDiskName|object|false|none|none|
|restoreDate|object|false|none|none|
|useLatestRestorableAutoSnapshot|object|false|none|none|

<h2 id="tocS_CreateDiskSnapshotResult">CreateDiskSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedisksnapshotresult"></a>
<a id="schema_CreateDiskSnapshotResult"></a>
<a id="tocScreatedisksnapshotresult"></a>
<a id="tocscreatedisksnapshotresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_CreateDiskSnapshotRequest">CreateDiskSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedisksnapshotrequest"></a>
<a id="schema_CreateDiskSnapshotRequest"></a>
<a id="tocScreatedisksnapshotrequest"></a>
<a id="tocscreatedisksnapshotrequest"></a>

```json
{
  "diskName": {},
  "diskSnapshotName": {},
  "instanceName": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskName|object|false|none|none|
|diskSnapshotName|object|true|none|none|
|instanceName|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateDistributionResult">CreateDistributionResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedistributionresult"></a>
<a id="schema_CreateDistributionResult"></a>
<a id="tocScreatedistributionresult"></a>
<a id="tocscreatedistributionresult"></a>

```json
{
  "distribution": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "alternativeDomainNames": {},
    "status": {},
    "isEnabled": {},
    "domainName": {},
    "bundleId": {},
    "certificateName": {},
    "origin": {
      "name": {},
      "resourceType": {},
      "regionName": {},
      "protocolPolicy": {}
    },
    "originPublicDNS": {},
    "defaultCacheBehavior": {
      "behavior": {}
    },
    "cacheBehaviorSettings": {
      "defaultTTL": {},
      "minimumTTL": {},
      "maximumTTL": {},
      "allowedHTTPMethods": {},
      "cachedHTTPMethods": {},
      "forwardedCookies": {
        "option": {},
        "cookiesAllowList": {}
      },
      "forwardedHeaders": {
        "option": {},
        "headersAllowList": {}
      },
      "forwardedQueryStrings": {
        "option": {},
        "queryStringsAllowList": {}
      }
    },
    "cacheBehaviors": {},
    "ableToUpdateBundle": {},
    "ipAddressType": {},
    "tags": {}
  },
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distribution|object|false|none|none|
|operation|object|false|none|none|

<h2 id="tocS_CreateDistributionRequest">CreateDistributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedistributionrequest"></a>
<a id="schema_CreateDistributionRequest"></a>
<a id="tocScreatedistributionrequest"></a>
<a id="tocscreatedistributionrequest"></a>

```json
{
  "distributionName": {},
  "origin": {
    "name": {},
    "regionName": {},
    "protocolPolicy": {}
  },
  "defaultCacheBehavior": {
    "behavior": {}
  },
  "cacheBehaviorSettings": {
    "defaultTTL": {},
    "minimumTTL": {},
    "maximumTTL": {},
    "allowedHTTPMethods": {},
    "cachedHTTPMethods": {},
    "forwardedCookies": {
      "option": {},
      "cookiesAllowList": {}
    },
    "forwardedHeaders": {
      "option": {},
      "headersAllowList": {}
    },
    "forwardedQueryStrings": {
      "option": {},
      "queryStringsAllowList": {}
    }
  },
  "cacheBehaviors": {},
  "bundleId": {},
  "ipAddressType": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distributionName|object|true|none|none|
|origin|object|true|none|none|
|defaultCacheBehavior|object|true|none|none|
|cacheBehaviorSettings|object|false|none|none|
|cacheBehaviors|object|false|none|none|
|bundleId|object|true|none|none|
|ipAddressType|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateDomainResult">CreateDomainResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainresult"></a>
<a id="schema_CreateDomainResult"></a>
<a id="tocScreatedomainresult"></a>
<a id="tocscreatedomainresult"></a>

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|object|false|none|none|

<h2 id="tocS_CreateDomainRequest">CreateDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainrequest"></a>
<a id="schema_CreateDomainRequest"></a>
<a id="tocScreatedomainrequest"></a>
<a id="tocscreatedomainrequest"></a>

```json
{
  "domainName": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateDomainEntryResult">CreateDomainEntryResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainentryresult"></a>
<a id="schema_CreateDomainEntryResult"></a>
<a id="tocScreatedomainentryresult"></a>
<a id="tocscreatedomainentryresult"></a>

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|object|false|none|none|

<h2 id="tocS_CreateDomainEntryRequest">CreateDomainEntryRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainentryrequest"></a>
<a id="schema_CreateDomainEntryRequest"></a>
<a id="tocScreatedomainentryrequest"></a>
<a id="tocscreatedomainentryrequest"></a>

```json
{
  "domainName": {},
  "domainEntry": {
    "id": {},
    "name": {},
    "target": {},
    "isAlias": {},
    "type": {},
    "options": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|true|none|none|
|domainEntry|object|true|none|none|

<h2 id="tocS_CreateGUISessionAccessDetailsResult">CreateGUISessionAccessDetailsResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateguisessionaccessdetailsresult"></a>
<a id="schema_CreateGUISessionAccessDetailsResult"></a>
<a id="tocScreateguisessionaccessdetailsresult"></a>
<a id="tocscreateguisessionaccessdetailsresult"></a>

```json
{
  "resourceName": {},
  "status": {},
  "percentageComplete": {},
  "failureReason": {},
  "sessions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|object|false|none|none|
|status|object|false|none|none|
|percentageComplete|object|false|none|none|
|failureReason|object|false|none|none|
|sessions|object|false|none|none|

<h2 id="tocS_CreateGUISessionAccessDetailsRequest">CreateGUISessionAccessDetailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateguisessionaccessdetailsrequest"></a>
<a id="schema_CreateGUISessionAccessDetailsRequest"></a>
<a id="tocScreateguisessionaccessdetailsrequest"></a>
<a id="tocscreateguisessionaccessdetailsrequest"></a>

```json
{
  "resourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|object|true|none|none|

<h2 id="tocS_CreateInstanceSnapshotResult">CreateInstanceSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstancesnapshotresult"></a>
<a id="schema_CreateInstanceSnapshotResult"></a>
<a id="tocScreateinstancesnapshotresult"></a>
<a id="tocscreateinstancesnapshotresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_CreateInstanceSnapshotRequest">CreateInstanceSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstancesnapshotrequest"></a>
<a id="schema_CreateInstanceSnapshotRequest"></a>
<a id="tocScreateinstancesnapshotrequest"></a>
<a id="tocscreateinstancesnapshotrequest"></a>

```json
{
  "instanceSnapshotName": {},
  "instanceName": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceSnapshotName|object|true|none|none|
|instanceName|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateInstancesResult">CreateInstancesResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstancesresult"></a>
<a id="schema_CreateInstancesResult"></a>
<a id="tocScreateinstancesresult"></a>
<a id="tocscreateinstancesresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_CreateInstancesRequest">CreateInstancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstancesrequest"></a>
<a id="schema_CreateInstancesRequest"></a>
<a id="tocScreateinstancesrequest"></a>
<a id="tocscreateinstancesrequest"></a>

```json
{
  "instanceNames": {},
  "availabilityZone": {},
  "customImageName": {},
  "blueprintId": {},
  "bundleId": {},
  "userData": {},
  "keyPairName": {},
  "tags": {},
  "addOns": {},
  "ipAddressType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceNames|object|true|none|none|
|availabilityZone|object|true|none|none|
|customImageName|object|false|none|none|
|blueprintId|object|true|none|none|
|bundleId|object|true|none|none|
|userData|object|false|none|none|
|keyPairName|object|false|none|none|
|tags|object|false|none|none|
|addOns|object|false|none|none|
|ipAddressType|object|false|none|none|

<h2 id="tocS_CreateInstancesFromSnapshotResult">CreateInstancesFromSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstancesfromsnapshotresult"></a>
<a id="schema_CreateInstancesFromSnapshotResult"></a>
<a id="tocScreateinstancesfromsnapshotresult"></a>
<a id="tocscreateinstancesfromsnapshotresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_CreateInstancesFromSnapshotRequest">CreateInstancesFromSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstancesfromsnapshotrequest"></a>
<a id="schema_CreateInstancesFromSnapshotRequest"></a>
<a id="tocScreateinstancesfromsnapshotrequest"></a>
<a id="tocscreateinstancesfromsnapshotrequest"></a>

```json
{
  "instanceNames": {},
  "attachedDiskMapping": {
    "property1": [
      {
        "originalDiskPath": {},
        "newDiskName": {}
      }
    ],
    "property2": [
      {
        "originalDiskPath": {},
        "newDiskName": {}
      }
    ]
  },
  "availabilityZone": {},
  "instanceSnapshotName": {},
  "bundleId": {},
  "userData": {},
  "keyPairName": {},
  "tags": {},
  "addOns": {},
  "ipAddressType": {},
  "sourceInstanceName": {},
  "restoreDate": {},
  "useLatestRestorableAutoSnapshot": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceNames|object|true|none|none|
|attachedDiskMapping|object|false|none|none|
|availabilityZone|object|true|none|none|
|instanceSnapshotName|object|false|none|none|
|bundleId|object|true|none|none|
|userData|object|false|none|none|
|keyPairName|object|false|none|none|
|tags|object|false|none|none|
|addOns|object|false|none|none|
|ipAddressType|object|false|none|none|
|sourceInstanceName|object|false|none|none|
|restoreDate|object|false|none|none|
|useLatestRestorableAutoSnapshot|object|false|none|none|

<h2 id="tocS_CreateKeyPairResult">CreateKeyPairResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatekeypairresult"></a>
<a id="schema_CreateKeyPairResult"></a>
<a id="tocScreatekeypairresult"></a>
<a id="tocscreatekeypairresult"></a>

```json
{
  "keyPair": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "fingerprint": {}
  },
  "publicKeyBase64": {},
  "privateKeyBase64": {},
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyPair|object|false|none|none|
|publicKeyBase64|object|false|none|none|
|privateKeyBase64|object|false|none|none|
|operation|object|false|none|none|

<h2 id="tocS_CreateKeyPairRequest">CreateKeyPairRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatekeypairrequest"></a>
<a id="schema_CreateKeyPairRequest"></a>
<a id="tocScreatekeypairrequest"></a>
<a id="tocscreatekeypairrequest"></a>

```json
{
  "keyPairName": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyPairName|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateLoadBalancerResult">CreateLoadBalancerResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateloadbalancerresult"></a>
<a id="schema_CreateLoadBalancerResult"></a>
<a id="tocScreateloadbalancerresult"></a>
<a id="tocscreateloadbalancerresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_CreateLoadBalancerRequest">CreateLoadBalancerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateloadbalancerrequest"></a>
<a id="schema_CreateLoadBalancerRequest"></a>
<a id="tocScreateloadbalancerrequest"></a>
<a id="tocscreateloadbalancerrequest"></a>

```json
{
  "loadBalancerName": {},
  "instancePort": {},
  "healthCheckPath": {},
  "certificateName": {},
  "certificateDomainName": {},
  "certificateAlternativeNames": {},
  "tags": {},
  "ipAddressType": {},
  "tlsPolicyName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loadBalancerName|object|true|none|none|
|instancePort|object|true|none|none|
|healthCheckPath|object|false|none|none|
|certificateName|object|false|none|none|
|certificateDomainName|object|false|none|none|
|certificateAlternativeNames|object|false|none|none|
|tags|object|false|none|none|
|ipAddressType|object|false|none|none|
|tlsPolicyName|object|false|none|none|

<h2 id="tocS_CreateLoadBalancerTlsCertificateResult">CreateLoadBalancerTlsCertificateResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateloadbalancertlscertificateresult"></a>
<a id="schema_CreateLoadBalancerTlsCertificateResult"></a>
<a id="tocScreateloadbalancertlscertificateresult"></a>
<a id="tocscreateloadbalancertlscertificateresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_CreateLoadBalancerTlsCertificateRequest">CreateLoadBalancerTlsCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateloadbalancertlscertificaterequest"></a>
<a id="schema_CreateLoadBalancerTlsCertificateRequest"></a>
<a id="tocScreateloadbalancertlscertificaterequest"></a>
<a id="tocscreateloadbalancertlscertificaterequest"></a>

```json
{
  "loadBalancerName": {},
  "certificateName": {},
  "certificateDomainName": {},
  "certificateAlternativeNames": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loadBalancerName|object|true|none|none|
|certificateName|object|true|none|none|
|certificateDomainName|object|true|none|none|
|certificateAlternativeNames|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateRelationalDatabaseResult">CreateRelationalDatabaseResult</h2>
<!-- backwards compatibility -->
<a id="schemacreaterelationaldatabaseresult"></a>
<a id="schema_CreateRelationalDatabaseResult"></a>
<a id="tocScreaterelationaldatabaseresult"></a>
<a id="tocscreaterelationaldatabaseresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_CreateRelationalDatabaseRequest">CreateRelationalDatabaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterelationaldatabaserequest"></a>
<a id="schema_CreateRelationalDatabaseRequest"></a>
<a id="tocScreaterelationaldatabaserequest"></a>
<a id="tocscreaterelationaldatabaserequest"></a>

```json
{
  "relationalDatabaseName": {},
  "availabilityZone": {},
  "relationalDatabaseBlueprintId": {},
  "relationalDatabaseBundleId": {},
  "masterDatabaseName": {},
  "masterUsername": {},
  "masterUserPassword": {},
  "preferredBackupWindow": {},
  "preferredMaintenanceWindow": {},
  "publiclyAccessible": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseName|object|true|none|none|
|availabilityZone|object|false|none|none|
|relationalDatabaseBlueprintId|object|true|none|none|
|relationalDatabaseBundleId|object|true|none|none|
|masterDatabaseName|object|true|none|none|
|masterUsername|object|true|none|none|
|masterUserPassword|object|false|none|none|
|preferredBackupWindow|object|false|none|none|
|preferredMaintenanceWindow|object|false|none|none|
|publiclyAccessible|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateRelationalDatabaseFromSnapshotResult">CreateRelationalDatabaseFromSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemacreaterelationaldatabasefromsnapshotresult"></a>
<a id="schema_CreateRelationalDatabaseFromSnapshotResult"></a>
<a id="tocScreaterelationaldatabasefromsnapshotresult"></a>
<a id="tocscreaterelationaldatabasefromsnapshotresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_CreateRelationalDatabaseFromSnapshotRequest">CreateRelationalDatabaseFromSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterelationaldatabasefromsnapshotrequest"></a>
<a id="schema_CreateRelationalDatabaseFromSnapshotRequest"></a>
<a id="tocScreaterelationaldatabasefromsnapshotrequest"></a>
<a id="tocscreaterelationaldatabasefromsnapshotrequest"></a>

```json
{
  "relationalDatabaseName": {},
  "availabilityZone": {},
  "publiclyAccessible": {},
  "relationalDatabaseSnapshotName": {},
  "relationalDatabaseBundleId": {},
  "sourceRelationalDatabaseName": {},
  "restoreTime": {},
  "useLatestRestorableTime": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseName|object|true|none|none|
|availabilityZone|object|false|none|none|
|publiclyAccessible|object|false|none|none|
|relationalDatabaseSnapshotName|object|false|none|none|
|relationalDatabaseBundleId|object|false|none|none|
|sourceRelationalDatabaseName|object|false|none|none|
|restoreTime|object|false|none|none|
|useLatestRestorableTime|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateRelationalDatabaseSnapshotResult">CreateRelationalDatabaseSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemacreaterelationaldatabasesnapshotresult"></a>
<a id="schema_CreateRelationalDatabaseSnapshotResult"></a>
<a id="tocScreaterelationaldatabasesnapshotresult"></a>
<a id="tocscreaterelationaldatabasesnapshotresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_CreateRelationalDatabaseSnapshotRequest">CreateRelationalDatabaseSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterelationaldatabasesnapshotrequest"></a>
<a id="schema_CreateRelationalDatabaseSnapshotRequest"></a>
<a id="tocScreaterelationaldatabasesnapshotrequest"></a>
<a id="tocscreaterelationaldatabasesnapshotrequest"></a>

```json
{
  "relationalDatabaseName": {},
  "relationalDatabaseSnapshotName": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseName|object|true|none|none|
|relationalDatabaseSnapshotName|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DeleteAlarmResult">DeleteAlarmResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletealarmresult"></a>
<a id="schema_DeleteAlarmResult"></a>
<a id="tocSdeletealarmresult"></a>
<a id="tocsdeletealarmresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_DeleteAlarmRequest">DeleteAlarmRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletealarmrequest"></a>
<a id="schema_DeleteAlarmRequest"></a>
<a id="tocSdeletealarmrequest"></a>
<a id="tocsdeletealarmrequest"></a>

```json
{
  "alarmName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alarmName|object|true|none|none|

<h2 id="tocS_DeleteAutoSnapshotResult">DeleteAutoSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteautosnapshotresult"></a>
<a id="schema_DeleteAutoSnapshotResult"></a>
<a id="tocSdeleteautosnapshotresult"></a>
<a id="tocsdeleteautosnapshotresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_DeleteAutoSnapshotRequest">DeleteAutoSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteautosnapshotrequest"></a>
<a id="schema_DeleteAutoSnapshotRequest"></a>
<a id="tocSdeleteautosnapshotrequest"></a>
<a id="tocsdeleteautosnapshotrequest"></a>

```json
{
  "resourceName": {},
  "date": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|object|true|none|none|
|date|object|true|none|none|

<h2 id="tocS_DeleteBucketResult">DeleteBucketResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketresult"></a>
<a id="schema_DeleteBucketResult"></a>
<a id="tocSdeletebucketresult"></a>
<a id="tocsdeletebucketresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_DeleteBucketRequest">DeleteBucketRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketrequest"></a>
<a id="schema_DeleteBucketRequest"></a>
<a id="tocSdeletebucketrequest"></a>
<a id="tocsdeletebucketrequest"></a>

```json
{
  "bucketName": {},
  "forceDelete": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|
|forceDelete|object|false|none|none|

<h2 id="tocS_DeleteBucketAccessKeyResult">DeleteBucketAccessKeyResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketaccesskeyresult"></a>
<a id="schema_DeleteBucketAccessKeyResult"></a>
<a id="tocSdeletebucketaccesskeyresult"></a>
<a id="tocsdeletebucketaccesskeyresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_DeleteBucketAccessKeyRequest">DeleteBucketAccessKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketaccesskeyrequest"></a>
<a id="schema_DeleteBucketAccessKeyRequest"></a>
<a id="tocSdeletebucketaccesskeyrequest"></a>
<a id="tocsdeletebucketaccesskeyrequest"></a>

```json
{
  "bucketName": {},
  "accessKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|
|accessKeyId|object|true|none|none|

<h2 id="tocS_DeleteCertificateResult">DeleteCertificateResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletecertificateresult"></a>
<a id="schema_DeleteCertificateResult"></a>
<a id="tocSdeletecertificateresult"></a>
<a id="tocsdeletecertificateresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_DeleteCertificateRequest">DeleteCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecertificaterequest"></a>
<a id="schema_DeleteCertificateRequest"></a>
<a id="tocSdeletecertificaterequest"></a>
<a id="tocsdeletecertificaterequest"></a>

```json
{
  "certificateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateName|object|true|none|none|

<h2 id="tocS_DeleteContactMethodResult">DeleteContactMethodResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontactmethodresult"></a>
<a id="schema_DeleteContactMethodResult"></a>
<a id="tocSdeletecontactmethodresult"></a>
<a id="tocsdeletecontactmethodresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_DeleteContactMethodRequest">DeleteContactMethodRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontactmethodrequest"></a>
<a id="schema_DeleteContactMethodRequest"></a>
<a id="tocSdeletecontactmethodrequest"></a>
<a id="tocsdeletecontactmethodrequest"></a>

```json
{
  "protocol": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|protocol|object|true|none|none|

<h2 id="tocS_DeleteContainerImageResult">DeleteContainerImageResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontainerimageresult"></a>
<a id="schema_DeleteContainerImageResult"></a>
<a id="tocSdeletecontainerimageresult"></a>
<a id="tocsdeletecontainerimageresult"></a>

```json
{}
```

<h2 id="tocS_DeleteContainerImageRequest">DeleteContainerImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontainerimagerequest"></a>
<a id="schema_DeleteContainerImageRequest"></a>
<a id="tocSdeletecontainerimagerequest"></a>
<a id="tocsdeletecontainerimagerequest"></a>

```json
{
  "serviceName": {},
  "image": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|object|true|none|none|
|image|object|true|none|none|

<h2 id="tocS_DeleteContainerServiceResult">DeleteContainerServiceResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontainerserviceresult"></a>
<a id="schema_DeleteContainerServiceResult"></a>
<a id="tocSdeletecontainerserviceresult"></a>
<a id="tocsdeletecontainerserviceresult"></a>

```json
{}
```

<h2 id="tocS_DeleteContainerServiceRequest">DeleteContainerServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontainerservicerequest"></a>
<a id="schema_DeleteContainerServiceRequest"></a>
<a id="tocSdeletecontainerservicerequest"></a>
<a id="tocsdeletecontainerservicerequest"></a>

```json
{
  "serviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|object|true|none|none|

<h2 id="tocS_DeleteDiskResult">DeleteDiskResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletediskresult"></a>
<a id="schema_DeleteDiskResult"></a>
<a id="tocSdeletediskresult"></a>
<a id="tocsdeletediskresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_DeleteDiskRequest">DeleteDiskRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletediskrequest"></a>
<a id="schema_DeleteDiskRequest"></a>
<a id="tocSdeletediskrequest"></a>
<a id="tocsdeletediskrequest"></a>

```json
{
  "diskName": {},
  "forceDeleteAddOns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskName|object|true|none|none|
|forceDeleteAddOns|object|false|none|none|

<h2 id="tocS_DeleteDiskSnapshotResult">DeleteDiskSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletedisksnapshotresult"></a>
<a id="schema_DeleteDiskSnapshotResult"></a>
<a id="tocSdeletedisksnapshotresult"></a>
<a id="tocsdeletedisksnapshotresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_DeleteDiskSnapshotRequest">DeleteDiskSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedisksnapshotrequest"></a>
<a id="schema_DeleteDiskSnapshotRequest"></a>
<a id="tocSdeletedisksnapshotrequest"></a>
<a id="tocsdeletedisksnapshotrequest"></a>

```json
{
  "diskSnapshotName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskSnapshotName|object|true|none|none|

<h2 id="tocS_DeleteDistributionResult">DeleteDistributionResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletedistributionresult"></a>
<a id="schema_DeleteDistributionResult"></a>
<a id="tocSdeletedistributionresult"></a>
<a id="tocsdeletedistributionresult"></a>

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|object|false|none|none|

<h2 id="tocS_DeleteDistributionRequest">DeleteDistributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedistributionrequest"></a>
<a id="schema_DeleteDistributionRequest"></a>
<a id="tocSdeletedistributionrequest"></a>
<a id="tocsdeletedistributionrequest"></a>

```json
{
  "distributionName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distributionName|object|false|none|none|

<h2 id="tocS_DeleteDomainResult">DeleteDomainResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainresult"></a>
<a id="schema_DeleteDomainResult"></a>
<a id="tocSdeletedomainresult"></a>
<a id="tocsdeletedomainresult"></a>

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|object|false|none|none|

<h2 id="tocS_DeleteDomainRequest">DeleteDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainrequest"></a>
<a id="schema_DeleteDomainRequest"></a>
<a id="tocSdeletedomainrequest"></a>
<a id="tocsdeletedomainrequest"></a>

```json
{
  "domainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|true|none|none|

<h2 id="tocS_DeleteDomainEntryResult">DeleteDomainEntryResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainentryresult"></a>
<a id="schema_DeleteDomainEntryResult"></a>
<a id="tocSdeletedomainentryresult"></a>
<a id="tocsdeletedomainentryresult"></a>

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|object|false|none|none|

<h2 id="tocS_DeleteDomainEntryRequest">DeleteDomainEntryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainentryrequest"></a>
<a id="schema_DeleteDomainEntryRequest"></a>
<a id="tocSdeletedomainentryrequest"></a>
<a id="tocsdeletedomainentryrequest"></a>

```json
{
  "domainName": {},
  "domainEntry": {
    "id": {},
    "name": {},
    "target": {},
    "isAlias": {},
    "type": {},
    "options": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|true|none|none|
|domainEntry|object|true|none|none|

<h2 id="tocS_DeleteInstanceResult">DeleteInstanceResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinstanceresult"></a>
<a id="schema_DeleteInstanceResult"></a>
<a id="tocSdeleteinstanceresult"></a>
<a id="tocsdeleteinstanceresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_DeleteInstanceRequest">DeleteInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinstancerequest"></a>
<a id="schema_DeleteInstanceRequest"></a>
<a id="tocSdeleteinstancerequest"></a>
<a id="tocsdeleteinstancerequest"></a>

```json
{
  "instanceName": {},
  "forceDeleteAddOns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceName|object|true|none|none|
|forceDeleteAddOns|object|false|none|none|

<h2 id="tocS_DeleteInstanceSnapshotResult">DeleteInstanceSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinstancesnapshotresult"></a>
<a id="schema_DeleteInstanceSnapshotResult"></a>
<a id="tocSdeleteinstancesnapshotresult"></a>
<a id="tocsdeleteinstancesnapshotresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_DeleteInstanceSnapshotRequest">DeleteInstanceSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinstancesnapshotrequest"></a>
<a id="schema_DeleteInstanceSnapshotRequest"></a>
<a id="tocSdeleteinstancesnapshotrequest"></a>
<a id="tocsdeleteinstancesnapshotrequest"></a>

```json
{
  "instanceSnapshotName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceSnapshotName|object|true|none|none|

<h2 id="tocS_DeleteKeyPairResult">DeleteKeyPairResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletekeypairresult"></a>
<a id="schema_DeleteKeyPairResult"></a>
<a id="tocSdeletekeypairresult"></a>
<a id="tocsdeletekeypairresult"></a>

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|object|false|none|none|

<h2 id="tocS_DeleteKeyPairRequest">DeleteKeyPairRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletekeypairrequest"></a>
<a id="schema_DeleteKeyPairRequest"></a>
<a id="tocSdeletekeypairrequest"></a>
<a id="tocsdeletekeypairrequest"></a>

```json
{
  "keyPairName": {},
  "expectedFingerprint": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyPairName|object|true|none|none|
|expectedFingerprint|object|false|none|none|

<h2 id="tocS_DeleteKnownHostKeysResult">DeleteKnownHostKeysResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteknownhostkeysresult"></a>
<a id="schema_DeleteKnownHostKeysResult"></a>
<a id="tocSdeleteknownhostkeysresult"></a>
<a id="tocsdeleteknownhostkeysresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_DeleteKnownHostKeysRequest">DeleteKnownHostKeysRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteknownhostkeysrequest"></a>
<a id="schema_DeleteKnownHostKeysRequest"></a>
<a id="tocSdeleteknownhostkeysrequest"></a>
<a id="tocsdeleteknownhostkeysrequest"></a>

```json
{
  "instanceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceName|object|true|none|none|

<h2 id="tocS_DeleteLoadBalancerResult">DeleteLoadBalancerResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteloadbalancerresult"></a>
<a id="schema_DeleteLoadBalancerResult"></a>
<a id="tocSdeleteloadbalancerresult"></a>
<a id="tocsdeleteloadbalancerresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_DeleteLoadBalancerRequest">DeleteLoadBalancerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteloadbalancerrequest"></a>
<a id="schema_DeleteLoadBalancerRequest"></a>
<a id="tocSdeleteloadbalancerrequest"></a>
<a id="tocsdeleteloadbalancerrequest"></a>

```json
{
  "loadBalancerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loadBalancerName|object|true|none|none|

<h2 id="tocS_DeleteLoadBalancerTlsCertificateResult">DeleteLoadBalancerTlsCertificateResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteloadbalancertlscertificateresult"></a>
<a id="schema_DeleteLoadBalancerTlsCertificateResult"></a>
<a id="tocSdeleteloadbalancertlscertificateresult"></a>
<a id="tocsdeleteloadbalancertlscertificateresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_DeleteLoadBalancerTlsCertificateRequest">DeleteLoadBalancerTlsCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteloadbalancertlscertificaterequest"></a>
<a id="schema_DeleteLoadBalancerTlsCertificateRequest"></a>
<a id="tocSdeleteloadbalancertlscertificaterequest"></a>
<a id="tocsdeleteloadbalancertlscertificaterequest"></a>

```json
{
  "loadBalancerName": {},
  "certificateName": {},
  "force": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loadBalancerName|object|true|none|none|
|certificateName|object|true|none|none|
|force|object|false|none|none|

<h2 id="tocS_DeleteRelationalDatabaseResult">DeleteRelationalDatabaseResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleterelationaldatabaseresult"></a>
<a id="schema_DeleteRelationalDatabaseResult"></a>
<a id="tocSdeleterelationaldatabaseresult"></a>
<a id="tocsdeleterelationaldatabaseresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_DeleteRelationalDatabaseRequest">DeleteRelationalDatabaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterelationaldatabaserequest"></a>
<a id="schema_DeleteRelationalDatabaseRequest"></a>
<a id="tocSdeleterelationaldatabaserequest"></a>
<a id="tocsdeleterelationaldatabaserequest"></a>

```json
{
  "relationalDatabaseName": {},
  "skipFinalSnapshot": {},
  "finalRelationalDatabaseSnapshotName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseName|object|true|none|none|
|skipFinalSnapshot|object|false|none|none|
|finalRelationalDatabaseSnapshotName|object|false|none|none|

<h2 id="tocS_DeleteRelationalDatabaseSnapshotResult">DeleteRelationalDatabaseSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleterelationaldatabasesnapshotresult"></a>
<a id="schema_DeleteRelationalDatabaseSnapshotResult"></a>
<a id="tocSdeleterelationaldatabasesnapshotresult"></a>
<a id="tocsdeleterelationaldatabasesnapshotresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_DeleteRelationalDatabaseSnapshotRequest">DeleteRelationalDatabaseSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterelationaldatabasesnapshotrequest"></a>
<a id="schema_DeleteRelationalDatabaseSnapshotRequest"></a>
<a id="tocSdeleterelationaldatabasesnapshotrequest"></a>
<a id="tocsdeleterelationaldatabasesnapshotrequest"></a>

```json
{
  "relationalDatabaseSnapshotName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseSnapshotName|object|true|none|none|

<h2 id="tocS_DetachCertificateFromDistributionResult">DetachCertificateFromDistributionResult</h2>
<!-- backwards compatibility -->
<a id="schemadetachcertificatefromdistributionresult"></a>
<a id="schema_DetachCertificateFromDistributionResult"></a>
<a id="tocSdetachcertificatefromdistributionresult"></a>
<a id="tocsdetachcertificatefromdistributionresult"></a>

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|object|false|none|none|

<h2 id="tocS_DetachCertificateFromDistributionRequest">DetachCertificateFromDistributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetachcertificatefromdistributionrequest"></a>
<a id="schema_DetachCertificateFromDistributionRequest"></a>
<a id="tocSdetachcertificatefromdistributionrequest"></a>
<a id="tocsdetachcertificatefromdistributionrequest"></a>

```json
{
  "distributionName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distributionName|object|true|none|none|

<h2 id="tocS_DetachDiskResult">DetachDiskResult</h2>
<!-- backwards compatibility -->
<a id="schemadetachdiskresult"></a>
<a id="schema_DetachDiskResult"></a>
<a id="tocSdetachdiskresult"></a>
<a id="tocsdetachdiskresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_DetachDiskRequest">DetachDiskRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetachdiskrequest"></a>
<a id="schema_DetachDiskRequest"></a>
<a id="tocSdetachdiskrequest"></a>
<a id="tocsdetachdiskrequest"></a>

```json
{
  "diskName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskName|object|true|none|none|

<h2 id="tocS_DetachInstancesFromLoadBalancerResult">DetachInstancesFromLoadBalancerResult</h2>
<!-- backwards compatibility -->
<a id="schemadetachinstancesfromloadbalancerresult"></a>
<a id="schema_DetachInstancesFromLoadBalancerResult"></a>
<a id="tocSdetachinstancesfromloadbalancerresult"></a>
<a id="tocsdetachinstancesfromloadbalancerresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_DetachInstancesFromLoadBalancerRequest">DetachInstancesFromLoadBalancerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetachinstancesfromloadbalancerrequest"></a>
<a id="schema_DetachInstancesFromLoadBalancerRequest"></a>
<a id="tocSdetachinstancesfromloadbalancerrequest"></a>
<a id="tocsdetachinstancesfromloadbalancerrequest"></a>

```json
{
  "loadBalancerName": {},
  "instanceNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loadBalancerName|object|true|none|none|
|instanceNames|object|true|none|none|

<h2 id="tocS_DetachStaticIpResult">DetachStaticIpResult</h2>
<!-- backwards compatibility -->
<a id="schemadetachstaticipresult"></a>
<a id="schema_DetachStaticIpResult"></a>
<a id="tocSdetachstaticipresult"></a>
<a id="tocsdetachstaticipresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_DetachStaticIpRequest">DetachStaticIpRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetachstaticiprequest"></a>
<a id="schema_DetachStaticIpRequest"></a>
<a id="tocSdetachstaticiprequest"></a>
<a id="tocsdetachstaticiprequest"></a>

```json
{
  "staticIpName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|staticIpName|object|true|none|none|

<h2 id="tocS_DisableAddOnResult">DisableAddOnResult</h2>
<!-- backwards compatibility -->
<a id="schemadisableaddonresult"></a>
<a id="schema_DisableAddOnResult"></a>
<a id="tocSdisableaddonresult"></a>
<a id="tocsdisableaddonresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_DisableAddOnRequest">DisableAddOnRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisableaddonrequest"></a>
<a id="schema_DisableAddOnRequest"></a>
<a id="tocSdisableaddonrequest"></a>
<a id="tocsdisableaddonrequest"></a>

```json
{
  "addOnType": {},
  "resourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addOnType|object|true|none|none|
|resourceName|object|true|none|none|

<h2 id="tocS_DownloadDefaultKeyPairResult">DownloadDefaultKeyPairResult</h2>
<!-- backwards compatibility -->
<a id="schemadownloaddefaultkeypairresult"></a>
<a id="schema_DownloadDefaultKeyPairResult"></a>
<a id="tocSdownloaddefaultkeypairresult"></a>
<a id="tocsdownloaddefaultkeypairresult"></a>

```json
{
  "publicKeyBase64": {},
  "privateKeyBase64": {},
  "createdAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publicKeyBase64|object|false|none|none|
|privateKeyBase64|object|false|none|none|
|createdAt|object|false|none|none|

<h2 id="tocS_DownloadDefaultKeyPairRequest">DownloadDefaultKeyPairRequest</h2>
<!-- backwards compatibility -->
<a id="schemadownloaddefaultkeypairrequest"></a>
<a id="schema_DownloadDefaultKeyPairRequest"></a>
<a id="tocSdownloaddefaultkeypairrequest"></a>
<a id="tocsdownloaddefaultkeypairrequest"></a>

```json
{}
```

<h2 id="tocS_EnableAddOnResult">EnableAddOnResult</h2>
<!-- backwards compatibility -->
<a id="schemaenableaddonresult"></a>
<a id="schema_EnableAddOnResult"></a>
<a id="tocSenableaddonresult"></a>
<a id="tocsenableaddonresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_EnableAddOnRequest">EnableAddOnRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenableaddonrequest"></a>
<a id="schema_EnableAddOnRequest"></a>
<a id="tocSenableaddonrequest"></a>
<a id="tocsenableaddonrequest"></a>

```json
{
  "resourceName": {},
  "addOnRequest": {
    "addOnType": {},
    "autoSnapshotAddOnRequest": {
      "snapshotTimeOfDay": {}
    },
    "stopInstanceOnIdleRequest": {
      "threshold": {},
      "duration": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|object|true|none|none|
|addOnRequest|object|true|none|none|

<h2 id="tocS_ExportSnapshotResult">ExportSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemaexportsnapshotresult"></a>
<a id="schema_ExportSnapshotResult"></a>
<a id="tocSexportsnapshotresult"></a>
<a id="tocsexportsnapshotresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_ExportSnapshotRequest">ExportSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportsnapshotrequest"></a>
<a id="schema_ExportSnapshotRequest"></a>
<a id="tocSexportsnapshotrequest"></a>
<a id="tocsexportsnapshotrequest"></a>

```json
{
  "sourceSnapshotName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceSnapshotName|object|true|none|none|

<h2 id="tocS_GetActiveNamesResult">GetActiveNamesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetactivenamesresult"></a>
<a id="schema_GetActiveNamesResult"></a>
<a id="tocSgetactivenamesresult"></a>
<a id="tocsgetactivenamesresult"></a>

```json
{
  "activeNames": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeNames|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetActiveNamesRequest">GetActiveNamesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetactivenamesrequest"></a>
<a id="schema_GetActiveNamesRequest"></a>
<a id="tocSgetactivenamesrequest"></a>
<a id="tocsgetactivenamesrequest"></a>

```json
{
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageToken|object|false|none|none|

<h2 id="tocS_GetAlarmsResult">GetAlarmsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetalarmsresult"></a>
<a id="schema_GetAlarmsResult"></a>
<a id="tocSgetalarmsresult"></a>
<a id="tocsgetalarmsresult"></a>

```json
{
  "alarms": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alarms|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetAlarmsRequest">GetAlarmsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetalarmsrequest"></a>
<a id="schema_GetAlarmsRequest"></a>
<a id="tocSgetalarmsrequest"></a>
<a id="tocsgetalarmsrequest"></a>

```json
{
  "alarmName": {},
  "pageToken": {},
  "monitoredResourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alarmName|object|false|none|none|
|pageToken|object|false|none|none|
|monitoredResourceName|object|false|none|none|

<h2 id="tocS_GetAutoSnapshotsResult">GetAutoSnapshotsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetautosnapshotsresult"></a>
<a id="schema_GetAutoSnapshotsResult"></a>
<a id="tocSgetautosnapshotsresult"></a>
<a id="tocsgetautosnapshotsresult"></a>

```json
{
  "resourceName": {},
  "resourceType": {},
  "autoSnapshots": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|object|false|none|none|
|resourceType|object|false|none|none|
|autoSnapshots|object|false|none|none|

<h2 id="tocS_GetAutoSnapshotsRequest">GetAutoSnapshotsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetautosnapshotsrequest"></a>
<a id="schema_GetAutoSnapshotsRequest"></a>
<a id="tocSgetautosnapshotsrequest"></a>
<a id="tocsgetautosnapshotsrequest"></a>

```json
{
  "resourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|object|true|none|none|

<h2 id="tocS_GetBlueprintsResult">GetBlueprintsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetblueprintsresult"></a>
<a id="schema_GetBlueprintsResult"></a>
<a id="tocSgetblueprintsresult"></a>
<a id="tocsgetblueprintsresult"></a>

```json
{
  "blueprints": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blueprints|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetBlueprintsRequest">GetBlueprintsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetblueprintsrequest"></a>
<a id="schema_GetBlueprintsRequest"></a>
<a id="tocSgetblueprintsrequest"></a>
<a id="tocsgetblueprintsrequest"></a>

```json
{
  "includeInactive": {},
  "pageToken": {},
  "appCategory": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeInactive|object|false|none|none|
|pageToken|object|false|none|none|
|appCategory|object|false|none|none|

<h2 id="tocS_GetBucketAccessKeysResult">GetBucketAccessKeysResult</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketaccesskeysresult"></a>
<a id="schema_GetBucketAccessKeysResult"></a>
<a id="tocSgetbucketaccesskeysresult"></a>
<a id="tocsgetbucketaccesskeysresult"></a>

```json
{
  "accessKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessKeys|object|false|none|none|

<h2 id="tocS_GetBucketAccessKeysRequest">GetBucketAccessKeysRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketaccesskeysrequest"></a>
<a id="schema_GetBucketAccessKeysRequest"></a>
<a id="tocSgetbucketaccesskeysrequest"></a>
<a id="tocsgetbucketaccesskeysrequest"></a>

```json
{
  "bucketName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|

<h2 id="tocS_GetBucketBundlesResult">GetBucketBundlesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketbundlesresult"></a>
<a id="schema_GetBucketBundlesResult"></a>
<a id="tocSgetbucketbundlesresult"></a>
<a id="tocsgetbucketbundlesresult"></a>

```json
{
  "bundles": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundles|object|false|none|none|

<h2 id="tocS_GetBucketBundlesRequest">GetBucketBundlesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketbundlesrequest"></a>
<a id="schema_GetBucketBundlesRequest"></a>
<a id="tocSgetbucketbundlesrequest"></a>
<a id="tocsgetbucketbundlesrequest"></a>

```json
{
  "includeInactive": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeInactive|object|false|none|none|

<h2 id="tocS_GetBucketMetricDataResult">GetBucketMetricDataResult</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketmetricdataresult"></a>
<a id="schema_GetBucketMetricDataResult"></a>
<a id="tocSgetbucketmetricdataresult"></a>
<a id="tocsgetbucketmetricdataresult"></a>

```json
{
  "metricName": {},
  "metricData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricName|object|false|none|none|
|metricData|object|false|none|none|

<h2 id="tocS_GetBucketMetricDataRequest">GetBucketMetricDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketmetricdatarequest"></a>
<a id="schema_GetBucketMetricDataRequest"></a>
<a id="tocSgetbucketmetricdatarequest"></a>
<a id="tocsgetbucketmetricdatarequest"></a>

```json
{
  "bucketName": {},
  "metricName": {},
  "startTime": {},
  "endTime": {},
  "period": {},
  "statistics": {},
  "unit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|
|metricName|object|true|none|none|
|startTime|object|true|none|none|
|endTime|object|true|none|none|
|period|object|true|none|none|
|statistics|object|true|none|none|
|unit|object|true|none|none|

<h2 id="tocS_GetBucketsResult">GetBucketsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketsresult"></a>
<a id="schema_GetBucketsResult"></a>
<a id="tocSgetbucketsresult"></a>
<a id="tocsgetbucketsresult"></a>

```json
{
  "buckets": {},
  "nextPageToken": {},
  "accountLevelBpaSync": {
    "status": {},
    "lastSyncedAt": {},
    "message": {},
    "bpaImpactsLightsail": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buckets|object|false|none|none|
|nextPageToken|object|false|none|none|
|accountLevelBpaSync|object|false|none|none|

<h2 id="tocS_GetBucketsRequest">GetBucketsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketsrequest"></a>
<a id="schema_GetBucketsRequest"></a>
<a id="tocSgetbucketsrequest"></a>
<a id="tocsgetbucketsrequest"></a>

```json
{
  "bucketName": {},
  "pageToken": {},
  "includeConnectedResources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|false|none|none|
|pageToken|object|false|none|none|
|includeConnectedResources|object|false|none|none|

<h2 id="tocS_GetBundlesResult">GetBundlesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetbundlesresult"></a>
<a id="schema_GetBundlesResult"></a>
<a id="tocSgetbundlesresult"></a>
<a id="tocsgetbundlesresult"></a>

```json
{
  "bundles": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundles|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetBundlesRequest">GetBundlesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbundlesrequest"></a>
<a id="schema_GetBundlesRequest"></a>
<a id="tocSgetbundlesrequest"></a>
<a id="tocsgetbundlesrequest"></a>

```json
{
  "includeInactive": {},
  "pageToken": {},
  "appCategory": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeInactive|object|false|none|none|
|pageToken|object|false|none|none|
|appCategory|object|false|none|none|

<h2 id="tocS_GetCertificatesResult">GetCertificatesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcertificatesresult"></a>
<a id="schema_GetCertificatesResult"></a>
<a id="tocSgetcertificatesresult"></a>
<a id="tocsgetcertificatesresult"></a>

```json
{
  "certificates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificates|object|false|none|none|

<h2 id="tocS_GetCertificatesRequest">GetCertificatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcertificatesrequest"></a>
<a id="schema_GetCertificatesRequest"></a>
<a id="tocSgetcertificatesrequest"></a>
<a id="tocsgetcertificatesrequest"></a>

```json
{
  "certificateStatuses": {},
  "includeCertificateDetails": {},
  "certificateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateStatuses|object|false|none|none|
|includeCertificateDetails|object|false|none|none|
|certificateName|object|false|none|none|

<h2 id="tocS_GetCloudFormationStackRecordsResult">GetCloudFormationStackRecordsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcloudformationstackrecordsresult"></a>
<a id="schema_GetCloudFormationStackRecordsResult"></a>
<a id="tocSgetcloudformationstackrecordsresult"></a>
<a id="tocsgetcloudformationstackrecordsresult"></a>

```json
{
  "cloudFormationStackRecords": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudFormationStackRecords|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetCloudFormationStackRecordsRequest">GetCloudFormationStackRecordsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcloudformationstackrecordsrequest"></a>
<a id="schema_GetCloudFormationStackRecordsRequest"></a>
<a id="tocSgetcloudformationstackrecordsrequest"></a>
<a id="tocsgetcloudformationstackrecordsrequest"></a>

```json
{
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageToken|object|false|none|none|

<h2 id="tocS_GetContactMethodsResult">GetContactMethodsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactmethodsresult"></a>
<a id="schema_GetContactMethodsResult"></a>
<a id="tocSgetcontactmethodsresult"></a>
<a id="tocsgetcontactmethodsresult"></a>

```json
{
  "contactMethods": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactMethods|object|false|none|none|

<h2 id="tocS_GetContactMethodsRequest">GetContactMethodsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactmethodsrequest"></a>
<a id="schema_GetContactMethodsRequest"></a>
<a id="tocSgetcontactmethodsrequest"></a>
<a id="tocsgetcontactmethodsrequest"></a>

```json
{
  "protocols": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|protocols|object|false|none|none|

<h2 id="tocS_GetContainerAPIMetadataResult">GetContainerAPIMetadataResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainerapimetadataresult"></a>
<a id="schema_GetContainerAPIMetadataResult"></a>
<a id="tocSgetcontainerapimetadataresult"></a>
<a id="tocsgetcontainerapimetadataresult"></a>

```json
{
  "metadata": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|none|

<h2 id="tocS_GetContainerAPIMetadataRequest">GetContainerAPIMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainerapimetadatarequest"></a>
<a id="schema_GetContainerAPIMetadataRequest"></a>
<a id="tocSgetcontainerapimetadatarequest"></a>
<a id="tocsgetcontainerapimetadatarequest"></a>

```json
{}
```

<h2 id="tocS_GetContainerImagesResult">GetContainerImagesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainerimagesresult"></a>
<a id="schema_GetContainerImagesResult"></a>
<a id="tocSgetcontainerimagesresult"></a>
<a id="tocsgetcontainerimagesresult"></a>

```json
{
  "containerImages": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerImages|object|false|none|none|

<h2 id="tocS_GetContainerImagesRequest">GetContainerImagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainerimagesrequest"></a>
<a id="schema_GetContainerImagesRequest"></a>
<a id="tocSgetcontainerimagesrequest"></a>
<a id="tocsgetcontainerimagesrequest"></a>

```json
{
  "serviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|object|true|none|none|

<h2 id="tocS_GetContainerLogResult">GetContainerLogResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainerlogresult"></a>
<a id="schema_GetContainerLogResult"></a>
<a id="tocSgetcontainerlogresult"></a>
<a id="tocsgetcontainerlogresult"></a>

```json
{
  "logEvents": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logEvents|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetContainerLogRequest">GetContainerLogRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainerlogrequest"></a>
<a id="schema_GetContainerLogRequest"></a>
<a id="tocSgetcontainerlogrequest"></a>
<a id="tocsgetcontainerlogrequest"></a>

```json
{
  "serviceName": {},
  "containerName": {},
  "startTime": {},
  "endTime": {},
  "filterPattern": {},
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|object|true|none|none|
|containerName|object|true|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|
|filterPattern|object|false|none|none|
|pageToken|object|false|none|none|

<h2 id="tocS_GetContainerServiceDeploymentsResult">GetContainerServiceDeploymentsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainerservicedeploymentsresult"></a>
<a id="schema_GetContainerServiceDeploymentsResult"></a>
<a id="tocSgetcontainerservicedeploymentsresult"></a>
<a id="tocsgetcontainerservicedeploymentsresult"></a>

```json
{
  "deployments": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployments|object|false|none|none|

<h2 id="tocS_GetContainerServiceDeploymentsRequest">GetContainerServiceDeploymentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainerservicedeploymentsrequest"></a>
<a id="schema_GetContainerServiceDeploymentsRequest"></a>
<a id="tocSgetcontainerservicedeploymentsrequest"></a>
<a id="tocsgetcontainerservicedeploymentsrequest"></a>

```json
{
  "serviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|object|true|none|none|

<h2 id="tocS_GetContainerServiceMetricDataResult">GetContainerServiceMetricDataResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainerservicemetricdataresult"></a>
<a id="schema_GetContainerServiceMetricDataResult"></a>
<a id="tocSgetcontainerservicemetricdataresult"></a>
<a id="tocsgetcontainerservicemetricdataresult"></a>

```json
{
  "metricName": {},
  "metricData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricName|object|false|none|none|
|metricData|object|false|none|none|

<h2 id="tocS_GetContainerServiceMetricDataRequest">GetContainerServiceMetricDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainerservicemetricdatarequest"></a>
<a id="schema_GetContainerServiceMetricDataRequest"></a>
<a id="tocSgetcontainerservicemetricdatarequest"></a>
<a id="tocsgetcontainerservicemetricdatarequest"></a>

```json
{
  "serviceName": {},
  "metricName": {},
  "startTime": {},
  "endTime": {},
  "period": {},
  "statistics": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|object|true|none|none|
|metricName|object|true|none|none|
|startTime|object|true|none|none|
|endTime|object|true|none|none|
|period|object|true|none|none|
|statistics|object|true|none|none|

<h2 id="tocS_GetContainerServicePowersResult">GetContainerServicePowersResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainerservicepowersresult"></a>
<a id="schema_GetContainerServicePowersResult"></a>
<a id="tocSgetcontainerservicepowersresult"></a>
<a id="tocsgetcontainerservicepowersresult"></a>

```json
{
  "powers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|powers|object|false|none|none|

<h2 id="tocS_GetContainerServicePowersRequest">GetContainerServicePowersRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainerservicepowersrequest"></a>
<a id="schema_GetContainerServicePowersRequest"></a>
<a id="tocSgetcontainerservicepowersrequest"></a>
<a id="tocsgetcontainerservicepowersrequest"></a>

```json
{}
```

<h2 id="tocS_ContainerServicesListResult">ContainerServicesListResult</h2>
<!-- backwards compatibility -->
<a id="schemacontainerserviceslistresult"></a>
<a id="schema_ContainerServicesListResult"></a>
<a id="tocScontainerserviceslistresult"></a>
<a id="tocscontainerserviceslistresult"></a>

```json
{
  "containerServices": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerServices|object|false|none|none|

<h2 id="tocS_GetContainerServicesRequest">GetContainerServicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainerservicesrequest"></a>
<a id="schema_GetContainerServicesRequest"></a>
<a id="tocSgetcontainerservicesrequest"></a>
<a id="tocsgetcontainerservicesrequest"></a>

```json
{
  "serviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|object|false|none|none|

<h2 id="tocS_GetCostEstimateResult">GetCostEstimateResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcostestimateresult"></a>
<a id="schema_GetCostEstimateResult"></a>
<a id="tocSgetcostestimateresult"></a>
<a id="tocsgetcostestimateresult"></a>

```json
{
  "resourcesBudgetEstimate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourcesBudgetEstimate|object|false|none|none|

<h2 id="tocS_GetCostEstimateRequest">GetCostEstimateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcostestimaterequest"></a>
<a id="schema_GetCostEstimateRequest"></a>
<a id="tocSgetcostestimaterequest"></a>
<a id="tocsgetcostestimaterequest"></a>

```json
{
  "resourceName": {},
  "startTime": {},
  "endTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|object|true|none|none|
|startTime|object|true|none|none|
|endTime|object|true|none|none|

<h2 id="tocS_GetDiskResult">GetDiskResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdiskresult"></a>
<a id="schema_GetDiskResult"></a>
<a id="tocSgetdiskresult"></a>
<a id="tocsgetdiskresult"></a>

```json
{
  "disk": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "addOns": {},
    "sizeInGb": {},
    "isSystemDisk": {},
    "iops": {},
    "path": {},
    "state": {},
    "attachedTo": {},
    "isAttached": {},
    "attachmentState": {},
    "gbInUse": {},
    "autoMountStatus": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disk|object|false|none|none|

<h2 id="tocS_GetDiskRequest">GetDiskRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdiskrequest"></a>
<a id="schema_GetDiskRequest"></a>
<a id="tocSgetdiskrequest"></a>
<a id="tocsgetdiskrequest"></a>

```json
{
  "diskName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskName|object|true|none|none|

<h2 id="tocS_GetDiskSnapshotResult">GetDiskSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdisksnapshotresult"></a>
<a id="schema_GetDiskSnapshotResult"></a>
<a id="tocSgetdisksnapshotresult"></a>
<a id="tocsgetdisksnapshotresult"></a>

```json
{
  "diskSnapshot": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "sizeInGb": {},
    "state": {},
    "progress": {},
    "fromDiskName": {},
    "fromDiskArn": {},
    "fromInstanceName": {},
    "fromInstanceArn": {},
    "isFromAutoSnapshot": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskSnapshot|object|false|none|none|

<h2 id="tocS_GetDiskSnapshotRequest">GetDiskSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdisksnapshotrequest"></a>
<a id="schema_GetDiskSnapshotRequest"></a>
<a id="tocSgetdisksnapshotrequest"></a>
<a id="tocsgetdisksnapshotrequest"></a>

```json
{
  "diskSnapshotName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskSnapshotName|object|true|none|none|

<h2 id="tocS_GetDiskSnapshotsResult">GetDiskSnapshotsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdisksnapshotsresult"></a>
<a id="schema_GetDiskSnapshotsResult"></a>
<a id="tocSgetdisksnapshotsresult"></a>
<a id="tocsgetdisksnapshotsresult"></a>

```json
{
  "diskSnapshots": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskSnapshots|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetDiskSnapshotsRequest">GetDiskSnapshotsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdisksnapshotsrequest"></a>
<a id="schema_GetDiskSnapshotsRequest"></a>
<a id="tocSgetdisksnapshotsrequest"></a>
<a id="tocsgetdisksnapshotsrequest"></a>

```json
{
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageToken|object|false|none|none|

<h2 id="tocS_GetDisksResult">GetDisksResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdisksresult"></a>
<a id="schema_GetDisksResult"></a>
<a id="tocSgetdisksresult"></a>
<a id="tocsgetdisksresult"></a>

```json
{
  "disks": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disks|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetDisksRequest">GetDisksRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdisksrequest"></a>
<a id="schema_GetDisksRequest"></a>
<a id="tocSgetdisksrequest"></a>
<a id="tocsgetdisksrequest"></a>

```json
{
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageToken|object|false|none|none|

<h2 id="tocS_GetDistributionBundlesResult">GetDistributionBundlesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdistributionbundlesresult"></a>
<a id="schema_GetDistributionBundlesResult"></a>
<a id="tocSgetdistributionbundlesresult"></a>
<a id="tocsgetdistributionbundlesresult"></a>

```json
{
  "bundles": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundles|object|false|none|none|

<h2 id="tocS_GetDistributionBundlesRequest">GetDistributionBundlesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdistributionbundlesrequest"></a>
<a id="schema_GetDistributionBundlesRequest"></a>
<a id="tocSgetdistributionbundlesrequest"></a>
<a id="tocsgetdistributionbundlesrequest"></a>

```json
{}
```

<h2 id="tocS_GetDistributionLatestCacheResetResult">GetDistributionLatestCacheResetResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdistributionlatestcacheresetresult"></a>
<a id="schema_GetDistributionLatestCacheResetResult"></a>
<a id="tocSgetdistributionlatestcacheresetresult"></a>
<a id="tocsgetdistributionlatestcacheresetresult"></a>

```json
{
  "status": {},
  "createTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|createTime|object|false|none|none|

<h2 id="tocS_GetDistributionLatestCacheResetRequest">GetDistributionLatestCacheResetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdistributionlatestcacheresetrequest"></a>
<a id="schema_GetDistributionLatestCacheResetRequest"></a>
<a id="tocSgetdistributionlatestcacheresetrequest"></a>
<a id="tocsgetdistributionlatestcacheresetrequest"></a>

```json
{
  "distributionName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distributionName|object|false|none|none|

<h2 id="tocS_GetDistributionMetricDataResult">GetDistributionMetricDataResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdistributionmetricdataresult"></a>
<a id="schema_GetDistributionMetricDataResult"></a>
<a id="tocSgetdistributionmetricdataresult"></a>
<a id="tocsgetdistributionmetricdataresult"></a>

```json
{
  "metricName": {},
  "metricData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricName|object|false|none|none|
|metricData|object|false|none|none|

<h2 id="tocS_GetDistributionMetricDataRequest">GetDistributionMetricDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdistributionmetricdatarequest"></a>
<a id="schema_GetDistributionMetricDataRequest"></a>
<a id="tocSgetdistributionmetricdatarequest"></a>
<a id="tocsgetdistributionmetricdatarequest"></a>

```json
{
  "distributionName": {},
  "metricName": {},
  "startTime": {},
  "endTime": {},
  "period": {},
  "unit": {},
  "statistics": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distributionName|object|true|none|none|
|metricName|object|true|none|none|
|startTime|object|true|none|none|
|endTime|object|true|none|none|
|period|object|true|none|none|
|unit|object|true|none|none|
|statistics|object|true|none|none|

<h2 id="tocS_GetDistributionsResult">GetDistributionsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdistributionsresult"></a>
<a id="schema_GetDistributionsResult"></a>
<a id="tocSgetdistributionsresult"></a>
<a id="tocsgetdistributionsresult"></a>

```json
{
  "distributions": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distributions|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetDistributionsRequest">GetDistributionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdistributionsrequest"></a>
<a id="schema_GetDistributionsRequest"></a>
<a id="tocSgetdistributionsrequest"></a>
<a id="tocsgetdistributionsrequest"></a>

```json
{
  "distributionName": {},
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distributionName|object|false|none|none|
|pageToken|object|false|none|none|

<h2 id="tocS_GetDomainResult">GetDomainResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainresult"></a>
<a id="schema_GetDomainResult"></a>
<a id="tocSgetdomainresult"></a>
<a id="tocsgetdomainresult"></a>

```json
{
  "domain": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "domainEntries": {},
    "registeredDomainDelegationInfo": {
      "nameServersUpdateState": {
        "code": {},
        "message": {}
      },
      "r53HostedZoneDeletionState": {
        "code": {},
        "message": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|false|none|none|

<h2 id="tocS_GetDomainRequest">GetDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainrequest"></a>
<a id="schema_GetDomainRequest"></a>
<a id="tocSgetdomainrequest"></a>
<a id="tocsgetdomainrequest"></a>

```json
{
  "domainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|true|none|none|

<h2 id="tocS_GetDomainsResult">GetDomainsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainsresult"></a>
<a id="schema_GetDomainsResult"></a>
<a id="tocSgetdomainsresult"></a>
<a id="tocsgetdomainsresult"></a>

```json
{
  "domains": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domains|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetDomainsRequest">GetDomainsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainsrequest"></a>
<a id="schema_GetDomainsRequest"></a>
<a id="tocSgetdomainsrequest"></a>
<a id="tocsgetdomainsrequest"></a>

```json
{
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageToken|object|false|none|none|

<h2 id="tocS_GetExportSnapshotRecordsResult">GetExportSnapshotRecordsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetexportsnapshotrecordsresult"></a>
<a id="schema_GetExportSnapshotRecordsResult"></a>
<a id="tocSgetexportsnapshotrecordsresult"></a>
<a id="tocsgetexportsnapshotrecordsresult"></a>

```json
{
  "exportSnapshotRecords": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportSnapshotRecords|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetExportSnapshotRecordsRequest">GetExportSnapshotRecordsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetexportsnapshotrecordsrequest"></a>
<a id="schema_GetExportSnapshotRecordsRequest"></a>
<a id="tocSgetexportsnapshotrecordsrequest"></a>
<a id="tocsgetexportsnapshotrecordsrequest"></a>

```json
{
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageToken|object|false|none|none|

<h2 id="tocS_GetInstanceResult">GetInstanceResult</h2>
<!-- backwards compatibility -->
<a id="schemagetinstanceresult"></a>
<a id="schema_GetInstanceResult"></a>
<a id="tocSgetinstanceresult"></a>
<a id="tocsgetinstanceresult"></a>

```json
{
  "instance": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "blueprintId": {},
    "blueprintName": {},
    "bundleId": {},
    "addOns": {},
    "isStaticIp": {},
    "privateIpAddress": {},
    "publicIpAddress": {},
    "ipv6Addresses": {},
    "ipAddressType": {},
    "hardware": {
      "cpuCount": {},
      "disks": {},
      "ramSizeInGb": {}
    },
    "networking": {
      "monthlyTransfer": {
        "gbPerMonthAllocated": {}
      },
      "ports": {}
    },
    "state": {
      "code": {},
      "name": {}
    },
    "username": {},
    "sshKeyName": {},
    "metadataOptions": {
      "state": {},
      "httpTokens": {},
      "httpEndpoint": {},
      "httpPutResponseHopLimit": {},
      "httpProtocolIpv6": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instance|object|false|none|none|

<h2 id="tocS_GetInstanceRequest">GetInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinstancerequest"></a>
<a id="schema_GetInstanceRequest"></a>
<a id="tocSgetinstancerequest"></a>
<a id="tocsgetinstancerequest"></a>

```json
{
  "instanceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceName|object|true|none|none|

<h2 id="tocS_GetInstanceAccessDetailsResult">GetInstanceAccessDetailsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetinstanceaccessdetailsresult"></a>
<a id="schema_GetInstanceAccessDetailsResult"></a>
<a id="tocSgetinstanceaccessdetailsresult"></a>
<a id="tocsgetinstanceaccessdetailsresult"></a>

```json
{
  "accessDetails": {
    "certKey": {},
    "expiresAt": {},
    "ipAddress": {},
    "password": {},
    "passwordData": {
      "ciphertext": {},
      "keyPairName": {}
    },
    "privateKey": {},
    "protocol": {},
    "instanceName": {},
    "username": {},
    "hostKeys": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessDetails|object|false|none|none|

<h2 id="tocS_GetInstanceAccessDetailsRequest">GetInstanceAccessDetailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinstanceaccessdetailsrequest"></a>
<a id="schema_GetInstanceAccessDetailsRequest"></a>
<a id="tocSgetinstanceaccessdetailsrequest"></a>
<a id="tocsgetinstanceaccessdetailsrequest"></a>

```json
{
  "instanceName": {},
  "protocol": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceName|object|true|none|none|
|protocol|object|false|none|none|

<h2 id="tocS_GetInstanceMetricDataResult">GetInstanceMetricDataResult</h2>
<!-- backwards compatibility -->
<a id="schemagetinstancemetricdataresult"></a>
<a id="schema_GetInstanceMetricDataResult"></a>
<a id="tocSgetinstancemetricdataresult"></a>
<a id="tocsgetinstancemetricdataresult"></a>

```json
{
  "metricName": {},
  "metricData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricName|object|false|none|none|
|metricData|object|false|none|none|

<h2 id="tocS_GetInstanceMetricDataRequest">GetInstanceMetricDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinstancemetricdatarequest"></a>
<a id="schema_GetInstanceMetricDataRequest"></a>
<a id="tocSgetinstancemetricdatarequest"></a>
<a id="tocsgetinstancemetricdatarequest"></a>

```json
{
  "instanceName": {},
  "metricName": {},
  "period": {},
  "startTime": {},
  "endTime": {},
  "unit": {},
  "statistics": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceName|object|true|none|none|
|metricName|object|true|none|none|
|period|object|true|none|none|
|startTime|object|true|none|none|
|endTime|object|true|none|none|
|unit|object|true|none|none|
|statistics|object|true|none|none|

<h2 id="tocS_GetInstancePortStatesResult">GetInstancePortStatesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetinstanceportstatesresult"></a>
<a id="schema_GetInstancePortStatesResult"></a>
<a id="tocSgetinstanceportstatesresult"></a>
<a id="tocsgetinstanceportstatesresult"></a>

```json
{
  "portStates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portStates|object|false|none|none|

<h2 id="tocS_GetInstancePortStatesRequest">GetInstancePortStatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinstanceportstatesrequest"></a>
<a id="schema_GetInstancePortStatesRequest"></a>
<a id="tocSgetinstanceportstatesrequest"></a>
<a id="tocsgetinstanceportstatesrequest"></a>

```json
{
  "instanceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceName|object|true|none|none|

<h2 id="tocS_GetInstanceSnapshotResult">GetInstanceSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemagetinstancesnapshotresult"></a>
<a id="schema_GetInstanceSnapshotResult"></a>
<a id="tocSgetinstancesnapshotresult"></a>
<a id="tocsgetinstancesnapshotresult"></a>

```json
{
  "instanceSnapshot": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "state": {},
    "progress": {},
    "fromAttachedDisks": {},
    "fromInstanceName": {},
    "fromInstanceArn": {},
    "fromBlueprintId": {},
    "fromBundleId": {},
    "isFromAutoSnapshot": {},
    "sizeInGb": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceSnapshot|object|false|none|none|

<h2 id="tocS_GetInstanceSnapshotRequest">GetInstanceSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinstancesnapshotrequest"></a>
<a id="schema_GetInstanceSnapshotRequest"></a>
<a id="tocSgetinstancesnapshotrequest"></a>
<a id="tocsgetinstancesnapshotrequest"></a>

```json
{
  "instanceSnapshotName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceSnapshotName|object|true|none|none|

<h2 id="tocS_GetInstanceSnapshotsResult">GetInstanceSnapshotsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetinstancesnapshotsresult"></a>
<a id="schema_GetInstanceSnapshotsResult"></a>
<a id="tocSgetinstancesnapshotsresult"></a>
<a id="tocsgetinstancesnapshotsresult"></a>

```json
{
  "instanceSnapshots": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceSnapshots|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetInstanceSnapshotsRequest">GetInstanceSnapshotsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinstancesnapshotsrequest"></a>
<a id="schema_GetInstanceSnapshotsRequest"></a>
<a id="tocSgetinstancesnapshotsrequest"></a>
<a id="tocsgetinstancesnapshotsrequest"></a>

```json
{
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageToken|object|false|none|none|

<h2 id="tocS_GetInstanceStateResult">GetInstanceStateResult</h2>
<!-- backwards compatibility -->
<a id="schemagetinstancestateresult"></a>
<a id="schema_GetInstanceStateResult"></a>
<a id="tocSgetinstancestateresult"></a>
<a id="tocsgetinstancestateresult"></a>

```json
{
  "state": {
    "code": {},
    "name": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|object|false|none|none|

<h2 id="tocS_GetInstanceStateRequest">GetInstanceStateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinstancestaterequest"></a>
<a id="schema_GetInstanceStateRequest"></a>
<a id="tocSgetinstancestaterequest"></a>
<a id="tocsgetinstancestaterequest"></a>

```json
{
  "instanceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceName|object|true|none|none|

<h2 id="tocS_GetInstancesResult">GetInstancesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetinstancesresult"></a>
<a id="schema_GetInstancesResult"></a>
<a id="tocSgetinstancesresult"></a>
<a id="tocsgetinstancesresult"></a>

```json
{
  "instances": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instances|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetInstancesRequest">GetInstancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinstancesrequest"></a>
<a id="schema_GetInstancesRequest"></a>
<a id="tocSgetinstancesrequest"></a>
<a id="tocsgetinstancesrequest"></a>

```json
{
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageToken|object|false|none|none|

<h2 id="tocS_GetKeyPairResult">GetKeyPairResult</h2>
<!-- backwards compatibility -->
<a id="schemagetkeypairresult"></a>
<a id="schema_GetKeyPairResult"></a>
<a id="tocSgetkeypairresult"></a>
<a id="tocsgetkeypairresult"></a>

```json
{
  "keyPair": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "fingerprint": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyPair|object|false|none|none|

<h2 id="tocS_GetKeyPairRequest">GetKeyPairRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetkeypairrequest"></a>
<a id="schema_GetKeyPairRequest"></a>
<a id="tocSgetkeypairrequest"></a>
<a id="tocsgetkeypairrequest"></a>

```json
{
  "keyPairName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyPairName|object|true|none|none|

<h2 id="tocS_GetKeyPairsResult">GetKeyPairsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetkeypairsresult"></a>
<a id="schema_GetKeyPairsResult"></a>
<a id="tocSgetkeypairsresult"></a>
<a id="tocsgetkeypairsresult"></a>

```json
{
  "keyPairs": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyPairs|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetKeyPairsRequest">GetKeyPairsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetkeypairsrequest"></a>
<a id="schema_GetKeyPairsRequest"></a>
<a id="tocSgetkeypairsrequest"></a>
<a id="tocsgetkeypairsrequest"></a>

```json
{
  "pageToken": {},
  "includeDefaultKeyPair": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageToken|object|false|none|none|
|includeDefaultKeyPair|object|false|none|none|

<h2 id="tocS_GetLoadBalancerResult">GetLoadBalancerResult</h2>
<!-- backwards compatibility -->
<a id="schemagetloadbalancerresult"></a>
<a id="schema_GetLoadBalancerResult"></a>
<a id="tocSgetloadbalancerresult"></a>
<a id="tocsgetloadbalancerresult"></a>

```json
{
  "loadBalancer": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "dnsName": {},
    "state": {},
    "protocol": {},
    "publicPorts": {},
    "healthCheckPath": {},
    "instancePort": {},
    "instanceHealthSummary": {},
    "tlsCertificateSummaries": {},
    "configurationOptions": {
      "property1": "string",
      "property2": "string"
    },
    "ipAddressType": {},
    "httpsRedirectionEnabled": {},
    "tlsPolicyName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loadBalancer|object|false|none|none|

<h2 id="tocS_GetLoadBalancerRequest">GetLoadBalancerRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetloadbalancerrequest"></a>
<a id="schema_GetLoadBalancerRequest"></a>
<a id="tocSgetloadbalancerrequest"></a>
<a id="tocsgetloadbalancerrequest"></a>

```json
{
  "loadBalancerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loadBalancerName|object|true|none|none|

<h2 id="tocS_GetLoadBalancerMetricDataResult">GetLoadBalancerMetricDataResult</h2>
<!-- backwards compatibility -->
<a id="schemagetloadbalancermetricdataresult"></a>
<a id="schema_GetLoadBalancerMetricDataResult"></a>
<a id="tocSgetloadbalancermetricdataresult"></a>
<a id="tocsgetloadbalancermetricdataresult"></a>

```json
{
  "metricName": {},
  "metricData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricName|object|false|none|none|
|metricData|object|false|none|none|

<h2 id="tocS_GetLoadBalancerMetricDataRequest">GetLoadBalancerMetricDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetloadbalancermetricdatarequest"></a>
<a id="schema_GetLoadBalancerMetricDataRequest"></a>
<a id="tocSgetloadbalancermetricdatarequest"></a>
<a id="tocsgetloadbalancermetricdatarequest"></a>

```json
{
  "loadBalancerName": {},
  "metricName": {},
  "period": {},
  "startTime": {},
  "endTime": {},
  "unit": {},
  "statistics": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loadBalancerName|object|true|none|none|
|metricName|object|true|none|none|
|period|object|true|none|none|
|startTime|object|true|none|none|
|endTime|object|true|none|none|
|unit|object|true|none|none|
|statistics|object|true|none|none|

<h2 id="tocS_GetLoadBalancerTlsCertificatesResult">GetLoadBalancerTlsCertificatesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetloadbalancertlscertificatesresult"></a>
<a id="schema_GetLoadBalancerTlsCertificatesResult"></a>
<a id="tocSgetloadbalancertlscertificatesresult"></a>
<a id="tocsgetloadbalancertlscertificatesresult"></a>

```json
{
  "tlsCertificates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tlsCertificates|object|false|none|none|

<h2 id="tocS_GetLoadBalancerTlsCertificatesRequest">GetLoadBalancerTlsCertificatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetloadbalancertlscertificatesrequest"></a>
<a id="schema_GetLoadBalancerTlsCertificatesRequest"></a>
<a id="tocSgetloadbalancertlscertificatesrequest"></a>
<a id="tocsgetloadbalancertlscertificatesrequest"></a>

```json
{
  "loadBalancerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loadBalancerName|object|true|none|none|

<h2 id="tocS_GetLoadBalancerTlsPoliciesResult">GetLoadBalancerTlsPoliciesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetloadbalancertlspoliciesresult"></a>
<a id="schema_GetLoadBalancerTlsPoliciesResult"></a>
<a id="tocSgetloadbalancertlspoliciesresult"></a>
<a id="tocsgetloadbalancertlspoliciesresult"></a>

```json
{
  "tlsPolicies": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tlsPolicies|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetLoadBalancerTlsPoliciesRequest">GetLoadBalancerTlsPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetloadbalancertlspoliciesrequest"></a>
<a id="schema_GetLoadBalancerTlsPoliciesRequest"></a>
<a id="tocSgetloadbalancertlspoliciesrequest"></a>
<a id="tocsgetloadbalancertlspoliciesrequest"></a>

```json
{
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageToken|object|false|none|none|

<h2 id="tocS_GetLoadBalancersResult">GetLoadBalancersResult</h2>
<!-- backwards compatibility -->
<a id="schemagetloadbalancersresult"></a>
<a id="schema_GetLoadBalancersResult"></a>
<a id="tocSgetloadbalancersresult"></a>
<a id="tocsgetloadbalancersresult"></a>

```json
{
  "loadBalancers": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loadBalancers|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetLoadBalancersRequest">GetLoadBalancersRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetloadbalancersrequest"></a>
<a id="schema_GetLoadBalancersRequest"></a>
<a id="tocSgetloadbalancersrequest"></a>
<a id="tocsgetloadbalancersrequest"></a>

```json
{
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageToken|object|false|none|none|

<h2 id="tocS_GetOperationResult">GetOperationResult</h2>
<!-- backwards compatibility -->
<a id="schemagetoperationresult"></a>
<a id="schema_GetOperationResult"></a>
<a id="tocSgetoperationresult"></a>
<a id="tocsgetoperationresult"></a>

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|object|false|none|none|

<h2 id="tocS_GetOperationRequest">GetOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetoperationrequest"></a>
<a id="schema_GetOperationRequest"></a>
<a id="tocSgetoperationrequest"></a>
<a id="tocsgetoperationrequest"></a>

```json
{
  "operationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operationId|object|true|none|none|

<h2 id="tocS_GetOperationsResult">GetOperationsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetoperationsresult"></a>
<a id="schema_GetOperationsResult"></a>
<a id="tocSgetoperationsresult"></a>
<a id="tocsgetoperationsresult"></a>

```json
{
  "operations": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetOperationsRequest">GetOperationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetoperationsrequest"></a>
<a id="schema_GetOperationsRequest"></a>
<a id="tocSgetoperationsrequest"></a>
<a id="tocsgetoperationsrequest"></a>

```json
{
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageToken|object|false|none|none|

<h2 id="tocS_GetOperationsForResourceResult">GetOperationsForResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemagetoperationsforresourceresult"></a>
<a id="schema_GetOperationsForResourceResult"></a>
<a id="tocSgetoperationsforresourceresult"></a>
<a id="tocsgetoperationsforresourceresult"></a>

```json
{
  "operations": {},
  "nextPageCount": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|
|nextPageCount|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetOperationsForResourceRequest">GetOperationsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetoperationsforresourcerequest"></a>
<a id="schema_GetOperationsForResourceRequest"></a>
<a id="tocSgetoperationsforresourcerequest"></a>
<a id="tocsgetoperationsforresourcerequest"></a>

```json
{
  "resourceName": {},
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|object|true|none|none|
|pageToken|object|false|none|none|

<h2 id="tocS_GetRegionsResult">GetRegionsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetregionsresult"></a>
<a id="schema_GetRegionsResult"></a>
<a id="tocSgetregionsresult"></a>
<a id="tocsgetregionsresult"></a>

```json
{
  "regions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regions|object|false|none|none|

<h2 id="tocS_GetRegionsRequest">GetRegionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetregionsrequest"></a>
<a id="schema_GetRegionsRequest"></a>
<a id="tocSgetregionsrequest"></a>
<a id="tocsgetregionsrequest"></a>

```json
{
  "includeAvailabilityZones": {},
  "includeRelationalDatabaseAvailabilityZones": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeAvailabilityZones|object|false|none|none|
|includeRelationalDatabaseAvailabilityZones|object|false|none|none|

<h2 id="tocS_GetRelationalDatabaseResult">GetRelationalDatabaseResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabaseresult"></a>
<a id="schema_GetRelationalDatabaseResult"></a>
<a id="tocSgetrelationaldatabaseresult"></a>
<a id="tocsgetrelationaldatabaseresult"></a>

```json
{
  "relationalDatabase": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "relationalDatabaseBlueprintId": {},
    "relationalDatabaseBundleId": {},
    "masterDatabaseName": {},
    "hardware": {
      "cpuCount": {},
      "diskSizeInGb": {},
      "ramSizeInGb": {}
    },
    "state": {},
    "secondaryAvailabilityZone": {},
    "backupRetentionEnabled": {},
    "pendingModifiedValues": {
      "masterUserPassword": {},
      "engineVersion": {},
      "backupRetentionEnabled": {}
    },
    "engine": {},
    "engineVersion": {},
    "latestRestorableTime": {},
    "masterUsername": {},
    "parameterApplyStatus": {},
    "preferredBackupWindow": {},
    "preferredMaintenanceWindow": {},
    "publiclyAccessible": {},
    "masterEndpoint": {
      "port": {},
      "address": {}
    },
    "pendingMaintenanceActions": {},
    "caCertificateIdentifier": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabase|object|false|none|none|

<h2 id="tocS_GetRelationalDatabaseRequest">GetRelationalDatabaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabaserequest"></a>
<a id="schema_GetRelationalDatabaseRequest"></a>
<a id="tocSgetrelationaldatabaserequest"></a>
<a id="tocsgetrelationaldatabaserequest"></a>

```json
{
  "relationalDatabaseName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseName|object|true|none|none|

<h2 id="tocS_GetRelationalDatabaseBlueprintsResult">GetRelationalDatabaseBlueprintsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabaseblueprintsresult"></a>
<a id="schema_GetRelationalDatabaseBlueprintsResult"></a>
<a id="tocSgetrelationaldatabaseblueprintsresult"></a>
<a id="tocsgetrelationaldatabaseblueprintsresult"></a>

```json
{
  "blueprints": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blueprints|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetRelationalDatabaseBlueprintsRequest">GetRelationalDatabaseBlueprintsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabaseblueprintsrequest"></a>
<a id="schema_GetRelationalDatabaseBlueprintsRequest"></a>
<a id="tocSgetrelationaldatabaseblueprintsrequest"></a>
<a id="tocsgetrelationaldatabaseblueprintsrequest"></a>

```json
{
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageToken|object|false|none|none|

<h2 id="tocS_GetRelationalDatabaseBundlesResult">GetRelationalDatabaseBundlesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabasebundlesresult"></a>
<a id="schema_GetRelationalDatabaseBundlesResult"></a>
<a id="tocSgetrelationaldatabasebundlesresult"></a>
<a id="tocsgetrelationaldatabasebundlesresult"></a>

```json
{
  "bundles": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundles|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetRelationalDatabaseBundlesRequest">GetRelationalDatabaseBundlesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabasebundlesrequest"></a>
<a id="schema_GetRelationalDatabaseBundlesRequest"></a>
<a id="tocSgetrelationaldatabasebundlesrequest"></a>
<a id="tocsgetrelationaldatabasebundlesrequest"></a>

```json
{
  "pageToken": {},
  "includeInactive": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageToken|object|false|none|none|
|includeInactive|object|false|none|none|

<h2 id="tocS_GetRelationalDatabaseEventsResult">GetRelationalDatabaseEventsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabaseeventsresult"></a>
<a id="schema_GetRelationalDatabaseEventsResult"></a>
<a id="tocSgetrelationaldatabaseeventsresult"></a>
<a id="tocsgetrelationaldatabaseeventsresult"></a>

```json
{
  "relationalDatabaseEvents": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseEvents|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetRelationalDatabaseEventsRequest">GetRelationalDatabaseEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabaseeventsrequest"></a>
<a id="schema_GetRelationalDatabaseEventsRequest"></a>
<a id="tocSgetrelationaldatabaseeventsrequest"></a>
<a id="tocsgetrelationaldatabaseeventsrequest"></a>

```json
{
  "relationalDatabaseName": {},
  "durationInMinutes": {},
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseName|object|true|none|none|
|durationInMinutes|object|false|none|none|
|pageToken|object|false|none|none|

<h2 id="tocS_GetRelationalDatabaseLogEventsResult">GetRelationalDatabaseLogEventsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabaselogeventsresult"></a>
<a id="schema_GetRelationalDatabaseLogEventsResult"></a>
<a id="tocSgetrelationaldatabaselogeventsresult"></a>
<a id="tocsgetrelationaldatabaselogeventsresult"></a>

```json
{
  "resourceLogEvents": {},
  "nextBackwardToken": {},
  "nextForwardToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceLogEvents|object|false|none|none|
|nextBackwardToken|object|false|none|none|
|nextForwardToken|object|false|none|none|

<h2 id="tocS_GetRelationalDatabaseLogEventsRequest">GetRelationalDatabaseLogEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabaselogeventsrequest"></a>
<a id="schema_GetRelationalDatabaseLogEventsRequest"></a>
<a id="tocSgetrelationaldatabaselogeventsrequest"></a>
<a id="tocsgetrelationaldatabaselogeventsrequest"></a>

```json
{
  "relationalDatabaseName": {},
  "logStreamName": {},
  "startTime": {},
  "endTime": {},
  "startFromHead": {},
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseName|object|true|none|none|
|logStreamName|object|true|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|
|startFromHead|object|false|none|none|
|pageToken|object|false|none|none|

<h2 id="tocS_GetRelationalDatabaseLogStreamsResult">GetRelationalDatabaseLogStreamsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabaselogstreamsresult"></a>
<a id="schema_GetRelationalDatabaseLogStreamsResult"></a>
<a id="tocSgetrelationaldatabaselogstreamsresult"></a>
<a id="tocsgetrelationaldatabaselogstreamsresult"></a>

```json
{
  "logStreams": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logStreams|object|false|none|none|

<h2 id="tocS_GetRelationalDatabaseLogStreamsRequest">GetRelationalDatabaseLogStreamsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabaselogstreamsrequest"></a>
<a id="schema_GetRelationalDatabaseLogStreamsRequest"></a>
<a id="tocSgetrelationaldatabaselogstreamsrequest"></a>
<a id="tocsgetrelationaldatabaselogstreamsrequest"></a>

```json
{
  "relationalDatabaseName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseName|object|true|none|none|

<h2 id="tocS_GetRelationalDatabaseMasterUserPasswordResult">GetRelationalDatabaseMasterUserPasswordResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabasemasteruserpasswordresult"></a>
<a id="schema_GetRelationalDatabaseMasterUserPasswordResult"></a>
<a id="tocSgetrelationaldatabasemasteruserpasswordresult"></a>
<a id="tocsgetrelationaldatabasemasteruserpasswordresult"></a>

```json
{
  "masterUserPassword": {},
  "createdAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|masterUserPassword|object|false|none|none|
|createdAt|object|false|none|none|

<h2 id="tocS_GetRelationalDatabaseMasterUserPasswordRequest">GetRelationalDatabaseMasterUserPasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabasemasteruserpasswordrequest"></a>
<a id="schema_GetRelationalDatabaseMasterUserPasswordRequest"></a>
<a id="tocSgetrelationaldatabasemasteruserpasswordrequest"></a>
<a id="tocsgetrelationaldatabasemasteruserpasswordrequest"></a>

```json
{
  "relationalDatabaseName": {},
  "passwordVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseName|object|true|none|none|
|passwordVersion|object|false|none|none|

<h2 id="tocS_GetRelationalDatabaseMetricDataResult">GetRelationalDatabaseMetricDataResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabasemetricdataresult"></a>
<a id="schema_GetRelationalDatabaseMetricDataResult"></a>
<a id="tocSgetrelationaldatabasemetricdataresult"></a>
<a id="tocsgetrelationaldatabasemetricdataresult"></a>

```json
{
  "metricName": {},
  "metricData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricName|object|false|none|none|
|metricData|object|false|none|none|

<h2 id="tocS_GetRelationalDatabaseMetricDataRequest">GetRelationalDatabaseMetricDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabasemetricdatarequest"></a>
<a id="schema_GetRelationalDatabaseMetricDataRequest"></a>
<a id="tocSgetrelationaldatabasemetricdatarequest"></a>
<a id="tocsgetrelationaldatabasemetricdatarequest"></a>

```json
{
  "relationalDatabaseName": {},
  "metricName": {},
  "period": {},
  "startTime": {},
  "endTime": {},
  "unit": {},
  "statistics": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseName|object|true|none|none|
|metricName|object|true|none|none|
|period|object|true|none|none|
|startTime|object|true|none|none|
|endTime|object|true|none|none|
|unit|object|true|none|none|
|statistics|object|true|none|none|

<h2 id="tocS_GetRelationalDatabaseParametersResult">GetRelationalDatabaseParametersResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabaseparametersresult"></a>
<a id="schema_GetRelationalDatabaseParametersResult"></a>
<a id="tocSgetrelationaldatabaseparametersresult"></a>
<a id="tocsgetrelationaldatabaseparametersresult"></a>

```json
{
  "parameters": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetRelationalDatabaseParametersRequest">GetRelationalDatabaseParametersRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabaseparametersrequest"></a>
<a id="schema_GetRelationalDatabaseParametersRequest"></a>
<a id="tocSgetrelationaldatabaseparametersrequest"></a>
<a id="tocsgetrelationaldatabaseparametersrequest"></a>

```json
{
  "relationalDatabaseName": {},
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseName|object|true|none|none|
|pageToken|object|false|none|none|

<h2 id="tocS_GetRelationalDatabaseSnapshotResult">GetRelationalDatabaseSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabasesnapshotresult"></a>
<a id="schema_GetRelationalDatabaseSnapshotResult"></a>
<a id="tocSgetrelationaldatabasesnapshotresult"></a>
<a id="tocsgetrelationaldatabasesnapshotresult"></a>

```json
{
  "relationalDatabaseSnapshot": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "engine": {},
    "engineVersion": {},
    "sizeInGb": {},
    "state": {},
    "fromRelationalDatabaseName": {},
    "fromRelationalDatabaseArn": {},
    "fromRelationalDatabaseBundleId": {},
    "fromRelationalDatabaseBlueprintId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseSnapshot|object|false|none|none|

<h2 id="tocS_GetRelationalDatabaseSnapshotRequest">GetRelationalDatabaseSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabasesnapshotrequest"></a>
<a id="schema_GetRelationalDatabaseSnapshotRequest"></a>
<a id="tocSgetrelationaldatabasesnapshotrequest"></a>
<a id="tocsgetrelationaldatabasesnapshotrequest"></a>

```json
{
  "relationalDatabaseSnapshotName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseSnapshotName|object|true|none|none|

<h2 id="tocS_GetRelationalDatabaseSnapshotsResult">GetRelationalDatabaseSnapshotsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabasesnapshotsresult"></a>
<a id="schema_GetRelationalDatabaseSnapshotsResult"></a>
<a id="tocSgetrelationaldatabasesnapshotsresult"></a>
<a id="tocsgetrelationaldatabasesnapshotsresult"></a>

```json
{
  "relationalDatabaseSnapshots": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseSnapshots|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetRelationalDatabaseSnapshotsRequest">GetRelationalDatabaseSnapshotsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabasesnapshotsrequest"></a>
<a id="schema_GetRelationalDatabaseSnapshotsRequest"></a>
<a id="tocSgetrelationaldatabasesnapshotsrequest"></a>
<a id="tocsgetrelationaldatabasesnapshotsrequest"></a>

```json
{
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageToken|object|false|none|none|

<h2 id="tocS_GetRelationalDatabasesResult">GetRelationalDatabasesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabasesresult"></a>
<a id="schema_GetRelationalDatabasesResult"></a>
<a id="tocSgetrelationaldatabasesresult"></a>
<a id="tocsgetrelationaldatabasesresult"></a>

```json
{
  "relationalDatabases": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabases|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetRelationalDatabasesRequest">GetRelationalDatabasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrelationaldatabasesrequest"></a>
<a id="schema_GetRelationalDatabasesRequest"></a>
<a id="tocSgetrelationaldatabasesrequest"></a>
<a id="tocsgetrelationaldatabasesrequest"></a>

```json
{
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageToken|object|false|none|none|

<h2 id="tocS_GetStaticIpResult">GetStaticIpResult</h2>
<!-- backwards compatibility -->
<a id="schemagetstaticipresult"></a>
<a id="schema_GetStaticIpResult"></a>
<a id="tocSgetstaticipresult"></a>
<a id="tocsgetstaticipresult"></a>

```json
{
  "staticIp": {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "ipAddress": {},
    "attachedTo": {},
    "isAttached": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|staticIp|object|false|none|none|

<h2 id="tocS_GetStaticIpRequest">GetStaticIpRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstaticiprequest"></a>
<a id="schema_GetStaticIpRequest"></a>
<a id="tocSgetstaticiprequest"></a>
<a id="tocsgetstaticiprequest"></a>

```json
{
  "staticIpName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|staticIpName|object|true|none|none|

<h2 id="tocS_GetStaticIpsResult">GetStaticIpsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetstaticipsresult"></a>
<a id="schema_GetStaticIpsResult"></a>
<a id="tocSgetstaticipsresult"></a>
<a id="tocsgetstaticipsresult"></a>

```json
{
  "staticIps": {},
  "nextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|staticIps|object|false|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetStaticIpsRequest">GetStaticIpsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstaticipsrequest"></a>
<a id="schema_GetStaticIpsRequest"></a>
<a id="tocSgetstaticipsrequest"></a>
<a id="tocsgetstaticipsrequest"></a>

```json
{
  "pageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageToken|object|false|none|none|

<h2 id="tocS_ImportKeyPairResult">ImportKeyPairResult</h2>
<!-- backwards compatibility -->
<a id="schemaimportkeypairresult"></a>
<a id="schema_ImportKeyPairResult"></a>
<a id="tocSimportkeypairresult"></a>
<a id="tocsimportkeypairresult"></a>

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|object|false|none|none|

<h2 id="tocS_ImportKeyPairRequest">ImportKeyPairRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportkeypairrequest"></a>
<a id="schema_ImportKeyPairRequest"></a>
<a id="tocSimportkeypairrequest"></a>
<a id="tocsimportkeypairrequest"></a>

```json
{
  "keyPairName": {},
  "publicKeyBase64": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyPairName|object|true|none|none|
|publicKeyBase64|object|true|none|none|

<h2 id="tocS_IsVpcPeeredResult">IsVpcPeeredResult</h2>
<!-- backwards compatibility -->
<a id="schemaisvpcpeeredresult"></a>
<a id="schema_IsVpcPeeredResult"></a>
<a id="tocSisvpcpeeredresult"></a>
<a id="tocsisvpcpeeredresult"></a>

```json
{
  "isPeered": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPeered|object|false|none|none|

<h2 id="tocS_IsVpcPeeredRequest">IsVpcPeeredRequest</h2>
<!-- backwards compatibility -->
<a id="schemaisvpcpeeredrequest"></a>
<a id="schema_IsVpcPeeredRequest"></a>
<a id="tocSisvpcpeeredrequest"></a>
<a id="tocsisvpcpeeredrequest"></a>

```json
{}
```

<h2 id="tocS_OpenInstancePublicPortsResult">OpenInstancePublicPortsResult</h2>
<!-- backwards compatibility -->
<a id="schemaopeninstancepublicportsresult"></a>
<a id="schema_OpenInstancePublicPortsResult"></a>
<a id="tocSopeninstancepublicportsresult"></a>
<a id="tocsopeninstancepublicportsresult"></a>

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|object|false|none|none|

<h2 id="tocS_OpenInstancePublicPortsRequest">OpenInstancePublicPortsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaopeninstancepublicportsrequest"></a>
<a id="schema_OpenInstancePublicPortsRequest"></a>
<a id="tocSopeninstancepublicportsrequest"></a>
<a id="tocsopeninstancepublicportsrequest"></a>

```json
{
  "portInfo": {
    "fromPort": {},
    "toPort": {},
    "protocol": {},
    "cidrs": {},
    "ipv6Cidrs": {},
    "cidrListAliases": {}
  },
  "instanceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portInfo|object|true|none|none|
|instanceName|object|true|none|none|

<h2 id="tocS_PeerVpcResult">PeerVpcResult</h2>
<!-- backwards compatibility -->
<a id="schemapeervpcresult"></a>
<a id="schema_PeerVpcResult"></a>
<a id="tocSpeervpcresult"></a>
<a id="tocspeervpcresult"></a>

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|object|false|none|none|

<h2 id="tocS_PeerVpcRequest">PeerVpcRequest</h2>
<!-- backwards compatibility -->
<a id="schemapeervpcrequest"></a>
<a id="schema_PeerVpcRequest"></a>
<a id="tocSpeervpcrequest"></a>
<a id="tocspeervpcrequest"></a>

```json
{}
```

<h2 id="tocS_PutAlarmResult">PutAlarmResult</h2>
<!-- backwards compatibility -->
<a id="schemaputalarmresult"></a>
<a id="schema_PutAlarmResult"></a>
<a id="tocSputalarmresult"></a>
<a id="tocsputalarmresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_PutAlarmRequest">PutAlarmRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputalarmrequest"></a>
<a id="schema_PutAlarmRequest"></a>
<a id="tocSputalarmrequest"></a>
<a id="tocsputalarmrequest"></a>

```json
{
  "alarmName": {},
  "metricName": {},
  "monitoredResourceName": {},
  "comparisonOperator": {},
  "threshold": {},
  "evaluationPeriods": {},
  "datapointsToAlarm": {},
  "treatMissingData": {},
  "contactProtocols": {},
  "notificationTriggers": {},
  "notificationEnabled": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alarmName|object|true|none|none|
|metricName|object|true|none|none|
|monitoredResourceName|object|true|none|none|
|comparisonOperator|object|true|none|none|
|threshold|object|true|none|none|
|evaluationPeriods|object|true|none|none|
|datapointsToAlarm|object|false|none|none|
|treatMissingData|object|false|none|none|
|contactProtocols|object|false|none|none|
|notificationTriggers|object|false|none|none|
|notificationEnabled|object|false|none|none|

<h2 id="tocS_PutInstancePublicPortsResult">PutInstancePublicPortsResult</h2>
<!-- backwards compatibility -->
<a id="schemaputinstancepublicportsresult"></a>
<a id="schema_PutInstancePublicPortsResult"></a>
<a id="tocSputinstancepublicportsresult"></a>
<a id="tocsputinstancepublicportsresult"></a>

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|object|false|none|none|

<h2 id="tocS_PutInstancePublicPortsRequest">PutInstancePublicPortsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputinstancepublicportsrequest"></a>
<a id="schema_PutInstancePublicPortsRequest"></a>
<a id="tocSputinstancepublicportsrequest"></a>
<a id="tocsputinstancepublicportsrequest"></a>

```json
{
  "portInfos": {},
  "instanceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portInfos|object|true|none|none|
|instanceName|object|true|none|none|

<h2 id="tocS_RebootInstanceResult">RebootInstanceResult</h2>
<!-- backwards compatibility -->
<a id="schemarebootinstanceresult"></a>
<a id="schema_RebootInstanceResult"></a>
<a id="tocSrebootinstanceresult"></a>
<a id="tocsrebootinstanceresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_RebootInstanceRequest">RebootInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemarebootinstancerequest"></a>
<a id="schema_RebootInstanceRequest"></a>
<a id="tocSrebootinstancerequest"></a>
<a id="tocsrebootinstancerequest"></a>

```json
{
  "instanceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceName|object|true|none|none|

<h2 id="tocS_RebootRelationalDatabaseResult">RebootRelationalDatabaseResult</h2>
<!-- backwards compatibility -->
<a id="schemarebootrelationaldatabaseresult"></a>
<a id="schema_RebootRelationalDatabaseResult"></a>
<a id="tocSrebootrelationaldatabaseresult"></a>
<a id="tocsrebootrelationaldatabaseresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_RebootRelationalDatabaseRequest">RebootRelationalDatabaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemarebootrelationaldatabaserequest"></a>
<a id="schema_RebootRelationalDatabaseRequest"></a>
<a id="tocSrebootrelationaldatabaserequest"></a>
<a id="tocsrebootrelationaldatabaserequest"></a>

```json
{
  "relationalDatabaseName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseName|object|true|none|none|

<h2 id="tocS_RegisterContainerImageResult">RegisterContainerImageResult</h2>
<!-- backwards compatibility -->
<a id="schemaregistercontainerimageresult"></a>
<a id="schema_RegisterContainerImageResult"></a>
<a id="tocSregistercontainerimageresult"></a>
<a id="tocsregistercontainerimageresult"></a>

```json
{
  "containerImage": {
    "image": {},
    "digest": {},
    "createdAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerImage|object|false|none|none|

<h2 id="tocS_RegisterContainerImageRequest">RegisterContainerImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregistercontainerimagerequest"></a>
<a id="schema_RegisterContainerImageRequest"></a>
<a id="tocSregistercontainerimagerequest"></a>
<a id="tocsregistercontainerimagerequest"></a>

```json
{
  "serviceName": {},
  "label": {},
  "digest": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|object|true|none|none|
|label|object|true|none|none|
|digest|object|true|none|none|

<h2 id="tocS_ReleaseStaticIpResult">ReleaseStaticIpResult</h2>
<!-- backwards compatibility -->
<a id="schemareleasestaticipresult"></a>
<a id="schema_ReleaseStaticIpResult"></a>
<a id="tocSreleasestaticipresult"></a>
<a id="tocsreleasestaticipresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_ReleaseStaticIpRequest">ReleaseStaticIpRequest</h2>
<!-- backwards compatibility -->
<a id="schemareleasestaticiprequest"></a>
<a id="schema_ReleaseStaticIpRequest"></a>
<a id="tocSreleasestaticiprequest"></a>
<a id="tocsreleasestaticiprequest"></a>

```json
{
  "staticIpName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|staticIpName|object|true|none|none|

<h2 id="tocS_ResetDistributionCacheResult">ResetDistributionCacheResult</h2>
<!-- backwards compatibility -->
<a id="schemaresetdistributioncacheresult"></a>
<a id="schema_ResetDistributionCacheResult"></a>
<a id="tocSresetdistributioncacheresult"></a>
<a id="tocsresetdistributioncacheresult"></a>

```json
{
  "status": {},
  "createTime": {},
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|createTime|object|false|none|none|
|operation|object|false|none|none|

<h2 id="tocS_ResetDistributionCacheRequest">ResetDistributionCacheRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresetdistributioncacherequest"></a>
<a id="schema_ResetDistributionCacheRequest"></a>
<a id="tocSresetdistributioncacherequest"></a>
<a id="tocsresetdistributioncacherequest"></a>

```json
{
  "distributionName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distributionName|object|false|none|none|

<h2 id="tocS_SendContactMethodVerificationResult">SendContactMethodVerificationResult</h2>
<!-- backwards compatibility -->
<a id="schemasendcontactmethodverificationresult"></a>
<a id="schema_SendContactMethodVerificationResult"></a>
<a id="tocSsendcontactmethodverificationresult"></a>
<a id="tocssendcontactmethodverificationresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_SendContactMethodVerificationRequest">SendContactMethodVerificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendcontactmethodverificationrequest"></a>
<a id="schema_SendContactMethodVerificationRequest"></a>
<a id="tocSsendcontactmethodverificationrequest"></a>
<a id="tocssendcontactmethodverificationrequest"></a>

```json
{
  "protocol": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|protocol|object|true|none|none|

<h2 id="tocS_SetIpAddressTypeResult">SetIpAddressTypeResult</h2>
<!-- backwards compatibility -->
<a id="schemasetipaddresstyperesult"></a>
<a id="schema_SetIpAddressTypeResult"></a>
<a id="tocSsetipaddresstyperesult"></a>
<a id="tocssetipaddresstyperesult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_SetIpAddressTypeRequest">SetIpAddressTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetipaddresstyperequest"></a>
<a id="schema_SetIpAddressTypeRequest"></a>
<a id="tocSsetipaddresstyperequest"></a>
<a id="tocssetipaddresstyperequest"></a>

```json
{
  "resourceType": {},
  "resourceName": {},
  "ipAddressType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|true|none|none|
|resourceName|object|true|none|none|
|ipAddressType|object|true|none|none|

<h2 id="tocS_SetResourceAccessForBucketResult">SetResourceAccessForBucketResult</h2>
<!-- backwards compatibility -->
<a id="schemasetresourceaccessforbucketresult"></a>
<a id="schema_SetResourceAccessForBucketResult"></a>
<a id="tocSsetresourceaccessforbucketresult"></a>
<a id="tocssetresourceaccessforbucketresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_SetResourceAccessForBucketRequest">SetResourceAccessForBucketRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetresourceaccessforbucketrequest"></a>
<a id="schema_SetResourceAccessForBucketRequest"></a>
<a id="tocSsetresourceaccessforbucketrequest"></a>
<a id="tocssetresourceaccessforbucketrequest"></a>

```json
{
  "resourceName": {},
  "bucketName": {},
  "access": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|object|true|none|none|
|bucketName|object|true|none|none|
|access|object|true|none|none|

<h2 id="tocS_StartGUISessionResult">StartGUISessionResult</h2>
<!-- backwards compatibility -->
<a id="schemastartguisessionresult"></a>
<a id="schema_StartGUISessionResult"></a>
<a id="tocSstartguisessionresult"></a>
<a id="tocsstartguisessionresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_StartGUISessionRequest">StartGUISessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartguisessionrequest"></a>
<a id="schema_StartGUISessionRequest"></a>
<a id="tocSstartguisessionrequest"></a>
<a id="tocsstartguisessionrequest"></a>

```json
{
  "resourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|object|true|none|none|

<h2 id="tocS_StartInstanceResult">StartInstanceResult</h2>
<!-- backwards compatibility -->
<a id="schemastartinstanceresult"></a>
<a id="schema_StartInstanceResult"></a>
<a id="tocSstartinstanceresult"></a>
<a id="tocsstartinstanceresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_StartInstanceRequest">StartInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartinstancerequest"></a>
<a id="schema_StartInstanceRequest"></a>
<a id="tocSstartinstancerequest"></a>
<a id="tocsstartinstancerequest"></a>

```json
{
  "instanceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceName|object|true|none|none|

<h2 id="tocS_StartRelationalDatabaseResult">StartRelationalDatabaseResult</h2>
<!-- backwards compatibility -->
<a id="schemastartrelationaldatabaseresult"></a>
<a id="schema_StartRelationalDatabaseResult"></a>
<a id="tocSstartrelationaldatabaseresult"></a>
<a id="tocsstartrelationaldatabaseresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_StartRelationalDatabaseRequest">StartRelationalDatabaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartrelationaldatabaserequest"></a>
<a id="schema_StartRelationalDatabaseRequest"></a>
<a id="tocSstartrelationaldatabaserequest"></a>
<a id="tocsstartrelationaldatabaserequest"></a>

```json
{
  "relationalDatabaseName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseName|object|true|none|none|

<h2 id="tocS_StopGUISessionResult">StopGUISessionResult</h2>
<!-- backwards compatibility -->
<a id="schemastopguisessionresult"></a>
<a id="schema_StopGUISessionResult"></a>
<a id="tocSstopguisessionresult"></a>
<a id="tocsstopguisessionresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_StopGUISessionRequest">StopGUISessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopguisessionrequest"></a>
<a id="schema_StopGUISessionRequest"></a>
<a id="tocSstopguisessionrequest"></a>
<a id="tocsstopguisessionrequest"></a>

```json
{
  "resourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|object|true|none|none|

<h2 id="tocS_StopInstanceResult">StopInstanceResult</h2>
<!-- backwards compatibility -->
<a id="schemastopinstanceresult"></a>
<a id="schema_StopInstanceResult"></a>
<a id="tocSstopinstanceresult"></a>
<a id="tocsstopinstanceresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_StopInstanceRequest">StopInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopinstancerequest"></a>
<a id="schema_StopInstanceRequest"></a>
<a id="tocSstopinstancerequest"></a>
<a id="tocsstopinstancerequest"></a>

```json
{
  "instanceName": {},
  "force": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceName|object|true|none|none|
|force|object|false|none|none|

<h2 id="tocS_StopRelationalDatabaseResult">StopRelationalDatabaseResult</h2>
<!-- backwards compatibility -->
<a id="schemastoprelationaldatabaseresult"></a>
<a id="schema_StopRelationalDatabaseResult"></a>
<a id="tocSstoprelationaldatabaseresult"></a>
<a id="tocsstoprelationaldatabaseresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_StopRelationalDatabaseRequest">StopRelationalDatabaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoprelationaldatabaserequest"></a>
<a id="schema_StopRelationalDatabaseRequest"></a>
<a id="tocSstoprelationaldatabaserequest"></a>
<a id="tocsstoprelationaldatabaserequest"></a>

```json
{
  "relationalDatabaseName": {},
  "relationalDatabaseSnapshotName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseName|object|true|none|none|
|relationalDatabaseSnapshotName|object|false|none|none|

<h2 id="tocS_TagResourceResult">TagResourceResult</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresult"></a>
<a id="schema_TagResourceResult"></a>
<a id="tocStagresourceresult"></a>
<a id="tocstagresourceresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "resourceName": {},
  "resourceArn": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|object|true|none|none|
|resourceArn|object|false|none|none|
|tags|object|true|none|none|

<h2 id="tocS_TestAlarmResult">TestAlarmResult</h2>
<!-- backwards compatibility -->
<a id="schematestalarmresult"></a>
<a id="schema_TestAlarmResult"></a>
<a id="tocStestalarmresult"></a>
<a id="tocstestalarmresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_TestAlarmRequest">TestAlarmRequest</h2>
<!-- backwards compatibility -->
<a id="schematestalarmrequest"></a>
<a id="schema_TestAlarmRequest"></a>
<a id="tocStestalarmrequest"></a>
<a id="tocstestalarmrequest"></a>

```json
{
  "alarmName": {},
  "state": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alarmName|object|true|none|none|
|state|object|true|none|none|

<h2 id="tocS_UnpeerVpcResult">UnpeerVpcResult</h2>
<!-- backwards compatibility -->
<a id="schemaunpeervpcresult"></a>
<a id="schema_UnpeerVpcResult"></a>
<a id="tocSunpeervpcresult"></a>
<a id="tocsunpeervpcresult"></a>

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|object|false|none|none|

<h2 id="tocS_UnpeerVpcRequest">UnpeerVpcRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunpeervpcrequest"></a>
<a id="schema_UnpeerVpcRequest"></a>
<a id="tocSunpeervpcrequest"></a>
<a id="tocsunpeervpcrequest"></a>

```json
{}
```

<h2 id="tocS_UntagResourceResult">UntagResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresult"></a>
<a id="schema_UntagResourceResult"></a>
<a id="tocSuntagresourceresult"></a>
<a id="tocsuntagresourceresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "resourceName": {},
  "resourceArn": {},
  "tagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|object|true|none|none|
|resourceArn|object|false|none|none|
|tagKeys|object|true|none|none|

<h2 id="tocS_UpdateBucketResult">UpdateBucketResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebucketresult"></a>
<a id="schema_UpdateBucketResult"></a>
<a id="tocSupdatebucketresult"></a>
<a id="tocsupdatebucketresult"></a>

```json
{
  "bucket": {
    "resourceType": {},
    "accessRules": {
      "getObject": {},
      "allowPublicOverrides": {}
    },
    "arn": {},
    "bundleId": {},
    "createdAt": {},
    "url": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "name": {},
    "supportCode": {},
    "tags": {},
    "objectVersioning": {},
    "ableToUpdateBundle": {},
    "readonlyAccessAccounts": {},
    "resourcesReceivingAccess": {},
    "state": {
      "code": {},
      "message": {}
    },
    "accessLogConfig": {
      "enabled": {},
      "destination": {},
      "prefix": {}
    }
  },
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|false|none|none|
|operations|object|false|none|none|

<h2 id="tocS_UpdateBucketRequest">UpdateBucketRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebucketrequest"></a>
<a id="schema_UpdateBucketRequest"></a>
<a id="tocSupdatebucketrequest"></a>
<a id="tocsupdatebucketrequest"></a>

```json
{
  "bucketName": {},
  "accessRules": {
    "getObject": {},
    "allowPublicOverrides": {}
  },
  "versioning": {},
  "readonlyAccessAccounts": {},
  "accessLogConfig": {
    "enabled": {},
    "destination": {},
    "prefix": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|
|accessRules|object|false|none|none|
|versioning|object|false|none|none|
|readonlyAccessAccounts|object|false|none|none|
|accessLogConfig|object|false|none|none|

<h2 id="tocS_UpdateBucketBundleResult">UpdateBucketBundleResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebucketbundleresult"></a>
<a id="schema_UpdateBucketBundleResult"></a>
<a id="tocSupdatebucketbundleresult"></a>
<a id="tocsupdatebucketbundleresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_UpdateBucketBundleRequest">UpdateBucketBundleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebucketbundlerequest"></a>
<a id="schema_UpdateBucketBundleRequest"></a>
<a id="tocSupdatebucketbundlerequest"></a>
<a id="tocsupdatebucketbundlerequest"></a>

```json
{
  "bucketName": {},
  "bundleId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|
|bundleId|object|true|none|none|

<h2 id="tocS_UpdateContainerServiceResult">UpdateContainerServiceResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontainerserviceresult"></a>
<a id="schema_UpdateContainerServiceResult"></a>
<a id="tocSupdatecontainerserviceresult"></a>
<a id="tocsupdatecontainerserviceresult"></a>

```json
{
  "containerService": {
    "containerServiceName": {},
    "arn": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "power": {},
    "powerId": {},
    "state": {},
    "stateDetail": {
      "code": {},
      "message": {}
    },
    "scale": {},
    "currentDeployment": {
      "version": {},
      "state": {},
      "containers": {
        "property1": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        },
        "property2": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        }
      },
      "publicEndpoint": {
        "containerName": {},
        "containerPort": {},
        "healthCheck": {
          "healthyThreshold": {},
          "unhealthyThreshold": {},
          "timeoutSeconds": {},
          "intervalSeconds": {},
          "path": {},
          "successCodes": {}
        }
      },
      "createdAt": {}
    },
    "nextDeployment": {
      "version": {},
      "state": {},
      "containers": {
        "property1": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        },
        "property2": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        }
      },
      "publicEndpoint": {
        "containerName": {},
        "containerPort": {},
        "healthCheck": {
          "healthyThreshold": {},
          "unhealthyThreshold": {},
          "timeoutSeconds": {},
          "intervalSeconds": {},
          "path": {},
          "successCodes": {}
        }
      },
      "createdAt": {}
    },
    "isDisabled": {},
    "principalArn": {},
    "privateDomainName": {},
    "publicDomainNames": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "url": {},
    "privateRegistryAccess": {
      "ecrImagePullerRole": {
        "isActive": {},
        "principalArn": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerService|object|false|none|none|

<h2 id="tocS_UpdateContainerServiceRequest">UpdateContainerServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontainerservicerequest"></a>
<a id="schema_UpdateContainerServiceRequest"></a>
<a id="tocSupdatecontainerservicerequest"></a>
<a id="tocsupdatecontainerservicerequest"></a>

```json
{
  "serviceName": {},
  "power": {},
  "scale": {},
  "isDisabled": {},
  "publicDomainNames": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "privateRegistryAccess": {
    "ecrImagePullerRole": {
      "isActive": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|object|true|none|none|
|power|object|false|none|none|
|scale|object|false|none|none|
|isDisabled|object|false|none|none|
|publicDomainNames|object|false|none|none|
|privateRegistryAccess|object|false|none|none|

<h2 id="tocS_UpdateDistributionResult">UpdateDistributionResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedistributionresult"></a>
<a id="schema_UpdateDistributionResult"></a>
<a id="tocSupdatedistributionresult"></a>
<a id="tocsupdatedistributionresult"></a>

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|object|false|none|none|

<h2 id="tocS_UpdateDistributionRequest">UpdateDistributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedistributionrequest"></a>
<a id="schema_UpdateDistributionRequest"></a>
<a id="tocSupdatedistributionrequest"></a>
<a id="tocsupdatedistributionrequest"></a>

```json
{
  "distributionName": {},
  "origin": {
    "name": {},
    "regionName": {},
    "protocolPolicy": {}
  },
  "defaultCacheBehavior": {
    "behavior": {}
  },
  "cacheBehaviorSettings": {
    "defaultTTL": {},
    "minimumTTL": {},
    "maximumTTL": {},
    "allowedHTTPMethods": {},
    "cachedHTTPMethods": {},
    "forwardedCookies": {
      "option": {},
      "cookiesAllowList": {}
    },
    "forwardedHeaders": {
      "option": {},
      "headersAllowList": {}
    },
    "forwardedQueryStrings": {
      "option": {},
      "queryStringsAllowList": {}
    }
  },
  "cacheBehaviors": {},
  "isEnabled": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distributionName|object|true|none|none|
|origin|object|false|none|none|
|defaultCacheBehavior|object|false|none|none|
|cacheBehaviorSettings|object|false|none|none|
|cacheBehaviors|object|false|none|none|
|isEnabled|object|false|none|none|

<h2 id="tocS_UpdateDistributionBundleResult">UpdateDistributionBundleResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedistributionbundleresult"></a>
<a id="schema_UpdateDistributionBundleResult"></a>
<a id="tocSupdatedistributionbundleresult"></a>
<a id="tocsupdatedistributionbundleresult"></a>

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|object|false|none|none|

<h2 id="tocS_UpdateDistributionBundleRequest">UpdateDistributionBundleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedistributionbundlerequest"></a>
<a id="schema_UpdateDistributionBundleRequest"></a>
<a id="tocSupdatedistributionbundlerequest"></a>
<a id="tocsupdatedistributionbundlerequest"></a>

```json
{
  "distributionName": {},
  "bundleId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distributionName|object|false|none|none|
|bundleId|object|false|none|none|

<h2 id="tocS_UpdateDomainEntryResult">UpdateDomainEntryResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomainentryresult"></a>
<a id="schema_UpdateDomainEntryResult"></a>
<a id="tocSupdatedomainentryresult"></a>
<a id="tocsupdatedomainentryresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_UpdateDomainEntryRequest">UpdateDomainEntryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomainentryrequest"></a>
<a id="schema_UpdateDomainEntryRequest"></a>
<a id="tocSupdatedomainentryrequest"></a>
<a id="tocsupdatedomainentryrequest"></a>

```json
{
  "domainName": {},
  "domainEntry": {
    "id": {},
    "name": {},
    "target": {},
    "isAlias": {},
    "type": {},
    "options": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|true|none|none|
|domainEntry|object|true|none|none|

<h2 id="tocS_UpdateInstanceMetadataOptionsResult">UpdateInstanceMetadataOptionsResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinstancemetadataoptionsresult"></a>
<a id="schema_UpdateInstanceMetadataOptionsResult"></a>
<a id="tocSupdateinstancemetadataoptionsresult"></a>
<a id="tocsupdateinstancemetadataoptionsresult"></a>

```json
{
  "operation": {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|object|false|none|none|

<h2 id="tocS_UpdateInstanceMetadataOptionsRequest">UpdateInstanceMetadataOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinstancemetadataoptionsrequest"></a>
<a id="schema_UpdateInstanceMetadataOptionsRequest"></a>
<a id="tocSupdateinstancemetadataoptionsrequest"></a>
<a id="tocsupdateinstancemetadataoptionsrequest"></a>

```json
{
  "instanceName": {},
  "httpTokens": {},
  "httpEndpoint": {},
  "httpPutResponseHopLimit": {},
  "httpProtocolIpv6": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceName|object|true|none|none|
|httpTokens|object|false|none|none|
|httpEndpoint|object|false|none|none|
|httpPutResponseHopLimit|object|false|none|none|
|httpProtocolIpv6|object|false|none|none|

<h2 id="tocS_UpdateLoadBalancerAttributeResult">UpdateLoadBalancerAttributeResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloadbalancerattributeresult"></a>
<a id="schema_UpdateLoadBalancerAttributeResult"></a>
<a id="tocSupdateloadbalancerattributeresult"></a>
<a id="tocsupdateloadbalancerattributeresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_UpdateLoadBalancerAttributeRequest">UpdateLoadBalancerAttributeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloadbalancerattributerequest"></a>
<a id="schema_UpdateLoadBalancerAttributeRequest"></a>
<a id="tocSupdateloadbalancerattributerequest"></a>
<a id="tocsupdateloadbalancerattributerequest"></a>

```json
{
  "loadBalancerName": {},
  "attributeName": {},
  "attributeValue": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loadBalancerName|object|true|none|none|
|attributeName|object|true|none|none|
|attributeValue|object|true|none|none|

<h2 id="tocS_UpdateRelationalDatabaseResult">UpdateRelationalDatabaseResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterelationaldatabaseresult"></a>
<a id="schema_UpdateRelationalDatabaseResult"></a>
<a id="tocSupdaterelationaldatabaseresult"></a>
<a id="tocsupdaterelationaldatabaseresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_UpdateRelationalDatabaseRequest">UpdateRelationalDatabaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterelationaldatabaserequest"></a>
<a id="schema_UpdateRelationalDatabaseRequest"></a>
<a id="tocSupdaterelationaldatabaserequest"></a>
<a id="tocsupdaterelationaldatabaserequest"></a>

```json
{
  "relationalDatabaseName": {},
  "masterUserPassword": {},
  "rotateMasterUserPassword": {},
  "preferredBackupWindow": {},
  "preferredMaintenanceWindow": {},
  "enableBackupRetention": {},
  "disableBackupRetention": {},
  "publiclyAccessible": {},
  "applyImmediately": {},
  "caCertificateIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseName|object|true|none|none|
|masterUserPassword|object|false|none|none|
|rotateMasterUserPassword|object|false|none|none|
|preferredBackupWindow|object|false|none|none|
|preferredMaintenanceWindow|object|false|none|none|
|enableBackupRetention|object|false|none|none|
|disableBackupRetention|object|false|none|none|
|publiclyAccessible|object|false|none|none|
|applyImmediately|object|false|none|none|
|caCertificateIdentifier|object|false|none|none|

<h2 id="tocS_UpdateRelationalDatabaseParametersResult">UpdateRelationalDatabaseParametersResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterelationaldatabaseparametersresult"></a>
<a id="schema_UpdateRelationalDatabaseParametersResult"></a>
<a id="tocSupdaterelationaldatabaseparametersresult"></a>
<a id="tocsupdaterelationaldatabaseparametersresult"></a>

```json
{
  "operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|false|none|none|

<h2 id="tocS_UpdateRelationalDatabaseParametersRequest">UpdateRelationalDatabaseParametersRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterelationaldatabaseparametersrequest"></a>
<a id="schema_UpdateRelationalDatabaseParametersRequest"></a>
<a id="tocSupdaterelationaldatabaseparametersrequest"></a>
<a id="tocsupdaterelationaldatabaseparametersrequest"></a>

```json
{
  "relationalDatabaseName": {},
  "parameters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseName|object|true|none|none|
|parameters|object|true|none|none|

<h2 id="tocS_AccessDirection">AccessDirection</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdirection"></a>
<a id="schema_AccessDirection"></a>
<a id="tocSaccessdirection"></a>
<a id="tocsaccessdirection"></a>

```json
"inbound"
```

<h2 id="tocS_IAMAccessKeyId">IAMAccessKeyId</h2>
<!-- backwards compatibility -->
<a id="schemaiamaccesskeyid"></a>
<a id="schema_IAMAccessKeyId"></a>
<a id="tocSiamaccesskeyid"></a>
<a id="tocsiamaccesskeyid"></a>

```json
"password"
```

<h2 id="tocS_NonEmptyString">NonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystring"></a>
<a id="schema_NonEmptyString"></a>
<a id="tocSnonemptystring"></a>
<a id="tocsnonemptystring"></a>

```json
"string"
```

<h2 id="tocS_StatusType">StatusType</h2>
<!-- backwards compatibility -->
<a id="schemastatustype"></a>
<a id="schema_StatusType"></a>
<a id="tocSstatustype"></a>
<a id="tocsstatustype"></a>

```json
"Active"
```

<h2 id="tocS_IsoDate">IsoDate</h2>
<!-- backwards compatibility -->
<a id="schemaisodate"></a>
<a id="schema_IsoDate"></a>
<a id="tocSisodate"></a>
<a id="tocsisodate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_AccessKeyLastUsed">AccessKeyLastUsed</h2>
<!-- backwards compatibility -->
<a id="schemaaccesskeylastused"></a>
<a id="schema_AccessKeyLastUsed"></a>
<a id="tocSaccesskeylastused"></a>
<a id="tocsaccesskeylastused"></a>

```json
{
  "lastUsedDate": {},
  "region": {},
  "serviceName": {}
}
```

<p>Describes the last time an access key was used.</p> <note> <p>This object does not include data in the response of a <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUsedDate|object|false|none|none|
|region|object|false|none|none|
|serviceName|object|false|none|none|

<h2 id="tocS_AccessKey">AccessKey</h2>
<!-- backwards compatibility -->
<a id="schemaaccesskey"></a>
<a id="schema_AccessKey"></a>
<a id="tocSaccesskey"></a>
<a id="tocsaccesskey"></a>

```json
{
  "accessKeyId": {},
  "secretAccessKey": {},
  "status": {},
  "createdAt": {},
  "lastUsed": {
    "lastUsedDate": {},
    "region": {},
    "serviceName": {}
  }
}
```

<p>Describes an access key for an Amazon Lightsail bucket.</p> <p>Access keys grant full programmatic access to the specified bucket and its objects. You can have a maximum of two access keys per bucket. Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action to create an access key for a specific bucket. For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> <important> <p>The <code>secretAccessKey</code> value is returned only in response to the <code>CreateBucketAccessKey</code> action. You can get a secret access key only when you first create an access key; you cannot get the secret access key later. If you lose the secret access key, you must create a new access key.</p> </important>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessKeyId|object|false|none|none|
|secretAccessKey|object|false|none|none|
|status|object|false|none|none|
|createdAt|object|false|none|none|
|lastUsed|object|false|none|none|

<h2 id="tocS_string">string</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_string"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_AccessKeyList">AccessKeyList</h2>
<!-- backwards compatibility -->
<a id="schemaaccesskeylist"></a>
<a id="schema_AccessKeyList"></a>
<a id="tocSaccesskeylist"></a>
<a id="tocsaccesskeylist"></a>

```json
[
  {
    "accessKeyId": {},
    "secretAccessKey": {},
    "status": {},
    "createdAt": {},
    "lastUsed": {
      "lastUsedDate": {},
      "region": {},
      "serviceName": {}
    }
  }
]
```

<h2 id="tocS_ResourceReceivingAccess">ResourceReceivingAccess</h2>
<!-- backwards compatibility -->
<a id="schemaresourcereceivingaccess"></a>
<a id="schema_ResourceReceivingAccess"></a>
<a id="tocSresourcereceivingaccess"></a>
<a id="tocsresourcereceivingaccess"></a>

```json
{
  "name": {},
  "resourceType": {}
}
```

Describes an Amazon Lightsail instance that has access to a Lightsail bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|resourceType|object|false|none|none|

<h2 id="tocS_AccessReceiverList">AccessReceiverList</h2>
<!-- backwards compatibility -->
<a id="schemaaccessreceiverlist"></a>
<a id="schema_AccessReceiverList"></a>
<a id="tocSaccessreceiverlist"></a>
<a id="tocsaccessreceiverlist"></a>

```json
[
  {
    "name": {},
    "resourceType": {}
  }
]
```

<h2 id="tocS_AccessType">AccessType</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstype"></a>
<a id="schema_AccessType"></a>
<a id="tocSaccesstype"></a>
<a id="tocsaccesstype"></a>

```json
"public"
```

<h2 id="tocS_boolean">boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_AccessRules">AccessRules</h2>
<!-- backwards compatibility -->
<a id="schemaaccessrules"></a>
<a id="schema_AccessRules"></a>
<a id="tocSaccessrules"></a>
<a id="tocsaccessrules"></a>

```json
{
  "getObject": {},
  "allowPublicOverrides": {}
}
```

<p>Describes the anonymous access permissions for an Amazon Lightsail bucket and its objects.</p> <p>For more information about bucket access permissions, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-understanding-bucket-permissions">Understanding bucket permissions in Amazon Lightsail</a> in the </p> <p> <i>Amazon Lightsail Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|getObject|object|false|none|none|
|allowPublicOverrides|object|false|none|none|

<h2 id="tocS_AccountLevelBpaSyncStatus">AccountLevelBpaSyncStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlevelbpasyncstatus"></a>
<a id="schema_AccountLevelBpaSyncStatus"></a>
<a id="tocSaccountlevelbpasyncstatus"></a>
<a id="tocsaccountlevelbpasyncstatus"></a>

```json
"InSync"
```

<h2 id="tocS_BPAStatusMessage">BPAStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemabpastatusmessage"></a>
<a id="schema_BPAStatusMessage"></a>
<a id="tocSbpastatusmessage"></a>
<a id="tocsbpastatusmessage"></a>

```json
"DEFAULTED_FOR_SLR_MISSING"
```

<h2 id="tocS_AccountLevelBpaSync">AccountLevelBpaSync</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlevelbpasync"></a>
<a id="schema_AccountLevelBpaSync"></a>
<a id="tocSaccountlevelbpasync"></a>
<a id="tocsaccountlevelbpasync"></a>

```json
{
  "status": {},
  "lastSyncedAt": {},
  "message": {},
  "bpaImpactsLightsail": {}
}
```

<p>Describes the synchronization status of the Amazon Simple Storage Service (Amazon S3) account-level block public access (BPA) feature for your Lightsail buckets.</p> <p>The account-level BPA feature of Amazon S3 provides centralized controls to limit public access to all Amazon S3 buckets in an account. BPA can make all Amazon S3 buckets in an Amazon Web Services account private regardless of the individual bucket and object permissions that are configured. Lightsail buckets take into account the Amazon S3 account-level BPA configuration when allowing or denying public access. To do this, Lightsail periodically fetches the account-level BPA configuration from Amazon S3. When the account-level BPA status is <code>InSync</code>, the Amazon S3 account-level BPA configuration is synchronized and it applies to your Lightsail buckets. For more information about Amazon Simple Storage Service account-level BPA and how it affects Lightsail buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-block-public-access-for-buckets">Block public access for buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|lastSyncedAt|object|false|none|none|
|message|object|false|none|none|
|bpaImpactsLightsail|object|false|none|none|

<h2 id="tocS_TimeOfDay">TimeOfDay</h2>
<!-- backwards compatibility -->
<a id="schematimeofday"></a>
<a id="schema_TimeOfDay"></a>
<a id="tocStimeofday"></a>
<a id="tocstimeofday"></a>

```json
"string"
```

<h2 id="tocS_AddOn">AddOn</h2>
<!-- backwards compatibility -->
<a id="schemaaddon"></a>
<a id="schema_AddOn"></a>
<a id="tocSaddon"></a>
<a id="tocsaddon"></a>

```json
{
  "name": {},
  "status": {},
  "snapshotTimeOfDay": {},
  "nextSnapshotTimeOfDay": {},
  "threshold": {},
  "duration": {}
}
```

Describes an add-on that is enabled for an Amazon Lightsail resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|status|object|false|none|none|
|snapshotTimeOfDay|object|false|none|none|
|nextSnapshotTimeOfDay|object|false|none|none|
|threshold|object|false|none|none|
|duration|object|false|none|none|

<h2 id="tocS_AddOnList">AddOnList</h2>
<!-- backwards compatibility -->
<a id="schemaaddonlist"></a>
<a id="schema_AddOnList"></a>
<a id="tocSaddonlist"></a>
<a id="tocsaddonlist"></a>

```json
[
  {
    "name": {},
    "status": {},
    "snapshotTimeOfDay": {},
    "nextSnapshotTimeOfDay": {},
    "threshold": {},
    "duration": {}
  }
]
```

<h2 id="tocS_AddOnType">AddOnType</h2>
<!-- backwards compatibility -->
<a id="schemaaddontype"></a>
<a id="schema_AddOnType"></a>
<a id="tocSaddontype"></a>
<a id="tocsaddontype"></a>

```json
"AutoSnapshot"
```

<h2 id="tocS_AutoSnapshotAddOnRequest">AutoSnapshotAddOnRequest</h2>
<!-- backwards compatibility -->
<a id="schemaautosnapshotaddonrequest"></a>
<a id="schema_AutoSnapshotAddOnRequest"></a>
<a id="tocSautosnapshotaddonrequest"></a>
<a id="tocsautosnapshotaddonrequest"></a>

```json
{
  "snapshotTimeOfDay": {}
}
```

<p>Describes a request to enable or modify the automatic snapshot add-on for an Amazon Lightsail instance or disk.</p> <p>When you modify the automatic snapshot time for a resource, it is typically effective immediately except under the following conditions:</p> <ul> <li> <p>If an automatic snapshot has been created for the current day, and you change the snapshot time to a later time of day, then the new snapshot time will be effective the following day. This ensures that two snapshots are not created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to an earlier time of day, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to a time that is within 30 minutes from your current time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> <li> <p>If an automatic snapshot is scheduled to be created within 30 minutes from your current time and you change the snapshot time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snapshotTimeOfDay|object|false|none|none|

<h2 id="tocS_StopInstanceOnIdleRequest">StopInstanceOnIdleRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopinstanceonidlerequest"></a>
<a id="schema_StopInstanceOnIdleRequest"></a>
<a id="tocSstopinstanceonidlerequest"></a>
<a id="tocsstopinstanceonidlerequest"></a>

```json
{
  "threshold": {},
  "duration": {}
}
```

<p>Describes a request to create or edit the <code>StopInstanceOnIdle</code> add-on.</p> <important> <p>This add-on only applies to Lightsail for Research resources.</p> </important>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|threshold|object|false|none|none|
|duration|object|false|none|none|

<h2 id="tocS_AddOnRequest">AddOnRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddonrequest"></a>
<a id="schema_AddOnRequest"></a>
<a id="tocSaddonrequest"></a>
<a id="tocsaddonrequest"></a>

```json
{
  "addOnType": {},
  "autoSnapshotAddOnRequest": {
    "snapshotTimeOfDay": {}
  },
  "stopInstanceOnIdleRequest": {
    "threshold": {},
    "duration": {}
  }
}
```

<p>Describes a request to enable, modify, or disable an add-on for an Amazon Lightsail resource.</p> <note> <p>An additional cost may be associated with enabling add-ons. For more information, see the <a href="https://aws.amazon.com/lightsail/pricing/">Lightsail pricing page</a>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addOnType|object|true|none|none|
|autoSnapshotAddOnRequest|object|false|none|none|
|stopInstanceOnIdleRequest|object|false|none|none|

<h2 id="tocS_AddOnRequestList">AddOnRequestList</h2>
<!-- backwards compatibility -->
<a id="schemaaddonrequestlist"></a>
<a id="schema_AddOnRequestList"></a>
<a id="tocSaddonrequestlist"></a>
<a id="tocsaddonrequestlist"></a>

```json
[
  {
    "addOnType": {},
    "autoSnapshotAddOnRequest": {
      "snapshotTimeOfDay": {}
    },
    "stopInstanceOnIdleRequest": {
      "threshold": {},
      "duration": {}
    }
  }
]
```

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

```json
"string"
```

<h2 id="tocS_ResourceLocation">ResourceLocation</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelocation"></a>
<a id="schema_ResourceLocation"></a>
<a id="tocSresourcelocation"></a>
<a id="tocsresourcelocation"></a>

```json
{
  "availabilityZone": {},
  "regionName": {}
}
```

Describes the resource location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availabilityZone|object|false|none|none|
|regionName|object|false|none|none|

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"ContainerService"
```

<h2 id="tocS_MonitoredResourceInfo">MonitoredResourceInfo</h2>
<!-- backwards compatibility -->
<a id="schemamonitoredresourceinfo"></a>
<a id="schema_MonitoredResourceInfo"></a>
<a id="tocSmonitoredresourceinfo"></a>
<a id="tocsmonitoredresourceinfo"></a>

```json
{
  "arn": {},
  "name": {},
  "resourceType": {}
}
```

<p>Describes resource being monitored by an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|resourceType|object|false|none|none|

<h2 id="tocS_ComparisonOperator">ComparisonOperator</h2>
<!-- backwards compatibility -->
<a id="schemacomparisonoperator"></a>
<a id="schema_ComparisonOperator"></a>
<a id="tocScomparisonoperator"></a>
<a id="tocscomparisonoperator"></a>

```json
"GreaterThanOrEqualToThreshold"
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

<h2 id="tocS_MetricPeriod">MetricPeriod</h2>
<!-- backwards compatibility -->
<a id="schemametricperiod"></a>
<a id="schema_MetricPeriod"></a>
<a id="tocSmetricperiod"></a>
<a id="tocsmetricperiod"></a>

```json
60
```

<h2 id="tocS_double">double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_TreatMissingData">TreatMissingData</h2>
<!-- backwards compatibility -->
<a id="schematreatmissingdata"></a>
<a id="schema_TreatMissingData"></a>
<a id="tocStreatmissingdata"></a>
<a id="tocstreatmissingdata"></a>

```json
"breaching"
```

<h2 id="tocS_MetricStatistic">MetricStatistic</h2>
<!-- backwards compatibility -->
<a id="schemametricstatistic"></a>
<a id="schema_MetricStatistic"></a>
<a id="tocSmetricstatistic"></a>
<a id="tocsmetricstatistic"></a>

```json
"Minimum"
```

<h2 id="tocS_MetricName">MetricName</h2>
<!-- backwards compatibility -->
<a id="schemametricname"></a>
<a id="schema_MetricName"></a>
<a id="tocSmetricname"></a>
<a id="tocsmetricname"></a>

```json
"CPUUtilization"
```

<h2 id="tocS_AlarmState">AlarmState</h2>
<!-- backwards compatibility -->
<a id="schemaalarmstate"></a>
<a id="schema_AlarmState"></a>
<a id="tocSalarmstate"></a>
<a id="tocsalarmstate"></a>

```json
"OK"
```

<h2 id="tocS_MetricUnit">MetricUnit</h2>
<!-- backwards compatibility -->
<a id="schemametricunit"></a>
<a id="schema_MetricUnit"></a>
<a id="tocSmetricunit"></a>
<a id="tocsmetricunit"></a>

```json
"Seconds"
```

<h2 id="tocS_ContactProtocolsList">ContactProtocolsList</h2>
<!-- backwards compatibility -->
<a id="schemacontactprotocolslist"></a>
<a id="schema_ContactProtocolsList"></a>
<a id="tocScontactprotocolslist"></a>
<a id="tocscontactprotocolslist"></a>

```json
[
  "Email"
]
```

<h2 id="tocS_NotificationTriggerList">NotificationTriggerList</h2>
<!-- backwards compatibility -->
<a id="schemanotificationtriggerlist"></a>
<a id="schema_NotificationTriggerList"></a>
<a id="tocSnotificationtriggerlist"></a>
<a id="tocsnotificationtriggerlist"></a>

```json
[
  "OK"
]
```

<h2 id="tocS_Alarm">Alarm</h2>
<!-- backwards compatibility -->
<a id="schemaalarm"></a>
<a id="schema_Alarm"></a>
<a id="tocSalarm"></a>
<a id="tocsalarm"></a>

```json
{
  "name": {},
  "arn": {},
  "createdAt": {},
  "location": {
    "availabilityZone": {},
    "regionName": {}
  },
  "resourceType": {},
  "supportCode": {},
  "monitoredResourceInfo": {
    "arn": {},
    "name": {},
    "resourceType": {}
  },
  "comparisonOperator": {},
  "evaluationPeriods": {},
  "period": {},
  "threshold": {},
  "datapointsToAlarm": {},
  "treatMissingData": {},
  "statistic": {},
  "metricName": {},
  "state": {},
  "unit": {},
  "contactProtocols": {},
  "notificationTriggers": {},
  "notificationEnabled": {}
}
```

<p>Describes an alarm.</p> <p>An alarm is a way to monitor your Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|createdAt|object|false|none|none|
|location|object|false|none|none|
|resourceType|object|false|none|none|
|supportCode|object|false|none|none|
|monitoredResourceInfo|object|false|none|none|
|comparisonOperator|object|false|none|none|
|evaluationPeriods|object|false|none|none|
|period|object|false|none|none|
|threshold|object|false|none|none|
|datapointsToAlarm|object|false|none|none|
|treatMissingData|object|false|none|none|
|statistic|object|false|none|none|
|metricName|object|false|none|none|
|state|object|false|none|none|
|unit|object|false|none|none|
|contactProtocols|object|false|none|none|
|notificationTriggers|object|false|none|none|
|notificationEnabled|object|false|none|none|

<h2 id="tocS_AlarmsList">AlarmsList</h2>
<!-- backwards compatibility -->
<a id="schemaalarmslist"></a>
<a id="schema_AlarmsList"></a>
<a id="tocSalarmslist"></a>
<a id="tocsalarmslist"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "supportCode": {},
    "monitoredResourceInfo": {
      "arn": {},
      "name": {},
      "resourceType": {}
    },
    "comparisonOperator": {},
    "evaluationPeriods": {},
    "period": {},
    "threshold": {},
    "datapointsToAlarm": {},
    "treatMissingData": {},
    "statistic": {},
    "metricName": {},
    "state": {},
    "unit": {},
    "contactProtocols": {},
    "notificationTriggers": {},
    "notificationEnabled": {}
  }
]
```

<h2 id="tocS_OperationList">OperationList</h2>
<!-- backwards compatibility -->
<a id="schemaoperationlist"></a>
<a id="schema_OperationList"></a>
<a id="tocSoperationlist"></a>
<a id="tocsoperationlist"></a>

```json
[
  {
    "id": {},
    "resourceName": {},
    "resourceType": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "isTerminal": {},
    "operationDetails": {},
    "operationType": {},
    "status": {},
    "statusChangedAt": {},
    "errorCode": {},
    "errorDetails": {}
  }
]
```

<h2 id="tocS_AppCategory">AppCategory</h2>
<!-- backwards compatibility -->
<a id="schemaappcategory"></a>
<a id="schema_AppCategory"></a>
<a id="tocSappcategory"></a>
<a id="tocsappcategory"></a>

```json
"LfR"
```

<h2 id="tocS_AppCategoryList">AppCategoryList</h2>
<!-- backwards compatibility -->
<a id="schemaappcategorylist"></a>
<a id="schema_AppCategoryList"></a>
<a id="tocSappcategorylist"></a>
<a id="tocsappcategorylist"></a>

```json
[
  "LfR"
]
```

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
{
  "id": {},
  "resourceName": {},
  "resourceType": {},
  "createdAt": {},
  "location": {
    "availabilityZone": {},
    "regionName": {}
  },
  "isTerminal": {},
  "operationDetails": {},
  "operationType": {},
  "status": {},
  "statusChangedAt": {},
  "errorCode": {},
  "errorDetails": {}
}
```

Describes the API operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|resourceName|object|false|none|none|
|resourceType|object|false|none|none|
|createdAt|object|false|none|none|
|location|object|false|none|none|
|isTerminal|object|false|none|none|
|operationDetails|object|false|none|none|
|operationType|object|false|none|none|
|status|object|false|none|none|
|statusChangedAt|object|false|none|none|
|errorCode|object|false|none|none|
|errorDetails|object|false|none|none|

<h2 id="tocS_ResourceNameList">ResourceNameList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenamelist"></a>
<a id="schema_ResourceNameList"></a>
<a id="tocSresourcenamelist"></a>
<a id="tocsresourcenamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AttachedDisk">AttachedDisk</h2>
<!-- backwards compatibility -->
<a id="schemaattacheddisk"></a>
<a id="schema_AttachedDisk"></a>
<a id="tocSattacheddisk"></a>
<a id="tocsattacheddisk"></a>

```json
{
  "path": {},
  "sizeInGb": {}
}
```

Describes a block storage disk that is attached to an instance, and is included in an automatic snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|object|false|none|none|
|sizeInGb|object|false|none|none|

<h2 id="tocS_AttachedDiskList">AttachedDiskList</h2>
<!-- backwards compatibility -->
<a id="schemaattacheddisklist"></a>
<a id="schema_AttachedDiskList"></a>
<a id="tocSattacheddisklist"></a>
<a id="tocsattacheddisklist"></a>

```json
[
  {
    "path": {},
    "sizeInGb": {}
  }
]
```

<h2 id="tocS_DiskMapList">DiskMapList</h2>
<!-- backwards compatibility -->
<a id="schemadiskmaplist"></a>
<a id="schema_DiskMapList"></a>
<a id="tocSdiskmaplist"></a>
<a id="tocsdiskmaplist"></a>

```json
[
  {
    "originalDiskPath": {},
    "newDiskName": {}
  }
]
```

<h2 id="tocS_AttachedDiskMap">AttachedDiskMap</h2>
<!-- backwards compatibility -->
<a id="schemaattacheddiskmap"></a>
<a id="schema_AttachedDiskMap"></a>
<a id="tocSattacheddiskmap"></a>
<a id="tocsattacheddiskmap"></a>

```json
{
  "property1": [
    {
      "originalDiskPath": {},
      "newDiskName": {}
    }
  ],
  "property2": [
    {
      "originalDiskPath": {},
      "newDiskName": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DiskMapList](#schemadiskmaplist)|false|none|none|

<h2 id="tocS_AutoMountStatus">AutoMountStatus</h2>
<!-- backwards compatibility -->
<a id="schemaautomountstatus"></a>
<a id="schema_AutoMountStatus"></a>
<a id="tocSautomountstatus"></a>
<a id="tocsautomountstatus"></a>

```json
"Failed"
```

<h2 id="tocS_AutoSnapshotDate">AutoSnapshotDate</h2>
<!-- backwards compatibility -->
<a id="schemaautosnapshotdate"></a>
<a id="schema_AutoSnapshotDate"></a>
<a id="tocSautosnapshotdate"></a>
<a id="tocsautosnapshotdate"></a>

```json
"string"
```

<h2 id="tocS_AutoSnapshotStatus">AutoSnapshotStatus</h2>
<!-- backwards compatibility -->
<a id="schemaautosnapshotstatus"></a>
<a id="schema_AutoSnapshotStatus"></a>
<a id="tocSautosnapshotstatus"></a>
<a id="tocsautosnapshotstatus"></a>

```json
"Success"
```

<h2 id="tocS_AutoSnapshotDetails">AutoSnapshotDetails</h2>
<!-- backwards compatibility -->
<a id="schemaautosnapshotdetails"></a>
<a id="schema_AutoSnapshotDetails"></a>
<a id="tocSautosnapshotdetails"></a>
<a id="tocsautosnapshotdetails"></a>

```json
{
  "date": {},
  "createdAt": {},
  "status": {},
  "fromAttachedDisks": {}
}
```

Describes an automatic snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|object|false|none|none|
|createdAt|object|false|none|none|
|status|object|false|none|none|
|fromAttachedDisks|object|false|none|none|

<h2 id="tocS_AutoSnapshotDetailsList">AutoSnapshotDetailsList</h2>
<!-- backwards compatibility -->
<a id="schemaautosnapshotdetailslist"></a>
<a id="schema_AutoSnapshotDetailsList"></a>
<a id="tocSautosnapshotdetailslist"></a>
<a id="tocsautosnapshotdetailslist"></a>

```json
[
  {
    "date": {},
    "createdAt": {},
    "status": {},
    "fromAttachedDisks": {}
  }
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
  "zoneName": {},
  "state": {}
}
```

Describes an Availability Zone. This is returned only as part of a <code>GetRegions</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|zoneName|object|false|none|none|
|state|object|false|none|none|

<h2 id="tocS_AvailabilityZoneList">AvailabilityZoneList</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzonelist"></a>
<a id="schema_AvailabilityZoneList"></a>
<a id="tocSavailabilityzonelist"></a>
<a id="tocsavailabilityzonelist"></a>

```json
[
  {
    "zoneName": {},
    "state": {}
  }
]
```

<h2 id="tocS_Base64">Base64</h2>
<!-- backwards compatibility -->
<a id="schemabase64"></a>
<a id="schema_Base64"></a>
<a id="tocSbase64"></a>
<a id="tocsbase64"></a>

```json
"string"
```

<h2 id="tocS_BehaviorEnum">BehaviorEnum</h2>
<!-- backwards compatibility -->
<a id="schemabehaviorenum"></a>
<a id="schema_BehaviorEnum"></a>
<a id="tocSbehaviorenum"></a>
<a id="tocsbehaviorenum"></a>

```json
"dont-cache"
```

<h2 id="tocS_BlueprintType">BlueprintType</h2>
<!-- backwards compatibility -->
<a id="schemablueprinttype"></a>
<a id="schema_BlueprintType"></a>
<a id="tocSblueprinttype"></a>
<a id="tocsblueprinttype"></a>

```json
"os"
```

<h2 id="tocS_InstancePlatform">InstancePlatform</h2>
<!-- backwards compatibility -->
<a id="schemainstanceplatform"></a>
<a id="schema_InstancePlatform"></a>
<a id="tocSinstanceplatform"></a>
<a id="tocsinstanceplatform"></a>

```json
"LINUX_UNIX"
```

<h2 id="tocS_Blueprint">Blueprint</h2>
<!-- backwards compatibility -->
<a id="schemablueprint"></a>
<a id="schema_Blueprint"></a>
<a id="tocSblueprint"></a>
<a id="tocsblueprint"></a>

```json
{
  "blueprintId": {},
  "name": {},
  "group": {},
  "type": {},
  "description": {},
  "isActive": {},
  "minPower": {},
  "version": {},
  "versionCode": {},
  "productUrl": {},
  "licenseUrl": {},
  "platform": {},
  "appCategory": {}
}
```

Describes a blueprint (a virtual private server image).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blueprintId|object|false|none|none|
|name|object|false|none|none|
|group|object|false|none|none|
|type|object|false|none|none|
|description|object|false|none|none|
|isActive|object|false|none|none|
|minPower|object|false|none|none|
|version|object|false|none|none|
|versionCode|object|false|none|none|
|productUrl|object|false|none|none|
|licenseUrl|object|false|none|none|
|platform|object|false|none|none|
|appCategory|object|false|none|none|

<h2 id="tocS_BlueprintList">BlueprintList</h2>
<!-- backwards compatibility -->
<a id="schemablueprintlist"></a>
<a id="schema_BlueprintList"></a>
<a id="tocSblueprintlist"></a>
<a id="tocsblueprintlist"></a>

```json
[
  {
    "blueprintId": {},
    "name": {},
    "group": {},
    "type": {},
    "description": {},
    "isActive": {},
    "minPower": {},
    "version": {},
    "versionCode": {},
    "productUrl": {},
    "licenseUrl": {},
    "platform": {},
    "appCategory": {}
  }
]
```

<h2 id="tocS_BucketName">BucketName</h2>
<!-- backwards compatibility -->
<a id="schemabucketname"></a>
<a id="schema_BucketName"></a>
<a id="tocSbucketname"></a>
<a id="tocsbucketname"></a>

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
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_PartnerIdList">PartnerIdList</h2>
<!-- backwards compatibility -->
<a id="schemapartneridlist"></a>
<a id="schema_PartnerIdList"></a>
<a id="tocSpartneridlist"></a>
<a id="tocspartneridlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BucketState">BucketState</h2>
<!-- backwards compatibility -->
<a id="schemabucketstate"></a>
<a id="schema_BucketState"></a>
<a id="tocSbucketstate"></a>
<a id="tocsbucketstate"></a>

```json
{
  "code": {},
  "message": {}
}
```

Describes the state of an Amazon Lightsail bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_BucketAccessLogConfig">BucketAccessLogConfig</h2>
<!-- backwards compatibility -->
<a id="schemabucketaccesslogconfig"></a>
<a id="schema_BucketAccessLogConfig"></a>
<a id="tocSbucketaccesslogconfig"></a>
<a id="tocsbucketaccesslogconfig"></a>

```json
{
  "enabled": {},
  "destination": {},
  "prefix": {}
}
```

<p>Describes the access log configuration for a bucket in the Amazon Lightsail object storage service.</p> <p>For more information about bucket access logs, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-bucket-access-logs">Logging bucket requests using access logging in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|object|true|none|none|
|destination|object|false|none|none|
|prefix|object|false|none|none|

<h2 id="tocS_Bucket">Bucket</h2>
<!-- backwards compatibility -->
<a id="schemabucket"></a>
<a id="schema_Bucket"></a>
<a id="tocSbucket"></a>
<a id="tocsbucket"></a>

```json
{
  "resourceType": {},
  "accessRules": {
    "getObject": {},
    "allowPublicOverrides": {}
  },
  "arn": {},
  "bundleId": {},
  "createdAt": {},
  "url": {},
  "location": {
    "availabilityZone": {},
    "regionName": {}
  },
  "name": {},
  "supportCode": {},
  "tags": {},
  "objectVersioning": {},
  "ableToUpdateBundle": {},
  "readonlyAccessAccounts": {},
  "resourcesReceivingAccess": {},
  "state": {
    "code": {},
    "message": {}
  },
  "accessLogConfig": {
    "enabled": {},
    "destination": {},
    "prefix": {}
  }
}
```

Describes an Amazon Lightsail bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|false|none|none|
|accessRules|object|false|none|none|
|arn|object|false|none|none|
|bundleId|object|false|none|none|
|createdAt|object|false|none|none|
|url|object|false|none|none|
|location|object|false|none|none|
|name|object|false|none|none|
|supportCode|object|false|none|none|
|tags|object|false|none|none|
|objectVersioning|object|false|none|none|
|ableToUpdateBundle|object|false|none|none|
|readonlyAccessAccounts|object|false|none|none|
|resourcesReceivingAccess|object|false|none|none|
|state|object|false|none|none|
|accessLogConfig|object|false|none|none|

<h2 id="tocS_BucketAccessLogPrefix">BucketAccessLogPrefix</h2>
<!-- backwards compatibility -->
<a id="schemabucketaccesslogprefix"></a>
<a id="schema_BucketAccessLogPrefix"></a>
<a id="tocSbucketaccesslogprefix"></a>
<a id="tocsbucketaccesslogprefix"></a>

```json
"string"
```

<h2 id="tocS_float">float</h2>
<!-- backwards compatibility -->
<a id="schemafloat"></a>
<a id="schema_float"></a>
<a id="tocSfloat"></a>
<a id="tocsfloat"></a>

```json
0
```

<h2 id="tocS_BucketBundle">BucketBundle</h2>
<!-- backwards compatibility -->
<a id="schemabucketbundle"></a>
<a id="schema_BucketBundle"></a>
<a id="tocSbucketbundle"></a>
<a id="tocsbucketbundle"></a>

```json
{
  "bundleId": {},
  "name": {},
  "price": {},
  "storagePerMonthInGb": {},
  "transferPerMonthInGb": {},
  "isActive": {}
}
```

<p>Describes the specifications of a bundle that can be applied to an Amazon Lightsail bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundleId|object|false|none|none|
|name|object|false|none|none|
|price|object|false|none|none|
|storagePerMonthInGb|object|false|none|none|
|transferPerMonthInGb|object|false|none|none|
|isActive|object|false|none|none|

<h2 id="tocS_BucketBundleList">BucketBundleList</h2>
<!-- backwards compatibility -->
<a id="schemabucketbundlelist"></a>
<a id="schema_BucketBundleList"></a>
<a id="tocSbucketbundlelist"></a>
<a id="tocsbucketbundlelist"></a>

```json
[
  {
    "bundleId": {},
    "name": {},
    "price": {},
    "storagePerMonthInGb": {},
    "transferPerMonthInGb": {},
    "isActive": {}
  }
]
```

<h2 id="tocS_BucketList">BucketList</h2>
<!-- backwards compatibility -->
<a id="schemabucketlist"></a>
<a id="schema_BucketList"></a>
<a id="tocSbucketlist"></a>
<a id="tocsbucketlist"></a>

```json
[
  {
    "resourceType": {},
    "accessRules": {
      "getObject": {},
      "allowPublicOverrides": {}
    },
    "arn": {},
    "bundleId": {},
    "createdAt": {},
    "url": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "name": {},
    "supportCode": {},
    "tags": {},
    "objectVersioning": {},
    "ableToUpdateBundle": {},
    "readonlyAccessAccounts": {},
    "resourcesReceivingAccess": {},
    "state": {
      "code": {},
      "message": {}
    },
    "accessLogConfig": {
      "enabled": {},
      "destination": {},
      "prefix": {}
    }
  }
]
```

<h2 id="tocS_BucketMetricName">BucketMetricName</h2>
<!-- backwards compatibility -->
<a id="schemabucketmetricname"></a>
<a id="schema_BucketMetricName"></a>
<a id="tocSbucketmetricname"></a>
<a id="tocsbucketmetricname"></a>

```json
"BucketSizeBytes"
```

<h2 id="tocS_InstancePlatformList">InstancePlatformList</h2>
<!-- backwards compatibility -->
<a id="schemainstanceplatformlist"></a>
<a id="schema_InstancePlatformList"></a>
<a id="tocSinstanceplatformlist"></a>
<a id="tocsinstanceplatformlist"></a>

```json
[
  "LINUX_UNIX"
]
```

<h2 id="tocS_Bundle">Bundle</h2>
<!-- backwards compatibility -->
<a id="schemabundle"></a>
<a id="schema_Bundle"></a>
<a id="tocSbundle"></a>
<a id="tocsbundle"></a>

```json
{
  "price": {},
  "cpuCount": {},
  "diskSizeInGb": {},
  "bundleId": {},
  "instanceType": {},
  "isActive": {},
  "name": {},
  "power": {},
  "ramSizeInGb": {},
  "transferPerMonthInGb": {},
  "supportedPlatforms": {},
  "supportedAppCategories": {}
}
```

Describes a bundle, which is a set of specs describing your virtual private server (or <i>instance</i>).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|price|object|false|none|none|
|cpuCount|object|false|none|none|
|diskSizeInGb|object|false|none|none|
|bundleId|object|false|none|none|
|instanceType|object|false|none|none|
|isActive|object|false|none|none|
|name|object|false|none|none|
|power|object|false|none|none|
|ramSizeInGb|object|false|none|none|
|transferPerMonthInGb|object|false|none|none|
|supportedPlatforms|object|false|none|none|
|supportedAppCategories|object|false|none|none|

<h2 id="tocS_BundleList">BundleList</h2>
<!-- backwards compatibility -->
<a id="schemabundlelist"></a>
<a id="schema_BundleList"></a>
<a id="tocSbundlelist"></a>
<a id="tocsbundlelist"></a>

```json
[
  {
    "price": {},
    "cpuCount": {},
    "diskSizeInGb": {},
    "bundleId": {},
    "instanceType": {},
    "isActive": {},
    "name": {},
    "power": {},
    "ramSizeInGb": {},
    "transferPerMonthInGb": {},
    "supportedPlatforms": {},
    "supportedAppCategories": {}
  }
]
```

<h2 id="tocS_CacheBehavior">CacheBehavior</h2>
<!-- backwards compatibility -->
<a id="schemacachebehavior"></a>
<a id="schema_CacheBehavior"></a>
<a id="tocScachebehavior"></a>
<a id="tocscachebehavior"></a>

```json
{
  "behavior": {}
}
```

Describes the default cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|behavior|object|false|none|none|

<h2 id="tocS_CacheBehaviorPerPath">CacheBehaviorPerPath</h2>
<!-- backwards compatibility -->
<a id="schemacachebehaviorperpath"></a>
<a id="schema_CacheBehaviorPerPath"></a>
<a id="tocScachebehaviorperpath"></a>
<a id="tocscachebehaviorperpath"></a>

```json
{
  "path": {},
  "behavior": {}
}
```

<p>Describes the per-path cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A per-path cache behavior is used to override, or add an exception to, the default cache behavior of a distribution. For example, if the <code>cacheBehavior</code> is set to <code>cache</code>, then a per-path cache behavior can be used to specify a directory, file, or file type that your distribution will cache. Alternately, if the distribution's <code>cacheBehavior</code> is <code>dont-cache</code>, then a per-path cache behavior can be used to specify a directory, file, or file type that your distribution will not cache.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|object|false|none|none|
|behavior|object|false|none|none|

<h2 id="tocS_CacheBehaviorList">CacheBehaviorList</h2>
<!-- backwards compatibility -->
<a id="schemacachebehaviorlist"></a>
<a id="schema_CacheBehaviorList"></a>
<a id="tocScachebehaviorlist"></a>
<a id="tocscachebehaviorlist"></a>

```json
[
  {
    "path": {},
    "behavior": {}
  }
]
```

<h2 id="tocS_long">long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_CookieObject">CookieObject</h2>
<!-- backwards compatibility -->
<a id="schemacookieobject"></a>
<a id="schema_CookieObject"></a>
<a id="tocScookieobject"></a>
<a id="tocscookieobject"></a>

```json
{
  "option": {},
  "cookiesAllowList": {}
}
```

<p>Describes whether an Amazon Lightsail content delivery network (CDN) distribution forwards cookies to the origin and, if so, which ones.</p> <p>For the cookies that you specify, your distribution caches separate versions of the specified content based on the cookie values in viewer requests.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|option|object|false|none|none|
|cookiesAllowList|object|false|none|none|

<h2 id="tocS_HeaderObject">HeaderObject</h2>
<!-- backwards compatibility -->
<a id="schemaheaderobject"></a>
<a id="schema_HeaderObject"></a>
<a id="tocSheaderobject"></a>
<a id="tocsheaderobject"></a>

```json
{
  "option": {},
  "headersAllowList": {}
}
```

<p>Describes the request headers that a Lightsail distribution bases caching on.</p> <p>For the headers that you specify, your distribution caches separate versions of the specified content based on the header values in viewer requests. For example, suppose viewer requests for <code>logo.jpg</code> contain a custom <code>product</code> header that has a value of either <code>acme</code> or <code>apex</code>, and you configure your distribution to cache your content based on values in the <code>product</code> header. Your distribution forwards the <code>product</code> header to the origin and caches the response from the origin once for each header value. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|option|object|false|none|none|
|headersAllowList|object|false|none|none|

<h2 id="tocS_QueryStringObject">QueryStringObject</h2>
<!-- backwards compatibility -->
<a id="schemaquerystringobject"></a>
<a id="schema_QueryStringObject"></a>
<a id="tocSquerystringobject"></a>
<a id="tocsquerystringobject"></a>

```json
{
  "option": {},
  "queryStringsAllowList": {}
}
```

<p>Describes the query string parameters that an Amazon Lightsail content delivery network (CDN) distribution to bases caching on.</p> <p>For the query strings that you specify, your distribution caches separate versions of the specified content based on the query string values in viewer requests.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|option|object|false|none|none|
|queryStringsAllowList|object|false|none|none|

<h2 id="tocS_CacheSettings">CacheSettings</h2>
<!-- backwards compatibility -->
<a id="schemacachesettings"></a>
<a id="schema_CacheSettings"></a>
<a id="tocScachesettings"></a>
<a id="tocscachesettings"></a>

```json
{
  "defaultTTL": {},
  "minimumTTL": {},
  "maximumTTL": {},
  "allowedHTTPMethods": {},
  "cachedHTTPMethods": {},
  "forwardedCookies": {
    "option": {},
    "cookiesAllowList": {}
  },
  "forwardedHeaders": {
    "option": {},
    "headersAllowList": {}
  },
  "forwardedQueryStrings": {
    "option": {},
    "queryStringsAllowList": {}
  }
}
```

<p>Describes the cache settings of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>These settings apply only to your distribution's <code>cacheBehaviors</code> (including the <code>defaultCacheBehavior</code>) that have a <code>behavior</code> of <code>cache</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultTTL|object|false|none|none|
|minimumTTL|object|false|none|none|
|maximumTTL|object|false|none|none|
|allowedHTTPMethods|object|false|none|none|
|cachedHTTPMethods|object|false|none|none|
|forwardedCookies|object|false|none|none|
|forwardedHeaders|object|false|none|none|
|forwardedQueryStrings|object|false|none|none|

<h2 id="tocS_CertificateName">CertificateName</h2>
<!-- backwards compatibility -->
<a id="schemacertificatename"></a>
<a id="schema_CertificateName"></a>
<a id="tocScertificatename"></a>
<a id="tocscertificatename"></a>

```json
"string"
```

<h2 id="tocS_DomainName">DomainName</h2>
<!-- backwards compatibility -->
<a id="schemadomainname"></a>
<a id="schema_DomainName"></a>
<a id="tocSdomainname"></a>
<a id="tocsdomainname"></a>

```json
"string"
```

<h2 id="tocS_CertificateStatus">CertificateStatus</h2>
<!-- backwards compatibility -->
<a id="schemacertificatestatus"></a>
<a id="schema_CertificateStatus"></a>
<a id="tocScertificatestatus"></a>
<a id="tocscertificatestatus"></a>

```json
"PENDING_VALIDATION"
```

<h2 id="tocS_SerialNumber">SerialNumber</h2>
<!-- backwards compatibility -->
<a id="schemaserialnumber"></a>
<a id="schema_SerialNumber"></a>
<a id="tocSserialnumber"></a>
<a id="tocsserialnumber"></a>

```json
"string"
```

<h2 id="tocS_SubjectAlternativeNameList">SubjectAlternativeNameList</h2>
<!-- backwards compatibility -->
<a id="schemasubjectalternativenamelist"></a>
<a id="schema_SubjectAlternativeNameList"></a>
<a id="tocSsubjectalternativenamelist"></a>
<a id="tocssubjectalternativenamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DomainValidationRecordList">DomainValidationRecordList</h2>
<!-- backwards compatibility -->
<a id="schemadomainvalidationrecordlist"></a>
<a id="schema_DomainValidationRecordList"></a>
<a id="tocSdomainvalidationrecordlist"></a>
<a id="tocsdomainvalidationrecordlist"></a>

```json
[
  {
    "domainName": {},
    "resourceRecord": {
      "name": {},
      "type": {},
      "value": {}
    },
    "dnsRecordCreationState": {
      "code": {},
      "message": {}
    },
    "validationStatus": {}
  }
]
```

<h2 id="tocS_RequestFailureReason">RequestFailureReason</h2>
<!-- backwards compatibility -->
<a id="schemarequestfailurereason"></a>
<a id="schema_RequestFailureReason"></a>
<a id="tocSrequestfailurereason"></a>
<a id="tocsrequestfailurereason"></a>

```json
"string"
```

<h2 id="tocS_InUseResourceCount">InUseResourceCount</h2>
<!-- backwards compatibility -->
<a id="schemainuseresourcecount"></a>
<a id="schema_InUseResourceCount"></a>
<a id="tocSinuseresourcecount"></a>
<a id="tocsinuseresourcecount"></a>

```json
0
```

<h2 id="tocS_KeyAlgorithm">KeyAlgorithm</h2>
<!-- backwards compatibility -->
<a id="schemakeyalgorithm"></a>
<a id="schema_KeyAlgorithm"></a>
<a id="tocSkeyalgorithm"></a>
<a id="tocskeyalgorithm"></a>

```json
"string"
```

<h2 id="tocS_IssuerCA">IssuerCA</h2>
<!-- backwards compatibility -->
<a id="schemaissuerca"></a>
<a id="schema_IssuerCA"></a>
<a id="tocSissuerca"></a>
<a id="tocsissuerca"></a>

```json
"string"
```

<h2 id="tocS_EligibleToRenew">EligibleToRenew</h2>
<!-- backwards compatibility -->
<a id="schemaeligibletorenew"></a>
<a id="schema_EligibleToRenew"></a>
<a id="tocSeligibletorenew"></a>
<a id="tocseligibletorenew"></a>

```json
"string"
```

<h2 id="tocS_RenewalSummary">RenewalSummary</h2>
<!-- backwards compatibility -->
<a id="schemarenewalsummary"></a>
<a id="schema_RenewalSummary"></a>
<a id="tocSrenewalsummary"></a>
<a id="tocsrenewalsummary"></a>

```json
{
  "domainValidationRecords": {},
  "renewalStatus": {},
  "renewalStatusReason": {},
  "updatedAt": {}
}
```

Describes the status of a SSL/TLS certificate renewal managed by Amazon Lightsail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainValidationRecords|object|false|none|none|
|renewalStatus|object|false|none|none|
|renewalStatusReason|object|false|none|none|
|updatedAt|object|false|none|none|

<h2 id="tocS_RevocationReason">RevocationReason</h2>
<!-- backwards compatibility -->
<a id="schemarevocationreason"></a>
<a id="schema_RevocationReason"></a>
<a id="tocSrevocationreason"></a>
<a id="tocsrevocationreason"></a>

```json
"string"
```

<h2 id="tocS_Certificate">Certificate</h2>
<!-- backwards compatibility -->
<a id="schemacertificate"></a>
<a id="schema_Certificate"></a>
<a id="tocScertificate"></a>
<a id="tocscertificate"></a>

```json
{
  "arn": {},
  "name": {},
  "domainName": {},
  "status": {},
  "serialNumber": {},
  "subjectAlternativeNames": {},
  "domainValidationRecords": {},
  "requestFailureReason": {},
  "inUseResourceCount": {},
  "keyAlgorithm": {},
  "createdAt": {},
  "issuedAt": {},
  "issuerCA": {},
  "notBefore": {},
  "notAfter": {},
  "eligibleToRenew": {},
  "renewalSummary": {
    "domainValidationRecords": {},
    "renewalStatus": {},
    "renewalStatusReason": {},
    "updatedAt": {}
  },
  "revokedAt": {},
  "revocationReason": {},
  "tags": {},
  "supportCode": {}
}
```

<p>Describes the full details of an Amazon Lightsail SSL/TLS certificate.</p> <note> <p>To get a summary of a certificate, use the <code>GetCertificates</code> action and ommit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|domainName|object|false|none|none|
|status|object|false|none|none|
|serialNumber|object|false|none|none|
|subjectAlternativeNames|object|false|none|none|
|domainValidationRecords|object|false|none|none|
|requestFailureReason|object|false|none|none|
|inUseResourceCount|object|false|none|none|
|keyAlgorithm|object|false|none|none|
|createdAt|object|false|none|none|
|issuedAt|object|false|none|none|
|issuerCA|object|false|none|none|
|notBefore|object|false|none|none|
|notAfter|object|false|none|none|
|eligibleToRenew|object|false|none|none|
|renewalSummary|object|false|none|none|
|revokedAt|object|false|none|none|
|revocationReason|object|false|none|none|
|tags|object|false|none|none|
|supportCode|object|false|none|none|

<h2 id="tocS_CertificateDomainValidationStatus">CertificateDomainValidationStatus</h2>
<!-- backwards compatibility -->
<a id="schemacertificatedomainvalidationstatus"></a>
<a id="schema_CertificateDomainValidationStatus"></a>
<a id="tocScertificatedomainvalidationstatus"></a>
<a id="tocscertificatedomainvalidationstatus"></a>

```json
"PENDING_VALIDATION"
```

<h2 id="tocS_CertificateStatusList">CertificateStatusList</h2>
<!-- backwards compatibility -->
<a id="schemacertificatestatuslist"></a>
<a id="schema_CertificateStatusList"></a>
<a id="tocScertificatestatuslist"></a>
<a id="tocscertificatestatuslist"></a>

```json
[
  "PENDING_VALIDATION"
]
```

<h2 id="tocS_CertificateSummary">CertificateSummary</h2>
<!-- backwards compatibility -->
<a id="schemacertificatesummary"></a>
<a id="schema_CertificateSummary"></a>
<a id="tocScertificatesummary"></a>
<a id="tocscertificatesummary"></a>

```json
{
  "certificateArn": {},
  "certificateName": {},
  "domainName": {},
  "certificateDetail": {
    "arn": {},
    "name": {},
    "domainName": {},
    "status": {},
    "serialNumber": {},
    "subjectAlternativeNames": {},
    "domainValidationRecords": {},
    "requestFailureReason": {},
    "inUseResourceCount": {},
    "keyAlgorithm": {},
    "createdAt": {},
    "issuedAt": {},
    "issuerCA": {},
    "notBefore": {},
    "notAfter": {},
    "eligibleToRenew": {},
    "renewalSummary": {
      "domainValidationRecords": {},
      "renewalStatus": {},
      "renewalStatusReason": {},
      "updatedAt": {}
    },
    "revokedAt": {},
    "revocationReason": {},
    "tags": {},
    "supportCode": {}
  },
  "tags": {}
}
```

Describes an Amazon Lightsail SSL/TLS certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateArn|object|false|none|none|
|certificateName|object|false|none|none|
|domainName|object|false|none|none|
|certificateDetail|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CertificateSummaryList">CertificateSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemacertificatesummarylist"></a>
<a id="schema_CertificateSummaryList"></a>
<a id="tocScertificatesummarylist"></a>
<a id="tocscertificatesummarylist"></a>

```json
[
  {
    "certificateArn": {},
    "certificateName": {},
    "domainName": {},
    "certificateDetail": {
      "arn": {},
      "name": {},
      "domainName": {},
      "status": {},
      "serialNumber": {},
      "subjectAlternativeNames": {},
      "domainValidationRecords": {},
      "requestFailureReason": {},
      "inUseResourceCount": {},
      "keyAlgorithm": {},
      "createdAt": {},
      "issuedAt": {},
      "issuerCA": {},
      "notBefore": {},
      "notAfter": {},
      "eligibleToRenew": {},
      "renewalSummary": {
        "domainValidationRecords": {},
        "renewalStatus": {},
        "renewalStatusReason": {},
        "updatedAt": {}
      },
      "revokedAt": {},
      "revocationReason": {},
      "tags": {},
      "supportCode": {}
    },
    "tags": {}
  }
]
```

<h2 id="tocS_PortInfo">PortInfo</h2>
<!-- backwards compatibility -->
<a id="schemaportinfo"></a>
<a id="schema_PortInfo"></a>
<a id="tocSportinfo"></a>
<a id="tocsportinfo"></a>

```json
{
  "fromPort": {},
  "toPort": {},
  "protocol": {},
  "cidrs": {},
  "ipv6Cidrs": {},
  "cidrListAliases": {}
}
```

Describes ports to open on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromPort|object|false|none|none|
|toPort|object|false|none|none|
|protocol|object|false|none|none|
|cidrs|object|false|none|none|
|ipv6Cidrs|object|false|none|none|
|cidrListAliases|object|false|none|none|

<h2 id="tocS_RecordState">RecordState</h2>
<!-- backwards compatibility -->
<a id="schemarecordstate"></a>
<a id="schema_RecordState"></a>
<a id="tocSrecordstate"></a>
<a id="tocsrecordstate"></a>

```json
"Started"
```

<h2 id="tocS_CloudFormationStackRecordSourceInfoList">CloudFormationStackRecordSourceInfoList</h2>
<!-- backwards compatibility -->
<a id="schemacloudformationstackrecordsourceinfolist"></a>
<a id="schema_CloudFormationStackRecordSourceInfoList"></a>
<a id="tocScloudformationstackrecordsourceinfolist"></a>
<a id="tocscloudformationstackrecordsourceinfolist"></a>

```json
[
  {
    "resourceType": {},
    "name": {},
    "arn": {}
  }
]
```

<h2 id="tocS_DestinationInfo">DestinationInfo</h2>
<!-- backwards compatibility -->
<a id="schemadestinationinfo"></a>
<a id="schema_DestinationInfo"></a>
<a id="tocSdestinationinfo"></a>
<a id="tocsdestinationinfo"></a>

```json
{
  "id": {},
  "service": {}
}
```

Describes the destination of a record.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|service|object|false|none|none|

<h2 id="tocS_CloudFormationStackRecord">CloudFormationStackRecord</h2>
<!-- backwards compatibility -->
<a id="schemacloudformationstackrecord"></a>
<a id="schema_CloudFormationStackRecord"></a>
<a id="tocScloudformationstackrecord"></a>
<a id="tocscloudformationstackrecord"></a>

```json
{
  "name": {},
  "arn": {},
  "createdAt": {},
  "location": {
    "availabilityZone": {},
    "regionName": {}
  },
  "resourceType": {},
  "state": {},
  "sourceInfo": {},
  "destinationInfo": {
    "id": {},
    "service": {}
  }
}
```

<p>Describes a CloudFormation stack record created as a result of the <code>create cloud formation stack</code> action.</p> <p>A CloudFormation stack record provides information about the AWS CloudFormation stack used to create a new Amazon Elastic Compute Cloud instance from an exported Lightsail instance snapshot.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|createdAt|object|false|none|none|
|location|object|false|none|none|
|resourceType|object|false|none|none|
|state|object|false|none|none|
|sourceInfo|object|false|none|none|
|destinationInfo|object|false|none|none|

<h2 id="tocS_CloudFormationStackRecordList">CloudFormationStackRecordList</h2>
<!-- backwards compatibility -->
<a id="schemacloudformationstackrecordlist"></a>
<a id="schema_CloudFormationStackRecordList"></a>
<a id="tocScloudformationstackrecordlist"></a>
<a id="tocscloudformationstackrecordlist"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "state": {},
    "sourceInfo": {},
    "destinationInfo": {
      "id": {},
      "service": {}
    }
  }
]
```

<h2 id="tocS_CloudFormationStackRecordSourceType">CloudFormationStackRecordSourceType</h2>
<!-- backwards compatibility -->
<a id="schemacloudformationstackrecordsourcetype"></a>
<a id="schema_CloudFormationStackRecordSourceType"></a>
<a id="tocScloudformationstackrecordsourcetype"></a>
<a id="tocscloudformationstackrecordsourcetype"></a>

```json
"ExportSnapshotRecord"
```

<h2 id="tocS_CloudFormationStackRecordSourceInfo">CloudFormationStackRecordSourceInfo</h2>
<!-- backwards compatibility -->
<a id="schemacloudformationstackrecordsourceinfo"></a>
<a id="schema_CloudFormationStackRecordSourceInfo"></a>
<a id="tocScloudformationstackrecordsourceinfo"></a>
<a id="tocscloudformationstackrecordsourceinfo"></a>

```json
{
  "resourceType": {},
  "name": {},
  "arn": {}
}
```

Describes the source of a CloudFormation stack record (i.e., the export snapshot record).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|false|none|none|
|name|object|false|none|none|
|arn|object|false|none|none|

<h2 id="tocS_ContactMethodStatus">ContactMethodStatus</h2>
<!-- backwards compatibility -->
<a id="schemacontactmethodstatus"></a>
<a id="schema_ContactMethodStatus"></a>
<a id="tocScontactmethodstatus"></a>
<a id="tocscontactmethodstatus"></a>

```json
"PendingVerification"
```

<h2 id="tocS_ContactProtocol">ContactProtocol</h2>
<!-- backwards compatibility -->
<a id="schemacontactprotocol"></a>
<a id="schema_ContactProtocol"></a>
<a id="tocScontactprotocol"></a>
<a id="tocscontactprotocol"></a>

```json
"Email"
```

<h2 id="tocS_ContactMethod">ContactMethod</h2>
<!-- backwards compatibility -->
<a id="schemacontactmethod"></a>
<a id="schema_ContactMethod"></a>
<a id="tocScontactmethod"></a>
<a id="tocscontactmethod"></a>

```json
{
  "contactEndpoint": {},
  "status": {},
  "protocol": {},
  "name": {},
  "arn": {},
  "createdAt": {},
  "location": {
    "availabilityZone": {},
    "regionName": {}
  },
  "resourceType": {},
  "supportCode": {}
}
```

<p>Describes a contact method.</p> <p>A contact method is a way to send you notifications. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactEndpoint|object|false|none|none|
|status|object|false|none|none|
|protocol|object|false|none|none|
|name|object|false|none|none|
|arn|object|false|none|none|
|createdAt|object|false|none|none|
|location|object|false|none|none|
|resourceType|object|false|none|none|
|supportCode|object|false|none|none|

<h2 id="tocS_ContactMethodVerificationProtocol">ContactMethodVerificationProtocol</h2>
<!-- backwards compatibility -->
<a id="schemacontactmethodverificationprotocol"></a>
<a id="schema_ContactMethodVerificationProtocol"></a>
<a id="tocScontactmethodverificationprotocol"></a>
<a id="tocscontactmethodverificationprotocol"></a>

```json
"Email"
```

<h2 id="tocS_ContactMethodsList">ContactMethodsList</h2>
<!-- backwards compatibility -->
<a id="schemacontactmethodslist"></a>
<a id="schema_ContactMethodsList"></a>
<a id="tocScontactmethodslist"></a>
<a id="tocscontactmethodslist"></a>

```json
[
  {
    "contactEndpoint": {},
    "status": {},
    "protocol": {},
    "name": {},
    "arn": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "supportCode": {}
  }
]
```

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

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

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

<h2 id="tocS_PortMap">PortMap</h2>
<!-- backwards compatibility -->
<a id="schemaportmap"></a>
<a id="schema_PortMap"></a>
<a id="tocSportmap"></a>
<a id="tocsportmap"></a>

```json
{
  "property1": "HTTP",
  "property2": "HTTP"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ContainerServiceProtocol](#schemacontainerserviceprotocol)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|**additionalProperties**|HTTP|
|**additionalProperties**|HTTPS|
|**additionalProperties**|TCP|
|**additionalProperties**|UDP|

<h2 id="tocS_Container">Container</h2>
<!-- backwards compatibility -->
<a id="schemacontainer"></a>
<a id="schema_Container"></a>
<a id="tocScontainer"></a>
<a id="tocscontainer"></a>

```json
{
  "image": {},
  "command": {},
  "environment": {
    "property1": "string",
    "property2": "string"
  },
  "ports": {
    "property1": "HTTP",
    "property2": "HTTP"
  }
}
```

Describes the settings of a container that will be launched, or that is launched, to an Amazon Lightsail container service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|object|false|none|none|
|command|object|false|none|none|
|environment|object|false|none|none|
|ports|object|false|none|none|

<h2 id="tocS_ContainerImage">ContainerImage</h2>
<!-- backwards compatibility -->
<a id="schemacontainerimage"></a>
<a id="schema_ContainerImage"></a>
<a id="tocScontainerimage"></a>
<a id="tocscontainerimage"></a>

```json
{
  "image": {},
  "digest": {},
  "createdAt": {}
}
```

Describes a container image that is registered to an Amazon Lightsail container service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|object|false|none|none|
|digest|object|false|none|none|
|createdAt|object|false|none|none|

<h2 id="tocS_ContainerImageList">ContainerImageList</h2>
<!-- backwards compatibility -->
<a id="schemacontainerimagelist"></a>
<a id="schema_ContainerImageList"></a>
<a id="tocScontainerimagelist"></a>
<a id="tocscontainerimagelist"></a>

```json
[
  {
    "image": {},
    "digest": {},
    "createdAt": {}
  }
]
```

<h2 id="tocS_ContainerLabel">ContainerLabel</h2>
<!-- backwards compatibility -->
<a id="schemacontainerlabel"></a>
<a id="schema_ContainerLabel"></a>
<a id="tocScontainerlabel"></a>
<a id="tocscontainerlabel"></a>

```json
"string"
```

<h2 id="tocS_ContainerMap">ContainerMap</h2>
<!-- backwards compatibility -->
<a id="schemacontainermap"></a>
<a id="schema_ContainerMap"></a>
<a id="tocScontainermap"></a>
<a id="tocscontainermap"></a>

```json
{
  "property1": {
    "image": {},
    "command": {},
    "environment": {
      "property1": "string",
      "property2": "string"
    },
    "ports": {
      "property1": "HTTP",
      "property2": "HTTP"
    }
  },
  "property2": {
    "image": {},
    "command": {},
    "environment": {
      "property1": "string",
      "property2": "string"
    },
    "ports": {
      "property1": "HTTP",
      "property2": "HTTP"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Container](#schemacontainer)|false|none|Describes the settings of a container that will be launched, or that is launched, to an Amazon Lightsail container service.|

<h2 id="tocS_ContainerName">ContainerName</h2>
<!-- backwards compatibility -->
<a id="schemacontainername"></a>
<a id="schema_ContainerName"></a>
<a id="tocScontainername"></a>
<a id="tocscontainername"></a>

```json
"string"
```

<h2 id="tocS_ContainerServiceName">ContainerServiceName</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicename"></a>
<a id="schema_ContainerServiceName"></a>
<a id="tocScontainerservicename"></a>
<a id="tocscontainerservicename"></a>

```json
"string"
```

<h2 id="tocS_ContainerServicePowerName">ContainerServicePowerName</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicepowername"></a>
<a id="schema_ContainerServicePowerName"></a>
<a id="tocScontainerservicepowername"></a>
<a id="tocscontainerservicepowername"></a>

```json
"nano"
```

<h2 id="tocS_ContainerServiceState">ContainerServiceState</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicestate"></a>
<a id="schema_ContainerServiceState"></a>
<a id="tocScontainerservicestate"></a>
<a id="tocscontainerservicestate"></a>

```json
"PENDING"
```

<h2 id="tocS_ContainerServiceStateDetail">ContainerServiceStateDetail</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicestatedetail"></a>
<a id="schema_ContainerServiceStateDetail"></a>
<a id="tocScontainerservicestatedetail"></a>
<a id="tocscontainerservicestatedetail"></a>

```json
{
  "code": {},
  "message": {}
}
```

Describes the current state of a container service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_ContainerServiceScale">ContainerServiceScale</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicescale"></a>
<a id="schema_ContainerServiceScale"></a>
<a id="tocScontainerservicescale"></a>
<a id="tocscontainerservicescale"></a>

```json
1
```

<h2 id="tocS_ContainerServiceDeployment">ContainerServiceDeployment</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicedeployment"></a>
<a id="schema_ContainerServiceDeployment"></a>
<a id="tocScontainerservicedeployment"></a>
<a id="tocscontainerservicedeployment"></a>

```json
{
  "version": {},
  "state": {},
  "containers": {
    "property1": {
      "image": {},
      "command": {},
      "environment": {
        "property1": "string",
        "property2": "string"
      },
      "ports": {
        "property1": "HTTP",
        "property2": "HTTP"
      }
    },
    "property2": {
      "image": {},
      "command": {},
      "environment": {
        "property1": "string",
        "property2": "string"
      },
      "ports": {
        "property1": "HTTP",
        "property2": "HTTP"
      }
    }
  },
  "publicEndpoint": {
    "containerName": {},
    "containerPort": {},
    "healthCheck": {
      "healthyThreshold": {},
      "unhealthyThreshold": {},
      "timeoutSeconds": {},
      "intervalSeconds": {},
      "path": {},
      "successCodes": {}
    }
  },
  "createdAt": {}
}
```

<p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|object|false|none|none|
|state|object|false|none|none|
|containers|object|false|none|none|
|publicEndpoint|object|false|none|none|
|createdAt|object|false|none|none|

<h2 id="tocS_ContainerServicePublicDomains">ContainerServicePublicDomains</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicepublicdomains"></a>
<a id="schema_ContainerServicePublicDomains"></a>
<a id="tocScontainerservicepublicdomains"></a>
<a id="tocscontainerservicepublicdomains"></a>

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
|**additionalProperties**|[ContainerServicePublicDomainsList](#schemacontainerservicepublicdomainslist)|false|none|none|

<h2 id="tocS_PrivateRegistryAccess">PrivateRegistryAccess</h2>
<!-- backwards compatibility -->
<a id="schemaprivateregistryaccess"></a>
<a id="schema_PrivateRegistryAccess"></a>
<a id="tocSprivateregistryaccess"></a>
<a id="tocsprivateregistryaccess"></a>

```json
{
  "ecrImagePullerRole": {
    "isActive": {},
    "principalArn": {}
  }
}
```

<p>Describes the configuration for an Amazon Lightsail container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ecrImagePullerRole|object|false|none|none|

<h2 id="tocS_ContainerService">ContainerService</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservice"></a>
<a id="schema_ContainerService"></a>
<a id="tocScontainerservice"></a>
<a id="tocscontainerservice"></a>

```json
{
  "containerServiceName": {},
  "arn": {},
  "createdAt": {},
  "location": {
    "availabilityZone": {},
    "regionName": {}
  },
  "resourceType": {},
  "tags": {},
  "power": {},
  "powerId": {},
  "state": {},
  "stateDetail": {
    "code": {},
    "message": {}
  },
  "scale": {},
  "currentDeployment": {
    "version": {},
    "state": {},
    "containers": {
      "property1": {
        "image": {},
        "command": {},
        "environment": {
          "property1": "string",
          "property2": "string"
        },
        "ports": {
          "property1": "HTTP",
          "property2": "HTTP"
        }
      },
      "property2": {
        "image": {},
        "command": {},
        "environment": {
          "property1": "string",
          "property2": "string"
        },
        "ports": {
          "property1": "HTTP",
          "property2": "HTTP"
        }
      }
    },
    "publicEndpoint": {
      "containerName": {},
      "containerPort": {},
      "healthCheck": {
        "healthyThreshold": {},
        "unhealthyThreshold": {},
        "timeoutSeconds": {},
        "intervalSeconds": {},
        "path": {},
        "successCodes": {}
      }
    },
    "createdAt": {}
  },
  "nextDeployment": {
    "version": {},
    "state": {},
    "containers": {
      "property1": {
        "image": {},
        "command": {},
        "environment": {
          "property1": "string",
          "property2": "string"
        },
        "ports": {
          "property1": "HTTP",
          "property2": "HTTP"
        }
      },
      "property2": {
        "image": {},
        "command": {},
        "environment": {
          "property1": "string",
          "property2": "string"
        },
        "ports": {
          "property1": "HTTP",
          "property2": "HTTP"
        }
      }
    },
    "publicEndpoint": {
      "containerName": {},
      "containerPort": {},
      "healthCheck": {
        "healthyThreshold": {},
        "unhealthyThreshold": {},
        "timeoutSeconds": {},
        "intervalSeconds": {},
        "path": {},
        "successCodes": {}
      }
    },
    "createdAt": {}
  },
  "isDisabled": {},
  "principalArn": {},
  "privateDomainName": {},
  "publicDomainNames": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "url": {},
  "privateRegistryAccess": {
    "ecrImagePullerRole": {
      "isActive": {},
      "principalArn": {}
    }
  }
}
```

Describes an Amazon Lightsail container service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerServiceName|object|false|none|none|
|arn|object|false|none|none|
|createdAt|object|false|none|none|
|location|object|false|none|none|
|resourceType|object|false|none|none|
|tags|object|false|none|none|
|power|object|false|none|none|
|powerId|object|false|none|none|
|state|object|false|none|none|
|stateDetail|object|false|none|none|
|scale|object|false|none|none|
|currentDeployment|object|false|none|none|
|nextDeployment|object|false|none|none|
|isDisabled|object|false|none|none|
|principalArn|object|false|none|none|
|privateDomainName|object|false|none|none|
|publicDomainNames|object|false|none|none|
|url|object|false|none|none|
|privateRegistryAccess|object|false|none|none|

<h2 id="tocS_ContainerServiceDeploymentState">ContainerServiceDeploymentState</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicedeploymentstate"></a>
<a id="schema_ContainerServiceDeploymentState"></a>
<a id="tocScontainerservicedeploymentstate"></a>
<a id="tocscontainerservicedeploymentstate"></a>

```json
"ACTIVATING"
```

<h2 id="tocS_ContainerServiceEndpoint">ContainerServiceEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemacontainerserviceendpoint"></a>
<a id="schema_ContainerServiceEndpoint"></a>
<a id="tocScontainerserviceendpoint"></a>
<a id="tocscontainerserviceendpoint"></a>

```json
{
  "containerName": {},
  "containerPort": {},
  "healthCheck": {
    "healthyThreshold": {},
    "unhealthyThreshold": {},
    "timeoutSeconds": {},
    "intervalSeconds": {},
    "path": {},
    "successCodes": {}
  }
}
```

Describes the public endpoint configuration of a deployment of an Amazon Lightsail container service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerName|object|false|none|none|
|containerPort|object|false|none|none|
|healthCheck|object|false|none|none|

<h2 id="tocS_ContainerServiceDeploymentList">ContainerServiceDeploymentList</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicedeploymentlist"></a>
<a id="schema_ContainerServiceDeploymentList"></a>
<a id="tocScontainerservicedeploymentlist"></a>
<a id="tocscontainerservicedeploymentlist"></a>

```json
[
  {
    "version": {},
    "state": {},
    "containers": {
      "property1": {
        "image": {},
        "command": {},
        "environment": {
          "property1": "string",
          "property2": "string"
        },
        "ports": {
          "property1": "HTTP",
          "property2": "HTTP"
        }
      },
      "property2": {
        "image": {},
        "command": {},
        "environment": {
          "property1": "string",
          "property2": "string"
        },
        "ports": {
          "property1": "HTTP",
          "property2": "HTTP"
        }
      }
    },
    "publicEndpoint": {
      "containerName": {},
      "containerPort": {},
      "healthCheck": {
        "healthyThreshold": {},
        "unhealthyThreshold": {},
        "timeoutSeconds": {},
        "intervalSeconds": {},
        "path": {},
        "successCodes": {}
      }
    },
    "createdAt": {}
  }
]
```

<h2 id="tocS_EndpointRequest">EndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemaendpointrequest"></a>
<a id="schema_EndpointRequest"></a>
<a id="tocSendpointrequest"></a>
<a id="tocsendpointrequest"></a>

```json
{
  "containerName": {},
  "containerPort": {},
  "healthCheck": {
    "healthyThreshold": {},
    "unhealthyThreshold": {},
    "timeoutSeconds": {},
    "intervalSeconds": {},
    "path": {},
    "successCodes": {}
  }
}
```

Describes the settings of a public endpoint for an Amazon Lightsail container service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerName|object|true|none|none|
|containerPort|object|true|none|none|
|healthCheck|object|false|none|none|

<h2 id="tocS_ContainerServiceDeploymentRequest">ContainerServiceDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicedeploymentrequest"></a>
<a id="schema_ContainerServiceDeploymentRequest"></a>
<a id="tocScontainerservicedeploymentrequest"></a>
<a id="tocscontainerservicedeploymentrequest"></a>

```json
{
  "containers": {
    "property1": {
      "image": {},
      "command": {},
      "environment": {
        "property1": "string",
        "property2": "string"
      },
      "ports": {
        "property1": "HTTP",
        "property2": "HTTP"
      }
    },
    "property2": {
      "image": {},
      "command": {},
      "environment": {
        "property1": "string",
        "property2": "string"
      },
      "ports": {
        "property1": "HTTP",
        "property2": "HTTP"
      }
    }
  },
  "publicEndpoint": {
    "containerName": {},
    "containerPort": {},
    "healthCheck": {
      "healthyThreshold": {},
      "unhealthyThreshold": {},
      "timeoutSeconds": {},
      "intervalSeconds": {},
      "path": {},
      "successCodes": {}
    }
  }
}
```

<p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containers|object|false|none|none|
|publicEndpoint|object|false|none|none|

<h2 id="tocS_ContainerServiceECRImagePullerRole">ContainerServiceECRImagePullerRole</h2>
<!-- backwards compatibility -->
<a id="schemacontainerserviceecrimagepullerrole"></a>
<a id="schema_ContainerServiceECRImagePullerRole"></a>
<a id="tocScontainerserviceecrimagepullerrole"></a>
<a id="tocscontainerserviceecrimagepullerrole"></a>

```json
{
  "isActive": {},
  "principalArn": {}
}
```

<p>Describes the activation status of the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>When activated, Lightsail creates an Identity and Access Management (IAM) role for the specified Lightsail container service. You can use the ARN of the role to create a trust relationship between your Lightsail container service and an Amazon ECR private repository in your Amazon Web Services account. This allows your container service to pull images from Amazon ECR private repositories. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isActive|object|false|none|none|
|principalArn|object|false|none|none|

<h2 id="tocS_ContainerServiceECRImagePullerRoleRequest">ContainerServiceECRImagePullerRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacontainerserviceecrimagepullerrolerequest"></a>
<a id="schema_ContainerServiceECRImagePullerRoleRequest"></a>
<a id="tocScontainerserviceecrimagepullerrolerequest"></a>
<a id="tocscontainerserviceecrimagepullerrolerequest"></a>

```json
{
  "isActive": {}
}
```

<p>Describes a request to activate or deactivate the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>When activated, Lightsail creates an Identity and Access Management (IAM) role for the specified Lightsail container service. You can use the ARN of the role to create a trust relationship between your Lightsail container service and an Amazon ECR private repository in your Amazon Web Services account. This allows your container service to pull images from Amazon ECR private repositories. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isActive|object|false|none|none|

<h2 id="tocS_ContainerServiceHealthCheckConfig">ContainerServiceHealthCheckConfig</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicehealthcheckconfig"></a>
<a id="schema_ContainerServiceHealthCheckConfig"></a>
<a id="tocScontainerservicehealthcheckconfig"></a>
<a id="tocscontainerservicehealthcheckconfig"></a>

```json
{
  "healthyThreshold": {},
  "unhealthyThreshold": {},
  "timeoutSeconds": {},
  "intervalSeconds": {},
  "path": {},
  "successCodes": {}
}
```

Describes the health check configuration of an Amazon Lightsail container service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthyThreshold|object|false|none|none|
|unhealthyThreshold|object|false|none|none|
|timeoutSeconds|object|false|none|none|
|intervalSeconds|object|false|none|none|
|path|object|false|none|none|
|successCodes|object|false|none|none|

<h2 id="tocS_ContainerServiceList">ContainerServiceList</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicelist"></a>
<a id="schema_ContainerServiceList"></a>
<a id="tocScontainerservicelist"></a>
<a id="tocscontainerservicelist"></a>

```json
[
  {
    "containerServiceName": {},
    "arn": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "power": {},
    "powerId": {},
    "state": {},
    "stateDetail": {
      "code": {},
      "message": {}
    },
    "scale": {},
    "currentDeployment": {
      "version": {},
      "state": {},
      "containers": {
        "property1": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        },
        "property2": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        }
      },
      "publicEndpoint": {
        "containerName": {},
        "containerPort": {},
        "healthCheck": {
          "healthyThreshold": {},
          "unhealthyThreshold": {},
          "timeoutSeconds": {},
          "intervalSeconds": {},
          "path": {},
          "successCodes": {}
        }
      },
      "createdAt": {}
    },
    "nextDeployment": {
      "version": {},
      "state": {},
      "containers": {
        "property1": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        },
        "property2": {
          "image": {},
          "command": {},
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ports": {
            "property1": "HTTP",
            "property2": "HTTP"
          }
        }
      },
      "publicEndpoint": {
        "containerName": {},
        "containerPort": {},
        "healthCheck": {
          "healthyThreshold": {},
          "unhealthyThreshold": {},
          "timeoutSeconds": {},
          "intervalSeconds": {},
          "path": {},
          "successCodes": {}
        }
      },
      "createdAt": {}
    },
    "isDisabled": {},
    "principalArn": {},
    "privateDomainName": {},
    "publicDomainNames": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "url": {},
    "privateRegistryAccess": {
      "ecrImagePullerRole": {
        "isActive": {},
        "principalArn": {}
      }
    }
  }
]
```

<h2 id="tocS_ContainerServiceLogEvent">ContainerServiceLogEvent</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicelogevent"></a>
<a id="schema_ContainerServiceLogEvent"></a>
<a id="tocScontainerservicelogevent"></a>
<a id="tocscontainerservicelogevent"></a>

```json
{
  "createdAt": {},
  "message": {}
}
```

Describes the log events of a container of an Amazon Lightsail container service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_ContainerServiceLogEventList">ContainerServiceLogEventList</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicelogeventlist"></a>
<a id="schema_ContainerServiceLogEventList"></a>
<a id="tocScontainerservicelogeventlist"></a>
<a id="tocscontainerservicelogeventlist"></a>

```json
[
  {
    "createdAt": {},
    "message": {}
  }
]
```

<h2 id="tocS_ContainerServiceMetadataEntry">ContainerServiceMetadataEntry</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicemetadataentry"></a>
<a id="schema_ContainerServiceMetadataEntry"></a>
<a id="tocScontainerservicemetadataentry"></a>
<a id="tocscontainerservicemetadataentry"></a>

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

<h2 id="tocS_ContainerServiceMetadataEntryList">ContainerServiceMetadataEntryList</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicemetadataentrylist"></a>
<a id="schema_ContainerServiceMetadataEntryList"></a>
<a id="tocScontainerservicemetadataentrylist"></a>
<a id="tocscontainerservicemetadataentrylist"></a>

```json
[
  {
    "property1": "string",
    "property2": "string"
  }
]
```

<h2 id="tocS_ContainerServiceMetricName">ContainerServiceMetricName</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicemetricname"></a>
<a id="schema_ContainerServiceMetricName"></a>
<a id="tocScontainerservicemetricname"></a>
<a id="tocscontainerservicemetricname"></a>

```json
"CPUUtilization"
```

<h2 id="tocS_ContainerServicePower">ContainerServicePower</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicepower"></a>
<a id="schema_ContainerServicePower"></a>
<a id="tocScontainerservicepower"></a>
<a id="tocscontainerservicepower"></a>

```json
{
  "powerId": {},
  "price": {},
  "cpuCount": {},
  "ramSizeInGb": {},
  "name": {},
  "isActive": {}
}
```

<p>Describes the powers that can be specified for an Amazon Lightsail container service.</p> <p>The power specifies the amount of RAM, the number of vCPUs, and the base price of the container service.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|powerId|object|false|none|none|
|price|object|false|none|none|
|cpuCount|object|false|none|none|
|ramSizeInGb|object|false|none|none|
|name|object|false|none|none|
|isActive|object|false|none|none|

<h2 id="tocS_ContainerServicePowerList">ContainerServicePowerList</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicepowerlist"></a>
<a id="schema_ContainerServicePowerList"></a>
<a id="tocScontainerservicepowerlist"></a>
<a id="tocscontainerservicepowerlist"></a>

```json
[
  {
    "powerId": {},
    "price": {},
    "cpuCount": {},
    "ramSizeInGb": {},
    "name": {},
    "isActive": {}
  }
]
```

<h2 id="tocS_ContainerServiceProtocol">ContainerServiceProtocol</h2>
<!-- backwards compatibility -->
<a id="schemacontainerserviceprotocol"></a>
<a id="schema_ContainerServiceProtocol"></a>
<a id="tocScontainerserviceprotocol"></a>
<a id="tocscontainerserviceprotocol"></a>

```json
"HTTP"
```

<h2 id="tocS_ContainerServicePublicDomainsList">ContainerServicePublicDomainsList</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicepublicdomainslist"></a>
<a id="schema_ContainerServicePublicDomainsList"></a>
<a id="tocScontainerservicepublicdomainslist"></a>
<a id="tocscontainerservicepublicdomainslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ContainerServiceRegistryLogin">ContainerServiceRegistryLogin</h2>
<!-- backwards compatibility -->
<a id="schemacontainerserviceregistrylogin"></a>
<a id="schema_ContainerServiceRegistryLogin"></a>
<a id="tocScontainerserviceregistrylogin"></a>
<a id="tocscontainerserviceregistrylogin"></a>

```json
{
  "username": {},
  "password": {},
  "expiresAt": {},
  "registry": {}
}
```

Describes the sign-in credentials for the container image registry of an Amazon Lightsail account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|object|false|none|none|
|password|object|false|none|none|
|expiresAt|object|false|none|none|
|registry|object|false|none|none|

<h2 id="tocS_ContainerServiceStateDetailCode">ContainerServiceStateDetailCode</h2>
<!-- backwards compatibility -->
<a id="schemacontainerservicestatedetailcode"></a>
<a id="schema_ContainerServiceStateDetailCode"></a>
<a id="tocScontainerservicestatedetailcode"></a>
<a id="tocscontainerservicestatedetailcode"></a>

```json
"CREATING_SYSTEM_RESOURCES"
```

<h2 id="tocS_ForwardValues">ForwardValues</h2>
<!-- backwards compatibility -->
<a id="schemaforwardvalues"></a>
<a id="schema_ForwardValues"></a>
<a id="tocSforwardvalues"></a>
<a id="tocsforwardvalues"></a>

```json
"none"
```

<h2 id="tocS_RegionName">RegionName</h2>
<!-- backwards compatibility -->
<a id="schemaregionname"></a>
<a id="schema_RegionName"></a>
<a id="tocSregionname"></a>
<a id="tocsregionname"></a>

```json
"us-east-1"
```

<h2 id="tocS_EstimatesByTime">EstimatesByTime</h2>
<!-- backwards compatibility -->
<a id="schemaestimatesbytime"></a>
<a id="schema_EstimatesByTime"></a>
<a id="tocSestimatesbytime"></a>
<a id="tocsestimatesbytime"></a>

```json
[
  {
    "usageCost": {},
    "pricingUnit": {},
    "unit": {},
    "currency": {},
    "timePeriod": {
      "start": {},
      "end": {}
    }
  }
]
```

<h2 id="tocS_CostEstimate">CostEstimate</h2>
<!-- backwards compatibility -->
<a id="schemacostestimate"></a>
<a id="schema_CostEstimate"></a>
<a id="tocScostestimate"></a>
<a id="tocscostestimate"></a>

```json
{
  "usageType": {},
  "resultsByTime": {}
}
```

Describes the estimated cost for resources in your Lightsail for Research account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usageType|object|false|none|none|
|resultsByTime|object|false|none|none|

<h2 id="tocS_CostEstimates">CostEstimates</h2>
<!-- backwards compatibility -->
<a id="schemacostestimates"></a>
<a id="schema_CostEstimates"></a>
<a id="tocScostestimates"></a>
<a id="tocscostestimates"></a>

```json
[
  {
    "usageType": {},
    "resultsByTime": {}
  }
]
```

<h2 id="tocS_InstanceEntryList">InstanceEntryList</h2>
<!-- backwards compatibility -->
<a id="schemainstanceentrylist"></a>
<a id="schema_InstanceEntryList"></a>
<a id="tocSinstanceentrylist"></a>
<a id="tocsinstanceentrylist"></a>

```json
[
  {
    "sourceName": {},
    "instanceType": {},
    "portInfoSource": {},
    "userData": {},
    "availabilityZone": {}
  }
]
```

<h2 id="tocS_StringMax256">StringMax256</h2>
<!-- backwards compatibility -->
<a id="schemastringmax256"></a>
<a id="schema_StringMax256"></a>
<a id="tocSstringmax256"></a>
<a id="tocsstringmax256"></a>

```json
"string"
```

<h2 id="tocS_PrivateRegistryAccessRequest">PrivateRegistryAccessRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprivateregistryaccessrequest"></a>
<a id="schema_PrivateRegistryAccessRequest"></a>
<a id="tocSprivateregistryaccessrequest"></a>
<a id="tocsprivateregistryaccessrequest"></a>

```json
{
  "ecrImagePullerRole": {
    "isActive": {}
  }
}
```

<p>Describes a request to configure an Amazon Lightsail container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ecrImagePullerRole|object|false|none|none|

<h2 id="tocS_InputOrigin">InputOrigin</h2>
<!-- backwards compatibility -->
<a id="schemainputorigin"></a>
<a id="schema_InputOrigin"></a>
<a id="tocSinputorigin"></a>
<a id="tocsinputorigin"></a>

```json
{
  "name": {},
  "regionName": {},
  "protocolPolicy": {}
}
```

<p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>An origin can be a Lightsail instance, bucket, or load balancer. A distribution pulls content from an origin, caches it, and serves it to viewers via a worldwide network of edge servers.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|regionName|object|false|none|none|
|protocolPolicy|object|false|none|none|

<h2 id="tocS_IpAddressType">IpAddressType</h2>
<!-- backwards compatibility -->
<a id="schemaipaddresstype"></a>
<a id="schema_IpAddressType"></a>
<a id="tocSipaddresstype"></a>
<a id="tocsipaddresstype"></a>

```json
"dualstack"
```

<h2 id="tocS_LightsailDistribution">LightsailDistribution</h2>
<!-- backwards compatibility -->
<a id="schemalightsaildistribution"></a>
<a id="schema_LightsailDistribution"></a>
<a id="tocSlightsaildistribution"></a>
<a id="tocslightsaildistribution"></a>

```json
{
  "name": {},
  "arn": {},
  "supportCode": {},
  "createdAt": {},
  "location": {
    "availabilityZone": {},
    "regionName": {}
  },
  "resourceType": {},
  "alternativeDomainNames": {},
  "status": {},
  "isEnabled": {},
  "domainName": {},
  "bundleId": {},
  "certificateName": {},
  "origin": {
    "name": {},
    "resourceType": {},
    "regionName": {},
    "protocolPolicy": {}
  },
  "originPublicDNS": {},
  "defaultCacheBehavior": {
    "behavior": {}
  },
  "cacheBehaviorSettings": {
    "defaultTTL": {},
    "minimumTTL": {},
    "maximumTTL": {},
    "allowedHTTPMethods": {},
    "cachedHTTPMethods": {},
    "forwardedCookies": {
      "option": {},
      "cookiesAllowList": {}
    },
    "forwardedHeaders": {
      "option": {},
      "headersAllowList": {}
    },
    "forwardedQueryStrings": {
      "option": {},
      "queryStringsAllowList": {}
    }
  },
  "cacheBehaviors": {},
  "ableToUpdateBundle": {},
  "ipAddressType": {},
  "tags": {}
}
```

Describes an Amazon Lightsail content delivery network (CDN) distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|supportCode|object|false|none|none|
|createdAt|object|false|none|none|
|location|object|false|none|none|
|resourceType|object|false|none|none|
|alternativeDomainNames|object|false|none|none|
|status|object|false|none|none|
|isEnabled|object|false|none|none|
|domainName|object|false|none|none|
|bundleId|object|false|none|none|
|certificateName|object|false|none|none|
|origin|object|false|none|none|
|originPublicDNS|object|false|none|none|
|defaultCacheBehavior|object|false|none|none|
|cacheBehaviorSettings|object|false|none|none|
|cacheBehaviors|object|false|none|none|
|ableToUpdateBundle|object|false|none|none|
|ipAddressType|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DomainEntry">DomainEntry</h2>
<!-- backwards compatibility -->
<a id="schemadomainentry"></a>
<a id="schema_DomainEntry"></a>
<a id="tocSdomainentry"></a>
<a id="tocsdomainentry"></a>

```json
{
  "id": {},
  "name": {},
  "target": {},
  "isAlias": {},
  "type": {},
  "options": {
    "property1": "string",
    "property2": "string"
  }
}
```

Describes a domain recordset entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|target|object|false|none|none|
|isAlias|object|false|none|none|
|type|object|false|none|none|
|options|object|false|none|none|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"startExpired"
```

<h2 id="tocS_Sessions">Sessions</h2>
<!-- backwards compatibility -->
<a id="schemasessions"></a>
<a id="schema_Sessions"></a>
<a id="tocSsessions"></a>
<a id="tocssessions"></a>

```json
[
  {
    "name": {},
    "url": {},
    "isPrimary": {}
  }
]
```

<h2 id="tocS_KeyPair">KeyPair</h2>
<!-- backwards compatibility -->
<a id="schemakeypair"></a>
<a id="schema_KeyPair"></a>
<a id="tocSkeypair"></a>
<a id="tocskeypair"></a>

```json
{
  "name": {},
  "arn": {},
  "supportCode": {},
  "createdAt": {},
  "location": {
    "availabilityZone": {},
    "regionName": {}
  },
  "resourceType": {},
  "tags": {},
  "fingerprint": {}
}
```

Describes an SSH key pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|supportCode|object|false|none|none|
|createdAt|object|false|none|none|
|location|object|false|none|none|
|resourceType|object|false|none|none|
|tags|object|false|none|none|
|fingerprint|object|false|none|none|

<h2 id="tocS_Port">Port</h2>
<!-- backwards compatibility -->
<a id="schemaport"></a>
<a id="schema_Port"></a>
<a id="tocSport"></a>
<a id="tocsport"></a>

```json
-1
```

<h2 id="tocS_DomainNameList">DomainNameList</h2>
<!-- backwards compatibility -->
<a id="schemadomainnamelist"></a>
<a id="schema_DomainNameList"></a>
<a id="tocSdomainnamelist"></a>
<a id="tocsdomainnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SensitiveString">SensitiveString</h2>
<!-- backwards compatibility -->
<a id="schemasensitivestring"></a>
<a id="schema_SensitiveString"></a>
<a id="tocSsensitivestring"></a>
<a id="tocssensitivestring"></a>

```json
"password"
```

<h2 id="tocS_Currency">Currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_Currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
"USD"
```

<h2 id="tocS_DiskState">DiskState</h2>
<!-- backwards compatibility -->
<a id="schemadiskstate"></a>
<a id="schema_DiskState"></a>
<a id="tocSdiskstate"></a>
<a id="tocsdiskstate"></a>

```json
"pending"
```

<h2 id="tocS_Disk">Disk</h2>
<!-- backwards compatibility -->
<a id="schemadisk"></a>
<a id="schema_Disk"></a>
<a id="tocSdisk"></a>
<a id="tocsdisk"></a>

```json
{
  "name": {},
  "arn": {},
  "supportCode": {},
  "createdAt": {},
  "location": {
    "availabilityZone": {},
    "regionName": {}
  },
  "resourceType": {},
  "tags": {},
  "addOns": {},
  "sizeInGb": {},
  "isSystemDisk": {},
  "iops": {},
  "path": {},
  "state": {},
  "attachedTo": {},
  "isAttached": {},
  "attachmentState": {},
  "gbInUse": {},
  "autoMountStatus": {}
}
```

Describes a block storage disk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|supportCode|object|false|none|none|
|createdAt|object|false|none|none|
|location|object|false|none|none|
|resourceType|object|false|none|none|
|tags|object|false|none|none|
|addOns|object|false|none|none|
|sizeInGb|object|false|none|none|
|isSystemDisk|object|false|none|none|
|iops|object|false|none|none|
|path|object|false|none|none|
|state|object|false|none|none|
|attachedTo|object|false|none|none|
|isAttached|object|false|none|none|
|attachmentState|object|false|none|none|
|gbInUse|object|false|none|none|
|autoMountStatus|object|false|none|none|

<h2 id="tocS_DiskInfo">DiskInfo</h2>
<!-- backwards compatibility -->
<a id="schemadiskinfo"></a>
<a id="schema_DiskInfo"></a>
<a id="tocSdiskinfo"></a>
<a id="tocsdiskinfo"></a>

```json
{
  "name": {},
  "path": {},
  "sizeInGb": {},
  "isSystemDisk": {}
}
```

Describes a disk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|path|object|false|none|none|
|sizeInGb|object|false|none|none|
|isSystemDisk|object|false|none|none|

<h2 id="tocS_DiskInfoList">DiskInfoList</h2>
<!-- backwards compatibility -->
<a id="schemadiskinfolist"></a>
<a id="schema_DiskInfoList"></a>
<a id="tocSdiskinfolist"></a>
<a id="tocsdiskinfolist"></a>

```json
[
  {
    "name": {},
    "path": {},
    "sizeInGb": {},
    "isSystemDisk": {}
  }
]
```

<h2 id="tocS_DiskList">DiskList</h2>
<!-- backwards compatibility -->
<a id="schemadisklist"></a>
<a id="schema_DiskList"></a>
<a id="tocSdisklist"></a>
<a id="tocsdisklist"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "addOns": {},
    "sizeInGb": {},
    "isSystemDisk": {},
    "iops": {},
    "path": {},
    "state": {},
    "attachedTo": {},
    "isAttached": {},
    "attachmentState": {},
    "gbInUse": {},
    "autoMountStatus": {}
  }
]
```

<h2 id="tocS_DiskMap">DiskMap</h2>
<!-- backwards compatibility -->
<a id="schemadiskmap"></a>
<a id="schema_DiskMap"></a>
<a id="tocSdiskmap"></a>
<a id="tocsdiskmap"></a>

```json
{
  "originalDiskPath": {},
  "newDiskName": {}
}
```

Describes a block storage disk mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|originalDiskPath|object|false|none|none|
|newDiskName|object|false|none|none|

<h2 id="tocS_DiskSnapshotState">DiskSnapshotState</h2>
<!-- backwards compatibility -->
<a id="schemadisksnapshotstate"></a>
<a id="schema_DiskSnapshotState"></a>
<a id="tocSdisksnapshotstate"></a>
<a id="tocsdisksnapshotstate"></a>

```json
"pending"
```

<h2 id="tocS_DiskSnapshot">DiskSnapshot</h2>
<!-- backwards compatibility -->
<a id="schemadisksnapshot"></a>
<a id="schema_DiskSnapshot"></a>
<a id="tocSdisksnapshot"></a>
<a id="tocsdisksnapshot"></a>

```json
{
  "name": {},
  "arn": {},
  "supportCode": {},
  "createdAt": {},
  "location": {
    "availabilityZone": {},
    "regionName": {}
  },
  "resourceType": {},
  "tags": {},
  "sizeInGb": {},
  "state": {},
  "progress": {},
  "fromDiskName": {},
  "fromDiskArn": {},
  "fromInstanceName": {},
  "fromInstanceArn": {},
  "isFromAutoSnapshot": {}
}
```

Describes a block storage disk snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|supportCode|object|false|none|none|
|createdAt|object|false|none|none|
|location|object|false|none|none|
|resourceType|object|false|none|none|
|tags|object|false|none|none|
|sizeInGb|object|false|none|none|
|state|object|false|none|none|
|progress|object|false|none|none|
|fromDiskName|object|false|none|none|
|fromDiskArn|object|false|none|none|
|fromInstanceName|object|false|none|none|
|fromInstanceArn|object|false|none|none|
|isFromAutoSnapshot|object|false|none|none|

<h2 id="tocS_DiskSnapshotInfo">DiskSnapshotInfo</h2>
<!-- backwards compatibility -->
<a id="schemadisksnapshotinfo"></a>
<a id="schema_DiskSnapshotInfo"></a>
<a id="tocSdisksnapshotinfo"></a>
<a id="tocsdisksnapshotinfo"></a>

```json
{
  "sizeInGb": {}
}
```

Describes a disk snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sizeInGb|object|false|none|none|

<h2 id="tocS_DiskSnapshotList">DiskSnapshotList</h2>
<!-- backwards compatibility -->
<a id="schemadisksnapshotlist"></a>
<a id="schema_DiskSnapshotList"></a>
<a id="tocSdisksnapshotlist"></a>
<a id="tocsdisksnapshotlist"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "sizeInGb": {},
    "state": {},
    "progress": {},
    "fromDiskName": {},
    "fromDiskArn": {},
    "fromInstanceName": {},
    "fromInstanceArn": {},
    "isFromAutoSnapshot": {}
  }
]
```

<h2 id="tocS_DistributionBundle">DistributionBundle</h2>
<!-- backwards compatibility -->
<a id="schemadistributionbundle"></a>
<a id="schema_DistributionBundle"></a>
<a id="tocSdistributionbundle"></a>
<a id="tocsdistributionbundle"></a>

```json
{
  "bundleId": {},
  "name": {},
  "price": {},
  "transferPerMonthInGb": {},
  "isActive": {}
}
```

Describes the specifications of a distribution bundle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundleId|object|false|none|none|
|name|object|false|none|none|
|price|object|false|none|none|
|transferPerMonthInGb|object|false|none|none|
|isActive|object|false|none|none|

<h2 id="tocS_DistributionBundleList">DistributionBundleList</h2>
<!-- backwards compatibility -->
<a id="schemadistributionbundlelist"></a>
<a id="schema_DistributionBundleList"></a>
<a id="tocSdistributionbundlelist"></a>
<a id="tocsdistributionbundlelist"></a>

```json
[
  {
    "bundleId": {},
    "name": {},
    "price": {},
    "transferPerMonthInGb": {},
    "isActive": {}
  }
]
```

<h2 id="tocS_DistributionList">DistributionList</h2>
<!-- backwards compatibility -->
<a id="schemadistributionlist"></a>
<a id="schema_DistributionList"></a>
<a id="tocSdistributionlist"></a>
<a id="tocsdistributionlist"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "alternativeDomainNames": {},
    "status": {},
    "isEnabled": {},
    "domainName": {},
    "bundleId": {},
    "certificateName": {},
    "origin": {
      "name": {},
      "resourceType": {},
      "regionName": {},
      "protocolPolicy": {}
    },
    "originPublicDNS": {},
    "defaultCacheBehavior": {
      "behavior": {}
    },
    "cacheBehaviorSettings": {
      "defaultTTL": {},
      "minimumTTL": {},
      "maximumTTL": {},
      "allowedHTTPMethods": {},
      "cachedHTTPMethods": {},
      "forwardedCookies": {
        "option": {},
        "cookiesAllowList": {}
      },
      "forwardedHeaders": {
        "option": {},
        "headersAllowList": {}
      },
      "forwardedQueryStrings": {
        "option": {},
        "queryStringsAllowList": {}
      }
    },
    "cacheBehaviors": {},
    "ableToUpdateBundle": {},
    "ipAddressType": {},
    "tags": {}
  }
]
```

<h2 id="tocS_DistributionMetricName">DistributionMetricName</h2>
<!-- backwards compatibility -->
<a id="schemadistributionmetricname"></a>
<a id="schema_DistributionMetricName"></a>
<a id="tocSdistributionmetricname"></a>
<a id="tocsdistributionmetricname"></a>

```json
"Requests"
```

<h2 id="tocS_DnsRecordCreationStateCode">DnsRecordCreationStateCode</h2>
<!-- backwards compatibility -->
<a id="schemadnsrecordcreationstatecode"></a>
<a id="schema_DnsRecordCreationStateCode"></a>
<a id="tocSdnsrecordcreationstatecode"></a>
<a id="tocsdnsrecordcreationstatecode"></a>

```json
"SUCCEEDED"
```

<h2 id="tocS_DnsRecordCreationState">DnsRecordCreationState</h2>
<!-- backwards compatibility -->
<a id="schemadnsrecordcreationstate"></a>
<a id="schema_DnsRecordCreationState"></a>
<a id="tocSdnsrecordcreationstate"></a>
<a id="tocsdnsrecordcreationstate"></a>

```json
{
  "code": {},
  "message": {}
}
```

<p>Describes the creation state of the canonical name (CNAME) records that are automatically added by Amazon Lightsail to the DNS of a domain to validate domain ownership for an SSL/TLS certificate.</p> <p>When you create an SSL/TLS certificate for a Lightsail resource, you must add a set of CNAME records to the DNS of the domains for the certificate to validate that you own the domains. Lightsail can automatically add the CNAME records to the DNS of the domain if the DNS zone for the domain exists within your Lightsail account. If automatic record addition fails, or if you manage the DNS of your domain using a third-party service, then you must manually add the CNAME records to the DNS of your domain. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/verify-tls-ssl-certificate-using-dns-cname-https">Verify an SSL/TLS certificate in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_DomainEntryList">DomainEntryList</h2>
<!-- backwards compatibility -->
<a id="schemadomainentrylist"></a>
<a id="schema_DomainEntryList"></a>
<a id="tocSdomainentrylist"></a>
<a id="tocsdomainentrylist"></a>

```json
[
  {
    "id": {},
    "name": {},
    "target": {},
    "isAlias": {},
    "type": {},
    "options": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_RegisteredDomainDelegationInfo">RegisteredDomainDelegationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaregistereddomaindelegationinfo"></a>
<a id="schema_RegisteredDomainDelegationInfo"></a>
<a id="tocSregistereddomaindelegationinfo"></a>
<a id="tocsregistereddomaindelegationinfo"></a>

```json
{
  "nameServersUpdateState": {
    "code": {},
    "message": {}
  },
  "r53HostedZoneDeletionState": {
    "code": {},
    "message": {}
  }
}
```

<p>Describes the delegation state of an Amazon Route 53 registered domain to Amazon Lightsail.</p> <p>When you delegate an Amazon Route 53 registered domain to Lightsail, you can manage the DNS of the domain using a Lightsail DNS zone. You no longer use the Route 53 hosted zone to manage the DNS of the domain. To delegate the domain, Lightsail automatically updates the domain's name servers in Route 53 to the name servers of the Lightsail DNS zone. Then, Lightsail automatically deletes the Route 53 hosted zone for the domain.</p> <p>All of the following conditions must be true for automatic domain delegation to be successful:</p> <ul> <li> <p>The registered domain must be in the same Amazon Web Services account as the Lightsail account making the request.</p> </li> <li> <p>The user or entity making the request must have permission to manage domains in Route 53.</p> </li> <li> <p>The Route 53 hosted zone for the domain must be empty. It cannot contain DNS records other than start of authority (SOA) and name server records.</p> </li> </ul> <p>If automatic domain delegation fails, or if you manage the DNS of your domain using a service other than Route 53, then you must manually add the Lightsail DNS zone name servers to your domain in order to delegate management of its DNS to Lightsail. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-create-dns-entry">Creating a DNS zone to manage your domain’s records in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nameServersUpdateState|object|false|none|none|
|r53HostedZoneDeletionState|object|false|none|none|

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
{
  "name": {},
  "arn": {},
  "supportCode": {},
  "createdAt": {},
  "location": {
    "availabilityZone": {},
    "regionName": {}
  },
  "resourceType": {},
  "tags": {},
  "domainEntries": {},
  "registeredDomainDelegationInfo": {
    "nameServersUpdateState": {
      "code": {},
      "message": {}
    },
    "r53HostedZoneDeletionState": {
      "code": {},
      "message": {}
    }
  }
}
```

Describes a domain where you are storing recordsets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|supportCode|object|false|none|none|
|createdAt|object|false|none|none|
|location|object|false|none|none|
|resourceType|object|false|none|none|
|tags|object|false|none|none|
|domainEntries|object|false|none|none|
|registeredDomainDelegationInfo|object|false|none|none|

<h2 id="tocS_DomainEntryType">DomainEntryType</h2>
<!-- backwards compatibility -->
<a id="schemadomainentrytype"></a>
<a id="schema_DomainEntryType"></a>
<a id="tocSdomainentrytype"></a>
<a id="tocsdomainentrytype"></a>

```json
"string"
```

<h2 id="tocS_DomainEntryOptions">DomainEntryOptions</h2>
<!-- backwards compatibility -->
<a id="schemadomainentryoptions"></a>
<a id="schema_DomainEntryOptions"></a>
<a id="tocSdomainentryoptions"></a>
<a id="tocsdomainentryoptions"></a>

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

<h2 id="tocS_DomainEntryOptionsKeys">DomainEntryOptionsKeys</h2>
<!-- backwards compatibility -->
<a id="schemadomainentryoptionskeys"></a>
<a id="schema_DomainEntryOptionsKeys"></a>
<a id="tocSdomainentryoptionskeys"></a>
<a id="tocsdomainentryoptionskeys"></a>

```json
"string"
```

<h2 id="tocS_DomainList">DomainList</h2>
<!-- backwards compatibility -->
<a id="schemadomainlist"></a>
<a id="schema_DomainList"></a>
<a id="tocSdomainlist"></a>
<a id="tocsdomainlist"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "domainEntries": {},
    "registeredDomainDelegationInfo": {
      "nameServersUpdateState": {
        "code": {},
        "message": {}
      },
      "r53HostedZoneDeletionState": {
        "code": {},
        "message": {}
      }
    }
  }
]
```

<h2 id="tocS_ResourceRecord">ResourceRecord</h2>
<!-- backwards compatibility -->
<a id="schemaresourcerecord"></a>
<a id="schema_ResourceRecord"></a>
<a id="tocSresourcerecord"></a>
<a id="tocsresourcerecord"></a>

```json
{
  "name": {},
  "type": {},
  "value": {}
}
```

Describes the domain name system (DNS) records to add to your domain's DNS to validate it for an Amazon Lightsail certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|type|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_DomainValidationRecord">DomainValidationRecord</h2>
<!-- backwards compatibility -->
<a id="schemadomainvalidationrecord"></a>
<a id="schema_DomainValidationRecord"></a>
<a id="tocSdomainvalidationrecord"></a>
<a id="tocsdomainvalidationrecord"></a>

```json
{
  "domainName": {},
  "resourceRecord": {
    "name": {},
    "type": {},
    "value": {}
  },
  "dnsRecordCreationState": {
    "code": {},
    "message": {}
  },
  "validationStatus": {}
}
```

Describes the domain name system (DNS) records that you must add to the DNS of your registered domain to validate ownership for an Amazon Lightsail SSL/TLS certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|false|none|none|
|resourceRecord|object|false|none|none|
|dnsRecordCreationState|object|false|none|none|
|validationStatus|object|false|none|none|

<h2 id="tocS_PricingUnit">PricingUnit</h2>
<!-- backwards compatibility -->
<a id="schemapricingunit"></a>
<a id="schema_PricingUnit"></a>
<a id="tocSpricingunit"></a>
<a id="tocspricingunit"></a>

```json
"GB"
```

<h2 id="tocS_TimePeriod">TimePeriod</h2>
<!-- backwards compatibility -->
<a id="schematimeperiod"></a>
<a id="schema_TimePeriod"></a>
<a id="tocStimeperiod"></a>
<a id="tocstimeperiod"></a>

```json
{
  "start": {},
  "end": {}
}
```

Sets the start date and end date for retrieving a cost estimate. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|object|false|none|none|
|end|object|false|none|none|

<h2 id="tocS_EstimateByTime">EstimateByTime</h2>
<!-- backwards compatibility -->
<a id="schemaestimatebytime"></a>
<a id="schema_EstimateByTime"></a>
<a id="tocSestimatebytime"></a>
<a id="tocsestimatebytime"></a>

```json
{
  "usageCost": {},
  "pricingUnit": {},
  "unit": {},
  "currency": {},
  "timePeriod": {
    "start": {},
    "end": {}
  }
}
```

An estimate that's associated with a time period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usageCost|object|false|none|none|
|pricingUnit|object|false|none|none|
|unit|object|false|none|none|
|currency|object|false|none|none|
|timePeriod|object|false|none|none|

<h2 id="tocS_ExportSnapshotRecordSourceInfo">ExportSnapshotRecordSourceInfo</h2>
<!-- backwards compatibility -->
<a id="schemaexportsnapshotrecordsourceinfo"></a>
<a id="schema_ExportSnapshotRecordSourceInfo"></a>
<a id="tocSexportsnapshotrecordsourceinfo"></a>
<a id="tocsexportsnapshotrecordsourceinfo"></a>

```json
{
  "resourceType": {},
  "createdAt": {},
  "name": {},
  "arn": {},
  "fromResourceName": {},
  "fromResourceArn": {},
  "instanceSnapshotInfo": {
    "fromBundleId": {},
    "fromBlueprintId": {},
    "fromDiskInfo": {}
  },
  "diskSnapshotInfo": {
    "sizeInGb": {}
  }
}
```

Describes the source of an export snapshot record.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|false|none|none|
|createdAt|object|false|none|none|
|name|object|false|none|none|
|arn|object|false|none|none|
|fromResourceName|object|false|none|none|
|fromResourceArn|object|false|none|none|
|instanceSnapshotInfo|object|false|none|none|
|diskSnapshotInfo|object|false|none|none|

<h2 id="tocS_ExportSnapshotRecord">ExportSnapshotRecord</h2>
<!-- backwards compatibility -->
<a id="schemaexportsnapshotrecord"></a>
<a id="schema_ExportSnapshotRecord"></a>
<a id="tocSexportsnapshotrecord"></a>
<a id="tocsexportsnapshotrecord"></a>

```json
{
  "name": {},
  "arn": {},
  "createdAt": {},
  "location": {
    "availabilityZone": {},
    "regionName": {}
  },
  "resourceType": {},
  "state": {},
  "sourceInfo": {
    "resourceType": {},
    "createdAt": {},
    "name": {},
    "arn": {},
    "fromResourceName": {},
    "fromResourceArn": {},
    "instanceSnapshotInfo": {
      "fromBundleId": {},
      "fromBlueprintId": {},
      "fromDiskInfo": {}
    },
    "diskSnapshotInfo": {
      "sizeInGb": {}
    }
  },
  "destinationInfo": {
    "id": {},
    "service": {}
  }
}
```

Describes an export snapshot record.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|createdAt|object|false|none|none|
|location|object|false|none|none|
|resourceType|object|false|none|none|
|state|object|false|none|none|
|sourceInfo|object|false|none|none|
|destinationInfo|object|false|none|none|

<h2 id="tocS_ExportSnapshotRecordList">ExportSnapshotRecordList</h2>
<!-- backwards compatibility -->
<a id="schemaexportsnapshotrecordlist"></a>
<a id="schema_ExportSnapshotRecordList"></a>
<a id="tocSexportsnapshotrecordlist"></a>
<a id="tocsexportsnapshotrecordlist"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "state": {},
    "sourceInfo": {
      "resourceType": {},
      "createdAt": {},
      "name": {},
      "arn": {},
      "fromResourceName": {},
      "fromResourceArn": {},
      "instanceSnapshotInfo": {
        "fromBundleId": {},
        "fromBlueprintId": {},
        "fromDiskInfo": {}
      },
      "diskSnapshotInfo": {
        "sizeInGb": {}
      }
    },
    "destinationInfo": {
      "id": {},
      "service": {}
    }
  }
]
```

<h2 id="tocS_ExportSnapshotRecordSourceType">ExportSnapshotRecordSourceType</h2>
<!-- backwards compatibility -->
<a id="schemaexportsnapshotrecordsourcetype"></a>
<a id="schema_ExportSnapshotRecordSourceType"></a>
<a id="tocSexportsnapshotrecordsourcetype"></a>
<a id="tocsexportsnapshotrecordsourcetype"></a>

```json
"InstanceSnapshot"
```

<h2 id="tocS_InstanceSnapshotInfo">InstanceSnapshotInfo</h2>
<!-- backwards compatibility -->
<a id="schemainstancesnapshotinfo"></a>
<a id="schema_InstanceSnapshotInfo"></a>
<a id="tocSinstancesnapshotinfo"></a>
<a id="tocsinstancesnapshotinfo"></a>

```json
{
  "fromBundleId": {},
  "fromBlueprintId": {},
  "fromDiskInfo": {}
}
```

Describes an instance snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromBundleId|object|false|none|none|
|fromBlueprintId|object|false|none|none|
|fromDiskInfo|object|false|none|none|

<h2 id="tocS_MetricStatisticList">MetricStatisticList</h2>
<!-- backwards compatibility -->
<a id="schemametricstatisticlist"></a>
<a id="schema_MetricStatisticList"></a>
<a id="tocSmetricstatisticlist"></a>
<a id="tocsmetricstatisticlist"></a>

```json
[
  "Minimum"
]
```

<h2 id="tocS_MetricDatapointList">MetricDatapointList</h2>
<!-- backwards compatibility -->
<a id="schemametricdatapointlist"></a>
<a id="schema_MetricDatapointList"></a>
<a id="tocSmetricdatapointlist"></a>
<a id="tocsmetricdatapointlist"></a>

```json
[
  {
    "average": {},
    "maximum": {},
    "minimum": {},
    "sampleCount": {},
    "sum": {},
    "timestamp": {},
    "unit": {}
  }
]
```

<h2 id="tocS_IncludeCertificateDetails">IncludeCertificateDetails</h2>
<!-- backwards compatibility -->
<a id="schemaincludecertificatedetails"></a>
<a id="schema_IncludeCertificateDetails"></a>
<a id="tocSincludecertificatedetails"></a>
<a id="tocsincludecertificatedetails"></a>

```json
true
```

<h2 id="tocS_ResourcesBudgetEstimate">ResourcesBudgetEstimate</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesbudgetestimate"></a>
<a id="schema_ResourcesBudgetEstimate"></a>
<a id="tocSresourcesbudgetestimate"></a>
<a id="tocsresourcesbudgetestimate"></a>

```json
[
  {
    "resourceName": {},
    "resourceType": {},
    "costEstimates": {},
    "startTime": {},
    "endTime": {}
  }
]
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

<h2 id="tocS_InstanceAccessProtocol">InstanceAccessProtocol</h2>
<!-- backwards compatibility -->
<a id="schemainstanceaccessprotocol"></a>
<a id="schema_InstanceAccessProtocol"></a>
<a id="tocSinstanceaccessprotocol"></a>
<a id="tocsinstanceaccessprotocol"></a>

```json
"ssh"
```

<h2 id="tocS_InstanceAccessDetails">InstanceAccessDetails</h2>
<!-- backwards compatibility -->
<a id="schemainstanceaccessdetails"></a>
<a id="schema_InstanceAccessDetails"></a>
<a id="tocSinstanceaccessdetails"></a>
<a id="tocsinstanceaccessdetails"></a>

```json
{
  "certKey": {},
  "expiresAt": {},
  "ipAddress": {},
  "password": {},
  "passwordData": {
    "ciphertext": {},
    "keyPairName": {}
  },
  "privateKey": {},
  "protocol": {},
  "instanceName": {},
  "username": {},
  "hostKeys": {}
}
```

The parameters for gaining temporary access to one of your Amazon Lightsail instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certKey|object|false|none|none|
|expiresAt|object|false|none|none|
|ipAddress|object|false|none|none|
|password|object|false|none|none|
|passwordData|object|false|none|none|
|privateKey|object|false|none|none|
|protocol|object|false|none|none|
|instanceName|object|false|none|none|
|username|object|false|none|none|
|hostKeys|object|false|none|none|

<h2 id="tocS_InstanceMetricName">InstanceMetricName</h2>
<!-- backwards compatibility -->
<a id="schemainstancemetricname"></a>
<a id="schema_InstanceMetricName"></a>
<a id="tocSinstancemetricname"></a>
<a id="tocsinstancemetricname"></a>

```json
"CPUUtilization"
```

<h2 id="tocS_InstancePortStateList">InstancePortStateList</h2>
<!-- backwards compatibility -->
<a id="schemainstanceportstatelist"></a>
<a id="schema_InstancePortStateList"></a>
<a id="tocSinstanceportstatelist"></a>
<a id="tocsinstanceportstatelist"></a>

```json
[
  {
    "fromPort": {},
    "toPort": {},
    "protocol": {},
    "state": {},
    "cidrs": {},
    "ipv6Cidrs": {},
    "cidrListAliases": {}
  }
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
  "name": {},
  "arn": {},
  "supportCode": {},
  "createdAt": {},
  "location": {
    "availabilityZone": {},
    "regionName": {}
  },
  "resourceType": {},
  "tags": {},
  "blueprintId": {},
  "blueprintName": {},
  "bundleId": {},
  "addOns": {},
  "isStaticIp": {},
  "privateIpAddress": {},
  "publicIpAddress": {},
  "ipv6Addresses": {},
  "ipAddressType": {},
  "hardware": {
    "cpuCount": {},
    "disks": {},
    "ramSizeInGb": {}
  },
  "networking": {
    "monthlyTransfer": {
      "gbPerMonthAllocated": {}
    },
    "ports": {}
  },
  "state": {
    "code": {},
    "name": {}
  },
  "username": {},
  "sshKeyName": {},
  "metadataOptions": {
    "state": {},
    "httpTokens": {},
    "httpEndpoint": {},
    "httpPutResponseHopLimit": {},
    "httpProtocolIpv6": {}
  }
}
```

Describes an instance (a virtual private server).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|supportCode|object|false|none|none|
|createdAt|object|false|none|none|
|location|object|false|none|none|
|resourceType|object|false|none|none|
|tags|object|false|none|none|
|blueprintId|object|false|none|none|
|blueprintName|object|false|none|none|
|bundleId|object|false|none|none|
|addOns|object|false|none|none|
|isStaticIp|object|false|none|none|
|privateIpAddress|object|false|none|none|
|publicIpAddress|object|false|none|none|
|ipv6Addresses|object|false|none|none|
|ipAddressType|object|false|none|none|
|hardware|object|false|none|none|
|networking|object|false|none|none|
|state|object|false|none|none|
|username|object|false|none|none|
|sshKeyName|object|false|none|none|
|metadataOptions|object|false|none|none|

<h2 id="tocS_InstanceSnapshot">InstanceSnapshot</h2>
<!-- backwards compatibility -->
<a id="schemainstancesnapshot"></a>
<a id="schema_InstanceSnapshot"></a>
<a id="tocSinstancesnapshot"></a>
<a id="tocsinstancesnapshot"></a>

```json
{
  "name": {},
  "arn": {},
  "supportCode": {},
  "createdAt": {},
  "location": {
    "availabilityZone": {},
    "regionName": {}
  },
  "resourceType": {},
  "tags": {},
  "state": {},
  "progress": {},
  "fromAttachedDisks": {},
  "fromInstanceName": {},
  "fromInstanceArn": {},
  "fromBlueprintId": {},
  "fromBundleId": {},
  "isFromAutoSnapshot": {},
  "sizeInGb": {}
}
```

Describes an instance snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|supportCode|object|false|none|none|
|createdAt|object|false|none|none|
|location|object|false|none|none|
|resourceType|object|false|none|none|
|tags|object|false|none|none|
|state|object|false|none|none|
|progress|object|false|none|none|
|fromAttachedDisks|object|false|none|none|
|fromInstanceName|object|false|none|none|
|fromInstanceArn|object|false|none|none|
|fromBlueprintId|object|false|none|none|
|fromBundleId|object|false|none|none|
|isFromAutoSnapshot|object|false|none|none|
|sizeInGb|object|false|none|none|

<h2 id="tocS_InstanceSnapshotList">InstanceSnapshotList</h2>
<!-- backwards compatibility -->
<a id="schemainstancesnapshotlist"></a>
<a id="schema_InstanceSnapshotList"></a>
<a id="tocSinstancesnapshotlist"></a>
<a id="tocsinstancesnapshotlist"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "state": {},
    "progress": {},
    "fromAttachedDisks": {},
    "fromInstanceName": {},
    "fromInstanceArn": {},
    "fromBlueprintId": {},
    "fromBundleId": {},
    "isFromAutoSnapshot": {},
    "sizeInGb": {}
  }
]
```

<h2 id="tocS_InstanceState">InstanceState</h2>
<!-- backwards compatibility -->
<a id="schemainstancestate"></a>
<a id="schema_InstanceState"></a>
<a id="tocSinstancestate"></a>
<a id="tocsinstancestate"></a>

```json
{
  "code": {},
  "name": {}
}
```

Describes the virtual private server (or <i>instance</i>) status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|name|object|false|none|none|

<h2 id="tocS_InstanceList">InstanceList</h2>
<!-- backwards compatibility -->
<a id="schemainstancelist"></a>
<a id="schema_InstanceList"></a>
<a id="tocSinstancelist"></a>
<a id="tocsinstancelist"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "blueprintId": {},
    "blueprintName": {},
    "bundleId": {},
    "addOns": {},
    "isStaticIp": {},
    "privateIpAddress": {},
    "publicIpAddress": {},
    "ipv6Addresses": {},
    "ipAddressType": {},
    "hardware": {
      "cpuCount": {},
      "disks": {},
      "ramSizeInGb": {}
    },
    "networking": {
      "monthlyTransfer": {
        "gbPerMonthAllocated": {}
      },
      "ports": {}
    },
    "state": {
      "code": {},
      "name": {}
    },
    "username": {},
    "sshKeyName": {},
    "metadataOptions": {
      "state": {},
      "httpTokens": {},
      "httpEndpoint": {},
      "httpPutResponseHopLimit": {},
      "httpProtocolIpv6": {}
    }
  }
]
```

<h2 id="tocS_KeyPairList">KeyPairList</h2>
<!-- backwards compatibility -->
<a id="schemakeypairlist"></a>
<a id="schema_KeyPairList"></a>
<a id="tocSkeypairlist"></a>
<a id="tocskeypairlist"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "fingerprint": {}
  }
]
```

<h2 id="tocS_LoadBalancerMetricName">LoadBalancerMetricName</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancermetricname"></a>
<a id="schema_LoadBalancerMetricName"></a>
<a id="tocSloadbalancermetricname"></a>
<a id="tocsloadbalancermetricname"></a>

```json
"ClientTLSNegotiationErrorCount"
```

<h2 id="tocS_LoadBalancer">LoadBalancer</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancer"></a>
<a id="schema_LoadBalancer"></a>
<a id="tocSloadbalancer"></a>
<a id="tocsloadbalancer"></a>

```json
{
  "name": {},
  "arn": {},
  "supportCode": {},
  "createdAt": {},
  "location": {
    "availabilityZone": {},
    "regionName": {}
  },
  "resourceType": {},
  "tags": {},
  "dnsName": {},
  "state": {},
  "protocol": {},
  "publicPorts": {},
  "healthCheckPath": {},
  "instancePort": {},
  "instanceHealthSummary": {},
  "tlsCertificateSummaries": {},
  "configurationOptions": {
    "property1": "string",
    "property2": "string"
  },
  "ipAddressType": {},
  "httpsRedirectionEnabled": {},
  "tlsPolicyName": {}
}
```

Describes a load balancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|supportCode|object|false|none|none|
|createdAt|object|false|none|none|
|location|object|false|none|none|
|resourceType|object|false|none|none|
|tags|object|false|none|none|
|dnsName|object|false|none|none|
|state|object|false|none|none|
|protocol|object|false|none|none|
|publicPorts|object|false|none|none|
|healthCheckPath|object|false|none|none|
|instancePort|object|false|none|none|
|instanceHealthSummary|object|false|none|none|
|tlsCertificateSummaries|object|false|none|none|
|configurationOptions|object|false|none|none|
|ipAddressType|object|false|none|none|
|httpsRedirectionEnabled|object|false|none|none|
|tlsPolicyName|object|false|none|none|

<h2 id="tocS_LoadBalancerTlsCertificateList">LoadBalancerTlsCertificateList</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertlscertificatelist"></a>
<a id="schema_LoadBalancerTlsCertificateList"></a>
<a id="tocSloadbalancertlscertificatelist"></a>
<a id="tocsloadbalancertlscertificatelist"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "loadBalancerName": {},
    "isAttached": {},
    "status": {},
    "domainName": {},
    "domainValidationRecords": {},
    "failureReason": {},
    "issuedAt": {},
    "issuer": {},
    "keyAlgorithm": {},
    "notAfter": {},
    "notBefore": {},
    "renewalSummary": {
      "renewalStatus": {},
      "domainValidationOptions": {}
    },
    "revocationReason": {},
    "revokedAt": {},
    "serial": {},
    "signatureAlgorithm": {},
    "subject": {},
    "subjectAlternativeNames": {}
  }
]
```

<h2 id="tocS_LoadBalancerTlsPolicyList">LoadBalancerTlsPolicyList</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertlspolicylist"></a>
<a id="schema_LoadBalancerTlsPolicyList"></a>
<a id="tocSloadbalancertlspolicylist"></a>
<a id="tocsloadbalancertlspolicylist"></a>

```json
[
  {
    "name": {},
    "isDefault": {},
    "description": {},
    "protocols": {},
    "ciphers": {}
  }
]
```

<h2 id="tocS_LoadBalancerList">LoadBalancerList</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerlist"></a>
<a id="schema_LoadBalancerList"></a>
<a id="tocSloadbalancerlist"></a>
<a id="tocsloadbalancerlist"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "dnsName": {},
    "state": {},
    "protocol": {},
    "publicPorts": {},
    "healthCheckPath": {},
    "instancePort": {},
    "instanceHealthSummary": {},
    "tlsCertificateSummaries": {},
    "configurationOptions": {
      "property1": "string",
      "property2": "string"
    },
    "ipAddressType": {},
    "httpsRedirectionEnabled": {},
    "tlsPolicyName": {}
  }
]
```

<h2 id="tocS_RegionList">RegionList</h2>
<!-- backwards compatibility -->
<a id="schemaregionlist"></a>
<a id="schema_RegionList"></a>
<a id="tocSregionlist"></a>
<a id="tocsregionlist"></a>

```json
[
  {
    "continentCode": {},
    "description": {},
    "displayName": {},
    "name": {},
    "availabilityZones": {},
    "relationalDatabaseAvailabilityZones": {}
  }
]
```

<h2 id="tocS_RelationalDatabaseBlueprintList">RelationalDatabaseBlueprintList</h2>
<!-- backwards compatibility -->
<a id="schemarelationaldatabaseblueprintlist"></a>
<a id="schema_RelationalDatabaseBlueprintList"></a>
<a id="tocSrelationaldatabaseblueprintlist"></a>
<a id="tocsrelationaldatabaseblueprintlist"></a>

```json
[
  {
    "blueprintId": {},
    "engine": {},
    "engineVersion": {},
    "engineDescription": {},
    "engineVersionDescription": {},
    "isEngineDefault": {}
  }
]
```

<h2 id="tocS_RelationalDatabaseBundleList">RelationalDatabaseBundleList</h2>
<!-- backwards compatibility -->
<a id="schemarelationaldatabasebundlelist"></a>
<a id="schema_RelationalDatabaseBundleList"></a>
<a id="tocSrelationaldatabasebundlelist"></a>
<a id="tocsrelationaldatabasebundlelist"></a>

```json
[
  {
    "bundleId": {},
    "name": {},
    "price": {},
    "ramSizeInGb": {},
    "diskSizeInGb": {},
    "transferPerMonthInGb": {},
    "cpuCount": {},
    "isEncrypted": {},
    "isActive": {}
  }
]
```

<h2 id="tocS_RelationalDatabaseEventList">RelationalDatabaseEventList</h2>
<!-- backwards compatibility -->
<a id="schemarelationaldatabaseeventlist"></a>
<a id="schema_RelationalDatabaseEventList"></a>
<a id="tocSrelationaldatabaseeventlist"></a>
<a id="tocsrelationaldatabaseeventlist"></a>

```json
[
  {
    "resource": {},
    "createdAt": {},
    "message": {},
    "eventCategories": {}
  }
]
```

<h2 id="tocS_LogEventList">LogEventList</h2>
<!-- backwards compatibility -->
<a id="schemalogeventlist"></a>
<a id="schema_LogEventList"></a>
<a id="tocSlogeventlist"></a>
<a id="tocslogeventlist"></a>

```json
[
  {
    "createdAt": {},
    "message": {}
  }
]
```

<h2 id="tocS_RelationalDatabasePasswordVersion">RelationalDatabasePasswordVersion</h2>
<!-- backwards compatibility -->
<a id="schemarelationaldatabasepasswordversion"></a>
<a id="schema_RelationalDatabasePasswordVersion"></a>
<a id="tocSrelationaldatabasepasswordversion"></a>
<a id="tocsrelationaldatabasepasswordversion"></a>

```json
"CURRENT"
```

<h2 id="tocS_RelationalDatabaseMetricName">RelationalDatabaseMetricName</h2>
<!-- backwards compatibility -->
<a id="schemarelationaldatabasemetricname"></a>
<a id="schema_RelationalDatabaseMetricName"></a>
<a id="tocSrelationaldatabasemetricname"></a>
<a id="tocsrelationaldatabasemetricname"></a>

```json
"CPUUtilization"
```

<h2 id="tocS_RelationalDatabaseParameterList">RelationalDatabaseParameterList</h2>
<!-- backwards compatibility -->
<a id="schemarelationaldatabaseparameterlist"></a>
<a id="schema_RelationalDatabaseParameterList"></a>
<a id="tocSrelationaldatabaseparameterlist"></a>
<a id="tocsrelationaldatabaseparameterlist"></a>

```json
[
  {
    "allowedValues": {},
    "applyMethod": {},
    "applyType": {},
    "dataType": {},
    "description": {},
    "isModifiable": {},
    "parameterName": {},
    "parameterValue": {}
  }
]
```

<h2 id="tocS_RelationalDatabase">RelationalDatabase</h2>
<!-- backwards compatibility -->
<a id="schemarelationaldatabase"></a>
<a id="schema_RelationalDatabase"></a>
<a id="tocSrelationaldatabase"></a>
<a id="tocsrelationaldatabase"></a>

```json
{
  "name": {},
  "arn": {},
  "supportCode": {},
  "createdAt": {},
  "location": {
    "availabilityZone": {},
    "regionName": {}
  },
  "resourceType": {},
  "tags": {},
  "relationalDatabaseBlueprintId": {},
  "relationalDatabaseBundleId": {},
  "masterDatabaseName": {},
  "hardware": {
    "cpuCount": {},
    "diskSizeInGb": {},
    "ramSizeInGb": {}
  },
  "state": {},
  "secondaryAvailabilityZone": {},
  "backupRetentionEnabled": {},
  "pendingModifiedValues": {
    "masterUserPassword": {},
    "engineVersion": {},
    "backupRetentionEnabled": {}
  },
  "engine": {},
  "engineVersion": {},
  "latestRestorableTime": {},
  "masterUsername": {},
  "parameterApplyStatus": {},
  "preferredBackupWindow": {},
  "preferredMaintenanceWindow": {},
  "publiclyAccessible": {},
  "masterEndpoint": {
    "port": {},
    "address": {}
  },
  "pendingMaintenanceActions": {},
  "caCertificateIdentifier": {}
}
```

Describes a database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|supportCode|object|false|none|none|
|createdAt|object|false|none|none|
|location|object|false|none|none|
|resourceType|object|false|none|none|
|tags|object|false|none|none|
|relationalDatabaseBlueprintId|object|false|none|none|
|relationalDatabaseBundleId|object|false|none|none|
|masterDatabaseName|object|false|none|none|
|hardware|object|false|none|none|
|state|object|false|none|none|
|secondaryAvailabilityZone|object|false|none|none|
|backupRetentionEnabled|object|false|none|none|
|pendingModifiedValues|object|false|none|none|
|engine|object|false|none|none|
|engineVersion|object|false|none|none|
|latestRestorableTime|object|false|none|none|
|masterUsername|object|false|none|none|
|parameterApplyStatus|object|false|none|none|
|preferredBackupWindow|object|false|none|none|
|preferredMaintenanceWindow|object|false|none|none|
|publiclyAccessible|object|false|none|none|
|masterEndpoint|object|false|none|none|
|pendingMaintenanceActions|object|false|none|none|
|caCertificateIdentifier|object|false|none|none|

<h2 id="tocS_RelationalDatabaseSnapshot">RelationalDatabaseSnapshot</h2>
<!-- backwards compatibility -->
<a id="schemarelationaldatabasesnapshot"></a>
<a id="schema_RelationalDatabaseSnapshot"></a>
<a id="tocSrelationaldatabasesnapshot"></a>
<a id="tocsrelationaldatabasesnapshot"></a>

```json
{
  "name": {},
  "arn": {},
  "supportCode": {},
  "createdAt": {},
  "location": {
    "availabilityZone": {},
    "regionName": {}
  },
  "resourceType": {},
  "tags": {},
  "engine": {},
  "engineVersion": {},
  "sizeInGb": {},
  "state": {},
  "fromRelationalDatabaseName": {},
  "fromRelationalDatabaseArn": {},
  "fromRelationalDatabaseBundleId": {},
  "fromRelationalDatabaseBlueprintId": {}
}
```

Describes a database snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|supportCode|object|false|none|none|
|createdAt|object|false|none|none|
|location|object|false|none|none|
|resourceType|object|false|none|none|
|tags|object|false|none|none|
|engine|object|false|none|none|
|engineVersion|object|false|none|none|
|sizeInGb|object|false|none|none|
|state|object|false|none|none|
|fromRelationalDatabaseName|object|false|none|none|
|fromRelationalDatabaseArn|object|false|none|none|
|fromRelationalDatabaseBundleId|object|false|none|none|
|fromRelationalDatabaseBlueprintId|object|false|none|none|

<h2 id="tocS_RelationalDatabaseSnapshotList">RelationalDatabaseSnapshotList</h2>
<!-- backwards compatibility -->
<a id="schemarelationaldatabasesnapshotlist"></a>
<a id="schema_RelationalDatabaseSnapshotList"></a>
<a id="tocSrelationaldatabasesnapshotlist"></a>
<a id="tocsrelationaldatabasesnapshotlist"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "engine": {},
    "engineVersion": {},
    "sizeInGb": {},
    "state": {},
    "fromRelationalDatabaseName": {},
    "fromRelationalDatabaseArn": {},
    "fromRelationalDatabaseBundleId": {},
    "fromRelationalDatabaseBlueprintId": {}
  }
]
```

<h2 id="tocS_RelationalDatabaseList">RelationalDatabaseList</h2>
<!-- backwards compatibility -->
<a id="schemarelationaldatabaselist"></a>
<a id="schema_RelationalDatabaseList"></a>
<a id="tocSrelationaldatabaselist"></a>
<a id="tocsrelationaldatabaselist"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "tags": {},
    "relationalDatabaseBlueprintId": {},
    "relationalDatabaseBundleId": {},
    "masterDatabaseName": {},
    "hardware": {
      "cpuCount": {},
      "diskSizeInGb": {},
      "ramSizeInGb": {}
    },
    "state": {},
    "secondaryAvailabilityZone": {},
    "backupRetentionEnabled": {},
    "pendingModifiedValues": {
      "masterUserPassword": {},
      "engineVersion": {},
      "backupRetentionEnabled": {}
    },
    "engine": {},
    "engineVersion": {},
    "latestRestorableTime": {},
    "masterUsername": {},
    "parameterApplyStatus": {},
    "preferredBackupWindow": {},
    "preferredMaintenanceWindow": {},
    "publiclyAccessible": {},
    "masterEndpoint": {
      "port": {},
      "address": {}
    },
    "pendingMaintenanceActions": {},
    "caCertificateIdentifier": {}
  }
]
```

<h2 id="tocS_StaticIp">StaticIp</h2>
<!-- backwards compatibility -->
<a id="schemastaticip"></a>
<a id="schema_StaticIp"></a>
<a id="tocSstaticip"></a>
<a id="tocsstaticip"></a>

```json
{
  "name": {},
  "arn": {},
  "supportCode": {},
  "createdAt": {},
  "location": {
    "availabilityZone": {},
    "regionName": {}
  },
  "resourceType": {},
  "ipAddress": {},
  "attachedTo": {},
  "isAttached": {}
}
```

Describes a static IP.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|supportCode|object|false|none|none|
|createdAt|object|false|none|none|
|location|object|false|none|none|
|resourceType|object|false|none|none|
|ipAddress|object|false|none|none|
|attachedTo|object|false|none|none|
|isAttached|object|false|none|none|

<h2 id="tocS_StaticIpList">StaticIpList</h2>
<!-- backwards compatibility -->
<a id="schemastaticiplist"></a>
<a id="schema_StaticIpList"></a>
<a id="tocSstaticiplist"></a>
<a id="tocsstaticiplist"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "supportCode": {},
    "createdAt": {},
    "location": {
      "availabilityZone": {},
      "regionName": {}
    },
    "resourceType": {},
    "ipAddress": {},
    "attachedTo": {},
    "isAttached": {}
  }
]
```

<h2 id="tocS_HeaderEnum">HeaderEnum</h2>
<!-- backwards compatibility -->
<a id="schemaheaderenum"></a>
<a id="schema_HeaderEnum"></a>
<a id="tocSheaderenum"></a>
<a id="tocsheaderenum"></a>

```json
"Accept"
```

<h2 id="tocS_HeaderForwardList">HeaderForwardList</h2>
<!-- backwards compatibility -->
<a id="schemaheaderforwardlist"></a>
<a id="schema_HeaderForwardList"></a>
<a id="tocSheaderforwardlist"></a>
<a id="tocsheaderforwardlist"></a>

```json
[
  "Accept"
]
```

<h2 id="tocS_HostKeyAttributes">HostKeyAttributes</h2>
<!-- backwards compatibility -->
<a id="schemahostkeyattributes"></a>
<a id="schema_HostKeyAttributes"></a>
<a id="tocShostkeyattributes"></a>
<a id="tocshostkeyattributes"></a>

```json
{
  "algorithm": {},
  "publicKey": {},
  "witnessedAt": {},
  "fingerprintSHA1": {},
  "fingerprintSHA256": {},
  "notValidBefore": {},
  "notValidAfter": {}
}
```

Describes the public SSH host keys or the RDP certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|object|false|none|none|
|publicKey|object|false|none|none|
|witnessedAt|object|false|none|none|
|fingerprintSHA1|object|false|none|none|
|fingerprintSHA256|object|false|none|none|
|notValidBefore|object|false|none|none|
|notValidAfter|object|false|none|none|

<h2 id="tocS_HostKeysList">HostKeysList</h2>
<!-- backwards compatibility -->
<a id="schemahostkeyslist"></a>
<a id="schema_HostKeysList"></a>
<a id="tocShostkeyslist"></a>
<a id="tocshostkeyslist"></a>

```json
[
  {
    "algorithm": {},
    "publicKey": {},
    "witnessedAt": {},
    "fingerprintSHA1": {},
    "fingerprintSHA256": {},
    "notValidBefore": {},
    "notValidAfter": {}
  }
]
```

<h2 id="tocS_HttpEndpoint">HttpEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpoint"></a>
<a id="schema_HttpEndpoint"></a>
<a id="tocShttpendpoint"></a>
<a id="tocshttpendpoint"></a>

```json
"disabled"
```

<h2 id="tocS_HttpProtocolIpv6">HttpProtocolIpv6</h2>
<!-- backwards compatibility -->
<a id="schemahttpprotocolipv6"></a>
<a id="schema_HttpProtocolIpv6"></a>
<a id="tocShttpprotocolipv6"></a>
<a id="tocshttpprotocolipv6"></a>

```json
"disabled"
```

<h2 id="tocS_HttpTokens">HttpTokens</h2>
<!-- backwards compatibility -->
<a id="schemahttptokens"></a>
<a id="schema_HttpTokens"></a>
<a id="tocShttptokens"></a>
<a id="tocshttptokens"></a>

```json
"optional"
```

<h2 id="tocS_OriginProtocolPolicyEnum">OriginProtocolPolicyEnum</h2>
<!-- backwards compatibility -->
<a id="schemaoriginprotocolpolicyenum"></a>
<a id="schema_OriginProtocolPolicyEnum"></a>
<a id="tocSoriginprotocolpolicyenum"></a>
<a id="tocsoriginprotocolpolicyenum"></a>

```json
"http-only"
```

<h2 id="tocS_IpAddress">IpAddress</h2>
<!-- backwards compatibility -->
<a id="schemaipaddress"></a>
<a id="schema_IpAddress"></a>
<a id="tocSipaddress"></a>
<a id="tocsipaddress"></a>

```json
"string"
```

<h2 id="tocS_Ipv6AddressList">Ipv6AddressList</h2>
<!-- backwards compatibility -->
<a id="schemaipv6addresslist"></a>
<a id="schema_Ipv6AddressList"></a>
<a id="tocSipv6addresslist"></a>
<a id="tocsipv6addresslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_InstanceHardware">InstanceHardware</h2>
<!-- backwards compatibility -->
<a id="schemainstancehardware"></a>
<a id="schema_InstanceHardware"></a>
<a id="tocSinstancehardware"></a>
<a id="tocsinstancehardware"></a>

```json
{
  "cpuCount": {},
  "disks": {},
  "ramSizeInGb": {}
}
```

Describes the hardware for the instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpuCount|object|false|none|none|
|disks|object|false|none|none|
|ramSizeInGb|object|false|none|none|

<h2 id="tocS_InstanceNetworking">InstanceNetworking</h2>
<!-- backwards compatibility -->
<a id="schemainstancenetworking"></a>
<a id="schema_InstanceNetworking"></a>
<a id="tocSinstancenetworking"></a>
<a id="tocsinstancenetworking"></a>

```json
{
  "monthlyTransfer": {
    "gbPerMonthAllocated": {}
  },
  "ports": {}
}
```

Describes monthly data transfer rates and port information for an instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|monthlyTransfer|object|false|none|none|
|ports|object|false|none|none|

<h2 id="tocS_InstanceMetadataOptions">InstanceMetadataOptions</h2>
<!-- backwards compatibility -->
<a id="schemainstancemetadataoptions"></a>
<a id="schema_InstanceMetadataOptions"></a>
<a id="tocSinstancemetadataoptions"></a>
<a id="tocsinstancemetadataoptions"></a>

```json
{
  "state": {},
  "httpTokens": {},
  "httpEndpoint": {},
  "httpPutResponseHopLimit": {},
  "httpProtocolIpv6": {}
}
```

The metadata options for the instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|object|false|none|none|
|httpTokens|object|false|none|none|
|httpEndpoint|object|false|none|none|
|httpPutResponseHopLimit|object|false|none|none|
|httpProtocolIpv6|object|false|none|none|

<h2 id="tocS_PasswordData">PasswordData</h2>
<!-- backwards compatibility -->
<a id="schemapassworddata"></a>
<a id="schema_PasswordData"></a>
<a id="tocSpassworddata"></a>
<a id="tocspassworddata"></a>

```json
{
  "ciphertext": {},
  "keyPairName": {}
}
```

The password data for the Windows Server-based instance, including the ciphertext and the key pair name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ciphertext|object|false|none|none|
|keyPairName|object|false|none|none|

<h2 id="tocS_PortInfoSourceType">PortInfoSourceType</h2>
<!-- backwards compatibility -->
<a id="schemaportinfosourcetype"></a>
<a id="schema_PortInfoSourceType"></a>
<a id="tocSportinfosourcetype"></a>
<a id="tocsportinfosourcetype"></a>

```json
"DEFAULT"
```

<h2 id="tocS_InstanceEntry">InstanceEntry</h2>
<!-- backwards compatibility -->
<a id="schemainstanceentry"></a>
<a id="schema_InstanceEntry"></a>
<a id="tocSinstanceentry"></a>
<a id="tocsinstanceentry"></a>

```json
{
  "sourceName": {},
  "instanceType": {},
  "portInfoSource": {},
  "userData": {},
  "availabilityZone": {}
}
```

Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the <code>create cloud formation stack</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceName|object|true|none|none|
|instanceType|object|true|none|none|
|portInfoSource|object|true|none|none|
|userData|object|false|none|none|
|availabilityZone|object|true|none|none|

<h2 id="tocS_InstanceHealthReason">InstanceHealthReason</h2>
<!-- backwards compatibility -->
<a id="schemainstancehealthreason"></a>
<a id="schema_InstanceHealthReason"></a>
<a id="tocSinstancehealthreason"></a>
<a id="tocsinstancehealthreason"></a>

```json
"Lb.RegistrationInProgress"
```

<h2 id="tocS_InstanceHealthState">InstanceHealthState</h2>
<!-- backwards compatibility -->
<a id="schemainstancehealthstate"></a>
<a id="schema_InstanceHealthState"></a>
<a id="tocSinstancehealthstate"></a>
<a id="tocsinstancehealthstate"></a>

```json
"initial"
```

<h2 id="tocS_InstanceHealthSummary">InstanceHealthSummary</h2>
<!-- backwards compatibility -->
<a id="schemainstancehealthsummary"></a>
<a id="schema_InstanceHealthSummary"></a>
<a id="tocSinstancehealthsummary"></a>
<a id="tocsinstancehealthsummary"></a>

```json
{
  "instanceName": {},
  "instanceHealth": {},
  "instanceHealthReason": {}
}
```

Describes information about the health of the instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceName|object|false|none|none|
|instanceHealth|object|false|none|none|
|instanceHealthReason|object|false|none|none|

<h2 id="tocS_InstanceHealthSummaryList">InstanceHealthSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemainstancehealthsummarylist"></a>
<a id="schema_InstanceHealthSummaryList"></a>
<a id="tocSinstancehealthsummarylist"></a>
<a id="tocsinstancehealthsummarylist"></a>

```json
[
  {
    "instanceName": {},
    "instanceHealth": {},
    "instanceHealthReason": {}
  }
]
```

<h2 id="tocS_InstanceMetadataState">InstanceMetadataState</h2>
<!-- backwards compatibility -->
<a id="schemainstancemetadatastate"></a>
<a id="schema_InstanceMetadataState"></a>
<a id="tocSinstancemetadatastate"></a>
<a id="tocsinstancemetadatastate"></a>

```json
"pending"
```

<h2 id="tocS_MonthlyTransfer">MonthlyTransfer</h2>
<!-- backwards compatibility -->
<a id="schemamonthlytransfer"></a>
<a id="schema_MonthlyTransfer"></a>
<a id="tocSmonthlytransfer"></a>
<a id="tocsmonthlytransfer"></a>

```json
{
  "gbPerMonthAllocated": {}
}
```

Describes the monthly data transfer in and out of your virtual private server (or <i>instance</i>).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gbPerMonthAllocated|object|false|none|none|

<h2 id="tocS_InstancePortInfoList">InstancePortInfoList</h2>
<!-- backwards compatibility -->
<a id="schemainstanceportinfolist"></a>
<a id="schema_InstancePortInfoList"></a>
<a id="tocSinstanceportinfolist"></a>
<a id="tocsinstanceportinfolist"></a>

```json
[
  {
    "fromPort": {},
    "toPort": {},
    "protocol": {},
    "accessFrom": {},
    "accessType": {},
    "commonName": {},
    "accessDirection": {},
    "cidrs": {},
    "ipv6Cidrs": {},
    "cidrListAliases": {}
  }
]
```

<h2 id="tocS_NetworkProtocol">NetworkProtocol</h2>
<!-- backwards compatibility -->
<a id="schemanetworkprotocol"></a>
<a id="schema_NetworkProtocol"></a>
<a id="tocSnetworkprotocol"></a>
<a id="tocsnetworkprotocol"></a>

```json
"tcp"
```

<h2 id="tocS_PortAccessType">PortAccessType</h2>
<!-- backwards compatibility -->
<a id="schemaportaccesstype"></a>
<a id="schema_PortAccessType"></a>
<a id="tocSportaccesstype"></a>
<a id="tocsportaccesstype"></a>

```json
"Public"
```

<h2 id="tocS_InstancePortInfo">InstancePortInfo</h2>
<!-- backwards compatibility -->
<a id="schemainstanceportinfo"></a>
<a id="schema_InstancePortInfo"></a>
<a id="tocSinstanceportinfo"></a>
<a id="tocsinstanceportinfo"></a>

```json
{
  "fromPort": {},
  "toPort": {},
  "protocol": {},
  "accessFrom": {},
  "accessType": {},
  "commonName": {},
  "accessDirection": {},
  "cidrs": {},
  "ipv6Cidrs": {},
  "cidrListAliases": {}
}
```

Describes information about ports for an Amazon Lightsail instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromPort|object|false|none|none|
|toPort|object|false|none|none|
|protocol|object|false|none|none|
|accessFrom|object|false|none|none|
|accessType|object|false|none|none|
|commonName|object|false|none|none|
|accessDirection|object|false|none|none|
|cidrs|object|false|none|none|
|ipv6Cidrs|object|false|none|none|
|cidrListAliases|object|false|none|none|

<h2 id="tocS_PortState">PortState</h2>
<!-- backwards compatibility -->
<a id="schemaportstate"></a>
<a id="schema_PortState"></a>
<a id="tocSportstate"></a>
<a id="tocsportstate"></a>

```json
"open"
```

<h2 id="tocS_InstancePortState">InstancePortState</h2>
<!-- backwards compatibility -->
<a id="schemainstanceportstate"></a>
<a id="schema_InstancePortState"></a>
<a id="tocSinstanceportstate"></a>
<a id="tocsinstanceportstate"></a>

```json
{
  "fromPort": {},
  "toPort": {},
  "protocol": {},
  "state": {},
  "cidrs": {},
  "ipv6Cidrs": {},
  "cidrListAliases": {}
}
```

Describes open ports on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromPort|object|false|none|none|
|toPort|object|false|none|none|
|protocol|object|false|none|none|
|state|object|false|none|none|
|cidrs|object|false|none|none|
|ipv6Cidrs|object|false|none|none|
|cidrListAliases|object|false|none|none|

<h2 id="tocS_InstanceSnapshotState">InstanceSnapshotState</h2>
<!-- backwards compatibility -->
<a id="schemainstancesnapshotstate"></a>
<a id="schema_InstanceSnapshotState"></a>
<a id="tocSinstancesnapshotstate"></a>
<a id="tocsinstancesnapshotstate"></a>

```json
"pending"
```

<h2 id="tocS_Ipv6Address">Ipv6Address</h2>
<!-- backwards compatibility -->
<a id="schemaipv6address"></a>
<a id="schema_Ipv6Address"></a>
<a id="tocSipv6address"></a>
<a id="tocsipv6address"></a>

```json
"string"
```

<h2 id="tocS_Origin">Origin</h2>
<!-- backwards compatibility -->
<a id="schemaorigin"></a>
<a id="schema_Origin"></a>
<a id="tocSorigin"></a>
<a id="tocsorigin"></a>

```json
{
  "name": {},
  "resourceType": {},
  "regionName": {},
  "protocolPolicy": {}
}
```

<p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>An origin can be a Lightsail instance, bucket, or load balancer. A distribution pulls content from an origin, caches it, and serves it to viewers via a worldwide network of edge servers.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|resourceType|object|false|none|none|
|regionName|object|false|none|none|
|protocolPolicy|object|false|none|none|

<h2 id="tocS_LoadBalancerState">LoadBalancerState</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerstate"></a>
<a id="schema_LoadBalancerState"></a>
<a id="tocSloadbalancerstate"></a>
<a id="tocsloadbalancerstate"></a>

```json
"active"
```

<h2 id="tocS_LoadBalancerProtocol">LoadBalancerProtocol</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerprotocol"></a>
<a id="schema_LoadBalancerProtocol"></a>
<a id="tocSloadbalancerprotocol"></a>
<a id="tocsloadbalancerprotocol"></a>

```json
"HTTP_HTTPS"
```

<h2 id="tocS_PortList">PortList</h2>
<!-- backwards compatibility -->
<a id="schemaportlist"></a>
<a id="schema_PortList"></a>
<a id="tocSportlist"></a>
<a id="tocsportlist"></a>

```json
[
  -1
]
```

<h2 id="tocS_LoadBalancerTlsCertificateSummaryList">LoadBalancerTlsCertificateSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertlscertificatesummarylist"></a>
<a id="schema_LoadBalancerTlsCertificateSummaryList"></a>
<a id="tocSloadbalancertlscertificatesummarylist"></a>
<a id="tocsloadbalancertlscertificatesummarylist"></a>

```json
[
  {
    "name": {},
    "isAttached": {}
  }
]
```

<h2 id="tocS_LoadBalancerConfigurationOptions">LoadBalancerConfigurationOptions</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerconfigurationoptions"></a>
<a id="schema_LoadBalancerConfigurationOptions"></a>
<a id="tocSloadbalancerconfigurationoptions"></a>
<a id="tocsloadbalancerconfigurationoptions"></a>

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

<h2 id="tocS_LoadBalancerAttributeName">LoadBalancerAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerattributename"></a>
<a id="schema_LoadBalancerAttributeName"></a>
<a id="tocSloadbalancerattributename"></a>
<a id="tocsloadbalancerattributename"></a>

```json
"HealthCheckPath"
```

<h2 id="tocS_LoadBalancerTlsCertificateStatus">LoadBalancerTlsCertificateStatus</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertlscertificatestatus"></a>
<a id="schema_LoadBalancerTlsCertificateStatus"></a>
<a id="tocSloadbalancertlscertificatestatus"></a>
<a id="tocsloadbalancertlscertificatestatus"></a>

```json
"PENDING_VALIDATION"
```

<h2 id="tocS_LoadBalancerTlsCertificateDomainValidationRecordList">LoadBalancerTlsCertificateDomainValidationRecordList</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertlscertificatedomainvalidationrecordlist"></a>
<a id="schema_LoadBalancerTlsCertificateDomainValidationRecordList"></a>
<a id="tocSloadbalancertlscertificatedomainvalidationrecordlist"></a>
<a id="tocsloadbalancertlscertificatedomainvalidationrecordlist"></a>

```json
[
  {
    "name": {},
    "type": {},
    "value": {},
    "validationStatus": {},
    "domainName": {},
    "dnsRecordCreationState": {
      "code": {},
      "message": {}
    }
  }
]
```

<h2 id="tocS_LoadBalancerTlsCertificateFailureReason">LoadBalancerTlsCertificateFailureReason</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertlscertificatefailurereason"></a>
<a id="schema_LoadBalancerTlsCertificateFailureReason"></a>
<a id="tocSloadbalancertlscertificatefailurereason"></a>
<a id="tocsloadbalancertlscertificatefailurereason"></a>

```json
"NO_AVAILABLE_CONTACTS"
```

<h2 id="tocS_LoadBalancerTlsCertificateRenewalSummary">LoadBalancerTlsCertificateRenewalSummary</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertlscertificaterenewalsummary"></a>
<a id="schema_LoadBalancerTlsCertificateRenewalSummary"></a>
<a id="tocSloadbalancertlscertificaterenewalsummary"></a>
<a id="tocsloadbalancertlscertificaterenewalsummary"></a>

```json
{
  "renewalStatus": {},
  "domainValidationOptions": {}
}
```

<p>Contains information about the status of Lightsail's managed renewal for the certificate.</p> <p>The renewal status of the certificate.</p> <p>The following renewal status are possible:</p> <ul> <li> <p> <b> <code>PendingAutoRenewal</code> </b> - Lightsail is attempting to automatically validate the domain names in the certificate. No further action is required. </p> </li> <li> <p> <b> <code>PendingValidation</code> </b> - Lightsail couldn't automatically validate one or more domain names in the certificate. You must take action to validate these domain names or the certificate won't be renewed. If you used DNS validation, check to make sure your certificate's domain validation records exist in your domain's DNS, and that your certificate remains in use.</p> </li> <li> <p> <b> <code>Success</code> </b> - All domain names in the certificate are validated, and Lightsail renewed the certificate. No further action is required. </p> </li> <li> <p> <b> <code>Failed</code> </b> - One or more domain names were not validated before the certificate expired, and Lightsail did not renew the certificate. You can request a new certificate using the <code>CreateCertificate</code> action.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|renewalStatus|object|false|none|none|
|domainValidationOptions|object|false|none|none|

<h2 id="tocS_LoadBalancerTlsCertificateRevocationReason">LoadBalancerTlsCertificateRevocationReason</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertlscertificaterevocationreason"></a>
<a id="schema_LoadBalancerTlsCertificateRevocationReason"></a>
<a id="tocSloadbalancertlscertificaterevocationreason"></a>
<a id="tocsloadbalancertlscertificaterevocationreason"></a>

```json
"UNSPECIFIED"
```

<h2 id="tocS_LoadBalancerTlsCertificate">LoadBalancerTlsCertificate</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertlscertificate"></a>
<a id="schema_LoadBalancerTlsCertificate"></a>
<a id="tocSloadbalancertlscertificate"></a>
<a id="tocsloadbalancertlscertificate"></a>

```json
{
  "name": {},
  "arn": {},
  "supportCode": {},
  "createdAt": {},
  "location": {
    "availabilityZone": {},
    "regionName": {}
  },
  "resourceType": {},
  "tags": {},
  "loadBalancerName": {},
  "isAttached": {},
  "status": {},
  "domainName": {},
  "domainValidationRecords": {},
  "failureReason": {},
  "issuedAt": {},
  "issuer": {},
  "keyAlgorithm": {},
  "notAfter": {},
  "notBefore": {},
  "renewalSummary": {
    "renewalStatus": {},
    "domainValidationOptions": {}
  },
  "revocationReason": {},
  "revokedAt": {},
  "serial": {},
  "signatureAlgorithm": {},
  "subject": {},
  "subjectAlternativeNames": {}
}
```

<p>Describes a load balancer SSL/TLS certificate.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|supportCode|object|false|none|none|
|createdAt|object|false|none|none|
|location|object|false|none|none|
|resourceType|object|false|none|none|
|tags|object|false|none|none|
|loadBalancerName|object|false|none|none|
|isAttached|object|false|none|none|
|status|object|false|none|none|
|domainName|object|false|none|none|
|domainValidationRecords|object|false|none|none|
|failureReason|object|false|none|none|
|issuedAt|object|false|none|none|
|issuer|object|false|none|none|
|keyAlgorithm|object|false|none|none|
|notAfter|object|false|none|none|
|notBefore|object|false|none|none|
|renewalSummary|object|false|none|none|
|revocationReason|object|false|none|none|
|revokedAt|object|false|none|none|
|serial|object|false|none|none|
|signatureAlgorithm|object|false|none|none|
|subject|object|false|none|none|
|subjectAlternativeNames|object|false|none|none|

<h2 id="tocS_LoadBalancerTlsCertificateDnsRecordCreationStateCode">LoadBalancerTlsCertificateDnsRecordCreationStateCode</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertlscertificatednsrecordcreationstatecode"></a>
<a id="schema_LoadBalancerTlsCertificateDnsRecordCreationStateCode"></a>
<a id="tocSloadbalancertlscertificatednsrecordcreationstatecode"></a>
<a id="tocsloadbalancertlscertificatednsrecordcreationstatecode"></a>

```json
"SUCCEEDED"
```

<h2 id="tocS_LoadBalancerTlsCertificateDnsRecordCreationState">LoadBalancerTlsCertificateDnsRecordCreationState</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertlscertificatednsrecordcreationstate"></a>
<a id="schema_LoadBalancerTlsCertificateDnsRecordCreationState"></a>
<a id="tocSloadbalancertlscertificatednsrecordcreationstate"></a>
<a id="tocsloadbalancertlscertificatednsrecordcreationstate"></a>

```json
{
  "code": {},
  "message": {}
}
```

An object that describes the state of the canonical name (CNAME) records that are automatically added by Lightsail to the DNS of the domain to validate domain ownership.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_LoadBalancerTlsCertificateDomainStatus">LoadBalancerTlsCertificateDomainStatus</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertlscertificatedomainstatus"></a>
<a id="schema_LoadBalancerTlsCertificateDomainStatus"></a>
<a id="tocSloadbalancertlscertificatedomainstatus"></a>
<a id="tocsloadbalancertlscertificatedomainstatus"></a>

```json
"PENDING_VALIDATION"
```

<h2 id="tocS_LoadBalancerTlsCertificateDomainValidationOption">LoadBalancerTlsCertificateDomainValidationOption</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertlscertificatedomainvalidationoption"></a>
<a id="schema_LoadBalancerTlsCertificateDomainValidationOption"></a>
<a id="tocSloadbalancertlscertificatedomainvalidationoption"></a>
<a id="tocsloadbalancertlscertificatedomainvalidationoption"></a>

```json
{
  "domainName": {},
  "validationStatus": {}
}
```

Contains information about the domain names on an SSL/TLS certificate that you will use to validate domain ownership.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|false|none|none|
|validationStatus|object|false|none|none|

<h2 id="tocS_LoadBalancerTlsCertificateDomainValidationOptionList">LoadBalancerTlsCertificateDomainValidationOptionList</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertlscertificatedomainvalidationoptionlist"></a>
<a id="schema_LoadBalancerTlsCertificateDomainValidationOptionList"></a>
<a id="tocSloadbalancertlscertificatedomainvalidationoptionlist"></a>
<a id="tocsloadbalancertlscertificatedomainvalidationoptionlist"></a>

```json
[
  {
    "domainName": {},
    "validationStatus": {}
  }
]
```

<h2 id="tocS_LoadBalancerTlsCertificateDomainValidationRecord">LoadBalancerTlsCertificateDomainValidationRecord</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertlscertificatedomainvalidationrecord"></a>
<a id="schema_LoadBalancerTlsCertificateDomainValidationRecord"></a>
<a id="tocSloadbalancertlscertificatedomainvalidationrecord"></a>
<a id="tocsloadbalancertlscertificatedomainvalidationrecord"></a>

```json
{
  "name": {},
  "type": {},
  "value": {},
  "validationStatus": {},
  "domainName": {},
  "dnsRecordCreationState": {
    "code": {},
    "message": {}
  }
}
```

Describes the validation record of each domain name in the SSL/TLS certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|type|object|false|none|none|
|value|object|false|none|none|
|validationStatus|object|false|none|none|
|domainName|object|false|none|none|
|dnsRecordCreationState|object|false|none|none|

<h2 id="tocS_LoadBalancerTlsCertificateRenewalStatus">LoadBalancerTlsCertificateRenewalStatus</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertlscertificaterenewalstatus"></a>
<a id="schema_LoadBalancerTlsCertificateRenewalStatus"></a>
<a id="tocSloadbalancertlscertificaterenewalstatus"></a>
<a id="tocsloadbalancertlscertificaterenewalstatus"></a>

```json
"PENDING_AUTO_RENEWAL"
```

<h2 id="tocS_LoadBalancerTlsCertificateSummary">LoadBalancerTlsCertificateSummary</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertlscertificatesummary"></a>
<a id="schema_LoadBalancerTlsCertificateSummary"></a>
<a id="tocSloadbalancertlscertificatesummary"></a>
<a id="tocsloadbalancertlscertificatesummary"></a>

```json
{
  "name": {},
  "isAttached": {}
}
```

Provides a summary of SSL/TLS certificate metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|isAttached|object|false|none|none|

<h2 id="tocS_LoadBalancerTlsPolicy">LoadBalancerTlsPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertlspolicy"></a>
<a id="schema_LoadBalancerTlsPolicy"></a>
<a id="tocSloadbalancertlspolicy"></a>
<a id="tocsloadbalancertlspolicy"></a>

```json
{
  "name": {},
  "isDefault": {},
  "description": {},
  "protocols": {},
  "ciphers": {}
}
```

<p>Describes the TLS security policies that are available for Lightsail load balancers.</p> <p>For more information about load balancer TLS security policies, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load balancers</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|isDefault|object|false|none|none|
|description|object|false|none|none|
|protocols|object|false|none|none|
|ciphers|object|false|none|none|

<h2 id="tocS_LogEvent">LogEvent</h2>
<!-- backwards compatibility -->
<a id="schemalogevent"></a>
<a id="schema_LogEvent"></a>
<a id="tocSlogevent"></a>
<a id="tocslogevent"></a>

```json
{
  "createdAt": {},
  "message": {}
}
```

Describes a database log event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_MetricDatapoint">MetricDatapoint</h2>
<!-- backwards compatibility -->
<a id="schemametricdatapoint"></a>
<a id="schema_MetricDatapoint"></a>
<a id="tocSmetricdatapoint"></a>
<a id="tocsmetricdatapoint"></a>

```json
{
  "average": {},
  "maximum": {},
  "minimum": {},
  "sampleCount": {},
  "sum": {},
  "timestamp": {},
  "unit": {}
}
```

Describes the metric data point.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|average|object|false|none|none|
|maximum|object|false|none|none|
|minimum|object|false|none|none|
|sampleCount|object|false|none|none|
|sum|object|false|none|none|
|timestamp|object|false|none|none|
|unit|object|false|none|none|

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_NameServersUpdateStateCode">NameServersUpdateStateCode</h2>
<!-- backwards compatibility -->
<a id="schemanameserversupdatestatecode"></a>
<a id="schema_NameServersUpdateStateCode"></a>
<a id="tocSnameserversupdatestatecode"></a>
<a id="tocsnameserversupdatestatecode"></a>

```json
"SUCCEEDED"
```

<h2 id="tocS_NameServersUpdateState">NameServersUpdateState</h2>
<!-- backwards compatibility -->
<a id="schemanameserversupdatestate"></a>
<a id="schema_NameServersUpdateState"></a>
<a id="tocSnameserversupdatestate"></a>
<a id="tocsnameserversupdatestate"></a>

```json
{
  "code": {},
  "message": {}
}
```

<p>Describes the state of the name server records update made by Amazon Lightsail to an Amazon Route 53 registered domain.</p> <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/understanding-dns-in-amazon-lightsail">DNS in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_OperationType">OperationType</h2>
<!-- backwards compatibility -->
<a id="schemaoperationtype"></a>
<a id="schema_OperationType"></a>
<a id="tocSoperationtype"></a>
<a id="tocsoperationtype"></a>

```json
"DeleteKnownHostKeys"
```

<h2 id="tocS_OperationStatus">OperationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaoperationstatus"></a>
<a id="schema_OperationStatus"></a>
<a id="tocSoperationstatus"></a>
<a id="tocsoperationstatus"></a>

```json
"NotStarted"
```

<h2 id="tocS_PendingMaintenanceAction">PendingMaintenanceAction</h2>
<!-- backwards compatibility -->
<a id="schemapendingmaintenanceaction"></a>
<a id="schema_PendingMaintenanceAction"></a>
<a id="tocSpendingmaintenanceaction"></a>
<a id="tocspendingmaintenanceaction"></a>

```json
{
  "action": {},
  "description": {},
  "currentApplyDate": {}
}
```

Describes a pending database maintenance action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|
|description|object|false|none|none|
|currentApplyDate|object|false|none|none|

<h2 id="tocS_PendingMaintenanceActionList">PendingMaintenanceActionList</h2>
<!-- backwards compatibility -->
<a id="schemapendingmaintenanceactionlist"></a>
<a id="schema_PendingMaintenanceActionList"></a>
<a id="tocSpendingmaintenanceactionlist"></a>
<a id="tocspendingmaintenanceactionlist"></a>

```json
[
  {
    "action": {},
    "description": {},
    "currentApplyDate": {}
  }
]
```

<h2 id="tocS_PendingModifiedRelationalDatabaseValues">PendingModifiedRelationalDatabaseValues</h2>
<!-- backwards compatibility -->
<a id="schemapendingmodifiedrelationaldatabasevalues"></a>
<a id="schema_PendingModifiedRelationalDatabaseValues"></a>
<a id="tocSpendingmodifiedrelationaldatabasevalues"></a>
<a id="tocspendingmodifiedrelationaldatabasevalues"></a>

```json
{
  "masterUserPassword": {},
  "engineVersion": {},
  "backupRetentionEnabled": {}
}
```

Describes a pending database value modification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|masterUserPassword|object|false|none|none|
|engineVersion|object|false|none|none|
|backupRetentionEnabled|object|false|none|none|

<h2 id="tocS_PortInfoList">PortInfoList</h2>
<!-- backwards compatibility -->
<a id="schemaportinfolist"></a>
<a id="schema_PortInfoList"></a>
<a id="tocSportinfolist"></a>
<a id="tocsportinfolist"></a>

```json
[
  {
    "fromPort": {},
    "toPort": {},
    "protocol": {},
    "cidrs": {},
    "ipv6Cidrs": {},
    "cidrListAliases": {}
  }
]
```

<h2 id="tocS_R53HostedZoneDeletionStateCode">R53HostedZoneDeletionStateCode</h2>
<!-- backwards compatibility -->
<a id="schemar53hostedzonedeletionstatecode"></a>
<a id="schema_R53HostedZoneDeletionStateCode"></a>
<a id="tocSr53hostedzonedeletionstatecode"></a>
<a id="tocsr53hostedzonedeletionstatecode"></a>

```json
"SUCCEEDED"
```

<h2 id="tocS_R53HostedZoneDeletionState">R53HostedZoneDeletionState</h2>
<!-- backwards compatibility -->
<a id="schemar53hostedzonedeletionstate"></a>
<a id="schema_R53HostedZoneDeletionState"></a>
<a id="tocSr53hostedzonedeletionstate"></a>
<a id="tocsr53hostedzonedeletionstate"></a>

```json
{
  "code": {},
  "message": {}
}
```

Describes the deletion state of an Amazon Route 53 hosted zone for a domain that is being automatically delegated to an Amazon Lightsail DNS zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
{
  "continentCode": {},
  "description": {},
  "displayName": {},
  "name": {},
  "availabilityZones": {},
  "relationalDatabaseAvailabilityZones": {}
}
```

Describes the Amazon Web Services Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|continentCode|object|false|none|none|
|description|object|false|none|none|
|displayName|object|false|none|none|
|name|object|false|none|none|
|availabilityZones|object|false|none|none|
|relationalDatabaseAvailabilityZones|object|false|none|none|

<h2 id="tocS_RelationalDatabaseHardware">RelationalDatabaseHardware</h2>
<!-- backwards compatibility -->
<a id="schemarelationaldatabasehardware"></a>
<a id="schema_RelationalDatabaseHardware"></a>
<a id="tocSrelationaldatabasehardware"></a>
<a id="tocsrelationaldatabasehardware"></a>

```json
{
  "cpuCount": {},
  "diskSizeInGb": {},
  "ramSizeInGb": {}
}
```

Describes the hardware of a database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpuCount|object|false|none|none|
|diskSizeInGb|object|false|none|none|
|ramSizeInGb|object|false|none|none|

<h2 id="tocS_RelationalDatabaseEndpoint">RelationalDatabaseEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemarelationaldatabaseendpoint"></a>
<a id="schema_RelationalDatabaseEndpoint"></a>
<a id="tocSrelationaldatabaseendpoint"></a>
<a id="tocsrelationaldatabaseendpoint"></a>

```json
{
  "port": {},
  "address": {}
}
```

Describes an endpoint for a database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|port|object|false|none|none|
|address|object|false|none|none|

<h2 id="tocS_RelationalDatabaseEngine">RelationalDatabaseEngine</h2>
<!-- backwards compatibility -->
<a id="schemarelationaldatabaseengine"></a>
<a id="schema_RelationalDatabaseEngine"></a>
<a id="tocSrelationaldatabaseengine"></a>
<a id="tocsrelationaldatabaseengine"></a>

```json
"mysql"
```

<h2 id="tocS_RelationalDatabaseBlueprint">RelationalDatabaseBlueprint</h2>
<!-- backwards compatibility -->
<a id="schemarelationaldatabaseblueprint"></a>
<a id="schema_RelationalDatabaseBlueprint"></a>
<a id="tocSrelationaldatabaseblueprint"></a>
<a id="tocsrelationaldatabaseblueprint"></a>

```json
{
  "blueprintId": {},
  "engine": {},
  "engineVersion": {},
  "engineDescription": {},
  "engineVersionDescription": {},
  "isEngineDefault": {}
}
```

Describes a database image, or blueprint. A blueprint describes the major engine version of a database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blueprintId|object|false|none|none|
|engine|object|false|none|none|
|engineVersion|object|false|none|none|
|engineDescription|object|false|none|none|
|engineVersionDescription|object|false|none|none|
|isEngineDefault|object|false|none|none|

<h2 id="tocS_RelationalDatabaseBundle">RelationalDatabaseBundle</h2>
<!-- backwards compatibility -->
<a id="schemarelationaldatabasebundle"></a>
<a id="schema_RelationalDatabaseBundle"></a>
<a id="tocSrelationaldatabasebundle"></a>
<a id="tocsrelationaldatabasebundle"></a>

```json
{
  "bundleId": {},
  "name": {},
  "price": {},
  "ramSizeInGb": {},
  "diskSizeInGb": {},
  "transferPerMonthInGb": {},
  "cpuCount": {},
  "isEncrypted": {},
  "isActive": {}
}
```

Describes a database bundle. A bundle describes the performance specifications of the database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundleId|object|false|none|none|
|name|object|false|none|none|
|price|object|false|none|none|
|ramSizeInGb|object|false|none|none|
|diskSizeInGb|object|false|none|none|
|transferPerMonthInGb|object|false|none|none|
|cpuCount|object|false|none|none|
|isEncrypted|object|false|none|none|
|isActive|object|false|none|none|

<h2 id="tocS_RelationalDatabaseEvent">RelationalDatabaseEvent</h2>
<!-- backwards compatibility -->
<a id="schemarelationaldatabaseevent"></a>
<a id="schema_RelationalDatabaseEvent"></a>
<a id="tocSrelationaldatabaseevent"></a>
<a id="tocsrelationaldatabaseevent"></a>

```json
{
  "resource": {},
  "createdAt": {},
  "message": {},
  "eventCategories": {}
}
```

Describes an event for a database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resource|object|false|none|none|
|createdAt|object|false|none|none|
|message|object|false|none|none|
|eventCategories|object|false|none|none|

<h2 id="tocS_RelationalDatabaseParameter">RelationalDatabaseParameter</h2>
<!-- backwards compatibility -->
<a id="schemarelationaldatabaseparameter"></a>
<a id="schema_RelationalDatabaseParameter"></a>
<a id="tocSrelationaldatabaseparameter"></a>
<a id="tocsrelationaldatabaseparameter"></a>

```json
{
  "allowedValues": {},
  "applyMethod": {},
  "applyType": {},
  "dataType": {},
  "description": {},
  "isModifiable": {},
  "parameterName": {},
  "parameterValue": {}
}
```

Describes the parameters of a database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedValues|object|false|none|none|
|applyMethod|object|false|none|none|
|applyType|object|false|none|none|
|dataType|object|false|none|none|
|description|object|false|none|none|
|isModifiable|object|false|none|none|
|parameterName|object|false|none|none|
|parameterValue|object|false|none|none|

<h2 id="tocS_RenewalStatus">RenewalStatus</h2>
<!-- backwards compatibility -->
<a id="schemarenewalstatus"></a>
<a id="schema_RenewalStatus"></a>
<a id="tocSrenewalstatus"></a>
<a id="tocsrenewalstatus"></a>

```json
"PendingAutoRenewal"
```

<h2 id="tocS_RenewalStatusReason">RenewalStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemarenewalstatusreason"></a>
<a id="schema_RenewalStatusReason"></a>
<a id="tocSrenewalstatusreason"></a>
<a id="tocsrenewalstatusreason"></a>

```json
"string"
```

<h2 id="tocS_ResourceBucketAccess">ResourceBucketAccess</h2>
<!-- backwards compatibility -->
<a id="schemaresourcebucketaccess"></a>
<a id="schema_ResourceBucketAccess"></a>
<a id="tocSresourcebucketaccess"></a>
<a id="tocsresourcebucketaccess"></a>

```json
"allow"
```

<h2 id="tocS_ResourceBudgetEstimate">ResourceBudgetEstimate</h2>
<!-- backwards compatibility -->
<a id="schemaresourcebudgetestimate"></a>
<a id="schema_ResourceBudgetEstimate"></a>
<a id="tocSresourcebudgetestimate"></a>
<a id="tocsresourcebudgetestimate"></a>

```json
{
  "resourceName": {},
  "resourceType": {},
  "costEstimates": {},
  "startTime": {},
  "endTime": {}
}
```

Describes the estimated cost or usage that a budget tracks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|object|false|none|none|
|resourceType|object|false|none|none|
|costEstimates|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|

<h2 id="tocS_SensitiveNonEmptyString">SensitiveNonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemasensitivenonemptystring"></a>
<a id="schema_SensitiveNonEmptyString"></a>
<a id="tocSsensitivenonemptystring"></a>
<a id="tocssensitivenonemptystring"></a>

```json
"password"
```

<h2 id="tocS_Session">Session</h2>
<!-- backwards compatibility -->
<a id="schemasession"></a>
<a id="schema_Session"></a>
<a id="tocSsession"></a>
<a id="tocssession"></a>

```json
{
  "name": {},
  "url": {},
  "isPrimary": {}
}
```

Describes a web-based, remote graphical user interface (GUI), NICE DCV session. The session is used to access a virtual computer’s operating system or application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|url|object|false|none|none|
|isPrimary|object|false|none|none|

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
  "key": {},
  "value": {}
}
```

<p>Describes a tag key and optional value assigned to an Amazon Lightsail resource.</p> <p>For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|none|
|value|object|false|none|none|

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
