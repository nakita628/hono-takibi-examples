<h1 id="adobe-experience-manager-aem-api">Adobe Experience Manager (AEM) API v3.7.1-pre.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Swagger AEM is an OpenAPI specification for Adobe Experience Manager (AEM) API

Base URLs:

* <a href="https://api.apis.guru/">https://api.apis.guru/</a>

* <a href="http://adobe.local">http://adobe.local</a>

Email: <a href="mailto:opensource@shinesolutions.com">Shine Solutions</a> 
Web: <a href="http://shinesolutions.com">Shine Solutions</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="adobe-experience-manager-aem-api-cq">cq</h1>

## postCqActions

<a id="opIdpostCqActions"></a>

> Code samples

```bash
curl 'https://example.com/.cqactions.html?authorizableId=string&changelog=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /.cqactions.html`

<h3 id="postcqactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorizableId|query|string|true|none|
|changelog|query|string|true|none|

<h3 id="postcqactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## getLoginPage

<a id="opIdgetLoginPage"></a>

> Code samples

```bash
curl https://example.com/libs/granite/core/content/login.html
```

`GET /libs/granite/core/content/login.html`

<h3 id="getloginpage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="adobe-experience-manager-aem-api-sling">sling</h1>

## postConfigAdobeGraniteSamlAuthenticationHandler

<a id="opIdpostConfigAdobeGraniteSamlAuthenticationHandler"></a>

> Code samples

```bash
curl https://example.com/apps/system/config/com.adobe.granite.auth.saml.SamlAuthenticationHandler.config \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /apps/system/config/com.adobe.granite.auth.saml.SamlAuthenticationHandler.config`

<h3 id="postconfigadobegranitesamlauthenticationhandler-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyStorePassword|query|string|false|none|
|keyStorePassword@TypeHint|query|string|false|none|
|service.ranking|query|integer|false|none|
|service.ranking@TypeHint|query|string|false|none|
|idpHttpRedirect|query|boolean|false|none|
|idpHttpRedirect@TypeHint|query|string|false|none|
|createUser|query|boolean|false|none|
|createUser@TypeHint|query|string|false|none|
|defaultRedirectUrl|query|string|false|none|
|defaultRedirectUrl@TypeHint|query|string|false|none|
|userIDAttribute|query|string|false|none|
|userIDAttribute@TypeHint|query|string|false|none|
|defaultGroups|query|[string]|false|none|
|defaultGroups@TypeHint|query|string|false|none|
|idpCertAlias|query|string|false|none|
|idpCertAlias@TypeHint|query|string|false|none|
|addGroupMemberships|query|boolean|false|none|
|addGroupMemberships@TypeHint|query|string|false|none|
|path|query|[string]|false|none|
|path@TypeHint|query|string|false|none|
|synchronizeAttributes|query|[string]|false|none|
|synchronizeAttributes@TypeHint|query|string|false|none|
|clockTolerance|query|integer|false|none|
|clockTolerance@TypeHint|query|string|false|none|
|groupMembershipAttribute|query|string|false|none|
|groupMembershipAttribute@TypeHint|query|string|false|none|
|idpUrl|query|string|false|none|
|idpUrl@TypeHint|query|string|false|none|
|logoutUrl|query|string|false|none|
|logoutUrl@TypeHint|query|string|false|none|
|serviceProviderEntityId|query|string|false|none|
|serviceProviderEntityId@TypeHint|query|string|false|none|
|assertionConsumerServiceURL|query|string|false|none|
|assertionConsumerServiceURL@TypeHint|query|string|false|none|
|handleLogout|query|boolean|false|none|
|handleLogout@TypeHint|query|string|false|none|
|spPrivateKeyAlias|query|string|false|none|
|spPrivateKeyAlias@TypeHint|query|string|false|none|
|useEncryption|query|boolean|false|none|
|useEncryption@TypeHint|query|string|false|none|
|nameIdFormat|query|string|false|none|
|nameIdFormat@TypeHint|query|string|false|none|
|digestMethod|query|string|false|none|
|digestMethod@TypeHint|query|string|false|none|
|signatureMethod|query|string|false|none|
|signatureMethod@TypeHint|query|string|false|none|
|userIntermediatePath|query|string|false|none|
|userIntermediatePath@TypeHint|query|string|false|none|

<h3 id="postconfigadobegranitesamlauthenticationhandler-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postConfigApacheFelixJettyBasedHttpService

<a id="opIdpostConfigApacheFelixJettyBasedHttpService"></a>

> Code samples

```bash
curl https://example.com/apps/system/config/org.apache.felix.http \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /apps/system/config/org.apache.felix.http`

<h3 id="postconfigapachefelixjettybasedhttpservice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org.apache.felix.https.nio|query|boolean|false|none|
|org.apache.felix.https.nio@TypeHint|query|string|false|none|
|org.apache.felix.https.keystore|query|string|false|none|
|org.apache.felix.https.keystore@TypeHint|query|string|false|none|
|org.apache.felix.https.keystore.password|query|string|false|none|
|org.apache.felix.https.keystore.password@TypeHint|query|string|false|none|
|org.apache.felix.https.keystore.key|query|string|false|none|
|org.apache.felix.https.keystore.key@TypeHint|query|string|false|none|
|org.apache.felix.https.keystore.key.password|query|string|false|none|
|org.apache.felix.https.keystore.key.password@TypeHint|query|string|false|none|
|org.apache.felix.https.truststore|query|string|false|none|
|org.apache.felix.https.truststore@TypeHint|query|string|false|none|
|org.apache.felix.https.truststore.password|query|string|false|none|
|org.apache.felix.https.truststore.password@TypeHint|query|string|false|none|
|org.apache.felix.https.clientcertificate|query|string|false|none|
|org.apache.felix.https.clientcertificate@TypeHint|query|string|false|none|
|org.apache.felix.https.enable|query|boolean|false|none|
|org.apache.felix.https.enable@TypeHint|query|string|false|none|
|org.osgi.service.http.port.secure|query|string|false|none|
|org.osgi.service.http.port.secure@TypeHint|query|string|false|none|

<h3 id="postconfigapachefelixjettybasedhttpservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postConfigApacheHttpComponentsProxyConfiguration

<a id="opIdpostConfigApacheHttpComponentsProxyConfiguration"></a>

> Code samples

