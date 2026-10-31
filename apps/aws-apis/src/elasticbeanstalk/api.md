<h1 id="aws-elastic-beanstalk">AWS Elastic Beanstalk v2010-12-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>AWS Elastic Beanstalk</fullname> <p>AWS Elastic Beanstalk makes it easy for you to create, deploy, and manage scalable, fault-tolerant applications running on the Amazon Web Services cloud.</p> <p>For more information about this product, go to the <a href="http://aws.amazon.com/elasticbeanstalk/">AWS Elastic Beanstalk</a> details page. The location of the latest AWS Elastic Beanstalk WSDL is <a href="https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl">https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl</a>. To install the Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools that enable you to access the API, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> <p> <b>Endpoints</b> </p> <p>For a list of region-specific endpoints that AWS Elastic Beanstalk supports, go to <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#elasticbeanstalk_region">Regions and Endpoints</a> in the <i>Amazon Web Services Glossary</i>.</p>

Base URLs:

* <a href="http://elasticbeanstalk.us-east-1.amazonaws.com">http://elasticbeanstalk.us-east-1.amazonaws.com</a> - The Elastic Beanstalk multi-region endpoint

* <a href="https://elasticbeanstalk.us-east-1.amazonaws.com">https://elasticbeanstalk.us-east-1.amazonaws.com</a> - The Elastic Beanstalk multi-region endpoint

* <a href="http://elasticbeanstalk.cn-north-1.amazonaws.com.cn">http://elasticbeanstalk.cn-north-1.amazonaws.com.cn</a> - The Elastic Beanstalk endpoint for China (Beijing) and China (Ningxia)

* <a href="https://elasticbeanstalk.cn-north-1.amazonaws.com.cn">https://elasticbeanstalk.cn-north-1.amazonaws.com.cn</a> - The Elastic Beanstalk endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/elasticbeanstalk/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-elastic-beanstalk-default">Default</h1>

## GET_AbortEnvironmentUpdate

<a id="opIdGET_AbortEnvironmentUpdate"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=AbortEnvironmentUpdate?Action=AbortEnvironmentUpdate&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AbortEnvironmentUpdate`

Cancels in-progress environment configuration update or application version deployment.

<h3 id="getabortenvironmentupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EnvironmentId|query|string|false|This specifies the ID of the environment with the in-progress update that you want to cancel.|
|EnvironmentName|query|string|false|This specifies the name of the environment with the in-progress update that you want to cancel.|
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
|Action|AbortEnvironmentUpdate|
|Version|2010-12-01|

<h3 id="getabortenvironmentupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AbortEnvironmentUpdate

<a id="opIdPOST_AbortEnvironmentUpdate"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=AbortEnvironmentUpdate?Action=AbortEnvironmentUpdate&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EnvironmentId":{},"EnvironmentName":{}}'
```

`POST /#Action=AbortEnvironmentUpdate`

Cancels in-progress environment configuration update or application version deployment.

> Body parameter

```json
{
  "EnvironmentId": {},
  "EnvironmentName": {}
}
```

