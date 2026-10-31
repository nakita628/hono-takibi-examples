<h1 id="aws-opsworks">AWS OpsWorks v2013-02-18</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>AWS OpsWorks</fullname> <p>Welcome to the <i>AWS OpsWorks Stacks API Reference</i>. This guide provides descriptions, syntax, and usage examples for AWS OpsWorks Stacks actions and data types, including common parameters and error codes. </p> <p>AWS OpsWorks Stacks is an application management service that provides an integrated experience for overseeing the complete application lifecycle. For information about this product, go to the <a href="http://aws.amazon.com/opsworks/">AWS OpsWorks</a> details page. </p> <p> <b>SDKs and CLI</b> </p> <p>The most common way to use the AWS OpsWorks Stacks API is by using the AWS Command Line Interface (CLI) or by using one of the AWS SDKs to implement applications in your preferred language. For more information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">AWS CLI</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/opsworks/AWSOpsWorksClient.html">AWS SDK for Java</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/html/N_Amazon_OpsWorks.htm">AWS SDK for .NET</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/aws-sdk-php-2/latest/class-Aws.OpsWorks.OpsWorksClient.html">AWS SDK for PHP 2</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/sdkforruby/api/">AWS SDK for Ruby</a> </p> </li> <li> <p> <a href="http://aws.amazon.com/documentation/sdkforjavascript/">AWS SDK for Node.js</a> </p> </li> <li> <p> <a href="http://docs.pythonboto.org/en/latest/ref/opsworks.html">AWS SDK for Python(Boto)</a> </p> </li> </ul> <p> <b>Endpoints</b> </p> <p>AWS OpsWorks Stacks supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Stacks can only be accessed or managed within the endpoint in which they are created.</p> <ul> <li> <p>opsworks.us-east-1.amazonaws.com</p> </li> <li> <p>opsworks.us-east-2.amazonaws.com</p> </li> <li> <p>opsworks.us-west-1.amazonaws.com</p> </li> <li> <p>opsworks.us-west-2.amazonaws.com</p> </li> <li> <p>opsworks.ca-central-1.amazonaws.com (API only; not available in the AWS console)</p> </li> <li> <p>opsworks.eu-west-1.amazonaws.com</p> </li> <li> <p>opsworks.eu-west-2.amazonaws.com</p> </li> <li> <p>opsworks.eu-west-3.amazonaws.com</p> </li> <li> <p>opsworks.eu-central-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-northeast-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-northeast-2.amazonaws.com</p> </li> <li> <p>opsworks.ap-south-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-southeast-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-southeast-2.amazonaws.com</p> </li> <li> <p>opsworks.sa-east-1.amazonaws.com</p> </li> </ul> <p> <b>Chef Versions</b> </p> <p>When you call <a>CreateStack</a>, <a>CloneStack</a>, or <a>UpdateStack</a> we recommend you use the <code>ConfigurationManager</code> parameter to specify the Chef version. The recommended and default value for Linux stacks is currently 12. Windows stacks use Chef 12.2. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-chef11.html">Chef Versions</a>.</p> <note> <p>You can specify Chef 12, 11.10, or 11.4 for your Linux stack. We recommend migrating your existing Linux stacks to Chef 12 as soon as possible.</p> </note>

Base URLs:

* <a href="http://opsworks.us-east-1.amazonaws.com">http://opsworks.us-east-1.amazonaws.com</a> - The AWS OpsWorks multi-region endpoint

* <a href="https://opsworks.us-east-1.amazonaws.com">https://opsworks.us-east-1.amazonaws.com</a> - The AWS OpsWorks multi-region endpoint

* <a href="http://opsworks.cn-north-1.amazonaws.com.cn">http://opsworks.cn-north-1.amazonaws.com.cn</a> - The AWS OpsWorks endpoint for China (Beijing) and China (Ningxia)

* <a href="https://opsworks.cn-north-1.amazonaws.com.cn">https://opsworks.cn-north-1.amazonaws.com.cn</a> - The AWS OpsWorks endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/opsworks/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-opsworks-default">Default</h1>

## AssignInstance

<a id="opIdAssignInstance"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.AssignInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.AssignInstance' \
  -d '{
    "InstanceId": {},
    "LayerIds": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.AssignInstance`

<p>Assign a registered instance to a layer.</p> <ul> <li> <p>You can assign registered on-premises instances to any layer type.</p> </li> <li> <p>You can assign registered Amazon EC2 instances only to custom layers.</p> </li> <li> <p>You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> </li> </ul> <p> <b>Required Permissions</b>: To use this action, an AWS Identity and Access Management (IAM) user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "InstanceId": {},
  "LayerIds": {}
}
```

<h3 id="assigninstance-parameters">Parameters</h3>

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
|body|body|[AssignInstanceRequest](#schemaassigninstancerequest)|true|none|
|» InstanceId|body|object|true|none|
|» LayerIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.AssignInstance|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="assigninstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssignVolume

<a id="opIdAssignVolume"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.AssignVolume' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.AssignVolume' \
  -d '{
    "VolumeId": {},
    "InstanceId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.AssignVolume`

<p>Assigns one of the stack's registered Amazon EBS volumes to a specified instance. The volume must first be registered with the stack by calling <a>RegisterVolume</a>. After you register the volume, you must call <a>UpdateVolume</a> to specify a mount point before calling <code>AssignVolume</code>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "VolumeId": {},
  "InstanceId": {}
}
```

<h3 id="assignvolume-parameters">Parameters</h3>

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
|body|body|[AssignVolumeRequest](#schemaassignvolumerequest)|true|none|
|» VolumeId|body|object|true|none|
|» InstanceId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.AssignVolume|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="assignvolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateElasticIp

<a id="opIdAssociateElasticIp"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.AssociateElasticIp' \
  -d '{
    "ElasticIp": {},
    "InstanceId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp`

<p>Associates one of the stack's registered Elastic IP addresses with a specified instance. The address must first be registered with the stack by calling <a>RegisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "ElasticIp": {},
  "InstanceId": {}
}
```

<h3 id="associateelasticip-parameters">Parameters</h3>

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
|body|body|[AssociateElasticIpRequest](#schemaassociateelasticiprequest)|true|none|
|» ElasticIp|body|object|true|none|
|» InstanceId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.AssociateElasticIp|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="associateelasticip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AttachElasticLoadBalancer

<a id="opIdAttachElasticLoadBalancer"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.AttachElasticLoadBalancer' \
  -d '{
    "ElasticLoadBalancerName": {},
    "LayerId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer`

<p>Attaches an Elastic Load Balancing load balancer to a specified layer. AWS OpsWorks Stacks does not support Application Load Balancer. You can only use Classic Load Balancer with AWS OpsWorks Stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers-elb.html">Elastic Load Balancing</a>.</p> <note> <p>You must create the Elastic Load Balancing instance separately, by using the Elastic Load Balancing console, API, or CLI. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/Welcome.html"> Elastic Load Balancing Developer Guide</a>.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "ElasticLoadBalancerName": {},
  "LayerId": {}
}
```

<h3 id="attachelasticloadbalancer-parameters">Parameters</h3>

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
|body|body|[AttachElasticLoadBalancerRequest](#schemaattachelasticloadbalancerrequest)|true|none|
|» ElasticLoadBalancerName|body|object|true|none|
|» LayerId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.AttachElasticLoadBalancer|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="attachelasticloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CloneStack

<a id="opIdCloneStack"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.CloneStack' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.CloneStack' \
  -d '{
    "SourceStackId": {},
    "Name": {},
    "Region": {},
    "VpcId": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "ServiceRoleArn": {},
    "DefaultInstanceProfileArn": {},
    "DefaultOs": {},
    "HostnameTheme": {},
    "DefaultAvailabilityZone": {},
    "DefaultSubnetId": {},
    "CustomJson": {},
    "ConfigurationManager": {
      "Name": {},
      "Version": {}
    },
    "ChefConfiguration": {
      "ManageBerkshelf": {},
      "BerkshelfVersion": {}
    },
    "UseCustomCookbooks": {},
    "UseOpsworksSecurityGroups": {},
    "CustomCookbooksSource": {
      "Type": {},
      "Url": {},
      "Username": {},
      "Password": {},
      "SshKey": {},
      "Revision": {}
    },
    "DefaultSshKeyName": {},
    "ClonePermissions": {},
    "CloneAppIds": {},
    "DefaultRootDeviceType": {},
    "AgentVersion": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.CloneStack`