```bash
curl https://example.com/apps/system/config/org.apache.http.proxyconfigurator.config \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /apps/system/config/org.apache.http.proxyconfigurator.config`

<h3 id="postconfigapachehttpcomponentsproxyconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proxy.host|query|string|false|none|
|proxy.host@TypeHint|query|string|false|none|
|proxy.port|query|integer|false|none|
|proxy.port@TypeHint|query|string|false|none|
|proxy.exceptions|query|[string]|false|none|
|proxy.exceptions@TypeHint|query|string|false|none|
|proxy.enabled|query|boolean|false|none|
|proxy.enabled@TypeHint|query|string|false|none|
|proxy.user|query|string|false|none|
|proxy.user@TypeHint|query|string|false|none|
|proxy.password|query|string|false|none|
|proxy.password@TypeHint|query|string|false|none|

<h3 id="postconfigapachehttpcomponentsproxyconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postConfigApacheSlingDavExServlet

<a id="opIdpostConfigApacheSlingDavExServlet"></a>

> Code samples

```bash
curl https://example.com/apps/system/config/org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /apps/system/config/org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet`

<h3 id="postconfigapacheslingdavexservlet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alias|query|string|false|none|
|alias@TypeHint|query|string|false|none|
|dav.create-absolute-uri|query|boolean|false|none|
|dav.create-absolute-uri@TypeHint|query|string|false|none|

<h3 id="postconfigapacheslingdavexservlet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postConfigApacheSlingReferrerFilter

<a id="opIdpostConfigApacheSlingReferrerFilter"></a>

> Code samples

```bash
curl https://example.com/apps/system/config/org.apache.sling.security.impl.ReferrerFilter \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /apps/system/config/org.apache.sling.security.impl.ReferrerFilter`

<h3 id="postconfigapacheslingreferrerfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allow.empty|query|boolean|false|none|
|allow.empty@TypeHint|query|string|false|none|
|allow.hosts|query|string|false|none|
|allow.hosts@TypeHint|query|string|false|none|
|allow.hosts.regexp|query|string|false|none|
|allow.hosts.regexp@TypeHint|query|string|false|none|
|filter.methods|query|string|false|none|
|filter.methods@TypeHint|query|string|false|none|

<h3 id="postconfigapacheslingreferrerfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postConfigApacheSlingGetServlet

<a id="opIdpostConfigApacheSlingGetServlet"></a>

> Code samples

```bash
curl https://example.com/apps/system/config/org.apache.sling.servlets.get.DefaultGetServlet \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /apps/system/config/org.apache.sling.servlets.get.DefaultGetServlet`

<h3 id="postconfigapacheslinggetservlet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|json.maximumresults|query|string|false|none|
|json.maximumresults@TypeHint|query|string|false|none|
|enable.html|query|boolean|false|none|
|enable.html@TypeHint|query|string|false|none|
|enable.txt|query|boolean|false|none|
|enable.txt@TypeHint|query|string|false|none|
|enable.xml|query|boolean|false|none|
|enable.xml@TypeHint|query|string|false|none|

<h3 id="postconfigapacheslinggetservlet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postConfigProperty

<a id="opIdpostConfigProperty"></a>

> Code samples

```bash
curl https://example.com/apps/system/config/string \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /apps/system/config/{configNodeName}`

<h3 id="postconfigproperty-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configNodeName|path|string|true|none|

<h3 id="postconfigproperty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## getQuery

<a id="opIdgetQuery"></a>

> Code samples

```bash
curl 'https://example.com/bin/querybuilder.json?path=string&p.limit=0&1_property=string&1_property.value=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /bin/querybuilder.json`

<h3 id="getquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|query|string|true|none|
|p.limit|query|number|true|none|
|1_property|query|string|true|none|
|1_property.value|query|string|true|none|

> Example responses

> default Response

```json
"string"
```

<h3 id="getquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postQuery

<a id="opIdpostQuery"></a>

> Code samples

```bash
curl 'https://example.com/bin/querybuilder.json?path=string&p.limit=0&1_property=string&1_property.value=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /bin/querybuilder.json`

<h3 id="postquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|query|string|true|none|
|p.limit|query|number|true|none|
|1_property|query|string|true|none|
|1_property.value|query|string|true|none|

> Example responses

> default Response

```json
"string"
```

<h3 id="postquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## getPackage

<a id="opIdgetPackage"></a>

> Code samples

```bash
curl https://example.com/etc/packages/string/string-string.zip \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /etc/packages/{group}/{name}-{version}.zip`

<h3 id="getpackage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group|path|string|true|none|
|name|path|string|true|none|
|version|path|string|true|none|

<h3 id="getpackage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## getPackageFilter

<a id="opIdgetPackageFilter"></a>

> Code samples

```bash
curl https://example.com/etc/packages/string/string-string.zip/jcr:content/vlt:definition/filter.tidy.2.json \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /etc/packages/{group}/{name}-{version}.zip/jcr:content/vlt:definition/filter.tidy.2.json`

<h3 id="getpackagefilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group|path|string|true|none|
|name|path|string|true|none|
|version|path|string|true|none|

> Example responses

> default Response

```json
"string"
```

<h3 id="getpackagefilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## getAgents

<a id="opIdgetAgents"></a>

> Code samples

```bash
curl https://example.com/etc/replication/agents.string.-1.json \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /etc/replication/agents.{runmode}.-1.json`

<h3 id="getagents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|runmode|path|string|true|none|

> Example responses

> default Response

```json
"string"
```

<h3 id="getagents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## getAgent

<a id="opIdgetAgent"></a>

> Code samples

```bash
curl https://example.com/etc/replication/agents.string/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /etc/replication/agents.{runmode}/{name}`

<h3 id="getagent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|runmode|path|string|true|none|
|name|path|string|true|none|

<h3 id="getagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postAgent

<a id="opIdpostAgent"></a>

> Code samples

```bash
curl https://example.com/etc/replication/agents.string/string \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /etc/replication/agents.{runmode}/{name}`

