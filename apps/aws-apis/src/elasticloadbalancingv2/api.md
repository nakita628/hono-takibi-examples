<h1 id="elastic-load-balancing">Elastic Load Balancing v2015-12-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Elastic Load Balancing</fullname> <p>A load balancer distributes incoming traffic across targets, such as your EC2 instances. This enables you to increase the availability of your application. The load balancer also monitors the health of its registered targets and ensures that it routes traffic only to healthy targets. You configure your load balancer to accept incoming traffic by specifying one or more listeners, which are configured with a protocol and port number for connections from clients to the load balancer. You configure a target group with a protocol and port number for connections from the load balancer to the targets, and with health check settings to be used when checking the health status of the targets.</p> <p>Elastic Load Balancing supports the following types of load balancers: Application Load Balancers, Network Load Balancers, Gateway Load Balancers, and Classic Load Balancers. This reference covers the following load balancer types:</p> <ul> <li> <p>Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS.</p> </li> <li> <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP.</p> </li> <li> <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p> </li> </ul> <p>For more information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User Guide</a>.</p> <p>All Elastic Load Balancing operations are idempotent, which means that they complete at most one time. If you repeat an operation, it succeeds.</p>

Base URLs:

* <a href="http://elasticloadbalancing.us-east-1.amazonaws.com">http://elasticloadbalancing.us-east-1.amazonaws.com</a> - The Elastic Load Balancing v2 multi-region endpoint

* <a href="https://elasticloadbalancing.us-east-1.amazonaws.com">https://elasticloadbalancing.us-east-1.amazonaws.com</a> - The Elastic Load Balancing v2 multi-region endpoint

* <a href="http://elasticloadbalancing.amazonaws.com">http://elasticloadbalancing.amazonaws.com</a> - The general Elastic Load Balancing v2 endpoint for US East (N. Virginia)

* <a href="https://elasticloadbalancing.amazonaws.com">https://elasticloadbalancing.amazonaws.com</a> - The general Elastic Load Balancing v2 endpoint for US East (N. Virginia)

* <a href="http://elasticloadbalancing.cn-north-1.amazonaws.com.cn">http://elasticloadbalancing.cn-north-1.amazonaws.com.cn</a> - The Elastic Load Balancing v2 endpoint for China (Beijing) and China (Ningxia)

* <a href="https://elasticloadbalancing.cn-north-1.amazonaws.com.cn">https://elasticloadbalancing.cn-north-1.amazonaws.com.cn</a> - The Elastic Load Balancing v2 endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/elasticloadbalancing/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="elastic-load-balancing-default">Default</h1>

## GET_AddListenerCertificates

<a id="opIdGET_AddListenerCertificates"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=AddListenerCertificates?ListenerArn=string&Certificates=%7B%22CertificateArn%22%3A%7B%7D%2C%22IsDefault%22%3A%7B%7D%7D&Action=AddListenerCertificates&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AddListenerCertificates`

<p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS or TLS listener.</p> <p>If the certificate in already in the certificate list, the call is successful but the certificate is not added again.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html">HTTPS listeners</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html">TLS listeners</a> in the <i>Network Load Balancers Guide</i>.</p>

<h3 id="getaddlistenercertificates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ListenerArn|query|string|true|The Amazon Resource Name (ARN) of the listener.|
|Certificates|query|[[Certificate](#schemacertificate)]|true|The certificate to add. You can specify one certificate per call. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.|
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
|Action|AddListenerCertificates|
|Version|2015-12-01|

<h3 id="getaddlistenercertificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddListenerCertificatesOutput](#schemaaddlistenercertificatesoutput)|
|480|480|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|481|481|TooManyCertificatesException|[TooManyCertificatesException](#schematoomanycertificatesexception)|
|482|482|CertificateNotFoundException|[CertificateNotFoundException](#schemacertificatenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AddListenerCertificates

<a id="opIdPOST_AddListenerCertificates"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=AddListenerCertificates?Action=AddListenerCertificates&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ListenerArn":{},"Certificates":{}}'
```

`POST /#Action=AddListenerCertificates`

<p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS or TLS listener.</p> <p>If the certificate in already in the certificate list, the call is successful but the certificate is not added again.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html">HTTPS listeners</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html">TLS listeners</a> in the <i>Network Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "ListenerArn": {},
  "Certificates": {}
}
```

<h3 id="postaddlistenercertificates-parameters">Parameters</h3>

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
|body|body|[AddListenerCertificatesInput](#schemaaddlistenercertificatesinput)|false|none|
|» ListenerArn|body|object|true|none|
|» Certificates|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AddListenerCertificates|
|Version|2015-12-01|

<h3 id="postaddlistenercertificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddListenerCertificatesOutput](#schemaaddlistenercertificatesoutput)|
|480|480|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|481|481|TooManyCertificatesException|[TooManyCertificatesException](#schematoomanycertificatesexception)|
|482|482|CertificateNotFoundException|[CertificateNotFoundException](#schemacertificatenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_AddTags

<a id="opIdGET_AddTags"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=AddTags?ResourceArns=string&Tags=%7B%22Key%22%3A%7B%7D%2C%22Value%22%3A%7B%7D%7D&Action=AddTags&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AddTags`

<p>Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, and rules.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, <code>AddTags</code> updates its value.</p>

