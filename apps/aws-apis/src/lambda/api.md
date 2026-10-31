<h1 id="aws-lambda">AWS Lambda v2015-03-31</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Lambda</fullname> <p> <b>Overview</b> </p> <p>Lambda is a compute service that lets you run code without provisioning or managing servers. Lambda runs your code on a high-availability compute infrastructure and performs all of the administration of the compute resources, including server and operating system maintenance, capacity provisioning and automatic scaling, code monitoring and logging. With Lambda, you can run code for virtually any type of application or backend service. For more information about the Lambda service, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html">What is Lambda</a> in the <b>Lambda Developer Guide</b>.</p> <p>The <i>Lambda API Reference</i> provides information about each of the API methods, including details about the parameters in each API request and response. </p> <p/> <p>You can use Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools to access the API. For installation instructions, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>. </p> <p>For a list of Region-specific endpoints that Lambda supports, see <a href="https://docs.aws.amazon.com/general/latest/gr/lambda-service.html/">Lambda endpoints and quotas </a> in the <i>Amazon Web Services General Reference.</i>. </p> <p>When making the API calls, you will need to authenticate your request by providing a signature. Lambda supports signature version 4. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a> in the <i>Amazon Web Services General Reference.</i>. </p> <p> <b>CA certificates</b> </p> <p>Because Amazon Web Services SDKs use the CA certificates from your computer, changes to the certificates on the Amazon Web Services servers can cause connection failures when you attempt to use an SDK. You can prevent these failures by keeping your computer's CA certificates and operating system up-to-date. If you encounter this issue in a corporate environment and do not manage your own computer, you might need to ask an administrator to assist with the update process. The following list shows minimum operating system and Java versions:</p> <ul> <li> <p>Microsoft Windows versions that have updates from January 2005 or later installed contain at least one of the required CAs in their trust list. </p> </li> <li> <p>Mac OS X 10.4 with Java for Mac OS X 10.4 Release 5 (February 2007), Mac OS X 10.5 (October 2007), and later versions contain at least one of the required CAs in their trust list. </p> </li> <li> <p>Red Hat Enterprise Linux 5 (March 2007), 6, and 7 and CentOS 5, 6, and 7 all contain at least one of the required CAs in their default trusted CA list. </p> </li> <li> <p>Java 1.4.2_12 (May 2006), 5 Update 2 (March 2005), and all later versions, including Java 6 (December 2006), 7, and 8, contain at least one of the required CAs in their default trusted CA list. </p> </li> </ul> <p>When accessing the Lambda management console or Lambda API endpoints, whether through browsers or programmatically, you will need to ensure your client machines support any of the following CAs: </p> <ul> <li> <p>Amazon Root CA 1</p> </li> <li> <p>Starfield Services Root Certificate Authority - G2</p> </li> <li> <p>Starfield Class 2 Certification Authority</p> </li> </ul> <p>Root certificates from the first two authorities are available from <a href="https://www.amazontrust.com/repository/">Amazon trust services</a>, but keeping your computer up-to-date is the more straightforward solution. To learn more about ACM-provided certificates, see <a href="http://aws.amazon.com/certificate-manager/faqs/#certificates">Amazon Web Services Certificate Manager FAQs.</a> </p>

Base URLs:

* <a href="http://lambda.us-east-1.amazonaws.com">http://lambda.us-east-1.amazonaws.com</a> - The AWS Lambda multi-region endpoint

* <a href="https://lambda.us-east-1.amazonaws.com">https://lambda.us-east-1.amazonaws.com</a> - The AWS Lambda multi-region endpoint

* <a href="http://lambda.cn-north-1.amazonaws.com.cn">http://lambda.cn-north-1.amazonaws.com.cn</a> - The AWS Lambda endpoint for China (Beijing) and China (Ningxia)

* <a href="https://lambda.cn-north-1.amazonaws.com.cn">https://lambda.cn-north-1.amazonaws.com.cn</a> - The AWS Lambda endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/lambda/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-lambda-default">Default</h1>

## GetLayerVersionPolicy

<a id="opIdGetLayerVersionPolicy"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2018-10-31/layers/string/versions/0/policy \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy`

Returns the permission policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.

<h3 id="getlayerversionpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LayerName|path|string|true|The name or Amazon Resource Name (ARN) of the layer.|
|VersionNumber|path|integer|true|The version number.|
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
  "Policy": {},
  "RevisionId": {}
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

<h3 id="getlayerversionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLayerVersionPolicyResponse](#schemagetlayerversionpolicyresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddLayerVersionPermission

<a id="opIdAddLayerVersionPermission"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2018-10-31/layers/string/versions/0/policy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StatementId": "string",
    "Action": "string",
    "Principal": "string",
    "OrganizationId": "string"
  }'
```

`POST /2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy`

<p>Adds permissions to the resource-based policy of a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all accounts in an organization, or all Amazon Web Services accounts. </p> <p>To revoke permission, call <a>RemoveLayerVersionPermission</a> with the statement ID that you specified when you added it.</p>

> Body parameter

```json
{
  "StatementId": "string",
  "Action": "string",
  "Principal": "string",
  "OrganizationId": "string"
}
```

<h3 id="addlayerversionpermission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LayerName|path|string|true|The name or Amazon Resource Name (ARN) of the layer.|
|VersionNumber|path|integer|true|The version number.|
|RevisionId|query|string|false|Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» StatementId|body|string|true|An identifier that distinguishes the policy from others on the same layer version.|
|» Action|body|string|true|The API action that grants access to the layer. For example, <code>lambda:GetLayerVersion</code>.|
|» Principal|body|string|true|An account ID, or <code>*</code> to grant layer usage permission to all accounts in an organization, or all Amazon Web Services accounts (if <code>organizationId</code> is not specified). For the last case, make sure that you really do want all Amazon Web Services accounts to have usage permission to this layer. |
|» OrganizationId|body|string|false|With the principal set to <code>*</code>, grant permission to all accounts in the specified organization.|

> Example responses

> 201 Response

```json
{
  "Statement": {},
  "RevisionId": {}
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

<h3 id="addlayerversionpermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[AddLayerVersionPermissionResponse](#schemaaddlayerversionpermissionresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|PolicyLengthExceededException|[PolicyLengthExceededException](#schemapolicylengthexceededexception)|
|486|486|PreconditionFailedException|[PreconditionFailedException](#schemapreconditionfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPolicy

<a id="opIdGetPolicy"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/string/policy \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-03-31/functions/{FunctionName}/policy`

Returns the <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">resource-based IAM policy</a> for a function, version, or alias.

<h3 id="getpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Qualifier|query|string|false|Specify a version or alias to get the policy for that resource.|
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
  "Policy": {},
  "RevisionId": {}
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

<h3 id="getpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPolicyResponse](#schemagetpolicyresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddPermission

<a id="opIdAddPermission"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/string/policy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StatementId": "string",
    "Action": "string",
    "Principal": "string",
    "SourceArn": "string",
    "SourceAccount": "string",
    "EventSourceToken": "string",
    "RevisionId": "string",
    "PrincipalOrgID": "stringstring",
    "FunctionUrlAuthType": "NONE"
  }'
```

`POST /2015-03-31/functions/{FunctionName}/policy`

<p>Grants an Amazon Web Service, Amazon Web Services account, or Amazon Web Services organization permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function. Note: Lambda does not support adding policies to version $LATEST.</p> <p>To grant permission to another account, specify the account ID as the <code>Principal</code>. To grant permission to an organization defined in Organizations, specify the organization ID as the <code>PrincipalOrgID</code>. For Amazon Web Services, the principal is a domain-style identifier that the service defines, such as <code>s3.amazonaws.com</code> or <code>sns.amazonaws.com</code>. For Amazon Web Services, you can also specify the ARN of the associated resource as the <code>SourceArn</code>. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.</p> <p>This operation adds a statement to a resource-based permissions policy for the function. For more information about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Using resource-based policies for Lambda</a>.</p>

> Body parameter

```json
{
  "StatementId": "string",
  "Action": "string",
  "Principal": "string",
  "SourceArn": "string",
  "SourceAccount": "string",
  "EventSourceToken": "string",
  "RevisionId": "string",
  "PrincipalOrgID": "stringstring",
  "FunctionUrlAuthType": "NONE"
}
```

<h3 id="addpermission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Qualifier|query|string|false|Specify a version or alias to add permissions to a published version of the function.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» StatementId|body|string|true|A statement identifier that differentiates the statement from others in the same policy.|
|» Action|body|string|true|The action that the principal can use on the function. For example, <code>lambda:InvokeFunction</code> or <code>lambda:GetFunction</code>.|
|» Principal|body|string|true|The Amazon Web Service or Amazon Web Services account that invokes the function. If you specify a service, use <code>SourceArn</code> or <code>SourceAccount</code> to limit who can invoke the function through that service.|
|» SourceArn|body|string|false|<p>For Amazon Web Services, the ARN of the Amazon Web Services resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.</p> <p>Note that Lambda configures the comparison using the <code>StringLike</code> operator.</p>|
|» SourceAccount|body|string|false|For Amazon Web Service, the ID of the Amazon Web Services account that owns the resource. Use this together with <code>SourceArn</code> to ensure that the specified account owns the resource. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account.|
|» EventSourceToken|body|string|false|For Alexa Smart Home functions, a token that the invoker must supply.|
|» RevisionId|body|string|false|Update the policy only if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it.|
|» PrincipalOrgID|body|string|false|The identifier for your organization in Organizations. Use this to grant permissions to all the Amazon Web Services accounts under this organization.|
|» FunctionUrlAuthType|body|string|false|The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» FunctionUrlAuthType|NONE|
|» FunctionUrlAuthType|AWS_IAM|

> Example responses

> 201 Response

```json
{
  "Statement": {}
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

<h3 id="addpermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[AddPermissionResponse](#schemaaddpermissionresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|PolicyLengthExceededException|[PolicyLengthExceededException](#schemapolicylengthexceededexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|PreconditionFailedException|[PreconditionFailedException](#schemapreconditionfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAliases

<a id="opIdListAliases"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/string/aliases \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-03-31/functions/{FunctionName}/aliases`

Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">aliases</a> for a Lambda function.

<h3 id="listaliases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|FunctionVersion|query|string|false|Specify a function version to only list aliases that invoke that version.|
|Marker|query|string|false|Specify the pagination token that's returned by a previous request to retrieve the next page of results.|
|MaxItems|query|integer|false|Limit the number of aliases returned.|
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
  "NextMarker": {},
  "Aliases": {}
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

<h3 id="listaliases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAliasesResponse](#schemalistaliasesresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAlias

<a id="opIdCreateAlias"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/string/aliases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "FunctionVersion": "string",
    "Description": "string",
    "RoutingConfig": {
      "AdditionalVersionWeights": {
        "property1": 0,
        "property2": 0
      }
    }
  }'
```

`POST /2015-03-31/functions/{FunctionName}/aliases`

<p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a> for a Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version.</p> <p>You can also map an alias to split invocation requests between two versions. Use the <code>RoutingConfig</code> parameter to specify a second version and the percentage of invocation requests that it receives.</p>

> Body parameter

```json
{
  "Name": "string",
  "FunctionVersion": "string",
  "Description": "string",
  "RoutingConfig": {
    "AdditionalVersionWeights": {
      "property1": 0,
      "property2": 0
    }
  }
}
```

<h3 id="createalias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the alias.|
|» FunctionVersion|body|string|true|The function version that the alias invokes.|
|» Description|body|string|false|A description of the alias.|
|» RoutingConfig|body|object|false|The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.|
|» » AdditionalVersionWeights|body|object|false|none|
|» » » **additionalProperties**|body|[Weight](#schemaweight)|false|none|

> Example responses

> 201 Response

```json
{
  "AliasArn": {},
  "Name": {},
  "FunctionVersion": {},
  "Description": {},
  "RoutingConfig": {
    "AdditionalVersionWeights": {
      "property1": 0,
      "property2": 0
    }
  },
  "RevisionId": {}
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

<h3 id="createalias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[AliasConfiguration](#schemaaliasconfiguration)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCodeSigningConfigs

<a id="opIdListCodeSigningConfigs"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2020-04-22/code-signing-configs/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-04-22/code-signing-configs/`

Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuring-codesigning.html">code signing configurations</a>. A request returns up to 10,000 configurations per call. You can use the <code>MaxItems</code> parameter to return fewer configurations per call. 

<h3 id="listcodesigningconfigs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Specify the pagination token that's returned by a previous request to retrieve the next page of results.|
|MaxItems|query|integer|false|Maximum number of items to return.|
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
  "NextMarker": {},
  "CodeSigningConfigs": {}
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

<h3 id="listcodesigningconfigs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCodeSigningConfigsResponse](#schemalistcodesigningconfigsresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCodeSigningConfig

<a id="opIdCreateCodeSigningConfig"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2020-04-22/code-signing-configs/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "AllowedPublishers": {
      "SigningProfileVersionArns": {}
    },
    "CodeSigningPolicies": {
      "UntrustedArtifactOnDeployment": {}
    }
  }'
```

`POST /2020-04-22/code-signing-configs/`

Creates a code signing configuration. A <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">code signing configuration</a> defines a list of allowed signing profiles and defines the code-signing validation policy (action to be taken if deployment validation checks fail). 

> Body parameter

```json
{
  "Description": "string",
  "AllowedPublishers": {
    "SigningProfileVersionArns": {}
  },
  "CodeSigningPolicies": {
    "UntrustedArtifactOnDeployment": {}
  }
}
```

<h3 id="createcodesigningconfig-parameters">Parameters</h3>

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
|» Description|body|string|false|Descriptive name for this code signing configuration.|
|» AllowedPublishers|body|object|true|List of signing profiles that can sign a code package. |
|» » SigningProfileVersionArns|body|object|false|none|
|» CodeSigningPolicies|body|object|false|Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.|
|» » UntrustedArtifactOnDeployment|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "CodeSigningConfig": {
    "CodeSigningConfigId": {},
    "CodeSigningConfigArn": {},
    "Description": {},
    "AllowedPublishers": {
      "SigningProfileVersionArns": {}
    },
    "CodeSigningPolicies": {
      "UntrustedArtifactOnDeployment": {}
    },
    "LastModified": {}
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

<h3 id="createcodesigningconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateCodeSigningConfigResponse](#schemacreatecodesigningconfigresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEventSourceMappings

<a id="opIdListEventSourceMappings"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/event-source-mappings/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-03-31/event-source-mappings/`

Lists event source mappings. Specify an <code>EventSourceArn</code> to show only event source mappings for a single event source.

<h3 id="listeventsourcemappings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EventSourceArn|query|string|false|<p>The Amazon Resource Name (ARN) of the event source.</p> <ul> <li> <p> <b>Amazon Kinesis</b> – The ARN of the data stream or a stream consumer.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – The ARN of the stream.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – The ARN of the queue.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – The ARN of the cluster.</p> </li> <li> <p> <b>Amazon MQ</b> – The ARN of the broker.</p> </li> <li> <p> <b>Amazon DocumentDB</b> – The ARN of the DocumentDB change stream.</p> </li> </ul>|
|FunctionName|query|string|false|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>|
|Marker|query|string|false|A pagination token returned by a previous call.|
|MaxItems|query|integer|false|The maximum number of event source mappings to return. Note that ListEventSourceMappings returns a maximum of 100 items in each response, even if you set the number higher.|
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
  "NextMarker": {},
  "EventSourceMappings": {}
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

<h3 id="listeventsourcemappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEventSourceMappingsResponse](#schemalisteventsourcemappingsresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEventSourceMapping

<a id="opIdCreateEventSourceMapping"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/event-source-mappings/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "EventSourceArn": "string",
    "FunctionName": "string",
    "Enabled": true,
    "BatchSize": 1,
    "FilterCriteria": {
      "Filters": {}
    },
    "MaximumBatchingWindowInSeconds": 0,
    "ParallelizationFactor": 1,
    "StartingPosition": "TRIM_HORIZON",
    "StartingPositionTimestamp": "1970-01-01T00:00:00Z",
    "DestinationConfig": {
      "OnSuccess": {
        "Destination": {}
      },
      "OnFailure": {
        "Destination": {}
      }
    },
    "MaximumRecordAgeInSeconds": -1,
    "BisectBatchOnFunctionError": true,
    "MaximumRetryAttempts": -1,
    "TumblingWindowInSeconds": 0,
    "Topics": [
      "string"
    ],
    "Queues": [
      "string"
    ],
    "SourceAccessConfigurations": [
      {
        "Type": {},
        "URI": {}
      }
    ],
    "SelfManagedEventSource": {
      "Endpoints": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      }
    },
    "FunctionResponseTypes": [
      "ReportBatchItemFailures"
    ],
    "AmazonManagedKafkaEventSourceConfig": {
      "ConsumerGroupId": {}
    },
    "SelfManagedKafkaEventSourceConfig": {
      "ConsumerGroupId": {}
    },
    "ScalingConfig": {
      "MaximumConcurrency": {}
    },
    "DocumentDBEventSourceConfig": {
      "DatabaseName": {},
      "CollectionName": {},
      "FullDocument": {}
    }
  }'