<h3 id="postagent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|runmode|path|string|true|none|
|name|path|string|true|none|
|jcr:content/cq:distribute|query|boolean|false|none|
|jcr:content/cq:distribute@TypeHint|query|string|false|none|
|jcr:content/cq:name|query|string|false|none|
|jcr:content/cq:template|query|string|false|none|
|jcr:content/enabled|query|boolean|false|none|
|jcr:content/jcr:description|query|string|false|none|
|jcr:content/jcr:lastModified|query|string|false|none|
|jcr:content/jcr:lastModifiedBy|query|string|false|none|
|jcr:content/jcr:mixinTypes|query|string|false|none|
|jcr:content/jcr:title|query|string|false|none|
|jcr:content/logLevel|query|string|false|none|
|jcr:content/noStatusUpdate|query|boolean|false|none|
|jcr:content/noVersioning|query|boolean|false|none|
|jcr:content/protocolConnectTimeout|query|number|false|none|
|jcr:content/protocolHTTPConnectionClosed|query|boolean|false|none|
|jcr:content/protocolHTTPExpired|query|string|false|none|
|jcr:content/protocolHTTPHeaders|query|[string]|false|none|
|jcr:content/protocolHTTPHeaders@TypeHint|query|string|false|none|
|jcr:content/protocolHTTPMethod|query|string|false|none|
|jcr:content/protocolHTTPSRelaxed|query|boolean|false|none|
|jcr:content/protocolInterface|query|string|false|none|
|jcr:content/protocolSocketTimeout|query|number|false|none|
|jcr:content/protocolVersion|query|string|false|none|
|jcr:content/proxyNTLMDomain|query|string|false|none|
|jcr:content/proxyNTLMHost|query|string|false|none|
|jcr:content/proxyHost|query|string|false|none|
|jcr:content/proxyPassword|query|string|false|none|
|jcr:content/proxyPort|query|number|false|none|
|jcr:content/proxyUser|query|string|false|none|
|jcr:content/queueBatchMaxSize|query|number|false|none|
|jcr:content/queueBatchMode|query|string|false|none|
|jcr:content/queueBatchWaitTime|query|number|false|none|
|jcr:content/retryDelay|query|string|false|none|
|jcr:content/reverseReplication|query|boolean|false|none|
|jcr:content/serializationType|query|string|false|none|
|jcr:content/sling:resourceType|query|string|false|none|
|jcr:content/ssl|query|string|false|none|
|jcr:content/transportNTLMDomain|query|string|false|none|
|jcr:content/transportNTLMHost|query|string|false|none|
|jcr:content/transportPassword|query|string|false|none|
|jcr:content/transportUri|query|string|false|none|
|jcr:content/transportUser|query|string|false|none|
|jcr:content/triggerDistribute|query|boolean|false|none|
|jcr:content/triggerModified|query|boolean|false|none|
|jcr:content/triggerOnOffTime|query|boolean|false|none|
|jcr:content/triggerReceive|query|boolean|false|none|
|jcr:content/triggerSpecific|query|boolean|false|none|
|jcr:content/userId|query|string|false|none|
|jcr:primaryType|query|string|false|none|
|:operation|query|string|false|none|

<h3 id="postagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## deleteAgent

<a id="opIddeleteAgent"></a>

> Code samples

```bash
curl https://example.com/etc/replication/agents.string/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /etc/replication/agents.{runmode}/{name}`

<h3 id="deleteagent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|runmode|path|string|true|none|
|name|path|string|true|none|

<h3 id="deleteagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postTruststorePKCS12

<a id="opIdpostTruststorePKCS12"></a>

> Code samples

```bash
curl https://example.com/etc/truststore \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'truststore.p12=@/path/to/file'
```

`POST /etc/truststore`

> Body parameter

```yaml
truststore.p12: string
```

<h3 id="posttruststorepkcs12-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» truststore.p12|body|string(binary)|false|none|

<h3 id="posttruststorepkcs12-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## getTruststore

<a id="opIdgetTruststore"></a>

> Code samples

```bash
curl https://example.com/etc/truststore/truststore.p12 \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /etc/truststore/truststore.p12`

<h3 id="gettruststore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postAuthorizables

<a id="opIdpostAuthorizables"></a>

> Code samples

```bash
curl 'https://example.com/libs/granite/security/post/authorizables?authorizableId=string&intermediatePath=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /libs/granite/security/post/authorizables`

<h3 id="postauthorizables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorizableId|query|string|true|none|
|intermediatePath|query|string|true|none|
|createUser|query|string|false|none|
|createGroup|query|string|false|none|
|rep:password|query|string|false|none|
|profile/givenName|query|string|false|none|

<h3 id="postauthorizables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postTruststore

<a id="opIdpostTruststore"></a>

> Code samples

```bash
curl https://example.com/libs/granite/security/post/truststore \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'certificate=@/path/to/file'
```

`POST /libs/granite/security/post/truststore`

> Body parameter

```yaml
certificate: string
```

<h3 id="posttruststore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|:operation|query|string|false|none|
|newPassword|query|string|false|none|
|rePassword|query|string|false|none|
|keyStoreType|query|string|false|none|
|removeAlias|query|string|false|none|
|body|body|object|false|none|
|» certificate|body|string(binary)|false|none|

<h3 id="posttruststore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## getTruststoreInfo

<a id="opIdgetTruststoreInfo"></a>

> Code samples

```bash
curl https://example.com/libs/granite/security/truststore.json \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /libs/granite/security/truststore.json`

> Example responses

> 200 Response

```json
{
  "aliases": [
    {
      "alias": "string",
      "entryType": "string",
      "issuer": "string",
      "notAfter": "string",
      "notBefore": "string",
      "serialNumber": 0,
      "subject": "string"
    }
  ],
  "exists": true
}
```

> default Response

```json
"string"
```

<h3 id="gettruststoreinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieved AEM Truststore info|[TruststoreInfo](#schematruststoreinfo)|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postTreeActivation

<a id="opIdpostTreeActivation"></a>

> Code samples

```bash
curl 'https://example.com/libs/replication/treeactivation.html?ignoredeactivated=true&onlymodified=true&path=string&cmd=activate' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /libs/replication/treeactivation.html`

<h3 id="posttreeactivation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ignoredeactivated|query|boolean|true|none|
|onlymodified|query|boolean|true|none|
|path|query|string|true|none|
|cmd|query|string|true|none|

<h3 id="posttreeactivation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postAuthorizableKeystore

<a id="opIdpostAuthorizableKeystore"></a>

> Code samples

```bash
curl https://example.com/string/string.ks.html \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'cert-chain=@/path/to/file' \
  -F 'keyStore=@/path/to/file' \
  -F 'pk=@/path/to/file'
```

`POST /{intermediatePath}/{authorizableId}.ks.html`