<p>Creates a clone of a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-cloning.html">Clone a Stack</a>. By default, all parameters are set to the values used by the parent stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "SourceStackId": {},
  "Name": {},
  "Region": {},
  "VpcId": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "ServiceRoleArn": {},
  "DefaultInstanceProfileArn": {},
  "DefaultOs": {},
  "HostnameTheme": {},
  "DefaultAvailabilityZone": {},
  "DefaultSubnetId": {},
  "CustomJson": {},
  "ConfigurationManager": {
    "Name": {},
    "Version": {}
  },
  "ChefConfiguration": {
    "ManageBerkshelf": {},
    "BerkshelfVersion": {}
  },
  "UseCustomCookbooks": {},
  "UseOpsworksSecurityGroups": {},
  "CustomCookbooksSource": {
    "Type": {},
    "Url": {},
    "Username": {},
    "Password": {},
    "SshKey": {},
    "Revision": {}
  },
  "DefaultSshKeyName": {},
  "ClonePermissions": {},
  "CloneAppIds": {},
  "DefaultRootDeviceType": {},
  "AgentVersion": {}
}
```

<h3 id="clonestack-parameters">Parameters</h3>

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
|body|body|[CloneStackRequest](#schemaclonestackrequest)|true|none|
|» SourceStackId|body|object|true|none|
|» Name|body|object|false|none|
|» Region|body|object|false|none|
|» VpcId|body|object|false|none|
|» Attributes|body|object|false|none|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» ServiceRoleArn|body|object|true|none|
|» DefaultInstanceProfileArn|body|object|false|none|
|» DefaultOs|body|object|false|none|
|» HostnameTheme|body|object|false|none|
|» DefaultAvailabilityZone|body|object|false|none|
|» DefaultSubnetId|body|object|false|none|
|» CustomJson|body|object|false|none|
|» ConfigurationManager|body|object|false|none|
|» » Name|body|object|false|none|
|» » Version|body|object|false|none|
|» ChefConfiguration|body|object|false|none|
|» » ManageBerkshelf|body|object|false|none|
|» » BerkshelfVersion|body|object|false|none|
|» UseCustomCookbooks|body|object|false|none|
|» UseOpsworksSecurityGroups|body|object|false|none|
|» CustomCookbooksSource|body|object|false|none|
|» » Type|body|object|false|none|
|» » Url|body|object|false|none|
|» » Username|body|object|false|none|
|» » Password|body|object|false|none|
|» » SshKey|body|object|false|none|
|» » Revision|body|object|false|none|
|» DefaultSshKeyName|body|object|false|none|
|» ClonePermissions|body|object|false|none|
|» CloneAppIds|body|object|false|none|
|» DefaultRootDeviceType|body|object|false|none|
|» AgentVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.CloneStack|

> Example responses

> 200 Response

```json
{
  "StackId": {}
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

<h3 id="clonestack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloneStackResult](#schemaclonestackresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApp

<a id="opIdCreateApp"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.CreateApp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.CreateApp' \
  -d '{
    "StackId": {},
    "Shortname": {},
    "Name": {},
    "Description": {},
    "DataSources": {},
    "Type": {},
    "AppSource": {
      "Type": {},
      "Url": {},
      "Username": {},
      "Password": {},
      "SshKey": {},
      "Revision": {}
    },
    "Domains": {},
    "EnableSsl": {},
    "SslConfiguration": {
      "Certificate": {},
      "PrivateKey": {},
      "Chain": {}
    },
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "Environment": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.CreateApp`

<p>Creates an app for a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "StackId": {},
  "Shortname": {},
  "Name": {},
  "Description": {},
  "DataSources": {},
  "Type": {},
  "AppSource": {
    "Type": {},
    "Url": {},
    "Username": {},
    "Password": {},
    "SshKey": {},
    "Revision": {}
  },
  "Domains": {},
  "EnableSsl": {},
  "SslConfiguration": {
    "Certificate": {},
    "PrivateKey": {},
    "Chain": {}
  },
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "Environment": {}
}
```

<h3 id="createapp-parameters">Parameters</h3>

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
|body|body|[CreateAppRequest](#schemacreateapprequest)|true|none|
|» StackId|body|object|true|none|
|» Shortname|body|object|false|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» DataSources|body|object|false|none|
|» Type|body|object|true|none|
|» AppSource|body|object|false|none|
|» » Type|body|object|false|none|
|» » Url|body|object|false|none|
|» » Username|body|object|false|none|
|» » Password|body|object|false|none|
|» » SshKey|body|object|false|none|
|» » Revision|body|object|false|none|
|» Domains|body|object|false|none|
|» EnableSsl|body|object|false|none|
|» SslConfiguration|body|object|false|none|
|» » Certificate|body|object|true|none|
|» » PrivateKey|body|object|true|none|
|» » Chain|body|object|false|none|
|» Attributes|body|object|false|none|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» Environment|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.CreateApp|

> Example responses

> 200 Response

```json
{
  "AppId": {}
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

<h3 id="createapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAppResult](#schemacreateappresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDeployment

<a id="opIdCreateDeployment"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.CreateDeployment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.CreateDeployment' \
  -d '{
    "StackId": {},
    "AppId": {},
    "InstanceIds": {},
    "LayerIds": {},
    "Command": {
      "Name": {},
      "Args": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      }
    },
    "Comment": {},
    "CustomJson": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.CreateDeployment`

<p>Runs deployment or stack commands. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-deploying.html">Deploying Apps</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-commands.html">Run Stack Commands</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "StackId": {},
  "AppId": {},
  "InstanceIds": {},
  "LayerIds": {},
  "Command": {
    "Name": {},
    "Args": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "Comment": {},
  "CustomJson": {}
}
```

<h3 id="createdeployment-parameters">Parameters</h3>

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
|body|body|[CreateDeploymentRequest](#schemacreatedeploymentrequest)|true|none|
|» StackId|body|object|true|none|
|» AppId|body|object|false|none|
|» InstanceIds|body|object|false|none|
|» LayerIds|body|object|false|none|
|» Command|body|object|true|none|
|» » Name|body|object|true|none|
|» » Args|body|object|false|none|
|» » » **additionalProperties**|body|[Strings](#schemastrings)|false|none|
|» Comment|body|object|false|none|
|» CustomJson|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.CreateDeployment|

> Example responses

> 200 Response

```json
{
  "DeploymentId": {}
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

<h3 id="createdeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDeploymentResult](#schemacreatedeploymentresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateInstance

<a id="opIdCreateInstance"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.CreateInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.CreateInstance' \
  -d '{
    "StackId": {},
    "LayerIds": {},
    "InstanceType": {},
    "AutoScalingType": {},
    "Hostname": {},
    "Os": {},
    "AmiId": {},
    "SshKeyName": {},
    "AvailabilityZone": {},
    "VirtualizationType": {},
    "SubnetId": {},
    "Architecture": {},
    "RootDeviceType": {},
    "BlockDeviceMappings": {},
    "InstallUpdatesOnBoot": {},
    "EbsOptimized": {},
    "AgentVersion": {},
    "Tenancy": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.CreateInstance`

<p>Creates an instance in a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html">Adding an Instance to a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "StackId": {},
  "LayerIds": {},
  "InstanceType": {},
  "AutoScalingType": {},
  "Hostname": {},
  "Os": {},
  "AmiId": {},
  "SshKeyName": {},
  "AvailabilityZone": {},
  "VirtualizationType": {},
  "SubnetId": {},
  "Architecture": {},
  "RootDeviceType": {},
  "BlockDeviceMappings": {},
  "InstallUpdatesOnBoot": {},
  "EbsOptimized": {},
  "AgentVersion": {},
  "Tenancy": {}
}
```

<h3 id="createinstance-parameters">Parameters</h3>

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
|body|body|[CreateInstanceRequest](#schemacreateinstancerequest)|true|none|
|» StackId|body|object|true|none|
|» LayerIds|body|object|true|none|
|» InstanceType|body|object|true|none|
|» AutoScalingType|body|object|false|none|
|» Hostname|body|object|false|none|
|» Os|body|object|false|none|
|» AmiId|body|object|false|none|
|» SshKeyName|body|object|false|none|
|» AvailabilityZone|body|object|false|none|
|» VirtualizationType|body|object|false|none|
|» SubnetId|body|object|false|none|
|» Architecture|body|object|false|none|
|» RootDeviceType|body|object|false|none|
|» BlockDeviceMappings|body|object|false|none|
|» InstallUpdatesOnBoot|body|object|false|none|
|» EbsOptimized|body|object|false|none|
|» AgentVersion|body|object|false|none|
|» Tenancy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.CreateInstance|

> Example responses

> 200 Response

```json
{
  "InstanceId": {}
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

<h3 id="createinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateInstanceResult](#schemacreateinstanceresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLayer

<a id="opIdCreateLayer"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.CreateLayer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.CreateLayer' \
  -d '{
    "StackId": {},
    "Type": {},
    "Name": {},
    "Shortname": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "CloudWatchLogsConfiguration": {
      "Enabled": {},
      "LogStreams": {}
    },
    "CustomInstanceProfileArn": {},
    "CustomJson": {},
    "CustomSecurityGroupIds": {},
    "Packages": {},
    "VolumeConfigurations": {},
    "EnableAutoHealing": {},
    "AutoAssignElasticIps": {},
    "AutoAssignPublicIps": {},
    "CustomRecipes": {
      "Setup": {},
      "Configure": {},
      "Deploy": {},
      "Undeploy": {},
      "Shutdown": {}
    },
    "InstallUpdatesOnBoot": {},
    "UseEbsOptimizedInstances": {},
    "LifecycleEventConfiguration": {
      "Shutdown": {
        "ExecutionTimeout": {},
        "DelayUntilElbConnectionsDrained": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.CreateLayer`

<p>Creates a layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-create.html">How to Create a Layer</a>.</p> <note> <p>You should use <b>CreateLayer</b> for noncustom layer types such as PHP App Server only if the stack does not have an existing layer of that type. A stack can have at most one instance of each noncustom layer; if you attempt to create a second instance, <b>CreateLayer</b> fails. A stack can have an arbitrary number of custom layers, so you can call <b>CreateLayer</b> as many times as you like for that layer type.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "StackId": {},
  "Type": {},
  "Name": {},
  "Shortname": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "CloudWatchLogsConfiguration": {
    "Enabled": {},
    "LogStreams": {}
  },
  "CustomInstanceProfileArn": {},
  "CustomJson": {},
  "CustomSecurityGroupIds": {},
  "Packages": {},
  "VolumeConfigurations": {},
  "EnableAutoHealing": {},
  "AutoAssignElasticIps": {},
  "AutoAssignPublicIps": {},
  "CustomRecipes": {
    "Setup": {},
    "Configure": {},
    "Deploy": {},
    "Undeploy": {},
    "Shutdown": {}
  },
  "InstallUpdatesOnBoot": {},
  "UseEbsOptimizedInstances": {},
  "LifecycleEventConfiguration": {
    "Shutdown": {
      "ExecutionTimeout": {},
      "DelayUntilElbConnectionsDrained": {}
    }
  }
}
```

<h3 id="createlayer-parameters">Parameters</h3>

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
|body|body|[CreateLayerRequest](#schemacreatelayerrequest)|true|none|
|» StackId|body|object|true|none|
|» Type|body|object|true|none|
|» Name|body|object|true|none|
|» Shortname|body|object|true|none|
|» Attributes|body|object|false|none|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» CloudWatchLogsConfiguration|body|object|false|none|
|» » Enabled|body|object|false|none|
|» » LogStreams|body|object|false|none|
|» CustomInstanceProfileArn|body|object|false|none|
|» CustomJson|body|object|false|none|
|» CustomSecurityGroupIds|body|object|false|none|
|» Packages|body|object|false|none|
|» VolumeConfigurations|body|object|false|none|
|» EnableAutoHealing|body|object|false|none|
|» AutoAssignElasticIps|body|object|false|none|
|» AutoAssignPublicIps|body|object|false|none|
|» CustomRecipes|body|object|false|none|
|» » Setup|body|object|false|none|
|» » Configure|body|object|false|none|
|» » Deploy|body|object|false|none|
|» » Undeploy|body|object|false|none|
|» » Shutdown|body|object|false|none|
|» InstallUpdatesOnBoot|body|object|false|none|
|» UseEbsOptimizedInstances|body|object|false|none|
|» LifecycleEventConfiguration|body|object|false|none|
|» » Shutdown|body|object|false|none|
|» » » ExecutionTimeout|body|object|false|none|
|» » » DelayUntilElbConnectionsDrained|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.CreateLayer|

> Example responses

> 200 Response

```json
{
  "LayerId": {}
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

<h3 id="createlayer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLayerResult](#schemacreatelayerresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStack

<a id="opIdCreateStack"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.CreateStack' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.CreateStack' \
  -d '{
    "Name": {},
    "Region": {},
    "VpcId": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "ServiceRoleArn": {},
    "DefaultInstanceProfileArn": {},
    "DefaultOs": {},
    "HostnameTheme": {},
    "DefaultAvailabilityZone": {},
    "DefaultSubnetId": {},
    "CustomJson": {},
    "ConfigurationManager": {
      "Name": {},
      "Version": {}
    },
    "ChefConfiguration": {
      "ManageBerkshelf": {},
      "BerkshelfVersion": {}
    },
    "UseCustomCookbooks": {},
    "UseOpsworksSecurityGroups": {},
    "CustomCookbooksSource": {
      "Type": {},
      "Url": {},
      "Username": {},
      "Password": {},
      "SshKey": {},
      "Revision": {}
    },
    "DefaultSshKeyName": {},
    "DefaultRootDeviceType": {},
    "AgentVersion": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.CreateStack`

<p>Creates a new stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-edit.html">Create a New Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "Region": {},
  "VpcId": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "ServiceRoleArn": {},
  "DefaultInstanceProfileArn": {},
  "DefaultOs": {},
  "HostnameTheme": {},
  "DefaultAvailabilityZone": {},
  "DefaultSubnetId": {},
  "CustomJson": {},
  "ConfigurationManager": {
    "Name": {},
    "Version": {}
  },
  "ChefConfiguration": {
    "ManageBerkshelf": {},
    "BerkshelfVersion": {}
  },
  "UseCustomCookbooks": {},
  "UseOpsworksSecurityGroups": {},
  "CustomCookbooksSource": {
    "Type": {},
    "Url": {},
    "Username": {},
    "Password": {},
    "SshKey": {},
    "Revision": {}
  },
  "DefaultSshKeyName": {},
  "DefaultRootDeviceType": {},
  "AgentVersion": {}
}
```

<h3 id="createstack-parameters">Parameters</h3>

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
|body|body|[CreateStackRequest](#schemacreatestackrequest)|true|none|
|» Name|body|object|true|none|
|» Region|body|object|true|none|
|» VpcId|body|object|false|none|
|» Attributes|body|object|false|none|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» ServiceRoleArn|body|object|true|none|
|» DefaultInstanceProfileArn|body|object|true|none|
|» DefaultOs|body|object|false|none|
|» HostnameTheme|body|object|false|none|
|» DefaultAvailabilityZone|body|object|false|none|
|» DefaultSubnetId|body|object|false|none|
|» CustomJson|body|object|false|none|
|» ConfigurationManager|body|object|false|none|
|» » Name|body|object|false|none|
|» » Version|body|object|false|none|
|» ChefConfiguration|body|object|false|none|
|» » ManageBerkshelf|body|object|false|none|
|» » BerkshelfVersion|body|object|false|none|
|» UseCustomCookbooks|body|object|false|none|
|» UseOpsworksSecurityGroups|body|object|false|none|
|» CustomCookbooksSource|body|object|false|none|
|» » Type|body|object|false|none|
|» » Url|body|object|false|none|
|» » Username|body|object|false|none|
|» » Password|body|object|false|none|
|» » SshKey|body|object|false|none|
|» » Revision|body|object|false|none|
|» DefaultSshKeyName|body|object|false|none|
|» DefaultRootDeviceType|body|object|false|none|
|» AgentVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.CreateStack|

> Example responses

> 200 Response

```json
{
  "StackId": {}
}
```

> 480 Response

```json
null
```

<h3 id="createstack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStackResult](#schemacreatestackresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUserProfile

<a id="opIdCreateUserProfile"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.CreateUserProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.CreateUserProfile' \
  -d '{
    "IamUserArn": {},
    "SshUsername": {},
    "SshPublicKey": {},
    "AllowSelfManagement": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.CreateUserProfile`

<p>Creates a new user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "IamUserArn": {},
  "SshUsername": {},
  "SshPublicKey": {},
  "AllowSelfManagement": {}
}
```

<h3 id="createuserprofile-parameters">Parameters</h3>

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
|body|body|[CreateUserProfileRequest](#schemacreateuserprofilerequest)|true|none|
|» IamUserArn|body|object|true|none|
|» SshUsername|body|object|false|none|
|» SshPublicKey|body|object|false|none|
|» AllowSelfManagement|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.CreateUserProfile|

> Example responses

> 200 Response

```json
{
  "IamUserArn": {}
}
```

> 480 Response

```json
null
```

<h3 id="createuserprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUserProfileResult](#schemacreateuserprofileresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApp

<a id="opIdDeleteApp"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DeleteApp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DeleteApp' \
  -d '{
    "AppId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DeleteApp`

<p>Deletes a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "AppId": {}
}
```

<h3 id="deleteapp-parameters">Parameters</h3>

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
|body|body|[DeleteAppRequest](#schemadeleteapprequest)|true|none|
|» AppId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DeleteApp|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deleteapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteInstance

<a id="opIdDeleteInstance"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DeleteInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DeleteInstance' \
  -d '{
    "InstanceId": {},
    "DeleteElasticIp": {},
    "DeleteVolumes": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DeleteInstance`

<p>Deletes a specified instance, which terminates the associated Amazon EC2 instance. You must stop an instance before you can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-delete.html">Deleting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "InstanceId": {},
  "DeleteElasticIp": {},
  "DeleteVolumes": {}
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
|» InstanceId|body|object|true|none|
|» DeleteElasticIp|body|object|false|none|
|» DeleteVolumes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DeleteInstance|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deleteinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLayer

<a id="opIdDeleteLayer"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DeleteLayer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DeleteLayer' \
  -d '{
    "LayerId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DeleteLayer`

<p>Deletes a specified layer. You must first stop and then delete all associated instances or unassign registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-delete.html">How to Delete a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "LayerId": {}
}
```

<h3 id="deletelayer-parameters">Parameters</h3>

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
|body|body|[DeleteLayerRequest](#schemadeletelayerrequest)|true|none|
|» LayerId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DeleteLayer|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deletelayer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStack

<a id="opIdDeleteStack"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DeleteStack' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DeleteStack' \
  -d '{
    "StackId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DeleteStack`

<p>Deletes a specified stack. You must first delete all instances, layers, and apps or deregister registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-shutting.html">Shut Down a Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "StackId": {}
}
```

<h3 id="deletestack-parameters">Parameters</h3>

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
|body|body|[DeleteStackRequest](#schemadeletestackrequest)|true|none|
|» StackId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DeleteStack|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deletestack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUserProfile

<a id="opIdDeleteUserProfile"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DeleteUserProfile' \
  -d '{
    "IamUserArn": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile`

<p>Deletes a user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "IamUserArn": {}
}
```

<h3 id="deleteuserprofile-parameters">Parameters</h3>

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
|body|body|[DeleteUserProfileRequest](#schemadeleteuserprofilerequest)|true|none|
|» IamUserArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DeleteUserProfile|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deleteuserprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterEcsCluster

<a id="opIdDeregisterEcsCluster"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DeregisterEcsCluster' \
  -d '{
    "EcsClusterArn": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster`

<p>Deregisters a specified Amazon ECS cluster from a stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html#workinglayers-ecscluster-delete"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html</a>.</p>

> Body parameter

```json
{
  "EcsClusterArn": {}
}
```

<h3 id="deregisterecscluster-parameters">Parameters</h3>

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
|body|body|[DeregisterEcsClusterRequest](#schemaderegisterecsclusterrequest)|true|none|
|» EcsClusterArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DeregisterEcsCluster|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deregisterecscluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterElasticIp

<a id="opIdDeregisterElasticIp"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DeregisterElasticIp' \
  -d '{
    "ElasticIp": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp`

<p>Deregisters a specified Elastic IP address. The address can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "ElasticIp": {}
}
```

<h3 id="deregisterelasticip-parameters">Parameters</h3>

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
|body|body|[DeregisterElasticIpRequest](#schemaderegisterelasticiprequest)|true|none|
|» ElasticIp|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DeregisterElasticIp|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deregisterelasticip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterInstance

<a id="opIdDeregisterInstance"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DeregisterInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DeregisterInstance' \
  -d '{
    "InstanceId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DeregisterInstance`

<p>Deregister a registered Amazon EC2 or on-premises instance. This action removes the instance from the stack and returns it to your control. This action cannot be used with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
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
|» InstanceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DeregisterInstance|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deregisterinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterRdsDbInstance

<a id="opIdDeregisterRdsDbInstance"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DeregisterRdsDbInstance' \
  -d '{
    "RdsDbInstanceArn": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance`

<p>Deregisters an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "RdsDbInstanceArn": {}
}
```

<h3 id="deregisterrdsdbinstance-parameters">Parameters</h3>

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
|body|body|[DeregisterRdsDbInstanceRequest](#schemaderegisterrdsdbinstancerequest)|true|none|
|» RdsDbInstanceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DeregisterRdsDbInstance|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deregisterrdsdbinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterVolume

<a id="opIdDeregisterVolume"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DeregisterVolume' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DeregisterVolume' \
  -d '{
    "VolumeId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DeregisterVolume`

<p>Deregisters an Amazon EBS volume. The volume can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "VolumeId": {}
}
```

<h3 id="deregistervolume-parameters">Parameters</h3>

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
|body|body|[DeregisterVolumeRequest](#schemaderegistervolumerequest)|true|none|
|» VolumeId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DeregisterVolume|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deregistervolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAgentVersions

<a id="opIdDescribeAgentVersions"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeAgentVersions' \
  -d '{
    "StackId": {},
    "ConfigurationManager": {
      "Name": {},
      "Version": {}
    }
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions`

Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a configuration manager. <code>DescribeAgentVersions</code> returns a list of available agent versions for the specified stack or configuration manager.

> Body parameter

```json
{
  "StackId": {},
  "ConfigurationManager": {
    "Name": {},
    "Version": {}
  }
}
```

<h3 id="describeagentversions-parameters">Parameters</h3>

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
|body|body|[DescribeAgentVersionsRequest](#schemadescribeagentversionsrequest)|true|none|
|» StackId|body|object|false|none|
|» ConfigurationManager|body|object|false|none|
|» » Name|body|object|false|none|
|» » Version|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeAgentVersions|

> Example responses

> 200 Response

```json
{
  "AgentVersions": {}
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

<h3 id="describeagentversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAgentVersionsResult](#schemadescribeagentversionsresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeApps

<a id="opIdDescribeApps"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeApps' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeApps' \
  -d '{
    "StackId": {},
    "AppIds": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeApps`

<p>Requests a description of a specified set of apps.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "StackId": {},
  "AppIds": {}
}
```

<h3 id="describeapps-parameters">Parameters</h3>

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
|body|body|[DescribeAppsRequest](#schemadescribeappsrequest)|true|none|
|» StackId|body|object|false|none|
|» AppIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeApps|

> Example responses

> 200 Response

```json
{
  "Apps": {}
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

<h3 id="describeapps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAppsResult](#schemadescribeappsresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCommands

<a id="opIdDescribeCommands"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeCommands' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeCommands' \
  -d '{
    "DeploymentId": {},
    "InstanceId": {},
    "CommandIds": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeCommands`

<p>Describes the results of specified commands.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "DeploymentId": {},
  "InstanceId": {},
  "CommandIds": {}
}
```

<h3 id="describecommands-parameters">Parameters</h3>

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
|body|body|[DescribeCommandsRequest](#schemadescribecommandsrequest)|true|none|
|» DeploymentId|body|object|false|none|
|» InstanceId|body|object|false|none|
|» CommandIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeCommands|

> Example responses

> 200 Response

```json
{
  "Commands": {}
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

<h3 id="describecommands-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCommandsResult](#schemadescribecommandsresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDeployments

<a id="opIdDescribeDeployments"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeDeployments' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeDeployments' \
  -d '{
    "StackId": {},
    "AppId": {},
    "DeploymentIds": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeDeployments`

<p>Requests a description of a specified set of deployments.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "StackId": {},
  "AppId": {},
  "DeploymentIds": {}
}
```

<h3 id="describedeployments-parameters">Parameters</h3>

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
|body|body|[DescribeDeploymentsRequest](#schemadescribedeploymentsrequest)|true|none|
|» StackId|body|object|false|none|
|» AppId|body|object|false|none|
|» DeploymentIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeDeployments|

> Example responses

> 200 Response

```json
{
  "Deployments": {}
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

<h3 id="describedeployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDeploymentsResult](#schemadescribedeploymentsresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEcsClusters

<a id="opIdDescribeEcsClusters"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeEcsClusters' \
  -d '{
    "EcsClusterArns": {},
    "StackId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters`

<p>Describes Amazon ECS clusters that are registered with a stack. If you specify only a stack ID, you can use the <code>MaxResults</code> and <code>NextToken</code> parameters to paginate the response. However, AWS OpsWorks Stacks currently supports only one cluster per layer, so the result set has a maximum of one element.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permission. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>

> Body parameter

```json
{
  "EcsClusterArns": {},
  "StackId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describeecsclusters-parameters">Parameters</h3>

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
|body|body|[DescribeEcsClustersRequest](#schemadescribeecsclustersrequest)|true|none|
|» EcsClusterArns|body|object|false|none|
|» StackId|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeEcsClusters|

> Example responses

> 200 Response

```json
{
  "EcsClusters": {},
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

<h3 id="describeecsclusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEcsClustersResult](#schemadescribeecsclustersresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeElasticIps

<a id="opIdDescribeElasticIps"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeElasticIps' \
  -d '{
    "InstanceId": {},
    "StackId": {},
    "Ips": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps`

<p>Describes <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP addresses</a>.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "InstanceId": {},
  "StackId": {},
  "Ips": {}
}
```

<h3 id="describeelasticips-parameters">Parameters</h3>

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
|body|body|[DescribeElasticIpsRequest](#schemadescribeelasticipsrequest)|true|none|
|» InstanceId|body|object|false|none|
|» StackId|body|object|false|none|
|» Ips|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeElasticIps|

> Example responses

> 200 Response

```json
{
  "ElasticIps": {}
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

<h3 id="describeelasticips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeElasticIpsResult](#schemadescribeelasticipsresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeElasticLoadBalancers

<a id="opIdDescribeElasticLoadBalancers"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeElasticLoadBalancers' \
  -d '{
    "StackId": {},
    "LayerIds": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers`

<p>Describes a stack's Elastic Load Balancing instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "StackId": {},
  "LayerIds": {}
}
```

<h3 id="describeelasticloadbalancers-parameters">Parameters</h3>

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
|body|body|[DescribeElasticLoadBalancersRequest](#schemadescribeelasticloadbalancersrequest)|true|none|
|» StackId|body|object|false|none|
|» LayerIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeElasticLoadBalancers|

> Example responses

> 200 Response

```json
{
  "ElasticLoadBalancers": {}
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

<h3 id="describeelasticloadbalancers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeElasticLoadBalancersResult](#schemadescribeelasticloadbalancersresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInstances

<a id="opIdDescribeInstances"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeInstances' \
  -d '{
    "StackId": {},
    "LayerId": {},
    "InstanceIds": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeInstances`

<p>Requests a description of a set of instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "StackId": {},
  "LayerId": {},
  "InstanceIds": {}
}
```

<h3 id="describeinstances-parameters">Parameters</h3>

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
|body|body|[DescribeInstancesRequest](#schemadescribeinstancesrequest)|true|none|
|» StackId|body|object|false|none|
|» LayerId|body|object|false|none|
|» InstanceIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeInstances|

> Example responses

> 200 Response

```json
{
  "Instances": {}
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

<h3 id="describeinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInstancesResult](#schemadescribeinstancesresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLayers

<a id="opIdDescribeLayers"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeLayers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeLayers' \
  -d '{
    "StackId": {},
    "LayerIds": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeLayers`

<p>Requests a description of one or more layers in a specified stack.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "StackId": {},
  "LayerIds": {}
}
```

<h3 id="describelayers-parameters">Parameters</h3>

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
|body|body|[DescribeLayersRequest](#schemadescribelayersrequest)|true|none|
|» StackId|body|object|false|none|
|» LayerIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeLayers|

> Example responses

> 200 Response

```json
{
  "Layers": {}
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

<h3 id="describelayers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLayersResult](#schemadescribelayersresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLoadBasedAutoScaling

<a id="opIdDescribeLoadBasedAutoScaling"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeLoadBasedAutoScaling' \
  -d '{
    "LayerIds": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling`

<p>Describes load-based auto scaling configurations for specified layers.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "LayerIds": {}
}
```

<h3 id="describeloadbasedautoscaling-parameters">Parameters</h3>

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
|body|body|[DescribeLoadBasedAutoScalingRequest](#schemadescribeloadbasedautoscalingrequest)|true|none|
|» LayerIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeLoadBasedAutoScaling|

> Example responses

> 200 Response

```json
{
  "LoadBasedAutoScalingConfigurations": {}
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

<h3 id="describeloadbasedautoscaling-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoadBasedAutoScalingResult](#schemadescribeloadbasedautoscalingresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMyUserProfile

<a id="opIdDescribeMyUserProfile"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeMyUserProfile'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile`

<p>Describes a user's SSH information.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

<h3 id="describemyuserprofile-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeMyUserProfile|

> Example responses

> 200 Response

```json
{
  "UserProfile": {
    "IamUserArn": {},
    "Name": {},
    "SshUsername": {},
    "SshPublicKey": {}
  }
}
```

<h3 id="describemyuserprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMyUserProfileResult](#schemadescribemyuserprofileresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeOperatingSystems

<a id="opIdDescribeOperatingSystems"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeOperatingSystems'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems`

Describes the operating systems that are supported by AWS OpsWorks Stacks.

<h3 id="describeoperatingsystems-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeOperatingSystems|

> Example responses

> 200 Response

```json
{
  "OperatingSystems": {}
}
```

<h3 id="describeoperatingsystems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOperatingSystemsResponse](#schemadescribeoperatingsystemsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePermissions

<a id="opIdDescribePermissions"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribePermissions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribePermissions' \
  -d '{
    "IamUserArn": {},
    "StackId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribePermissions`

<p>Describes the permissions for a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "IamUserArn": {},
  "StackId": {}
}
```

<h3 id="describepermissions-parameters">Parameters</h3>

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
|body|body|[DescribePermissionsRequest](#schemadescribepermissionsrequest)|true|none|
|» IamUserArn|body|object|false|none|
|» StackId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribePermissions|

> Example responses

> 200 Response

```json
{
  "Permissions": {}
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

<h3 id="describepermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePermissionsResult](#schemadescribepermissionsresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRaidArrays

<a id="opIdDescribeRaidArrays"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeRaidArrays' \
  -d '{
    "InstanceId": {},
    "StackId": {},
    "RaidArrayIds": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays`

<p>Describe an instance's RAID arrays.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "InstanceId": {},
  "StackId": {},
  "RaidArrayIds": {}
}
```

<h3 id="describeraidarrays-parameters">Parameters</h3>

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
|body|body|[DescribeRaidArraysRequest](#schemadescriberaidarraysrequest)|true|none|
|» InstanceId|body|object|false|none|
|» StackId|body|object|false|none|
|» RaidArrayIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeRaidArrays|

> Example responses

> 200 Response

```json
{
  "RaidArrays": {}
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

<h3 id="describeraidarrays-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRaidArraysResult](#schemadescriberaidarraysresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRdsDbInstances

<a id="opIdDescribeRdsDbInstances"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeRdsDbInstances' \
  -d '{
    "StackId": {},
    "RdsDbInstanceArns": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances`

<p>Describes Amazon RDS instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>

> Body parameter

```json
{
  "StackId": {},
  "RdsDbInstanceArns": {}
}
```

<h3 id="describerdsdbinstances-parameters">Parameters</h3>

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
|body|body|[DescribeRdsDbInstancesRequest](#schemadescriberdsdbinstancesrequest)|true|none|
|» StackId|body|object|true|none|
|» RdsDbInstanceArns|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeRdsDbInstances|

> Example responses

> 200 Response

```json
{
  "RdsDbInstances": {}
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

<h3 id="describerdsdbinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRdsDbInstancesResult](#schemadescriberdsdbinstancesresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeServiceErrors

<a id="opIdDescribeServiceErrors"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeServiceErrors' \
  -d '{
    "StackId": {},
    "InstanceId": {},
    "ServiceErrorIds": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors`

<p>Describes AWS OpsWorks Stacks service errors.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>

> Body parameter

```json
{
  "StackId": {},
  "InstanceId": {},
  "ServiceErrorIds": {}
}
```

<h3 id="describeserviceerrors-parameters">Parameters</h3>

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
|body|body|[DescribeServiceErrorsRequest](#schemadescribeserviceerrorsrequest)|true|none|
|» StackId|body|object|false|none|
|» InstanceId|body|object|false|none|
|» ServiceErrorIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeServiceErrors|

> Example responses

> 200 Response

```json
{
  "ServiceErrors": {}
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

<h3 id="describeserviceerrors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeServiceErrorsResult](#schemadescribeserviceerrorsresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeStackProvisioningParameters

<a id="opIdDescribeStackProvisioningParameters"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeStackProvisioningParameters' \
  -d '{
    "StackId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters`

<p>Requests a description of a stack's provisioning parameters.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "StackId": {}
}
```

<h3 id="describestackprovisioningparameters-parameters">Parameters</h3>

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
|body|body|[DescribeStackProvisioningParametersRequest](#schemadescribestackprovisioningparametersrequest)|true|none|
|» StackId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeStackProvisioningParameters|

> Example responses

> 200 Response

```json
{
  "AgentInstallerUrl": {},
  "Parameters": {
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

<h3 id="describestackprovisioningparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStackProvisioningParametersResult](#schemadescribestackprovisioningparametersresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeStackSummary

<a id="opIdDescribeStackSummary"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeStackSummary' \
  -d '{
    "StackId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary`

<p>Describes the number of layers and apps in a specified stack, and the number of instances in each state, such as <code>running_setup</code> or <code>online</code>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "StackId": {}
}
```

<h3 id="describestacksummary-parameters">Parameters</h3>

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
|body|body|[DescribeStackSummaryRequest](#schemadescribestacksummaryrequest)|true|none|
|» StackId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeStackSummary|

> Example responses

> 200 Response

```json
{
  "StackSummary": {
    "StackId": {},
    "Name": {},
    "Arn": {},
    "LayersCount": {},
    "AppsCount": {},
    "InstancesCount": {
      "Assigning": {},
      "Booting": {},
      "ConnectionLost": {},
      "Deregistering": {},
      "Online": {},
      "Pending": {},
      "Rebooting": {},
      "Registered": {},
      "Registering": {},
      "Requested": {},
      "RunningSetup": {},
      "SetupFailed": {},
      "ShuttingDown": {},
      "StartFailed": {},
      "StopFailed": {},
      "Stopped": {},
      "Stopping": {},
      "Terminated": {},
      "Terminating": {},
      "Unassigning": {}
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

<h3 id="describestacksummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStackSummaryResult](#schemadescribestacksummaryresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeStacks

<a id="opIdDescribeStacks"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeStacks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeStacks' \
  -d '{
    "StackIds": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeStacks`

<p>Requests a description of one or more stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "StackIds": {}
}
```

<h3 id="describestacks-parameters">Parameters</h3>

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
|body|body|[DescribeStacksRequest](#schemadescribestacksrequest)|true|none|
|» StackIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeStacks|

> Example responses

> 200 Response

```json
{
  "Stacks": {}
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

<h3 id="describestacks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStacksResult](#schemadescribestacksresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTimeBasedAutoScaling

<a id="opIdDescribeTimeBasedAutoScaling"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeTimeBasedAutoScaling' \
  -d '{
    "InstanceIds": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling`

<p>Describes time-based auto scaling configurations for specified instances.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "InstanceIds": {}
}
```

<h3 id="describetimebasedautoscaling-parameters">Parameters</h3>

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
|body|body|[DescribeTimeBasedAutoScalingRequest](#schemadescribetimebasedautoscalingrequest)|true|none|
|» InstanceIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeTimeBasedAutoScaling|

> Example responses

> 200 Response

```json
{
  "TimeBasedAutoScalingConfigurations": {}
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

<h3 id="describetimebasedautoscaling-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTimeBasedAutoScalingResult](#schemadescribetimebasedautoscalingresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUserProfiles

<a id="opIdDescribeUserProfiles"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeUserProfiles' \
  -d '{
    "IamUserArns": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles`

<p>Describe specified users.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "IamUserArns": {}
}
```

<h3 id="describeuserprofiles-parameters">Parameters</h3>

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
|body|body|[DescribeUserProfilesRequest](#schemadescribeuserprofilesrequest)|true|none|
|» IamUserArns|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeUserProfiles|

> Example responses

> 200 Response

```json
{
  "UserProfiles": {}
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

<h3 id="describeuserprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUserProfilesResult](#schemadescribeuserprofilesresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVolumes

<a id="opIdDescribeVolumes"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DescribeVolumes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DescribeVolumes' \
  -d '{
    "InstanceId": {},
    "StackId": {},
    "RaidArrayId": {},
    "VolumeIds": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DescribeVolumes`

<p>Describes an instance's Amazon EBS volumes.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "InstanceId": {},
  "StackId": {},
  "RaidArrayId": {},
  "VolumeIds": {}
}
```

<h3 id="describevolumes-parameters">Parameters</h3>

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
|body|body|[DescribeVolumesRequest](#schemadescribevolumesrequest)|true|none|
|» InstanceId|body|object|false|none|
|» StackId|body|object|false|none|
|» RaidArrayId|body|object|false|none|
|» VolumeIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DescribeVolumes|

> Example responses

> 200 Response

```json
{
  "Volumes": {}
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

<h3 id="describevolumes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeVolumesResult](#schemadescribevolumesresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetachElasticLoadBalancer

<a id="opIdDetachElasticLoadBalancer"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DetachElasticLoadBalancer' \
  -d '{
    "ElasticLoadBalancerName": {},
    "LayerId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer`

<p>Detaches a specified Elastic Load Balancing instance from its layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "ElasticLoadBalancerName": {},
  "LayerId": {}
}
```

<h3 id="detachelasticloadbalancer-parameters">Parameters</h3>

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
|body|body|[DetachElasticLoadBalancerRequest](#schemadetachelasticloadbalancerrequest)|true|none|
|» ElasticLoadBalancerName|body|object|true|none|
|» LayerId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DetachElasticLoadBalancer|

> Example responses

> 480 Response

```json
null
```

<h3 id="detachelasticloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateElasticIp

<a id="opIdDisassociateElasticIp"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.DisassociateElasticIp' \
  -d '{
    "ElasticIp": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp`

<p>Disassociates an Elastic IP address from its instance. The address remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "ElasticIp": {}
}
```

<h3 id="disassociateelasticip-parameters">Parameters</h3>

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
|body|body|[DisassociateElasticIpRequest](#schemadisassociateelasticiprequest)|true|none|
|» ElasticIp|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.DisassociateElasticIp|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="disassociateelasticip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetHostnameSuggestion

<a id="opIdGetHostnameSuggestion"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.GetHostnameSuggestion' \
  -d '{
    "LayerId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion`

<p>Gets a generated host name for the specified layer, based on the current host name theme.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "LayerId": {}
}
```

<h3 id="gethostnamesuggestion-parameters">Parameters</h3>

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
|body|body|[GetHostnameSuggestionRequest](#schemagethostnamesuggestionrequest)|true|none|
|» LayerId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.GetHostnameSuggestion|

> Example responses

> 200 Response

```json
{
  "LayerId": {},
  "Hostname": {}
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

<h3 id="gethostnamesuggestion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetHostnameSuggestionResult](#schemagethostnamesuggestionresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GrantAccess

<a id="opIdGrantAccess"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.GrantAccess' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.GrantAccess' \
  -d '{
    "InstanceId": {},
    "ValidForInMinutes": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.GrantAccess`

<note> <p>This action can be used only with Windows stacks.</p> </note> <p>Grants RDP access to a Windows instance for a specified time period.</p>

> Body parameter

```json
{
  "InstanceId": {},
  "ValidForInMinutes": {}
}
```

<h3 id="grantaccess-parameters">Parameters</h3>

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
|body|body|[GrantAccessRequest](#schemagrantaccessrequest)|true|none|
|» InstanceId|body|object|true|none|
|» ValidForInMinutes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.GrantAccess|

> Example responses

> 200 Response

```json
{
  "TemporaryCredential": {
    "Username": {},
    "Password": {},
    "ValidForInMinutes": {},
    "InstanceId": {}
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

<h3 id="grantaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GrantAccessResult](#schemagrantaccessresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTags

<a id="opIdListTags"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.ListTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.ListTags' \
  -d '{
    "ResourceArn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.ListTags`

Returns a list of tags that are applied to the specified stack or layer.

> Body parameter

```json
{
  "ResourceArn": {},
  "MaxResults": {},
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
|» ResourceArn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.ListTags|

> Example responses

> 200 Response

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
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

<h3 id="listtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsResult](#schemalisttagsresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RebootInstance

<a id="opIdRebootInstance"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.RebootInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.RebootInstance' \
  -d '{
    "InstanceId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.RebootInstance`

<p>Reboots a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "InstanceId": {}
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
|» InstanceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.RebootInstance|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="rebootinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterEcsCluster

<a id="opIdRegisterEcsCluster"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.RegisterEcsCluster' \
  -d '{
    "EcsClusterArn": {},
    "StackId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster`

<p>Registers a specified Amazon ECS cluster with a stack. You can register only one cluster with a stack. A cluster can be registered with only one stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html"> Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "EcsClusterArn": {},
  "StackId": {}
}
```

<h3 id="registerecscluster-parameters">Parameters</h3>

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
|body|body|[RegisterEcsClusterRequest](#schemaregisterecsclusterrequest)|true|none|
|» EcsClusterArn|body|object|true|none|
|» StackId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.RegisterEcsCluster|

> Example responses

> 200 Response

```json
{
  "EcsClusterArn": {}
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

<h3 id="registerecscluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterEcsClusterResult](#schemaregisterecsclusterresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterElasticIp

<a id="opIdRegisterElasticIp"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.RegisterElasticIp' \
  -d '{
    "ElasticIp": {},
    "StackId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp`

<p>Registers an Elastic IP address with a specified stack. An address can be registered with only one stack at a time. If the address is already registered, you must first deregister it by calling <a>DeregisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "ElasticIp": {},
  "StackId": {}
}
```

<h3 id="registerelasticip-parameters">Parameters</h3>

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
|body|body|[RegisterElasticIpRequest](#schemaregisterelasticiprequest)|true|none|
|» ElasticIp|body|object|true|none|
|» StackId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.RegisterElasticIp|

> Example responses

> 200 Response

```json
{
  "ElasticIp": {}
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

<h3 id="registerelasticip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterElasticIpResult](#schemaregisterelasticipresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterInstance

<a id="opIdRegisterInstance"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.RegisterInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.RegisterInstance' \
  -d '{
    "StackId": {},
    "Hostname": {},
    "PublicIp": {},
    "PrivateIp": {},
    "RsaPublicKey": {},
    "RsaPublicKeyFingerprint": {},
    "InstanceIdentity": {
      "Document": {},
      "Signature": {}
    }
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.RegisterInstance`

<p>Registers instances that were created outside of AWS OpsWorks Stacks with a specified stack.</p> <note> <p>We do not recommend using this action to register instances. The complete registration operation includes two tasks: installing the AWS OpsWorks Stacks agent on the instance, and registering the instance with the stack. <code>RegisterInstance</code> handles only the second step. You should instead use the AWS CLI <code>register</code> command, which performs the entire registration operation. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register.html"> Registering an Instance with an AWS OpsWorks Stacks Stack</a>.</p> </note> <p>Registered instances have the same requirements as instances that are created by using the <a>CreateInstance</a> API. For example, registered instances must be running a supported Linux-based operating system, and they must have a supported instance type. For more information about requirements for instances that you want to register, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register-registering-preparer.html"> Preparing the Instance</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "StackId": {},
  "Hostname": {},
  "PublicIp": {},
  "PrivateIp": {},
  "RsaPublicKey": {},
  "RsaPublicKeyFingerprint": {},
  "InstanceIdentity": {
    "Document": {},
    "Signature": {}
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
|» StackId|body|object|true|none|
|» Hostname|body|object|false|none|
|» PublicIp|body|object|false|none|
|» PrivateIp|body|object|false|none|
|» RsaPublicKey|body|object|false|none|
|» RsaPublicKeyFingerprint|body|object|false|none|
|» InstanceIdentity|body|object|false|none|
|» » Document|body|object|false|none|
|» » Signature|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.RegisterInstance|

> Example responses

> 200 Response

```json
{
  "InstanceId": {}
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

<h3 id="registerinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterInstanceResult](#schemaregisterinstanceresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterRdsDbInstance

<a id="opIdRegisterRdsDbInstance"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.RegisterRdsDbInstance' \
  -d '{
    "StackId": {},
    "RdsDbInstanceArn": {},
    "DbUser": {},
    "DbPassword": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance`

<p>Registers an Amazon RDS instance with a stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "StackId": {},
  "RdsDbInstanceArn": {},
  "DbUser": {},
  "DbPassword": {}
}
```

<h3 id="registerrdsdbinstance-parameters">Parameters</h3>

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
|body|body|[RegisterRdsDbInstanceRequest](#schemaregisterrdsdbinstancerequest)|true|none|
|» StackId|body|object|true|none|
|» RdsDbInstanceArn|body|object|true|none|
|» DbUser|body|object|true|none|
|» DbPassword|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.RegisterRdsDbInstance|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="registerrdsdbinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterVolume

<a id="opIdRegisterVolume"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.RegisterVolume' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.RegisterVolume' \
  -d '{
    "Ec2VolumeId": {},
    "StackId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.RegisterVolume`

<p>Registers an Amazon EBS volume with a specified stack. A volume can be registered with only one stack at a time. If the volume is already registered, you must first deregister it by calling <a>DeregisterVolume</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "Ec2VolumeId": {},
  "StackId": {}
}
```

<h3 id="registervolume-parameters">Parameters</h3>

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
|body|body|[RegisterVolumeRequest](#schemaregistervolumerequest)|true|none|
|» Ec2VolumeId|body|object|false|none|
|» StackId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.RegisterVolume|

> Example responses

> 200 Response

```json
{
  "VolumeId": {}
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

<h3 id="registervolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterVolumeResult](#schemaregistervolumeresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetLoadBasedAutoScaling

<a id="opIdSetLoadBasedAutoScaling"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.SetLoadBasedAutoScaling' \
  -d '{
    "LayerId": {},
    "Enable": {},
    "UpScaling": {
      "InstanceCount": {},
      "ThresholdsWaitTime": {},
      "IgnoreMetricsTime": {},
      "CpuThreshold": {},
      "MemoryThreshold": {},
      "LoadThreshold": {},
      "Alarms": {}
    },
    "DownScaling": {
      "InstanceCount": {},
      "ThresholdsWaitTime": {},
      "IgnoreMetricsTime": {},
      "CpuThreshold": {},
      "MemoryThreshold": {},
      "LoadThreshold": {},
      "Alarms": {}
    }
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling`

<p>Specify the load-based auto scaling configuration for a specified layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <note> <p>To use load-based auto scaling, you must create a set of load-based auto scaling instances. Load-based auto scaling operates only on the instances from that set, so you must ensure that you have created enough instances to handle the maximum anticipated load.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "LayerId": {},
  "Enable": {},
  "UpScaling": {
    "InstanceCount": {},
    "ThresholdsWaitTime": {},
    "IgnoreMetricsTime": {},
    "CpuThreshold": {},
    "MemoryThreshold": {},
    "LoadThreshold": {},
    "Alarms": {}
  },
  "DownScaling": {
    "InstanceCount": {},
    "ThresholdsWaitTime": {},
    "IgnoreMetricsTime": {},
    "CpuThreshold": {},
    "MemoryThreshold": {},
    "LoadThreshold": {},
    "Alarms": {}
  }
}
```

<h3 id="setloadbasedautoscaling-parameters">Parameters</h3>

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
|body|body|[SetLoadBasedAutoScalingRequest](#schemasetloadbasedautoscalingrequest)|true|none|
|» LayerId|body|object|true|none|
|» Enable|body|object|false|none|
|» UpScaling|body|object|false|none|
|» » InstanceCount|body|object|false|none|
|» » ThresholdsWaitTime|body|object|false|none|
|» » IgnoreMetricsTime|body|object|false|none|
|» » CpuThreshold|body|object|false|none|
|» » MemoryThreshold|body|object|false|none|
|» » LoadThreshold|body|object|false|none|
|» » Alarms|body|object|false|none|
|» DownScaling|body|object|false|none|
|» » InstanceCount|body|object|false|none|
|» » ThresholdsWaitTime|body|object|false|none|
|» » IgnoreMetricsTime|body|object|false|none|
|» » CpuThreshold|body|object|false|none|
|» » MemoryThreshold|body|object|false|none|
|» » LoadThreshold|body|object|false|none|
|» » Alarms|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.SetLoadBasedAutoScaling|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="setloadbasedautoscaling-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetPermission

<a id="opIdSetPermission"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.SetPermission' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.SetPermission' \
  -d '{
    "StackId": {},
    "IamUserArn": {},
    "AllowSsh": {},
    "AllowSudo": {},
    "Level": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.SetPermission`

<p>Specifies a user's permissions. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity.html">Security and Permissions</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "StackId": {},
  "IamUserArn": {},
  "AllowSsh": {},
  "AllowSudo": {},
  "Level": {}
}
```

<h3 id="setpermission-parameters">Parameters</h3>

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
|body|body|[SetPermissionRequest](#schemasetpermissionrequest)|true|none|
|» StackId|body|object|true|none|
|» IamUserArn|body|object|true|none|
|» AllowSsh|body|object|false|none|
|» AllowSudo|body|object|false|none|
|» Level|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.SetPermission|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="setpermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetTimeBasedAutoScaling

<a id="opIdSetTimeBasedAutoScaling"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.SetTimeBasedAutoScaling' \
  -d '{
    "InstanceId": {},
    "AutoScalingSchedule": {
      "Monday": {
        "property1": "string",
        "property2": "string"
      },
      "Tuesday": {
        "property1": "string",
        "property2": "string"
      },
      "Wednesday": {
        "property1": "string",
        "property2": "string"
      },
      "Thursday": {
        "property1": "string",
        "property2": "string"
      },
      "Friday": {
        "property1": "string",
        "property2": "string"
      },
      "Saturday": {
        "property1": "string",
        "property2": "string"
      },
      "Sunday": {
        "property1": "string",
        "property2": "string"
      }
    }
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling`

<p>Specify the time-based auto scaling configuration for a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "InstanceId": {},
  "AutoScalingSchedule": {
    "Monday": {
      "property1": "string",
      "property2": "string"
    },
    "Tuesday": {
      "property1": "string",
      "property2": "string"
    },
    "Wednesday": {
      "property1": "string",
      "property2": "string"
    },
    "Thursday": {
      "property1": "string",
      "property2": "string"
    },
    "Friday": {
      "property1": "string",
      "property2": "string"
    },
    "Saturday": {
      "property1": "string",
      "property2": "string"
    },
    "Sunday": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="settimebasedautoscaling-parameters">Parameters</h3>

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
|body|body|[SetTimeBasedAutoScalingRequest](#schemasettimebasedautoscalingrequest)|true|none|
|» InstanceId|body|object|true|none|
|» AutoScalingSchedule|body|object|false|none|
|» » Monday|body|object|false|none|
|» » » **additionalProperties**|body|[Switch](#schemaswitch)|false|none|
|» » Tuesday|body|object|false|none|
|» » » **additionalProperties**|body|[Switch](#schemaswitch)|false|none|
|» » Wednesday|body|object|false|none|
|» » » **additionalProperties**|body|[Switch](#schemaswitch)|false|none|
|» » Thursday|body|object|false|none|
|» » » **additionalProperties**|body|[Switch](#schemaswitch)|false|none|
|» » Friday|body|object|false|none|
|» » » **additionalProperties**|body|[Switch](#schemaswitch)|false|none|
|» » Saturday|body|object|false|none|
|» » » **additionalProperties**|body|[Switch](#schemaswitch)|false|none|
|» » Sunday|body|object|false|none|
|» » » **additionalProperties**|body|[Switch](#schemaswitch)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.SetTimeBasedAutoScaling|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="settimebasedautoscaling-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartInstance

<a id="opIdStartInstance"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.StartInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.StartInstance' \
  -d '{
    "InstanceId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.StartInstance`

<p>Starts a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "InstanceId": {}
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
|» InstanceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.StartInstance|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="startinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartStack

<a id="opIdStartStack"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.StartStack' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.StartStack' \
  -d '{
    "StackId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.StartStack`

<p>Starts a stack's instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "StackId": {}
}
```

<h3 id="startstack-parameters">Parameters</h3>

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
|body|body|[StartStackRequest](#schemastartstackrequest)|true|none|
|» StackId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.StartStack|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="startstack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopInstance

<a id="opIdStopInstance"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.StopInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.StopInstance' \
  -d '{
    "InstanceId": {},
    "Force": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.StopInstance`

<p>Stops a specified instance. When you stop a standard instance, the data disappears and must be reinstalled when you restart the instance. You can stop an Amazon EBS-backed instance without losing data. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "InstanceId": {},
  "Force": {}
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
|» InstanceId|body|object|true|none|
|» Force|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.StopInstance|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="stopinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopStack

<a id="opIdStopStack"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.StopStack' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.StopStack' \
  -d '{
    "StackId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.StopStack`

<p>Stops a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "StackId": {}
}
```

<h3 id="stopstack-parameters">Parameters</h3>

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
|body|body|[StopStackRequest](#schemastopstackrequest)|true|none|
|» StackId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.StopStack|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="stopstack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.TagResource`

Apply cost-allocation tags to a specified stack or layer in AWS OpsWorks Stacks. For more information about how tagging works, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/tagging.html">Tags</a> in the AWS OpsWorks User Guide.

> Body parameter

```json
{
  "ResourceArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
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
|» ResourceArn|body|object|true|none|
|» Tags|body|object|true|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.TagResource|

> Example responses

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
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UnassignInstance

<a id="opIdUnassignInstance"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.UnassignInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.UnassignInstance' \
  -d '{
    "InstanceId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.UnassignInstance`

<p>Unassigns a registered instance from all layers that are using the instance. The instance remains in the stack as an unassigned instance, and can be assigned to another layer as needed. You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "InstanceId": {}
}
```

<h3 id="unassigninstance-parameters">Parameters</h3>

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
|body|body|[UnassignInstanceRequest](#schemaunassigninstancerequest)|true|none|
|» InstanceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.UnassignInstance|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="unassigninstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UnassignVolume

<a id="opIdUnassignVolume"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.UnassignVolume' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.UnassignVolume' \
  -d '{
    "VolumeId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.UnassignVolume`

<p>Unassigns an assigned Amazon EBS volume. The volume remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "VolumeId": {}
}
```

<h3 id="unassignvolume-parameters">Parameters</h3>

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
|body|body|[UnassignVolumeRequest](#schemaunassignvolumerequest)|true|none|
|» VolumeId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.UnassignVolume|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="unassignvolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.UntagResource`

Removes tags from a specified stack or layer.

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
|body|body|[UntagResourceRequest](#schemauntagresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.UntagResource|

> Example responses

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
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApp

<a id="opIdUpdateApp"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.UpdateApp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.UpdateApp' \
  -d '{
    "AppId": {},
    "Name": {},
    "Description": {},
    "DataSources": {},
    "Type": {},
    "AppSource": {
      "Type": {},
      "Url": {},
      "Username": {},
      "Password": {},
      "SshKey": {},
      "Revision": {}
    },
    "Domains": {},
    "EnableSsl": {},
    "SslConfiguration": {
      "Certificate": {},
      "PrivateKey": {},
      "Chain": {}
    },
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "Environment": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.UpdateApp`

<p>Updates a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "AppId": {},
  "Name": {},
  "Description": {},
  "DataSources": {},
  "Type": {},
  "AppSource": {
    "Type": {},
    "Url": {},
    "Username": {},
    "Password": {},
    "SshKey": {},
    "Revision": {}
  },
  "Domains": {},
  "EnableSsl": {},
  "SslConfiguration": {
    "Certificate": {},
    "PrivateKey": {},
    "Chain": {}
  },
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "Environment": {}
}
```

<h3 id="updateapp-parameters">Parameters</h3>

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
|body|body|[UpdateAppRequest](#schemaupdateapprequest)|true|none|
|» AppId|body|object|true|none|
|» Name|body|object|false|none|
|» Description|body|object|false|none|
|» DataSources|body|object|false|none|
|» Type|body|object|false|none|
|» AppSource|body|object|false|none|
|» » Type|body|object|false|none|
|» » Url|body|object|false|none|
|» » Username|body|object|false|none|
|» » Password|body|object|false|none|
|» » SshKey|body|object|false|none|
|» » Revision|body|object|false|none|
|» Domains|body|object|false|none|
|» EnableSsl|body|object|false|none|
|» SslConfiguration|body|object|false|none|
|» » Certificate|body|object|true|none|
|» » PrivateKey|body|object|true|none|
|» » Chain|body|object|false|none|
|» Attributes|body|object|false|none|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» Environment|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.UpdateApp|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updateapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateElasticIp

<a id="opIdUpdateElasticIp"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.UpdateElasticIp' \
  -d '{
    "ElasticIp": {},
    "Name": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp`

<p>Updates a registered Elastic IP address's name. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "ElasticIp": {},
  "Name": {}
}
```

<h3 id="updateelasticip-parameters">Parameters</h3>

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
|body|body|[UpdateElasticIpRequest](#schemaupdateelasticiprequest)|true|none|
|» ElasticIp|body|object|true|none|
|» Name|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.UpdateElasticIp|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updateelasticip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateInstance

<a id="opIdUpdateInstance"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.UpdateInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.UpdateInstance' \
  -d '{
    "InstanceId": {},
    "LayerIds": {},
    "InstanceType": {},
    "AutoScalingType": {},
    "Hostname": {},
    "Os": {},
    "AmiId": {},
    "SshKeyName": {},
    "Architecture": {},
    "InstallUpdatesOnBoot": {},
    "EbsOptimized": {},
    "AgentVersion": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.UpdateInstance`

<p>Updates a specified instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "InstanceId": {},
  "LayerIds": {},
  "InstanceType": {},
  "AutoScalingType": {},
  "Hostname": {},
  "Os": {},
  "AmiId": {},
  "SshKeyName": {},
  "Architecture": {},
  "InstallUpdatesOnBoot": {},
  "EbsOptimized": {},
  "AgentVersion": {}
}
```

<h3 id="updateinstance-parameters">Parameters</h3>

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
|body|body|[UpdateInstanceRequest](#schemaupdateinstancerequest)|true|none|
|» InstanceId|body|object|true|none|
|» LayerIds|body|object|false|none|
|» InstanceType|body|object|false|none|
|» AutoScalingType|body|object|false|none|
|» Hostname|body|object|false|none|
|» Os|body|object|false|none|
|» AmiId|body|object|false|none|
|» SshKeyName|body|object|false|none|
|» Architecture|body|object|false|none|
|» InstallUpdatesOnBoot|body|object|false|none|
|» EbsOptimized|body|object|false|none|
|» AgentVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.UpdateInstance|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updateinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLayer

<a id="opIdUpdateLayer"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.UpdateLayer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.UpdateLayer' \
  -d '{
    "LayerId": {},
    "Name": {},
    "Shortname": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "CloudWatchLogsConfiguration": {
      "Enabled": {},
      "LogStreams": {}
    },
    "CustomInstanceProfileArn": {},
    "CustomJson": {},
    "CustomSecurityGroupIds": {},
    "Packages": {},
    "VolumeConfigurations": {},
    "EnableAutoHealing": {},
    "AutoAssignElasticIps": {},
    "AutoAssignPublicIps": {},
    "CustomRecipes": {
      "Setup": {},
      "Configure": {},
      "Deploy": {},
      "Undeploy": {},
      "Shutdown": {}
    },
    "InstallUpdatesOnBoot": {},
    "UseEbsOptimizedInstances": {},
    "LifecycleEventConfiguration": {
      "Shutdown": {
        "ExecutionTimeout": {},
        "DelayUntilElbConnectionsDrained": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.UpdateLayer`

<p>Updates a specified layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "LayerId": {},
  "Name": {},
  "Shortname": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "CloudWatchLogsConfiguration": {
    "Enabled": {},
    "LogStreams": {}
  },
  "CustomInstanceProfileArn": {},
  "CustomJson": {},
  "CustomSecurityGroupIds": {},
  "Packages": {},
  "VolumeConfigurations": {},
  "EnableAutoHealing": {},
  "AutoAssignElasticIps": {},
  "AutoAssignPublicIps": {},
  "CustomRecipes": {
    "Setup": {},
    "Configure": {},
    "Deploy": {},
    "Undeploy": {},
    "Shutdown": {}
  },
  "InstallUpdatesOnBoot": {},
  "UseEbsOptimizedInstances": {},
  "LifecycleEventConfiguration": {
    "Shutdown": {
      "ExecutionTimeout": {},
      "DelayUntilElbConnectionsDrained": {}
    }
  }
}
```

<h3 id="updatelayer-parameters">Parameters</h3>

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
|body|body|[UpdateLayerRequest](#schemaupdatelayerrequest)|true|none|
|» LayerId|body|object|true|none|
|» Name|body|object|false|none|
|» Shortname|body|object|false|none|
|» Attributes|body|object|false|none|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» CloudWatchLogsConfiguration|body|object|false|none|
|» » Enabled|body|object|false|none|
|» » LogStreams|body|object|false|none|
|» CustomInstanceProfileArn|body|object|false|none|
|» CustomJson|body|object|false|none|
|» CustomSecurityGroupIds|body|object|false|none|
|» Packages|body|object|false|none|
|» VolumeConfigurations|body|object|false|none|
|» EnableAutoHealing|body|object|false|none|
|» AutoAssignElasticIps|body|object|false|none|
|» AutoAssignPublicIps|body|object|false|none|
|» CustomRecipes|body|object|false|none|
|» » Setup|body|object|false|none|
|» » Configure|body|object|false|none|
|» » Deploy|body|object|false|none|
|» » Undeploy|body|object|false|none|
|» » Shutdown|body|object|false|none|
|» InstallUpdatesOnBoot|body|object|false|none|
|» UseEbsOptimizedInstances|body|object|false|none|
|» LifecycleEventConfiguration|body|object|false|none|
|» » Shutdown|body|object|false|none|
|» » » ExecutionTimeout|body|object|false|none|
|» » » DelayUntilElbConnectionsDrained|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.UpdateLayer|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updatelayer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMyUserProfile

<a id="opIdUpdateMyUserProfile"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.UpdateMyUserProfile' \
  -d '{
    "SshPublicKey": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile`

<p>Updates a user's SSH public key.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "SshPublicKey": {}
}
```

<h3 id="updatemyuserprofile-parameters">Parameters</h3>

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
|body|body|[UpdateMyUserProfileRequest](#schemaupdatemyuserprofilerequest)|true|none|
|» SshPublicKey|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.UpdateMyUserProfile|

> Example responses

> 480 Response

```json
null
```

<h3 id="updatemyuserprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRdsDbInstance

<a id="opIdUpdateRdsDbInstance"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.UpdateRdsDbInstance' \
  -d '{
    "RdsDbInstanceArn": {},
    "DbUser": {},
    "DbPassword": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance`

<p>Updates an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "RdsDbInstanceArn": {},
  "DbUser": {},
  "DbPassword": {}
}
```

<h3 id="updaterdsdbinstance-parameters">Parameters</h3>

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
|body|body|[UpdateRdsDbInstanceRequest](#schemaupdaterdsdbinstancerequest)|true|none|
|» RdsDbInstanceArn|body|object|true|none|
|» DbUser|body|object|false|none|
|» DbPassword|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.UpdateRdsDbInstance|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updaterdsdbinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateStack

<a id="opIdUpdateStack"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.UpdateStack' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.UpdateStack' \
  -d '{
    "StackId": {},
    "Name": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "ServiceRoleArn": {},
    "DefaultInstanceProfileArn": {},
    "DefaultOs": {},
    "HostnameTheme": {},
    "DefaultAvailabilityZone": {},
    "DefaultSubnetId": {},
    "CustomJson": {},
    "ConfigurationManager": {
      "Name": {},
      "Version": {}
    },
    "ChefConfiguration": {
      "ManageBerkshelf": {},
      "BerkshelfVersion": {}
    },
    "UseCustomCookbooks": {},
    "CustomCookbooksSource": {
      "Type": {},
      "Url": {},
      "Username": {},
      "Password": {},
      "SshKey": {},
      "Revision": {}
    },
    "DefaultSshKeyName": {},
    "DefaultRootDeviceType": {},
    "UseOpsworksSecurityGroups": {},
    "AgentVersion": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.UpdateStack`

<p>Updates a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "StackId": {},
  "Name": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "ServiceRoleArn": {},
  "DefaultInstanceProfileArn": {},
  "DefaultOs": {},
  "HostnameTheme": {},
  "DefaultAvailabilityZone": {},
  "DefaultSubnetId": {},
  "CustomJson": {},
  "ConfigurationManager": {
    "Name": {},
    "Version": {}
  },
  "ChefConfiguration": {
    "ManageBerkshelf": {},
    "BerkshelfVersion": {}
  },
  "UseCustomCookbooks": {},
  "CustomCookbooksSource": {
    "Type": {},
    "Url": {},
    "Username": {},
    "Password": {},
    "SshKey": {},
    "Revision": {}
  },
  "DefaultSshKeyName": {},
  "DefaultRootDeviceType": {},
  "UseOpsworksSecurityGroups": {},
  "AgentVersion": {}
}
```

<h3 id="updatestack-parameters">Parameters</h3>

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
|body|body|[UpdateStackRequest](#schemaupdatestackrequest)|true|none|
|» StackId|body|object|true|none|
|» Name|body|object|false|none|
|» Attributes|body|object|false|none|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» ServiceRoleArn|body|object|false|none|
|» DefaultInstanceProfileArn|body|object|false|none|
|» DefaultOs|body|object|false|none|
|» HostnameTheme|body|object|false|none|
|» DefaultAvailabilityZone|body|object|false|none|
|» DefaultSubnetId|body|object|false|none|
|» CustomJson|body|object|false|none|
|» ConfigurationManager|body|object|false|none|
|» » Name|body|object|false|none|
|» » Version|body|object|false|none|
|» ChefConfiguration|body|object|false|none|
|» » ManageBerkshelf|body|object|false|none|
|» » BerkshelfVersion|body|object|false|none|
|» UseCustomCookbooks|body|object|false|none|
|» CustomCookbooksSource|body|object|false|none|
|» » Type|body|object|false|none|
|» » Url|body|object|false|none|
|» » Username|body|object|false|none|
|» » Password|body|object|false|none|
|» » SshKey|body|object|false|none|
|» » Revision|body|object|false|none|
|» DefaultSshKeyName|body|object|false|none|
|» DefaultRootDeviceType|body|object|false|none|
|» UseOpsworksSecurityGroups|body|object|false|none|
|» AgentVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.UpdateStack|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updatestack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUserProfile

<a id="opIdUpdateUserProfile"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.UpdateUserProfile' \
  -d '{
    "IamUserArn": {},
    "SshUsername": {},
    "SshPublicKey": {},
    "AllowSelfManagement": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile`

<p>Updates a specified user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "IamUserArn": {},
  "SshUsername": {},
  "SshPublicKey": {},
  "AllowSelfManagement": {}
}
```

<h3 id="updateuserprofile-parameters">Parameters</h3>

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
|body|body|[UpdateUserProfileRequest](#schemaupdateuserprofilerequest)|true|none|
|» IamUserArn|body|object|true|none|
|» SshUsername|body|object|false|none|
|» SshPublicKey|body|object|false|none|
|» AllowSelfManagement|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.UpdateUserProfile|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updateuserprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVolume

<a id="opIdUpdateVolume"></a>

> Code samples

```bash
curl 'https://opsworks.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorks_20130218.UpdateVolume' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorks_20130218.UpdateVolume' \
  -d '{
    "VolumeId": {},
    "Name": {},
    "MountPoint": {}
  }'
```

`POST /#X-Amz-Target=OpsWorks_20130218.UpdateVolume`

<p>Updates an Amazon EBS volume's name or mount point. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

> Body parameter

```json
{
  "VolumeId": {},
  "Name": {},
  "MountPoint": {}
}
```

<h3 id="updatevolume-parameters">Parameters</h3>

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
|body|body|[UpdateVolumeRequest](#schemaupdatevolumerequest)|true|none|
|» VolumeId|body|object|true|none|
|» Name|body|object|false|none|
|» MountPoint|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorks_20130218.UpdateVolume|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updatevolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssignInstanceRequest">AssignInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassigninstancerequest"></a>
<a id="schema_AssignInstanceRequest"></a>
<a id="tocSassigninstancerequest"></a>
<a id="tocsassigninstancerequest"></a>

```json
{
  "InstanceId": {},
  "LayerIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|LayerIds|object|true|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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

<h2 id="tocS_AssignVolumeRequest">AssignVolumeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassignvolumerequest"></a>
<a id="schema_AssignVolumeRequest"></a>
<a id="tocSassignvolumerequest"></a>
<a id="tocsassignvolumerequest"></a>

```json
{
  "VolumeId": {},
  "InstanceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeId|object|true|none|none|
|InstanceId|object|false|none|none|

<h2 id="tocS_AssociateElasticIpRequest">AssociateElasticIpRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateelasticiprequest"></a>
<a id="schema_AssociateElasticIpRequest"></a>
<a id="tocSassociateelasticiprequest"></a>
<a id="tocsassociateelasticiprequest"></a>

```json
{
  "ElasticIp": {},
  "InstanceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ElasticIp|object|true|none|none|
|InstanceId|object|false|none|none|

<h2 id="tocS_AttachElasticLoadBalancerRequest">AttachElasticLoadBalancerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattachelasticloadbalancerrequest"></a>
<a id="schema_AttachElasticLoadBalancerRequest"></a>
<a id="tocSattachelasticloadbalancerrequest"></a>
<a id="tocsattachelasticloadbalancerrequest"></a>

```json
{
  "ElasticLoadBalancerName": {},
  "LayerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ElasticLoadBalancerName|object|true|none|none|
|LayerId|object|true|none|none|

<h2 id="tocS_CloneStackResult">CloneStackResult</h2>
<!-- backwards compatibility -->
<a id="schemaclonestackresult"></a>
<a id="schema_CloneStackResult"></a>
<a id="tocSclonestackresult"></a>
<a id="tocsclonestackresult"></a>

```json
{
  "StackId": {}
}
```

Contains the response to a <code>CloneStack</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|false|none|none|

<h2 id="tocS_CloneStackRequest">CloneStackRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclonestackrequest"></a>
<a id="schema_CloneStackRequest"></a>
<a id="tocSclonestackrequest"></a>
<a id="tocsclonestackrequest"></a>

```json
{
  "SourceStackId": {},
  "Name": {},
  "Region": {},
  "VpcId": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "ServiceRoleArn": {},
  "DefaultInstanceProfileArn": {},
  "DefaultOs": {},
  "HostnameTheme": {},
  "DefaultAvailabilityZone": {},
  "DefaultSubnetId": {},
  "CustomJson": {},
  "ConfigurationManager": {
    "Name": {},
    "Version": {}
  },
  "ChefConfiguration": {
    "ManageBerkshelf": {},
    "BerkshelfVersion": {}
  },
  "UseCustomCookbooks": {},
  "UseOpsworksSecurityGroups": {},
  "CustomCookbooksSource": {
    "Type": {},
    "Url": {},
    "Username": {},
    "Password": {},
    "SshKey": {},
    "Revision": {}
  },
  "DefaultSshKeyName": {},
  "ClonePermissions": {},
  "CloneAppIds": {},
  "DefaultRootDeviceType": {},
  "AgentVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceStackId|object|true|none|none|
|Name|object|false|none|none|
|Region|object|false|none|none|
|VpcId|object|false|none|none|
|Attributes|object|false|none|none|
|ServiceRoleArn|object|true|none|none|
|DefaultInstanceProfileArn|object|false|none|none|
|DefaultOs|object|false|none|none|
|HostnameTheme|object|false|none|none|
|DefaultAvailabilityZone|object|false|none|none|
|DefaultSubnetId|object|false|none|none|
|CustomJson|object|false|none|none|
|ConfigurationManager|object|false|none|none|
|ChefConfiguration|object|false|none|none|
|UseCustomCookbooks|object|false|none|none|
|UseOpsworksSecurityGroups|object|false|none|none|
|CustomCookbooksSource|object|false|none|none|
|DefaultSshKeyName|object|false|none|none|
|ClonePermissions|object|false|none|none|
|CloneAppIds|object|false|none|none|
|DefaultRootDeviceType|object|false|none|none|
|AgentVersion|object|false|none|none|

<h2 id="tocS_CreateAppResult">CreateAppResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateappresult"></a>
<a id="schema_CreateAppResult"></a>
<a id="tocScreateappresult"></a>
<a id="tocscreateappresult"></a>

```json
{
  "AppId": {}
}
```

Contains the response to a <code>CreateApp</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|

<h2 id="tocS_CreateAppRequest">CreateAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapprequest"></a>
<a id="schema_CreateAppRequest"></a>
<a id="tocScreateapprequest"></a>
<a id="tocscreateapprequest"></a>

```json
{
  "StackId": {},
  "Shortname": {},
  "Name": {},
  "Description": {},
  "DataSources": {},
  "Type": {},
  "AppSource": {
    "Type": {},
    "Url": {},
    "Username": {},
    "Password": {},
    "SshKey": {},
    "Revision": {}
  },
  "Domains": {},
  "EnableSsl": {},
  "SslConfiguration": {
    "Certificate": {},
    "PrivateKey": {},
    "Chain": {}
  },
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "Environment": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|true|none|none|
|Shortname|object|false|none|none|
|Name|object|true|none|none|
|Description|object|false|none|none|
|DataSources|object|false|none|none|
|Type|object|true|none|none|
|AppSource|object|false|none|none|
|Domains|object|false|none|none|
|EnableSsl|object|false|none|none|
|SslConfiguration|object|false|none|none|
|Attributes|object|false|none|none|
|Environment|object|false|none|none|

<h2 id="tocS_CreateDeploymentResult">CreateDeploymentResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentresult"></a>
<a id="schema_CreateDeploymentResult"></a>
<a id="tocScreatedeploymentresult"></a>
<a id="tocscreatedeploymentresult"></a>

```json
{
  "DeploymentId": {}
}
```

Contains the response to a <code>CreateDeployment</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeploymentId|object|false|none|none|

<h2 id="tocS_CreateDeploymentRequest">CreateDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentrequest"></a>
<a id="schema_CreateDeploymentRequest"></a>
<a id="tocScreatedeploymentrequest"></a>
<a id="tocscreatedeploymentrequest"></a>

```json
{
  "StackId": {},
  "AppId": {},
  "InstanceIds": {},
  "LayerIds": {},
  "Command": {
    "Name": {},
    "Args": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "Comment": {},
  "CustomJson": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|true|none|none|
|AppId|object|false|none|none|
|InstanceIds|object|false|none|none|
|LayerIds|object|false|none|none|
|Command|object|true|none|none|
|Comment|object|false|none|none|
|CustomJson|object|false|none|none|

<h2 id="tocS_CreateInstanceResult">CreateInstanceResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstanceresult"></a>
<a id="schema_CreateInstanceResult"></a>
<a id="tocScreateinstanceresult"></a>
<a id="tocscreateinstanceresult"></a>

```json
{
  "InstanceId": {}
}
```

Contains the response to a <code>CreateInstance</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|false|none|none|

<h2 id="tocS_CreateInstanceRequest">CreateInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstancerequest"></a>
<a id="schema_CreateInstanceRequest"></a>
<a id="tocScreateinstancerequest"></a>
<a id="tocscreateinstancerequest"></a>

```json
{
  "StackId": {},
  "LayerIds": {},
  "InstanceType": {},
  "AutoScalingType": {},
  "Hostname": {},
  "Os": {},
  "AmiId": {},
  "SshKeyName": {},
  "AvailabilityZone": {},
  "VirtualizationType": {},
  "SubnetId": {},
  "Architecture": {},
  "RootDeviceType": {},
  "BlockDeviceMappings": {},
  "InstallUpdatesOnBoot": {},
  "EbsOptimized": {},
  "AgentVersion": {},
  "Tenancy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|true|none|none|
|LayerIds|object|true|none|none|
|InstanceType|object|true|none|none|
|AutoScalingType|object|false|none|none|
|Hostname|object|false|none|none|
|Os|object|false|none|none|
|AmiId|object|false|none|none|
|SshKeyName|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|VirtualizationType|object|false|none|none|
|SubnetId|object|false|none|none|
|Architecture|object|false|none|none|
|RootDeviceType|object|false|none|none|
|BlockDeviceMappings|object|false|none|none|
|InstallUpdatesOnBoot|object|false|none|none|
|EbsOptimized|object|false|none|none|
|AgentVersion|object|false|none|none|
|Tenancy|object|false|none|none|

<h2 id="tocS_CreateLayerResult">CreateLayerResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatelayerresult"></a>
<a id="schema_CreateLayerResult"></a>
<a id="tocScreatelayerresult"></a>
<a id="tocscreatelayerresult"></a>

```json
{
  "LayerId": {}
}
```

Contains the response to a <code>CreateLayer</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LayerId|object|false|none|none|

<h2 id="tocS_CreateLayerRequest">CreateLayerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelayerrequest"></a>
<a id="schema_CreateLayerRequest"></a>
<a id="tocScreatelayerrequest"></a>
<a id="tocscreatelayerrequest"></a>

```json
{
  "StackId": {},
  "Type": {},
  "Name": {},
  "Shortname": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "CloudWatchLogsConfiguration": {
    "Enabled": {},
    "LogStreams": {}
  },
  "CustomInstanceProfileArn": {},
  "CustomJson": {},
  "CustomSecurityGroupIds": {},
  "Packages": {},
  "VolumeConfigurations": {},
  "EnableAutoHealing": {},
  "AutoAssignElasticIps": {},
  "AutoAssignPublicIps": {},
  "CustomRecipes": {
    "Setup": {},
    "Configure": {},
    "Deploy": {},
    "Undeploy": {},
    "Shutdown": {}
  },
  "InstallUpdatesOnBoot": {},
  "UseEbsOptimizedInstances": {},
  "LifecycleEventConfiguration": {
    "Shutdown": {
      "ExecutionTimeout": {},
      "DelayUntilElbConnectionsDrained": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|true|none|none|
|Type|object|true|none|none|
|Name|object|true|none|none|
|Shortname|object|true|none|none|
|Attributes|object|false|none|none|
|CloudWatchLogsConfiguration|object|false|none|none|
|CustomInstanceProfileArn|object|false|none|none|
|CustomJson|object|false|none|none|
|CustomSecurityGroupIds|object|false|none|none|
|Packages|object|false|none|none|
|VolumeConfigurations|object|false|none|none|
|EnableAutoHealing|object|false|none|none|
|AutoAssignElasticIps|object|false|none|none|
|AutoAssignPublicIps|object|false|none|none|
|CustomRecipes|object|false|none|none|
|InstallUpdatesOnBoot|object|false|none|none|
|UseEbsOptimizedInstances|object|false|none|none|
|LifecycleEventConfiguration|object|false|none|none|

<h2 id="tocS_CreateStackResult">CreateStackResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatestackresult"></a>
<a id="schema_CreateStackResult"></a>
<a id="tocScreatestackresult"></a>
<a id="tocscreatestackresult"></a>

```json
{
  "StackId": {}
}
```

Contains the response to a <code>CreateStack</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|false|none|none|

<h2 id="tocS_CreateStackRequest">CreateStackRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatestackrequest"></a>
<a id="schema_CreateStackRequest"></a>
<a id="tocScreatestackrequest"></a>
<a id="tocscreatestackrequest"></a>

```json
{
  "Name": {},
  "Region": {},
  "VpcId": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "ServiceRoleArn": {},
  "DefaultInstanceProfileArn": {},
  "DefaultOs": {},
  "HostnameTheme": {},
  "DefaultAvailabilityZone": {},
  "DefaultSubnetId": {},
  "CustomJson": {},
  "ConfigurationManager": {
    "Name": {},
    "Version": {}
  },
  "ChefConfiguration": {
    "ManageBerkshelf": {},
    "BerkshelfVersion": {}
  },
  "UseCustomCookbooks": {},
  "UseOpsworksSecurityGroups": {},
  "CustomCookbooksSource": {
    "Type": {},
    "Url": {},
    "Username": {},
    "Password": {},
    "SshKey": {},
    "Revision": {}
  },
  "DefaultSshKeyName": {},
  "DefaultRootDeviceType": {},
  "AgentVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Region|object|true|none|none|
|VpcId|object|false|none|none|
|Attributes|object|false|none|none|
|ServiceRoleArn|object|true|none|none|
|DefaultInstanceProfileArn|object|true|none|none|
|DefaultOs|object|false|none|none|
|HostnameTheme|object|false|none|none|
|DefaultAvailabilityZone|object|false|none|none|
|DefaultSubnetId|object|false|none|none|
|CustomJson|object|false|none|none|
|ConfigurationManager|object|false|none|none|
|ChefConfiguration|object|false|none|none|
|UseCustomCookbooks|object|false|none|none|
|UseOpsworksSecurityGroups|object|false|none|none|
|CustomCookbooksSource|object|false|none|none|
|DefaultSshKeyName|object|false|none|none|
|DefaultRootDeviceType|object|false|none|none|
|AgentVersion|object|false|none|none|

<h2 id="tocS_CreateUserProfileResult">CreateUserProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserprofileresult"></a>
<a id="schema_CreateUserProfileResult"></a>
<a id="tocScreateuserprofileresult"></a>
<a id="tocscreateuserprofileresult"></a>

```json
{
  "IamUserArn": {}
}
```

Contains the response to a <code>CreateUserProfile</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IamUserArn|object|false|none|none|

<h2 id="tocS_CreateUserProfileRequest">CreateUserProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserprofilerequest"></a>
<a id="schema_CreateUserProfileRequest"></a>
<a id="tocScreateuserprofilerequest"></a>
<a id="tocscreateuserprofilerequest"></a>

```json
{
  "IamUserArn": {},
  "SshUsername": {},
  "SshPublicKey": {},
  "AllowSelfManagement": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IamUserArn|object|true|none|none|
|SshUsername|object|false|none|none|
|SshPublicKey|object|false|none|none|
|AllowSelfManagement|object|false|none|none|

<h2 id="tocS_DeleteAppRequest">DeleteAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapprequest"></a>
<a id="schema_DeleteAppRequest"></a>
<a id="tocSdeleteapprequest"></a>
<a id="tocsdeleteapprequest"></a>

```json
{
  "AppId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|true|none|none|

<h2 id="tocS_DeleteInstanceRequest">DeleteInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinstancerequest"></a>
<a id="schema_DeleteInstanceRequest"></a>
<a id="tocSdeleteinstancerequest"></a>
<a id="tocsdeleteinstancerequest"></a>

```json
{
  "InstanceId": {},
  "DeleteElasticIp": {},
  "DeleteVolumes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|DeleteElasticIp|object|false|none|none|
|DeleteVolumes|object|false|none|none|

<h2 id="tocS_DeleteLayerRequest">DeleteLayerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelayerrequest"></a>
<a id="schema_DeleteLayerRequest"></a>
<a id="tocSdeletelayerrequest"></a>
<a id="tocsdeletelayerrequest"></a>

```json
{
  "LayerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LayerId|object|true|none|none|

<h2 id="tocS_DeleteStackRequest">DeleteStackRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletestackrequest"></a>
<a id="schema_DeleteStackRequest"></a>
<a id="tocSdeletestackrequest"></a>
<a id="tocsdeletestackrequest"></a>

```json
{
  "StackId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|true|none|none|

<h2 id="tocS_DeleteUserProfileRequest">DeleteUserProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserprofilerequest"></a>
<a id="schema_DeleteUserProfileRequest"></a>
<a id="tocSdeleteuserprofilerequest"></a>
<a id="tocsdeleteuserprofilerequest"></a>

```json
{
  "IamUserArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IamUserArn|object|true|none|none|

<h2 id="tocS_DeregisterEcsClusterRequest">DeregisterEcsClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterecsclusterrequest"></a>
<a id="schema_DeregisterEcsClusterRequest"></a>
<a id="tocSderegisterecsclusterrequest"></a>
<a id="tocsderegisterecsclusterrequest"></a>

```json
{
  "EcsClusterArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EcsClusterArn|object|true|none|none|

<h2 id="tocS_DeregisterElasticIpRequest">DeregisterElasticIpRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterelasticiprequest"></a>
<a id="schema_DeregisterElasticIpRequest"></a>
<a id="tocSderegisterelasticiprequest"></a>
<a id="tocsderegisterelasticiprequest"></a>

```json
{
  "ElasticIp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ElasticIp|object|true|none|none|

<h2 id="tocS_DeregisterInstanceRequest">DeregisterInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterinstancerequest"></a>
<a id="schema_DeregisterInstanceRequest"></a>
<a id="tocSderegisterinstancerequest"></a>
<a id="tocsderegisterinstancerequest"></a>

```json
{
  "InstanceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|

<h2 id="tocS_DeregisterRdsDbInstanceRequest">DeregisterRdsDbInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterrdsdbinstancerequest"></a>
<a id="schema_DeregisterRdsDbInstanceRequest"></a>
<a id="tocSderegisterrdsdbinstancerequest"></a>
<a id="tocsderegisterrdsdbinstancerequest"></a>

```json
{
  "RdsDbInstanceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RdsDbInstanceArn|object|true|none|none|

<h2 id="tocS_DeregisterVolumeRequest">DeregisterVolumeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegistervolumerequest"></a>
<a id="schema_DeregisterVolumeRequest"></a>
<a id="tocSderegistervolumerequest"></a>
<a id="tocsderegistervolumerequest"></a>

```json
{
  "VolumeId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeId|object|true|none|none|

<h2 id="tocS_DescribeAgentVersionsResult">DescribeAgentVersionsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeagentversionsresult"></a>
<a id="schema_DescribeAgentVersionsResult"></a>
<a id="tocSdescribeagentversionsresult"></a>
<a id="tocsdescribeagentversionsresult"></a>

```json
{
  "AgentVersions": {}
}
```

Contains the response to a <code>DescribeAgentVersions</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgentVersions|object|false|none|none|

<h2 id="tocS_DescribeAgentVersionsRequest">DescribeAgentVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeagentversionsrequest"></a>
<a id="schema_DescribeAgentVersionsRequest"></a>
<a id="tocSdescribeagentversionsrequest"></a>
<a id="tocsdescribeagentversionsrequest"></a>

```json
{
  "StackId": {},
  "ConfigurationManager": {
    "Name": {},
    "Version": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|false|none|none|
|ConfigurationManager|object|false|none|none|

<h2 id="tocS_DescribeAppsResult">DescribeAppsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeappsresult"></a>
<a id="schema_DescribeAppsResult"></a>
<a id="tocSdescribeappsresult"></a>
<a id="tocsdescribeappsresult"></a>

```json
{
  "Apps": {}
}
```

Contains the response to a <code>DescribeApps</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Apps|object|false|none|none|

<h2 id="tocS_DescribeAppsRequest">DescribeAppsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeappsrequest"></a>
<a id="schema_DescribeAppsRequest"></a>
<a id="tocSdescribeappsrequest"></a>
<a id="tocsdescribeappsrequest"></a>

```json
{
  "StackId": {},
  "AppIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|false|none|none|
|AppIds|object|false|none|none|

<h2 id="tocS_DescribeCommandsResult">DescribeCommandsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribecommandsresult"></a>
<a id="schema_DescribeCommandsResult"></a>
<a id="tocSdescribecommandsresult"></a>
<a id="tocsdescribecommandsresult"></a>

```json
{
  "Commands": {}
}
```

Contains the response to a <code>DescribeCommands</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Commands|object|false|none|none|

<h2 id="tocS_DescribeCommandsRequest">DescribeCommandsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecommandsrequest"></a>
<a id="schema_DescribeCommandsRequest"></a>
<a id="tocSdescribecommandsrequest"></a>
<a id="tocsdescribecommandsrequest"></a>

```json
{
  "DeploymentId": {},
  "InstanceId": {},
  "CommandIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeploymentId|object|false|none|none|
|InstanceId|object|false|none|none|
|CommandIds|object|false|none|none|

<h2 id="tocS_DescribeDeploymentsResult">DescribeDeploymentsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribedeploymentsresult"></a>
<a id="schema_DescribeDeploymentsResult"></a>
<a id="tocSdescribedeploymentsresult"></a>
<a id="tocsdescribedeploymentsresult"></a>

```json
{
  "Deployments": {}
}
```

Contains the response to a <code>DescribeDeployments</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Deployments|object|false|none|none|

<h2 id="tocS_DescribeDeploymentsRequest">DescribeDeploymentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedeploymentsrequest"></a>
<a id="schema_DescribeDeploymentsRequest"></a>
<a id="tocSdescribedeploymentsrequest"></a>
<a id="tocsdescribedeploymentsrequest"></a>

```json
{
  "StackId": {},
  "AppId": {},
  "DeploymentIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|false|none|none|
|AppId|object|false|none|none|
|DeploymentIds|object|false|none|none|

<h2 id="tocS_DescribeEcsClustersResult">DescribeEcsClustersResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeecsclustersresult"></a>
<a id="schema_DescribeEcsClustersResult"></a>
<a id="tocSdescribeecsclustersresult"></a>
<a id="tocsdescribeecsclustersresult"></a>

```json
{
  "EcsClusters": {},
  "NextToken": {}
}
```

Contains the response to a <code>DescribeEcsClusters</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EcsClusters|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeEcsClustersRequest">DescribeEcsClustersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeecsclustersrequest"></a>
<a id="schema_DescribeEcsClustersRequest"></a>
<a id="tocSdescribeecsclustersrequest"></a>
<a id="tocsdescribeecsclustersrequest"></a>

```json
{
  "EcsClusterArns": {},
  "StackId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EcsClusterArns|object|false|none|none|
|StackId|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_DescribeElasticIpsResult">DescribeElasticIpsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeelasticipsresult"></a>
<a id="schema_DescribeElasticIpsResult"></a>
<a id="tocSdescribeelasticipsresult"></a>
<a id="tocsdescribeelasticipsresult"></a>

```json
{
  "ElasticIps": {}
}
```

Contains the response to a <code>DescribeElasticIps</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ElasticIps|object|false|none|none|

<h2 id="tocS_DescribeElasticIpsRequest">DescribeElasticIpsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeelasticipsrequest"></a>
<a id="schema_DescribeElasticIpsRequest"></a>
<a id="tocSdescribeelasticipsrequest"></a>
<a id="tocsdescribeelasticipsrequest"></a>

```json
{
  "InstanceId": {},
  "StackId": {},
  "Ips": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|false|none|none|
|StackId|object|false|none|none|
|Ips|object|false|none|none|

<h2 id="tocS_DescribeElasticLoadBalancersResult">DescribeElasticLoadBalancersResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeelasticloadbalancersresult"></a>
<a id="schema_DescribeElasticLoadBalancersResult"></a>
<a id="tocSdescribeelasticloadbalancersresult"></a>
<a id="tocsdescribeelasticloadbalancersresult"></a>

```json
{
  "ElasticLoadBalancers": {}
}
```

Contains the response to a <code>DescribeElasticLoadBalancers</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ElasticLoadBalancers|object|false|none|none|

<h2 id="tocS_DescribeElasticLoadBalancersRequest">DescribeElasticLoadBalancersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeelasticloadbalancersrequest"></a>
<a id="schema_DescribeElasticLoadBalancersRequest"></a>
<a id="tocSdescribeelasticloadbalancersrequest"></a>
<a id="tocsdescribeelasticloadbalancersrequest"></a>

```json
{
  "StackId": {},
  "LayerIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|false|none|none|
|LayerIds|object|false|none|none|

<h2 id="tocS_DescribeInstancesResult">DescribeInstancesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstancesresult"></a>
<a id="schema_DescribeInstancesResult"></a>
<a id="tocSdescribeinstancesresult"></a>
<a id="tocsdescribeinstancesresult"></a>

```json
{
  "Instances": {}
}
```

Contains the response to a <code>DescribeInstances</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Instances|object|false|none|none|

<h2 id="tocS_DescribeInstancesRequest">DescribeInstancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstancesrequest"></a>
<a id="schema_DescribeInstancesRequest"></a>
<a id="tocSdescribeinstancesrequest"></a>
<a id="tocsdescribeinstancesrequest"></a>

```json
{
  "StackId": {},
  "LayerId": {},
  "InstanceIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|false|none|none|
|LayerId|object|false|none|none|
|InstanceIds|object|false|none|none|

<h2 id="tocS_DescribeLayersResult">DescribeLayersResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribelayersresult"></a>
<a id="schema_DescribeLayersResult"></a>
<a id="tocSdescribelayersresult"></a>
<a id="tocsdescribelayersresult"></a>

```json
{
  "Layers": {}
}
```

Contains the response to a <code>DescribeLayers</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Layers|object|false|none|none|

<h2 id="tocS_DescribeLayersRequest">DescribeLayersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelayersrequest"></a>
<a id="schema_DescribeLayersRequest"></a>
<a id="tocSdescribelayersrequest"></a>
<a id="tocsdescribelayersrequest"></a>

```json
{
  "StackId": {},
  "LayerIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|false|none|none|
|LayerIds|object|false|none|none|

<h2 id="tocS_DescribeLoadBasedAutoScalingResult">DescribeLoadBasedAutoScalingResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloadbasedautoscalingresult"></a>
<a id="schema_DescribeLoadBasedAutoScalingResult"></a>
<a id="tocSdescribeloadbasedautoscalingresult"></a>
<a id="tocsdescribeloadbasedautoscalingresult"></a>

```json
{
  "LoadBasedAutoScalingConfigurations": {}
}
```

Contains the response to a <code>DescribeLoadBasedAutoScaling</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBasedAutoScalingConfigurations|object|false|none|none|

<h2 id="tocS_DescribeLoadBasedAutoScalingRequest">DescribeLoadBasedAutoScalingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloadbasedautoscalingrequest"></a>
<a id="schema_DescribeLoadBasedAutoScalingRequest"></a>
<a id="tocSdescribeloadbasedautoscalingrequest"></a>
<a id="tocsdescribeloadbasedautoscalingrequest"></a>

```json
{
  "LayerIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LayerIds|object|true|none|none|

<h2 id="tocS_DescribeMyUserProfileResult">DescribeMyUserProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribemyuserprofileresult"></a>
<a id="schema_DescribeMyUserProfileResult"></a>
<a id="tocSdescribemyuserprofileresult"></a>
<a id="tocsdescribemyuserprofileresult"></a>

```json
{
  "UserProfile": {
    "IamUserArn": {},
    "Name": {},
    "SshUsername": {},
    "SshPublicKey": {}
  }
}
```

Contains the response to a <code>DescribeMyUserProfile</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserProfile|object|false|none|none|

<h2 id="tocS_DescribeOperatingSystemsResponse">DescribeOperatingSystemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeoperatingsystemsresponse"></a>
<a id="schema_DescribeOperatingSystemsResponse"></a>
<a id="tocSdescribeoperatingsystemsresponse"></a>
<a id="tocsdescribeoperatingsystemsresponse"></a>

```json
{
  "OperatingSystems": {}
}
```

The response to a <code>DescribeOperatingSystems</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperatingSystems|object|false|none|none|

<h2 id="tocS_DescribePermissionsResult">DescribePermissionsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribepermissionsresult"></a>
<a id="schema_DescribePermissionsResult"></a>
<a id="tocSdescribepermissionsresult"></a>
<a id="tocsdescribepermissionsresult"></a>

```json
{
  "Permissions": {}
}
```

Contains the response to a <code>DescribePermissions</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Permissions|object|false|none|none|

<h2 id="tocS_DescribePermissionsRequest">DescribePermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepermissionsrequest"></a>
<a id="schema_DescribePermissionsRequest"></a>
<a id="tocSdescribepermissionsrequest"></a>
<a id="tocsdescribepermissionsrequest"></a>

```json
{
  "IamUserArn": {},
  "StackId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IamUserArn|object|false|none|none|
|StackId|object|false|none|none|

<h2 id="tocS_DescribeRaidArraysResult">DescribeRaidArraysResult</h2>
<!-- backwards compatibility -->
<a id="schemadescriberaidarraysresult"></a>
<a id="schema_DescribeRaidArraysResult"></a>
<a id="tocSdescriberaidarraysresult"></a>
<a id="tocsdescriberaidarraysresult"></a>

```json
{
  "RaidArrays": {}
}
```

Contains the response to a <code>DescribeRaidArrays</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RaidArrays|object|false|none|none|

<h2 id="tocS_DescribeRaidArraysRequest">DescribeRaidArraysRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberaidarraysrequest"></a>
<a id="schema_DescribeRaidArraysRequest"></a>
<a id="tocSdescriberaidarraysrequest"></a>
<a id="tocsdescriberaidarraysrequest"></a>

```json
{
  "InstanceId": {},
  "StackId": {},
  "RaidArrayIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|false|none|none|
|StackId|object|false|none|none|
|RaidArrayIds|object|false|none|none|

<h2 id="tocS_DescribeRdsDbInstancesResult">DescribeRdsDbInstancesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescriberdsdbinstancesresult"></a>
<a id="schema_DescribeRdsDbInstancesResult"></a>
<a id="tocSdescriberdsdbinstancesresult"></a>
<a id="tocsdescriberdsdbinstancesresult"></a>

```json
{
  "RdsDbInstances": {}
}
```

Contains the response to a <code>DescribeRdsDbInstances</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RdsDbInstances|object|false|none|none|

<h2 id="tocS_DescribeRdsDbInstancesRequest">DescribeRdsDbInstancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberdsdbinstancesrequest"></a>
<a id="schema_DescribeRdsDbInstancesRequest"></a>
<a id="tocSdescriberdsdbinstancesrequest"></a>
<a id="tocsdescriberdsdbinstancesrequest"></a>

```json
{
  "StackId": {},
  "RdsDbInstanceArns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|true|none|none|
|RdsDbInstanceArns|object|false|none|none|

<h2 id="tocS_DescribeServiceErrorsResult">DescribeServiceErrorsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeserviceerrorsresult"></a>
<a id="schema_DescribeServiceErrorsResult"></a>
<a id="tocSdescribeserviceerrorsresult"></a>
<a id="tocsdescribeserviceerrorsresult"></a>

```json
{
  "ServiceErrors": {}
}
```

Contains the response to a <code>DescribeServiceErrors</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceErrors|object|false|none|none|

<h2 id="tocS_DescribeServiceErrorsRequest">DescribeServiceErrorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeserviceerrorsrequest"></a>
<a id="schema_DescribeServiceErrorsRequest"></a>
<a id="tocSdescribeserviceerrorsrequest"></a>
<a id="tocsdescribeserviceerrorsrequest"></a>

```json
{
  "StackId": {},
  "InstanceId": {},
  "ServiceErrorIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|false|none|none|
|InstanceId|object|false|none|none|
|ServiceErrorIds|object|false|none|none|

<h2 id="tocS_DescribeStackProvisioningParametersResult">DescribeStackProvisioningParametersResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribestackprovisioningparametersresult"></a>
<a id="schema_DescribeStackProvisioningParametersResult"></a>
<a id="tocSdescribestackprovisioningparametersresult"></a>
<a id="tocsdescribestackprovisioningparametersresult"></a>

```json
{
  "AgentInstallerUrl": {},
  "Parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains the response to a <code>DescribeStackProvisioningParameters</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgentInstallerUrl|object|false|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_DescribeStackProvisioningParametersRequest">DescribeStackProvisioningParametersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribestackprovisioningparametersrequest"></a>
<a id="schema_DescribeStackProvisioningParametersRequest"></a>
<a id="tocSdescribestackprovisioningparametersrequest"></a>
<a id="tocsdescribestackprovisioningparametersrequest"></a>

```json
{
  "StackId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|true|none|none|

<h2 id="tocS_DescribeStackSummaryResult">DescribeStackSummaryResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribestacksummaryresult"></a>
<a id="schema_DescribeStackSummaryResult"></a>
<a id="tocSdescribestacksummaryresult"></a>
<a id="tocsdescribestacksummaryresult"></a>

```json
{
  "StackSummary": {
    "StackId": {},
    "Name": {},
    "Arn": {},
    "LayersCount": {},
    "AppsCount": {},
    "InstancesCount": {
      "Assigning": {},
      "Booting": {},
      "ConnectionLost": {},
      "Deregistering": {},
      "Online": {},
      "Pending": {},
      "Rebooting": {},
      "Registered": {},
      "Registering": {},
      "Requested": {},
      "RunningSetup": {},
      "SetupFailed": {},
      "ShuttingDown": {},
      "StartFailed": {},
      "StopFailed": {},
      "Stopped": {},
      "Stopping": {},
      "Terminated": {},
      "Terminating": {},
      "Unassigning": {}
    }
  }
}
```

Contains the response to a <code>DescribeStackSummary</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSummary|object|false|none|none|

<h2 id="tocS_DescribeStackSummaryRequest">DescribeStackSummaryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribestacksummaryrequest"></a>
<a id="schema_DescribeStackSummaryRequest"></a>
<a id="tocSdescribestacksummaryrequest"></a>
<a id="tocsdescribestacksummaryrequest"></a>

```json
{
  "StackId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|true|none|none|

<h2 id="tocS_DescribeStacksResult">DescribeStacksResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribestacksresult"></a>
<a id="schema_DescribeStacksResult"></a>
<a id="tocSdescribestacksresult"></a>
<a id="tocsdescribestacksresult"></a>

```json
{
  "Stacks": {}
}
```

Contains the response to a <code>DescribeStacks</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Stacks|object|false|none|none|

<h2 id="tocS_DescribeStacksRequest">DescribeStacksRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribestacksrequest"></a>
<a id="schema_DescribeStacksRequest"></a>
<a id="tocSdescribestacksrequest"></a>
<a id="tocsdescribestacksrequest"></a>

```json
{
  "StackIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackIds|object|false|none|none|

<h2 id="tocS_DescribeTimeBasedAutoScalingResult">DescribeTimeBasedAutoScalingResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribetimebasedautoscalingresult"></a>
<a id="schema_DescribeTimeBasedAutoScalingResult"></a>
<a id="tocSdescribetimebasedautoscalingresult"></a>
<a id="tocsdescribetimebasedautoscalingresult"></a>

```json
{
  "TimeBasedAutoScalingConfigurations": {}
}
```

Contains the response to a <code>DescribeTimeBasedAutoScaling</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeBasedAutoScalingConfigurations|object|false|none|none|

<h2 id="tocS_DescribeTimeBasedAutoScalingRequest">DescribeTimeBasedAutoScalingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetimebasedautoscalingrequest"></a>
<a id="schema_DescribeTimeBasedAutoScalingRequest"></a>
<a id="tocSdescribetimebasedautoscalingrequest"></a>
<a id="tocsdescribetimebasedautoscalingrequest"></a>

```json
{
  "InstanceIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceIds|object|true|none|none|

<h2 id="tocS_DescribeUserProfilesResult">DescribeUserProfilesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserprofilesresult"></a>
<a id="schema_DescribeUserProfilesResult"></a>
<a id="tocSdescribeuserprofilesresult"></a>
<a id="tocsdescribeuserprofilesresult"></a>

```json
{
  "UserProfiles": {}
}
```

Contains the response to a <code>DescribeUserProfiles</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserProfiles|object|false|none|none|

<h2 id="tocS_DescribeUserProfilesRequest">DescribeUserProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserprofilesrequest"></a>
<a id="schema_DescribeUserProfilesRequest"></a>
<a id="tocSdescribeuserprofilesrequest"></a>
<a id="tocsdescribeuserprofilesrequest"></a>

```json
{
  "IamUserArns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IamUserArns|object|false|none|none|

<h2 id="tocS_DescribeVolumesResult">DescribeVolumesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribevolumesresult"></a>
<a id="schema_DescribeVolumesResult"></a>
<a id="tocSdescribevolumesresult"></a>
<a id="tocsdescribevolumesresult"></a>

```json
{
  "Volumes": {}
}
```

Contains the response to a <code>DescribeVolumes</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Volumes|object|false|none|none|

<h2 id="tocS_DescribeVolumesRequest">DescribeVolumesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribevolumesrequest"></a>
<a id="schema_DescribeVolumesRequest"></a>
<a id="tocSdescribevolumesrequest"></a>
<a id="tocsdescribevolumesrequest"></a>

```json
{
  "InstanceId": {},
  "StackId": {},
  "RaidArrayId": {},
  "VolumeIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|false|none|none|
|StackId|object|false|none|none|
|RaidArrayId|object|false|none|none|
|VolumeIds|object|false|none|none|

<h2 id="tocS_DetachElasticLoadBalancerRequest">DetachElasticLoadBalancerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetachelasticloadbalancerrequest"></a>
<a id="schema_DetachElasticLoadBalancerRequest"></a>
<a id="tocSdetachelasticloadbalancerrequest"></a>
<a id="tocsdetachelasticloadbalancerrequest"></a>

```json
{
  "ElasticLoadBalancerName": {},
  "LayerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ElasticLoadBalancerName|object|true|none|none|
|LayerId|object|true|none|none|

<h2 id="tocS_DisassociateElasticIpRequest">DisassociateElasticIpRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateelasticiprequest"></a>
<a id="schema_DisassociateElasticIpRequest"></a>
<a id="tocSdisassociateelasticiprequest"></a>
<a id="tocsdisassociateelasticiprequest"></a>

```json
{
  "ElasticIp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ElasticIp|object|true|none|none|

<h2 id="tocS_GetHostnameSuggestionResult">GetHostnameSuggestionResult</h2>
<!-- backwards compatibility -->
<a id="schemagethostnamesuggestionresult"></a>
<a id="schema_GetHostnameSuggestionResult"></a>
<a id="tocSgethostnamesuggestionresult"></a>
<a id="tocsgethostnamesuggestionresult"></a>

```json
{
  "LayerId": {},
  "Hostname": {}
}
```

Contains the response to a <code>GetHostnameSuggestion</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LayerId|object|false|none|none|
|Hostname|object|false|none|none|

<h2 id="tocS_GetHostnameSuggestionRequest">GetHostnameSuggestionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagethostnamesuggestionrequest"></a>
<a id="schema_GetHostnameSuggestionRequest"></a>
<a id="tocSgethostnamesuggestionrequest"></a>
<a id="tocsgethostnamesuggestionrequest"></a>

```json
{
  "LayerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LayerId|object|true|none|none|

<h2 id="tocS_GrantAccessResult">GrantAccessResult</h2>
<!-- backwards compatibility -->
<a id="schemagrantaccessresult"></a>
<a id="schema_GrantAccessResult"></a>
<a id="tocSgrantaccessresult"></a>
<a id="tocsgrantaccessresult"></a>

```json
{
  "TemporaryCredential": {
    "Username": {},
    "Password": {},
    "ValidForInMinutes": {},
    "InstanceId": {}
  }
}
```

Contains the response to a <code>GrantAccess</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemporaryCredential|object|false|none|none|

<h2 id="tocS_GrantAccessRequest">GrantAccessRequest</h2>
<!-- backwards compatibility -->
<a id="schemagrantaccessrequest"></a>
<a id="schema_GrantAccessRequest"></a>
<a id="tocSgrantaccessrequest"></a>
<a id="tocsgrantaccessrequest"></a>

```json
{
  "InstanceId": {},
  "ValidForInMinutes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|ValidForInMinutes|object|false|none|none|

<h2 id="tocS_ListTagsResult">ListTagsResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsresult"></a>
<a id="schema_ListTagsResult"></a>
<a id="tocSlisttagsresult"></a>
<a id="tocslisttagsresult"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "NextToken": {}
}
```

Contains the response to a <code>ListTags</code> request.

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
  "ResourceArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_RebootInstanceRequest">RebootInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemarebootinstancerequest"></a>
<a id="schema_RebootInstanceRequest"></a>
<a id="tocSrebootinstancerequest"></a>
<a id="tocsrebootinstancerequest"></a>

```json
{
  "InstanceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|

<h2 id="tocS_RegisterEcsClusterResult">RegisterEcsClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemaregisterecsclusterresult"></a>
<a id="schema_RegisterEcsClusterResult"></a>
<a id="tocSregisterecsclusterresult"></a>
<a id="tocsregisterecsclusterresult"></a>

```json
{
  "EcsClusterArn": {}
}
```

Contains the response to a <code>RegisterEcsCluster</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EcsClusterArn|object|false|none|none|

<h2 id="tocS_RegisterEcsClusterRequest">RegisterEcsClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterecsclusterrequest"></a>
<a id="schema_RegisterEcsClusterRequest"></a>
<a id="tocSregisterecsclusterrequest"></a>
<a id="tocsregisterecsclusterrequest"></a>

```json
{
  "EcsClusterArn": {},
  "StackId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EcsClusterArn|object|true|none|none|
|StackId|object|true|none|none|

<h2 id="tocS_RegisterElasticIpResult">RegisterElasticIpResult</h2>
<!-- backwards compatibility -->
<a id="schemaregisterelasticipresult"></a>
<a id="schema_RegisterElasticIpResult"></a>
<a id="tocSregisterelasticipresult"></a>
<a id="tocsregisterelasticipresult"></a>

```json
{
  "ElasticIp": {}
}
```

Contains the response to a <code>RegisterElasticIp</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ElasticIp|object|false|none|none|

<h2 id="tocS_RegisterElasticIpRequest">RegisterElasticIpRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterelasticiprequest"></a>
<a id="schema_RegisterElasticIpRequest"></a>
<a id="tocSregisterelasticiprequest"></a>
<a id="tocsregisterelasticiprequest"></a>

```json
{
  "ElasticIp": {},
  "StackId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ElasticIp|object|true|none|none|
|StackId|object|true|none|none|

<h2 id="tocS_RegisterInstanceResult">RegisterInstanceResult</h2>
<!-- backwards compatibility -->
<a id="schemaregisterinstanceresult"></a>
<a id="schema_RegisterInstanceResult"></a>
<a id="tocSregisterinstanceresult"></a>
<a id="tocsregisterinstanceresult"></a>

```json
{
  "InstanceId": {}
}
```

Contains the response to a <code>RegisterInstanceResult</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|false|none|none|

<h2 id="tocS_RegisterInstanceRequest">RegisterInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterinstancerequest"></a>
<a id="schema_RegisterInstanceRequest"></a>
<a id="tocSregisterinstancerequest"></a>
<a id="tocsregisterinstancerequest"></a>

```json
{
  "StackId": {},
  "Hostname": {},
  "PublicIp": {},
  "PrivateIp": {},
  "RsaPublicKey": {},
  "RsaPublicKeyFingerprint": {},
  "InstanceIdentity": {
    "Document": {},
    "Signature": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|true|none|none|
|Hostname|object|false|none|none|
|PublicIp|object|false|none|none|
|PrivateIp|object|false|none|none|
|RsaPublicKey|object|false|none|none|
|RsaPublicKeyFingerprint|object|false|none|none|
|InstanceIdentity|object|false|none|none|

<h2 id="tocS_RegisterRdsDbInstanceRequest">RegisterRdsDbInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterrdsdbinstancerequest"></a>
<a id="schema_RegisterRdsDbInstanceRequest"></a>
<a id="tocSregisterrdsdbinstancerequest"></a>
<a id="tocsregisterrdsdbinstancerequest"></a>

```json
{
  "StackId": {},
  "RdsDbInstanceArn": {},
  "DbUser": {},
  "DbPassword": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|true|none|none|
|RdsDbInstanceArn|object|true|none|none|
|DbUser|object|true|none|none|
|DbPassword|object|true|none|none|

<h2 id="tocS_RegisterVolumeResult">RegisterVolumeResult</h2>
<!-- backwards compatibility -->
<a id="schemaregistervolumeresult"></a>
<a id="schema_RegisterVolumeResult"></a>
<a id="tocSregistervolumeresult"></a>
<a id="tocsregistervolumeresult"></a>

```json
{
  "VolumeId": {}
}
```

Contains the response to a <code>RegisterVolume</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeId|object|false|none|none|

<h2 id="tocS_RegisterVolumeRequest">RegisterVolumeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregistervolumerequest"></a>
<a id="schema_RegisterVolumeRequest"></a>
<a id="tocSregistervolumerequest"></a>
<a id="tocsregistervolumerequest"></a>

```json
{
  "Ec2VolumeId": {},
  "StackId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Ec2VolumeId|object|false|none|none|
|StackId|object|true|none|none|

<h2 id="tocS_SetLoadBasedAutoScalingRequest">SetLoadBasedAutoScalingRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetloadbasedautoscalingrequest"></a>
<a id="schema_SetLoadBasedAutoScalingRequest"></a>
<a id="tocSsetloadbasedautoscalingrequest"></a>
<a id="tocssetloadbasedautoscalingrequest"></a>

```json
{
  "LayerId": {},
  "Enable": {},
  "UpScaling": {
    "InstanceCount": {},
    "ThresholdsWaitTime": {},
    "IgnoreMetricsTime": {},
    "CpuThreshold": {},
    "MemoryThreshold": {},
    "LoadThreshold": {},
    "Alarms": {}
  },
  "DownScaling": {
    "InstanceCount": {},
    "ThresholdsWaitTime": {},
    "IgnoreMetricsTime": {},
    "CpuThreshold": {},
    "MemoryThreshold": {},
    "LoadThreshold": {},
    "Alarms": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LayerId|object|true|none|none|
|Enable|object|false|none|none|
|UpScaling|object|false|none|none|
|DownScaling|object|false|none|none|

<h2 id="tocS_SetPermissionRequest">SetPermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetpermissionrequest"></a>
<a id="schema_SetPermissionRequest"></a>
<a id="tocSsetpermissionrequest"></a>
<a id="tocssetpermissionrequest"></a>

```json
{
  "StackId": {},
  "IamUserArn": {},
  "AllowSsh": {},
  "AllowSudo": {},
  "Level": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|true|none|none|
|IamUserArn|object|true|none|none|
|AllowSsh|object|false|none|none|
|AllowSudo|object|false|none|none|
|Level|object|false|none|none|

<h2 id="tocS_SetTimeBasedAutoScalingRequest">SetTimeBasedAutoScalingRequest</h2>
<!-- backwards compatibility -->
<a id="schemasettimebasedautoscalingrequest"></a>
<a id="schema_SetTimeBasedAutoScalingRequest"></a>
<a id="tocSsettimebasedautoscalingrequest"></a>
<a id="tocssettimebasedautoscalingrequest"></a>

```json
{
  "InstanceId": {},
  "AutoScalingSchedule": {
    "Monday": {
      "property1": "string",
      "property2": "string"
    },
    "Tuesday": {
      "property1": "string",
      "property2": "string"
    },
    "Wednesday": {
      "property1": "string",
      "property2": "string"
    },
    "Thursday": {
      "property1": "string",
      "property2": "string"
    },
    "Friday": {
      "property1": "string",
      "property2": "string"
    },
    "Saturday": {
      "property1": "string",
      "property2": "string"
    },
    "Sunday": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|AutoScalingSchedule|object|false|none|none|

<h2 id="tocS_StartInstanceRequest">StartInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartinstancerequest"></a>
<a id="schema_StartInstanceRequest"></a>
<a id="tocSstartinstancerequest"></a>
<a id="tocsstartinstancerequest"></a>

```json
{
  "InstanceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|

<h2 id="tocS_StartStackRequest">StartStackRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartstackrequest"></a>
<a id="schema_StartStackRequest"></a>
<a id="tocSstartstackrequest"></a>
<a id="tocsstartstackrequest"></a>

```json
{
  "StackId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|true|none|none|

<h2 id="tocS_StopInstanceRequest">StopInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopinstancerequest"></a>
<a id="schema_StopInstanceRequest"></a>
<a id="tocSstopinstancerequest"></a>
<a id="tocsstopinstancerequest"></a>

```json
{
  "InstanceId": {},
  "Force": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|Force|object|false|none|none|

<h2 id="tocS_StopStackRequest">StopStackRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopstackrequest"></a>
<a id="schema_StopStackRequest"></a>
<a id="tocSstopstackrequest"></a>
<a id="tocsstopstackrequest"></a>

```json
{
  "StackId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|true|none|none|

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "ResourceArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UnassignInstanceRequest">UnassignInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunassigninstancerequest"></a>
<a id="schema_UnassignInstanceRequest"></a>
<a id="tocSunassigninstancerequest"></a>
<a id="tocsunassigninstancerequest"></a>

```json
{
  "InstanceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|

<h2 id="tocS_UnassignVolumeRequest">UnassignVolumeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunassignvolumerequest"></a>
<a id="schema_UnassignVolumeRequest"></a>
<a id="tocSunassignvolumerequest"></a>
<a id="tocsunassignvolumerequest"></a>

```json
{
  "VolumeId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeId|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

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

<h2 id="tocS_UpdateAppRequest">UpdateAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapprequest"></a>
<a id="schema_UpdateAppRequest"></a>
<a id="tocSupdateapprequest"></a>
<a id="tocsupdateapprequest"></a>

```json
{
  "AppId": {},
  "Name": {},
  "Description": {},
  "DataSources": {},
  "Type": {},
  "AppSource": {
    "Type": {},
    "Url": {},
    "Username": {},
    "Password": {},
    "SshKey": {},
    "Revision": {}
  },
  "Domains": {},
  "EnableSsl": {},
  "SslConfiguration": {
    "Certificate": {},
    "PrivateKey": {},
    "Chain": {}
  },
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "Environment": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|true|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|DataSources|object|false|none|none|
|Type|object|false|none|none|
|AppSource|object|false|none|none|
|Domains|object|false|none|none|
|EnableSsl|object|false|none|none|
|SslConfiguration|object|false|none|none|
|Attributes|object|false|none|none|
|Environment|object|false|none|none|

<h2 id="tocS_UpdateElasticIpRequest">UpdateElasticIpRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateelasticiprequest"></a>
<a id="schema_UpdateElasticIpRequest"></a>
<a id="tocSupdateelasticiprequest"></a>
<a id="tocsupdateelasticiprequest"></a>

```json
{
  "ElasticIp": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ElasticIp|object|true|none|none|
|Name|object|false|none|none|

<h2 id="tocS_UpdateInstanceRequest">UpdateInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinstancerequest"></a>
<a id="schema_UpdateInstanceRequest"></a>
<a id="tocSupdateinstancerequest"></a>
<a id="tocsupdateinstancerequest"></a>

```json
{
  "InstanceId": {},
  "LayerIds": {},
  "InstanceType": {},
  "AutoScalingType": {},
  "Hostname": {},
  "Os": {},
  "AmiId": {},
  "SshKeyName": {},
  "Architecture": {},
  "InstallUpdatesOnBoot": {},
  "EbsOptimized": {},
  "AgentVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|LayerIds|object|false|none|none|
|InstanceType|object|false|none|none|
|AutoScalingType|object|false|none|none|
|Hostname|object|false|none|none|
|Os|object|false|none|none|
|AmiId|object|false|none|none|
|SshKeyName|object|false|none|none|
|Architecture|object|false|none|none|
|InstallUpdatesOnBoot|object|false|none|none|
|EbsOptimized|object|false|none|none|
|AgentVersion|object|false|none|none|

<h2 id="tocS_UpdateLayerRequest">UpdateLayerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelayerrequest"></a>
<a id="schema_UpdateLayerRequest"></a>
<a id="tocSupdatelayerrequest"></a>
<a id="tocsupdatelayerrequest"></a>

```json
{
  "LayerId": {},
  "Name": {},
  "Shortname": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "CloudWatchLogsConfiguration": {
    "Enabled": {},
    "LogStreams": {}
  },
  "CustomInstanceProfileArn": {},
  "CustomJson": {},
  "CustomSecurityGroupIds": {},
  "Packages": {},
  "VolumeConfigurations": {},
  "EnableAutoHealing": {},
  "AutoAssignElasticIps": {},
  "AutoAssignPublicIps": {},
  "CustomRecipes": {
    "Setup": {},
    "Configure": {},
    "Deploy": {},
    "Undeploy": {},
    "Shutdown": {}
  },
  "InstallUpdatesOnBoot": {},
  "UseEbsOptimizedInstances": {},
  "LifecycleEventConfiguration": {
    "Shutdown": {
      "ExecutionTimeout": {},
      "DelayUntilElbConnectionsDrained": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LayerId|object|true|none|none|
|Name|object|false|none|none|
|Shortname|object|false|none|none|
|Attributes|object|false|none|none|
|CloudWatchLogsConfiguration|object|false|none|none|
|CustomInstanceProfileArn|object|false|none|none|
|CustomJson|object|false|none|none|
|CustomSecurityGroupIds|object|false|none|none|
|Packages|object|false|none|none|
|VolumeConfigurations|object|false|none|none|
|EnableAutoHealing|object|false|none|none|
|AutoAssignElasticIps|object|false|none|none|
|AutoAssignPublicIps|object|false|none|none|
|CustomRecipes|object|false|none|none|
|InstallUpdatesOnBoot|object|false|none|none|
|UseEbsOptimizedInstances|object|false|none|none|
|LifecycleEventConfiguration|object|false|none|none|

<h2 id="tocS_UpdateMyUserProfileRequest">UpdateMyUserProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemyuserprofilerequest"></a>
<a id="schema_UpdateMyUserProfileRequest"></a>
<a id="tocSupdatemyuserprofilerequest"></a>
<a id="tocsupdatemyuserprofilerequest"></a>

```json
{
  "SshPublicKey": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SshPublicKey|object|false|none|none|

<h2 id="tocS_UpdateRdsDbInstanceRequest">UpdateRdsDbInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterdsdbinstancerequest"></a>
<a id="schema_UpdateRdsDbInstanceRequest"></a>
<a id="tocSupdaterdsdbinstancerequest"></a>
<a id="tocsupdaterdsdbinstancerequest"></a>

```json
{
  "RdsDbInstanceArn": {},
  "DbUser": {},
  "DbPassword": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RdsDbInstanceArn|object|true|none|none|
|DbUser|object|false|none|none|
|DbPassword|object|false|none|none|

<h2 id="tocS_UpdateStackRequest">UpdateStackRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestackrequest"></a>
<a id="schema_UpdateStackRequest"></a>
<a id="tocSupdatestackrequest"></a>
<a id="tocsupdatestackrequest"></a>

```json
{
  "StackId": {},
  "Name": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "ServiceRoleArn": {},
  "DefaultInstanceProfileArn": {},
  "DefaultOs": {},
  "HostnameTheme": {},
  "DefaultAvailabilityZone": {},
  "DefaultSubnetId": {},
  "CustomJson": {},
  "ConfigurationManager": {
    "Name": {},
    "Version": {}
  },
  "ChefConfiguration": {
    "ManageBerkshelf": {},
    "BerkshelfVersion": {}
  },
  "UseCustomCookbooks": {},
  "CustomCookbooksSource": {
    "Type": {},
    "Url": {},
    "Username": {},
    "Password": {},
    "SshKey": {},
    "Revision": {}
  },
  "DefaultSshKeyName": {},
  "DefaultRootDeviceType": {},
  "UseOpsworksSecurityGroups": {},
  "AgentVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|true|none|none|
|Name|object|false|none|none|
|Attributes|object|false|none|none|
|ServiceRoleArn|object|false|none|none|
|DefaultInstanceProfileArn|object|false|none|none|
|DefaultOs|object|false|none|none|
|HostnameTheme|object|false|none|none|
|DefaultAvailabilityZone|object|false|none|none|
|DefaultSubnetId|object|false|none|none|
|CustomJson|object|false|none|none|
|ConfigurationManager|object|false|none|none|
|ChefConfiguration|object|false|none|none|
|UseCustomCookbooks|object|false|none|none|
|CustomCookbooksSource|object|false|none|none|
|DefaultSshKeyName|object|false|none|none|
|DefaultRootDeviceType|object|false|none|none|
|UseOpsworksSecurityGroups|object|false|none|none|
|AgentVersion|object|false|none|none|

<h2 id="tocS_UpdateUserProfileRequest">UpdateUserProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserprofilerequest"></a>
<a id="schema_UpdateUserProfileRequest"></a>
<a id="tocSupdateuserprofilerequest"></a>
<a id="tocsupdateuserprofilerequest"></a>

```json
{
  "IamUserArn": {},
  "SshUsername": {},
  "SshPublicKey": {},
  "AllowSelfManagement": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IamUserArn|object|true|none|none|
|SshUsername|object|false|none|none|
|SshPublicKey|object|false|none|none|
|AllowSelfManagement|object|false|none|none|

<h2 id="tocS_UpdateVolumeRequest">UpdateVolumeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevolumerequest"></a>
<a id="schema_UpdateVolumeRequest"></a>
<a id="tocSupdatevolumerequest"></a>
<a id="tocsupdatevolumerequest"></a>

```json
{
  "VolumeId": {},
  "Name": {},
  "MountPoint": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeId|object|true|none|none|
|Name|object|false|none|none|
|MountPoint|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_StackConfigurationManager">StackConfigurationManager</h2>
<!-- backwards compatibility -->
<a id="schemastackconfigurationmanager"></a>
<a id="schema_StackConfigurationManager"></a>
<a id="tocSstackconfigurationmanager"></a>
<a id="tocsstackconfigurationmanager"></a>

```json
{
  "Name": {},
  "Version": {}
}
```

Describes the configuration manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_AgentVersion">AgentVersion</h2>
<!-- backwards compatibility -->
<a id="schemaagentversion"></a>
<a id="schema_AgentVersion"></a>
<a id="tocSagentversion"></a>
<a id="tocsagentversion"></a>

```json
{
  "Version": {},
  "ConfigurationManager": {
    "Name": {},
    "Version": {}
  }
}
```

Describes an agent version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Version|object|false|none|none|
|ConfigurationManager|object|false|none|none|

<h2 id="tocS_AgentVersions">AgentVersions</h2>
<!-- backwards compatibility -->
<a id="schemaagentversions"></a>
<a id="schema_AgentVersions"></a>
<a id="tocSagentversions"></a>
<a id="tocsagentversions"></a>

```json
[
  {
    "Version": {},
    "ConfigurationManager": {
      "Name": {},
      "Version": {}
    }
  }
]
```

<h2 id="tocS_DataSources">DataSources</h2>
<!-- backwards compatibility -->
<a id="schemadatasources"></a>
<a id="schema_DataSources"></a>
<a id="tocSdatasources"></a>
<a id="tocsdatasources"></a>

```json
[
  {
    "Type": {},
    "Arn": {},
    "DatabaseName": {}
  }
]
```

<h2 id="tocS_AppType">AppType</h2>
<!-- backwards compatibility -->
<a id="schemaapptype"></a>
<a id="schema_AppType"></a>
<a id="tocSapptype"></a>
<a id="tocsapptype"></a>

```json
"aws-flow-ruby"
```

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "Type": {},
  "Url": {},
  "Username": {},
  "Password": {},
  "SshKey": {},
  "Revision": {}
}
```

Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Url|object|false|none|none|
|Username|object|false|none|none|
|Password|object|false|none|none|
|SshKey|object|false|none|none|
|Revision|object|false|none|none|

<h2 id="tocS_Strings">Strings</h2>
<!-- backwards compatibility -->
<a id="schemastrings"></a>
<a id="schema_Strings"></a>
<a id="tocSstrings"></a>
<a id="tocsstrings"></a>

```json
[
  "string"
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

<h2 id="tocS_SslConfiguration">SslConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasslconfiguration"></a>
<a id="schema_SslConfiguration"></a>
<a id="tocSsslconfiguration"></a>
<a id="tocssslconfiguration"></a>

```json
{
  "Certificate": {},
  "PrivateKey": {},
  "Chain": {}
}
```

Describes an app's SSL configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Certificate|object|true|none|none|
|PrivateKey|object|true|none|none|
|Chain|object|false|none|none|

<h2 id="tocS_AppAttributes">AppAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaappattributes"></a>
<a id="schema_AppAttributes"></a>
<a id="tocSappattributes"></a>
<a id="tocsappattributes"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_EnvironmentVariables">EnvironmentVariables</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentvariables"></a>
<a id="schema_EnvironmentVariables"></a>
<a id="tocSenvironmentvariables"></a>
<a id="tocsenvironmentvariables"></a>

```json
[
  {
    "Key": {},
    "Value": {},
    "Secure": {}
  }
]
```

<h2 id="tocS_App">App</h2>
<!-- backwards compatibility -->
<a id="schemaapp"></a>
<a id="schema_App"></a>
<a id="tocSapp"></a>
<a id="tocsapp"></a>

```json
{
  "AppId": {},
  "StackId": {},
  "Shortname": {},
  "Name": {},
  "Description": {},
  "DataSources": {},
  "Type": {},
  "AppSource": {
    "Type": {},
    "Url": {},
    "Username": {},
    "Password": {},
    "SshKey": {},
    "Revision": {}
  },
  "Domains": {},
  "EnableSsl": {},
  "SslConfiguration": {
    "Certificate": {},
    "PrivateKey": {},
    "Chain": {}
  },
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "CreatedAt": {},
  "Environment": {}
}
```

A description of the app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|StackId|object|false|none|none|
|Shortname|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|DataSources|object|false|none|none|
|Type|object|false|none|none|
|AppSource|object|false|none|none|
|Domains|object|false|none|none|
|EnableSsl|object|false|none|none|
|SslConfiguration|object|false|none|none|
|Attributes|object|false|none|none|
|CreatedAt|object|false|none|none|
|Environment|object|false|none|none|

<h2 id="tocS_AppAttributesKeys">AppAttributesKeys</h2>
<!-- backwards compatibility -->
<a id="schemaappattributeskeys"></a>
<a id="schema_AppAttributesKeys"></a>
<a id="tocSappattributeskeys"></a>
<a id="tocsappattributeskeys"></a>

```json
"DocumentRoot"
```

<h2 id="tocS_Apps">Apps</h2>
<!-- backwards compatibility -->
<a id="schemaapps"></a>
<a id="schema_Apps"></a>
<a id="tocSapps"></a>
<a id="tocsapps"></a>

```json
[
  {
    "AppId": {},
    "StackId": {},
    "Shortname": {},
    "Name": {},
    "Description": {},
    "DataSources": {},
    "Type": {},
    "AppSource": {
      "Type": {},
      "Url": {},
      "Username": {},
      "Password": {},
      "SshKey": {},
      "Revision": {}
    },
    "Domains": {},
    "EnableSsl": {},
    "SslConfiguration": {
      "Certificate": {},
      "PrivateKey": {},
      "Chain": {}
    },
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "CreatedAt": {},
    "Environment": {}
  }
]
```

<h2 id="tocS_Architecture">Architecture</h2>
<!-- backwards compatibility -->
<a id="schemaarchitecture"></a>
<a id="schema_Architecture"></a>
<a id="tocSarchitecture"></a>
<a id="tocsarchitecture"></a>

```json
"x86_64"
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

<h2 id="tocS_Minute">Minute</h2>
<!-- backwards compatibility -->
<a id="schemaminute"></a>
<a id="schema_Minute"></a>
<a id="tocSminute"></a>
<a id="tocsminute"></a>

```json
1
```

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_AutoScalingThresholds">AutoScalingThresholds</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingthresholds"></a>
<a id="schema_AutoScalingThresholds"></a>
<a id="tocSautoscalingthresholds"></a>
<a id="tocsautoscalingthresholds"></a>

```json
{
  "InstanceCount": {},
  "ThresholdsWaitTime": {},
  "IgnoreMetricsTime": {},
  "CpuThreshold": {},
  "MemoryThreshold": {},
  "LoadThreshold": {},
  "Alarms": {}
}
```

Describes a load-based auto scaling upscaling or downscaling threshold configuration, which specifies when AWS OpsWorks Stacks starts or stops load-based instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceCount|object|false|none|none|
|ThresholdsWaitTime|object|false|none|none|
|IgnoreMetricsTime|object|false|none|none|
|CpuThreshold|object|false|none|none|
|MemoryThreshold|object|false|none|none|
|LoadThreshold|object|false|none|none|
|Alarms|object|false|none|none|

<h2 id="tocS_AutoScalingType">AutoScalingType</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingtype"></a>
<a id="schema_AutoScalingType"></a>
<a id="tocSautoscalingtype"></a>
<a id="tocsautoscalingtype"></a>

```json
"load"
```

<h2 id="tocS_EbsBlockDevice">EbsBlockDevice</h2>
<!-- backwards compatibility -->
<a id="schemaebsblockdevice"></a>
<a id="schema_EbsBlockDevice"></a>
<a id="tocSebsblockdevice"></a>
<a id="tocsebsblockdevice"></a>

```json
{
  "SnapshotId": {},
  "Iops": {},
  "VolumeSize": {},
  "VolumeType": {},
  "DeleteOnTermination": {}
}
```

Describes an Amazon EBS volume. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a> data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotId|object|false|none|none|
|Iops|object|false|none|none|
|VolumeSize|object|false|none|none|
|VolumeType|object|false|none|none|
|DeleteOnTermination|object|false|none|none|

<h2 id="tocS_BlockDeviceMapping">BlockDeviceMapping</h2>
<!-- backwards compatibility -->
<a id="schemablockdevicemapping"></a>
<a id="schema_BlockDeviceMapping"></a>
<a id="tocSblockdevicemapping"></a>
<a id="tocsblockdevicemapping"></a>

```json
{
  "DeviceName": {},
  "NoDevice": {},
  "VirtualName": {},
  "Ebs": {
    "SnapshotId": {},
    "Iops": {},
    "VolumeSize": {},
    "VolumeType": {},
    "DeleteOnTermination": {}
  }
}
```

Describes a block device mapping. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html">BlockDeviceMapping</a> data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceName|object|false|none|none|
|NoDevice|object|false|none|none|
|VirtualName|object|false|none|none|
|Ebs|object|false|none|none|

<h2 id="tocS_BlockDeviceMappings">BlockDeviceMappings</h2>
<!-- backwards compatibility -->
<a id="schemablockdevicemappings"></a>
<a id="schema_BlockDeviceMappings"></a>
<a id="tocSblockdevicemappings"></a>
<a id="tocsblockdevicemappings"></a>

```json
[
  {
    "DeviceName": {},
    "NoDevice": {},
    "VirtualName": {},
    "Ebs": {
      "SnapshotId": {},
      "Iops": {},
      "VolumeSize": {},
      "VolumeType": {},
      "DeleteOnTermination": {}
    }
  }
]
```

<h2 id="tocS_ChefConfiguration">ChefConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemachefconfiguration"></a>
<a id="schema_ChefConfiguration"></a>
<a id="tocSchefconfiguration"></a>
<a id="tocschefconfiguration"></a>

```json
{
  "ManageBerkshelf": {},
  "BerkshelfVersion": {}
}
```

Describes the Chef configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManageBerkshelf|object|false|none|none|
|BerkshelfVersion|object|false|none|none|

<h2 id="tocS_StackAttributes">StackAttributes</h2>
<!-- backwards compatibility -->
<a id="schemastackattributes"></a>
<a id="schema_StackAttributes"></a>
<a id="tocSstackattributes"></a>
<a id="tocsstackattributes"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_RootDeviceType">RootDeviceType</h2>
<!-- backwards compatibility -->
<a id="schemarootdevicetype"></a>
<a id="schema_RootDeviceType"></a>
<a id="tocSrootdevicetype"></a>
<a id="tocsrootdevicetype"></a>

```json
"ebs"
```

<h2 id="tocS_CloudWatchLogsLogStreams">CloudWatchLogsLogStreams</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchlogslogstreams"></a>
<a id="schema_CloudWatchLogsLogStreams"></a>
<a id="tocScloudwatchlogslogstreams"></a>
<a id="tocscloudwatchlogslogstreams"></a>

```json
[
  {
    "LogGroupName": {},
    "DatetimeFormat": {},
    "TimeZone": {},
    "File": {},
    "FileFingerprintLines": {},
    "MultiLineStartPattern": {},
    "InitialPosition": {},
    "Encoding": {},
    "BufferDuration": {},
    "BatchCount": {},
    "BatchSize": {}
  }
]
```

Describes the Amazon CloudWatch logs configuration for a layer.

<h2 id="tocS_CloudWatchLogsConfiguration">CloudWatchLogsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchlogsconfiguration"></a>
<a id="schema_CloudWatchLogsConfiguration"></a>
<a id="tocScloudwatchlogsconfiguration"></a>
<a id="tocscloudwatchlogsconfiguration"></a>

```json
{
  "Enabled": {},
  "LogStreams": {}
}
```

Describes the Amazon CloudWatch logs configuration for a layer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|
|LogStreams|object|false|none|none|

<h2 id="tocS_CloudWatchLogsEncoding">CloudWatchLogsEncoding</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchlogsencoding"></a>
<a id="schema_CloudWatchLogsEncoding"></a>
<a id="tocScloudwatchlogsencoding"></a>
<a id="tocscloudwatchlogsencoding"></a>

```json
"ascii"
```

Specifies the encoding of the log file so that the file can be read correctly. The default is <code>utf_8</code>. Encodings supported by Python <code>codecs.decode()</code> can be used here.

<h2 id="tocS_CloudWatchLogsInitialPosition">CloudWatchLogsInitialPosition</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchlogsinitialposition"></a>
<a id="schema_CloudWatchLogsInitialPosition"></a>
<a id="tocScloudwatchlogsinitialposition"></a>
<a id="tocscloudwatchlogsinitialposition"></a>

```json
"start_of_file"
```

Specifies where to start to read data (start_of_file or end_of_file). The default is start_of_file. It's only used if there is no state persisted for that log stream.

<h2 id="tocS_CloudWatchLogsTimeZone">CloudWatchLogsTimeZone</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchlogstimezone"></a>
<a id="schema_CloudWatchLogsTimeZone"></a>
<a id="tocScloudwatchlogstimezone"></a>
<a id="tocscloudwatchlogstimezone"></a>

```json
"LOCAL"
```

The preferred time zone for logs streamed to CloudWatch Logs. Valid values are <code>LOCAL</code> and <code>UTC</code>, for Coordinated Universal Time.

<h2 id="tocS_CloudWatchLogsLogStream">CloudWatchLogsLogStream</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchlogslogstream"></a>
<a id="schema_CloudWatchLogsLogStream"></a>
<a id="tocScloudwatchlogslogstream"></a>
<a id="tocscloudwatchlogslogstream"></a>

```json
{
  "LogGroupName": {},
  "DatetimeFormat": {},
  "TimeZone": {},
  "File": {},
  "FileFingerprintLines": {},
  "MultiLineStartPattern": {},
  "InitialPosition": {},
  "Encoding": {},
  "BufferDuration": {},
  "BatchCount": {},
  "BatchSize": {}
}
```

Describes the Amazon CloudWatch logs configuration for a layer. For detailed information about members of this data type, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html">CloudWatch Logs Agent Reference</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogGroupName|object|false|none|none|
|DatetimeFormat|object|false|none|none|
|TimeZone|object|false|none|none|
|File|object|false|none|none|
|FileFingerprintLines|object|false|none|none|
|MultiLineStartPattern|object|false|none|none|
|InitialPosition|object|false|none|none|
|Encoding|object|false|none|none|
|BufferDuration|object|false|none|none|
|BatchCount|object|false|none|none|
|BatchSize|object|false|none|none|

<h2 id="tocS_DateTime">DateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_DateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
"string"
```

<h2 id="tocS_Command">Command</h2>
<!-- backwards compatibility -->
<a id="schemacommand"></a>
<a id="schema_Command"></a>
<a id="tocScommand"></a>
<a id="tocscommand"></a>

```json
{
  "CommandId": {},
  "InstanceId": {},
  "DeploymentId": {},
  "CreatedAt": {},
  "AcknowledgedAt": {},
  "CompletedAt": {},
  "Status": {},
  "ExitCode": {},
  "LogUrl": {},
  "Type": {}
}
```

Describes a command.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CommandId|object|false|none|none|
|InstanceId|object|false|none|none|
|DeploymentId|object|false|none|none|
|CreatedAt|object|false|none|none|
|AcknowledgedAt|object|false|none|none|
|CompletedAt|object|false|none|none|
|Status|object|false|none|none|
|ExitCode|object|false|none|none|
|LogUrl|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_Commands">Commands</h2>
<!-- backwards compatibility -->
<a id="schemacommands"></a>
<a id="schema_Commands"></a>
<a id="tocScommands"></a>
<a id="tocscommands"></a>

```json
[
  {
    "CommandId": {},
    "InstanceId": {},
    "DeploymentId": {},
    "CreatedAt": {},
    "AcknowledgedAt": {},
    "CompletedAt": {},
    "Status": {},
    "ExitCode": {},
    "LogUrl": {},
    "Type": {}
  }
]
```

<h2 id="tocS_DeploymentCommand">DeploymentCommand</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentcommand"></a>
<a id="schema_DeploymentCommand"></a>
<a id="tocSdeploymentcommand"></a>
<a id="tocsdeploymentcommand"></a>

```json
{
  "Name": {},
  "Args": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

Used to specify a stack or deployment command.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Args|object|false|none|none|

<h2 id="tocS_LayerType">LayerType</h2>
<!-- backwards compatibility -->
<a id="schemalayertype"></a>
<a id="schema_LayerType"></a>
<a id="tocSlayertype"></a>
<a id="tocslayertype"></a>

```json
"aws-flow-ruby"
```

<h2 id="tocS_LayerAttributes">LayerAttributes</h2>
<!-- backwards compatibility -->
<a id="schemalayerattributes"></a>
<a id="schema_LayerAttributes"></a>
<a id="tocSlayerattributes"></a>
<a id="tocslayerattributes"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_VolumeConfigurations">VolumeConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemavolumeconfigurations"></a>
<a id="schema_VolumeConfigurations"></a>
<a id="tocSvolumeconfigurations"></a>
<a id="tocsvolumeconfigurations"></a>

```json
[
  {
    "MountPoint": {},
    "RaidLevel": {},
    "NumberOfDisks": {},
    "Size": {},
    "VolumeType": {},
    "Iops": {},
    "Encrypted": {}
  }
]
```

<h2 id="tocS_Recipes">Recipes</h2>
<!-- backwards compatibility -->
<a id="schemarecipes"></a>
<a id="schema_Recipes"></a>
<a id="tocSrecipes"></a>
<a id="tocsrecipes"></a>

```json
{
  "Setup": {},
  "Configure": {},
  "Deploy": {},
  "Undeploy": {},
  "Shutdown": {}
}
```

<p>AWS OpsWorks Stacks supports five lifecycle events: <b>setup</b>, <b>configuration</b>, <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>. For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. In addition, you can provide custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a particular layer to be run in response to each of the five events. </p> <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the .rb extension. For example: phpapp2::dbsetup specifies the dbsetup.rb recipe in the repository's phpapp2 folder.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Setup|object|false|none|none|
|Configure|object|false|none|none|
|Deploy|object|false|none|none|
|Undeploy|object|false|none|none|
|Shutdown|object|false|none|none|

<h2 id="tocS_LifecycleEventConfiguration">LifecycleEventConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalifecycleeventconfiguration"></a>
<a id="schema_LifecycleEventConfiguration"></a>
<a id="tocSlifecycleeventconfiguration"></a>
<a id="tocslifecycleeventconfiguration"></a>

```json
{
  "Shutdown": {
    "ExecutionTimeout": {},
    "DelayUntilElbConnectionsDrained": {}
  }
}
```

Specifies the lifecycle event configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Shutdown|object|false|none|none|

<h2 id="tocS_Switch">Switch</h2>
<!-- backwards compatibility -->
<a id="schemaswitch"></a>
<a id="schema_Switch"></a>
<a id="tocSswitch"></a>
<a id="tocsswitch"></a>

```json
"string"
```

<h2 id="tocS_DailyAutoScalingSchedule">DailyAutoScalingSchedule</h2>
<!-- backwards compatibility -->
<a id="schemadailyautoscalingschedule"></a>
<a id="schema_DailyAutoScalingSchedule"></a>
<a id="tocSdailyautoscalingschedule"></a>
<a id="tocsdailyautoscalingschedule"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Switch](#schemaswitch)|false|none|none|

<h2 id="tocS_DataSource">DataSource</h2>
<!-- backwards compatibility -->
<a id="schemadatasource"></a>
<a id="schema_DataSource"></a>
<a id="tocSdatasource"></a>
<a id="tocsdatasource"></a>

```json
{
  "Type": {},
  "Arn": {},
  "DatabaseName": {}
}
```

Describes an app's data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Arn|object|false|none|none|
|DatabaseName|object|false|none|none|

<h2 id="tocS_Deployment">Deployment</h2>
<!-- backwards compatibility -->
<a id="schemadeployment"></a>
<a id="schema_Deployment"></a>
<a id="tocSdeployment"></a>
<a id="tocsdeployment"></a>

```json
{
  "DeploymentId": {},
  "StackId": {},
  "AppId": {},
  "CreatedAt": {},
  "CompletedAt": {},
  "Duration": {},
  "IamUserArn": {},
  "Comment": {},
  "Command": {
    "Name": {},
    "Args": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "Status": {},
  "CustomJson": {},
  "InstanceIds": {}
}
```

Describes a deployment of a stack or app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeploymentId|object|false|none|none|
|StackId|object|false|none|none|
|AppId|object|false|none|none|
|CreatedAt|object|false|none|none|
|CompletedAt|object|false|none|none|
|Duration|object|false|none|none|
|IamUserArn|object|false|none|none|
|Comment|object|false|none|none|
|Command|object|false|none|none|
|Status|object|false|none|none|
|CustomJson|object|false|none|none|
|InstanceIds|object|false|none|none|

<h2 id="tocS_DeploymentCommandName">DeploymentCommandName</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentcommandname"></a>
<a id="schema_DeploymentCommandName"></a>
<a id="tocSdeploymentcommandname"></a>
<a id="tocsdeploymentcommandname"></a>

```json
"install_dependencies"
```

<h2 id="tocS_DeploymentCommandArgs">DeploymentCommandArgs</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentcommandargs"></a>
<a id="schema_DeploymentCommandArgs"></a>
<a id="tocSdeploymentcommandargs"></a>
<a id="tocsdeploymentcommandargs"></a>

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
|**additionalProperties**|[Strings](#schemastrings)|false|none|none|

<h2 id="tocS_Deployments">Deployments</h2>
<!-- backwards compatibility -->
<a id="schemadeployments"></a>
<a id="schema_Deployments"></a>
<a id="tocSdeployments"></a>
<a id="tocsdeployments"></a>

```json
[
  {
    "DeploymentId": {},
    "StackId": {},
    "AppId": {},
    "CreatedAt": {},
    "CompletedAt": {},
    "Duration": {},
    "IamUserArn": {},
    "Comment": {},
    "Command": {
      "Name": {},
      "Args": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      }
    },
    "Status": {},
    "CustomJson": {},
    "InstanceIds": {}
  }
]
```

<h2 id="tocS_EcsClusters">EcsClusters</h2>
<!-- backwards compatibility -->
<a id="schemaecsclusters"></a>
<a id="schema_EcsClusters"></a>
<a id="tocSecsclusters"></a>
<a id="tocsecsclusters"></a>

```json
[
  {
    "EcsClusterArn": {},
    "EcsClusterName": {},
    "StackId": {},
    "RegisteredAt": {}
  }
]
```

<h2 id="tocS_ElasticIps">ElasticIps</h2>
<!-- backwards compatibility -->
<a id="schemaelasticips"></a>
<a id="schema_ElasticIps"></a>
<a id="tocSelasticips"></a>
<a id="tocselasticips"></a>

```json
[
  {
    "Ip": {},
    "Name": {},
    "Domain": {},
    "Region": {},
    "InstanceId": {}
  }
]
```

<h2 id="tocS_ElasticLoadBalancers">ElasticLoadBalancers</h2>
<!-- backwards compatibility -->
<a id="schemaelasticloadbalancers"></a>
<a id="schema_ElasticLoadBalancers"></a>
<a id="tocSelasticloadbalancers"></a>
<a id="tocselasticloadbalancers"></a>

```json
[
  {
    "ElasticLoadBalancerName": {},
    "Region": {},
    "DnsName": {},
    "StackId": {},
    "LayerId": {},
    "VpcId": {},
    "AvailabilityZones": {},
    "SubnetIds": {},
    "Ec2InstanceIds": {}
  }
]
```

<h2 id="tocS_Instances">Instances</h2>
<!-- backwards compatibility -->
<a id="schemainstances"></a>
<a id="schema_Instances"></a>
<a id="tocSinstances"></a>
<a id="tocsinstances"></a>

```json
[
  {
    "AgentVersion": {},
    "AmiId": {},
    "Architecture": {},
    "Arn": {},
    "AutoScalingType": {},
    "AvailabilityZone": {},
    "BlockDeviceMappings": {},
    "CreatedAt": {},
    "EbsOptimized": {},
    "Ec2InstanceId": {},
    "EcsClusterArn": {},
    "EcsContainerInstanceArn": {},
    "ElasticIp": {},
    "Hostname": {},
    "InfrastructureClass": {},
    "InstallUpdatesOnBoot": {},
    "InstanceId": {},
    "InstanceProfileArn": {},
    "InstanceType": {},
    "LastServiceErrorId": {},
    "LayerIds": {},
    "Os": {},
    "Platform": {},
    "PrivateDns": {},
    "PrivateIp": {},
    "PublicDns": {},
    "PublicIp": {},
    "RegisteredBy": {},
    "ReportedAgentVersion": {},
    "ReportedOs": {
      "Family": {},
      "Name": {},
      "Version": {}
    },
    "RootDeviceType": {},
    "RootDeviceVolumeId": {},
    "SecurityGroupIds": {},
    "SshHostDsaKeyFingerprint": {},
    "SshHostRsaKeyFingerprint": {},
    "SshKeyName": {},
    "StackId": {},
    "Status": {},
    "SubnetId": {},
    "Tenancy": {},
    "VirtualizationType": {}
  }
]
```

<h2 id="tocS_Layers">Layers</h2>
<!-- backwards compatibility -->
<a id="schemalayers"></a>
<a id="schema_Layers"></a>
<a id="tocSlayers"></a>
<a id="tocslayers"></a>

```json
[
  {
    "Arn": {},
    "StackId": {},
    "LayerId": {},
    "Type": {},
    "Name": {},
    "Shortname": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "CloudWatchLogsConfiguration": {
      "Enabled": {},
      "LogStreams": {}
    },
    "CustomInstanceProfileArn": {},
    "CustomJson": {},
    "CustomSecurityGroupIds": {},
    "DefaultSecurityGroupNames": {},
    "Packages": {},
    "VolumeConfigurations": {},
    "EnableAutoHealing": {},
    "AutoAssignElasticIps": {},
    "AutoAssignPublicIps": {},
    "DefaultRecipes": {
      "Setup": {},
      "Configure": {},
      "Deploy": {},
      "Undeploy": {},
      "Shutdown": {}
    },
    "CustomRecipes": {
      "Setup": {},
      "Configure": {},
      "Deploy": {},
      "Undeploy": {},
      "Shutdown": {}
    },
    "CreatedAt": {},
    "InstallUpdatesOnBoot": {},
    "UseEbsOptimizedInstances": {},
    "LifecycleEventConfiguration": {
      "Shutdown": {
        "ExecutionTimeout": {},
        "DelayUntilElbConnectionsDrained": {}
      }
    }
  }
]
```

<h2 id="tocS_LoadBasedAutoScalingConfigurations">LoadBasedAutoScalingConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaloadbasedautoscalingconfigurations"></a>
<a id="schema_LoadBasedAutoScalingConfigurations"></a>
<a id="tocSloadbasedautoscalingconfigurations"></a>
<a id="tocsloadbasedautoscalingconfigurations"></a>

```json
[
  {
    "LayerId": {},
    "Enable": {},
    "UpScaling": {
      "InstanceCount": {},
      "ThresholdsWaitTime": {},
      "IgnoreMetricsTime": {},
      "CpuThreshold": {},
      "MemoryThreshold": {},
      "LoadThreshold": {},
      "Alarms": {}
    },
    "DownScaling": {
      "InstanceCount": {},
      "ThresholdsWaitTime": {},
      "IgnoreMetricsTime": {},
      "CpuThreshold": {},
      "MemoryThreshold": {},
      "LoadThreshold": {},
      "Alarms": {}
    }
  }
]
```

<h2 id="tocS_SelfUserProfile">SelfUserProfile</h2>
<!-- backwards compatibility -->
<a id="schemaselfuserprofile"></a>
<a id="schema_SelfUserProfile"></a>
<a id="tocSselfuserprofile"></a>
<a id="tocsselfuserprofile"></a>

```json
{
  "IamUserArn": {},
  "Name": {},
  "SshUsername": {},
  "SshPublicKey": {}
}
```

Describes a user's SSH information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IamUserArn|object|false|none|none|
|Name|object|false|none|none|
|SshUsername|object|false|none|none|
|SshPublicKey|object|false|none|none|

<h2 id="tocS_OperatingSystems">OperatingSystems</h2>
<!-- backwards compatibility -->
<a id="schemaoperatingsystems"></a>
<a id="schema_OperatingSystems"></a>
<a id="tocSoperatingsystems"></a>
<a id="tocsoperatingsystems"></a>

```json
[
  {
    "Name": {},
    "Id": {},
    "Type": {},
    "ConfigurationManagers": {},
    "ReportedName": {},
    "ReportedVersion": {},
    "Supported": {}
  }
]
```

<h2 id="tocS_Permissions">Permissions</h2>
<!-- backwards compatibility -->
<a id="schemapermissions"></a>
<a id="schema_Permissions"></a>
<a id="tocSpermissions"></a>
<a id="tocspermissions"></a>

```json
[
  {
    "StackId": {},
    "IamUserArn": {},
    "AllowSsh": {},
    "AllowSudo": {},
    "Level": {}
  }
]
```

<h2 id="tocS_RaidArrays">RaidArrays</h2>
<!-- backwards compatibility -->
<a id="schemaraidarrays"></a>
<a id="schema_RaidArrays"></a>
<a id="tocSraidarrays"></a>
<a id="tocsraidarrays"></a>

```json
[
  {
    "RaidArrayId": {},
    "InstanceId": {},
    "Name": {},
    "RaidLevel": {},
    "NumberOfDisks": {},
    "Size": {},
    "Device": {},
    "MountPoint": {},
    "AvailabilityZone": {},
    "CreatedAt": {},
    "StackId": {},
    "VolumeType": {},
    "Iops": {}
  }
]
```

<h2 id="tocS_RdsDbInstances">RdsDbInstances</h2>
<!-- backwards compatibility -->
<a id="schemardsdbinstances"></a>
<a id="schema_RdsDbInstances"></a>
<a id="tocSrdsdbinstances"></a>
<a id="tocsrdsdbinstances"></a>

```json
[
  {
    "RdsDbInstanceArn": {},
    "DbInstanceIdentifier": {},
    "DbUser": {},
    "DbPassword": {},
    "Region": {},
    "Address": {},
    "Engine": {},
    "StackId": {},
    "MissingOnRds": {}
  }
]
```

<h2 id="tocS_ServiceErrors">ServiceErrors</h2>
<!-- backwards compatibility -->
<a id="schemaserviceerrors"></a>
<a id="schema_ServiceErrors"></a>
<a id="tocSserviceerrors"></a>
<a id="tocsserviceerrors"></a>

```json
[
  {
    "ServiceErrorId": {},
    "StackId": {},
    "InstanceId": {},
    "Type": {},
    "Message": {},
    "CreatedAt": {}
  }
]
```

<h2 id="tocS_Parameters">Parameters</h2>
<!-- backwards compatibility -->
<a id="schemaparameters"></a>
<a id="schema_Parameters"></a>
<a id="tocSparameters"></a>
<a id="tocsparameters"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_StackSummary">StackSummary</h2>
<!-- backwards compatibility -->
<a id="schemastacksummary"></a>
<a id="schema_StackSummary"></a>
<a id="tocSstacksummary"></a>
<a id="tocsstacksummary"></a>

```json
{
  "StackId": {},
  "Name": {},
  "Arn": {},
  "LayersCount": {},
  "AppsCount": {},
  "InstancesCount": {
    "Assigning": {},
    "Booting": {},
    "ConnectionLost": {},
    "Deregistering": {},
    "Online": {},
    "Pending": {},
    "Rebooting": {},
    "Registered": {},
    "Registering": {},
    "Requested": {},
    "RunningSetup": {},
    "SetupFailed": {},
    "ShuttingDown": {},
    "StartFailed": {},
    "StopFailed": {},
    "Stopped": {},
    "Stopping": {},
    "Terminated": {},
    "Terminating": {},
    "Unassigning": {}
  }
}
```

Summarizes the number of layers, instances, and apps in a stack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|false|none|none|
|Name|object|false|none|none|
|Arn|object|false|none|none|
|LayersCount|object|false|none|none|
|AppsCount|object|false|none|none|
|InstancesCount|object|false|none|none|

<h2 id="tocS_Stacks">Stacks</h2>
<!-- backwards compatibility -->
<a id="schemastacks"></a>
<a id="schema_Stacks"></a>
<a id="tocSstacks"></a>
<a id="tocsstacks"></a>

```json
[
  {
    "StackId": {},
    "Name": {},
    "Arn": {},
    "Region": {},
    "VpcId": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "ServiceRoleArn": {},
    "DefaultInstanceProfileArn": {},
    "DefaultOs": {},
    "HostnameTheme": {},
    "DefaultAvailabilityZone": {},
    "DefaultSubnetId": {},
    "CustomJson": {},
    "ConfigurationManager": {
      "Name": {},
      "Version": {}
    },
    "ChefConfiguration": {
      "ManageBerkshelf": {},
      "BerkshelfVersion": {}
    },
    "UseCustomCookbooks": {},
    "UseOpsworksSecurityGroups": {},
    "CustomCookbooksSource": {
      "Type": {},
      "Url": {},
      "Username": {},
      "Password": {},
      "SshKey": {},
      "Revision": {}
    },
    "DefaultSshKeyName": {},
    "CreatedAt": {},
    "DefaultRootDeviceType": {},
    "AgentVersion": {}
  }
]
```

<h2 id="tocS_TimeBasedAutoScalingConfigurations">TimeBasedAutoScalingConfigurations</h2>
<!-- backwards compatibility -->
<a id="schematimebasedautoscalingconfigurations"></a>
<a id="schema_TimeBasedAutoScalingConfigurations"></a>
<a id="tocStimebasedautoscalingconfigurations"></a>
<a id="tocstimebasedautoscalingconfigurations"></a>

```json
[
  {
    "InstanceId": {},
    "AutoScalingSchedule": {
      "Monday": {
        "property1": "string",
        "property2": "string"
      },
      "Tuesday": {
        "property1": "string",
        "property2": "string"
      },
      "Wednesday": {
        "property1": "string",
        "property2": "string"
      },
      "Thursday": {
        "property1": "string",
        "property2": "string"
      },
      "Friday": {
        "property1": "string",
        "property2": "string"
      },
      "Saturday": {
        "property1": "string",
        "property2": "string"
      },
      "Sunday": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
]
```

<h2 id="tocS_UserProfiles">UserProfiles</h2>
<!-- backwards compatibility -->
<a id="schemauserprofiles"></a>
<a id="schema_UserProfiles"></a>
<a id="tocSuserprofiles"></a>
<a id="tocsuserprofiles"></a>

```json
[
  {
    "IamUserArn": {},
    "Name": {},
    "SshUsername": {},
    "SshPublicKey": {},
    "AllowSelfManagement": {}
  }
]
```

<h2 id="tocS_Volumes">Volumes</h2>
<!-- backwards compatibility -->
<a id="schemavolumes"></a>
<a id="schema_Volumes"></a>
<a id="tocSvolumes"></a>
<a id="tocsvolumes"></a>

```json
[
  {
    "VolumeId": {},
    "Ec2VolumeId": {},
    "Name": {},
    "RaidArrayId": {},
    "InstanceId": {},
    "Status": {},
    "Size": {},
    "Device": {},
    "MountPoint": {},
    "Region": {},
    "AvailabilityZone": {},
    "VolumeType": {},
    "Iops": {},
    "Encrypted": {}
  }
]
```

<h2 id="tocS_VolumeType">VolumeType</h2>
<!-- backwards compatibility -->
<a id="schemavolumetype"></a>
<a id="schema_VolumeType"></a>
<a id="tocSvolumetype"></a>
<a id="tocsvolumetype"></a>

```json
"gp2"
```

<h2 id="tocS_EcsCluster">EcsCluster</h2>
<!-- backwards compatibility -->
<a id="schemaecscluster"></a>
<a id="schema_EcsCluster"></a>
<a id="tocSecscluster"></a>
<a id="tocsecscluster"></a>

```json
{
  "EcsClusterArn": {},
  "EcsClusterName": {},
  "StackId": {},
  "RegisteredAt": {}
}
```

Describes a registered Amazon ECS cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EcsClusterArn|object|false|none|none|
|EcsClusterName|object|false|none|none|
|StackId|object|false|none|none|
|RegisteredAt|object|false|none|none|

<h2 id="tocS_ElasticIp">ElasticIp</h2>
<!-- backwards compatibility -->
<a id="schemaelasticip"></a>
<a id="schema_ElasticIp"></a>
<a id="tocSelasticip"></a>
<a id="tocselasticip"></a>

```json
{
  "Ip": {},
  "Name": {},
  "Domain": {},
  "Region": {},
  "InstanceId": {}
}
```

Describes an Elastic IP address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Ip|object|false|none|none|
|Name|object|false|none|none|
|Domain|object|false|none|none|
|Region|object|false|none|none|
|InstanceId|object|false|none|none|

<h2 id="tocS_ElasticLoadBalancer">ElasticLoadBalancer</h2>
<!-- backwards compatibility -->
<a id="schemaelasticloadbalancer"></a>
<a id="schema_ElasticLoadBalancer"></a>
<a id="tocSelasticloadbalancer"></a>
<a id="tocselasticloadbalancer"></a>

```json
{
  "ElasticLoadBalancerName": {},
  "Region": {},
  "DnsName": {},
  "StackId": {},
  "LayerId": {},
  "VpcId": {},
  "AvailabilityZones": {},
  "SubnetIds": {},
  "Ec2InstanceIds": {}
}
```

Describes an Elastic Load Balancing instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ElasticLoadBalancerName|object|false|none|none|
|Region|object|false|none|none|
|DnsName|object|false|none|none|
|StackId|object|false|none|none|
|LayerId|object|false|none|none|
|VpcId|object|false|none|none|
|AvailabilityZones|object|false|none|none|
|SubnetIds|object|false|none|none|
|Ec2InstanceIds|object|false|none|none|

<h2 id="tocS_EnvironmentVariable">EnvironmentVariable</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentvariable"></a>
<a id="schema_EnvironmentVariable"></a>
<a id="tocSenvironmentvariable"></a>
<a id="tocsenvironmentvariable"></a>

```json
{
  "Key": {},
  "Value": {},
  "Secure": {}
}
```

Represents an app's environment variable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|
|Secure|object|false|none|none|

<h2 id="tocS_ValidForInMinutes">ValidForInMinutes</h2>
<!-- backwards compatibility -->
<a id="schemavalidforinminutes"></a>
<a id="schema_ValidForInMinutes"></a>
<a id="tocSvalidforinminutes"></a>
<a id="tocsvalidforinminutes"></a>

```json
60
```

<h2 id="tocS_TemporaryCredential">TemporaryCredential</h2>
<!-- backwards compatibility -->
<a id="schematemporarycredential"></a>
<a id="schema_TemporaryCredential"></a>
<a id="tocStemporarycredential"></a>
<a id="tocstemporarycredential"></a>

```json
{
  "Username": {},
  "Password": {},
  "ValidForInMinutes": {},
  "InstanceId": {}
}
```

Contains the data needed by RDP clients such as the Microsoft Remote Desktop Connection to log in to the instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Username|object|false|none|none|
|Password|object|false|none|none|
|ValidForInMinutes|object|false|none|none|
|InstanceId|object|false|none|none|

<h2 id="tocS_Hour">Hour</h2>
<!-- backwards compatibility -->
<a id="schemahour"></a>
<a id="schema_Hour"></a>
<a id="tocShour"></a>
<a id="tocshour"></a>

```json
"string"
```

<h2 id="tocS_ReportedOs">ReportedOs</h2>
<!-- backwards compatibility -->
<a id="schemareportedos"></a>
<a id="schema_ReportedOs"></a>
<a id="tocSreportedos"></a>
<a id="tocsreportedos"></a>

```json
{
  "Family": {},
  "Name": {},
  "Version": {}
}
```

A registered instance's reported operating system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Family|object|false|none|none|
|Name|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_VirtualizationType">VirtualizationType</h2>
<!-- backwards compatibility -->
<a id="schemavirtualizationtype"></a>
<a id="schema_VirtualizationType"></a>
<a id="tocSvirtualizationtype"></a>
<a id="tocsvirtualizationtype"></a>

```json
"paravirtual"
```

<h2 id="tocS_Instance">Instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_Instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
{
  "AgentVersion": {},
  "AmiId": {},
  "Architecture": {},
  "Arn": {},
  "AutoScalingType": {},
  "AvailabilityZone": {},
  "BlockDeviceMappings": {},
  "CreatedAt": {},
  "EbsOptimized": {},
  "Ec2InstanceId": {},
  "EcsClusterArn": {},
  "EcsContainerInstanceArn": {},
  "ElasticIp": {},
  "Hostname": {},
  "InfrastructureClass": {},
  "InstallUpdatesOnBoot": {},
  "InstanceId": {},
  "InstanceProfileArn": {},
  "InstanceType": {},
  "LastServiceErrorId": {},
  "LayerIds": {},
  "Os": {},
  "Platform": {},
  "PrivateDns": {},
  "PrivateIp": {},
  "PublicDns": {},
  "PublicIp": {},
  "RegisteredBy": {},
  "ReportedAgentVersion": {},
  "ReportedOs": {
    "Family": {},
    "Name": {},
    "Version": {}
  },
  "RootDeviceType": {},
  "RootDeviceVolumeId": {},
  "SecurityGroupIds": {},
  "SshHostDsaKeyFingerprint": {},
  "SshHostRsaKeyFingerprint": {},
  "SshKeyName": {},
  "StackId": {},
  "Status": {},
  "SubnetId": {},
  "Tenancy": {},
  "VirtualizationType": {}
}
```

Describes an instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgentVersion|object|false|none|none|
|AmiId|object|false|none|none|
|Architecture|object|false|none|none|
|Arn|object|false|none|none|
|AutoScalingType|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|BlockDeviceMappings|object|false|none|none|
|CreatedAt|object|false|none|none|
|EbsOptimized|object|false|none|none|
|Ec2InstanceId|object|false|none|none|
|EcsClusterArn|object|false|none|none|
|EcsContainerInstanceArn|object|false|none|none|
|ElasticIp|object|false|none|none|
|Hostname|object|false|none|none|
|InfrastructureClass|object|false|none|none|
|InstallUpdatesOnBoot|object|false|none|none|
|InstanceId|object|false|none|none|
|InstanceProfileArn|object|false|none|none|
|InstanceType|object|false|none|none|
|LastServiceErrorId|object|false|none|none|
|LayerIds|object|false|none|none|
|Os|object|false|none|none|
|Platform|object|false|none|none|
|PrivateDns|object|false|none|none|
|PrivateIp|object|false|none|none|
|PublicDns|object|false|none|none|
|PublicIp|object|false|none|none|
|RegisteredBy|object|false|none|none|
|ReportedAgentVersion|object|false|none|none|
|ReportedOs|object|false|none|none|
|RootDeviceType|object|false|none|none|
|RootDeviceVolumeId|object|false|none|none|
|SecurityGroupIds|object|false|none|none|
|SshHostDsaKeyFingerprint|object|false|none|none|
|SshHostRsaKeyFingerprint|object|false|none|none|
|SshKeyName|object|false|none|none|
|StackId|object|false|none|none|
|Status|object|false|none|none|
|SubnetId|object|false|none|none|
|Tenancy|object|false|none|none|
|VirtualizationType|object|false|none|none|

<h2 id="tocS_InstanceIdentity">InstanceIdentity</h2>
<!-- backwards compatibility -->
<a id="schemainstanceidentity"></a>
<a id="schema_InstanceIdentity"></a>
<a id="tocSinstanceidentity"></a>
<a id="tocsinstanceidentity"></a>

```json
{
  "Document": {},
  "Signature": {}
}
```

Contains a description of an Amazon EC2 instance from the Amazon EC2 metadata service. For more information, see <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/Index.html">Instance Metadata and User Data</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Document|object|false|none|none|
|Signature|object|false|none|none|

<h2 id="tocS_InstancesCount">InstancesCount</h2>
<!-- backwards compatibility -->
<a id="schemainstancescount"></a>
<a id="schema_InstancesCount"></a>
<a id="tocSinstancescount"></a>
<a id="tocsinstancescount"></a>

```json
{
  "Assigning": {},
  "Booting": {},
  "ConnectionLost": {},
  "Deregistering": {},
  "Online": {},
  "Pending": {},
  "Rebooting": {},
  "Registered": {},
  "Registering": {},
  "Requested": {},
  "RunningSetup": {},
  "SetupFailed": {},
  "ShuttingDown": {},
  "StartFailed": {},
  "StopFailed": {},
  "Stopped": {},
  "Stopping": {},
  "Terminated": {},
  "Terminating": {},
  "Unassigning": {}
}
```

Describes how many instances a stack has for each status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assigning|object|false|none|none|
|Booting|object|false|none|none|
|ConnectionLost|object|false|none|none|
|Deregistering|object|false|none|none|
|Online|object|false|none|none|
|Pending|object|false|none|none|
|Rebooting|object|false|none|none|
|Registered|object|false|none|none|
|Registering|object|false|none|none|
|Requested|object|false|none|none|
|RunningSetup|object|false|none|none|
|SetupFailed|object|false|none|none|
|ShuttingDown|object|false|none|none|
|StartFailed|object|false|none|none|
|StopFailed|object|false|none|none|
|Stopped|object|false|none|none|
|Stopping|object|false|none|none|
|Terminated|object|false|none|none|
|Terminating|object|false|none|none|
|Unassigning|object|false|none|none|

<h2 id="tocS_Layer">Layer</h2>
<!-- backwards compatibility -->
<a id="schemalayer"></a>
<a id="schema_Layer"></a>
<a id="tocSlayer"></a>
<a id="tocslayer"></a>

```json
{
  "Arn": {},
  "StackId": {},
  "LayerId": {},
  "Type": {},
  "Name": {},
  "Shortname": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "CloudWatchLogsConfiguration": {
    "Enabled": {},
    "LogStreams": {}
  },
  "CustomInstanceProfileArn": {},
  "CustomJson": {},
  "CustomSecurityGroupIds": {},
  "DefaultSecurityGroupNames": {},
  "Packages": {},
  "VolumeConfigurations": {},
  "EnableAutoHealing": {},
  "AutoAssignElasticIps": {},
  "AutoAssignPublicIps": {},
  "DefaultRecipes": {
    "Setup": {},
    "Configure": {},
    "Deploy": {},
    "Undeploy": {},
    "Shutdown": {}
  },
  "CustomRecipes": {
    "Setup": {},
    "Configure": {},
    "Deploy": {},
    "Undeploy": {},
    "Shutdown": {}
  },
  "CreatedAt": {},
  "InstallUpdatesOnBoot": {},
  "UseEbsOptimizedInstances": {},
  "LifecycleEventConfiguration": {
    "Shutdown": {
      "ExecutionTimeout": {},
      "DelayUntilElbConnectionsDrained": {}
    }
  }
}
```

Describes a layer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|StackId|object|false|none|none|
|LayerId|object|false|none|none|
|Type|object|false|none|none|
|Name|object|false|none|none|
|Shortname|object|false|none|none|
|Attributes|object|false|none|none|
|CloudWatchLogsConfiguration|object|false|none|none|
|CustomInstanceProfileArn|object|false|none|none|
|CustomJson|object|false|none|none|
|CustomSecurityGroupIds|object|false|none|none|
|DefaultSecurityGroupNames|object|false|none|none|
|Packages|object|false|none|none|
|VolumeConfigurations|object|false|none|none|
|EnableAutoHealing|object|false|none|none|
|AutoAssignElasticIps|object|false|none|none|
|AutoAssignPublicIps|object|false|none|none|
|DefaultRecipes|object|false|none|none|
|CustomRecipes|object|false|none|none|
|CreatedAt|object|false|none|none|
|InstallUpdatesOnBoot|object|false|none|none|
|UseEbsOptimizedInstances|object|false|none|none|
|LifecycleEventConfiguration|object|false|none|none|

<h2 id="tocS_LayerAttributesKeys">LayerAttributesKeys</h2>
<!-- backwards compatibility -->
<a id="schemalayerattributeskeys"></a>
<a id="schema_LayerAttributesKeys"></a>
<a id="tocSlayerattributeskeys"></a>
<a id="tocslayerattributeskeys"></a>

```json
"EcsClusterArn"
```

<h2 id="tocS_ShutdownEventConfiguration">ShutdownEventConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemashutdowneventconfiguration"></a>
<a id="schema_ShutdownEventConfiguration"></a>
<a id="tocSshutdowneventconfiguration"></a>
<a id="tocsshutdowneventconfiguration"></a>

```json
{
  "ExecutionTimeout": {},
  "DelayUntilElbConnectionsDrained": {}
}
```

The Shutdown event configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExecutionTimeout|object|false|none|none|
|DelayUntilElbConnectionsDrained|object|false|none|none|

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
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

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_LoadBasedAutoScalingConfiguration">LoadBasedAutoScalingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaloadbasedautoscalingconfiguration"></a>
<a id="schema_LoadBasedAutoScalingConfiguration"></a>
<a id="tocSloadbasedautoscalingconfiguration"></a>
<a id="tocsloadbasedautoscalingconfiguration"></a>

```json
{
  "LayerId": {},
  "Enable": {},
  "UpScaling": {
    "InstanceCount": {},
    "ThresholdsWaitTime": {},
    "IgnoreMetricsTime": {},
    "CpuThreshold": {},
    "MemoryThreshold": {},
    "LoadThreshold": {},
    "Alarms": {}
  },
  "DownScaling": {
    "InstanceCount": {},
    "ThresholdsWaitTime": {},
    "IgnoreMetricsTime": {},
    "CpuThreshold": {},
    "MemoryThreshold": {},
    "LoadThreshold": {},
    "Alarms": {}
  }
}
```

Describes a layer's load-based auto scaling configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LayerId|object|false|none|none|
|Enable|object|false|none|none|
|UpScaling|object|false|none|none|
|DownScaling|object|false|none|none|

<h2 id="tocS_OperatingSystemConfigurationManagers">OperatingSystemConfigurationManagers</h2>
<!-- backwards compatibility -->
<a id="schemaoperatingsystemconfigurationmanagers"></a>
<a id="schema_OperatingSystemConfigurationManagers"></a>
<a id="tocSoperatingsystemconfigurationmanagers"></a>
<a id="tocsoperatingsystemconfigurationmanagers"></a>

```json
[
  {
    "Name": {},
    "Version": {}
  }
]
```

<h2 id="tocS_OperatingSystem">OperatingSystem</h2>
<!-- backwards compatibility -->
<a id="schemaoperatingsystem"></a>
<a id="schema_OperatingSystem"></a>
<a id="tocSoperatingsystem"></a>
<a id="tocsoperatingsystem"></a>

```json
{
  "Name": {},
  "Id": {},
  "Type": {},
  "ConfigurationManagers": {},
  "ReportedName": {},
  "ReportedVersion": {},
  "Supported": {}
}
```

Describes supported operating systems in AWS OpsWorks Stacks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Id|object|false|none|none|
|Type|object|false|none|none|
|ConfigurationManagers|object|false|none|none|
|ReportedName|object|false|none|none|
|ReportedVersion|object|false|none|none|
|Supported|object|false|none|none|

<h2 id="tocS_OperatingSystemConfigurationManager">OperatingSystemConfigurationManager</h2>
<!-- backwards compatibility -->
<a id="schemaoperatingsystemconfigurationmanager"></a>
<a id="schema_OperatingSystemConfigurationManager"></a>
<a id="tocSoperatingsystemconfigurationmanager"></a>
<a id="tocsoperatingsystemconfigurationmanager"></a>

```json
{
  "Name": {},
  "Version": {}
}
```

A block that contains information about the configuration manager (Chef) and the versions of the configuration manager that are supported for an operating system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
{
  "StackId": {},
  "IamUserArn": {},
  "AllowSsh": {},
  "AllowSudo": {},
  "Level": {}
}
```

Describes stack or user permissions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|false|none|none|
|IamUserArn|object|false|none|none|
|AllowSsh|object|false|none|none|
|AllowSudo|object|false|none|none|
|Level|object|false|none|none|

<h2 id="tocS_RaidArray">RaidArray</h2>
<!-- backwards compatibility -->
<a id="schemaraidarray"></a>
<a id="schema_RaidArray"></a>
<a id="tocSraidarray"></a>
<a id="tocsraidarray"></a>

```json
{
  "RaidArrayId": {},
  "InstanceId": {},
  "Name": {},
  "RaidLevel": {},
  "NumberOfDisks": {},
  "Size": {},
  "Device": {},
  "MountPoint": {},
  "AvailabilityZone": {},
  "CreatedAt": {},
  "StackId": {},
  "VolumeType": {},
  "Iops": {}
}
```

Describes an instance's RAID array.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RaidArrayId|object|false|none|none|
|InstanceId|object|false|none|none|
|Name|object|false|none|none|
|RaidLevel|object|false|none|none|
|NumberOfDisks|object|false|none|none|
|Size|object|false|none|none|
|Device|object|false|none|none|
|MountPoint|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|CreatedAt|object|false|none|none|
|StackId|object|false|none|none|
|VolumeType|object|false|none|none|
|Iops|object|false|none|none|

<h2 id="tocS_RdsDbInstance">RdsDbInstance</h2>
<!-- backwards compatibility -->
<a id="schemardsdbinstance"></a>
<a id="schema_RdsDbInstance"></a>
<a id="tocSrdsdbinstance"></a>
<a id="tocsrdsdbinstance"></a>

```json
{
  "RdsDbInstanceArn": {},
  "DbInstanceIdentifier": {},
  "DbUser": {},
  "DbPassword": {},
  "Region": {},
  "Address": {},
  "Engine": {},
  "StackId": {},
  "MissingOnRds": {}
}
```

Describes an Amazon RDS instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RdsDbInstanceArn|object|false|none|none|
|DbInstanceIdentifier|object|false|none|none|
|DbUser|object|false|none|none|
|DbPassword|object|false|none|none|
|Region|object|false|none|none|
|Address|object|false|none|none|
|Engine|object|false|none|none|
|StackId|object|false|none|none|
|MissingOnRds|object|false|none|none|

<h2 id="tocS_ServiceError">ServiceError</h2>
<!-- backwards compatibility -->
<a id="schemaserviceerror"></a>
<a id="schema_ServiceError"></a>
<a id="tocSserviceerror"></a>
<a id="tocsserviceerror"></a>

```json
{
  "ServiceErrorId": {},
  "StackId": {},
  "InstanceId": {},
  "Type": {},
  "Message": {},
  "CreatedAt": {}
}
```

Describes an AWS OpsWorks Stacks service error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceErrorId|object|false|none|none|
|StackId|object|false|none|none|
|InstanceId|object|false|none|none|
|Type|object|false|none|none|
|Message|object|false|none|none|
|CreatedAt|object|false|none|none|

<h2 id="tocS_WeeklyAutoScalingSchedule">WeeklyAutoScalingSchedule</h2>
<!-- backwards compatibility -->
<a id="schemaweeklyautoscalingschedule"></a>
<a id="schema_WeeklyAutoScalingSchedule"></a>
<a id="tocSweeklyautoscalingschedule"></a>
<a id="tocsweeklyautoscalingschedule"></a>

```json
{
  "Monday": {
    "property1": "string",
    "property2": "string"
  },
  "Tuesday": {
    "property1": "string",
    "property2": "string"
  },
  "Wednesday": {
    "property1": "string",
    "property2": "string"
  },
  "Thursday": {
    "property1": "string",
    "property2": "string"
  },
  "Friday": {
    "property1": "string",
    "property2": "string"
  },
  "Saturday": {
    "property1": "string",
    "property2": "string"
  },
  "Sunday": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p>Describes a time-based instance's auto scaling schedule. The schedule consists of a set of key-value pairs.</p> <ul> <li> <p>The key is the time period (a UTC hour) and must be an integer from 0 - 23.</p> </li> <li> <p>The value indicates whether the instance should be online or offline for the specified period, and must be set to "on" or "off"</p> </li> </ul> <p>The default setting for all time periods is off, so you use the following parameters primarily to specify the online periods. You don't have to explicitly specify offline periods unless you want to change an online period to an offline period.</p> <p>The following example specifies that the instance should be online for four hours, from UTC 1200 - 1600. It will be off for the remainder of the day.</p> <p> <code> { "12":"on", "13":"on", "14":"on", "15":"on" } </code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Monday|object|false|none|none|
|Tuesday|object|false|none|none|
|Wednesday|object|false|none|none|
|Thursday|object|false|none|none|
|Friday|object|false|none|none|
|Saturday|object|false|none|none|
|Sunday|object|false|none|none|

<h2 id="tocS_SourceType">SourceType</h2>
<!-- backwards compatibility -->
<a id="schemasourcetype"></a>
<a id="schema_SourceType"></a>
<a id="tocSsourcetype"></a>
<a id="tocssourcetype"></a>

```json
"git"
```

<h2 id="tocS_Stack">Stack</h2>
<!-- backwards compatibility -->
<a id="schemastack"></a>
<a id="schema_Stack"></a>
<a id="tocSstack"></a>
<a id="tocsstack"></a>

```json
{
  "StackId": {},
  "Name": {},
  "Arn": {},
  "Region": {},
  "VpcId": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "ServiceRoleArn": {},
  "DefaultInstanceProfileArn": {},
  "DefaultOs": {},
  "HostnameTheme": {},
  "DefaultAvailabilityZone": {},
  "DefaultSubnetId": {},
  "CustomJson": {},
  "ConfigurationManager": {
    "Name": {},
    "Version": {}
  },
  "ChefConfiguration": {
    "ManageBerkshelf": {},
    "BerkshelfVersion": {}
  },
  "UseCustomCookbooks": {},
  "UseOpsworksSecurityGroups": {},
  "CustomCookbooksSource": {
    "Type": {},
    "Url": {},
    "Username": {},
    "Password": {},
    "SshKey": {},
    "Revision": {}
  },
  "DefaultSshKeyName": {},
  "CreatedAt": {},
  "DefaultRootDeviceType": {},
  "AgentVersion": {}
}
```

Describes a stack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|false|none|none|
|Name|object|false|none|none|
|Arn|object|false|none|none|
|Region|object|false|none|none|
|VpcId|object|false|none|none|
|Attributes|object|false|none|none|
|ServiceRoleArn|object|false|none|none|
|DefaultInstanceProfileArn|object|false|none|none|
|DefaultOs|object|false|none|none|
|HostnameTheme|object|false|none|none|
|DefaultAvailabilityZone|object|false|none|none|
|DefaultSubnetId|object|false|none|none|
|CustomJson|object|false|none|none|
|ConfigurationManager|object|false|none|none|
|ChefConfiguration|object|false|none|none|
|UseCustomCookbooks|object|false|none|none|
|UseOpsworksSecurityGroups|object|false|none|none|
|CustomCookbooksSource|object|false|none|none|
|DefaultSshKeyName|object|false|none|none|
|CreatedAt|object|false|none|none|
|DefaultRootDeviceType|object|false|none|none|
|AgentVersion|object|false|none|none|

<h2 id="tocS_StackAttributesKeys">StackAttributesKeys</h2>
<!-- backwards compatibility -->
<a id="schemastackattributeskeys"></a>
<a id="schema_StackAttributesKeys"></a>
<a id="tocSstackattributeskeys"></a>
<a id="tocsstackattributeskeys"></a>

```json
"Color"
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

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_TimeBasedAutoScalingConfiguration">TimeBasedAutoScalingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematimebasedautoscalingconfiguration"></a>
<a id="schema_TimeBasedAutoScalingConfiguration"></a>
<a id="tocStimebasedautoscalingconfiguration"></a>
<a id="tocstimebasedautoscalingconfiguration"></a>

```json
{
  "InstanceId": {},
  "AutoScalingSchedule": {
    "Monday": {
      "property1": "string",
      "property2": "string"
    },
    "Tuesday": {
      "property1": "string",
      "property2": "string"
    },
    "Wednesday": {
      "property1": "string",
      "property2": "string"
    },
    "Thursday": {
      "property1": "string",
      "property2": "string"
    },
    "Friday": {
      "property1": "string",
      "property2": "string"
    },
    "Saturday": {
      "property1": "string",
      "property2": "string"
    },
    "Sunday": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Describes an instance's time-based auto scaling configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|false|none|none|
|AutoScalingSchedule|object|false|none|none|

<h2 id="tocS_UserProfile">UserProfile</h2>
<!-- backwards compatibility -->
<a id="schemauserprofile"></a>
<a id="schema_UserProfile"></a>
<a id="tocSuserprofile"></a>
<a id="tocsuserprofile"></a>

```json
{
  "IamUserArn": {},
  "Name": {},
  "SshUsername": {},
  "SshPublicKey": {},
  "AllowSelfManagement": {}
}
```

Describes a user's SSH information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IamUserArn|object|false|none|none|
|Name|object|false|none|none|
|SshUsername|object|false|none|none|
|SshPublicKey|object|false|none|none|
|AllowSelfManagement|object|false|none|none|

<h2 id="tocS_Volume">Volume</h2>
<!-- backwards compatibility -->
<a id="schemavolume"></a>
<a id="schema_Volume"></a>
<a id="tocSvolume"></a>
<a id="tocsvolume"></a>

```json
{
  "VolumeId": {},
  "Ec2VolumeId": {},
  "Name": {},
  "RaidArrayId": {},
  "InstanceId": {},
  "Status": {},
  "Size": {},
  "Device": {},
  "MountPoint": {},
  "Region": {},
  "AvailabilityZone": {},
  "VolumeType": {},
  "Iops": {},
  "Encrypted": {}
}
```

Describes an instance's Amazon EBS volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeId|object|false|none|none|
|Ec2VolumeId|object|false|none|none|
|Name|object|false|none|none|
|RaidArrayId|object|false|none|none|
|InstanceId|object|false|none|none|
|Status|object|false|none|none|
|Size|object|false|none|none|
|Device|object|false|none|none|
|MountPoint|object|false|none|none|
|Region|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|VolumeType|object|false|none|none|
|Iops|object|false|none|none|
|Encrypted|object|false|none|none|

<h2 id="tocS_VolumeConfiguration">VolumeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemavolumeconfiguration"></a>
<a id="schema_VolumeConfiguration"></a>
<a id="tocSvolumeconfiguration"></a>
<a id="tocsvolumeconfiguration"></a>

```json
{
  "MountPoint": {},
  "RaidLevel": {},
  "NumberOfDisks": {},
  "Size": {},
  "VolumeType": {},
  "Iops": {},
  "Encrypted": {}
}
```

Describes an Amazon EBS volume configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MountPoint|object|true|none|none|
|RaidLevel|object|false|none|none|
|NumberOfDisks|object|true|none|none|
|Size|object|true|none|none|
|VolumeType|object|false|none|none|
|Iops|object|false|none|none|
|Encrypted|object|false|none|none|