```

`POST /2015-03-31/event-source-mappings/`

<p>Creates a mapping between an event source and an Lambda function. Lambda reads items from the event source and invokes the function.</p> <p>For details about how to configure different event sources, see the following topics. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html"> Amazon DocumentDB</a> </p> </li> </ul> <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p> </li> </ul> <p>For information about which configuration parameters apply to each event source, see the following topics.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html#docdb-configuration"> Amazon DocumentDB</a> </p> </li> </ul>

> Body parameter

```json
{
  "EventSourceArn": "string",
  "FunctionName": "string",
  "Enabled": true,
  "BatchSize": 1,
  "FilterCriteria": {
    "Filters": {}
  },
  "MaximumBatchingWindowInSeconds": 0,
  "ParallelizationFactor": 1,
  "StartingPosition": "TRIM_HORIZON",
  "StartingPositionTimestamp": "1970-01-01T00:00:00Z",
  "DestinationConfig": {
    "OnSuccess": {
      "Destination": {}
    },
    "OnFailure": {
      "Destination": {}
    }
  },
  "MaximumRecordAgeInSeconds": -1,
  "BisectBatchOnFunctionError": true,
  "MaximumRetryAttempts": -1,
  "TumblingWindowInSeconds": 0,
  "Topics": [
    "string"
  ],
  "Queues": [
    "string"
  ],
  "SourceAccessConfigurations": [
    {
      "Type": {},
      "URI": {}
    }
  ],
  "SelfManagedEventSource": {
    "Endpoints": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "FunctionResponseTypes": [
    "ReportBatchItemFailures"
  ],
  "AmazonManagedKafkaEventSourceConfig": {
    "ConsumerGroupId": {}
  },
  "SelfManagedKafkaEventSourceConfig": {
    "ConsumerGroupId": {}
  },
  "ScalingConfig": {
    "MaximumConcurrency": {}
  },
  "DocumentDBEventSourceConfig": {
    "DatabaseName": {},
    "CollectionName": {},
    "FullDocument": {}
  }
}
```

<h3 id="createeventsourcemapping-parameters">Parameters</h3>

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
|» EventSourceArn|body|string|false|<p>The Amazon Resource Name (ARN) of the event source.</p> <ul> <li> <p> <b>Amazon Kinesis</b> – The ARN of the data stream or a stream consumer.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – The ARN of the stream.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – The ARN of the queue.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – The ARN of the cluster.</p> </li> <li> <p> <b>Amazon MQ</b> – The ARN of the broker.</p> </li> <li> <p> <b>Amazon DocumentDB</b> – The ARN of the DocumentDB change stream.</p> </li> </ul>|
|» FunctionName|body|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>|
|» Enabled|body|boolean|false|<p>When true, the event source mapping is active. When false, Lambda pauses polling and invocation.</p> <p>Default: True</p>|
|» BatchSize|body|integer|false|<p>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).</p> <ul> <li> <p> <b>Amazon Kinesis</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Self-managed Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon MQ (ActiveMQ and RabbitMQ)</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>DocumentDB</b> – Default 100. Max 10,000.</p> </li> </ul>|
|» FilterCriteria|body|object|false| An object that contains the filters for an event source. |
|» » Filters|body|object|false|none|
|» MaximumBatchingWindowInSeconds|body|integer|false|<p>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure <code>MaximumBatchingWindowInSeconds</code> to any value from 0 seconds to 300 seconds in increments of seconds.</p> <p>For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change <code>MaximumBatchingWindowInSeconds</code> in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping.</p> <p>Related setting: For streams and Amazon SQS event sources, when you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>|
|» ParallelizationFactor|body|integer|false|(Kinesis and DynamoDB Streams only) The number of batches to process from each shard concurrently.|
|» StartingPosition|body|string|false|The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Stream event sources. <code>AT_TIMESTAMP</code> is supported only for Amazon Kinesis streams, Amazon DocumentDB, Amazon MSK, and self-managed Apache Kafka.|
|» StartingPositionTimestamp|body|string(date-time)|false|With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start reading. <code>StartingPositionTimestamp</code> cannot be in the future.|
|» DestinationConfig|body|object|false|A configuration object that specifies the destination of an event after Lambda processes it.|
|» » OnSuccess|body|object|false|none|
|» » » Destination|body|object|false|none|
|» » OnFailure|body|object|false|none|
|» » » Destination|body|object|false|none|
|» MaximumRecordAgeInSeconds|body|integer|false|(Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is infinite (-1).|
|» BisectBatchOnFunctionError|body|boolean|false|(Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry.|
|» MaximumRetryAttempts|body|integer|false|(Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.|
|» TumblingWindowInSeconds|body|integer|false|(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.|
|» Topics|body|[[Topic](#schematopic)]|false|The name of the Kafka topic.|
|» Queues|body|[[Queue](#schemaqueue)]|false| (MQ) The name of the Amazon MQ broker destination queue to consume. |
|» SourceAccessConfigurations|body|[[SourceAccessConfiguration](#schemasourceaccessconfiguration)]|false|An array of authentication protocols or VPC components required to secure your event source.|
|» SelfManagedEventSource|body|object|false|The self-managed Apache Kafka cluster for your event source.|
|» » Endpoints|body|object|false|none|
|» » » **additionalProperties**|body|[EndpointLists](#schemaendpointlists)|false|none|
|» FunctionResponseTypes|body|[[FunctionResponseType](#schemafunctionresponsetype)]|false|(Kinesis, DynamoDB Streams, and Amazon SQS) A list of current response type enums applied to the event source mapping.|
|» AmazonManagedKafkaEventSourceConfig|body|object|false|Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.|
|» » ConsumerGroupId|body|object|false|none|
|» SelfManagedKafkaEventSourceConfig|body|object|false|Specific configuration settings for a self-managed Apache Kafka event source.|
|» » ConsumerGroupId|body|object|false|none|
|» ScalingConfig|body|object|false|(Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value.|
|» » MaximumConcurrency|body|object|false|none|
|» DocumentDBEventSourceConfig|body|object|false| Specific configuration settings for a DocumentDB event source. |
|» » DatabaseName|body|object|false|none|
|» » CollectionName|body|object|false|none|
|» » FullDocument|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» StartingPosition|TRIM_HORIZON|
|» StartingPosition|LATEST|
|» StartingPosition|AT_TIMESTAMP|
|» FunctionResponseTypes|ReportBatchItemFailures|

> Example responses

> 202 Response

```json
{
  "UUID": {},
  "StartingPosition": {},
  "StartingPositionTimestamp": {},
  "BatchSize": {},
  "MaximumBatchingWindowInSeconds": {},
  "ParallelizationFactor": {},
  "EventSourceArn": {},
  "FilterCriteria": {
    "Filters": {}
  },
  "FunctionArn": {},
  "LastModified": {},
  "LastProcessingResult": {},
  "State": {},
  "StateTransitionReason": {},
  "DestinationConfig": {
    "OnSuccess": {
      "Destination": {}
    },
    "OnFailure": {
      "Destination": {}
    }
  },
  "Topics": {},
  "Queues": {},
  "SourceAccessConfigurations": {},
  "SelfManagedEventSource": {
    "Endpoints": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "MaximumRecordAgeInSeconds": {},
  "BisectBatchOnFunctionError": {},
  "MaximumRetryAttempts": {},
  "TumblingWindowInSeconds": {},
  "FunctionResponseTypes": {},
  "AmazonManagedKafkaEventSourceConfig": {
    "ConsumerGroupId": {}
  },
  "SelfManagedKafkaEventSourceConfig": {
    "ConsumerGroupId": {}
  },
  "ScalingConfig": {
    "MaximumConcurrency": {}
  },
  "DocumentDBEventSourceConfig": {
    "DatabaseName": {},
    "CollectionName": {},
    "FullDocument": {}
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

<h3 id="createeventsourcemapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[EventSourceMappingConfiguration](#schemaeventsourcemappingconfiguration)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFunction

<a id="opIdCreateFunction"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/functions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FunctionName": "string",
    "Runtime": "nodejs",
    "Role": "string",
    "Handler": "string",
    "Code": {
      "ZipFile": {},
      "S3Bucket": {},
      "S3Key": {},
      "S3ObjectVersion": {},
      "ImageUri": {}
    },
    "Description": "string",
    "Timeout": 1,
    "MemorySize": 128,
    "Publish": true,
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "PackageType": "Zip",
    "DeadLetterConfig": {
      "TargetArn": {}
    },
    "Environment": {
      "Variables": {
        "property1": "password",
        "property2": "password"
      }
    },
    "KMSKeyArn": "string",
    "TracingConfig": {
      "Mode": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Layers": [
      "string"
    ],
    "FileSystemConfigs": [
      {
        "Arn": {},
        "LocalMountPath": {}
      }
    ],
    "ImageConfig": {
      "EntryPoint": {},
      "Command": {},
      "WorkingDirectory": {}
    },
    "CodeSigningConfigArn": "string",
    "Architectures": [
      "x86_64"
    ],
    "EphemeralStorage": {
      "Size": {}
    },
    "SnapStart": {
      "ApplyOn": {}
    }
  }'
```

`POST /2015-03-31/functions`

<p>Creates a Lambda function. To create a function, you need a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html">deployment package</a> and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role">execution role</a>. The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use Amazon Web Services, such as Amazon CloudWatch Logs for log streaming and X-Ray for request tracing.</p> <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a>, then you set the package type to <code>Image</code>. For a container image, the code property must include the URI of a container image in the Amazon ECR registry. You do not need to specify the handler and runtime properties.</p> <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>, then you set the package type to <code>Zip</code>. For a .zip file archive, the code property specifies the location of the .zip file. You must also specify the handler and runtime properties. The code in the deployment package must be compatible with the target instruction set architecture of the function (<code>x86-64</code> or <code>arm64</code>). If you do not specify the architecture, then the default value is <code>x86-64</code>.</p> <p>When you create a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute or so. During this time, you can't invoke or modify the function. The <code>State</code>, <code>StateReason</code>, and <code>StateReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the function is ready to invoke. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda function states</a>.</p> <p>A function has an unpublished version, and can have published versions and aliases. The unpublished version changes when you update your function's code and configuration. A published version is a snapshot of your function code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be changed to map to a different version. Use the <code>Publish</code> parameter to create version <code>1</code> of your function from its initial configuration.</p> <p>The other parameters let you configure version-specific and function-level settings. You can modify version-specific settings later with <a>UpdateFunctionConfiguration</a>. Function-level settings apply to both the unpublished and published versions of the function, and include tags (<a>TagResource</a>) and per-function concurrency limits (<a>PutFunctionConcurrency</a>).</p> <p>You can use code signing if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with <a>UpdateFunctionCode</a>, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes set of signing profiles, which define the trusted publishers for this function.</p> <p>If another Amazon Web Services account or an Amazon Web Service invokes your function, use <a>AddPermission</a> to grant permission by creating a resource-based Identity and Access Management (IAM) policy. You can grant permissions at the function level, on a version, or on an alias.</p> <p>To invoke your function directly, use <a>Invoke</a>. To invoke your function in response to events in other Amazon Web Services, create an event source mapping (<a>CreateEventSourceMapping</a>), or configure a function trigger in the other service. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html">Invoking Lambda functions</a>.</p>

> Body parameter

```json
{
  "FunctionName": "string",
  "Runtime": "nodejs",
  "Role": "string",
  "Handler": "string",
  "Code": {
    "ZipFile": {},
    "S3Bucket": {},
    "S3Key": {},
    "S3ObjectVersion": {},
    "ImageUri": {}
  },
  "Description": "string",
  "Timeout": 1,
  "MemorySize": 128,
  "Publish": true,
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "PackageType": "Zip",
  "DeadLetterConfig": {
    "TargetArn": {}
  },
  "Environment": {
    "Variables": {
      "property1": "password",
      "property2": "password"
    }
  },
  "KMSKeyArn": "string",
  "TracingConfig": {
    "Mode": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Layers": [
    "string"
  ],
  "FileSystemConfigs": [
    {
      "Arn": {},
      "LocalMountPath": {}
    }
  ],
  "ImageConfig": {
    "EntryPoint": {},
    "Command": {},
    "WorkingDirectory": {}
  },
  "CodeSigningConfigArn": "string",
  "Architectures": [
    "x86_64"
  ],
  "EphemeralStorage": {
    "Size": {}
  },
  "SnapStart": {
    "ApplyOn": {}
  }
}
```

<h3 id="createfunction-parameters">Parameters</h3>

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
|» FunctionName|body|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|» Runtime|body|string|false|<p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. Runtime is required if the deployment package is a .zip file archive.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>|
|» Role|body|string|true|The Amazon Resource Name (ARN) of the function's execution role.|
|» Handler|body|string|false|The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html">Lambda programming model</a>.|
|» Code|body|object|true|The code for the Lambda function. You can either specify an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image.|
|» » ZipFile|body|object|false|none|
|» » S3Bucket|body|object|false|none|
|» » S3Key|body|object|false|none|
|» » S3ObjectVersion|body|object|false|none|
|» » ImageUri|body|object|false|none|
|» Description|body|string|false|A description of the function.|
|» Timeout|body|integer|false|The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html">Lambda execution environment</a>.|
|» MemorySize|body|integer|false|The amount of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console">memory available to the function</a> at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.|
|» Publish|body|boolean|false|Set to true to publish the first version of the function during creation.|
|» VpcConfig|body|object|false|The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda function to access resources in a VPC</a>.|
|» » SubnetIds|body|object|false|none|
|» » SecurityGroupIds|body|object|false|none|
|» PackageType|body|string|false|The type of deployment package. Set to <code>Image</code> for container image and set to <code>Zip</code> for .zip file archive.|
|» DeadLetterConfig|body|object|false|The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.|
|» » TargetArn|body|object|false|none|
|» Environment|body|object|false|A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration.|
|» » Variables|body|object|false|none|
|» » » **additionalProperties**|body|[EnvironmentVariableValue](#schemaenvironmentvariablevalue)|false|none|
|» KMSKeyArn|body|string|false|The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption">environment variables</a>. When <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html">Lambda SnapStart</a> is activated, Lambda also uses this key is to encrypt your function's snapshot. If you deploy your function using a container image, Lambda also uses this key to encrypt your function when it's deployed. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). If you don't provide a customer managed key, Lambda uses a default service key.|
|» TracingConfig|body|object|false|The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.|
|» » Mode|body|object|false|none|
|» Tags|body|object|false|A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to apply to the function.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» Layers|body|[[LayerVersionArn](#schemalayerversionarn)]|false|A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a> to add to the function's execution environment. Specify each layer by its ARN, including the version.|
|» FileSystemConfigs|body|[[FileSystemConfig](#schemafilesystemconfig)]|false|Connection settings for an Amazon EFS file system.|
|» ImageConfig|body|object|false|Configuration values that override the container image Dockerfile settings. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container image settings</a>.|
|» » EntryPoint|body|object|false|none|
|» » Command|body|object|false|none|
|» » WorkingDirectory|body|object|false|none|
|» CodeSigningConfigArn|body|string|false|To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.|
|» Architectures|body|[[Architecture](#schemaarchitecture)]|false|The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is <code>x86_64</code>.|
|» EphemeralStorage|body|object|false|The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.|
|» » Size|body|object|false|none|
|» SnapStart|body|object|false|The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">Lambda SnapStart</a> setting. Set <code>ApplyOn</code> to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version.|
|» » ApplyOn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Runtime|nodejs|
|» Runtime|nodejs4.3|
|» Runtime|nodejs6.10|
|» Runtime|nodejs8.10|
|» Runtime|nodejs10.x|
|» Runtime|nodejs12.x|
|» Runtime|nodejs14.x|
|» Runtime|nodejs16.x|
|» Runtime|java8|
|» Runtime|java8.al2|
|» Runtime|java11|
|» Runtime|python2.7|
|» Runtime|python3.6|
|» Runtime|python3.7|
|» Runtime|python3.8|
|» Runtime|python3.9|
|» Runtime|dotnetcore1.0|
|» Runtime|dotnetcore2.0|
|» Runtime|dotnetcore2.1|
|» Runtime|dotnetcore3.1|
|» Runtime|dotnet6|
|» Runtime|nodejs4.3-edge|
|» Runtime|go1.x|
|» Runtime|ruby2.5|
|» Runtime|ruby2.7|
|» Runtime|provided|
|» Runtime|provided.al2|
|» Runtime|nodejs18.x|
|» Runtime|python3.10|
|» Runtime|java17|
|» Runtime|ruby3.2|
|» Runtime|python3.11|
|» PackageType|Zip|
|» PackageType|Image|
|» Architectures|x86_64|
|» Architectures|arm64|

> Example responses

> 201 Response

```json
{
  "FunctionName": {},
  "FunctionArn": {},
  "Runtime": {},
  "Role": {},
  "Handler": {},
  "CodeSize": {},
  "Description": {},
  "Timeout": {},
  "MemorySize": {},
  "LastModified": {},
  "CodeSha256": {},
  "Version": {},
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {},
    "VpcId": {}
  },
  "DeadLetterConfig": {
    "TargetArn": {}
  },
  "Environment": {
    "Variables": {
      "property1": "password",
      "property2": "password"
    },
    "Error": {
      "ErrorCode": {},
      "Message": {}
    }
  },
  "KMSKeyArn": {},
  "TracingConfig": {
    "Mode": {}
  },
  "MasterArn": {},
  "RevisionId": {},
  "Layers": {},
  "State": {},
  "StateReason": {},
  "StateReasonCode": {},
  "LastUpdateStatus": {},
  "LastUpdateStatusReason": {},
  "LastUpdateStatusReasonCode": {},
  "FileSystemConfigs": {},
  "PackageType": {},
  "ImageConfigResponse": {
    "ImageConfig": {
      "EntryPoint": {},
      "Command": {},
      "WorkingDirectory": {}
    },
    "Error": {
      "ErrorCode": {},
      "Message": {}
    }
  },
  "SigningProfileVersionArn": {},
  "SigningJobArn": {},
  "Architectures": {},
  "EphemeralStorage": {
    "Size": {}
  },
  "SnapStart": {
    "ApplyOn": {},
    "OptimizationStatus": {}
  },
  "RuntimeVersionConfig": {
    "RuntimeVersionArn": {},
    "Error": {
      "ErrorCode": {},
      "Message": {}
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="createfunction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[FunctionConfiguration](#schemafunctionconfiguration)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|CodeStorageExceededException|[CodeStorageExceededException](#schemacodestorageexceededexception)|
|486|486|CodeVerificationFailedException|[CodeVerificationFailedException](#schemacodeverificationfailedexception)|
|487|487|InvalidCodeSignatureException|[InvalidCodeSignatureException](#schemainvalidcodesignatureexception)|
|488|488|CodeSigningConfigNotFoundException|[CodeSigningConfigNotFoundException](#schemacodesigningconfignotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFunctionUrlConfig

<a id="opIdGetFunctionUrlConfig"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2021-10-31/functions/string/url \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2021-10-31/functions/{FunctionName}/url`

Returns details about a Lambda function URL.

<h3 id="getfunctionurlconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Qualifier|query|string|false|The alias name.|
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
  "FunctionUrl": {},
  "FunctionArn": {},
  "AuthType": {},
  "Cors": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "CreationTime": {},
  "LastModifiedTime": {},
  "InvokeMode": {}
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

<h3 id="getfunctionurlconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFunctionUrlConfigResponse](#schemagetfunctionurlconfigresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServiceException|[ServiceException](#schemaserviceexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFunctionUrlConfig

<a id="opIdUpdateFunctionUrlConfig"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2021-10-31/functions/string/url \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AuthType": "NONE",
    "Cors": {
      "AllowCredentials": {},
      "AllowHeaders": {},
      "AllowMethods": {},
      "AllowOrigins": {},
      "ExposeHeaders": {},
      "MaxAge": {}
    },
    "InvokeMode": "BUFFERED"
  }'
```

`PUT /2021-10-31/functions/{FunctionName}/url`

Updates the configuration for a Lambda function URL.

> Body parameter

```json
{
  "AuthType": "NONE",
  "Cors": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "InvokeMode": "BUFFERED"
}
```

<h3 id="updatefunctionurlconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Qualifier|query|string|false|The alias name.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AuthType|body|string|false|The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.|
|» Cors|body|object|false|The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your Lambda function URL. Use CORS to grant access to your function URL from any origin. You can also use CORS to control access for specific HTTP headers and methods in requests to your function URL.|
|» » AllowCredentials|body|object|false|none|
|» » AllowHeaders|body|object|false|none|
|» » AllowMethods|body|object|false|none|
|» » AllowOrigins|body|object|false|none|
|» » ExposeHeaders|body|object|false|none|
|» » MaxAge|body|object|false|none|
|» InvokeMode|body|string|false|<p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p> </li> </ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» AuthType|NONE|
|» AuthType|AWS_IAM|
|» InvokeMode|BUFFERED|
|» InvokeMode|RESPONSE_STREAM|

> Example responses

> 200 Response

```json
{
  "FunctionUrl": {},
  "FunctionArn": {},
  "AuthType": {},
  "Cors": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "CreationTime": {},
  "LastModifiedTime": {},
  "InvokeMode": {}
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

<h3 id="updatefunctionurlconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFunctionUrlConfigResponse](#schemaupdatefunctionurlconfigresponse)|
|480|480|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFunctionUrlConfig

<a id="opIdCreateFunctionUrlConfig"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2021-10-31/functions/string/url \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AuthType": "NONE",
    "Cors": {
      "AllowCredentials": {},
      "AllowHeaders": {},
      "AllowMethods": {},
      "AllowOrigins": {},
      "ExposeHeaders": {},
      "MaxAge": {}
    },
    "InvokeMode": "BUFFERED"
  }'
```

`POST /2021-10-31/functions/{FunctionName}/url`

Creates a Lambda function URL with the specified configuration parameters. A function URL is a dedicated HTTP(S) endpoint that you can use to invoke your function.

> Body parameter

```json
{
  "AuthType": "NONE",
  "Cors": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "InvokeMode": "BUFFERED"
}
```

<h3 id="createfunctionurlconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Qualifier|query|string|false|The alias name.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AuthType|body|string|true|The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.|
|» Cors|body|object|false|The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your Lambda function URL. Use CORS to grant access to your function URL from any origin. You can also use CORS to control access for specific HTTP headers and methods in requests to your function URL.|
|» » AllowCredentials|body|object|false|none|
|» » AllowHeaders|body|object|false|none|
|» » AllowMethods|body|object|false|none|
|» » AllowOrigins|body|object|false|none|
|» » ExposeHeaders|body|object|false|none|
|» » MaxAge|body|object|false|none|
|» InvokeMode|body|string|false|<p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p> </li> </ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» AuthType|NONE|
|» AuthType|AWS_IAM|
|» InvokeMode|BUFFERED|
|» InvokeMode|RESPONSE_STREAM|

> Example responses

> 201 Response

```json
{
  "FunctionUrl": {},
  "FunctionArn": {},
  "AuthType": {},
  "Cors": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "CreationTime": {},
  "InvokeMode": {}
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

<h3 id="createfunctionurlconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateFunctionUrlConfigResponse](#schemacreatefunctionurlconfigresponse)|
|480|480|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFunctionUrlConfig

<a id="opIdDeleteFunctionUrlConfig"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2021-10-31/functions/string/url \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2021-10-31/functions/{FunctionName}/url`

Deletes a Lambda function URL. When you delete a function URL, you can't recover it. Creating a new function URL results in a different URL address.

<h3 id="deletefunctionurlconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Qualifier|query|string|false|The alias name.|
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

<h3 id="deletefunctionurlconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceException|[ServiceException](#schemaserviceexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAlias

<a id="opIdGetAlias"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/string/aliases/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-03-31/functions/{FunctionName}/aliases/{Name}`

Returns details about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.

<h3 id="getalias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Name|path|string|true|The name of the alias.|
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
  "AliasArn": {},
  "Name": {},
  "FunctionVersion": {},
  "Description": {},
  "RoutingConfig": {
    "AdditionalVersionWeights": {
      "property1": 0,
      "property2": 0
    }
  },
  "RevisionId": {}
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

<h3 id="getalias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AliasConfiguration](#schemaaliasconfiguration)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAlias

<a id="opIdUpdateAlias"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/string/aliases/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FunctionVersion": "string",
    "Description": "string",
    "RoutingConfig": {
      "AdditionalVersionWeights": {
        "property1": 0,
        "property2": 0
      }
    },
    "RevisionId": "string"
  }'
```

`PUT /2015-03-31/functions/{FunctionName}/aliases/{Name}`

Updates the configuration of a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.

> Body parameter

```json
{
  "FunctionVersion": "string",
  "Description": "string",
  "RoutingConfig": {
    "AdditionalVersionWeights": {
      "property1": 0,
      "property2": 0
    }
  },
  "RevisionId": "string"
}
```

<h3 id="updatealias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Name|path|string|true|The name of the alias.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FunctionVersion|body|string|false|The function version that the alias invokes.|
|» Description|body|string|false|A description of the alias.|
|» RoutingConfig|body|object|false|The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.|
|» » AdditionalVersionWeights|body|object|false|none|
|» » » **additionalProperties**|body|[Weight](#schemaweight)|false|none|
|» RevisionId|body|string|false|Only update the alias if the revision ID matches the ID that's specified. Use this option to avoid modifying an alias that has changed since you last read it.|

> Example responses

> 200 Response

```json
{
  "AliasArn": {},
  "Name": {},
  "FunctionVersion": {},
  "Description": {},
  "RoutingConfig": {
    "AdditionalVersionWeights": {
      "property1": 0,
      "property2": 0
    }
  },
  "RevisionId": {}
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

<h3 id="updatealias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AliasConfiguration](#schemaaliasconfiguration)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|PreconditionFailedException|[PreconditionFailedException](#schemapreconditionfailedexception)|
|485|485|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAlias

<a id="opIdDeleteAlias"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/string/aliases/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2015-03-31/functions/{FunctionName}/aliases/{Name}`

Deletes a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.

<h3 id="deletealias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Name|path|string|true|The name of the alias.|
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

<h3 id="deletealias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCodeSigningConfig

<a id="opIdGetCodeSigningConfig"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2020-04-22/code-signing-configs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-04-22/code-signing-configs/{CodeSigningConfigArn}`

Returns information about the specified code signing configuration.

<h3 id="getcodesigningconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CodeSigningConfigArn|path|string|true|The The Amazon Resource Name (ARN) of the code signing configuration. |
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
  "CodeSigningConfig": {
    "CodeSigningConfigId": {},
    "CodeSigningConfigArn": {},
    "Description": {},
    "AllowedPublishers": {
      "SigningProfileVersionArns": {}
    },
    "CodeSigningPolicies": {
      "UntrustedArtifactOnDeployment": {}
    },
    "LastModified": {}
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

<h3 id="getcodesigningconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCodeSigningConfigResponse](#schemagetcodesigningconfigresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCodeSigningConfig

<a id="opIdUpdateCodeSigningConfig"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2020-04-22/code-signing-configs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "AllowedPublishers": {
      "SigningProfileVersionArns": {}
    },
    "CodeSigningPolicies": {
      "UntrustedArtifactOnDeployment": {}
    }
  }'
```

`PUT /2020-04-22/code-signing-configs/{CodeSigningConfigArn}`

Update the code signing configuration. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function. 

> Body parameter

```json
{
  "Description": "string",
  "AllowedPublishers": {
    "SigningProfileVersionArns": {}
  },
  "CodeSigningPolicies": {
    "UntrustedArtifactOnDeployment": {}
  }
}
```

<h3 id="updatecodesigningconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CodeSigningConfigArn|path|string|true|The The Amazon Resource Name (ARN) of the code signing configuration.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|Descriptive name for this code signing configuration.|
|» AllowedPublishers|body|object|false|List of signing profiles that can sign a code package. |
|» » SigningProfileVersionArns|body|object|false|none|
|» CodeSigningPolicies|body|object|false|Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.|
|» » UntrustedArtifactOnDeployment|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "CodeSigningConfig": {
    "CodeSigningConfigId": {},
    "CodeSigningConfigArn": {},
    "Description": {},
    "AllowedPublishers": {
      "SigningProfileVersionArns": {}
    },
    "CodeSigningPolicies": {
      "UntrustedArtifactOnDeployment": {}
    },
    "LastModified": {}
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

<h3 id="updatecodesigningconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCodeSigningConfigResponse](#schemaupdatecodesigningconfigresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCodeSigningConfig

<a id="opIdDeleteCodeSigningConfig"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2020-04-22/code-signing-configs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-04-22/code-signing-configs/{CodeSigningConfigArn}`

Deletes the code signing configuration. You can delete the code signing configuration only if no function is using it. 

<h3 id="deletecodesigningconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CodeSigningConfigArn|path|string|true|The The Amazon Resource Name (ARN) of the code signing configuration.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 204 Response

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

<h3 id="deletecodesigningconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteCodeSigningConfigResponse](#schemadeletecodesigningconfigresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEventSourceMapping

<a id="opIdGetEventSourceMapping"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/event-source-mappings/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-03-31/event-source-mappings/{UUID}`

Returns details about an event source mapping. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.

<h3 id="geteventsourcemapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UUID|path|string|true|The identifier of the event source mapping.|
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
  "UUID": {},
  "StartingPosition": {},
  "StartingPositionTimestamp": {},
  "BatchSize": {},
  "MaximumBatchingWindowInSeconds": {},
  "ParallelizationFactor": {},
  "EventSourceArn": {},
  "FilterCriteria": {
    "Filters": {}
  },
  "FunctionArn": {},
  "LastModified": {},
  "LastProcessingResult": {},
  "State": {},
  "StateTransitionReason": {},
  "DestinationConfig": {
    "OnSuccess": {
      "Destination": {}
    },
    "OnFailure": {
      "Destination": {}
    }
  },
  "Topics": {},
  "Queues": {},
  "SourceAccessConfigurations": {},
  "SelfManagedEventSource": {
    "Endpoints": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "MaximumRecordAgeInSeconds": {},
  "BisectBatchOnFunctionError": {},
  "MaximumRetryAttempts": {},
  "TumblingWindowInSeconds": {},
  "FunctionResponseTypes": {},
  "AmazonManagedKafkaEventSourceConfig": {
    "ConsumerGroupId": {}
  },
  "SelfManagedKafkaEventSourceConfig": {
    "ConsumerGroupId": {}
  },
  "ScalingConfig": {
    "MaximumConcurrency": {}
  },
  "DocumentDBEventSourceConfig": {
    "DatabaseName": {},
    "CollectionName": {},
    "FullDocument": {}
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

<h3 id="geteventsourcemapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EventSourceMappingConfiguration](#schemaeventsourcemappingconfiguration)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEventSourceMapping

<a id="opIdUpdateEventSourceMapping"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/event-source-mappings/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FunctionName": "string",
    "Enabled": true,
    "BatchSize": 1,
    "FilterCriteria": {
      "Filters": {}
    },
    "MaximumBatchingWindowInSeconds": 0,
    "DestinationConfig": {
      "OnSuccess": {
        "Destination": {}
      },
      "OnFailure": {
        "Destination": {}
      }
    },
    "MaximumRecordAgeInSeconds": -1,
    "BisectBatchOnFunctionError": true,
    "MaximumRetryAttempts": -1,
    "ParallelizationFactor": 1,
    "SourceAccessConfigurations": [
      {
        "Type": {},
        "URI": {}
      }
    ],
    "TumblingWindowInSeconds": 0,
    "FunctionResponseTypes": [
      "ReportBatchItemFailures"
    ],
    "ScalingConfig": {
      "MaximumConcurrency": {}
    },
    "DocumentDBEventSourceConfig": {
      "DatabaseName": {},
      "CollectionName": {},
      "FullDocument": {}
    }
  }'
```

`PUT /2015-03-31/event-source-mappings/{UUID}`

<p>Updates an event source mapping. You can change the function that Lambda invokes, or pause invocation and resume later from the same location.</p> <p>For details about how to configure different event sources, see the following topics. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html"> Amazon DocumentDB</a> </p> </li> </ul> <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p> </li> </ul> <p>For information about which configuration parameters apply to each event source, see the following topics.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html#docdb-configuration"> Amazon DocumentDB</a> </p> </li> </ul>

> Body parameter

```json
{
  "FunctionName": "string",
  "Enabled": true,
  "BatchSize": 1,
  "FilterCriteria": {
    "Filters": {}
  },
  "MaximumBatchingWindowInSeconds": 0,
  "DestinationConfig": {
    "OnSuccess": {
      "Destination": {}
    },
    "OnFailure": {
      "Destination": {}
    }
  },
  "MaximumRecordAgeInSeconds": -1,
  "BisectBatchOnFunctionError": true,
  "MaximumRetryAttempts": -1,
  "ParallelizationFactor": 1,
  "SourceAccessConfigurations": [
    {
      "Type": {},
      "URI": {}
    }
  ],
  "TumblingWindowInSeconds": 0,
  "FunctionResponseTypes": [
    "ReportBatchItemFailures"
  ],
  "ScalingConfig": {
    "MaximumConcurrency": {}
  },
  "DocumentDBEventSourceConfig": {
    "DatabaseName": {},
    "CollectionName": {},
    "FullDocument": {}
  }
}
```

<h3 id="updateeventsourcemapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UUID|path|string|true|The identifier of the event source mapping.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FunctionName|body|string|false|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>|
|» Enabled|body|boolean|false|<p>When true, the event source mapping is active. When false, Lambda pauses polling and invocation.</p> <p>Default: True</p>|
|» BatchSize|body|integer|false|<p>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).</p> <ul> <li> <p> <b>Amazon Kinesis</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Self-managed Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon MQ (ActiveMQ and RabbitMQ)</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>DocumentDB</b> – Default 100. Max 10,000.</p> </li> </ul>|
|» FilterCriteria|body|object|false| An object that contains the filters for an event source. |
|» » Filters|body|object|false|none|
|» MaximumBatchingWindowInSeconds|body|integer|false|<p>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure <code>MaximumBatchingWindowInSeconds</code> to any value from 0 seconds to 300 seconds in increments of seconds.</p> <p>For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change <code>MaximumBatchingWindowInSeconds</code> in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping.</p> <p>Related setting: For streams and Amazon SQS event sources, when you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>|
|» DestinationConfig|body|object|false|A configuration object that specifies the destination of an event after Lambda processes it.|
|» » OnSuccess|body|object|false|none|
|» » » Destination|body|object|false|none|
|» » OnFailure|body|object|false|none|
|» » » Destination|body|object|false|none|
|» MaximumRecordAgeInSeconds|body|integer|false|(Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is infinite (-1).|
|» BisectBatchOnFunctionError|body|boolean|false|(Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry.|
|» MaximumRetryAttempts|body|integer|false|(Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.|
|» ParallelizationFactor|body|integer|false|(Kinesis and DynamoDB Streams only) The number of batches to process from each shard concurrently.|
|» SourceAccessConfigurations|body|[[SourceAccessConfiguration](#schemasourceaccessconfiguration)]|false|An array of authentication protocols or VPC components required to secure your event source.|
|» TumblingWindowInSeconds|body|integer|false|(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.|
|» FunctionResponseTypes|body|[[FunctionResponseType](#schemafunctionresponsetype)]|false|(Kinesis, DynamoDB Streams, and Amazon SQS) A list of current response type enums applied to the event source mapping.|
|» ScalingConfig|body|object|false|(Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value.|
|» » MaximumConcurrency|body|object|false|none|
|» DocumentDBEventSourceConfig|body|object|false| Specific configuration settings for a DocumentDB event source. |
|» » DatabaseName|body|object|false|none|
|» » CollectionName|body|object|false|none|
|» » FullDocument|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» FunctionResponseTypes|ReportBatchItemFailures|

> Example responses

> 202 Response

```json
{
  "UUID": {},
  "StartingPosition": {},
  "StartingPositionTimestamp": {},
  "BatchSize": {},
  "MaximumBatchingWindowInSeconds": {},
  "ParallelizationFactor": {},
  "EventSourceArn": {},
  "FilterCriteria": {
    "Filters": {}
  },
  "FunctionArn": {},
  "LastModified": {},
  "LastProcessingResult": {},
  "State": {},
  "StateTransitionReason": {},
  "DestinationConfig": {
    "OnSuccess": {
      "Destination": {}
    },
    "OnFailure": {
      "Destination": {}
    }
  },
  "Topics": {},
  "Queues": {},
  "SourceAccessConfigurations": {},
  "SelfManagedEventSource": {
    "Endpoints": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "MaximumRecordAgeInSeconds": {},
  "BisectBatchOnFunctionError": {},
  "MaximumRetryAttempts": {},
  "TumblingWindowInSeconds": {},
  "FunctionResponseTypes": {},
  "AmazonManagedKafkaEventSourceConfig": {
    "ConsumerGroupId": {}
  },
  "SelfManagedKafkaEventSourceConfig": {
    "ConsumerGroupId": {}
  },
  "ScalingConfig": {
    "MaximumConcurrency": {}
  },
  "DocumentDBEventSourceConfig": {
    "DatabaseName": {},
    "CollectionName": {},
    "FullDocument": {}
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

<h3 id="updateeventsourcemapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[EventSourceMappingConfiguration](#schemaeventsourcemappingconfiguration)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|485|485|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEventSourceMapping

<a id="opIdDeleteEventSourceMapping"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/event-source-mappings/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2015-03-31/event-source-mappings/{UUID}`

<p>Deletes an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-invocation-modes.html">event source mapping</a>. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p> <p>When you delete an event source mapping, it enters a <code>Deleting</code> state and might not be completely deleted for several seconds.</p>

<h3 id="deleteeventsourcemapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UUID|path|string|true|The identifier of the event source mapping.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 202 Response

```json
{
  "UUID": {},
  "StartingPosition": {},
  "StartingPositionTimestamp": {},
  "BatchSize": {},
  "MaximumBatchingWindowInSeconds": {},
  "ParallelizationFactor": {},
  "EventSourceArn": {},
  "FilterCriteria": {
    "Filters": {}
  },
  "FunctionArn": {},
  "LastModified": {},
  "LastProcessingResult": {},
  "State": {},
  "StateTransitionReason": {},
  "DestinationConfig": {
    "OnSuccess": {
      "Destination": {}
    },
    "OnFailure": {
      "Destination": {}
    }
  },
  "Topics": {},
  "Queues": {},
  "SourceAccessConfigurations": {},
  "SelfManagedEventSource": {
    "Endpoints": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "MaximumRecordAgeInSeconds": {},
  "BisectBatchOnFunctionError": {},
  "MaximumRetryAttempts": {},
  "TumblingWindowInSeconds": {},
  "FunctionResponseTypes": {},
  "AmazonManagedKafkaEventSourceConfig": {
    "ConsumerGroupId": {}
  },
  "SelfManagedKafkaEventSourceConfig": {
    "ConsumerGroupId": {}
  },
  "ScalingConfig": {
    "MaximumConcurrency": {}
  },
  "DocumentDBEventSourceConfig": {
    "DatabaseName": {},
    "CollectionName": {},
    "FullDocument": {}
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

<h3 id="deleteeventsourcemapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[EventSourceMappingConfiguration](#schemaeventsourcemappingconfiguration)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|485|485|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFunction

<a id="opIdGetFunction"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-03-31/functions/{FunctionName}`

Returns information about the function or function version, with a link to download the deployment package that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are returned.

<h3 id="getfunction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Qualifier|query|string|false|Specify a version or alias to get details about a published version of the function.|
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
  "Configuration": {
    "FunctionName": {},
    "FunctionArn": {},
    "Runtime": {},
    "Role": {},
    "Handler": {},
    "CodeSize": {},
    "Description": {},
    "Timeout": {},
    "MemorySize": {},
    "LastModified": {},
    "CodeSha256": {},
    "Version": {},
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {},
      "VpcId": {}
    },
    "DeadLetterConfig": {
      "TargetArn": {}
    },
    "Environment": {
      "Variables": {
        "property1": "password",
        "property2": "password"
      },
      "Error": {
        "ErrorCode": {},
        "Message": {}
      }
    },
    "KMSKeyArn": {},
    "TracingConfig": {
      "Mode": {}
    },
    "MasterArn": {},
    "RevisionId": {},
    "Layers": {},
    "State": {},
    "StateReason": {},
    "StateReasonCode": {},
    "LastUpdateStatus": {},
    "LastUpdateStatusReason": {},
    "LastUpdateStatusReasonCode": {},
    "FileSystemConfigs": {},
    "PackageType": {},
    "ImageConfigResponse": {
      "ImageConfig": {
        "EntryPoint": {},
        "Command": {},
        "WorkingDirectory": {}
      },
      "Error": {
        "ErrorCode": {},
        "Message": {}
      }
    },
    "SigningProfileVersionArn": {},
    "SigningJobArn": {},
    "Architectures": {},
    "EphemeralStorage": {
      "Size": {}
    },
    "SnapStart": {
      "ApplyOn": {},
      "OptimizationStatus": {}
    },
    "RuntimeVersionConfig": {
      "RuntimeVersionArn": {},
      "Error": {
        "ErrorCode": {},
        "Message": {}
      }
    }
  },
  "Code": {
    "RepositoryType": {},
    "Location": {},
    "ImageUri": {},
    "ResolvedImageUri": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Concurrency": {
    "ReservedConcurrentExecutions": {}
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

<h3 id="getfunction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFunctionResponse](#schemagetfunctionresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFunction

<a id="opIdDeleteFunction"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2015-03-31/functions/{FunctionName}`

<p>Deletes a Lambda function. To delete a specific function version, use the <code>Qualifier</code> parameter. Otherwise, all versions and aliases are deleted. This doesn't require the user to have explicit permissions for <a>DeleteAlias</a>.</p> <p>To delete Lambda event source mappings that invoke a function, use <a>DeleteEventSourceMapping</a>. For Amazon Web Services and resources that invoke your function directly, delete the trigger in the service where you originally configured it.</p>

<h3 id="deletefunction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function or version.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:1</code> (with version).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Qualifier|query|string|false|Specify a version to delete. You can't delete a version that an alias references.|
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

> 484 Response

```json
null
```

<h3 id="deletefunction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFunctionCodeSigningConfig

<a id="opIdGetFunctionCodeSigningConfig"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2020-06-30/functions/string/code-signing-config \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-06-30/functions/{FunctionName}/code-signing-config`

Returns the code signing configuration for the specified function.

<h3 id="getfunctioncodesigningconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
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
  "CodeSigningConfigArn": {},
  "FunctionName": {}
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

<h3 id="getfunctioncodesigningconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFunctionCodeSigningConfigResponse](#schemagetfunctioncodesigningconfigresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceException|[ServiceException](#schemaserviceexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutFunctionCodeSigningConfig

<a id="opIdPutFunctionCodeSigningConfig"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2020-06-30/functions/string/code-signing-config \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CodeSigningConfigArn": "string"
  }'
```

`PUT /2020-06-30/functions/{FunctionName}/code-signing-config`

Update the code signing configuration for the function. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function. 

> Body parameter

```json
{
  "CodeSigningConfigArn": "string"
}
```

<h3 id="putfunctioncodesigningconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CodeSigningConfigArn|body|string|true|The The Amazon Resource Name (ARN) of the code signing configuration.|

> Example responses

> 200 Response

```json
{
  "CodeSigningConfigArn": {},
  "FunctionName": {}
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

<h3 id="putfunctioncodesigningconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutFunctionCodeSigningConfigResponse](#schemaputfunctioncodesigningconfigresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|485|485|CodeSigningConfigNotFoundException|[CodeSigningConfigNotFoundException](#schemacodesigningconfignotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFunctionCodeSigningConfig

<a id="opIdDeleteFunctionCodeSigningConfig"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2020-06-30/functions/string/code-signing-config \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-06-30/functions/{FunctionName}/code-signing-config`

Removes the code signing configuration from the function.

<h3 id="deletefunctioncodesigningconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deletefunctioncodesigningconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|CodeSigningConfigNotFoundException|[CodeSigningConfigNotFoundException](#schemacodesigningconfignotfoundexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutFunctionConcurrency

<a id="opIdPutFunctionConcurrency"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2017-10-31/functions/string/concurrency \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ReservedConcurrentExecutions": 0
  }'
```

`PUT /2017-10-31/functions/{FunctionName}/concurrency`

<p>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency level.</p> <p>Concurrency settings apply to the function as a whole, including all published versions and the unpublished version. Reserving concurrency both ensures that your function has capacity to process the specified number of events simultaneously, and prevents it from scaling beyond that level. Use <a>GetFunction</a> to see the current setting for a function.</p> <p>Use <a>GetAccountSettings</a> to see your Regional concurrency limit. You can reserve concurrency for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for functions that aren't configured with a per-function limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html">Lambda function scaling</a>.</p>

> Body parameter

```json
{
  "ReservedConcurrentExecutions": 0
}
```

<h3 id="putfunctionconcurrency-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ReservedConcurrentExecutions|body|integer|true|The number of simultaneous executions to reserve for the function.|

> Example responses

> 200 Response

```json
{
  "ReservedConcurrentExecutions": {}
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

<h3 id="putfunctionconcurrency-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Concurrency](#schemaconcurrency)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFunctionConcurrency

<a id="opIdDeleteFunctionConcurrency"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2017-10-31/functions/string/concurrency \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2017-10-31/functions/{FunctionName}/concurrency`

Removes a concurrent execution limit from a function.

<h3 id="deletefunctionconcurrency-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
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

> 484 Response

```json
null
```

<h3 id="deletefunctionconcurrency-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFunctionEventInvokeConfig

<a id="opIdGetFunctionEventInvokeConfig"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2019-09-25/functions/string/event-invoke-config \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2019-09-25/functions/{FunctionName}/event-invoke-config`

<p>Retrieves the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>

<h3 id="getfunctioneventinvokeconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Qualifier|query|string|false|A version number or alias name.|
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
  "LastModified": {},
  "FunctionArn": {},
  "MaximumRetryAttempts": {},
  "MaximumEventAgeInSeconds": {},
  "DestinationConfig": {
    "OnSuccess": {
      "Destination": {}
    },
    "OnFailure": {
      "Destination": {}
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

<h3 id="getfunctioneventinvokeconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FunctionEventInvokeConfig](#schemafunctioneventinvokeconfig)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutFunctionEventInvokeConfig

<a id="opIdPutFunctionEventInvokeConfig"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2019-09-25/functions/string/event-invoke-config \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MaximumRetryAttempts": 0,
    "MaximumEventAgeInSeconds": 60,
    "DestinationConfig": {
      "OnSuccess": {
        "Destination": {}
      },
      "OnFailure": {
        "Destination": {}
      }
    }
  }'
```

`PUT /2019-09-25/functions/{FunctionName}/event-invoke-config`

<p>Configures options for <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a> on a function, version, or alias. If a configuration already exists for a function, version, or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without affecting existing settings for other options, use <a>UpdateFunctionEventInvokeConfig</a>.</p> <p>By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with <a>UpdateFunctionConfiguration</a>.</p> <p>To send an invocation record to a queue, topic, function, or event bus, specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations">destination</a>. You can configure separate destinations for successful invocations (on-success) and events that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a dead-letter queue.</p>

> Body parameter

```json
{
  "MaximumRetryAttempts": 0,
  "MaximumEventAgeInSeconds": 60,
  "DestinationConfig": {
    "OnSuccess": {
      "Destination": {}
    },
    "OnFailure": {
      "Destination": {}
    }
  }
}
```

<h3 id="putfunctioneventinvokeconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Qualifier|query|string|false|A version number or alias name.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MaximumRetryAttempts|body|integer|false|The maximum number of times to retry when the function returns an error.|
|» MaximumEventAgeInSeconds|body|integer|false|The maximum age of a request that Lambda sends to a function for processing.|
|» DestinationConfig|body|object|false|A configuration object that specifies the destination of an event after Lambda processes it.|
|» » OnSuccess|body|object|false|none|
|» » » Destination|body|object|false|none|
|» » OnFailure|body|object|false|none|
|» » » Destination|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "LastModified": {},
  "FunctionArn": {},
  "MaximumRetryAttempts": {},
  "MaximumEventAgeInSeconds": {},
  "DestinationConfig": {
    "OnSuccess": {
      "Destination": {}
    },
    "OnFailure": {
      "Destination": {}
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

<h3 id="putfunctioneventinvokeconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FunctionEventInvokeConfig](#schemafunctioneventinvokeconfig)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFunctionEventInvokeConfig

<a id="opIdUpdateFunctionEventInvokeConfig"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2019-09-25/functions/string/event-invoke-config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MaximumRetryAttempts": 0,
    "MaximumEventAgeInSeconds": 60,
    "DestinationConfig": {
      "OnSuccess": {
        "Destination": {}
      },
      "OnFailure": {
        "Destination": {}
      }
    }
  }'
```

`POST /2019-09-25/functions/{FunctionName}/event-invoke-config`

<p>Updates the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>

> Body parameter

```json
{
  "MaximumRetryAttempts": 0,
  "MaximumEventAgeInSeconds": 60,
  "DestinationConfig": {
    "OnSuccess": {
      "Destination": {}
    },
    "OnFailure": {
      "Destination": {}
    }
  }
}
```

<h3 id="updatefunctioneventinvokeconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Qualifier|query|string|false|A version number or alias name.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MaximumRetryAttempts|body|integer|false|The maximum number of times to retry when the function returns an error.|
|» MaximumEventAgeInSeconds|body|integer|false|The maximum age of a request that Lambda sends to a function for processing.|
|» DestinationConfig|body|object|false|A configuration object that specifies the destination of an event after Lambda processes it.|
|» » OnSuccess|body|object|false|none|
|» » » Destination|body|object|false|none|
|» » OnFailure|body|object|false|none|
|» » » Destination|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "LastModified": {},
  "FunctionArn": {},
  "MaximumRetryAttempts": {},
  "MaximumEventAgeInSeconds": {},
  "DestinationConfig": {
    "OnSuccess": {
      "Destination": {}
    },
    "OnFailure": {
      "Destination": {}
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

<h3 id="updatefunctioneventinvokeconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FunctionEventInvokeConfig](#schemafunctioneventinvokeconfig)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFunctionEventInvokeConfig

<a id="opIdDeleteFunctionEventInvokeConfig"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2019-09-25/functions/string/event-invoke-config \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2019-09-25/functions/{FunctionName}/event-invoke-config`

<p>Deletes the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>

<h3 id="deletefunctioneventinvokeconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Qualifier|query|string|false|A version number or alias name.|
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

> 484 Response

```json
null
```

<h3 id="deletefunctioneventinvokeconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLayerVersion

<a id="opIdGetLayerVersion"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2018-10-31/layers/string/versions/0 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2018-10-31/layers/{LayerName}/versions/{VersionNumber}`

Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.

<h3 id="getlayerversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LayerName|path|string|true|The name or Amazon Resource Name (ARN) of the layer.|
|VersionNumber|path|integer|true|The version number.|
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
  "Content": {
    "Location": {},
    "CodeSha256": {},
    "CodeSize": {},
    "SigningProfileVersionArn": {},
    "SigningJobArn": {}
  },
  "LayerArn": {},
  "LayerVersionArn": {},
  "Description": {},
  "CreatedDate": {},
  "Version": {},
  "CompatibleRuntimes": {},
  "LicenseInfo": {},
  "CompatibleArchitectures": {}
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

<h3 id="getlayerversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLayerVersionResponse](#schemagetlayerversionresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLayerVersion

<a id="opIdDeleteLayerVersion"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2018-10-31/layers/string/versions/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2018-10-31/layers/{LayerName}/versions/{VersionNumber}`

Deletes a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Deleted versions can no longer be viewed or added to functions. To avoid breaking functions, a copy of the version remains in Lambda until no functions refer to it.

<h3 id="deletelayerversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LayerName|path|string|true|The name or Amazon Resource Name (ARN) of the layer.|
|VersionNumber|path|integer|true|The version number.|
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

<h3 id="deletelayerversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetProvisionedConcurrencyConfig

<a id="opIdGetProvisionedConcurrencyConfig"></a>

> Code samples

```bash
curl 'https://lambda.us-east-1.amazonaws.com/2019-09-30/functions/string/provisioned-concurrency#Qualifier?Qualifier=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2019-09-30/functions/{FunctionName}/provisioned-concurrency#Qualifier`

Retrieves the provisioned concurrency configuration for a function's alias or version.

<h3 id="getprovisionedconcurrencyconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Qualifier|query|string|true|The version number or alias name.|
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
  "RequestedProvisionedConcurrentExecutions": {},
  "AvailableProvisionedConcurrentExecutions": {},
  "AllocatedProvisionedConcurrentExecutions": {},
  "Status": {},
  "StatusReason": {},
  "LastModified": {}
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

<h3 id="getprovisionedconcurrencyconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetProvisionedConcurrencyConfigResponse](#schemagetprovisionedconcurrencyconfigresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|ProvisionedConcurrencyConfigNotFoundException|[ProvisionedConcurrencyConfigNotFoundException](#schemaprovisionedconcurrencyconfignotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutProvisionedConcurrencyConfig

<a id="opIdPutProvisionedConcurrencyConfig"></a>

> Code samples

```bash
curl 'https://lambda.us-east-1.amazonaws.com/2019-09-30/functions/string/provisioned-concurrency#Qualifier?Qualifier=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ProvisionedConcurrentExecutions": 1
  }'
```

`PUT /2019-09-30/functions/{FunctionName}/provisioned-concurrency#Qualifier`

Adds a provisioned concurrency configuration to a function's alias or version.

> Body parameter

```json
{
  "ProvisionedConcurrentExecutions": 1
}
```

<h3 id="putprovisionedconcurrencyconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Qualifier|query|string|true|The version number or alias name.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ProvisionedConcurrentExecutions|body|integer|true|The amount of provisioned concurrency to allocate for the version or alias.|

> Example responses

> 202 Response

```json
{
  "RequestedProvisionedConcurrentExecutions": {},
  "AvailableProvisionedConcurrentExecutions": {},
  "AllocatedProvisionedConcurrentExecutions": {},
  "Status": {},
  "StatusReason": {},
  "LastModified": {}
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

<h3 id="putprovisionedconcurrencyconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[PutProvisionedConcurrencyConfigResponse](#schemaputprovisionedconcurrencyconfigresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProvisionedConcurrencyConfig

<a id="opIdDeleteProvisionedConcurrencyConfig"></a>

> Code samples

```bash
curl 'https://lambda.us-east-1.amazonaws.com/2019-09-30/functions/string/provisioned-concurrency#Qualifier?Qualifier=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2019-09-30/functions/{FunctionName}/provisioned-concurrency#Qualifier`

Deletes the provisioned concurrency configuration for a function.

<h3 id="deleteprovisionedconcurrencyconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Qualifier|query|string|true|The version number or alias name.|
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

> 484 Response

```json
null
```

<h3 id="deleteprovisionedconcurrencyconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccountSettings

<a id="opIdGetAccountSettings"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2016-08-19/account-settings/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2016-08-19/account-settings/`

Retrieves details about your account's <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limits</a> and usage in an Amazon Web Services Region.

<h3 id="getaccountsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "AccountLimit": {
    "TotalCodeSize": {},
    "CodeSizeUnzipped": {},
    "CodeSizeZipped": {},
    "ConcurrentExecutions": {},
    "UnreservedConcurrentExecutions": {}
  },
  "AccountUsage": {
    "TotalCodeSize": {},
    "FunctionCount": {}
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

<h3 id="getaccountsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccountSettingsResponse](#schemagetaccountsettingsresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFunctionConcurrency

<a id="opIdGetFunctionConcurrency"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2019-09-30/functions/string/concurrency \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2019-09-30/functions/{FunctionName}/concurrency`

Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a function, use <a>PutFunctionConcurrency</a>.

<h3 id="getfunctionconcurrency-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
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
  "ReservedConcurrentExecutions": {}
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

<h3 id="getfunctionconcurrency-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFunctionConcurrencyResponse](#schemagetfunctionconcurrencyresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFunctionConfiguration

<a id="opIdGetFunctionConfiguration"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/string/configuration \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-03-31/functions/{FunctionName}/configuration`

<p>Returns the version-specific settings of a Lambda function or version. The output includes only options that can vary between versions of a function. To modify these settings, use <a>UpdateFunctionConfiguration</a>.</p> <p>To get all of a function's details, including function-level settings, use <a>GetFunction</a>.</p>

<h3 id="getfunctionconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Qualifier|query|string|false|Specify a version or alias to get details about a published version of the function.|
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
  "FunctionName": {},
  "FunctionArn": {},
  "Runtime": {},
  "Role": {},
  "Handler": {},
  "CodeSize": {},
  "Description": {},
  "Timeout": {},
  "MemorySize": {},
  "LastModified": {},
  "CodeSha256": {},
  "Version": {},
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {},
    "VpcId": {}
  },
  "DeadLetterConfig": {
    "TargetArn": {}
  },
  "Environment": {
    "Variables": {
      "property1": "password",
      "property2": "password"
    },
    "Error": {
      "ErrorCode": {},
      "Message": {}
    }
  },
  "KMSKeyArn": {},
  "TracingConfig": {
    "Mode": {}
  },
  "MasterArn": {},
  "RevisionId": {},
  "Layers": {},
  "State": {},
  "StateReason": {},
  "StateReasonCode": {},
  "LastUpdateStatus": {},
  "LastUpdateStatusReason": {},
  "LastUpdateStatusReasonCode": {},
  "FileSystemConfigs": {},
  "PackageType": {},
  "ImageConfigResponse": {
    "ImageConfig": {
      "EntryPoint": {},
      "Command": {},
      "WorkingDirectory": {}
    },
    "Error": {
      "ErrorCode": {},
      "Message": {}
    }
  },
  "SigningProfileVersionArn": {},
  "SigningJobArn": {},
  "Architectures": {},
  "EphemeralStorage": {
    "Size": {}
  },
  "SnapStart": {
    "ApplyOn": {},
    "OptimizationStatus": {}
  },
  "RuntimeVersionConfig": {
    "RuntimeVersionArn": {},
    "Error": {
      "ErrorCode": {},
      "Message": {}
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

<h3 id="getfunctionconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FunctionConfiguration](#schemafunctionconfiguration)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFunctionConfiguration

<a id="opIdUpdateFunctionConfiguration"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/string/configuration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Role": "string",
    "Handler": "string",
    "Description": "string",
    "Timeout": 1,
    "MemorySize": 128,
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "Environment": {
      "Variables": {
        "property1": "password",
        "property2": "password"
      }
    },
    "Runtime": "nodejs",
    "DeadLetterConfig": {
      "TargetArn": {}
    },
    "KMSKeyArn": "string",
    "TracingConfig": {
      "Mode": {}
    },
    "RevisionId": "string",
    "Layers": [
      "string"
    ],
    "FileSystemConfigs": [
      {
        "Arn": {},
        "LocalMountPath": {}
      }
    ],
    "ImageConfig": {
      "EntryPoint": {},
      "Command": {},
      "WorkingDirectory": {}
    },
    "EphemeralStorage": {
      "Size": {}
    },
    "SnapStart": {
      "ApplyOn": {}
    }
  }'
```

`PUT /2015-03-31/functions/{FunctionName}/configuration`

<p>Modify the version-specific settings of a Lambda function.</p> <p>When you update a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute. During this time, you can't modify the function, but you can still invoke it. The <code>LastUpdateStatus</code>, <code>LastUpdateStatusReason</code>, and <code>LastUpdateStatusReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the update is complete and the function is processing events with the new configuration. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda function states</a>.</p> <p>These settings can vary between versions of a function and are locked when you publish a version. You can't modify the configuration of a published version, only the unpublished version.</p> <p>To configure function concurrency, use <a>PutFunctionConcurrency</a>. To grant invoke permissions to an Amazon Web Services account or Amazon Web Service, use <a>AddPermission</a>.</p>

> Body parameter

```json
{
  "Role": "string",
  "Handler": "string",
  "Description": "string",
  "Timeout": 1,
  "MemorySize": 128,
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "Environment": {
    "Variables": {
      "property1": "password",
      "property2": "password"
    }
  },
  "Runtime": "nodejs",
  "DeadLetterConfig": {
    "TargetArn": {}
  },
  "KMSKeyArn": "string",
  "TracingConfig": {
    "Mode": {}
  },
  "RevisionId": "string",
  "Layers": [
    "string"
  ],
  "FileSystemConfigs": [
    {
      "Arn": {},
      "LocalMountPath": {}
    }
  ],
  "ImageConfig": {
    "EntryPoint": {},
    "Command": {},
    "WorkingDirectory": {}
  },
  "EphemeralStorage": {
    "Size": {}
  },
  "SnapStart": {
    "ApplyOn": {}
  }
}
```

<h3 id="updatefunctionconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Role|body|string|false|The Amazon Resource Name (ARN) of the function's execution role.|
|» Handler|body|string|false|The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html">Lambda programming model</a>.|
|» Description|body|string|false|A description of the function.|
|» Timeout|body|integer|false|The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html">Lambda execution environment</a>.|
|» MemorySize|body|integer|false|The amount of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console">memory available to the function</a> at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.|
|» VpcConfig|body|object|false|The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda function to access resources in a VPC</a>.|
|» » SubnetIds|body|object|false|none|
|» » SecurityGroupIds|body|object|false|none|
|» Environment|body|object|false|A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration.|
|» » Variables|body|object|false|none|
|» » » **additionalProperties**|body|[EnvironmentVariableValue](#schemaenvironmentvariablevalue)|false|none|
|» Runtime|body|string|false|<p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. Runtime is required if the deployment package is a .zip file archive.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>|
|» DeadLetterConfig|body|object|false|The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.|
|» » TargetArn|body|object|false|none|
|» KMSKeyArn|body|string|false|The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption">environment variables</a>. When <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html">Lambda SnapStart</a> is activated, Lambda also uses this key is to encrypt your function's snapshot. If you deploy your function using a container image, Lambda also uses this key to encrypt your function when it's deployed. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). If you don't provide a customer managed key, Lambda uses a default service key.|
|» TracingConfig|body|object|false|The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.|
|» » Mode|body|object|false|none|
|» RevisionId|body|string|false|Update the function only if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it.|
|» Layers|body|[[LayerVersionArn](#schemalayerversionarn)]|false|A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a> to add to the function's execution environment. Specify each layer by its ARN, including the version.|
|» FileSystemConfigs|body|[[FileSystemConfig](#schemafilesystemconfig)]|false|Connection settings for an Amazon EFS file system.|
|» ImageConfig|body|object|false|Configuration values that override the container image Dockerfile settings. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container image settings</a>.|
|» » EntryPoint|body|object|false|none|
|» » Command|body|object|false|none|
|» » WorkingDirectory|body|object|false|none|
|» EphemeralStorage|body|object|false|The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.|
|» » Size|body|object|false|none|
|» SnapStart|body|object|false|The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">Lambda SnapStart</a> setting. Set <code>ApplyOn</code> to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version.|
|» » ApplyOn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Runtime|nodejs|
|» Runtime|nodejs4.3|
|» Runtime|nodejs6.10|
|» Runtime|nodejs8.10|
|» Runtime|nodejs10.x|
|» Runtime|nodejs12.x|
|» Runtime|nodejs14.x|
|» Runtime|nodejs16.x|
|» Runtime|java8|
|» Runtime|java8.al2|
|» Runtime|java11|
|» Runtime|python2.7|
|» Runtime|python3.6|
|» Runtime|python3.7|
|» Runtime|python3.8|
|» Runtime|python3.9|
|» Runtime|dotnetcore1.0|
|» Runtime|dotnetcore2.0|
|» Runtime|dotnetcore2.1|
|» Runtime|dotnetcore3.1|
|» Runtime|dotnet6|
|» Runtime|nodejs4.3-edge|
|» Runtime|go1.x|
|» Runtime|ruby2.5|
|» Runtime|ruby2.7|
|» Runtime|provided|
|» Runtime|provided.al2|
|» Runtime|nodejs18.x|
|» Runtime|python3.10|
|» Runtime|java17|
|» Runtime|ruby3.2|
|» Runtime|python3.11|

> Example responses

> 200 Response

```json
{
  "FunctionName": {},
  "FunctionArn": {},
  "Runtime": {},
  "Role": {},
  "Handler": {},
  "CodeSize": {},
  "Description": {},
  "Timeout": {},
  "MemorySize": {},
  "LastModified": {},
  "CodeSha256": {},
  "Version": {},
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {},
    "VpcId": {}
  },
  "DeadLetterConfig": {
    "TargetArn": {}
  },
  "Environment": {
    "Variables": {
      "property1": "password",
      "property2": "password"
    },
    "Error": {
      "ErrorCode": {},
      "Message": {}
    }
  },
  "KMSKeyArn": {},
  "TracingConfig": {
    "Mode": {}
  },
  "MasterArn": {},
  "RevisionId": {},
  "Layers": {},
  "State": {},
  "StateReason": {},
  "StateReasonCode": {},
  "LastUpdateStatus": {},
  "LastUpdateStatusReason": {},
  "LastUpdateStatusReasonCode": {},
  "FileSystemConfigs": {},
  "PackageType": {},
  "ImageConfigResponse": {
    "ImageConfig": {
      "EntryPoint": {},
      "Command": {},
      "WorkingDirectory": {}
    },
    "Error": {
      "ErrorCode": {},
      "Message": {}
    }
  },
  "SigningProfileVersionArn": {},
  "SigningJobArn": {},
  "Architectures": {},
  "EphemeralStorage": {
    "Size": {}
  },
  "SnapStart": {
    "ApplyOn": {},
    "OptimizationStatus": {}
  },
  "RuntimeVersionConfig": {
    "RuntimeVersionArn": {},
    "Error": {
      "ErrorCode": {},
      "Message": {}
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="updatefunctionconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FunctionConfiguration](#schemafunctionconfiguration)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|485|485|PreconditionFailedException|[PreconditionFailedException](#schemapreconditionfailedexception)|
|486|486|CodeVerificationFailedException|[CodeVerificationFailedException](#schemacodeverificationfailedexception)|
|487|487|InvalidCodeSignatureException|[InvalidCodeSignatureException](#schemainvalidcodesignatureexception)|
|488|488|CodeSigningConfigNotFoundException|[CodeSigningConfigNotFoundException](#schemacodesigningconfignotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLayerVersionByArn

<a id="opIdGetLayerVersionByArn"></a>

> Code samples

```bash
curl 'https://lambda.us-east-1.amazonaws.com/2018-10-31/layers#find=LayerVersion&Arn?Arn=string&find=LayerVersion' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2018-10-31/layers#find=LayerVersion&Arn`

Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.

<h3 id="getlayerversionbyarn-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Arn|query|string|true|The ARN of the layer version.|
|find|query|string|true|none|
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
|find|LayerVersion|

> Example responses

> 200 Response

```json
{
  "Content": {
    "Location": {},
    "CodeSha256": {},
    "CodeSize": {},
    "SigningProfileVersionArn": {},
    "SigningJobArn": {}
  },
  "LayerArn": {},
  "LayerVersionArn": {},
  "Description": {},
  "CreatedDate": {},
  "Version": {},
  "CompatibleRuntimes": {},
  "LicenseInfo": {},
  "CompatibleArchitectures": {}
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

<h3 id="getlayerversionbyarn-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLayerVersionResponse](#schemagetlayerversionresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRuntimeManagementConfig

<a id="opIdGetRuntimeManagementConfig"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2021-07-20/functions/string/runtime-management-config \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2021-07-20/functions/{FunctionName}/runtime-management-config`

Retrieves the runtime management configuration for a function's version. If the runtime update mode is <b>Manual</b>, this includes the ARN of the runtime version and the runtime update mode. If the runtime update mode is <b>Auto</b> or <b>Function update</b>, this includes the runtime update mode and <code>null</code> is returned for the ARN. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.

<h3 id="getruntimemanagementconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Qualifier|query|string|false|Specify a version of the function. This can be <code>$LATEST</code> or a published version number. If no value is specified, the configuration for the <code>$LATEST</code> version is returned.|
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
  "UpdateRuntimeOn": {},
  "RuntimeVersionArn": {},
  "FunctionArn": {}
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

<h3 id="getruntimemanagementconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRuntimeManagementConfigResponse](#schemagetruntimemanagementconfigresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRuntimeManagementConfig

<a id="opIdPutRuntimeManagementConfig"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2021-07-20/functions/string/runtime-management-config \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "UpdateRuntimeOn": "Auto",
    "RuntimeVersionArn": "stringstringstringstringst"
  }'
```

`PUT /2021-07-20/functions/{FunctionName}/runtime-management-config`

Sets the runtime management configuration for a function's version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.

> Body parameter

```json
{
  "UpdateRuntimeOn": "Auto",
  "RuntimeVersionArn": "stringstringstringstringst"
}
```

<h3 id="putruntimemanagementconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Qualifier|query|string|false|Specify a version of the function. This can be <code>$LATEST</code> or a published version number. If no value is specified, the configuration for the <code>$LATEST</code> version is returned.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» UpdateRuntimeOn|body|string|true|<p>Specify the runtime update mode.</p> <ul> <li> <p> <b>Auto (default)</b> - Automatically update to the most recent and secure runtime version using a <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase">Two-phase runtime version rollout</a>. This is the best choice for most customers to ensure they always benefit from runtime updates.</p> </li> <li> <p> <b>Function update</b> - Lambda updates the runtime of your function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.</p> </li> <li> <p> <b>Manual</b> - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback">Roll back a runtime version</a>.</p> </li> </ul>|
|» RuntimeVersionArn|body|string|false|<p>The ARN of the runtime version you want the function to use.</p> <note> <p>This is only required if you're using the <b>Manual</b> runtime update mode.</p> </note>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» UpdateRuntimeOn|Auto|
|» UpdateRuntimeOn|Manual|
|» UpdateRuntimeOn|FunctionUpdate|

> Example responses

> 200 Response

```json
{
  "UpdateRuntimeOn": {},
  "FunctionArn": {},
  "RuntimeVersionArn": {}
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

<h3 id="putruntimemanagementconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRuntimeManagementConfigResponse](#schemaputruntimemanagementconfigresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## Invoke

<a id="opIdInvoke"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/string/invocations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Payload": "password"
  }'
```

`POST /2015-03-31/functions/{FunctionName}/invocations`

<p>Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or asynchronously. To invoke a function asynchronously, set <code>InvocationType</code> to <code>Event</code>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html">synchronous invocation</a>, details about the function response, including errors, are included in the response body and headers. For either invocation type, you can find more information in the <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html">execution log</a> and <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-x-ray.html">trace</a>.</p> <p>When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type, client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an error, Lambda executes the function up to two more times. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-retries.html">Error handling and automatic retries in Lambda</a>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a>, Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple times, even if no error occurs. To retain events that were not processed, configure your function with a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq">dead-letter queue</a>.</p> <p>The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your function from executing, such as permissions errors, <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">quota</a> errors, or issues with your function's code and configuration. For example, Lambda returns <code>TooManyRequestsException</code> if running the function would cause you to exceed a concurrency limit at either the account level (<code>ConcurrentInvocationLimitExceeded</code>) or function level (<code>ReservedFunctionConcurrentInvocationLimitExceeded</code>).</p> <p>For functions with a long timeout, your client might disconnect during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function access to other accounts</a>.</p>

> Body parameter

```json
{
  "Payload": "password"
}
```

<h3 id="invoke-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|X-Amz-Invocation-Type|header|string|false|<p>Choose from the following options.</p> <ul> <li> <p> <code>RequestResponse</code> (default) – Invoke the function synchronously. Keep the connection open until the function returns a response or times out. The API response includes the function response and additional data.</p> </li> <li> <p> <code>Event</code> – Invoke the function asynchronously. Send events that fail multiple times to the function's dead-letter queue (if one is configured). The API response only includes a status code.</p> </li> <li> <p> <code>DryRun</code> – Validate parameter values and verify that the user or role has permission to invoke the function.</p> </li> </ul>|
|X-Amz-Log-Type|header|string|false|Set to <code>Tail</code> to include the execution log in the response. Applies to synchronously invoked functions only.|
|X-Amz-Client-Context|header|string|false|Up to 3,583 bytes of base64-encoded data about the invoking client to pass to the function in the context object.|
|Qualifier|query|string|false|Specify a version or alias to invoke a published version of the function.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Payload|body|string(password)|false|<p>The JSON that you want to provide to your Lambda function as input.</p> <p>You can enter the JSON directly. For example, <code>--payload '{ "key": "value" }'</code>. You can also specify a file path. For example, <code>--payload file://payload.json</code>.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Invocation-Type|Event|
|X-Amz-Invocation-Type|RequestResponse|
|X-Amz-Invocation-Type|DryRun|
|X-Amz-Log-Type|None|
|X-Amz-Log-Type|Tail|

> Example responses

> 200 Response

```json
{
  "StatusCode": {},
  "Payload": {}
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

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

> 502 Response

```json
null
```

> 503 Response

```json
null
```

> 504 Response

```json
null
```

> 505 Response

```json
null
```

> 506 Response

```json
null
```

> 507 Response

```json
null
```

> 508 Response

```json
null
```

> 509 Response

```json
null
```

<h3 id="invoke-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InvocationResponse](#schemainvocationresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidRequestContentException|[InvalidRequestContentException](#schemainvalidrequestcontentexception)|
|483|483|RequestTooLargeException|[RequestTooLargeException](#schemarequesttoolargeexception)|
|484|484|UnsupportedMediaTypeException|[UnsupportedMediaTypeException](#schemaunsupportedmediatypeexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|487|487|EC2UnexpectedException|[EC2UnexpectedException](#schemaec2unexpectedexception)|
|488|488|SubnetIPAddressLimitReachedException|[SubnetIPAddressLimitReachedException](#schemasubnetipaddresslimitreachedexception)|
|489|489|ENILimitReachedException|[ENILimitReachedException](#schemaenilimitreachedexception)|
|490|490|EFSMountConnectivityException|[EFSMountConnectivityException](#schemaefsmountconnectivityexception)|
|491|491|EFSMountFailureException|[EFSMountFailureException](#schemaefsmountfailureexception)|
|492|492|EFSMountTimeoutException|[EFSMountTimeoutException](#schemaefsmounttimeoutexception)|
|493|493|EFSIOException|[EFSIOException](#schemaefsioexception)|
|494|494|SnapStartException|[SnapStartException](#schemasnapstartexception)|
|495|495|SnapStartTimeoutException|[SnapStartTimeoutException](#schemasnapstarttimeoutexception)|
|496|496|SnapStartNotReadyException|[SnapStartNotReadyException](#schemasnapstartnotreadyexception)|
|497|497|EC2ThrottledException|[EC2ThrottledException](#schemaec2throttledexception)|
|498|498|EC2AccessDeniedException|[EC2AccessDeniedException](#schemaec2accessdeniedexception)|
|499|499|InvalidSubnetIDException|[InvalidSubnetIDException](#schemainvalidsubnetidexception)|
|500|Internal Server Error|InvalidSecurityGroupIDException|[InvalidSecurityGroupIDException](#schemainvalidsecuritygroupidexception)|
|501|Not Implemented|InvalidZipFileException|[InvalidZipFileException](#schemainvalidzipfileexception)|
|502|Bad Gateway|KMSDisabledException|[KMSDisabledException](#schemakmsdisabledexception)|
|503|Service Unavailable|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|504|Gateway Timeout|KMSAccessDeniedException|[KMSAccessDeniedException](#schemakmsaccessdeniedexception)|
|505|HTTP Version Not Supported|KMSNotFoundException|[KMSNotFoundException](#schemakmsnotfoundexception)|
|506|Variant Also Negotiates|InvalidRuntimeException|[InvalidRuntimeException](#schemainvalidruntimeexception)|
|507|Insufficient Storage|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|508|Loop Detected|ResourceNotReadyException|[ResourceNotReadyException](#schemaresourcenotreadyexception)|
|509|Bandwidth Limit Exceeded|RecursiveInvocationException|[RecursiveInvocationException](#schemarecursiveinvocationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InvokeAsync

<a id="opIdInvokeAsync"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2014-11-13/functions/string/invoke-async/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InvokeArgs": "string"
  }'
```

`POST /2014-11-13/functions/{FunctionName}/invoke-async/`

<aside class="warning">
This operation is deprecated
</aside>

<important> <p>For asynchronous function invocation, use <a>Invoke</a>.</p> </important> <p>Invokes a function asynchronously.</p>

> Body parameter

```json
{
  "InvokeArgs": "string"
}
```

<h3 id="invokeasync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InvokeArgs|body|string|true|The JSON that you want to provide to your Lambda function as input.|

> Example responses

> 202 Response

```json
{
  "Status": {}
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

<h3 id="invokeasync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[InvokeAsyncResponse](#schemainvokeasyncresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidRequestContentException|[InvalidRequestContentException](#schemainvalidrequestcontentexception)|
|483|483|InvalidRuntimeException|[InvalidRuntimeException](#schemainvalidruntimeexception)|
|484|484|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InvokeWithResponseStream

<a id="opIdInvokeWithResponseStream"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2021-11-15/functions/string/response-streaming-invocations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Payload": "password"
  }'
```

`POST /2021-11-15/functions/{FunctionName}/response-streaming-invocations`

<p>Configure your Lambda functions to stream response payloads back to clients. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html">Configuring a Lambda function to stream responses</a>.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function access to other accounts</a>.</p>

> Body parameter

```json
{
  "Payload": "password"
}
```

<h3 id="invokewithresponsestream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|X-Amz-Invocation-Type|header|string|false|<p>Use one of the following options:</p> <ul> <li> <p> <code>RequestResponse</code> (default) – Invoke the function synchronously. Keep the connection open until the function returns a response or times out. The API operation response includes the function response and additional data.</p> </li> <li> <p> <code>DryRun</code> – Validate parameter values and verify that the IAM user or role has permission to invoke the function.</p> </li> </ul>|
|X-Amz-Log-Type|header|string|false|Set to <code>Tail</code> to include the execution log in the response. Applies to synchronously invoked functions only.|
|X-Amz-Client-Context|header|string|false|Up to 3,583 bytes of base64-encoded data about the invoking client to pass to the function in the context object.|
|Qualifier|query|string|false|The alias name.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Payload|body|string(password)|false|<p>The JSON that you want to provide to your Lambda function as input.</p> <p>You can enter the JSON directly. For example, <code>--payload '{ "key": "value" }'</code>. You can also specify a file path. For example, <code>--payload file://payload.json</code>.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Invocation-Type|RequestResponse|
|X-Amz-Invocation-Type|DryRun|
|X-Amz-Log-Type|None|
|X-Amz-Log-Type|Tail|

> Example responses

> 200 Response

```json
{
  "StatusCode": {},
  "EventStream": {
    "PayloadChunk": {
      "Payload": {}
    },
    "InvokeComplete": {
      "ErrorCode": {},
      "ErrorDetails": {},
      "LogResult": {}
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

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

> 502 Response

```json
null
```

> 503 Response

```json
null
```

> 504 Response

```json
null
```

> 505 Response

```json
null
```

> 506 Response

```json
null
```

> 507 Response

```json
null
```

> 508 Response

```json
null
```

> 509 Response

```json
null
```

<h3 id="invokewithresponsestream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InvokeWithResponseStreamResponse](#schemainvokewithresponsestreamresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidRequestContentException|[InvalidRequestContentException](#schemainvalidrequestcontentexception)|
|483|483|RequestTooLargeException|[RequestTooLargeException](#schemarequesttoolargeexception)|
|484|484|UnsupportedMediaTypeException|[UnsupportedMediaTypeException](#schemaunsupportedmediatypeexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|487|487|EC2UnexpectedException|[EC2UnexpectedException](#schemaec2unexpectedexception)|
|488|488|SubnetIPAddressLimitReachedException|[SubnetIPAddressLimitReachedException](#schemasubnetipaddresslimitreachedexception)|
|489|489|ENILimitReachedException|[ENILimitReachedException](#schemaenilimitreachedexception)|
|490|490|EFSMountConnectivityException|[EFSMountConnectivityException](#schemaefsmountconnectivityexception)|
|491|491|EFSMountFailureException|[EFSMountFailureException](#schemaefsmountfailureexception)|
|492|492|EFSMountTimeoutException|[EFSMountTimeoutException](#schemaefsmounttimeoutexception)|
|493|493|EFSIOException|[EFSIOException](#schemaefsioexception)|
|494|494|SnapStartException|[SnapStartException](#schemasnapstartexception)|
|495|495|SnapStartTimeoutException|[SnapStartTimeoutException](#schemasnapstarttimeoutexception)|
|496|496|SnapStartNotReadyException|[SnapStartNotReadyException](#schemasnapstartnotreadyexception)|
|497|497|EC2ThrottledException|[EC2ThrottledException](#schemaec2throttledexception)|
|498|498|EC2AccessDeniedException|[EC2AccessDeniedException](#schemaec2accessdeniedexception)|
|499|499|InvalidSubnetIDException|[InvalidSubnetIDException](#schemainvalidsubnetidexception)|
|500|Internal Server Error|InvalidSecurityGroupIDException|[InvalidSecurityGroupIDException](#schemainvalidsecuritygroupidexception)|
|501|Not Implemented|InvalidZipFileException|[InvalidZipFileException](#schemainvalidzipfileexception)|
|502|Bad Gateway|KMSDisabledException|[KMSDisabledException](#schemakmsdisabledexception)|
|503|Service Unavailable|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|504|Gateway Timeout|KMSAccessDeniedException|[KMSAccessDeniedException](#schemakmsaccessdeniedexception)|
|505|HTTP Version Not Supported|KMSNotFoundException|[KMSNotFoundException](#schemakmsnotfoundexception)|
|506|Variant Also Negotiates|InvalidRuntimeException|[InvalidRuntimeException](#schemainvalidruntimeexception)|
|507|Insufficient Storage|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|508|Loop Detected|ResourceNotReadyException|[ResourceNotReadyException](#schemaresourcenotreadyexception)|
|509|Bandwidth Limit Exceeded|RecursiveInvocationException|[RecursiveInvocationException](#schemarecursiveinvocationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFunctionEventInvokeConfigs

<a id="opIdListFunctionEventInvokeConfigs"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2019-09-25/functions/string/event-invoke-config/list \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2019-09-25/functions/{FunctionName}/event-invoke-config/list`

<p>Retrieves a list of configurations for asynchronous invocation for a function.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>

<h3 id="listfunctioneventinvokeconfigs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Marker|query|string|false|Specify the pagination token that's returned by a previous request to retrieve the next page of results.|
|MaxItems|query|integer|false|The maximum number of configurations to return.|
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
  "FunctionEventInvokeConfigs": {},
  "NextMarker": {}
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

<h3 id="listfunctioneventinvokeconfigs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFunctionEventInvokeConfigsResponse](#schemalistfunctioneventinvokeconfigsresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFunctionUrlConfigs

<a id="opIdListFunctionUrlConfigs"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2021-10-31/functions/string/urls \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2021-10-31/functions/{FunctionName}/urls`

Returns a list of Lambda function URLs for the specified function.

<h3 id="listfunctionurlconfigs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Marker|query|string|false|Specify the pagination token that's returned by a previous request to retrieve the next page of results.|
|MaxItems|query|integer|false|The maximum number of function URLs to return in the response. Note that <code>ListFunctionUrlConfigs</code> returns a maximum of 50 items in each response, even if you set the number higher.|
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
  "FunctionUrlConfigs": {},
  "NextMarker": {}
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

<h3 id="listfunctionurlconfigs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFunctionUrlConfigsResponse](#schemalistfunctionurlconfigsresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServiceException|[ServiceException](#schemaserviceexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFunctions

<a id="opIdListFunctions"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-03-31/functions/`

<p>Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50 functions per call.</p> <p>Set <code>FunctionVersion</code> to <code>ALL</code> to include all published versions of each function in addition to the unpublished version.</p> <note> <p>The <code>ListFunctions</code> operation returns a subset of the <a>FunctionConfiguration</a> fields. To get the additional fields (State, StateReasonCode, StateReason, LastUpdateStatus, LastUpdateStatusReason, LastUpdateStatusReasonCode, RuntimeVersionConfig) for a function or version, use <a>GetFunction</a>.</p> </note>

<h3 id="listfunctions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MasterRegion|query|string|false|For Lambda@Edge functions, the Amazon Web Services Region of the master function. For example, <code>us-east-1</code> filters the list of functions to include only Lambda@Edge functions replicated from a master function in US East (N. Virginia). If specified, you must set <code>FunctionVersion</code> to <code>ALL</code>.|
|FunctionVersion|query|string|false|Set to <code>ALL</code> to include entries for all published versions of each function.|
|Marker|query|string|false|Specify the pagination token that's returned by a previous request to retrieve the next page of results.|
|MaxItems|query|integer|false|The maximum number of functions to return in the response. Note that <code>ListFunctions</code> returns a maximum of 50 items in each response, even if you set the number higher.|
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
|FunctionVersion|ALL|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
  "Functions": {}
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

<h3 id="listfunctions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFunctionsResponse](#schemalistfunctionsresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFunctionsByCodeSigningConfig

<a id="opIdListFunctionsByCodeSigningConfig"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2020-04-22/code-signing-configs/string/functions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-04-22/code-signing-configs/{CodeSigningConfigArn}/functions`

List the functions that use the specified code signing configuration. You can use this method prior to deleting a code signing configuration, to verify that no functions are using it.

<h3 id="listfunctionsbycodesigningconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CodeSigningConfigArn|path|string|true|The The Amazon Resource Name (ARN) of the code signing configuration.|
|Marker|query|string|false|Specify the pagination token that's returned by a previous request to retrieve the next page of results.|
|MaxItems|query|integer|false|Maximum number of items to return.|
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
  "NextMarker": {},
  "FunctionArns": {}
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

<h3 id="listfunctionsbycodesigningconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFunctionsByCodeSigningConfigResponse](#schemalistfunctionsbycodesigningconfigresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLayerVersions

<a id="opIdListLayerVersions"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2018-10-31/layers/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2018-10-31/layers/{LayerName}/versions`

Lists the versions of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Versions that have been deleted aren't listed. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only versions that indicate that they're compatible with that runtime. Specify a compatible architecture to include only layer versions that are compatible with that architecture.

<h3 id="listlayerversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CompatibleRuntime|query|string|false|<p>A runtime identifier. For example, <code>go1.x</code>.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>|
|LayerName|path|string|true|The name or Amazon Resource Name (ARN) of the layer.|
|Marker|query|string|false|A pagination token returned by a previous call.|
|MaxItems|query|integer|false|The maximum number of versions to return.|
|CompatibleArchitecture|query|string|false|The compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.|
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
|CompatibleRuntime|nodejs|
|CompatibleRuntime|nodejs4.3|
|CompatibleRuntime|nodejs6.10|
|CompatibleRuntime|nodejs8.10|
|CompatibleRuntime|nodejs10.x|
|CompatibleRuntime|nodejs12.x|
|CompatibleRuntime|nodejs14.x|
|CompatibleRuntime|nodejs16.x|
|CompatibleRuntime|java8|
|CompatibleRuntime|java8.al2|
|CompatibleRuntime|java11|
|CompatibleRuntime|python2.7|
|CompatibleRuntime|python3.6|
|CompatibleRuntime|python3.7|
|CompatibleRuntime|python3.8|
|CompatibleRuntime|python3.9|
|CompatibleRuntime|dotnetcore1.0|
|CompatibleRuntime|dotnetcore2.0|
|CompatibleRuntime|dotnetcore2.1|
|CompatibleRuntime|dotnetcore3.1|
|CompatibleRuntime|dotnet6|
|CompatibleRuntime|nodejs4.3-edge|
|CompatibleRuntime|go1.x|
|CompatibleRuntime|ruby2.5|
|CompatibleRuntime|ruby2.7|
|CompatibleRuntime|provided|
|CompatibleRuntime|provided.al2|
|CompatibleRuntime|nodejs18.x|
|CompatibleRuntime|python3.10|
|CompatibleRuntime|java17|
|CompatibleRuntime|ruby3.2|
|CompatibleRuntime|python3.11|
|CompatibleArchitecture|x86_64|
|CompatibleArchitecture|arm64|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
  "LayerVersions": {}
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

<h3 id="listlayerversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLayerVersionsResponse](#schemalistlayerversionsresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PublishLayerVersion

<a id="opIdPublishLayerVersion"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2018-10-31/layers/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "Content": {
      "S3Bucket": {},
      "S3Key": {},
      "S3ObjectVersion": {},
      "ZipFile": {}
    },
    "CompatibleRuntimes": [
      "nodejs"
    ],
    "LicenseInfo": "string",
    "CompatibleArchitectures": [
      "x86_64"
    ]
  }'
```

`POST /2018-10-31/layers/{LayerName}/versions`

<p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a> from a ZIP archive. Each time you call <code>PublishLayerVersion</code> with the same layer name, a new version is created.</p> <p>Add layers to your function with <a>CreateFunction</a> or <a>UpdateFunctionConfiguration</a>.</p>

> Body parameter

```json
{
  "Description": "string",
  "Content": {
    "S3Bucket": {},
    "S3Key": {},
    "S3ObjectVersion": {},
    "ZipFile": {}
  },
  "CompatibleRuntimes": [
    "nodejs"
  ],
  "LicenseInfo": "string",
  "CompatibleArchitectures": [
    "x86_64"
  ]
}
```

<h3 id="publishlayerversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LayerName|path|string|true|The name or Amazon Resource Name (ARN) of the layer.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|The description of the version.|
|» Content|body|object|true|A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly.|
|» » S3Bucket|body|object|false|none|
|» » S3Key|body|object|false|none|
|» » S3ObjectVersion|body|object|false|none|
|» » ZipFile|body|object|false|none|
|» CompatibleRuntimes|body|[[Runtime](#schemaruntime)]|false|<p>A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">function runtimes</a>. Used for filtering with <a>ListLayers</a> and <a>ListLayerVersions</a>.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>|
|» LicenseInfo|body|string|false|<p>The layer's software license. It can be any of the following:</p> <ul> <li> <p>An <a href="https://spdx.org/licenses/">SPDX license identifier</a>. For example, <code>MIT</code>.</p> </li> <li> <p>The URL of a license hosted on the internet. For example, <code>https://opensource.org/licenses/MIT</code>.</p> </li> <li> <p>The full text of the license.</p> </li> </ul>|
|» CompatibleArchitectures|body|[[Architecture](#schemaarchitecture)]|false|A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architectures</a>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» CompatibleRuntimes|nodejs|
|» CompatibleRuntimes|nodejs4.3|
|» CompatibleRuntimes|nodejs6.10|
|» CompatibleRuntimes|nodejs8.10|
|» CompatibleRuntimes|nodejs10.x|
|» CompatibleRuntimes|nodejs12.x|
|» CompatibleRuntimes|nodejs14.x|
|» CompatibleRuntimes|nodejs16.x|
|» CompatibleRuntimes|java8|
|» CompatibleRuntimes|java8.al2|
|» CompatibleRuntimes|java11|
|» CompatibleRuntimes|python2.7|
|» CompatibleRuntimes|python3.6|
|» CompatibleRuntimes|python3.7|
|» CompatibleRuntimes|python3.8|
|» CompatibleRuntimes|python3.9|
|» CompatibleRuntimes|dotnetcore1.0|
|» CompatibleRuntimes|dotnetcore2.0|
|» CompatibleRuntimes|dotnetcore2.1|
|» CompatibleRuntimes|dotnetcore3.1|
|» CompatibleRuntimes|dotnet6|
|» CompatibleRuntimes|nodejs4.3-edge|
|» CompatibleRuntimes|go1.x|
|» CompatibleRuntimes|ruby2.5|
|» CompatibleRuntimes|ruby2.7|
|» CompatibleRuntimes|provided|
|» CompatibleRuntimes|provided.al2|
|» CompatibleRuntimes|nodejs18.x|
|» CompatibleRuntimes|python3.10|
|» CompatibleRuntimes|java17|
|» CompatibleRuntimes|ruby3.2|
|» CompatibleRuntimes|python3.11|
|» CompatibleArchitectures|x86_64|
|» CompatibleArchitectures|arm64|

> Example responses

> 201 Response

```json
{
  "Content": {
    "Location": {},
    "CodeSha256": {},
    "CodeSize": {},
    "SigningProfileVersionArn": {},
    "SigningJobArn": {}
  },
  "LayerArn": {},
  "LayerVersionArn": {},
  "Description": {},
  "CreatedDate": {},
  "Version": {},
  "CompatibleRuntimes": {},
  "LicenseInfo": {},
  "CompatibleArchitectures": {}
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

<h3 id="publishlayerversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[PublishLayerVersionResponse](#schemapublishlayerversionresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|CodeStorageExceededException|[CodeStorageExceededException](#schemacodestorageexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLayers

<a id="opIdListLayers"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2018-10-31/layers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2018-10-31/layers`

Lists <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-layers.html">Lambda layers</a> and shows information about the latest version of each. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only layers that indicate that they're compatible with that runtime. Specify a compatible architecture to include only layers that are compatible with that <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.

<h3 id="listlayers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CompatibleRuntime|query|string|false|<p>A runtime identifier. For example, <code>go1.x</code>.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>|
|Marker|query|string|false|A pagination token returned by a previous call.|
|MaxItems|query|integer|false|The maximum number of layers to return.|
|CompatibleArchitecture|query|string|false|The compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.|
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
|CompatibleRuntime|nodejs|
|CompatibleRuntime|nodejs4.3|
|CompatibleRuntime|nodejs6.10|
|CompatibleRuntime|nodejs8.10|
|CompatibleRuntime|nodejs10.x|
|CompatibleRuntime|nodejs12.x|
|CompatibleRuntime|nodejs14.x|
|CompatibleRuntime|nodejs16.x|
|CompatibleRuntime|java8|
|CompatibleRuntime|java8.al2|
|CompatibleRuntime|java11|
|CompatibleRuntime|python2.7|
|CompatibleRuntime|python3.6|
|CompatibleRuntime|python3.7|
|CompatibleRuntime|python3.8|
|CompatibleRuntime|python3.9|
|CompatibleRuntime|dotnetcore1.0|
|CompatibleRuntime|dotnetcore2.0|
|CompatibleRuntime|dotnetcore2.1|
|CompatibleRuntime|dotnetcore3.1|
|CompatibleRuntime|dotnet6|
|CompatibleRuntime|nodejs4.3-edge|
|CompatibleRuntime|go1.x|
|CompatibleRuntime|ruby2.5|
|CompatibleRuntime|ruby2.7|
|CompatibleRuntime|provided|
|CompatibleRuntime|provided.al2|
|CompatibleRuntime|nodejs18.x|
|CompatibleRuntime|python3.10|
|CompatibleRuntime|java17|
|CompatibleRuntime|ruby3.2|
|CompatibleRuntime|python3.11|
|CompatibleArchitecture|x86_64|
|CompatibleArchitecture|arm64|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
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

> 482 Response

```json
null
```

<h3 id="listlayers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLayersResponse](#schemalistlayersresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProvisionedConcurrencyConfigs

<a id="opIdListProvisionedConcurrencyConfigs"></a>

> Code samples

```bash
curl 'https://lambda.us-east-1.amazonaws.com/2019-09-30/functions/string/provisioned-concurrency#List=ALL?List=ALL' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2019-09-30/functions/{FunctionName}/provisioned-concurrency#List=ALL`

Retrieves a list of provisioned concurrency configurations for a function.

<h3 id="listprovisionedconcurrencyconfigs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Marker|query|string|false|Specify the pagination token that's returned by a previous request to retrieve the next page of results.|
|MaxItems|query|integer|false|Specify a number to limit the number of configurations returned.|
|List|query|string|true|none|
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
|List|ALL|

> Example responses

> 200 Response

```json
{
  "ProvisionedConcurrencyConfigs": {},
  "NextMarker": {}
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

<h3 id="listprovisionedconcurrencyconfigs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProvisionedConcurrencyConfigsResponse](#schemalistprovisionedconcurrencyconfigsresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTags

<a id="opIdListTags"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2017-03-31/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2017-03-31/tags/{ARN}`

Returns a function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>. You can also view tags with <a>GetFunction</a>.

<h3 id="listtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ARN|path|string|true|The function's Amazon Resource Name (ARN). Note: Lambda does not support adding tags to aliases or versions.|
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
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2017-03-31/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /2017-03-31/tags/{ARN}`

Adds <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to a function.

> Body parameter

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ARN|path|string|true|The function's Amazon Resource Name (ARN).|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|object|true|A list of tags to apply to the function.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

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

> 484 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVersionsByFunction

<a id="opIdListVersionsByFunction"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-03-31/functions/{FunctionName}/versions`

Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">versions</a>, with the version-specific configuration of each. Lambda returns up to 50 versions per call.

<h3 id="listversionsbyfunction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|Marker|query|string|false|Specify the pagination token that's returned by a previous request to retrieve the next page of results.|
|MaxItems|query|integer|false|The maximum number of versions to return. Note that <code>ListVersionsByFunction</code> returns a maximum of 50 items in each response, even if you set the number higher.|
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
  "NextMarker": {},
  "Versions": {}
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

<h3 id="listversionsbyfunction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVersionsByFunctionResponse](#schemalistversionsbyfunctionresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PublishVersion

<a id="opIdPublishVersion"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CodeSha256": "string",
    "Description": "string",
    "RevisionId": "string"
  }'
```

`POST /2015-03-31/functions/{FunctionName}/versions`

<p>Creates a <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">version</a> from the current code and configuration of a function. Use versions to create a snapshot of your function code and configuration that doesn't change.</p> <p>Lambda doesn't publish a version if the function's configuration and code haven't changed since the last version. Use <a>UpdateFunctionCode</a> or <a>UpdateFunctionConfiguration</a> to update the function before publishing a version.</p> <p>Clients can invoke versions directly or with an alias. To create an alias, use <a>CreateAlias</a>.</p>

> Body parameter

```json
{
  "CodeSha256": "string",
  "Description": "string",
  "RevisionId": "string"
}
```

<h3 id="publishversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CodeSha256|body|string|false|Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it. You can get the hash for the version that you uploaded from the output of <a>UpdateFunctionCode</a>.|
|» Description|body|string|false|A description for the version to override the description in the function configuration.|
|» RevisionId|body|string|false|Only update the function if the revision ID matches the ID that's specified. Use this option to avoid publishing a version if the function configuration has changed since you last updated it.|

> Example responses

> 201 Response

```json
{
  "FunctionName": {},
  "FunctionArn": {},
  "Runtime": {},
  "Role": {},
  "Handler": {},
  "CodeSize": {},
  "Description": {},
  "Timeout": {},
  "MemorySize": {},
  "LastModified": {},
  "CodeSha256": {},
  "Version": {},
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {},
    "VpcId": {}
  },
  "DeadLetterConfig": {
    "TargetArn": {}
  },
  "Environment": {
    "Variables": {
      "property1": "password",
      "property2": "password"
    },
    "Error": {
      "ErrorCode": {},
      "Message": {}
    }
  },
  "KMSKeyArn": {},
  "TracingConfig": {
    "Mode": {}
  },
  "MasterArn": {},
  "RevisionId": {},
  "Layers": {},
  "State": {},
  "StateReason": {},
  "StateReasonCode": {},
  "LastUpdateStatus": {},
  "LastUpdateStatusReason": {},
  "LastUpdateStatusReasonCode": {},
  "FileSystemConfigs": {},
  "PackageType": {},
  "ImageConfigResponse": {
    "ImageConfig": {
      "EntryPoint": {},
      "Command": {},
      "WorkingDirectory": {}
    },
    "Error": {
      "ErrorCode": {},
      "Message": {}
    }
  },
  "SigningProfileVersionArn": {},
  "SigningJobArn": {},
  "Architectures": {},
  "EphemeralStorage": {
    "Size": {}
  },
  "SnapStart": {
    "ApplyOn": {},
    "OptimizationStatus": {}
  },
  "RuntimeVersionConfig": {
    "RuntimeVersionArn": {},
    "Error": {
      "ErrorCode": {},
      "Message": {}
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

<h3 id="publishversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[FunctionConfiguration](#schemafunctionconfiguration)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|CodeStorageExceededException|[CodeStorageExceededException](#schemacodestorageexceededexception)|
|485|485|PreconditionFailedException|[PreconditionFailedException](#schemapreconditionfailedexception)|
|486|486|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveLayerVersionPermission

<a id="opIdRemoveLayerVersionPermission"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2018-10-31/layers/string/versions/0/policy/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}`

Removes a statement from the permissions policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.

<h3 id="removelayerversionpermission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LayerName|path|string|true|The name or Amazon Resource Name (ARN) of the layer.|
|VersionNumber|path|integer|true|The version number.|
|StatementId|path|string|true|The identifier that was specified when the statement was added.|
|RevisionId|query|string|false|Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.|
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

> 484 Response

```json
null
```

<h3 id="removelayerversionpermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|PreconditionFailedException|[PreconditionFailedException](#schemapreconditionfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemovePermission

<a id="opIdRemovePermission"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/string/policy/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2015-03-31/functions/{FunctionName}/policy/{StatementId}`

Revokes function-use permission from an Amazon Web Service or another Amazon Web Services account. You can get the ID of the statement from the output of <a>GetPolicy</a>.

<h3 id="removepermission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|StatementId|path|string|true|Statement ID of the permission to remove.|
|Qualifier|query|string|false|Specify a version or alias to remove permissions from a published version of the function.|
|RevisionId|query|string|false|Update the policy only if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it.|
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

> 484 Response

```json
null
```

<h3 id="removepermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|PreconditionFailedException|[PreconditionFailedException](#schemapreconditionfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://lambda.us-east-1.amazonaws.com/2017-03-31/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2017-03-31/tags/{ARN}#tagKeys`

Removes <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> from a function.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ARN|path|string|true|The function's Amazon Resource Name (ARN).|
|tagKeys|query|[[TagKey](#schematagkey)]|true|A list of tag keys to remove from the function.|
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

> 484 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFunctionCode

<a id="opIdUpdateFunctionCode"></a>

> Code samples

```bash
curl https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/string/code \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ZipFile": "password",
    "S3Bucket": "string",
    "S3Key": "string",
    "S3ObjectVersion": "string",
    "ImageUri": "string",
    "Publish": true,
    "DryRun": true,
    "RevisionId": "string",
    "Architectures": [
      "x86_64"
    ]
  }'
```

`PUT /2015-03-31/functions/{FunctionName}/code`

<p>Updates a Lambda function's code. If code signing is enabled for the function, the code package must be signed by a trusted publisher. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Configuring code signing for Lambda</a>.</p> <p>If the function's package type is <code>Image</code>, then you must specify the code package in <code>ImageUri</code> as the URI of a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a> in the Amazon ECR registry.</p> <p>If the function's package type is <code>Zip</code>, then you must specify the deployment package as a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>. Enter the Amazon S3 bucket and key of the code .zip file location. You can also provide the function code inline using the <code>ZipFile</code> field.</p> <p>The code in the deployment package must be compatible with the target instruction set architecture of the function (<code>x86-64</code> or <code>arm64</code>).</p> <p>The function's code is locked when you publish a version. You can't modify the code of a published version, only the unpublished version.</p> <note> <p>For a function defined as a container image, Lambda resolves the image tag to an image digest. In Amazon ECR, if you update the image tag to a new image, Lambda does not automatically update the function.</p> </note>

> Body parameter

```json
{
  "ZipFile": "password",
  "S3Bucket": "string",
  "S3Key": "string",
  "S3ObjectVersion": "string",
  "ImageUri": "string",
  "Publish": true,
  "DryRun": true,
  "RevisionId": "string",
  "Architectures": [
    "x86_64"
  ]
}
```

<h3 id="updatefunctioncode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionName|path|string|true|<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ZipFile|body|string(password)|false|The base64-encoded contents of the deployment package. Amazon Web Services SDK and CLI clients handle the encoding for you. Use only with a function defined with a .zip file archive deployment package.|
|» S3Bucket|body|string|false|An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account. Use only with a function defined with a .zip file archive deployment package.|
|» S3Key|body|string|false|The Amazon S3 key of the deployment package. Use only with a function defined with a .zip file archive deployment package.|
|» S3ObjectVersion|body|string|false|For versioned objects, the version of the deployment package object to use.|
|» ImageUri|body|string|false|URI of a container image in the Amazon ECR registry. Do not use for a function defined with a .zip file archive.|
|» Publish|body|boolean|false|Set to true to publish a new version of the function after updating the code. This has the same effect as calling <a>PublishVersion</a> separately.|
|» DryRun|body|boolean|false|Set to true to validate the request parameters and access permissions without modifying the function code.|
|» RevisionId|body|string|false|Update the function only if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it.|
|» Architectures|body|[[Architecture](#schemaarchitecture)]|false|The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is <code>x86_64</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Architectures|x86_64|
|» Architectures|arm64|

> Example responses

> 200 Response

```json
{
  "FunctionName": {},
  "FunctionArn": {},
  "Runtime": {},
  "Role": {},
  "Handler": {},
  "CodeSize": {},
  "Description": {},
  "Timeout": {},
  "MemorySize": {},
  "LastModified": {},
  "CodeSha256": {},
  "Version": {},
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {},
    "VpcId": {}
  },
  "DeadLetterConfig": {
    "TargetArn": {}
  },
  "Environment": {
    "Variables": {
      "property1": "password",
      "property2": "password"
    },
    "Error": {
      "ErrorCode": {},
      "Message": {}
    }
  },
  "KMSKeyArn": {},
  "TracingConfig": {
    "Mode": {}
  },
  "MasterArn": {},
  "RevisionId": {},
  "Layers": {},
  "State": {},
  "StateReason": {},
  "StateReasonCode": {},
  "LastUpdateStatus": {},
  "LastUpdateStatusReason": {},
  "LastUpdateStatusReasonCode": {},
  "FileSystemConfigs": {},
  "PackageType": {},
  "ImageConfigResponse": {
    "ImageConfig": {
      "EntryPoint": {},
      "Command": {},
      "WorkingDirectory": {}
    },
    "Error": {
      "ErrorCode": {},
      "Message": {}
    }
  },
  "SigningProfileVersionArn": {},
  "SigningJobArn": {},
  "Architectures": {},
  "EphemeralStorage": {
    "Size": {}
  },
  "SnapStart": {
    "ApplyOn": {},
    "OptimizationStatus": {}
  },
  "RuntimeVersionConfig": {
    "RuntimeVersionArn": {},
    "Error": {
      "ErrorCode": {},
      "Message": {}
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

<h3 id="updatefunctioncode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FunctionConfiguration](#schemafunctionconfiguration)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|CodeStorageExceededException|[CodeStorageExceededException](#schemacodestorageexceededexception)|
|485|485|PreconditionFailedException|[PreconditionFailedException](#schemapreconditionfailedexception)|
|486|486|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|487|487|CodeVerificationFailedException|[CodeVerificationFailedException](#schemacodeverificationfailedexception)|
|488|488|InvalidCodeSignatureException|[InvalidCodeSignatureException](#schemainvalidcodesignatureexception)|
|489|489|CodeSigningConfigNotFoundException|[CodeSigningConfigNotFoundException](#schemacodesigningconfignotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddLayerVersionPermissionResponse">AddLayerVersionPermissionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddlayerversionpermissionresponse"></a>
<a id="schema_AddLayerVersionPermissionResponse"></a>
<a id="tocSaddlayerversionpermissionresponse"></a>
<a id="tocsaddlayerversionpermissionresponse"></a>

```json
{
  "Statement": {},
  "RevisionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Statement|object|false|none|none|
|RevisionId|object|false|none|none|

<h2 id="tocS_ServiceException">ServiceException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceexception"></a>
<a id="schema_ServiceException"></a>
<a id="tocSserviceexception"></a>
<a id="tocsserviceexception"></a>

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

<h2 id="tocS_ResourceConflictException">ResourceConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceconflictexception"></a>
<a id="schema_ResourceConflictException"></a>
<a id="tocSresourceconflictexception"></a>
<a id="tocsresourceconflictexception"></a>

```json
null
```

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

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

<h2 id="tocS_PolicyLengthExceededException">PolicyLengthExceededException</h2>
<!-- backwards compatibility -->
<a id="schemapolicylengthexceededexception"></a>
<a id="schema_PolicyLengthExceededException"></a>
<a id="tocSpolicylengthexceededexception"></a>
<a id="tocspolicylengthexceededexception"></a>

```json
null
```

<h2 id="tocS_PreconditionFailedException">PreconditionFailedException</h2>
<!-- backwards compatibility -->
<a id="schemapreconditionfailedexception"></a>
<a id="schema_PreconditionFailedException"></a>
<a id="tocSpreconditionfailedexception"></a>
<a id="tocspreconditionfailedexception"></a>

```json
null
```

<h2 id="tocS_AddPermissionResponse">AddPermissionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddpermissionresponse"></a>
<a id="schema_AddPermissionResponse"></a>
<a id="tocSaddpermissionresponse"></a>
<a id="tocsaddpermissionresponse"></a>

```json
{
  "Statement": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Statement|object|false|none|none|

<h2 id="tocS_AliasConfiguration">AliasConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaaliasconfiguration"></a>
<a id="schema_AliasConfiguration"></a>
<a id="tocSaliasconfiguration"></a>
<a id="tocsaliasconfiguration"></a>

```json
{
  "AliasArn": {},
  "Name": {},
  "FunctionVersion": {},
  "Description": {},
  "RoutingConfig": {
    "AdditionalVersionWeights": {
      "property1": 0,
      "property2": 0
    }
  },
  "RevisionId": {}
}
```

Provides configuration information about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AliasArn|object|false|none|none|
|Name|object|false|none|none|
|FunctionVersion|object|false|none|none|
|Description|object|false|none|none|
|RoutingConfig|object|false|none|none|
|RevisionId|object|false|none|none|

<h2 id="tocS_AdditionalVersionWeights">AdditionalVersionWeights</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalversionweights"></a>
<a id="schema_AdditionalVersionWeights"></a>
<a id="tocSadditionalversionweights"></a>
<a id="tocsadditionalversionweights"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Weight](#schemaweight)|false|none|none|

<h2 id="tocS_CreateCodeSigningConfigResponse">CreateCodeSigningConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecodesigningconfigresponse"></a>
<a id="schema_CreateCodeSigningConfigResponse"></a>
<a id="tocScreatecodesigningconfigresponse"></a>
<a id="tocscreatecodesigningconfigresponse"></a>

```json
{
  "CodeSigningConfig": {
    "CodeSigningConfigId": {},
    "CodeSigningConfigArn": {},
    "Description": {},
    "AllowedPublishers": {
      "SigningProfileVersionArns": {}
    },
    "CodeSigningPolicies": {
      "UntrustedArtifactOnDeployment": {}
    },
    "LastModified": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeSigningConfig|object|true|none|none|

<h2 id="tocS_SigningProfileVersionArns">SigningProfileVersionArns</h2>
<!-- backwards compatibility -->
<a id="schemasigningprofileversionarns"></a>
<a id="schema_SigningProfileVersionArns"></a>
<a id="tocSsigningprofileversionarns"></a>
<a id="tocssigningprofileversionarns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CodeSigningPolicy">CodeSigningPolicy</h2>
<!-- backwards compatibility -->
<a id="schemacodesigningpolicy"></a>
<a id="schema_CodeSigningPolicy"></a>
<a id="tocScodesigningpolicy"></a>
<a id="tocscodesigningpolicy"></a>

```json
"Warn"
```

<h2 id="tocS_EventSourceMappingConfiguration">EventSourceMappingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaeventsourcemappingconfiguration"></a>
<a id="schema_EventSourceMappingConfiguration"></a>
<a id="tocSeventsourcemappingconfiguration"></a>
<a id="tocseventsourcemappingconfiguration"></a>

```json
{
  "UUID": {},
  "StartingPosition": {},
  "StartingPositionTimestamp": {},
  "BatchSize": {},
  "MaximumBatchingWindowInSeconds": {},
  "ParallelizationFactor": {},
  "EventSourceArn": {},
  "FilterCriteria": {
    "Filters": {}
  },
  "FunctionArn": {},
  "LastModified": {},
  "LastProcessingResult": {},
  "State": {},
  "StateTransitionReason": {},
  "DestinationConfig": {
    "OnSuccess": {
      "Destination": {}
    },
    "OnFailure": {
      "Destination": {}
    }
  },
  "Topics": {},
  "Queues": {},
  "SourceAccessConfigurations": {},
  "SelfManagedEventSource": {
    "Endpoints": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "MaximumRecordAgeInSeconds": {},
  "BisectBatchOnFunctionError": {},
  "MaximumRetryAttempts": {},
  "TumblingWindowInSeconds": {},
  "FunctionResponseTypes": {},
  "AmazonManagedKafkaEventSourceConfig": {
    "ConsumerGroupId": {}
  },
  "SelfManagedKafkaEventSourceConfig": {
    "ConsumerGroupId": {}
  },
  "ScalingConfig": {
    "MaximumConcurrency": {}
  },
  "DocumentDBEventSourceConfig": {
    "DatabaseName": {},
    "CollectionName": {},
    "FullDocument": {}
  }
}
```

A mapping between an Amazon Web Services resource and a Lambda function. For details, see <a>CreateEventSourceMapping</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UUID|object|false|none|none|
|StartingPosition|object|false|none|none|
|StartingPositionTimestamp|object|false|none|none|
|BatchSize|object|false|none|none|
|MaximumBatchingWindowInSeconds|object|false|none|none|
|ParallelizationFactor|object|false|none|none|
|EventSourceArn|object|false|none|none|
|FilterCriteria|object|false|none|none|
|FunctionArn|object|false|none|none|
|LastModified|object|false|none|none|
|LastProcessingResult|object|false|none|none|
|State|object|false|none|none|
|StateTransitionReason|object|false|none|none|
|DestinationConfig|object|false|none|none|
|Topics|object|false|none|none|
|Queues|object|false|none|none|
|SourceAccessConfigurations|object|false|none|none|
|SelfManagedEventSource|object|false|none|none|
|MaximumRecordAgeInSeconds|object|false|none|none|
|BisectBatchOnFunctionError|object|false|none|none|
|MaximumRetryAttempts|object|false|none|none|
|TumblingWindowInSeconds|object|false|none|none|
|FunctionResponseTypes|object|false|none|none|
|AmazonManagedKafkaEventSourceConfig|object|false|none|none|
|SelfManagedKafkaEventSourceConfig|object|false|none|none|
|ScalingConfig|object|false|none|none|
|DocumentDBEventSourceConfig|object|false|none|none|

<h2 id="tocS_FilterList">FilterList</h2>
<!-- backwards compatibility -->
<a id="schemafilterlist"></a>
<a id="schema_FilterList"></a>
<a id="tocSfilterlist"></a>
<a id="tocsfilterlist"></a>

```json
[
  {
    "Pattern": {}
  }
]
```

<h2 id="tocS_OnSuccess">OnSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaonsuccess"></a>
<a id="schema_OnSuccess"></a>
<a id="tocSonsuccess"></a>
<a id="tocsonsuccess"></a>

```json
{
  "Destination": {}
}
```

A destination for events that were processed successfully.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Destination|object|false|none|none|

<h2 id="tocS_OnFailure">OnFailure</h2>
<!-- backwards compatibility -->
<a id="schemaonfailure"></a>
<a id="schema_OnFailure"></a>
<a id="tocSonfailure"></a>
<a id="tocsonfailure"></a>

```json
{
  "Destination": {}
}
```

A destination for events that failed processing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Destination|object|false|none|none|

<h2 id="tocS_Topic">Topic</h2>
<!-- backwards compatibility -->
<a id="schematopic"></a>
<a id="schema_Topic"></a>
<a id="tocStopic"></a>
<a id="tocstopic"></a>

```json
"string"
```

<h2 id="tocS_Queue">Queue</h2>
<!-- backwards compatibility -->
<a id="schemaqueue"></a>
<a id="schema_Queue"></a>
<a id="tocSqueue"></a>
<a id="tocsqueue"></a>

```json
"string"
```

<h2 id="tocS_SourceAccessConfiguration">SourceAccessConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasourceaccessconfiguration"></a>
<a id="schema_SourceAccessConfiguration"></a>
<a id="tocSsourceaccessconfiguration"></a>
<a id="tocssourceaccessconfiguration"></a>

```json
{
  "Type": {},
  "URI": {}
}
```

To secure and define access to your event source, you can specify the authentication protocol, VPC components, or virtual host.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|URI|object|false|none|none|

<h2 id="tocS_Endpoints">Endpoints</h2>
<!-- backwards compatibility -->
<a id="schemaendpoints"></a>
<a id="schema_Endpoints"></a>
<a id="tocSendpoints"></a>
<a id="tocsendpoints"></a>

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
|**additionalProperties**|[EndpointLists](#schemaendpointlists)|false|none|none|

<h2 id="tocS_FunctionResponseType">FunctionResponseType</h2>
<!-- backwards compatibility -->
<a id="schemafunctionresponsetype"></a>
<a id="schema_FunctionResponseType"></a>
<a id="tocSfunctionresponsetype"></a>
<a id="tocsfunctionresponsetype"></a>

```json
"ReportBatchItemFailures"
```

<h2 id="tocS_URI">URI</h2>
<!-- backwards compatibility -->
<a id="schemauri"></a>
<a id="schema_URI"></a>
<a id="tocSuri"></a>
<a id="tocsuri"></a>

```json
"string"
```

<h2 id="tocS_MaximumConcurrency">MaximumConcurrency</h2>
<!-- backwards compatibility -->
<a id="schemamaximumconcurrency"></a>
<a id="schema_MaximumConcurrency"></a>
<a id="tocSmaximumconcurrency"></a>
<a id="tocsmaximumconcurrency"></a>

```json
2
```

<h2 id="tocS_DatabaseName">DatabaseName</h2>
<!-- backwards compatibility -->
<a id="schemadatabasename"></a>
<a id="schema_DatabaseName"></a>
<a id="tocSdatabasename"></a>
<a id="tocsdatabasename"></a>

```json
"string"
```

<h2 id="tocS_CollectionName">CollectionName</h2>
<!-- backwards compatibility -->
<a id="schemacollectionname"></a>
<a id="schema_CollectionName"></a>
<a id="tocScollectionname"></a>
<a id="tocscollectionname"></a>

```json
"string"
```

<h2 id="tocS_FullDocument">FullDocument</h2>
<!-- backwards compatibility -->
<a id="schemafulldocument"></a>
<a id="schema_FullDocument"></a>
<a id="tocSfulldocument"></a>
<a id="tocsfulldocument"></a>

```json
"UpdateLookup"
```

<h2 id="tocS_FunctionConfiguration">FunctionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemafunctionconfiguration"></a>
<a id="schema_FunctionConfiguration"></a>
<a id="tocSfunctionconfiguration"></a>
<a id="tocsfunctionconfiguration"></a>

```json
{
  "FunctionName": {},
  "FunctionArn": {},
  "Runtime": {},
  "Role": {},
  "Handler": {},
  "CodeSize": {},
  "Description": {},
  "Timeout": {},
  "MemorySize": {},
  "LastModified": {},
  "CodeSha256": {},
  "Version": {},
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {},
    "VpcId": {}
  },
  "DeadLetterConfig": {
    "TargetArn": {}
  },
  "Environment": {
    "Variables": {
      "property1": "password",
      "property2": "password"
    },
    "Error": {
      "ErrorCode": {},
      "Message": {}
    }
  },
  "KMSKeyArn": {},
  "TracingConfig": {
    "Mode": {}
  },
  "MasterArn": {},
  "RevisionId": {},
  "Layers": {},
  "State": {},
  "StateReason": {},
  "StateReasonCode": {},
  "LastUpdateStatus": {},
  "LastUpdateStatusReason": {},
  "LastUpdateStatusReasonCode": {},
  "FileSystemConfigs": {},
  "PackageType": {},
  "ImageConfigResponse": {
    "ImageConfig": {
      "EntryPoint": {},
      "Command": {},
      "WorkingDirectory": {}
    },
    "Error": {
      "ErrorCode": {},
      "Message": {}
    }
  },
  "SigningProfileVersionArn": {},
  "SigningJobArn": {},
  "Architectures": {},
  "EphemeralStorage": {
    "Size": {}
  },
  "SnapStart": {
    "ApplyOn": {},
    "OptimizationStatus": {}
  },
  "RuntimeVersionConfig": {
    "RuntimeVersionArn": {},
    "Error": {
      "ErrorCode": {},
      "Message": {}
    }
  }
}
```

Details about a function's configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionName|object|false|none|none|
|FunctionArn|object|false|none|none|
|Runtime|object|false|none|none|
|Role|object|false|none|none|
|Handler|object|false|none|none|
|CodeSize|object|false|none|none|
|Description|object|false|none|none|
|Timeout|object|false|none|none|
|MemorySize|object|false|none|none|
|LastModified|object|false|none|none|
|CodeSha256|object|false|none|none|
|Version|object|false|none|none|
|VpcConfig|object|false|none|none|
|DeadLetterConfig|object|false|none|none|
|Environment|object|false|none|none|
|KMSKeyArn|object|false|none|none|
|TracingConfig|object|false|none|none|
|MasterArn|object|false|none|none|
|RevisionId|object|false|none|none|
|Layers|object|false|none|none|
|State|object|false|none|none|
|StateReason|object|false|none|none|
|StateReasonCode|object|false|none|none|
|LastUpdateStatus|object|false|none|none|
|LastUpdateStatusReason|object|false|none|none|
|LastUpdateStatusReasonCode|object|false|none|none|
|FileSystemConfigs|object|false|none|none|
|PackageType|object|false|none|none|
|ImageConfigResponse|object|false|none|none|
|SigningProfileVersionArn|object|false|none|none|
|SigningJobArn|object|false|none|none|
|Architectures|object|false|none|none|
|EphemeralStorage|object|false|none|none|
|SnapStart|object|false|none|none|
|RuntimeVersionConfig|object|false|none|none|

<h2 id="tocS_Blob">Blob</h2>
<!-- backwards compatibility -->
<a id="schemablob"></a>
<a id="schema_Blob"></a>
<a id="tocSblob"></a>
<a id="tocsblob"></a>

```json
"password"
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

<h2 id="tocS_S3ObjectVersion">S3ObjectVersion</h2>
<!-- backwards compatibility -->
<a id="schemas3objectversion"></a>
<a id="schema_S3ObjectVersion"></a>
<a id="tocSs3objectversion"></a>
<a id="tocss3objectversion"></a>

```json
"string"
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

<h2 id="tocS_SubnetIds">SubnetIds</h2>
<!-- backwards compatibility -->
<a id="schemasubnetids"></a>
<a id="schema_SubnetIds"></a>
<a id="tocSsubnetids"></a>
<a id="tocssubnetids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SecurityGroupIds">SecurityGroupIds</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupids"></a>
<a id="schema_SecurityGroupIds"></a>
<a id="tocSsecuritygroupids"></a>
<a id="tocssecuritygroupids"></a>

```json
[
  "string"
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

<h2 id="tocS_EnvironmentVariables">EnvironmentVariables</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentvariables"></a>
<a id="schema_EnvironmentVariables"></a>
<a id="tocSenvironmentvariables"></a>
<a id="tocsenvironmentvariables"></a>

```json
{
  "property1": "password",
  "property2": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[EnvironmentVariableValue](#schemaenvironmentvariablevalue)|false|none|none|

<h2 id="tocS_TracingMode">TracingMode</h2>
<!-- backwards compatibility -->
<a id="schematracingmode"></a>
<a id="schema_TracingMode"></a>
<a id="tocStracingmode"></a>
<a id="tocstracingmode"></a>

```json
"Active"
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

<h2 id="tocS_LayerVersionArn">LayerVersionArn</h2>
<!-- backwards compatibility -->
<a id="schemalayerversionarn"></a>
<a id="schema_LayerVersionArn"></a>
<a id="tocSlayerversionarn"></a>
<a id="tocslayerversionarn"></a>

```json
"string"
```

<h2 id="tocS_FileSystemConfig">FileSystemConfig</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemconfig"></a>
<a id="schema_FileSystemConfig"></a>
<a id="tocSfilesystemconfig"></a>
<a id="tocsfilesystemconfig"></a>

```json
{
  "Arn": {},
  "LocalMountPath": {}
}
```

Details about the connection between a Lambda function and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html">Amazon EFS file system</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|LocalMountPath|object|true|none|none|

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

<h2 id="tocS_WorkingDirectory">WorkingDirectory</h2>
<!-- backwards compatibility -->
<a id="schemaworkingdirectory"></a>
<a id="schema_WorkingDirectory"></a>
<a id="tocSworkingdirectory"></a>
<a id="tocsworkingdirectory"></a>

```json
"string"
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

<h2 id="tocS_EphemeralStorageSize">EphemeralStorageSize</h2>
<!-- backwards compatibility -->
<a id="schemaephemeralstoragesize"></a>
<a id="schema_EphemeralStorageSize"></a>
<a id="tocSephemeralstoragesize"></a>
<a id="tocsephemeralstoragesize"></a>

```json
512
```

<h2 id="tocS_SnapStartApplyOn">SnapStartApplyOn</h2>
<!-- backwards compatibility -->
<a id="schemasnapstartapplyon"></a>
<a id="schema_SnapStartApplyOn"></a>
<a id="tocSsnapstartapplyon"></a>
<a id="tocssnapstartapplyon"></a>

```json
"PublishedVersions"
```

<h2 id="tocS_CodeStorageExceededException">CodeStorageExceededException</h2>
<!-- backwards compatibility -->
<a id="schemacodestorageexceededexception"></a>
<a id="schema_CodeStorageExceededException"></a>
<a id="tocScodestorageexceededexception"></a>
<a id="tocscodestorageexceededexception"></a>

```json
null
```

<h2 id="tocS_CodeVerificationFailedException">CodeVerificationFailedException</h2>
<!-- backwards compatibility -->
<a id="schemacodeverificationfailedexception"></a>
<a id="schema_CodeVerificationFailedException"></a>
<a id="tocScodeverificationfailedexception"></a>
<a id="tocscodeverificationfailedexception"></a>

```json
null
```

<h2 id="tocS_InvalidCodeSignatureException">InvalidCodeSignatureException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcodesignatureexception"></a>
<a id="schema_InvalidCodeSignatureException"></a>
<a id="tocSinvalidcodesignatureexception"></a>
<a id="tocsinvalidcodesignatureexception"></a>

```json
null
```

<h2 id="tocS_CodeSigningConfigNotFoundException">CodeSigningConfigNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemacodesigningconfignotfoundexception"></a>
<a id="schema_CodeSigningConfigNotFoundException"></a>
<a id="tocScodesigningconfignotfoundexception"></a>
<a id="tocscodesigningconfignotfoundexception"></a>

```json
null
```

<h2 id="tocS_CreateFunctionUrlConfigResponse">CreateFunctionUrlConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefunctionurlconfigresponse"></a>
<a id="schema_CreateFunctionUrlConfigResponse"></a>
<a id="tocScreatefunctionurlconfigresponse"></a>
<a id="tocscreatefunctionurlconfigresponse"></a>

```json
{
  "FunctionUrl": {},
  "FunctionArn": {},
  "AuthType": {},
  "Cors": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "CreationTime": {},
  "InvokeMode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionUrl|object|true|none|none|
|FunctionArn|object|true|none|none|
|AuthType|object|true|none|none|
|Cors|object|false|none|none|
|CreationTime|object|true|none|none|
|InvokeMode|object|false|none|none|

<h2 id="tocS_AllowCredentials">AllowCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaallowcredentials"></a>
<a id="schema_AllowCredentials"></a>
<a id="tocSallowcredentials"></a>
<a id="tocsallowcredentials"></a>

```json
true
```

<h2 id="tocS_HeadersList">HeadersList</h2>
<!-- backwards compatibility -->
<a id="schemaheaderslist"></a>
<a id="schema_HeadersList"></a>
<a id="tocSheaderslist"></a>
<a id="tocsheaderslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AllowMethodsList">AllowMethodsList</h2>
<!-- backwards compatibility -->
<a id="schemaallowmethodslist"></a>
<a id="schema_AllowMethodsList"></a>
<a id="tocSallowmethodslist"></a>
<a id="tocsallowmethodslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AllowOriginsList">AllowOriginsList</h2>
<!-- backwards compatibility -->
<a id="schemaalloworiginslist"></a>
<a id="schema_AllowOriginsList"></a>
<a id="tocSalloworiginslist"></a>
<a id="tocsalloworiginslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MaxAge">MaxAge</h2>
<!-- backwards compatibility -->
<a id="schemamaxage"></a>
<a id="schema_MaxAge"></a>
<a id="tocSmaxage"></a>
<a id="tocsmaxage"></a>

```json
0
```

<h2 id="tocS_DeleteCodeSigningConfigResponse">DeleteCodeSigningConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecodesigningconfigresponse"></a>
<a id="schema_DeleteCodeSigningConfigResponse"></a>
<a id="tocSdeletecodesigningconfigresponse"></a>
<a id="tocsdeletecodesigningconfigresponse"></a>

```json
{}
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

<h2 id="tocS_GetAccountSettingsResponse">GetAccountSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountsettingsresponse"></a>
<a id="schema_GetAccountSettingsResponse"></a>
<a id="tocSgetaccountsettingsresponse"></a>
<a id="tocsgetaccountsettingsresponse"></a>

```json
{
  "AccountLimit": {
    "TotalCodeSize": {},
    "CodeSizeUnzipped": {},
    "CodeSizeZipped": {},
    "ConcurrentExecutions": {},
    "UnreservedConcurrentExecutions": {}
  },
  "AccountUsage": {
    "TotalCodeSize": {},
    "FunctionCount": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountLimit|object|false|none|none|
|AccountUsage|object|false|none|none|

<h2 id="tocS_GetCodeSigningConfigResponse">GetCodeSigningConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcodesigningconfigresponse"></a>
<a id="schema_GetCodeSigningConfigResponse"></a>
<a id="tocSgetcodesigningconfigresponse"></a>
<a id="tocsgetcodesigningconfigresponse"></a>

```json
{
  "CodeSigningConfig": {
    "CodeSigningConfigId": {},
    "CodeSigningConfigArn": {},
    "Description": {},
    "AllowedPublishers": {
      "SigningProfileVersionArns": {}
    },
    "CodeSigningPolicies": {
      "UntrustedArtifactOnDeployment": {}
    },
    "LastModified": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeSigningConfig|object|true|none|none|

<h2 id="tocS_GetFunctionResponse">GetFunctionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfunctionresponse"></a>
<a id="schema_GetFunctionResponse"></a>
<a id="tocSgetfunctionresponse"></a>
<a id="tocsgetfunctionresponse"></a>

```json
{
  "Configuration": {
    "FunctionName": {},
    "FunctionArn": {},
    "Runtime": {},
    "Role": {},
    "Handler": {},
    "CodeSize": {},
    "Description": {},
    "Timeout": {},
    "MemorySize": {},
    "LastModified": {},
    "CodeSha256": {},
    "Version": {},
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {},
      "VpcId": {}
    },
    "DeadLetterConfig": {
      "TargetArn": {}
    },
    "Environment": {
      "Variables": {
        "property1": "password",
        "property2": "password"
      },
      "Error": {
        "ErrorCode": {},
        "Message": {}
      }
    },
    "KMSKeyArn": {},
    "TracingConfig": {
      "Mode": {}
    },
    "MasterArn": {},
    "RevisionId": {},
    "Layers": {},
    "State": {},
    "StateReason": {},
    "StateReasonCode": {},
    "LastUpdateStatus": {},
    "LastUpdateStatusReason": {},
    "LastUpdateStatusReasonCode": {},
    "FileSystemConfigs": {},
    "PackageType": {},
    "ImageConfigResponse": {
      "ImageConfig": {
        "EntryPoint": {},
        "Command": {},
        "WorkingDirectory": {}
      },
      "Error": {
        "ErrorCode": {},
        "Message": {}
      }
    },
    "SigningProfileVersionArn": {},
    "SigningJobArn": {},
    "Architectures": {},
    "EphemeralStorage": {
      "Size": {}
    },
    "SnapStart": {
      "ApplyOn": {},
      "OptimizationStatus": {}
    },
    "RuntimeVersionConfig": {
      "RuntimeVersionArn": {},
      "Error": {
        "ErrorCode": {},
        "Message": {}
      }
    }
  },
  "Code": {
    "RepositoryType": {},
    "Location": {},
    "ImageUri": {},
    "ResolvedImageUri": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Concurrency": {
    "ReservedConcurrentExecutions": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Configuration|object|false|none|none|
|Code|object|false|none|none|
|Tags|object|false|none|none|
|Concurrency|object|false|none|none|

<h2 id="tocS_GetFunctionCodeSigningConfigResponse">GetFunctionCodeSigningConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfunctioncodesigningconfigresponse"></a>
<a id="schema_GetFunctionCodeSigningConfigResponse"></a>
<a id="tocSgetfunctioncodesigningconfigresponse"></a>
<a id="tocsgetfunctioncodesigningconfigresponse"></a>

```json
{
  "CodeSigningConfigArn": {},
  "FunctionName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeSigningConfigArn|object|true|none|none|
|FunctionName|object|true|none|none|

<h2 id="tocS_GetFunctionConcurrencyResponse">GetFunctionConcurrencyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfunctionconcurrencyresponse"></a>
<a id="schema_GetFunctionConcurrencyResponse"></a>
<a id="tocSgetfunctionconcurrencyresponse"></a>
<a id="tocsgetfunctionconcurrencyresponse"></a>

```json
{
  "ReservedConcurrentExecutions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReservedConcurrentExecutions|object|false|none|none|

<h2 id="tocS_FunctionEventInvokeConfig">FunctionEventInvokeConfig</h2>
<!-- backwards compatibility -->
<a id="schemafunctioneventinvokeconfig"></a>
<a id="schema_FunctionEventInvokeConfig"></a>
<a id="tocSfunctioneventinvokeconfig"></a>
<a id="tocsfunctioneventinvokeconfig"></a>

```json
{
  "LastModified": {},
  "FunctionArn": {},
  "MaximumRetryAttempts": {},
  "MaximumEventAgeInSeconds": {},
  "DestinationConfig": {
    "OnSuccess": {
      "Destination": {}
    },
    "OnFailure": {
      "Destination": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LastModified|object|false|none|none|
|FunctionArn|object|false|none|none|
|MaximumRetryAttempts|object|false|none|none|
|MaximumEventAgeInSeconds|object|false|none|none|
|DestinationConfig|object|false|none|none|

<h2 id="tocS_GetFunctionUrlConfigResponse">GetFunctionUrlConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfunctionurlconfigresponse"></a>
<a id="schema_GetFunctionUrlConfigResponse"></a>
<a id="tocSgetfunctionurlconfigresponse"></a>
<a id="tocsgetfunctionurlconfigresponse"></a>

```json
{
  "FunctionUrl": {},
  "FunctionArn": {},
  "AuthType": {},
  "Cors": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "CreationTime": {},
  "LastModifiedTime": {},
  "InvokeMode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionUrl|object|true|none|none|
|FunctionArn|object|true|none|none|
|AuthType|object|true|none|none|
|Cors|object|false|none|none|
|CreationTime|object|true|none|none|
|LastModifiedTime|object|true|none|none|
|InvokeMode|object|false|none|none|

<h2 id="tocS_GetLayerVersionResponse">GetLayerVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlayerversionresponse"></a>
<a id="schema_GetLayerVersionResponse"></a>
<a id="tocSgetlayerversionresponse"></a>
<a id="tocsgetlayerversionresponse"></a>

```json
{
  "Content": {
    "Location": {},
    "CodeSha256": {},
    "CodeSize": {},
    "SigningProfileVersionArn": {},
    "SigningJobArn": {}
  },
  "LayerArn": {},
  "LayerVersionArn": {},
  "Description": {},
  "CreatedDate": {},
  "Version": {},
  "CompatibleRuntimes": {},
  "LicenseInfo": {},
  "CompatibleArchitectures": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Content|object|false|none|none|
|LayerArn|object|false|none|none|
|LayerVersionArn|object|false|none|none|
|Description|object|false|none|none|
|CreatedDate|object|false|none|none|
|Version|object|false|none|none|
|CompatibleRuntimes|object|false|none|none|
|LicenseInfo|object|false|none|none|
|CompatibleArchitectures|object|false|none|none|

<h2 id="tocS_GetLayerVersionPolicyResponse">GetLayerVersionPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlayerversionpolicyresponse"></a>
<a id="schema_GetLayerVersionPolicyResponse"></a>
<a id="tocSgetlayerversionpolicyresponse"></a>
<a id="tocsgetlayerversionpolicyresponse"></a>

```json
{
  "Policy": {},
  "RevisionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|
|RevisionId|object|false|none|none|

<h2 id="tocS_GetPolicyResponse">GetPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpolicyresponse"></a>
<a id="schema_GetPolicyResponse"></a>
<a id="tocSgetpolicyresponse"></a>
<a id="tocsgetpolicyresponse"></a>

```json
{
  "Policy": {},
  "RevisionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|
|RevisionId|object|false|none|none|

<h2 id="tocS_GetProvisionedConcurrencyConfigResponse">GetProvisionedConcurrencyConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetprovisionedconcurrencyconfigresponse"></a>
<a id="schema_GetProvisionedConcurrencyConfigResponse"></a>
<a id="tocSgetprovisionedconcurrencyconfigresponse"></a>
<a id="tocsgetprovisionedconcurrencyconfigresponse"></a>

```json
{
  "RequestedProvisionedConcurrentExecutions": {},
  "AvailableProvisionedConcurrentExecutions": {},
  "AllocatedProvisionedConcurrentExecutions": {},
  "Status": {},
  "StatusReason": {},
  "LastModified": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestedProvisionedConcurrentExecutions|object|false|none|none|
|AvailableProvisionedConcurrentExecutions|object|false|none|none|
|AllocatedProvisionedConcurrentExecutions|object|false|none|none|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|
|LastModified|object|false|none|none|

<h2 id="tocS_ProvisionedConcurrencyConfigNotFoundException">ProvisionedConcurrencyConfigNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedconcurrencyconfignotfoundexception"></a>
<a id="schema_ProvisionedConcurrencyConfigNotFoundException"></a>
<a id="tocSprovisionedconcurrencyconfignotfoundexception"></a>
<a id="tocsprovisionedconcurrencyconfignotfoundexception"></a>

```json
null
```

<h2 id="tocS_GetRuntimeManagementConfigResponse">GetRuntimeManagementConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetruntimemanagementconfigresponse"></a>
<a id="schema_GetRuntimeManagementConfigResponse"></a>
<a id="tocSgetruntimemanagementconfigresponse"></a>
<a id="tocsgetruntimemanagementconfigresponse"></a>

```json
{
  "UpdateRuntimeOn": {},
  "RuntimeVersionArn": {},
  "FunctionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateRuntimeOn|object|false|none|none|
|RuntimeVersionArn|object|false|none|none|
|FunctionArn|object|false|none|none|

<h2 id="tocS_InvocationResponse">InvocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemainvocationresponse"></a>
<a id="schema_InvocationResponse"></a>
<a id="tocSinvocationresponse"></a>
<a id="tocsinvocationresponse"></a>

```json
{
  "StatusCode": {},
  "Payload": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatusCode|object|false|none|none|
|Payload|object|false|none|none|

<h2 id="tocS_InvalidRequestContentException">InvalidRequestContentException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestcontentexception"></a>
<a id="schema_InvalidRequestContentException"></a>
<a id="tocSinvalidrequestcontentexception"></a>
<a id="tocsinvalidrequestcontentexception"></a>

```json
null
```

<h2 id="tocS_RequestTooLargeException">RequestTooLargeException</h2>
<!-- backwards compatibility -->
<a id="schemarequesttoolargeexception"></a>
<a id="schema_RequestTooLargeException"></a>
<a id="tocSrequesttoolargeexception"></a>
<a id="tocsrequesttoolargeexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedMediaTypeException">UnsupportedMediaTypeException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedmediatypeexception"></a>
<a id="schema_UnsupportedMediaTypeException"></a>
<a id="tocSunsupportedmediatypeexception"></a>
<a id="tocsunsupportedmediatypeexception"></a>

```json
null
```

<h2 id="tocS_EC2UnexpectedException">EC2UnexpectedException</h2>
<!-- backwards compatibility -->
<a id="schemaec2unexpectedexception"></a>
<a id="schema_EC2UnexpectedException"></a>
<a id="tocSec2unexpectedexception"></a>
<a id="tocsec2unexpectedexception"></a>

```json
null
```

<h2 id="tocS_SubnetIPAddressLimitReachedException">SubnetIPAddressLimitReachedException</h2>
<!-- backwards compatibility -->
<a id="schemasubnetipaddresslimitreachedexception"></a>
<a id="schema_SubnetIPAddressLimitReachedException"></a>
<a id="tocSsubnetipaddresslimitreachedexception"></a>
<a id="tocssubnetipaddresslimitreachedexception"></a>

```json
null
```

<h2 id="tocS_ENILimitReachedException">ENILimitReachedException</h2>
<!-- backwards compatibility -->
<a id="schemaenilimitreachedexception"></a>
<a id="schema_ENILimitReachedException"></a>
<a id="tocSenilimitreachedexception"></a>
<a id="tocsenilimitreachedexception"></a>

```json
null
```

<h2 id="tocS_EFSMountConnectivityException">EFSMountConnectivityException</h2>
<!-- backwards compatibility -->
<a id="schemaefsmountconnectivityexception"></a>
<a id="schema_EFSMountConnectivityException"></a>
<a id="tocSefsmountconnectivityexception"></a>
<a id="tocsefsmountconnectivityexception"></a>

```json
null
```

<h2 id="tocS_EFSMountFailureException">EFSMountFailureException</h2>
<!-- backwards compatibility -->
<a id="schemaefsmountfailureexception"></a>
<a id="schema_EFSMountFailureException"></a>
<a id="tocSefsmountfailureexception"></a>
<a id="tocsefsmountfailureexception"></a>

```json
null
```

<h2 id="tocS_EFSMountTimeoutException">EFSMountTimeoutException</h2>
<!-- backwards compatibility -->
<a id="schemaefsmounttimeoutexception"></a>
<a id="schema_EFSMountTimeoutException"></a>
<a id="tocSefsmounttimeoutexception"></a>
<a id="tocsefsmounttimeoutexception"></a>

```json
null
```

<h2 id="tocS_EFSIOException">EFSIOException</h2>
<!-- backwards compatibility -->
<a id="schemaefsioexception"></a>
<a id="schema_EFSIOException"></a>
<a id="tocSefsioexception"></a>
<a id="tocsefsioexception"></a>

```json
null
```

<h2 id="tocS_SnapStartException">SnapStartException</h2>
<!-- backwards compatibility -->
<a id="schemasnapstartexception"></a>
<a id="schema_SnapStartException"></a>
<a id="tocSsnapstartexception"></a>
<a id="tocssnapstartexception"></a>

```json
null
```

<h2 id="tocS_SnapStartTimeoutException">SnapStartTimeoutException</h2>
<!-- backwards compatibility -->
<a id="schemasnapstarttimeoutexception"></a>
<a id="schema_SnapStartTimeoutException"></a>
<a id="tocSsnapstarttimeoutexception"></a>
<a id="tocssnapstarttimeoutexception"></a>

```json
null
```

<h2 id="tocS_SnapStartNotReadyException">SnapStartNotReadyException</h2>
<!-- backwards compatibility -->
<a id="schemasnapstartnotreadyexception"></a>
<a id="schema_SnapStartNotReadyException"></a>
<a id="tocSsnapstartnotreadyexception"></a>
<a id="tocssnapstartnotreadyexception"></a>

```json
null
```

<h2 id="tocS_EC2ThrottledException">EC2ThrottledException</h2>
<!-- backwards compatibility -->
<a id="schemaec2throttledexception"></a>
<a id="schema_EC2ThrottledException"></a>
<a id="tocSec2throttledexception"></a>
<a id="tocsec2throttledexception"></a>

```json
null
```

<h2 id="tocS_EC2AccessDeniedException">EC2AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaec2accessdeniedexception"></a>
<a id="schema_EC2AccessDeniedException"></a>
<a id="tocSec2accessdeniedexception"></a>
<a id="tocsec2accessdeniedexception"></a>

```json
null
```

<h2 id="tocS_InvalidSubnetIDException">InvalidSubnetIDException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsubnetidexception"></a>
<a id="schema_InvalidSubnetIDException"></a>
<a id="tocSinvalidsubnetidexception"></a>
<a id="tocsinvalidsubnetidexception"></a>

```json
null
```

<h2 id="tocS_InvalidSecurityGroupIDException">InvalidSecurityGroupIDException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsecuritygroupidexception"></a>
<a id="schema_InvalidSecurityGroupIDException"></a>
<a id="tocSinvalidsecuritygroupidexception"></a>
<a id="tocsinvalidsecuritygroupidexception"></a>

```json
null
```

<h2 id="tocS_InvalidZipFileException">InvalidZipFileException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidzipfileexception"></a>
<a id="schema_InvalidZipFileException"></a>
<a id="tocSinvalidzipfileexception"></a>
<a id="tocsinvalidzipfileexception"></a>

```json
null
```

<h2 id="tocS_KMSDisabledException">KMSDisabledException</h2>
<!-- backwards compatibility -->
<a id="schemakmsdisabledexception"></a>
<a id="schema_KMSDisabledException"></a>
<a id="tocSkmsdisabledexception"></a>
<a id="tocskmsdisabledexception"></a>

```json
null
```

<h2 id="tocS_KMSInvalidStateException">KMSInvalidStateException</h2>
<!-- backwards compatibility -->
<a id="schemakmsinvalidstateexception"></a>
<a id="schema_KMSInvalidStateException"></a>
<a id="tocSkmsinvalidstateexception"></a>
<a id="tocskmsinvalidstateexception"></a>

```json
null
```

<h2 id="tocS_KMSAccessDeniedException">KMSAccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemakmsaccessdeniedexception"></a>
<a id="schema_KMSAccessDeniedException"></a>
<a id="tocSkmsaccessdeniedexception"></a>
<a id="tocskmsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_KMSNotFoundException">KMSNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemakmsnotfoundexception"></a>
<a id="schema_KMSNotFoundException"></a>
<a id="tocSkmsnotfoundexception"></a>
<a id="tocskmsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_InvalidRuntimeException">InvalidRuntimeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidruntimeexception"></a>
<a id="schema_InvalidRuntimeException"></a>
<a id="tocSinvalidruntimeexception"></a>
<a id="tocsinvalidruntimeexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotReadyException">ResourceNotReadyException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotreadyexception"></a>
<a id="schema_ResourceNotReadyException"></a>
<a id="tocSresourcenotreadyexception"></a>
<a id="tocsresourcenotreadyexception"></a>

```json
null
```

<h2 id="tocS_RecursiveInvocationException">RecursiveInvocationException</h2>
<!-- backwards compatibility -->
<a id="schemarecursiveinvocationexception"></a>
<a id="schema_RecursiveInvocationException"></a>
<a id="tocSrecursiveinvocationexception"></a>
<a id="tocsrecursiveinvocationexception"></a>

```json
null
```

<h2 id="tocS_InvokeAsyncResponse">InvokeAsyncResponse</h2>
<!-- backwards compatibility -->
<a id="schemainvokeasyncresponse"></a>
<a id="schema_InvokeAsyncResponse"></a>
<a id="tocSinvokeasyncresponse"></a>
<a id="tocsinvokeasyncresponse"></a>

```json
{
  "Status": {}
}
```

A success response (<code>202 Accepted</code>) indicates that the request is queued for invocation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|

<h2 id="tocS_InvokeWithResponseStreamResponse">InvokeWithResponseStreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemainvokewithresponsestreamresponse"></a>
<a id="schema_InvokeWithResponseStreamResponse"></a>
<a id="tocSinvokewithresponsestreamresponse"></a>
<a id="tocsinvokewithresponsestreamresponse"></a>

```json
{
  "StatusCode": {},
  "EventStream": {
    "PayloadChunk": {
      "Payload": {}
    },
    "InvokeComplete": {
      "ErrorCode": {},
      "ErrorDetails": {},
      "LogResult": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatusCode|object|false|none|none|
|EventStream|object|false|none|none|

<h2 id="tocS_ListAliasesResponse">ListAliasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaliasesresponse"></a>
<a id="schema_ListAliasesResponse"></a>
<a id="tocSlistaliasesresponse"></a>
<a id="tocslistaliasesresponse"></a>

```json
{
  "NextMarker": {},
  "Aliases": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Aliases|object|false|none|none|

<h2 id="tocS_ListCodeSigningConfigsResponse">ListCodeSigningConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcodesigningconfigsresponse"></a>
<a id="schema_ListCodeSigningConfigsResponse"></a>
<a id="tocSlistcodesigningconfigsresponse"></a>
<a id="tocslistcodesigningconfigsresponse"></a>

```json
{
  "NextMarker": {},
  "CodeSigningConfigs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|CodeSigningConfigs|object|false|none|none|

<h2 id="tocS_ListEventSourceMappingsResponse">ListEventSourceMappingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisteventsourcemappingsresponse"></a>
<a id="schema_ListEventSourceMappingsResponse"></a>
<a id="tocSlisteventsourcemappingsresponse"></a>
<a id="tocslisteventsourcemappingsresponse"></a>

```json
{
  "NextMarker": {},
  "EventSourceMappings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|EventSourceMappings|object|false|none|none|

<h2 id="tocS_ListFunctionEventInvokeConfigsResponse">ListFunctionEventInvokeConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfunctioneventinvokeconfigsresponse"></a>
<a id="schema_ListFunctionEventInvokeConfigsResponse"></a>
<a id="tocSlistfunctioneventinvokeconfigsresponse"></a>
<a id="tocslistfunctioneventinvokeconfigsresponse"></a>

```json
{
  "FunctionEventInvokeConfigs": {},
  "NextMarker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionEventInvokeConfigs|object|false|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_ListFunctionUrlConfigsResponse">ListFunctionUrlConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfunctionurlconfigsresponse"></a>
<a id="schema_ListFunctionUrlConfigsResponse"></a>
<a id="tocSlistfunctionurlconfigsresponse"></a>
<a id="tocslistfunctionurlconfigsresponse"></a>

```json
{
  "FunctionUrlConfigs": {},
  "NextMarker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionUrlConfigs|object|true|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_ListFunctionsResponse">ListFunctionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfunctionsresponse"></a>
<a id="schema_ListFunctionsResponse"></a>
<a id="tocSlistfunctionsresponse"></a>
<a id="tocslistfunctionsresponse"></a>

```json
{
  "NextMarker": {},
  "Functions": {}
}
```

A list of Lambda functions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Functions|object|false|none|none|

<h2 id="tocS_ListFunctionsByCodeSigningConfigResponse">ListFunctionsByCodeSigningConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfunctionsbycodesigningconfigresponse"></a>
<a id="schema_ListFunctionsByCodeSigningConfigResponse"></a>
<a id="tocSlistfunctionsbycodesigningconfigresponse"></a>
<a id="tocslistfunctionsbycodesigningconfigresponse"></a>

```json
{
  "NextMarker": {},
  "FunctionArns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|FunctionArns|object|false|none|none|

<h2 id="tocS_ListLayerVersionsResponse">ListLayerVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlayerversionsresponse"></a>
<a id="schema_ListLayerVersionsResponse"></a>
<a id="tocSlistlayerversionsresponse"></a>
<a id="tocslistlayerversionsresponse"></a>

```json
{
  "NextMarker": {},
  "LayerVersions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|LayerVersions|object|false|none|none|

<h2 id="tocS_ListLayersResponse">ListLayersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlayersresponse"></a>
<a id="schema_ListLayersResponse"></a>
<a id="tocSlistlayersresponse"></a>
<a id="tocslistlayersresponse"></a>

```json
{
  "NextMarker": {},
  "Layers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Layers|object|false|none|none|

<h2 id="tocS_ListProvisionedConcurrencyConfigsResponse">ListProvisionedConcurrencyConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprovisionedconcurrencyconfigsresponse"></a>
<a id="schema_ListProvisionedConcurrencyConfigsResponse"></a>
<a id="tocSlistprovisionedconcurrencyconfigsresponse"></a>
<a id="tocslistprovisionedconcurrencyconfigsresponse"></a>

```json
{
  "ProvisionedConcurrencyConfigs": {},
  "NextMarker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProvisionedConcurrencyConfigs|object|false|none|none|
|NextMarker|object|false|none|none|

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

<h2 id="tocS_ListVersionsByFunctionResponse">ListVersionsByFunctionResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistversionsbyfunctionresponse"></a>
<a id="schema_ListVersionsByFunctionResponse"></a>
<a id="tocSlistversionsbyfunctionresponse"></a>
<a id="tocslistversionsbyfunctionresponse"></a>

```json
{
  "NextMarker": {},
  "Versions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Versions|object|false|none|none|

<h2 id="tocS_PublishLayerVersionResponse">PublishLayerVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublishlayerversionresponse"></a>
<a id="schema_PublishLayerVersionResponse"></a>
<a id="tocSpublishlayerversionresponse"></a>
<a id="tocspublishlayerversionresponse"></a>

```json
{
  "Content": {
    "Location": {},
    "CodeSha256": {},
    "CodeSize": {},
    "SigningProfileVersionArn": {},
    "SigningJobArn": {}
  },
  "LayerArn": {},
  "LayerVersionArn": {},
  "Description": {},
  "CreatedDate": {},
  "Version": {},
  "CompatibleRuntimes": {},
  "LicenseInfo": {},
  "CompatibleArchitectures": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Content|object|false|none|none|
|LayerArn|object|false|none|none|
|LayerVersionArn|object|false|none|none|
|Description|object|false|none|none|
|CreatedDate|object|false|none|none|
|Version|object|false|none|none|
|CompatibleRuntimes|object|false|none|none|
|LicenseInfo|object|false|none|none|
|CompatibleArchitectures|object|false|none|none|

<h2 id="tocS_Runtime">Runtime</h2>
<!-- backwards compatibility -->
<a id="schemaruntime"></a>
<a id="schema_Runtime"></a>
<a id="tocSruntime"></a>
<a id="tocsruntime"></a>

```json
"nodejs"
```

<h2 id="tocS_PutFunctionCodeSigningConfigResponse">PutFunctionCodeSigningConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputfunctioncodesigningconfigresponse"></a>
<a id="schema_PutFunctionCodeSigningConfigResponse"></a>
<a id="tocSputfunctioncodesigningconfigresponse"></a>
<a id="tocsputfunctioncodesigningconfigresponse"></a>

```json
{
  "CodeSigningConfigArn": {},
  "FunctionName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeSigningConfigArn|object|true|none|none|
|FunctionName|object|true|none|none|

<h2 id="tocS_Concurrency">Concurrency</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrency"></a>
<a id="schema_Concurrency"></a>
<a id="tocSconcurrency"></a>
<a id="tocsconcurrency"></a>

```json
{
  "ReservedConcurrentExecutions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReservedConcurrentExecutions|object|false|none|none|

<h2 id="tocS_PutProvisionedConcurrencyConfigResponse">PutProvisionedConcurrencyConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputprovisionedconcurrencyconfigresponse"></a>
<a id="schema_PutProvisionedConcurrencyConfigResponse"></a>
<a id="tocSputprovisionedconcurrencyconfigresponse"></a>
<a id="tocsputprovisionedconcurrencyconfigresponse"></a>

```json
{
  "RequestedProvisionedConcurrentExecutions": {},
  "AvailableProvisionedConcurrentExecutions": {},
  "AllocatedProvisionedConcurrentExecutions": {},
  "Status": {},
  "StatusReason": {},
  "LastModified": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestedProvisionedConcurrentExecutions|object|false|none|none|
|AvailableProvisionedConcurrentExecutions|object|false|none|none|
|AllocatedProvisionedConcurrentExecutions|object|false|none|none|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|
|LastModified|object|false|none|none|

<h2 id="tocS_PutRuntimeManagementConfigResponse">PutRuntimeManagementConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputruntimemanagementconfigresponse"></a>
<a id="schema_PutRuntimeManagementConfigResponse"></a>
<a id="tocSputruntimemanagementconfigresponse"></a>
<a id="tocsputruntimemanagementconfigresponse"></a>

```json
{
  "UpdateRuntimeOn": {},
  "FunctionArn": {},
  "RuntimeVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateRuntimeOn|object|true|none|none|
|FunctionArn|object|true|none|none|
|RuntimeVersionArn|object|false|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_UpdateCodeSigningConfigResponse">UpdateCodeSigningConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecodesigningconfigresponse"></a>
<a id="schema_UpdateCodeSigningConfigResponse"></a>
<a id="tocSupdatecodesigningconfigresponse"></a>
<a id="tocsupdatecodesigningconfigresponse"></a>

```json
{
  "CodeSigningConfig": {
    "CodeSigningConfigId": {},
    "CodeSigningConfigArn": {},
    "Description": {},
    "AllowedPublishers": {
      "SigningProfileVersionArns": {}
    },
    "CodeSigningPolicies": {
      "UntrustedArtifactOnDeployment": {}
    },
    "LastModified": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeSigningConfig|object|true|none|none|

<h2 id="tocS_UpdateFunctionUrlConfigResponse">UpdateFunctionUrlConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefunctionurlconfigresponse"></a>
<a id="schema_UpdateFunctionUrlConfigResponse"></a>
<a id="tocSupdatefunctionurlconfigresponse"></a>
<a id="tocsupdatefunctionurlconfigresponse"></a>

```json
{
  "FunctionUrl": {},
  "FunctionArn": {},
  "AuthType": {},
  "Cors": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "CreationTime": {},
  "LastModifiedTime": {},
  "InvokeMode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionUrl|object|true|none|none|
|FunctionArn|object|true|none|none|
|AuthType|object|true|none|none|
|Cors|object|false|none|none|
|CreationTime|object|true|none|none|
|LastModifiedTime|object|true|none|none|
|InvokeMode|object|false|none|none|

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
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

<h2 id="tocS_UnreservedConcurrentExecutions">UnreservedConcurrentExecutions</h2>
<!-- backwards compatibility -->
<a id="schemaunreservedconcurrentexecutions"></a>
<a id="schema_UnreservedConcurrentExecutions"></a>
<a id="tocSunreservedconcurrentexecutions"></a>
<a id="tocsunreservedconcurrentexecutions"></a>

```json
0
```

<h2 id="tocS_AccountLimit">AccountLimit</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlimit"></a>
<a id="schema_AccountLimit"></a>
<a id="tocSaccountlimit"></a>
<a id="tocsaccountlimit"></a>

```json
{
  "TotalCodeSize": {},
  "CodeSizeUnzipped": {},
  "CodeSizeZipped": {},
  "ConcurrentExecutions": {},
  "UnreservedConcurrentExecutions": {}
}
```

Limits that are related to concurrency and storage. All file and storage sizes are in bytes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalCodeSize|object|false|none|none|
|CodeSizeUnzipped|object|false|none|none|
|CodeSizeZipped|object|false|none|none|
|ConcurrentExecutions|object|false|none|none|
|UnreservedConcurrentExecutions|object|false|none|none|

<h2 id="tocS_AccountUsage">AccountUsage</h2>
<!-- backwards compatibility -->
<a id="schemaaccountusage"></a>
<a id="schema_AccountUsage"></a>
<a id="tocSaccountusage"></a>
<a id="tocsaccountusage"></a>

```json
{
  "TotalCodeSize": {},
  "FunctionCount": {}
}
```

The number of functions and amount of storage in use.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalCodeSize|object|false|none|none|
|FunctionCount|object|false|none|none|

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
"string"
```

<h2 id="tocS_LayerName">LayerName</h2>
<!-- backwards compatibility -->
<a id="schemalayername"></a>
<a id="schema_LayerName"></a>
<a id="tocSlayername"></a>
<a id="tocslayername"></a>

```json
"string"
```

<h2 id="tocS_LayerVersionNumber">LayerVersionNumber</h2>
<!-- backwards compatibility -->
<a id="schemalayerversionnumber"></a>
<a id="schema_LayerVersionNumber"></a>
<a id="tocSlayerversionnumber"></a>
<a id="tocslayerversionnumber"></a>

```json
0
```

<h2 id="tocS_StatementId">StatementId</h2>
<!-- backwards compatibility -->
<a id="schemastatementid"></a>
<a id="schema_StatementId"></a>
<a id="tocSstatementid"></a>
<a id="tocsstatementid"></a>

```json
"string"
```

<h2 id="tocS_LayerPermissionAllowedAction">LayerPermissionAllowedAction</h2>
<!-- backwards compatibility -->
<a id="schemalayerpermissionallowedaction"></a>
<a id="schema_LayerPermissionAllowedAction"></a>
<a id="tocSlayerpermissionallowedaction"></a>
<a id="tocslayerpermissionallowedaction"></a>

```json
"string"
```

<h2 id="tocS_LayerPermissionAllowedPrincipal">LayerPermissionAllowedPrincipal</h2>
<!-- backwards compatibility -->
<a id="schemalayerpermissionallowedprincipal"></a>
<a id="schema_LayerPermissionAllowedPrincipal"></a>
<a id="tocSlayerpermissionallowedprincipal"></a>
<a id="tocslayerpermissionallowedprincipal"></a>

```json
"string"
```

<h2 id="tocS_OrganizationId">OrganizationId</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationid"></a>
<a id="schema_OrganizationId"></a>
<a id="tocSorganizationid"></a>
<a id="tocsorganizationid"></a>

```json
"string"
```

<h2 id="tocS_AddLayerVersionPermissionRequest">AddLayerVersionPermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddlayerversionpermissionrequest"></a>
<a id="schema_AddLayerVersionPermissionRequest"></a>
<a id="tocSaddlayerversionpermissionrequest"></a>
<a id="tocsaddlayerversionpermissionrequest"></a>

```json
{
  "StatementId": {},
  "Action": {},
  "Principal": {},
  "OrganizationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatementId|object|true|none|none|
|Action|object|true|none|none|
|Principal|object|true|none|none|
|OrganizationId|object|false|none|none|

<h2 id="tocS_FunctionName">FunctionName</h2>
<!-- backwards compatibility -->
<a id="schemafunctionname"></a>
<a id="schema_FunctionName"></a>
<a id="tocSfunctionname"></a>
<a id="tocsfunctionname"></a>

```json
"string"
```

<h2 id="tocS_Principal">Principal</h2>
<!-- backwards compatibility -->
<a id="schemaprincipal"></a>
<a id="schema_Principal"></a>
<a id="tocSprincipal"></a>
<a id="tocsprincipal"></a>

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

<h2 id="tocS_SourceOwner">SourceOwner</h2>
<!-- backwards compatibility -->
<a id="schemasourceowner"></a>
<a id="schema_SourceOwner"></a>
<a id="tocSsourceowner"></a>
<a id="tocssourceowner"></a>

```json
"string"
```

<h2 id="tocS_EventSourceToken">EventSourceToken</h2>
<!-- backwards compatibility -->
<a id="schemaeventsourcetoken"></a>
<a id="schema_EventSourceToken"></a>
<a id="tocSeventsourcetoken"></a>
<a id="tocseventsourcetoken"></a>

```json
"string"
```

<h2 id="tocS_Qualifier">Qualifier</h2>
<!-- backwards compatibility -->
<a id="schemaqualifier"></a>
<a id="schema_Qualifier"></a>
<a id="tocSqualifier"></a>
<a id="tocsqualifier"></a>

```json
"string"
```

<h2 id="tocS_PrincipalOrgID">PrincipalOrgID</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalorgid"></a>
<a id="schema_PrincipalOrgID"></a>
<a id="tocSprincipalorgid"></a>
<a id="tocsprincipalorgid"></a>

```json
"stringstring"
```

<h2 id="tocS_FunctionUrlAuthType">FunctionUrlAuthType</h2>
<!-- backwards compatibility -->
<a id="schemafunctionurlauthtype"></a>
<a id="schema_FunctionUrlAuthType"></a>
<a id="tocSfunctionurlauthtype"></a>
<a id="tocsfunctionurlauthtype"></a>

```json
"NONE"
```

<h2 id="tocS_AddPermissionRequest">AddPermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddpermissionrequest"></a>
<a id="schema_AddPermissionRequest"></a>
<a id="tocSaddpermissionrequest"></a>
<a id="tocsaddpermissionrequest"></a>

```json
{
  "StatementId": {},
  "Action": {},
  "Principal": {},
  "SourceArn": {},
  "SourceAccount": {},
  "EventSourceToken": {},
  "RevisionId": {},
  "PrincipalOrgID": {},
  "FunctionUrlAuthType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatementId|object|true|none|none|
|Action|object|true|none|none|
|Principal|object|true|none|none|
|SourceArn|object|false|none|none|
|SourceAccount|object|false|none|none|
|EventSourceToken|object|false|none|none|
|RevisionId|object|false|none|none|
|PrincipalOrgID|object|false|none|none|
|FunctionUrlAuthType|object|false|none|none|

<h2 id="tocS_AdditionalVersion">AdditionalVersion</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalversion"></a>
<a id="schema_AdditionalVersion"></a>
<a id="tocSadditionalversion"></a>
<a id="tocsadditionalversion"></a>

```json
"string"
```

<h2 id="tocS_Weight">Weight</h2>
<!-- backwards compatibility -->
<a id="schemaweight"></a>
<a id="schema_Weight"></a>
<a id="tocSweight"></a>
<a id="tocsweight"></a>

```json
0
```

<h2 id="tocS_Alias">Alias</h2>
<!-- backwards compatibility -->
<a id="schemaalias"></a>
<a id="schema_Alias"></a>
<a id="tocSalias"></a>
<a id="tocsalias"></a>

```json
"string"
```

<h2 id="tocS_FunctionArn">FunctionArn</h2>
<!-- backwards compatibility -->
<a id="schemafunctionarn"></a>
<a id="schema_FunctionArn"></a>
<a id="tocSfunctionarn"></a>
<a id="tocsfunctionarn"></a>

```json
"string"
```

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

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

<h2 id="tocS_AliasRoutingConfiguration">AliasRoutingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaaliasroutingconfiguration"></a>
<a id="schema_AliasRoutingConfiguration"></a>
<a id="tocSaliasroutingconfiguration"></a>
<a id="tocsaliasroutingconfiguration"></a>

```json
{
  "AdditionalVersionWeights": {
    "property1": 0,
    "property2": 0
  }
}
```

The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdditionalVersionWeights|object|false|none|none|

<h2 id="tocS_AliasList">AliasList</h2>
<!-- backwards compatibility -->
<a id="schemaaliaslist"></a>
<a id="schema_AliasList"></a>
<a id="tocSaliaslist"></a>
<a id="tocsaliaslist"></a>

```json
[
  {
    "AliasArn": {},
    "Name": {},
    "FunctionVersion": {},
    "Description": {},
    "RoutingConfig": {
      "AdditionalVersionWeights": {
        "property1": 0,
        "property2": 0
      }
    },
    "RevisionId": {}
  }
]
```

<h2 id="tocS_Method">Method</h2>
<!-- backwards compatibility -->
<a id="schemamethod"></a>
<a id="schema_Method"></a>
<a id="tocSmethod"></a>
<a id="tocsmethod"></a>

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
"string"
```

<h2 id="tocS_AllowedPublishers">AllowedPublishers</h2>
<!-- backwards compatibility -->
<a id="schemaallowedpublishers"></a>
<a id="schema_AllowedPublishers"></a>
<a id="tocSallowedpublishers"></a>
<a id="tocsallowedpublishers"></a>

```json
{
  "SigningProfileVersionArns": {}
}
```

List of signing profiles that can sign a code package.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SigningProfileVersionArns|object|true|none|none|

<h2 id="tocS_AmazonManagedKafkaEventSourceConfig">AmazonManagedKafkaEventSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaamazonmanagedkafkaeventsourceconfig"></a>
<a id="schema_AmazonManagedKafkaEventSourceConfig"></a>
<a id="tocSamazonmanagedkafkaeventsourceconfig"></a>
<a id="tocsamazonmanagedkafkaeventsourceconfig"></a>

```json
{
  "ConsumerGroupId": {}
}
```

Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConsumerGroupId|object|false|none|none|

<h2 id="tocS_ArchitecturesList">ArchitecturesList</h2>
<!-- backwards compatibility -->
<a id="schemaarchitectureslist"></a>
<a id="schema_ArchitecturesList"></a>
<a id="tocSarchitectureslist"></a>
<a id="tocsarchitectureslist"></a>

```json
[
  "x86_64"
]
```

<h2 id="tocS_BatchSize">BatchSize</h2>
<!-- backwards compatibility -->
<a id="schemabatchsize"></a>
<a id="schema_BatchSize"></a>
<a id="tocSbatchsize"></a>
<a id="tocsbatchsize"></a>

```json
1
```

<h2 id="tocS_BisectBatchOnFunctionError">BisectBatchOnFunctionError</h2>
<!-- backwards compatibility -->
<a id="schemabisectbatchonfunctionerror"></a>
<a id="schema_BisectBatchOnFunctionError"></a>
<a id="tocSbisectbatchonfunctionerror"></a>
<a id="tocsbisectbatchonfunctionerror"></a>

```json
true
```

<h2 id="tocS_BlobStream">BlobStream</h2>
<!-- backwards compatibility -->
<a id="schemablobstream"></a>
<a id="schema_BlobStream"></a>
<a id="tocSblobstream"></a>
<a id="tocsblobstream"></a>

```json
"string"
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

<h2 id="tocS_CodeSigningConfigId">CodeSigningConfigId</h2>
<!-- backwards compatibility -->
<a id="schemacodesigningconfigid"></a>
<a id="schema_CodeSigningConfigId"></a>
<a id="tocScodesigningconfigid"></a>
<a id="tocscodesigningconfigid"></a>

```json
"string"
```

<h2 id="tocS_CodeSigningConfigArn">CodeSigningConfigArn</h2>
<!-- backwards compatibility -->
<a id="schemacodesigningconfigarn"></a>
<a id="schema_CodeSigningConfigArn"></a>
<a id="tocScodesigningconfigarn"></a>
<a id="tocscodesigningconfigarn"></a>

```json
"string"
```

<h2 id="tocS_CodeSigningPolicies">CodeSigningPolicies</h2>
<!-- backwards compatibility -->
<a id="schemacodesigningpolicies"></a>
<a id="schema_CodeSigningPolicies"></a>
<a id="tocScodesigningpolicies"></a>
<a id="tocscodesigningpolicies"></a>

```json
{
  "UntrustedArtifactOnDeployment": {}
}
```

Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UntrustedArtifactOnDeployment|object|false|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"string"
```

<h2 id="tocS_CodeSigningConfig">CodeSigningConfig</h2>
<!-- backwards compatibility -->
<a id="schemacodesigningconfig"></a>
<a id="schema_CodeSigningConfig"></a>
<a id="tocScodesigningconfig"></a>
<a id="tocscodesigningconfig"></a>

```json
{
  "CodeSigningConfigId": {},
  "CodeSigningConfigArn": {},
  "Description": {},
  "AllowedPublishers": {
    "SigningProfileVersionArns": {}
  },
  "CodeSigningPolicies": {
    "UntrustedArtifactOnDeployment": {}
  },
  "LastModified": {}
}
```

Details about a <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Code signing configuration</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeSigningConfigId|object|true|none|none|
|CodeSigningConfigArn|object|true|none|none|
|Description|object|false|none|none|
|AllowedPublishers|object|true|none|none|
|CodeSigningPolicies|object|true|none|none|
|LastModified|object|true|none|none|

<h2 id="tocS_CodeSigningConfigList">CodeSigningConfigList</h2>
<!-- backwards compatibility -->
<a id="schemacodesigningconfiglist"></a>
<a id="schema_CodeSigningConfigList"></a>
<a id="tocScodesigningconfiglist"></a>
<a id="tocscodesigningconfiglist"></a>

```json
[
  {
    "CodeSigningConfigId": {},
    "CodeSigningConfigArn": {},
    "Description": {},
    "AllowedPublishers": {
      "SigningProfileVersionArns": {}
    },
    "CodeSigningPolicies": {
      "UntrustedArtifactOnDeployment": {}
    },
    "LastModified": {}
  }
]
```

<h2 id="tocS_CompatibleArchitectures">CompatibleArchitectures</h2>
<!-- backwards compatibility -->
<a id="schemacompatiblearchitectures"></a>
<a id="schema_CompatibleArchitectures"></a>
<a id="tocScompatiblearchitectures"></a>
<a id="tocscompatiblearchitectures"></a>

```json
[
  "x86_64"
]
```

<h2 id="tocS_CompatibleRuntimes">CompatibleRuntimes</h2>
<!-- backwards compatibility -->
<a id="schemacompatibleruntimes"></a>
<a id="schema_CompatibleRuntimes"></a>
<a id="tocScompatibleruntimes"></a>
<a id="tocscompatibleruntimes"></a>

```json
[
  "nodejs"
]
```

<h2 id="tocS_ReservedConcurrentExecutions">ReservedConcurrentExecutions</h2>
<!-- backwards compatibility -->
<a id="schemareservedconcurrentexecutions"></a>
<a id="schema_ReservedConcurrentExecutions"></a>
<a id="tocSreservedconcurrentexecutions"></a>
<a id="tocsreservedconcurrentexecutions"></a>

```json
0
```

<h2 id="tocS_Cors">Cors</h2>
<!-- backwards compatibility -->
<a id="schemacors"></a>
<a id="schema_Cors"></a>
<a id="tocScors"></a>
<a id="tocscors"></a>

```json
{
  "AllowCredentials": {},
  "AllowHeaders": {},
  "AllowMethods": {},
  "AllowOrigins": {},
  "ExposeHeaders": {},
  "MaxAge": {}
}
```

The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your Lambda function URL. Use CORS to grant access to your function URL from any origin. You can also use CORS to control access for specific HTTP headers and methods in requests to your function URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowCredentials|object|false|none|none|
|AllowHeaders|object|false|none|none|
|AllowMethods|object|false|none|none|
|AllowOrigins|object|false|none|none|
|ExposeHeaders|object|false|none|none|
|MaxAge|object|false|none|none|

<h2 id="tocS_CreateAliasRequest">CreateAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatealiasrequest"></a>
<a id="schema_CreateAliasRequest"></a>
<a id="tocScreatealiasrequest"></a>
<a id="tocscreatealiasrequest"></a>

```json
{
  "Name": {},
  "FunctionVersion": {},
  "Description": {},
  "RoutingConfig": {
    "AdditionalVersionWeights": {
      "property1": 0,
      "property2": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|FunctionVersion|object|true|none|none|
|Description|object|false|none|none|
|RoutingConfig|object|false|none|none|

<h2 id="tocS_CreateCodeSigningConfigRequest">CreateCodeSigningConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecodesigningconfigrequest"></a>
<a id="schema_CreateCodeSigningConfigRequest"></a>
<a id="tocScreatecodesigningconfigrequest"></a>
<a id="tocscreatecodesigningconfigrequest"></a>

```json
{
  "Description": {},
  "AllowedPublishers": {
    "SigningProfileVersionArns": {}
  },
  "CodeSigningPolicies": {
    "UntrustedArtifactOnDeployment": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|AllowedPublishers|object|true|none|none|
|CodeSigningPolicies|object|false|none|none|

<h2 id="tocS_Enabled">Enabled</h2>
<!-- backwards compatibility -->
<a id="schemaenabled"></a>
<a id="schema_Enabled"></a>
<a id="tocSenabled"></a>
<a id="tocsenabled"></a>

```json
true
```

<h2 id="tocS_FilterCriteria">FilterCriteria</h2>
<!-- backwards compatibility -->
<a id="schemafiltercriteria"></a>
<a id="schema_FilterCriteria"></a>
<a id="tocSfiltercriteria"></a>
<a id="tocsfiltercriteria"></a>

```json
{
  "Filters": {}
}
```

 An object that contains the filters for an event source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|

<h2 id="tocS_MaximumBatchingWindowInSeconds">MaximumBatchingWindowInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemamaximumbatchingwindowinseconds"></a>
<a id="schema_MaximumBatchingWindowInSeconds"></a>
<a id="tocSmaximumbatchingwindowinseconds"></a>
<a id="tocsmaximumbatchingwindowinseconds"></a>

```json
0
```

<h2 id="tocS_ParallelizationFactor">ParallelizationFactor</h2>
<!-- backwards compatibility -->
<a id="schemaparallelizationfactor"></a>
<a id="schema_ParallelizationFactor"></a>
<a id="tocSparallelizationfactor"></a>
<a id="tocsparallelizationfactor"></a>

```json
1
```

<h2 id="tocS_EventSourcePosition">EventSourcePosition</h2>
<!-- backwards compatibility -->
<a id="schemaeventsourceposition"></a>
<a id="schema_EventSourcePosition"></a>
<a id="tocSeventsourceposition"></a>
<a id="tocseventsourceposition"></a>

```json
"TRIM_HORIZON"
```

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DestinationConfig">DestinationConfig</h2>
<!-- backwards compatibility -->
<a id="schemadestinationconfig"></a>
<a id="schema_DestinationConfig"></a>
<a id="tocSdestinationconfig"></a>
<a id="tocsdestinationconfig"></a>

```json
{
  "OnSuccess": {
    "Destination": {}
  },
  "OnFailure": {
    "Destination": {}
  }
}
```

A configuration object that specifies the destination of an event after Lambda processes it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OnSuccess|object|false|none|none|
|OnFailure|object|false|none|none|

<h2 id="tocS_MaximumRecordAgeInSeconds">MaximumRecordAgeInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemamaximumrecordageinseconds"></a>
<a id="schema_MaximumRecordAgeInSeconds"></a>
<a id="tocSmaximumrecordageinseconds"></a>
<a id="tocsmaximumrecordageinseconds"></a>

```json
-1
```

<h2 id="tocS_MaximumRetryAttemptsEventSourceMapping">MaximumRetryAttemptsEventSourceMapping</h2>
<!-- backwards compatibility -->
<a id="schemamaximumretryattemptseventsourcemapping"></a>
<a id="schema_MaximumRetryAttemptsEventSourceMapping"></a>
<a id="tocSmaximumretryattemptseventsourcemapping"></a>
<a id="tocsmaximumretryattemptseventsourcemapping"></a>

```json
-1
```

<h2 id="tocS_TumblingWindowInSeconds">TumblingWindowInSeconds</h2>
<!-- backwards compatibility -->
<a id="schematumblingwindowinseconds"></a>
<a id="schema_TumblingWindowInSeconds"></a>
<a id="tocStumblingwindowinseconds"></a>
<a id="tocstumblingwindowinseconds"></a>

```json
0
```

<h2 id="tocS_Topics">Topics</h2>
<!-- backwards compatibility -->
<a id="schematopics"></a>
<a id="schema_Topics"></a>
<a id="tocStopics"></a>
<a id="tocstopics"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Queues">Queues</h2>
<!-- backwards compatibility -->
<a id="schemaqueues"></a>
<a id="schema_Queues"></a>
<a id="tocSqueues"></a>
<a id="tocsqueues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SourceAccessConfigurations">SourceAccessConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemasourceaccessconfigurations"></a>
<a id="schema_SourceAccessConfigurations"></a>
<a id="tocSsourceaccessconfigurations"></a>
<a id="tocssourceaccessconfigurations"></a>

```json
[
  {
    "Type": {},
    "URI": {}
  }
]
```

<h2 id="tocS_SelfManagedEventSource">SelfManagedEventSource</h2>
<!-- backwards compatibility -->
<a id="schemaselfmanagedeventsource"></a>
<a id="schema_SelfManagedEventSource"></a>
<a id="tocSselfmanagedeventsource"></a>
<a id="tocsselfmanagedeventsource"></a>

```json
{
  "Endpoints": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

The self-managed Apache Kafka cluster for your event source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Endpoints|object|false|none|none|

<h2 id="tocS_FunctionResponseTypeList">FunctionResponseTypeList</h2>
<!-- backwards compatibility -->
<a id="schemafunctionresponsetypelist"></a>
<a id="schema_FunctionResponseTypeList"></a>
<a id="tocSfunctionresponsetypelist"></a>
<a id="tocsfunctionresponsetypelist"></a>

```json
[
  "ReportBatchItemFailures"
]
```

<h2 id="tocS_SelfManagedKafkaEventSourceConfig">SelfManagedKafkaEventSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaselfmanagedkafkaeventsourceconfig"></a>
<a id="schema_SelfManagedKafkaEventSourceConfig"></a>
<a id="tocSselfmanagedkafkaeventsourceconfig"></a>
<a id="tocsselfmanagedkafkaeventsourceconfig"></a>

```json
{
  "ConsumerGroupId": {}
}
```

Specific configuration settings for a self-managed Apache Kafka event source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConsumerGroupId|object|false|none|none|

<h2 id="tocS_ScalingConfig">ScalingConfig</h2>
<!-- backwards compatibility -->
<a id="schemascalingconfig"></a>
<a id="schema_ScalingConfig"></a>
<a id="tocSscalingconfig"></a>
<a id="tocsscalingconfig"></a>

```json
{
  "MaximumConcurrency": {}
}
```

(Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaximumConcurrency|object|false|none|none|

<h2 id="tocS_DocumentDBEventSourceConfig">DocumentDBEventSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemadocumentdbeventsourceconfig"></a>
<a id="schema_DocumentDBEventSourceConfig"></a>
<a id="tocSdocumentdbeventsourceconfig"></a>
<a id="tocsdocumentdbeventsourceconfig"></a>

```json
{
  "DatabaseName": {},
  "CollectionName": {},
  "FullDocument": {}
}
```

 Specific configuration settings for a DocumentDB event source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseName|object|false|none|none|
|CollectionName|object|false|none|none|
|FullDocument|object|false|none|none|

<h2 id="tocS_CreateEventSourceMappingRequest">CreateEventSourceMappingRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventsourcemappingrequest"></a>
<a id="schema_CreateEventSourceMappingRequest"></a>
<a id="tocScreateeventsourcemappingrequest"></a>
<a id="tocscreateeventsourcemappingrequest"></a>

```json
{
  "EventSourceArn": {},
  "FunctionName": {},
  "Enabled": {},
  "BatchSize": {},
  "FilterCriteria": {
    "Filters": {}
  },
  "MaximumBatchingWindowInSeconds": {},
  "ParallelizationFactor": {},
  "StartingPosition": {},
  "StartingPositionTimestamp": {},
  "DestinationConfig": {
    "OnSuccess": {
      "Destination": {}
    },
    "OnFailure": {
      "Destination": {}
    }
  },
  "MaximumRecordAgeInSeconds": {},
  "BisectBatchOnFunctionError": {},
  "MaximumRetryAttempts": {},
  "TumblingWindowInSeconds": {},
  "Topics": {},
  "Queues": {},
  "SourceAccessConfigurations": {},
  "SelfManagedEventSource": {
    "Endpoints": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "FunctionResponseTypes": {},
  "AmazonManagedKafkaEventSourceConfig": {
    "ConsumerGroupId": {}
  },
  "SelfManagedKafkaEventSourceConfig": {
    "ConsumerGroupId": {}
  },
  "ScalingConfig": {
    "MaximumConcurrency": {}
  },
  "DocumentDBEventSourceConfig": {
    "DatabaseName": {},
    "CollectionName": {},
    "FullDocument": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventSourceArn|object|false|none|none|
|FunctionName|object|true|none|none|
|Enabled|object|false|none|none|
|BatchSize|object|false|none|none|
|FilterCriteria|object|false|none|none|
|MaximumBatchingWindowInSeconds|object|false|none|none|
|ParallelizationFactor|object|false|none|none|
|StartingPosition|object|false|none|none|
|StartingPositionTimestamp|object|false|none|none|
|DestinationConfig|object|false|none|none|
|MaximumRecordAgeInSeconds|object|false|none|none|
|BisectBatchOnFunctionError|object|false|none|none|
|MaximumRetryAttempts|object|false|none|none|
|TumblingWindowInSeconds|object|false|none|none|
|Topics|object|false|none|none|
|Queues|object|false|none|none|
|SourceAccessConfigurations|object|false|none|none|
|SelfManagedEventSource|object|false|none|none|
|FunctionResponseTypes|object|false|none|none|
|AmazonManagedKafkaEventSourceConfig|object|false|none|none|
|SelfManagedKafkaEventSourceConfig|object|false|none|none|
|ScalingConfig|object|false|none|none|
|DocumentDBEventSourceConfig|object|false|none|none|

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
```

<h2 id="tocS_Handler">Handler</h2>
<!-- backwards compatibility -->
<a id="schemahandler"></a>
<a id="schema_Handler"></a>
<a id="tocShandler"></a>
<a id="tocshandler"></a>

```json
"string"
```

<h2 id="tocS_FunctionCode">FunctionCode</h2>
<!-- backwards compatibility -->
<a id="schemafunctioncode"></a>
<a id="schema_FunctionCode"></a>
<a id="tocSfunctioncode"></a>
<a id="tocsfunctioncode"></a>

```json
{
  "ZipFile": {},
  "S3Bucket": {},
  "S3Key": {},
  "S3ObjectVersion": {},
  "ImageUri": {}
}
```

The code for the Lambda function. You can either specify an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ZipFile|object|false|none|none|
|S3Bucket|object|false|none|none|
|S3Key|object|false|none|none|
|S3ObjectVersion|object|false|none|none|
|ImageUri|object|false|none|none|

<h2 id="tocS_Timeout">Timeout</h2>
<!-- backwards compatibility -->
<a id="schematimeout"></a>
<a id="schema_Timeout"></a>
<a id="tocStimeout"></a>
<a id="tocstimeout"></a>

```json
1
```

<h2 id="tocS_MemorySize">MemorySize</h2>
<!-- backwards compatibility -->
<a id="schemamemorysize"></a>
<a id="schema_MemorySize"></a>
<a id="tocSmemorysize"></a>
<a id="tocsmemorysize"></a>

```json
128
```

<h2 id="tocS_VpcConfig">VpcConfig</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfig"></a>
<a id="schema_VpcConfig"></a>
<a id="tocSvpcconfig"></a>
<a id="tocsvpcconfig"></a>

```json
{
  "SubnetIds": {},
  "SecurityGroupIds": {}
}
```

The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda function to access resources in a VPC</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetIds|object|false|none|none|
|SecurityGroupIds|object|false|none|none|

<h2 id="tocS_PackageType">PackageType</h2>
<!-- backwards compatibility -->
<a id="schemapackagetype"></a>
<a id="schema_PackageType"></a>
<a id="tocSpackagetype"></a>
<a id="tocspackagetype"></a>

```json
"Zip"
```

<h2 id="tocS_DeadLetterConfig">DeadLetterConfig</h2>
<!-- backwards compatibility -->
<a id="schemadeadletterconfig"></a>
<a id="schema_DeadLetterConfig"></a>
<a id="tocSdeadletterconfig"></a>
<a id="tocsdeadletterconfig"></a>

```json
{
  "TargetArn": {}
}
```

The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetArn|object|false|none|none|

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
{
  "Variables": {
    "property1": "password",
    "property2": "password"
  }
}
```

A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Variables|object|false|none|none|

<h2 id="tocS_KMSKeyArn">KMSKeyArn</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyarn"></a>
<a id="schema_KMSKeyArn"></a>
<a id="tocSkmskeyarn"></a>
<a id="tocskmskeyarn"></a>

```json
"string"
```

<h2 id="tocS_TracingConfig">TracingConfig</h2>
<!-- backwards compatibility -->
<a id="schematracingconfig"></a>
<a id="schema_TracingConfig"></a>
<a id="tocStracingconfig"></a>
<a id="tocstracingconfig"></a>

```json
{
  "Mode": {}
}
```

The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mode|object|false|none|none|

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

<h2 id="tocS_LayerList">LayerList</h2>
<!-- backwards compatibility -->
<a id="schemalayerlist"></a>
<a id="schema_LayerList"></a>
<a id="tocSlayerlist"></a>
<a id="tocslayerlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FileSystemConfigList">FileSystemConfigList</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemconfiglist"></a>
<a id="schema_FileSystemConfigList"></a>
<a id="tocSfilesystemconfiglist"></a>
<a id="tocsfilesystemconfiglist"></a>

```json
[
  {
    "Arn": {},
    "LocalMountPath": {}
  }
]
```

<h2 id="tocS_ImageConfig">ImageConfig</h2>
<!-- backwards compatibility -->
<a id="schemaimageconfig"></a>
<a id="schema_ImageConfig"></a>
<a id="tocSimageconfig"></a>
<a id="tocsimageconfig"></a>

```json
{
  "EntryPoint": {},
  "Command": {},
  "WorkingDirectory": {}
}
```

Configuration values that override the container image Dockerfile settings. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container image settings</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntryPoint|object|false|none|none|
|Command|object|false|none|none|
|WorkingDirectory|object|false|none|none|

<h2 id="tocS_EphemeralStorage">EphemeralStorage</h2>
<!-- backwards compatibility -->
<a id="schemaephemeralstorage"></a>
<a id="schema_EphemeralStorage"></a>
<a id="tocSephemeralstorage"></a>
<a id="tocsephemeralstorage"></a>

```json
{
  "Size": {}
}
```

The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Size|object|true|none|none|

<h2 id="tocS_SnapStart">SnapStart</h2>
<!-- backwards compatibility -->
<a id="schemasnapstart"></a>
<a id="schema_SnapStart"></a>
<a id="tocSsnapstart"></a>
<a id="tocssnapstart"></a>

```json
{
  "ApplyOn": {}
}
```

The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">Lambda SnapStart</a> setting. Set <code>ApplyOn</code> to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplyOn|object|false|none|none|

<h2 id="tocS_CreateFunctionRequest">CreateFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefunctionrequest"></a>
<a id="schema_CreateFunctionRequest"></a>
<a id="tocScreatefunctionrequest"></a>
<a id="tocscreatefunctionrequest"></a>

```json
{
  "FunctionName": {},
  "Runtime": {},
  "Role": {},
  "Handler": {},
  "Code": {
    "ZipFile": {},
    "S3Bucket": {},
    "S3Key": {},
    "S3ObjectVersion": {},
    "ImageUri": {}
  },
  "Description": {},
  "Timeout": {},
  "MemorySize": {},
  "Publish": {},
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "PackageType": {},
  "DeadLetterConfig": {
    "TargetArn": {}
  },
  "Environment": {
    "Variables": {
      "property1": "password",
      "property2": "password"
    }
  },
  "KMSKeyArn": {},
  "TracingConfig": {
    "Mode": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Layers": {},
  "FileSystemConfigs": {},
  "ImageConfig": {
    "EntryPoint": {},
    "Command": {},
    "WorkingDirectory": {}
  },
  "CodeSigningConfigArn": {},
  "Architectures": {},
  "EphemeralStorage": {
    "Size": {}
  },
  "SnapStart": {
    "ApplyOn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionName|object|true|none|none|
|Runtime|object|false|none|none|
|Role|object|true|none|none|
|Handler|object|false|none|none|
|Code|object|true|none|none|
|Description|object|false|none|none|
|Timeout|object|false|none|none|
|MemorySize|object|false|none|none|
|Publish|object|false|none|none|
|VpcConfig|object|false|none|none|
|PackageType|object|false|none|none|
|DeadLetterConfig|object|false|none|none|
|Environment|object|false|none|none|
|KMSKeyArn|object|false|none|none|
|TracingConfig|object|false|none|none|
|Tags|object|false|none|none|
|Layers|object|false|none|none|
|FileSystemConfigs|object|false|none|none|
|ImageConfig|object|false|none|none|
|CodeSigningConfigArn|object|false|none|none|
|Architectures|object|false|none|none|
|EphemeralStorage|object|false|none|none|
|SnapStart|object|false|none|none|

<h2 id="tocS_FunctionUrlQualifier">FunctionUrlQualifier</h2>
<!-- backwards compatibility -->
<a id="schemafunctionurlqualifier"></a>
<a id="schema_FunctionUrlQualifier"></a>
<a id="tocSfunctionurlqualifier"></a>
<a id="tocsfunctionurlqualifier"></a>

```json
"string"
```

<h2 id="tocS_InvokeMode">InvokeMode</h2>
<!-- backwards compatibility -->
<a id="schemainvokemode"></a>
<a id="schema_InvokeMode"></a>
<a id="tocSinvokemode"></a>
<a id="tocsinvokemode"></a>

```json
"BUFFERED"
```

<h2 id="tocS_CreateFunctionUrlConfigRequest">CreateFunctionUrlConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefunctionurlconfigrequest"></a>
<a id="schema_CreateFunctionUrlConfigRequest"></a>
<a id="tocScreatefunctionurlconfigrequest"></a>
<a id="tocscreatefunctionurlconfigrequest"></a>

```json
{
  "AuthType": {},
  "Cors": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "InvokeMode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthType|object|true|none|none|
|Cors|object|false|none|none|
|InvokeMode|object|false|none|none|

<h2 id="tocS_FunctionUrl">FunctionUrl</h2>
<!-- backwards compatibility -->
<a id="schemafunctionurl"></a>
<a id="schema_FunctionUrl"></a>
<a id="tocSfunctionurl"></a>
<a id="tocsfunctionurl"></a>

```json
"stringstringstringstringstringstringstri"
```

<h2 id="tocS_DeleteAliasRequest">DeleteAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletealiasrequest"></a>
<a id="schema_DeleteAliasRequest"></a>
<a id="tocSdeletealiasrequest"></a>
<a id="tocsdeletealiasrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteCodeSigningConfigRequest">DeleteCodeSigningConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecodesigningconfigrequest"></a>
<a id="schema_DeleteCodeSigningConfigRequest"></a>
<a id="tocSdeletecodesigningconfigrequest"></a>
<a id="tocsdeletecodesigningconfigrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteEventSourceMappingRequest">DeleteEventSourceMappingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventsourcemappingrequest"></a>
<a id="schema_DeleteEventSourceMappingRequest"></a>
<a id="tocSdeleteeventsourcemappingrequest"></a>
<a id="tocsdeleteeventsourcemappingrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteFunctionCodeSigningConfigRequest">DeleteFunctionCodeSigningConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefunctioncodesigningconfigrequest"></a>
<a id="schema_DeleteFunctionCodeSigningConfigRequest"></a>
<a id="tocSdeletefunctioncodesigningconfigrequest"></a>
<a id="tocsdeletefunctioncodesigningconfigrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteFunctionConcurrencyRequest">DeleteFunctionConcurrencyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefunctionconcurrencyrequest"></a>
<a id="schema_DeleteFunctionConcurrencyRequest"></a>
<a id="tocSdeletefunctionconcurrencyrequest"></a>
<a id="tocsdeletefunctionconcurrencyrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteFunctionEventInvokeConfigRequest">DeleteFunctionEventInvokeConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefunctioneventinvokeconfigrequest"></a>
<a id="schema_DeleteFunctionEventInvokeConfigRequest"></a>
<a id="tocSdeletefunctioneventinvokeconfigrequest"></a>
<a id="tocsdeletefunctioneventinvokeconfigrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteFunctionRequest">DeleteFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefunctionrequest"></a>
<a id="schema_DeleteFunctionRequest"></a>
<a id="tocSdeletefunctionrequest"></a>
<a id="tocsdeletefunctionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteFunctionUrlConfigRequest">DeleteFunctionUrlConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefunctionurlconfigrequest"></a>
<a id="schema_DeleteFunctionUrlConfigRequest"></a>
<a id="tocSdeletefunctionurlconfigrequest"></a>
<a id="tocsdeletefunctionurlconfigrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteLayerVersionRequest">DeleteLayerVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelayerversionrequest"></a>
<a id="schema_DeleteLayerVersionRequest"></a>
<a id="tocSdeletelayerversionrequest"></a>
<a id="tocsdeletelayerversionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteProvisionedConcurrencyConfigRequest">DeleteProvisionedConcurrencyConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprovisionedconcurrencyconfigrequest"></a>
<a id="schema_DeleteProvisionedConcurrencyConfigRequest"></a>
<a id="tocSdeleteprovisionedconcurrencyconfigrequest"></a>
<a id="tocsdeleteprovisionedconcurrencyconfigrequest"></a>

```json
{}
```

<h2 id="tocS_DestinationArn">DestinationArn</h2>
<!-- backwards compatibility -->
<a id="schemadestinationarn"></a>
<a id="schema_DestinationArn"></a>
<a id="tocSdestinationarn"></a>
<a id="tocsdestinationarn"></a>

```json
"string"
```

<h2 id="tocS_EndPointType">EndPointType</h2>
<!-- backwards compatibility -->
<a id="schemaendpointtype"></a>
<a id="schema_EndPointType"></a>
<a id="tocSendpointtype"></a>
<a id="tocsendpointtype"></a>

```json
"KAFKA_BOOTSTRAP_SERVERS"
```

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
"string"
```

<h2 id="tocS_EndpointLists">EndpointLists</h2>
<!-- backwards compatibility -->
<a id="schemaendpointlists"></a>
<a id="schema_EndpointLists"></a>
<a id="tocSendpointlists"></a>
<a id="tocsendpointlists"></a>

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

<h2 id="tocS_EnvironmentError">EnvironmentError</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmenterror"></a>
<a id="schema_EnvironmentError"></a>
<a id="tocSenvironmenterror"></a>
<a id="tocsenvironmenterror"></a>

```json
{
  "ErrorCode": {},
  "Message": {}
}
```

Error messages for environment variables that couldn't be applied.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_EnvironmentResponse">EnvironmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentresponse"></a>
<a id="schema_EnvironmentResponse"></a>
<a id="tocSenvironmentresponse"></a>
<a id="tocsenvironmentresponse"></a>

```json
{
  "Variables": {
    "property1": "password",
    "property2": "password"
  },
  "Error": {
    "ErrorCode": {},
    "Message": {}
  }
}
```

The results of an operation to update or read environment variables. If the operation succeeds, the response contains the environment variables. If it fails, the response contains details about the error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Variables|object|false|none|none|
|Error|object|false|none|none|

<h2 id="tocS_EnvironmentVariableName">EnvironmentVariableName</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentvariablename"></a>
<a id="schema_EnvironmentVariableName"></a>
<a id="tocSenvironmentvariablename"></a>
<a id="tocsenvironmentvariablename"></a>

```json
"password"
```

<h2 id="tocS_EnvironmentVariableValue">EnvironmentVariableValue</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentvariablevalue"></a>
<a id="schema_EnvironmentVariableValue"></a>
<a id="tocSenvironmentvariablevalue"></a>
<a id="tocsenvironmentvariablevalue"></a>

```json
"password"
```

<h2 id="tocS_EventSourceMappingsList">EventSourceMappingsList</h2>
<!-- backwards compatibility -->
<a id="schemaeventsourcemappingslist"></a>
<a id="schema_EventSourceMappingsList"></a>
<a id="tocSeventsourcemappingslist"></a>
<a id="tocseventsourcemappingslist"></a>

```json
[
  {
    "UUID": {},
    "StartingPosition": {},
    "StartingPositionTimestamp": {},
    "BatchSize": {},
    "MaximumBatchingWindowInSeconds": {},
    "ParallelizationFactor": {},
    "EventSourceArn": {},
    "FilterCriteria": {
      "Filters": {}
    },
    "FunctionArn": {},
    "LastModified": {},
    "LastProcessingResult": {},
    "State": {},
    "StateTransitionReason": {},
    "DestinationConfig": {
      "OnSuccess": {
        "Destination": {}
      },
      "OnFailure": {
        "Destination": {}
      }
    },
    "Topics": {},
    "Queues": {},
    "SourceAccessConfigurations": {},
    "SelfManagedEventSource": {
      "Endpoints": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      }
    },
    "MaximumRecordAgeInSeconds": {},
    "BisectBatchOnFunctionError": {},
    "MaximumRetryAttempts": {},
    "TumblingWindowInSeconds": {},
    "FunctionResponseTypes": {},
    "AmazonManagedKafkaEventSourceConfig": {
      "ConsumerGroupId": {}
    },
    "SelfManagedKafkaEventSourceConfig": {
      "ConsumerGroupId": {}
    },
    "ScalingConfig": {
      "MaximumConcurrency": {}
    },
    "DocumentDBEventSourceConfig": {
      "DatabaseName": {},
      "CollectionName": {},
      "FullDocument": {}
    }
  }
]
```

<h2 id="tocS_FileSystemArn">FileSystemArn</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemarn"></a>
<a id="schema_FileSystemArn"></a>
<a id="tocSfilesystemarn"></a>
<a id="tocsfilesystemarn"></a>

```json
"string"
```

<h2 id="tocS_LocalMountPath">LocalMountPath</h2>
<!-- backwards compatibility -->
<a id="schemalocalmountpath"></a>
<a id="schema_LocalMountPath"></a>
<a id="tocSlocalmountpath"></a>
<a id="tocslocalmountpath"></a>

```json
"string"
```

<h2 id="tocS_Pattern">Pattern</h2>
<!-- backwards compatibility -->
<a id="schemapattern"></a>
<a id="schema_Pattern"></a>
<a id="tocSpattern"></a>
<a id="tocspattern"></a>

```json
"string"
```

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "Pattern": {}
}
```

 A structure within a <code>FilterCriteria</code> object that defines an event filtering pattern.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Pattern|object|false|none|none|

<h2 id="tocS_FunctionArnList">FunctionArnList</h2>
<!-- backwards compatibility -->
<a id="schemafunctionarnlist"></a>
<a id="schema_FunctionArnList"></a>
<a id="tocSfunctionarnlist"></a>
<a id="tocsfunctionarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FunctionCodeLocation">FunctionCodeLocation</h2>
<!-- backwards compatibility -->
<a id="schemafunctioncodelocation"></a>
<a id="schema_FunctionCodeLocation"></a>
<a id="tocSfunctioncodelocation"></a>
<a id="tocsfunctioncodelocation"></a>

```json
{
  "RepositoryType": {},
  "Location": {},
  "ImageUri": {},
  "ResolvedImageUri": {}
}
```

Details about a function's deployment package.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RepositoryType|object|false|none|none|
|Location|object|false|none|none|
|ImageUri|object|false|none|none|
|ResolvedImageUri|object|false|none|none|

<h2 id="tocS_NamespacedFunctionName">NamespacedFunctionName</h2>
<!-- backwards compatibility -->
<a id="schemanamespacedfunctionname"></a>
<a id="schema_NamespacedFunctionName"></a>
<a id="tocSnamespacedfunctionname"></a>
<a id="tocsnamespacedfunctionname"></a>

```json
"string"
```

<h2 id="tocS_NameSpacedFunctionArn">NameSpacedFunctionArn</h2>
<!-- backwards compatibility -->
<a id="schemanamespacedfunctionarn"></a>
<a id="schema_NameSpacedFunctionArn"></a>
<a id="tocSnamespacedfunctionarn"></a>
<a id="tocsnamespacedfunctionarn"></a>

```json
"string"
```

<h2 id="tocS_VpcConfigResponse">VpcConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfigresponse"></a>
<a id="schema_VpcConfigResponse"></a>
<a id="tocSvpcconfigresponse"></a>
<a id="tocsvpcconfigresponse"></a>

```json
{
  "SubnetIds": {},
  "SecurityGroupIds": {},
  "VpcId": {}
}
```

The VPC security groups and subnets that are attached to a Lambda function.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetIds|object|false|none|none|
|SecurityGroupIds|object|false|none|none|
|VpcId|object|false|none|none|

<h2 id="tocS_TracingConfigResponse">TracingConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schematracingconfigresponse"></a>
<a id="schema_TracingConfigResponse"></a>
<a id="tocStracingconfigresponse"></a>
<a id="tocstracingconfigresponse"></a>

```json
{
  "Mode": {}
}
```

The function's X-Ray tracing configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mode|object|false|none|none|

<h2 id="tocS_LayersReferenceList">LayersReferenceList</h2>
<!-- backwards compatibility -->
<a id="schemalayersreferencelist"></a>
<a id="schema_LayersReferenceList"></a>
<a id="tocSlayersreferencelist"></a>
<a id="tocslayersreferencelist"></a>

```json
[
  {
    "Arn": {},
    "CodeSize": {},
    "SigningProfileVersionArn": {},
    "SigningJobArn": {}
  }
]
```

<h2 id="tocS_State">State</h2>
<!-- backwards compatibility -->
<a id="schemastate"></a>
<a id="schema_State"></a>
<a id="tocSstate"></a>
<a id="tocsstate"></a>

```json
"Pending"
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

<h2 id="tocS_StateReasonCode">StateReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemastatereasoncode"></a>
<a id="schema_StateReasonCode"></a>
<a id="tocSstatereasoncode"></a>
<a id="tocsstatereasoncode"></a>

```json
"Idle"
```

<h2 id="tocS_LastUpdateStatus">LastUpdateStatus</h2>
<!-- backwards compatibility -->
<a id="schemalastupdatestatus"></a>
<a id="schema_LastUpdateStatus"></a>
<a id="tocSlastupdatestatus"></a>
<a id="tocslastupdatestatus"></a>

```json
"Successful"
```

<h2 id="tocS_LastUpdateStatusReason">LastUpdateStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemalastupdatestatusreason"></a>
<a id="schema_LastUpdateStatusReason"></a>
<a id="tocSlastupdatestatusreason"></a>
<a id="tocslastupdatestatusreason"></a>

```json
"string"
```

<h2 id="tocS_LastUpdateStatusReasonCode">LastUpdateStatusReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemalastupdatestatusreasoncode"></a>
<a id="schema_LastUpdateStatusReasonCode"></a>
<a id="tocSlastupdatestatusreasoncode"></a>
<a id="tocslastupdatestatusreasoncode"></a>

```json
"EniLimitExceeded"
```

<h2 id="tocS_ImageConfigResponse">ImageConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimageconfigresponse"></a>
<a id="schema_ImageConfigResponse"></a>
<a id="tocSimageconfigresponse"></a>
<a id="tocsimageconfigresponse"></a>

```json
{
  "ImageConfig": {
    "EntryPoint": {},
    "Command": {},
    "WorkingDirectory": {}
  },
  "Error": {
    "ErrorCode": {},
    "Message": {}
  }
}
```

Response to a <code>GetFunctionConfiguration</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageConfig|object|false|none|none|
|Error|object|false|none|none|

<h2 id="tocS_SnapStartResponse">SnapStartResponse</h2>
<!-- backwards compatibility -->
<a id="schemasnapstartresponse"></a>
<a id="schema_SnapStartResponse"></a>
<a id="tocSsnapstartresponse"></a>
<a id="tocssnapstartresponse"></a>

```json
{
  "ApplyOn": {},
  "OptimizationStatus": {}
}
```

The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">SnapStart</a> setting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplyOn|object|false|none|none|
|OptimizationStatus|object|false|none|none|

<h2 id="tocS_RuntimeVersionConfig">RuntimeVersionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeversionconfig"></a>
<a id="schema_RuntimeVersionConfig"></a>
<a id="tocSruntimeversionconfig"></a>
<a id="tocsruntimeversionconfig"></a>

```json
{
  "RuntimeVersionArn": {},
  "Error": {
    "ErrorCode": {},
    "Message": {}
  }
}
```

The ARN of the runtime and any errors that occured.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuntimeVersionArn|object|false|none|none|
|Error|object|false|none|none|

<h2 id="tocS_MaximumRetryAttempts">MaximumRetryAttempts</h2>
<!-- backwards compatibility -->
<a id="schemamaximumretryattempts"></a>
<a id="schema_MaximumRetryAttempts"></a>
<a id="tocSmaximumretryattempts"></a>
<a id="tocsmaximumretryattempts"></a>

```json
0
```

<h2 id="tocS_MaximumEventAgeInSeconds">MaximumEventAgeInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemamaximumeventageinseconds"></a>
<a id="schema_MaximumEventAgeInSeconds"></a>
<a id="tocSmaximumeventageinseconds"></a>
<a id="tocsmaximumeventageinseconds"></a>

```json
60
```

<h2 id="tocS_FunctionEventInvokeConfigList">FunctionEventInvokeConfigList</h2>
<!-- backwards compatibility -->
<a id="schemafunctioneventinvokeconfiglist"></a>
<a id="schema_FunctionEventInvokeConfigList"></a>
<a id="tocSfunctioneventinvokeconfiglist"></a>
<a id="tocsfunctioneventinvokeconfiglist"></a>

```json
[
  {
    "LastModified": {},
    "FunctionArn": {},
    "MaximumRetryAttempts": {},
    "MaximumEventAgeInSeconds": {},
    "DestinationConfig": {
      "OnSuccess": {
        "Destination": {}
      },
      "OnFailure": {
        "Destination": {}
      }
    }
  }
]
```

<h2 id="tocS_FunctionList">FunctionList</h2>
<!-- backwards compatibility -->
<a id="schemafunctionlist"></a>
<a id="schema_FunctionList"></a>
<a id="tocSfunctionlist"></a>
<a id="tocsfunctionlist"></a>

```json
[
  {
    "FunctionName": {},
    "FunctionArn": {},
    "Runtime": {},
    "Role": {},
    "Handler": {},
    "CodeSize": {},
    "Description": {},
    "Timeout": {},
    "MemorySize": {},
    "LastModified": {},
    "CodeSha256": {},
    "Version": {},
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {},
      "VpcId": {}
    },
    "DeadLetterConfig": {
      "TargetArn": {}
    },
    "Environment": {
      "Variables": {
        "property1": "password",
        "property2": "password"
      },
      "Error": {
        "ErrorCode": {},
        "Message": {}
      }
    },
    "KMSKeyArn": {},
    "TracingConfig": {
      "Mode": {}
    },
    "MasterArn": {},
    "RevisionId": {},
    "Layers": {},
    "State": {},
    "StateReason": {},
    "StateReasonCode": {},
    "LastUpdateStatus": {},
    "LastUpdateStatusReason": {},
    "LastUpdateStatusReasonCode": {},
    "FileSystemConfigs": {},
    "PackageType": {},
    "ImageConfigResponse": {
      "ImageConfig": {
        "EntryPoint": {},
        "Command": {},
        "WorkingDirectory": {}
      },
      "Error": {
        "ErrorCode": {},
        "Message": {}
      }
    },
    "SigningProfileVersionArn": {},
    "SigningJobArn": {},
    "Architectures": {},
    "EphemeralStorage": {
      "Size": {}
    },
    "SnapStart": {
      "ApplyOn": {},
      "OptimizationStatus": {}
    },
    "RuntimeVersionConfig": {
      "RuntimeVersionArn": {},
      "Error": {
        "ErrorCode": {},
        "Message": {}
      }
    }
  }
]
```

<h2 id="tocS_FunctionUrlConfig">FunctionUrlConfig</h2>
<!-- backwards compatibility -->
<a id="schemafunctionurlconfig"></a>
<a id="schema_FunctionUrlConfig"></a>
<a id="tocSfunctionurlconfig"></a>
<a id="tocsfunctionurlconfig"></a>

```json
{
  "FunctionUrl": {},
  "FunctionArn": {},
  "CreationTime": {},
  "LastModifiedTime": {},
  "Cors": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "AuthType": {},
  "InvokeMode": {}
}
```

Details about a Lambda function URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionUrl|object|true|none|none|
|FunctionArn|object|true|none|none|
|CreationTime|object|true|none|none|
|LastModifiedTime|object|true|none|none|
|Cors|object|false|none|none|
|AuthType|object|true|none|none|
|InvokeMode|object|false|none|none|

<h2 id="tocS_FunctionUrlConfigList">FunctionUrlConfigList</h2>
<!-- backwards compatibility -->
<a id="schemafunctionurlconfiglist"></a>
<a id="schema_FunctionUrlConfigList"></a>
<a id="tocSfunctionurlconfiglist"></a>
<a id="tocsfunctionurlconfiglist"></a>

```json
[
  {
    "FunctionUrl": {},
    "FunctionArn": {},
    "CreationTime": {},
    "LastModifiedTime": {},
    "Cors": {
      "AllowCredentials": {},
      "AllowHeaders": {},
      "AllowMethods": {},
      "AllowOrigins": {},
      "ExposeHeaders": {},
      "MaxAge": {}
    },
    "AuthType": {},
    "InvokeMode": {}
  }
]
```

<h2 id="tocS_FunctionVersion">FunctionVersion</h2>
<!-- backwards compatibility -->
<a id="schemafunctionversion"></a>
<a id="schema_FunctionVersion"></a>
<a id="tocSfunctionversion"></a>
<a id="tocsfunctionversion"></a>

```json
"ALL"
```

<h2 id="tocS_GetAccountSettingsRequest">GetAccountSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountsettingsrequest"></a>
<a id="schema_GetAccountSettingsRequest"></a>
<a id="tocSgetaccountsettingsrequest"></a>
<a id="tocsgetaccountsettingsrequest"></a>

```json
{}
```

<h2 id="tocS_GetAliasRequest">GetAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaliasrequest"></a>
<a id="schema_GetAliasRequest"></a>
<a id="tocSgetaliasrequest"></a>
<a id="tocsgetaliasrequest"></a>

```json
{}
```

<h2 id="tocS_GetCodeSigningConfigRequest">GetCodeSigningConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcodesigningconfigrequest"></a>
<a id="schema_GetCodeSigningConfigRequest"></a>
<a id="tocSgetcodesigningconfigrequest"></a>
<a id="tocsgetcodesigningconfigrequest"></a>

```json
{}
```

<h2 id="tocS_GetEventSourceMappingRequest">GetEventSourceMappingRequest</h2>
<!-- backwards compatibility -->
<a id="schemageteventsourcemappingrequest"></a>
<a id="schema_GetEventSourceMappingRequest"></a>
<a id="tocSgeteventsourcemappingrequest"></a>
<a id="tocsgeteventsourcemappingrequest"></a>

```json
{}
```

<h2 id="tocS_GetFunctionCodeSigningConfigRequest">GetFunctionCodeSigningConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfunctioncodesigningconfigrequest"></a>
<a id="schema_GetFunctionCodeSigningConfigRequest"></a>
<a id="tocSgetfunctioncodesigningconfigrequest"></a>
<a id="tocsgetfunctioncodesigningconfigrequest"></a>

```json
{}
```

<h2 id="tocS_GetFunctionConcurrencyRequest">GetFunctionConcurrencyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfunctionconcurrencyrequest"></a>
<a id="schema_GetFunctionConcurrencyRequest"></a>
<a id="tocSgetfunctionconcurrencyrequest"></a>
<a id="tocsgetfunctionconcurrencyrequest"></a>

```json
{}
```

<h2 id="tocS_GetFunctionConfigurationRequest">GetFunctionConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfunctionconfigurationrequest"></a>
<a id="schema_GetFunctionConfigurationRequest"></a>
<a id="tocSgetfunctionconfigurationrequest"></a>
<a id="tocsgetfunctionconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_GetFunctionEventInvokeConfigRequest">GetFunctionEventInvokeConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfunctioneventinvokeconfigrequest"></a>
<a id="schema_GetFunctionEventInvokeConfigRequest"></a>
<a id="tocSgetfunctioneventinvokeconfigrequest"></a>
<a id="tocsgetfunctioneventinvokeconfigrequest"></a>

```json
{}
```

<h2 id="tocS_GetFunctionRequest">GetFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfunctionrequest"></a>
<a id="schema_GetFunctionRequest"></a>
<a id="tocSgetfunctionrequest"></a>
<a id="tocsgetfunctionrequest"></a>

```json
{}
```

<h2 id="tocS_GetFunctionUrlConfigRequest">GetFunctionUrlConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfunctionurlconfigrequest"></a>
<a id="schema_GetFunctionUrlConfigRequest"></a>
<a id="tocSgetfunctionurlconfigrequest"></a>
<a id="tocsgetfunctionurlconfigrequest"></a>

```json
{}
```

<h2 id="tocS_GetLayerVersionByArnRequest">GetLayerVersionByArnRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlayerversionbyarnrequest"></a>
<a id="schema_GetLayerVersionByArnRequest"></a>
<a id="tocSgetlayerversionbyarnrequest"></a>
<a id="tocsgetlayerversionbyarnrequest"></a>

```json
{}
```

<h2 id="tocS_GetLayerVersionPolicyRequest">GetLayerVersionPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlayerversionpolicyrequest"></a>
<a id="schema_GetLayerVersionPolicyRequest"></a>
<a id="tocSgetlayerversionpolicyrequest"></a>
<a id="tocsgetlayerversionpolicyrequest"></a>

```json
{}
```

<h2 id="tocS_GetLayerVersionRequest">GetLayerVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlayerversionrequest"></a>
<a id="schema_GetLayerVersionRequest"></a>
<a id="tocSgetlayerversionrequest"></a>
<a id="tocsgetlayerversionrequest"></a>

```json
{}
```

<h2 id="tocS_LayerVersionContentOutput">LayerVersionContentOutput</h2>
<!-- backwards compatibility -->
<a id="schemalayerversioncontentoutput"></a>
<a id="schema_LayerVersionContentOutput"></a>
<a id="tocSlayerversioncontentoutput"></a>
<a id="tocslayerversioncontentoutput"></a>

```json
{
  "Location": {},
  "CodeSha256": {},
  "CodeSize": {},
  "SigningProfileVersionArn": {},
  "SigningJobArn": {}
}
```

Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Location|object|false|none|none|
|CodeSha256|object|false|none|none|
|CodeSize|object|false|none|none|
|SigningProfileVersionArn|object|false|none|none|
|SigningJobArn|object|false|none|none|

<h2 id="tocS_LayerArn">LayerArn</h2>
<!-- backwards compatibility -->
<a id="schemalayerarn"></a>
<a id="schema_LayerArn"></a>
<a id="tocSlayerarn"></a>
<a id="tocslayerarn"></a>

```json
"string"
```

<h2 id="tocS_LicenseInfo">LicenseInfo</h2>
<!-- backwards compatibility -->
<a id="schemalicenseinfo"></a>
<a id="schema_LicenseInfo"></a>
<a id="tocSlicenseinfo"></a>
<a id="tocslicenseinfo"></a>

```json
"string"
```

<h2 id="tocS_GetPolicyRequest">GetPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpolicyrequest"></a>
<a id="schema_GetPolicyRequest"></a>
<a id="tocSgetpolicyrequest"></a>
<a id="tocsgetpolicyrequest"></a>

```json
{}
```

<h2 id="tocS_GetProvisionedConcurrencyConfigRequest">GetProvisionedConcurrencyConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetprovisionedconcurrencyconfigrequest"></a>
<a id="schema_GetProvisionedConcurrencyConfigRequest"></a>
<a id="tocSgetprovisionedconcurrencyconfigrequest"></a>
<a id="tocsgetprovisionedconcurrencyconfigrequest"></a>

```json
{}
```

<h2 id="tocS_PositiveInteger">PositiveInteger</h2>
<!-- backwards compatibility -->
<a id="schemapositiveinteger"></a>
<a id="schema_PositiveInteger"></a>
<a id="tocSpositiveinteger"></a>
<a id="tocspositiveinteger"></a>

```json
1
```

<h2 id="tocS_NonNegativeInteger">NonNegativeInteger</h2>
<!-- backwards compatibility -->
<a id="schemanonnegativeinteger"></a>
<a id="schema_NonNegativeInteger"></a>
<a id="tocSnonnegativeinteger"></a>
<a id="tocsnonnegativeinteger"></a>

```json
0
```

<h2 id="tocS_ProvisionedConcurrencyStatusEnum">ProvisionedConcurrencyStatusEnum</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedconcurrencystatusenum"></a>
<a id="schema_ProvisionedConcurrencyStatusEnum"></a>
<a id="tocSprovisionedconcurrencystatusenum"></a>
<a id="tocsprovisionedconcurrencystatusenum"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_GetRuntimeManagementConfigRequest">GetRuntimeManagementConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetruntimemanagementconfigrequest"></a>
<a id="schema_GetRuntimeManagementConfigRequest"></a>
<a id="tocSgetruntimemanagementconfigrequest"></a>
<a id="tocsgetruntimemanagementconfigrequest"></a>

```json
{}
```

<h2 id="tocS_UpdateRuntimeOn">UpdateRuntimeOn</h2>
<!-- backwards compatibility -->
<a id="schemaupdateruntimeon"></a>
<a id="schema_UpdateRuntimeOn"></a>
<a id="tocSupdateruntimeon"></a>
<a id="tocsupdateruntimeon"></a>

```json
"Auto"
```

<h2 id="tocS_RuntimeVersionArn">RuntimeVersionArn</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeversionarn"></a>
<a id="schema_RuntimeVersionArn"></a>
<a id="tocSruntimeversionarn"></a>
<a id="tocsruntimeversionarn"></a>

```json
"stringstringstringstringst"
```

<h2 id="tocS_Header">Header</h2>
<!-- backwards compatibility -->
<a id="schemaheader"></a>
<a id="schema_Header"></a>
<a id="tocSheader"></a>
<a id="tocsheader"></a>

```json
"string"
```

<h2 id="tocS_HttpStatus">HttpStatus</h2>
<!-- backwards compatibility -->
<a id="schemahttpstatus"></a>
<a id="schema_HttpStatus"></a>
<a id="tocShttpstatus"></a>
<a id="tocshttpstatus"></a>

```json
0
```

<h2 id="tocS_ImageConfigError">ImageConfigError</h2>
<!-- backwards compatibility -->
<a id="schemaimageconfigerror"></a>
<a id="schema_ImageConfigError"></a>
<a id="tocSimageconfigerror"></a>
<a id="tocsimageconfigerror"></a>

```json
{
  "ErrorCode": {},
  "Message": {}
}
```

Error response to <code>GetFunctionConfiguration</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_InvocationType">InvocationType</h2>
<!-- backwards compatibility -->
<a id="schemainvocationtype"></a>
<a id="schema_InvocationType"></a>
<a id="tocSinvocationtype"></a>
<a id="tocsinvocationtype"></a>

```json
"Event"
```

<h2 id="tocS_LogType">LogType</h2>
<!-- backwards compatibility -->
<a id="schemalogtype"></a>
<a id="schema_LogType"></a>
<a id="tocSlogtype"></a>
<a id="tocslogtype"></a>

```json
"None"
```

<h2 id="tocS_InvocationRequest">InvocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemainvocationrequest"></a>
<a id="schema_InvocationRequest"></a>
<a id="tocSinvocationrequest"></a>
<a id="tocsinvocationrequest"></a>

```json
{
  "Payload": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Payload|object|false|none|none|

<h2 id="tocS_InvokeAsyncRequest">InvokeAsyncRequest</h2>
<!-- backwards compatibility -->
<a id="schemainvokeasyncrequest"></a>
<a id="schema_InvokeAsyncRequest"></a>
<a id="tocSinvokeasyncrequest"></a>
<a id="tocsinvokeasyncrequest"></a>

```json
{
  "InvokeArgs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InvokeArgs|object|true|none|none|

<h2 id="tocS_InvokeResponseStreamUpdate">InvokeResponseStreamUpdate</h2>
<!-- backwards compatibility -->
<a id="schemainvokeresponsestreamupdate"></a>
<a id="schema_InvokeResponseStreamUpdate"></a>
<a id="tocSinvokeresponsestreamupdate"></a>
<a id="tocsinvokeresponsestreamupdate"></a>

```json
{
  "Payload": {}
}
```

A chunk of the streamed response payload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Payload|object|false|none|none|

<h2 id="tocS_InvokeWithResponseStreamCompleteEvent">InvokeWithResponseStreamCompleteEvent</h2>
<!-- backwards compatibility -->
<a id="schemainvokewithresponsestreamcompleteevent"></a>
<a id="schema_InvokeWithResponseStreamCompleteEvent"></a>
<a id="tocSinvokewithresponsestreamcompleteevent"></a>
<a id="tocsinvokewithresponsestreamcompleteevent"></a>

```json
{
  "ErrorCode": {},
  "ErrorDetails": {},
  "LogResult": {}
}
```

A response confirming that the event stream is complete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|ErrorDetails|object|false|none|none|
|LogResult|object|false|none|none|

<h2 id="tocS_ResponseStreamingInvocationType">ResponseStreamingInvocationType</h2>
<!-- backwards compatibility -->
<a id="schemaresponsestreaminginvocationtype"></a>
<a id="schema_ResponseStreamingInvocationType"></a>
<a id="tocSresponsestreaminginvocationtype"></a>
<a id="tocsresponsestreaminginvocationtype"></a>

```json
"RequestResponse"
```

<h2 id="tocS_InvokeWithResponseStreamRequest">InvokeWithResponseStreamRequest</h2>
<!-- backwards compatibility -->
<a id="schemainvokewithresponsestreamrequest"></a>
<a id="schema_InvokeWithResponseStreamRequest"></a>
<a id="tocSinvokewithresponsestreamrequest"></a>
<a id="tocsinvokewithresponsestreamrequest"></a>

```json
{
  "Payload": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Payload|object|false|none|none|

<h2 id="tocS_InvokeWithResponseStreamResponseEvent">InvokeWithResponseStreamResponseEvent</h2>
<!-- backwards compatibility -->
<a id="schemainvokewithresponsestreamresponseevent"></a>
<a id="schema_InvokeWithResponseStreamResponseEvent"></a>
<a id="tocSinvokewithresponsestreamresponseevent"></a>
<a id="tocsinvokewithresponsestreamresponseevent"></a>

```json
{
  "PayloadChunk": {
    "Payload": {}
  },
  "InvokeComplete": {
    "ErrorCode": {},
    "ErrorDetails": {},
    "LogResult": {}
  }
}
```

An object that includes a chunk of the response payload. When the stream has ended, Lambda includes a <code>InvokeComplete</code> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PayloadChunk|object|false|none|none|
|InvokeComplete|object|false|none|none|

<h2 id="tocS_Layer">Layer</h2>
<!-- backwards compatibility -->
<a id="schemalayer"></a>
<a id="schema_Layer"></a>
<a id="tocSlayer"></a>
<a id="tocslayer"></a>

```json
{
  "Arn": {},
  "CodeSize": {},
  "SigningProfileVersionArn": {},
  "SigningJobArn": {}
}
```

An <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CodeSize|object|false|none|none|
|SigningProfileVersionArn|object|false|none|none|
|SigningJobArn|object|false|none|none|

<h2 id="tocS_LayerVersionContentInput">LayerVersionContentInput</h2>
<!-- backwards compatibility -->
<a id="schemalayerversioncontentinput"></a>
<a id="schema_LayerVersionContentInput"></a>
<a id="tocSlayerversioncontentinput"></a>
<a id="tocslayerversioncontentinput"></a>

```json
{
  "S3Bucket": {},
  "S3Key": {},
  "S3ObjectVersion": {},
  "ZipFile": {}
}
```

A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Bucket|object|false|none|none|
|S3Key|object|false|none|none|
|S3ObjectVersion|object|false|none|none|
|ZipFile|object|false|none|none|

<h2 id="tocS_LayerVersionsListItem">LayerVersionsListItem</h2>
<!-- backwards compatibility -->
<a id="schemalayerversionslistitem"></a>
<a id="schema_LayerVersionsListItem"></a>
<a id="tocSlayerversionslistitem"></a>
<a id="tocslayerversionslistitem"></a>

```json
{
  "LayerVersionArn": {},
  "Version": {},
  "Description": {},
  "CreatedDate": {},
  "CompatibleRuntimes": {},
  "LicenseInfo": {},
  "CompatibleArchitectures": {}
}
```

Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LayerVersionArn|object|false|none|none|
|Version|object|false|none|none|
|Description|object|false|none|none|
|CreatedDate|object|false|none|none|
|CompatibleRuntimes|object|false|none|none|
|LicenseInfo|object|false|none|none|
|CompatibleArchitectures|object|false|none|none|

<h2 id="tocS_LayerVersionsList">LayerVersionsList</h2>
<!-- backwards compatibility -->
<a id="schemalayerversionslist"></a>
<a id="schema_LayerVersionsList"></a>
<a id="tocSlayerversionslist"></a>
<a id="tocslayerversionslist"></a>

```json
[
  {
    "LayerVersionArn": {},
    "Version": {},
    "Description": {},
    "CreatedDate": {},
    "CompatibleRuntimes": {},
    "LicenseInfo": {},
    "CompatibleArchitectures": {}
  }
]
```

<h2 id="tocS_LayersListItem">LayersListItem</h2>
<!-- backwards compatibility -->
<a id="schemalayerslistitem"></a>
<a id="schema_LayersListItem"></a>
<a id="tocSlayerslistitem"></a>
<a id="tocslayerslistitem"></a>

```json
{
  "LayerName": {},
  "LayerArn": {},
  "LatestMatchingVersion": {
    "LayerVersionArn": {},
    "Version": {},
    "Description": {},
    "CreatedDate": {},
    "CompatibleRuntimes": {},
    "LicenseInfo": {},
    "CompatibleArchitectures": {}
  }
}
```

Details about an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LayerName|object|false|none|none|
|LayerArn|object|false|none|none|
|LatestMatchingVersion|object|false|none|none|

<h2 id="tocS_LayersList">LayersList</h2>
<!-- backwards compatibility -->
<a id="schemalayerslist"></a>
<a id="schema_LayersList"></a>
<a id="tocSlayerslist"></a>
<a id="tocslayerslist"></a>

```json
[
  {
    "LayerName": {},
    "LayerArn": {},
    "LatestMatchingVersion": {
      "LayerVersionArn": {},
      "Version": {},
      "Description": {},
      "CreatedDate": {},
      "CompatibleRuntimes": {},
      "LicenseInfo": {},
      "CompatibleArchitectures": {}
    }
  }
]
```

<h2 id="tocS_MaxListItems">MaxListItems</h2>
<!-- backwards compatibility -->
<a id="schemamaxlistitems"></a>
<a id="schema_MaxListItems"></a>
<a id="tocSmaxlistitems"></a>
<a id="tocsmaxlistitems"></a>

```json
1
```

<h2 id="tocS_ListAliasesRequest">ListAliasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaliasesrequest"></a>
<a id="schema_ListAliasesRequest"></a>
<a id="tocSlistaliasesrequest"></a>
<a id="tocslistaliasesrequest"></a>

```json
{}
```

<h2 id="tocS_ListCodeSigningConfigsRequest">ListCodeSigningConfigsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcodesigningconfigsrequest"></a>
<a id="schema_ListCodeSigningConfigsRequest"></a>
<a id="tocSlistcodesigningconfigsrequest"></a>
<a id="tocslistcodesigningconfigsrequest"></a>

```json
{}
```

<h2 id="tocS_ListEventSourceMappingsRequest">ListEventSourceMappingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisteventsourcemappingsrequest"></a>
<a id="schema_ListEventSourceMappingsRequest"></a>
<a id="tocSlisteventsourcemappingsrequest"></a>
<a id="tocslisteventsourcemappingsrequest"></a>

```json
{}
```

<h2 id="tocS_MaxFunctionEventInvokeConfigListItems">MaxFunctionEventInvokeConfigListItems</h2>
<!-- backwards compatibility -->
<a id="schemamaxfunctioneventinvokeconfiglistitems"></a>
<a id="schema_MaxFunctionEventInvokeConfigListItems"></a>
<a id="tocSmaxfunctioneventinvokeconfiglistitems"></a>
<a id="tocsmaxfunctioneventinvokeconfiglistitems"></a>

```json
1
```

<h2 id="tocS_ListFunctionEventInvokeConfigsRequest">ListFunctionEventInvokeConfigsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfunctioneventinvokeconfigsrequest"></a>
<a id="schema_ListFunctionEventInvokeConfigsRequest"></a>
<a id="tocSlistfunctioneventinvokeconfigsrequest"></a>
<a id="tocslistfunctioneventinvokeconfigsrequest"></a>

```json
{}
```

<h2 id="tocS_MaxItems">MaxItems</h2>
<!-- backwards compatibility -->
<a id="schemamaxitems"></a>
<a id="schema_MaxItems"></a>
<a id="tocSmaxitems"></a>
<a id="tocsmaxitems"></a>

```json
1
```

<h2 id="tocS_ListFunctionUrlConfigsRequest">ListFunctionUrlConfigsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfunctionurlconfigsrequest"></a>
<a id="schema_ListFunctionUrlConfigsRequest"></a>
<a id="tocSlistfunctionurlconfigsrequest"></a>
<a id="tocslistfunctionurlconfigsrequest"></a>

```json
{}
```

<h2 id="tocS_ListFunctionsByCodeSigningConfigRequest">ListFunctionsByCodeSigningConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfunctionsbycodesigningconfigrequest"></a>
<a id="schema_ListFunctionsByCodeSigningConfigRequest"></a>
<a id="tocSlistfunctionsbycodesigningconfigrequest"></a>
<a id="tocslistfunctionsbycodesigningconfigrequest"></a>

```json
{}
```

<h2 id="tocS_MasterRegion">MasterRegion</h2>
<!-- backwards compatibility -->
<a id="schemamasterregion"></a>
<a id="schema_MasterRegion"></a>
<a id="tocSmasterregion"></a>
<a id="tocsmasterregion"></a>

```json
"string"
```

<h2 id="tocS_ListFunctionsRequest">ListFunctionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfunctionsrequest"></a>
<a id="schema_ListFunctionsRequest"></a>
<a id="tocSlistfunctionsrequest"></a>
<a id="tocslistfunctionsrequest"></a>

```json
{}
```

<h2 id="tocS_MaxLayerListItems">MaxLayerListItems</h2>
<!-- backwards compatibility -->
<a id="schemamaxlayerlistitems"></a>
<a id="schema_MaxLayerListItems"></a>
<a id="tocSmaxlayerlistitems"></a>
<a id="tocsmaxlayerlistitems"></a>

```json
1
```

<h2 id="tocS_ListLayerVersionsRequest">ListLayerVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlayerversionsrequest"></a>
<a id="schema_ListLayerVersionsRequest"></a>
<a id="tocSlistlayerversionsrequest"></a>
<a id="tocslistlayerversionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListLayersRequest">ListLayersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlayersrequest"></a>
<a id="schema_ListLayersRequest"></a>
<a id="tocSlistlayersrequest"></a>
<a id="tocslistlayersrequest"></a>

```json
{}
```

<h2 id="tocS_MaxProvisionedConcurrencyConfigListItems">MaxProvisionedConcurrencyConfigListItems</h2>
<!-- backwards compatibility -->
<a id="schemamaxprovisionedconcurrencyconfiglistitems"></a>
<a id="schema_MaxProvisionedConcurrencyConfigListItems"></a>
<a id="tocSmaxprovisionedconcurrencyconfiglistitems"></a>
<a id="tocsmaxprovisionedconcurrencyconfiglistitems"></a>

```json
1
```

<h2 id="tocS_ListProvisionedConcurrencyConfigsRequest">ListProvisionedConcurrencyConfigsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprovisionedconcurrencyconfigsrequest"></a>
<a id="schema_ListProvisionedConcurrencyConfigsRequest"></a>
<a id="tocSlistprovisionedconcurrencyconfigsrequest"></a>
<a id="tocslistprovisionedconcurrencyconfigsrequest"></a>

```json
{}
```

<h2 id="tocS_ProvisionedConcurrencyConfigList">ProvisionedConcurrencyConfigList</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedconcurrencyconfiglist"></a>
<a id="schema_ProvisionedConcurrencyConfigList"></a>
<a id="tocSprovisionedconcurrencyconfiglist"></a>
<a id="tocsprovisionedconcurrencyconfiglist"></a>

```json
[
  {
    "FunctionArn": {},
    "RequestedProvisionedConcurrentExecutions": {},
    "AvailableProvisionedConcurrentExecutions": {},
    "AllocatedProvisionedConcurrentExecutions": {},
    "Status": {},
    "StatusReason": {},
    "LastModified": {}
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

<h2 id="tocS_ListVersionsByFunctionRequest">ListVersionsByFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistversionsbyfunctionrequest"></a>
<a id="schema_ListVersionsByFunctionRequest"></a>
<a id="tocSlistversionsbyfunctionrequest"></a>
<a id="tocslistversionsbyfunctionrequest"></a>

```json
{}
```

<h2 id="tocS_NamespacedStatementId">NamespacedStatementId</h2>
<!-- backwards compatibility -->
<a id="schemanamespacedstatementid"></a>
<a id="schema_NamespacedStatementId"></a>
<a id="tocSnamespacedstatementid"></a>
<a id="tocsnamespacedstatementid"></a>

```json
"string"
```

<h2 id="tocS_ProvisionedConcurrencyConfigListItem">ProvisionedConcurrencyConfigListItem</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedconcurrencyconfiglistitem"></a>
<a id="schema_ProvisionedConcurrencyConfigListItem"></a>
<a id="tocSprovisionedconcurrencyconfiglistitem"></a>
<a id="tocsprovisionedconcurrencyconfiglistitem"></a>

```json
{
  "FunctionArn": {},
  "RequestedProvisionedConcurrentExecutions": {},
  "AvailableProvisionedConcurrentExecutions": {},
  "AllocatedProvisionedConcurrentExecutions": {},
  "Status": {},
  "StatusReason": {},
  "LastModified": {}
}
```

Details about the provisioned concurrency configuration for a function alias or version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionArn|object|false|none|none|
|RequestedProvisionedConcurrentExecutions|object|false|none|none|
|AvailableProvisionedConcurrentExecutions|object|false|none|none|
|AllocatedProvisionedConcurrentExecutions|object|false|none|none|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|
|LastModified|object|false|none|none|

<h2 id="tocS_PublishLayerVersionRequest">PublishLayerVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublishlayerversionrequest"></a>
<a id="schema_PublishLayerVersionRequest"></a>
<a id="tocSpublishlayerversionrequest"></a>
<a id="tocspublishlayerversionrequest"></a>

```json
{
  "Description": {},
  "Content": {
    "S3Bucket": {},
    "S3Key": {},
    "S3ObjectVersion": {},
    "ZipFile": {}
  },
  "CompatibleRuntimes": {},
  "LicenseInfo": {},
  "CompatibleArchitectures": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Content|object|true|none|none|
|CompatibleRuntimes|object|false|none|none|
|LicenseInfo|object|false|none|none|
|CompatibleArchitectures|object|false|none|none|

<h2 id="tocS_PublishVersionRequest">PublishVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublishversionrequest"></a>
<a id="schema_PublishVersionRequest"></a>
<a id="tocSpublishversionrequest"></a>
<a id="tocspublishversionrequest"></a>

```json
{
  "CodeSha256": {},
  "Description": {},
  "RevisionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeSha256|object|false|none|none|
|Description|object|false|none|none|
|RevisionId|object|false|none|none|

<h2 id="tocS_PutFunctionCodeSigningConfigRequest">PutFunctionCodeSigningConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputfunctioncodesigningconfigrequest"></a>
<a id="schema_PutFunctionCodeSigningConfigRequest"></a>
<a id="tocSputfunctioncodesigningconfigrequest"></a>
<a id="tocsputfunctioncodesigningconfigrequest"></a>

```json
{
  "CodeSigningConfigArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeSigningConfigArn|object|true|none|none|

<h2 id="tocS_PutFunctionConcurrencyRequest">PutFunctionConcurrencyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputfunctionconcurrencyrequest"></a>
<a id="schema_PutFunctionConcurrencyRequest"></a>
<a id="tocSputfunctionconcurrencyrequest"></a>
<a id="tocsputfunctionconcurrencyrequest"></a>

```json
{
  "ReservedConcurrentExecutions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReservedConcurrentExecutions|object|true|none|none|

<h2 id="tocS_PutFunctionEventInvokeConfigRequest">PutFunctionEventInvokeConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputfunctioneventinvokeconfigrequest"></a>
<a id="schema_PutFunctionEventInvokeConfigRequest"></a>
<a id="tocSputfunctioneventinvokeconfigrequest"></a>
<a id="tocsputfunctioneventinvokeconfigrequest"></a>

```json
{
  "MaximumRetryAttempts": {},
  "MaximumEventAgeInSeconds": {},
  "DestinationConfig": {
    "OnSuccess": {
      "Destination": {}
    },
    "OnFailure": {
      "Destination": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaximumRetryAttempts|object|false|none|none|
|MaximumEventAgeInSeconds|object|false|none|none|
|DestinationConfig|object|false|none|none|

<h2 id="tocS_PutProvisionedConcurrencyConfigRequest">PutProvisionedConcurrencyConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputprovisionedconcurrencyconfigrequest"></a>
<a id="schema_PutProvisionedConcurrencyConfigRequest"></a>
<a id="tocSputprovisionedconcurrencyconfigrequest"></a>
<a id="tocsputprovisionedconcurrencyconfigrequest"></a>

```json
{
  "ProvisionedConcurrentExecutions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProvisionedConcurrentExecutions|object|true|none|none|

<h2 id="tocS_PutRuntimeManagementConfigRequest">PutRuntimeManagementConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputruntimemanagementconfigrequest"></a>
<a id="schema_PutRuntimeManagementConfigRequest"></a>
<a id="tocSputruntimemanagementconfigrequest"></a>
<a id="tocsputruntimemanagementconfigrequest"></a>

```json
{
  "UpdateRuntimeOn": {},
  "RuntimeVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateRuntimeOn|object|true|none|none|
|RuntimeVersionArn|object|false|none|none|

<h2 id="tocS_RemoveLayerVersionPermissionRequest">RemoveLayerVersionPermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovelayerversionpermissionrequest"></a>
<a id="schema_RemoveLayerVersionPermissionRequest"></a>
<a id="tocSremovelayerversionpermissionrequest"></a>
<a id="tocsremovelayerversionpermissionrequest"></a>

```json
{}
```

<h2 id="tocS_RemovePermissionRequest">RemovePermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovepermissionrequest"></a>
<a id="schema_RemovePermissionRequest"></a>
<a id="tocSremovepermissionrequest"></a>
<a id="tocsremovepermissionrequest"></a>

```json
{}
```

<h2 id="tocS_RuntimeVersionError">RuntimeVersionError</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeversionerror"></a>
<a id="schema_RuntimeVersionError"></a>
<a id="tocSruntimeversionerror"></a>
<a id="tocsruntimeversionerror"></a>

```json
{
  "ErrorCode": {},
  "Message": {}
}
```

Any error returned when the runtime version information for the function could not be retrieved.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_SecurityGroupId">SecurityGroupId</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupid"></a>
<a id="schema_SecurityGroupId"></a>
<a id="tocSsecuritygroupid"></a>
<a id="tocssecuritygroupid"></a>

```json
"string"
```

<h2 id="tocS_SnapStartOptimizationStatus">SnapStartOptimizationStatus</h2>
<!-- backwards compatibility -->
<a id="schemasnapstartoptimizationstatus"></a>
<a id="schema_SnapStartOptimizationStatus"></a>
<a id="tocSsnapstartoptimizationstatus"></a>
<a id="tocssnapstartoptimizationstatus"></a>

```json
"On"
```

<h2 id="tocS_SourceAccessType">SourceAccessType</h2>
<!-- backwards compatibility -->
<a id="schemasourceaccesstype"></a>
<a id="schema_SourceAccessType"></a>
<a id="tocSsourceaccesstype"></a>
<a id="tocssourceaccesstype"></a>

```json
"BASIC_AUTH"
```

<h2 id="tocS_SubnetId">SubnetId</h2>
<!-- backwards compatibility -->
<a id="schemasubnetid"></a>
<a id="schema_SubnetId"></a>
<a id="tocSsubnetid"></a>
<a id="tocssubnetid"></a>

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

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

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
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateAliasRequest">UpdateAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatealiasrequest"></a>
<a id="schema_UpdateAliasRequest"></a>
<a id="tocSupdatealiasrequest"></a>
<a id="tocsupdatealiasrequest"></a>

```json
{
  "FunctionVersion": {},
  "Description": {},
  "RoutingConfig": {
    "AdditionalVersionWeights": {
      "property1": 0,
      "property2": 0
    }
  },
  "RevisionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionVersion|object|false|none|none|
|Description|object|false|none|none|
|RoutingConfig|object|false|none|none|
|RevisionId|object|false|none|none|

<h2 id="tocS_UpdateCodeSigningConfigRequest">UpdateCodeSigningConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecodesigningconfigrequest"></a>
<a id="schema_UpdateCodeSigningConfigRequest"></a>
<a id="tocSupdatecodesigningconfigrequest"></a>
<a id="tocsupdatecodesigningconfigrequest"></a>

```json
{
  "Description": {},
  "AllowedPublishers": {
    "SigningProfileVersionArns": {}
  },
  "CodeSigningPolicies": {
    "UntrustedArtifactOnDeployment": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|AllowedPublishers|object|false|none|none|
|CodeSigningPolicies|object|false|none|none|

<h2 id="tocS_UpdateEventSourceMappingRequest">UpdateEventSourceMappingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateeventsourcemappingrequest"></a>
<a id="schema_UpdateEventSourceMappingRequest"></a>
<a id="tocSupdateeventsourcemappingrequest"></a>
<a id="tocsupdateeventsourcemappingrequest"></a>

```json
{
  "FunctionName": {},
  "Enabled": {},
  "BatchSize": {},
  "FilterCriteria": {
    "Filters": {}
  },
  "MaximumBatchingWindowInSeconds": {},
  "DestinationConfig": {
    "OnSuccess": {
      "Destination": {}
    },
    "OnFailure": {
      "Destination": {}
    }
  },
  "MaximumRecordAgeInSeconds": {},
  "BisectBatchOnFunctionError": {},
  "MaximumRetryAttempts": {},
  "ParallelizationFactor": {},
  "SourceAccessConfigurations": {},
  "TumblingWindowInSeconds": {},
  "FunctionResponseTypes": {},
  "ScalingConfig": {
    "MaximumConcurrency": {}
  },
  "DocumentDBEventSourceConfig": {
    "DatabaseName": {},
    "CollectionName": {},
    "FullDocument": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionName|object|false|none|none|
|Enabled|object|false|none|none|
|BatchSize|object|false|none|none|
|FilterCriteria|object|false|none|none|
|MaximumBatchingWindowInSeconds|object|false|none|none|
|DestinationConfig|object|false|none|none|
|MaximumRecordAgeInSeconds|object|false|none|none|
|BisectBatchOnFunctionError|object|false|none|none|
|MaximumRetryAttempts|object|false|none|none|
|ParallelizationFactor|object|false|none|none|
|SourceAccessConfigurations|object|false|none|none|
|TumblingWindowInSeconds|object|false|none|none|
|FunctionResponseTypes|object|false|none|none|
|ScalingConfig|object|false|none|none|
|DocumentDBEventSourceConfig|object|false|none|none|

<h2 id="tocS_UpdateFunctionCodeRequest">UpdateFunctionCodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefunctioncoderequest"></a>
<a id="schema_UpdateFunctionCodeRequest"></a>
<a id="tocSupdatefunctioncoderequest"></a>
<a id="tocsupdatefunctioncoderequest"></a>

```json
{
  "ZipFile": {},
  "S3Bucket": {},
  "S3Key": {},
  "S3ObjectVersion": {},
  "ImageUri": {},
  "Publish": {},
  "DryRun": {},
  "RevisionId": {},
  "Architectures": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ZipFile|object|false|none|none|
|S3Bucket|object|false|none|none|
|S3Key|object|false|none|none|
|S3ObjectVersion|object|false|none|none|
|ImageUri|object|false|none|none|
|Publish|object|false|none|none|
|DryRun|object|false|none|none|
|RevisionId|object|false|none|none|
|Architectures|object|false|none|none|

<h2 id="tocS_UpdateFunctionConfigurationRequest">UpdateFunctionConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefunctionconfigurationrequest"></a>
<a id="schema_UpdateFunctionConfigurationRequest"></a>
<a id="tocSupdatefunctionconfigurationrequest"></a>
<a id="tocsupdatefunctionconfigurationrequest"></a>

```json
{
  "Role": {},
  "Handler": {},
  "Description": {},
  "Timeout": {},
  "MemorySize": {},
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "Environment": {
    "Variables": {
      "property1": "password",
      "property2": "password"
    }
  },
  "Runtime": {},
  "DeadLetterConfig": {
    "TargetArn": {}
  },
  "KMSKeyArn": {},
  "TracingConfig": {
    "Mode": {}
  },
  "RevisionId": {},
  "Layers": {},
  "FileSystemConfigs": {},
  "ImageConfig": {
    "EntryPoint": {},
    "Command": {},
    "WorkingDirectory": {}
  },
  "EphemeralStorage": {
    "Size": {}
  },
  "SnapStart": {
    "ApplyOn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Role|object|false|none|none|
|Handler|object|false|none|none|
|Description|object|false|none|none|
|Timeout|object|false|none|none|
|MemorySize|object|false|none|none|
|VpcConfig|object|false|none|none|
|Environment|object|false|none|none|
|Runtime|object|false|none|none|
|DeadLetterConfig|object|false|none|none|
|KMSKeyArn|object|false|none|none|
|TracingConfig|object|false|none|none|
|RevisionId|object|false|none|none|
|Layers|object|false|none|none|
|FileSystemConfigs|object|false|none|none|
|ImageConfig|object|false|none|none|
|EphemeralStorage|object|false|none|none|
|SnapStart|object|false|none|none|

<h2 id="tocS_UpdateFunctionEventInvokeConfigRequest">UpdateFunctionEventInvokeConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefunctioneventinvokeconfigrequest"></a>
<a id="schema_UpdateFunctionEventInvokeConfigRequest"></a>
<a id="tocSupdatefunctioneventinvokeconfigrequest"></a>
<a id="tocsupdatefunctioneventinvokeconfigrequest"></a>

```json
{
  "MaximumRetryAttempts": {},
  "MaximumEventAgeInSeconds": {},
  "DestinationConfig": {
    "OnSuccess": {
      "Destination": {}
    },
    "OnFailure": {
      "Destination": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaximumRetryAttempts|object|false|none|none|
|MaximumEventAgeInSeconds|object|false|none|none|
|DestinationConfig|object|false|none|none|

<h2 id="tocS_UpdateFunctionUrlConfigRequest">UpdateFunctionUrlConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefunctionurlconfigrequest"></a>
<a id="schema_UpdateFunctionUrlConfigRequest"></a>
<a id="tocSupdatefunctionurlconfigrequest"></a>
<a id="tocsupdatefunctionurlconfigrequest"></a>

```json
{
  "AuthType": {},
  "Cors": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "InvokeMode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthType|object|false|none|none|
|Cors|object|false|none|none|
|InvokeMode|object|false|none|none|

<h2 id="tocS_VpcId">VpcId</h2>
<!-- backwards compatibility -->
<a id="schemavpcid"></a>
<a id="schema_VpcId"></a>
<a id="tocSvpcid"></a>
<a id="tocsvpcid"></a>

```json
"string"
```