> Body parameter

```yaml
cert-chain: string
keyStore: string
pk: string
```

<h3 id="postauthorizablekeystore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|intermediatePath|path|string|true|none|
|authorizableId|path|string|true|none|
|:operation|query|string|false|none|
|currentPassword|query|string|false|none|
|newPassword|query|string|false|none|
|rePassword|query|string|false|none|
|keyPassword|query|string|false|none|
|keyStorePass|query|string|false|none|
|alias|query|string|false|none|
|newAlias|query|string|false|none|
|removeAlias|query|string|false|none|
|body|body|object|false|none|
|» cert-chain|body|string(binary)|false|none|
|» keyStore|body|string(binary)|false|none|
|» pk|body|string(binary)|false|none|

<h3 id="postauthorizablekeystore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieved Authorizable Keystore info|[KeystoreInfo](#schemakeystoreinfo)|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## getAuthorizableKeystore

<a id="opIdgetAuthorizableKeystore"></a>

> Code samples

```bash
curl https://example.com/string/string.ks.json \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /{intermediatePath}/{authorizableId}.ks.json`

<h3 id="getauthorizablekeystore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|intermediatePath|path|string|true|none|
|authorizableId|path|string|true|none|

<h3 id="getauthorizablekeystore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieved Authorizable Keystore info|[KeystoreInfo](#schemakeystoreinfo)|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## getKeystore

<a id="opIdgetKeystore"></a>

> Code samples

```bash
curl https://example.com/string/string/keystore/store.p12 \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /{intermediatePath}/{authorizableId}/keystore/store.p12`

<h3 id="getkeystore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|intermediatePath|path|string|true|none|
|authorizableId|path|string|true|none|

<h3 id="getkeystore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postPath

<a id="opIdpostPath"></a>

> Code samples

```bash
curl 'https://example.com/string/?jcr%3AprimaryType=string&%3Aname=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /{path}/`

<h3 id="postpath-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|none|
|jcr:primaryType|query|string|true|none|
|:name|query|string|true|none|

<h3 id="postpath-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## getNode

<a id="opIdgetNode"></a>

> Code samples

```bash
curl https://example.com/string/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /{path}/{name}`

<h3 id="getnode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|none|
|name|path|string|true|none|

<h3 id="getnode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postNode

<a id="opIdpostNode"></a>

> Code samples

```bash
curl https://example.com/string/string \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'file=@/path/to/file'
```

`POST /{path}/{name}`

> Body parameter

```yaml
file: string
```

<h3 id="postnode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|none|
|name|path|string|true|none|
|:operation|query|string|false|none|
|deleteAuthorizable|query|string|false|none|
|body|body|object|false|none|
|» file|body|string(binary)|false|none|

<h3 id="postnode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## deleteNode

<a id="opIddeleteNode"></a>

> Code samples

```bash
curl https://example.com/string/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /{path}/{name}`

<h3 id="deletenode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|none|
|name|path|string|true|none|

<h3 id="deletenode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postNodeRw

<a id="opIdpostNodeRw"></a>

> Code samples

```bash
curl https://example.com/string/string.rw.html \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /{path}/{name}.rw.html`

<h3 id="postnoderw-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|none|
|name|path|string|true|none|
|addMembers|query|string|false|none|

<h3 id="postnoderw-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

<h1 id="adobe-experience-manager-aem-api-custom">custom</h1>

## postConfigAemPasswordReset

<a id="opIdpostConfigAemPasswordReset"></a>

> Code samples

```bash
curl https://example.com/apps/system/config/com.shinesolutions.aem.passwordreset.Activator \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /apps/system/config/com.shinesolutions.aem.passwordreset.Activator`

<h3 id="postconfigaempasswordreset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pwdreset.authorizables|query|[string]|false|none|
|pwdreset.authorizables@TypeHint|query|string|false|none|

<h3 id="postconfigaempasswordreset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postConfigAemHealthCheckServlet

<a id="opIdpostConfigAemHealthCheckServlet"></a>

> Code samples

```bash
curl https://example.com/apps/system/config/com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /apps/system/config/com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck`

<h3 id="postconfigaemhealthcheckservlet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bundles.ignored|query|[string]|false|none|
|bundles.ignored@TypeHint|query|string|false|none|

<h3 id="postconfigaemhealthcheckservlet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## getAemHealthCheck

<a id="opIdgetAemHealthCheck"></a>

> Code samples

```bash
curl https://example.com/system/health \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /system/health`

<h3 id="getaemhealthcheck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tags|query|string|false|none|
|combineTagsOr|query|boolean|false|none|

> Example responses

> default Response

```json
"string"
```

<h3 id="getaemhealthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

<h1 id="adobe-experience-manager-aem-api-crx">crx</h1>

## postSetPassword

<a id="opIdpostSetPassword"></a>

> Code samples

```bash
curl 'https://example.com/crx/explorer/ui/setpassword.jsp?old=string&plain=string&verify=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /crx/explorer/ui/setpassword.jsp`

<h3 id="postsetpassword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|old|query|string|true|none|
|plain|query|string|true|none|
|verify|query|string|true|none|

<h3 id="postsetpassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## getInstallStatus

<a id="opIdgetInstallStatus"></a>

> Code samples

```bash
curl https://example.com/crx/packmgr/installstatus.jsp \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /crx/packmgr/installstatus.jsp`

> Example responses

> 200 Response

```json
{
  "status": {
    "finished": true,
    "itemCount": 0
  }
}
```

> default Response

```json
"string"
```

<h3 id="getinstallstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieved CRX package manager install status|[InstallStatus](#schemainstallstatus)|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postPackageService

<a id="opIdpostPackageService"></a>

> Code samples

```bash
curl 'https://example.com/crx/packmgr/service.jsp?cmd=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /crx/packmgr/service.jsp`

<h3 id="postpackageservice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cmd|query|string|true|none|

<h3 id="postpackageservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postPackageServiceJson

<a id="opIdpostPackageServiceJson"></a>

> Code samples

```bash
curl 'https://example.com/crx/packmgr/service/.json/string?cmd=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'package=@/path/to/file'
```

`POST /crx/packmgr/service/.json/{path}`

> Body parameter

```yaml
package: string
```