<h3 id="postabortenvironmentupdate-parameters">Parameters</h3>

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
|body|body|[AbortEnvironmentUpdateMessage](#schemaabortenvironmentupdatemessage)|false|none|
|» EnvironmentId|body|object|false|none|
|» EnvironmentName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AbortEnvironmentUpdate|
|Version|2010-12-01|

<h3 id="postabortenvironmentupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ApplyEnvironmentManagedAction

<a id="opIdGET_ApplyEnvironmentManagedAction"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=ApplyEnvironmentManagedAction?ActionId=string&Action=ApplyEnvironmentManagedAction&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ApplyEnvironmentManagedAction`

Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.

<h3 id="getapplyenvironmentmanagedaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EnvironmentName|query|string|false|The name of the target environment.|
|EnvironmentId|query|string|false|The environment ID of the target environment.|
|ActionId|query|string|true|The action ID of the scheduled managed action to execute.|
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
|Action|ApplyEnvironmentManagedAction|
|Version|2010-12-01|

<h3 id="getapplyenvironmentmanagedaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplyEnvironmentManagedActionResult](#schemaapplyenvironmentmanagedactionresult)|
|480|480|ElasticBeanstalkServiceException|[ElasticBeanstalkServiceException](#schemaelasticbeanstalkserviceexception)|
|481|481|ManagedActionInvalidStateException|[ManagedActionInvalidStateException](#schemamanagedactioninvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ApplyEnvironmentManagedAction

<a id="opIdPOST_ApplyEnvironmentManagedAction"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=ApplyEnvironmentManagedAction?Action=ApplyEnvironmentManagedAction&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EnvironmentName":{},"EnvironmentId":{},"ActionId":{}}'
```

`POST /#Action=ApplyEnvironmentManagedAction`

Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.

> Body parameter

```json
{
  "EnvironmentName": {},
  "EnvironmentId": {},
  "ActionId": {}
}
```

<h3 id="postapplyenvironmentmanagedaction-parameters">Parameters</h3>

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
|body|body|[ApplyEnvironmentManagedActionRequest](#schemaapplyenvironmentmanagedactionrequest)|false|none|
|» EnvironmentName|body|object|false|none|
|» EnvironmentId|body|object|false|none|
|» ActionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ApplyEnvironmentManagedAction|
|Version|2010-12-01|

<h3 id="postapplyenvironmentmanagedaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplyEnvironmentManagedActionResult](#schemaapplyenvironmentmanagedactionresult)|
|480|480|ElasticBeanstalkServiceException|[ElasticBeanstalkServiceException](#schemaelasticbeanstalkserviceexception)|
|481|481|ManagedActionInvalidStateException|[ManagedActionInvalidStateException](#schemamanagedactioninvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_AssociateEnvironmentOperationsRole

<a id="opIdGET_AssociateEnvironmentOperationsRole"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=AssociateEnvironmentOperationsRole?EnvironmentName=string&OperationsRole=string&Action=AssociateEnvironmentOperationsRole&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AssociateEnvironmentOperationsRole`

Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.

<h3 id="getassociateenvironmentoperationsrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EnvironmentName|query|string|true|The name of the environment to which to set the operations role.|
|OperationsRole|query|string|true|The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role.|
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
|Action|AssociateEnvironmentOperationsRole|
|Version|2010-12-01|

<h3 id="getassociateenvironmentoperationsrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AssociateEnvironmentOperationsRole

<a id="opIdPOST_AssociateEnvironmentOperationsRole"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=AssociateEnvironmentOperationsRole?Action=AssociateEnvironmentOperationsRole&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EnvironmentName":{},"OperationsRole":{}}'
```

`POST /#Action=AssociateEnvironmentOperationsRole`

Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.

> Body parameter

```json
{
  "EnvironmentName": {},
  "OperationsRole": {}
}
```

<h3 id="postassociateenvironmentoperationsrole-parameters">Parameters</h3>

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
|body|body|[AssociateEnvironmentOperationsRoleMessage](#schemaassociateenvironmentoperationsrolemessage)|false|none|
|» EnvironmentName|body|object|true|none|
|» OperationsRole|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AssociateEnvironmentOperationsRole|
|Version|2010-12-01|

<h3 id="postassociateenvironmentoperationsrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CheckDNSAvailability

<a id="opIdGET_CheckDNSAvailability"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=CheckDNSAvailability?CNAMEPrefix=string&Action=CheckDNSAvailability&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CheckDNSAvailability`

Checks if the specified CNAME is available.

<h3 id="getcheckdnsavailability-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CNAMEPrefix|query|string|true|The prefix used when this CNAME is reserved.|
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
|Action|CheckDNSAvailability|
|Version|2010-12-01|

<h3 id="getcheckdnsavailability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CheckDNSAvailabilityResultMessage](#schemacheckdnsavailabilityresultmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CheckDNSAvailability

<a id="opIdPOST_CheckDNSAvailability"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=CheckDNSAvailability?Action=CheckDNSAvailability&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CNAMEPrefix":{}}'
```

`POST /#Action=CheckDNSAvailability`

Checks if the specified CNAME is available.

> Body parameter

```json
{
  "CNAMEPrefix": {}
}
```

<h3 id="postcheckdnsavailability-parameters">Parameters</h3>

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
|body|body|[CheckDNSAvailabilityMessage](#schemacheckdnsavailabilitymessage)|false|none|
|» CNAMEPrefix|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CheckDNSAvailability|
|Version|2010-12-01|

<h3 id="postcheckdnsavailability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CheckDNSAvailabilityResultMessage](#schemacheckdnsavailabilityresultmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ComposeEnvironments

<a id="opIdGET_ComposeEnvironments"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=ComposeEnvironments?Action=ComposeEnvironments&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ComposeEnvironments`

Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.

<h3 id="getcomposeenvironments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|false|The name of the application to which the specified source bundles belong.|
|GroupName|query|string|false|The name of the group to which the target environments belong. Specify a group name only if the environment name defined in each target environment's manifest ends with a + (plus) character. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.|
|VersionLabels|query|[[VersionLabel](#schemaversionlabel)]|false|A list of version labels, specifying one or more application source bundles that belong to the target application. Each source bundle must include an environment manifest that specifies the name of the environment and the name of the solution stack to use, and optionally can specify environment links to create.|
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
|Action|ComposeEnvironments|
|Version|2010-12-01|

<h3 id="getcomposeenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnvironmentDescriptionsMessage](#schemaenvironmentdescriptionsmessage)|
|480|480|TooManyEnvironmentsException|[TooManyEnvironmentsException](#schematoomanyenvironmentsexception)|
|481|481|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ComposeEnvironments

<a id="opIdPOST_ComposeEnvironments"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=ComposeEnvironments?Action=ComposeEnvironments&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"GroupName":{},"VersionLabels":{}}'
```

`POST /#Action=ComposeEnvironments`

Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.

> Body parameter

```json
{
  "ApplicationName": {},
  "GroupName": {},
  "VersionLabels": {}
}
```

<h3 id="postcomposeenvironments-parameters">Parameters</h3>

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
|body|body|[ComposeEnvironmentsMessage](#schemacomposeenvironmentsmessage)|false|none|
|» ApplicationName|body|object|false|none|
|» GroupName|body|object|false|none|
|» VersionLabels|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ComposeEnvironments|
|Version|2010-12-01|

<h3 id="postcomposeenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnvironmentDescriptionsMessage](#schemaenvironmentdescriptionsmessage)|
|480|480|TooManyEnvironmentsException|[TooManyEnvironmentsException](#schematoomanyenvironmentsexception)|
|481|481|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateApplication

<a id="opIdGET_CreateApplication"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=CreateApplication?ApplicationName=string&Action=CreateApplication&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateApplication`

Creates an application that has one configuration template named <code>default</code> and no application versions.

<h3 id="getcreateapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|true|The name of the application. Must be unique within your account.|
|Description|query|string|false|Your description of the application.|
|ResourceLifecycleConfig|query|object|false|Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.|
|Tags|query|[[Tag](#schematag)]|false|<p>Specifies the tags applied to the application.</p> <p>Elastic Beanstalk applies these tags only to the application. Environments that you create in the application don't inherit the tags.</p>|
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
|Action|CreateApplication|
|Version|2010-12-01|

<h3 id="getcreateapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplicationDescriptionMessage](#schemaapplicationdescriptionmessage)|
|480|480|TooManyApplicationsException|[TooManyApplicationsException](#schematoomanyapplicationsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateApplication

<a id="opIdPOST_CreateApplication"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=CreateApplication?Action=CreateApplication&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"Description":{},"ResourceLifecycleConfig":{"ServiceRole":{},"VersionLifecycleConfig":{"MaxCountRule":{"Enabled":{},"MaxCount":{},"DeleteSourceFromS3":{}},"MaxAgeRule":{"Enabled":{},"MaxAgeInDays":{},"DeleteSourceFromS3":{}}}},"Tags":{}}'
```

`POST /#Action=CreateApplication`

Creates an application that has one configuration template named <code>default</code> and no application versions.

> Body parameter

```json
{
  "ApplicationName": {},
  "Description": {},
  "ResourceLifecycleConfig": {
    "ServiceRole": {},
    "VersionLifecycleConfig": {
      "MaxCountRule": {
        "Enabled": {},
        "MaxCount": {},
        "DeleteSourceFromS3": {}
      },
      "MaxAgeRule": {
        "Enabled": {},
        "MaxAgeInDays": {},
        "DeleteSourceFromS3": {}
      }
    }
  },
  "Tags": {}
}
```

<h3 id="postcreateapplication-parameters">Parameters</h3>

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
|body|body|[CreateApplicationMessage](#schemacreateapplicationmessage)|false|none|
|» ApplicationName|body|object|true|none|
|» Description|body|object|false|none|
|» ResourceLifecycleConfig|body|object|false|none|
|» » ServiceRole|body|object|false|none|
|» » VersionLifecycleConfig|body|object|false|none|
|» » » MaxCountRule|body|object|false|none|
|» » » » Enabled|body|object|true|none|
|» » » » MaxCount|body|object|false|none|
|» » » » DeleteSourceFromS3|body|object|false|none|
|» » » MaxAgeRule|body|object|false|none|
|» » » » Enabled|body|object|true|none|
|» » » » MaxAgeInDays|body|object|false|none|
|» » » » DeleteSourceFromS3|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateApplication|
|Version|2010-12-01|

<h3 id="postcreateapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplicationDescriptionMessage](#schemaapplicationdescriptionmessage)|
|480|480|TooManyApplicationsException|[TooManyApplicationsException](#schematoomanyapplicationsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateApplicationVersion

<a id="opIdGET_CreateApplicationVersion"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=CreateApplicationVersion?ApplicationName=string&VersionLabel=string&Action=CreateApplicationVersion&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateApplicationVersion`

<p>Creates an application version for the specified application. You can create an application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the output of an AWS CodeBuild build as follows:</p> <p>Specify a commit in an AWS CodeCommit repository with <code>SourceBuildInformation</code>.</p> <p>Specify a build in an AWS CodeBuild with <code>SourceBuildInformation</code> and <code>BuildConfiguration</code>.</p> <p>Specify a source bundle in S3 with <code>SourceBundle</code> </p> <p>Omit both <code>SourceBuildInformation</code> and <code>SourceBundle</code> to use the default sample application.</p> <note> <p>After you create an application version with a specified Amazon S3 bucket and key location, you can't change that Amazon S3 location. If you change the Amazon S3 location, you receive an exception when you attempt to launch an environment from the application version.</p> </note>

<h3 id="getcreateapplicationversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|true| The name of the application. If no application is found with this name, and <code>AutoCreateApplication</code> is <code>false</code>, returns an <code>InvalidParameterValue</code> error. |
|VersionLabel|query|string|true|<p>A label identifying this version.</p> <p>Constraint: Must be unique per application. If an application version already exists with this label for the specified application, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p>|
|Description|query|string|false|A description of this application version.|
|SourceBuildInformation|query|object|false|Specify a commit in an AWS CodeCommit Git repository to use as the source code for the application version.|
|SourceBundle|query|object|false|<p>The Amazon S3 bucket and key that identify the location of the source bundle for this version.</p> <note> <p>The Amazon S3 bucket must be in the same region as the environment.</p> </note> <p>Specify a source bundle in S3 or a commit in an AWS CodeCommit repository (with <code>SourceBuildInformation</code>), but not both. If neither <code>SourceBundle</code> nor <code>SourceBuildInformation</code> are provided, Elastic Beanstalk uses a sample application.</p>|
|BuildConfiguration|query|object|false|Settings for an AWS CodeBuild build.|
|AutoCreateApplication|query|boolean|false|Set to <code>true</code> to create an application with the specified name if it doesn't already exist.|
|Process|query|boolean|false|<p>Pre-processes and validates the environment manifest (<code>env.yaml</code>) and configuration files (<code>*.config</code> files in the <code>.ebextensions</code> folder) in the source bundle. Validating configuration files can identify issues prior to deploying the application version to an environment.</p> <p>You must turn processing on for application versions that you create using AWS CodeBuild or AWS CodeCommit. For application versions built from a source bundle in Amazon S3, processing is optional.</p> <note> <p>The <code>Process</code> option validates Elastic Beanstalk configuration files. It doesn't validate your application's configuration files, like proxy server or Docker configuration.</p> </note>|
|Tags|query|[[Tag](#schematag)]|false|<p>Specifies the tags applied to the application version.</p> <p>Elastic Beanstalk applies these tags only to the application version. Environments that use the application version don't inherit the tags.</p>|
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
|Action|CreateApplicationVersion|
|Version|2010-12-01|

<h3 id="getcreateapplicationversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplicationVersionDescriptionMessage](#schemaapplicationversiondescriptionmessage)|
|480|480|TooManyApplicationsException|[TooManyApplicationsException](#schematoomanyapplicationsexception)|
|481|481|TooManyApplicationVersionsException|[TooManyApplicationVersionsException](#schematoomanyapplicationversionsexception)|
|482|482|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|483|483|S3LocationNotInServiceRegionException|[S3LocationNotInServiceRegionException](#schemas3locationnotinserviceregionexception)|
|484|484|CodeBuildNotInServiceRegionException|[CodeBuildNotInServiceRegionException](#schemacodebuildnotinserviceregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateApplicationVersion

<a id="opIdPOST_CreateApplicationVersion"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=CreateApplicationVersion?Action=CreateApplicationVersion&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"VersionLabel":{},"Description":{},"SourceBuildInformation":{"SourceType":{},"SourceRepository":{},"SourceLocation":{}},"SourceBundle":{"S3Bucket":{},"S3Key":{}},"BuildConfiguration":{"ArtifactName":{},"CodeBuildServiceRole":{},"ComputeType":{},"Image":{},"TimeoutInMinutes":{}},"AutoCreateApplication":{},"Process":{},"Tags":{}}'
```

`POST /#Action=CreateApplicationVersion`

<p>Creates an application version for the specified application. You can create an application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the output of an AWS CodeBuild build as follows:</p> <p>Specify a commit in an AWS CodeCommit repository with <code>SourceBuildInformation</code>.</p> <p>Specify a build in an AWS CodeBuild with <code>SourceBuildInformation</code> and <code>BuildConfiguration</code>.</p> <p>Specify a source bundle in S3 with <code>SourceBundle</code> </p> <p>Omit both <code>SourceBuildInformation</code> and <code>SourceBundle</code> to use the default sample application.</p> <note> <p>After you create an application version with a specified Amazon S3 bucket and key location, you can't change that Amazon S3 location. If you change the Amazon S3 location, you receive an exception when you attempt to launch an environment from the application version.</p> </note>

> Body parameter

```json
{
  "ApplicationName": {},
  "VersionLabel": {},
  "Description": {},
  "SourceBuildInformation": {
    "SourceType": {},
    "SourceRepository": {},
    "SourceLocation": {}
  },
  "SourceBundle": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "BuildConfiguration": {
    "ArtifactName": {},
    "CodeBuildServiceRole": {},
    "ComputeType": {},
    "Image": {},
    "TimeoutInMinutes": {}
  },
  "AutoCreateApplication": {},
  "Process": {},
  "Tags": {}
}
```

<h3 id="postcreateapplicationversion-parameters">Parameters</h3>

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
|body|body|[CreateApplicationVersionMessage](#schemacreateapplicationversionmessage)|false|none|
|» ApplicationName|body|object|true|none|
|» VersionLabel|body|object|true|none|
|» Description|body|object|false|none|
|» SourceBuildInformation|body|object|false|none|
|» » SourceType|body|object|true|none|
|» » SourceRepository|body|object|true|none|
|» » SourceLocation|body|object|true|none|
|» SourceBundle|body|object|false|none|
|» » S3Bucket|body|object|false|none|
|» » S3Key|body|object|false|none|
|» BuildConfiguration|body|object|false|none|
|» » ArtifactName|body|object|false|none|
|» » CodeBuildServiceRole|body|object|true|none|
|» » ComputeType|body|object|false|none|
|» » Image|body|object|true|none|
|» » TimeoutInMinutes|body|object|false|none|
|» AutoCreateApplication|body|object|false|none|
|» Process|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateApplicationVersion|
|Version|2010-12-01|

<h3 id="postcreateapplicationversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplicationVersionDescriptionMessage](#schemaapplicationversiondescriptionmessage)|
|480|480|TooManyApplicationsException|[TooManyApplicationsException](#schematoomanyapplicationsexception)|
|481|481|TooManyApplicationVersionsException|[TooManyApplicationVersionsException](#schematoomanyapplicationversionsexception)|
|482|482|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|483|483|S3LocationNotInServiceRegionException|[S3LocationNotInServiceRegionException](#schemas3locationnotinserviceregionexception)|
|484|484|CodeBuildNotInServiceRegionException|[CodeBuildNotInServiceRegionException](#schemacodebuildnotinserviceregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateConfigurationTemplate

<a id="opIdGET_CreateConfigurationTemplate"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=CreateConfigurationTemplate?ApplicationName=string&TemplateName=string&Action=CreateConfigurationTemplate&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateConfigurationTemplate`

<p>Creates an AWS Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk application. You define application configuration settings in a configuration template. You can then use the configuration template to deploy different versions of the application with the same configuration settings.</p> <p>Templates aren't associated with any environment. The <code>EnvironmentName</code> response element is always <code>null</code>.</p> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> <li> <p> <a>DescribeConfigurationSettings</a> </p> </li> <li> <p> <a>ListAvailableSolutionStacks</a> </p> </li> </ul>

<h3 id="getcreateconfigurationtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|true|The name of the Elastic Beanstalk application to associate with this configuration template.|
|TemplateName|query|string|true|<p>The name of the configuration template.</p> <p>Constraint: This name must be unique per application.</p>|
|SolutionStackName|query|string|false|<p>The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. For example, <code>64bit Amazon Linux 2013.09 running Tomcat 7 Java 7</code>. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html">Supported Platforms</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.</p> <p>You must specify <code>SolutionStackName</code> if you don't specify <code>PlatformArn</code>, <code>EnvironmentId</code>, or <code>SourceConfiguration</code>.</p> <p>Use the <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListAvailableSolutionStacks.html"> <code>ListAvailableSolutionStacks</code> </a> API to obtain a list of available solution stacks.</p>|
|PlatformArn|query|string|false|<p>The Amazon Resource Name (ARN) of the custom platform. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html"> Custom Platforms</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.</p> <note> <p>If you specify <code>PlatformArn</code>, then don't specify <code>SolutionStackName</code>.</p> </note>|
|SourceConfiguration|query|object|false|<p>An Elastic Beanstalk configuration template to base this one on. If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration.</p> <p>Values specified in <code>OptionSettings</code> override any values obtained from the <code>SourceConfiguration</code>.</p> <p>You must specify <code>SourceConfiguration</code> if you don't specify <code>PlatformArn</code>, <code>EnvironmentId</code>, or <code>SolutionStackName</code>.</p> <p>Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name.</p>|
|EnvironmentId|query|string|false|The ID of an environment whose settings you want to use to create the configuration template. You must specify <code>EnvironmentId</code> if you don't specify <code>PlatformArn</code>, <code>SolutionStackName</code>, or <code>SourceConfiguration</code>.|
|Description|query|string|false|An optional description for this configuration.|
|OptionSettings|query|[[ConfigurationOptionSetting](#schemaconfigurationoptionsetting)]|false|Option values for the Elastic Beanstalk configuration, such as the instance type. If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html">Option Values</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.|
|Tags|query|[[Tag](#schematag)]|false|Specifies the tags applied to the configuration template.|
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
|Action|CreateConfigurationTemplate|
|Version|2010-12-01|

<h3 id="getcreateconfigurationtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigurationSettingsDescription](#schemaconfigurationsettingsdescription)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|481|481|TooManyBucketsException|[TooManyBucketsException](#schematoomanybucketsexception)|
|482|482|TooManyConfigurationTemplatesException|[TooManyConfigurationTemplatesException](#schematoomanyconfigurationtemplatesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateConfigurationTemplate

<a id="opIdPOST_CreateConfigurationTemplate"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=CreateConfigurationTemplate?Action=CreateConfigurationTemplate&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"TemplateName":{},"SolutionStackName":{},"PlatformArn":{},"SourceConfiguration":{"ApplicationName":{},"TemplateName":{}},"EnvironmentId":{},"Description":{},"OptionSettings":{},"Tags":{}}'
```

`POST /#Action=CreateConfigurationTemplate`

<p>Creates an AWS Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk application. You define application configuration settings in a configuration template. You can then use the configuration template to deploy different versions of the application with the same configuration settings.</p> <p>Templates aren't associated with any environment. The <code>EnvironmentName</code> response element is always <code>null</code>.</p> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> <li> <p> <a>DescribeConfigurationSettings</a> </p> </li> <li> <p> <a>ListAvailableSolutionStacks</a> </p> </li> </ul>

> Body parameter

```json
{
  "ApplicationName": {},
  "TemplateName": {},
  "SolutionStackName": {},
  "PlatformArn": {},
  "SourceConfiguration": {
    "ApplicationName": {},
    "TemplateName": {}
  },
  "EnvironmentId": {},
  "Description": {},
  "OptionSettings": {},
  "Tags": {}
}
```

<h3 id="postcreateconfigurationtemplate-parameters">Parameters</h3>

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
|body|body|[CreateConfigurationTemplateMessage](#schemacreateconfigurationtemplatemessage)|false|none|
|» ApplicationName|body|object|true|none|
|» TemplateName|body|object|true|none|
|» SolutionStackName|body|object|false|none|
|» PlatformArn|body|object|false|none|
|» SourceConfiguration|body|object|false|none|
|» » ApplicationName|body|object|false|none|
|» » TemplateName|body|object|false|none|
|» EnvironmentId|body|object|false|none|
|» Description|body|object|false|none|
|» OptionSettings|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateConfigurationTemplate|
|Version|2010-12-01|

<h3 id="postcreateconfigurationtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigurationSettingsDescription](#schemaconfigurationsettingsdescription)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|481|481|TooManyBucketsException|[TooManyBucketsException](#schematoomanybucketsexception)|
|482|482|TooManyConfigurationTemplatesException|[TooManyConfigurationTemplatesException](#schematoomanyconfigurationtemplatesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateEnvironment

<a id="opIdGET_CreateEnvironment"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=CreateEnvironment?ApplicationName=string&Action=CreateEnvironment&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateEnvironment`

Launches an AWS Elastic Beanstalk environment for the specified application using the specified configuration.

<h3 id="getcreateenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|true|The name of the application that is associated with this environment.|
|EnvironmentName|query|string|false|<p>A unique name for the environment.</p> <p>Constraint: Must be from 4 to 40 characters in length. The name can contain only letters, numbers, and hyphens. It can't start or end with a hyphen. This name must be unique within a region in your account. If the specified name already exists in the region, Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p> <p>If you don't specify the <code>CNAMEPrefix</code> parameter, the environment name becomes part of the CNAME, and therefore part of the visible URL for your application.</p>|
|GroupName|query|string|false|The name of the group to which the target environment belongs. Specify a group name only if the environment's name is specified in an environment manifest and not with the environment name parameter. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.|
|Description|query|string|false|Your description for this environment.|
|CNAMEPrefix|query|string|false|If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.|
|Tier|query|object|false|Specifies the tier to use in creating this environment. The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks.|
|Tags|query|[[Tag](#schematag)]|false|Specifies the tags applied to resources in the environment.|
|VersionLabel|query|string|false|<p>The name of the application version to deploy.</p> <p>Default: If not specified, Elastic Beanstalk attempts to deploy the sample application.</p>|
|TemplateName|query|string|false|<p>The name of the Elastic Beanstalk configuration template to use with the environment.</p> <note> <p>If you specify <code>TemplateName</code>, then don't specify <code>SolutionStackName</code>.</p> </note>|
|SolutionStackName|query|string|false|<p>The name of an Elastic Beanstalk solution stack (platform version) to use with the environment. If specified, Elastic Beanstalk sets the configuration values to the default values associated with the specified solution stack. For a list of current solution stacks, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/platforms/platforms-supported.html">Elastic Beanstalk Supported Platforms</a> in the <i>AWS Elastic Beanstalk Platforms</i> guide.</p> <note> <p>If you specify <code>SolutionStackName</code>, don't specify <code>PlatformArn</code> or <code>TemplateName</code>.</p> </note>|
|PlatformArn|query|string|false|<p>The Amazon Resource Name (ARN) of the custom platform to use with the environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html">Custom Platforms</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.</p> <note> <p>If you specify <code>PlatformArn</code>, don't specify <code>SolutionStackName</code>.</p> </note>|
|OptionSettings|query|[[ConfigurationOptionSetting](#schemaconfigurationoptionsetting)]|false|If specified, AWS Elastic Beanstalk sets the specified configuration options to the requested value in the configuration set for the new environment. These override the values obtained from the solution stack or the configuration template.|
|OptionsToRemove|query|[[OptionSpecification](#schemaoptionspecification)]|false|A list of custom user-defined configuration options to remove from the configuration set for this new environment.|
|OperationsRole|query|string|false|The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role. If specified, Elastic Beanstalk uses the operations role for permissions to downstream services during this call and during subsequent calls acting on this environment. To specify an operations role, you must have the <code>iam:PassRole</code> permission for the role. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.|
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
|Action|CreateEnvironment|
|Version|2010-12-01|

<h3 id="getcreateenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnvironmentDescription](#schemaenvironmentdescription)|
|480|480|TooManyEnvironmentsException|[TooManyEnvironmentsException](#schematoomanyenvironmentsexception)|
|481|481|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateEnvironment

<a id="opIdPOST_CreateEnvironment"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=CreateEnvironment?Action=CreateEnvironment&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"EnvironmentName":{},"GroupName":{},"Description":{},"CNAMEPrefix":{},"Tier":{"Name":{},"Type":{},"Version":{}},"Tags":{},"VersionLabel":{},"TemplateName":{},"SolutionStackName":{},"PlatformArn":{},"OptionSettings":{},"OptionsToRemove":{},"OperationsRole":{}}'
```

`POST /#Action=CreateEnvironment`

Launches an AWS Elastic Beanstalk environment for the specified application using the specified configuration.

> Body parameter

```json
{
  "ApplicationName": {},
  "EnvironmentName": {},
  "GroupName": {},
  "Description": {},
  "CNAMEPrefix": {},
  "Tier": {
    "Name": {},
    "Type": {},
    "Version": {}
  },
  "Tags": {},
  "VersionLabel": {},
  "TemplateName": {},
  "SolutionStackName": {},
  "PlatformArn": {},
  "OptionSettings": {},
  "OptionsToRemove": {},
  "OperationsRole": {}
}
```

<h3 id="postcreateenvironment-parameters">Parameters</h3>

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
|body|body|[CreateEnvironmentMessage](#schemacreateenvironmentmessage)|false|none|
|» ApplicationName|body|object|true|none|
|» EnvironmentName|body|object|false|none|
|» GroupName|body|object|false|none|
|» Description|body|object|false|none|
|» CNAMEPrefix|body|object|false|none|
|» Tier|body|object|false|none|
|» » Name|body|object|false|none|
|» » Type|body|object|false|none|
|» » Version|body|object|false|none|
|» Tags|body|object|false|none|
|» VersionLabel|body|object|false|none|
|» TemplateName|body|object|false|none|
|» SolutionStackName|body|object|false|none|
|» PlatformArn|body|object|false|none|
|» OptionSettings|body|object|false|none|
|» OptionsToRemove|body|object|false|none|
|» OperationsRole|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateEnvironment|
|Version|2010-12-01|

<h3 id="postcreateenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnvironmentDescription](#schemaenvironmentdescription)|
|480|480|TooManyEnvironmentsException|[TooManyEnvironmentsException](#schematoomanyenvironmentsexception)|
|481|481|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreatePlatformVersion

<a id="opIdGET_CreatePlatformVersion"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=CreatePlatformVersion?PlatformName=string&PlatformVersion=string&S3Bucket=%7B%7D&S3Key=%7B%7D&Action=CreatePlatformVersion&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreatePlatformVersion`

Create a new version of your custom platform.

<h3 id="getcreateplatformversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PlatformName|query|string|true|The name of your custom platform.|
|PlatformVersion|query|string|true|The number, such as 1.0.2, for the new platform version.|
|PlatformDefinitionBundle|query|object|true|The location of the platform definition archive in Amazon S3.|
|EnvironmentName|query|string|false|The name of the builder environment.|
|OptionSettings|query|[[ConfigurationOptionSetting](#schemaconfigurationoptionsetting)]|false|The configuration option settings to apply to the builder environment.|
|Tags|query|[[Tag](#schematag)]|false|<p>Specifies the tags applied to the new platform version.</p> <p>Elastic Beanstalk applies these tags only to the platform version. Environments that you create using the platform version don't inherit the tags.</p>|
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
|Action|CreatePlatformVersion|
|Version|2010-12-01|

<h3 id="getcreateplatformversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePlatformVersionResult](#schemacreateplatformversionresult)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|481|481|ElasticBeanstalkServiceException|[ElasticBeanstalkServiceException](#schemaelasticbeanstalkserviceexception)|
|482|482|TooManyPlatformsException|[TooManyPlatformsException](#schematoomanyplatformsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreatePlatformVersion

<a id="opIdPOST_CreatePlatformVersion"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=CreatePlatformVersion?Action=CreatePlatformVersion&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"PlatformName":{},"PlatformVersion":{},"PlatformDefinitionBundle":{"S3Bucket":{},"S3Key":{}},"EnvironmentName":{},"OptionSettings":{},"Tags":{}}'
```

`POST /#Action=CreatePlatformVersion`

Create a new version of your custom platform.

> Body parameter

```json
{
  "PlatformName": {},
  "PlatformVersion": {},
  "PlatformDefinitionBundle": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "EnvironmentName": {},
  "OptionSettings": {},
  "Tags": {}
}
```

<h3 id="postcreateplatformversion-parameters">Parameters</h3>

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
|body|body|[CreatePlatformVersionRequest](#schemacreateplatformversionrequest)|false|none|
|» PlatformName|body|object|true|none|
|» PlatformVersion|body|object|true|none|
|» PlatformDefinitionBundle|body|object|true|none|
|» » S3Bucket|body|object|false|none|
|» » S3Key|body|object|false|none|
|» EnvironmentName|body|object|false|none|
|» OptionSettings|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreatePlatformVersion|
|Version|2010-12-01|

<h3 id="postcreateplatformversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePlatformVersionResult](#schemacreateplatformversionresult)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|481|481|ElasticBeanstalkServiceException|[ElasticBeanstalkServiceException](#schemaelasticbeanstalkserviceexception)|
|482|482|TooManyPlatformsException|[TooManyPlatformsException](#schematoomanyplatformsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateStorageLocation

<a id="opIdGET_CreateStorageLocation"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=CreateStorageLocation?Action=CreateStorageLocation&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateStorageLocation`

Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.

<h3 id="getcreatestoragelocation-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateStorageLocation|
|Version|2010-12-01|

<h3 id="getcreatestoragelocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStorageLocationResultMessage](#schemacreatestoragelocationresultmessage)|
|480|480|TooManyBucketsException|[TooManyBucketsException](#schematoomanybucketsexception)|
|481|481|S3SubscriptionRequiredException|[S3SubscriptionRequiredException](#schemas3subscriptionrequiredexception)|
|482|482|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateStorageLocation

<a id="opIdPOST_CreateStorageLocation"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=CreateStorageLocation?Action=CreateStorageLocation&Version=2010-12-01' \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /#Action=CreateStorageLocation`

Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.

<h3 id="postcreatestoragelocation-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateStorageLocation|
|Version|2010-12-01|

<h3 id="postcreatestoragelocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStorageLocationResultMessage](#schemacreatestoragelocationresultmessage)|
|480|480|TooManyBucketsException|[TooManyBucketsException](#schematoomanybucketsexception)|
|481|481|S3SubscriptionRequiredException|[S3SubscriptionRequiredException](#schemas3subscriptionrequiredexception)|
|482|482|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteApplication

<a id="opIdGET_DeleteApplication"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DeleteApplication?ApplicationName=string&Action=DeleteApplication&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteApplication`

<p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>

<h3 id="getdeleteapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|true|The name of the application to delete.|
|TerminateEnvByForce|query|boolean|false|When set to true, running environments will be terminated before deleting the application.|
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
|Action|DeleteApplication|
|Version|2010-12-01|

<h3 id="getdeleteapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteApplication

<a id="opIdPOST_DeleteApplication"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DeleteApplication?Action=DeleteApplication&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"TerminateEnvByForce":{}}'
```

`POST /#Action=DeleteApplication`

<p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>

> Body parameter

```json
{
  "ApplicationName": {},
  "TerminateEnvByForce": {}
}
```

<h3 id="postdeleteapplication-parameters">Parameters</h3>

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
|body|body|[DeleteApplicationMessage](#schemadeleteapplicationmessage)|false|none|
|» ApplicationName|body|object|true|none|
|» TerminateEnvByForce|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteApplication|
|Version|2010-12-01|

<h3 id="postdeleteapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteApplicationVersion

<a id="opIdGET_DeleteApplicationVersion"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DeleteApplicationVersion?ApplicationName=string&VersionLabel=string&Action=DeleteApplicationVersion&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteApplicationVersion`

<p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>

<h3 id="getdeleteapplicationversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|true|The name of the application to which the version belongs.|
|VersionLabel|query|string|true|The label of the version to delete.|
|DeleteSourceBundle|query|boolean|false|Set to <code>true</code> to delete the source bundle from your storage bucket. Otherwise, the application version is deleted only from Elastic Beanstalk and the source bundle remains in Amazon S3.|
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
|Action|DeleteApplicationVersion|
|Version|2010-12-01|

<h3 id="getdeleteapplicationversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|SourceBundleDeletionException|[SourceBundleDeletionException](#schemasourcebundledeletionexception)|
|481|481|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|482|482|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|483|483|S3LocationNotInServiceRegionException|[S3LocationNotInServiceRegionException](#schemas3locationnotinserviceregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteApplicationVersion

<a id="opIdPOST_DeleteApplicationVersion"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DeleteApplicationVersion?Action=DeleteApplicationVersion&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"VersionLabel":{},"DeleteSourceBundle":{}}'
```

`POST /#Action=DeleteApplicationVersion`

<p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>

> Body parameter

```json
{
  "ApplicationName": {},
  "VersionLabel": {},
  "DeleteSourceBundle": {}
}
```

<h3 id="postdeleteapplicationversion-parameters">Parameters</h3>

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
|body|body|[DeleteApplicationVersionMessage](#schemadeleteapplicationversionmessage)|false|none|
|» ApplicationName|body|object|true|none|
|» VersionLabel|body|object|true|none|
|» DeleteSourceBundle|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteApplicationVersion|
|Version|2010-12-01|

<h3 id="postdeleteapplicationversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|SourceBundleDeletionException|[SourceBundleDeletionException](#schemasourcebundledeletionexception)|
|481|481|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|482|482|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|483|483|S3LocationNotInServiceRegionException|[S3LocationNotInServiceRegionException](#schemas3locationnotinserviceregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteConfigurationTemplate

<a id="opIdGET_DeleteConfigurationTemplate"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DeleteConfigurationTemplate?ApplicationName=string&TemplateName=string&Action=DeleteConfigurationTemplate&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteConfigurationTemplate`

<p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>

<h3 id="getdeleteconfigurationtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|true|The name of the application to delete the configuration template from.|
|TemplateName|query|string|true|The name of the configuration template to delete.|
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
|Action|DeleteConfigurationTemplate|
|Version|2010-12-01|

<h3 id="getdeleteconfigurationtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteConfigurationTemplate

<a id="opIdPOST_DeleteConfigurationTemplate"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DeleteConfigurationTemplate?Action=DeleteConfigurationTemplate&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"TemplateName":{}}'
```

`POST /#Action=DeleteConfigurationTemplate`

<p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>

> Body parameter

```json
{
  "ApplicationName": {},
  "TemplateName": {}
}
```

<h3 id="postdeleteconfigurationtemplate-parameters">Parameters</h3>

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
|body|body|[DeleteConfigurationTemplateMessage](#schemadeleteconfigurationtemplatemessage)|false|none|
|» ApplicationName|body|object|true|none|
|» TemplateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteConfigurationTemplate|
|Version|2010-12-01|

<h3 id="postdeleteconfigurationtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteEnvironmentConfiguration

<a id="opIdGET_DeleteEnvironmentConfiguration"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DeleteEnvironmentConfiguration?ApplicationName=string&EnvironmentName=string&Action=DeleteEnvironmentConfiguration&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteEnvironmentConfiguration`

<p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>

<h3 id="getdeleteenvironmentconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|true|The name of the application the environment is associated with.|
|EnvironmentName|query|string|true|The name of the environment to delete the draft configuration from.|
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
|Action|DeleteEnvironmentConfiguration|
|Version|2010-12-01|

<h3 id="getdeleteenvironmentconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteEnvironmentConfiguration

<a id="opIdPOST_DeleteEnvironmentConfiguration"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DeleteEnvironmentConfiguration?Action=DeleteEnvironmentConfiguration&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"EnvironmentName":{}}'
```

`POST /#Action=DeleteEnvironmentConfiguration`

<p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>

> Body parameter

```json
{
  "ApplicationName": {},
  "EnvironmentName": {}
}
```

<h3 id="postdeleteenvironmentconfiguration-parameters">Parameters</h3>

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
|body|body|[DeleteEnvironmentConfigurationMessage](#schemadeleteenvironmentconfigurationmessage)|false|none|
|» ApplicationName|body|object|true|none|
|» EnvironmentName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteEnvironmentConfiguration|
|Version|2010-12-01|

<h3 id="postdeleteenvironmentconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeletePlatformVersion

<a id="opIdGET_DeletePlatformVersion"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DeletePlatformVersion?Action=DeletePlatformVersion&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeletePlatformVersion`

Deletes the specified version of a custom platform.

<h3 id="getdeleteplatformversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PlatformArn|query|string|false|The ARN of the version of the custom platform.|
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
|Action|DeletePlatformVersion|
|Version|2010-12-01|

<h3 id="getdeleteplatformversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePlatformVersionResult](#schemadeleteplatformversionresult)|
|480|480|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|481|481|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|482|482|ElasticBeanstalkServiceException|[ElasticBeanstalkServiceException](#schemaelasticbeanstalkserviceexception)|
|483|483|PlatformVersionStillReferencedException|[PlatformVersionStillReferencedException](#schemaplatformversionstillreferencedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeletePlatformVersion

<a id="opIdPOST_DeletePlatformVersion"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DeletePlatformVersion?Action=DeletePlatformVersion&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"PlatformArn":{}}'
```

`POST /#Action=DeletePlatformVersion`

Deletes the specified version of a custom platform.

> Body parameter

```json
{
  "PlatformArn": {}
}
```

<h3 id="postdeleteplatformversion-parameters">Parameters</h3>

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
|body|body|[DeletePlatformVersionRequest](#schemadeleteplatformversionrequest)|false|none|
|» PlatformArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeletePlatformVersion|
|Version|2010-12-01|

<h3 id="postdeleteplatformversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePlatformVersionResult](#schemadeleteplatformversionresult)|
|480|480|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|481|481|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|482|482|ElasticBeanstalkServiceException|[ElasticBeanstalkServiceException](#schemaelasticbeanstalkserviceexception)|
|483|483|PlatformVersionStillReferencedException|[PlatformVersionStillReferencedException](#schemaplatformversionstillreferencedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeAccountAttributes

<a id="opIdGET_DescribeAccountAttributes"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeAccountAttributes?Action=DescribeAccountAttributes&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeAccountAttributes`

<p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>

<h3 id="getdescribeaccountattributes-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeAccountAttributes|
|Version|2010-12-01|

<h3 id="getdescribeaccountattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountAttributesResult](#schemadescribeaccountattributesresult)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeAccountAttributes

<a id="opIdPOST_DescribeAccountAttributes"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeAccountAttributes?Action=DescribeAccountAttributes&Version=2010-12-01' \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /#Action=DescribeAccountAttributes`

<p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>

<h3 id="postdescribeaccountattributes-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeAccountAttributes|
|Version|2010-12-01|

<h3 id="postdescribeaccountattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountAttributesResult](#schemadescribeaccountattributesresult)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeApplicationVersions

<a id="opIdGET_DescribeApplicationVersions"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeApplicationVersions?Action=DescribeApplicationVersions&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeApplicationVersions`

Retrieve a list of application versions.

<h3 id="getdescribeapplicationversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|false|Specify an application name to show only application versions for that application.|
|VersionLabels|query|[[VersionLabel](#schemaversionlabel)]|false|Specify a version label to show a specific application version.|
|MaxRecords|query|integer|false|<p>For a paginated request. Specify a maximum number of application versions to include in each response.</p> <p>If no <code>MaxRecords</code> is specified, all available application versions are retrieved in a single response.</p>|
|NextToken|query|string|false|<p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>|
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
|Action|DescribeApplicationVersions|
|Version|2010-12-01|

<h3 id="getdescribeapplicationversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplicationVersionDescriptionsMessage](#schemaapplicationversiondescriptionsmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeApplicationVersions

<a id="opIdPOST_DescribeApplicationVersions"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeApplicationVersions?Action=DescribeApplicationVersions&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"VersionLabels":{},"MaxRecords":{},"NextToken":{}}'
```

`POST /#Action=DescribeApplicationVersions`

Retrieve a list of application versions.

> Body parameter

```json
{
  "ApplicationName": {},
  "VersionLabels": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

<h3 id="postdescribeapplicationversions-parameters">Parameters</h3>

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
|body|body|[DescribeApplicationVersionsMessage](#schemadescribeapplicationversionsmessage)|false|none|
|» ApplicationName|body|object|false|none|
|» VersionLabels|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeApplicationVersions|
|Version|2010-12-01|

<h3 id="postdescribeapplicationversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplicationVersionDescriptionsMessage](#schemaapplicationversiondescriptionsmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeApplications

<a id="opIdGET_DescribeApplications"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeApplications?Action=DescribeApplications&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeApplications`

Returns the descriptions of existing applications.

<h3 id="getdescribeapplications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationNames|query|[[ApplicationName](#schemaapplicationname)]|false|If specified, AWS Elastic Beanstalk restricts the returned descriptions to only include those with the specified names.|
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
|Action|DescribeApplications|
|Version|2010-12-01|

<h3 id="getdescribeapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplicationDescriptionsMessage](#schemaapplicationdescriptionsmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeApplications

<a id="opIdPOST_DescribeApplications"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeApplications?Action=DescribeApplications&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationNames":{}}'
```

`POST /#Action=DescribeApplications`

Returns the descriptions of existing applications.

> Body parameter

```json
{
  "ApplicationNames": {}
}
```

<h3 id="postdescribeapplications-parameters">Parameters</h3>

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
|body|body|[DescribeApplicationsMessage](#schemadescribeapplicationsmessage)|false|none|
|» ApplicationNames|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeApplications|
|Version|2010-12-01|

<h3 id="postdescribeapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplicationDescriptionsMessage](#schemaapplicationdescriptionsmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeConfigurationOptions

<a id="opIdGET_DescribeConfigurationOptions"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeConfigurationOptions?Action=DescribeConfigurationOptions&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeConfigurationOptions`

Describes the configuration options that are used in a particular configuration template or environment, or that a specified solution stack defines. The description includes the values the options, their default values, and an indication of the required action on a running environment if an option value is changed.

<h3 id="getdescribeconfigurationoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|false|The name of the application associated with the configuration template or environment. Only needed if you want to describe the configuration options associated with either the configuration template or environment.|
|TemplateName|query|string|false|The name of the configuration template whose configuration options you want to describe.|
|EnvironmentName|query|string|false|The name of the environment whose configuration options you want to describe.|
|SolutionStackName|query|string|false|The name of the solution stack whose configuration options you want to describe.|
|PlatformArn|query|string|false|The ARN of the custom platform.|
|Options|query|[[OptionSpecification](#schemaoptionspecification)]|false|If specified, restricts the descriptions to only the specified options.|
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
|Action|DescribeConfigurationOptions|
|Version|2010-12-01|

<h3 id="getdescribeconfigurationoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigurationOptionsDescription](#schemaconfigurationoptionsdescription)|
|480|480|TooManyBucketsException|[TooManyBucketsException](#schematoomanybucketsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeConfigurationOptions

<a id="opIdPOST_DescribeConfigurationOptions"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeConfigurationOptions?Action=DescribeConfigurationOptions&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"TemplateName":{},"EnvironmentName":{},"SolutionStackName":{},"PlatformArn":{},"Options":{}}'
```

`POST /#Action=DescribeConfigurationOptions`

Describes the configuration options that are used in a particular configuration template or environment, or that a specified solution stack defines. The description includes the values the options, their default values, and an indication of the required action on a running environment if an option value is changed.

> Body parameter

```json
{
  "ApplicationName": {},
  "TemplateName": {},
  "EnvironmentName": {},
  "SolutionStackName": {},
  "PlatformArn": {},
  "Options": {}
}
```

<h3 id="postdescribeconfigurationoptions-parameters">Parameters</h3>

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
|body|body|[DescribeConfigurationOptionsMessage](#schemadescribeconfigurationoptionsmessage)|false|none|
|» ApplicationName|body|object|false|none|
|» TemplateName|body|object|false|none|
|» EnvironmentName|body|object|false|none|
|» SolutionStackName|body|object|false|none|
|» PlatformArn|body|object|false|none|
|» Options|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeConfigurationOptions|
|Version|2010-12-01|

<h3 id="postdescribeconfigurationoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigurationOptionsDescription](#schemaconfigurationoptionsdescription)|
|480|480|TooManyBucketsException|[TooManyBucketsException](#schematoomanybucketsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeConfigurationSettings

<a id="opIdGET_DescribeConfigurationSettings"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeConfigurationSettings?ApplicationName=string&Action=DescribeConfigurationSettings&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeConfigurationSettings`

<p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>

<h3 id="getdescribeconfigurationsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|true|The application for the environment or configuration template.|
|TemplateName|query|string|false|<p>The name of the configuration template to describe.</p> <p> Conditional: You must specify either this parameter or an EnvironmentName, but not both. If you specify both, AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. If you do not specify either, AWS Elastic Beanstalk returns a <code>MissingRequiredParameter</code> error. </p>|
|EnvironmentName|query|string|false|<p>The name of the environment to describe.</p> <p> Condition: You must specify either this or a TemplateName, but not both. If you specify both, AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>|
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
|Action|DescribeConfigurationSettings|
|Version|2010-12-01|

<h3 id="getdescribeconfigurationsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigurationSettingsDescriptions](#schemaconfigurationsettingsdescriptions)|
|480|480|TooManyBucketsException|[TooManyBucketsException](#schematoomanybucketsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeConfigurationSettings

<a id="opIdPOST_DescribeConfigurationSettings"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeConfigurationSettings?Action=DescribeConfigurationSettings&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"TemplateName":{},"EnvironmentName":{}}'
```

`POST /#Action=DescribeConfigurationSettings`

<p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>

> Body parameter

```json
{
  "ApplicationName": {},
  "TemplateName": {},
  "EnvironmentName": {}
}
```

<h3 id="postdescribeconfigurationsettings-parameters">Parameters</h3>

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
|body|body|[DescribeConfigurationSettingsMessage](#schemadescribeconfigurationsettingsmessage)|false|none|
|» ApplicationName|body|object|true|none|
|» TemplateName|body|object|false|none|
|» EnvironmentName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeConfigurationSettings|
|Version|2010-12-01|

<h3 id="postdescribeconfigurationsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigurationSettingsDescriptions](#schemaconfigurationsettingsdescriptions)|
|480|480|TooManyBucketsException|[TooManyBucketsException](#schematoomanybucketsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeEnvironmentHealth

<a id="opIdGET_DescribeEnvironmentHealth"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeEnvironmentHealth?Action=DescribeEnvironmentHealth&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeEnvironmentHealth`

Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.

<h3 id="getdescribeenvironmenthealth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EnvironmentName|query|string|false|<p>Specify the environment by name.</p> <p>You must specify either this or an EnvironmentName, or both.</p>|
|EnvironmentId|query|string|false|<p>Specify the environment by ID.</p> <p>You must specify either this or an EnvironmentName, or both.</p>|
|AttributeNames|query|[[EnvironmentHealthAttribute](#schemaenvironmenthealthattribute)]|false|Specify the response elements to return. To retrieve all attributes, set to <code>All</code>. If no attribute names are specified, returns the name of the environment.|
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
|AttributeNames|Status|
|AttributeNames|Color|
|AttributeNames|Causes|
|AttributeNames|ApplicationMetrics|
|AttributeNames|InstancesHealth|
|AttributeNames|All|
|AttributeNames|HealthStatus|
|AttributeNames|RefreshedAt|
|Action|DescribeEnvironmentHealth|
|Version|2010-12-01|

<h3 id="getdescribeenvironmenthealth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEnvironmentHealthResult](#schemadescribeenvironmenthealthresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ElasticBeanstalkServiceException|[ElasticBeanstalkServiceException](#schemaelasticbeanstalkserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeEnvironmentHealth

<a id="opIdPOST_DescribeEnvironmentHealth"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeEnvironmentHealth?Action=DescribeEnvironmentHealth&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EnvironmentName":{},"EnvironmentId":{},"AttributeNames":{}}'
```

`POST /#Action=DescribeEnvironmentHealth`

Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.

> Body parameter

```json
{
  "EnvironmentName": {},
  "EnvironmentId": {},
  "AttributeNames": {}
}
```

<h3 id="postdescribeenvironmenthealth-parameters">Parameters</h3>

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
|body|body|[DescribeEnvironmentHealthRequest](#schemadescribeenvironmenthealthrequest)|false|none|
|» EnvironmentName|body|object|false|none|
|» EnvironmentId|body|object|false|none|
|» AttributeNames|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeEnvironmentHealth|
|Version|2010-12-01|

<h3 id="postdescribeenvironmenthealth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEnvironmentHealthResult](#schemadescribeenvironmenthealthresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ElasticBeanstalkServiceException|[ElasticBeanstalkServiceException](#schemaelasticbeanstalkserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeEnvironmentManagedActionHistory

<a id="opIdGET_DescribeEnvironmentManagedActionHistory"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeEnvironmentManagedActionHistory?Action=DescribeEnvironmentManagedActionHistory&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeEnvironmentManagedActionHistory`

Lists an environment's completed and failed managed actions.

<h3 id="getdescribeenvironmentmanagedactionhistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EnvironmentId|query|string|false|The environment ID of the target environment.|
|EnvironmentName|query|string|false|The name of the target environment.|
|NextToken|query|string|false|The pagination token returned by a previous request.|
|MaxItems|query|integer|false|The maximum number of items to return for a single request.|
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
|Action|DescribeEnvironmentManagedActionHistory|
|Version|2010-12-01|

<h3 id="getdescribeenvironmentmanagedactionhistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEnvironmentManagedActionHistoryResult](#schemadescribeenvironmentmanagedactionhistoryresult)|
|480|480|ElasticBeanstalkServiceException|[ElasticBeanstalkServiceException](#schemaelasticbeanstalkserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeEnvironmentManagedActionHistory

<a id="opIdPOST_DescribeEnvironmentManagedActionHistory"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeEnvironmentManagedActionHistory?Action=DescribeEnvironmentManagedActionHistory&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EnvironmentId":{},"EnvironmentName":{},"NextToken":{},"MaxItems":{}}'
```

`POST /#Action=DescribeEnvironmentManagedActionHistory`

Lists an environment's completed and failed managed actions.

> Body parameter

```json
{
  "EnvironmentId": {},
  "EnvironmentName": {},
  "NextToken": {},
  "MaxItems": {}
}
```

<h3 id="postdescribeenvironmentmanagedactionhistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxItems|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeEnvironmentManagedActionHistoryRequest](#schemadescribeenvironmentmanagedactionhistoryrequest)|false|none|
|» EnvironmentId|body|object|false|none|
|» EnvironmentName|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxItems|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeEnvironmentManagedActionHistory|
|Version|2010-12-01|

<h3 id="postdescribeenvironmentmanagedactionhistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEnvironmentManagedActionHistoryResult](#schemadescribeenvironmentmanagedactionhistoryresult)|
|480|480|ElasticBeanstalkServiceException|[ElasticBeanstalkServiceException](#schemaelasticbeanstalkserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeEnvironmentManagedActions

<a id="opIdGET_DescribeEnvironmentManagedActions"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeEnvironmentManagedActions?Action=DescribeEnvironmentManagedActions&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeEnvironmentManagedActions`

Lists an environment's upcoming and in-progress managed actions.

<h3 id="getdescribeenvironmentmanagedactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EnvironmentName|query|string|false|The name of the target environment.|
|EnvironmentId|query|string|false|The environment ID of the target environment.|
|Status|query|string|false|To show only actions with a particular status, specify a status.|
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
|Status|Scheduled|
|Status|Pending|
|Status|Running|
|Status|Unknown|
|Action|DescribeEnvironmentManagedActions|
|Version|2010-12-01|

<h3 id="getdescribeenvironmentmanagedactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEnvironmentManagedActionsResult](#schemadescribeenvironmentmanagedactionsresult)|
|480|480|ElasticBeanstalkServiceException|[ElasticBeanstalkServiceException](#schemaelasticbeanstalkserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeEnvironmentManagedActions

<a id="opIdPOST_DescribeEnvironmentManagedActions"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeEnvironmentManagedActions?Action=DescribeEnvironmentManagedActions&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EnvironmentName":{},"EnvironmentId":{},"Status":{}}'
```

`POST /#Action=DescribeEnvironmentManagedActions`

Lists an environment's upcoming and in-progress managed actions.

> Body parameter

```json
{
  "EnvironmentName": {},
  "EnvironmentId": {},
  "Status": {}
}
```

<h3 id="postdescribeenvironmentmanagedactions-parameters">Parameters</h3>

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
|body|body|[DescribeEnvironmentManagedActionsRequest](#schemadescribeenvironmentmanagedactionsrequest)|false|none|
|» EnvironmentName|body|object|false|none|
|» EnvironmentId|body|object|false|none|
|» Status|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeEnvironmentManagedActions|
|Version|2010-12-01|

<h3 id="postdescribeenvironmentmanagedactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEnvironmentManagedActionsResult](#schemadescribeenvironmentmanagedactionsresult)|
|480|480|ElasticBeanstalkServiceException|[ElasticBeanstalkServiceException](#schemaelasticbeanstalkserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeEnvironmentResources

<a id="opIdGET_DescribeEnvironmentResources"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeEnvironmentResources?Action=DescribeEnvironmentResources&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeEnvironmentResources`

Returns AWS resources for this environment.

<h3 id="getdescribeenvironmentresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EnvironmentId|query|string|false|<p>The ID of the environment to retrieve AWS resource usage data.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>|
|EnvironmentName|query|string|false|<p>The name of the environment to retrieve AWS resource usage data.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>|
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
|Action|DescribeEnvironmentResources|
|Version|2010-12-01|

<h3 id="getdescribeenvironmentresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnvironmentResourceDescriptionsMessage](#schemaenvironmentresourcedescriptionsmessage)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeEnvironmentResources

<a id="opIdPOST_DescribeEnvironmentResources"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeEnvironmentResources?Action=DescribeEnvironmentResources&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EnvironmentId":{},"EnvironmentName":{}}'
```

`POST /#Action=DescribeEnvironmentResources`

Returns AWS resources for this environment.

> Body parameter

```json
{
  "EnvironmentId": {},
  "EnvironmentName": {}
}
```

<h3 id="postdescribeenvironmentresources-parameters">Parameters</h3>

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
|body|body|[DescribeEnvironmentResourcesMessage](#schemadescribeenvironmentresourcesmessage)|false|none|
|» EnvironmentId|body|object|false|none|
|» EnvironmentName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeEnvironmentResources|
|Version|2010-12-01|

<h3 id="postdescribeenvironmentresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnvironmentResourceDescriptionsMessage](#schemaenvironmentresourcedescriptionsmessage)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeEnvironments

<a id="opIdGET_DescribeEnvironments"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeEnvironments?Action=DescribeEnvironments&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeEnvironments`

Returns descriptions for existing environments.

<h3 id="getdescribeenvironments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|false|If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application.|
|VersionLabel|query|string|false|If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application version.|
|EnvironmentIds|query|[[EnvironmentId](#schemaenvironmentid)]|false|If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified IDs.|
|EnvironmentNames|query|[[EnvironmentName](#schemaenvironmentname)]|false|If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified names.|
|IncludeDeleted|query|boolean|false|<p>Indicates whether to include deleted environments:</p> <p> <code>true</code>: Environments that have been deleted after <code>IncludedDeletedBackTo</code> are displayed.</p> <p> <code>false</code>: Do not include deleted environments.</p>|
|IncludedDeletedBackTo|query|string(date-time)|false| If specified when <code>IncludeDeleted</code> is set to <code>true</code>, then environments deleted after this date are displayed. |
|MaxRecords|query|integer|false|<p>For a paginated request. Specify a maximum number of environments to include in each response.</p> <p>If no <code>MaxRecords</code> is specified, all available environments are retrieved in a single response.</p>|
|NextToken|query|string|false|<p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>|
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
|Action|DescribeEnvironments|
|Version|2010-12-01|

<h3 id="getdescribeenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnvironmentDescriptionsMessage](#schemaenvironmentdescriptionsmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeEnvironments

<a id="opIdPOST_DescribeEnvironments"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeEnvironments?Action=DescribeEnvironments&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"VersionLabel":{},"EnvironmentIds":{},"EnvironmentNames":{},"IncludeDeleted":{},"IncludedDeletedBackTo":{},"MaxRecords":{},"NextToken":{}}'
```

`POST /#Action=DescribeEnvironments`

Returns descriptions for existing environments.

> Body parameter

```json
{
  "ApplicationName": {},
  "VersionLabel": {},
  "EnvironmentIds": {},
  "EnvironmentNames": {},
  "IncludeDeleted": {},
  "IncludedDeletedBackTo": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

<h3 id="postdescribeenvironments-parameters">Parameters</h3>

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
|body|body|[DescribeEnvironmentsMessage](#schemadescribeenvironmentsmessage)|false|none|
|» ApplicationName|body|object|false|none|
|» VersionLabel|body|object|false|none|
|» EnvironmentIds|body|object|false|none|
|» EnvironmentNames|body|object|false|none|
|» IncludeDeleted|body|object|false|none|
|» IncludedDeletedBackTo|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeEnvironments|
|Version|2010-12-01|

<h3 id="postdescribeenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnvironmentDescriptionsMessage](#schemaenvironmentdescriptionsmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeEvents

<a id="opIdGET_DescribeEvents"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeEvents?Action=DescribeEvents&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeEvents`

<p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>

<h3 id="getdescribeevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|false|If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those associated with this application.|
|VersionLabel|query|string|false|If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this application version.|
|TemplateName|query|string|false|If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that are associated with this environment configuration.|
|EnvironmentId|query|string|false|If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment.|
|EnvironmentName|query|string|false|If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment.|
|PlatformArn|query|string|false|The ARN of a custom platform version. If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this custom platform version.|
|RequestId|query|string|false|If specified, AWS Elastic Beanstalk restricts the described events to include only those associated with this request ID.|
|Severity|query|string|false|If specified, limits the events returned from this call to include only those with the specified severity or higher.|
|StartTime|query|string(date-time)|false|If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur on or after this time.|
|EndTime|query|string(date-time)|false| If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur up to, but not including, the <code>EndTime</code>. |
|MaxRecords|query|integer|false|Specifies the maximum number of events that can be returned, beginning with the most recent event.|
|NextToken|query|string|false|Pagination token. If specified, the events return the next batch of results.|
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
|Severity|TRACE|
|Severity|DEBUG|
|Severity|INFO|
|Severity|WARN|
|Severity|ERROR|
|Severity|FATAL|
|Action|DescribeEvents|
|Version|2010-12-01|

<h3 id="getdescribeevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EventDescriptionsMessage](#schemaeventdescriptionsmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeEvents

<a id="opIdPOST_DescribeEvents"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeEvents?Action=DescribeEvents&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"VersionLabel":{},"TemplateName":{},"EnvironmentId":{},"EnvironmentName":{},"PlatformArn":{},"RequestId":{},"Severity":{},"StartTime":{},"EndTime":{},"MaxRecords":{},"NextToken":{}}'
```

`POST /#Action=DescribeEvents`

<p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>

> Body parameter

```json
{
  "ApplicationName": {},
  "VersionLabel": {},
  "TemplateName": {},
  "EnvironmentId": {},
  "EnvironmentName": {},
  "PlatformArn": {},
  "RequestId": {},
  "Severity": {},
  "StartTime": {},
  "EndTime": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

<h3 id="postdescribeevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
|» ApplicationName|body|object|false|none|
|» VersionLabel|body|object|false|none|
|» TemplateName|body|object|false|none|
|» EnvironmentId|body|object|false|none|
|» EnvironmentName|body|object|false|none|
|» PlatformArn|body|object|false|none|
|» RequestId|body|object|false|none|
|» Severity|body|object|false|none|
|» StartTime|body|object|false|none|
|» EndTime|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeEvents|
|Version|2010-12-01|

<h3 id="postdescribeevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EventDescriptionsMessage](#schemaeventdescriptionsmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeInstancesHealth

<a id="opIdGET_DescribeInstancesHealth"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeInstancesHealth?Action=DescribeInstancesHealth&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeInstancesHealth`

Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.

<h3 id="getdescribeinstanceshealth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EnvironmentName|query|string|false|Specify the AWS Elastic Beanstalk environment by name.|
|EnvironmentId|query|string|false|Specify the AWS Elastic Beanstalk environment by ID.|
|AttributeNames|query|[[InstancesHealthAttribute](#schemainstanceshealthattribute)]|false|Specifies the response elements you wish to receive. To retrieve all attributes, set to <code>All</code>. If no attribute names are specified, returns a list of instances.|
|NextToken|query|string|false|Specify the pagination token returned by a previous call.|
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
|AttributeNames|HealthStatus|
|AttributeNames|Color|
|AttributeNames|Causes|
|AttributeNames|ApplicationMetrics|
|AttributeNames|RefreshedAt|
|AttributeNames|LaunchedAt|
|AttributeNames|System|
|AttributeNames|Deployment|
|AttributeNames|AvailabilityZone|
|AttributeNames|InstanceType|
|AttributeNames|All|
|Action|DescribeInstancesHealth|
|Version|2010-12-01|

<h3 id="getdescribeinstanceshealth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInstancesHealthResult](#schemadescribeinstanceshealthresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ElasticBeanstalkServiceException|[ElasticBeanstalkServiceException](#schemaelasticbeanstalkserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeInstancesHealth

<a id="opIdPOST_DescribeInstancesHealth"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribeInstancesHealth?Action=DescribeInstancesHealth&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EnvironmentName":{},"EnvironmentId":{},"AttributeNames":{},"NextToken":{}}'
```

`POST /#Action=DescribeInstancesHealth`

Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.

> Body parameter

```json
{
  "EnvironmentName": {},
  "EnvironmentId": {},
  "AttributeNames": {},
  "NextToken": {}
}
```

<h3 id="postdescribeinstanceshealth-parameters">Parameters</h3>

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
|body|body|[DescribeInstancesHealthRequest](#schemadescribeinstanceshealthrequest)|false|none|
|» EnvironmentName|body|object|false|none|
|» EnvironmentId|body|object|false|none|
|» AttributeNames|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeInstancesHealth|
|Version|2010-12-01|

<h3 id="postdescribeinstanceshealth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInstancesHealthResult](#schemadescribeinstanceshealthresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ElasticBeanstalkServiceException|[ElasticBeanstalkServiceException](#schemaelasticbeanstalkserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribePlatformVersion

<a id="opIdGET_DescribePlatformVersion"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribePlatformVersion?Action=DescribePlatformVersion&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribePlatformVersion`

<p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>

<h3 id="getdescribeplatformversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PlatformArn|query|string|false|The ARN of the platform version.|
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
|Action|DescribePlatformVersion|
|Version|2010-12-01|

<h3 id="getdescribeplatformversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePlatformVersionResult](#schemadescribeplatformversionresult)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|481|481|ElasticBeanstalkServiceException|[ElasticBeanstalkServiceException](#schemaelasticbeanstalkserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribePlatformVersion

<a id="opIdPOST_DescribePlatformVersion"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DescribePlatformVersion?Action=DescribePlatformVersion&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"PlatformArn":{}}'
```

`POST /#Action=DescribePlatformVersion`

<p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>

> Body parameter

```json
{
  "PlatformArn": {}
}
```

<h3 id="postdescribeplatformversion-parameters">Parameters</h3>

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
|body|body|[DescribePlatformVersionRequest](#schemadescribeplatformversionrequest)|false|none|
|» PlatformArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribePlatformVersion|
|Version|2010-12-01|

<h3 id="postdescribeplatformversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePlatformVersionResult](#schemadescribeplatformversionresult)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|481|481|ElasticBeanstalkServiceException|[ElasticBeanstalkServiceException](#schemaelasticbeanstalkserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DisassociateEnvironmentOperationsRole

<a id="opIdGET_DisassociateEnvironmentOperationsRole"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DisassociateEnvironmentOperationsRole?EnvironmentName=string&Action=DisassociateEnvironmentOperationsRole&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DisassociateEnvironmentOperationsRole`

Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.

<h3 id="getdisassociateenvironmentoperationsrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EnvironmentName|query|string|true|The name of the environment from which to disassociate the operations role.|
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
|Action|DisassociateEnvironmentOperationsRole|
|Version|2010-12-01|

<h3 id="getdisassociateenvironmentoperationsrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DisassociateEnvironmentOperationsRole

<a id="opIdPOST_DisassociateEnvironmentOperationsRole"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=DisassociateEnvironmentOperationsRole?Action=DisassociateEnvironmentOperationsRole&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EnvironmentName":{}}'
```

`POST /#Action=DisassociateEnvironmentOperationsRole`

Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.

> Body parameter

```json
{
  "EnvironmentName": {}
}
```

<h3 id="postdisassociateenvironmentoperationsrole-parameters">Parameters</h3>

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
|body|body|[DisassociateEnvironmentOperationsRoleMessage](#schemadisassociateenvironmentoperationsrolemessage)|false|none|
|» EnvironmentName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DisassociateEnvironmentOperationsRole|
|Version|2010-12-01|

<h3 id="postdisassociateenvironmentoperationsrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListAvailableSolutionStacks

<a id="opIdGET_ListAvailableSolutionStacks"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=ListAvailableSolutionStacks?Action=ListAvailableSolutionStacks&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListAvailableSolutionStacks`

Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.

<h3 id="getlistavailablesolutionstacks-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListAvailableSolutionStacks|
|Version|2010-12-01|

<h3 id="getlistavailablesolutionstacks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAvailableSolutionStacksResultMessage](#schemalistavailablesolutionstacksresultmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListAvailableSolutionStacks

<a id="opIdPOST_ListAvailableSolutionStacks"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=ListAvailableSolutionStacks?Action=ListAvailableSolutionStacks&Version=2010-12-01' \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /#Action=ListAvailableSolutionStacks`

Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.

<h3 id="postlistavailablesolutionstacks-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListAvailableSolutionStacks|
|Version|2010-12-01|

<h3 id="postlistavailablesolutionstacks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAvailableSolutionStacksResultMessage](#schemalistavailablesolutionstacksresultmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListPlatformBranches

<a id="opIdGET_ListPlatformBranches"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=ListPlatformBranches?Action=ListPlatformBranches&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListPlatformBranches`

<p>Lists the platform branches available for your account in an AWS Region. Provides summary information about each platform branch.</p> <p>For definitions of platform branch and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>

<h3 id="getlistplatformbranches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Filters|query|[[SearchFilter](#schemasearchfilter)]|false|<p>Criteria for restricting the resulting list of platform branches. The filter is evaluated as a logical conjunction (AND) of the separate <code>SearchFilter</code> terms.</p> <p>The following list shows valid attribute values for each of the <code>SearchFilter</code> terms. Most operators take a single value. The <code>in</code> and <code>not_in</code> operators can take multiple values.</p> <ul> <li> <p> <code>Attribute = BranchName</code>:</p> <ul> <li> <p> <code>Operator</code>: <code>=</code> \| <code>!=</code> \| <code>begins_with</code> \| <code>ends_with</code> \| <code>contains</code> \| <code>in</code> \| <code>not_in</code> </p> </li> </ul> </li> <li> <p> <code>Attribute = LifecycleState</code>:</p> <ul> <li> <p> <code>Operator</code>: <code>=</code> \| <code>!=</code> \| <code>in</code> \| <code>not_in</code> </p> </li> <li> <p> <code>Values</code>: <code>beta</code> \| <code>supported</code> \| <code>deprecated</code> \| <code>retired</code> </p> </li> </ul> </li> <li> <p> <code>Attribute = PlatformName</code>:</p> <ul> <li> <p> <code>Operator</code>: <code>=</code> \| <code>!=</code> \| <code>begins_with</code> \| <code>ends_with</code> \| <code>contains</code> \| <code>in</code> \| <code>not_in</code> </p> </li> </ul> </li> <li> <p> <code>Attribute = TierType</code>:</p> <ul> <li> <p> <code>Operator</code>: <code>=</code> \| <code>!=</code> </p> </li> <li> <p> <code>Values</code>: <code>WebServer/Standard</code> \| <code>Worker/SQS/HTTP</code> </p> </li> </ul> </li> </ul> <p>Array size: limited to 10 <code>SearchFilter</code> objects.</p> <p>Within each <code>SearchFilter</code> item, the <code>Values</code> array is limited to 10 items.</p>|
|MaxRecords|query|integer|false|The maximum number of platform branch values returned in one call.|
|NextToken|query|string|false|<p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>|
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
|Action|ListPlatformBranches|
|Version|2010-12-01|

<h3 id="getlistplatformbranches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPlatformBranchesResult](#schemalistplatformbranchesresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListPlatformBranches

<a id="opIdPOST_ListPlatformBranches"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=ListPlatformBranches?Action=ListPlatformBranches&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Filters":{},"MaxRecords":{},"NextToken":{}}'
```

`POST /#Action=ListPlatformBranches`

<p>Lists the platform branches available for your account in an AWS Region. Provides summary information about each platform branch.</p> <p>For definitions of platform branch and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>

> Body parameter

```json
{
  "Filters": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

<h3 id="postlistplatformbranches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListPlatformBranchesRequest](#schemalistplatformbranchesrequest)|false|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListPlatformBranches|
|Version|2010-12-01|

<h3 id="postlistplatformbranches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPlatformBranchesResult](#schemalistplatformbranchesresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListPlatformVersions

<a id="opIdGET_ListPlatformVersions"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=ListPlatformVersions?Action=ListPlatformVersions&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListPlatformVersions`

<p>Lists the platform versions available for your account in an AWS Region. Provides summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform version.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>

<h3 id="getlistplatformversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Filters|query|[[PlatformFilter](#schemaplatformfilter)]|false|Criteria for restricting the resulting list of platform versions. The filter is interpreted as a logical conjunction (AND) of the separate <code>PlatformFilter</code> terms.|
|MaxRecords|query|integer|false|The maximum number of platform version values returned in one call.|
|NextToken|query|string|false|<p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>|
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
|Action|ListPlatformVersions|
|Version|2010-12-01|

<h3 id="getlistplatformversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPlatformVersionsResult](#schemalistplatformversionsresult)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|481|481|ElasticBeanstalkServiceException|[ElasticBeanstalkServiceException](#schemaelasticbeanstalkserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListPlatformVersions

<a id="opIdPOST_ListPlatformVersions"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=ListPlatformVersions?Action=ListPlatformVersions&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Filters":{},"MaxRecords":{},"NextToken":{}}'
```

`POST /#Action=ListPlatformVersions`

<p>Lists the platform versions available for your account in an AWS Region. Provides summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform version.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>

> Body parameter

```json
{
  "Filters": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

<h3 id="postlistplatformversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListPlatformVersionsRequest](#schemalistplatformversionsrequest)|false|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListPlatformVersions|
|Version|2010-12-01|

<h3 id="postlistplatformversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPlatformVersionsResult](#schemalistplatformversionsresult)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|481|481|ElasticBeanstalkServiceException|[ElasticBeanstalkServiceException](#schemaelasticbeanstalkserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListTagsForResource

<a id="opIdGET_ListTagsForResource"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=ListTagsForResource?ResourceArn=string&Action=ListTagsForResource&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListTagsForResource`

<p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>

<h3 id="getlisttagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|query|string|true|<p>The Amazon Resource Name (ARN) of the resouce for which a tag list is requested.</p> <p>Must be the ARN of an Elastic Beanstalk resource.</p>|
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
|Version|2010-12-01|

<h3 id="getlisttagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceTagsDescriptionMessage](#schemaresourcetagsdescriptionmessage)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceTypeNotSupportedException|[ResourceTypeNotSupportedException](#schemaresourcetypenotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListTagsForResource

<a id="opIdPOST_ListTagsForResource"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=ListTagsForResource?Action=ListTagsForResource&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceArn":{}}'
```

`POST /#Action=ListTagsForResource`

<p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>

> Body parameter

```json
{
  "ResourceArn": {}
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
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListTagsForResource|
|Version|2010-12-01|

<h3 id="postlisttagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceTagsDescriptionMessage](#schemaresourcetagsdescriptionmessage)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceTypeNotSupportedException|[ResourceTypeNotSupportedException](#schemaresourcetypenotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RebuildEnvironment

<a id="opIdGET_RebuildEnvironment"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=RebuildEnvironment?Action=RebuildEnvironment&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RebuildEnvironment`

Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.

<h3 id="getrebuildenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EnvironmentId|query|string|false|<p>The ID of the environment to rebuild.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>|
|EnvironmentName|query|string|false|<p>The name of the environment to rebuild.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>|
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
|Action|RebuildEnvironment|
|Version|2010-12-01|

<h3 id="getrebuildenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RebuildEnvironment

<a id="opIdPOST_RebuildEnvironment"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=RebuildEnvironment?Action=RebuildEnvironment&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EnvironmentId":{},"EnvironmentName":{}}'
```

`POST /#Action=RebuildEnvironment`

Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.

> Body parameter

```json
{
  "EnvironmentId": {},
  "EnvironmentName": {}
}
```

<h3 id="postrebuildenvironment-parameters">Parameters</h3>

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
|body|body|[RebuildEnvironmentMessage](#schemarebuildenvironmentmessage)|false|none|
|» EnvironmentId|body|object|false|none|
|» EnvironmentName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RebuildEnvironment|
|Version|2010-12-01|

<h3 id="postrebuildenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RequestEnvironmentInfo

<a id="opIdGET_RequestEnvironmentInfo"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=RequestEnvironmentInfo?InfoType=tail&Action=RequestEnvironmentInfo&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RequestEnvironmentInfo`

<p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>

<h3 id="getrequestenvironmentinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EnvironmentId|query|string|false|<p>The ID of the environment of the requested data.</p> <p>If no such environment is found, <code>RequestEnvironmentInfo</code> returns an <code>InvalidParameterValue</code> error. </p> <p>Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>|
|EnvironmentName|query|string|false|<p>The name of the environment of the requested data.</p> <p>If no such environment is found, <code>RequestEnvironmentInfo</code> returns an <code>InvalidParameterValue</code> error. </p> <p>Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>|
|InfoType|query|string|true|The type of information to request.|
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
|InfoType|tail|
|InfoType|bundle|
|Action|RequestEnvironmentInfo|
|Version|2010-12-01|

<h3 id="getrequestenvironmentinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RequestEnvironmentInfo

<a id="opIdPOST_RequestEnvironmentInfo"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=RequestEnvironmentInfo?Action=RequestEnvironmentInfo&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EnvironmentId":{},"EnvironmentName":{},"InfoType":{}}'
```

`POST /#Action=RequestEnvironmentInfo`

<p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>

> Body parameter

```json
{
  "EnvironmentId": {},
  "EnvironmentName": {},
  "InfoType": {}
}
```

<h3 id="postrequestenvironmentinfo-parameters">Parameters</h3>

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
|body|body|[RequestEnvironmentInfoMessage](#schemarequestenvironmentinfomessage)|false|none|
|» EnvironmentId|body|object|false|none|
|» EnvironmentName|body|object|false|none|
|» InfoType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RequestEnvironmentInfo|
|Version|2010-12-01|

<h3 id="postrequestenvironmentinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RestartAppServer

<a id="opIdGET_RestartAppServer"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=RestartAppServer?Action=RestartAppServer&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RestartAppServer`

Causes the environment to restart the application container server running on each Amazon EC2 instance.

<h3 id="getrestartappserver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EnvironmentId|query|string|false|<p>The ID of the environment to restart the server for.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>|
|EnvironmentName|query|string|false|<p>The name of the environment to restart the server for.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>|
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
|Action|RestartAppServer|
|Version|2010-12-01|

<h3 id="getrestartappserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RestartAppServer

<a id="opIdPOST_RestartAppServer"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=RestartAppServer?Action=RestartAppServer&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EnvironmentId":{},"EnvironmentName":{}}'
```

`POST /#Action=RestartAppServer`

Causes the environment to restart the application container server running on each Amazon EC2 instance.

> Body parameter

```json
{
  "EnvironmentId": {},
  "EnvironmentName": {}
}
```

<h3 id="postrestartappserver-parameters">Parameters</h3>

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
|body|body|[RestartAppServerMessage](#schemarestartappservermessage)|false|none|
|» EnvironmentId|body|object|false|none|
|» EnvironmentName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RestartAppServer|
|Version|2010-12-01|

<h3 id="postrestartappserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RetrieveEnvironmentInfo

<a id="opIdGET_RetrieveEnvironmentInfo"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=RetrieveEnvironmentInfo?InfoType=tail&Action=RetrieveEnvironmentInfo&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RetrieveEnvironmentInfo`

<p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>

<h3 id="getretrieveenvironmentinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EnvironmentId|query|string|false|<p>The ID of the data's environment.</p> <p>If no such environment is found, returns an <code>InvalidParameterValue</code> error.</p> <p>Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error.</p>|
|EnvironmentName|query|string|false|<p>The name of the data's environment.</p> <p> If no such environment is found, returns an <code>InvalidParameterValue</code> error. </p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>|
|InfoType|query|string|true|The type of information to retrieve.|
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
|InfoType|tail|
|InfoType|bundle|
|Action|RetrieveEnvironmentInfo|
|Version|2010-12-01|

<h3 id="getretrieveenvironmentinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RetrieveEnvironmentInfoResultMessage](#schemaretrieveenvironmentinforesultmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RetrieveEnvironmentInfo

<a id="opIdPOST_RetrieveEnvironmentInfo"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=RetrieveEnvironmentInfo?Action=RetrieveEnvironmentInfo&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EnvironmentId":{},"EnvironmentName":{},"InfoType":{}}'
```

`POST /#Action=RetrieveEnvironmentInfo`

<p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>

> Body parameter

```json
{
  "EnvironmentId": {},
  "EnvironmentName": {},
  "InfoType": {}
}
```

<h3 id="postretrieveenvironmentinfo-parameters">Parameters</h3>

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
|body|body|[RetrieveEnvironmentInfoMessage](#schemaretrieveenvironmentinfomessage)|false|none|
|» EnvironmentId|body|object|false|none|
|» EnvironmentName|body|object|false|none|
|» InfoType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RetrieveEnvironmentInfo|
|Version|2010-12-01|

<h3 id="postretrieveenvironmentinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RetrieveEnvironmentInfoResultMessage](#schemaretrieveenvironmentinforesultmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SwapEnvironmentCNAMEs

<a id="opIdGET_SwapEnvironmentCNAMEs"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=SwapEnvironmentCNAMEs?Action=SwapEnvironmentCNAMEs&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SwapEnvironmentCNAMEs`

Swaps the CNAMEs of two environments.

<h3 id="getswapenvironmentcnames-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceEnvironmentId|query|string|false|<p>The ID of the source environment.</p> <p> Condition: You must specify at least the <code>SourceEnvironmentID</code> or the <code>SourceEnvironmentName</code>. You may also specify both. If you specify the <code>SourceEnvironmentId</code>, you must specify the <code>DestinationEnvironmentId</code>. </p>|
|SourceEnvironmentName|query|string|false|<p>The name of the source environment.</p> <p> Condition: You must specify at least the <code>SourceEnvironmentID</code> or the <code>SourceEnvironmentName</code>. You may also specify both. If you specify the <code>SourceEnvironmentName</code>, you must specify the <code>DestinationEnvironmentName</code>. </p>|
|DestinationEnvironmentId|query|string|false|<p>The ID of the destination environment.</p> <p> Condition: You must specify at least the <code>DestinationEnvironmentID</code> or the <code>DestinationEnvironmentName</code>. You may also specify both. You must specify the <code>SourceEnvironmentId</code> with the <code>DestinationEnvironmentId</code>. </p>|
|DestinationEnvironmentName|query|string|false|<p>The name of the destination environment.</p> <p> Condition: You must specify at least the <code>DestinationEnvironmentID</code> or the <code>DestinationEnvironmentName</code>. You may also specify both. You must specify the <code>SourceEnvironmentName</code> with the <code>DestinationEnvironmentName</code>. </p>|
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
|Action|SwapEnvironmentCNAMEs|
|Version|2010-12-01|

<h3 id="getswapenvironmentcnames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SwapEnvironmentCNAMEs

<a id="opIdPOST_SwapEnvironmentCNAMEs"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=SwapEnvironmentCNAMEs?Action=SwapEnvironmentCNAMEs&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SourceEnvironmentId":{},"SourceEnvironmentName":{},"DestinationEnvironmentId":{},"DestinationEnvironmentName":{}}'
```

`POST /#Action=SwapEnvironmentCNAMEs`

Swaps the CNAMEs of two environments.

> Body parameter

```json
{
  "SourceEnvironmentId": {},
  "SourceEnvironmentName": {},
  "DestinationEnvironmentId": {},
  "DestinationEnvironmentName": {}
}
```

<h3 id="postswapenvironmentcnames-parameters">Parameters</h3>

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
|body|body|[SwapEnvironmentCNAMEsMessage](#schemaswapenvironmentcnamesmessage)|false|none|
|» SourceEnvironmentId|body|object|false|none|
|» SourceEnvironmentName|body|object|false|none|
|» DestinationEnvironmentId|body|object|false|none|
|» DestinationEnvironmentName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SwapEnvironmentCNAMEs|
|Version|2010-12-01|

<h3 id="postswapenvironmentcnames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_TerminateEnvironment

<a id="opIdGET_TerminateEnvironment"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=TerminateEnvironment?Action=TerminateEnvironment&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=TerminateEnvironment`

Terminates the specified environment.

<h3 id="getterminateenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EnvironmentId|query|string|false|<p>The ID of the environment to terminate.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>|
|EnvironmentName|query|string|false|<p>The name of the environment to terminate.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>|
|TerminateResources|query|boolean|false|<p>Indicates whether the associated AWS resources should shut down when the environment is terminated:</p> <ul> <li> <p> <code>true</code>: The specified environment as well as the associated AWS resources, such as Auto Scaling group and LoadBalancer, are terminated.</p> </li> <li> <p> <code>false</code>: AWS Elastic Beanstalk resource management is removed from the environment, but the AWS resources continue to operate.</p> </li> </ul> <p> For more information, see the <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/ug/"> AWS Elastic Beanstalk User Guide. </a> </p> <p> Default: <code>true</code> </p> <p> Valid Values: <code>true</code> \| <code>false</code> </p>|
|ForceTerminate|query|boolean|false|Terminates the target environment even if another environment in the same group is dependent on it.|
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
|Action|TerminateEnvironment|
|Version|2010-12-01|

<h3 id="getterminateenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnvironmentDescription](#schemaenvironmentdescription)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_TerminateEnvironment

<a id="opIdPOST_TerminateEnvironment"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=TerminateEnvironment?Action=TerminateEnvironment&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EnvironmentId":{},"EnvironmentName":{},"TerminateResources":{},"ForceTerminate":{}}'
```

`POST /#Action=TerminateEnvironment`

Terminates the specified environment.

> Body parameter

```json
{
  "EnvironmentId": {},
  "EnvironmentName": {},
  "TerminateResources": {},
  "ForceTerminate": {}
}
```

<h3 id="postterminateenvironment-parameters">Parameters</h3>

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
|body|body|[TerminateEnvironmentMessage](#schematerminateenvironmentmessage)|false|none|
|» EnvironmentId|body|object|false|none|
|» EnvironmentName|body|object|false|none|
|» TerminateResources|body|object|false|none|
|» ForceTerminate|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|TerminateEnvironment|
|Version|2010-12-01|

<h3 id="postterminateenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnvironmentDescription](#schemaenvironmentdescription)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateApplication

<a id="opIdGET_UpdateApplication"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=UpdateApplication?ApplicationName=string&Action=UpdateApplication&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateApplication`

<p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>

<h3 id="getupdateapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|true|The name of the application to update. If no such application is found, <code>UpdateApplication</code> returns an <code>InvalidParameterValue</code> error. |
|Description|query|string|false|<p>A new description for the application.</p> <p>Default: If not specified, AWS Elastic Beanstalk does not update the description.</p>|
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
|Action|UpdateApplication|
|Version|2010-12-01|

<h3 id="getupdateapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplicationDescriptionMessage](#schemaapplicationdescriptionmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateApplication

<a id="opIdPOST_UpdateApplication"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=UpdateApplication?Action=UpdateApplication&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"Description":{}}'
```

`POST /#Action=UpdateApplication`

<p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>

> Body parameter

```json
{
  "ApplicationName": {},
  "Description": {}
}
```

<h3 id="postupdateapplication-parameters">Parameters</h3>

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
|body|body|[UpdateApplicationMessage](#schemaupdateapplicationmessage)|false|none|
|» ApplicationName|body|object|true|none|
|» Description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateApplication|
|Version|2010-12-01|

<h3 id="postupdateapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplicationDescriptionMessage](#schemaapplicationdescriptionmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateApplicationResourceLifecycle

<a id="opIdGET_UpdateApplicationResourceLifecycle"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=UpdateApplicationResourceLifecycle?ApplicationName=string&ServiceRole=%7B%7D&VersionLifecycleConfig=%7B%22MaxCountRule%22%3A%7B%22Enabled%22%3A%7B%7D%2C%22MaxCount%22%3A%7B%7D%2C%22DeleteSourceFromS3%22%3A%7B%7D%7D%2C%22MaxAgeRule%22%3A%7B%22Enabled%22%3A%7B%7D%2C%22MaxAgeInDays%22%3A%7B%7D%2C%22DeleteSourceFromS3%22%3A%7B%7D%7D%7D&Action=UpdateApplicationResourceLifecycle&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateApplicationResourceLifecycle`

Modifies lifecycle settings for an application.

<h3 id="getupdateapplicationresourcelifecycle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|true|The name of the application.|
|ResourceLifecycleConfig|query|object|true|The lifecycle configuration.|
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
|Action|UpdateApplicationResourceLifecycle|
|Version|2010-12-01|

<h3 id="getupdateapplicationresourcelifecycle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplicationResourceLifecycleDescriptionMessage](#schemaapplicationresourcelifecycledescriptionmessage)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateApplicationResourceLifecycle

<a id="opIdPOST_UpdateApplicationResourceLifecycle"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=UpdateApplicationResourceLifecycle?Action=UpdateApplicationResourceLifecycle&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"ResourceLifecycleConfig":{"ServiceRole":{},"VersionLifecycleConfig":{"MaxCountRule":{"Enabled":{},"MaxCount":{},"DeleteSourceFromS3":{}},"MaxAgeRule":{"Enabled":{},"MaxAgeInDays":{},"DeleteSourceFromS3":{}}}}}'
```

`POST /#Action=UpdateApplicationResourceLifecycle`

Modifies lifecycle settings for an application.

> Body parameter

```json
{
  "ApplicationName": {},
  "ResourceLifecycleConfig": {
    "ServiceRole": {},
    "VersionLifecycleConfig": {
      "MaxCountRule": {
        "Enabled": {},
        "MaxCount": {},
        "DeleteSourceFromS3": {}
      },
      "MaxAgeRule": {
        "Enabled": {},
        "MaxAgeInDays": {},
        "DeleteSourceFromS3": {}
      }
    }
  }
}
```

<h3 id="postupdateapplicationresourcelifecycle-parameters">Parameters</h3>

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
|body|body|[UpdateApplicationResourceLifecycleMessage](#schemaupdateapplicationresourcelifecyclemessage)|false|none|
|» ApplicationName|body|object|true|none|
|» ResourceLifecycleConfig|body|object|true|none|
|» » ServiceRole|body|object|false|none|
|» » VersionLifecycleConfig|body|object|false|none|
|» » » MaxCountRule|body|object|false|none|
|» » » » Enabled|body|object|true|none|
|» » » » MaxCount|body|object|false|none|
|» » » » DeleteSourceFromS3|body|object|false|none|
|» » » MaxAgeRule|body|object|false|none|
|» » » » Enabled|body|object|true|none|
|» » » » MaxAgeInDays|body|object|false|none|
|» » » » DeleteSourceFromS3|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateApplicationResourceLifecycle|
|Version|2010-12-01|

<h3 id="postupdateapplicationresourcelifecycle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplicationResourceLifecycleDescriptionMessage](#schemaapplicationresourcelifecycledescriptionmessage)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateApplicationVersion

<a id="opIdGET_UpdateApplicationVersion"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=UpdateApplicationVersion?ApplicationName=string&VersionLabel=string&Action=UpdateApplicationVersion&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateApplicationVersion`

<p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>

<h3 id="getupdateapplicationversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|true|<p>The name of the application associated with this version.</p> <p> If no application is found with this name, <code>UpdateApplication</code> returns an <code>InvalidParameterValue</code> error.</p>|
|VersionLabel|query|string|true|<p>The name of the version to update.</p> <p>If no application version is found with this label, <code>UpdateApplication</code> returns an <code>InvalidParameterValue</code> error. </p>|
|Description|query|string|false|A new description for this version.|
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
|Action|UpdateApplicationVersion|
|Version|2010-12-01|

<h3 id="getupdateapplicationversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplicationVersionDescriptionMessage](#schemaapplicationversiondescriptionmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateApplicationVersion

<a id="opIdPOST_UpdateApplicationVersion"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=UpdateApplicationVersion?Action=UpdateApplicationVersion&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"VersionLabel":{},"Description":{}}'
```

`POST /#Action=UpdateApplicationVersion`

<p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>

> Body parameter

```json
{
  "ApplicationName": {},
  "VersionLabel": {},
  "Description": {}
}
```

<h3 id="postupdateapplicationversion-parameters">Parameters</h3>

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
|body|body|[UpdateApplicationVersionMessage](#schemaupdateapplicationversionmessage)|false|none|
|» ApplicationName|body|object|true|none|
|» VersionLabel|body|object|true|none|
|» Description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateApplicationVersion|
|Version|2010-12-01|

<h3 id="postupdateapplicationversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplicationVersionDescriptionMessage](#schemaapplicationversiondescriptionmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateConfigurationTemplate

<a id="opIdGET_UpdateConfigurationTemplate"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=UpdateConfigurationTemplate?ApplicationName=string&TemplateName=string&Action=UpdateConfigurationTemplate&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateConfigurationTemplate`

<p>Updates the specified configuration template to have the specified properties or configuration option values.</p> <note> <p>If a property (for example, <code>ApplicationName</code>) is not provided, its value remains unchanged. To clear such properties, specify an empty string.</p> </note> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> </ul>

<h3 id="getupdateconfigurationtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|true|<p>The name of the application associated with the configuration template to update.</p> <p> If no application is found with this name, <code>UpdateConfigurationTemplate</code> returns an <code>InvalidParameterValue</code> error. </p>|
|TemplateName|query|string|true|<p>The name of the configuration template to update.</p> <p> If no configuration template is found with this name, <code>UpdateConfigurationTemplate</code> returns an <code>InvalidParameterValue</code> error. </p>|
|Description|query|string|false|A new description for the configuration.|
|OptionSettings|query|[[ConfigurationOptionSetting](#schemaconfigurationoptionsetting)]|false|A list of configuration option settings to update with the new specified option value.|
|OptionsToRemove|query|[[OptionSpecification](#schemaoptionspecification)]|false|<p>A list of configuration options to remove from the configuration set.</p> <p> Constraint: You can remove only <code>UserDefined</code> configuration options. </p>|
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
|Action|UpdateConfigurationTemplate|
|Version|2010-12-01|

<h3 id="getupdateconfigurationtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigurationSettingsDescription](#schemaconfigurationsettingsdescription)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|481|481|TooManyBucketsException|[TooManyBucketsException](#schematoomanybucketsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateConfigurationTemplate

<a id="opIdPOST_UpdateConfigurationTemplate"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=UpdateConfigurationTemplate?Action=UpdateConfigurationTemplate&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"TemplateName":{},"Description":{},"OptionSettings":{},"OptionsToRemove":{}}'
```

`POST /#Action=UpdateConfigurationTemplate`

<p>Updates the specified configuration template to have the specified properties or configuration option values.</p> <note> <p>If a property (for example, <code>ApplicationName</code>) is not provided, its value remains unchanged. To clear such properties, specify an empty string.</p> </note> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> </ul>

> Body parameter

```json
{
  "ApplicationName": {},
  "TemplateName": {},
  "Description": {},
  "OptionSettings": {},
  "OptionsToRemove": {}
}
```

<h3 id="postupdateconfigurationtemplate-parameters">Parameters</h3>

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
|body|body|[UpdateConfigurationTemplateMessage](#schemaupdateconfigurationtemplatemessage)|false|none|
|» ApplicationName|body|object|true|none|
|» TemplateName|body|object|true|none|
|» Description|body|object|false|none|
|» OptionSettings|body|object|false|none|
|» OptionsToRemove|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateConfigurationTemplate|
|Version|2010-12-01|

<h3 id="postupdateconfigurationtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigurationSettingsDescription](#schemaconfigurationsettingsdescription)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|481|481|TooManyBucketsException|[TooManyBucketsException](#schematoomanybucketsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateEnvironment

<a id="opIdGET_UpdateEnvironment"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=UpdateEnvironment?Action=UpdateEnvironment&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateEnvironment`

<p>Updates the environment description, deploys a new application version, updates the configuration settings to an entirely new configuration template, or updates select configuration option values in the running environment.</p> <p> Attempting to update both the release and configuration is not allowed and AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. </p> <p> When updating the configuration settings to a new template or individual settings, a draft configuration is created and <a>DescribeConfigurationSettings</a> for this environment returns two setting descriptions with different <code>DeploymentStatus</code> values. </p>

<h3 id="getupdateenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|false|The name of the application with which the environment is associated.|
|EnvironmentId|query|string|false|<p>The ID of the environment to update.</p> <p>If no environment with this ID exists, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error.</p> <p>Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>|
|EnvironmentName|query|string|false|<p>The name of the environment to update. If no environment with this name exists, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p> <p>Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>|
|GroupName|query|string|false|The name of the group to which the target environment belongs. Specify a group name only if the environment's name is specified in an environment manifest and not with the environment name or environment ID parameters. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.|
|Description|query|string|false|If this parameter is specified, AWS Elastic Beanstalk updates the description of this environment.|
|Tier|query|object|false|<p>This specifies the tier to use to update the environment.</p> <p>Condition: At this time, if you change the tier version, name, or type, AWS Elastic Beanstalk returns <code>InvalidParameterValue</code> error. </p>|
|VersionLabel|query|string|false|If this parameter is specified, AWS Elastic Beanstalk deploys the named application version to the environment. If no such application version is found, returns an <code>InvalidParameterValue</code> error. |
|TemplateName|query|string|false|If this parameter is specified, AWS Elastic Beanstalk deploys this configuration template to the environment. If no such configuration template is found, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. |
|SolutionStackName|query|string|false|This specifies the platform version that the environment will run after the environment is updated.|
|PlatformArn|query|string|false|The ARN of the platform, if used.|
|OptionSettings|query|[[ConfigurationOptionSetting](#schemaconfigurationoptionsetting)]|false|If specified, AWS Elastic Beanstalk updates the configuration set associated with the running environment and sets the specified configuration options to the requested value.|
|OptionsToRemove|query|[[OptionSpecification](#schemaoptionspecification)]|false|A list of custom user-defined configuration options to remove from the configuration set for this environment.|
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
|Action|UpdateEnvironment|
|Version|2010-12-01|

<h3 id="getupdateenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnvironmentDescription](#schemaenvironmentdescription)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|481|481|TooManyBucketsException|[TooManyBucketsException](#schematoomanybucketsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateEnvironment

<a id="opIdPOST_UpdateEnvironment"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=UpdateEnvironment?Action=UpdateEnvironment&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"EnvironmentId":{},"EnvironmentName":{},"GroupName":{},"Description":{},"Tier":{"Name":{},"Type":{},"Version":{}},"VersionLabel":{},"TemplateName":{},"SolutionStackName":{},"PlatformArn":{},"OptionSettings":{},"OptionsToRemove":{}}'
```

`POST /#Action=UpdateEnvironment`

<p>Updates the environment description, deploys a new application version, updates the configuration settings to an entirely new configuration template, or updates select configuration option values in the running environment.</p> <p> Attempting to update both the release and configuration is not allowed and AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. </p> <p> When updating the configuration settings to a new template or individual settings, a draft configuration is created and <a>DescribeConfigurationSettings</a> for this environment returns two setting descriptions with different <code>DeploymentStatus</code> values. </p>

> Body parameter

```json
{
  "ApplicationName": {},
  "EnvironmentId": {},
  "EnvironmentName": {},
  "GroupName": {},
  "Description": {},
  "Tier": {
    "Name": {},
    "Type": {},
    "Version": {}
  },
  "VersionLabel": {},
  "TemplateName": {},
  "SolutionStackName": {},
  "PlatformArn": {},
  "OptionSettings": {},
  "OptionsToRemove": {}
}
```

<h3 id="postupdateenvironment-parameters">Parameters</h3>

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
|body|body|[UpdateEnvironmentMessage](#schemaupdateenvironmentmessage)|false|none|
|» ApplicationName|body|object|false|none|
|» EnvironmentId|body|object|false|none|
|» EnvironmentName|body|object|false|none|
|» GroupName|body|object|false|none|
|» Description|body|object|false|none|
|» Tier|body|object|false|none|
|» » Name|body|object|false|none|
|» » Type|body|object|false|none|
|» » Version|body|object|false|none|
|» VersionLabel|body|object|false|none|
|» TemplateName|body|object|false|none|
|» SolutionStackName|body|object|false|none|
|» PlatformArn|body|object|false|none|
|» OptionSettings|body|object|false|none|
|» OptionsToRemove|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateEnvironment|
|Version|2010-12-01|

<h3 id="postupdateenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnvironmentDescription](#schemaenvironmentdescription)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|481|481|TooManyBucketsException|[TooManyBucketsException](#schematoomanybucketsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateTagsForResource

<a id="opIdGET_UpdateTagsForResource"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=UpdateTagsForResource?ResourceArn=string&Action=UpdateTagsForResource&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateTagsForResource`

<p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code> for tags to add or update, and <code>TagsToRemove</code>.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p> <p>If you create a custom IAM user policy to control permission to this operation, specify one of the following two virtual actions (or both) instead of the API operation name:</p> <dl> <dt>elasticbeanstalk:AddTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code> parameter.</p> </dd> <dt>elasticbeanstalk:RemoveTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code> parameter.</p> </dd> </dl> <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>

<h3 id="getupdatetagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|query|string|true|<p>The Amazon Resource Name (ARN) of the resouce to be updated.</p> <p>Must be the ARN of an Elastic Beanstalk resource.</p>|
|TagsToAdd|query|[[Tag](#schematag)]|false|<p>A list of tags to add or update. If a key of an existing tag is added, the tag's value is updated.</p> <p>Specify at least one of these parameters: <code>TagsToAdd</code>, <code>TagsToRemove</code>.</p>|
|TagsToRemove|query|[[TagKey](#schematagkey)]|false|<p>A list of tag keys to remove. If a tag key doesn't exist, it is silently ignored.</p> <p>Specify at least one of these parameters: <code>TagsToAdd</code>, <code>TagsToRemove</code>.</p>|
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
|Action|UpdateTagsForResource|
|Version|2010-12-01|

<h3 id="getupdatetagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|481|481|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|482|482|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ResourceTypeNotSupportedException|[ResourceTypeNotSupportedException](#schemaresourcetypenotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateTagsForResource

<a id="opIdPOST_UpdateTagsForResource"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=UpdateTagsForResource?Action=UpdateTagsForResource&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceArn":{},"TagsToAdd":{},"TagsToRemove":{}}'
```

`POST /#Action=UpdateTagsForResource`

<p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code> for tags to add or update, and <code>TagsToRemove</code>.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p> <p>If you create a custom IAM user policy to control permission to this operation, specify one of the following two virtual actions (or both) instead of the API operation name:</p> <dl> <dt>elasticbeanstalk:AddTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code> parameter.</p> </dd> <dt>elasticbeanstalk:RemoveTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code> parameter.</p> </dd> </dl> <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>

> Body parameter

```json
{
  "ResourceArn": {},
  "TagsToAdd": {},
  "TagsToRemove": {}
}
```

<h3 id="postupdatetagsforresource-parameters">Parameters</h3>

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
|body|body|[UpdateTagsForResourceMessage](#schemaupdatetagsforresourcemessage)|false|none|
|» ResourceArn|body|object|true|none|
|» TagsToAdd|body|object|false|none|
|» TagsToRemove|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateTagsForResource|
|Version|2010-12-01|

<h3 id="postupdatetagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|481|481|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|482|482|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ResourceTypeNotSupportedException|[ResourceTypeNotSupportedException](#schemaresourcetypenotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ValidateConfigurationSettings

<a id="opIdGET_ValidateConfigurationSettings"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=ValidateConfigurationSettings?ApplicationName=string&OptionSettings=%7B%22ResourceName%22%3A%7B%7D%2C%22Namespace%22%3A%7B%7D%2C%22OptionName%22%3A%7B%7D%2C%22Value%22%3A%7B%7D%7D&Action=ValidateConfigurationSettings&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ValidateConfigurationSettings`

<p>Takes a set of configuration settings and either a configuration template or environment, and determines whether those values are valid.</p> <p>This action returns a list of messages indicating any errors or warnings associated with the selection of option values.</p>

<h3 id="getvalidateconfigurationsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ApplicationName|query|string|true|The name of the application that the configuration template or environment belongs to.|
|TemplateName|query|string|false|<p>The name of the configuration template to validate the settings against.</p> <p>Condition: You cannot specify both this and an environment name.</p>|
|EnvironmentName|query|string|false|<p>The name of the environment to validate the settings against.</p> <p>Condition: You cannot specify both this and a configuration template name.</p>|
|OptionSettings|query|[[ConfigurationOptionSetting](#schemaconfigurationoptionsetting)]|true|A list of the options and desired values to evaluate.|
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
|Action|ValidateConfigurationSettings|
|Version|2010-12-01|

<h3 id="getvalidateconfigurationsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigurationSettingsValidationMessages](#schemaconfigurationsettingsvalidationmessages)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|481|481|TooManyBucketsException|[TooManyBucketsException](#schematoomanybucketsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ValidateConfigurationSettings

<a id="opIdPOST_ValidateConfigurationSettings"></a>

> Code samples

```bash
curl 'https://elasticbeanstalk.us-east-1.amazonaws.com/#Action=ValidateConfigurationSettings?Action=ValidateConfigurationSettings&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ApplicationName":{},"TemplateName":{},"EnvironmentName":{},"OptionSettings":{}}'
```

`POST /#Action=ValidateConfigurationSettings`

<p>Takes a set of configuration settings and either a configuration template or environment, and determines whether those values are valid.</p> <p>This action returns a list of messages indicating any errors or warnings associated with the selection of option values.</p>

> Body parameter

```json
{
  "ApplicationName": {},
  "TemplateName": {},
  "EnvironmentName": {},
  "OptionSettings": {}
}
```

<h3 id="postvalidateconfigurationsettings-parameters">Parameters</h3>

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
|body|body|[ValidateConfigurationSettingsMessage](#schemavalidateconfigurationsettingsmessage)|false|none|
|» ApplicationName|body|object|true|none|
|» TemplateName|body|object|false|none|
|» EnvironmentName|body|object|false|none|
|» OptionSettings|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ValidateConfigurationSettings|
|Version|2010-12-01|

<h3 id="postvalidateconfigurationsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigurationSettingsValidationMessages](#schemaconfigurationsettingsvalidationmessages)|
|480|480|InsufficientPrivilegesException|[InsufficientPrivilegesException](#schemainsufficientprivilegesexception)|
|481|481|TooManyBucketsException|[TooManyBucketsException](#schematoomanybucketsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_InsufficientPrivilegesException">InsufficientPrivilegesException</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientprivilegesexception"></a>
<a id="schema_InsufficientPrivilegesException"></a>
<a id="tocSinsufficientprivilegesexception"></a>
<a id="tocsinsufficientprivilegesexception"></a>

```json
null
```

<h2 id="tocS_ApplyEnvironmentManagedActionResult">ApplyEnvironmentManagedActionResult</h2>
<!-- backwards compatibility -->
<a id="schemaapplyenvironmentmanagedactionresult"></a>
<a id="schema_ApplyEnvironmentManagedActionResult"></a>
<a id="tocSapplyenvironmentmanagedactionresult"></a>
<a id="tocsapplyenvironmentmanagedactionresult"></a>

```json
{
  "ActionId": {},
  "ActionDescription": {},
  "ActionType": {},
  "Status": {}
}
```

The result message containing information about the managed action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionId|object|false|none|none|
|ActionDescription|object|false|none|none|
|ActionType|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_ElasticBeanstalkServiceException">ElasticBeanstalkServiceException</h2>
<!-- backwards compatibility -->
<a id="schemaelasticbeanstalkserviceexception"></a>
<a id="schema_ElasticBeanstalkServiceException"></a>
<a id="tocSelasticbeanstalkserviceexception"></a>
<a id="tocselasticbeanstalkserviceexception"></a>

```json
null
```

<h2 id="tocS_ManagedActionInvalidStateException">ManagedActionInvalidStateException</h2>
<!-- backwards compatibility -->
<a id="schemamanagedactioninvalidstateexception"></a>
<a id="schema_ManagedActionInvalidStateException"></a>
<a id="tocSmanagedactioninvalidstateexception"></a>
<a id="tocsmanagedactioninvalidstateexception"></a>

```json
null
```

<h2 id="tocS_CheckDNSAvailabilityResultMessage">CheckDNSAvailabilityResultMessage</h2>
<!-- backwards compatibility -->
<a id="schemacheckdnsavailabilityresultmessage"></a>
<a id="schema_CheckDNSAvailabilityResultMessage"></a>
<a id="tocScheckdnsavailabilityresultmessage"></a>
<a id="tocscheckdnsavailabilityresultmessage"></a>

```json
{
  "Available": true,
  "FullyQualifiedCNAME": "my-cname.us-west-2.elasticbeanstalk.com"
}
```

Indicates if the specified CNAME is available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Available|object|false|none|none|
|FullyQualifiedCNAME|object|false|none|none|

<h2 id="tocS_EnvironmentDescriptionsMessage">EnvironmentDescriptionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentdescriptionsmessage"></a>
<a id="schema_EnvironmentDescriptionsMessage"></a>
<a id="tocSenvironmentdescriptionsmessage"></a>
<a id="tocsenvironmentdescriptionsmessage"></a>

```json
{
  "Environments": [
    {
      "AbortableOperationInProgress": false,
      "ApplicationName": "my-app",
      "CNAME": "my-env.elasticbeanstalk.com",
      "DateCreated": "2015-08-07T20:48:49.599Z",
      "DateUpdated": "2015-08-12T18:16:55.019Z",
      "EndpointURL": "awseb-e-w-AWSEBLoa-1483140XB0Q4L-109QXY8121.us-west-2.elb.amazonaws.com",
      "EnvironmentId": "e-rpqsewtp2j",
      "EnvironmentName": "my-env",
      "Health": "Green",
      "SolutionStackName": "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8",
      "Status": "Ready",
      "Tier": {
        "Name": "WebServer",
        "Type": "Standard",
        "Version": " "
      },
      "VersionLabel": "7f58-stage-150812_025409"
    }
  ]
}
```

Result message containing a list of environment descriptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Environments|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_VersionLabel">VersionLabel</h2>
<!-- backwards compatibility -->
<a id="schemaversionlabel"></a>
<a id="schema_VersionLabel"></a>
<a id="tocSversionlabel"></a>
<a id="tocsversionlabel"></a>

```json
"string"
```

<h2 id="tocS_TooManyEnvironmentsException">TooManyEnvironmentsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyenvironmentsexception"></a>
<a id="schema_TooManyEnvironmentsException"></a>
<a id="tocStoomanyenvironmentsexception"></a>
<a id="tocstoomanyenvironmentsexception"></a>

```json
null
```

<h2 id="tocS_ApplicationDescriptionMessage">ApplicationDescriptionMessage</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationdescriptionmessage"></a>
<a id="schema_ApplicationDescriptionMessage"></a>
<a id="tocSapplicationdescriptionmessage"></a>
<a id="tocsapplicationdescriptionmessage"></a>

```json
{
  "Application": {
    "ApplicationName": "my-app",
    "ConfigurationTemplates": [],
    "DateCreated": "2015-08-13T19:15:50.449Z",
    "DateUpdated": "2015-08-20T22:34:56.195Z",
    "Description": "my Elastic Beanstalk application",
    "Versions": [
      "2fba-stage-150819_234450",
      "bf07-stage-150820_214945",
      "93f8",
      "fd7c-stage-150820_000431",
      "22a0-stage-150819_185942"
    ]
  }
}
```

Result message containing a single description of an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Application|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_ApplicationVersionLifecycleConfig">ApplicationVersionLifecycleConfig</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationversionlifecycleconfig"></a>
<a id="schema_ApplicationVersionLifecycleConfig"></a>
<a id="tocSapplicationversionlifecycleconfig"></a>
<a id="tocsapplicationversionlifecycleconfig"></a>

```json
{
  "MaxCountRule": {
    "Enabled": {},
    "MaxCount": {},
    "DeleteSourceFromS3": {}
  },
  "MaxAgeRule": {
    "Enabled": {},
    "MaxAgeInDays": {},
    "DeleteSourceFromS3": {}
  }
}
```

<p>The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.</p> <p>When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxCountRule|object|false|none|none|
|MaxAgeRule|object|false|none|none|

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

Describes a tag applied to a resource in an environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_TooManyApplicationsException">TooManyApplicationsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyapplicationsexception"></a>
<a id="schema_TooManyApplicationsException"></a>
<a id="tocStoomanyapplicationsexception"></a>
<a id="tocstoomanyapplicationsexception"></a>

```json
null
```

<h2 id="tocS_ApplicationVersionDescriptionMessage">ApplicationVersionDescriptionMessage</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationversiondescriptionmessage"></a>
<a id="schema_ApplicationVersionDescriptionMessage"></a>
<a id="tocSapplicationversiondescriptionmessage"></a>
<a id="tocsapplicationversiondescriptionmessage"></a>

```json
{
  "ApplicationVersion": {
    "ApplicationName": "my-app",
    "DateCreated": "2015-08-19T18:59:17.646Z",
    "DateUpdated": "2015-08-20T22:53:28.871Z",
    "Description": "new description",
    "SourceBundle": {
      "S3Bucket": "elasticbeanstalk-us-west-2-0123456789012",
      "S3Key": "my-app/22a0-stage-150819_185942.war"
    },
    "VersionLabel": "22a0-stage-150819_185942"
  }
}
```

Result message wrapping a single description of an application version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationVersion|object|false|none|none|

<h2 id="tocS_SourceType">SourceType</h2>
<!-- backwards compatibility -->
<a id="schemasourcetype"></a>
<a id="schema_SourceType"></a>
<a id="tocSsourcetype"></a>
<a id="tocssourcetype"></a>

```json
"Git"
```

<h2 id="tocS_SourceRepository">SourceRepository</h2>
<!-- backwards compatibility -->
<a id="schemasourcerepository"></a>
<a id="schema_SourceRepository"></a>
<a id="tocSsourcerepository"></a>
<a id="tocssourcerepository"></a>

```json
"CodeCommit"
```

<h2 id="tocS_SourceLocation">SourceLocation</h2>
<!-- backwards compatibility -->
<a id="schemasourcelocation"></a>
<a id="schema_SourceLocation"></a>
<a id="tocSsourcelocation"></a>
<a id="tocssourcelocation"></a>

```json
"string"
```

<h2 id="tocS_S3Bucket">S3Bucket</h2>
<!-- backwards compatibility -->
<a id="schemas3bucket"></a>
<a id="schema_S3Bucket"></a>
<a id="tocSs3bucket"></a>
<a id="tocss3bucket"></a>

```json
"string"
```

<h2 id="tocS_S3Key">S3Key</h2>
<!-- backwards compatibility -->
<a id="schemas3key"></a>
<a id="schema_S3Key"></a>
<a id="tocSs3key"></a>
<a id="tocss3key"></a>

```json
"string"
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

<h2 id="tocS_ComputeType">ComputeType</h2>
<!-- backwards compatibility -->
<a id="schemacomputetype"></a>
<a id="schema_ComputeType"></a>
<a id="tocScomputetype"></a>
<a id="tocscomputetype"></a>

```json
"BUILD_GENERAL1_SMALL"
```

<h2 id="tocS_BoxedInt">BoxedInt</h2>
<!-- backwards compatibility -->
<a id="schemaboxedint"></a>
<a id="schema_BoxedInt"></a>
<a id="tocSboxedint"></a>
<a id="tocsboxedint"></a>

```json
0
```

<h2 id="tocS_TooManyApplicationVersionsException">TooManyApplicationVersionsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyapplicationversionsexception"></a>
<a id="schema_TooManyApplicationVersionsException"></a>
<a id="tocStoomanyapplicationversionsexception"></a>
<a id="tocstoomanyapplicationversionsexception"></a>

```json
null
```

<h2 id="tocS_S3LocationNotInServiceRegionException">S3LocationNotInServiceRegionException</h2>
<!-- backwards compatibility -->
<a id="schemas3locationnotinserviceregionexception"></a>
<a id="schema_S3LocationNotInServiceRegionException"></a>
<a id="tocSs3locationnotinserviceregionexception"></a>
<a id="tocss3locationnotinserviceregionexception"></a>

```json
null
```

<h2 id="tocS_CodeBuildNotInServiceRegionException">CodeBuildNotInServiceRegionException</h2>
<!-- backwards compatibility -->
<a id="schemacodebuildnotinserviceregionexception"></a>
<a id="schema_CodeBuildNotInServiceRegionException"></a>
<a id="tocScodebuildnotinserviceregionexception"></a>
<a id="tocscodebuildnotinserviceregionexception"></a>

```json
null
```

<h2 id="tocS_ConfigurationSettingsDescription">ConfigurationSettingsDescription</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsettingsdescription"></a>
<a id="schema_ConfigurationSettingsDescription"></a>
<a id="tocSconfigurationsettingsdescription"></a>
<a id="tocsconfigurationsettingsdescription"></a>

```json
{
  "ApplicationName": "my-app",
  "DateCreated": "2015-08-20T22:39:31Z",
  "DateUpdated": "2015-08-20T22:43:11Z",
  "SolutionStackName": "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8",
  "TemplateName": "my-template"
}
```

Describes the settings for a configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SolutionStackName|object|false|none|none|
|PlatformArn|object|false|none|none|
|ApplicationName|object|false|none|none|
|TemplateName|object|false|none|none|
|Description|object|false|none|none|
|EnvironmentName|object|false|none|none|
|DeploymentStatus|object|false|none|none|
|DateCreated|object|false|none|none|
|DateUpdated|object|false|none|none|
|OptionSettings|object|false|none|none|

<h2 id="tocS_ApplicationName">ApplicationName</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationname"></a>
<a id="schema_ApplicationName"></a>
<a id="tocSapplicationname"></a>
<a id="tocsapplicationname"></a>

```json
"string"
```

<h2 id="tocS_ConfigurationTemplateName">ConfigurationTemplateName</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationtemplatename"></a>
<a id="schema_ConfigurationTemplateName"></a>
<a id="tocSconfigurationtemplatename"></a>
<a id="tocsconfigurationtemplatename"></a>

```json
"string"
```

<h2 id="tocS_ConfigurationOptionSetting">ConfigurationOptionSetting</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationoptionsetting"></a>
<a id="schema_ConfigurationOptionSetting"></a>
<a id="tocSconfigurationoptionsetting"></a>
<a id="tocsconfigurationoptionsetting"></a>

```json
{
  "ResourceName": {},
  "Namespace": {},
  "OptionName": {},
  "Value": {}
}
```

A specification identifying an individual configuration option along with its current value. For a list of possible namespaces and option values, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html">Option Values</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceName|object|false|none|none|
|Namespace|object|false|none|none|
|OptionName|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_TooManyBucketsException">TooManyBucketsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanybucketsexception"></a>
<a id="schema_TooManyBucketsException"></a>
<a id="tocStoomanybucketsexception"></a>
<a id="tocstoomanybucketsexception"></a>

```json
null
```

<h2 id="tocS_TooManyConfigurationTemplatesException">TooManyConfigurationTemplatesException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyconfigurationtemplatesexception"></a>
<a id="schema_TooManyConfigurationTemplatesException"></a>
<a id="tocStoomanyconfigurationtemplatesexception"></a>
<a id="tocstoomanyconfigurationtemplatesexception"></a>

```json
null
```

<h2 id="tocS_EnvironmentDescription">EnvironmentDescription</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentdescription"></a>
<a id="schema_EnvironmentDescription"></a>
<a id="tocSenvironmentdescription"></a>
<a id="tocsenvironmentdescription"></a>

```json
{
  "AbortableOperationInProgress": true,
  "ApplicationName": "my-app",
  "CNAME": "my-env.elasticbeanstalk.com",
  "DateCreated": "2015-08-07T20:48:49.599Z",
  "DateUpdated": "2015-08-12T18:15:23.804Z",
  "EndpointURL": "awseb-e-w-AWSEBLoa-14XB83101Q4L-104QXY80921.sa-east-1.elb.amazonaws.com",
  "EnvironmentId": "e-wtp2rpqsej",
  "EnvironmentName": "my-env",
  "Health": "Grey",
  "SolutionStackName": "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8",
  "Status": "Updating",
  "Tier": {
    "Name": "WebServer",
    "Type": "Standard",
    "Version": " "
  },
  "VersionLabel": "7f58-stage-150812_025409"
}
```

Describes the properties of an environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnvironmentName|object|false|none|none|
|EnvironmentId|object|false|none|none|
|ApplicationName|object|false|none|none|
|VersionLabel|object|false|none|none|
|SolutionStackName|object|false|none|none|
|PlatformArn|object|false|none|none|
|TemplateName|object|false|none|none|
|Description|object|false|none|none|
|EndpointURL|object|false|none|none|
|CNAME|object|false|none|none|
|DateCreated|object|false|none|none|
|DateUpdated|object|false|none|none|
|Status|object|false|none|none|
|AbortableOperationInProgress|object|false|none|none|
|Health|object|false|none|none|
|HealthStatus|object|false|none|none|
|Resources|object|false|none|none|
|Tier|object|false|none|none|
|EnvironmentLinks|object|false|none|none|
|EnvironmentArn|object|false|none|none|
|OperationsRole|object|false|none|none|

<h2 id="tocS_OptionSpecification">OptionSpecification</h2>
<!-- backwards compatibility -->
<a id="schemaoptionspecification"></a>
<a id="schema_OptionSpecification"></a>
<a id="tocSoptionspecification"></a>
<a id="tocsoptionspecification"></a>

```json
{
  "ResourceName": {},
  "Namespace": {},
  "OptionName": {}
}
```

A specification identifying an individual configuration option.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceName|object|false|none|none|
|Namespace|object|false|none|none|
|OptionName|object|false|none|none|

<h2 id="tocS_CreatePlatformVersionResult">CreatePlatformVersionResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateplatformversionresult"></a>
<a id="schema_CreatePlatformVersionResult"></a>
<a id="tocScreateplatformversionresult"></a>
<a id="tocscreateplatformversionresult"></a>

```json
{
  "PlatformSummary": {
    "PlatformArn": {},
    "PlatformOwner": {},
    "PlatformStatus": {},
    "PlatformCategory": {},
    "OperatingSystemName": {},
    "OperatingSystemVersion": {},
    "SupportedTierList": {},
    "SupportedAddonList": {},
    "PlatformLifecycleState": {},
    "PlatformVersion": {},
    "PlatformBranchName": {},
    "PlatformBranchLifecycleState": {}
  },
  "Builder": {
    "ARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlatformSummary|object|false|none|none|
|Builder|object|false|none|none|

<h2 id="tocS_TooManyPlatformsException">TooManyPlatformsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyplatformsexception"></a>
<a id="schema_TooManyPlatformsException"></a>
<a id="tocStoomanyplatformsexception"></a>
<a id="tocstoomanyplatformsexception"></a>

```json
null
```

<h2 id="tocS_CreateStorageLocationResultMessage">CreateStorageLocationResultMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreatestoragelocationresultmessage"></a>
<a id="schema_CreateStorageLocationResultMessage"></a>
<a id="tocScreatestoragelocationresultmessage"></a>
<a id="tocscreatestoragelocationresultmessage"></a>

```json
{
  "S3Bucket": "elasticbeanstalk-us-west-2-0123456789012"
}
```

Results of a <a>CreateStorageLocationResult</a> call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Bucket|object|false|none|none|

<h2 id="tocS_S3SubscriptionRequiredException">S3SubscriptionRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemas3subscriptionrequiredexception"></a>
<a id="schema_S3SubscriptionRequiredException"></a>
<a id="tocSs3subscriptionrequiredexception"></a>
<a id="tocss3subscriptionrequiredexception"></a>

```json
null
```

<h2 id="tocS_OperationInProgressException">OperationInProgressException</h2>
<!-- backwards compatibility -->
<a id="schemaoperationinprogressexception"></a>
<a id="schema_OperationInProgressException"></a>
<a id="tocSoperationinprogressexception"></a>
<a id="tocsoperationinprogressexception"></a>

```json
null
```

<h2 id="tocS_SourceBundleDeletionException">SourceBundleDeletionException</h2>
<!-- backwards compatibility -->
<a id="schemasourcebundledeletionexception"></a>
<a id="schema_SourceBundleDeletionException"></a>
<a id="tocSsourcebundledeletionexception"></a>
<a id="tocssourcebundledeletionexception"></a>

```json
null
```

<h2 id="tocS_DeletePlatformVersionResult">DeletePlatformVersionResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteplatformversionresult"></a>
<a id="schema_DeletePlatformVersionResult"></a>
<a id="tocSdeleteplatformversionresult"></a>
<a id="tocsdeleteplatformversionresult"></a>

```json
{
  "PlatformSummary": {
    "PlatformArn": {},
    "PlatformOwner": {},
    "PlatformStatus": {},
    "PlatformCategory": {},
    "OperatingSystemName": {},
    "OperatingSystemVersion": {},
    "SupportedTierList": {},
    "SupportedAddonList": {},
    "PlatformLifecycleState": {},
    "PlatformVersion": {},
    "PlatformBranchName": {},
    "PlatformBranchLifecycleState": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlatformSummary|object|false|none|none|

<h2 id="tocS_PlatformVersionStillReferencedException">PlatformVersionStillReferencedException</h2>
<!-- backwards compatibility -->
<a id="schemaplatformversionstillreferencedexception"></a>
<a id="schema_PlatformVersionStillReferencedException"></a>
<a id="tocSplatformversionstillreferencedexception"></a>
<a id="tocsplatformversionstillreferencedexception"></a>

```json
null
```

<h2 id="tocS_DescribeAccountAttributesResult">DescribeAccountAttributesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountattributesresult"></a>
<a id="schema_DescribeAccountAttributesResult"></a>
<a id="tocSdescribeaccountattributesresult"></a>
<a id="tocsdescribeaccountattributesresult"></a>

```json
{
  "ResourceQuotas": {
    "ApplicationQuota": {
      "Maximum": {}
    },
    "ApplicationVersionQuota": {
      "Maximum": {}
    },
    "EnvironmentQuota": {
      "Maximum": {}
    },
    "ConfigurationTemplateQuota": {
      "Maximum": {}
    },
    "CustomPlatformQuota": {
      "Maximum": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceQuotas|object|false|none|none|

<h2 id="tocS_ApplicationVersionDescriptionsMessage">ApplicationVersionDescriptionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationversiondescriptionsmessage"></a>
<a id="schema_ApplicationVersionDescriptionsMessage"></a>
<a id="tocSapplicationversiondescriptionsmessage"></a>
<a id="tocsapplicationversiondescriptionsmessage"></a>

```json
{
  "ApplicationVersions": [
    {
      "ApplicationName": "my-app",
      "DateCreated": "2015-07-23T01:32:26.079Z",
      "DateUpdated": "2015-07-23T01:32:26.079Z",
      "Description": "update cover page",
      "SourceBundle": {
        "S3Bucket": "elasticbeanstalk-us-west-2-015321684451",
        "S3Key": "my-app/5026-stage-150723_224258.war"
      },
      "VersionLabel": "v2"
    },
    {
      "ApplicationName": "my-app",
      "DateCreated": "2015-07-23T22:26:10.816Z",
      "DateUpdated": "2015-07-23T22:26:10.816Z",
      "Description": "initial version",
      "SourceBundle": {
        "S3Bucket": "elasticbeanstalk-us-west-2-015321684451",
        "S3Key": "my-app/5026-stage-150723_222618.war"
      },
      "VersionLabel": "v1"
    }
  ]
}
```

Result message wrapping a list of application version descriptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationVersions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ApplicationDescriptionsMessage">ApplicationDescriptionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationdescriptionsmessage"></a>
<a id="schema_ApplicationDescriptionsMessage"></a>
<a id="tocSapplicationdescriptionsmessage"></a>
<a id="tocsapplicationdescriptionsmessage"></a>

```json
{
  "Applications": [
    {
      "ApplicationName": "ruby",
      "ConfigurationTemplates": [],
      "DateCreated": "2015-08-13T21:05:44.376Z",
      "DateUpdated": "2015-08-13T21:05:44.376Z",
      "Versions": [
        "Sample Application"
      ]
    },
    {
      "ApplicationName": "pythonsample",
      "ConfigurationTemplates": [],
      "DateCreated": "2015-08-13T19:05:43.637Z",
      "DateUpdated": "2015-08-13T19:05:43.637Z",
      "Description": "Application created from the EB CLI using \"eb init\"",
      "Versions": [
        "Sample Application"
      ]
    },
    {
      "ApplicationName": "nodejs-example",
      "ConfigurationTemplates": [],
      "DateCreated": "2015-08-06T17:50:02.486Z",
      "DateUpdated": "2015-08-06T17:50:02.486Z",
      "Versions": [
        "add elasticache",
        "First Release"
      ]
    }
  ]
}
```

Result message containing a list of application descriptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Applications|object|false|none|none|

<h2 id="tocS_ConfigurationOptionsDescription">ConfigurationOptionsDescription</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationoptionsdescription"></a>
<a id="schema_ConfigurationOptionsDescription"></a>
<a id="tocSconfigurationoptionsdescription"></a>
<a id="tocsconfigurationoptionsdescription"></a>

```json
{
  "Options": [
    {
      "ChangeSeverity": "NoInterruption",
      "DefaultValue": "30",
      "MaxValue": 300,
      "MinValue": 5,
      "Name": "Interval",
      "Namespace": "aws:elb:healthcheck",
      "UserDefined": false,
      "ValueType": "Scalar"
    },
    {
      "ChangeSeverity": "NoInterruption",
      "DefaultValue": "2000000",
      "MinValue": 0,
      "Name": "LowerThreshold",
      "Namespace": "aws:autoscaling:trigger",
      "UserDefined": false,
      "ValueType": "Scalar"
    }
  ]
}
```

Describes the settings for a specified configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SolutionStackName|object|false|none|none|
|PlatformArn|object|false|none|none|
|Options|object|false|none|none|

<h2 id="tocS_ConfigurationSettingsDescriptions">ConfigurationSettingsDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsettingsdescriptions"></a>
<a id="schema_ConfigurationSettingsDescriptions"></a>
<a id="tocSconfigurationsettingsdescriptions"></a>
<a id="tocsconfigurationsettingsdescriptions"></a>

```json
{
  "ConfigurationSettings": [
    {
      "ApplicationName": "my-app",
      "DateCreated": "2015-08-13T19:16:25Z",
      "DateUpdated": "2015-08-13T23:30:07Z",
      "DeploymentStatus": "deployed",
      "Description": "Environment created from the EB CLI using \"eb create\"",
      "EnvironmentName": "my-env",
      "OptionSettings": [
        {
          "Namespace": "aws:autoscaling:asg",
          "OptionName": "Availability Zones",
          "ResourceName": "AWSEBAutoScalingGroup",
          "Value": "Any"
        },
        {
          "Namespace": "aws:autoscaling:asg",
          "OptionName": "Cooldown",
          "ResourceName": "AWSEBAutoScalingGroup",
          "Value": "360"
        },
        {
          "Namespace": "aws:elb:policies",
          "OptionName": "ConnectionDrainingTimeout",
          "ResourceName": "AWSEBLoadBalancer",
          "Value": "20"
        },
        {
          "Namespace": "aws:elb:policies",
          "OptionName": "ConnectionSettingIdleTimeout",
          "ResourceName": "AWSEBLoadBalancer",
          "Value": "60"
        }
      ],
      "SolutionStackName": "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8"
    }
  ]
}
```

The results from a request to change the configuration settings of an environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSettings|object|false|none|none|

<h2 id="tocS_DescribeEnvironmentHealthResult">DescribeEnvironmentHealthResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenvironmenthealthresult"></a>
<a id="schema_DescribeEnvironmentHealthResult"></a>
<a id="tocSdescribeenvironmenthealthresult"></a>
<a id="tocsdescribeenvironmenthealthresult"></a>

```json
{
  "ApplicationMetrics": {
    "Duration": 10,
    "Latency": {
      "P10": 0.001,
      "P50": 0.001,
      "P75": 0.002,
      "P85": 0.003,
      "P90": 0.003,
      "P95": 0.004,
      "P99": 0.004,
      "P999": 0.004
    },
    "RequestCount": 45,
    "StatusCodes": {
      "Status2xx": 45,
      "Status3xx": 0,
      "Status4xx": 0,
      "Status5xx": 0
    }
  },
  "Causes": [],
  "Color": "Green",
  "EnvironmentName": "my-env",
  "HealthStatus": "Ok",
  "InstancesHealth": {
    "Degraded": 0,
    "Info": 0,
    "NoData": 0,
    "Ok": 1,
    "Pending": 0,
    "Severe": 0,
    "Unknown": 0,
    "Warning": 0
  },
  "RefreshedAt": "2015-08-20T21:09:18Z"
}
```

Health details for an AWS Elastic Beanstalk environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnvironmentName|object|false|none|none|
|HealthStatus|object|false|none|none|
|Status|object|false|none|none|
|Color|object|false|none|none|
|Causes|object|false|none|none|
|ApplicationMetrics|object|false|none|none|
|InstancesHealth|object|false|none|none|
|RefreshedAt|object|false|none|none|

<h2 id="tocS_EnvironmentHealthAttribute">EnvironmentHealthAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmenthealthattribute"></a>
<a id="schema_EnvironmentHealthAttribute"></a>
<a id="tocSenvironmenthealthattribute"></a>
<a id="tocsenvironmenthealthattribute"></a>

```json
"Status"
```

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_DescribeEnvironmentManagedActionHistoryResult">DescribeEnvironmentManagedActionHistoryResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenvironmentmanagedactionhistoryresult"></a>
<a id="schema_DescribeEnvironmentManagedActionHistoryResult"></a>
<a id="tocSdescribeenvironmentmanagedactionhistoryresult"></a>
<a id="tocsdescribeenvironmentmanagedactionhistoryresult"></a>

```json
{
  "ManagedActionHistoryItems": {},
  "NextToken": {}
}
```

A result message containing a list of completed and failed managed actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManagedActionHistoryItems|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeEnvironmentManagedActionsResult">DescribeEnvironmentManagedActionsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenvironmentmanagedactionsresult"></a>
<a id="schema_DescribeEnvironmentManagedActionsResult"></a>
<a id="tocSdescribeenvironmentmanagedactionsresult"></a>
<a id="tocsdescribeenvironmentmanagedactionsresult"></a>

```json
{
  "ManagedActions": {}
}
```

The result message containing a list of managed actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManagedActions|object|false|none|none|

<h2 id="tocS_EnvironmentResourceDescriptionsMessage">EnvironmentResourceDescriptionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentresourcedescriptionsmessage"></a>
<a id="schema_EnvironmentResourceDescriptionsMessage"></a>
<a id="tocSenvironmentresourcedescriptionsmessage"></a>
<a id="tocsenvironmentresourcedescriptionsmessage"></a>

```json
{
  "EnvironmentResources": {
    "AutoScalingGroups": [
      {
        "Name": "awseb-e-qu3fyyjyjs-stack-AWSEBAutoScalingGroup-QSB2ZO88SXZT"
      }
    ],
    "EnvironmentName": "my-env",
    "Instances": [
      {
        "Id": "i-0c91c786"
      }
    ],
    "LaunchConfigurations": [
      {
        "Name": "awseb-e-qu3fyyjyjs-stack-AWSEBAutoScalingLaunchConfiguration-1UUVQIBC96TQ2"
      }
    ],
    "LoadBalancers": [
      {
        "Name": "awseb-e-q-AWSEBLoa-1EEPZ0K98BIF0"
      }
    ],
    "Queues": [],
    "Triggers": []
  }
}
```

Result message containing a list of environment resource descriptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnvironmentResources|object|false|none|none|

<h2 id="tocS_EnvironmentId">EnvironmentId</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentid"></a>
<a id="schema_EnvironmentId"></a>
<a id="tocSenvironmentid"></a>
<a id="tocsenvironmentid"></a>

```json
"string"
```

<h2 id="tocS_EnvironmentName">EnvironmentName</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentname"></a>
<a id="schema_EnvironmentName"></a>
<a id="tocSenvironmentname"></a>
<a id="tocsenvironmentname"></a>

```json
"string"
```

<h2 id="tocS_EventDescriptionsMessage">EventDescriptionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemaeventdescriptionsmessage"></a>
<a id="schema_EventDescriptionsMessage"></a>
<a id="tocSeventdescriptionsmessage"></a>
<a id="tocseventdescriptionsmessage"></a>

```json
{
  "Events": [
    {
      "ApplicationName": "my-app",
      "EnvironmentName": "my-env",
      "EventDate": "2015-08-20T07:06:53.535Z",
      "Message": "Environment health has transitioned from Info to Ok.",
      "Severity": "INFO"
    },
    {
      "ApplicationName": "my-app",
      "EnvironmentName": "my-env",
      "EventDate": "2015-08-20T07:06:02.049Z",
      "Message": "Environment update completed successfully.",
      "RequestId": "b7f3960b-4709-11e5-ba1e-07e16200da41",
      "Severity": "INFO"
    },
    {
      "ApplicationName": "my-app",
      "EnvironmentName": "my-env",
      "EventDate": "2015-08-13T19:16:27.561Z",
      "Message": "Using elasticbeanstalk-us-west-2-012445113685 as Amazon S3 storage bucket for environment data.",
      "RequestId": "ca8dfbf6-41ef-11e5-988b-651aa638f46b",
      "Severity": "INFO"
    },
    {
      "ApplicationName": "my-app",
      "EnvironmentName": "my-env",
      "EventDate": "2015-08-13T19:16:26.581Z",
      "Message": "createEnvironment is starting.",
      "RequestId": "cdfba8f6-41ef-11e5-988b-65638f41aa6b",
      "Severity": "INFO"
    }
  ]
}
```

Result message wrapping a list of event descriptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Events|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeInstancesHealthResult">DescribeInstancesHealthResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstanceshealthresult"></a>
<a id="schema_DescribeInstancesHealthResult"></a>
<a id="tocSdescribeinstanceshealthresult"></a>
<a id="tocsdescribeinstanceshealthresult"></a>

```json
{
  "InstanceHealthList": [
    {
      "ApplicationMetrics": {
        "Duration": 10,
        "Latency": {
          "P10": 0,
          "P50": 0.001,
          "P75": 0.002,
          "P85": 0.003,
          "P90": 0.004,
          "P95": 0.005,
          "P99": 0.006,
          "P999": 0.006
        },
        "RequestCount": 48,
        "StatusCodes": {
          "Status2xx": 47,
          "Status3xx": 0,
          "Status4xx": 1,
          "Status5xx": 0
        }
      },
      "Causes": [],
      "Color": "Green",
      "HealthStatus": "Ok",
      "InstanceId": "i-08691cc7",
      "LaunchedAt": "2015-08-13T19:17:09Z",
      "System": {
        "CPUUtilization": {
          "IOWait": 0.2,
          "IRQ": 0,
          "Idle": 97.8,
          "Nice": 0.1,
          "SoftIRQ": 0.1,
          "System": 0.3,
          "User": 1.5
        },
        "LoadAverage": [
          0,
          0.02,
          0.05
        ]
      }
    }
  ],
  "RefreshedAt": "2015-08-20T21:09:08Z"
}
```

Detailed health information about the Amazon EC2 instances in an AWS Elastic Beanstalk environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceHealthList|object|false|none|none|
|RefreshedAt|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InstancesHealthAttribute">InstancesHealthAttribute</h2>
<!-- backwards compatibility -->
<a id="schemainstanceshealthattribute"></a>
<a id="schema_InstancesHealthAttribute"></a>
<a id="tocSinstanceshealthattribute"></a>
<a id="tocsinstanceshealthattribute"></a>

```json
"HealthStatus"
```

<h2 id="tocS_DescribePlatformVersionResult">DescribePlatformVersionResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeplatformversionresult"></a>
<a id="schema_DescribePlatformVersionResult"></a>
<a id="tocSdescribeplatformversionresult"></a>
<a id="tocsdescribeplatformversionresult"></a>

```json
{
  "PlatformDescription": {
    "PlatformArn": {},
    "PlatformOwner": {},
    "PlatformName": {},
    "PlatformVersion": {},
    "SolutionStackName": {},
    "PlatformStatus": {},
    "DateCreated": {},
    "DateUpdated": {},
    "PlatformCategory": {},
    "Description": {},
    "Maintainer": {},
    "OperatingSystemName": {},
    "OperatingSystemVersion": {},
    "ProgrammingLanguages": {},
    "Frameworks": {},
    "CustomAmiList": {},
    "SupportedTierList": {},
    "SupportedAddonList": {},
    "PlatformLifecycleState": {},
    "PlatformBranchName": {},
    "PlatformBranchLifecycleState": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlatformDescription|object|false|none|none|

<h2 id="tocS_ListAvailableSolutionStacksResultMessage">ListAvailableSolutionStacksResultMessage</h2>
<!-- backwards compatibility -->
<a id="schemalistavailablesolutionstacksresultmessage"></a>
<a id="schema_ListAvailableSolutionStacksResultMessage"></a>
<a id="tocSlistavailablesolutionstacksresultmessage"></a>
<a id="tocslistavailablesolutionstacksresultmessage"></a>

```json
{
  "SolutionStackDetails": [
    {
      "PermittedFileTypes": [
        "zip"
      ],
      "SolutionStackName": "64bit Amazon Linux 2015.03 v2.0.0 running Node.js"
    }
  ],
  "SolutionStacks": [
    "64bit Amazon Linux 2015.03 v2.0.0 running Node.js",
    "64bit Amazon Linux 2015.03 v2.0.0 running PHP 5.6",
    "64bit Amazon Linux 2015.03 v2.0.0 running PHP 5.5",
    "64bit Amazon Linux 2015.03 v2.0.0 running PHP 5.4",
    "64bit Amazon Linux 2015.03 v2.0.0 running Python 3.4",
    "64bit Amazon Linux 2015.03 v2.0.0 running Python 2.7",
    "64bit Amazon Linux 2015.03 v2.0.0 running Python",
    "64bit Amazon Linux 2015.03 v2.0.0 running Ruby 2.2 (Puma)",
    "64bit Amazon Linux 2015.03 v2.0.0 running Ruby 2.2 (Passenger Standalone)",
    "64bit Amazon Linux 2015.03 v2.0.0 running Ruby 2.1 (Puma)",
    "64bit Amazon Linux 2015.03 v2.0.0 running Ruby 2.1 (Passenger Standalone)",
    "64bit Amazon Linux 2015.03 v2.0.0 running Ruby 2.0 (Puma)",
    "64bit Amazon Linux 2015.03 v2.0.0 running Ruby 2.0 (Passenger Standalone)",
    "64bit Amazon Linux 2015.03 v2.0.0 running Ruby 1.9.3",
    "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8",
    "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 7 Java 7",
    "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 7 Java 6",
    "64bit Windows Server Core 2012 R2 running IIS 8.5",
    "64bit Windows Server 2012 R2 running IIS 8.5",
    "64bit Windows Server 2012 running IIS 8",
    "64bit Windows Server 2008 R2 running IIS 7.5",
    "64bit Amazon Linux 2015.03 v2.0.0 running Docker 1.6.2",
    "64bit Amazon Linux 2015.03 v2.0.0 running Multi-container Docker 1.6.2 (Generic)",
    "64bit Debian jessie v2.0.0 running GlassFish 4.1 Java 8 (Preconfigured - Docker)",
    "64bit Debian jessie v2.0.0 running GlassFish 4.0 Java 7 (Preconfigured - Docker)",
    "64bit Debian jessie v2.0.0 running Go 1.4 (Preconfigured - Docker)",
    "64bit Debian jessie v2.0.0 running Go 1.3 (Preconfigured - Docker)",
    "64bit Debian jessie v2.0.0 running Python 3.4 (Preconfigured - Docker)"
  ]
}
```

A list of available AWS Elastic Beanstalk solution stacks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SolutionStacks|object|false|none|none|
|SolutionStackDetails|object|false|none|none|

<h2 id="tocS_ListPlatformBranchesResult">ListPlatformBranchesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistplatformbranchesresult"></a>
<a id="schema_ListPlatformBranchesResult"></a>
<a id="tocSlistplatformbranchesresult"></a>
<a id="tocslistplatformbranchesresult"></a>

```json
{
  "PlatformBranchSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlatformBranchSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_SearchFilter">SearchFilter</h2>
<!-- backwards compatibility -->
<a id="schemasearchfilter"></a>
<a id="schema_SearchFilter"></a>
<a id="tocSsearchfilter"></a>
<a id="tocssearchfilter"></a>

```json
{
  "Attribute": {},
  "Operator": {},
  "Values": {}
}
```

<p>Describes criteria to restrict a list of results.</p> <p>For operators that apply a single value to the attribute, the filter is evaluated as follows: <code>Attribute Operator Values[1]</code> </p> <p>Some operators, e.g. <code>in</code>, can apply multiple values. In this case, the filter is evaluated as a logical union (OR) of applications of the operator to the attribute with each one of the values: <code>(Attribute Operator Values[1]) OR (Attribute Operator Values[2]) OR ...</code> </p> <p>The valid values for attributes of <code>SearchFilter</code> depend on the API action. For valid values, see the reference page for the API action you're calling that takes a <code>SearchFilter</code> parameter.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attribute|object|false|none|none|
|Operator|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_ListPlatformVersionsResult">ListPlatformVersionsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistplatformversionsresult"></a>
<a id="schema_ListPlatformVersionsResult"></a>
<a id="tocSlistplatformversionsresult"></a>
<a id="tocslistplatformversionsresult"></a>

```json
{
  "PlatformSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlatformSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PlatformFilter">PlatformFilter</h2>
<!-- backwards compatibility -->
<a id="schemaplatformfilter"></a>
<a id="schema_PlatformFilter"></a>
<a id="tocSplatformfilter"></a>
<a id="tocsplatformfilter"></a>

```json
{
  "Type": {},
  "Operator": {},
  "Values": {}
}
```

<p>Describes criteria to restrict the results when listing platform versions.</p> <p>The filter is evaluated as follows: <code>Type Operator Values[1]</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Operator|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_ResourceTagsDescriptionMessage">ResourceTagsDescriptionMessage</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetagsdescriptionmessage"></a>
<a id="schema_ResourceTagsDescriptionMessage"></a>
<a id="tocSresourcetagsdescriptionmessage"></a>
<a id="tocsresourcetagsdescriptionmessage"></a>

```json
{
  "ResourceArn": {},
  "ResourceTags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|
|ResourceTags|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ResourceTypeNotSupportedException">ResourceTypeNotSupportedException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetypenotsupportedexception"></a>
<a id="schema_ResourceTypeNotSupportedException"></a>
<a id="tocSresourcetypenotsupportedexception"></a>
<a id="tocsresourcetypenotsupportedexception"></a>

```json
null
```

<h2 id="tocS_RetrieveEnvironmentInfoResultMessage">RetrieveEnvironmentInfoResultMessage</h2>
<!-- backwards compatibility -->
<a id="schemaretrieveenvironmentinforesultmessage"></a>
<a id="schema_RetrieveEnvironmentInfoResultMessage"></a>
<a id="tocSretrieveenvironmentinforesultmessage"></a>
<a id="tocsretrieveenvironmentinforesultmessage"></a>

```json
{
  "EnvironmentInfo": [
    {
      "Ec2InstanceId": "i-09c1c867",
      "InfoType": "tail",
      "Message": "https://elasticbeanstalk-us-west-2-0123456789012.s3.amazonaws.com/resources/environments/logs/tail/e-fyqyju3yjs/i-09c1c867/TailLogs-1440109397703.out?AWSAccessKeyId=AKGPT4J56IAJ2EUBL5CQ&Expires=1440195891&Signature=n%2BEalOV6A2HIOx4Rcfb7LT16bBM%3D",
      "SampleTimestamp": "2015-08-20T22:23:17.703Z"
    }
  ]
}
```

Result message containing a description of the requested environment info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnvironmentInfo|object|false|none|none|

<h2 id="tocS_ApplicationResourceLifecycleDescriptionMessage">ApplicationResourceLifecycleDescriptionMessage</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationresourcelifecycledescriptionmessage"></a>
<a id="schema_ApplicationResourceLifecycleDescriptionMessage"></a>
<a id="tocSapplicationresourcelifecycledescriptionmessage"></a>
<a id="tocsapplicationresourcelifecycledescriptionmessage"></a>

```json
{
  "ApplicationName": {},
  "ResourceLifecycleConfig": {
    "ServiceRole": {},
    "VersionLifecycleConfig": {
      "MaxCountRule": {
        "Enabled": {},
        "MaxCount": {},
        "DeleteSourceFromS3": {}
      },
      "MaxAgeRule": {
        "Enabled": {},
        "MaxAgeInDays": {},
        "DeleteSourceFromS3": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|false|none|none|
|ResourceLifecycleConfig|object|false|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
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

<h2 id="tocS_ConfigurationSettingsValidationMessages">ConfigurationSettingsValidationMessages</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsettingsvalidationmessages"></a>
<a id="schema_ConfigurationSettingsValidationMessages"></a>
<a id="tocSconfigurationsettingsvalidationmessages"></a>
<a id="tocsconfigurationsettingsvalidationmessages"></a>

```json
{
  "Messages": []
}
```

Provides a list of validation messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Messages|object|false|none|none|

<h2 id="tocS_ARN">ARN</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_ARN"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_AbortEnvironmentUpdateMessage">AbortEnvironmentUpdateMessage</h2>
<!-- backwards compatibility -->
<a id="schemaabortenvironmentupdatemessage"></a>
<a id="schema_AbortEnvironmentUpdateMessage"></a>
<a id="tocSabortenvironmentupdatemessage"></a>
<a id="tocsabortenvironmentupdatemessage"></a>

```json
{
  "EnvironmentId": {},
  "EnvironmentName": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnvironmentId|object|false|none|none|
|EnvironmentName|object|false|none|none|

<h2 id="tocS_AbortableOperationInProgress">AbortableOperationInProgress</h2>
<!-- backwards compatibility -->
<a id="schemaabortableoperationinprogress"></a>
<a id="schema_AbortableOperationInProgress"></a>
<a id="tocSabortableoperationinprogress"></a>
<a id="tocsabortableoperationinprogress"></a>

```json
true
```

<h2 id="tocS_ActionHistoryStatus">ActionHistoryStatus</h2>
<!-- backwards compatibility -->
<a id="schemaactionhistorystatus"></a>
<a id="schema_ActionHistoryStatus"></a>
<a id="tocSactionhistorystatus"></a>
<a id="tocsactionhistorystatus"></a>

```json
"Completed"
```

<h2 id="tocS_ActionStatus">ActionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaactionstatus"></a>
<a id="schema_ActionStatus"></a>
<a id="tocSactionstatus"></a>
<a id="tocsactionstatus"></a>

```json
"Scheduled"
```

<h2 id="tocS_ActionType">ActionType</h2>
<!-- backwards compatibility -->
<a id="schemaactiontype"></a>
<a id="schema_ActionType"></a>
<a id="tocSactiontype"></a>
<a id="tocsactiontype"></a>

```json
"InstanceRefresh"
```

<h2 id="tocS_ApplicationArn">ApplicationArn</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationarn"></a>
<a id="schema_ApplicationArn"></a>
<a id="tocSapplicationarn"></a>
<a id="tocsapplicationarn"></a>

```json
"string"
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

<h2 id="tocS_CreationDate">CreationDate</h2>
<!-- backwards compatibility -->
<a id="schemacreationdate"></a>
<a id="schema_CreationDate"></a>
<a id="tocScreationdate"></a>
<a id="tocscreationdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_UpdateDate">UpdateDate</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedate"></a>
<a id="schema_UpdateDate"></a>
<a id="tocSupdatedate"></a>
<a id="tocsupdatedate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_VersionLabelsList">VersionLabelsList</h2>
<!-- backwards compatibility -->
<a id="schemaversionlabelslist"></a>
<a id="schema_VersionLabelsList"></a>
<a id="tocSversionlabelslist"></a>
<a id="tocsversionlabelslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ConfigurationTemplateNamesList">ConfigurationTemplateNamesList</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationtemplatenameslist"></a>
<a id="schema_ConfigurationTemplateNamesList"></a>
<a id="tocSconfigurationtemplatenameslist"></a>
<a id="tocsconfigurationtemplatenameslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ApplicationResourceLifecycleConfig">ApplicationResourceLifecycleConfig</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationresourcelifecycleconfig"></a>
<a id="schema_ApplicationResourceLifecycleConfig"></a>
<a id="tocSapplicationresourcelifecycleconfig"></a>
<a id="tocsapplicationresourcelifecycleconfig"></a>

```json
{
  "ServiceRole": {},
  "VersionLifecycleConfig": {
    "MaxCountRule": {
      "Enabled": {},
      "MaxCount": {},
      "DeleteSourceFromS3": {}
    },
    "MaxAgeRule": {
      "Enabled": {},
      "MaxAgeInDays": {},
      "DeleteSourceFromS3": {}
    }
  }
}
```

The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that AWS Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceRole|object|false|none|none|
|VersionLifecycleConfig|object|false|none|none|

<h2 id="tocS_ApplicationDescription">ApplicationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationdescription"></a>
<a id="schema_ApplicationDescription"></a>
<a id="tocSapplicationdescription"></a>
<a id="tocsapplicationdescription"></a>

```json
{
  "ApplicationArn": {},
  "ApplicationName": {},
  "Description": {},
  "DateCreated": {},
  "DateUpdated": {},
  "Versions": {},
  "ConfigurationTemplates": {},
  "ResourceLifecycleConfig": {
    "ServiceRole": {},
    "VersionLifecycleConfig": {
      "MaxCountRule": {
        "Enabled": {},
        "MaxCount": {},
        "DeleteSourceFromS3": {}
      },
      "MaxAgeRule": {
        "Enabled": {},
        "MaxAgeInDays": {},
        "DeleteSourceFromS3": {}
      }
    }
  }
}
```

Describes the properties of an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationArn|object|false|none|none|
|ApplicationName|object|false|none|none|
|Description|object|false|none|none|
|DateCreated|object|false|none|none|
|DateUpdated|object|false|none|none|
|Versions|object|false|none|none|
|ConfigurationTemplates|object|false|none|none|
|ResourceLifecycleConfig|object|false|none|none|

<h2 id="tocS_ApplicationDescriptionList">ApplicationDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationdescriptionlist"></a>
<a id="schema_ApplicationDescriptionList"></a>
<a id="tocSapplicationdescriptionlist"></a>
<a id="tocsapplicationdescriptionlist"></a>

```json
[
  {
    "ApplicationArn": {},
    "ApplicationName": {},
    "Description": {},
    "DateCreated": {},
    "DateUpdated": {},
    "Versions": {},
    "ConfigurationTemplates": {},
    "ResourceLifecycleConfig": {
      "ServiceRole": {},
      "VersionLifecycleConfig": {
        "MaxCountRule": {
          "Enabled": {},
          "MaxCount": {},
          "DeleteSourceFromS3": {}
        },
        "MaxAgeRule": {
          "Enabled": {},
          "MaxAgeInDays": {},
          "DeleteSourceFromS3": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_NullableInteger">NullableInteger</h2>
<!-- backwards compatibility -->
<a id="schemanullableinteger"></a>
<a id="schema_NullableInteger"></a>
<a id="tocSnullableinteger"></a>
<a id="tocsnullableinteger"></a>

```json
0
```

<h2 id="tocS_RequestCount">RequestCount</h2>
<!-- backwards compatibility -->
<a id="schemarequestcount"></a>
<a id="schema_RequestCount"></a>
<a id="tocSrequestcount"></a>
<a id="tocsrequestcount"></a>

```json
0
```

<h2 id="tocS_StatusCodes">StatusCodes</h2>
<!-- backwards compatibility -->
<a id="schemastatuscodes"></a>
<a id="schema_StatusCodes"></a>
<a id="tocSstatuscodes"></a>
<a id="tocsstatuscodes"></a>

```json
{
  "Status2xx": {},
  "Status3xx": {},
  "Status4xx": {},
  "Status5xx": {}
}
```

Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">Status Code Definitions</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status2xx|object|false|none|none|
|Status3xx|object|false|none|none|
|Status4xx|object|false|none|none|
|Status5xx|object|false|none|none|

<h2 id="tocS_Latency">Latency</h2>
<!-- backwards compatibility -->
<a id="schemalatency"></a>
<a id="schema_Latency"></a>
<a id="tocSlatency"></a>
<a id="tocslatency"></a>

```json
{
  "P999": {},
  "P99": {},
  "P95": {},
  "P90": {},
  "P85": {},
  "P75": {},
  "P50": {},
  "P10": {}
}
```

Represents the average latency for the slowest X percent of requests over the last 10 seconds.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|P999|object|false|none|none|
|P99|object|false|none|none|
|P95|object|false|none|none|
|P90|object|false|none|none|
|P85|object|false|none|none|
|P75|object|false|none|none|
|P50|object|false|none|none|
|P10|object|false|none|none|

<h2 id="tocS_ApplicationMetrics">ApplicationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationmetrics"></a>
<a id="schema_ApplicationMetrics"></a>
<a id="tocSapplicationmetrics"></a>
<a id="tocsapplicationmetrics"></a>

```json
{
  "Duration": {},
  "RequestCount": {},
  "StatusCodes": {
    "Status2xx": {},
    "Status3xx": {},
    "Status4xx": {},
    "Status5xx": {}
  },
  "Latency": {
    "P999": {},
    "P99": {},
    "P95": {},
    "P90": {},
    "P85": {},
    "P75": {},
    "P50": {},
    "P10": {}
  }
}
```

Application request metrics for an AWS Elastic Beanstalk environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Duration|object|false|none|none|
|RequestCount|object|false|none|none|
|StatusCodes|object|false|none|none|
|Latency|object|false|none|none|

<h2 id="tocS_ApplicationNamesList">ApplicationNamesList</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationnameslist"></a>
<a id="schema_ApplicationNamesList"></a>
<a id="tocSapplicationnameslist"></a>
<a id="tocsapplicationnameslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ApplicationVersionArn">ApplicationVersionArn</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationversionarn"></a>
<a id="schema_ApplicationVersionArn"></a>
<a id="tocSapplicationversionarn"></a>
<a id="tocsapplicationversionarn"></a>

```json
"string"
```

<h2 id="tocS_SourceBuildInformation">SourceBuildInformation</h2>
<!-- backwards compatibility -->
<a id="schemasourcebuildinformation"></a>
<a id="schema_SourceBuildInformation"></a>
<a id="tocSsourcebuildinformation"></a>
<a id="tocssourcebuildinformation"></a>

```json
{
  "SourceType": {},
  "SourceRepository": {},
  "SourceLocation": {}
}
```

Location of the source code for an application version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceType|object|true|none|none|
|SourceRepository|object|true|none|none|
|SourceLocation|object|true|none|none|

<h2 id="tocS_S3Location">S3Location</h2>
<!-- backwards compatibility -->
<a id="schemas3location"></a>
<a id="schema_S3Location"></a>
<a id="tocSs3location"></a>
<a id="tocss3location"></a>

```json
{
  "S3Bucket": {},
  "S3Key": {}
}
```

The bucket and key of an item stored in Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Bucket|object|false|none|none|
|S3Key|object|false|none|none|

<h2 id="tocS_ApplicationVersionStatus">ApplicationVersionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationversionstatus"></a>
<a id="schema_ApplicationVersionStatus"></a>
<a id="tocSapplicationversionstatus"></a>
<a id="tocsapplicationversionstatus"></a>

```json
"Processed"
```

<h2 id="tocS_ApplicationVersionDescription">ApplicationVersionDescription</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationversiondescription"></a>
<a id="schema_ApplicationVersionDescription"></a>
<a id="tocSapplicationversiondescription"></a>
<a id="tocsapplicationversiondescription"></a>

```json
{
  "ApplicationVersionArn": {},
  "ApplicationName": {},
  "Description": {},
  "VersionLabel": {},
  "SourceBuildInformation": {
    "SourceType": {},
    "SourceRepository": {},
    "SourceLocation": {}
  },
  "BuildArn": {},
  "SourceBundle": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "DateCreated": {},
  "DateUpdated": {},
  "Status": {}
}
```

Describes the properties of an application version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationVersionArn|object|false|none|none|
|ApplicationName|object|false|none|none|
|Description|object|false|none|none|
|VersionLabel|object|false|none|none|
|SourceBuildInformation|object|false|none|none|
|BuildArn|object|false|none|none|
|SourceBundle|object|false|none|none|
|DateCreated|object|false|none|none|
|DateUpdated|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_ApplicationVersionDescriptionList">ApplicationVersionDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationversiondescriptionlist"></a>
<a id="schema_ApplicationVersionDescriptionList"></a>
<a id="tocSapplicationversiondescriptionlist"></a>
<a id="tocsapplicationversiondescriptionlist"></a>

```json
[
  {
    "ApplicationVersionArn": {},
    "ApplicationName": {},
    "Description": {},
    "VersionLabel": {},
    "SourceBuildInformation": {
      "SourceType": {},
      "SourceRepository": {},
      "SourceLocation": {}
    },
    "BuildArn": {},
    "SourceBundle": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "DateCreated": {},
    "DateUpdated": {},
    "Status": {}
  }
]
```

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"string"
```

<h2 id="tocS_MaxCountRule">MaxCountRule</h2>
<!-- backwards compatibility -->
<a id="schemamaxcountrule"></a>
<a id="schema_MaxCountRule"></a>
<a id="tocSmaxcountrule"></a>
<a id="tocsmaxcountrule"></a>

```json
{
  "Enabled": {},
  "MaxCount": {},
  "DeleteSourceFromS3": {}
}
```

A lifecycle rule that deletes the oldest application version when the maximum count is exceeded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|MaxCount|object|false|none|none|
|DeleteSourceFromS3|object|false|none|none|

<h2 id="tocS_MaxAgeRule">MaxAgeRule</h2>
<!-- backwards compatibility -->
<a id="schemamaxagerule"></a>
<a id="schema_MaxAgeRule"></a>
<a id="tocSmaxagerule"></a>
<a id="tocsmaxagerule"></a>

```json
{
  "Enabled": {},
  "MaxAgeInDays": {},
  "DeleteSourceFromS3": {}
}
```

A lifecycle rule that deletes application versions after the specified number of days.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|MaxAgeInDays|object|false|none|none|
|DeleteSourceFromS3|object|false|none|none|

<h2 id="tocS_ApplicationVersionProccess">ApplicationVersionProccess</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationversionproccess"></a>
<a id="schema_ApplicationVersionProccess"></a>
<a id="tocSapplicationversionproccess"></a>
<a id="tocsapplicationversionproccess"></a>

```json
true
```

<h2 id="tocS_ApplyEnvironmentManagedActionRequest">ApplyEnvironmentManagedActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapplyenvironmentmanagedactionrequest"></a>
<a id="schema_ApplyEnvironmentManagedActionRequest"></a>
<a id="tocSapplyenvironmentmanagedactionrequest"></a>
<a id="tocsapplyenvironmentmanagedactionrequest"></a>

```json
{
  "EnvironmentName": {},
  "EnvironmentId": {},
  "ActionId": {}
}
```

Request to execute a scheduled managed action immediately.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnvironmentName|object|false|none|none|
|EnvironmentId|object|false|none|none|
|ActionId|object|true|none|none|

<h2 id="tocS_OperationsRole">OperationsRole</h2>
<!-- backwards compatibility -->
<a id="schemaoperationsrole"></a>
<a id="schema_OperationsRole"></a>
<a id="tocSoperationsrole"></a>
<a id="tocsoperationsrole"></a>

```json
"string"
```

<h2 id="tocS_AssociateEnvironmentOperationsRoleMessage">AssociateEnvironmentOperationsRoleMessage</h2>
<!-- backwards compatibility -->
<a id="schemaassociateenvironmentoperationsrolemessage"></a>
<a id="schema_AssociateEnvironmentOperationsRoleMessage"></a>
<a id="tocSassociateenvironmentoperationsrolemessage"></a>
<a id="tocsassociateenvironmentoperationsrolemessage"></a>

```json
{
  "EnvironmentName": {},
  "OperationsRole": {}
}
```

Request to add or change the operations role used by an environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnvironmentName|object|true|none|none|
|OperationsRole|object|true|none|none|

<h2 id="tocS_AutoCreateApplication">AutoCreateApplication</h2>
<!-- backwards compatibility -->
<a id="schemaautocreateapplication"></a>
<a id="schema_AutoCreateApplication"></a>
<a id="tocSautocreateapplication"></a>
<a id="tocsautocreateapplication"></a>

```json
true
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

<h2 id="tocS_AutoScalingGroup">AutoScalingGroup</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggroup"></a>
<a id="schema_AutoScalingGroup"></a>
<a id="tocSautoscalinggroup"></a>
<a id="tocsautoscalinggroup"></a>

```json
{
  "Name": {}
}
```

Describes an Auto Scaling launch configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_AutoScalingGroupList">AutoScalingGroupList</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggrouplist"></a>
<a id="schema_AutoScalingGroupList"></a>
<a id="tocSautoscalinggrouplist"></a>
<a id="tocsautoscalinggrouplist"></a>

```json
[
  {
    "Name": {}
  }
]
```

<h2 id="tocS_SolutionStackDescription">SolutionStackDescription</h2>
<!-- backwards compatibility -->
<a id="schemasolutionstackdescription"></a>
<a id="schema_SolutionStackDescription"></a>
<a id="tocSsolutionstackdescription"></a>
<a id="tocssolutionstackdescription"></a>

```json
{
  "SolutionStackName": {},
  "PermittedFileTypes": {}
}
```

Describes the solution stack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SolutionStackName|object|false|none|none|
|PermittedFileTypes|object|false|none|none|

<h2 id="tocS_AvailableSolutionStackDetailsList">AvailableSolutionStackDetailsList</h2>
<!-- backwards compatibility -->
<a id="schemaavailablesolutionstackdetailslist"></a>
<a id="schema_AvailableSolutionStackDetailsList"></a>
<a id="tocSavailablesolutionstackdetailslist"></a>
<a id="tocsavailablesolutionstackdetailslist"></a>

```json
[
  {
    "SolutionStackName": {},
    "PermittedFileTypes": {}
  }
]
```

<h2 id="tocS_SolutionStackName">SolutionStackName</h2>
<!-- backwards compatibility -->
<a id="schemasolutionstackname"></a>
<a id="schema_SolutionStackName"></a>
<a id="tocSsolutionstackname"></a>
<a id="tocssolutionstackname"></a>

```json
"string"
```

<h2 id="tocS_AvailableSolutionStackNamesList">AvailableSolutionStackNamesList</h2>
<!-- backwards compatibility -->
<a id="schemaavailablesolutionstacknameslist"></a>
<a id="schema_AvailableSolutionStackNamesList"></a>
<a id="tocSavailablesolutionstacknameslist"></a>
<a id="tocsavailablesolutionstacknameslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BoxedBoolean">BoxedBoolean</h2>
<!-- backwards compatibility -->
<a id="schemaboxedboolean"></a>
<a id="schema_BoxedBoolean"></a>
<a id="tocSboxedboolean"></a>
<a id="tocsboxedboolean"></a>

```json
true
```

<h2 id="tocS_BranchName">BranchName</h2>
<!-- backwards compatibility -->
<a id="schemabranchname"></a>
<a id="schema_BranchName"></a>
<a id="tocSbranchname"></a>
<a id="tocsbranchname"></a>

```json
"string"
```

<h2 id="tocS_BranchOrder">BranchOrder</h2>
<!-- backwards compatibility -->
<a id="schemabranchorder"></a>
<a id="schema_BranchOrder"></a>
<a id="tocSbranchorder"></a>
<a id="tocsbranchorder"></a>

```json
0
```

<h2 id="tocS_BuildConfiguration">BuildConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemabuildconfiguration"></a>
<a id="schema_BuildConfiguration"></a>
<a id="tocSbuildconfiguration"></a>
<a id="tocsbuildconfiguration"></a>

```json
{
  "ArtifactName": {},
  "CodeBuildServiceRole": {},
  "ComputeType": {},
  "Image": {},
  "TimeoutInMinutes": {}
}
```

Settings for an AWS CodeBuild build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArtifactName|object|false|none|none|
|CodeBuildServiceRole|object|true|none|none|
|ComputeType|object|false|none|none|
|Image|object|true|none|none|
|TimeoutInMinutes|object|false|none|none|

<h2 id="tocS_Builder">Builder</h2>
<!-- backwards compatibility -->
<a id="schemabuilder"></a>
<a id="schema_Builder"></a>
<a id="tocSbuilder"></a>
<a id="tocsbuilder"></a>

```json
{
  "ARN": {}
}
```

The builder used to build the custom platform.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|

<h2 id="tocS_NullableDouble">NullableDouble</h2>
<!-- backwards compatibility -->
<a id="schemanullabledouble"></a>
<a id="schema_NullableDouble"></a>
<a id="tocSnullabledouble"></a>
<a id="tocsnullabledouble"></a>

```json
0
```

<h2 id="tocS_CPUUtilization">CPUUtilization</h2>
<!-- backwards compatibility -->
<a id="schemacpuutilization"></a>
<a id="schema_CPUUtilization"></a>
<a id="tocScpuutilization"></a>
<a id="tocscpuutilization"></a>

```json
{
  "User": {},
  "Nice": {},
  "System": {},
  "Idle": {},
  "IOWait": {},
  "IRQ": {},
  "SoftIRQ": {},
  "Privileged": {}
}
```

CPU utilization metrics for an instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|User|object|false|none|none|
|Nice|object|false|none|none|
|System|object|false|none|none|
|Idle|object|false|none|none|
|IOWait|object|false|none|none|
|IRQ|object|false|none|none|
|SoftIRQ|object|false|none|none|
|Privileged|object|false|none|none|

<h2 id="tocS_Cause">Cause</h2>
<!-- backwards compatibility -->
<a id="schemacause"></a>
<a id="schema_Cause"></a>
<a id="tocScause"></a>
<a id="tocscause"></a>

```json
"string"
```

<h2 id="tocS_Causes">Causes</h2>
<!-- backwards compatibility -->
<a id="schemacauses"></a>
<a id="schema_Causes"></a>
<a id="tocScauses"></a>
<a id="tocscauses"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DNSCnamePrefix">DNSCnamePrefix</h2>
<!-- backwards compatibility -->
<a id="schemadnscnameprefix"></a>
<a id="schema_DNSCnamePrefix"></a>
<a id="tocSdnscnameprefix"></a>
<a id="tocsdnscnameprefix"></a>

```json
"string"
```

<h2 id="tocS_CheckDNSAvailabilityMessage">CheckDNSAvailabilityMessage</h2>
<!-- backwards compatibility -->
<a id="schemacheckdnsavailabilitymessage"></a>
<a id="schema_CheckDNSAvailabilityMessage"></a>
<a id="tocScheckdnsavailabilitymessage"></a>
<a id="tocscheckdnsavailabilitymessage"></a>

```json
{
  "CNAMEPrefix": {}
}
```

Results message indicating whether a CNAME is available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CNAMEPrefix|object|true|none|none|

<h2 id="tocS_CnameAvailability">CnameAvailability</h2>
<!-- backwards compatibility -->
<a id="schemacnameavailability"></a>
<a id="schema_CnameAvailability"></a>
<a id="tocScnameavailability"></a>
<a id="tocscnameavailability"></a>

```json
true
```

<h2 id="tocS_DNSCname">DNSCname</h2>
<!-- backwards compatibility -->
<a id="schemadnscname"></a>
<a id="schema_DNSCname"></a>
<a id="tocSdnscname"></a>
<a id="tocsdnscname"></a>

```json
"string"
```

<h2 id="tocS_GroupName">GroupName</h2>
<!-- backwards compatibility -->
<a id="schemagroupname"></a>
<a id="schema_GroupName"></a>
<a id="tocSgroupname"></a>
<a id="tocsgroupname"></a>

```json
"string"
```

<h2 id="tocS_VersionLabels">VersionLabels</h2>
<!-- backwards compatibility -->
<a id="schemaversionlabels"></a>
<a id="schema_VersionLabels"></a>
<a id="tocSversionlabels"></a>
<a id="tocsversionlabels"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ComposeEnvironmentsMessage">ComposeEnvironmentsMessage</h2>
<!-- backwards compatibility -->
<a id="schemacomposeenvironmentsmessage"></a>
<a id="schema_ComposeEnvironmentsMessage"></a>
<a id="tocScomposeenvironmentsmessage"></a>
<a id="tocscomposeenvironmentsmessage"></a>

```json
{
  "ApplicationName": {},
  "GroupName": {},
  "VersionLabels": {}
}
```

Request to create or update a group of environments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|false|none|none|
|GroupName|object|false|none|none|
|VersionLabels|object|false|none|none|

<h2 id="tocS_ConfigurationDeploymentStatus">ConfigurationDeploymentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationdeploymentstatus"></a>
<a id="schema_ConfigurationDeploymentStatus"></a>
<a id="tocSconfigurationdeploymentstatus"></a>
<a id="tocsconfigurationdeploymentstatus"></a>

```json
"deployed"
```

<h2 id="tocS_ConfigurationOptionDefaultValue">ConfigurationOptionDefaultValue</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationoptiondefaultvalue"></a>
<a id="schema_ConfigurationOptionDefaultValue"></a>
<a id="tocSconfigurationoptiondefaultvalue"></a>
<a id="tocsconfigurationoptiondefaultvalue"></a>

```json
"string"
```

<h2 id="tocS_OptionNamespace">OptionNamespace</h2>
<!-- backwards compatibility -->
<a id="schemaoptionnamespace"></a>
<a id="schema_OptionNamespace"></a>
<a id="tocSoptionnamespace"></a>
<a id="tocsoptionnamespace"></a>

```json
"string"
```

<h2 id="tocS_ConfigurationOptionName">ConfigurationOptionName</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationoptionname"></a>
<a id="schema_ConfigurationOptionName"></a>
<a id="tocSconfigurationoptionname"></a>
<a id="tocsconfigurationoptionname"></a>

```json
"string"
```

<h2 id="tocS_ConfigurationOptionSeverity">ConfigurationOptionSeverity</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationoptionseverity"></a>
<a id="schema_ConfigurationOptionSeverity"></a>
<a id="tocSconfigurationoptionseverity"></a>
<a id="tocsconfigurationoptionseverity"></a>

```json
"string"
```

<h2 id="tocS_UserDefinedOption">UserDefinedOption</h2>
<!-- backwards compatibility -->
<a id="schemauserdefinedoption"></a>
<a id="schema_UserDefinedOption"></a>
<a id="tocSuserdefinedoption"></a>
<a id="tocsuserdefinedoption"></a>

```json
true
```

<h2 id="tocS_ConfigurationOptionValueType">ConfigurationOptionValueType</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationoptionvaluetype"></a>
<a id="schema_ConfigurationOptionValueType"></a>
<a id="tocSconfigurationoptionvaluetype"></a>
<a id="tocsconfigurationoptionvaluetype"></a>

```json
"Scalar"
```

<h2 id="tocS_ConfigurationOptionPossibleValues">ConfigurationOptionPossibleValues</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationoptionpossiblevalues"></a>
<a id="schema_ConfigurationOptionPossibleValues"></a>
<a id="tocSconfigurationoptionpossiblevalues"></a>
<a id="tocsconfigurationoptionpossiblevalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OptionRestrictionMinValue">OptionRestrictionMinValue</h2>
<!-- backwards compatibility -->
<a id="schemaoptionrestrictionminvalue"></a>
<a id="schema_OptionRestrictionMinValue"></a>
<a id="tocSoptionrestrictionminvalue"></a>
<a id="tocsoptionrestrictionminvalue"></a>

```json
0
```

<h2 id="tocS_OptionRestrictionMaxValue">OptionRestrictionMaxValue</h2>
<!-- backwards compatibility -->
<a id="schemaoptionrestrictionmaxvalue"></a>
<a id="schema_OptionRestrictionMaxValue"></a>
<a id="tocSoptionrestrictionmaxvalue"></a>
<a id="tocsoptionrestrictionmaxvalue"></a>

```json
0
```

<h2 id="tocS_OptionRestrictionMaxLength">OptionRestrictionMaxLength</h2>
<!-- backwards compatibility -->
<a id="schemaoptionrestrictionmaxlength"></a>
<a id="schema_OptionRestrictionMaxLength"></a>
<a id="tocSoptionrestrictionmaxlength"></a>
<a id="tocsoptionrestrictionmaxlength"></a>

```json
0
```

<h2 id="tocS_OptionRestrictionRegex">OptionRestrictionRegex</h2>
<!-- backwards compatibility -->
<a id="schemaoptionrestrictionregex"></a>
<a id="schema_OptionRestrictionRegex"></a>
<a id="tocSoptionrestrictionregex"></a>
<a id="tocsoptionrestrictionregex"></a>

```json
{
  "Pattern": {},
  "Label": {}
}
```

A regular expression representing a restriction on a string configuration option value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Pattern|object|false|none|none|
|Label|object|false|none|none|

<h2 id="tocS_ConfigurationOptionDescription">ConfigurationOptionDescription</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationoptiondescription"></a>
<a id="schema_ConfigurationOptionDescription"></a>
<a id="tocSconfigurationoptiondescription"></a>
<a id="tocsconfigurationoptiondescription"></a>

```json
{
  "Namespace": {},
  "Name": {},
  "DefaultValue": {},
  "ChangeSeverity": {},
  "UserDefined": {},
  "ValueType": {},
  "ValueOptions": {},
  "MinValue": {},
  "MaxValue": {},
  "MaxLength": {},
  "Regex": {
    "Pattern": {},
    "Label": {}
  }
}
```

Describes the possible values for a configuration option.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Namespace|object|false|none|none|
|Name|object|false|none|none|
|DefaultValue|object|false|none|none|
|ChangeSeverity|object|false|none|none|
|UserDefined|object|false|none|none|
|ValueType|object|false|none|none|
|ValueOptions|object|false|none|none|
|MinValue|object|false|none|none|
|MaxValue|object|false|none|none|
|MaxLength|object|false|none|none|
|Regex|object|false|none|none|

<h2 id="tocS_ConfigurationOptionDescriptionsList">ConfigurationOptionDescriptionsList</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationoptiondescriptionslist"></a>
<a id="schema_ConfigurationOptionDescriptionsList"></a>
<a id="tocSconfigurationoptiondescriptionslist"></a>
<a id="tocsconfigurationoptiondescriptionslist"></a>

```json
[
  {
    "Namespace": {},
    "Name": {},
    "DefaultValue": {},
    "ChangeSeverity": {},
    "UserDefined": {},
    "ValueType": {},
    "ValueOptions": {},
    "MinValue": {},
    "MaxValue": {},
    "MaxLength": {},
    "Regex": {
      "Pattern": {},
      "Label": {}
    }
  }
]
```

<h2 id="tocS_ConfigurationOptionPossibleValue">ConfigurationOptionPossibleValue</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationoptionpossiblevalue"></a>
<a id="schema_ConfigurationOptionPossibleValue"></a>
<a id="tocSconfigurationoptionpossiblevalue"></a>
<a id="tocsconfigurationoptionpossiblevalue"></a>

```json
"string"
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

<h2 id="tocS_ConfigurationOptionValue">ConfigurationOptionValue</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationoptionvalue"></a>
<a id="schema_ConfigurationOptionValue"></a>
<a id="tocSconfigurationoptionvalue"></a>
<a id="tocsconfigurationoptionvalue"></a>

```json
"string"
```

<h2 id="tocS_ConfigurationOptionSettingsList">ConfigurationOptionSettingsList</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationoptionsettingslist"></a>
<a id="schema_ConfigurationOptionSettingsList"></a>
<a id="tocSconfigurationoptionsettingslist"></a>
<a id="tocsconfigurationoptionsettingslist"></a>

```json
[
  {
    "ResourceName": {},
    "Namespace": {},
    "OptionName": {},
    "Value": {}
  }
]
```

<h2 id="tocS_PlatformArn">PlatformArn</h2>
<!-- backwards compatibility -->
<a id="schemaplatformarn"></a>
<a id="schema_PlatformArn"></a>
<a id="tocSplatformarn"></a>
<a id="tocsplatformarn"></a>

```json
"string"
```

<h2 id="tocS_ConfigurationSettingsDescriptionList">ConfigurationSettingsDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsettingsdescriptionlist"></a>
<a id="schema_ConfigurationSettingsDescriptionList"></a>
<a id="tocSconfigurationsettingsdescriptionlist"></a>
<a id="tocsconfigurationsettingsdescriptionlist"></a>

```json
[
  {
    "ApplicationName": "my-app",
    "DateCreated": "2015-08-20T22:39:31Z",
    "DateUpdated": "2015-08-20T22:43:11Z",
    "SolutionStackName": "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8",
    "TemplateName": "my-template"
  }
]
```

<h2 id="tocS_ValidationMessagesList">ValidationMessagesList</h2>
<!-- backwards compatibility -->
<a id="schemavalidationmessageslist"></a>
<a id="schema_ValidationMessagesList"></a>
<a id="tocSvalidationmessageslist"></a>
<a id="tocsvalidationmessageslist"></a>

```json
[
  {
    "Message": {},
    "Severity": {},
    "Namespace": {},
    "OptionName": {}
  }
]
```

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_CreateApplicationMessage">CreateApplicationMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationmessage"></a>
<a id="schema_CreateApplicationMessage"></a>
<a id="tocScreateapplicationmessage"></a>
<a id="tocscreateapplicationmessage"></a>

```json
{
  "ApplicationName": {},
  "Description": {},
  "ResourceLifecycleConfig": {
    "ServiceRole": {},
    "VersionLifecycleConfig": {
      "MaxCountRule": {
        "Enabled": {},
        "MaxCount": {},
        "DeleteSourceFromS3": {}
      },
      "MaxAgeRule": {
        "Enabled": {},
        "MaxAgeInDays": {},
        "DeleteSourceFromS3": {}
      }
    }
  },
  "Tags": {}
}
```

Request to create an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|Description|object|false|none|none|
|ResourceLifecycleConfig|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateApplicationVersionMessage">CreateApplicationVersionMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationversionmessage"></a>
<a id="schema_CreateApplicationVersionMessage"></a>
<a id="tocScreateapplicationversionmessage"></a>
<a id="tocscreateapplicationversionmessage"></a>

```json
{
  "ApplicationName": {},
  "VersionLabel": {},
  "Description": {},
  "SourceBuildInformation": {
    "SourceType": {},
    "SourceRepository": {},
    "SourceLocation": {}
  },
  "SourceBundle": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "BuildConfiguration": {
    "ArtifactName": {},
    "CodeBuildServiceRole": {},
    "ComputeType": {},
    "Image": {},
    "TimeoutInMinutes": {}
  },
  "AutoCreateApplication": {},
  "Process": {},
  "Tags": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|VersionLabel|object|true|none|none|
|Description|object|false|none|none|
|SourceBuildInformation|object|false|none|none|
|SourceBundle|object|false|none|none|
|BuildConfiguration|object|false|none|none|
|AutoCreateApplication|object|false|none|none|
|Process|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_SourceConfiguration">SourceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasourceconfiguration"></a>
<a id="schema_SourceConfiguration"></a>
<a id="tocSsourceconfiguration"></a>
<a id="tocssourceconfiguration"></a>

```json
{
  "ApplicationName": {},
  "TemplateName": {}
}
```

A specification for an environment configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|false|none|none|
|TemplateName|object|false|none|none|

<h2 id="tocS_CreateConfigurationTemplateMessage">CreateConfigurationTemplateMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigurationtemplatemessage"></a>
<a id="schema_CreateConfigurationTemplateMessage"></a>
<a id="tocScreateconfigurationtemplatemessage"></a>
<a id="tocscreateconfigurationtemplatemessage"></a>

```json
{
  "ApplicationName": {},
  "TemplateName": {},
  "SolutionStackName": {},
  "PlatformArn": {},
  "SourceConfiguration": {
    "ApplicationName": {},
    "TemplateName": {}
  },
  "EnvironmentId": {},
  "Description": {},
  "OptionSettings": {},
  "Tags": {}
}
```

Request to create a configuration template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|TemplateName|object|true|none|none|
|SolutionStackName|object|false|none|none|
|PlatformArn|object|false|none|none|
|SourceConfiguration|object|false|none|none|
|EnvironmentId|object|false|none|none|
|Description|object|false|none|none|
|OptionSettings|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_EnvironmentTier">EnvironmentTier</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmenttier"></a>
<a id="schema_EnvironmentTier"></a>
<a id="tocSenvironmenttier"></a>
<a id="tocsenvironmenttier"></a>

```json
{
  "Name": {},
  "Type": {},
  "Version": {}
}
```

Describes the properties of an environment tier

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Type|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_OptionsSpecifierList">OptionsSpecifierList</h2>
<!-- backwards compatibility -->
<a id="schemaoptionsspecifierlist"></a>
<a id="schema_OptionsSpecifierList"></a>
<a id="tocSoptionsspecifierlist"></a>
<a id="tocsoptionsspecifierlist"></a>

```json
[
  {
    "ResourceName": {},
    "Namespace": {},
    "OptionName": {}
  }
]
```

<h2 id="tocS_CreateEnvironmentMessage">CreateEnvironmentMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreateenvironmentmessage"></a>
<a id="schema_CreateEnvironmentMessage"></a>
<a id="tocScreateenvironmentmessage"></a>
<a id="tocscreateenvironmentmessage"></a>

```json
{
  "ApplicationName": {},
  "EnvironmentName": {},
  "GroupName": {},
  "Description": {},
  "CNAMEPrefix": {},
  "Tier": {
    "Name": {},
    "Type": {},
    "Version": {}
  },
  "Tags": {},
  "VersionLabel": {},
  "TemplateName": {},
  "SolutionStackName": {},
  "PlatformArn": {},
  "OptionSettings": {},
  "OptionsToRemove": {},
  "OperationsRole": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|EnvironmentName|object|false|none|none|
|GroupName|object|false|none|none|
|Description|object|false|none|none|
|CNAMEPrefix|object|false|none|none|
|Tier|object|false|none|none|
|Tags|object|false|none|none|
|VersionLabel|object|false|none|none|
|TemplateName|object|false|none|none|
|SolutionStackName|object|false|none|none|
|PlatformArn|object|false|none|none|
|OptionSettings|object|false|none|none|
|OptionsToRemove|object|false|none|none|
|OperationsRole|object|false|none|none|

<h2 id="tocS_PlatformName">PlatformName</h2>
<!-- backwards compatibility -->
<a id="schemaplatformname"></a>
<a id="schema_PlatformName"></a>
<a id="tocSplatformname"></a>
<a id="tocsplatformname"></a>

```json
"string"
```

<h2 id="tocS_PlatformVersion">PlatformVersion</h2>
<!-- backwards compatibility -->
<a id="schemaplatformversion"></a>
<a id="schema_PlatformVersion"></a>
<a id="tocSplatformversion"></a>
<a id="tocsplatformversion"></a>

```json
"string"
```

<h2 id="tocS_CreatePlatformVersionRequest">CreatePlatformVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateplatformversionrequest"></a>
<a id="schema_CreatePlatformVersionRequest"></a>
<a id="tocScreateplatformversionrequest"></a>
<a id="tocscreateplatformversionrequest"></a>

```json
{
  "PlatformName": {},
  "PlatformVersion": {},
  "PlatformDefinitionBundle": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "EnvironmentName": {},
  "OptionSettings": {},
  "Tags": {}
}
```

Request to create a new platform version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlatformName|object|true|none|none|
|PlatformVersion|object|true|none|none|
|PlatformDefinitionBundle|object|true|none|none|
|EnvironmentName|object|false|none|none|
|OptionSettings|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_PlatformSummary">PlatformSummary</h2>
<!-- backwards compatibility -->
<a id="schemaplatformsummary"></a>
<a id="schema_PlatformSummary"></a>
<a id="tocSplatformsummary"></a>
<a id="tocsplatformsummary"></a>

```json
{
  "PlatformArn": {},
  "PlatformOwner": {},
  "PlatformStatus": {},
  "PlatformCategory": {},
  "OperatingSystemName": {},
  "OperatingSystemVersion": {},
  "SupportedTierList": {},
  "SupportedAddonList": {},
  "PlatformLifecycleState": {},
  "PlatformVersion": {},
  "PlatformBranchName": {},
  "PlatformBranchLifecycleState": {}
}
```

Summary information about a platform version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlatformArn|object|false|none|none|
|PlatformOwner|object|false|none|none|
|PlatformStatus|object|false|none|none|
|PlatformCategory|object|false|none|none|
|OperatingSystemName|object|false|none|none|
|OperatingSystemVersion|object|false|none|none|
|SupportedTierList|object|false|none|none|
|SupportedAddonList|object|false|none|none|
|PlatformLifecycleState|object|false|none|none|
|PlatformVersion|object|false|none|none|
|PlatformBranchName|object|false|none|none|
|PlatformBranchLifecycleState|object|false|none|none|

<h2 id="tocS_VirtualizationType">VirtualizationType</h2>
<!-- backwards compatibility -->
<a id="schemavirtualizationtype"></a>
<a id="schema_VirtualizationType"></a>
<a id="tocSvirtualizationtype"></a>
<a id="tocsvirtualizationtype"></a>

```json
"string"
```

<h2 id="tocS_ImageId">ImageId</h2>
<!-- backwards compatibility -->
<a id="schemaimageid"></a>
<a id="schema_ImageId"></a>
<a id="tocSimageid"></a>
<a id="tocsimageid"></a>

```json
"string"
```

<h2 id="tocS_CustomAmi">CustomAmi</h2>
<!-- backwards compatibility -->
<a id="schemacustomami"></a>
<a id="schema_CustomAmi"></a>
<a id="tocScustomami"></a>
<a id="tocscustomami"></a>

```json
{
  "VirtualizationType": {},
  "ImageId": {}
}
```

A custom AMI available to platforms.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VirtualizationType|object|false|none|none|
|ImageId|object|false|none|none|

<h2 id="tocS_CustomAmiList">CustomAmiList</h2>
<!-- backwards compatibility -->
<a id="schemacustomamilist"></a>
<a id="schema_CustomAmiList"></a>
<a id="tocScustomamilist"></a>
<a id="tocscustomamilist"></a>

```json
[
  {
    "VirtualizationType": {},
    "ImageId": {}
  }
]
```

<h2 id="tocS_TerminateEnvForce">TerminateEnvForce</h2>
<!-- backwards compatibility -->
<a id="schematerminateenvforce"></a>
<a id="schema_TerminateEnvForce"></a>
<a id="tocSterminateenvforce"></a>
<a id="tocsterminateenvforce"></a>

```json
true
```

<h2 id="tocS_DeleteApplicationMessage">DeleteApplicationMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationmessage"></a>
<a id="schema_DeleteApplicationMessage"></a>
<a id="tocSdeleteapplicationmessage"></a>
<a id="tocsdeleteapplicationmessage"></a>

```json
{
  "ApplicationName": {},
  "TerminateEnvByForce": {}
}
```

Request to delete an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|TerminateEnvByForce|object|false|none|none|

<h2 id="tocS_DeleteSourceBundle">DeleteSourceBundle</h2>
<!-- backwards compatibility -->
<a id="schemadeletesourcebundle"></a>
<a id="schema_DeleteSourceBundle"></a>
<a id="tocSdeletesourcebundle"></a>
<a id="tocsdeletesourcebundle"></a>

```json
true
```

<h2 id="tocS_DeleteApplicationVersionMessage">DeleteApplicationVersionMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationversionmessage"></a>
<a id="schema_DeleteApplicationVersionMessage"></a>
<a id="tocSdeleteapplicationversionmessage"></a>
<a id="tocsdeleteapplicationversionmessage"></a>

```json
{
  "ApplicationName": {},
  "VersionLabel": {},
  "DeleteSourceBundle": {}
}
```

Request to delete an application version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|VersionLabel|object|true|none|none|
|DeleteSourceBundle|object|false|none|none|

<h2 id="tocS_DeleteConfigurationTemplateMessage">DeleteConfigurationTemplateMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigurationtemplatemessage"></a>
<a id="schema_DeleteConfigurationTemplateMessage"></a>
<a id="tocSdeleteconfigurationtemplatemessage"></a>
<a id="tocsdeleteconfigurationtemplatemessage"></a>

```json
{
  "ApplicationName": {},
  "TemplateName": {}
}
```

Request to delete a configuration template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|TemplateName|object|true|none|none|

<h2 id="tocS_DeleteEnvironmentConfigurationMessage">DeleteEnvironmentConfigurationMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeleteenvironmentconfigurationmessage"></a>
<a id="schema_DeleteEnvironmentConfigurationMessage"></a>
<a id="tocSdeleteenvironmentconfigurationmessage"></a>
<a id="tocsdeleteenvironmentconfigurationmessage"></a>

```json
{
  "ApplicationName": {},
  "EnvironmentName": {}
}
```

Request to delete a draft environment configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|EnvironmentName|object|true|none|none|

<h2 id="tocS_DeletePlatformVersionRequest">DeletePlatformVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteplatformversionrequest"></a>
<a id="schema_DeletePlatformVersionRequest"></a>
<a id="tocSdeleteplatformversionrequest"></a>
<a id="tocsdeleteplatformversionrequest"></a>

```json
{
  "PlatformArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlatformArn|object|false|none|none|

<h2 id="tocS_NullableLong">NullableLong</h2>
<!-- backwards compatibility -->
<a id="schemanullablelong"></a>
<a id="schema_NullableLong"></a>
<a id="tocSnullablelong"></a>
<a id="tocsnullablelong"></a>

```json
0
```

<h2 id="tocS_DeploymentTimestamp">DeploymentTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemadeploymenttimestamp"></a>
<a id="schema_DeploymentTimestamp"></a>
<a id="tocSdeploymenttimestamp"></a>
<a id="tocsdeploymenttimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Deployment">Deployment</h2>
<!-- backwards compatibility -->
<a id="schemadeployment"></a>
<a id="schema_Deployment"></a>
<a id="tocSdeployment"></a>
<a id="tocsdeployment"></a>

```json
{
  "VersionLabel": {},
  "DeploymentId": {},
  "Status": {},
  "DeploymentTime": {}
}
```

Information about an application version deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VersionLabel|object|false|none|none|
|DeploymentId|object|false|none|none|
|Status|object|false|none|none|
|DeploymentTime|object|false|none|none|

<h2 id="tocS_ResourceQuotas">ResourceQuotas</h2>
<!-- backwards compatibility -->
<a id="schemaresourcequotas"></a>
<a id="schema_ResourceQuotas"></a>
<a id="tocSresourcequotas"></a>
<a id="tocsresourcequotas"></a>

```json
{
  "ApplicationQuota": {
    "Maximum": {}
  },
  "ApplicationVersionQuota": {
    "Maximum": {}
  },
  "EnvironmentQuota": {
    "Maximum": {}
  },
  "ConfigurationTemplateQuota": {
    "Maximum": {}
  },
  "CustomPlatformQuota": {
    "Maximum": {}
  }
}
```

A set of per-resource AWS Elastic Beanstalk quotas associated with an AWS account. They reflect Elastic Beanstalk resource limits for this account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationQuota|object|false|none|none|
|ApplicationVersionQuota|object|false|none|none|
|EnvironmentQuota|object|false|none|none|
|ConfigurationTemplateQuota|object|false|none|none|
|CustomPlatformQuota|object|false|none|none|

<h2 id="tocS_MaxRecords">MaxRecords</h2>
<!-- backwards compatibility -->
<a id="schemamaxrecords"></a>
<a id="schema_MaxRecords"></a>
<a id="tocSmaxrecords"></a>
<a id="tocsmaxrecords"></a>

```json
1
```

<h2 id="tocS_DescribeApplicationVersionsMessage">DescribeApplicationVersionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicationversionsmessage"></a>
<a id="schema_DescribeApplicationVersionsMessage"></a>
<a id="tocSdescribeapplicationversionsmessage"></a>
<a id="tocsdescribeapplicationversionsmessage"></a>

```json
{
  "ApplicationName": {},
  "VersionLabels": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

Request to describe application versions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|false|none|none|
|VersionLabels|object|false|none|none|
|MaxRecords|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeApplicationsMessage">DescribeApplicationsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicationsmessage"></a>
<a id="schema_DescribeApplicationsMessage"></a>
<a id="tocSdescribeapplicationsmessage"></a>
<a id="tocsdescribeapplicationsmessage"></a>

```json
{
  "ApplicationNames": {}
}
```

Request to describe one or more applications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationNames|object|false|none|none|

<h2 id="tocS_DescribeConfigurationOptionsMessage">DescribeConfigurationOptionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationoptionsmessage"></a>
<a id="schema_DescribeConfigurationOptionsMessage"></a>
<a id="tocSdescribeconfigurationoptionsmessage"></a>
<a id="tocsdescribeconfigurationoptionsmessage"></a>

```json
{
  "ApplicationName": {},
  "TemplateName": {},
  "EnvironmentName": {},
  "SolutionStackName": {},
  "PlatformArn": {},
  "Options": {}
}
```

Result message containing a list of application version descriptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|false|none|none|
|TemplateName|object|false|none|none|
|EnvironmentName|object|false|none|none|
|SolutionStackName|object|false|none|none|
|PlatformArn|object|false|none|none|
|Options|object|false|none|none|

<h2 id="tocS_DescribeConfigurationSettingsMessage">DescribeConfigurationSettingsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationsettingsmessage"></a>
<a id="schema_DescribeConfigurationSettingsMessage"></a>
<a id="tocSdescribeconfigurationsettingsmessage"></a>
<a id="tocsdescribeconfigurationsettingsmessage"></a>

```json
{
  "ApplicationName": {},
  "TemplateName": {},
  "EnvironmentName": {}
}
```

Result message containing all of the configuration settings for a specified solution stack or configuration template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|TemplateName|object|false|none|none|
|EnvironmentName|object|false|none|none|

<h2 id="tocS_EnvironmentHealthAttributes">EnvironmentHealthAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmenthealthattributes"></a>
<a id="schema_EnvironmentHealthAttributes"></a>
<a id="tocSenvironmenthealthattributes"></a>
<a id="tocsenvironmenthealthattributes"></a>

```json
[
  "Status"
]
```

<h2 id="tocS_DescribeEnvironmentHealthRequest">DescribeEnvironmentHealthRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenvironmenthealthrequest"></a>
<a id="schema_DescribeEnvironmentHealthRequest"></a>
<a id="tocSdescribeenvironmenthealthrequest"></a>
<a id="tocsdescribeenvironmenthealthrequest"></a>

```json
{
  "EnvironmentName": {},
  "EnvironmentId": {},
  "AttributeNames": {}
}
```

See the example below to learn how to create a request body.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnvironmentName|object|false|none|none|
|EnvironmentId|object|false|none|none|
|AttributeNames|object|false|none|none|

<h2 id="tocS_EnvironmentHealth">EnvironmentHealth</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmenthealth"></a>
<a id="schema_EnvironmentHealth"></a>
<a id="tocSenvironmenthealth"></a>
<a id="tocsenvironmenthealth"></a>

```json
"Green"
```

<h2 id="tocS_InstanceHealthSummary">InstanceHealthSummary</h2>
<!-- backwards compatibility -->
<a id="schemainstancehealthsummary"></a>
<a id="schema_InstanceHealthSummary"></a>
<a id="tocSinstancehealthsummary"></a>
<a id="tocsinstancehealthsummary"></a>

```json
{
  "NoData": {},
  "Unknown": {},
  "Pending": {},
  "Ok": {},
  "Info": {},
  "Warning": {},
  "Degraded": {},
  "Severe": {}
}
```

Represents summary information about the health of an instance. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NoData|object|false|none|none|
|Unknown|object|false|none|none|
|Pending|object|false|none|none|
|Ok|object|false|none|none|
|Info|object|false|none|none|
|Warning|object|false|none|none|
|Degraded|object|false|none|none|
|Severe|object|false|none|none|

<h2 id="tocS_RefreshedAt">RefreshedAt</h2>
<!-- backwards compatibility -->
<a id="schemarefreshedat"></a>
<a id="schema_RefreshedAt"></a>
<a id="tocSrefreshedat"></a>
<a id="tocsrefreshedat"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ManagedActionHistoryMaxItems">ManagedActionHistoryMaxItems</h2>
<!-- backwards compatibility -->
<a id="schemamanagedactionhistorymaxitems"></a>
<a id="schema_ManagedActionHistoryMaxItems"></a>
<a id="tocSmanagedactionhistorymaxitems"></a>
<a id="tocsmanagedactionhistorymaxitems"></a>

```json
1
```

<h2 id="tocS_DescribeEnvironmentManagedActionHistoryRequest">DescribeEnvironmentManagedActionHistoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenvironmentmanagedactionhistoryrequest"></a>
<a id="schema_DescribeEnvironmentManagedActionHistoryRequest"></a>
<a id="tocSdescribeenvironmentmanagedactionhistoryrequest"></a>
<a id="tocsdescribeenvironmentmanagedactionhistoryrequest"></a>

```json
{
  "EnvironmentId": {},
  "EnvironmentName": {},
  "NextToken": {},
  "MaxItems": {}
}
```

Request to list completed and failed managed actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnvironmentId|object|false|none|none|
|EnvironmentName|object|false|none|none|
|NextToken|object|false|none|none|
|MaxItems|object|false|none|none|

<h2 id="tocS_ManagedActionHistoryItems">ManagedActionHistoryItems</h2>
<!-- backwards compatibility -->
<a id="schemamanagedactionhistoryitems"></a>
<a id="schema_ManagedActionHistoryItems"></a>
<a id="tocSmanagedactionhistoryitems"></a>
<a id="tocsmanagedactionhistoryitems"></a>

```json
[
  {
    "ActionId": {},
    "ActionType": {},
    "ActionDescription": {},
    "FailureType": {},
    "Status": {},
    "FailureDescription": {},
    "ExecutedTime": {},
    "FinishedTime": {}
  }
]
```

<h2 id="tocS_DescribeEnvironmentManagedActionsRequest">DescribeEnvironmentManagedActionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenvironmentmanagedactionsrequest"></a>
<a id="schema_DescribeEnvironmentManagedActionsRequest"></a>
<a id="tocSdescribeenvironmentmanagedactionsrequest"></a>
<a id="tocsdescribeenvironmentmanagedactionsrequest"></a>

```json
{
  "EnvironmentName": {},
  "EnvironmentId": {},
  "Status": {}
}
```

Request to list an environment's upcoming and in-progress managed actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnvironmentName|object|false|none|none|
|EnvironmentId|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_ManagedActions">ManagedActions</h2>
<!-- backwards compatibility -->
<a id="schemamanagedactions"></a>
<a id="schema_ManagedActions"></a>
<a id="tocSmanagedactions"></a>
<a id="tocsmanagedactions"></a>

```json
[
  {
    "ActionId": {},
    "ActionDescription": {},
    "ActionType": {},
    "Status": {},
    "WindowStartTime": {}
  }
]
```

<h2 id="tocS_DescribeEnvironmentResourcesMessage">DescribeEnvironmentResourcesMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenvironmentresourcesmessage"></a>
<a id="schema_DescribeEnvironmentResourcesMessage"></a>
<a id="tocSdescribeenvironmentresourcesmessage"></a>
<a id="tocsdescribeenvironmentresourcesmessage"></a>

```json
{
  "EnvironmentId": {},
  "EnvironmentName": {}
}
```

Request to describe the resources in an environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnvironmentId|object|false|none|none|
|EnvironmentName|object|false|none|none|

<h2 id="tocS_EnvironmentIdList">EnvironmentIdList</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentidlist"></a>
<a id="schema_EnvironmentIdList"></a>
<a id="tocSenvironmentidlist"></a>
<a id="tocsenvironmentidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EnvironmentNamesList">EnvironmentNamesList</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentnameslist"></a>
<a id="schema_EnvironmentNamesList"></a>
<a id="tocSenvironmentnameslist"></a>
<a id="tocsenvironmentnameslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_IncludeDeleted">IncludeDeleted</h2>
<!-- backwards compatibility -->
<a id="schemaincludedeleted"></a>
<a id="schema_IncludeDeleted"></a>
<a id="tocSincludedeleted"></a>
<a id="tocsincludedeleted"></a>

```json
true
```

<h2 id="tocS_IncludeDeletedBackTo">IncludeDeletedBackTo</h2>
<!-- backwards compatibility -->
<a id="schemaincludedeletedbackto"></a>
<a id="schema_IncludeDeletedBackTo"></a>
<a id="tocSincludedeletedbackto"></a>
<a id="tocsincludedeletedbackto"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DescribeEnvironmentsMessage">DescribeEnvironmentsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenvironmentsmessage"></a>
<a id="schema_DescribeEnvironmentsMessage"></a>
<a id="tocSdescribeenvironmentsmessage"></a>
<a id="tocsdescribeenvironmentsmessage"></a>

```json
{
  "ApplicationName": {},
  "VersionLabel": {},
  "EnvironmentIds": {},
  "EnvironmentNames": {},
  "IncludeDeleted": {},
  "IncludedDeletedBackTo": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

Request to describe one or more environments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|false|none|none|
|VersionLabel|object|false|none|none|
|EnvironmentIds|object|false|none|none|
|EnvironmentNames|object|false|none|none|
|IncludeDeleted|object|false|none|none|
|IncludedDeletedBackTo|object|false|none|none|
|MaxRecords|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_RequestId">RequestId</h2>
<!-- backwards compatibility -->
<a id="schemarequestid"></a>
<a id="schema_RequestId"></a>
<a id="tocSrequestid"></a>
<a id="tocsrequestid"></a>

```json
"string"
```

<h2 id="tocS_EventSeverity">EventSeverity</h2>
<!-- backwards compatibility -->
<a id="schemaeventseverity"></a>
<a id="schema_EventSeverity"></a>
<a id="tocSeventseverity"></a>
<a id="tocseventseverity"></a>

```json
"TRACE"
```

<h2 id="tocS_TimeFilterStart">TimeFilterStart</h2>
<!-- backwards compatibility -->
<a id="schematimefilterstart"></a>
<a id="schema_TimeFilterStart"></a>
<a id="tocStimefilterstart"></a>
<a id="tocstimefilterstart"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_TimeFilterEnd">TimeFilterEnd</h2>
<!-- backwards compatibility -->
<a id="schematimefilterend"></a>
<a id="schema_TimeFilterEnd"></a>
<a id="tocStimefilterend"></a>
<a id="tocstimefilterend"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DescribeEventsMessage">DescribeEventsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsmessage"></a>
<a id="schema_DescribeEventsMessage"></a>
<a id="tocSdescribeeventsmessage"></a>
<a id="tocsdescribeeventsmessage"></a>

```json
{
  "ApplicationName": {},
  "VersionLabel": {},
  "TemplateName": {},
  "EnvironmentId": {},
  "EnvironmentName": {},
  "PlatformArn": {},
  "RequestId": {},
  "Severity": {},
  "StartTime": {},
  "EndTime": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

Request to retrieve a list of events for an environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|false|none|none|
|VersionLabel|object|false|none|none|
|TemplateName|object|false|none|none|
|EnvironmentId|object|false|none|none|
|EnvironmentName|object|false|none|none|
|PlatformArn|object|false|none|none|
|RequestId|object|false|none|none|
|Severity|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|MaxRecords|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InstancesHealthAttributes">InstancesHealthAttributes</h2>
<!-- backwards compatibility -->
<a id="schemainstanceshealthattributes"></a>
<a id="schema_InstancesHealthAttributes"></a>
<a id="tocSinstanceshealthattributes"></a>
<a id="tocsinstanceshealthattributes"></a>

```json
[
  "HealthStatus"
]
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

<h2 id="tocS_DescribeInstancesHealthRequest">DescribeInstancesHealthRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstanceshealthrequest"></a>
<a id="schema_DescribeInstancesHealthRequest"></a>
<a id="tocSdescribeinstanceshealthrequest"></a>
<a id="tocsdescribeinstanceshealthrequest"></a>

```json
{
  "EnvironmentName": {},
  "EnvironmentId": {},
  "AttributeNames": {},
  "NextToken": {}
}
```

Parameters for a call to <code>DescribeInstancesHealth</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnvironmentName|object|false|none|none|
|EnvironmentId|object|false|none|none|
|AttributeNames|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InstanceHealthList">InstanceHealthList</h2>
<!-- backwards compatibility -->
<a id="schemainstancehealthlist"></a>
<a id="schema_InstanceHealthList"></a>
<a id="tocSinstancehealthlist"></a>
<a id="tocsinstancehealthlist"></a>

```json
[
  {
    "InstanceId": {},
    "HealthStatus": {},
    "Color": {},
    "Causes": {},
    "LaunchedAt": {},
    "ApplicationMetrics": {
      "Duration": {},
      "RequestCount": {},
      "StatusCodes": {
        "Status2xx": {},
        "Status3xx": {},
        "Status4xx": {},
        "Status5xx": {}
      },
      "Latency": {
        "P999": {},
        "P99": {},
        "P95": {},
        "P90": {},
        "P85": {},
        "P75": {},
        "P50": {},
        "P10": {}
      }
    },
    "System": {
      "CPUUtilization": {
        "User": {},
        "Nice": {},
        "System": {},
        "Idle": {},
        "IOWait": {},
        "IRQ": {},
        "SoftIRQ": {},
        "Privileged": {}
      },
      "LoadAverage": {}
    },
    "Deployment": {
      "VersionLabel": {},
      "DeploymentId": {},
      "Status": {},
      "DeploymentTime": {}
    },
    "AvailabilityZone": {},
    "InstanceType": {}
  }
]
```

<h2 id="tocS_DescribePlatformVersionRequest">DescribePlatformVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeplatformversionrequest"></a>
<a id="schema_DescribePlatformVersionRequest"></a>
<a id="tocSdescribeplatformversionrequest"></a>
<a id="tocsdescribeplatformversionrequest"></a>

```json
{
  "PlatformArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlatformArn|object|false|none|none|

<h2 id="tocS_PlatformDescription">PlatformDescription</h2>
<!-- backwards compatibility -->
<a id="schemaplatformdescription"></a>
<a id="schema_PlatformDescription"></a>
<a id="tocSplatformdescription"></a>
<a id="tocsplatformdescription"></a>

```json
{
  "PlatformArn": {},
  "PlatformOwner": {},
  "PlatformName": {},
  "PlatformVersion": {},
  "SolutionStackName": {},
  "PlatformStatus": {},
  "DateCreated": {},
  "DateUpdated": {},
  "PlatformCategory": {},
  "Description": {},
  "Maintainer": {},
  "OperatingSystemName": {},
  "OperatingSystemVersion": {},
  "ProgrammingLanguages": {},
  "Frameworks": {},
  "CustomAmiList": {},
  "SupportedTierList": {},
  "SupportedAddonList": {},
  "PlatformLifecycleState": {},
  "PlatformBranchName": {},
  "PlatformBranchLifecycleState": {}
}
```

Detailed information about a platform version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlatformArn|object|false|none|none|
|PlatformOwner|object|false|none|none|
|PlatformName|object|false|none|none|
|PlatformVersion|object|false|none|none|
|SolutionStackName|object|false|none|none|
|PlatformStatus|object|false|none|none|
|DateCreated|object|false|none|none|
|DateUpdated|object|false|none|none|
|PlatformCategory|object|false|none|none|
|Description|object|false|none|none|
|Maintainer|object|false|none|none|
|OperatingSystemName|object|false|none|none|
|OperatingSystemVersion|object|false|none|none|
|ProgrammingLanguages|object|false|none|none|
|Frameworks|object|false|none|none|
|CustomAmiList|object|false|none|none|
|SupportedTierList|object|false|none|none|
|SupportedAddonList|object|false|none|none|
|PlatformLifecycleState|object|false|none|none|
|PlatformBranchName|object|false|none|none|
|PlatformBranchLifecycleState|object|false|none|none|

<h2 id="tocS_DisassociateEnvironmentOperationsRoleMessage">DisassociateEnvironmentOperationsRoleMessage</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateenvironmentoperationsrolemessage"></a>
<a id="schema_DisassociateEnvironmentOperationsRoleMessage"></a>
<a id="tocSdisassociateenvironmentoperationsrolemessage"></a>
<a id="tocsdisassociateenvironmentoperationsrolemessage"></a>

```json
{
  "EnvironmentName": {}
}
```

Request to disassociate the operations role from an environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnvironmentName|object|true|none|none|

<h2 id="tocS_Ec2InstanceId">Ec2InstanceId</h2>
<!-- backwards compatibility -->
<a id="schemaec2instanceid"></a>
<a id="schema_Ec2InstanceId"></a>
<a id="tocSec2instanceid"></a>
<a id="tocsec2instanceid"></a>

```json
"string"
```

<h2 id="tocS_EndpointURL">EndpointURL</h2>
<!-- backwards compatibility -->
<a id="schemaendpointurl"></a>
<a id="schema_EndpointURL"></a>
<a id="tocSendpointurl"></a>
<a id="tocsendpointurl"></a>

```json
"string"
```

<h2 id="tocS_EnvironmentArn">EnvironmentArn</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentarn"></a>
<a id="schema_EnvironmentArn"></a>
<a id="tocSenvironmentarn"></a>
<a id="tocsenvironmentarn"></a>

```json
"string"
```

<h2 id="tocS_EnvironmentStatus">EnvironmentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentstatus"></a>
<a id="schema_EnvironmentStatus"></a>
<a id="tocSenvironmentstatus"></a>
<a id="tocsenvironmentstatus"></a>

```json
"Aborting"
```

<h2 id="tocS_EnvironmentHealthStatus">EnvironmentHealthStatus</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmenthealthstatus"></a>
<a id="schema_EnvironmentHealthStatus"></a>
<a id="tocSenvironmenthealthstatus"></a>
<a id="tocsenvironmenthealthstatus"></a>

```json
"NoData"
```

<h2 id="tocS_EnvironmentResourcesDescription">EnvironmentResourcesDescription</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentresourcesdescription"></a>
<a id="schema_EnvironmentResourcesDescription"></a>
<a id="tocSenvironmentresourcesdescription"></a>
<a id="tocsenvironmentresourcesdescription"></a>

```json
{
  "LoadBalancer": {
    "LoadBalancerName": {},
    "Domain": {},
    "Listeners": {}
  }
}
```

Describes the AWS resources in use by this environment. This data is not live data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancer|object|false|none|none|

<h2 id="tocS_EnvironmentLinks">EnvironmentLinks</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentlinks"></a>
<a id="schema_EnvironmentLinks"></a>
<a id="tocSenvironmentlinks"></a>
<a id="tocsenvironmentlinks"></a>

```json
[
  {
    "LinkName": {},
    "EnvironmentName": {}
  }
]
```

<h2 id="tocS_EnvironmentDescriptionsList">EnvironmentDescriptionsList</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentdescriptionslist"></a>
<a id="schema_EnvironmentDescriptionsList"></a>
<a id="tocSenvironmentdescriptionslist"></a>
<a id="tocsenvironmentdescriptionslist"></a>

```json
[
  {
    "AbortableOperationInProgress": true,
    "ApplicationName": "my-app",
    "CNAME": "my-env.elasticbeanstalk.com",
    "DateCreated": "2015-08-07T20:48:49.599Z",
    "DateUpdated": "2015-08-12T18:15:23.804Z",
    "EndpointURL": "awseb-e-w-AWSEBLoa-14XB83101Q4L-104QXY80921.sa-east-1.elb.amazonaws.com",
    "EnvironmentId": "e-wtp2rpqsej",
    "EnvironmentName": "my-env",
    "Health": "Grey",
    "SolutionStackName": "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8",
    "Status": "Updating",
    "Tier": {
      "Name": "WebServer",
      "Type": "Standard",
      "Version": " "
    },
    "VersionLabel": "7f58-stage-150812_025409"
  }
]
```

<h2 id="tocS_EnvironmentInfoType">EnvironmentInfoType</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentinfotype"></a>
<a id="schema_EnvironmentInfoType"></a>
<a id="tocSenvironmentinfotype"></a>
<a id="tocsenvironmentinfotype"></a>

```json
"tail"
```

<h2 id="tocS_SampleTimestamp">SampleTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemasampletimestamp"></a>
<a id="schema_SampleTimestamp"></a>
<a id="tocSsampletimestamp"></a>
<a id="tocssampletimestamp"></a>

```json
"1970-01-01T00:00:00Z"
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

<h2 id="tocS_EnvironmentInfoDescription">EnvironmentInfoDescription</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentinfodescription"></a>
<a id="schema_EnvironmentInfoDescription"></a>
<a id="tocSenvironmentinfodescription"></a>
<a id="tocsenvironmentinfodescription"></a>

```json
{
  "InfoType": {},
  "Ec2InstanceId": {},
  "SampleTimestamp": {},
  "Message": {}
}
```

The information retrieved from the Amazon EC2 instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InfoType|object|false|none|none|
|Ec2InstanceId|object|false|none|none|
|SampleTimestamp|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_EnvironmentInfoDescriptionList">EnvironmentInfoDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentinfodescriptionlist"></a>
<a id="schema_EnvironmentInfoDescriptionList"></a>
<a id="tocSenvironmentinfodescriptionlist"></a>
<a id="tocsenvironmentinfodescriptionlist"></a>

```json
[
  {
    "InfoType": {},
    "Ec2InstanceId": {},
    "SampleTimestamp": {},
    "Message": {}
  }
]
```

<h2 id="tocS_EnvironmentLink">EnvironmentLink</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentlink"></a>
<a id="schema_EnvironmentLink"></a>
<a id="tocSenvironmentlink"></a>
<a id="tocsenvironmentlink"></a>

```json
{
  "LinkName": {},
  "EnvironmentName": {}
}
```

A link to another environment, defined in the environment's manifest. Links provide connection information in system properties that can be used to connect to another environment in the same group. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LinkName|object|false|none|none|
|EnvironmentName|object|false|none|none|

<h2 id="tocS_InstanceList">InstanceList</h2>
<!-- backwards compatibility -->
<a id="schemainstancelist"></a>
<a id="schema_InstanceList"></a>
<a id="tocSinstancelist"></a>
<a id="tocsinstancelist"></a>

```json
[
  {
    "Id": {}
  }
]
```

<h2 id="tocS_LaunchConfigurationList">LaunchConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemalaunchconfigurationlist"></a>
<a id="schema_LaunchConfigurationList"></a>
<a id="tocSlaunchconfigurationlist"></a>
<a id="tocslaunchconfigurationlist"></a>

```json
[
  {
    "Name": {}
  }
]
```

<h2 id="tocS_LaunchTemplateList">LaunchTemplateList</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtemplatelist"></a>
<a id="schema_LaunchTemplateList"></a>
<a id="tocSlaunchtemplatelist"></a>
<a id="tocslaunchtemplatelist"></a>

```json
[
  {
    "Id": {}
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
    "Name": {}
  }
]
```

<h2 id="tocS_TriggerList">TriggerList</h2>
<!-- backwards compatibility -->
<a id="schematriggerlist"></a>
<a id="schema_TriggerList"></a>
<a id="tocStriggerlist"></a>
<a id="tocstriggerlist"></a>

```json
[
  {
    "Name": {}
  }
]
```

<h2 id="tocS_QueueList">QueueList</h2>
<!-- backwards compatibility -->
<a id="schemaqueuelist"></a>
<a id="schema_QueueList"></a>
<a id="tocSqueuelist"></a>
<a id="tocsqueuelist"></a>

```json
[
  {
    "Name": {},
    "URL": {}
  }
]
```

<h2 id="tocS_EnvironmentResourceDescription">EnvironmentResourceDescription</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentresourcedescription"></a>
<a id="schema_EnvironmentResourceDescription"></a>
<a id="tocSenvironmentresourcedescription"></a>
<a id="tocsenvironmentresourcedescription"></a>

```json
{
  "EnvironmentName": {},
  "AutoScalingGroups": {},
  "Instances": {},
  "LaunchConfigurations": {},
  "LaunchTemplates": {},
  "LoadBalancers": {},
  "Triggers": {},
  "Queues": {}
}
```

Describes the AWS resources in use by this environment. This data is live.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnvironmentName|object|false|none|none|
|AutoScalingGroups|object|false|none|none|
|Instances|object|false|none|none|
|LaunchConfigurations|object|false|none|none|
|LaunchTemplates|object|false|none|none|
|LoadBalancers|object|false|none|none|
|Triggers|object|false|none|none|
|Queues|object|false|none|none|

<h2 id="tocS_LoadBalancerDescription">LoadBalancerDescription</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerdescription"></a>
<a id="schema_LoadBalancerDescription"></a>
<a id="tocSloadbalancerdescription"></a>
<a id="tocsloadbalancerdescription"></a>

```json
{
  "LoadBalancerName": {},
  "Domain": {},
  "Listeners": {}
}
```

Describes the details of a LoadBalancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|false|none|none|
|Domain|object|false|none|none|
|Listeners|object|false|none|none|

<h2 id="tocS_EventDate">EventDate</h2>
<!-- backwards compatibility -->
<a id="schemaeventdate"></a>
<a id="schema_EventDate"></a>
<a id="tocSeventdate"></a>
<a id="tocseventdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_EventMessage">EventMessage</h2>
<!-- backwards compatibility -->
<a id="schemaeventmessage"></a>
<a id="schema_EventMessage"></a>
<a id="tocSeventmessage"></a>
<a id="tocseventmessage"></a>

```json
"string"
```

<h2 id="tocS_EventDescription">EventDescription</h2>
<!-- backwards compatibility -->
<a id="schemaeventdescription"></a>
<a id="schema_EventDescription"></a>
<a id="tocSeventdescription"></a>
<a id="tocseventdescription"></a>

```json
{
  "EventDate": {},
  "Message": {},
  "ApplicationName": {},
  "VersionLabel": {},
  "TemplateName": {},
  "EnvironmentName": {},
  "PlatformArn": {},
  "RequestId": {},
  "Severity": {}
}
```

Describes an event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDate|object|false|none|none|
|Message|object|false|none|none|
|ApplicationName|object|false|none|none|
|VersionLabel|object|false|none|none|
|TemplateName|object|false|none|none|
|EnvironmentName|object|false|none|none|
|PlatformArn|object|false|none|none|
|RequestId|object|false|none|none|
|Severity|object|false|none|none|

<h2 id="tocS_EventDescriptionList">EventDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemaeventdescriptionlist"></a>
<a id="schema_EventDescriptionList"></a>
<a id="tocSeventdescriptionlist"></a>
<a id="tocseventdescriptionlist"></a>

```json
[
  {
    "EventDate": {},
    "Message": {},
    "ApplicationName": {},
    "VersionLabel": {},
    "TemplateName": {},
    "EnvironmentName": {},
    "PlatformArn": {},
    "RequestId": {},
    "Severity": {}
  }
]
```

<h2 id="tocS_FailureType">FailureType</h2>
<!-- backwards compatibility -->
<a id="schemafailuretype"></a>
<a id="schema_FailureType"></a>
<a id="tocSfailuretype"></a>
<a id="tocsfailuretype"></a>

```json
"UpdateCancelled"
```

<h2 id="tocS_FileTypeExtension">FileTypeExtension</h2>
<!-- backwards compatibility -->
<a id="schemafiletypeextension"></a>
<a id="schema_FileTypeExtension"></a>
<a id="tocSfiletypeextension"></a>
<a id="tocsfiletypeextension"></a>

```json
"string"
```

<h2 id="tocS_ForceTerminate">ForceTerminate</h2>
<!-- backwards compatibility -->
<a id="schemaforceterminate"></a>
<a id="schema_ForceTerminate"></a>
<a id="tocSforceterminate"></a>
<a id="tocsforceterminate"></a>

```json
true
```

<h2 id="tocS_Instance">Instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_Instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
{
  "Id": {}
}
```

The description of an Amazon EC2 instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|

<h2 id="tocS_SingleInstanceHealth">SingleInstanceHealth</h2>
<!-- backwards compatibility -->
<a id="schemasingleinstancehealth"></a>
<a id="schema_SingleInstanceHealth"></a>
<a id="tocSsingleinstancehealth"></a>
<a id="tocssingleinstancehealth"></a>

```json
{
  "InstanceId": {},
  "HealthStatus": {},
  "Color": {},
  "Causes": {},
  "LaunchedAt": {},
  "ApplicationMetrics": {
    "Duration": {},
    "RequestCount": {},
    "StatusCodes": {
      "Status2xx": {},
      "Status3xx": {},
      "Status4xx": {},
      "Status5xx": {}
    },
    "Latency": {
      "P999": {},
      "P99": {},
      "P95": {},
      "P90": {},
      "P85": {},
      "P75": {},
      "P50": {},
      "P10": {}
    }
  },
  "System": {
    "CPUUtilization": {
      "User": {},
      "Nice": {},
      "System": {},
      "Idle": {},
      "IOWait": {},
      "IRQ": {},
      "SoftIRQ": {},
      "Privileged": {}
    },
    "LoadAverage": {}
  },
  "Deployment": {
    "VersionLabel": {},
    "DeploymentId": {},
    "Status": {},
    "DeploymentTime": {}
  },
  "AvailabilityZone": {},
  "InstanceType": {}
}
```

Detailed health information about an Amazon EC2 instance in your Elastic Beanstalk environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|false|none|none|
|HealthStatus|object|false|none|none|
|Color|object|false|none|none|
|Causes|object|false|none|none|
|LaunchedAt|object|false|none|none|
|ApplicationMetrics|object|false|none|none|
|System|object|false|none|none|
|Deployment|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|InstanceType|object|false|none|none|

<h2 id="tocS_InstanceId">InstanceId</h2>
<!-- backwards compatibility -->
<a id="schemainstanceid"></a>
<a id="schema_InstanceId"></a>
<a id="tocSinstanceid"></a>
<a id="tocsinstanceid"></a>

```json
"string"
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

<h2 id="tocS_LaunchConfiguration">LaunchConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalaunchconfiguration"></a>
<a id="schema_LaunchConfiguration"></a>
<a id="tocSlaunchconfiguration"></a>
<a id="tocslaunchconfiguration"></a>

```json
{
  "Name": {}
}
```

Describes an Auto Scaling launch configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_LaunchTemplate">LaunchTemplate</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtemplate"></a>
<a id="schema_LaunchTemplate"></a>
<a id="tocSlaunchtemplate"></a>
<a id="tocslaunchtemplate"></a>

```json
{
  "Id": {}
}
```

Describes an Amazon EC2 launch template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|

<h2 id="tocS_LaunchedAt">LaunchedAt</h2>
<!-- backwards compatibility -->
<a id="schemalaunchedat"></a>
<a id="schema_LaunchedAt"></a>
<a id="tocSlaunchedat"></a>
<a id="tocslaunchedat"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_SearchFilters">SearchFilters</h2>
<!-- backwards compatibility -->
<a id="schemasearchfilters"></a>
<a id="schema_SearchFilters"></a>
<a id="tocSsearchfilters"></a>
<a id="tocssearchfilters"></a>

```json
[
  {
    "Attribute": {},
    "Operator": {},
    "Values": {}
  }
]
```

<h2 id="tocS_PlatformBranchMaxRecords">PlatformBranchMaxRecords</h2>
<!-- backwards compatibility -->
<a id="schemaplatformbranchmaxrecords"></a>
<a id="schema_PlatformBranchMaxRecords"></a>
<a id="tocSplatformbranchmaxrecords"></a>
<a id="tocsplatformbranchmaxrecords"></a>

```json
1
```

<h2 id="tocS_ListPlatformBranchesRequest">ListPlatformBranchesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistplatformbranchesrequest"></a>
<a id="schema_ListPlatformBranchesRequest"></a>
<a id="tocSlistplatformbranchesrequest"></a>
<a id="tocslistplatformbranchesrequest"></a>

```json
{
  "Filters": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PlatformBranchSummaryList">PlatformBranchSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaplatformbranchsummarylist"></a>
<a id="schema_PlatformBranchSummaryList"></a>
<a id="tocSplatformbranchsummarylist"></a>
<a id="tocsplatformbranchsummarylist"></a>

```json
[
  {
    "PlatformName": {},
    "BranchName": {},
    "LifecycleState": {},
    "BranchOrder": {},
    "SupportedTierList": {}
  }
]
```

<h2 id="tocS_PlatformFilters">PlatformFilters</h2>
<!-- backwards compatibility -->
<a id="schemaplatformfilters"></a>
<a id="schema_PlatformFilters"></a>
<a id="tocSplatformfilters"></a>
<a id="tocsplatformfilters"></a>

```json
[
  {
    "Type": {},
    "Operator": {},
    "Values": {}
  }
]
```

<h2 id="tocS_PlatformMaxRecords">PlatformMaxRecords</h2>
<!-- backwards compatibility -->
<a id="schemaplatformmaxrecords"></a>
<a id="schema_PlatformMaxRecords"></a>
<a id="tocSplatformmaxrecords"></a>
<a id="tocsplatformmaxrecords"></a>

```json
1
```

<h2 id="tocS_ListPlatformVersionsRequest">ListPlatformVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistplatformversionsrequest"></a>
<a id="schema_ListPlatformVersionsRequest"></a>
<a id="tocSlistplatformversionsrequest"></a>
<a id="tocslistplatformversionsrequest"></a>

```json
{
  "Filters": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PlatformSummaryList">PlatformSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaplatformsummarylist"></a>
<a id="schema_PlatformSummaryList"></a>
<a id="tocSplatformsummarylist"></a>
<a id="tocsplatformsummarylist"></a>

```json
[
  {
    "PlatformArn": {},
    "PlatformOwner": {},
    "PlatformStatus": {},
    "PlatformCategory": {},
    "OperatingSystemName": {},
    "OperatingSystemVersion": {},
    "SupportedTierList": {},
    "SupportedAddonList": {},
    "PlatformLifecycleState": {},
    "PlatformVersion": {},
    "PlatformBranchName": {},
    "PlatformBranchLifecycleState": {}
  }
]
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

<h2 id="tocS_ListTagsForResourceMessage">ListTagsForResourceMessage</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcemessage"></a>
<a id="schema_ListTagsForResourceMessage"></a>
<a id="tocSlisttagsforresourcemessage"></a>
<a id="tocslisttagsforresourcemessage"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_Listener">Listener</h2>
<!-- backwards compatibility -->
<a id="schemalistener"></a>
<a id="schema_Listener"></a>
<a id="tocSlistener"></a>
<a id="tocslistener"></a>

```json
{
  "Protocol": {},
  "Port": {}
}
```

Describes the properties of a Listener for the LoadBalancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Protocol|object|false|none|none|
|Port|object|false|none|none|

<h2 id="tocS_LoadAverageValue">LoadAverageValue</h2>
<!-- backwards compatibility -->
<a id="schemaloadaveragevalue"></a>
<a id="schema_LoadAverageValue"></a>
<a id="tocSloadaveragevalue"></a>
<a id="tocsloadaveragevalue"></a>

```json
0
```

<h2 id="tocS_LoadAverage">LoadAverage</h2>
<!-- backwards compatibility -->
<a id="schemaloadaverage"></a>
<a id="schema_LoadAverage"></a>
<a id="tocSloadaverage"></a>
<a id="tocsloadaverage"></a>

```json
[
  0
]
```

<h2 id="tocS_LoadBalancer">LoadBalancer</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancer"></a>
<a id="schema_LoadBalancer"></a>
<a id="tocSloadbalancer"></a>
<a id="tocsloadbalancer"></a>

```json
{
  "Name": {}
}
```

Describes a LoadBalancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_LoadBalancerListenersDescription">LoadBalancerListenersDescription</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerlistenersdescription"></a>
<a id="schema_LoadBalancerListenersDescription"></a>
<a id="tocSloadbalancerlistenersdescription"></a>
<a id="tocsloadbalancerlistenersdescription"></a>

```json
[
  {
    "Protocol": {},
    "Port": {}
  }
]
```

<h2 id="tocS_Maintainer">Maintainer</h2>
<!-- backwards compatibility -->
<a id="schemamaintainer"></a>
<a id="schema_Maintainer"></a>
<a id="tocSmaintainer"></a>
<a id="tocsmaintainer"></a>

```json
"string"
```

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ManagedAction">ManagedAction</h2>
<!-- backwards compatibility -->
<a id="schemamanagedaction"></a>
<a id="schema_ManagedAction"></a>
<a id="tocSmanagedaction"></a>
<a id="tocsmanagedaction"></a>

```json
{
  "ActionId": {},
  "ActionDescription": {},
  "ActionType": {},
  "Status": {},
  "WindowStartTime": {}
}
```

The record of an upcoming or in-progress managed action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionId|object|false|none|none|
|ActionDescription|object|false|none|none|
|ActionType|object|false|none|none|
|Status|object|false|none|none|
|WindowStartTime|object|false|none|none|

<h2 id="tocS_ManagedActionHistoryItem">ManagedActionHistoryItem</h2>
<!-- backwards compatibility -->
<a id="schemamanagedactionhistoryitem"></a>
<a id="schema_ManagedActionHistoryItem"></a>
<a id="tocSmanagedactionhistoryitem"></a>
<a id="tocsmanagedactionhistoryitem"></a>

```json
{
  "ActionId": {},
  "ActionType": {},
  "ActionDescription": {},
  "FailureType": {},
  "Status": {},
  "FailureDescription": {},
  "ExecutedTime": {},
  "FinishedTime": {}
}
```

The record of a completed or failed managed action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionId|object|false|none|none|
|ActionType|object|false|none|none|
|ActionDescription|object|false|none|none|
|FailureType|object|false|none|none|
|Status|object|false|none|none|
|FailureDescription|object|false|none|none|
|ExecutedTime|object|false|none|none|
|FinishedTime|object|false|none|none|

<h2 id="tocS_OperatingSystemName">OperatingSystemName</h2>
<!-- backwards compatibility -->
<a id="schemaoperatingsystemname"></a>
<a id="schema_OperatingSystemName"></a>
<a id="tocSoperatingsystemname"></a>
<a id="tocsoperatingsystemname"></a>

```json
"string"
```

<h2 id="tocS_OperatingSystemVersion">OperatingSystemVersion</h2>
<!-- backwards compatibility -->
<a id="schemaoperatingsystemversion"></a>
<a id="schema_OperatingSystemVersion"></a>
<a id="tocSoperatingsystemversion"></a>
<a id="tocsoperatingsystemversion"></a>

```json
"string"
```

<h2 id="tocS_RegexPattern">RegexPattern</h2>
<!-- backwards compatibility -->
<a id="schemaregexpattern"></a>
<a id="schema_RegexPattern"></a>
<a id="tocSregexpattern"></a>
<a id="tocsregexpattern"></a>

```json
"string"
```

<h2 id="tocS_RegexLabel">RegexLabel</h2>
<!-- backwards compatibility -->
<a id="schemaregexlabel"></a>
<a id="schema_RegexLabel"></a>
<a id="tocSregexlabel"></a>
<a id="tocsregexlabel"></a>

```json
"string"
```

<h2 id="tocS_PlatformBranchLifecycleState">PlatformBranchLifecycleState</h2>
<!-- backwards compatibility -->
<a id="schemaplatformbranchlifecyclestate"></a>
<a id="schema_PlatformBranchLifecycleState"></a>
<a id="tocSplatformbranchlifecyclestate"></a>
<a id="tocsplatformbranchlifecyclestate"></a>

```json
"string"
```

<h2 id="tocS_SupportedTierList">SupportedTierList</h2>
<!-- backwards compatibility -->
<a id="schemasupportedtierlist"></a>
<a id="schema_SupportedTierList"></a>
<a id="tocSsupportedtierlist"></a>
<a id="tocssupportedtierlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PlatformBranchSummary">PlatformBranchSummary</h2>
<!-- backwards compatibility -->
<a id="schemaplatformbranchsummary"></a>
<a id="schema_PlatformBranchSummary"></a>
<a id="tocSplatformbranchsummary"></a>
<a id="tocsplatformbranchsummary"></a>

```json
{
  "PlatformName": {},
  "BranchName": {},
  "LifecycleState": {},
  "BranchOrder": {},
  "SupportedTierList": {}
}
```

Summary information about a platform branch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlatformName|object|false|none|none|
|BranchName|object|false|none|none|
|LifecycleState|object|false|none|none|
|BranchOrder|object|false|none|none|
|SupportedTierList|object|false|none|none|

<h2 id="tocS_PlatformCategory">PlatformCategory</h2>
<!-- backwards compatibility -->
<a id="schemaplatformcategory"></a>
<a id="schema_PlatformCategory"></a>
<a id="tocSplatformcategory"></a>
<a id="tocsplatformcategory"></a>

```json
"string"
```

<h2 id="tocS_PlatformOwner">PlatformOwner</h2>
<!-- backwards compatibility -->
<a id="schemaplatformowner"></a>
<a id="schema_PlatformOwner"></a>
<a id="tocSplatformowner"></a>
<a id="tocsplatformowner"></a>

```json
"string"
```

<h2 id="tocS_PlatformStatus">PlatformStatus</h2>
<!-- backwards compatibility -->
<a id="schemaplatformstatus"></a>
<a id="schema_PlatformStatus"></a>
<a id="tocSplatformstatus"></a>
<a id="tocsplatformstatus"></a>

```json
"Creating"
```

<h2 id="tocS_PlatformProgrammingLanguages">PlatformProgrammingLanguages</h2>
<!-- backwards compatibility -->
<a id="schemaplatformprogramminglanguages"></a>
<a id="schema_PlatformProgrammingLanguages"></a>
<a id="tocSplatformprogramminglanguages"></a>
<a id="tocsplatformprogramminglanguages"></a>

```json
[
  {
    "Name": {},
    "Version": {}
  }
]
```

<h2 id="tocS_PlatformFrameworks">PlatformFrameworks</h2>
<!-- backwards compatibility -->
<a id="schemaplatformframeworks"></a>
<a id="schema_PlatformFrameworks"></a>
<a id="tocSplatformframeworks"></a>
<a id="tocsplatformframeworks"></a>

```json
[
  {
    "Name": {},
    "Version": {}
  }
]
```

<h2 id="tocS_SupportedAddonList">SupportedAddonList</h2>
<!-- backwards compatibility -->
<a id="schemasupportedaddonlist"></a>
<a id="schema_SupportedAddonList"></a>
<a id="tocSsupportedaddonlist"></a>
<a id="tocssupportedaddonlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PlatformLifecycleState">PlatformLifecycleState</h2>
<!-- backwards compatibility -->
<a id="schemaplatformlifecyclestate"></a>
<a id="schema_PlatformLifecycleState"></a>
<a id="tocSplatformlifecyclestate"></a>
<a id="tocsplatformlifecyclestate"></a>

```json
"string"
```

<h2 id="tocS_PlatformFilterType">PlatformFilterType</h2>
<!-- backwards compatibility -->
<a id="schemaplatformfiltertype"></a>
<a id="schema_PlatformFilterType"></a>
<a id="tocSplatformfiltertype"></a>
<a id="tocsplatformfiltertype"></a>

```json
"string"
```

<h2 id="tocS_PlatformFilterOperator">PlatformFilterOperator</h2>
<!-- backwards compatibility -->
<a id="schemaplatformfilteroperator"></a>
<a id="schema_PlatformFilterOperator"></a>
<a id="tocSplatformfilteroperator"></a>
<a id="tocsplatformfilteroperator"></a>

```json
"string"
```

<h2 id="tocS_PlatformFilterValueList">PlatformFilterValueList</h2>
<!-- backwards compatibility -->
<a id="schemaplatformfiltervaluelist"></a>
<a id="schema_PlatformFilterValueList"></a>
<a id="tocSplatformfiltervaluelist"></a>
<a id="tocsplatformfiltervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PlatformFilterValue">PlatformFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaplatformfiltervalue"></a>
<a id="schema_PlatformFilterValue"></a>
<a id="tocSplatformfiltervalue"></a>
<a id="tocsplatformfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_PlatformFramework">PlatformFramework</h2>
<!-- backwards compatibility -->
<a id="schemaplatformframework"></a>
<a id="schema_PlatformFramework"></a>
<a id="tocSplatformframework"></a>
<a id="tocsplatformframework"></a>

```json
{
  "Name": {},
  "Version": {}
}
```

A framework supported by the platform.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_PlatformProgrammingLanguage">PlatformProgrammingLanguage</h2>
<!-- backwards compatibility -->
<a id="schemaplatformprogramminglanguage"></a>
<a id="schema_PlatformProgrammingLanguage"></a>
<a id="tocSplatformprogramminglanguage"></a>
<a id="tocsplatformprogramminglanguage"></a>

```json
{
  "Name": {},
  "Version": {}
}
```

A programming language supported by the platform.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_Queue">Queue</h2>
<!-- backwards compatibility -->
<a id="schemaqueue"></a>
<a id="schema_Queue"></a>
<a id="tocSqueue"></a>
<a id="tocsqueue"></a>

```json
{
  "Name": {},
  "URL": {}
}
```

Describes a queue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|URL|object|false|none|none|

<h2 id="tocS_RebuildEnvironmentMessage">RebuildEnvironmentMessage</h2>
<!-- backwards compatibility -->
<a id="schemarebuildenvironmentmessage"></a>
<a id="schema_RebuildEnvironmentMessage"></a>
<a id="tocSrebuildenvironmentmessage"></a>
<a id="tocsrebuildenvironmentmessage"></a>

```json
{
  "EnvironmentId": {},
  "EnvironmentName": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnvironmentId|object|false|none|none|
|EnvironmentName|object|false|none|none|

<h2 id="tocS_RequestEnvironmentInfoMessage">RequestEnvironmentInfoMessage</h2>
<!-- backwards compatibility -->
<a id="schemarequestenvironmentinfomessage"></a>
<a id="schema_RequestEnvironmentInfoMessage"></a>
<a id="tocSrequestenvironmentinfomessage"></a>
<a id="tocsrequestenvironmentinfomessage"></a>

```json
{
  "EnvironmentId": {},
  "EnvironmentName": {},
  "InfoType": {}
}
```

Request to retrieve logs from an environment and store them in your Elastic Beanstalk storage bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnvironmentId|object|false|none|none|
|EnvironmentName|object|false|none|none|
|InfoType|object|true|none|none|

<h2 id="tocS_ResourceQuota">ResourceQuota</h2>
<!-- backwards compatibility -->
<a id="schemaresourcequota"></a>
<a id="schema_ResourceQuota"></a>
<a id="tocSresourcequota"></a>
<a id="tocsresourcequota"></a>

```json
{
  "Maximum": {}
}
```

The AWS Elastic Beanstalk quota information for a single resource type in an AWS account. It reflects the resource's limits for this account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Maximum|object|false|none|none|

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

<h2 id="tocS_RestartAppServerMessage">RestartAppServerMessage</h2>
<!-- backwards compatibility -->
<a id="schemarestartappservermessage"></a>
<a id="schema_RestartAppServerMessage"></a>
<a id="tocSrestartappservermessage"></a>
<a id="tocsrestartappservermessage"></a>

```json
{
  "EnvironmentId": {},
  "EnvironmentName": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnvironmentId|object|false|none|none|
|EnvironmentName|object|false|none|none|

<h2 id="tocS_RetrieveEnvironmentInfoMessage">RetrieveEnvironmentInfoMessage</h2>
<!-- backwards compatibility -->
<a id="schemaretrieveenvironmentinfomessage"></a>
<a id="schema_RetrieveEnvironmentInfoMessage"></a>
<a id="tocSretrieveenvironmentinfomessage"></a>
<a id="tocsretrieveenvironmentinfomessage"></a>

```json
{
  "EnvironmentId": {},
  "EnvironmentName": {},
  "InfoType": {}
}
```

Request to download logs retrieved with <a>RequestEnvironmentInfo</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnvironmentId|object|false|none|none|
|EnvironmentName|object|false|none|none|
|InfoType|object|true|none|none|

<h2 id="tocS_SearchFilterAttribute">SearchFilterAttribute</h2>
<!-- backwards compatibility -->
<a id="schemasearchfilterattribute"></a>
<a id="schema_SearchFilterAttribute"></a>
<a id="tocSsearchfilterattribute"></a>
<a id="tocssearchfilterattribute"></a>

```json
"string"
```

<h2 id="tocS_SearchFilterOperator">SearchFilterOperator</h2>
<!-- backwards compatibility -->
<a id="schemasearchfilteroperator"></a>
<a id="schema_SearchFilterOperator"></a>
<a id="tocSsearchfilteroperator"></a>
<a id="tocssearchfilteroperator"></a>

```json
"string"
```

<h2 id="tocS_SearchFilterValues">SearchFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemasearchfiltervalues"></a>
<a id="schema_SearchFilterValues"></a>
<a id="tocSsearchfiltervalues"></a>
<a id="tocssearchfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SearchFilterValue">SearchFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemasearchfiltervalue"></a>
<a id="schema_SearchFilterValue"></a>
<a id="tocSsearchfiltervalue"></a>
<a id="tocssearchfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_SystemStatus">SystemStatus</h2>
<!-- backwards compatibility -->
<a id="schemasystemstatus"></a>
<a id="schema_SystemStatus"></a>
<a id="tocSsystemstatus"></a>
<a id="tocssystemstatus"></a>

```json
{
  "CPUUtilization": {
    "User": {},
    "Nice": {},
    "System": {},
    "Idle": {},
    "IOWait": {},
    "IRQ": {},
    "SoftIRQ": {},
    "Privileged": {}
  },
  "LoadAverage": {}
}
```

CPU utilization and load average metrics for an Amazon EC2 instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CPUUtilization|object|false|none|none|
|LoadAverage|object|false|none|none|

<h2 id="tocS_SolutionStackFileTypeList">SolutionStackFileTypeList</h2>
<!-- backwards compatibility -->
<a id="schemasolutionstackfiletypelist"></a>
<a id="schema_SolutionStackFileTypeList"></a>
<a id="tocSsolutionstackfiletypelist"></a>
<a id="tocssolutionstackfiletypelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SupportedAddon">SupportedAddon</h2>
<!-- backwards compatibility -->
<a id="schemasupportedaddon"></a>
<a id="schema_SupportedAddon"></a>
<a id="tocSsupportedaddon"></a>
<a id="tocssupportedaddon"></a>

```json
"string"
```

<h2 id="tocS_SupportedTier">SupportedTier</h2>
<!-- backwards compatibility -->
<a id="schemasupportedtier"></a>
<a id="schema_SupportedTier"></a>
<a id="tocSsupportedtier"></a>
<a id="tocssupportedtier"></a>

```json
"string"
```

<h2 id="tocS_SwapEnvironmentCNAMEsMessage">SwapEnvironmentCNAMEsMessage</h2>
<!-- backwards compatibility -->
<a id="schemaswapenvironmentcnamesmessage"></a>
<a id="schema_SwapEnvironmentCNAMEsMessage"></a>
<a id="tocSswapenvironmentcnamesmessage"></a>
<a id="tocsswapenvironmentcnamesmessage"></a>

```json
{
  "SourceEnvironmentId": {},
  "SourceEnvironmentName": {},
  "DestinationEnvironmentId": {},
  "DestinationEnvironmentName": {}
}
```

Swaps the CNAMEs of two environments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceEnvironmentId|object|false|none|none|
|SourceEnvironmentName|object|false|none|none|
|DestinationEnvironmentId|object|false|none|none|
|DestinationEnvironmentName|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

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

<h2 id="tocS_TerminateEnvironmentResources">TerminateEnvironmentResources</h2>
<!-- backwards compatibility -->
<a id="schematerminateenvironmentresources"></a>
<a id="schema_TerminateEnvironmentResources"></a>
<a id="tocSterminateenvironmentresources"></a>
<a id="tocsterminateenvironmentresources"></a>

```json
true
```

<h2 id="tocS_TerminateEnvironmentMessage">TerminateEnvironmentMessage</h2>
<!-- backwards compatibility -->
<a id="schematerminateenvironmentmessage"></a>
<a id="schema_TerminateEnvironmentMessage"></a>
<a id="tocSterminateenvironmentmessage"></a>
<a id="tocsterminateenvironmentmessage"></a>

```json
{
  "EnvironmentId": {},
  "EnvironmentName": {},
  "TerminateResources": {},
  "ForceTerminate": {}
}
```

Request to terminate an environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnvironmentId|object|false|none|none|
|EnvironmentName|object|false|none|none|
|TerminateResources|object|false|none|none|
|ForceTerminate|object|false|none|none|

<h2 id="tocS_Trigger">Trigger</h2>
<!-- backwards compatibility -->
<a id="schematrigger"></a>
<a id="schema_Trigger"></a>
<a id="tocStrigger"></a>
<a id="tocstrigger"></a>

```json
{
  "Name": {}
}
```

Describes a trigger.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_UpdateApplicationMessage">UpdateApplicationMessage</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationmessage"></a>
<a id="schema_UpdateApplicationMessage"></a>
<a id="tocSupdateapplicationmessage"></a>
<a id="tocsupdateapplicationmessage"></a>

```json
{
  "ApplicationName": {},
  "Description": {}
}
```

Request to update an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|Description|object|false|none|none|

<h2 id="tocS_UpdateApplicationResourceLifecycleMessage">UpdateApplicationResourceLifecycleMessage</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationresourcelifecyclemessage"></a>
<a id="schema_UpdateApplicationResourceLifecycleMessage"></a>
<a id="tocSupdateapplicationresourcelifecyclemessage"></a>
<a id="tocsupdateapplicationresourcelifecyclemessage"></a>

```json
{
  "ApplicationName": {},
  "ResourceLifecycleConfig": {
    "ServiceRole": {},
    "VersionLifecycleConfig": {
      "MaxCountRule": {
        "Enabled": {},
        "MaxCount": {},
        "DeleteSourceFromS3": {}
      },
      "MaxAgeRule": {
        "Enabled": {},
        "MaxAgeInDays": {},
        "DeleteSourceFromS3": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|ResourceLifecycleConfig|object|true|none|none|

<h2 id="tocS_UpdateApplicationVersionMessage">UpdateApplicationVersionMessage</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationversionmessage"></a>
<a id="schema_UpdateApplicationVersionMessage"></a>
<a id="tocSupdateapplicationversionmessage"></a>
<a id="tocsupdateapplicationversionmessage"></a>

```json
{
  "ApplicationName": {},
  "VersionLabel": {},
  "Description": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|VersionLabel|object|true|none|none|
|Description|object|false|none|none|

<h2 id="tocS_UpdateConfigurationTemplateMessage">UpdateConfigurationTemplateMessage</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigurationtemplatemessage"></a>
<a id="schema_UpdateConfigurationTemplateMessage"></a>
<a id="tocSupdateconfigurationtemplatemessage"></a>
<a id="tocsupdateconfigurationtemplatemessage"></a>

```json
{
  "ApplicationName": {},
  "TemplateName": {},
  "Description": {},
  "OptionSettings": {},
  "OptionsToRemove": {}
}
```

The result message containing the options for the specified solution stack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|TemplateName|object|true|none|none|
|Description|object|false|none|none|
|OptionSettings|object|false|none|none|
|OptionsToRemove|object|false|none|none|

<h2 id="tocS_UpdateEnvironmentMessage">UpdateEnvironmentMessage</h2>
<!-- backwards compatibility -->
<a id="schemaupdateenvironmentmessage"></a>
<a id="schema_UpdateEnvironmentMessage"></a>
<a id="tocSupdateenvironmentmessage"></a>
<a id="tocsupdateenvironmentmessage"></a>

```json
{
  "ApplicationName": {},
  "EnvironmentId": {},
  "EnvironmentName": {},
  "GroupName": {},
  "Description": {},
  "Tier": {
    "Name": {},
    "Type": {},
    "Version": {}
  },
  "VersionLabel": {},
  "TemplateName": {},
  "SolutionStackName": {},
  "PlatformArn": {},
  "OptionSettings": {},
  "OptionsToRemove": {}
}
```

Request to update an environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|false|none|none|
|EnvironmentId|object|false|none|none|
|EnvironmentName|object|false|none|none|
|GroupName|object|false|none|none|
|Description|object|false|none|none|
|Tier|object|false|none|none|
|VersionLabel|object|false|none|none|
|TemplateName|object|false|none|none|
|SolutionStackName|object|false|none|none|
|PlatformArn|object|false|none|none|
|OptionSettings|object|false|none|none|
|OptionsToRemove|object|false|none|none|

<h2 id="tocS_UpdateTagsForResourceMessage">UpdateTagsForResourceMessage</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetagsforresourcemessage"></a>
<a id="schema_UpdateTagsForResourceMessage"></a>
<a id="tocSupdatetagsforresourcemessage"></a>
<a id="tocsupdatetagsforresourcemessage"></a>

```json
{
  "ResourceArn": {},
  "TagsToAdd": {},
  "TagsToRemove": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|TagsToAdd|object|false|none|none|
|TagsToRemove|object|false|none|none|

<h2 id="tocS_ValidateConfigurationSettingsMessage">ValidateConfigurationSettingsMessage</h2>
<!-- backwards compatibility -->
<a id="schemavalidateconfigurationsettingsmessage"></a>
<a id="schema_ValidateConfigurationSettingsMessage"></a>
<a id="tocSvalidateconfigurationsettingsmessage"></a>
<a id="tocsvalidateconfigurationsettingsmessage"></a>

```json
{
  "ApplicationName": {},
  "TemplateName": {},
  "EnvironmentName": {},
  "OptionSettings": {}
}
```

A list of validation messages for a specified configuration template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|TemplateName|object|false|none|none|
|EnvironmentName|object|false|none|none|
|OptionSettings|object|true|none|none|

<h2 id="tocS_ValidationMessageString">ValidationMessageString</h2>
<!-- backwards compatibility -->
<a id="schemavalidationmessagestring"></a>
<a id="schema_ValidationMessageString"></a>
<a id="tocSvalidationmessagestring"></a>
<a id="tocsvalidationmessagestring"></a>

```json
"string"
```

<h2 id="tocS_ValidationSeverity">ValidationSeverity</h2>
<!-- backwards compatibility -->
<a id="schemavalidationseverity"></a>
<a id="schema_ValidationSeverity"></a>
<a id="tocSvalidationseverity"></a>
<a id="tocsvalidationseverity"></a>

```json
"error"
```

<h2 id="tocS_ValidationMessage">ValidationMessage</h2>
<!-- backwards compatibility -->
<a id="schemavalidationmessage"></a>
<a id="schema_ValidationMessage"></a>
<a id="tocSvalidationmessage"></a>
<a id="tocsvalidationmessage"></a>

```json
{
  "Message": {},
  "Severity": {},
  "Namespace": {},
  "OptionName": {}
}
```

An error or warning for a desired configuration option value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|false|none|none|
|Severity|object|false|none|none|
|Namespace|object|false|none|none|
|OptionName|object|false|none|none|