<h3 id="getaddtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArns|query|[[ResourceArn](#schemaresourcearn)]|true|The Amazon Resource Name (ARN) of the resource.|
|Tags|query|[[Tag](#schematag)]|true|The tags.|
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
|Action|AddTags|
|Version|2015-12-01|

<h3 id="getaddtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddTagsOutput](#schemaaddtagsoutput)|
|480|480|DuplicateTagKeysException|[DuplicateTagKeysException](#schemaduplicatetagkeysexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|483|483|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|484|484|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|485|485|RuleNotFoundException|[RuleNotFoundException](#schemarulenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AddTags

<a id="opIdPOST_AddTags"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=AddTags?Action=AddTags&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceArns":{},"Tags":{}}'
```

`POST /#Action=AddTags`

<p>Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, and rules.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, <code>AddTags</code> updates its value.</p>

> Body parameter

```json
{
  "ResourceArns": {},
  "Tags": {}
}
```

<h3 id="postaddtags-parameters">Parameters</h3>

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
|body|body|[AddTagsInput](#schemaaddtagsinput)|false|none|
|» ResourceArns|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AddTags|
|Version|2015-12-01|

<h3 id="postaddtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddTagsOutput](#schemaaddtagsoutput)|
|480|480|DuplicateTagKeysException|[DuplicateTagKeysException](#schemaduplicatetagkeysexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|483|483|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|484|484|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|485|485|RuleNotFoundException|[RuleNotFoundException](#schemarulenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateListener

<a id="opIdGET_CreateListener"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=CreateListener?LoadBalancerArn=string&DefaultActions=%7B%22Type%22%3A%7B%7D%2C%22TargetGroupArn%22%3A%7B%7D%2C%22AuthenticateOidcConfig%22%3A%7B%22Issuer%22%3A%7B%7D%2C%22AuthorizationEndpoint%22%3A%7B%7D%2C%22TokenEndpoint%22%3A%7B%7D%2C%22UserInfoEndpoint%22%3A%7B%7D%2C%22ClientId%22%3A%7B%7D%2C%22ClientSecret%22%3A%7B%7D%2C%22SessionCookieName%22%3A%7B%7D%2C%22Scope%22%3A%7B%7D%2C%22SessionTimeout%22%3A%7B%7D%2C%22AuthenticationRequestExtraParams%22%3A%7B%22property1%22%3A%22string%22%2C%22property2%22%3A%22string%22%7D%2C%22OnUnauthenticatedRequest%22%3A%7B%7D%2C%22UseExistingClientSecret%22%3A%7B%7D%7D%2C%22AuthenticateCognitoConfig%22%3A%7B%22UserPoolArn%22%3A%7B%7D%2C%22UserPoolClientId%22%3A%7B%7D%2C%22UserPoolDomain%22%3A%7B%7D%2C%22SessionCookieName%22%3A%7B%7D%2C%22Scope%22%3A%7B%7D%2C%22SessionTimeout%22%3A%7B%7D%2C%22AuthenticationRequestExtraParams%22%3A%7B%22property1%22%3A%22string%22%2C%22property2%22%3A%22string%22%7D%2C%22OnUnauthenticatedRequest%22%3A%7B%7D%7D%2C%22Order%22%3A%7B%7D%2C%22RedirectConfig%22%3A%7B%22Protocol%22%3A%7B%7D%2C%22Port%22%3A%7B%7D%2C%22Host%22%3A%7B%7D%2C%22Path%22%3A%7B%7D%2C%22Query%22%3A%7B%7D%2C%22StatusCode%22%3A%7B%7D%7D%2C%22FixedResponseConfig%22%3A%7B%22MessageBody%22%3A%7B%7D%2C%22StatusCode%22%3A%7B%7D%2C%22ContentType%22%3A%7B%7D%7D%2C%22ForwardConfig%22%3A%7B%22TargetGroups%22%3A%7B%7D%2C%22TargetGroupStickinessConfig%22%3A%7B%22Enabled%22%3A%7B%7D%2C%22DurationSeconds%22%3A%7B%7D%7D%7D%7D&Action=CreateListener&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateListener`

<p>Creates a listener for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html">Listeners for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html">Listeners for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-listeners.html">Listeners for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple listeners with the same settings, each call succeeds.</p>

<h3 id="getcreatelistener-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerArn|query|string|true|The Amazon Resource Name (ARN) of the load balancer.|
|Protocol|query|string|false|The protocol for connections from clients to the load balancer. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, and TCP_UDP. You can’t specify the UDP or TCP_UDP protocol if dual-stack mode is enabled. You cannot specify a protocol for a Gateway Load Balancer.|
|Port|query|integer|false|The port on which the load balancer is listening. You cannot specify a port for a Gateway Load Balancer.|
|SslPolicy|query|string|false|<p>[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>|
|Certificates|query|[[Certificate](#schemacertificate)]|false|[HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.|
|DefaultActions|query|[[Action](#schemaaction)]|true|The actions for the default rule.|
|AlpnPolicy|query|[[AlpnPolicyValue](#schemaalpnpolicyvalue)]|false|<p>[TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy. You can specify one policy name. The following are the possible values:</p> <ul> <li> <p> <code>HTTP1Only</code> </p> </li> <li> <p> <code>HTTP2Only</code> </p> </li> <li> <p> <code>HTTP2Optional</code> </p> </li> <li> <p> <code>HTTP2Preferred</code> </p> </li> <li> <p> <code>None</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#alpn-policies">ALPN policies</a> in the <i>Network Load Balancers Guide</i>.</p>|
|Tags|query|[[Tag](#schematag)]|false|The tags to assign to the listener.|
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
|Protocol|HTTP|
|Protocol|HTTPS|
|Protocol|TCP|
|Protocol|TLS|
|Protocol|UDP|
|Protocol|TCP_UDP|
|Protocol|GENEVE|
|Action|CreateListener|
|Version|2015-12-01|

<h3 id="getcreatelistener-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateListenerOutput](#schemacreatelisteneroutput)|
|480|480|DuplicateListenerException|[DuplicateListenerException](#schemaduplicatelistenerexception)|
|481|481|TooManyListenersException|[TooManyListenersException](#schematoomanylistenersexception)|
|482|482|TooManyCertificatesException|[TooManyCertificatesException](#schematoomanycertificatesexception)|
|483|483|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|484|484|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|485|485|TargetGroupAssociationLimitException|[TargetGroupAssociationLimitException](#schematargetgroupassociationlimitexception)|
|486|486|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|487|487|IncompatibleProtocolsException|[IncompatibleProtocolsException](#schemaincompatibleprotocolsexception)|
|488|488|SSLPolicyNotFoundException|[SSLPolicyNotFoundException](#schemasslpolicynotfoundexception)|
|489|489|CertificateNotFoundException|[CertificateNotFoundException](#schemacertificatenotfoundexception)|
|490|490|UnsupportedProtocolException|[UnsupportedProtocolException](#schemaunsupportedprotocolexception)|
|491|491|TooManyRegistrationsForTargetIdException|[TooManyRegistrationsForTargetIdException](#schematoomanyregistrationsfortargetidexception)|
|492|492|TooManyTargetsException|[TooManyTargetsException](#schematoomanytargetsexception)|
|493|493|TooManyActionsException|[TooManyActionsException](#schematoomanyactionsexception)|
|494|494|InvalidLoadBalancerActionException|[InvalidLoadBalancerActionException](#schemainvalidloadbalanceractionexception)|
|495|495|TooManyUniqueTargetGroupsPerLoadBalancerException|[TooManyUniqueTargetGroupsPerLoadBalancerException](#schematoomanyuniquetargetgroupsperloadbalancerexception)|
|496|496|ALPNPolicyNotSupportedException|[ALPNPolicyNotSupportedException](#schemaalpnpolicynotsupportedexception)|
|497|497|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateListener

<a id="opIdPOST_CreateListener"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=CreateListener?Action=CreateListener&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerArn":{},"Protocol":{},"Port":{},"SslPolicy":{},"Certificates":{},"DefaultActions":{},"AlpnPolicy":{},"Tags":{}}'
```

`POST /#Action=CreateListener`

<p>Creates a listener for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html">Listeners for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html">Listeners for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-listeners.html">Listeners for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple listeners with the same settings, each call succeeds.</p>

> Body parameter

```json
{
  "LoadBalancerArn": {},
  "Protocol": {},
  "Port": {},
  "SslPolicy": {},
  "Certificates": {},
  "DefaultActions": {},
  "AlpnPolicy": {},
  "Tags": {}
}
```

<h3 id="postcreatelistener-parameters">Parameters</h3>

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
|body|body|[CreateListenerInput](#schemacreatelistenerinput)|false|none|
|» LoadBalancerArn|body|object|true|none|
|» Protocol|body|object|false|none|
|» Port|body|object|false|none|
|» SslPolicy|body|object|false|none|
|» Certificates|body|object|false|none|
|» DefaultActions|body|object|true|none|
|» AlpnPolicy|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateListener|
|Version|2015-12-01|

<h3 id="postcreatelistener-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateListenerOutput](#schemacreatelisteneroutput)|
|480|480|DuplicateListenerException|[DuplicateListenerException](#schemaduplicatelistenerexception)|
|481|481|TooManyListenersException|[TooManyListenersException](#schematoomanylistenersexception)|
|482|482|TooManyCertificatesException|[TooManyCertificatesException](#schematoomanycertificatesexception)|
|483|483|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|484|484|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|485|485|TargetGroupAssociationLimitException|[TargetGroupAssociationLimitException](#schematargetgroupassociationlimitexception)|
|486|486|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|487|487|IncompatibleProtocolsException|[IncompatibleProtocolsException](#schemaincompatibleprotocolsexception)|
|488|488|SSLPolicyNotFoundException|[SSLPolicyNotFoundException](#schemasslpolicynotfoundexception)|
|489|489|CertificateNotFoundException|[CertificateNotFoundException](#schemacertificatenotfoundexception)|
|490|490|UnsupportedProtocolException|[UnsupportedProtocolException](#schemaunsupportedprotocolexception)|
|491|491|TooManyRegistrationsForTargetIdException|[TooManyRegistrationsForTargetIdException](#schematoomanyregistrationsfortargetidexception)|
|492|492|TooManyTargetsException|[TooManyTargetsException](#schematoomanytargetsexception)|
|493|493|TooManyActionsException|[TooManyActionsException](#schematoomanyactionsexception)|
|494|494|InvalidLoadBalancerActionException|[InvalidLoadBalancerActionException](#schemainvalidloadbalanceractionexception)|
|495|495|TooManyUniqueTargetGroupsPerLoadBalancerException|[TooManyUniqueTargetGroupsPerLoadBalancerException](#schematoomanyuniquetargetgroupsperloadbalancerexception)|
|496|496|ALPNPolicyNotSupportedException|[ALPNPolicyNotSupportedException](#schemaalpnpolicynotsupportedexception)|
|497|497|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateLoadBalancer

<a id="opIdGET_CreateLoadBalancer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=CreateLoadBalancer?Name=string&Action=CreateLoadBalancer&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateLoadBalancer`

<p>Creates an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html">Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html">Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html">Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple load balancers with the same settings, each call succeeds.</p>

<h3 id="getcreateloadbalancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|query|string|true|<p>The name of the load balancer.</p> <p>This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".</p>|
|Subnets|query|[[SubnetId](#schemasubnetid)]|false|<p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones.</p> <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p> <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones.</p> <p>[Gateway Load Balancers] You can specify subnets from one or more Availability Zones.</p>|
|SubnetMappings|query|[[SubnetMapping](#schemasubnetmapping)]|false|<p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones. You cannot specify Elastic IP addresses for your subnets.</p> <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p> <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.</p> <p>[Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You cannot specify Elastic IP addresses for your subnets.</p>|
|SecurityGroups|query|[[SecurityGroupId](#schemasecuritygroupid)]|false|[Application Load Balancers] The IDs of the security groups for the load balancer.|
|Scheme|query|string|false|<p>The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.</p> <p>The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.</p> <p>The default is an Internet-facing load balancer.</p> <p>You cannot specify a scheme for a Gateway Load Balancer.</p>|
|Tags|query|[[Tag](#schematag)]|false|The tags to assign to the load balancer.|
|Type|query|string|false|The type of load balancer. The default is <code>application</code>.|
|IpAddressType|query|string|false|The type of IP addresses used by the subnets for your load balancer. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses). |
|CustomerOwnedIpv4Pool|query|string|false|[Application Load Balancers on Outposts] The ID of the customer-owned address pool (CoIP pool).|
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
|Scheme|internet-facing|
|Scheme|internal|
|Type|application|
|Type|network|
|Type|gateway|
|IpAddressType|ipv4|
|IpAddressType|dualstack|
|Action|CreateLoadBalancer|
|Version|2015-12-01|

<h3 id="getcreateloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLoadBalancerOutput](#schemacreateloadbalanceroutput)|
|480|480|DuplicateLoadBalancerNameException|[DuplicateLoadBalancerNameException](#schemaduplicateloadbalancernameexception)|
|481|481|TooManyLoadBalancersException|[TooManyLoadBalancersException](#schematoomanyloadbalancersexception)|
|482|482|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|483|483|SubnetNotFoundException|[SubnetNotFoundException](#schemasubnetnotfoundexception)|
|484|484|InvalidSubnetException|[InvalidSubnetException](#schemainvalidsubnetexception)|
|485|485|InvalidSecurityGroupException|[InvalidSecurityGroupException](#schemainvalidsecuritygroupexception)|
|486|486|InvalidSchemeException|[InvalidSchemeException](#schemainvalidschemeexception)|
|487|487|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|488|488|DuplicateTagKeysException|[DuplicateTagKeysException](#schemaduplicatetagkeysexception)|
|489|489|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|490|490|AllocationIdNotFoundException|[AllocationIdNotFoundException](#schemaallocationidnotfoundexception)|
|491|491|AvailabilityZoneNotSupportedException|[AvailabilityZoneNotSupportedException](#schemaavailabilityzonenotsupportedexception)|
|492|492|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateLoadBalancer

<a id="opIdPOST_CreateLoadBalancer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=CreateLoadBalancer?Action=CreateLoadBalancer&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Name":{},"Subnets":{},"SubnetMappings":{},"SecurityGroups":{},"Scheme":{},"Tags":{},"Type":{},"IpAddressType":{},"CustomerOwnedIpv4Pool":{}}'
```

`POST /#Action=CreateLoadBalancer`

<p>Creates an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html">Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html">Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html">Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple load balancers with the same settings, each call succeeds.</p>

> Body parameter

```json
{
  "Name": {},
  "Subnets": {},
  "SubnetMappings": {},
  "SecurityGroups": {},
  "Scheme": {},
  "Tags": {},
  "Type": {},
  "IpAddressType": {},
  "CustomerOwnedIpv4Pool": {}
}
```

<h3 id="postcreateloadbalancer-parameters">Parameters</h3>

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
|body|body|[CreateLoadBalancerInput](#schemacreateloadbalancerinput)|false|none|
|» Name|body|object|true|none|
|» Subnets|body|object|false|none|
|» SubnetMappings|body|object|false|none|
|» SecurityGroups|body|object|false|none|
|» Scheme|body|object|false|none|
|» Tags|body|object|false|none|
|» Type|body|object|false|none|
|» IpAddressType|body|object|false|none|
|» CustomerOwnedIpv4Pool|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateLoadBalancer|
|Version|2015-12-01|

<h3 id="postcreateloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLoadBalancerOutput](#schemacreateloadbalanceroutput)|
|480|480|DuplicateLoadBalancerNameException|[DuplicateLoadBalancerNameException](#schemaduplicateloadbalancernameexception)|
|481|481|TooManyLoadBalancersException|[TooManyLoadBalancersException](#schematoomanyloadbalancersexception)|
|482|482|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|483|483|SubnetNotFoundException|[SubnetNotFoundException](#schemasubnetnotfoundexception)|
|484|484|InvalidSubnetException|[InvalidSubnetException](#schemainvalidsubnetexception)|
|485|485|InvalidSecurityGroupException|[InvalidSecurityGroupException](#schemainvalidsecuritygroupexception)|
|486|486|InvalidSchemeException|[InvalidSchemeException](#schemainvalidschemeexception)|
|487|487|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|488|488|DuplicateTagKeysException|[DuplicateTagKeysException](#schemaduplicatetagkeysexception)|
|489|489|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|490|490|AllocationIdNotFoundException|[AllocationIdNotFoundException](#schemaallocationidnotfoundexception)|
|491|491|AvailabilityZoneNotSupportedException|[AvailabilityZoneNotSupportedException](#schemaavailabilityzonenotsupportedexception)|
|492|492|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateRule

<a id="opIdGET_CreateRule"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=CreateRule?ListenerArn=string&Conditions=%7B%22Field%22%3A%7B%7D%2C%22Values%22%3A%7B%7D%2C%22HostHeaderConfig%22%3A%7B%22Values%22%3A%7B%7D%7D%2C%22PathPatternConfig%22%3A%7B%22Values%22%3A%7B%7D%7D%2C%22HttpHeaderConfig%22%3A%7B%22HttpHeaderName%22%3A%7B%7D%2C%22Values%22%3A%7B%7D%7D%2C%22QueryStringConfig%22%3A%7B%22Values%22%3A%7B%7D%7D%2C%22HttpRequestMethodConfig%22%3A%7B%22Values%22%3A%7B%7D%7D%2C%22SourceIpConfig%22%3A%7B%22Values%22%3A%7B%7D%7D%7D&Priority=1&Actions=%7B%22Type%22%3A%7B%7D%2C%22TargetGroupArn%22%3A%7B%7D%2C%22AuthenticateOidcConfig%22%3A%7B%22Issuer%22%3A%7B%7D%2C%22AuthorizationEndpoint%22%3A%7B%7D%2C%22TokenEndpoint%22%3A%7B%7D%2C%22UserInfoEndpoint%22%3A%7B%7D%2C%22ClientId%22%3A%7B%7D%2C%22ClientSecret%22%3A%7B%7D%2C%22SessionCookieName%22%3A%7B%7D%2C%22Scope%22%3A%7B%7D%2C%22SessionTimeout%22%3A%7B%7D%2C%22AuthenticationRequestExtraParams%22%3A%7B%22property1%22%3A%22string%22%2C%22property2%22%3A%22string%22%7D%2C%22OnUnauthenticatedRequest%22%3A%7B%7D%2C%22UseExistingClientSecret%22%3A%7B%7D%7D%2C%22AuthenticateCognitoConfig%22%3A%7B%22UserPoolArn%22%3A%7B%7D%2C%22UserPoolClientId%22%3A%7B%7D%2C%22UserPoolDomain%22%3A%7B%7D%2C%22SessionCookieName%22%3A%7B%7D%2C%22Scope%22%3A%7B%7D%2C%22SessionTimeout%22%3A%7B%7D%2C%22AuthenticationRequestExtraParams%22%3A%7B%22property1%22%3A%22string%22%2C%22property2%22%3A%22string%22%7D%2C%22OnUnauthenticatedRequest%22%3A%7B%7D%7D%2C%22Order%22%3A%7B%7D%2C%22RedirectConfig%22%3A%7B%22Protocol%22%3A%7B%7D%2C%22Port%22%3A%7B%7D%2C%22Host%22%3A%7B%7D%2C%22Path%22%3A%7B%7D%2C%22Query%22%3A%7B%7D%2C%22StatusCode%22%3A%7B%7D%7D%2C%22FixedResponseConfig%22%3A%7B%22MessageBody%22%3A%7B%7D%2C%22StatusCode%22%3A%7B%7D%2C%22ContentType%22%3A%7B%7D%7D%2C%22ForwardConfig%22%3A%7B%22TargetGroups%22%3A%7B%7D%2C%22TargetGroupStickinessConfig%22%3A%7B%22Enabled%22%3A%7B%7D%2C%22DurationSeconds%22%3A%7B%7D%7D%7D%7D&Action=CreateRule&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateRule`

<p>Creates a rule for the specified listener. The listener must be associated with an Application Load Balancer.</p> <p>Each rule consists of a priority, one or more actions, and one or more conditions. Rules are evaluated in priority order, from the lowest value to the highest value. When the conditions for a rule are met, its actions are performed. If the conditions for no rules are met, the actions for the default rule are performed. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#listener-rules">Listener rules</a> in the <i>Application Load Balancers Guide</i>.</p>

<h3 id="getcreaterule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ListenerArn|query|string|true|The Amazon Resource Name (ARN) of the listener.|
|Conditions|query|[[RuleCondition](#schemarulecondition)]|true|The conditions.|
|Priority|query|integer|true|The rule priority. A listener can't have multiple rules with the same priority.|
|Actions|query|[[Action](#schemaaction)]|true|The actions.|
|Tags|query|[[Tag](#schematag)]|false|The tags to assign to the rule.|
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
|Action|CreateRule|
|Version|2015-12-01|

<h3 id="getcreaterule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRuleOutput](#schemacreateruleoutput)|
|480|480|PriorityInUseException|[PriorityInUseException](#schemapriorityinuseexception)|
|481|481|TooManyTargetGroupsException|[TooManyTargetGroupsException](#schematoomanytargetgroupsexception)|
|482|482|TooManyRulesException|[TooManyRulesException](#schematoomanyrulesexception)|
|483|483|TargetGroupAssociationLimitException|[TargetGroupAssociationLimitException](#schematargetgroupassociationlimitexception)|
|484|484|IncompatibleProtocolsException|[IncompatibleProtocolsException](#schemaincompatibleprotocolsexception)|
|485|485|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|486|486|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|487|487|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|488|488|TooManyRegistrationsForTargetIdException|[TooManyRegistrationsForTargetIdException](#schematoomanyregistrationsfortargetidexception)|
|489|489|TooManyTargetsException|[TooManyTargetsException](#schematoomanytargetsexception)|
|490|490|UnsupportedProtocolException|[UnsupportedProtocolException](#schemaunsupportedprotocolexception)|
|491|491|TooManyActionsException|[TooManyActionsException](#schematoomanyactionsexception)|
|492|492|InvalidLoadBalancerActionException|[InvalidLoadBalancerActionException](#schemainvalidloadbalanceractionexception)|
|493|493|TooManyUniqueTargetGroupsPerLoadBalancerException|[TooManyUniqueTargetGroupsPerLoadBalancerException](#schematoomanyuniquetargetgroupsperloadbalancerexception)|
|494|494|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateRule

<a id="opIdPOST_CreateRule"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=CreateRule?Action=CreateRule&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ListenerArn":{},"Conditions":{},"Priority":{},"Actions":{},"Tags":{}}'
```

`POST /#Action=CreateRule`

<p>Creates a rule for the specified listener. The listener must be associated with an Application Load Balancer.</p> <p>Each rule consists of a priority, one or more actions, and one or more conditions. Rules are evaluated in priority order, from the lowest value to the highest value. When the conditions for a rule are met, its actions are performed. If the conditions for no rules are met, the actions for the default rule are performed. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#listener-rules">Listener rules</a> in the <i>Application Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "ListenerArn": {},
  "Conditions": {},
  "Priority": {},
  "Actions": {},
  "Tags": {}
}
```

<h3 id="postcreaterule-parameters">Parameters</h3>

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
|body|body|[CreateRuleInput](#schemacreateruleinput)|false|none|
|» ListenerArn|body|object|true|none|
|» Conditions|body|object|true|none|
|» Priority|body|object|true|none|
|» Actions|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateRule|
|Version|2015-12-01|

<h3 id="postcreaterule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRuleOutput](#schemacreateruleoutput)|
|480|480|PriorityInUseException|[PriorityInUseException](#schemapriorityinuseexception)|
|481|481|TooManyTargetGroupsException|[TooManyTargetGroupsException](#schematoomanytargetgroupsexception)|
|482|482|TooManyRulesException|[TooManyRulesException](#schematoomanyrulesexception)|
|483|483|TargetGroupAssociationLimitException|[TargetGroupAssociationLimitException](#schematargetgroupassociationlimitexception)|
|484|484|IncompatibleProtocolsException|[IncompatibleProtocolsException](#schemaincompatibleprotocolsexception)|
|485|485|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|486|486|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|487|487|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|488|488|TooManyRegistrationsForTargetIdException|[TooManyRegistrationsForTargetIdException](#schematoomanyregistrationsfortargetidexception)|
|489|489|TooManyTargetsException|[TooManyTargetsException](#schematoomanytargetsexception)|
|490|490|UnsupportedProtocolException|[UnsupportedProtocolException](#schemaunsupportedprotocolexception)|
|491|491|TooManyActionsException|[TooManyActionsException](#schematoomanyactionsexception)|
|492|492|InvalidLoadBalancerActionException|[InvalidLoadBalancerActionException](#schemainvalidloadbalanceractionexception)|
|493|493|TooManyUniqueTargetGroupsPerLoadBalancerException|[TooManyUniqueTargetGroupsPerLoadBalancerException](#schematoomanyuniquetargetgroupsperloadbalancerexception)|
|494|494|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateTargetGroup

<a id="opIdGET_CreateTargetGroup"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=CreateTargetGroup?Name=string&Action=CreateTargetGroup&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateTargetGroup`

<p>Creates a target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html">Target groups for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html">Target groups for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html">Target groups for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple target groups with the same settings, each call succeeds.</p>

<h3 id="getcreatetargetgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|query|string|true|<p>The name of the target group.</p> <p>This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.</p>|
|Protocol|query|string|false|The protocol to use for routing traffic to the targets. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, or TCP_UDP. For Gateway Load Balancers, the supported protocol is GENEVE. A TCP_UDP listener must be associated with a TCP_UDP target group. If the target is a Lambda function, this parameter does not apply.|
|ProtocolVersion|query|string|false|[HTTP/HTTPS protocol] The protocol version. Specify <code>GRPC</code> to send requests to targets using gRPC. Specify <code>HTTP2</code> to send requests to targets using HTTP/2. The default is <code>HTTP1</code>, which sends requests to targets using HTTP/1.1.|
|Port|query|integer|false|The port on which the targets receive traffic. This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081.|
|VpcId|query|string|false|The identifier of the virtual private cloud (VPC). If the target is a Lambda function, this parameter does not apply. Otherwise, this parameter is required.|
|HealthCheckProtocol|query|string|false|The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers and Gateway Load Balancers, the default is TCP. The TCP protocol is not supported for health checks if the protocol of the target group is HTTP or HTTPS. The GENEVE, TLS, UDP, and TCP_UDP protocols are not supported for health checks.|
|HealthCheckPort|query|string|false|The port the load balancer uses when performing health checks on targets. If the protocol is HTTP, HTTPS, TCP, TLS, UDP, or TCP_UDP, the default is <code>traffic-port</code>, which is the port on which each target receives traffic from the load balancer. If the protocol is GENEVE, the default is port 80.|
|HealthCheckEnabled|query|boolean|false|Indicates whether health checks are enabled. If the target type is <code>lambda</code>, health checks are disabled by default but can be enabled. If the target type is <code>instance</code>, <code>ip</code>, or <code>alb</code>, health checks are always enabled and cannot be disabled.|
|HealthCheckPath|query|string|false|<p>[HTTP/HTTPS health checks] The destination for health checks on the targets.</p> <p>[HTTP1 or HTTP2 protocol version] The ping path. The default is /.</p> <p>[GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /Amazon Web Services.ALB/healthcheck.</p>|
|HealthCheckIntervalSeconds|query|integer|false|The approximate amount of time, in seconds, between health checks of an individual target. The range is 5-300. If the target group protocol is TCP, TLS, UDP, TCP_UDP, HTTP or HTTPS, the default is 30 seconds. If the target group protocol is GENEVE, the default is 10 seconds. If the target type is <code>lambda</code>, the default is 35 seconds.|
|HealthCheckTimeoutSeconds|query|integer|false|The amount of time, in seconds, during which no response from a target means a failed health check. The range is 2–120 seconds. For target groups with a protocol of HTTP, the default is 6 seconds. For target groups with a protocol of TCP, TLS or HTTPS, the default is 10 seconds. For target groups with a protocol of GENEVE, the default is 5 seconds. If the target type is <code>lambda</code>, the default is 30 seconds.|
|HealthyThresholdCount|query|integer|false|The number of consecutive health check successes required before considering a target healthy. The range is 2-10. If the target group protocol is TCP, TCP_UDP, UDP, TLS, HTTP or HTTPS, the default is 5. For target groups with a protocol of GENEVE, the default is 5. If the target type is <code>lambda</code>, the default is 5.|
|UnhealthyThresholdCount|query|integer|false|The number of consecutive health check failures required before considering a target unhealthy. The range is 2-10. If the target group protocol is TCP, TCP_UDP, UDP, TLS, HTTP or HTTPS, the default is 2. For target groups with a protocol of GENEVE, the default is 2. If the target type is <code>lambda</code>, the default is 5.|
|Matcher|query|object|false|[HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target. For target groups with a protocol of TCP, TCP_UDP, UDP or TLS the range is 200-599. For target groups with a protocol of HTTP or HTTPS, the range is 200-499. For target groups with a protocol of GENEVE, the range is 200-399.|
|TargetType|query|string|false|<p>The type of target that you must specify when registering targets with this target group. You can't specify targets for a target group using more than one target type.</p> <ul> <li> <p> <code>instance</code> - Register targets by instance ID. This is the default value.</p> </li> <li> <p> <code>ip</code> - Register targets by IP address. You can specify IP addresses from the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918 range (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range (100.64.0.0/10). You can't specify publicly routable IP addresses.</p> </li> <li> <p> <code>lambda</code> - Register a single Lambda function as a target.</p> </li> <li> <p> <code>alb</code> - Register a single Application Load Balancer as a target.</p> </li> </ul>|
|Tags|query|[[Tag](#schematag)]|false|The tags to assign to the target group.|
|IpAddressType|query|string|false|The type of IP address used for this target group. The possible values are <code>ipv4</code> and <code>ipv6</code>. This is an optional parameter. If not specified, the IP address type defaults to <code>ipv4</code>.|
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
|Protocol|HTTP|
|Protocol|HTTPS|
|Protocol|TCP|
|Protocol|TLS|
|Protocol|UDP|
|Protocol|TCP_UDP|
|Protocol|GENEVE|
|HealthCheckProtocol|HTTP|
|HealthCheckProtocol|HTTPS|
|HealthCheckProtocol|TCP|
|HealthCheckProtocol|TLS|
|HealthCheckProtocol|UDP|
|HealthCheckProtocol|TCP_UDP|
|HealthCheckProtocol|GENEVE|
|TargetType|instance|
|TargetType|ip|
|TargetType|lambda|
|TargetType|alb|
|IpAddressType|ipv4|
|IpAddressType|ipv6|
|Action|CreateTargetGroup|
|Version|2015-12-01|

<h3 id="getcreatetargetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTargetGroupOutput](#schemacreatetargetgroupoutput)|
|480|480|DuplicateTargetGroupNameException|[DuplicateTargetGroupNameException](#schemaduplicatetargetgroupnameexception)|
|481|481|TooManyTargetGroupsException|[TooManyTargetGroupsException](#schematoomanytargetgroupsexception)|
|482|482|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateTargetGroup

<a id="opIdPOST_CreateTargetGroup"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=CreateTargetGroup?Action=CreateTargetGroup&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Name":{},"Protocol":{},"ProtocolVersion":{},"Port":{},"VpcId":{},"HealthCheckProtocol":{},"HealthCheckPort":{},"HealthCheckEnabled":{},"HealthCheckPath":{},"HealthCheckIntervalSeconds":{},"HealthCheckTimeoutSeconds":{},"HealthyThresholdCount":{},"UnhealthyThresholdCount":{},"Matcher":{"HttpCode":{},"GrpcCode":{}},"TargetType":{},"Tags":{},"IpAddressType":{}}'
```

`POST /#Action=CreateTargetGroup`

<p>Creates a target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html">Target groups for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html">Target groups for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html">Target groups for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple target groups with the same settings, each call succeeds.</p>

> Body parameter

```json
{
  "Name": {},
  "Protocol": {},
  "ProtocolVersion": {},
  "Port": {},
  "VpcId": {},
  "HealthCheckProtocol": {},
  "HealthCheckPort": {},
  "HealthCheckEnabled": {},
  "HealthCheckPath": {},
  "HealthCheckIntervalSeconds": {},
  "HealthCheckTimeoutSeconds": {},
  "HealthyThresholdCount": {},
  "UnhealthyThresholdCount": {},
  "Matcher": {
    "HttpCode": {},
    "GrpcCode": {}
  },
  "TargetType": {},
  "Tags": {},
  "IpAddressType": {}
}
```

<h3 id="postcreatetargetgroup-parameters">Parameters</h3>

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
|body|body|[CreateTargetGroupInput](#schemacreatetargetgroupinput)|false|none|
|» Name|body|object|true|none|
|» Protocol|body|object|false|none|
|» ProtocolVersion|body|object|false|none|
|» Port|body|object|false|none|
|» VpcId|body|object|false|none|
|» HealthCheckProtocol|body|object|false|none|
|» HealthCheckPort|body|object|false|none|
|» HealthCheckEnabled|body|object|false|none|
|» HealthCheckPath|body|object|false|none|
|» HealthCheckIntervalSeconds|body|object|false|none|
|» HealthCheckTimeoutSeconds|body|object|false|none|
|» HealthyThresholdCount|body|object|false|none|
|» UnhealthyThresholdCount|body|object|false|none|
|» Matcher|body|object|false|none|
|» » HttpCode|body|object|false|none|
|» » GrpcCode|body|object|false|none|
|» TargetType|body|object|false|none|
|» Tags|body|object|false|none|
|» IpAddressType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateTargetGroup|
|Version|2015-12-01|

<h3 id="postcreatetargetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTargetGroupOutput](#schemacreatetargetgroupoutput)|
|480|480|DuplicateTargetGroupNameException|[DuplicateTargetGroupNameException](#schemaduplicatetargetgroupnameexception)|
|481|481|TooManyTargetGroupsException|[TooManyTargetGroupsException](#schematoomanytargetgroupsexception)|
|482|482|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteListener

<a id="opIdGET_DeleteListener"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DeleteListener?ListenerArn=string&Action=DeleteListener&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteListener`

<p>Deletes the specified listener.</p> <p>Alternatively, your listener is deleted when you delete the load balancer to which it is attached.</p>

<h3 id="getdeletelistener-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ListenerArn|query|string|true|The Amazon Resource Name (ARN) of the listener.|
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
|Action|DeleteListener|
|Version|2015-12-01|

<h3 id="getdeletelistener-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteListenerOutput](#schemadeletelisteneroutput)|
|480|480|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteListener

<a id="opIdPOST_DeleteListener"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DeleteListener?Action=DeleteListener&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ListenerArn":{}}'
```

`POST /#Action=DeleteListener`

<p>Deletes the specified listener.</p> <p>Alternatively, your listener is deleted when you delete the load balancer to which it is attached.</p>

> Body parameter

```json
{
  "ListenerArn": {}
}
```

<h3 id="postdeletelistener-parameters">Parameters</h3>

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
|body|body|[DeleteListenerInput](#schemadeletelistenerinput)|false|none|
|» ListenerArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteListener|
|Version|2015-12-01|

<h3 id="postdeletelistener-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteListenerOutput](#schemadeletelisteneroutput)|
|480|480|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteLoadBalancer

<a id="opIdGET_DeleteLoadBalancer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DeleteLoadBalancer?LoadBalancerArn=string&Action=DeleteLoadBalancer&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteLoadBalancer`

<p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>

<h3 id="getdeleteloadbalancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerArn|query|string|true|The Amazon Resource Name (ARN) of the load balancer.|
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
|Action|DeleteLoadBalancer|
|Version|2015-12-01|

<h3 id="getdeleteloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLoadBalancerOutput](#schemadeleteloadbalanceroutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteLoadBalancer

<a id="opIdPOST_DeleteLoadBalancer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DeleteLoadBalancer?Action=DeleteLoadBalancer&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerArn":{}}'
```

`POST /#Action=DeleteLoadBalancer`

<p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>

> Body parameter

```json
{
  "LoadBalancerArn": {}
}
```

<h3 id="postdeleteloadbalancer-parameters">Parameters</h3>

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
|body|body|[DeleteLoadBalancerInput](#schemadeleteloadbalancerinput)|false|none|
|» LoadBalancerArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteLoadBalancer|
|Version|2015-12-01|

<h3 id="postdeleteloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLoadBalancerOutput](#schemadeleteloadbalanceroutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteRule

<a id="opIdGET_DeleteRule"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DeleteRule?RuleArn=string&Action=DeleteRule&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteRule`

<p>Deletes the specified rule.</p> <p>You can't delete the default rule.</p>

<h3 id="getdeleterule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RuleArn|query|string|true|The Amazon Resource Name (ARN) of the rule.|
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
|Action|DeleteRule|
|Version|2015-12-01|

<h3 id="getdeleterule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRuleOutput](#schemadeleteruleoutput)|
|480|480|RuleNotFoundException|[RuleNotFoundException](#schemarulenotfoundexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteRule

<a id="opIdPOST_DeleteRule"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DeleteRule?Action=DeleteRule&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RuleArn":{}}'
```

`POST /#Action=DeleteRule`

<p>Deletes the specified rule.</p> <p>You can't delete the default rule.</p>

> Body parameter

```json
{
  "RuleArn": {}
}
```

<h3 id="postdeleterule-parameters">Parameters</h3>

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
|body|body|[DeleteRuleInput](#schemadeleteruleinput)|false|none|
|» RuleArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteRule|
|Version|2015-12-01|

<h3 id="postdeleterule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRuleOutput](#schemadeleteruleoutput)|
|480|480|RuleNotFoundException|[RuleNotFoundException](#schemarulenotfoundexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteTargetGroup

<a id="opIdGET_DeleteTargetGroup"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DeleteTargetGroup?TargetGroupArn=string&Action=DeleteTargetGroup&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteTargetGroup`

<p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.</p>

<h3 id="getdeletetargetgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TargetGroupArn|query|string|true|The Amazon Resource Name (ARN) of the target group.|
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
|Action|DeleteTargetGroup|
|Version|2015-12-01|

<h3 id="getdeletetargetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTargetGroupOutput](#schemadeletetargetgroupoutput)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteTargetGroup

<a id="opIdPOST_DeleteTargetGroup"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DeleteTargetGroup?Action=DeleteTargetGroup&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TargetGroupArn":{}}'
```

`POST /#Action=DeleteTargetGroup`

<p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.</p>

> Body parameter

```json
{
  "TargetGroupArn": {}
}
```

<h3 id="postdeletetargetgroup-parameters">Parameters</h3>

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
|body|body|[DeleteTargetGroupInput](#schemadeletetargetgroupinput)|false|none|
|» TargetGroupArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteTargetGroup|
|Version|2015-12-01|

<h3 id="postdeletetargetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTargetGroupOutput](#schemadeletetargetgroupoutput)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeregisterTargets

<a id="opIdGET_DeregisterTargets"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DeregisterTargets?TargetGroupArn=string&Targets=%7B%22Id%22%3A%7B%7D%2C%22Port%22%3A%7B%7D%2C%22AvailabilityZone%22%3A%7B%7D%7D&Action=DeregisterTargets&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeregisterTargets`

Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.

<h3 id="getderegistertargets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TargetGroupArn|query|string|true|The Amazon Resource Name (ARN) of the target group.|
|Targets|query|[[TargetDescription](#schematargetdescription)]|true|The targets. If you specified a port override when you registered a target, you must specify both the target ID and the port when you deregister it.|
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
|Action|DeregisterTargets|
|Version|2015-12-01|

<h3 id="getderegistertargets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterTargetsOutput](#schemaderegistertargetsoutput)|
|480|480|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|481|481|InvalidTargetException|[InvalidTargetException](#schemainvalidtargetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeregisterTargets

<a id="opIdPOST_DeregisterTargets"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DeregisterTargets?Action=DeregisterTargets&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TargetGroupArn":{},"Targets":{}}'
```

`POST /#Action=DeregisterTargets`

Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.

> Body parameter

```json
{
  "TargetGroupArn": {},
  "Targets": {}
}
```

<h3 id="postderegistertargets-parameters">Parameters</h3>

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
|body|body|[DeregisterTargetsInput](#schemaderegistertargetsinput)|false|none|
|» TargetGroupArn|body|object|true|none|
|» Targets|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeregisterTargets|
|Version|2015-12-01|

<h3 id="postderegistertargets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterTargetsOutput](#schemaderegistertargetsoutput)|
|480|480|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|481|481|InvalidTargetException|[InvalidTargetException](#schemainvalidtargetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeAccountLimits

<a id="opIdGET_DescribeAccountLimits"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeAccountLimits?Action=DescribeAccountLimits&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeAccountLimits`

<p>Describes the current Elastic Load Balancing resource limits for your Amazon Web Services account.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway Load Balancers</a> </p> </li> </ul>

<h3 id="getdescribeaccountlimits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|The marker for the next set of results. (You received this marker from a previous call.)|
|PageSize|query|integer|false|The maximum number of results to return with this call.|
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
|Action|DescribeAccountLimits|
|Version|2015-12-01|

<h3 id="getdescribeaccountlimits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountLimitsOutput](#schemadescribeaccountlimitsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeAccountLimits

<a id="opIdPOST_DescribeAccountLimits"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeAccountLimits?Action=DescribeAccountLimits&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Marker":{},"PageSize":{}}'
```

`POST /#Action=DescribeAccountLimits`

<p>Describes the current Elastic Load Balancing resource limits for your Amazon Web Services account.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway Load Balancers</a> </p> </li> </ul>

> Body parameter

```json
{
  "Marker": {},
  "PageSize": {}
}
```

<h3 id="postdescribeaccountlimits-parameters">Parameters</h3>

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
|body|body|[DescribeAccountLimitsInput](#schemadescribeaccountlimitsinput)|false|none|
|» Marker|body|object|false|none|
|» PageSize|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeAccountLimits|
|Version|2015-12-01|

<h3 id="postdescribeaccountlimits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountLimitsOutput](#schemadescribeaccountlimitsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeListenerCertificates

<a id="opIdGET_DescribeListenerCertificates"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeListenerCertificates?ListenerArn=string&Action=DescribeListenerCertificates&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeListenerCertificates`

<p>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.</p> <p>If the default certificate is also in the certificate list, it appears twice in the results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers Guide</i>.</p>

<h3 id="getdescribelistenercertificates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ListenerArn|query|string|true|The Amazon Resource Names (ARN) of the listener.|
|Marker|query|string|false|The marker for the next set of results. (You received this marker from a previous call.)|
|PageSize|query|integer|false|The maximum number of results to return with this call.|
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
|Action|DescribeListenerCertificates|
|Version|2015-12-01|

<h3 id="getdescribelistenercertificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeListenerCertificatesOutput](#schemadescribelistenercertificatesoutput)|
|480|480|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeListenerCertificates

<a id="opIdPOST_DescribeListenerCertificates"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeListenerCertificates?Action=DescribeListenerCertificates&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ListenerArn":{},"Marker":{},"PageSize":{}}'
```

`POST /#Action=DescribeListenerCertificates`

<p>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.</p> <p>If the default certificate is also in the certificate list, it appears twice in the results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "ListenerArn": {},
  "Marker": {},
  "PageSize": {}
}
```

<h3 id="postdescribelistenercertificates-parameters">Parameters</h3>

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
|body|body|[DescribeListenerCertificatesInput](#schemadescribelistenercertificatesinput)|false|none|
|» ListenerArn|body|object|true|none|
|» Marker|body|object|false|none|
|» PageSize|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeListenerCertificates|
|Version|2015-12-01|

<h3 id="postdescribelistenercertificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeListenerCertificatesOutput](#schemadescribelistenercertificatesoutput)|
|480|480|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeListeners

<a id="opIdGET_DescribeListeners"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeListeners?Action=DescribeListeners&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeListeners`

Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.

<h3 id="getdescribelisteners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerArn|query|string|false|The Amazon Resource Name (ARN) of the load balancer.|
|ListenerArns|query|[[ListenerArn](#schemalistenerarn)]|false|The Amazon Resource Names (ARN) of the listeners.|
|Marker|query|string|false|The marker for the next set of results. (You received this marker from a previous call.)|
|PageSize|query|integer|false|The maximum number of results to return with this call.|
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
|Action|DescribeListeners|
|Version|2015-12-01|

<h3 id="getdescribelisteners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeListenersOutput](#schemadescribelistenersoutput)|
|480|480|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|481|481|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|482|482|UnsupportedProtocolException|[UnsupportedProtocolException](#schemaunsupportedprotocolexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeListeners

<a id="opIdPOST_DescribeListeners"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeListeners?Action=DescribeListeners&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerArn":{},"ListenerArns":{},"Marker":{},"PageSize":{}}'
```

`POST /#Action=DescribeListeners`

Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.

> Body parameter

```json
{
  "LoadBalancerArn": {},
  "ListenerArns": {},
  "Marker": {},
  "PageSize": {}
}
```

<h3 id="postdescribelisteners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[DescribeListenersInput](#schemadescribelistenersinput)|false|none|
|» LoadBalancerArn|body|object|false|none|
|» ListenerArns|body|object|false|none|
|» Marker|body|object|false|none|
|» PageSize|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeListeners|
|Version|2015-12-01|

<h3 id="postdescribelisteners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeListenersOutput](#schemadescribelistenersoutput)|
|480|480|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|481|481|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|482|482|UnsupportedProtocolException|[UnsupportedProtocolException](#schemaunsupportedprotocolexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeLoadBalancerAttributes

<a id="opIdGET_DescribeLoadBalancerAttributes"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeLoadBalancerAttributes?LoadBalancerArn=string&Action=DescribeLoadBalancerAttributes&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeLoadBalancerAttributes`

<p>Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>

<h3 id="getdescribeloadbalancerattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerArn|query|string|true|The Amazon Resource Name (ARN) of the load balancer.|
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
|Action|DescribeLoadBalancerAttributes|
|Version|2015-12-01|

<h3 id="getdescribeloadbalancerattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoadBalancerAttributesOutput](#schemadescribeloadbalancerattributesoutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeLoadBalancerAttributes

<a id="opIdPOST_DescribeLoadBalancerAttributes"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeLoadBalancerAttributes?Action=DescribeLoadBalancerAttributes&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerArn":{}}'
```

`POST /#Action=DescribeLoadBalancerAttributes`

<p>Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>

> Body parameter

```json
{
  "LoadBalancerArn": {}
}
```

<h3 id="postdescribeloadbalancerattributes-parameters">Parameters</h3>

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
|body|body|[DescribeLoadBalancerAttributesInput](#schemadescribeloadbalancerattributesinput)|false|none|
|» LoadBalancerArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeLoadBalancerAttributes|
|Version|2015-12-01|

<h3 id="postdescribeloadbalancerattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoadBalancerAttributesOutput](#schemadescribeloadbalancerattributesoutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeLoadBalancers

<a id="opIdGET_DescribeLoadBalancers"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeLoadBalancers?Action=DescribeLoadBalancers&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeLoadBalancers`

Describes the specified load balancers or all of your load balancers.

<h3 id="getdescribeloadbalancers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerArns|query|[[LoadBalancerArn](#schemaloadbalancerarn)]|false|The Amazon Resource Names (ARN) of the load balancers. You can specify up to 20 load balancers in a single call.|
|Names|query|[[LoadBalancerName](#schemaloadbalancername)]|false|The names of the load balancers.|
|Marker|query|string|false|The marker for the next set of results. (You received this marker from a previous call.)|
|PageSize|query|integer|false|The maximum number of results to return with this call.|
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
|Action|DescribeLoadBalancers|
|Version|2015-12-01|

<h3 id="getdescribeloadbalancers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoadBalancersOutput](#schemadescribeloadbalancersoutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeLoadBalancers

<a id="opIdPOST_DescribeLoadBalancers"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeLoadBalancers?Action=DescribeLoadBalancers&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerArns":{},"Names":{},"Marker":{},"PageSize":{}}'
```

`POST /#Action=DescribeLoadBalancers`

Describes the specified load balancers or all of your load balancers.

> Body parameter

```json
{
  "LoadBalancerArns": {},
  "Names": {},
  "Marker": {},
  "PageSize": {}
}
```

<h3 id="postdescribeloadbalancers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[DescribeLoadBalancersInput](#schemadescribeloadbalancersinput)|false|none|
|» LoadBalancerArns|body|object|false|none|
|» Names|body|object|false|none|
|» Marker|body|object|false|none|
|» PageSize|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeLoadBalancers|
|Version|2015-12-01|

<h3 id="postdescribeloadbalancers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoadBalancersOutput](#schemadescribeloadbalancersoutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeRules

<a id="opIdGET_DescribeRules"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeRules?Action=DescribeRules&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeRules`

Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.

<h3 id="getdescriberules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ListenerArn|query|string|false|The Amazon Resource Name (ARN) of the listener.|
|RuleArns|query|[[RuleArn](#schemarulearn)]|false|The Amazon Resource Names (ARN) of the rules.|
|Marker|query|string|false|The marker for the next set of results. (You received this marker from a previous call.)|
|PageSize|query|integer|false|The maximum number of results to return with this call.|
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
|Action|DescribeRules|
|Version|2015-12-01|

<h3 id="getdescriberules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRulesOutput](#schemadescriberulesoutput)|
|480|480|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|481|481|RuleNotFoundException|[RuleNotFoundException](#schemarulenotfoundexception)|
|482|482|UnsupportedProtocolException|[UnsupportedProtocolException](#schemaunsupportedprotocolexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeRules

<a id="opIdPOST_DescribeRules"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeRules?Action=DescribeRules&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ListenerArn":{},"RuleArns":{},"Marker":{},"PageSize":{}}'
```

`POST /#Action=DescribeRules`

Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.

> Body parameter

```json
{
  "ListenerArn": {},
  "RuleArns": {},
  "Marker": {},
  "PageSize": {}
}
```

<h3 id="postdescriberules-parameters">Parameters</h3>

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
|body|body|[DescribeRulesInput](#schemadescriberulesinput)|false|none|
|» ListenerArn|body|object|false|none|
|» RuleArns|body|object|false|none|
|» Marker|body|object|false|none|
|» PageSize|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeRules|
|Version|2015-12-01|

<h3 id="postdescriberules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRulesOutput](#schemadescriberulesoutput)|
|480|480|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|481|481|RuleNotFoundException|[RuleNotFoundException](#schemarulenotfoundexception)|
|482|482|UnsupportedProtocolException|[UnsupportedProtocolException](#schemaunsupportedprotocolexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeSSLPolicies

<a id="opIdGET_DescribeSSLPolicies"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeSSLPolicies?Action=DescribeSSLPolicies&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeSSLPolicies`

<p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>

<h3 id="getdescribesslpolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Names|query|[[SslPolicyName](#schemasslpolicyname)]|false|The names of the policies.|
|Marker|query|string|false|The marker for the next set of results. (You received this marker from a previous call.)|
|PageSize|query|integer|false|The maximum number of results to return with this call.|
|LoadBalancerType|query|string|false| The type of load balancer. The default lists the SSL policies for all load balancers.|
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
|LoadBalancerType|application|
|LoadBalancerType|network|
|LoadBalancerType|gateway|
|Action|DescribeSSLPolicies|
|Version|2015-12-01|

<h3 id="getdescribesslpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSSLPoliciesOutput](#schemadescribesslpoliciesoutput)|
|480|480|SSLPolicyNotFoundException|[SSLPolicyNotFoundException](#schemasslpolicynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeSSLPolicies

<a id="opIdPOST_DescribeSSLPolicies"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeSSLPolicies?Action=DescribeSSLPolicies&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Names":{},"Marker":{},"PageSize":{},"LoadBalancerType":{}}'
```

`POST /#Action=DescribeSSLPolicies`

<p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "Names": {},
  "Marker": {},
  "PageSize": {},
  "LoadBalancerType": {}
}
```

<h3 id="postdescribesslpolicies-parameters">Parameters</h3>

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
|body|body|[DescribeSSLPoliciesInput](#schemadescribesslpoliciesinput)|false|none|
|» Names|body|object|false|none|
|» Marker|body|object|false|none|
|» PageSize|body|object|false|none|
|» LoadBalancerType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeSSLPolicies|
|Version|2015-12-01|

<h3 id="postdescribesslpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSSLPoliciesOutput](#schemadescribesslpoliciesoutput)|
|480|480|SSLPolicyNotFoundException|[SSLPolicyNotFoundException](#schemasslpolicynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeTags

<a id="opIdGET_DescribeTags"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeTags?ResourceArns=string&Action=DescribeTags&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeTags`

Describes the tags for the specified Elastic Load Balancing resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.

<h3 id="getdescribetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArns|query|[[ResourceArn](#schemaresourcearn)]|true|The Amazon Resource Names (ARN) of the resources. You can specify up to 20 resources in a single call.|
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
|Action|DescribeTags|
|Version|2015-12-01|

<h3 id="getdescribetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTagsOutput](#schemadescribetagsoutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|481|481|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|482|482|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|483|483|RuleNotFoundException|[RuleNotFoundException](#schemarulenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeTags

<a id="opIdPOST_DescribeTags"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeTags?Action=DescribeTags&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceArns":{}}'
```

`POST /#Action=DescribeTags`

Describes the tags for the specified Elastic Load Balancing resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.

> Body parameter

```json
{
  "ResourceArns": {}
}
```

<h3 id="postdescribetags-parameters">Parameters</h3>

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
|body|body|[DescribeTagsInput](#schemadescribetagsinput)|false|none|
|» ResourceArns|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeTags|
|Version|2015-12-01|

<h3 id="postdescribetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTagsOutput](#schemadescribetagsoutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|481|481|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|482|482|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|483|483|RuleNotFoundException|[RuleNotFoundException](#schemarulenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeTargetGroupAttributes

<a id="opIdGET_DescribeTargetGroupAttributes"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeTargetGroupAttributes?TargetGroupArn=string&Action=DescribeTargetGroupAttributes&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeTargetGroupAttributes`

<p>Describes the attributes for the specified target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>

<h3 id="getdescribetargetgroupattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TargetGroupArn|query|string|true|The Amazon Resource Name (ARN) of the target group.|
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
|Action|DescribeTargetGroupAttributes|
|Version|2015-12-01|

<h3 id="getdescribetargetgroupattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTargetGroupAttributesOutput](#schemadescribetargetgroupattributesoutput)|
|480|480|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeTargetGroupAttributes

<a id="opIdPOST_DescribeTargetGroupAttributes"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeTargetGroupAttributes?Action=DescribeTargetGroupAttributes&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TargetGroupArn":{}}'
```

`POST /#Action=DescribeTargetGroupAttributes`

<p>Describes the attributes for the specified target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>

> Body parameter

```json
{
  "TargetGroupArn": {}
}
```

<h3 id="postdescribetargetgroupattributes-parameters">Parameters</h3>

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
|body|body|[DescribeTargetGroupAttributesInput](#schemadescribetargetgroupattributesinput)|false|none|
|» TargetGroupArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeTargetGroupAttributes|
|Version|2015-12-01|

<h3 id="postdescribetargetgroupattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTargetGroupAttributesOutput](#schemadescribetargetgroupattributesoutput)|
|480|480|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeTargetGroups

<a id="opIdGET_DescribeTargetGroups"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeTargetGroups?Action=DescribeTargetGroups&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeTargetGroups`

Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.

<h3 id="getdescribetargetgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerArn|query|string|false|The Amazon Resource Name (ARN) of the load balancer.|
|TargetGroupArns|query|[[TargetGroupArn](#schematargetgrouparn)]|false|The Amazon Resource Names (ARN) of the target groups.|
|Names|query|[[TargetGroupName](#schematargetgroupname)]|false|The names of the target groups.|
|Marker|query|string|false|The marker for the next set of results. (You received this marker from a previous call.)|
|PageSize|query|integer|false|The maximum number of results to return with this call.|
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
|Action|DescribeTargetGroups|
|Version|2015-12-01|

<h3 id="getdescribetargetgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTargetGroupsOutput](#schemadescribetargetgroupsoutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|481|481|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeTargetGroups

<a id="opIdPOST_DescribeTargetGroups"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeTargetGroups?Action=DescribeTargetGroups&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerArn":{},"TargetGroupArns":{},"Names":{},"Marker":{},"PageSize":{}}'
```

`POST /#Action=DescribeTargetGroups`

Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.

> Body parameter

```json
{
  "LoadBalancerArn": {},
  "TargetGroupArns": {},
  "Names": {},
  "Marker": {},
  "PageSize": {}
}
```

<h3 id="postdescribetargetgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[DescribeTargetGroupsInput](#schemadescribetargetgroupsinput)|false|none|
|» LoadBalancerArn|body|object|false|none|
|» TargetGroupArns|body|object|false|none|
|» Names|body|object|false|none|
|» Marker|body|object|false|none|
|» PageSize|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeTargetGroups|
|Version|2015-12-01|

<h3 id="postdescribetargetgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTargetGroupsOutput](#schemadescribetargetgroupsoutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|481|481|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeTargetHealth

<a id="opIdGET_DescribeTargetHealth"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeTargetHealth?TargetGroupArn=string&Action=DescribeTargetHealth&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeTargetHealth`

Describes the health of the specified targets or all of your targets.

<h3 id="getdescribetargethealth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TargetGroupArn|query|string|true|The Amazon Resource Name (ARN) of the target group.|
|Targets|query|[[TargetDescription](#schematargetdescription)]|false|The targets.|
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
|Action|DescribeTargetHealth|
|Version|2015-12-01|

<h3 id="getdescribetargethealth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTargetHealthOutput](#schemadescribetargethealthoutput)|
|480|480|InvalidTargetException|[InvalidTargetException](#schemainvalidtargetexception)|
|481|481|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|482|482|HealthUnavailableException|[HealthUnavailableException](#schemahealthunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeTargetHealth

<a id="opIdPOST_DescribeTargetHealth"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=DescribeTargetHealth?Action=DescribeTargetHealth&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TargetGroupArn":{},"Targets":{}}'
```

`POST /#Action=DescribeTargetHealth`

Describes the health of the specified targets or all of your targets.

> Body parameter

```json
{
  "TargetGroupArn": {},
  "Targets": {}
}
```

<h3 id="postdescribetargethealth-parameters">Parameters</h3>

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
|body|body|[DescribeTargetHealthInput](#schemadescribetargethealthinput)|false|none|
|» TargetGroupArn|body|object|true|none|
|» Targets|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeTargetHealth|
|Version|2015-12-01|

<h3 id="postdescribetargethealth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTargetHealthOutput](#schemadescribetargethealthoutput)|
|480|480|InvalidTargetException|[InvalidTargetException](#schemainvalidtargetexception)|
|481|481|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|482|482|HealthUnavailableException|[HealthUnavailableException](#schemahealthunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyListener

<a id="opIdGET_ModifyListener"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=ModifyListener?ListenerArn=string&Action=ModifyListener&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyListener`

<p>Replaces the specified properties of the specified listener. Any properties that you do not specify remain unchanged.</p> <p>Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP to TLS, you must add the security policy and default certificate properties.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>

<h3 id="getmodifylistener-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ListenerArn|query|string|true|The Amazon Resource Name (ARN) of the listener.|
|Port|query|integer|false|The port for connections from clients to the load balancer. You cannot specify a port for a Gateway Load Balancer.|
|Protocol|query|string|false|The protocol for connections from clients to the load balancer. Application Load Balancers support the HTTP and HTTPS protocols. Network Load Balancers support the TCP, TLS, UDP, and TCP_UDP protocols. You can’t change the protocol to UDP or TCP_UDP if dual-stack mode is enabled. You cannot specify a protocol for a Gateway Load Balancer.|
|SslPolicy|query|string|false|<p>[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>|
|Certificates|query|[[Certificate](#schemacertificate)]|false|[HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.|
|DefaultActions|query|[[Action](#schemaaction)]|false|The actions for the default rule.|
|AlpnPolicy|query|[[AlpnPolicyValue](#schemaalpnpolicyvalue)]|false|<p>[TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy. You can specify one policy name. The following are the possible values:</p> <ul> <li> <p> <code>HTTP1Only</code> </p> </li> <li> <p> <code>HTTP2Only</code> </p> </li> <li> <p> <code>HTTP2Optional</code> </p> </li> <li> <p> <code>HTTP2Preferred</code> </p> </li> <li> <p> <code>None</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#alpn-policies">ALPN policies</a> in the <i>Network Load Balancers Guide</i>.</p>|
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
|Protocol|HTTP|
|Protocol|HTTPS|
|Protocol|TCP|
|Protocol|TLS|
|Protocol|UDP|
|Protocol|TCP_UDP|
|Protocol|GENEVE|
|Action|ModifyListener|
|Version|2015-12-01|

<h3 id="getmodifylistener-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyListenerOutput](#schemamodifylisteneroutput)|
|480|480|DuplicateListenerException|[DuplicateListenerException](#schemaduplicatelistenerexception)|
|481|481|TooManyListenersException|[TooManyListenersException](#schematoomanylistenersexception)|
|482|482|TooManyCertificatesException|[TooManyCertificatesException](#schematoomanycertificatesexception)|
|483|483|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|484|484|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|485|485|TargetGroupAssociationLimitException|[TargetGroupAssociationLimitException](#schematargetgroupassociationlimitexception)|
|486|486|IncompatibleProtocolsException|[IncompatibleProtocolsException](#schemaincompatibleprotocolsexception)|
|487|487|SSLPolicyNotFoundException|[SSLPolicyNotFoundException](#schemasslpolicynotfoundexception)|
|488|488|CertificateNotFoundException|[CertificateNotFoundException](#schemacertificatenotfoundexception)|
|489|489|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|490|490|UnsupportedProtocolException|[UnsupportedProtocolException](#schemaunsupportedprotocolexception)|
|491|491|TooManyRegistrationsForTargetIdException|[TooManyRegistrationsForTargetIdException](#schematoomanyregistrationsfortargetidexception)|
|492|492|TooManyTargetsException|[TooManyTargetsException](#schematoomanytargetsexception)|
|493|493|TooManyActionsException|[TooManyActionsException](#schematoomanyactionsexception)|
|494|494|InvalidLoadBalancerActionException|[InvalidLoadBalancerActionException](#schemainvalidloadbalanceractionexception)|
|495|495|TooManyUniqueTargetGroupsPerLoadBalancerException|[TooManyUniqueTargetGroupsPerLoadBalancerException](#schematoomanyuniquetargetgroupsperloadbalancerexception)|
|496|496|ALPNPolicyNotSupportedException|[ALPNPolicyNotSupportedException](#schemaalpnpolicynotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyListener

<a id="opIdPOST_ModifyListener"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=ModifyListener?Action=ModifyListener&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ListenerArn":{},"Port":{},"Protocol":{},"SslPolicy":{},"Certificates":{},"DefaultActions":{},"AlpnPolicy":{}}'
```

`POST /#Action=ModifyListener`

<p>Replaces the specified properties of the specified listener. Any properties that you do not specify remain unchanged.</p> <p>Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP to TLS, you must add the security policy and default certificate properties.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>

> Body parameter

```json
{
  "ListenerArn": {},
  "Port": {},
  "Protocol": {},
  "SslPolicy": {},
  "Certificates": {},
  "DefaultActions": {},
  "AlpnPolicy": {}
}
```

<h3 id="postmodifylistener-parameters">Parameters</h3>

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
|body|body|[ModifyListenerInput](#schemamodifylistenerinput)|false|none|
|» ListenerArn|body|object|true|none|
|» Port|body|object|false|none|
|» Protocol|body|object|false|none|
|» SslPolicy|body|object|false|none|
|» Certificates|body|object|false|none|
|» DefaultActions|body|object|false|none|
|» AlpnPolicy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyListener|
|Version|2015-12-01|

<h3 id="postmodifylistener-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyListenerOutput](#schemamodifylisteneroutput)|
|480|480|DuplicateListenerException|[DuplicateListenerException](#schemaduplicatelistenerexception)|
|481|481|TooManyListenersException|[TooManyListenersException](#schematoomanylistenersexception)|
|482|482|TooManyCertificatesException|[TooManyCertificatesException](#schematoomanycertificatesexception)|
|483|483|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|484|484|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|485|485|TargetGroupAssociationLimitException|[TargetGroupAssociationLimitException](#schematargetgroupassociationlimitexception)|
|486|486|IncompatibleProtocolsException|[IncompatibleProtocolsException](#schemaincompatibleprotocolsexception)|
|487|487|SSLPolicyNotFoundException|[SSLPolicyNotFoundException](#schemasslpolicynotfoundexception)|
|488|488|CertificateNotFoundException|[CertificateNotFoundException](#schemacertificatenotfoundexception)|
|489|489|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|490|490|UnsupportedProtocolException|[UnsupportedProtocolException](#schemaunsupportedprotocolexception)|
|491|491|TooManyRegistrationsForTargetIdException|[TooManyRegistrationsForTargetIdException](#schematoomanyregistrationsfortargetidexception)|
|492|492|TooManyTargetsException|[TooManyTargetsException](#schematoomanytargetsexception)|
|493|493|TooManyActionsException|[TooManyActionsException](#schematoomanyactionsexception)|
|494|494|InvalidLoadBalancerActionException|[InvalidLoadBalancerActionException](#schemainvalidloadbalanceractionexception)|
|495|495|TooManyUniqueTargetGroupsPerLoadBalancerException|[TooManyUniqueTargetGroupsPerLoadBalancerException](#schematoomanyuniquetargetgroupsperloadbalancerexception)|
|496|496|ALPNPolicyNotSupportedException|[ALPNPolicyNotSupportedException](#schemaalpnpolicynotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyLoadBalancerAttributes

<a id="opIdGET_ModifyLoadBalancerAttributes"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=ModifyLoadBalancerAttributes?LoadBalancerArn=string&Attributes=%7B%22Key%22%3A%7B%7D%2C%22Value%22%3A%7B%7D%7D&Action=ModifyLoadBalancerAttributes&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyLoadBalancerAttributes`

<p>Modifies the specified attributes of the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.</p>

<h3 id="getmodifyloadbalancerattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerArn|query|string|true|The Amazon Resource Name (ARN) of the load balancer.|
|Attributes|query|[[LoadBalancerAttribute](#schemaloadbalancerattribute)]|true|The load balancer attributes.|
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
|Action|ModifyLoadBalancerAttributes|
|Version|2015-12-01|

<h3 id="getmodifyloadbalancerattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyLoadBalancerAttributesOutput](#schemamodifyloadbalancerattributesoutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyLoadBalancerAttributes

<a id="opIdPOST_ModifyLoadBalancerAttributes"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=ModifyLoadBalancerAttributes?Action=ModifyLoadBalancerAttributes&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerArn":{},"Attributes":{}}'
```

`POST /#Action=ModifyLoadBalancerAttributes`

<p>Modifies the specified attributes of the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.</p>

> Body parameter

```json
{
  "LoadBalancerArn": {},
  "Attributes": {}
}
```

<h3 id="postmodifyloadbalancerattributes-parameters">Parameters</h3>

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
|body|body|[ModifyLoadBalancerAttributesInput](#schemamodifyloadbalancerattributesinput)|false|none|
|» LoadBalancerArn|body|object|true|none|
|» Attributes|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyLoadBalancerAttributes|
|Version|2015-12-01|

<h3 id="postmodifyloadbalancerattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyLoadBalancerAttributesOutput](#schemamodifyloadbalancerattributesoutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyRule

<a id="opIdGET_ModifyRule"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=ModifyRule?RuleArn=string&Action=ModifyRule&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyRule`

<p>Replaces the specified properties of the specified rule. Any properties that you do not specify are unchanged.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>

<h3 id="getmodifyrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RuleArn|query|string|true|The Amazon Resource Name (ARN) of the rule.|
|Conditions|query|[[RuleCondition](#schemarulecondition)]|false|The conditions.|
|Actions|query|[[Action](#schemaaction)]|false|The actions.|
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
|Action|ModifyRule|
|Version|2015-12-01|

<h3 id="getmodifyrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyRuleOutput](#schemamodifyruleoutput)|
|480|480|TargetGroupAssociationLimitException|[TargetGroupAssociationLimitException](#schematargetgroupassociationlimitexception)|
|481|481|IncompatibleProtocolsException|[IncompatibleProtocolsException](#schemaincompatibleprotocolsexception)|
|482|482|RuleNotFoundException|[RuleNotFoundException](#schemarulenotfoundexception)|
|483|483|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|484|484|TooManyRegistrationsForTargetIdException|[TooManyRegistrationsForTargetIdException](#schematoomanyregistrationsfortargetidexception)|
|485|485|TooManyTargetsException|[TooManyTargetsException](#schematoomanytargetsexception)|
|486|486|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|487|487|UnsupportedProtocolException|[UnsupportedProtocolException](#schemaunsupportedprotocolexception)|
|488|488|TooManyActionsException|[TooManyActionsException](#schematoomanyactionsexception)|
|489|489|InvalidLoadBalancerActionException|[InvalidLoadBalancerActionException](#schemainvalidloadbalanceractionexception)|
|490|490|TooManyUniqueTargetGroupsPerLoadBalancerException|[TooManyUniqueTargetGroupsPerLoadBalancerException](#schematoomanyuniquetargetgroupsperloadbalancerexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyRule

<a id="opIdPOST_ModifyRule"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=ModifyRule?Action=ModifyRule&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RuleArn":{},"Conditions":{},"Actions":{}}'
```

`POST /#Action=ModifyRule`

<p>Replaces the specified properties of the specified rule. Any properties that you do not specify are unchanged.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>

> Body parameter

```json
{
  "RuleArn": {},
  "Conditions": {},
  "Actions": {}
}
```

<h3 id="postmodifyrule-parameters">Parameters</h3>

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
|body|body|[ModifyRuleInput](#schemamodifyruleinput)|false|none|
|» RuleArn|body|object|true|none|
|» Conditions|body|object|false|none|
|» Actions|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyRule|
|Version|2015-12-01|

<h3 id="postmodifyrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyRuleOutput](#schemamodifyruleoutput)|
|480|480|TargetGroupAssociationLimitException|[TargetGroupAssociationLimitException](#schematargetgroupassociationlimitexception)|
|481|481|IncompatibleProtocolsException|[IncompatibleProtocolsException](#schemaincompatibleprotocolsexception)|
|482|482|RuleNotFoundException|[RuleNotFoundException](#schemarulenotfoundexception)|
|483|483|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|484|484|TooManyRegistrationsForTargetIdException|[TooManyRegistrationsForTargetIdException](#schematoomanyregistrationsfortargetidexception)|
|485|485|TooManyTargetsException|[TooManyTargetsException](#schematoomanytargetsexception)|
|486|486|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|487|487|UnsupportedProtocolException|[UnsupportedProtocolException](#schemaunsupportedprotocolexception)|
|488|488|TooManyActionsException|[TooManyActionsException](#schematoomanyactionsexception)|
|489|489|InvalidLoadBalancerActionException|[InvalidLoadBalancerActionException](#schemainvalidloadbalanceractionexception)|
|490|490|TooManyUniqueTargetGroupsPerLoadBalancerException|[TooManyUniqueTargetGroupsPerLoadBalancerException](#schematoomanyuniquetargetgroupsperloadbalancerexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyTargetGroup

<a id="opIdGET_ModifyTargetGroup"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=ModifyTargetGroup?TargetGroupArn=string&Action=ModifyTargetGroup&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyTargetGroup`

Modifies the health checks used when evaluating the health state of the targets in the specified target group.

<h3 id="getmodifytargetgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TargetGroupArn|query|string|true|The Amazon Resource Name (ARN) of the target group.|
|HealthCheckProtocol|query|string|false|The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers and Gateway Load Balancers, the default is TCP. The TCP protocol is not supported for health checks if the protocol of the target group is HTTP or HTTPS. It is supported for health checks only if the protocol of the target group is TCP, TLS, UDP, or TCP_UDP. The GENEVE, TLS, UDP, and TCP_UDP protocols are not supported for health checks.|
|HealthCheckPort|query|string|false|The port the load balancer uses when performing health checks on targets.|
|HealthCheckPath|query|string|false|<p>[HTTP/HTTPS health checks] The destination for health checks on the targets.</p> <p>[HTTP1 or HTTP2 protocol version] The ping path. The default is /.</p> <p>[GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /Amazon Web Services.ALB/healthcheck.</p>|
|HealthCheckEnabled|query|boolean|false|Indicates whether health checks are enabled.|
|HealthCheckIntervalSeconds|query|integer|false|The approximate amount of time, in seconds, between health checks of an individual target.|
|HealthCheckTimeoutSeconds|query|integer|false|[HTTP/HTTPS health checks] The amount of time, in seconds, during which no response means a failed health check.|
|HealthyThresholdCount|query|integer|false|The number of consecutive health checks successes required before considering an unhealthy target healthy.|
|UnhealthyThresholdCount|query|integer|false|The number of consecutive health check failures required before considering the target unhealthy.|
|Matcher|query|object|false|[HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target. For target groups with a protocol of TCP, TCP_UDP, UDP or TLS the range is 200-599. For target groups with a protocol of HTTP or HTTPS, the range is 200-499. For target groups with a protocol of GENEVE, the range is 200-399.|
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
|HealthCheckProtocol|HTTP|
|HealthCheckProtocol|HTTPS|
|HealthCheckProtocol|TCP|
|HealthCheckProtocol|TLS|
|HealthCheckProtocol|UDP|
|HealthCheckProtocol|TCP_UDP|
|HealthCheckProtocol|GENEVE|
|Action|ModifyTargetGroup|
|Version|2015-12-01|

<h3 id="getmodifytargetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyTargetGroupOutput](#schemamodifytargetgroupoutput)|
|480|480|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyTargetGroup

<a id="opIdPOST_ModifyTargetGroup"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=ModifyTargetGroup?Action=ModifyTargetGroup&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TargetGroupArn":{},"HealthCheckProtocol":{},"HealthCheckPort":{},"HealthCheckPath":{},"HealthCheckEnabled":{},"HealthCheckIntervalSeconds":{},"HealthCheckTimeoutSeconds":{},"HealthyThresholdCount":{},"UnhealthyThresholdCount":{},"Matcher":{"HttpCode":{},"GrpcCode":{}}}'
```

`POST /#Action=ModifyTargetGroup`

Modifies the health checks used when evaluating the health state of the targets in the specified target group.

> Body parameter

```json
{
  "TargetGroupArn": {},
  "HealthCheckProtocol": {},
  "HealthCheckPort": {},
  "HealthCheckPath": {},
  "HealthCheckEnabled": {},
  "HealthCheckIntervalSeconds": {},
  "HealthCheckTimeoutSeconds": {},
  "HealthyThresholdCount": {},
  "UnhealthyThresholdCount": {},
  "Matcher": {
    "HttpCode": {},
    "GrpcCode": {}
  }
}
```

<h3 id="postmodifytargetgroup-parameters">Parameters</h3>

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
|body|body|[ModifyTargetGroupInput](#schemamodifytargetgroupinput)|false|none|
|» TargetGroupArn|body|object|true|none|
|» HealthCheckProtocol|body|object|false|none|
|» HealthCheckPort|body|object|false|none|
|» HealthCheckPath|body|object|false|none|
|» HealthCheckEnabled|body|object|false|none|
|» HealthCheckIntervalSeconds|body|object|false|none|
|» HealthCheckTimeoutSeconds|body|object|false|none|
|» HealthyThresholdCount|body|object|false|none|
|» UnhealthyThresholdCount|body|object|false|none|
|» Matcher|body|object|false|none|
|» » HttpCode|body|object|false|none|
|» » GrpcCode|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyTargetGroup|
|Version|2015-12-01|

<h3 id="postmodifytargetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyTargetGroupOutput](#schemamodifytargetgroupoutput)|
|480|480|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyTargetGroupAttributes

<a id="opIdGET_ModifyTargetGroupAttributes"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=ModifyTargetGroupAttributes?TargetGroupArn=string&Attributes=%7B%22Key%22%3A%7B%7D%2C%22Value%22%3A%7B%7D%7D&Action=ModifyTargetGroupAttributes&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyTargetGroupAttributes`

Modifies the specified attributes of the specified target group.

<h3 id="getmodifytargetgroupattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TargetGroupArn|query|string|true|The Amazon Resource Name (ARN) of the target group.|
|Attributes|query|[[TargetGroupAttribute](#schematargetgroupattribute)]|true|The attributes.|
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
|Action|ModifyTargetGroupAttributes|
|Version|2015-12-01|

<h3 id="getmodifytargetgroupattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyTargetGroupAttributesOutput](#schemamodifytargetgroupattributesoutput)|
|480|480|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyTargetGroupAttributes

<a id="opIdPOST_ModifyTargetGroupAttributes"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=ModifyTargetGroupAttributes?Action=ModifyTargetGroupAttributes&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TargetGroupArn":{},"Attributes":{}}'
```

`POST /#Action=ModifyTargetGroupAttributes`

Modifies the specified attributes of the specified target group.

> Body parameter

```json
{
  "TargetGroupArn": {},
  "Attributes": {}
}
```

<h3 id="postmodifytargetgroupattributes-parameters">Parameters</h3>

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
|body|body|[ModifyTargetGroupAttributesInput](#schemamodifytargetgroupattributesinput)|false|none|
|» TargetGroupArn|body|object|true|none|
|» Attributes|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyTargetGroupAttributes|
|Version|2015-12-01|

<h3 id="postmodifytargetgroupattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyTargetGroupAttributesOutput](#schemamodifytargetgroupattributesoutput)|
|480|480|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RegisterTargets

<a id="opIdGET_RegisterTargets"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=RegisterTargets?TargetGroupArn=string&Targets=%7B%22Id%22%3A%7B%7D%2C%22Port%22%3A%7B%7D%2C%22AvailabilityZone%22%3A%7B%7D%7D&Action=RegisterTargets&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RegisterTargets`

<p>Registers the specified targets with the specified target group.</p> <p>If the target is an EC2 instance, it must be in the <code>running</code> state when you register it.</p> <p>By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports.</p> <p>With a Network Load Balancer, you cannot register instances by instance ID if they have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1. You can register instances of these types by IP address.</p>

<h3 id="getregistertargets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TargetGroupArn|query|string|true|The Amazon Resource Name (ARN) of the target group.|
|Targets|query|[[TargetDescription](#schematargetdescription)]|true|The targets.|
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
|Action|RegisterTargets|
|Version|2015-12-01|

<h3 id="getregistertargets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterTargetsOutput](#schemaregistertargetsoutput)|
|480|480|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|481|481|TooManyTargetsException|[TooManyTargetsException](#schematoomanytargetsexception)|
|482|482|InvalidTargetException|[InvalidTargetException](#schemainvalidtargetexception)|
|483|483|TooManyRegistrationsForTargetIdException|[TooManyRegistrationsForTargetIdException](#schematoomanyregistrationsfortargetidexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RegisterTargets

<a id="opIdPOST_RegisterTargets"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=RegisterTargets?Action=RegisterTargets&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TargetGroupArn":{},"Targets":{}}'
```

`POST /#Action=RegisterTargets`

<p>Registers the specified targets with the specified target group.</p> <p>If the target is an EC2 instance, it must be in the <code>running</code> state when you register it.</p> <p>By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports.</p> <p>With a Network Load Balancer, you cannot register instances by instance ID if they have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1. You can register instances of these types by IP address.</p>

> Body parameter

```json
{
  "TargetGroupArn": {},
  "Targets": {}
}
```

<h3 id="postregistertargets-parameters">Parameters</h3>

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
|body|body|[RegisterTargetsInput](#schemaregistertargetsinput)|false|none|
|» TargetGroupArn|body|object|true|none|
|» Targets|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RegisterTargets|
|Version|2015-12-01|

<h3 id="postregistertargets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterTargetsOutput](#schemaregistertargetsoutput)|
|480|480|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|481|481|TooManyTargetsException|[TooManyTargetsException](#schematoomanytargetsexception)|
|482|482|InvalidTargetException|[InvalidTargetException](#schemainvalidtargetexception)|
|483|483|TooManyRegistrationsForTargetIdException|[TooManyRegistrationsForTargetIdException](#schematoomanyregistrationsfortargetidexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RemoveListenerCertificates

<a id="opIdGET_RemoveListenerCertificates"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=RemoveListenerCertificates?ListenerArn=string&Certificates=%7B%22CertificateArn%22%3A%7B%7D%2C%22IsDefault%22%3A%7B%7D%7D&Action=RemoveListenerCertificates&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RemoveListenerCertificates`

Removes the specified certificate from the certificate list for the specified HTTPS or TLS listener.

<h3 id="getremovelistenercertificates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ListenerArn|query|string|true|The Amazon Resource Name (ARN) of the listener.|
|Certificates|query|[[Certificate](#schemacertificate)]|true|The certificate to remove. You can specify one certificate per call. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.|
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
|Action|RemoveListenerCertificates|
|Version|2015-12-01|

<h3 id="getremovelistenercertificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveListenerCertificatesOutput](#schemaremovelistenercertificatesoutput)|
|480|480|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RemoveListenerCertificates

<a id="opIdPOST_RemoveListenerCertificates"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=RemoveListenerCertificates?Action=RemoveListenerCertificates&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ListenerArn":{},"Certificates":{}}'
```

`POST /#Action=RemoveListenerCertificates`

Removes the specified certificate from the certificate list for the specified HTTPS or TLS listener.

> Body parameter

```json
{
  "ListenerArn": {},
  "Certificates": {}
}
```

<h3 id="postremovelistenercertificates-parameters">Parameters</h3>

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
|body|body|[RemoveListenerCertificatesInput](#schemaremovelistenercertificatesinput)|false|none|
|» ListenerArn|body|object|true|none|
|» Certificates|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RemoveListenerCertificates|
|Version|2015-12-01|

<h3 id="postremovelistenercertificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveListenerCertificatesOutput](#schemaremovelistenercertificatesoutput)|
|480|480|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RemoveTags

<a id="opIdGET_RemoveTags"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=RemoveTags?ResourceArns=string&TagKeys=string&Action=RemoveTags&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RemoveTags`

Removes the specified tags from the specified Elastic Load Balancing resources. You can remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.

<h3 id="getremovetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArns|query|[[ResourceArn](#schemaresourcearn)]|true|The Amazon Resource Name (ARN) of the resource.|
|TagKeys|query|[[TagKey](#schematagkey)]|true|The tag keys for the tags to remove.|
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
|Action|RemoveTags|
|Version|2015-12-01|

<h3 id="getremovetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveTagsOutput](#schemaremovetagsoutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|481|481|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|482|482|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|483|483|RuleNotFoundException|[RuleNotFoundException](#schemarulenotfoundexception)|
|484|484|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RemoveTags

<a id="opIdPOST_RemoveTags"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=RemoveTags?Action=RemoveTags&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceArns":{},"TagKeys":{}}'
```

`POST /#Action=RemoveTags`

Removes the specified tags from the specified Elastic Load Balancing resources. You can remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.

> Body parameter

```json
{
  "ResourceArns": {},
  "TagKeys": {}
}
```

<h3 id="postremovetags-parameters">Parameters</h3>

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
|body|body|[RemoveTagsInput](#schemaremovetagsinput)|false|none|
|» ResourceArns|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RemoveTags|
|Version|2015-12-01|

<h3 id="postremovetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveTagsOutput](#schemaremovetagsoutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|481|481|TargetGroupNotFoundException|[TargetGroupNotFoundException](#schematargetgroupnotfoundexception)|
|482|482|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|483|483|RuleNotFoundException|[RuleNotFoundException](#schemarulenotfoundexception)|
|484|484|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetIpAddressType

<a id="opIdGET_SetIpAddressType"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=SetIpAddressType?LoadBalancerArn=string&IpAddressType=ipv4&Action=SetIpAddressType&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetIpAddressType`

Sets the type of IP addresses used by the subnets of the specified load balancer.

<h3 id="getsetipaddresstype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerArn|query|string|true|The Amazon Resource Name (ARN) of the load balancer.|
|IpAddressType|query|string|true|The IP address type. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses). You can’t specify <code>dualstack</code> for a load balancer with a UDP or TCP_UDP listener.|
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
|IpAddressType|ipv4|
|IpAddressType|dualstack|
|Action|SetIpAddressType|
|Version|2015-12-01|

<h3 id="getsetipaddresstype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetIpAddressTypeOutput](#schemasetipaddresstypeoutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|482|482|InvalidSubnetException|[InvalidSubnetException](#schemainvalidsubnetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetIpAddressType

<a id="opIdPOST_SetIpAddressType"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=SetIpAddressType?Action=SetIpAddressType&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerArn":{},"IpAddressType":{}}'
```

`POST /#Action=SetIpAddressType`

Sets the type of IP addresses used by the subnets of the specified load balancer.

> Body parameter

```json
{
  "LoadBalancerArn": {},
  "IpAddressType": {}
}
```

<h3 id="postsetipaddresstype-parameters">Parameters</h3>

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
|body|body|[SetIpAddressTypeInput](#schemasetipaddresstypeinput)|false|none|
|» LoadBalancerArn|body|object|true|none|
|» IpAddressType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetIpAddressType|
|Version|2015-12-01|

<h3 id="postsetipaddresstype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetIpAddressTypeOutput](#schemasetipaddresstypeoutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|482|482|InvalidSubnetException|[InvalidSubnetException](#schemainvalidsubnetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetRulePriorities

<a id="opIdGET_SetRulePriorities"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=SetRulePriorities?RulePriorities=%7B%22RuleArn%22%3A%7B%7D%2C%22Priority%22%3A%7B%7D%7D&Action=SetRulePriorities&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetRulePriorities`

<p>Sets the priorities of the specified rules.</p> <p>You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.</p>

<h3 id="getsetrulepriorities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RulePriorities|query|[[RulePriorityPair](#schemaruleprioritypair)]|true|The rule priorities.|
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
|Action|SetRulePriorities|
|Version|2015-12-01|

<h3 id="getsetrulepriorities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetRulePrioritiesOutput](#schemasetruleprioritiesoutput)|
|480|480|RuleNotFoundException|[RuleNotFoundException](#schemarulenotfoundexception)|
|481|481|PriorityInUseException|[PriorityInUseException](#schemapriorityinuseexception)|
|482|482|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetRulePriorities

<a id="opIdPOST_SetRulePriorities"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=SetRulePriorities?Action=SetRulePriorities&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RulePriorities":{}}'
```

`POST /#Action=SetRulePriorities`

<p>Sets the priorities of the specified rules.</p> <p>You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.</p>

> Body parameter

```json
{
  "RulePriorities": {}
}
```

<h3 id="postsetrulepriorities-parameters">Parameters</h3>

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
|body|body|[SetRulePrioritiesInput](#schemasetruleprioritiesinput)|false|none|
|» RulePriorities|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetRulePriorities|
|Version|2015-12-01|

<h3 id="postsetrulepriorities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetRulePrioritiesOutput](#schemasetruleprioritiesoutput)|
|480|480|RuleNotFoundException|[RuleNotFoundException](#schemarulenotfoundexception)|
|481|481|PriorityInUseException|[PriorityInUseException](#schemapriorityinuseexception)|
|482|482|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetSecurityGroups

<a id="opIdGET_SetSecurityGroups"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=SetSecurityGroups?LoadBalancerArn=string&SecurityGroups=string&Action=SetSecurityGroups&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetSecurityGroups`

<p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer or Gateway Load Balancer.</p>

<h3 id="getsetsecuritygroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerArn|query|string|true|The Amazon Resource Name (ARN) of the load balancer.|
|SecurityGroups|query|[[SecurityGroupId](#schemasecuritygroupid)]|true|The IDs of the security groups.|
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
|Action|SetSecurityGroups|
|Version|2015-12-01|

<h3 id="getsetsecuritygroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetSecurityGroupsOutput](#schemasetsecuritygroupsoutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|482|482|InvalidSecurityGroupException|[InvalidSecurityGroupException](#schemainvalidsecuritygroupexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetSecurityGroups

<a id="opIdPOST_SetSecurityGroups"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=SetSecurityGroups?Action=SetSecurityGroups&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerArn":{},"SecurityGroups":{}}'
```

`POST /#Action=SetSecurityGroups`

<p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer or Gateway Load Balancer.</p>

> Body parameter

```json
{
  "LoadBalancerArn": {},
  "SecurityGroups": {}
}
```

<h3 id="postsetsecuritygroups-parameters">Parameters</h3>

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
|body|body|[SetSecurityGroupsInput](#schemasetsecuritygroupsinput)|false|none|
|» LoadBalancerArn|body|object|true|none|
|» SecurityGroups|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetSecurityGroups|
|Version|2015-12-01|

<h3 id="postsetsecuritygroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetSecurityGroupsOutput](#schemasetsecuritygroupsoutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|482|482|InvalidSecurityGroupException|[InvalidSecurityGroupException](#schemainvalidsecuritygroupexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetSubnets

<a id="opIdGET_SetSubnets"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=SetSubnets?LoadBalancerArn=string&Action=SetSubnets&Version=2015-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetSubnets`

<p>Enables the Availability Zones for the specified public subnets for the specified Application Load Balancer or Network Load Balancer. The specified subnets replace the previously enabled subnets.</p> <p>When you specify subnets for a Network Load Balancer, you must include all subnets that were enabled previously, with their existing configurations, plus any additional subnets.</p>

<h3 id="getsetsubnets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerArn|query|string|true|The Amazon Resource Name (ARN) of the load balancer.|
|Subnets|query|[[SubnetId](#schemasubnetid)]|false|<p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones.</p> <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p> <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones.</p>|
|SubnetMappings|query|[[SubnetMapping](#schemasubnetmapping)]|false|<p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones. You cannot specify Elastic IP addresses for your subnets.</p> <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p> <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.</p>|
|IpAddressType|query|string|false|[Network Load Balancers] The type of IP addresses used by the subnets for your load balancer. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses). You can’t specify <code>dualstack</code> for a load balancer with a UDP or TCP_UDP listener. .|
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
|IpAddressType|ipv4|
|IpAddressType|dualstack|
|Action|SetSubnets|
|Version|2015-12-01|

<h3 id="getsetsubnets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetSubnetsOutput](#schemasetsubnetsoutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|482|482|SubnetNotFoundException|[SubnetNotFoundException](#schemasubnetnotfoundexception)|
|483|483|InvalidSubnetException|[InvalidSubnetException](#schemainvalidsubnetexception)|
|484|484|AllocationIdNotFoundException|[AllocationIdNotFoundException](#schemaallocationidnotfoundexception)|
|485|485|AvailabilityZoneNotSupportedException|[AvailabilityZoneNotSupportedException](#schemaavailabilityzonenotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetSubnets

<a id="opIdPOST_SetSubnets"></a>

> Code samples

```bash
curl 'https://elasticloadbalancingv2.us-east-1.amazonaws.com/#Action=SetSubnets?Action=SetSubnets&Version=2015-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerArn":{},"Subnets":{},"SubnetMappings":{},"IpAddressType":{}}'
```

`POST /#Action=SetSubnets`

<p>Enables the Availability Zones for the specified public subnets for the specified Application Load Balancer or Network Load Balancer. The specified subnets replace the previously enabled subnets.</p> <p>When you specify subnets for a Network Load Balancer, you must include all subnets that were enabled previously, with their existing configurations, plus any additional subnets.</p>

> Body parameter

```json
{
  "LoadBalancerArn": {},
  "Subnets": {},
  "SubnetMappings": {},
  "IpAddressType": {}
}
```

<h3 id="postsetsubnets-parameters">Parameters</h3>

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
|body|body|[SetSubnetsInput](#schemasetsubnetsinput)|false|none|
|» LoadBalancerArn|body|object|true|none|
|» Subnets|body|object|false|none|
|» SubnetMappings|body|object|false|none|
|» IpAddressType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetSubnets|
|Version|2015-12-01|

<h3 id="postsetsubnets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetSubnetsOutput](#schemasetsubnetsoutput)|
|480|480|LoadBalancerNotFoundException|[LoadBalancerNotFoundException](#schemaloadbalancernotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|482|482|SubnetNotFoundException|[SubnetNotFoundException](#schemasubnetnotfoundexception)|
|483|483|InvalidSubnetException|[InvalidSubnetException](#schemainvalidsubnetexception)|
|484|484|AllocationIdNotFoundException|[AllocationIdNotFoundException](#schemaallocationidnotfoundexception)|
|485|485|AvailabilityZoneNotSupportedException|[AvailabilityZoneNotSupportedException](#schemaavailabilityzonenotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddListenerCertificatesOutput">AddListenerCertificatesOutput</h2>
<!-- backwards compatibility -->
<a id="schemaaddlistenercertificatesoutput"></a>
<a id="schema_AddListenerCertificatesOutput"></a>
<a id="tocSaddlistenercertificatesoutput"></a>
<a id="tocsaddlistenercertificatesoutput"></a>

```json
{
  "Certificates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Certificates|object|false|none|none|

<h2 id="tocS_Certificate">Certificate</h2>
<!-- backwards compatibility -->
<a id="schemacertificate"></a>
<a id="schema_Certificate"></a>
<a id="tocScertificate"></a>
<a id="tocscertificate"></a>

```json
{
  "CertificateArn": {},
  "IsDefault": {}
}
```

Information about an SSL server certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|false|none|none|
|IsDefault|object|false|none|none|

<h2 id="tocS_ListenerNotFoundException">ListenerNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemalistenernotfoundexception"></a>
<a id="schema_ListenerNotFoundException"></a>
<a id="tocSlistenernotfoundexception"></a>
<a id="tocslistenernotfoundexception"></a>

```json
null
```

<h2 id="tocS_TooManyCertificatesException">TooManyCertificatesException</h2>
<!-- backwards compatibility -->
<a id="schematoomanycertificatesexception"></a>
<a id="schema_TooManyCertificatesException"></a>
<a id="tocStoomanycertificatesexception"></a>
<a id="tocstoomanycertificatesexception"></a>

```json
null
```

<h2 id="tocS_CertificateNotFoundException">CertificateNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemacertificatenotfoundexception"></a>
<a id="schema_CertificateNotFoundException"></a>
<a id="tocScertificatenotfoundexception"></a>
<a id="tocscertificatenotfoundexception"></a>

```json
null
```

<h2 id="tocS_AddTagsOutput">AddTagsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagsoutput"></a>
<a id="schema_AddTagsOutput"></a>
<a id="tocSaddtagsoutput"></a>
<a id="tocsaddtagsoutput"></a>

```json
{}
```

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

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

Information about a tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|false|none|none|

<h2 id="tocS_DuplicateTagKeysException">DuplicateTagKeysException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicatetagkeysexception"></a>
<a id="schema_DuplicateTagKeysException"></a>
<a id="tocSduplicatetagkeysexception"></a>
<a id="tocsduplicatetagkeysexception"></a>

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

<h2 id="tocS_LoadBalancerNotFoundException">LoadBalancerNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancernotfoundexception"></a>
<a id="schema_LoadBalancerNotFoundException"></a>
<a id="tocSloadbalancernotfoundexception"></a>
<a id="tocsloadbalancernotfoundexception"></a>

```json
null
```

<h2 id="tocS_TargetGroupNotFoundException">TargetGroupNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schematargetgroupnotfoundexception"></a>
<a id="schema_TargetGroupNotFoundException"></a>
<a id="tocStargetgroupnotfoundexception"></a>
<a id="tocstargetgroupnotfoundexception"></a>

```json
null
```

<h2 id="tocS_RuleNotFoundException">RuleNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemarulenotfoundexception"></a>
<a id="schema_RuleNotFoundException"></a>
<a id="tocSrulenotfoundexception"></a>
<a id="tocsrulenotfoundexception"></a>

```json
null
```

<h2 id="tocS_CreateListenerOutput">CreateListenerOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatelisteneroutput"></a>
<a id="schema_CreateListenerOutput"></a>
<a id="tocScreatelisteneroutput"></a>
<a id="tocscreatelisteneroutput"></a>

```json
{
  "Listeners": [
    {
      "Certificates": [
        {
          "CertificateArn": "arn:aws:iam::123456789012:server-certificate/my-server-cert"
        }
      ],
      "DefaultActions": [
        {
          "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
          "Type": "forward"
        }
      ],
      "ListenerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2",
      "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
      "Port": 443,
      "Protocol": "HTTPS",
      "SslPolicy": "ELBSecurityPolicy-2015-05"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Listeners|object|false|none|none|

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "Type": {},
  "TargetGroupArn": {},
  "AuthenticateOidcConfig": {
    "Issuer": {},
    "AuthorizationEndpoint": {},
    "TokenEndpoint": {},
    "UserInfoEndpoint": {},
    "ClientId": {},
    "ClientSecret": {},
    "SessionCookieName": {},
    "Scope": {},
    "SessionTimeout": {},
    "AuthenticationRequestExtraParams": {
      "property1": "string",
      "property2": "string"
    },
    "OnUnauthenticatedRequest": {},
    "UseExistingClientSecret": {}
  },
  "AuthenticateCognitoConfig": {
    "UserPoolArn": {},
    "UserPoolClientId": {},
    "UserPoolDomain": {},
    "SessionCookieName": {},
    "Scope": {},
    "SessionTimeout": {},
    "AuthenticationRequestExtraParams": {
      "property1": "string",
      "property2": "string"
    },
    "OnUnauthenticatedRequest": {}
  },
  "Order": {},
  "RedirectConfig": {
    "Protocol": {},
    "Port": {},
    "Host": {},
    "Path": {},
    "Query": {},
    "StatusCode": {}
  },
  "FixedResponseConfig": {
    "MessageBody": {},
    "StatusCode": {},
    "ContentType": {}
  },
  "ForwardConfig": {
    "TargetGroups": {},
    "TargetGroupStickinessConfig": {
      "Enabled": {},
      "DurationSeconds": {}
    }
  }
}
```

<p>Information about an action.</p> <p>Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|TargetGroupArn|object|false|none|none|
|AuthenticateOidcConfig|object|false|none|none|
|AuthenticateCognitoConfig|object|false|none|none|
|Order|object|false|none|none|
|RedirectConfig|object|false|none|none|
|FixedResponseConfig|object|false|none|none|
|ForwardConfig|object|false|none|none|

<h2 id="tocS_AlpnPolicyValue">AlpnPolicyValue</h2>
<!-- backwards compatibility -->
<a id="schemaalpnpolicyvalue"></a>
<a id="schema_AlpnPolicyValue"></a>
<a id="tocSalpnpolicyvalue"></a>
<a id="tocsalpnpolicyvalue"></a>

```json
"string"
```

<h2 id="tocS_DuplicateListenerException">DuplicateListenerException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicatelistenerexception"></a>
<a id="schema_DuplicateListenerException"></a>
<a id="tocSduplicatelistenerexception"></a>
<a id="tocsduplicatelistenerexception"></a>

```json
null
```

<h2 id="tocS_TooManyListenersException">TooManyListenersException</h2>
<!-- backwards compatibility -->
<a id="schematoomanylistenersexception"></a>
<a id="schema_TooManyListenersException"></a>
<a id="tocStoomanylistenersexception"></a>
<a id="tocstoomanylistenersexception"></a>

```json
null
```

<h2 id="tocS_TargetGroupAssociationLimitException">TargetGroupAssociationLimitException</h2>
<!-- backwards compatibility -->
<a id="schematargetgroupassociationlimitexception"></a>
<a id="schema_TargetGroupAssociationLimitException"></a>
<a id="tocStargetgroupassociationlimitexception"></a>
<a id="tocstargetgroupassociationlimitexception"></a>

```json
null
```

<h2 id="tocS_InvalidConfigurationRequestException">InvalidConfigurationRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidconfigurationrequestexception"></a>
<a id="schema_InvalidConfigurationRequestException"></a>
<a id="tocSinvalidconfigurationrequestexception"></a>
<a id="tocsinvalidconfigurationrequestexception"></a>

```json
null
```

<h2 id="tocS_IncompatibleProtocolsException">IncompatibleProtocolsException</h2>
<!-- backwards compatibility -->
<a id="schemaincompatibleprotocolsexception"></a>
<a id="schema_IncompatibleProtocolsException"></a>
<a id="tocSincompatibleprotocolsexception"></a>
<a id="tocsincompatibleprotocolsexception"></a>

```json
null
```

<h2 id="tocS_SSLPolicyNotFoundException">SSLPolicyNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemasslpolicynotfoundexception"></a>
<a id="schema_SSLPolicyNotFoundException"></a>
<a id="tocSsslpolicynotfoundexception"></a>
<a id="tocssslpolicynotfoundexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedProtocolException">UnsupportedProtocolException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedprotocolexception"></a>
<a id="schema_UnsupportedProtocolException"></a>
<a id="tocSunsupportedprotocolexception"></a>
<a id="tocsunsupportedprotocolexception"></a>

```json
null
```

<h2 id="tocS_TooManyRegistrationsForTargetIdException">TooManyRegistrationsForTargetIdException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyregistrationsfortargetidexception"></a>
<a id="schema_TooManyRegistrationsForTargetIdException"></a>
<a id="tocStoomanyregistrationsfortargetidexception"></a>
<a id="tocstoomanyregistrationsfortargetidexception"></a>

```json
null
```

<h2 id="tocS_TooManyTargetsException">TooManyTargetsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytargetsexception"></a>
<a id="schema_TooManyTargetsException"></a>
<a id="tocStoomanytargetsexception"></a>
<a id="tocstoomanytargetsexception"></a>

```json
null
```

<h2 id="tocS_TooManyActionsException">TooManyActionsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyactionsexception"></a>
<a id="schema_TooManyActionsException"></a>
<a id="tocStoomanyactionsexception"></a>
<a id="tocstoomanyactionsexception"></a>

```json
null
```

<h2 id="tocS_InvalidLoadBalancerActionException">InvalidLoadBalancerActionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidloadbalanceractionexception"></a>
<a id="schema_InvalidLoadBalancerActionException"></a>
<a id="tocSinvalidloadbalanceractionexception"></a>
<a id="tocsinvalidloadbalanceractionexception"></a>

```json
null
```

<h2 id="tocS_TooManyUniqueTargetGroupsPerLoadBalancerException">TooManyUniqueTargetGroupsPerLoadBalancerException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyuniquetargetgroupsperloadbalancerexception"></a>
<a id="schema_TooManyUniqueTargetGroupsPerLoadBalancerException"></a>
<a id="tocStoomanyuniquetargetgroupsperloadbalancerexception"></a>
<a id="tocstoomanyuniquetargetgroupsperloadbalancerexception"></a>

```json
null
```

<h2 id="tocS_ALPNPolicyNotSupportedException">ALPNPolicyNotSupportedException</h2>
<!-- backwards compatibility -->
<a id="schemaalpnpolicynotsupportedexception"></a>
<a id="schema_ALPNPolicyNotSupportedException"></a>
<a id="tocSalpnpolicynotsupportedexception"></a>
<a id="tocsalpnpolicynotsupportedexception"></a>

```json
null
```

<h2 id="tocS_CreateLoadBalancerOutput">CreateLoadBalancerOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateloadbalanceroutput"></a>
<a id="schema_CreateLoadBalancerOutput"></a>
<a id="tocScreateloadbalanceroutput"></a>
<a id="tocscreateloadbalanceroutput"></a>

```json
{
  "LoadBalancers": [
    {
      "AvailabilityZones": [
        {
          "SubnetId": "subnet-8360a9e7",
          "ZoneName": "us-west-2a"
        },
        {
          "SubnetId": "subnet-b7d581c0",
          "ZoneName": "us-west-2b"
        }
      ],
      "CanonicalHostedZoneId": "Z2P70J7EXAMPLE",
      "CreatedTime": "2016-03-25T21:29:48.850Z",
      "DNSName": "internal-my-internal-load-balancer-1529930873.us-west-2.elb.amazonaws.com",
      "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-internal-load-balancer/5b49b8d4303115c2",
      "LoadBalancerName": "my-internal-load-balancer",
      "Scheme": "internal",
      "SecurityGroups": [
        "sg-5943793c"
      ],
      "State": {
        "Code": "provisioning"
      },
      "Type": "application",
      "VpcId": "vpc-3ac0fb5f"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancers|object|false|none|none|

<h2 id="tocS_SubnetId">SubnetId</h2>
<!-- backwards compatibility -->
<a id="schemasubnetid"></a>
<a id="schema_SubnetId"></a>
<a id="tocSsubnetid"></a>
<a id="tocssubnetid"></a>

```json
"string"
```

<h2 id="tocS_SubnetMapping">SubnetMapping</h2>
<!-- backwards compatibility -->
<a id="schemasubnetmapping"></a>
<a id="schema_SubnetMapping"></a>
<a id="tocSsubnetmapping"></a>
<a id="tocssubnetmapping"></a>

```json
{
  "SubnetId": {},
  "AllocationId": {},
  "PrivateIPv4Address": {},
  "IPv6Address": {}
}
```

Information about a subnet mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetId|object|false|none|none|
|AllocationId|object|false|none|none|
|PrivateIPv4Address|object|false|none|none|
|IPv6Address|object|false|none|none|

<h2 id="tocS_SecurityGroupId">SecurityGroupId</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupid"></a>
<a id="schema_SecurityGroupId"></a>
<a id="tocSsecuritygroupid"></a>
<a id="tocssecuritygroupid"></a>

```json
"string"
```

<h2 id="tocS_DuplicateLoadBalancerNameException">DuplicateLoadBalancerNameException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicateloadbalancernameexception"></a>
<a id="schema_DuplicateLoadBalancerNameException"></a>
<a id="tocSduplicateloadbalancernameexception"></a>
<a id="tocsduplicateloadbalancernameexception"></a>

```json
null
```

<h2 id="tocS_TooManyLoadBalancersException">TooManyLoadBalancersException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyloadbalancersexception"></a>
<a id="schema_TooManyLoadBalancersException"></a>
<a id="tocStoomanyloadbalancersexception"></a>
<a id="tocstoomanyloadbalancersexception"></a>

```json
null
```

<h2 id="tocS_SubnetNotFoundException">SubnetNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemasubnetnotfoundexception"></a>
<a id="schema_SubnetNotFoundException"></a>
<a id="tocSsubnetnotfoundexception"></a>
<a id="tocssubnetnotfoundexception"></a>

```json
null
```

<h2 id="tocS_InvalidSubnetException">InvalidSubnetException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsubnetexception"></a>
<a id="schema_InvalidSubnetException"></a>
<a id="tocSinvalidsubnetexception"></a>
<a id="tocsinvalidsubnetexception"></a>

```json
null
```

<h2 id="tocS_InvalidSecurityGroupException">InvalidSecurityGroupException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsecuritygroupexception"></a>
<a id="schema_InvalidSecurityGroupException"></a>
<a id="tocSinvalidsecuritygroupexception"></a>
<a id="tocsinvalidsecuritygroupexception"></a>

```json
null
```

<h2 id="tocS_InvalidSchemeException">InvalidSchemeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidschemeexception"></a>
<a id="schema_InvalidSchemeException"></a>
<a id="tocSinvalidschemeexception"></a>
<a id="tocsinvalidschemeexception"></a>

```json
null
```

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_AllocationIdNotFoundException">AllocationIdNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaallocationidnotfoundexception"></a>
<a id="schema_AllocationIdNotFoundException"></a>
<a id="tocSallocationidnotfoundexception"></a>
<a id="tocsallocationidnotfoundexception"></a>

```json
null
```

<h2 id="tocS_AvailabilityZoneNotSupportedException">AvailabilityZoneNotSupportedException</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzonenotsupportedexception"></a>
<a id="schema_AvailabilityZoneNotSupportedException"></a>
<a id="tocSavailabilityzonenotsupportedexception"></a>
<a id="tocsavailabilityzonenotsupportedexception"></a>

```json
null
```

<h2 id="tocS_OperationNotPermittedException">OperationNotPermittedException</h2>
<!-- backwards compatibility -->
<a id="schemaoperationnotpermittedexception"></a>
<a id="schema_OperationNotPermittedException"></a>
<a id="tocSoperationnotpermittedexception"></a>
<a id="tocsoperationnotpermittedexception"></a>

```json
null
```

<h2 id="tocS_CreateRuleOutput">CreateRuleOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateruleoutput"></a>
<a id="schema_CreateRuleOutput"></a>
<a id="tocScreateruleoutput"></a>
<a id="tocscreateruleoutput"></a>

```json
{
  "Rules": [
    {
      "Actions": [
        {
          "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
          "Type": "forward"
        }
      ],
      "Conditions": [
        {
          "Field": "path-pattern",
          "Values": [
            "/img/*"
          ]
        }
      ],
      "IsDefault": false,
      "Priority": "10",
      "RuleArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener-rule/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2/9683b2d02a6cabee"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rules|object|false|none|none|

<h2 id="tocS_RuleCondition">RuleCondition</h2>
<!-- backwards compatibility -->
<a id="schemarulecondition"></a>
<a id="schema_RuleCondition"></a>
<a id="tocSrulecondition"></a>
<a id="tocsrulecondition"></a>

```json
{
  "Field": {},
  "Values": {},
  "HostHeaderConfig": {
    "Values": {}
  },
  "PathPatternConfig": {
    "Values": {}
  },
  "HttpHeaderConfig": {
    "HttpHeaderName": {},
    "Values": {}
  },
  "QueryStringConfig": {
    "Values": {}
  },
  "HttpRequestMethodConfig": {
    "Values": {}
  },
  "SourceIpConfig": {
    "Values": {}
  }
}
```

<p>Information about a condition for a rule.</p> <p>Each rule can optionally include up to one of each of the following conditions: <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>, and <code>source-ip</code>. Each rule can also optionally include one or more of each of the following conditions: <code>http-header</code> and <code>query-string</code>. Note that the value for a condition cannot be empty.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Field|object|false|none|none|
|Values|object|false|none|none|
|HostHeaderConfig|object|false|none|none|
|PathPatternConfig|object|false|none|none|
|HttpHeaderConfig|object|false|none|none|
|QueryStringConfig|object|false|none|none|
|HttpRequestMethodConfig|object|false|none|none|
|SourceIpConfig|object|false|none|none|

<h2 id="tocS_PriorityInUseException">PriorityInUseException</h2>
<!-- backwards compatibility -->
<a id="schemapriorityinuseexception"></a>
<a id="schema_PriorityInUseException"></a>
<a id="tocSpriorityinuseexception"></a>
<a id="tocspriorityinuseexception"></a>

```json
null
```

<h2 id="tocS_TooManyTargetGroupsException">TooManyTargetGroupsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytargetgroupsexception"></a>
<a id="schema_TooManyTargetGroupsException"></a>
<a id="tocStoomanytargetgroupsexception"></a>
<a id="tocstoomanytargetgroupsexception"></a>

```json
null
```

<h2 id="tocS_TooManyRulesException">TooManyRulesException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrulesexception"></a>
<a id="schema_TooManyRulesException"></a>
<a id="tocStoomanyrulesexception"></a>
<a id="tocstoomanyrulesexception"></a>

```json
null
```

<h2 id="tocS_CreateTargetGroupOutput">CreateTargetGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatetargetgroupoutput"></a>
<a id="schema_CreateTargetGroupOutput"></a>
<a id="tocScreatetargetgroupoutput"></a>
<a id="tocscreatetargetgroupoutput"></a>

```json
{
  "TargetGroups": [
    {
      "HealthCheckIntervalSeconds": 30,
      "HealthCheckPath": "/",
      "HealthCheckPort": "traffic-port",
      "HealthCheckProtocol": "HTTP",
      "HealthCheckTimeoutSeconds": 5,
      "HealthyThresholdCount": 5,
      "Matcher": {
        "HttpCode": "200"
      },
      "Port": 80,
      "Protocol": "HTTP",
      "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
      "TargetGroupName": "my-targets",
      "UnhealthyThresholdCount": 2,
      "VpcId": "vpc-3ac0fb5f"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetGroups|object|false|none|none|

<h2 id="tocS_HttpCode">HttpCode</h2>
<!-- backwards compatibility -->
<a id="schemahttpcode"></a>
<a id="schema_HttpCode"></a>
<a id="tocShttpcode"></a>
<a id="tocshttpcode"></a>

```json
"string"
```

<h2 id="tocS_GrpcCode">GrpcCode</h2>
<!-- backwards compatibility -->
<a id="schemagrpccode"></a>
<a id="schema_GrpcCode"></a>
<a id="tocSgrpccode"></a>
<a id="tocsgrpccode"></a>

```json
"string"
```

<h2 id="tocS_DuplicateTargetGroupNameException">DuplicateTargetGroupNameException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicatetargetgroupnameexception"></a>
<a id="schema_DuplicateTargetGroupNameException"></a>
<a id="tocSduplicatetargetgroupnameexception"></a>
<a id="tocsduplicatetargetgroupnameexception"></a>

```json
null
```

<h2 id="tocS_DeleteListenerOutput">DeleteListenerOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletelisteneroutput"></a>
<a id="schema_DeleteListenerOutput"></a>
<a id="tocSdeletelisteneroutput"></a>
<a id="tocsdeletelisteneroutput"></a>

```json
{}
```

<h2 id="tocS_DeleteLoadBalancerOutput">DeleteLoadBalancerOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteloadbalanceroutput"></a>
<a id="schema_DeleteLoadBalancerOutput"></a>
<a id="tocSdeleteloadbalanceroutput"></a>
<a id="tocsdeleteloadbalanceroutput"></a>

```json
{}
```

<h2 id="tocS_DeleteRuleOutput">DeleteRuleOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteruleoutput"></a>
<a id="schema_DeleteRuleOutput"></a>
<a id="tocSdeleteruleoutput"></a>
<a id="tocsdeleteruleoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteTargetGroupOutput">DeleteTargetGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletetargetgroupoutput"></a>
<a id="schema_DeleteTargetGroupOutput"></a>
<a id="tocSdeletetargetgroupoutput"></a>
<a id="tocsdeletetargetgroupoutput"></a>

```json
{}
```

<h2 id="tocS_DeregisterTargetsOutput">DeregisterTargetsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaderegistertargetsoutput"></a>
<a id="schema_DeregisterTargetsOutput"></a>
<a id="tocSderegistertargetsoutput"></a>
<a id="tocsderegistertargetsoutput"></a>

```json
{}
```

<h2 id="tocS_TargetDescription">TargetDescription</h2>
<!-- backwards compatibility -->
<a id="schematargetdescription"></a>
<a id="schema_TargetDescription"></a>
<a id="tocStargetdescription"></a>
<a id="tocstargetdescription"></a>

```json
{
  "Id": {},
  "Port": {},
  "AvailabilityZone": {}
}
```

Information about a target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Port|object|false|none|none|
|AvailabilityZone|object|false|none|none|

<h2 id="tocS_InvalidTargetException">InvalidTargetException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtargetexception"></a>
<a id="schema_InvalidTargetException"></a>
<a id="tocSinvalidtargetexception"></a>
<a id="tocsinvalidtargetexception"></a>

```json
null
```

<h2 id="tocS_DescribeAccountLimitsOutput">DescribeAccountLimitsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountlimitsoutput"></a>
<a id="schema_DescribeAccountLimitsOutput"></a>
<a id="tocSdescribeaccountlimitsoutput"></a>
<a id="tocsdescribeaccountlimitsoutput"></a>

```json
{
  "Limits": {},
  "NextMarker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Limits|object|false|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_DescribeListenerCertificatesOutput">DescribeListenerCertificatesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribelistenercertificatesoutput"></a>
<a id="schema_DescribeListenerCertificatesOutput"></a>
<a id="tocSdescribelistenercertificatesoutput"></a>
<a id="tocsdescribelistenercertificatesoutput"></a>

```json
{
  "Certificates": {},
  "NextMarker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Certificates|object|false|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_DescribeListenersOutput">DescribeListenersOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribelistenersoutput"></a>
<a id="schema_DescribeListenersOutput"></a>
<a id="tocSdescribelistenersoutput"></a>
<a id="tocsdescribelistenersoutput"></a>

```json
{
  "Listeners": [
    {
      "DefaultActions": [
        {
          "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
          "Type": "forward"
        }
      ],
      "ListenerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2",
      "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
      "Port": 80,
      "Protocol": "HTTP"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Listeners|object|false|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_ListenerArn">ListenerArn</h2>
<!-- backwards compatibility -->
<a id="schemalistenerarn"></a>
<a id="schema_ListenerArn"></a>
<a id="tocSlistenerarn"></a>
<a id="tocslistenerarn"></a>

```json
"string"
```

<h2 id="tocS_DescribeLoadBalancerAttributesOutput">DescribeLoadBalancerAttributesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloadbalancerattributesoutput"></a>
<a id="schema_DescribeLoadBalancerAttributesOutput"></a>
<a id="tocSdescribeloadbalancerattributesoutput"></a>
<a id="tocsdescribeloadbalancerattributesoutput"></a>

```json
{
  "Attributes": [
    {
      "Key": "access_logs.s3.enabled",
      "Value": "false"
    },
    {
      "Key": "idle_timeout.timeout_seconds",
      "Value": "60"
    },
    {
      "Key": "access_logs.s3.prefix",
      "Value": ""
    },
    {
      "Key": "deletion_protection.enabled",
      "Value": "false"
    },
    {
      "Key": "access_logs.s3.bucket",
      "Value": ""
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|

<h2 id="tocS_DescribeLoadBalancersOutput">DescribeLoadBalancersOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloadbalancersoutput"></a>
<a id="schema_DescribeLoadBalancersOutput"></a>
<a id="tocSdescribeloadbalancersoutput"></a>
<a id="tocsdescribeloadbalancersoutput"></a>

```json
{
  "LoadBalancers": [
    {
      "AvailabilityZones": [
        {
          "SubnetId": "subnet-8360a9e7",
          "ZoneName": "us-west-2a"
        },
        {
          "SubnetId": "subnet-b7d581c0",
          "ZoneName": "us-west-2b"
        }
      ],
      "CanonicalHostedZoneId": "Z2P70J7EXAMPLE",
      "CreatedTime": "2016-03-25T21:26:12.920Z",
      "DNSName": "my-load-balancer-424835706.us-west-2.elb.amazonaws.com",
      "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
      "LoadBalancerName": "my-load-balancer",
      "Scheme": "internet-facing",
      "SecurityGroups": [
        "sg-5943793c"
      ],
      "State": {
        "Code": "active"
      },
      "Type": "application",
      "VpcId": "vpc-3ac0fb5f"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancers|object|false|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_LoadBalancerArn">LoadBalancerArn</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerarn"></a>
<a id="schema_LoadBalancerArn"></a>
<a id="tocSloadbalancerarn"></a>
<a id="tocsloadbalancerarn"></a>

```json
"string"
```

<h2 id="tocS_LoadBalancerName">LoadBalancerName</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancername"></a>
<a id="schema_LoadBalancerName"></a>
<a id="tocSloadbalancername"></a>
<a id="tocsloadbalancername"></a>

```json
"string"
```

<h2 id="tocS_DescribeRulesOutput">DescribeRulesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescriberulesoutput"></a>
<a id="schema_DescribeRulesOutput"></a>
<a id="tocSdescriberulesoutput"></a>
<a id="tocsdescriberulesoutput"></a>

```json
{
  "Rules": [
    {
      "Actions": [
        {
          "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
          "Type": "forward"
        }
      ],
      "Conditions": [
        {
          "Field": "path-pattern",
          "Values": [
            "/img/*"
          ]
        }
      ],
      "IsDefault": false,
      "Priority": "10",
      "RuleArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener-rule/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2/9683b2d02a6cabee"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rules|object|false|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_RuleArn">RuleArn</h2>
<!-- backwards compatibility -->
<a id="schemarulearn"></a>
<a id="schema_RuleArn"></a>
<a id="tocSrulearn"></a>
<a id="tocsrulearn"></a>

```json
"string"
```

<h2 id="tocS_DescribeSSLPoliciesOutput">DescribeSSLPoliciesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribesslpoliciesoutput"></a>
<a id="schema_DescribeSSLPoliciesOutput"></a>
<a id="tocSdescribesslpoliciesoutput"></a>
<a id="tocsdescribesslpoliciesoutput"></a>

```json
{
  "SslPolicies": [
    {
      "Ciphers": [
        {
          "Name": "ECDHE-ECDSA-AES128-GCM-SHA256",
          "Priority": 1
        },
        {
          "Name": "ECDHE-RSA-AES128-GCM-SHA256",
          "Priority": 2
        },
        {
          "Name": "ECDHE-ECDSA-AES128-SHA256",
          "Priority": 3
        },
        {
          "Name": "ECDHE-RSA-AES128-SHA256",
          "Priority": 4
        },
        {
          "Name": "ECDHE-ECDSA-AES128-SHA",
          "Priority": 5
        },
        {
          "Name": "ECDHE-RSA-AES128-SHA",
          "Priority": 6
        },
        {
          "Name": "DHE-RSA-AES128-SHA",
          "Priority": 7
        },
        {
          "Name": "ECDHE-ECDSA-AES256-GCM-SHA384",
          "Priority": 8
        },
        {
          "Name": "ECDHE-RSA-AES256-GCM-SHA384",
          "Priority": 9
        },
        {
          "Name": "ECDHE-ECDSA-AES256-SHA384",
          "Priority": 10
        },
        {
          "Name": "ECDHE-RSA-AES256-SHA384",
          "Priority": 11
        },
        {
          "Name": "ECDHE-RSA-AES256-SHA",
          "Priority": 12
        },
        {
          "Name": "ECDHE-ECDSA-AES256-SHA",
          "Priority": 13
        },
        {
          "Name": "AES128-GCM-SHA256",
          "Priority": 14
        },
        {
          "Name": "AES128-SHA256",
          "Priority": 15
        },
        {
          "Name": "AES128-SHA",
          "Priority": 16
        },
        {
          "Name": "AES256-GCM-SHA384",
          "Priority": 17
        },
        {
          "Name": "AES256-SHA256",
          "Priority": 18
        },
        {
          "Name": "AES256-SHA",
          "Priority": 19
        }
      ],
      "Name": "ELBSecurityPolicy-2015-05",
      "SslProtocols": [
        "TLSv1",
        "TLSv1.1",
        "TLSv1.2"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SslPolicies|object|false|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_SslPolicyName">SslPolicyName</h2>
<!-- backwards compatibility -->
<a id="schemasslpolicyname"></a>
<a id="schema_SslPolicyName"></a>
<a id="tocSsslpolicyname"></a>
<a id="tocssslpolicyname"></a>

```json
"string"
```

<h2 id="tocS_DescribeTagsOutput">DescribeTagsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetagsoutput"></a>
<a id="schema_DescribeTagsOutput"></a>
<a id="tocSdescribetagsoutput"></a>
<a id="tocsdescribetagsoutput"></a>

```json
{
  "TagDescriptions": [
    {
      "ResourceArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
      "Tags": [
        {
          "Key": "project",
          "Value": "lima"
        },
        {
          "Key": "department",
          "Value": "digital-media"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagDescriptions|object|false|none|none|

<h2 id="tocS_DescribeTargetGroupAttributesOutput">DescribeTargetGroupAttributesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetargetgroupattributesoutput"></a>
<a id="schema_DescribeTargetGroupAttributesOutput"></a>
<a id="tocSdescribetargetgroupattributesoutput"></a>
<a id="tocsdescribetargetgroupattributesoutput"></a>

```json
{
  "Attributes": [
    {
      "Key": "stickiness.enabled",
      "Value": "false"
    },
    {
      "Key": "deregistration_delay.timeout_seconds",
      "Value": "300"
    },
    {
      "Key": "stickiness.type",
      "Value": "lb_cookie"
    },
    {
      "Key": "stickiness.lb_cookie.duration_seconds",
      "Value": "86400"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|

<h2 id="tocS_DescribeTargetGroupsOutput">DescribeTargetGroupsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetargetgroupsoutput"></a>
<a id="schema_DescribeTargetGroupsOutput"></a>
<a id="tocSdescribetargetgroupsoutput"></a>
<a id="tocsdescribetargetgroupsoutput"></a>

```json
{
  "TargetGroups": [
    {
      "HealthCheckIntervalSeconds": 30,
      "HealthCheckPath": "/",
      "HealthCheckPort": "traffic-port",
      "HealthCheckProtocol": "HTTP",
      "HealthCheckTimeoutSeconds": 5,
      "HealthyThresholdCount": 5,
      "LoadBalancerArns": [
        "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188"
      ],
      "Matcher": {
        "HttpCode": "200"
      },
      "Port": 80,
      "Protocol": "HTTP",
      "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
      "TargetGroupName": "my-targets",
      "UnhealthyThresholdCount": 2,
      "VpcId": "vpc-3ac0fb5f"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetGroups|object|false|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_TargetGroupArn">TargetGroupArn</h2>
<!-- backwards compatibility -->
<a id="schematargetgrouparn"></a>
<a id="schema_TargetGroupArn"></a>
<a id="tocStargetgrouparn"></a>
<a id="tocstargetgrouparn"></a>

```json
"string"
```

<h2 id="tocS_TargetGroupName">TargetGroupName</h2>
<!-- backwards compatibility -->
<a id="schematargetgroupname"></a>
<a id="schema_TargetGroupName"></a>
<a id="tocStargetgroupname"></a>
<a id="tocstargetgroupname"></a>

```json
"string"
```

<h2 id="tocS_DescribeTargetHealthOutput">DescribeTargetHealthOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetargethealthoutput"></a>
<a id="schema_DescribeTargetHealthOutput"></a>
<a id="tocSdescribetargethealthoutput"></a>
<a id="tocsdescribetargethealthoutput"></a>

```json
{
  "TargetHealthDescriptions": [
    {
      "HealthCheckPort": "80",
      "Target": {
        "Id": "i-0f76fade",
        "Port": 80
      },
      "TargetHealth": {
        "State": "healthy"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetHealthDescriptions|object|false|none|none|

<h2 id="tocS_HealthUnavailableException">HealthUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemahealthunavailableexception"></a>
<a id="schema_HealthUnavailableException"></a>
<a id="tocShealthunavailableexception"></a>
<a id="tocshealthunavailableexception"></a>

```json
null
```

<h2 id="tocS_ModifyListenerOutput">ModifyListenerOutput</h2>
<!-- backwards compatibility -->
<a id="schemamodifylisteneroutput"></a>
<a id="schema_ModifyListenerOutput"></a>
<a id="tocSmodifylisteneroutput"></a>
<a id="tocsmodifylisteneroutput"></a>

```json
{
  "Listeners": [
    {
      "Certificates": [
        {
          "CertificateArn": "arn:aws:iam::123456789012:server-certificate/my-new-server-cert"
        }
      ],
      "DefaultActions": [
        {
          "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
          "Type": "forward"
        }
      ],
      "ListenerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener/app/my-load-balancer/50dc6c495c0c9188/0467ef3c8400ae65",
      "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
      "Port": 443,
      "Protocol": "HTTPS",
      "SslPolicy": "ELBSecurityPolicy-2015-05"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Listeners|object|false|none|none|

<h2 id="tocS_ModifyLoadBalancerAttributesOutput">ModifyLoadBalancerAttributesOutput</h2>
<!-- backwards compatibility -->
<a id="schemamodifyloadbalancerattributesoutput"></a>
<a id="schema_ModifyLoadBalancerAttributesOutput"></a>
<a id="tocSmodifyloadbalancerattributesoutput"></a>
<a id="tocsmodifyloadbalancerattributesoutput"></a>

```json
{
  "Attributes": [
    {
      "Key": "access_logs.s3.enabled",
      "Value": "true"
    },
    {
      "Key": "access_logs.s3.bucket",
      "Value": "my-load-balancer-logs"
    },
    {
      "Key": "access_logs.s3.prefix",
      "Value": "myapp"
    },
    {
      "Key": "idle_timeout.timeout_seconds",
      "Value": "60"
    },
    {
      "Key": "deletion_protection.enabled",
      "Value": "false"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|

<h2 id="tocS_LoadBalancerAttribute">LoadBalancerAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerattribute"></a>
<a id="schema_LoadBalancerAttribute"></a>
<a id="tocSloadbalancerattribute"></a>
<a id="tocsloadbalancerattribute"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

Information about a load balancer attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_ModifyRuleOutput">ModifyRuleOutput</h2>
<!-- backwards compatibility -->
<a id="schemamodifyruleoutput"></a>
<a id="schema_ModifyRuleOutput"></a>
<a id="tocSmodifyruleoutput"></a>
<a id="tocsmodifyruleoutput"></a>

```json
{
  "Rules": [
    {
      "Actions": [
        {
          "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
          "Type": "forward"
        }
      ],
      "Conditions": [
        {
          "Field": "path-pattern",
          "Values": [
            "/images/*"
          ]
        }
      ],
      "IsDefault": false,
      "Priority": "10",
      "RuleArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener-rule/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2/9683b2d02a6cabee"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rules|object|false|none|none|

<h2 id="tocS_ModifyTargetGroupOutput">ModifyTargetGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemamodifytargetgroupoutput"></a>
<a id="schema_ModifyTargetGroupOutput"></a>
<a id="tocSmodifytargetgroupoutput"></a>
<a id="tocsmodifytargetgroupoutput"></a>

```json
{
  "TargetGroups": [
    {
      "HealthCheckIntervalSeconds": 30,
      "HealthCheckPort": "443",
      "HealthCheckProtocol": "HTTPS",
      "HealthCheckTimeoutSeconds": 5,
      "HealthyThresholdCount": 5,
      "LoadBalancerArns": [
        "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188"
      ],
      "Matcher": {
        "HttpCode": "200"
      },
      "Port": 443,
      "Protocol": "HTTPS",
      "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-https-targets/2453ed029918f21f",
      "TargetGroupName": "my-https-targets",
      "UnhealthyThresholdCount": 2,
      "VpcId": "vpc-3ac0fb5f"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetGroups|object|false|none|none|

<h2 id="tocS_ModifyTargetGroupAttributesOutput">ModifyTargetGroupAttributesOutput</h2>
<!-- backwards compatibility -->
<a id="schemamodifytargetgroupattributesoutput"></a>
<a id="schema_ModifyTargetGroupAttributesOutput"></a>
<a id="tocSmodifytargetgroupattributesoutput"></a>
<a id="tocsmodifytargetgroupattributesoutput"></a>

```json
{
  "Attributes": [
    {
      "Key": "stickiness.enabled",
      "Value": "false"
    },
    {
      "Key": "deregistration_delay.timeout_seconds",
      "Value": "600"
    },
    {
      "Key": "stickiness.type",
      "Value": "lb_cookie"
    },
    {
      "Key": "stickiness.lb_cookie.duration_seconds",
      "Value": "86400"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|

<h2 id="tocS_TargetGroupAttribute">TargetGroupAttribute</h2>
<!-- backwards compatibility -->
<a id="schematargetgroupattribute"></a>
<a id="schema_TargetGroupAttribute"></a>
<a id="tocStargetgroupattribute"></a>
<a id="tocstargetgroupattribute"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

Information about a target group attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_RegisterTargetsOutput">RegisterTargetsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaregistertargetsoutput"></a>
<a id="schema_RegisterTargetsOutput"></a>
<a id="tocSregistertargetsoutput"></a>
<a id="tocsregistertargetsoutput"></a>

```json
{}
```

<h2 id="tocS_RemoveListenerCertificatesOutput">RemoveListenerCertificatesOutput</h2>
<!-- backwards compatibility -->
<a id="schemaremovelistenercertificatesoutput"></a>
<a id="schema_RemoveListenerCertificatesOutput"></a>
<a id="tocSremovelistenercertificatesoutput"></a>
<a id="tocsremovelistenercertificatesoutput"></a>

```json
{}
```

<h2 id="tocS_RemoveTagsOutput">RemoveTagsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsoutput"></a>
<a id="schema_RemoveTagsOutput"></a>
<a id="tocSremovetagsoutput"></a>
<a id="tocsremovetagsoutput"></a>

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

<h2 id="tocS_SetIpAddressTypeOutput">SetIpAddressTypeOutput</h2>
<!-- backwards compatibility -->
<a id="schemasetipaddresstypeoutput"></a>
<a id="schema_SetIpAddressTypeOutput"></a>
<a id="tocSsetipaddresstypeoutput"></a>
<a id="tocssetipaddresstypeoutput"></a>

```json
{
  "IpAddressType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpAddressType|object|false|none|none|

<h2 id="tocS_SetRulePrioritiesOutput">SetRulePrioritiesOutput</h2>
<!-- backwards compatibility -->
<a id="schemasetruleprioritiesoutput"></a>
<a id="schema_SetRulePrioritiesOutput"></a>
<a id="tocSsetruleprioritiesoutput"></a>
<a id="tocssetruleprioritiesoutput"></a>

```json
{
  "Rules": [
    {
      "Actions": [
        {
          "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
          "Type": "forward"
        }
      ],
      "Conditions": [
        {
          "Field": "path-pattern",
          "Values": [
            "/img/*"
          ]
        }
      ],
      "IsDefault": false,
      "Priority": "5",
      "RuleArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener-rule/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2/1291d13826f405c3"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rules|object|false|none|none|

<h2 id="tocS_RulePriorityPair">RulePriorityPair</h2>
<!-- backwards compatibility -->
<a id="schemaruleprioritypair"></a>
<a id="schema_RulePriorityPair"></a>
<a id="tocSruleprioritypair"></a>
<a id="tocsruleprioritypair"></a>

```json
{
  "RuleArn": {},
  "Priority": {}
}
```

Information about the priorities for the rules for a listener.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleArn|object|false|none|none|
|Priority|object|false|none|none|

<h2 id="tocS_SetSecurityGroupsOutput">SetSecurityGroupsOutput</h2>
<!-- backwards compatibility -->
<a id="schemasetsecuritygroupsoutput"></a>
<a id="schema_SetSecurityGroupsOutput"></a>
<a id="tocSsetsecuritygroupsoutput"></a>
<a id="tocssetsecuritygroupsoutput"></a>

```json
{
  "SecurityGroupIds": [
    "sg-5943793c"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityGroupIds|object|false|none|none|

<h2 id="tocS_SetSubnetsOutput">SetSubnetsOutput</h2>
<!-- backwards compatibility -->
<a id="schemasetsubnetsoutput"></a>
<a id="schema_SetSubnetsOutput"></a>
<a id="tocSsetsubnetsoutput"></a>
<a id="tocssetsubnetsoutput"></a>

```json
{
  "AvailabilityZones": [
    {
      "SubnetId": "subnet-8360a9e7",
      "ZoneName": "us-west-2a"
    },
    {
      "SubnetId": "subnet-b7d581c0",
      "ZoneName": "us-west-2b"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZones|object|false|none|none|
|IpAddressType|object|false|none|none|

<h2 id="tocS_ActionTypeEnum">ActionTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemaactiontypeenum"></a>
<a id="schema_ActionTypeEnum"></a>
<a id="tocSactiontypeenum"></a>
<a id="tocsactiontypeenum"></a>

```json
"forward"
```

<h2 id="tocS_AuthenticateOidcActionConfig">AuthenticateOidcActionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticateoidcactionconfig"></a>
<a id="schema_AuthenticateOidcActionConfig"></a>
<a id="tocSauthenticateoidcactionconfig"></a>
<a id="tocsauthenticateoidcactionconfig"></a>

```json
{
  "Issuer": {},
  "AuthorizationEndpoint": {},
  "TokenEndpoint": {},
  "UserInfoEndpoint": {},
  "ClientId": {},
  "ClientSecret": {},
  "SessionCookieName": {},
  "Scope": {},
  "SessionTimeout": {},
  "AuthenticationRequestExtraParams": {
    "property1": "string",
    "property2": "string"
  },
  "OnUnauthenticatedRequest": {},
  "UseExistingClientSecret": {}
}
```

Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Issuer|object|true|none|none|
|AuthorizationEndpoint|object|true|none|none|
|TokenEndpoint|object|true|none|none|
|UserInfoEndpoint|object|true|none|none|
|ClientId|object|true|none|none|
|ClientSecret|object|false|none|none|
|SessionCookieName|object|false|none|none|
|Scope|object|false|none|none|
|SessionTimeout|object|false|none|none|
|AuthenticationRequestExtraParams|object|false|none|none|
|OnUnauthenticatedRequest|object|false|none|none|
|UseExistingClientSecret|object|false|none|none|

<h2 id="tocS_AuthenticateCognitoActionConfig">AuthenticateCognitoActionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticatecognitoactionconfig"></a>
<a id="schema_AuthenticateCognitoActionConfig"></a>
<a id="tocSauthenticatecognitoactionconfig"></a>
<a id="tocsauthenticatecognitoactionconfig"></a>

```json
{
  "UserPoolArn": {},
  "UserPoolClientId": {},
  "UserPoolDomain": {},
  "SessionCookieName": {},
  "Scope": {},
  "SessionTimeout": {},
  "AuthenticationRequestExtraParams": {
    "property1": "string",
    "property2": "string"
  },
  "OnUnauthenticatedRequest": {}
}
```

Request parameters to use when integrating with Amazon Cognito to authenticate users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolArn|object|true|none|none|
|UserPoolClientId|object|true|none|none|
|UserPoolDomain|object|true|none|none|
|SessionCookieName|object|false|none|none|
|Scope|object|false|none|none|
|SessionTimeout|object|false|none|none|
|AuthenticationRequestExtraParams|object|false|none|none|
|OnUnauthenticatedRequest|object|false|none|none|

<h2 id="tocS_ActionOrder">ActionOrder</h2>
<!-- backwards compatibility -->
<a id="schemaactionorder"></a>
<a id="schema_ActionOrder"></a>
<a id="tocSactionorder"></a>
<a id="tocsactionorder"></a>

```json
1
```

<h2 id="tocS_RedirectActionConfig">RedirectActionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaredirectactionconfig"></a>
<a id="schema_RedirectActionConfig"></a>
<a id="tocSredirectactionconfig"></a>
<a id="tocsredirectactionconfig"></a>

```json
{
  "Protocol": {},
  "Port": {},
  "Host": {},
  "Path": {},
  "Query": {},
  "StatusCode": {}
}
```

<p>Information about a redirect action.</p> <p>A URI consists of the following components: protocol://hostname:port/path?query. You must modify at least one of the following components to avoid a redirect loop: protocol, hostname, port, or path. Any components that you do not modify retain their original values.</p> <p>You can reuse URI components using the following reserved keywords:</p> <ul> <li> <p>#{protocol}</p> </li> <li> <p>#{host}</p> </li> <li> <p>#{port}</p> </li> <li> <p>#{path} (the leading "/" is removed)</p> </li> <li> <p>#{query}</p> </li> </ul> <p>For example, you can change the path to "/new/#{path}", the hostname to "example.#{host}", or the query to "#{query}&amp;value=xyz".</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Protocol|object|false|none|none|
|Port|object|false|none|none|
|Host|object|false|none|none|
|Path|object|false|none|none|
|Query|object|false|none|none|
|StatusCode|object|true|none|none|

<h2 id="tocS_FixedResponseActionConfig">FixedResponseActionConfig</h2>
<!-- backwards compatibility -->
<a id="schemafixedresponseactionconfig"></a>
<a id="schema_FixedResponseActionConfig"></a>
<a id="tocSfixedresponseactionconfig"></a>
<a id="tocsfixedresponseactionconfig"></a>

```json
{
  "MessageBody": {},
  "StatusCode": {},
  "ContentType": {}
}
```

Information about an action that returns a custom HTTP response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageBody|object|false|none|none|
|StatusCode|object|true|none|none|
|ContentType|object|false|none|none|

<h2 id="tocS_ForwardActionConfig">ForwardActionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaforwardactionconfig"></a>
<a id="schema_ForwardActionConfig"></a>
<a id="tocSforwardactionconfig"></a>
<a id="tocsforwardactionconfig"></a>

```json
{
  "TargetGroups": {},
  "TargetGroupStickinessConfig": {
    "Enabled": {},
    "DurationSeconds": {}
  }
}
```

Information about a forward action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetGroups|object|false|none|none|
|TargetGroupStickinessConfig|object|false|none|none|

<h2 id="tocS_Actions">Actions</h2>
<!-- backwards compatibility -->
<a id="schemaactions"></a>
<a id="schema_Actions"></a>
<a id="tocSactions"></a>
<a id="tocsactions"></a>

```json
[
  {
    "Type": {},
    "TargetGroupArn": {},
    "AuthenticateOidcConfig": {
      "Issuer": {},
      "AuthorizationEndpoint": {},
      "TokenEndpoint": {},
      "UserInfoEndpoint": {},
      "ClientId": {},
      "ClientSecret": {},
      "SessionCookieName": {},
      "Scope": {},
      "SessionTimeout": {},
      "AuthenticationRequestExtraParams": {
        "property1": "string",
        "property2": "string"
      },
      "OnUnauthenticatedRequest": {},
      "UseExistingClientSecret": {}
    },
    "AuthenticateCognitoConfig": {
      "UserPoolArn": {},
      "UserPoolClientId": {},
      "UserPoolDomain": {},
      "SessionCookieName": {},
      "Scope": {},
      "SessionTimeout": {},
      "AuthenticationRequestExtraParams": {
        "property1": "string",
        "property2": "string"
      },
      "OnUnauthenticatedRequest": {}
    },
    "Order": {},
    "RedirectConfig": {
      "Protocol": {},
      "Port": {},
      "Host": {},
      "Path": {},
      "Query": {},
      "StatusCode": {}
    },
    "FixedResponseConfig": {
      "MessageBody": {},
      "StatusCode": {},
      "ContentType": {}
    },
    "ForwardConfig": {
      "TargetGroups": {},
      "TargetGroupStickinessConfig": {
        "Enabled": {},
        "DurationSeconds": {}
      }
    }
  }
]
```

<h2 id="tocS_CertificateList">CertificateList</h2>
<!-- backwards compatibility -->
<a id="schemacertificatelist"></a>
<a id="schema_CertificateList"></a>
<a id="tocScertificatelist"></a>
<a id="tocscertificatelist"></a>

```json
[
  {
    "CertificateArn": {},
    "IsDefault": {}
  }
]
```

<h2 id="tocS_AddListenerCertificatesInput">AddListenerCertificatesInput</h2>
<!-- backwards compatibility -->
<a id="schemaaddlistenercertificatesinput"></a>
<a id="schema_AddListenerCertificatesInput"></a>
<a id="tocSaddlistenercertificatesinput"></a>
<a id="tocsaddlistenercertificatesinput"></a>

```json
{
  "ListenerArn": {},
  "Certificates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|true|none|none|
|Certificates|object|true|none|none|

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

<h2 id="tocS_AddTagsInput">AddTagsInput</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagsinput"></a>
<a id="schema_AddTagsInput"></a>
<a id="tocSaddtagsinput"></a>
<a id="tocsaddtagsinput"></a>

```json
{
  "ResourceArns": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArns|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_AllocationId">AllocationId</h2>
<!-- backwards compatibility -->
<a id="schemaallocationid"></a>
<a id="schema_AllocationId"></a>
<a id="tocSallocationid"></a>
<a id="tocsallocationid"></a>

```json
"string"
```

<h2 id="tocS_AlpnPolicyName">AlpnPolicyName</h2>
<!-- backwards compatibility -->
<a id="schemaalpnpolicyname"></a>
<a id="schema_AlpnPolicyName"></a>
<a id="tocSalpnpolicyname"></a>
<a id="tocsalpnpolicyname"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AuthenticateCognitoActionAuthenticationRequestParamValue">AuthenticateCognitoActionAuthenticationRequestParamValue</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticatecognitoactionauthenticationrequestparamvalue"></a>
<a id="schema_AuthenticateCognitoActionAuthenticationRequestParamValue"></a>
<a id="tocSauthenticatecognitoactionauthenticationrequestparamvalue"></a>
<a id="tocsauthenticatecognitoactionauthenticationrequestparamvalue"></a>

```json
"string"
```

<h2 id="tocS_AuthenticateCognitoActionAuthenticationRequestExtraParams">AuthenticateCognitoActionAuthenticationRequestExtraParams</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticatecognitoactionauthenticationrequestextraparams"></a>
<a id="schema_AuthenticateCognitoActionAuthenticationRequestExtraParams"></a>
<a id="tocSauthenticatecognitoactionauthenticationrequestextraparams"></a>
<a id="tocsauthenticatecognitoactionauthenticationrequestextraparams"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AuthenticateCognitoActionAuthenticationRequestParamValue](#schemaauthenticatecognitoactionauthenticationrequestparamvalue)|false|none|none|

<h2 id="tocS_AuthenticateCognitoActionAuthenticationRequestParamName">AuthenticateCognitoActionAuthenticationRequestParamName</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticatecognitoactionauthenticationrequestparamname"></a>
<a id="schema_AuthenticateCognitoActionAuthenticationRequestParamName"></a>
<a id="tocSauthenticatecognitoactionauthenticationrequestparamname"></a>
<a id="tocsauthenticatecognitoactionauthenticationrequestparamname"></a>

```json
"string"
```

<h2 id="tocS_AuthenticateCognitoActionConditionalBehaviorEnum">AuthenticateCognitoActionConditionalBehaviorEnum</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticatecognitoactionconditionalbehaviorenum"></a>
<a id="schema_AuthenticateCognitoActionConditionalBehaviorEnum"></a>
<a id="tocSauthenticatecognitoactionconditionalbehaviorenum"></a>
<a id="tocsauthenticatecognitoactionconditionalbehaviorenum"></a>

```json
"deny"
```

<h2 id="tocS_AuthenticateCognitoActionUserPoolArn">AuthenticateCognitoActionUserPoolArn</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticatecognitoactionuserpoolarn"></a>
<a id="schema_AuthenticateCognitoActionUserPoolArn"></a>
<a id="tocSauthenticatecognitoactionuserpoolarn"></a>
<a id="tocsauthenticatecognitoactionuserpoolarn"></a>

```json
"string"
```

<h2 id="tocS_AuthenticateCognitoActionUserPoolClientId">AuthenticateCognitoActionUserPoolClientId</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticatecognitoactionuserpoolclientid"></a>
<a id="schema_AuthenticateCognitoActionUserPoolClientId"></a>
<a id="tocSauthenticatecognitoactionuserpoolclientid"></a>
<a id="tocsauthenticatecognitoactionuserpoolclientid"></a>

```json
"string"
```

<h2 id="tocS_AuthenticateCognitoActionUserPoolDomain">AuthenticateCognitoActionUserPoolDomain</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticatecognitoactionuserpooldomain"></a>
<a id="schema_AuthenticateCognitoActionUserPoolDomain"></a>
<a id="tocSauthenticatecognitoactionuserpooldomain"></a>
<a id="tocsauthenticatecognitoactionuserpooldomain"></a>

```json
"string"
```

<h2 id="tocS_AuthenticateCognitoActionSessionCookieName">AuthenticateCognitoActionSessionCookieName</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticatecognitoactionsessioncookiename"></a>
<a id="schema_AuthenticateCognitoActionSessionCookieName"></a>
<a id="tocSauthenticatecognitoactionsessioncookiename"></a>
<a id="tocsauthenticatecognitoactionsessioncookiename"></a>

```json
"string"
```

<h2 id="tocS_AuthenticateCognitoActionScope">AuthenticateCognitoActionScope</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticatecognitoactionscope"></a>
<a id="schema_AuthenticateCognitoActionScope"></a>
<a id="tocSauthenticatecognitoactionscope"></a>
<a id="tocsauthenticatecognitoactionscope"></a>

```json
"string"
```

<h2 id="tocS_AuthenticateCognitoActionSessionTimeout">AuthenticateCognitoActionSessionTimeout</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticatecognitoactionsessiontimeout"></a>
<a id="schema_AuthenticateCognitoActionSessionTimeout"></a>
<a id="tocSauthenticatecognitoactionsessiontimeout"></a>
<a id="tocsauthenticatecognitoactionsessiontimeout"></a>

```json
0
```

<h2 id="tocS_AuthenticateOidcActionAuthenticationRequestParamValue">AuthenticateOidcActionAuthenticationRequestParamValue</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticateoidcactionauthenticationrequestparamvalue"></a>
<a id="schema_AuthenticateOidcActionAuthenticationRequestParamValue"></a>
<a id="tocSauthenticateoidcactionauthenticationrequestparamvalue"></a>
<a id="tocsauthenticateoidcactionauthenticationrequestparamvalue"></a>

```json
"string"
```

<h2 id="tocS_AuthenticateOidcActionAuthenticationRequestExtraParams">AuthenticateOidcActionAuthenticationRequestExtraParams</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticateoidcactionauthenticationrequestextraparams"></a>
<a id="schema_AuthenticateOidcActionAuthenticationRequestExtraParams"></a>
<a id="tocSauthenticateoidcactionauthenticationrequestextraparams"></a>
<a id="tocsauthenticateoidcactionauthenticationrequestextraparams"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AuthenticateOidcActionAuthenticationRequestParamValue](#schemaauthenticateoidcactionauthenticationrequestparamvalue)|false|none|none|

<h2 id="tocS_AuthenticateOidcActionAuthenticationRequestParamName">AuthenticateOidcActionAuthenticationRequestParamName</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticateoidcactionauthenticationrequestparamname"></a>
<a id="schema_AuthenticateOidcActionAuthenticationRequestParamName"></a>
<a id="tocSauthenticateoidcactionauthenticationrequestparamname"></a>
<a id="tocsauthenticateoidcactionauthenticationrequestparamname"></a>

```json
"string"
```

<h2 id="tocS_AuthenticateOidcActionAuthorizationEndpoint">AuthenticateOidcActionAuthorizationEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticateoidcactionauthorizationendpoint"></a>
<a id="schema_AuthenticateOidcActionAuthorizationEndpoint"></a>
<a id="tocSauthenticateoidcactionauthorizationendpoint"></a>
<a id="tocsauthenticateoidcactionauthorizationendpoint"></a>

```json
"string"
```

<h2 id="tocS_AuthenticateOidcActionClientId">AuthenticateOidcActionClientId</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticateoidcactionclientid"></a>
<a id="schema_AuthenticateOidcActionClientId"></a>
<a id="tocSauthenticateoidcactionclientid"></a>
<a id="tocsauthenticateoidcactionclientid"></a>

```json
"string"
```

<h2 id="tocS_AuthenticateOidcActionClientSecret">AuthenticateOidcActionClientSecret</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticateoidcactionclientsecret"></a>
<a id="schema_AuthenticateOidcActionClientSecret"></a>
<a id="tocSauthenticateoidcactionclientsecret"></a>
<a id="tocsauthenticateoidcactionclientsecret"></a>

```json
"string"
```

<h2 id="tocS_AuthenticateOidcActionConditionalBehaviorEnum">AuthenticateOidcActionConditionalBehaviorEnum</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticateoidcactionconditionalbehaviorenum"></a>
<a id="schema_AuthenticateOidcActionConditionalBehaviorEnum"></a>
<a id="tocSauthenticateoidcactionconditionalbehaviorenum"></a>
<a id="tocsauthenticateoidcactionconditionalbehaviorenum"></a>

```json
"deny"
```

<h2 id="tocS_AuthenticateOidcActionIssuer">AuthenticateOidcActionIssuer</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticateoidcactionissuer"></a>
<a id="schema_AuthenticateOidcActionIssuer"></a>
<a id="tocSauthenticateoidcactionissuer"></a>
<a id="tocsauthenticateoidcactionissuer"></a>

```json
"string"
```

<h2 id="tocS_AuthenticateOidcActionTokenEndpoint">AuthenticateOidcActionTokenEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticateoidcactiontokenendpoint"></a>
<a id="schema_AuthenticateOidcActionTokenEndpoint"></a>
<a id="tocSauthenticateoidcactiontokenendpoint"></a>
<a id="tocsauthenticateoidcactiontokenendpoint"></a>

```json
"string"
```

<h2 id="tocS_AuthenticateOidcActionUserInfoEndpoint">AuthenticateOidcActionUserInfoEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticateoidcactionuserinfoendpoint"></a>
<a id="schema_AuthenticateOidcActionUserInfoEndpoint"></a>
<a id="tocSauthenticateoidcactionuserinfoendpoint"></a>
<a id="tocsauthenticateoidcactionuserinfoendpoint"></a>

```json
"string"
```

<h2 id="tocS_AuthenticateOidcActionSessionCookieName">AuthenticateOidcActionSessionCookieName</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticateoidcactionsessioncookiename"></a>
<a id="schema_AuthenticateOidcActionSessionCookieName"></a>
<a id="tocSauthenticateoidcactionsessioncookiename"></a>
<a id="tocsauthenticateoidcactionsessioncookiename"></a>

```json
"string"
```

<h2 id="tocS_AuthenticateOidcActionScope">AuthenticateOidcActionScope</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticateoidcactionscope"></a>
<a id="schema_AuthenticateOidcActionScope"></a>
<a id="tocSauthenticateoidcactionscope"></a>
<a id="tocsauthenticateoidcactionscope"></a>

```json
"string"
```

<h2 id="tocS_AuthenticateOidcActionSessionTimeout">AuthenticateOidcActionSessionTimeout</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticateoidcactionsessiontimeout"></a>
<a id="schema_AuthenticateOidcActionSessionTimeout"></a>
<a id="tocSauthenticateoidcactionsessiontimeout"></a>
<a id="tocsauthenticateoidcactionsessiontimeout"></a>

```json
0
```

<h2 id="tocS_AuthenticateOidcActionUseExistingClientSecret">AuthenticateOidcActionUseExistingClientSecret</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticateoidcactionuseexistingclientsecret"></a>
<a id="schema_AuthenticateOidcActionUseExistingClientSecret"></a>
<a id="tocSauthenticateoidcactionuseexistingclientsecret"></a>
<a id="tocsauthenticateoidcactionuseexistingclientsecret"></a>

```json
true
```

<h2 id="tocS_ZoneName">ZoneName</h2>
<!-- backwards compatibility -->
<a id="schemazonename"></a>
<a id="schema_ZoneName"></a>
<a id="tocSzonename"></a>
<a id="tocszonename"></a>

```json
"string"
```

<h2 id="tocS_OutpostId">OutpostId</h2>
<!-- backwards compatibility -->
<a id="schemaoutpostid"></a>
<a id="schema_OutpostId"></a>
<a id="tocSoutpostid"></a>
<a id="tocsoutpostid"></a>

```json
"string"
```

<h2 id="tocS_LoadBalancerAddresses">LoadBalancerAddresses</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalanceraddresses"></a>
<a id="schema_LoadBalancerAddresses"></a>
<a id="tocSloadbalanceraddresses"></a>
<a id="tocsloadbalanceraddresses"></a>

```json
[
  {
    "IpAddress": {},
    "AllocationId": {},
    "PrivateIPv4Address": {},
    "IPv6Address": {}
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
  "ZoneName": {},
  "SubnetId": {},
  "OutpostId": {},
  "LoadBalancerAddresses": {}
}
```

Information about an Availability Zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ZoneName|object|false|none|none|
|SubnetId|object|false|none|none|
|OutpostId|object|false|none|none|
|LoadBalancerAddresses|object|false|none|none|

<h2 id="tocS_AvailabilityZones">AvailabilityZones</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzones"></a>
<a id="schema_AvailabilityZones"></a>
<a id="tocSavailabilityzones"></a>
<a id="tocsavailabilityzones"></a>

```json
[
  {
    "ZoneName": {},
    "SubnetId": {},
    "OutpostId": {},
    "LoadBalancerAddresses": {}
  }
]
```

<h2 id="tocS_CanonicalHostedZoneId">CanonicalHostedZoneId</h2>
<!-- backwards compatibility -->
<a id="schemacanonicalhostedzoneid"></a>
<a id="schema_CanonicalHostedZoneId"></a>
<a id="tocScanonicalhostedzoneid"></a>
<a id="tocscanonicalhostedzoneid"></a>

```json
"string"
```

<h2 id="tocS_CertificateArn">CertificateArn</h2>
<!-- backwards compatibility -->
<a id="schemacertificatearn"></a>
<a id="schema_CertificateArn"></a>
<a id="tocScertificatearn"></a>
<a id="tocscertificatearn"></a>

```json
"string"
```

<h2 id="tocS_Default">Default</h2>
<!-- backwards compatibility -->
<a id="schemadefault"></a>
<a id="schema_Default"></a>
<a id="tocSdefault"></a>
<a id="tocsdefault"></a>

```json
true
```

<h2 id="tocS_CipherName">CipherName</h2>
<!-- backwards compatibility -->
<a id="schemaciphername"></a>
<a id="schema_CipherName"></a>
<a id="tocSciphername"></a>
<a id="tocsciphername"></a>

```json
"string"
```

<h2 id="tocS_CipherPriority">CipherPriority</h2>
<!-- backwards compatibility -->
<a id="schemacipherpriority"></a>
<a id="schema_CipherPriority"></a>
<a id="tocScipherpriority"></a>
<a id="tocscipherpriority"></a>

```json
0
```

<h2 id="tocS_Cipher">Cipher</h2>
<!-- backwards compatibility -->
<a id="schemacipher"></a>
<a id="schema_Cipher"></a>
<a id="tocScipher"></a>
<a id="tocscipher"></a>

```json
{
  "Name": {},
  "Priority": {}
}
```

Information about a cipher used in a policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Priority|object|false|none|none|

<h2 id="tocS_Ciphers">Ciphers</h2>
<!-- backwards compatibility -->
<a id="schemaciphers"></a>
<a id="schema_Ciphers"></a>
<a id="tocSciphers"></a>
<a id="tocsciphers"></a>

```json
[
  {
    "Name": {},
    "Priority": {}
  }
]
```

<h2 id="tocS_ConditionFieldName">ConditionFieldName</h2>
<!-- backwards compatibility -->
<a id="schemaconditionfieldname"></a>
<a id="schema_ConditionFieldName"></a>
<a id="tocSconditionfieldname"></a>
<a id="tocsconditionfieldname"></a>

```json
"string"
```

<h2 id="tocS_ProtocolEnum">ProtocolEnum</h2>
<!-- backwards compatibility -->
<a id="schemaprotocolenum"></a>
<a id="schema_ProtocolEnum"></a>
<a id="tocSprotocolenum"></a>
<a id="tocsprotocolenum"></a>

```json
"HTTP"
```

<h2 id="tocS_Port">Port</h2>
<!-- backwards compatibility -->
<a id="schemaport"></a>
<a id="schema_Port"></a>
<a id="tocSport"></a>
<a id="tocsport"></a>

```json
1
```

<h2 id="tocS_CreateListenerInput">CreateListenerInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatelistenerinput"></a>
<a id="schema_CreateListenerInput"></a>
<a id="tocScreatelistenerinput"></a>
<a id="tocscreatelistenerinput"></a>

```json
{
  "LoadBalancerArn": {},
  "Protocol": {},
  "Port": {},
  "SslPolicy": {},
  "Certificates": {},
  "DefaultActions": {},
  "AlpnPolicy": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerArn|object|true|none|none|
|Protocol|object|false|none|none|
|Port|object|false|none|none|
|SslPolicy|object|false|none|none|
|Certificates|object|false|none|none|
|DefaultActions|object|true|none|none|
|AlpnPolicy|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_Listeners">Listeners</h2>
<!-- backwards compatibility -->
<a id="schemalisteners"></a>
<a id="schema_Listeners"></a>
<a id="tocSlisteners"></a>
<a id="tocslisteners"></a>

```json
[
  {
    "ListenerArn": {},
    "LoadBalancerArn": {},
    "Port": {},
    "Protocol": {},
    "Certificates": {},
    "SslPolicy": {},
    "DefaultActions": {},
    "AlpnPolicy": {}
  }
]
```

<h2 id="tocS_Subnets">Subnets</h2>
<!-- backwards compatibility -->
<a id="schemasubnets"></a>
<a id="schema_Subnets"></a>
<a id="tocSsubnets"></a>
<a id="tocssubnets"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SubnetMappings">SubnetMappings</h2>
<!-- backwards compatibility -->
<a id="schemasubnetmappings"></a>
<a id="schema_SubnetMappings"></a>
<a id="tocSsubnetmappings"></a>
<a id="tocssubnetmappings"></a>

```json
[
  {
    "SubnetId": {},
    "AllocationId": {},
    "PrivateIPv4Address": {},
    "IPv6Address": {}
  }
]
```

<h2 id="tocS_SecurityGroups">SecurityGroups</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroups"></a>
<a id="schema_SecurityGroups"></a>
<a id="tocSsecuritygroups"></a>
<a id="tocssecuritygroups"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LoadBalancerSchemeEnum">LoadBalancerSchemeEnum</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerschemeenum"></a>
<a id="schema_LoadBalancerSchemeEnum"></a>
<a id="tocSloadbalancerschemeenum"></a>
<a id="tocsloadbalancerschemeenum"></a>

```json
"internet-facing"
```

<h2 id="tocS_LoadBalancerTypeEnum">LoadBalancerTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertypeenum"></a>
<a id="schema_LoadBalancerTypeEnum"></a>
<a id="tocSloadbalancertypeenum"></a>
<a id="tocsloadbalancertypeenum"></a>

```json
"application"
```

<h2 id="tocS_IpAddressType">IpAddressType</h2>
<!-- backwards compatibility -->
<a id="schemaipaddresstype"></a>
<a id="schema_IpAddressType"></a>
<a id="tocSipaddresstype"></a>
<a id="tocsipaddresstype"></a>

```json
"ipv4"
```

<h2 id="tocS_CustomerOwnedIpv4Pool">CustomerOwnedIpv4Pool</h2>
<!-- backwards compatibility -->
<a id="schemacustomerownedipv4pool"></a>
<a id="schema_CustomerOwnedIpv4Pool"></a>
<a id="tocScustomerownedipv4pool"></a>
<a id="tocscustomerownedipv4pool"></a>

```json
"string"
```

<h2 id="tocS_CreateLoadBalancerInput">CreateLoadBalancerInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateloadbalancerinput"></a>
<a id="schema_CreateLoadBalancerInput"></a>
<a id="tocScreateloadbalancerinput"></a>
<a id="tocscreateloadbalancerinput"></a>

```json
{
  "Name": {},
  "Subnets": {},
  "SubnetMappings": {},
  "SecurityGroups": {},
  "Scheme": {},
  "Tags": {},
  "Type": {},
  "IpAddressType": {},
  "CustomerOwnedIpv4Pool": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Subnets|object|false|none|none|
|SubnetMappings|object|false|none|none|
|SecurityGroups|object|false|none|none|
|Scheme|object|false|none|none|
|Tags|object|false|none|none|
|Type|object|false|none|none|
|IpAddressType|object|false|none|none|
|CustomerOwnedIpv4Pool|object|false|none|none|

<h2 id="tocS_LoadBalancers">LoadBalancers</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancers"></a>
<a id="schema_LoadBalancers"></a>
<a id="tocSloadbalancers"></a>
<a id="tocsloadbalancers"></a>

```json
[
  {
    "LoadBalancerArn": {},
    "DNSName": {},
    "CanonicalHostedZoneId": {},
    "CreatedTime": {},
    "LoadBalancerName": {},
    "Scheme": {},
    "VpcId": {},
    "State": {
      "Code": {},
      "Reason": {}
    },
    "Type": {},
    "AvailabilityZones": {},
    "SecurityGroups": {},
    "IpAddressType": {},
    "CustomerOwnedIpv4Pool": {}
  }
]
```

<h2 id="tocS_RuleConditionList">RuleConditionList</h2>
<!-- backwards compatibility -->
<a id="schemaruleconditionlist"></a>
<a id="schema_RuleConditionList"></a>
<a id="tocSruleconditionlist"></a>
<a id="tocsruleconditionlist"></a>

```json
[
  {
    "Field": {},
    "Values": {},
    "HostHeaderConfig": {
      "Values": {}
    },
    "PathPatternConfig": {
      "Values": {}
    },
    "HttpHeaderConfig": {
      "HttpHeaderName": {},
      "Values": {}
    },
    "QueryStringConfig": {
      "Values": {}
    },
    "HttpRequestMethodConfig": {
      "Values": {}
    },
    "SourceIpConfig": {
      "Values": {}
    }
  }
]
```

<h2 id="tocS_RulePriority">RulePriority</h2>
<!-- backwards compatibility -->
<a id="schemarulepriority"></a>
<a id="schema_RulePriority"></a>
<a id="tocSrulepriority"></a>
<a id="tocsrulepriority"></a>

```json
1
```

<h2 id="tocS_CreateRuleInput">CreateRuleInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateruleinput"></a>
<a id="schema_CreateRuleInput"></a>
<a id="tocScreateruleinput"></a>
<a id="tocscreateruleinput"></a>

```json
{
  "ListenerArn": {},
  "Conditions": {},
  "Priority": {},
  "Actions": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|true|none|none|
|Conditions|object|true|none|none|
|Priority|object|true|none|none|
|Actions|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_Rules">Rules</h2>
<!-- backwards compatibility -->
<a id="schemarules"></a>
<a id="schema_Rules"></a>
<a id="tocSrules"></a>
<a id="tocsrules"></a>

```json
[
  {
    "RuleArn": {},
    "Priority": {},
    "Conditions": {},
    "Actions": {},
    "IsDefault": {}
  }
]
```

<h2 id="tocS_ProtocolVersion">ProtocolVersion</h2>
<!-- backwards compatibility -->
<a id="schemaprotocolversion"></a>
<a id="schema_ProtocolVersion"></a>
<a id="tocSprotocolversion"></a>
<a id="tocsprotocolversion"></a>

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
"string"
```

<h2 id="tocS_HealthCheckPort">HealthCheckPort</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckport"></a>
<a id="schema_HealthCheckPort"></a>
<a id="tocShealthcheckport"></a>
<a id="tocshealthcheckport"></a>

```json
"string"
```

<h2 id="tocS_HealthCheckEnabled">HealthCheckEnabled</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckenabled"></a>
<a id="schema_HealthCheckEnabled"></a>
<a id="tocShealthcheckenabled"></a>
<a id="tocshealthcheckenabled"></a>

```json
true
```

<h2 id="tocS_Path">Path</h2>
<!-- backwards compatibility -->
<a id="schemapath"></a>
<a id="schema_Path"></a>
<a id="tocSpath"></a>
<a id="tocspath"></a>

```json
"string"
```

<h2 id="tocS_HealthCheckIntervalSeconds">HealthCheckIntervalSeconds</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckintervalseconds"></a>
<a id="schema_HealthCheckIntervalSeconds"></a>
<a id="tocShealthcheckintervalseconds"></a>
<a id="tocshealthcheckintervalseconds"></a>

```json
5
```

<h2 id="tocS_HealthCheckTimeoutSeconds">HealthCheckTimeoutSeconds</h2>
<!-- backwards compatibility -->
<a id="schemahealthchecktimeoutseconds"></a>
<a id="schema_HealthCheckTimeoutSeconds"></a>
<a id="tocShealthchecktimeoutseconds"></a>
<a id="tocshealthchecktimeoutseconds"></a>

```json
2
```

<h2 id="tocS_HealthCheckThresholdCount">HealthCheckThresholdCount</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckthresholdcount"></a>
<a id="schema_HealthCheckThresholdCount"></a>
<a id="tocShealthcheckthresholdcount"></a>
<a id="tocshealthcheckthresholdcount"></a>

```json
2
```

<h2 id="tocS_Matcher">Matcher</h2>
<!-- backwards compatibility -->
<a id="schemamatcher"></a>
<a id="schema_Matcher"></a>
<a id="tocSmatcher"></a>
<a id="tocsmatcher"></a>

```json
{
  "HttpCode": {},
  "GrpcCode": {}
}
```

The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HttpCode|object|false|none|none|
|GrpcCode|object|false|none|none|

<h2 id="tocS_TargetTypeEnum">TargetTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schematargettypeenum"></a>
<a id="schema_TargetTypeEnum"></a>
<a id="tocStargettypeenum"></a>
<a id="tocstargettypeenum"></a>

```json
"instance"
```

<h2 id="tocS_TargetGroupIpAddressTypeEnum">TargetGroupIpAddressTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schematargetgroupipaddresstypeenum"></a>
<a id="schema_TargetGroupIpAddressTypeEnum"></a>
<a id="tocStargetgroupipaddresstypeenum"></a>
<a id="tocstargetgroupipaddresstypeenum"></a>

```json
"ipv4"
```

<h2 id="tocS_CreateTargetGroupInput">CreateTargetGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatetargetgroupinput"></a>
<a id="schema_CreateTargetGroupInput"></a>
<a id="tocScreatetargetgroupinput"></a>
<a id="tocscreatetargetgroupinput"></a>

```json
{
  "Name": {},
  "Protocol": {},
  "ProtocolVersion": {},
  "Port": {},
  "VpcId": {},
  "HealthCheckProtocol": {},
  "HealthCheckPort": {},
  "HealthCheckEnabled": {},
  "HealthCheckPath": {},
  "HealthCheckIntervalSeconds": {},
  "HealthCheckTimeoutSeconds": {},
  "HealthyThresholdCount": {},
  "UnhealthyThresholdCount": {},
  "Matcher": {
    "HttpCode": {},
    "GrpcCode": {}
  },
  "TargetType": {},
  "Tags": {},
  "IpAddressType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Protocol|object|false|none|none|
|ProtocolVersion|object|false|none|none|
|Port|object|false|none|none|
|VpcId|object|false|none|none|
|HealthCheckProtocol|object|false|none|none|
|HealthCheckPort|object|false|none|none|
|HealthCheckEnabled|object|false|none|none|
|HealthCheckPath|object|false|none|none|
|HealthCheckIntervalSeconds|object|false|none|none|
|HealthCheckTimeoutSeconds|object|false|none|none|
|HealthyThresholdCount|object|false|none|none|
|UnhealthyThresholdCount|object|false|none|none|
|Matcher|object|false|none|none|
|TargetType|object|false|none|none|
|Tags|object|false|none|none|
|IpAddressType|object|false|none|none|

<h2 id="tocS_TargetGroups">TargetGroups</h2>
<!-- backwards compatibility -->
<a id="schematargetgroups"></a>
<a id="schema_TargetGroups"></a>
<a id="tocStargetgroups"></a>
<a id="tocstargetgroups"></a>

```json
[
  {
    "TargetGroupArn": {},
    "TargetGroupName": {},
    "Protocol": {},
    "Port": {},
    "VpcId": {},
    "HealthCheckProtocol": {},
    "HealthCheckPort": {},
    "HealthCheckEnabled": {},
    "HealthCheckIntervalSeconds": {},
    "HealthCheckTimeoutSeconds": {},
    "HealthyThresholdCount": {},
    "UnhealthyThresholdCount": {},
    "HealthCheckPath": {},
    "Matcher": {
      "HttpCode": {},
      "GrpcCode": {}
    },
    "LoadBalancerArns": {},
    "TargetType": {},
    "ProtocolVersion": {},
    "IpAddressType": {}
  }
]
```

<h2 id="tocS_CreatedTime">CreatedTime</h2>
<!-- backwards compatibility -->
<a id="schemacreatedtime"></a>
<a id="schema_CreatedTime"></a>
<a id="tocScreatedtime"></a>
<a id="tocscreatedtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DNSName">DNSName</h2>
<!-- backwards compatibility -->
<a id="schemadnsname"></a>
<a id="schema_DNSName"></a>
<a id="tocSdnsname"></a>
<a id="tocsdnsname"></a>

```json
"string"
```

<h2 id="tocS_DeleteListenerInput">DeleteListenerInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletelistenerinput"></a>
<a id="schema_DeleteListenerInput"></a>
<a id="tocSdeletelistenerinput"></a>
<a id="tocsdeletelistenerinput"></a>

```json
{
  "ListenerArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|true|none|none|

<h2 id="tocS_DeleteLoadBalancerInput">DeleteLoadBalancerInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteloadbalancerinput"></a>
<a id="schema_DeleteLoadBalancerInput"></a>
<a id="tocSdeleteloadbalancerinput"></a>
<a id="tocsdeleteloadbalancerinput"></a>

```json
{
  "LoadBalancerArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerArn|object|true|none|none|

<h2 id="tocS_DeleteRuleInput">DeleteRuleInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteruleinput"></a>
<a id="schema_DeleteRuleInput"></a>
<a id="tocSdeleteruleinput"></a>
<a id="tocsdeleteruleinput"></a>

```json
{
  "RuleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleArn|object|true|none|none|

<h2 id="tocS_DeleteTargetGroupInput">DeleteTargetGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletetargetgroupinput"></a>
<a id="schema_DeleteTargetGroupInput"></a>
<a id="tocSdeletetargetgroupinput"></a>
<a id="tocsdeletetargetgroupinput"></a>

```json
{
  "TargetGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetGroupArn|object|true|none|none|

<h2 id="tocS_TargetDescriptions">TargetDescriptions</h2>
<!-- backwards compatibility -->
<a id="schematargetdescriptions"></a>
<a id="schema_TargetDescriptions"></a>
<a id="tocStargetdescriptions"></a>
<a id="tocstargetdescriptions"></a>

```json
[
  {
    "Id": {},
    "Port": {},
    "AvailabilityZone": {}
  }
]
```

<h2 id="tocS_DeregisterTargetsInput">DeregisterTargetsInput</h2>
<!-- backwards compatibility -->
<a id="schemaderegistertargetsinput"></a>
<a id="schema_DeregisterTargetsInput"></a>
<a id="tocSderegistertargetsinput"></a>
<a id="tocsderegistertargetsinput"></a>

```json
{
  "TargetGroupArn": {},
  "Targets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetGroupArn|object|true|none|none|
|Targets|object|true|none|none|

<h2 id="tocS_Marker">Marker</h2>
<!-- backwards compatibility -->
<a id="schemamarker"></a>
<a id="schema_Marker"></a>
<a id="tocSmarker"></a>
<a id="tocsmarker"></a>

```json
"string"
```

<h2 id="tocS_PageSize">PageSize</h2>
<!-- backwards compatibility -->
<a id="schemapagesize"></a>
<a id="schema_PageSize"></a>
<a id="tocSpagesize"></a>
<a id="tocspagesize"></a>

```json
1
```

<h2 id="tocS_DescribeAccountLimitsInput">DescribeAccountLimitsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountlimitsinput"></a>
<a id="schema_DescribeAccountLimitsInput"></a>
<a id="tocSdescribeaccountlimitsinput"></a>
<a id="tocsdescribeaccountlimitsinput"></a>

```json
{
  "Marker": {},
  "PageSize": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|PageSize|object|false|none|none|

<h2 id="tocS_Limits">Limits</h2>
<!-- backwards compatibility -->
<a id="schemalimits"></a>
<a id="schema_Limits"></a>
<a id="tocSlimits"></a>
<a id="tocslimits"></a>

```json
[
  {
    "Name": {},
    "Max": {}
  }
]
```

<h2 id="tocS_DescribeListenerCertificatesInput">DescribeListenerCertificatesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribelistenercertificatesinput"></a>
<a id="schema_DescribeListenerCertificatesInput"></a>
<a id="tocSdescribelistenercertificatesinput"></a>
<a id="tocsdescribelistenercertificatesinput"></a>

```json
{
  "ListenerArn": {},
  "Marker": {},
  "PageSize": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|true|none|none|
|Marker|object|false|none|none|
|PageSize|object|false|none|none|

<h2 id="tocS_ListenerArns">ListenerArns</h2>
<!-- backwards compatibility -->
<a id="schemalistenerarns"></a>
<a id="schema_ListenerArns"></a>
<a id="tocSlistenerarns"></a>
<a id="tocslistenerarns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DescribeListenersInput">DescribeListenersInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribelistenersinput"></a>
<a id="schema_DescribeListenersInput"></a>
<a id="tocSdescribelistenersinput"></a>
<a id="tocsdescribelistenersinput"></a>

```json
{
  "LoadBalancerArn": {},
  "ListenerArns": {},
  "Marker": {},
  "PageSize": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerArn|object|false|none|none|
|ListenerArns|object|false|none|none|
|Marker|object|false|none|none|
|PageSize|object|false|none|none|

<h2 id="tocS_DescribeLoadBalancerAttributesInput">DescribeLoadBalancerAttributesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloadbalancerattributesinput"></a>
<a id="schema_DescribeLoadBalancerAttributesInput"></a>
<a id="tocSdescribeloadbalancerattributesinput"></a>
<a id="tocsdescribeloadbalancerattributesinput"></a>

```json
{
  "LoadBalancerArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerArn|object|true|none|none|

<h2 id="tocS_LoadBalancerAttributes">LoadBalancerAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerattributes"></a>
<a id="schema_LoadBalancerAttributes"></a>
<a id="tocSloadbalancerattributes"></a>
<a id="tocsloadbalancerattributes"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_LoadBalancerArns">LoadBalancerArns</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerarns"></a>
<a id="schema_LoadBalancerArns"></a>
<a id="tocSloadbalancerarns"></a>
<a id="tocsloadbalancerarns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LoadBalancerNames">LoadBalancerNames</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancernames"></a>
<a id="schema_LoadBalancerNames"></a>
<a id="tocSloadbalancernames"></a>
<a id="tocsloadbalancernames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DescribeLoadBalancersInput">DescribeLoadBalancersInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloadbalancersinput"></a>
<a id="schema_DescribeLoadBalancersInput"></a>
<a id="tocSdescribeloadbalancersinput"></a>
<a id="tocsdescribeloadbalancersinput"></a>

```json
{
  "LoadBalancerArns": {},
  "Names": {},
  "Marker": {},
  "PageSize": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerArns|object|false|none|none|
|Names|object|false|none|none|
|Marker|object|false|none|none|
|PageSize|object|false|none|none|

<h2 id="tocS_RuleArns">RuleArns</h2>
<!-- backwards compatibility -->
<a id="schemarulearns"></a>
<a id="schema_RuleArns"></a>
<a id="tocSrulearns"></a>
<a id="tocsrulearns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DescribeRulesInput">DescribeRulesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescriberulesinput"></a>
<a id="schema_DescribeRulesInput"></a>
<a id="tocSdescriberulesinput"></a>
<a id="tocsdescriberulesinput"></a>

```json
{
  "ListenerArn": {},
  "RuleArns": {},
  "Marker": {},
  "PageSize": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|false|none|none|
|RuleArns|object|false|none|none|
|Marker|object|false|none|none|
|PageSize|object|false|none|none|

<h2 id="tocS_SslPolicyNames">SslPolicyNames</h2>
<!-- backwards compatibility -->
<a id="schemasslpolicynames"></a>
<a id="schema_SslPolicyNames"></a>
<a id="tocSsslpolicynames"></a>
<a id="tocssslpolicynames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DescribeSSLPoliciesInput">DescribeSSLPoliciesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribesslpoliciesinput"></a>
<a id="schema_DescribeSSLPoliciesInput"></a>
<a id="tocSdescribesslpoliciesinput"></a>
<a id="tocsdescribesslpoliciesinput"></a>

```json
{
  "Names": {},
  "Marker": {},
  "PageSize": {},
  "LoadBalancerType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Names|object|false|none|none|
|Marker|object|false|none|none|
|PageSize|object|false|none|none|
|LoadBalancerType|object|false|none|none|

<h2 id="tocS_SslPolicies">SslPolicies</h2>
<!-- backwards compatibility -->
<a id="schemasslpolicies"></a>
<a id="schema_SslPolicies"></a>
<a id="tocSsslpolicies"></a>
<a id="tocssslpolicies"></a>

```json
[
  {
    "SslProtocols": {},
    "Ciphers": {},
    "Name": {},
    "SupportedLoadBalancerTypes": {}
  }
]
```

<h2 id="tocS_DescribeTagsInput">DescribeTagsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetagsinput"></a>
<a id="schema_DescribeTagsInput"></a>
<a id="tocSdescribetagsinput"></a>
<a id="tocsdescribetagsinput"></a>

```json
{
  "ResourceArns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArns|object|true|none|none|

<h2 id="tocS_TagDescriptions">TagDescriptions</h2>
<!-- backwards compatibility -->
<a id="schematagdescriptions"></a>
<a id="schema_TagDescriptions"></a>
<a id="tocStagdescriptions"></a>
<a id="tocstagdescriptions"></a>

```json
[
  {
    "ResourceArn": {},
    "Tags": {}
  }
]
```

<h2 id="tocS_DescribeTargetGroupAttributesInput">DescribeTargetGroupAttributesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetargetgroupattributesinput"></a>
<a id="schema_DescribeTargetGroupAttributesInput"></a>
<a id="tocSdescribetargetgroupattributesinput"></a>
<a id="tocsdescribetargetgroupattributesinput"></a>

```json
{
  "TargetGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetGroupArn|object|true|none|none|

<h2 id="tocS_TargetGroupAttributes">TargetGroupAttributes</h2>
<!-- backwards compatibility -->
<a id="schematargetgroupattributes"></a>
<a id="schema_TargetGroupAttributes"></a>
<a id="tocStargetgroupattributes"></a>
<a id="tocstargetgroupattributes"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_TargetGroupArns">TargetGroupArns</h2>
<!-- backwards compatibility -->
<a id="schematargetgrouparns"></a>
<a id="schema_TargetGroupArns"></a>
<a id="tocStargetgrouparns"></a>
<a id="tocstargetgrouparns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TargetGroupNames">TargetGroupNames</h2>
<!-- backwards compatibility -->
<a id="schematargetgroupnames"></a>
<a id="schema_TargetGroupNames"></a>
<a id="tocStargetgroupnames"></a>
<a id="tocstargetgroupnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DescribeTargetGroupsInput">DescribeTargetGroupsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetargetgroupsinput"></a>
<a id="schema_DescribeTargetGroupsInput"></a>
<a id="tocSdescribetargetgroupsinput"></a>
<a id="tocsdescribetargetgroupsinput"></a>

```json
{
  "LoadBalancerArn": {},
  "TargetGroupArns": {},
  "Names": {},
  "Marker": {},
  "PageSize": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerArn|object|false|none|none|
|TargetGroupArns|object|false|none|none|
|Names|object|false|none|none|
|Marker|object|false|none|none|
|PageSize|object|false|none|none|

<h2 id="tocS_DescribeTargetHealthInput">DescribeTargetHealthInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetargethealthinput"></a>
<a id="schema_DescribeTargetHealthInput"></a>
<a id="tocSdescribetargethealthinput"></a>
<a id="tocsdescribetargethealthinput"></a>

```json
{
  "TargetGroupArn": {},
  "Targets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetGroupArn|object|true|none|none|
|Targets|object|false|none|none|

<h2 id="tocS_TargetHealthDescriptions">TargetHealthDescriptions</h2>
<!-- backwards compatibility -->
<a id="schematargethealthdescriptions"></a>
<a id="schema_TargetHealthDescriptions"></a>
<a id="tocStargethealthdescriptions"></a>
<a id="tocstargethealthdescriptions"></a>

```json
[
  {
    "Target": {
      "Id": {},
      "Port": {},
      "AvailabilityZone": {}
    },
    "HealthCheckPort": {},
    "TargetHealth": {
      "State": {},
      "Reason": {},
      "Description": {}
    }
  }
]
```

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_FixedResponseActionMessage">FixedResponseActionMessage</h2>
<!-- backwards compatibility -->
<a id="schemafixedresponseactionmessage"></a>
<a id="schema_FixedResponseActionMessage"></a>
<a id="tocSfixedresponseactionmessage"></a>
<a id="tocsfixedresponseactionmessage"></a>

```json
"string"
```

<h2 id="tocS_FixedResponseActionStatusCode">FixedResponseActionStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemafixedresponseactionstatuscode"></a>
<a id="schema_FixedResponseActionStatusCode"></a>
<a id="tocSfixedresponseactionstatuscode"></a>
<a id="tocsfixedresponseactionstatuscode"></a>

```json
"string"
```

<h2 id="tocS_FixedResponseActionContentType">FixedResponseActionContentType</h2>
<!-- backwards compatibility -->
<a id="schemafixedresponseactioncontenttype"></a>
<a id="schema_FixedResponseActionContentType"></a>
<a id="tocSfixedresponseactioncontenttype"></a>
<a id="tocsfixedresponseactioncontenttype"></a>

```json
"string"
```

<h2 id="tocS_TargetGroupList">TargetGroupList</h2>
<!-- backwards compatibility -->
<a id="schematargetgrouplist"></a>
<a id="schema_TargetGroupList"></a>
<a id="tocStargetgrouplist"></a>
<a id="tocstargetgrouplist"></a>

```json
[
  {
    "TargetGroupArn": {},
    "Weight": {}
  }
]
```

<h2 id="tocS_TargetGroupStickinessConfig">TargetGroupStickinessConfig</h2>
<!-- backwards compatibility -->
<a id="schematargetgroupstickinessconfig"></a>
<a id="schema_TargetGroupStickinessConfig"></a>
<a id="tocStargetgroupstickinessconfig"></a>
<a id="tocstargetgroupstickinessconfig"></a>

```json
{
  "Enabled": {},
  "DurationSeconds": {}
}
```

Information about the target group stickiness for a rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|
|DurationSeconds|object|false|none|none|

<h2 id="tocS_ListOfString">ListOfString</h2>
<!-- backwards compatibility -->
<a id="schemalistofstring"></a>
<a id="schema_ListOfString"></a>
<a id="tocSlistofstring"></a>
<a id="tocslistofstring"></a>

```json
[
  "string"
]
```

<h2 id="tocS_HostHeaderConditionConfig">HostHeaderConditionConfig</h2>
<!-- backwards compatibility -->
<a id="schemahostheaderconditionconfig"></a>
<a id="schema_HostHeaderConditionConfig"></a>
<a id="tocShostheaderconditionconfig"></a>
<a id="tocshostheaderconditionconfig"></a>

```json
{
  "Values": {}
}
```

Information about a host header condition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Values|object|false|none|none|

<h2 id="tocS_HttpHeaderConditionName">HttpHeaderConditionName</h2>
<!-- backwards compatibility -->
<a id="schemahttpheaderconditionname"></a>
<a id="schema_HttpHeaderConditionName"></a>
<a id="tocShttpheaderconditionname"></a>
<a id="tocshttpheaderconditionname"></a>

```json
"string"
```

<h2 id="tocS_HttpHeaderConditionConfig">HttpHeaderConditionConfig</h2>
<!-- backwards compatibility -->
<a id="schemahttpheaderconditionconfig"></a>
<a id="schema_HttpHeaderConditionConfig"></a>
<a id="tocShttpheaderconditionconfig"></a>
<a id="tocshttpheaderconditionconfig"></a>

```json
{
  "HttpHeaderName": {},
  "Values": {}
}
```

<p>Information about an HTTP header condition.</p> <p>There is a set of standard HTTP header fields. You can also define custom HTTP header fields.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HttpHeaderName|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_HttpRequestMethodConditionConfig">HttpRequestMethodConditionConfig</h2>
<!-- backwards compatibility -->
<a id="schemahttprequestmethodconditionconfig"></a>
<a id="schema_HttpRequestMethodConditionConfig"></a>
<a id="tocShttprequestmethodconditionconfig"></a>
<a id="tocshttprequestmethodconditionconfig"></a>

```json
{
  "Values": {}
}
```

<p>Information about an HTTP method condition.</p> <p>HTTP defines a set of request methods, also referred to as HTTP verbs. For more information, see the <a href="https://www.iana.org/assignments/http-methods/http-methods.xhtml">HTTP Method Registry</a>. You can also define custom HTTP methods.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Values|object|false|none|none|

<h2 id="tocS_IPv6Address">IPv6Address</h2>
<!-- backwards compatibility -->
<a id="schemaipv6address"></a>
<a id="schema_IPv6Address"></a>
<a id="tocSipv6address"></a>
<a id="tocsipv6address"></a>

```json
"string"
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

<h2 id="tocS_IsDefault">IsDefault</h2>
<!-- backwards compatibility -->
<a id="schemaisdefault"></a>
<a id="schema_IsDefault"></a>
<a id="tocSisdefault"></a>
<a id="tocsisdefault"></a>

```json
true
```

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
```

<h2 id="tocS_Max">Max</h2>
<!-- backwards compatibility -->
<a id="schemamax"></a>
<a id="schema_Max"></a>
<a id="tocSmax"></a>
<a id="tocsmax"></a>

```json
"string"
```

<h2 id="tocS_Limit">Limit</h2>
<!-- backwards compatibility -->
<a id="schemalimit"></a>
<a id="schema_Limit"></a>
<a id="tocSlimit"></a>
<a id="tocslimit"></a>

```json
{
  "Name": {},
  "Max": {}
}
```

Information about an Elastic Load Balancing resource limit for your Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Max|object|false|none|none|

<h2 id="tocS_StringValue">StringValue</h2>
<!-- backwards compatibility -->
<a id="schemastringvalue"></a>
<a id="schema_StringValue"></a>
<a id="tocSstringvalue"></a>
<a id="tocsstringvalue"></a>

```json
"string"
```

<h2 id="tocS_Listener">Listener</h2>
<!-- backwards compatibility -->
<a id="schemalistener"></a>
<a id="schema_Listener"></a>
<a id="tocSlistener"></a>
<a id="tocslistener"></a>

```json
{
  "ListenerArn": {},
  "LoadBalancerArn": {},
  "Port": {},
  "Protocol": {},
  "Certificates": {},
  "SslPolicy": {},
  "DefaultActions": {},
  "AlpnPolicy": {}
}
```

Information about a listener.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|false|none|none|
|LoadBalancerArn|object|false|none|none|
|Port|object|false|none|none|
|Protocol|object|false|none|none|
|Certificates|object|false|none|none|
|SslPolicy|object|false|none|none|
|DefaultActions|object|false|none|none|
|AlpnPolicy|object|false|none|none|

<h2 id="tocS_LoadBalancerState">LoadBalancerState</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerstate"></a>
<a id="schema_LoadBalancerState"></a>
<a id="tocSloadbalancerstate"></a>
<a id="tocsloadbalancerstate"></a>

```json
{
  "Code": {},
  "Reason": {}
}
```

Information about the state of the load balancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|Reason|object|false|none|none|

<h2 id="tocS_LoadBalancer">LoadBalancer</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancer"></a>
<a id="schema_LoadBalancer"></a>
<a id="tocSloadbalancer"></a>
<a id="tocsloadbalancer"></a>

```json
{
  "LoadBalancerArn": {},
  "DNSName": {},
  "CanonicalHostedZoneId": {},
  "CreatedTime": {},
  "LoadBalancerName": {},
  "Scheme": {},
  "VpcId": {},
  "State": {
    "Code": {},
    "Reason": {}
  },
  "Type": {},
  "AvailabilityZones": {},
  "SecurityGroups": {},
  "IpAddressType": {},
  "CustomerOwnedIpv4Pool": {}
}
```

Information about a load balancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerArn|object|false|none|none|
|DNSName|object|false|none|none|
|CanonicalHostedZoneId|object|false|none|none|
|CreatedTime|object|false|none|none|
|LoadBalancerName|object|false|none|none|
|Scheme|object|false|none|none|
|VpcId|object|false|none|none|
|State|object|false|none|none|
|Type|object|false|none|none|
|AvailabilityZones|object|false|none|none|
|SecurityGroups|object|false|none|none|
|IpAddressType|object|false|none|none|
|CustomerOwnedIpv4Pool|object|false|none|none|

<h2 id="tocS_PrivateIPv4Address">PrivateIPv4Address</h2>
<!-- backwards compatibility -->
<a id="schemaprivateipv4address"></a>
<a id="schema_PrivateIPv4Address"></a>
<a id="tocSprivateipv4address"></a>
<a id="tocsprivateipv4address"></a>

```json
"string"
```

<h2 id="tocS_LoadBalancerAddress">LoadBalancerAddress</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalanceraddress"></a>
<a id="schema_LoadBalancerAddress"></a>
<a id="tocSloadbalanceraddress"></a>
<a id="tocsloadbalanceraddress"></a>

```json
{
  "IpAddress": {},
  "AllocationId": {},
  "PrivateIPv4Address": {},
  "IPv6Address": {}
}
```

Information about a static IP address for a load balancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpAddress|object|false|none|none|
|AllocationId|object|false|none|none|
|PrivateIPv4Address|object|false|none|none|
|IPv6Address|object|false|none|none|

<h2 id="tocS_LoadBalancerAttributeKey">LoadBalancerAttributeKey</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerattributekey"></a>
<a id="schema_LoadBalancerAttributeKey"></a>
<a id="tocSloadbalancerattributekey"></a>
<a id="tocsloadbalancerattributekey"></a>

```json
"string"
```

<h2 id="tocS_LoadBalancerAttributeValue">LoadBalancerAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerattributevalue"></a>
<a id="schema_LoadBalancerAttributeValue"></a>
<a id="tocSloadbalancerattributevalue"></a>
<a id="tocsloadbalancerattributevalue"></a>

```json
"string"
```

<h2 id="tocS_LoadBalancerStateEnum">LoadBalancerStateEnum</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerstateenum"></a>
<a id="schema_LoadBalancerStateEnum"></a>
<a id="tocSloadbalancerstateenum"></a>
<a id="tocsloadbalancerstateenum"></a>

```json
"active"
```

<h2 id="tocS_StateReason">StateReason</h2>
<!-- backwards compatibility -->
<a id="schemastatereason"></a>
<a id="schema_StateReason"></a>
<a id="tocSstatereason"></a>
<a id="tocsstatereason"></a>

```json
"string"
```

<h2 id="tocS_ModifyListenerInput">ModifyListenerInput</h2>
<!-- backwards compatibility -->
<a id="schemamodifylistenerinput"></a>
<a id="schema_ModifyListenerInput"></a>
<a id="tocSmodifylistenerinput"></a>
<a id="tocsmodifylistenerinput"></a>

```json
{
  "ListenerArn": {},
  "Port": {},
  "Protocol": {},
  "SslPolicy": {},
  "Certificates": {},
  "DefaultActions": {},
  "AlpnPolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|true|none|none|
|Port|object|false|none|none|
|Protocol|object|false|none|none|
|SslPolicy|object|false|none|none|
|Certificates|object|false|none|none|
|DefaultActions|object|false|none|none|
|AlpnPolicy|object|false|none|none|

<h2 id="tocS_ModifyLoadBalancerAttributesInput">ModifyLoadBalancerAttributesInput</h2>
<!-- backwards compatibility -->
<a id="schemamodifyloadbalancerattributesinput"></a>
<a id="schema_ModifyLoadBalancerAttributesInput"></a>
<a id="tocSmodifyloadbalancerattributesinput"></a>
<a id="tocsmodifyloadbalancerattributesinput"></a>

```json
{
  "LoadBalancerArn": {},
  "Attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerArn|object|true|none|none|
|Attributes|object|true|none|none|

<h2 id="tocS_ModifyRuleInput">ModifyRuleInput</h2>
<!-- backwards compatibility -->
<a id="schemamodifyruleinput"></a>
<a id="schema_ModifyRuleInput"></a>
<a id="tocSmodifyruleinput"></a>
<a id="tocsmodifyruleinput"></a>

```json
{
  "RuleArn": {},
  "Conditions": {},
  "Actions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleArn|object|true|none|none|
|Conditions|object|false|none|none|
|Actions|object|false|none|none|

<h2 id="tocS_ModifyTargetGroupAttributesInput">ModifyTargetGroupAttributesInput</h2>
<!-- backwards compatibility -->
<a id="schemamodifytargetgroupattributesinput"></a>
<a id="schema_ModifyTargetGroupAttributesInput"></a>
<a id="tocSmodifytargetgroupattributesinput"></a>
<a id="tocsmodifytargetgroupattributesinput"></a>

```json
{
  "TargetGroupArn": {},
  "Attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetGroupArn|object|true|none|none|
|Attributes|object|true|none|none|

<h2 id="tocS_ModifyTargetGroupInput">ModifyTargetGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemamodifytargetgroupinput"></a>
<a id="schema_ModifyTargetGroupInput"></a>
<a id="tocSmodifytargetgroupinput"></a>
<a id="tocsmodifytargetgroupinput"></a>

```json
{
  "TargetGroupArn": {},
  "HealthCheckProtocol": {},
  "HealthCheckPort": {},
  "HealthCheckPath": {},
  "HealthCheckEnabled": {},
  "HealthCheckIntervalSeconds": {},
  "HealthCheckTimeoutSeconds": {},
  "HealthyThresholdCount": {},
  "UnhealthyThresholdCount": {},
  "Matcher": {
    "HttpCode": {},
    "GrpcCode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetGroupArn|object|true|none|none|
|HealthCheckProtocol|object|false|none|none|
|HealthCheckPort|object|false|none|none|
|HealthCheckPath|object|false|none|none|
|HealthCheckEnabled|object|false|none|none|
|HealthCheckIntervalSeconds|object|false|none|none|
|HealthCheckTimeoutSeconds|object|false|none|none|
|HealthyThresholdCount|object|false|none|none|
|UnhealthyThresholdCount|object|false|none|none|
|Matcher|object|false|none|none|

<h2 id="tocS_PathPatternConditionConfig">PathPatternConditionConfig</h2>
<!-- backwards compatibility -->
<a id="schemapathpatternconditionconfig"></a>
<a id="schema_PathPatternConditionConfig"></a>
<a id="tocSpathpatternconditionconfig"></a>
<a id="tocspathpatternconditionconfig"></a>

```json
{
  "Values": {}
}
```

Information about a path pattern condition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Values|object|false|none|none|

<h2 id="tocS_QueryStringKeyValuePairList">QueryStringKeyValuePairList</h2>
<!-- backwards compatibility -->
<a id="schemaquerystringkeyvaluepairlist"></a>
<a id="schema_QueryStringKeyValuePairList"></a>
<a id="tocSquerystringkeyvaluepairlist"></a>
<a id="tocsquerystringkeyvaluepairlist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_QueryStringConditionConfig">QueryStringConditionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaquerystringconditionconfig"></a>
<a id="schema_QueryStringConditionConfig"></a>
<a id="tocSquerystringconditionconfig"></a>
<a id="tocsquerystringconditionconfig"></a>

```json
{
  "Values": {}
}
```

<p>Information about a query string condition.</p> <p>The query string component of a URI starts after the first '?' character and is terminated by either a '#' character or the end of the URI. A typical query string contains key/value pairs separated by '&amp;' characters. The allowed characters are specified by RFC 3986. Any character can be percentage encoded.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Values|object|false|none|none|

<h2 id="tocS_QueryStringKeyValuePair">QueryStringKeyValuePair</h2>
<!-- backwards compatibility -->
<a id="schemaquerystringkeyvaluepair"></a>
<a id="schema_QueryStringKeyValuePair"></a>
<a id="tocSquerystringkeyvaluepair"></a>
<a id="tocsquerystringkeyvaluepair"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

Information about a key/value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_RedirectActionProtocol">RedirectActionProtocol</h2>
<!-- backwards compatibility -->
<a id="schemaredirectactionprotocol"></a>
<a id="schema_RedirectActionProtocol"></a>
<a id="tocSredirectactionprotocol"></a>
<a id="tocsredirectactionprotocol"></a>

```json
"string"
```

<h2 id="tocS_RedirectActionPort">RedirectActionPort</h2>
<!-- backwards compatibility -->
<a id="schemaredirectactionport"></a>
<a id="schema_RedirectActionPort"></a>
<a id="tocSredirectactionport"></a>
<a id="tocsredirectactionport"></a>

```json
"string"
```

<h2 id="tocS_RedirectActionHost">RedirectActionHost</h2>
<!-- backwards compatibility -->
<a id="schemaredirectactionhost"></a>
<a id="schema_RedirectActionHost"></a>
<a id="tocSredirectactionhost"></a>
<a id="tocsredirectactionhost"></a>

```json
"string"
```

<h2 id="tocS_RedirectActionPath">RedirectActionPath</h2>
<!-- backwards compatibility -->
<a id="schemaredirectactionpath"></a>
<a id="schema_RedirectActionPath"></a>
<a id="tocSredirectactionpath"></a>
<a id="tocsredirectactionpath"></a>

```json
"string"
```

<h2 id="tocS_RedirectActionQuery">RedirectActionQuery</h2>
<!-- backwards compatibility -->
<a id="schemaredirectactionquery"></a>
<a id="schema_RedirectActionQuery"></a>
<a id="tocSredirectactionquery"></a>
<a id="tocsredirectactionquery"></a>

```json
"string"
```

<h2 id="tocS_RedirectActionStatusCodeEnum">RedirectActionStatusCodeEnum</h2>
<!-- backwards compatibility -->
<a id="schemaredirectactionstatuscodeenum"></a>
<a id="schema_RedirectActionStatusCodeEnum"></a>
<a id="tocSredirectactionstatuscodeenum"></a>
<a id="tocsredirectactionstatuscodeenum"></a>

```json
"HTTP_301"
```

<h2 id="tocS_RegisterTargetsInput">RegisterTargetsInput</h2>
<!-- backwards compatibility -->
<a id="schemaregistertargetsinput"></a>
<a id="schema_RegisterTargetsInput"></a>
<a id="tocSregistertargetsinput"></a>
<a id="tocsregistertargetsinput"></a>

```json
{
  "TargetGroupArn": {},
  "Targets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetGroupArn|object|true|none|none|
|Targets|object|true|none|none|

<h2 id="tocS_RemoveListenerCertificatesInput">RemoveListenerCertificatesInput</h2>
<!-- backwards compatibility -->
<a id="schemaremovelistenercertificatesinput"></a>
<a id="schema_RemoveListenerCertificatesInput"></a>
<a id="tocSremovelistenercertificatesinput"></a>
<a id="tocsremovelistenercertificatesinput"></a>

```json
{
  "ListenerArn": {},
  "Certificates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|true|none|none|
|Certificates|object|true|none|none|

<h2 id="tocS_TagKeys">TagKeys</h2>
<!-- backwards compatibility -->
<a id="schematagkeys"></a>
<a id="schema_TagKeys"></a>
<a id="tocStagkeys"></a>
<a id="tocstagkeys"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RemoveTagsInput">RemoveTagsInput</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsinput"></a>
<a id="schema_RemoveTagsInput"></a>
<a id="tocSremovetagsinput"></a>
<a id="tocsremovetagsinput"></a>

```json
{
  "ResourceArns": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArns|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "RuleArn": {},
  "Priority": {},
  "Conditions": {},
  "Actions": {},
  "IsDefault": {}
}
```

Information about a rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleArn|object|false|none|none|
|Priority|object|false|none|none|
|Conditions|object|false|none|none|
|Actions|object|false|none|none|
|IsDefault|object|false|none|none|

<h2 id="tocS_SourceIpConditionConfig">SourceIpConditionConfig</h2>
<!-- backwards compatibility -->
<a id="schemasourceipconditionconfig"></a>
<a id="schema_SourceIpConditionConfig"></a>
<a id="tocSsourceipconditionconfig"></a>
<a id="tocssourceipconditionconfig"></a>

```json
{
  "Values": {}
}
```

<p>Information about a source IP condition.</p> <p>You can use this condition to route based on the IP address of the source that connects to the load balancer. If a client is behind a proxy, this is the IP address of the proxy not the IP address of the client.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Values|object|false|none|none|

<h2 id="tocS_RulePriorityList">RulePriorityList</h2>
<!-- backwards compatibility -->
<a id="schemaruleprioritylist"></a>
<a id="schema_RulePriorityList"></a>
<a id="tocSruleprioritylist"></a>
<a id="tocsruleprioritylist"></a>

```json
[
  {
    "RuleArn": {},
    "Priority": {}
  }
]
```

<h2 id="tocS_SetIpAddressTypeInput">SetIpAddressTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemasetipaddresstypeinput"></a>
<a id="schema_SetIpAddressTypeInput"></a>
<a id="tocSsetipaddresstypeinput"></a>
<a id="tocssetipaddresstypeinput"></a>

```json
{
  "LoadBalancerArn": {},
  "IpAddressType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerArn|object|true|none|none|
|IpAddressType|object|true|none|none|

<h2 id="tocS_SetRulePrioritiesInput">SetRulePrioritiesInput</h2>
<!-- backwards compatibility -->
<a id="schemasetruleprioritiesinput"></a>
<a id="schema_SetRulePrioritiesInput"></a>
<a id="tocSsetruleprioritiesinput"></a>
<a id="tocssetruleprioritiesinput"></a>

```json
{
  "RulePriorities": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RulePriorities|object|true|none|none|

<h2 id="tocS_SetSecurityGroupsInput">SetSecurityGroupsInput</h2>
<!-- backwards compatibility -->
<a id="schemasetsecuritygroupsinput"></a>
<a id="schema_SetSecurityGroupsInput"></a>
<a id="tocSsetsecuritygroupsinput"></a>
<a id="tocssetsecuritygroupsinput"></a>

```json
{
  "LoadBalancerArn": {},
  "SecurityGroups": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerArn|object|true|none|none|
|SecurityGroups|object|true|none|none|

<h2 id="tocS_SetSubnetsInput">SetSubnetsInput</h2>
<!-- backwards compatibility -->
<a id="schemasetsubnetsinput"></a>
<a id="schema_SetSubnetsInput"></a>
<a id="tocSsetsubnetsinput"></a>
<a id="tocssetsubnetsinput"></a>

```json
{
  "LoadBalancerArn": {},
  "Subnets": {},
  "SubnetMappings": {},
  "IpAddressType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerArn|object|true|none|none|
|Subnets|object|false|none|none|
|SubnetMappings|object|false|none|none|
|IpAddressType|object|false|none|none|

<h2 id="tocS_SslPolicy">SslPolicy</h2>
<!-- backwards compatibility -->
<a id="schemasslpolicy"></a>
<a id="schema_SslPolicy"></a>
<a id="tocSsslpolicy"></a>
<a id="tocssslpolicy"></a>

```json
{
  "SslProtocols": {},
  "Ciphers": {},
  "Name": {},
  "SupportedLoadBalancerTypes": {}
}
```

Information about a policy used for SSL negotiation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SslProtocols|object|false|none|none|
|Ciphers|object|false|none|none|
|Name|object|false|none|none|
|SupportedLoadBalancerTypes|object|false|none|none|

<h2 id="tocS_SslProtocols">SslProtocols</h2>
<!-- backwards compatibility -->
<a id="schemasslprotocols"></a>
<a id="schema_SslProtocols"></a>
<a id="tocSsslprotocols"></a>
<a id="tocssslprotocols"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SslProtocol">SslProtocol</h2>
<!-- backwards compatibility -->
<a id="schemasslprotocol"></a>
<a id="schema_SslProtocol"></a>
<a id="tocSsslprotocol"></a>
<a id="tocssslprotocol"></a>

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

<h2 id="tocS_TagDescription">TagDescription</h2>
<!-- backwards compatibility -->
<a id="schematagdescription"></a>
<a id="schema_TagDescription"></a>
<a id="tocStagdescription"></a>
<a id="tocstagdescription"></a>

```json
{
  "ResourceArn": {},
  "Tags": {}
}
```

The tags associated with a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_TargetId">TargetId</h2>
<!-- backwards compatibility -->
<a id="schematargetid"></a>
<a id="schema_TargetId"></a>
<a id="tocStargetid"></a>
<a id="tocstargetid"></a>

```json
"string"
```

<h2 id="tocS_TargetGroup">TargetGroup</h2>
<!-- backwards compatibility -->
<a id="schematargetgroup"></a>
<a id="schema_TargetGroup"></a>
<a id="tocStargetgroup"></a>
<a id="tocstargetgroup"></a>

```json
{
  "TargetGroupArn": {},
  "TargetGroupName": {},
  "Protocol": {},
  "Port": {},
  "VpcId": {},
  "HealthCheckProtocol": {},
  "HealthCheckPort": {},
  "HealthCheckEnabled": {},
  "HealthCheckIntervalSeconds": {},
  "HealthCheckTimeoutSeconds": {},
  "HealthyThresholdCount": {},
  "UnhealthyThresholdCount": {},
  "HealthCheckPath": {},
  "Matcher": {
    "HttpCode": {},
    "GrpcCode": {}
  },
  "LoadBalancerArns": {},
  "TargetType": {},
  "ProtocolVersion": {},
  "IpAddressType": {}
}
```

Information about a target group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetGroupArn|object|false|none|none|
|TargetGroupName|object|false|none|none|
|Protocol|object|false|none|none|
|Port|object|false|none|none|
|VpcId|object|false|none|none|
|HealthCheckProtocol|object|false|none|none|
|HealthCheckPort|object|false|none|none|
|HealthCheckEnabled|object|false|none|none|
|HealthCheckIntervalSeconds|object|false|none|none|
|HealthCheckTimeoutSeconds|object|false|none|none|
|HealthyThresholdCount|object|false|none|none|
|UnhealthyThresholdCount|object|false|none|none|
|HealthCheckPath|object|false|none|none|
|Matcher|object|false|none|none|
|LoadBalancerArns|object|false|none|none|
|TargetType|object|false|none|none|
|ProtocolVersion|object|false|none|none|
|IpAddressType|object|false|none|none|

<h2 id="tocS_TargetGroupAttributeKey">TargetGroupAttributeKey</h2>
<!-- backwards compatibility -->
<a id="schematargetgroupattributekey"></a>
<a id="schema_TargetGroupAttributeKey"></a>
<a id="tocStargetgroupattributekey"></a>
<a id="tocstargetgroupattributekey"></a>

```json
"string"
```

<h2 id="tocS_TargetGroupAttributeValue">TargetGroupAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schematargetgroupattributevalue"></a>
<a id="schema_TargetGroupAttributeValue"></a>
<a id="tocStargetgroupattributevalue"></a>
<a id="tocstargetgroupattributevalue"></a>

```json
"string"
```

<h2 id="tocS_TargetGroupTuple">TargetGroupTuple</h2>
<!-- backwards compatibility -->
<a id="schematargetgrouptuple"></a>
<a id="schema_TargetGroupTuple"></a>
<a id="tocStargetgrouptuple"></a>
<a id="tocstargetgrouptuple"></a>

```json
{
  "TargetGroupArn": {},
  "Weight": {}
}
```

Information about how traffic will be distributed between multiple target groups in a forward rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetGroupArn|object|false|none|none|
|Weight|object|false|none|none|

<h2 id="tocS_TargetGroupStickinessEnabled">TargetGroupStickinessEnabled</h2>
<!-- backwards compatibility -->
<a id="schematargetgroupstickinessenabled"></a>
<a id="schema_TargetGroupStickinessEnabled"></a>
<a id="tocStargetgroupstickinessenabled"></a>
<a id="tocstargetgroupstickinessenabled"></a>

```json
true
```

<h2 id="tocS_TargetGroupStickinessDurationSeconds">TargetGroupStickinessDurationSeconds</h2>
<!-- backwards compatibility -->
<a id="schematargetgroupstickinessdurationseconds"></a>
<a id="schema_TargetGroupStickinessDurationSeconds"></a>
<a id="tocStargetgroupstickinessdurationseconds"></a>
<a id="tocstargetgroupstickinessdurationseconds"></a>

```json
0
```

<h2 id="tocS_TargetGroupWeight">TargetGroupWeight</h2>
<!-- backwards compatibility -->
<a id="schematargetgroupweight"></a>
<a id="schema_TargetGroupWeight"></a>
<a id="tocStargetgroupweight"></a>
<a id="tocstargetgroupweight"></a>

```json
0
```

<h2 id="tocS_TargetHealthStateEnum">TargetHealthStateEnum</h2>
<!-- backwards compatibility -->
<a id="schematargethealthstateenum"></a>
<a id="schema_TargetHealthStateEnum"></a>
<a id="tocStargethealthstateenum"></a>
<a id="tocstargethealthstateenum"></a>

```json
"initial"
```

<h2 id="tocS_TargetHealthReasonEnum">TargetHealthReasonEnum</h2>
<!-- backwards compatibility -->
<a id="schematargethealthreasonenum"></a>
<a id="schema_TargetHealthReasonEnum"></a>
<a id="tocStargethealthreasonenum"></a>
<a id="tocstargethealthreasonenum"></a>

```json
"Elb.RegistrationInProgress"
```

<h2 id="tocS_TargetHealth">TargetHealth</h2>
<!-- backwards compatibility -->
<a id="schematargethealth"></a>
<a id="schema_TargetHealth"></a>
<a id="tocStargethealth"></a>
<a id="tocstargethealth"></a>

```json
{
  "State": {},
  "Reason": {},
  "Description": {}
}
```

Information about the current health of a target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|false|none|none|
|Reason|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_TargetHealthDescription">TargetHealthDescription</h2>
<!-- backwards compatibility -->
<a id="schematargethealthdescription"></a>
<a id="schema_TargetHealthDescription"></a>
<a id="tocStargethealthdescription"></a>
<a id="tocstargethealthdescription"></a>

```json
{
  "Target": {
    "Id": {},
    "Port": {},
    "AvailabilityZone": {}
  },
  "HealthCheckPort": {},
  "TargetHealth": {
    "State": {},
    "Reason": {},
    "Description": {}
  }
}
```

Information about the health of a target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Target|object|false|none|none|
|HealthCheckPort|object|false|none|none|
|TargetHealth|object|false|none|none|