<h3 id="postpackageservicejson-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|none|
|cmd|query|string|true|none|
|groupName|query|string|false|none|
|packageName|query|string|false|none|
|packageVersion|query|string|false|none|
|_charset_|query|string|false|none|
|force|query|boolean|false|none|
|recursive|query|boolean|false|none|
|body|body|object|false|none|
|» package|body|string(binary)|false|none|

> Example responses

> default Response

```json
"string"
```

<h3 id="postpackageservicejson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## getPackageManagerServlet

<a id="opIdgetPackageManagerServlet"></a>

> Code samples

```bash
curl https://example.com/crx/packmgr/service/script.html \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /crx/packmgr/service/script.html`

<h3 id="getpackagemanagerservlet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|404|Not Found|Package Manager Servlet is disabled|Inline|
|405|Method Not Allowed|Package Manager Servlet is active|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postPackageUpdate

<a id="opIdpostPackageUpdate"></a>

> Code samples

```bash
curl 'https://example.com/crx/packmgr/update.jsp?groupName=string&packageName=string&version=string&path=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /crx/packmgr/update.jsp`

<h3 id="postpackageupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupName|query|string|true|none|
|packageName|query|string|true|none|
|version|query|string|true|none|
|path|query|string|true|none|
|filter|query|string|false|none|
|_charset_|query|string|false|none|

> Example responses

> default Response

```json
"string"
```

<h3 id="postpackageupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## getCrxdeStatus

<a id="opIdgetCrxdeStatus"></a>

> Code samples

```bash
curl https://example.com/crx/server/crx.default/jcr:root/.1.json \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /crx/server/crx.default/jcr:root/.1.json`

<h3 id="getcrxdestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|CRXDE is enabled|Inline|
|404|Not Found|CRXDE is disabled|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

<h1 id="adobe-experience-manager-aem-api-granite">granite</h1>

## sslSetup

<a id="opIdsslSetup"></a>

> Code samples

```bash
curl 'https://example.com/libs/granite/security/post/sslSetup.html?keystorePassword=string&keystorePasswordConfirm=string&truststorePassword=string&truststorePasswordConfirm=string&httpsHostname=string&httpsPort=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'certificateFile=@/path/to/file' \
  -F 'privatekeyFile=@/path/to/file'
```

`POST /libs/granite/security/post/sslSetup.html`

> Body parameter

```yaml
certificateFile: string
privatekeyFile: string
```

<h3 id="sslsetup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keystorePassword|query|string|true|none|
|keystorePasswordConfirm|query|string|true|none|
|truststorePassword|query|string|true|none|
|truststorePasswordConfirm|query|string|true|none|
|httpsHostname|query|string|true|none|
|httpsPort|query|string|true|none|
|body|body|object|false|none|
|» certificateFile|body|string(binary)|false|none|
|» privatekeyFile|body|string(binary)|false|none|

<h3 id="sslsetup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

<h1 id="adobe-experience-manager-aem-api-console">console</h1>

## postBundle

<a id="opIdpostBundle"></a>

> Code samples

```bash
curl 'https://example.com/system/console/bundles/string?action=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /system/console/bundles/{name}`

<h3 id="postbundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|action|query|string|true|none|

<h3 id="postbundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## getBundleInfo

<a id="opIdgetBundleInfo"></a>

> Code samples

```bash
curl https://example.com/system/console/bundles/string.json \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /system/console/bundles/{name}.json`

<h3 id="getbundleinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "category": "string",
      "fragment": true,
      "id": 0,
      "name": "string",
      "props": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "state": "string",
      "stateRaw": 0,
      "symbolicName": "string",
      "version": "string"
    }
  ],
  "s": [
    0
  ],
  "status": "string"
}
```

> default Response

```json
"string"
```

<h3 id="getbundleinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieved bundle info|[BundleInfo](#schemabundleinfo)|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## getConfigMgr

<a id="opIdgetConfigMgr"></a>

> Code samples

```bash
curl https://example.com/system/console/configMgr \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /system/console/configMgr`

<h3 id="getconfigmgr-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|5XX|Server Error|Unexpected error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postSamlConfiguration

<a id="opIdpostSamlConfiguration"></a>

> Code samples

```bash
curl https://example.com/system/console/configMgr/com.adobe.granite.auth.saml.SamlAuthenticationHandler \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /system/console/configMgr/com.adobe.granite.auth.saml.SamlAuthenticationHandler`

<h3 id="postsamlconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|post|query|boolean|false|none|
|apply|query|boolean|false|none|
|delete|query|boolean|false|none|
|action|query|string|false|none|
|$location|query|string|false|none|
|path|query|[string]|false|none|
|service.ranking|query|integer|false|none|
|idpUrl|query|string|false|none|
|idpCertAlias|query|string|false|none|
|idpHttpRedirect|query|boolean|false|none|
|serviceProviderEntityId|query|string|false|none|
|assertionConsumerServiceURL|query|string|false|none|
|spPrivateKeyAlias|query|string|false|none|
|keyStorePassword|query|string|false|none|
|defaultRedirectUrl|query|string|false|none|
|userIDAttribute|query|string|false|none|
|useEncryption|query|boolean|false|none|
|createUser|query|boolean|false|none|
|addGroupMemberships|query|boolean|false|none|
|groupMembershipAttribute|query|string|false|none|
|defaultGroups|query|[string]|false|none|
|nameIdFormat|query|string|false|none|
|synchronizeAttributes|query|[string]|false|none|
|handleLogout|query|boolean|false|none|
|logoutUrl|query|string|false|none|
|clockTolerance|query|integer|false|none|
|digestMethod|query|string|false|none|
|signatureMethod|query|string|false|none|
|userIntermediatePath|query|string|false|none|
|propertylist|query|[string]|false|none|

<h3 id="postsamlconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieved AEM SAML Configuration|[SamlConfigurationInfo](#schemasamlconfigurationinfo)|
|302|Found|Default response|Inline|
|default|Default|Default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## postJmxRepository

<a id="opIdpostJmxRepository"></a>

> Code samples

```bash
curl https://example.com/system/console/jmx/com.adobe.granite:type=Repository/op/string \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /system/console/jmx/com.adobe.granite:type=Repository/op/{action}`

<h3 id="postjmxrepository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|path|string|true|none|

<h3 id="postjmxrepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

## getAemProductInfo

<a id="opIdgetAemProductInfo"></a>

> Code samples

```bash
curl https://example.com/system/console/status-productinfo.json \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /system/console/status-productinfo.json`

> Example responses

> default Response

```json
[
  "string"
]
```

<h3 id="getaemproductinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|Inline|

<h3 id="getaemproductinfo-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aemAuth
</aside>

# Schemas

<h2 id="tocS_BundleData">BundleData</h2>
<!-- backwards compatibility -->
<a id="schemabundledata"></a>
<a id="schema_BundleData"></a>
<a id="tocSbundledata"></a>
<a id="tocsbundledata"></a>

```json
{
  "category": "string",
  "fragment": true,
  "id": 0,
  "name": "string",
  "props": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "state": "string",
  "stateRaw": 0,
  "symbolicName": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|Bundle category|
|fragment|boolean|false|none|Is bundle a fragment|
|id|integer|false|none|Bundle ID|
|name|string|false|none|Bundle name|
|props|[[BundleDataProp](#schemabundledataprop)]|false|none|none|
|state|string|false|none|Bundle state value|
|stateRaw|integer|false|none|Numeric raw bundle state value|
|symbolicName|string|false|none|Bundle symbolic name|
|version|string|false|none|Bundle version|

<h2 id="tocS_BundleDataProp">BundleDataProp</h2>
<!-- backwards compatibility -->
<a id="schemabundledataprop"></a>
<a id="schema_BundleDataProp"></a>
<a id="tocSbundledataprop"></a>
<a id="tocsbundledataprop"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Bundle data key|
|value|string|false|none|Bundle data value|

<h2 id="tocS_BundleInfo">BundleInfo</h2>
<!-- backwards compatibility -->
<a id="schemabundleinfo"></a>
<a id="schema_BundleInfo"></a>
<a id="tocSbundleinfo"></a>
<a id="tocsbundleinfo"></a>

```json
{
  "data": [
    {
      "category": "string",
      "fragment": true,
      "id": 0,
      "name": "string",
      "props": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "state": "string",
      "stateRaw": 0,
      "symbolicName": "string",
      "version": "string"
    }
  ],
  "s": [
    0
  ],
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[BundleData](#schemabundledata)]|false|none|none|
|s|[integer]|false|none|none|
|status|string|false|none|Status description of all bundles|

<h2 id="tocS_InstallStatus">InstallStatus</h2>
<!-- backwards compatibility -->
<a id="schemainstallstatus"></a>
<a id="schema_InstallStatus"></a>
<a id="tocSinstallstatus"></a>
<a id="tocsinstallstatus"></a>

```json
{
  "status": {
    "finished": true,
    "itemCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|

<h2 id="tocS_KeystoreChainItems">KeystoreChainItems</h2>
<!-- backwards compatibility -->
<a id="schemakeystorechainitems"></a>
<a id="schema_KeystoreChainItems"></a>
<a id="tocSkeystorechainitems"></a>
<a id="tocskeystorechainitems"></a>

```json
{
  "issuer": "string",
  "notAfter": "string",
  "notBefore": "string",
  "serialNumber": 0,
  "subject": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuer|string|false|none|e.g. "CN=Admin"|
|notAfter|string|false|none|e.g. "Sun Jun 30 23:59:50 AEST 2019"|
|notBefore|string|false|none|e.g. "Sun Jul 01 12:00:00 AEST 2018"|
|serialNumber|integer|false|none|18165099476682912368|
|subject|string|false|none|e.g. "CN=localhost"|

<h2 id="tocS_KeystoreInfo">KeystoreInfo</h2>
<!-- backwards compatibility -->
<a id="schemakeystoreinfo"></a>
<a id="schema_KeystoreInfo"></a>
<a id="tocSkeystoreinfo"></a>
<a id="tocskeystoreinfo"></a>

```json
{
  "aliases": [
    {
      "algorithm": "string",
      "alias": "string",
      "chain": [
        {
          "issuer": "string",
          "notAfter": "string",
          "notBefore": "string",
          "serialNumber": 0,
          "subject": "string"
        }
      ],
      "entryType": "string",
      "format": "string"
    }
  ],
  "exists": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliases|[[KeystoreItems](#schemakeystoreitems)]|false|none|none|
|exists|boolean|false|none|False if truststore don't exist|

<h2 id="tocS_KeystoreItems">KeystoreItems</h2>
<!-- backwards compatibility -->
<a id="schemakeystoreitems"></a>
<a id="schema_KeystoreItems"></a>
<a id="tocSkeystoreitems"></a>
<a id="tocskeystoreitems"></a>

```json
{
  "algorithm": "string",
  "alias": "string",
  "chain": [
    {
      "issuer": "string",
      "notAfter": "string",
      "notBefore": "string",
      "serialNumber": 0,
      "subject": "string"
    }
  ],
  "entryType": "string",
  "format": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|e.g. "RSA"|
|alias|string|false|none|Keystore alias name|
|chain|[[KeystoreChainItems](#schemakeystorechainitems)]|false|none|none|
|entryType|string|false|none|e.g. "privateKey"|
|format|string|false|none|e.g. "PKCS#8"|

<h2 id="tocS_SamlConfigurationInfo">SamlConfigurationInfo</h2>
<!-- backwards compatibility -->
<a id="schemasamlconfigurationinfo"></a>
<a id="schema_SamlConfigurationInfo"></a>
<a id="tocSsamlconfigurationinfo"></a>
<a id="tocssamlconfigurationinfo"></a>

```json
{
  "bundle_location": "string",
  "description": "string",
  "pid": "string",
  "properties": {
    "addGroupMemberships": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": true
    },
    "assertionConsumerServiceURL": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": "string"
    },
    "clockTolerance": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": 0
    },
    "createUser": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": true
    },
    "defaultGroups": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "values": [
        "string"
      ]
    },
    "defaultRedirectUrl": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": "string"
    },
    "digestMethod": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": "string"
    },
    "groupMembershipAttribute": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": "string"
    },
    "handleLogout": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": true
    },
    "idpCertAlias": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": "string"
    },
    "idpHttpRedirect": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": true
    },
    "idpUrl": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": "string"
    },
    "keyStorePassword": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": "string"
    },
    "logoutUrl": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": "string"
    },
    "nameIdFormat": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": "string"
    },
    "path": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "values": [
        "string"
      ]
    },
    "service.ranking": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": 0
    },
    "serviceProviderEntityId": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": "string"
    },
    "signatureMethod": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": "string"
    },
    "spPrivateKeyAlias": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": "string"
    },
    "synchronizeAttributes": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "values": [
        "string"
      ]
    },
    "useEncryption": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": true
    },
    "userIDAttribute": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": "string"
    },
    "userIntermediatePath": {
      "description": "string",
      "is_set": true,
      "name": "string",
      "optional": true,
      "type": 0,
      "value": "string"
    }
  },
  "service_location": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundle_location|string|false|none|needed for configuration binding|
|description|string|false|none|Title|
|pid|string|false|none|Persistent Identity (PID)|
|properties|[SamlConfigurationProperties](#schemasamlconfigurationproperties)|false|none|none|
|service_location|string|false|none|needed for configuraiton binding|
|title|string|false|none|Title|

<h2 id="tocS_SamlConfigurationProperties">SamlConfigurationProperties</h2>
<!-- backwards compatibility -->
<a id="schemasamlconfigurationproperties"></a>
<a id="schema_SamlConfigurationProperties"></a>
<a id="tocSsamlconfigurationproperties"></a>
<a id="tocssamlconfigurationproperties"></a>

```json
{
  "addGroupMemberships": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": true
  },
  "assertionConsumerServiceURL": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": "string"
  },
  "clockTolerance": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": 0
  },
  "createUser": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": true
  },
  "defaultGroups": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "values": [
      "string"
    ]
  },
  "defaultRedirectUrl": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": "string"
  },
  "digestMethod": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": "string"
  },
  "groupMembershipAttribute": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": "string"
  },
  "handleLogout": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": true
  },
  "idpCertAlias": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": "string"
  },
  "idpHttpRedirect": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": true
  },
  "idpUrl": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": "string"
  },
  "keyStorePassword": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": "string"
  },
  "logoutUrl": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": "string"
  },
  "nameIdFormat": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": "string"
  },
  "path": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "values": [
      "string"
    ]
  },
  "service.ranking": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": 0
  },
  "serviceProviderEntityId": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": "string"
  },
  "signatureMethod": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": "string"
  },
  "spPrivateKeyAlias": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": "string"
  },
  "synchronizeAttributes": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "values": [
      "string"
    ]
  },
  "useEncryption": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": true
  },
  "userIDAttribute": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": "string"
  },
  "userIntermediatePath": {
    "description": "string",
    "is_set": true,
    "name": "string",
    "optional": true,
    "type": 0,
    "value": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addGroupMemberships|[SamlConfigurationPropertyItemsBoolean](#schemasamlconfigurationpropertyitemsboolean)|false|none|Whether or not a user should be automatically added to CRX groups after successful authentication.|
|assertionConsumerServiceURL|[SamlConfigurationPropertyItemsString](#schemasamlconfigurationpropertyitemsstring)|false|none|The (optional) AssertionConsumerServiceURL attribute of an Authn request specifies the location to which a  message MUST be sent to the requester.|
|clockTolerance|[SamlConfigurationPropertyItemsLong](#schemasamlconfigurationpropertyitemslong)|false|none|Time tolerance in seconds to compensate clock skew between IDP and SP when validating Assertions.|
|createUser|[SamlConfigurationPropertyItemsBoolean](#schemasamlconfigurationpropertyitemsboolean)|false|none|Whether or not to autocreate nonexisting users in the repository.|
|defaultGroups|[SamlConfigurationPropertyItemsArray](#schemasamlconfigurationpropertyitemsarray)|false|none|A list of default CRX groups users are added to after successful authentication.|
|defaultRedirectUrl|[SamlConfigurationPropertyItemsString](#schemasamlconfigurationpropertyitemsstring)|false|none|The default location to redirect to after successful authentication.|
|digestMethod|[SamlConfigurationPropertyItemsString](#schemasamlconfigurationpropertyitemsstring)|false|none|The digest algorithm to use when signing a SAML message.|
|groupMembershipAttribute|[SamlConfigurationPropertyItemsString](#schemasamlconfigurationpropertyitemsstring)|false|none|The name of the attribute containing a list of CRX groups this user should be added to.|
|handleLogout|[SamlConfigurationPropertyItemsBoolean](#schemasamlconfigurationpropertyitemsboolean)|false|none|Whether or not logout (dropCredentials) requests will be processed by this handler.|
|idpCertAlias|[SamlConfigurationPropertyItemsString](#schemasamlconfigurationpropertyitemsstring)|false|none|The alias of the IdP's certificate in the global truststore. If this property is empty the authentication handler is disabled.|
|idpHttpRedirect|[SamlConfigurationPropertyItemsBoolean](#schemasamlconfigurationpropertyitemsboolean)|false|none|Use an HTTP Redirect to the IDP URL instead of sending an AuthnRequest-message to request credentials. Use this for IDP initiated authentication.|
|idpUrl|[SamlConfigurationPropertyItemsString](#schemasamlconfigurationpropertyitemsstring)|false|none|URL of the IDP where the SAML Authentication Request should be sent to. If this property is empty the authentication handler is disabled. (idpUrl)|
|keyStorePassword|[SamlConfigurationPropertyItemsString](#schemasamlconfigurationpropertyitemsstring)|false|none|The password of the key-store of the 'authentication-service' system user.|
|logoutUrl|[SamlConfigurationPropertyItemsString](#schemasamlconfigurationpropertyitemsstring)|false|none|URL of the IDP where the SAML Logout Request should be sent to. If this property is empty the authentication handler won't handle logouts.|
|nameIdFormat|[SamlConfigurationPropertyItemsString](#schemasamlconfigurationpropertyitemsstring)|false|none|The value of the NameIDPolicy format parameter to send in the AuthnRequest message.|
|path|[SamlConfigurationPropertyItemsArray](#schemasamlconfigurationpropertyitemsarray)|false|none|Repository path for which this authentication handler should be used by Sling. If this is empty, the authentication handler will be disabled.|
|service.ranking|[SamlConfigurationPropertyItemsLong](#schemasamlconfigurationpropertyitemslong)|false|none|OSGi Framework Service Ranking value to indicate the order in which to call this service. This is an int value where higher values designate higher precedence. Default value is 0.|
|serviceProviderEntityId|[SamlConfigurationPropertyItemsString](#schemasamlconfigurationpropertyitemsstring)|false|none|ID which uniquely identifies this service provider with the identity provider. If this property is empty the authentication handler is disabled.|
|signatureMethod|[SamlConfigurationPropertyItemsString](#schemasamlconfigurationpropertyitemsstring)|false|none|The signature algorithm to use when signing a SAML message.|
|spPrivateKeyAlias|[SamlConfigurationPropertyItemsString](#schemasamlconfigurationpropertyitemsstring)|false|none|The alias of the SP's private key in the key-store of the 'authentication-service' system user. If this property is empty the handler will not be able to sign or decrypt messages.|
|synchronizeAttributes|[SamlConfigurationPropertyItemsArray](#schemasamlconfigurationpropertyitemsarray)|false|none|A list of attribute mappings (in the format \attributename=path/relative/to/user/node\) which should be stored in the repository on user-synchronization.|
|useEncryption|[SamlConfigurationPropertyItemsBoolean](#schemasamlconfigurationpropertyitemsboolean)|false|none|Whether or not this authentication handler expects encrypted SAML assertions. If this is enabled the SP's private key must be provided in the key-store of the 'authentication-service' system user (see SP Private Key Alias above).|
|userIDAttribute|[SamlConfigurationPropertyItemsString](#schemasamlconfigurationpropertyitemsstring)|false|none|The name of the attribute containing the user ID used to authenticate and create the user in the CRX repository. Leave empty to use the Subject:NameId.|
|userIntermediatePath|[SamlConfigurationPropertyItemsString](#schemasamlconfigurationpropertyitemsstring)|false|none|User intermediate path to store created users.|

<h2 id="tocS_SamlConfigurationPropertyItemsArray">SamlConfigurationPropertyItemsArray</h2>
<!-- backwards compatibility -->
<a id="schemasamlconfigurationpropertyitemsarray"></a>
<a id="schema_SamlConfigurationPropertyItemsArray"></a>
<a id="tocSsamlconfigurationpropertyitemsarray"></a>
<a id="tocssamlconfigurationpropertyitemsarray"></a>

```json
{
  "description": "string",
  "is_set": true,
  "name": "string",
  "optional": true,
  "type": 0,
  "values": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Property description|
|is_set|boolean|false|none|True if property is set|
|name|string|false|none|property name|
|optional|boolean|false|none|True if optional|
|type|integer|false|none|Property type, 1=String, 3=long, 11=boolean, 12=Password|
|values|[string]|false|none|Property value|

<h2 id="tocS_SamlConfigurationPropertyItemsBoolean">SamlConfigurationPropertyItemsBoolean</h2>
<!-- backwards compatibility -->
<a id="schemasamlconfigurationpropertyitemsboolean"></a>
<a id="schema_SamlConfigurationPropertyItemsBoolean"></a>
<a id="tocSsamlconfigurationpropertyitemsboolean"></a>
<a id="tocssamlconfigurationpropertyitemsboolean"></a>

```json
{
  "description": "string",
  "is_set": true,
  "name": "string",
  "optional": true,
  "type": 0,
  "value": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Property description|
|is_set|boolean|false|none|True if property is set|
|name|string|false|none|property name|
|optional|boolean|false|none|True if optional|
|type|integer|false|none|Property type, 1=String, 3=long, 11=boolean, 12=Password|
|value|boolean|false|none|Property value|

<h2 id="tocS_SamlConfigurationPropertyItemsLong">SamlConfigurationPropertyItemsLong</h2>
<!-- backwards compatibility -->
<a id="schemasamlconfigurationpropertyitemslong"></a>
<a id="schema_SamlConfigurationPropertyItemsLong"></a>
<a id="tocSsamlconfigurationpropertyitemslong"></a>
<a id="tocssamlconfigurationpropertyitemslong"></a>

```json
{
  "description": "string",
  "is_set": true,
  "name": "string",
  "optional": true,
  "type": 0,
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Property description|
|is_set|boolean|false|none|True if property is set|
|name|string|false|none|property name|
|optional|boolean|false|none|True if optional|
|type|integer|false|none|Property type, 1=String, 3=long, 11=boolean, 12=Password|
|value|integer|false|none|Property value|

<h2 id="tocS_SamlConfigurationPropertyItemsString">SamlConfigurationPropertyItemsString</h2>
<!-- backwards compatibility -->
<a id="schemasamlconfigurationpropertyitemsstring"></a>
<a id="schema_SamlConfigurationPropertyItemsString"></a>
<a id="tocSsamlconfigurationpropertyitemsstring"></a>
<a id="tocssamlconfigurationpropertyitemsstring"></a>

```json
{
  "description": "string",
  "is_set": true,
  "name": "string",
  "optional": true,
  "type": 0,
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Property description|
|is_set|boolean|false|none|True if property is set|
|name|string|false|none|property name|
|optional|boolean|false|none|True if optional|
|type|integer|false|none|Property type, 1=String, 3=long, 11=boolean, 12=Password|
|value|string|false|none|Property value|

<h2 id="tocS_TruststoreInfo">TruststoreInfo</h2>
<!-- backwards compatibility -->
<a id="schematruststoreinfo"></a>
<a id="schema_TruststoreInfo"></a>
<a id="tocStruststoreinfo"></a>
<a id="tocstruststoreinfo"></a>

```json
{
  "aliases": [
    {
      "alias": "string",
      "entryType": "string",
      "issuer": "string",
      "notAfter": "string",
      "notBefore": "string",
      "serialNumber": 0,
      "subject": "string"
    }
  ],
  "exists": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliases|[[TruststoreItems](#schematruststoreitems)]|false|none|none|
|exists|boolean|false|none|False if truststore don't exist|

<h2 id="tocS_TruststoreItems">TruststoreItems</h2>
<!-- backwards compatibility -->
<a id="schematruststoreitems"></a>
<a id="schema_TruststoreItems"></a>
<a id="tocStruststoreitems"></a>
<a id="tocstruststoreitems"></a>

```json
{
  "alias": "string",
  "entryType": "string",
  "issuer": "string",
  "notAfter": "string",
  "notBefore": "string",
  "serialNumber": 0,
  "subject": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|Truststore alias name|
|entryType|string|false|none|none|
|issuer|string|false|none|e.g. "CN=Admin"|
|notAfter|string|false|none|e.g. "Sun Jun 30 23:59:50 AEST 2019"|
|notBefore|string|false|none|e.g. "Sun Jul 01 12:00:00 AEST 2018"|
|serialNumber|integer|false|none|18165099476682912368|
|subject|string|false|none|e.g. "CN=localhost"|
