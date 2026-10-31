<h1 id="aws-config">AWS Config v2014-11-12</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Config</fullname> <p>Config provides a way to keep track of the configurations of all the Amazon Web Services resources associated with your Amazon Web Services account. You can use Config to get the current and historical configurations of each Amazon Web Services resource and also to get information about the relationship between the resources. An Amazon Web Services resource can be an Amazon Compute Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an elastic network Interface (ENI), or a security group. For a complete list of resources currently supported by Config, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Amazon Web Services resources</a>.</p> <p>You can access and manage Config through the Amazon Web Services Management Console, the Amazon Web Services Command Line Interface (Amazon Web Services CLI), the Config API, or the Amazon Web Services SDKs for Config. This reference guide contains documentation for the Config API and the Amazon Web Services CLI commands that you can use to manage Config. The Config API uses the Signature Version 4 protocol for signing requests. For more information about how to sign a request with this protocol, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>. For detailed information about Config features and their associated actions or commands, as well as how to work with Amazon Web Services Management Console, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html">What Is Config</a> in the <i>Config Developer Guide</i>.</p>

Base URLs:

* <a href="http://config.us-east-1.amazonaws.com">http://config.us-east-1.amazonaws.com</a> - The Config Service multi-region endpoint

* <a href="https://config.us-east-1.amazonaws.com">https://config.us-east-1.amazonaws.com</a> - The Config Service multi-region endpoint

* <a href="http://config.cn-north-1.amazonaws.com.cn">http://config.cn-north-1.amazonaws.com.cn</a> - The Config Service endpoint for China (Beijing) and China (Ningxia)

* <a href="https://config.cn-north-1.amazonaws.com.cn">https://config.cn-north-1.amazonaws.com.cn</a> - The Config Service endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/config/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-config-default">Default</h1>

## BatchGetAggregateResourceConfig

<a id="opIdBatchGetAggregateResourceConfig"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.BatchGetAggregateResourceConfig' \
  -d '{
    "ConfigurationAggregatorName": {},
    "ResourceIdentifiers": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig`

<p>Returns the current configuration items for resources that are present in your Config aggregator. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty <code>unprocessedResourceIdentifiers</code> list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return tags and relationships.</p> </li> </ul> </note>

> Body parameter

```json
{
  "ConfigurationAggregatorName": {},
  "ResourceIdentifiers": {}
}
```

<h3 id="batchgetaggregateresourceconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[BatchGetAggregateResourceConfigRequest](#schemabatchgetaggregateresourceconfigrequest)|true|none|
|» ConfigurationAggregatorName|body|object|true|none|
|» ResourceIdentifiers|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.BatchGetAggregateResourceConfig|

> Example responses

> 200 Response

```json
{
  "BaseConfigurationItems": {},
  "UnprocessedResourceIdentifiers": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="batchgetaggregateresourceconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetAggregateResourceConfigResponse](#schemabatchgetaggregateresourceconfigresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|NoSuchConfigurationAggregatorException|[NoSuchConfigurationAggregatorException](#schemanosuchconfigurationaggregatorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetResourceConfig

<a id="opIdBatchGetResourceConfig"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.BatchGetResourceConfig' \
  -d '{
    "resourceKeys": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig`

<p>Returns the <code>BaseConfigurationItem</code> for one or more requested resources. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceKeys list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return any tags for the requested resources. This information is filtered out of the supplementaryConfiguration section of the API response.</p> </li> </ul> </note>

> Body parameter

```json
{
  "resourceKeys": {}
}
```

<h3 id="batchgetresourceconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[BatchGetResourceConfigRequest](#schemabatchgetresourceconfigrequest)|true|none|
|» resourceKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.BatchGetResourceConfig|

> Example responses

> 200 Response

```json
{
  "baseConfigurationItems": {},
  "unprocessedResourceKeys": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="batchgetresourceconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetResourceConfigResponse](#schemabatchgetresourceconfigresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|NoAvailableConfigurationRecorderException|[NoAvailableConfigurationRecorderException](#schemanoavailableconfigurationrecorderexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAggregationAuthorization

<a id="opIdDeleteAggregationAuthorization"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DeleteAggregationAuthorization' \
  -d '{
    "AuthorizedAccountId": {},
    "AuthorizedAwsRegion": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization`

Deletes the authorization granted to the specified configuration aggregator account in a specified region.

> Body parameter

```json
{
  "AuthorizedAccountId": {},
  "AuthorizedAwsRegion": {}
}
```

<h3 id="deleteaggregationauthorization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteAggregationAuthorizationRequest](#schemadeleteaggregationauthorizationrequest)|true|none|
|» AuthorizedAccountId|body|object|true|none|
|» AuthorizedAwsRegion|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DeleteAggregationAuthorization|

> Example responses

> 480 Response

```json
null
```

<h3 id="deleteaggregationauthorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConfigRule

<a id="opIdDeleteConfigRule"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DeleteConfigRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DeleteConfigRule' \
  -d '{
    "ConfigRuleName": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DeleteConfigRule`

<p>Deletes the specified Config rule and all of its evaluation results.</p> <p>Config sets the state of a rule to <code>DELETING</code> until the deletion is complete. You cannot update a rule while it is in this state. If you make a <code>PutConfigRule</code> or <code>DeleteConfigRule</code> request for the rule, you will receive a <code>ResourceInUseException</code>.</p> <p>You can check the state of a rule by using the <code>DescribeConfigRules</code> request.</p>

> Body parameter

```json
{
  "ConfigRuleName": {}
}
```

<h3 id="deleteconfigrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteConfigRuleRequest](#schemadeleteconfigrulerequest)|true|none|
|» ConfigRuleName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DeleteConfigRule|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deleteconfigrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NoSuchConfigRuleException|[NoSuchConfigRuleException](#schemanosuchconfigruleexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConfigurationAggregator

<a id="opIdDeleteConfigurationAggregator"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DeleteConfigurationAggregator' \
  -d '{
    "ConfigurationAggregatorName": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator`

Deletes the specified configuration aggregator and the aggregated data associated with the aggregator.

> Body parameter

```json
{
  "ConfigurationAggregatorName": {}
}
```

<h3 id="deleteconfigurationaggregator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteConfigurationAggregatorRequest](#schemadeleteconfigurationaggregatorrequest)|true|none|
|» ConfigurationAggregatorName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DeleteConfigurationAggregator|

> Example responses

> 480 Response

```json
null
```

<h3 id="deleteconfigurationaggregator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NoSuchConfigurationAggregatorException|[NoSuchConfigurationAggregatorException](#schemanosuchconfigurationaggregatorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConfigurationRecorder

<a id="opIdDeleteConfigurationRecorder"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DeleteConfigurationRecorder' \
  -d '{
    "ConfigurationRecorderName": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder`

<p>Deletes the configuration recorder.</p> <p>After the configuration recorder is deleted, Config will not record resource configuration changes until you create a new configuration recorder.</p> <p>This action does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the <code>GetResourceConfigHistory</code> action, but you will not be able to access this information in the Config console until you create a new configuration recorder.</p>

> Body parameter

```json
{
  "ConfigurationRecorderName": {}
}
```

<h3 id="deleteconfigurationrecorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteConfigurationRecorderRequest](#schemadeleteconfigurationrecorderrequest)|true|none|
|» ConfigurationRecorderName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DeleteConfigurationRecorder|

> Example responses

> 480 Response

```json
null
```

<h3 id="deleteconfigurationrecorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NoSuchConfigurationRecorderException|[NoSuchConfigurationRecorderException](#schemanosuchconfigurationrecorderexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConformancePack

<a id="opIdDeleteConformancePack"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DeleteConformancePack' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DeleteConformancePack' \
  -d '{
    "ConformancePackName": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DeleteConformancePack`

<p>Deletes the specified conformance pack and all the Config rules, remediation actions, and all evaluation results within that conformance pack.</p> <p>Config sets the conformance pack to <code>DELETE_IN_PROGRESS</code> until the deletion is complete. You cannot update a conformance pack while it is in this state.</p>

> Body parameter

```json
{
  "ConformancePackName": {}
}
```

<h3 id="deleteconformancepack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteConformancePackRequest](#schemadeleteconformancepackrequest)|true|none|
|» ConformancePackName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DeleteConformancePack|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deleteconformancepack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NoSuchConformancePackException|[NoSuchConformancePackException](#schemanosuchconformancepackexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDeliveryChannel

<a id="opIdDeleteDeliveryChannel"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DeleteDeliveryChannel' \
  -d '{
    "DeliveryChannelName": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel`

<p>Deletes the delivery channel.</p> <p>Before you can delete the delivery channel, you must stop the configuration recorder by using the <a>StopConfigurationRecorder</a> action.</p>

> Body parameter

```json
{
  "DeliveryChannelName": {}
}
```

<h3 id="deletedeliverychannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteDeliveryChannelRequest](#schemadeletedeliverychannelrequest)|true|none|
|» DeliveryChannelName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DeleteDeliveryChannel|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deletedeliverychannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NoSuchDeliveryChannelException|[NoSuchDeliveryChannelException](#schemanosuchdeliverychannelexception)|
|481|481|LastDeliveryChannelDeleteFailedException|[LastDeliveryChannelDeleteFailedException](#schemalastdeliverychanneldeletefailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEvaluationResults

<a id="opIdDeleteEvaluationResults"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DeleteEvaluationResults' \
  -d '{
    "ConfigRuleName": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults`

Deletes the evaluation results for the specified Config rule. You can specify one Config rule per request. After you delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating your Amazon Web Services resources against the rule.

> Body parameter

```json
{
  "ConfigRuleName": {}
}
```

<h3 id="deleteevaluationresults-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteEvaluationResultsRequest](#schemadeleteevaluationresultsrequest)|true|none|
|» ConfigRuleName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DeleteEvaluationResults|

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

<h3 id="deleteevaluationresults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEvaluationResultsResponse](#schemadeleteevaluationresultsresponse)|
|480|480|NoSuchConfigRuleException|[NoSuchConfigRuleException](#schemanosuchconfigruleexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteOrganizationConfigRule

<a id="opIdDeleteOrganizationConfigRule"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DeleteOrganizationConfigRule' \
  -d '{
    "OrganizationConfigRuleName": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule`

<p>Deletes the specified organization Config rule and all of its evaluation results from all member accounts in that organization. </p> <p>Only a management account and a delegated administrator account can delete an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added.</p> <p>Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a rule while it is in this state.</p>

> Body parameter

```json
{
  "OrganizationConfigRuleName": {}
}
```

<h3 id="deleteorganizationconfigrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteOrganizationConfigRuleRequest](#schemadeleteorganizationconfigrulerequest)|true|none|
|» OrganizationConfigRuleName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DeleteOrganizationConfigRule|

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

<h3 id="deleteorganizationconfigrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NoSuchOrganizationConfigRuleException|[NoSuchOrganizationConfigRuleException](#schemanosuchorganizationconfigruleexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|OrganizationAccessDeniedException|[OrganizationAccessDeniedException](#schemaorganizationaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteOrganizationConformancePack

<a id="opIdDeleteOrganizationConformancePack"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DeleteOrganizationConformancePack' \
  -d '{
    "OrganizationConformancePackName": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack`

<p>Deletes the specified organization conformance pack and all of the Config rules and remediation actions from all member accounts in that organization. </p> <p> Only a management account or a delegated administrator account can delete an organization conformance pack. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added.</p> <p>Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a conformance pack while it is in this state. </p>

> Body parameter

```json
{
  "OrganizationConformancePackName": {}
}
```

<h3 id="deleteorganizationconformancepack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteOrganizationConformancePackRequest](#schemadeleteorganizationconformancepackrequest)|true|none|
|» OrganizationConformancePackName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DeleteOrganizationConformancePack|

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

<h3 id="deleteorganizationconformancepack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NoSuchOrganizationConformancePackException|[NoSuchOrganizationConformancePackException](#schemanosuchorganizationconformancepackexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|OrganizationAccessDeniedException|[OrganizationAccessDeniedException](#schemaorganizationaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePendingAggregationRequest

<a id="opIdDeletePendingAggregationRequest"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DeletePendingAggregationRequest' \
  -d '{
    "RequesterAccountId": {},
    "RequesterAwsRegion": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest`

Deletes pending authorization requests for a specified aggregator account in a specified region.

> Body parameter

```json
{
  "RequesterAccountId": {},
  "RequesterAwsRegion": {}
}
```

<h3 id="deletependingaggregationrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeletePendingAggregationRequestRequest](#schemadeletependingaggregationrequestrequest)|true|none|
|» RequesterAccountId|body|object|true|none|
|» RequesterAwsRegion|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DeletePendingAggregationRequest|

> Example responses

> 480 Response

```json
null
```

<h3 id="deletependingaggregationrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRemediationConfiguration

<a id="opIdDeleteRemediationConfiguration"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DeleteRemediationConfiguration' \
  -d '{
    "ConfigRuleName": {},
    "ResourceType": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration`

Deletes the remediation configuration.

> Body parameter

```json
{
  "ConfigRuleName": {},
  "ResourceType": {}
}
```

<h3 id="deleteremediationconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteRemediationConfigurationRequest](#schemadeleteremediationconfigurationrequest)|true|none|
|» ConfigRuleName|body|object|true|none|
|» ResourceType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DeleteRemediationConfiguration|

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

<h3 id="deleteremediationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRemediationConfigurationResponse](#schemadeleteremediationconfigurationresponse)|
|480|480|NoSuchRemediationConfigurationException|[NoSuchRemediationConfigurationException](#schemanosuchremediationconfigurationexception)|
|481|481|RemediationInProgressException|[RemediationInProgressException](#schemaremediationinprogressexception)|
|482|482|InsufficientPermissionsException|[InsufficientPermissionsException](#schemainsufficientpermissionsexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRemediationExceptions

<a id="opIdDeleteRemediationExceptions"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DeleteRemediationExceptions' \
  -d '{
    "ConfigRuleName": {},
    "ResourceKeys": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions`

<p>Deletes one or more remediation exceptions mentioned in the resource keys.</p> <note> <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> </note>

> Body parameter

```json
{
  "ConfigRuleName": {},
  "ResourceKeys": {}
}
```

<h3 id="deleteremediationexceptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteRemediationExceptionsRequest](#schemadeleteremediationexceptionsrequest)|true|none|
|» ConfigRuleName|body|object|true|none|
|» ResourceKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DeleteRemediationExceptions|

> Example responses

> 200 Response

```json
{
  "FailedBatches": {}
}
```

> 480 Response

```json
null
```

<h3 id="deleteremediationexceptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRemediationExceptionsResponse](#schemadeleteremediationexceptionsresponse)|
|480|480|NoSuchRemediationExceptionException|[NoSuchRemediationExceptionException](#schemanosuchremediationexceptionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourceConfig

<a id="opIdDeleteResourceConfig"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DeleteResourceConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DeleteResourceConfig' \
  -d '{
    "ResourceType": {},
    "ResourceId": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DeleteResourceConfig`

Records the configuration state for a custom resource that has been deleted. This API records a new ConfigurationItem with a ResourceDeleted status. You can retrieve the ConfigurationItems recorded for this resource in your Config History. 

> Body parameter

```json
{
  "ResourceType": {},
  "ResourceId": {}
}
```

<h3 id="deleteresourceconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteResourceConfigRequest](#schemadeleteresourceconfigrequest)|true|none|
|» ResourceType|body|object|true|none|
|» ResourceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DeleteResourceConfig|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deleteresourceconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|NoRunningConfigurationRecorderException|[NoRunningConfigurationRecorderException](#schemanorunningconfigurationrecorderexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRetentionConfiguration

<a id="opIdDeleteRetentionConfiguration"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DeleteRetentionConfiguration' \
  -d '{
    "RetentionConfigurationName": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration`

Deletes the retention configuration.

> Body parameter

```json
{
  "RetentionConfigurationName": {}
}
```

<h3 id="deleteretentionconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteRetentionConfigurationRequest](#schemadeleteretentionconfigurationrequest)|true|none|
|» RetentionConfigurationName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DeleteRetentionConfiguration|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deleteretentionconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|NoSuchRetentionConfigurationException|[NoSuchRetentionConfigurationException](#schemanosuchretentionconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStoredQuery

<a id="opIdDeleteStoredQuery"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DeleteStoredQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DeleteStoredQuery' \
  -d '{
    "QueryName": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DeleteStoredQuery`

Deletes the stored query for a single Amazon Web Services account and a single Amazon Web Services Region.

> Body parameter

```json
{
  "QueryName": {}
}
```

<h3 id="deletestoredquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteStoredQueryRequest](#schemadeletestoredqueryrequest)|true|none|
|» QueryName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DeleteStoredQuery|

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

<h3 id="deletestoredquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteStoredQueryResponse](#schemadeletestoredqueryresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeliverConfigSnapshot

<a id="opIdDeliverConfigSnapshot"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DeliverConfigSnapshot' \
  -d '{
    "deliveryChannelName": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot`

<p>Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel. After the delivery has started, Config sends the following notifications using an Amazon SNS topic that you have specified.</p> <ul> <li> <p>Notification of the start of the delivery.</p> </li> <li> <p>Notification of the completion of the delivery, if the delivery was successfully completed.</p> </li> <li> <p>Notification of delivery failure, if the delivery failed.</p> </li> </ul>

> Body parameter

```json
{
  "deliveryChannelName": {}
}
```

<h3 id="deliverconfigsnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeliverConfigSnapshotRequest](#schemadeliverconfigsnapshotrequest)|true|none|
|» deliveryChannelName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DeliverConfigSnapshot|

> Example responses

> 200 Response

```json
{
  "configSnapshotId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="deliverconfigsnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeliverConfigSnapshotResponse](#schemadeliverconfigsnapshotresponse)|
|480|480|NoSuchDeliveryChannelException|[NoSuchDeliveryChannelException](#schemanosuchdeliverychannelexception)|
|481|481|NoAvailableConfigurationRecorderException|[NoAvailableConfigurationRecorderException](#schemanoavailableconfigurationrecorderexception)|
|482|482|NoRunningConfigurationRecorderException|[NoRunningConfigurationRecorderException](#schemanorunningconfigurationrecorderexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAggregateComplianceByConfigRules

<a id="opIdDescribeAggregateComplianceByConfigRules"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeAggregateComplianceByConfigRules' \
  -d '{
    "ConfigurationAggregatorName": {},
    "Filters": {
      "ConfigRuleName": {},
      "ComplianceType": {},
      "AccountId": {},
      "AwsRegion": {}
    },
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules`

<p>Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules. Does not display rules that do not have compliance results. </p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>

> Body parameter

```json
{
  "ConfigurationAggregatorName": {},
  "Filters": {
    "ConfigRuleName": {},
    "ComplianceType": {},
    "AccountId": {},
    "AwsRegion": {}
  },
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describeaggregatecompliancebyconfigrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAggregateComplianceByConfigRulesRequest](#schemadescribeaggregatecompliancebyconfigrulesrequest)|true|none|
|» ConfigurationAggregatorName|body|object|true|none|
|» Filters|body|object|false|none|
|» » ConfigRuleName|body|object|false|none|
|» » ComplianceType|body|object|false|none|
|» » AccountId|body|object|false|none|
|» » AwsRegion|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeAggregateComplianceByConfigRules|

> Example responses

> 200 Response

```json
{
  "AggregateComplianceByConfigRules": {},
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

<h3 id="describeaggregatecompliancebyconfigrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAggregateComplianceByConfigRulesResponse](#schemadescribeaggregatecompliancebyconfigrulesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|NoSuchConfigurationAggregatorException|[NoSuchConfigurationAggregatorException](#schemanosuchconfigurationaggregatorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAggregateComplianceByConformancePacks

<a id="opIdDescribeAggregateComplianceByConformancePacks"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeAggregateComplianceByConformancePacks' \
  -d '{
    "ConfigurationAggregatorName": {},
    "Filters": {
      "ConformancePackName": {},
      "ComplianceType": {},
      "AccountId": {},
      "AwsRegion": {}
    },
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks`

<p>Returns a list of the conformance packs and their associated compliance status with the count of compliant and noncompliant Config rules within each conformance pack. Also returns the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>

> Body parameter

```json
{
  "ConfigurationAggregatorName": {},
  "Filters": {
    "ConformancePackName": {},
    "ComplianceType": {},
    "AccountId": {},
    "AwsRegion": {}
  },
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describeaggregatecompliancebyconformancepacks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAggregateComplianceByConformancePacksRequest](#schemadescribeaggregatecompliancebyconformancepacksrequest)|true|none|
|» ConfigurationAggregatorName|body|object|true|none|
|» Filters|body|object|false|none|
|» » ConformancePackName|body|object|false|none|
|» » ComplianceType|body|object|false|none|
|» » AccountId|body|object|false|none|
|» » AwsRegion|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeAggregateComplianceByConformancePacks|

> Example responses

> 200 Response

```json
{
  "AggregateComplianceByConformancePacks": {},
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

<h3 id="describeaggregatecompliancebyconformancepacks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAggregateComplianceByConformancePacksResponse](#schemadescribeaggregatecompliancebyconformancepacksresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|NoSuchConfigurationAggregatorException|[NoSuchConfigurationAggregatorException](#schemanosuchconfigurationaggregatorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAggregationAuthorizations

<a id="opIdDescribeAggregationAuthorizations"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeAggregationAuthorizations' \
  -d '{
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations`

Returns a list of authorizations granted to various aggregator accounts and regions.

> Body parameter

```json
{
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describeaggregationauthorizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAggregationAuthorizationsRequest](#schemadescribeaggregationauthorizationsrequest)|true|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeAggregationAuthorizations|

> Example responses

> 200 Response

```json
{
  "AggregationAuthorizations": {},
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

<h3 id="describeaggregationauthorizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAggregationAuthorizationsResponse](#schemadescribeaggregationauthorizationsresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeComplianceByConfigRule

<a id="opIdDescribeComplianceByConfigRule"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeComplianceByConfigRule' \
  -d '{
    "ConfigRuleNames": {},
    "ComplianceTypes": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule`

<p>Indicates whether the specified Config rules are compliant. If a rule is noncompliant, this action returns the number of Amazon Web Services resources that do not comply with the rule.</p> <p>A rule is compliant if all of the evaluated resources comply with it. It is noncompliant if any of these resources do not comply.</p> <p>If Config has no current evaluation results for the rule, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions:</p> <ul> <li> <p>Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's Lambda function is failing to send evaluation results to Config. Verify that the role you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>

> Body parameter

```json
{
  "ConfigRuleNames": {},
  "ComplianceTypes": {},
  "NextToken": {}
}
```

<h3 id="describecompliancebyconfigrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeComplianceByConfigRuleRequest](#schemadescribecompliancebyconfigrulerequest)|true|none|
|» ConfigRuleNames|body|object|false|none|
|» ComplianceTypes|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeComplianceByConfigRule|

> Example responses

> 200 Response

```json
{
  "ComplianceByConfigRules": {},
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

<h3 id="describecompliancebyconfigrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeComplianceByConfigRuleResponse](#schemadescribecompliancebyconfigruleresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|NoSuchConfigRuleException|[NoSuchConfigRuleException](#schemanosuchconfigruleexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeComplianceByResource

<a id="opIdDescribeComplianceByResource"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeComplianceByResource' \
  -d '{
    "ResourceType": {},
    "ResourceId": {},
    "ComplianceTypes": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource`

<p>Indicates whether the specified Amazon Web Services resources are compliant. If a resource is noncompliant, this action returns the number of Config rules that the resource does not comply with.</p> <p>A resource is compliant if it complies with all the Config rules that evaluate it. It is noncompliant if it does not comply with one or more of these rules.</p> <p>If Config has no current evaluation results for the resource, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions about the rules that evaluate the resource:</p> <ul> <li> <p>Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's Lambda function is failing to send evaluation results to Config. Verify that the role that you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>

> Body parameter

```json
{
  "ResourceType": {},
  "ResourceId": {},
  "ComplianceTypes": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describecompliancebyresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeComplianceByResourceRequest](#schemadescribecompliancebyresourcerequest)|true|none|
|» ResourceType|body|object|false|none|
|» ResourceId|body|object|false|none|
|» ComplianceTypes|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeComplianceByResource|

> Example responses

> 200 Response

```json
{
  "ComplianceByResources": {},
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

<h3 id="describecompliancebyresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeComplianceByResourceResponse](#schemadescribecompliancebyresourceresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConfigRuleEvaluationStatus

<a id="opIdDescribeConfigRuleEvaluationStatus"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeConfigRuleEvaluationStatus' \
  -d '{
    "ConfigRuleNames": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus`

Returns status information for each of your Config managed rules. The status includes information such as the last time Config invoked the rule, the last time Config failed to invoke the rule, and the related error for the last failure.

> Body parameter

```json
{
  "ConfigRuleNames": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="describeconfigruleevaluationstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeConfigRuleEvaluationStatusRequest](#schemadescribeconfigruleevaluationstatusrequest)|true|none|
|» ConfigRuleNames|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeConfigRuleEvaluationStatus|

> Example responses

> 200 Response

```json
{
  "ConfigRulesEvaluationStatus": {},
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

<h3 id="describeconfigruleevaluationstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConfigRuleEvaluationStatusResponse](#schemadescribeconfigruleevaluationstatusresponse)|
|480|480|NoSuchConfigRuleException|[NoSuchConfigRuleException](#schemanosuchconfigruleexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConfigRules

<a id="opIdDescribeConfigRules"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeConfigRules' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeConfigRules' \
  -d '{
    "ConfigRuleNames": {},
    "NextToken": {},
    "Filters": {
      "EvaluationMode": {}
    }
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeConfigRules`

Returns details about your Config rules.

> Body parameter

```json
{
  "ConfigRuleNames": {},
  "NextToken": {},
  "Filters": {
    "EvaluationMode": {}
  }
}
```

<h3 id="describeconfigrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeConfigRulesRequest](#schemadescribeconfigrulesrequest)|true|none|
|» ConfigRuleNames|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filters|body|object|false|none|
|» » EvaluationMode|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeConfigRules|

> Example responses

> 200 Response

```json
{
  "ConfigRules": {},
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

<h3 id="describeconfigrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConfigRulesResponse](#schemadescribeconfigrulesresponse)|
|480|480|NoSuchConfigRuleException|[NoSuchConfigRuleException](#schemanosuchconfigruleexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConfigurationAggregatorSourcesStatus

<a id="opIdDescribeConfigurationAggregatorSourcesStatus"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus' \
  -d '{
    "ConfigurationAggregatorName": {},
    "UpdateStatus": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus`

Returns status information for sources within an aggregator. The status includes information about the last time Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message. 

> Body parameter

```json
{
  "ConfigurationAggregatorName": {},
  "UpdateStatus": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="describeconfigurationaggregatorsourcesstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeConfigurationAggregatorSourcesStatusRequest](#schemadescribeconfigurationaggregatorsourcesstatusrequest)|true|none|
|» ConfigurationAggregatorName|body|object|true|none|
|» UpdateStatus|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus|

> Example responses

> 200 Response

```json
{
  "AggregatedSourceStatusList": {},
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

<h3 id="describeconfigurationaggregatorsourcesstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConfigurationAggregatorSourcesStatusResponse](#schemadescribeconfigurationaggregatorsourcesstatusresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|NoSuchConfigurationAggregatorException|[NoSuchConfigurationAggregatorException](#schemanosuchconfigurationaggregatorexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConfigurationAggregators

<a id="opIdDescribeConfigurationAggregators"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeConfigurationAggregators' \
  -d '{
    "ConfigurationAggregatorNames": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators`

Returns the details of one or more configuration aggregators. If the configuration aggregator is not specified, this action returns the details for all the configuration aggregators associated with the account. 

> Body parameter

```json
{
  "ConfigurationAggregatorNames": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="describeconfigurationaggregators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeConfigurationAggregatorsRequest](#schemadescribeconfigurationaggregatorsrequest)|true|none|
|» ConfigurationAggregatorNames|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeConfigurationAggregators|

> Example responses

> 200 Response

```json
{
  "ConfigurationAggregators": {},
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

<h3 id="describeconfigurationaggregators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConfigurationAggregatorsResponse](#schemadescribeconfigurationaggregatorsresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|NoSuchConfigurationAggregatorException|[NoSuchConfigurationAggregatorException](#schemanosuchconfigurationaggregatorexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConfigurationRecorderStatus

<a id="opIdDescribeConfigurationRecorderStatus"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeConfigurationRecorderStatus' \
  -d '{
    "ConfigurationRecorderNames": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus`

<p>Returns the current status of the specified configuration recorder as well as the status of the last recording event for the recorder. If a configuration recorder is not specified, this action returns the status of all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account. For a detailed status of recording events over time, add your Config events to Amazon CloudWatch metrics and use CloudWatch metrics.</p> </note>

> Body parameter

```json
{
  "ConfigurationRecorderNames": {}
}
```

<h3 id="describeconfigurationrecorderstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeConfigurationRecorderStatusRequest](#schemadescribeconfigurationrecorderstatusrequest)|true|none|
|» ConfigurationRecorderNames|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeConfigurationRecorderStatus|

> Example responses

> 200 Response

```json
{
  "ConfigurationRecordersStatus": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeconfigurationrecorderstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConfigurationRecorderStatusResponse](#schemadescribeconfigurationrecorderstatusresponse)|
|480|480|NoSuchConfigurationRecorderException|[NoSuchConfigurationRecorderException](#schemanosuchconfigurationrecorderexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConfigurationRecorders

<a id="opIdDescribeConfigurationRecorders"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeConfigurationRecorders' \
  -d '{
    "ConfigurationRecorderNames": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders`

<p>Returns the details for the specified configuration recorders. If the configuration recorder is not specified, this action returns the details for all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> </note>

> Body parameter

```json
{
  "ConfigurationRecorderNames": {}
}
```

<h3 id="describeconfigurationrecorders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeConfigurationRecordersRequest](#schemadescribeconfigurationrecordersrequest)|true|none|
|» ConfigurationRecorderNames|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeConfigurationRecorders|

> Example responses

> 200 Response

```json
{
  "ConfigurationRecorders": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeconfigurationrecorders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConfigurationRecordersResponse](#schemadescribeconfigurationrecordersresponse)|
|480|480|NoSuchConfigurationRecorderException|[NoSuchConfigurationRecorderException](#schemanosuchconfigurationrecorderexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConformancePackCompliance

<a id="opIdDescribeConformancePackCompliance"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeConformancePackCompliance' \
  -d '{
    "ConformancePackName": {},
    "Filters": {
      "ConfigRuleNames": {},
      "ComplianceType": {}
    },
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance`

<p>Returns compliance details for each rule in that conformance pack.</p> <note> <p>You must provide exact rule names.</p> </note>

> Body parameter

```json
{
  "ConformancePackName": {},
  "Filters": {
    "ConfigRuleNames": {},
    "ComplianceType": {}
  },
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describeconformancepackcompliance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeConformancePackComplianceRequest](#schemadescribeconformancepackcompliancerequest)|true|none|
|» ConformancePackName|body|object|true|none|
|» Filters|body|object|false|none|
|» » ConfigRuleNames|body|object|false|none|
|» » ComplianceType|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeConformancePackCompliance|

> Example responses

> 200 Response

```json
{
  "ConformancePackName": {},
  "ConformancePackRuleComplianceList": {},
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

<h3 id="describeconformancepackcompliance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConformancePackComplianceResponse](#schemadescribeconformancepackcomplianceresponse)|
|480|480|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|NoSuchConfigRuleInConformancePackException|[NoSuchConfigRuleInConformancePackException](#schemanosuchconfigruleinconformancepackexception)|
|484|484|NoSuchConformancePackException|[NoSuchConformancePackException](#schemanosuchconformancepackexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConformancePackStatus

<a id="opIdDescribeConformancePackStatus"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeConformancePackStatus' \
  -d '{
    "ConformancePackNames": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus`

<p>Provides one or more conformance packs deployment status.</p> <note> <p>If there are no conformance packs then you will see an empty result.</p> </note>

> Body parameter

```json
{
  "ConformancePackNames": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describeconformancepackstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeConformancePackStatusRequest](#schemadescribeconformancepackstatusrequest)|true|none|
|» ConformancePackNames|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeConformancePackStatus|

> Example responses

> 200 Response

```json
{
  "ConformancePackStatusDetails": {},
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

<h3 id="describeconformancepackstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConformancePackStatusResponse](#schemadescribeconformancepackstatusresponse)|
|480|480|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConformancePacks

<a id="opIdDescribeConformancePacks"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeConformancePacks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeConformancePacks' \
  -d '{
    "ConformancePackNames": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeConformancePacks`

Returns a list of one or more conformance packs.

> Body parameter

```json
{
  "ConformancePackNames": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describeconformancepacks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeConformancePacksRequest](#schemadescribeconformancepacksrequest)|true|none|
|» ConformancePackNames|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeConformancePacks|

> Example responses

> 200 Response

```json
{
  "ConformancePackDetails": {},
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

<h3 id="describeconformancepacks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConformancePacksResponse](#schemadescribeconformancepacksresponse)|
|480|480|NoSuchConformancePackException|[NoSuchConformancePackException](#schemanosuchconformancepackexception)|
|481|481|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDeliveryChannelStatus

<a id="opIdDescribeDeliveryChannelStatus"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeDeliveryChannelStatus' \
  -d '{
    "DeliveryChannelNames": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus`

<p>Returns the current status of the specified delivery channel. If a delivery channel is not specified, this action returns the current status of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>

> Body parameter

```json
{
  "DeliveryChannelNames": {}
}
```

<h3 id="describedeliverychannelstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDeliveryChannelStatusRequest](#schemadescribedeliverychannelstatusrequest)|true|none|
|» DeliveryChannelNames|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeDeliveryChannelStatus|

> Example responses

> 200 Response

```json
{
  "DeliveryChannelsStatus": {}
}
```

> 480 Response

```json
null
```

<h3 id="describedeliverychannelstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDeliveryChannelStatusResponse](#schemadescribedeliverychannelstatusresponse)|
|480|480|NoSuchDeliveryChannelException|[NoSuchDeliveryChannelException](#schemanosuchdeliverychannelexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDeliveryChannels

<a id="opIdDescribeDeliveryChannels"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeDeliveryChannels' \
  -d '{
    "DeliveryChannelNames": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels`

<p>Returns details about the specified delivery channel. If a delivery channel is not specified, this action returns the details of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>

> Body parameter

```json
{
  "DeliveryChannelNames": {}
}
```

<h3 id="describedeliverychannels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDeliveryChannelsRequest](#schemadescribedeliverychannelsrequest)|true|none|
|» DeliveryChannelNames|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeDeliveryChannels|

> Example responses

> 200 Response

```json
{
  "DeliveryChannels": {}
}
```

> 480 Response

```json
null
```

<h3 id="describedeliverychannels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDeliveryChannelsResponse](#schemadescribedeliverychannelsresponse)|
|480|480|NoSuchDeliveryChannelException|[NoSuchDeliveryChannelException](#schemanosuchdeliverychannelexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeOrganizationConfigRuleStatuses

<a id="opIdDescribeOrganizationConfigRuleStatuses"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeOrganizationConfigRuleStatuses' \
  -d '{
    "OrganizationConfigRuleNames": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses`

<p>Provides organization Config rule deployment status for an organization.</p> <note> <p>The status is not considered successful until organization Config rule is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules.</p> </note>

> Body parameter

```json
{
  "OrganizationConfigRuleNames": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describeorganizationconfigrulestatuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeOrganizationConfigRuleStatusesRequest](#schemadescribeorganizationconfigrulestatusesrequest)|true|none|
|» OrganizationConfigRuleNames|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeOrganizationConfigRuleStatuses|

> Example responses

> 200 Response

```json
{
  "OrganizationConfigRuleStatuses": {},
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

<h3 id="describeorganizationconfigrulestatuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOrganizationConfigRuleStatusesResponse](#schemadescribeorganizationconfigrulestatusesresponse)|
|480|480|NoSuchOrganizationConfigRuleException|[NoSuchOrganizationConfigRuleException](#schemanosuchorganizationconfigruleexception)|
|481|481|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|OrganizationAccessDeniedException|[OrganizationAccessDeniedException](#schemaorganizationaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeOrganizationConfigRules

<a id="opIdDescribeOrganizationConfigRules"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeOrganizationConfigRules' \
  -d '{
    "OrganizationConfigRuleNames": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules`

<p>Returns a list of organization Config rules. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response.</p> <p>Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules.</p> <p> <i>For accounts within an organzation</i> </p> <p>If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The <code>DescribeOrganizationConfigRules</code> and <code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.</p> </note>

> Body parameter

```json
{
  "OrganizationConfigRuleNames": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describeorganizationconfigrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeOrganizationConfigRulesRequest](#schemadescribeorganizationconfigrulesrequest)|true|none|
|» OrganizationConfigRuleNames|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeOrganizationConfigRules|

> Example responses

> 200 Response

```json
{
  "OrganizationConfigRules": {},
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

<h3 id="describeorganizationconfigrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOrganizationConfigRulesResponse](#schemadescribeorganizationconfigrulesresponse)|
|480|480|NoSuchOrganizationConfigRuleException|[NoSuchOrganizationConfigRuleException](#schemanosuchorganizationconfigruleexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|483|483|OrganizationAccessDeniedException|[OrganizationAccessDeniedException](#schemaorganizationaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeOrganizationConformancePackStatuses

<a id="opIdDescribeOrganizationConformancePackStatuses"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeOrganizationConformancePackStatuses' \
  -d '{
    "OrganizationConformancePackNames": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses`

<p>Provides organization conformance pack deployment status for an organization. </p> <note> <p>The status is not considered successful until organization conformance pack is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization conformance pack names. They are only applicable, when you request all the organization conformance packs.</p> </note>

> Body parameter

```json
{
  "OrganizationConformancePackNames": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describeorganizationconformancepackstatuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeOrganizationConformancePackStatusesRequest](#schemadescribeorganizationconformancepackstatusesrequest)|true|none|
|» OrganizationConformancePackNames|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeOrganizationConformancePackStatuses|

> Example responses

> 200 Response

```json
{
  "OrganizationConformancePackStatuses": {},
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

<h3 id="describeorganizationconformancepackstatuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOrganizationConformancePackStatusesResponse](#schemadescribeorganizationconformancepackstatusesresponse)|
|480|480|NoSuchOrganizationConformancePackException|[NoSuchOrganizationConformancePackException](#schemanosuchorganizationconformancepackexception)|
|481|481|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|OrganizationAccessDeniedException|[OrganizationAccessDeniedException](#schemaorganizationaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeOrganizationConformancePacks

<a id="opIdDescribeOrganizationConformancePacks"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeOrganizationConformancePacks' \
  -d '{
    "OrganizationConformancePackNames": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks`

<p>Returns a list of organization conformance packs. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable, when you request all the organization conformance packs. </p> <p> <i>For accounts within an organzation</i> </p> <p>If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The <code>DescribeOrganizationConfigRules</code> and <code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.</p> </note>

> Body parameter

```json
{
  "OrganizationConformancePackNames": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describeorganizationconformancepacks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeOrganizationConformancePacksRequest](#schemadescribeorganizationconformancepacksrequest)|true|none|
|» OrganizationConformancePackNames|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeOrganizationConformancePacks|

> Example responses

> 200 Response

```json
{
  "OrganizationConformancePacks": {},
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

<h3 id="describeorganizationconformancepacks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOrganizationConformancePacksResponse](#schemadescribeorganizationconformancepacksresponse)|
|480|480|NoSuchOrganizationConformancePackException|[NoSuchOrganizationConformancePackException](#schemanosuchorganizationconformancepackexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|483|483|OrganizationAccessDeniedException|[OrganizationAccessDeniedException](#schemaorganizationaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePendingAggregationRequests

<a id="opIdDescribePendingAggregationRequests"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribePendingAggregationRequests' \
  -d '{
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests`

Returns a list of all pending aggregation requests.

> Body parameter

```json
{
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describependingaggregationrequests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribePendingAggregationRequestsRequest](#schemadescribependingaggregationrequestsrequest)|true|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribePendingAggregationRequests|

> Example responses

> 200 Response

```json
{
  "PendingAggregationRequests": {},
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

<h3 id="describependingaggregationrequests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePendingAggregationRequestsResponse](#schemadescribependingaggregationrequestsresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRemediationConfigurations

<a id="opIdDescribeRemediationConfigurations"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeRemediationConfigurations' \
  -d '{
    "ConfigRuleNames": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations`

Returns the details of one or more remediation configurations.

> Body parameter

```json
{
  "ConfigRuleNames": {}
}
```

<h3 id="describeremediationconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeRemediationConfigurationsRequest](#schemadescriberemediationconfigurationsrequest)|true|none|
|» ConfigRuleNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeRemediationConfigurations|

> Example responses

> 200 Response

```json
{
  "RemediationConfigurations": {}
}
```

<h3 id="describeremediationconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRemediationConfigurationsResponse](#schemadescriberemediationconfigurationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRemediationExceptions

<a id="opIdDescribeRemediationExceptions"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeRemediationExceptions' \
  -d '{
    "ConfigRuleName": {},
    "ResourceKeys": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions`

<p>Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted. When you specify the limit and the next token, you receive a paginated response. </p> <note> <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.</p> </note>

> Body parameter

```json
{
  "ConfigRuleName": {},
  "ResourceKeys": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describeremediationexceptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeRemediationExceptionsRequest](#schemadescriberemediationexceptionsrequest)|true|none|
|» ConfigRuleName|body|object|true|none|
|» ResourceKeys|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeRemediationExceptions|

> Example responses

> 200 Response

```json
{
  "RemediationExceptions": {},
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

<h3 id="describeremediationexceptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRemediationExceptionsResponse](#schemadescriberemediationexceptionsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRemediationExecutionStatus

<a id="opIdDescribeRemediationExecutionStatus"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeRemediationExecutionStatus' \
  -d '{
    "ConfigRuleName": {},
    "ResourceKeys": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus`

Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps for when steps for the remediation execution occur, and any error messages for steps that have failed. When you specify the limit and the next token, you receive a paginated response.

> Body parameter

```json
{
  "ConfigRuleName": {},
  "ResourceKeys": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describeremediationexecutionstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeRemediationExecutionStatusRequest](#schemadescriberemediationexecutionstatusrequest)|true|none|
|» ConfigRuleName|body|object|true|none|
|» ResourceKeys|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeRemediationExecutionStatus|

> Example responses

> 200 Response

```json
{
  "RemediationExecutionStatuses": {},
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

<h3 id="describeremediationexecutionstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRemediationExecutionStatusResponse](#schemadescriberemediationexecutionstatusresponse)|
|480|480|NoSuchRemediationConfigurationException|[NoSuchRemediationConfigurationException](#schemanosuchremediationconfigurationexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRetentionConfigurations

<a id="opIdDescribeRetentionConfigurations"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.DescribeRetentionConfigurations' \
  -d '{
    "RetentionConfigurationNames": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations`

<p>Returns the details of one or more retention configurations. If the retention configuration name is not specified, this action returns the details for all the retention configurations for that account.</p> <note> <p>Currently, Config supports only one retention configuration per region in your account.</p> </note>

> Body parameter

```json
{
  "RetentionConfigurationNames": {},
  "NextToken": {}
}
```

<h3 id="describeretentionconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeRetentionConfigurationsRequest](#schemadescriberetentionconfigurationsrequest)|true|none|
|» RetentionConfigurationNames|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.DescribeRetentionConfigurations|

> Example responses

> 200 Response

```json
{
  "RetentionConfigurations": {},
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

<h3 id="describeretentionconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRetentionConfigurationsResponse](#schemadescriberetentionconfigurationsresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|NoSuchRetentionConfigurationException|[NoSuchRetentionConfigurationException](#schemanosuchretentionconfigurationexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAggregateComplianceDetailsByConfigRule

<a id="opIdGetAggregateComplianceDetailsByConfigRule"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.GetAggregateComplianceDetailsByConfigRule' \
  -d '{
    "ConfigurationAggregatorName": {},
    "ConfigRuleName": {},
    "AccountId": {},
    "AwsRegion": {},
    "ComplianceType": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule`

<p>Returns the evaluation results for the specified Config rule for a specific resource in a rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule. </p> <note> <p>The results can return an empty result page. But if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>

> Body parameter

```json
{
  "ConfigurationAggregatorName": {},
  "ConfigRuleName": {},
  "AccountId": {},
  "AwsRegion": {},
  "ComplianceType": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="getaggregatecompliancedetailsbyconfigrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetAggregateComplianceDetailsByConfigRuleRequest](#schemagetaggregatecompliancedetailsbyconfigrulerequest)|true|none|
|» ConfigurationAggregatorName|body|object|true|none|
|» ConfigRuleName|body|object|true|none|
|» AccountId|body|object|true|none|
|» AwsRegion|body|object|true|none|
|» ComplianceType|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.GetAggregateComplianceDetailsByConfigRule|

> Example responses

> 200 Response

```json
{
  "AggregateEvaluationResults": {},
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

<h3 id="getaggregatecompliancedetailsbyconfigrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAggregateComplianceDetailsByConfigRuleResponse](#schemagetaggregatecompliancedetailsbyconfigruleresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|NoSuchConfigurationAggregatorException|[NoSuchConfigurationAggregatorException](#schemanosuchconfigurationaggregatorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAggregateConfigRuleComplianceSummary

<a id="opIdGetAggregateConfigRuleComplianceSummary"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.GetAggregateConfigRuleComplianceSummary' \
  -d '{
    "ConfigurationAggregatorName": {},
    "Filters": {
      "AccountId": {},
      "AwsRegion": {}
    },
    "GroupByKey": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary`

<p>Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>

> Body parameter

```json
{
  "ConfigurationAggregatorName": {},
  "Filters": {
    "AccountId": {},
    "AwsRegion": {}
  },
  "GroupByKey": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="getaggregateconfigrulecompliancesummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetAggregateConfigRuleComplianceSummaryRequest](#schemagetaggregateconfigrulecompliancesummaryrequest)|true|none|
|» ConfigurationAggregatorName|body|object|true|none|
|» Filters|body|object|false|none|
|» » AccountId|body|object|false|none|
|» » AwsRegion|body|object|false|none|
|» GroupByKey|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.GetAggregateConfigRuleComplianceSummary|

> Example responses

> 200 Response

```json
{
  "GroupByKey": {},
  "AggregateComplianceCounts": {},
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

<h3 id="getaggregateconfigrulecompliancesummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAggregateConfigRuleComplianceSummaryResponse](#schemagetaggregateconfigrulecompliancesummaryresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|NoSuchConfigurationAggregatorException|[NoSuchConfigurationAggregatorException](#schemanosuchconfigurationaggregatorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAggregateConformancePackComplianceSummary

<a id="opIdGetAggregateConformancePackComplianceSummary"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.GetAggregateConformancePackComplianceSummary' \
  -d '{
    "ConfigurationAggregatorName": {},
    "Filters": {
      "AccountId": {},
      "AwsRegion": {}
    },
    "GroupByKey": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary`

<p>Returns the count of compliant and noncompliant conformance packs across all Amazon Web Services accounts and Amazon Web Services Regions in an aggregator. You can filter based on Amazon Web Services account ID or Amazon Web Services Region.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>

> Body parameter

```json
{
  "ConfigurationAggregatorName": {},
  "Filters": {
    "AccountId": {},
    "AwsRegion": {}
  },
  "GroupByKey": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="getaggregateconformancepackcompliancesummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetAggregateConformancePackComplianceSummaryRequest](#schemagetaggregateconformancepackcompliancesummaryrequest)|true|none|
|» ConfigurationAggregatorName|body|object|true|none|
|» Filters|body|object|false|none|
|» » AccountId|body|object|false|none|
|» » AwsRegion|body|object|false|none|
|» GroupByKey|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.GetAggregateConformancePackComplianceSummary|

> Example responses

> 200 Response

```json
{
  "AggregateConformancePackComplianceSummaries": {},
  "GroupByKey": {},
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

<h3 id="getaggregateconformancepackcompliancesummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAggregateConformancePackComplianceSummaryResponse](#schemagetaggregateconformancepackcompliancesummaryresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|NoSuchConfigurationAggregatorException|[NoSuchConfigurationAggregatorException](#schemanosuchconfigurationaggregatorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAggregateDiscoveredResourceCounts

<a id="opIdGetAggregateDiscoveredResourceCounts"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.GetAggregateDiscoveredResourceCounts' \
  -d '{
    "ConfigurationAggregatorName": {},
    "Filters": {
      "ResourceType": {},
      "AccountId": {},
      "Region": {}
    },
    "GroupByKey": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts`

<p>Returns the resource counts across accounts and regions that are present in your Config aggregator. You can request the resource counts by providing filters and GroupByKey.</p> <p>For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1. If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.</p>

> Body parameter

```json
{
  "ConfigurationAggregatorName": {},
  "Filters": {
    "ResourceType": {},
    "AccountId": {},
    "Region": {}
  },
  "GroupByKey": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="getaggregatediscoveredresourcecounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetAggregateDiscoveredResourceCountsRequest](#schemagetaggregatediscoveredresourcecountsrequest)|true|none|
|» ConfigurationAggregatorName|body|object|true|none|
|» Filters|body|object|false|none|
|» » ResourceType|body|object|false|none|
|» » AccountId|body|object|false|none|
|» » Region|body|object|false|none|
|» GroupByKey|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.GetAggregateDiscoveredResourceCounts|

> Example responses

> 200 Response

```json
{
  "TotalDiscoveredResources": {},
  "GroupByKey": {},
  "GroupedResourceCounts": {},
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

<h3 id="getaggregatediscoveredresourcecounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAggregateDiscoveredResourceCountsResponse](#schemagetaggregatediscoveredresourcecountsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|NoSuchConfigurationAggregatorException|[NoSuchConfigurationAggregatorException](#schemanosuchconfigurationaggregatorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAggregateResourceConfig

<a id="opIdGetAggregateResourceConfig"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.GetAggregateResourceConfig' \
  -d '{
    "ConfigurationAggregatorName": {},
    "ResourceIdentifier": {
      "SourceAccountId": {},
      "SourceRegion": {},
      "ResourceId": {},
      "ResourceType": {},
      "ResourceName": {}
    }
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig`

Returns configuration item that is aggregated for your specific resource in a specific source account and region.

> Body parameter

```json
{
  "ConfigurationAggregatorName": {},
  "ResourceIdentifier": {
    "SourceAccountId": {},
    "SourceRegion": {},
    "ResourceId": {},
    "ResourceType": {},
    "ResourceName": {}
  }
}
```

<h3 id="getaggregateresourceconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetAggregateResourceConfigRequest](#schemagetaggregateresourceconfigrequest)|true|none|
|» ConfigurationAggregatorName|body|object|true|none|
|» ResourceIdentifier|body|object|true|none|
|» » SourceAccountId|body|object|true|none|
|» » SourceRegion|body|object|true|none|
|» » ResourceId|body|object|true|none|
|» » ResourceType|body|object|true|none|
|» » ResourceName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.GetAggregateResourceConfig|

> Example responses

> 200 Response

```json
{
  "ConfigurationItem": {
    "version": {},
    "accountId": {},
    "configurationItemCaptureTime": {},
    "configurationItemStatus": {},
    "configurationStateId": {},
    "configurationItemMD5Hash": {},
    "arn": {},
    "resourceType": {},
    "resourceId": {},
    "resourceName": {},
    "awsRegion": {},
    "availabilityZone": {},
    "resourceCreationTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "relatedEvents": {},
    "relationships": {},
    "configuration": {},
    "supplementaryConfiguration": {
      "property1": "string",
      "property2": "string"
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

<h3 id="getaggregateresourceconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAggregateResourceConfigResponse](#schemagetaggregateresourceconfigresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|NoSuchConfigurationAggregatorException|[NoSuchConfigurationAggregatorException](#schemanosuchconfigurationaggregatorexception)|
|482|482|OversizedConfigurationItemException|[OversizedConfigurationItemException](#schemaoversizedconfigurationitemexception)|
|483|483|ResourceNotDiscoveredException|[ResourceNotDiscoveredException](#schemaresourcenotdiscoveredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetComplianceDetailsByConfigRule

<a id="opIdGetComplianceDetailsByConfigRule"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.GetComplianceDetailsByConfigRule' \
  -d '{
    "ConfigRuleName": {},
    "ComplianceTypes": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule`

Returns the evaluation results for the specified Config rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.

> Body parameter

```json
{
  "ConfigRuleName": {},
  "ComplianceTypes": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="getcompliancedetailsbyconfigrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetComplianceDetailsByConfigRuleRequest](#schemagetcompliancedetailsbyconfigrulerequest)|true|none|
|» ConfigRuleName|body|object|true|none|
|» ComplianceTypes|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.GetComplianceDetailsByConfigRule|

> Example responses

> 200 Response

```json
{
  "EvaluationResults": {},
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

<h3 id="getcompliancedetailsbyconfigrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetComplianceDetailsByConfigRuleResponse](#schemagetcompliancedetailsbyconfigruleresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|NoSuchConfigRuleException|[NoSuchConfigRuleException](#schemanosuchconfigruleexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetComplianceDetailsByResource

<a id="opIdGetComplianceDetailsByResource"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.GetComplianceDetailsByResource' \
  -d '{
    "ResourceType": {},
    "ResourceId": {},
    "ComplianceTypes": {},
    "NextToken": {},
    "ResourceEvaluationId": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource`

Returns the evaluation results for the specified Amazon Web Services resource. The results indicate which Config rules were used to evaluate the resource, when each rule was last invoked, and whether the resource complies with each rule.

> Body parameter

```json
{
  "ResourceType": {},
  "ResourceId": {},
  "ComplianceTypes": {},
  "NextToken": {},
  "ResourceEvaluationId": {}
}
```

<h3 id="getcompliancedetailsbyresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetComplianceDetailsByResourceRequest](#schemagetcompliancedetailsbyresourcerequest)|true|none|
|» ResourceType|body|object|false|none|
|» ResourceId|body|object|false|none|
|» ComplianceTypes|body|object|false|none|
|» NextToken|body|object|false|none|
|» ResourceEvaluationId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.GetComplianceDetailsByResource|

> Example responses

> 200 Response

```json
{
  "EvaluationResults": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="getcompliancedetailsbyresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetComplianceDetailsByResourceResponse](#schemagetcompliancedetailsbyresourceresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetComplianceSummaryByConfigRule

<a id="opIdGetComplianceSummaryByConfigRule"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.GetComplianceSummaryByConfigRule'
```

`POST /#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule`

Returns the number of Config rules that are compliant and noncompliant, up to a maximum of 25 for each.

<h3 id="getcompliancesummarybyconfigrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
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
|X-Amz-Target|StarlingDoveService.GetComplianceSummaryByConfigRule|

> Example responses

> 200 Response

```json
{
  "ComplianceSummary": {
    "CompliantResourceCount": {
      "CappedCount": {},
      "CapExceeded": {}
    },
    "NonCompliantResourceCount": {
      "CappedCount": {},
      "CapExceeded": {}
    },
    "ComplianceSummaryTimestamp": {}
  }
}
```

<h3 id="getcompliancesummarybyconfigrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetComplianceSummaryByConfigRuleResponse](#schemagetcompliancesummarybyconfigruleresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetComplianceSummaryByResourceType

<a id="opIdGetComplianceSummaryByResourceType"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.GetComplianceSummaryByResourceType' \
  -d '{
    "ResourceTypes": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType`

Returns the number of resources that are compliant and the number that are noncompliant. You can specify one or more resource types to get these numbers for each resource type. The maximum number returned is 100.

> Body parameter

```json
{
  "ResourceTypes": {}
}
```

<h3 id="getcompliancesummarybyresourcetype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetComplianceSummaryByResourceTypeRequest](#schemagetcompliancesummarybyresourcetyperequest)|true|none|
|» ResourceTypes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.GetComplianceSummaryByResourceType|

> Example responses

> 200 Response

```json
{
  "ComplianceSummariesByResourceType": {}
}
```

> 480 Response

```json
null
```

<h3 id="getcompliancesummarybyresourcetype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetComplianceSummaryByResourceTypeResponse](#schemagetcompliancesummarybyresourcetyperesponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConformancePackComplianceDetails

<a id="opIdGetConformancePackComplianceDetails"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.GetConformancePackComplianceDetails' \
  -d '{
    "ConformancePackName": {},
    "Filters": {
      "ConfigRuleNames": {},
      "ComplianceType": {},
      "ResourceType": {},
      "ResourceIds": {}
    },
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails`

Returns compliance details of a conformance pack for all Amazon Web Services resources that are monitered by conformance pack.

> Body parameter

```json
{
  "ConformancePackName": {},
  "Filters": {
    "ConfigRuleNames": {},
    "ComplianceType": {},
    "ResourceType": {},
    "ResourceIds": {}
  },
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="getconformancepackcompliancedetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetConformancePackComplianceDetailsRequest](#schemagetconformancepackcompliancedetailsrequest)|true|none|
|» ConformancePackName|body|object|true|none|
|» Filters|body|object|false|none|
|» » ConfigRuleNames|body|object|false|none|
|» » ComplianceType|body|object|false|none|
|» » ResourceType|body|object|false|none|
|» » ResourceIds|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.GetConformancePackComplianceDetails|

> Example responses

> 200 Response

```json
{
  "ConformancePackName": {},
  "ConformancePackRuleEvaluationResults": {},
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

<h3 id="getconformancepackcompliancedetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConformancePackComplianceDetailsResponse](#schemagetconformancepackcompliancedetailsresponse)|
|480|480|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|NoSuchConformancePackException|[NoSuchConformancePackException](#schemanosuchconformancepackexception)|
|483|483|NoSuchConfigRuleInConformancePackException|[NoSuchConfigRuleInConformancePackException](#schemanosuchconfigruleinconformancepackexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConformancePackComplianceSummary

<a id="opIdGetConformancePackComplianceSummary"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.GetConformancePackComplianceSummary' \
  -d '{
    "ConformancePackNames": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary`

Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.

> Body parameter

```json
{
  "ConformancePackNames": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="getconformancepackcompliancesummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetConformancePackComplianceSummaryRequest](#schemagetconformancepackcompliancesummaryrequest)|true|none|
|» ConformancePackNames|body|object|true|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.GetConformancePackComplianceSummary|

> Example responses

> 200 Response

```json
{
  "ConformancePackComplianceSummaryList": {},
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

<h3 id="getconformancepackcompliancesummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConformancePackComplianceSummaryResponse](#schemagetconformancepackcompliancesummaryresponse)|
|480|480|NoSuchConformancePackException|[NoSuchConformancePackException](#schemanosuchconformancepackexception)|
|481|481|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCustomRulePolicy

<a id="opIdGetCustomRulePolicy"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.GetCustomRulePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.GetCustomRulePolicy' \
  -d '{
    "ConfigRuleName": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.GetCustomRulePolicy`

Returns the policy definition containing the logic for your Config Custom Policy rule.

> Body parameter

```json
{
  "ConfigRuleName": {}
}
```

<h3 id="getcustomrulepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetCustomRulePolicyRequest](#schemagetcustomrulepolicyrequest)|true|none|
|» ConfigRuleName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.GetCustomRulePolicy|

> Example responses

> 200 Response

```json
{
  "PolicyText": {}
}
```

> 480 Response

```json
null
```

<h3 id="getcustomrulepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCustomRulePolicyResponse](#schemagetcustomrulepolicyresponse)|
|480|480|NoSuchConfigRuleException|[NoSuchConfigRuleException](#schemanosuchconfigruleexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDiscoveredResourceCounts

<a id="opIdGetDiscoveredResourceCounts"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.GetDiscoveredResourceCounts' \
  -d '{
    "resourceTypes": {},
    "limit": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts`

<p>Returns the resource types, the number of each resource type, and the total number of resources that Config is recording in this region for your Amazon Web Services account. </p> <p class="title"> <b>Example</b> </p> <ol> <li> <p>Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets.</p> </li> <li> <p>You make a call to the <code>GetDiscoveredResourceCounts</code> action and specify that you want all resource types. </p> </li> <li> <p>Config returns the following:</p> <ul> <li> <p>The resource types (EC2 instances, IAM users, and S3 buckets).</p> </li> <li> <p>The number of each resource type (25, 20, and 15).</p> </li> <li> <p>The total number of all resources (60).</p> </li> </ul> </li> </ol> <p>The response is paginated. By default, Config lists 100 <a>ResourceCount</a> objects on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>If you make a call to the <a>GetDiscoveredResourceCounts</a> action, you might not immediately receive resource counts in the following situations:</p> <ul> <li> <p>You are a new Config customer.</p> </li> <li> <p>You just enabled resource recording.</p> </li> </ul> <p>It might take a few minutes for Config to record and count your resources. Wait a few minutes and then retry the <a>GetDiscoveredResourceCounts</a> action. </p> </note>

> Body parameter

```json
{
  "resourceTypes": {},
  "limit": {},
  "nextToken": {}
}
```

<h3 id="getdiscoveredresourcecounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetDiscoveredResourceCountsRequest](#schemagetdiscoveredresourcecountsrequest)|true|none|
|» resourceTypes|body|object|false|none|
|» limit|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.GetDiscoveredResourceCounts|

> Example responses

> 200 Response

```json
{
  "totalDiscoveredResources": {},
  "resourceCounts": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getdiscoveredresourcecounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDiscoveredResourceCountsResponse](#schemagetdiscoveredresourcecountsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOrganizationConfigRuleDetailedStatus

<a id="opIdGetOrganizationConfigRuleDetailedStatus"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.GetOrganizationConfigRuleDetailedStatus' \
  -d '{
    "OrganizationConfigRuleName": {},
    "Filters": {
      "AccountId": {},
      "MemberAccountRuleStatus": {}
    },
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus`

Returns detailed status for each member account within an organization for a given organization Config rule.

> Body parameter

```json
{
  "OrganizationConfigRuleName": {},
  "Filters": {
    "AccountId": {},
    "MemberAccountRuleStatus": {}
  },
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="getorganizationconfigruledetailedstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetOrganizationConfigRuleDetailedStatusRequest](#schemagetorganizationconfigruledetailedstatusrequest)|true|none|
|» OrganizationConfigRuleName|body|object|true|none|
|» Filters|body|object|false|none|
|» » AccountId|body|object|false|none|
|» » MemberAccountRuleStatus|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.GetOrganizationConfigRuleDetailedStatus|

> Example responses

> 200 Response

```json
{
  "OrganizationConfigRuleDetailedStatus": {},
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

<h3 id="getorganizationconfigruledetailedstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOrganizationConfigRuleDetailedStatusResponse](#schemagetorganizationconfigruledetailedstatusresponse)|
|480|480|NoSuchOrganizationConfigRuleException|[NoSuchOrganizationConfigRuleException](#schemanosuchorganizationconfigruleexception)|
|481|481|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|OrganizationAccessDeniedException|[OrganizationAccessDeniedException](#schemaorganizationaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOrganizationConformancePackDetailedStatus

<a id="opIdGetOrganizationConformancePackDetailedStatus"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.GetOrganizationConformancePackDetailedStatus' \
  -d '{
    "OrganizationConformancePackName": {},
    "Filters": {
      "AccountId": {},
      "Status": {}
    },
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus`

Returns detailed status for each member account within an organization for a given organization conformance pack.

> Body parameter

```json
{
  "OrganizationConformancePackName": {},
  "Filters": {
    "AccountId": {},
    "Status": {}
  },
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="getorganizationconformancepackdetailedstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetOrganizationConformancePackDetailedStatusRequest](#schemagetorganizationconformancepackdetailedstatusrequest)|true|none|
|» OrganizationConformancePackName|body|object|true|none|
|» Filters|body|object|false|none|
|» » AccountId|body|object|false|none|
|» » Status|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.GetOrganizationConformancePackDetailedStatus|

> Example responses

> 200 Response

```json
{
  "OrganizationConformancePackDetailedStatuses": {},
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

<h3 id="getorganizationconformancepackdetailedstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOrganizationConformancePackDetailedStatusResponse](#schemagetorganizationconformancepackdetailedstatusresponse)|
|480|480|NoSuchOrganizationConformancePackException|[NoSuchOrganizationConformancePackException](#schemanosuchorganizationconformancepackexception)|
|481|481|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|OrganizationAccessDeniedException|[OrganizationAccessDeniedException](#schemaorganizationaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOrganizationCustomRulePolicy

<a id="opIdGetOrganizationCustomRulePolicy"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.GetOrganizationCustomRulePolicy' \
  -d '{
    "OrganizationConfigRuleName": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy`

Returns the policy definition containing the logic for your organization Config Custom Policy rule.

> Body parameter

```json
{
  "OrganizationConfigRuleName": {}
}
```

<h3 id="getorganizationcustomrulepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetOrganizationCustomRulePolicyRequest](#schemagetorganizationcustomrulepolicyrequest)|true|none|
|» OrganizationConfigRuleName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.GetOrganizationCustomRulePolicy|

> Example responses

> 200 Response

```json
{
  "PolicyText": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="getorganizationcustomrulepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOrganizationCustomRulePolicyResponse](#schemagetorganizationcustomrulepolicyresponse)|
|480|480|NoSuchOrganizationConfigRuleException|[NoSuchOrganizationConfigRuleException](#schemanosuchorganizationconfigruleexception)|
|481|481|OrganizationAccessDeniedException|[OrganizationAccessDeniedException](#schemaorganizationaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourceConfigHistory

<a id="opIdGetResourceConfigHistory"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.GetResourceConfigHistory' \
  -d '{
    "resourceType": {},
    "resourceId": {},
    "laterTime": {},
    "earlierTime": {},
    "chronologicalOrder": {},
    "limit": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory`

<p>Returns a list of <code>ConfigurationItems</code> for the specified resource. The list contains details about each state of the resource during the specified time interval. If you specified a retention period to retain your <code>ConfigurationItems</code> between a minimum of 30 days and a maximum of 7 years (2557 days), Config returns the <code>ConfigurationItems</code> for the specified retention period. </p> <p>The response is paginated. By default, Config returns a limit of 10 configuration items per page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>Each call to the API is limited to span a duration of seven days. It is likely that the number of records returned is smaller than the specified <code>limit</code>. In such cases, you can make another call, using the <code>nextToken</code>.</p> </note>

> Body parameter

```json
{
  "resourceType": {},
  "resourceId": {},
  "laterTime": {},
  "earlierTime": {},
  "chronologicalOrder": {},
  "limit": {},
  "nextToken": {}
}
```

<h3 id="getresourceconfighistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetResourceConfigHistoryRequest](#schemagetresourceconfighistoryrequest)|true|none|
|» resourceType|body|object|true|none|
|» resourceId|body|object|true|none|
|» laterTime|body|object|false|none|
|» earlierTime|body|object|false|none|
|» chronologicalOrder|body|object|false|none|
|» limit|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.GetResourceConfigHistory|

> Example responses

> 200 Response

```json
{
  "configurationItems": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="getresourceconfighistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourceConfigHistoryResponse](#schemagetresourceconfighistoryresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidTimeRangeException|[InvalidTimeRangeException](#schemainvalidtimerangeexception)|
|482|482|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|NoAvailableConfigurationRecorderException|[NoAvailableConfigurationRecorderException](#schemanoavailableconfigurationrecorderexception)|
|485|485|ResourceNotDiscoveredException|[ResourceNotDiscoveredException](#schemaresourcenotdiscoveredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourceEvaluationSummary

<a id="opIdGetResourceEvaluationSummary"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.GetResourceEvaluationSummary' \
  -d '{
    "ResourceEvaluationId": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary`

<p>Returns a summary of resource evaluation for the specified resource evaluation ID from the proactive rules that were run. The results indicate which evaluation context was used to evaluate the rules, which resource details were evaluated, the evaluation mode that was run, and whether the resource details comply with the configuration of the proactive rules. </p> <note> <p>To see additional information about the evaluation result, such as which rule flagged a resource as NON_COMPLIANT, use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByResource.html">GetComplianceDetailsByResource</a> API. For more information, see the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceEvaluationSummary.html#API_GetResourceEvaluationSummary_Examples">Examples</a> section.</p> </note>

> Body parameter

```json
{
  "ResourceEvaluationId": {}
}
```

<h3 id="getresourceevaluationsummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetResourceEvaluationSummaryRequest](#schemagetresourceevaluationsummaryrequest)|true|none|
|» ResourceEvaluationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.GetResourceEvaluationSummary|

> Example responses

> 200 Response

```json
{
  "ResourceEvaluationId": {},
  "EvaluationMode": {},
  "EvaluationStatus": {
    "Status": {},
    "FailureReason": {}
  },
  "EvaluationStartTimestamp": {},
  "Compliance": {},
  "EvaluationContext": {
    "EvaluationContextIdentifier": {}
  },
  "ResourceDetails": {
    "ResourceId": {},
    "ResourceType": {},
    "ResourceConfiguration": {},
    "ResourceConfigurationSchemaType": {}
  }
}
```

> 480 Response

```json
null
```

<h3 id="getresourceevaluationsummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourceEvaluationSummaryResponse](#schemagetresourceevaluationsummaryresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStoredQuery

<a id="opIdGetStoredQuery"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.GetStoredQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.GetStoredQuery' \
  -d '{
    "QueryName": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.GetStoredQuery`

Returns the details of a specific stored query.

> Body parameter

```json
{
  "QueryName": {}
}
```

<h3 id="getstoredquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetStoredQueryRequest](#schemagetstoredqueryrequest)|true|none|
|» QueryName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.GetStoredQuery|

> Example responses

> 200 Response

```json
{
  "StoredQuery": {
    "QueryId": {},
    "QueryArn": {},
    "QueryName": {},
    "Description": {},
    "Expression": {}
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

<h3 id="getstoredquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStoredQueryResponse](#schemagetstoredqueryresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAggregateDiscoveredResources

<a id="opIdListAggregateDiscoveredResources"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.ListAggregateDiscoveredResources' \
  -d '{
    "ConfigurationAggregatorName": {},
    "ResourceType": {},
    "Filters": {
      "AccountId": {},
      "ResourceId": {},
      "ResourceName": {},
      "Region": {}
    },
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources`

<p>Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions. A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region. You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region.</p> <p>For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type <code>AWS::EC2::Instance</code> then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.</p>

> Body parameter

```json
{
  "ConfigurationAggregatorName": {},
  "ResourceType": {},
  "Filters": {
    "AccountId": {},
    "ResourceId": {},
    "ResourceName": {},
    "Region": {}
  },
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="listaggregatediscoveredresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListAggregateDiscoveredResourcesRequest](#schemalistaggregatediscoveredresourcesrequest)|true|none|
|» ConfigurationAggregatorName|body|object|true|none|
|» ResourceType|body|object|true|none|
|» Filters|body|object|false|none|
|» » AccountId|body|object|false|none|
|» » ResourceId|body|object|false|none|
|» » ResourceName|body|object|false|none|
|» » Region|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.ListAggregateDiscoveredResources|

> Example responses

> 200 Response

```json
{
  "ResourceIdentifiers": {},
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

<h3 id="listaggregatediscoveredresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAggregateDiscoveredResourcesResponse](#schemalistaggregatediscoveredresourcesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|NoSuchConfigurationAggregatorException|[NoSuchConfigurationAggregatorException](#schemanosuchconfigurationaggregatorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConformancePackComplianceScores

<a id="opIdListConformancePackComplianceScores"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.ListConformancePackComplianceScores' \
  -d '{
    "Filters": {
      "ConformancePackNames": {}
    },
    "SortOrder": {},
    "SortBy": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores`

<p>Returns a list of conformance pack compliance scores. A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack. This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand the level of compliance in your conformance packs.</p> <note> <p>Conformance packs with no evaluation results will have a compliance score of <code>INSUFFICIENT_DATA</code>.</p> </note>

> Body parameter

```json
{
  "Filters": {
    "ConformancePackNames": {}
  },
  "SortOrder": {},
  "SortBy": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="listconformancepackcompliancescores-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListConformancePackComplianceScoresRequest](#schemalistconformancepackcompliancescoresrequest)|true|none|
|» Filters|body|object|false|none|
|» » ConformancePackNames|body|object|true|none|
|» SortOrder|body|object|false|none|
|» SortBy|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.ListConformancePackComplianceScores|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "ConformancePackComplianceScores": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listconformancepackcompliancescores-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConformancePackComplianceScoresResponse](#schemalistconformancepackcompliancescoresresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDiscoveredResources

<a id="opIdListDiscoveredResources"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.ListDiscoveredResources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.ListDiscoveredResources' \
  -d '{
    "resourceType": {},
    "resourceIds": {},
    "resourceName": {},
    "limit": {},
    "includeDeletedResources": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.ListDiscoveredResources`

<p>Accepts a resource type and returns a list of resource identifiers for the resources of that type. A resource identifier includes the resource type, ID, and (if available) the custom resource name. The results consist of resources that Config has discovered, including those that Config is not currently recording. You can narrow the results to include only resources that have specific resource IDs or a resource name.</p> <note> <p>You can specify either resource IDs or a resource name, but not both, in the same request.</p> </note> <p>The response is paginated. By default, Config lists 100 resource identifiers on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p>

> Body parameter

```json
{
  "resourceType": {},
  "resourceIds": {},
  "resourceName": {},
  "limit": {},
  "includeDeletedResources": {},
  "nextToken": {}
}
```

<h3 id="listdiscoveredresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListDiscoveredResourcesRequest](#schemalistdiscoveredresourcesrequest)|true|none|
|» resourceType|body|object|true|none|
|» resourceIds|body|object|false|none|
|» resourceName|body|object|false|none|
|» limit|body|object|false|none|
|» includeDeletedResources|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.ListDiscoveredResources|

> Example responses

> 200 Response

```json
{
  "resourceIdentifiers": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listdiscoveredresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDiscoveredResourcesResponse](#schemalistdiscoveredresourcesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|NoAvailableConfigurationRecorderException|[NoAvailableConfigurationRecorderException](#schemanoavailableconfigurationrecorderexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourceEvaluations

<a id="opIdListResourceEvaluations"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.ListResourceEvaluations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.ListResourceEvaluations' \
  -d '{
    "Filters": {
      "EvaluationMode": {},
      "TimeWindow": {
        "StartTime": {},
        "EndTime": {}
      },
      "EvaluationContextIdentifier": {}
    },
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.ListResourceEvaluations`

Returns a list of proactive resource evaluations.

> Body parameter

```json
{
  "Filters": {
    "EvaluationMode": {},
    "TimeWindow": {
      "StartTime": {},
      "EndTime": {}
    },
    "EvaluationContextIdentifier": {}
  },
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="listresourceevaluations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListResourceEvaluationsRequest](#schemalistresourceevaluationsrequest)|true|none|
|» Filters|body|object|false|none|
|» » EvaluationMode|body|object|false|none|
|» » TimeWindow|body|object|false|none|
|» » » StartTime|body|object|false|none|
|» » » EndTime|body|object|false|none|
|» » EvaluationContextIdentifier|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.ListResourceEvaluations|

> Example responses

> 200 Response

```json
{
  "ResourceEvaluations": {},
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

<h3 id="listresourceevaluations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourceEvaluationsResponse](#schemalistresourceevaluationsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidTimeRangeException|[InvalidTimeRangeException](#schemainvalidtimerangeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStoredQueries

<a id="opIdListStoredQueries"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.ListStoredQueries' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.ListStoredQueries' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.ListStoredQueries`

Lists the stored queries for a single Amazon Web Services account and a single Amazon Web Services Region. The default is 100. 

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="liststoredqueries-parameters">Parameters</h3>

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
|body|body|[ListStoredQueriesRequest](#schemaliststoredqueriesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.ListStoredQueries|

> Example responses

> 200 Response

```json
{
  "StoredQueryMetadata": {},
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

<h3 id="liststoredqueries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStoredQueriesResponse](#schemaliststoredqueriesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.ListTagsForResource' \
  -d '{
    "ResourceArn": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.ListTagsForResource`

List the tags for Config resource.

> Body parameter

```json
{
  "ResourceArn": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.ListTagsForResource|

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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAggregationAuthorization

<a id="opIdPutAggregationAuthorization"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.PutAggregationAuthorization' \
  -d '{
    "AuthorizedAccountId": {},
    "AuthorizedAwsRegion": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization`

<p>Authorizes the aggregator account and region to collect data from the source account and region. </p> <note> <p> <code>PutAggregationAuthorization</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>

> Body parameter

```json
{
  "AuthorizedAccountId": {},
  "AuthorizedAwsRegion": {},
  "Tags": {}
}
```

<h3 id="putaggregationauthorization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutAggregationAuthorizationRequest](#schemaputaggregationauthorizationrequest)|true|none|
|» AuthorizedAccountId|body|object|true|none|
|» AuthorizedAwsRegion|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.PutAggregationAuthorization|

> Example responses

> 200 Response

```json
{
  "AggregationAuthorization": {
    "AggregationAuthorizationArn": {},
    "AuthorizedAccountId": {},
    "AuthorizedAwsRegion": {},
    "CreationTime": {}
  }
}
```

> 480 Response

```json
null
```

<h3 id="putaggregationauthorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAggregationAuthorizationResponse](#schemaputaggregationauthorizationresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutConfigRule

<a id="opIdPutConfigRule"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.PutConfigRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.PutConfigRule' \
  -d '{
    "ConfigRule": {
      "ConfigRuleName": {},
      "ConfigRuleArn": {},
      "ConfigRuleId": {},
      "Description": {},
      "Scope": {
        "ComplianceResourceTypes": {},
        "TagKey": {},
        "TagValue": {},
        "ComplianceResourceId": {}
      },
      "Source": {
        "Owner": {},
        "SourceIdentifier": {},
        "SourceDetails": {},
        "CustomPolicyDetails": {
          "PolicyRuntime": {},
          "PolicyText": {},
          "EnableDebugLogDelivery": {}
        }
      },
      "InputParameters": {},
      "MaximumExecutionFrequency": {},
      "ConfigRuleState": {},
      "CreatedBy": {},
      "EvaluationModes": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.PutConfigRule`

<p>Adds or updates an Config rule to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the <i>Config Developer Guide</i>.</p> <p>There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>. You can use <code>PutConfigRule</code> to create both Config Managed Rules and Config Custom Rules.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>. If you are adding an Config managed rule, you must specify the rule's identifier for the <code>SourceIdentifier</code> key.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function that the rule invokes to evaluate your resources. When you use <code>PutConfigRule</code> to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function. You specify the ARN in the <code>SourceIdentifier</code> key. This key is part of the <code>Source</code> object, which is part of the <code>ConfigRule</code> object. </p> <p>For any new Config rule that you add, specify the <code>ConfigRuleName</code> in the <code>ConfigRule</code> object. Do not specify the <code>ConfigRuleArn</code> or the <code>ConfigRuleId</code>. These values are generated by Config for new rules.</p> <p>If you are updating a rule that you added previously, you can specify the rule by <code>ConfigRuleName</code>, <code>ConfigRuleId</code>, or <code>ConfigRuleArn</code> in the <code>ConfigRule</code> data type that you use in this request.</p> <p>For more information about developing and using Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating Resources with Config Rules</a> in the <i>Config Developer Guide</i>.</p> <note> <p> <code>PutConfigRule</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>

> Body parameter

```json
{
  "ConfigRule": {
    "ConfigRuleName": {},
    "ConfigRuleArn": {},
    "ConfigRuleId": {},
    "Description": {},
    "Scope": {
      "ComplianceResourceTypes": {},
      "TagKey": {},
      "TagValue": {},
      "ComplianceResourceId": {}
    },
    "Source": {
      "Owner": {},
      "SourceIdentifier": {},
      "SourceDetails": {},
      "CustomPolicyDetails": {
        "PolicyRuntime": {},
        "PolicyText": {},
        "EnableDebugLogDelivery": {}
      }
    },
    "InputParameters": {},
    "MaximumExecutionFrequency": {},
    "ConfigRuleState": {},
    "CreatedBy": {},
    "EvaluationModes": {}
  },
  "Tags": {}
}
```

<h3 id="putconfigrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutConfigRuleRequest](#schemaputconfigrulerequest)|true|none|
|» ConfigRule|body|object|true|none|
|» » ConfigRuleName|body|object|false|none|
|» » ConfigRuleArn|body|object|false|none|
|» » ConfigRuleId|body|object|false|none|
|» » Description|body|object|false|none|
|» » Scope|body|object|false|none|
|» » » ComplianceResourceTypes|body|object|false|none|
|» » » TagKey|body|object|false|none|
|» » » TagValue|body|object|false|none|
|» » » ComplianceResourceId|body|object|false|none|
|» » Source|body|object|true|none|
|» » » Owner|body|object|true|none|
|» » » SourceIdentifier|body|object|false|none|
|» » » SourceDetails|body|object|false|none|
|» » » CustomPolicyDetails|body|object|false|none|
|» » » » PolicyRuntime|body|object|true|none|
|» » » » PolicyText|body|object|true|none|
|» » » » EnableDebugLogDelivery|body|object|false|none|
|» » InputParameters|body|object|false|none|
|» » MaximumExecutionFrequency|body|object|false|none|
|» » ConfigRuleState|body|object|false|none|
|» » CreatedBy|body|object|false|none|
|» » EvaluationModes|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.PutConfigRule|

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

<h3 id="putconfigrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MaxNumberOfConfigRulesExceededException|[MaxNumberOfConfigRulesExceededException](#schemamaxnumberofconfigrulesexceededexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|InsufficientPermissionsException|[InsufficientPermissionsException](#schemainsufficientpermissionsexception)|
|484|484|NoAvailableConfigurationRecorderException|[NoAvailableConfigurationRecorderException](#schemanoavailableconfigurationrecorderexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutConfigurationAggregator

<a id="opIdPutConfigurationAggregator"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.PutConfigurationAggregator' \
  -d '{
    "ConfigurationAggregatorName": {},
    "AccountAggregationSources": {},
    "OrganizationAggregationSource": {
      "RoleArn": {},
      "AwsRegions": {},
      "AllAwsRegions": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator`

<p>Creates and updates the configuration aggregator with the selected source accounts and regions. The source account can be individual account(s) or an organization.</p> <p> <code>accountIds</code> that are passed will be replaced with existing accounts. If you want to add additional accounts into the aggregator, call <code>DescribeConfigurationAggregators</code> to get the previous accounts and then append new ones.</p> <note> <p>Config should be enabled in source accounts and regions you want to aggregate.</p> <p>If your source type is an organization, you must be signed in to the management account or a registered delegated administrator and all the features must be enabled in your organization. If the caller is a management account, Config calls <code>EnableAwsServiceAccess</code> API to enable integration between Config and Organizations. If the caller is a registered delegated administrator, Config calls <code>ListDelegatedAdministrators</code> API to verify whether the caller is a valid delegated administrator.</p> <p>To register a delegated administrator, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/set-up-aggregator-cli.html#register-a-delegated-administrator-cli">Register a Delegated Administrator</a> in the <i>Config developer guide</i>. </p> </note> <note> <p> <code>PutConfigurationAggregator</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>

> Body parameter

```json
{
  "ConfigurationAggregatorName": {},
  "AccountAggregationSources": {},
  "OrganizationAggregationSource": {
    "RoleArn": {},
    "AwsRegions": {},
    "AllAwsRegions": {}
  },
  "Tags": {}
}
```

<h3 id="putconfigurationaggregator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutConfigurationAggregatorRequest](#schemaputconfigurationaggregatorrequest)|true|none|
|» ConfigurationAggregatorName|body|object|true|none|
|» AccountAggregationSources|body|object|false|none|
|» OrganizationAggregationSource|body|object|false|none|
|» » RoleArn|body|object|true|none|
|» » AwsRegions|body|object|false|none|
|» » AllAwsRegions|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.PutConfigurationAggregator|

> Example responses

> 200 Response

```json
{
  "ConfigurationAggregator": {
    "ConfigurationAggregatorName": {},
    "ConfigurationAggregatorArn": {},
    "AccountAggregationSources": {},
    "OrganizationAggregationSource": {
      "RoleArn": {},
      "AwsRegions": {},
      "AllAwsRegions": {}
    },
    "CreationTime": {},
    "LastUpdatedTime": {},
    "CreatedBy": {}
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

<h3 id="putconfigurationaggregator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutConfigurationAggregatorResponse](#schemaputconfigurationaggregatorresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InvalidRoleException|[InvalidRoleException](#schemainvalidroleexception)|
|483|483|OrganizationAccessDeniedException|[OrganizationAccessDeniedException](#schemaorganizationaccessdeniedexception)|
|484|484|NoAvailableOrganizationException|[NoAvailableOrganizationException](#schemanoavailableorganizationexception)|
|485|485|OrganizationAllFeaturesNotEnabledException|[OrganizationAllFeaturesNotEnabledException](#schemaorganizationallfeaturesnotenabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutConfigurationRecorder

<a id="opIdPutConfigurationRecorder"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.PutConfigurationRecorder' \
  -d '{
    "ConfigurationRecorder": {
      "name": {},
      "roleARN": {},
      "recordingGroup": {
        "allSupported": {},
        "includeGlobalResourceTypes": {},
        "resourceTypes": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder`

<p>Creates a new configuration recorder to record the selected resource configurations.</p> <p>You can use this action to change the role <code>roleARN</code> or the <code>recordingGroup</code> of an existing recorder. To change the role, call the action on the existing configuration recorder and specify a role.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> <p>If <code>ConfigurationRecorder</code> does not have the <b>recordingGroup</b> parameter specified, the default is to record all supported resource types.</p> </note>

> Body parameter

```json
{
  "ConfigurationRecorder": {
    "name": {},
    "roleARN": {},
    "recordingGroup": {
      "allSupported": {},
      "includeGlobalResourceTypes": {},
      "resourceTypes": {}
    }
  }
}
```

<h3 id="putconfigurationrecorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutConfigurationRecorderRequest](#schemaputconfigurationrecorderrequest)|true|none|
|» ConfigurationRecorder|body|object|true|none|
|» » name|body|object|false|none|
|» » roleARN|body|object|false|none|
|» » recordingGroup|body|object|false|none|
|» » » allSupported|body|object|false|none|
|» » » includeGlobalResourceTypes|body|object|false|none|
|» » » resourceTypes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.PutConfigurationRecorder|

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

<h3 id="putconfigurationrecorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|MaxNumberOfConfigurationRecordersExceededException|[MaxNumberOfConfigurationRecordersExceededException](#schemamaxnumberofconfigurationrecordersexceededexception)|
|481|481|InvalidConfigurationRecorderNameException|[InvalidConfigurationRecorderNameException](#schemainvalidconfigurationrecordernameexception)|
|482|482|InvalidRoleException|[InvalidRoleException](#schemainvalidroleexception)|
|483|483|InvalidRecordingGroupException|[InvalidRecordingGroupException](#schemainvalidrecordinggroupexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutConformancePack

<a id="opIdPutConformancePack"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.PutConformancePack' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.PutConformancePack' \
  -d '{
    "ConformancePackName": {},
    "TemplateS3Uri": {},
    "TemplateBody": {},
    "DeliveryS3Bucket": {},
    "DeliveryS3KeyPrefix": {},
    "ConformancePackInputParameters": {},
    "TemplateSSMDocumentDetails": {
      "DocumentName": {},
      "DocumentVersion": {}
    }
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.PutConformancePack`

<p>Creates or updates a conformance pack. A conformance pack is a collection of Config rules that can be easily deployed in an account and a region and across an organization. For information on how many conformance packs you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the Config Developer Guide.</p> <p>This API creates a service-linked role <code>AWSServiceRoleForConfigConforms</code> in your account. The service-linked role is created only when the role does not exist in your account. </p> <note> <p>You must specify only one of the follow parameters: <code>TemplateS3Uri</code>, <code>TemplateBody</code> or <code>TemplateSSMDocumentDetails</code>.</p> </note>

> Body parameter

```json
{
  "ConformancePackName": {},
  "TemplateS3Uri": {},
  "TemplateBody": {},
  "DeliveryS3Bucket": {},
  "DeliveryS3KeyPrefix": {},
  "ConformancePackInputParameters": {},
  "TemplateSSMDocumentDetails": {
    "DocumentName": {},
    "DocumentVersion": {}
  }
}
```

<h3 id="putconformancepack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutConformancePackRequest](#schemaputconformancepackrequest)|true|none|
|» ConformancePackName|body|object|true|none|
|» TemplateS3Uri|body|object|false|none|
|» TemplateBody|body|object|false|none|
|» DeliveryS3Bucket|body|object|false|none|
|» DeliveryS3KeyPrefix|body|object|false|none|
|» ConformancePackInputParameters|body|object|false|none|
|» TemplateSSMDocumentDetails|body|object|false|none|
|» » DocumentName|body|object|true|none|
|» » DocumentVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.PutConformancePack|

> Example responses

> 200 Response

```json
{
  "ConformancePackArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="putconformancepack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutConformancePackResponse](#schemaputconformancepackresponse)|
|480|480|InsufficientPermissionsException|[InsufficientPermissionsException](#schemainsufficientpermissionsexception)|
|481|481|ConformancePackTemplateValidationException|[ConformancePackTemplateValidationException](#schemaconformancepacktemplatevalidationexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|MaxNumberOfConformancePacksExceededException|[MaxNumberOfConformancePacksExceededException](#schemamaxnumberofconformancepacksexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutDeliveryChannel

<a id="opIdPutDeliveryChannel"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.PutDeliveryChannel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.PutDeliveryChannel' \
  -d '{
    "DeliveryChannel": {
      "name": {},
      "s3BucketName": {},
      "s3KeyPrefix": {},
      "s3KmsKeyArn": {},
      "snsTopicARN": {},
      "configSnapshotDeliveryProperties": {
        "deliveryFrequency": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.PutDeliveryChannel`

<p>Creates a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic.</p> <p>Before you can create a delivery channel, you must create a configuration recorder.</p> <p>You can use this action to change the Amazon S3 bucket or an Amazon SNS topic of the existing delivery channel. To change the Amazon S3 bucket or an Amazon SNS topic, call this action and specify the changed values for the S3 bucket and the SNS topic. If you specify a different value for either the S3 bucket or the SNS topic, this action will keep the existing value for the parameter that is not changed.</p> <note> <p>You can have only one delivery channel per region in your account.</p> </note>

> Body parameter

```json
{
  "DeliveryChannel": {
    "name": {},
    "s3BucketName": {},
    "s3KeyPrefix": {},
    "s3KmsKeyArn": {},
    "snsTopicARN": {},
    "configSnapshotDeliveryProperties": {
      "deliveryFrequency": {}
    }
  }
}
```

<h3 id="putdeliverychannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutDeliveryChannelRequest](#schemaputdeliverychannelrequest)|true|none|
|» DeliveryChannel|body|object|true|none|
|» » name|body|object|false|none|
|» » s3BucketName|body|object|false|none|
|» » s3KeyPrefix|body|object|false|none|
|» » s3KmsKeyArn|body|object|false|none|
|» » snsTopicARN|body|object|false|none|
|» » configSnapshotDeliveryProperties|body|object|false|none|
|» » » deliveryFrequency|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.PutDeliveryChannel|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="putdeliverychannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|MaxNumberOfDeliveryChannelsExceededException|[MaxNumberOfDeliveryChannelsExceededException](#schemamaxnumberofdeliverychannelsexceededexception)|
|481|481|NoAvailableConfigurationRecorderException|[NoAvailableConfigurationRecorderException](#schemanoavailableconfigurationrecorderexception)|
|482|482|InvalidDeliveryChannelNameException|[InvalidDeliveryChannelNameException](#schemainvaliddeliverychannelnameexception)|
|483|483|NoSuchBucketException|[NoSuchBucketException](#schemanosuchbucketexception)|
|484|484|InvalidS3KeyPrefixException|[InvalidS3KeyPrefixException](#schemainvalids3keyprefixexception)|
|485|485|InvalidS3KmsKeyArnException|[InvalidS3KmsKeyArnException](#schemainvalids3kmskeyarnexception)|
|486|486|InvalidSNSTopicARNException|[InvalidSNSTopicARNException](#schemainvalidsnstopicarnexception)|
|487|487|InsufficientDeliveryPolicyException|[InsufficientDeliveryPolicyException](#schemainsufficientdeliverypolicyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutEvaluations

<a id="opIdPutEvaluations"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.PutEvaluations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.PutEvaluations' \
  -d '{
    "Evaluations": {},
    "ResultToken": {},
    "TestMode": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.PutEvaluations`

Used by an Lambda function to deliver evaluation results to Config. This action is required in every Lambda function that is invoked by an Config rule.

> Body parameter

```json
{
  "Evaluations": {},
  "ResultToken": {},
  "TestMode": {}
}
```

<h3 id="putevaluations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutEvaluationsRequest](#schemaputevaluationsrequest)|true|none|
|» Evaluations|body|object|false|none|
|» ResultToken|body|object|true|none|
|» TestMode|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.PutEvaluations|

> Example responses

> 200 Response

```json
{
  "FailedEvaluations": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="putevaluations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutEvaluationsResponse](#schemaputevaluationsresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|InvalidResultTokenException|[InvalidResultTokenException](#schemainvalidresulttokenexception)|
|482|482|NoSuchConfigRuleException|[NoSuchConfigRuleException](#schemanosuchconfigruleexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutExternalEvaluation

<a id="opIdPutExternalEvaluation"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.PutExternalEvaluation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.PutExternalEvaluation' \
  -d '{
    "ConfigRuleName": {},
    "ExternalEvaluation": {
      "ComplianceResourceType": {},
      "ComplianceResourceId": {},
      "ComplianceType": {},
      "Annotation": {},
      "OrderingTimestamp": {}
    }
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.PutExternalEvaluation`

Add or updates the evaluations for process checks. This API checks if the rule is a process check when the name of the Config rule is provided.

> Body parameter

```json
{
  "ConfigRuleName": {},
  "ExternalEvaluation": {
    "ComplianceResourceType": {},
    "ComplianceResourceId": {},
    "ComplianceType": {},
    "Annotation": {},
    "OrderingTimestamp": {}
  }
}
```

<h3 id="putexternalevaluation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutExternalEvaluationRequest](#schemaputexternalevaluationrequest)|true|none|
|» ConfigRuleName|body|object|true|none|
|» ExternalEvaluation|body|object|true|none|
|» » ComplianceResourceType|body|object|true|none|
|» » ComplianceResourceId|body|object|true|none|
|» » ComplianceType|body|object|true|none|
|» » Annotation|body|object|false|none|
|» » OrderingTimestamp|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.PutExternalEvaluation|

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

<h3 id="putexternalevaluation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutExternalEvaluationResponse](#schemaputexternalevaluationresponse)|
|480|480|NoSuchConfigRuleException|[NoSuchConfigRuleException](#schemanosuchconfigruleexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutOrganizationConfigRule

<a id="opIdPutOrganizationConfigRule"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.PutOrganizationConfigRule' \
  -d '{
    "OrganizationConfigRuleName": {},
    "OrganizationManagedRuleMetadata": {
      "Description": {},
      "RuleIdentifier": {},
      "InputParameters": {},
      "MaximumExecutionFrequency": {},
      "ResourceTypesScope": {},
      "ResourceIdScope": {},
      "TagKeyScope": {},
      "TagValueScope": {}
    },
    "OrganizationCustomRuleMetadata": {
      "Description": {},
      "LambdaFunctionArn": {},
      "OrganizationConfigRuleTriggerTypes": {},
      "InputParameters": {},
      "MaximumExecutionFrequency": {},
      "ResourceTypesScope": {},
      "ResourceIdScope": {},
      "TagKeyScope": {},
      "TagValueScope": {}
    },
    "ExcludedAccounts": {},
    "OrganizationCustomPolicyRuleMetadata": {
      "Description": {},
      "OrganizationConfigRuleTriggerTypes": {},
      "InputParameters": {},
      "MaximumExecutionFrequency": {},
      "ResourceTypesScope": {},
      "ResourceIdScope": {},
      "TagKeyScope": {},
      "TagValueScope": {},
      "PolicyRuntime": {},
      "PolicyText": {},
      "DebugLogDeliveryAccounts": {}
    }
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule`

<p>Adds or updates an Config rule for your entire organization to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many organization Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the <i>Config Developer Guide</i>.</p> <p> Only a management account and a delegated administrator can create or update an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p> <p>This API enables organization service access through the <code>EnableAWSServiceAccess</code> action and creates a service-linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. Config verifies the existence of role with <code>GetRole</code> action.</p> <p>To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization <code>register-delegated-administrator</code> for <code>config-multiaccountsetup.amazonaws.com</code>. </p> <p>There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>. You can use <code>PutOrganizationConfigRule</code> to create both Config Managed Rules and Config Custom Rules.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>. If you are adding an Config managed rule, you must specify the rule's identifier for the <code>RuleIdentifier</code> key.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function in the management account or a delegated administrator that the rule invokes to evaluate your resources. You also need to create an IAM role in the managed account that can be assumed by the Lambda function. When you use <code>PutOrganizationConfigRule</code> to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function.</p> <note> <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p> <p>Make sure to specify one of either <code>OrganizationCustomPolicyRuleMetadata</code> for Custom Policy rules, <code>OrganizationCustomRuleMetadata</code> for Custom Lambda rules, or <code>OrganizationManagedRuleMetadata</code> for managed rules.</p> </note>

> Body parameter

```json
{
  "OrganizationConfigRuleName": {},
  "OrganizationManagedRuleMetadata": {
    "Description": {},
    "RuleIdentifier": {},
    "InputParameters": {},
    "MaximumExecutionFrequency": {},
    "ResourceTypesScope": {},
    "ResourceIdScope": {},
    "TagKeyScope": {},
    "TagValueScope": {}
  },
  "OrganizationCustomRuleMetadata": {
    "Description": {},
    "LambdaFunctionArn": {},
    "OrganizationConfigRuleTriggerTypes": {},
    "InputParameters": {},
    "MaximumExecutionFrequency": {},
    "ResourceTypesScope": {},
    "ResourceIdScope": {},
    "TagKeyScope": {},
    "TagValueScope": {}
  },
  "ExcludedAccounts": {},
  "OrganizationCustomPolicyRuleMetadata": {
    "Description": {},
    "OrganizationConfigRuleTriggerTypes": {},
    "InputParameters": {},
    "MaximumExecutionFrequency": {},
    "ResourceTypesScope": {},
    "ResourceIdScope": {},
    "TagKeyScope": {},
    "TagValueScope": {},
    "PolicyRuntime": {},
    "PolicyText": {},
    "DebugLogDeliveryAccounts": {}
  }
}
```

<h3 id="putorganizationconfigrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutOrganizationConfigRuleRequest](#schemaputorganizationconfigrulerequest)|true|none|
|» OrganizationConfigRuleName|body|object|true|none|
|» OrganizationManagedRuleMetadata|body|object|false|none|
|» » Description|body|object|false|none|
|» » RuleIdentifier|body|object|true|none|
|» » InputParameters|body|object|false|none|
|» » MaximumExecutionFrequency|body|object|false|none|
|» » ResourceTypesScope|body|object|false|none|
|» » ResourceIdScope|body|object|false|none|
|» » TagKeyScope|body|object|false|none|
|» » TagValueScope|body|object|false|none|
|» OrganizationCustomRuleMetadata|body|object|false|none|
|» » Description|body|object|false|none|
|» » LambdaFunctionArn|body|object|true|none|
|» » OrganizationConfigRuleTriggerTypes|body|object|true|none|
|» » InputParameters|body|object|false|none|
|» » MaximumExecutionFrequency|body|object|false|none|
|» » ResourceTypesScope|body|object|false|none|
|» » ResourceIdScope|body|object|false|none|
|» » TagKeyScope|body|object|false|none|
|» » TagValueScope|body|object|false|none|
|» ExcludedAccounts|body|object|false|none|
|» OrganizationCustomPolicyRuleMetadata|body|object|false|none|
|» » Description|body|object|false|none|
|» » OrganizationConfigRuleTriggerTypes|body|object|false|none|
|» » InputParameters|body|object|false|none|
|» » MaximumExecutionFrequency|body|object|false|none|
|» » ResourceTypesScope|body|object|false|none|
|» » ResourceIdScope|body|object|false|none|
|» » TagKeyScope|body|object|false|none|
|» » TagValueScope|body|object|false|none|
|» » PolicyRuntime|body|object|true|none|
|» » PolicyText|body|object|true|none|
|» » DebugLogDeliveryAccounts|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.PutOrganizationConfigRule|

> Example responses

> 200 Response

```json
{
  "OrganizationConfigRuleArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="putorganizationconfigrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutOrganizationConfigRuleResponse](#schemaputorganizationconfigruleresponse)|
|480|480|MaxNumberOfOrganizationConfigRulesExceededException|[MaxNumberOfOrganizationConfigRulesExceededException](#schemamaxnumberoforganizationconfigrulesexceededexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|OrganizationAccessDeniedException|[OrganizationAccessDeniedException](#schemaorganizationaccessdeniedexception)|
|485|485|NoAvailableOrganizationException|[NoAvailableOrganizationException](#schemanoavailableorganizationexception)|
|486|486|OrganizationAllFeaturesNotEnabledException|[OrganizationAllFeaturesNotEnabledException](#schemaorganizationallfeaturesnotenabledexception)|
|487|487|InsufficientPermissionsException|[InsufficientPermissionsException](#schemainsufficientpermissionsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutOrganizationConformancePack

<a id="opIdPutOrganizationConformancePack"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.PutOrganizationConformancePack' \
  -d '{
    "OrganizationConformancePackName": {},
    "TemplateS3Uri": {},
    "TemplateBody": {},
    "DeliveryS3Bucket": {},
    "DeliveryS3KeyPrefix": {},
    "ConformancePackInputParameters": {},
    "ExcludedAccounts": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack`

<p>Deploys conformance packs across member accounts in an Amazon Web Services Organization. For information on how many organization conformance packs and how many Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the Config Developer Guide.</p> <p>Only a management account and a delegated administrator can call this API. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p> <p>This API enables organization service access for <code>config-multiaccountsetup.amazonaws.com</code> through the <code>EnableAWSServiceAccess</code> action and creates a service-linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization <code>register-delegate-admin</code> for <code>config-multiaccountsetup.amazonaws.com</code>.</p> <note> <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p> <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both. If you provide both Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p> <p>Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the conformance pack is created or updated. You cannot update a conformance pack while it is in this state.</p> </note>

> Body parameter

```json
{
  "OrganizationConformancePackName": {},
  "TemplateS3Uri": {},
  "TemplateBody": {},
  "DeliveryS3Bucket": {},
  "DeliveryS3KeyPrefix": {},
  "ConformancePackInputParameters": {},
  "ExcludedAccounts": {}
}
```

<h3 id="putorganizationconformancepack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutOrganizationConformancePackRequest](#schemaputorganizationconformancepackrequest)|true|none|
|» OrganizationConformancePackName|body|object|true|none|
|» TemplateS3Uri|body|object|false|none|
|» TemplateBody|body|object|false|none|
|» DeliveryS3Bucket|body|object|false|none|
|» DeliveryS3KeyPrefix|body|object|false|none|
|» ConformancePackInputParameters|body|object|false|none|
|» ExcludedAccounts|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.PutOrganizationConformancePack|

> Example responses

> 200 Response

```json
{
  "OrganizationConformancePackArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="putorganizationconformancepack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutOrganizationConformancePackResponse](#schemaputorganizationconformancepackresponse)|
|480|480|MaxNumberOfOrganizationConformancePacksExceededException|[MaxNumberOfOrganizationConformancePacksExceededException](#schemamaxnumberoforganizationconformancepacksexceededexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|OrganizationAccessDeniedException|[OrganizationAccessDeniedException](#schemaorganizationaccessdeniedexception)|
|484|484|InsufficientPermissionsException|[InsufficientPermissionsException](#schemainsufficientpermissionsexception)|
|485|485|OrganizationConformancePackTemplateValidationException|[OrganizationConformancePackTemplateValidationException](#schemaorganizationconformancepacktemplatevalidationexception)|
|486|486|OrganizationAllFeaturesNotEnabledException|[OrganizationAllFeaturesNotEnabledException](#schemaorganizationallfeaturesnotenabledexception)|
|487|487|NoAvailableOrganizationException|[NoAvailableOrganizationException](#schemanoavailableorganizationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRemediationConfigurations

<a id="opIdPutRemediationConfigurations"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.PutRemediationConfigurations' \
  -d '{
    "RemediationConfigurations": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations`

<p>Adds or updates the remediation configuration with a specific Config rule with the selected target or action. The API creates the <code>RemediationConfiguration</code> object for the Config rule. The Config rule must already exist for you to add a remediation configuration. The target (SSM document) must exist and have permissions to use the target. </p> <note> <p>If you make backward incompatible changes to the SSM document, you must call this again to ensure the remediations can run.</p> <p>This API does not support adding remediation configurations for service-linked Config Rules such as Organization Config rules, the rules deployed by conformance packs, and rules deployed by Amazon Web Services Security Hub.</p> </note> <note> <p>For manual remediation configuration, you need to provide a value for <code>automationAssumeRole</code> or use a value in the <code>assumeRole</code>field to remediate your resources. The SSM automation document can use either as long as it maps to a valid parameter.</p> <p>However, for automatic remediation configuration, the only valid <code>assumeRole</code> field value is <code>AutomationAssumeRole</code> and you need to provide a value for <code>AutomationAssumeRole</code> to remediate your resources.</p> </note>

> Body parameter

```json
{
  "RemediationConfigurations": {}
}
```

<h3 id="putremediationconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutRemediationConfigurationsRequest](#schemaputremediationconfigurationsrequest)|true|none|
|» RemediationConfigurations|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.PutRemediationConfigurations|

> Example responses

> 200 Response

```json
{
  "FailedBatches": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="putremediationconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRemediationConfigurationsResponse](#schemaputremediationconfigurationsresponse)|
|480|480|InsufficientPermissionsException|[InsufficientPermissionsException](#schemainsufficientpermissionsexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRemediationExceptions

<a id="opIdPutRemediationExceptions"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.PutRemediationExceptions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.PutRemediationExceptions' \
  -d '{
    "ConfigRuleName": {},
    "ResourceKeys": {},
    "Message": {},
    "ExpirationTime": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.PutRemediationExceptions`

<p>A remediation exception is when a specified resource is no longer considered for auto-remediation. This API adds a new exception or updates an existing exception for a specified resource with a specified Config rule. </p> <note> <p>Config generates a remediation exception when a problem occurs running a remediation action for a specified resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> </note> <note> <p>When placing an exception on an Amazon Web Services resource, it is recommended that remediation is set as manual remediation until the given Config rule for the specified resource evaluates the resource as <code>NON_COMPLIANT</code>. Once the resource has been evaluated as <code>NON_COMPLIANT</code>, you can add remediation exceptions and change the remediation type back from Manual to Auto if you want to use auto-remediation. Otherwise, using auto-remediation before a <code>NON_COMPLIANT</code> evaluation result can delete resources before the exception is applied.</p> </note> <note> <p>Placing an exception can only be performed on resources that are <code>NON_COMPLIANT</code>. If you use this API for <code>COMPLIANT</code> resources or resources that are <code>NOT_APPLICABLE</code>, a remediation exception will not be generated. For more information on the conditions that initiate the possible Config evaluation results, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.html#aws-config-rules">Concepts | Config Rules</a> in the Config Developer Guide.</p> </note>

> Body parameter

```json
{
  "ConfigRuleName": {},
  "ResourceKeys": {},
  "Message": {},
  "ExpirationTime": {}
}
```

<h3 id="putremediationexceptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutRemediationExceptionsRequest](#schemaputremediationexceptionsrequest)|true|none|
|» ConfigRuleName|body|object|true|none|
|» ResourceKeys|body|object|true|none|
|» Message|body|object|false|none|
|» ExpirationTime|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.PutRemediationExceptions|

> Example responses

> 200 Response

```json
{
  "FailedBatches": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="putremediationexceptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRemediationExceptionsResponse](#schemaputremediationexceptionsresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|InsufficientPermissionsException|[InsufficientPermissionsException](#schemainsufficientpermissionsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutResourceConfig

<a id="opIdPutResourceConfig"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.PutResourceConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.PutResourceConfig' \
  -d '{
    "ResourceType": {},
    "SchemaVersionId": {},
    "ResourceId": {},
    "ResourceName": {},
    "Configuration": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.PutResourceConfig`

<p>Records the configuration state for the resource provided in the request. The configuration state of a resource is represented in Config as Configuration Items. Once this API records the configuration item, you can retrieve the list of configuration items for the custom resource type using existing Config APIs. </p> <note> <p>The custom resource type must be registered with CloudFormation. This API accepts the configuration item registered with CloudFormation.</p> <p>When you call this API, Config only stores configuration state of the resource provided in the request. This API does not change or remediate the configuration of the resource. </p> <p>Write-only schema properites are not recorded as part of the published configuration item.</p> </note>

> Body parameter

```json
{
  "ResourceType": {},
  "SchemaVersionId": {},
  "ResourceId": {},
  "ResourceName": {},
  "Configuration": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="putresourceconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutResourceConfigRequest](#schemaputresourceconfigrequest)|true|none|
|» ResourceType|body|object|true|none|
|» SchemaVersionId|body|object|true|none|
|» ResourceId|body|object|true|none|
|» ResourceName|body|object|false|none|
|» Configuration|body|object|true|none|
|» Tags|body|object|false|none|
|» » **additionalProperties**|body|[Value](#schemavalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.PutResourceConfig|

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

<h3 id="putresourceconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InsufficientPermissionsException|[InsufficientPermissionsException](#schemainsufficientpermissionsexception)|
|482|482|NoRunningConfigurationRecorderException|[NoRunningConfigurationRecorderException](#schemanorunningconfigurationrecorderexception)|
|483|483|MaxActiveResourcesExceededException|[MaxActiveResourcesExceededException](#schemamaxactiveresourcesexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRetentionConfiguration

<a id="opIdPutRetentionConfiguration"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.PutRetentionConfiguration' \
  -d '{
    "RetentionPeriodInDays": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration`

<p>Creates and updates the retention configuration with details about retention period (number of days) that Config stores your historical information. The API creates the <code>RetentionConfiguration</code> object and names the object as <b>default</b>. When you have a <code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the default object. </p> <note> <p>Currently, Config supports only one retention configuration per region in your account.</p> </note>

> Body parameter

```json
{
  "RetentionPeriodInDays": {}
}
```

<h3 id="putretentionconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutRetentionConfigurationRequest](#schemaputretentionconfigurationrequest)|true|none|
|» RetentionPeriodInDays|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.PutRetentionConfiguration|

> Example responses

> 200 Response

```json
{
  "RetentionConfiguration": {
    "Name": {},
    "RetentionPeriodInDays": {}
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

<h3 id="putretentionconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRetentionConfigurationResponse](#schemaputretentionconfigurationresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MaxNumberOfRetentionConfigurationsExceededException|[MaxNumberOfRetentionConfigurationsExceededException](#schemamaxnumberofretentionconfigurationsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutStoredQuery

<a id="opIdPutStoredQuery"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.PutStoredQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.PutStoredQuery' \
  -d '{
    "StoredQuery": {
      "QueryId": {},
      "QueryArn": {},
      "QueryName": {},
      "Description": {},
      "Expression": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.PutStoredQuery`

<p>Saves a new query or updates an existing saved query. The <code>QueryName</code> must be unique for a single Amazon Web Services account and a single Amazon Web Services Region. You can create upto 300 queries in a single Amazon Web Services account and a single Amazon Web Services Region.</p> <note> <p> <code>PutStoredQuery</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>

> Body parameter

```json
{
  "StoredQuery": {
    "QueryId": {},
    "QueryArn": {},
    "QueryName": {},
    "Description": {},
    "Expression": {}
  },
  "Tags": {}
}
```

<h3 id="putstoredquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutStoredQueryRequest](#schemaputstoredqueryrequest)|true|none|
|» StoredQuery|body|object|true|none|
|» » QueryId|body|object|false|none|
|» » QueryArn|body|object|false|none|
|» » QueryName|body|object|true|none|
|» » Description|body|object|false|none|
|» » Expression|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.PutStoredQuery|

> Example responses

> 200 Response

```json
{
  "QueryArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="putstoredquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutStoredQueryResponse](#schemaputstoredqueryresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|ResourceConcurrentModificationException|[ResourceConcurrentModificationException](#schemaresourceconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SelectAggregateResourceConfig

<a id="opIdSelectAggregateResourceConfig"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.SelectAggregateResourceConfig' \
  -d '{
    "Expression": {},
    "ConfigurationAggregatorName": {},
    "Limit": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig`

<p>Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of Amazon Web Services resources across multiple accounts and regions, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the Config Developer Guide.</p> <note> <p>If you run an aggregation query (i.e., using <code>GROUP BY</code> or using aggregate functions such as <code>COUNT</code>; e.g., <code>SELECT resourceId, COUNT(*) WHERE resourceType = 'AWS::IAM::Role' GROUP BY resourceId</code>) and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 500.</p> <p>If you run a non-aggregation query (i.e., not using <code>GROUP BY</code> or aggregate function; e.g., <code>SELECT * WHERE resourceType = 'AWS::IAM::Role'</code>) and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 25.</p> </note>

> Body parameter

```json
{
  "Expression": {},
  "ConfigurationAggregatorName": {},
  "Limit": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="selectaggregateresourceconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SelectAggregateResourceConfigRequest](#schemaselectaggregateresourceconfigrequest)|true|none|
|» Expression|body|object|true|none|
|» ConfigurationAggregatorName|body|object|true|none|
|» Limit|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.SelectAggregateResourceConfig|

> Example responses

> 200 Response

```json
{
  "Results": {},
  "QueryInfo": {
    "SelectFields": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="selectaggregateresourceconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SelectAggregateResourceConfigResponse](#schemaselectaggregateresourceconfigresponse)|
|480|480|InvalidExpressionException|[InvalidExpressionException](#schemainvalidexpressionexception)|
|481|481|NoSuchConfigurationAggregatorException|[NoSuchConfigurationAggregatorException](#schemanosuchconfigurationaggregatorexception)|
|482|482|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SelectResourceConfig

<a id="opIdSelectResourceConfig"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.SelectResourceConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.SelectResourceConfig' \
  -d '{
    "Expression": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.SelectResourceConfig`

<p>Accepts a structured query language (SQL) <code>SELECT</code> command, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the <i>Config Developer Guide</i>.</p>

> Body parameter

```json
{
  "Expression": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="selectresourceconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SelectResourceConfigRequest](#schemaselectresourceconfigrequest)|true|none|
|» Expression|body|object|true|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.SelectResourceConfig|

> Example responses

> 200 Response

```json
{
  "Results": {},
  "QueryInfo": {
    "SelectFields": {}
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

> 482 Response

```json
null
```

<h3 id="selectresourceconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SelectResourceConfigResponse](#schemaselectresourceconfigresponse)|
|480|480|InvalidExpressionException|[InvalidExpressionException](#schemainvalidexpressionexception)|
|481|481|InvalidLimitException|[InvalidLimitException](#schemainvalidlimitexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartConfigRulesEvaluation

<a id="opIdStartConfigRulesEvaluation"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.StartConfigRulesEvaluation' \
  -d '{
    "ConfigRuleNames": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation`

<p>Runs an on-demand evaluation for the specified Config rules against the last known configuration state of the resources. Use <code>StartConfigRulesEvaluation</code> when you want to test that a rule you updated is working as expected. <code>StartConfigRulesEvaluation</code> does not re-record the latest configuration state for your resources. It re-runs an evaluation against the last known state of your resources. </p> <p>You can specify up to 25 Config rules per request. </p> <p>An existing <code>StartConfigRulesEvaluation</code> call for the specified rules must complete before you can call the API again. If you chose to have Config stream to an Amazon SNS topic, you will receive a <code>ConfigRuleEvaluationStarted</code> notification when the evaluation starts.</p> <note> <p>You don't need to call the <code>StartConfigRulesEvaluation</code> API to run an evaluation for a new rule. When you create a rule, Config evaluates your resources against the rule automatically. </p> </note> <p>The <code>StartConfigRulesEvaluation</code> API is useful if you want to run on-demand evaluations, such as the following example:</p> <ol> <li> <p>You have a custom rule that evaluates your IAM resources every 24 hours.</p> </li> <li> <p>You update your Lambda function to add additional conditions to your rule.</p> </li> <li> <p>Instead of waiting for the next periodic evaluation, you call the <code>StartConfigRulesEvaluation</code> API.</p> </li> <li> <p>Config invokes your Lambda function and evaluates your IAM resources.</p> </li> <li> <p>Your custom rule will still run periodic evaluations every 24 hours.</p> </li> </ol>

> Body parameter

```json
{
  "ConfigRuleNames": {}
}
```

<h3 id="startconfigrulesevaluation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartConfigRulesEvaluationRequest](#schemastartconfigrulesevaluationrequest)|true|none|
|» ConfigRuleNames|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.StartConfigRulesEvaluation|

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

<h3 id="startconfigrulesevaluation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartConfigRulesEvaluationResponse](#schemastartconfigrulesevaluationresponse)|
|480|480|NoSuchConfigRuleException|[NoSuchConfigRuleException](#schemanosuchconfigruleexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartConfigurationRecorder

<a id="opIdStartConfigurationRecorder"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.StartConfigurationRecorder' \
  -d '{
    "ConfigurationRecorderName": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder`

<p>Starts recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.</p> <p>You must have created at least one delivery channel to successfully start the configuration recorder.</p>

> Body parameter

```json
{
  "ConfigurationRecorderName": {}
}
```

<h3 id="startconfigurationrecorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartConfigurationRecorderRequest](#schemastartconfigurationrecorderrequest)|true|none|
|» ConfigurationRecorderName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.StartConfigurationRecorder|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="startconfigurationrecorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NoSuchConfigurationRecorderException|[NoSuchConfigurationRecorderException](#schemanosuchconfigurationrecorderexception)|
|481|481|NoAvailableDeliveryChannelException|[NoAvailableDeliveryChannelException](#schemanoavailabledeliverychannelexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartRemediationExecution

<a id="opIdStartRemediationExecution"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.StartRemediationExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.StartRemediationExecution' \
  -d '{
    "ConfigRuleName": {},
    "ResourceKeys": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.StartRemediationExecution`

<p>Runs an on-demand remediation for the specified Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous.</p> <p>You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.</p>

> Body parameter

```json
{
  "ConfigRuleName": {},
  "ResourceKeys": {}
}
```

<h3 id="startremediationexecution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartRemediationExecutionRequest](#schemastartremediationexecutionrequest)|true|none|
|» ConfigRuleName|body|object|true|none|
|» ResourceKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.StartRemediationExecution|

> Example responses

> 200 Response

```json
{
  "FailureMessage": {},
  "FailedItems": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="startremediationexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartRemediationExecutionResponse](#schemastartremediationexecutionresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|InsufficientPermissionsException|[InsufficientPermissionsException](#schemainsufficientpermissionsexception)|
|482|482|NoSuchRemediationConfigurationException|[NoSuchRemediationConfigurationException](#schemanosuchremediationconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartResourceEvaluation

<a id="opIdStartResourceEvaluation"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.StartResourceEvaluation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.StartResourceEvaluation' \
  -d '{
    "ResourceDetails": {
      "ResourceId": {},
      "ResourceType": {},
      "ResourceConfiguration": {},
      "ResourceConfigurationSchemaType": {}
    },
    "EvaluationContext": {
      "EvaluationContextIdentifier": {}
    },
    "EvaluationMode": {},
    "EvaluationTimeout": {},
    "ClientToken": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.StartResourceEvaluation`

<p>Runs an on-demand evaluation for the specified resource to determine whether the resource details will comply with configured Config rules. You can also use it for evaluation purposes. Config recommends using an evaluation context. It runs an execution against the resource details with all of the Config rules in your account that match with the specified proactive mode and resource type.</p> <note> <p>Ensure you have the <code>cloudformation:DescribeType</code> role setup to validate the resource type schema.</p> <p>You can find the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">Resource type schema</a> in "<i>Amazon Web Services public extensions</i>" within the CloudFormation registry or with the following CLI commmand: <code>aws cloudformation describe-type --type-name "AWS::S3::Bucket" --type RESOURCE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html#registry-view">Managing extensions through the CloudFormation registry</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and property types reference</a> in the CloudFormation User Guide.</p> </note>

> Body parameter

```json
{
  "ResourceDetails": {
    "ResourceId": {},
    "ResourceType": {},
    "ResourceConfiguration": {},
    "ResourceConfigurationSchemaType": {}
  },
  "EvaluationContext": {
    "EvaluationContextIdentifier": {}
  },
  "EvaluationMode": {},
  "EvaluationTimeout": {},
  "ClientToken": {}
}
```

<h3 id="startresourceevaluation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartResourceEvaluationRequest](#schemastartresourceevaluationrequest)|true|none|
|» ResourceDetails|body|object|true|none|
|» » ResourceId|body|object|true|none|
|» » ResourceType|body|object|true|none|
|» » ResourceConfiguration|body|object|true|none|
|» » ResourceConfigurationSchemaType|body|object|false|none|
|» EvaluationContext|body|object|false|none|
|» » EvaluationContextIdentifier|body|object|false|none|
|» EvaluationMode|body|object|true|none|
|» EvaluationTimeout|body|object|false|none|
|» ClientToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.StartResourceEvaluation|

> Example responses

> 200 Response

```json
{
  "ResourceEvaluationId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="startresourceevaluation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartResourceEvaluationResponse](#schemastartresourceevaluationresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|IdempotentParameterMismatch|[IdempotentParameterMismatch](#schemaidempotentparametermismatch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopConfigurationRecorder

<a id="opIdStopConfigurationRecorder"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.StopConfigurationRecorder' \
  -d '{
    "ConfigurationRecorderName": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder`

Stops recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.

> Body parameter

```json
{
  "ConfigurationRecorderName": {}
}
```

<h3 id="stopconfigurationrecorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StopConfigurationRecorderRequest](#schemastopconfigurationrecorderrequest)|true|none|
|» ConfigurationRecorderName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.StopConfigurationRecorder|

> Example responses

> 480 Response

```json
null
```

<h3 id="stopconfigurationrecorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NoSuchConfigurationRecorderException|[NoSuchConfigurationRecorderException](#schemanosuchconfigurationrecorderexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.TagResource`

Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. If existing tags are specified, however, then their values will be updated. When a resource is deleted, the tags associated with that resource are deleted as well.

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
|body|body|[TagResourceRequest](#schematagresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StarlingDoveService.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://config.us-east-1.amazonaws.com/#X-Amz-Target=StarlingDoveService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StarlingDoveService.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=StarlingDoveService.UntagResource`

Deletes specified tags from a resource.

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
|X-Amz-Target|StarlingDoveService.UntagResource|

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

# Schemas

<h2 id="tocS_BatchGetAggregateResourceConfigResponse">BatchGetAggregateResourceConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetaggregateresourceconfigresponse"></a>
<a id="schema_BatchGetAggregateResourceConfigResponse"></a>
<a id="tocSbatchgetaggregateresourceconfigresponse"></a>
<a id="tocsbatchgetaggregateresourceconfigresponse"></a>

```json
{
  "BaseConfigurationItems": {},
  "UnprocessedResourceIdentifiers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaseConfigurationItems|object|false|none|none|
|UnprocessedResourceIdentifiers|object|false|none|none|

<h2 id="tocS_BatchGetAggregateResourceConfigRequest">BatchGetAggregateResourceConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetaggregateresourceconfigrequest"></a>
<a id="schema_BatchGetAggregateResourceConfigRequest"></a>
<a id="tocSbatchgetaggregateresourceconfigrequest"></a>
<a id="tocsbatchgetaggregateresourceconfigrequest"></a>

```json
{
  "ConfigurationAggregatorName": {},
  "ResourceIdentifiers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationAggregatorName|object|true|none|none|
|ResourceIdentifiers|object|true|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_NoSuchConfigurationAggregatorException">NoSuchConfigurationAggregatorException</h2>
<!-- backwards compatibility -->
<a id="schemanosuchconfigurationaggregatorexception"></a>
<a id="schema_NoSuchConfigurationAggregatorException"></a>
<a id="tocSnosuchconfigurationaggregatorexception"></a>
<a id="tocsnosuchconfigurationaggregatorexception"></a>

```json
null
```

<h2 id="tocS_BatchGetResourceConfigResponse">BatchGetResourceConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetresourceconfigresponse"></a>
<a id="schema_BatchGetResourceConfigResponse"></a>
<a id="tocSbatchgetresourceconfigresponse"></a>
<a id="tocsbatchgetresourceconfigresponse"></a>

```json
{
  "baseConfigurationItems": {},
  "unprocessedResourceKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseConfigurationItems|object|false|none|none|
|unprocessedResourceKeys|object|false|none|none|

<h2 id="tocS_BatchGetResourceConfigRequest">BatchGetResourceConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetresourceconfigrequest"></a>
<a id="schema_BatchGetResourceConfigRequest"></a>
<a id="tocSbatchgetresourceconfigrequest"></a>
<a id="tocsbatchgetresourceconfigrequest"></a>

```json
{
  "resourceKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceKeys|object|true|none|none|

<h2 id="tocS_NoAvailableConfigurationRecorderException">NoAvailableConfigurationRecorderException</h2>
<!-- backwards compatibility -->
<a id="schemanoavailableconfigurationrecorderexception"></a>
<a id="schema_NoAvailableConfigurationRecorderException"></a>
<a id="tocSnoavailableconfigurationrecorderexception"></a>
<a id="tocsnoavailableconfigurationrecorderexception"></a>

```json
null
```

<h2 id="tocS_DeleteAggregationAuthorizationRequest">DeleteAggregationAuthorizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaggregationauthorizationrequest"></a>
<a id="schema_DeleteAggregationAuthorizationRequest"></a>
<a id="tocSdeleteaggregationauthorizationrequest"></a>
<a id="tocsdeleteaggregationauthorizationrequest"></a>

```json
{
  "AuthorizedAccountId": {},
  "AuthorizedAwsRegion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizedAccountId|object|true|none|none|
|AuthorizedAwsRegion|object|true|none|none|

<h2 id="tocS_InvalidParameterValueException">InvalidParameterValueException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparametervalueexception"></a>
<a id="schema_InvalidParameterValueException"></a>
<a id="tocSinvalidparametervalueexception"></a>
<a id="tocsinvalidparametervalueexception"></a>

```json
null
```

<h2 id="tocS_DeleteConfigRuleRequest">DeleteConfigRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigrulerequest"></a>
<a id="schema_DeleteConfigRuleRequest"></a>
<a id="tocSdeleteconfigrulerequest"></a>
<a id="tocsdeleteconfigrulerequest"></a>

```json
{
  "ConfigRuleName": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|true|none|none|

<h2 id="tocS_NoSuchConfigRuleException">NoSuchConfigRuleException</h2>
<!-- backwards compatibility -->
<a id="schemanosuchconfigruleexception"></a>
<a id="schema_NoSuchConfigRuleException"></a>
<a id="tocSnosuchconfigruleexception"></a>
<a id="tocsnosuchconfigruleexception"></a>

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

<h2 id="tocS_DeleteConfigurationAggregatorRequest">DeleteConfigurationAggregatorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigurationaggregatorrequest"></a>
<a id="schema_DeleteConfigurationAggregatorRequest"></a>
<a id="tocSdeleteconfigurationaggregatorrequest"></a>
<a id="tocsdeleteconfigurationaggregatorrequest"></a>

```json
{
  "ConfigurationAggregatorName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationAggregatorName|object|true|none|none|

<h2 id="tocS_DeleteConfigurationRecorderRequest">DeleteConfigurationRecorderRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigurationrecorderrequest"></a>
<a id="schema_DeleteConfigurationRecorderRequest"></a>
<a id="tocSdeleteconfigurationrecorderrequest"></a>
<a id="tocsdeleteconfigurationrecorderrequest"></a>

```json
{
  "ConfigurationRecorderName": {}
}
```

The request object for the <code>DeleteConfigurationRecorder</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationRecorderName|object|true|none|none|

<h2 id="tocS_NoSuchConfigurationRecorderException">NoSuchConfigurationRecorderException</h2>
<!-- backwards compatibility -->
<a id="schemanosuchconfigurationrecorderexception"></a>
<a id="schema_NoSuchConfigurationRecorderException"></a>
<a id="tocSnosuchconfigurationrecorderexception"></a>
<a id="tocsnosuchconfigurationrecorderexception"></a>

```json
null
```

<h2 id="tocS_DeleteConformancePackRequest">DeleteConformancePackRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconformancepackrequest"></a>
<a id="schema_DeleteConformancePackRequest"></a>
<a id="tocSdeleteconformancepackrequest"></a>
<a id="tocsdeleteconformancepackrequest"></a>

```json
{
  "ConformancePackName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConformancePackName|object|true|none|none|

<h2 id="tocS_NoSuchConformancePackException">NoSuchConformancePackException</h2>
<!-- backwards compatibility -->
<a id="schemanosuchconformancepackexception"></a>
<a id="schema_NoSuchConformancePackException"></a>
<a id="tocSnosuchconformancepackexception"></a>
<a id="tocsnosuchconformancepackexception"></a>

```json
null
```

<h2 id="tocS_DeleteDeliveryChannelRequest">DeleteDeliveryChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedeliverychannelrequest"></a>
<a id="schema_DeleteDeliveryChannelRequest"></a>
<a id="tocSdeletedeliverychannelrequest"></a>
<a id="tocsdeletedeliverychannelrequest"></a>

```json
{
  "DeliveryChannelName": {}
}
```

The input for the <a>DeleteDeliveryChannel</a> action. The action accepts the following data, in JSON format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryChannelName|object|true|none|none|

<h2 id="tocS_NoSuchDeliveryChannelException">NoSuchDeliveryChannelException</h2>
<!-- backwards compatibility -->
<a id="schemanosuchdeliverychannelexception"></a>
<a id="schema_NoSuchDeliveryChannelException"></a>
<a id="tocSnosuchdeliverychannelexception"></a>
<a id="tocsnosuchdeliverychannelexception"></a>

```json
null
```

<h2 id="tocS_LastDeliveryChannelDeleteFailedException">LastDeliveryChannelDeleteFailedException</h2>
<!-- backwards compatibility -->
<a id="schemalastdeliverychanneldeletefailedexception"></a>
<a id="schema_LastDeliveryChannelDeleteFailedException"></a>
<a id="tocSlastdeliverychanneldeletefailedexception"></a>
<a id="tocslastdeliverychanneldeletefailedexception"></a>

```json
null
```

<h2 id="tocS_DeleteEvaluationResultsResponse">DeleteEvaluationResultsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteevaluationresultsresponse"></a>
<a id="schema_DeleteEvaluationResultsResponse"></a>
<a id="tocSdeleteevaluationresultsresponse"></a>
<a id="tocsdeleteevaluationresultsresponse"></a>

```json
{}
```

The output when you delete the evaluation results for the specified Config rule.

<h2 id="tocS_DeleteEvaluationResultsRequest">DeleteEvaluationResultsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteevaluationresultsrequest"></a>
<a id="schema_DeleteEvaluationResultsRequest"></a>
<a id="tocSdeleteevaluationresultsrequest"></a>
<a id="tocsdeleteevaluationresultsrequest"></a>

```json
{
  "ConfigRuleName": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|true|none|none|

<h2 id="tocS_DeleteOrganizationConfigRuleRequest">DeleteOrganizationConfigRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteorganizationconfigrulerequest"></a>
<a id="schema_DeleteOrganizationConfigRuleRequest"></a>
<a id="tocSdeleteorganizationconfigrulerequest"></a>
<a id="tocsdeleteorganizationconfigrulerequest"></a>

```json
{
  "OrganizationConfigRuleName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConfigRuleName|object|true|none|none|

<h2 id="tocS_NoSuchOrganizationConfigRuleException">NoSuchOrganizationConfigRuleException</h2>
<!-- backwards compatibility -->
<a id="schemanosuchorganizationconfigruleexception"></a>
<a id="schema_NoSuchOrganizationConfigRuleException"></a>
<a id="tocSnosuchorganizationconfigruleexception"></a>
<a id="tocsnosuchorganizationconfigruleexception"></a>

```json
null
```

<h2 id="tocS_OrganizationAccessDeniedException">OrganizationAccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationaccessdeniedexception"></a>
<a id="schema_OrganizationAccessDeniedException"></a>
<a id="tocSorganizationaccessdeniedexception"></a>
<a id="tocsorganizationaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_DeleteOrganizationConformancePackRequest">DeleteOrganizationConformancePackRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteorganizationconformancepackrequest"></a>
<a id="schema_DeleteOrganizationConformancePackRequest"></a>
<a id="tocSdeleteorganizationconformancepackrequest"></a>
<a id="tocsdeleteorganizationconformancepackrequest"></a>

```json
{
  "OrganizationConformancePackName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConformancePackName|object|true|none|none|

<h2 id="tocS_NoSuchOrganizationConformancePackException">NoSuchOrganizationConformancePackException</h2>
<!-- backwards compatibility -->
<a id="schemanosuchorganizationconformancepackexception"></a>
<a id="schema_NoSuchOrganizationConformancePackException"></a>
<a id="tocSnosuchorganizationconformancepackexception"></a>
<a id="tocsnosuchorganizationconformancepackexception"></a>

```json
null
```

<h2 id="tocS_DeletePendingAggregationRequestRequest">DeletePendingAggregationRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletependingaggregationrequestrequest"></a>
<a id="schema_DeletePendingAggregationRequestRequest"></a>
<a id="tocSdeletependingaggregationrequestrequest"></a>
<a id="tocsdeletependingaggregationrequestrequest"></a>

```json
{
  "RequesterAccountId": {},
  "RequesterAwsRegion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequesterAccountId|object|true|none|none|
|RequesterAwsRegion|object|true|none|none|

<h2 id="tocS_DeleteRemediationConfigurationResponse">DeleteRemediationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteremediationconfigurationresponse"></a>
<a id="schema_DeleteRemediationConfigurationResponse"></a>
<a id="tocSdeleteremediationconfigurationresponse"></a>
<a id="tocsdeleteremediationconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteRemediationConfigurationRequest">DeleteRemediationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteremediationconfigurationrequest"></a>
<a id="schema_DeleteRemediationConfigurationRequest"></a>
<a id="tocSdeleteremediationconfigurationrequest"></a>
<a id="tocsdeleteremediationconfigurationrequest"></a>

```json
{
  "ConfigRuleName": {},
  "ResourceType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|true|none|none|
|ResourceType|object|false|none|none|

<h2 id="tocS_NoSuchRemediationConfigurationException">NoSuchRemediationConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemanosuchremediationconfigurationexception"></a>
<a id="schema_NoSuchRemediationConfigurationException"></a>
<a id="tocSnosuchremediationconfigurationexception"></a>
<a id="tocsnosuchremediationconfigurationexception"></a>

```json
null
```

<h2 id="tocS_RemediationInProgressException">RemediationInProgressException</h2>
<!-- backwards compatibility -->
<a id="schemaremediationinprogressexception"></a>
<a id="schema_RemediationInProgressException"></a>
<a id="tocSremediationinprogressexception"></a>
<a id="tocsremediationinprogressexception"></a>

```json
null
```

<h2 id="tocS_InsufficientPermissionsException">InsufficientPermissionsException</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientpermissionsexception"></a>
<a id="schema_InsufficientPermissionsException"></a>
<a id="tocSinsufficientpermissionsexception"></a>
<a id="tocsinsufficientpermissionsexception"></a>

```json
null
```

<h2 id="tocS_DeleteRemediationExceptionsResponse">DeleteRemediationExceptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteremediationexceptionsresponse"></a>
<a id="schema_DeleteRemediationExceptionsResponse"></a>
<a id="tocSdeleteremediationexceptionsresponse"></a>
<a id="tocsdeleteremediationexceptionsresponse"></a>

```json
{
  "FailedBatches": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedBatches|object|false|none|none|

<h2 id="tocS_DeleteRemediationExceptionsRequest">DeleteRemediationExceptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteremediationexceptionsrequest"></a>
<a id="schema_DeleteRemediationExceptionsRequest"></a>
<a id="tocSdeleteremediationexceptionsrequest"></a>
<a id="tocsdeleteremediationexceptionsrequest"></a>

```json
{
  "ConfigRuleName": {},
  "ResourceKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|true|none|none|
|ResourceKeys|object|true|none|none|

<h2 id="tocS_NoSuchRemediationExceptionException">NoSuchRemediationExceptionException</h2>
<!-- backwards compatibility -->
<a id="schemanosuchremediationexceptionexception"></a>
<a id="schema_NoSuchRemediationExceptionException"></a>
<a id="tocSnosuchremediationexceptionexception"></a>
<a id="tocsnosuchremediationexceptionexception"></a>

```json
null
```

<h2 id="tocS_DeleteResourceConfigRequest">DeleteResourceConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourceconfigrequest"></a>
<a id="schema_DeleteResourceConfigRequest"></a>
<a id="tocSdeleteresourceconfigrequest"></a>
<a id="tocsdeleteresourceconfigrequest"></a>

```json
{
  "ResourceType": {},
  "ResourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|true|none|none|
|ResourceId|object|true|none|none|

<h2 id="tocS_NoRunningConfigurationRecorderException">NoRunningConfigurationRecorderException</h2>
<!-- backwards compatibility -->
<a id="schemanorunningconfigurationrecorderexception"></a>
<a id="schema_NoRunningConfigurationRecorderException"></a>
<a id="tocSnorunningconfigurationrecorderexception"></a>
<a id="tocsnorunningconfigurationrecorderexception"></a>

```json
null
```

<h2 id="tocS_DeleteRetentionConfigurationRequest">DeleteRetentionConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteretentionconfigurationrequest"></a>
<a id="schema_DeleteRetentionConfigurationRequest"></a>
<a id="tocSdeleteretentionconfigurationrequest"></a>
<a id="tocsdeleteretentionconfigurationrequest"></a>

```json
{
  "RetentionConfigurationName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RetentionConfigurationName|object|true|none|none|

<h2 id="tocS_NoSuchRetentionConfigurationException">NoSuchRetentionConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemanosuchretentionconfigurationexception"></a>
<a id="schema_NoSuchRetentionConfigurationException"></a>
<a id="tocSnosuchretentionconfigurationexception"></a>
<a id="tocsnosuchretentionconfigurationexception"></a>

```json
null
```

<h2 id="tocS_DeleteStoredQueryResponse">DeleteStoredQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletestoredqueryresponse"></a>
<a id="schema_DeleteStoredQueryResponse"></a>
<a id="tocSdeletestoredqueryresponse"></a>
<a id="tocsdeletestoredqueryresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteStoredQueryRequest">DeleteStoredQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletestoredqueryrequest"></a>
<a id="schema_DeleteStoredQueryRequest"></a>
<a id="tocSdeletestoredqueryrequest"></a>
<a id="tocsdeletestoredqueryrequest"></a>

```json
{
  "QueryName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryName|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeliverConfigSnapshotResponse">DeliverConfigSnapshotResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeliverconfigsnapshotresponse"></a>
<a id="schema_DeliverConfigSnapshotResponse"></a>
<a id="tocSdeliverconfigsnapshotresponse"></a>
<a id="tocsdeliverconfigsnapshotresponse"></a>

```json
{
  "configSnapshotId": {}
}
```

The output for the <a>DeliverConfigSnapshot</a> action, in JSON format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configSnapshotId|object|false|none|none|

<h2 id="tocS_DeliverConfigSnapshotRequest">DeliverConfigSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeliverconfigsnapshotrequest"></a>
<a id="schema_DeliverConfigSnapshotRequest"></a>
<a id="tocSdeliverconfigsnapshotrequest"></a>
<a id="tocsdeliverconfigsnapshotrequest"></a>

```json
{
  "deliveryChannelName": {}
}
```

The input for the <a>DeliverConfigSnapshot</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryChannelName|object|true|none|none|

<h2 id="tocS_DescribeAggregateComplianceByConfigRulesResponse">DescribeAggregateComplianceByConfigRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaggregatecompliancebyconfigrulesresponse"></a>
<a id="schema_DescribeAggregateComplianceByConfigRulesResponse"></a>
<a id="tocSdescribeaggregatecompliancebyconfigrulesresponse"></a>
<a id="tocsdescribeaggregatecompliancebyconfigrulesresponse"></a>

```json
{
  "AggregateComplianceByConfigRules": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AggregateComplianceByConfigRules|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeAggregateComplianceByConfigRulesRequest">DescribeAggregateComplianceByConfigRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaggregatecompliancebyconfigrulesrequest"></a>
<a id="schema_DescribeAggregateComplianceByConfigRulesRequest"></a>
<a id="tocSdescribeaggregatecompliancebyconfigrulesrequest"></a>
<a id="tocsdescribeaggregatecompliancebyconfigrulesrequest"></a>

```json
{
  "ConfigurationAggregatorName": {},
  "Filters": {
    "ConfigRuleName": {},
    "ComplianceType": {},
    "AccountId": {},
    "AwsRegion": {}
  },
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationAggregatorName|object|true|none|none|
|Filters|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidLimitException">InvalidLimitException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidlimitexception"></a>
<a id="schema_InvalidLimitException"></a>
<a id="tocSinvalidlimitexception"></a>
<a id="tocsinvalidlimitexception"></a>

```json
null
```

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_DescribeAggregateComplianceByConformancePacksResponse">DescribeAggregateComplianceByConformancePacksResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaggregatecompliancebyconformancepacksresponse"></a>
<a id="schema_DescribeAggregateComplianceByConformancePacksResponse"></a>
<a id="tocSdescribeaggregatecompliancebyconformancepacksresponse"></a>
<a id="tocsdescribeaggregatecompliancebyconformancepacksresponse"></a>

```json
{
  "AggregateComplianceByConformancePacks": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AggregateComplianceByConformancePacks|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeAggregateComplianceByConformancePacksRequest">DescribeAggregateComplianceByConformancePacksRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaggregatecompliancebyconformancepacksrequest"></a>
<a id="schema_DescribeAggregateComplianceByConformancePacksRequest"></a>
<a id="tocSdescribeaggregatecompliancebyconformancepacksrequest"></a>
<a id="tocsdescribeaggregatecompliancebyconformancepacksrequest"></a>

```json
{
  "ConfigurationAggregatorName": {},
  "Filters": {
    "ConformancePackName": {},
    "ComplianceType": {},
    "AccountId": {},
    "AwsRegion": {}
  },
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationAggregatorName|object|true|none|none|
|Filters|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeAggregationAuthorizationsResponse">DescribeAggregationAuthorizationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaggregationauthorizationsresponse"></a>
<a id="schema_DescribeAggregationAuthorizationsResponse"></a>
<a id="tocSdescribeaggregationauthorizationsresponse"></a>
<a id="tocsdescribeaggregationauthorizationsresponse"></a>

```json
{
  "AggregationAuthorizations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AggregationAuthorizations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeAggregationAuthorizationsRequest">DescribeAggregationAuthorizationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaggregationauthorizationsrequest"></a>
<a id="schema_DescribeAggregationAuthorizationsRequest"></a>
<a id="tocSdescribeaggregationauthorizationsrequest"></a>
<a id="tocsdescribeaggregationauthorizationsrequest"></a>

```json
{
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeComplianceByConfigRuleResponse">DescribeComplianceByConfigRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecompliancebyconfigruleresponse"></a>
<a id="schema_DescribeComplianceByConfigRuleResponse"></a>
<a id="tocSdescribecompliancebyconfigruleresponse"></a>
<a id="tocsdescribecompliancebyconfigruleresponse"></a>

```json
{
  "ComplianceByConfigRules": {},
  "NextToken": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComplianceByConfigRules|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeComplianceByConfigRuleRequest">DescribeComplianceByConfigRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecompliancebyconfigrulerequest"></a>
<a id="schema_DescribeComplianceByConfigRuleRequest"></a>
<a id="tocSdescribecompliancebyconfigrulerequest"></a>
<a id="tocsdescribecompliancebyconfigrulerequest"></a>

```json
{
  "ConfigRuleNames": {},
  "ComplianceTypes": {},
  "NextToken": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleNames|object|false|none|none|
|ComplianceTypes|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeComplianceByResourceResponse">DescribeComplianceByResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecompliancebyresourceresponse"></a>
<a id="schema_DescribeComplianceByResourceResponse"></a>
<a id="tocSdescribecompliancebyresourceresponse"></a>
<a id="tocsdescribecompliancebyresourceresponse"></a>

```json
{
  "ComplianceByResources": {},
  "NextToken": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComplianceByResources|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeComplianceByResourceRequest">DescribeComplianceByResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecompliancebyresourcerequest"></a>
<a id="schema_DescribeComplianceByResourceRequest"></a>
<a id="tocSdescribecompliancebyresourcerequest"></a>
<a id="tocsdescribecompliancebyresourcerequest"></a>

```json
{
  "ResourceType": {},
  "ResourceId": {},
  "ComplianceTypes": {},
  "Limit": {},
  "NextToken": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|false|none|none|
|ResourceId|object|false|none|none|
|ComplianceTypes|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeConfigRuleEvaluationStatusResponse">DescribeConfigRuleEvaluationStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigruleevaluationstatusresponse"></a>
<a id="schema_DescribeConfigRuleEvaluationStatusResponse"></a>
<a id="tocSdescribeconfigruleevaluationstatusresponse"></a>
<a id="tocsdescribeconfigruleevaluationstatusresponse"></a>

```json
{
  "ConfigRulesEvaluationStatus": {},
  "NextToken": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRulesEvaluationStatus|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeConfigRuleEvaluationStatusRequest">DescribeConfigRuleEvaluationStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigruleevaluationstatusrequest"></a>
<a id="schema_DescribeConfigRuleEvaluationStatusRequest"></a>
<a id="tocSdescribeconfigruleevaluationstatusrequest"></a>
<a id="tocsdescribeconfigruleevaluationstatusrequest"></a>

```json
{
  "ConfigRuleNames": {},
  "NextToken": {},
  "Limit": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleNames|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_DescribeConfigRulesResponse">DescribeConfigRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigrulesresponse"></a>
<a id="schema_DescribeConfigRulesResponse"></a>
<a id="tocSdescribeconfigrulesresponse"></a>
<a id="tocsdescribeconfigrulesresponse"></a>

```json
{
  "ConfigRules": {},
  "NextToken": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRules|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeConfigRulesRequest">DescribeConfigRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigrulesrequest"></a>
<a id="schema_DescribeConfigRulesRequest"></a>
<a id="tocSdescribeconfigrulesrequest"></a>
<a id="tocsdescribeconfigrulesrequest"></a>

```json
{
  "ConfigRuleNames": {},
  "NextToken": {},
  "Filters": {
    "EvaluationMode": {}
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleNames|object|false|none|none|
|NextToken|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_DescribeConfigurationAggregatorSourcesStatusResponse">DescribeConfigurationAggregatorSourcesStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationaggregatorsourcesstatusresponse"></a>
<a id="schema_DescribeConfigurationAggregatorSourcesStatusResponse"></a>
<a id="tocSdescribeconfigurationaggregatorsourcesstatusresponse"></a>
<a id="tocsdescribeconfigurationaggregatorsourcesstatusresponse"></a>

```json
{
  "AggregatedSourceStatusList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AggregatedSourceStatusList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeConfigurationAggregatorSourcesStatusRequest">DescribeConfigurationAggregatorSourcesStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationaggregatorsourcesstatusrequest"></a>
<a id="schema_DescribeConfigurationAggregatorSourcesStatusRequest"></a>
<a id="tocSdescribeconfigurationaggregatorsourcesstatusrequest"></a>
<a id="tocsdescribeconfigurationaggregatorsourcesstatusrequest"></a>

```json
{
  "ConfigurationAggregatorName": {},
  "UpdateStatus": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationAggregatorName|object|true|none|none|
|UpdateStatus|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_DescribeConfigurationAggregatorsResponse">DescribeConfigurationAggregatorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationaggregatorsresponse"></a>
<a id="schema_DescribeConfigurationAggregatorsResponse"></a>
<a id="tocSdescribeconfigurationaggregatorsresponse"></a>
<a id="tocsdescribeconfigurationaggregatorsresponse"></a>

```json
{
  "ConfigurationAggregators": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationAggregators|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeConfigurationAggregatorsRequest">DescribeConfigurationAggregatorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationaggregatorsrequest"></a>
<a id="schema_DescribeConfigurationAggregatorsRequest"></a>
<a id="tocSdescribeconfigurationaggregatorsrequest"></a>
<a id="tocsdescribeconfigurationaggregatorsrequest"></a>

```json
{
  "ConfigurationAggregatorNames": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationAggregatorNames|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_DescribeConfigurationRecorderStatusResponse">DescribeConfigurationRecorderStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationrecorderstatusresponse"></a>
<a id="schema_DescribeConfigurationRecorderStatusResponse"></a>
<a id="tocSdescribeconfigurationrecorderstatusresponse"></a>
<a id="tocsdescribeconfigurationrecorderstatusresponse"></a>

```json
{
  "ConfigurationRecordersStatus": {}
}
```

The output for the <a>DescribeConfigurationRecorderStatus</a> action, in JSON format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationRecordersStatus|object|false|none|none|

<h2 id="tocS_DescribeConfigurationRecorderStatusRequest">DescribeConfigurationRecorderStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationrecorderstatusrequest"></a>
<a id="schema_DescribeConfigurationRecorderStatusRequest"></a>
<a id="tocSdescribeconfigurationrecorderstatusrequest"></a>
<a id="tocsdescribeconfigurationrecorderstatusrequest"></a>

```json
{
  "ConfigurationRecorderNames": {}
}
```

The input for the <a>DescribeConfigurationRecorderStatus</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationRecorderNames|object|false|none|none|

<h2 id="tocS_DescribeConfigurationRecordersResponse">DescribeConfigurationRecordersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationrecordersresponse"></a>
<a id="schema_DescribeConfigurationRecordersResponse"></a>
<a id="tocSdescribeconfigurationrecordersresponse"></a>
<a id="tocsdescribeconfigurationrecordersresponse"></a>

```json
{
  "ConfigurationRecorders": {}
}
```

The output for the <a>DescribeConfigurationRecorders</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationRecorders|object|false|none|none|

<h2 id="tocS_DescribeConfigurationRecordersRequest">DescribeConfigurationRecordersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationrecordersrequest"></a>
<a id="schema_DescribeConfigurationRecordersRequest"></a>
<a id="tocSdescribeconfigurationrecordersrequest"></a>
<a id="tocsdescribeconfigurationrecordersrequest"></a>

```json
{
  "ConfigurationRecorderNames": {}
}
```

The input for the <a>DescribeConfigurationRecorders</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationRecorderNames|object|false|none|none|

<h2 id="tocS_DescribeConformancePackComplianceResponse">DescribeConformancePackComplianceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconformancepackcomplianceresponse"></a>
<a id="schema_DescribeConformancePackComplianceResponse"></a>
<a id="tocSdescribeconformancepackcomplianceresponse"></a>
<a id="tocsdescribeconformancepackcomplianceresponse"></a>

```json
{
  "ConformancePackName": {},
  "ConformancePackRuleComplianceList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConformancePackName|object|true|none|none|
|ConformancePackRuleComplianceList|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeConformancePackComplianceRequest">DescribeConformancePackComplianceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconformancepackcompliancerequest"></a>
<a id="schema_DescribeConformancePackComplianceRequest"></a>
<a id="tocSdescribeconformancepackcompliancerequest"></a>
<a id="tocsdescribeconformancepackcompliancerequest"></a>

```json
{
  "ConformancePackName": {},
  "Filters": {
    "ConfigRuleNames": {},
    "ComplianceType": {}
  },
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConformancePackName|object|true|none|none|
|Filters|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_NoSuchConfigRuleInConformancePackException">NoSuchConfigRuleInConformancePackException</h2>
<!-- backwards compatibility -->
<a id="schemanosuchconfigruleinconformancepackexception"></a>
<a id="schema_NoSuchConfigRuleInConformancePackException"></a>
<a id="tocSnosuchconfigruleinconformancepackexception"></a>
<a id="tocsnosuchconfigruleinconformancepackexception"></a>

```json
null
```

<h2 id="tocS_DescribeConformancePackStatusResponse">DescribeConformancePackStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconformancepackstatusresponse"></a>
<a id="schema_DescribeConformancePackStatusResponse"></a>
<a id="tocSdescribeconformancepackstatusresponse"></a>
<a id="tocsdescribeconformancepackstatusresponse"></a>

```json
{
  "ConformancePackStatusDetails": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConformancePackStatusDetails|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeConformancePackStatusRequest">DescribeConformancePackStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconformancepackstatusrequest"></a>
<a id="schema_DescribeConformancePackStatusRequest"></a>
<a id="tocSdescribeconformancepackstatusrequest"></a>
<a id="tocsdescribeconformancepackstatusrequest"></a>

```json
{
  "ConformancePackNames": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConformancePackNames|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeConformancePacksResponse">DescribeConformancePacksResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconformancepacksresponse"></a>
<a id="schema_DescribeConformancePacksResponse"></a>
<a id="tocSdescribeconformancepacksresponse"></a>
<a id="tocsdescribeconformancepacksresponse"></a>

```json
{
  "ConformancePackDetails": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConformancePackDetails|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeConformancePacksRequest">DescribeConformancePacksRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconformancepacksrequest"></a>
<a id="schema_DescribeConformancePacksRequest"></a>
<a id="tocSdescribeconformancepacksrequest"></a>
<a id="tocsdescribeconformancepacksrequest"></a>

```json
{
  "ConformancePackNames": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConformancePackNames|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeDeliveryChannelStatusResponse">DescribeDeliveryChannelStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedeliverychannelstatusresponse"></a>
<a id="schema_DescribeDeliveryChannelStatusResponse"></a>
<a id="tocSdescribedeliverychannelstatusresponse"></a>
<a id="tocsdescribedeliverychannelstatusresponse"></a>

```json
{
  "DeliveryChannelsStatus": {}
}
```

The output for the <a>DescribeDeliveryChannelStatus</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryChannelsStatus|object|false|none|none|

<h2 id="tocS_DescribeDeliveryChannelStatusRequest">DescribeDeliveryChannelStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedeliverychannelstatusrequest"></a>
<a id="schema_DescribeDeliveryChannelStatusRequest"></a>
<a id="tocSdescribedeliverychannelstatusrequest"></a>
<a id="tocsdescribedeliverychannelstatusrequest"></a>

```json
{
  "DeliveryChannelNames": {}
}
```

The input for the <a>DeliveryChannelStatus</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryChannelNames|object|false|none|none|

<h2 id="tocS_DescribeDeliveryChannelsResponse">DescribeDeliveryChannelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedeliverychannelsresponse"></a>
<a id="schema_DescribeDeliveryChannelsResponse"></a>
<a id="tocSdescribedeliverychannelsresponse"></a>
<a id="tocsdescribedeliverychannelsresponse"></a>

```json
{
  "DeliveryChannels": {}
}
```

The output for the <a>DescribeDeliveryChannels</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryChannels|object|false|none|none|

<h2 id="tocS_DescribeDeliveryChannelsRequest">DescribeDeliveryChannelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedeliverychannelsrequest"></a>
<a id="schema_DescribeDeliveryChannelsRequest"></a>
<a id="tocSdescribedeliverychannelsrequest"></a>
<a id="tocsdescribedeliverychannelsrequest"></a>

```json
{
  "DeliveryChannelNames": {}
}
```

The input for the <a>DescribeDeliveryChannels</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryChannelNames|object|false|none|none|

<h2 id="tocS_DescribeOrganizationConfigRuleStatusesResponse">DescribeOrganizationConfigRuleStatusesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationconfigrulestatusesresponse"></a>
<a id="schema_DescribeOrganizationConfigRuleStatusesResponse"></a>
<a id="tocSdescribeorganizationconfigrulestatusesresponse"></a>
<a id="tocsdescribeorganizationconfigrulestatusesresponse"></a>

```json
{
  "OrganizationConfigRuleStatuses": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConfigRuleStatuses|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeOrganizationConfigRuleStatusesRequest">DescribeOrganizationConfigRuleStatusesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationconfigrulestatusesrequest"></a>
<a id="schema_DescribeOrganizationConfigRuleStatusesRequest"></a>
<a id="tocSdescribeorganizationconfigrulestatusesrequest"></a>
<a id="tocsdescribeorganizationconfigrulestatusesrequest"></a>

```json
{
  "OrganizationConfigRuleNames": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConfigRuleNames|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeOrganizationConfigRulesResponse">DescribeOrganizationConfigRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationconfigrulesresponse"></a>
<a id="schema_DescribeOrganizationConfigRulesResponse"></a>
<a id="tocSdescribeorganizationconfigrulesresponse"></a>
<a id="tocsdescribeorganizationconfigrulesresponse"></a>

```json
{
  "OrganizationConfigRules": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConfigRules|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeOrganizationConfigRulesRequest">DescribeOrganizationConfigRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationconfigrulesrequest"></a>
<a id="schema_DescribeOrganizationConfigRulesRequest"></a>
<a id="tocSdescribeorganizationconfigrulesrequest"></a>
<a id="tocsdescribeorganizationconfigrulesrequest"></a>

```json
{
  "OrganizationConfigRuleNames": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConfigRuleNames|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeOrganizationConformancePackStatusesResponse">DescribeOrganizationConformancePackStatusesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationconformancepackstatusesresponse"></a>
<a id="schema_DescribeOrganizationConformancePackStatusesResponse"></a>
<a id="tocSdescribeorganizationconformancepackstatusesresponse"></a>
<a id="tocsdescribeorganizationconformancepackstatusesresponse"></a>

```json
{
  "OrganizationConformancePackStatuses": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConformancePackStatuses|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeOrganizationConformancePackStatusesRequest">DescribeOrganizationConformancePackStatusesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationconformancepackstatusesrequest"></a>
<a id="schema_DescribeOrganizationConformancePackStatusesRequest"></a>
<a id="tocSdescribeorganizationconformancepackstatusesrequest"></a>
<a id="tocsdescribeorganizationconformancepackstatusesrequest"></a>

```json
{
  "OrganizationConformancePackNames": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConformancePackNames|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeOrganizationConformancePacksResponse">DescribeOrganizationConformancePacksResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationconformancepacksresponse"></a>
<a id="schema_DescribeOrganizationConformancePacksResponse"></a>
<a id="tocSdescribeorganizationconformancepacksresponse"></a>
<a id="tocsdescribeorganizationconformancepacksresponse"></a>

```json
{
  "OrganizationConformancePacks": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConformancePacks|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeOrganizationConformancePacksRequest">DescribeOrganizationConformancePacksRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationconformancepacksrequest"></a>
<a id="schema_DescribeOrganizationConformancePacksRequest"></a>
<a id="tocSdescribeorganizationconformancepacksrequest"></a>
<a id="tocsdescribeorganizationconformancepacksrequest"></a>

```json
{
  "OrganizationConformancePackNames": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConformancePackNames|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribePendingAggregationRequestsResponse">DescribePendingAggregationRequestsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribependingaggregationrequestsresponse"></a>
<a id="schema_DescribePendingAggregationRequestsResponse"></a>
<a id="tocSdescribependingaggregationrequestsresponse"></a>
<a id="tocsdescribependingaggregationrequestsresponse"></a>

```json
{
  "PendingAggregationRequests": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PendingAggregationRequests|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribePendingAggregationRequestsRequest">DescribePendingAggregationRequestsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribependingaggregationrequestsrequest"></a>
<a id="schema_DescribePendingAggregationRequestsRequest"></a>
<a id="tocSdescribependingaggregationrequestsrequest"></a>
<a id="tocsdescribependingaggregationrequestsrequest"></a>

```json
{
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeRemediationConfigurationsResponse">DescribeRemediationConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberemediationconfigurationsresponse"></a>
<a id="schema_DescribeRemediationConfigurationsResponse"></a>
<a id="tocSdescriberemediationconfigurationsresponse"></a>
<a id="tocsdescriberemediationconfigurationsresponse"></a>

```json
{
  "RemediationConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RemediationConfigurations|object|false|none|none|

<h2 id="tocS_DescribeRemediationConfigurationsRequest">DescribeRemediationConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberemediationconfigurationsrequest"></a>
<a id="schema_DescribeRemediationConfigurationsRequest"></a>
<a id="tocSdescriberemediationconfigurationsrequest"></a>
<a id="tocsdescriberemediationconfigurationsrequest"></a>

```json
{
  "ConfigRuleNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleNames|object|true|none|none|

<h2 id="tocS_DescribeRemediationExceptionsResponse">DescribeRemediationExceptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberemediationexceptionsresponse"></a>
<a id="schema_DescribeRemediationExceptionsResponse"></a>
<a id="tocSdescriberemediationexceptionsresponse"></a>
<a id="tocsdescriberemediationexceptionsresponse"></a>

```json
{
  "RemediationExceptions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RemediationExceptions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeRemediationExceptionsRequest">DescribeRemediationExceptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberemediationexceptionsrequest"></a>
<a id="schema_DescribeRemediationExceptionsRequest"></a>
<a id="tocSdescriberemediationexceptionsrequest"></a>
<a id="tocsdescriberemediationexceptionsrequest"></a>

```json
{
  "ConfigRuleName": {},
  "ResourceKeys": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|true|none|none|
|ResourceKeys|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeRemediationExecutionStatusResponse">DescribeRemediationExecutionStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberemediationexecutionstatusresponse"></a>
<a id="schema_DescribeRemediationExecutionStatusResponse"></a>
<a id="tocSdescriberemediationexecutionstatusresponse"></a>
<a id="tocsdescriberemediationexecutionstatusresponse"></a>

```json
{
  "RemediationExecutionStatuses": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RemediationExecutionStatuses|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeRemediationExecutionStatusRequest">DescribeRemediationExecutionStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberemediationexecutionstatusrequest"></a>
<a id="schema_DescribeRemediationExecutionStatusRequest"></a>
<a id="tocSdescriberemediationexecutionstatusrequest"></a>
<a id="tocsdescriberemediationexecutionstatusrequest"></a>

```json
{
  "ConfigRuleName": {},
  "ResourceKeys": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|true|none|none|
|ResourceKeys|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeRetentionConfigurationsResponse">DescribeRetentionConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberetentionconfigurationsresponse"></a>
<a id="schema_DescribeRetentionConfigurationsResponse"></a>
<a id="tocSdescriberetentionconfigurationsresponse"></a>
<a id="tocsdescriberetentionconfigurationsresponse"></a>

```json
{
  "RetentionConfigurations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RetentionConfigurations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeRetentionConfigurationsRequest">DescribeRetentionConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberetentionconfigurationsrequest"></a>
<a id="schema_DescribeRetentionConfigurationsRequest"></a>
<a id="tocSdescriberetentionconfigurationsrequest"></a>
<a id="tocsdescriberetentionconfigurationsrequest"></a>

```json
{
  "RetentionConfigurationNames": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RetentionConfigurationNames|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetAggregateComplianceDetailsByConfigRuleResponse">GetAggregateComplianceDetailsByConfigRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaggregatecompliancedetailsbyconfigruleresponse"></a>
<a id="schema_GetAggregateComplianceDetailsByConfigRuleResponse"></a>
<a id="tocSgetaggregatecompliancedetailsbyconfigruleresponse"></a>
<a id="tocsgetaggregatecompliancedetailsbyconfigruleresponse"></a>

```json
{
  "AggregateEvaluationResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AggregateEvaluationResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetAggregateComplianceDetailsByConfigRuleRequest">GetAggregateComplianceDetailsByConfigRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaggregatecompliancedetailsbyconfigrulerequest"></a>
<a id="schema_GetAggregateComplianceDetailsByConfigRuleRequest"></a>
<a id="tocSgetaggregatecompliancedetailsbyconfigrulerequest"></a>
<a id="tocsgetaggregatecompliancedetailsbyconfigrulerequest"></a>

```json
{
  "ConfigurationAggregatorName": {},
  "ConfigRuleName": {},
  "AccountId": {},
  "AwsRegion": {},
  "ComplianceType": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationAggregatorName|object|true|none|none|
|ConfigRuleName|object|true|none|none|
|AccountId|object|true|none|none|
|AwsRegion|object|true|none|none|
|ComplianceType|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetAggregateConfigRuleComplianceSummaryResponse">GetAggregateConfigRuleComplianceSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaggregateconfigrulecompliancesummaryresponse"></a>
<a id="schema_GetAggregateConfigRuleComplianceSummaryResponse"></a>
<a id="tocSgetaggregateconfigrulecompliancesummaryresponse"></a>
<a id="tocsgetaggregateconfigrulecompliancesummaryresponse"></a>

```json
{
  "GroupByKey": {},
  "AggregateComplianceCounts": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupByKey|object|false|none|none|
|AggregateComplianceCounts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetAggregateConfigRuleComplianceSummaryRequest">GetAggregateConfigRuleComplianceSummaryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaggregateconfigrulecompliancesummaryrequest"></a>
<a id="schema_GetAggregateConfigRuleComplianceSummaryRequest"></a>
<a id="tocSgetaggregateconfigrulecompliancesummaryrequest"></a>
<a id="tocsgetaggregateconfigrulecompliancesummaryrequest"></a>

```json
{
  "ConfigurationAggregatorName": {},
  "Filters": {
    "AccountId": {},
    "AwsRegion": {}
  },
  "GroupByKey": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationAggregatorName|object|true|none|none|
|Filters|object|false|none|none|
|GroupByKey|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetAggregateConformancePackComplianceSummaryResponse">GetAggregateConformancePackComplianceSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaggregateconformancepackcompliancesummaryresponse"></a>
<a id="schema_GetAggregateConformancePackComplianceSummaryResponse"></a>
<a id="tocSgetaggregateconformancepackcompliancesummaryresponse"></a>
<a id="tocsgetaggregateconformancepackcompliancesummaryresponse"></a>

```json
{
  "AggregateConformancePackComplianceSummaries": {},
  "GroupByKey": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AggregateConformancePackComplianceSummaries|object|false|none|none|
|GroupByKey|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetAggregateConformancePackComplianceSummaryRequest">GetAggregateConformancePackComplianceSummaryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaggregateconformancepackcompliancesummaryrequest"></a>
<a id="schema_GetAggregateConformancePackComplianceSummaryRequest"></a>
<a id="tocSgetaggregateconformancepackcompliancesummaryrequest"></a>
<a id="tocsgetaggregateconformancepackcompliancesummaryrequest"></a>

```json
{
  "ConfigurationAggregatorName": {},
  "Filters": {
    "AccountId": {},
    "AwsRegion": {}
  },
  "GroupByKey": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationAggregatorName|object|true|none|none|
|Filters|object|false|none|none|
|GroupByKey|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetAggregateDiscoveredResourceCountsResponse">GetAggregateDiscoveredResourceCountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaggregatediscoveredresourcecountsresponse"></a>
<a id="schema_GetAggregateDiscoveredResourceCountsResponse"></a>
<a id="tocSgetaggregatediscoveredresourcecountsresponse"></a>
<a id="tocsgetaggregatediscoveredresourcecountsresponse"></a>

```json
{
  "TotalDiscoveredResources": {},
  "GroupByKey": {},
  "GroupedResourceCounts": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalDiscoveredResources|object|true|none|none|
|GroupByKey|object|false|none|none|
|GroupedResourceCounts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetAggregateDiscoveredResourceCountsRequest">GetAggregateDiscoveredResourceCountsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaggregatediscoveredresourcecountsrequest"></a>
<a id="schema_GetAggregateDiscoveredResourceCountsRequest"></a>
<a id="tocSgetaggregatediscoveredresourcecountsrequest"></a>
<a id="tocsgetaggregatediscoveredresourcecountsrequest"></a>

```json
{
  "ConfigurationAggregatorName": {},
  "Filters": {
    "ResourceType": {},
    "AccountId": {},
    "Region": {}
  },
  "GroupByKey": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationAggregatorName|object|true|none|none|
|Filters|object|false|none|none|
|GroupByKey|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetAggregateResourceConfigResponse">GetAggregateResourceConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaggregateresourceconfigresponse"></a>
<a id="schema_GetAggregateResourceConfigResponse"></a>
<a id="tocSgetaggregateresourceconfigresponse"></a>
<a id="tocsgetaggregateresourceconfigresponse"></a>

```json
{
  "ConfigurationItem": {
    "version": {},
    "accountId": {},
    "configurationItemCaptureTime": {},
    "configurationItemStatus": {},
    "configurationStateId": {},
    "configurationItemMD5Hash": {},
    "arn": {},
    "resourceType": {},
    "resourceId": {},
    "resourceName": {},
    "awsRegion": {},
    "availabilityZone": {},
    "resourceCreationTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "relatedEvents": {},
    "relationships": {},
    "configuration": {},
    "supplementaryConfiguration": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationItem|object|false|none|none|

<h2 id="tocS_GetAggregateResourceConfigRequest">GetAggregateResourceConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaggregateresourceconfigrequest"></a>
<a id="schema_GetAggregateResourceConfigRequest"></a>
<a id="tocSgetaggregateresourceconfigrequest"></a>
<a id="tocsgetaggregateresourceconfigrequest"></a>

```json
{
  "ConfigurationAggregatorName": {},
  "ResourceIdentifier": {
    "SourceAccountId": {},
    "SourceRegion": {},
    "ResourceId": {},
    "ResourceType": {},
    "ResourceName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationAggregatorName|object|true|none|none|
|ResourceIdentifier|object|true|none|none|

<h2 id="tocS_OversizedConfigurationItemException">OversizedConfigurationItemException</h2>
<!-- backwards compatibility -->
<a id="schemaoversizedconfigurationitemexception"></a>
<a id="schema_OversizedConfigurationItemException"></a>
<a id="tocSoversizedconfigurationitemexception"></a>
<a id="tocsoversizedconfigurationitemexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotDiscoveredException">ResourceNotDiscoveredException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotdiscoveredexception"></a>
<a id="schema_ResourceNotDiscoveredException"></a>
<a id="tocSresourcenotdiscoveredexception"></a>
<a id="tocsresourcenotdiscoveredexception"></a>

```json
null
```

<h2 id="tocS_GetComplianceDetailsByConfigRuleResponse">GetComplianceDetailsByConfigRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcompliancedetailsbyconfigruleresponse"></a>
<a id="schema_GetComplianceDetailsByConfigRuleResponse"></a>
<a id="tocSgetcompliancedetailsbyconfigruleresponse"></a>
<a id="tocsgetcompliancedetailsbyconfigruleresponse"></a>

```json
{
  "EvaluationResults": {},
  "NextToken": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EvaluationResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetComplianceDetailsByConfigRuleRequest">GetComplianceDetailsByConfigRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcompliancedetailsbyconfigrulerequest"></a>
<a id="schema_GetComplianceDetailsByConfigRuleRequest"></a>
<a id="tocSgetcompliancedetailsbyconfigrulerequest"></a>
<a id="tocsgetcompliancedetailsbyconfigrulerequest"></a>

```json
{
  "ConfigRuleName": {},
  "ComplianceTypes": {},
  "Limit": {},
  "NextToken": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|true|none|none|
|ComplianceTypes|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetComplianceDetailsByResourceResponse">GetComplianceDetailsByResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcompliancedetailsbyresourceresponse"></a>
<a id="schema_GetComplianceDetailsByResourceResponse"></a>
<a id="tocSgetcompliancedetailsbyresourceresponse"></a>
<a id="tocsgetcompliancedetailsbyresourceresponse"></a>

```json
{
  "EvaluationResults": {},
  "NextToken": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EvaluationResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetComplianceDetailsByResourceRequest">GetComplianceDetailsByResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcompliancedetailsbyresourcerequest"></a>
<a id="schema_GetComplianceDetailsByResourceRequest"></a>
<a id="tocSgetcompliancedetailsbyresourcerequest"></a>
<a id="tocsgetcompliancedetailsbyresourcerequest"></a>

```json
{
  "ResourceType": {},
  "ResourceId": {},
  "ComplianceTypes": {},
  "NextToken": {},
  "ResourceEvaluationId": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|false|none|none|
|ResourceId|object|false|none|none|
|ComplianceTypes|object|false|none|none|
|NextToken|object|false|none|none|
|ResourceEvaluationId|object|false|none|none|

<h2 id="tocS_GetComplianceSummaryByConfigRuleResponse">GetComplianceSummaryByConfigRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcompliancesummarybyconfigruleresponse"></a>
<a id="schema_GetComplianceSummaryByConfigRuleResponse"></a>
<a id="tocSgetcompliancesummarybyconfigruleresponse"></a>
<a id="tocsgetcompliancesummarybyconfigruleresponse"></a>

```json
{
  "ComplianceSummary": {
    "CompliantResourceCount": {
      "CappedCount": {},
      "CapExceeded": {}
    },
    "NonCompliantResourceCount": {
      "CappedCount": {},
      "CapExceeded": {}
    },
    "ComplianceSummaryTimestamp": {}
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComplianceSummary|object|false|none|none|

<h2 id="tocS_GetComplianceSummaryByResourceTypeResponse">GetComplianceSummaryByResourceTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcompliancesummarybyresourcetyperesponse"></a>
<a id="schema_GetComplianceSummaryByResourceTypeResponse"></a>
<a id="tocSgetcompliancesummarybyresourcetyperesponse"></a>
<a id="tocsgetcompliancesummarybyresourcetyperesponse"></a>

```json
{
  "ComplianceSummariesByResourceType": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComplianceSummariesByResourceType|object|false|none|none|

<h2 id="tocS_GetComplianceSummaryByResourceTypeRequest">GetComplianceSummaryByResourceTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcompliancesummarybyresourcetyperequest"></a>
<a id="schema_GetComplianceSummaryByResourceTypeRequest"></a>
<a id="tocSgetcompliancesummarybyresourcetyperequest"></a>
<a id="tocsgetcompliancesummarybyresourcetyperequest"></a>

```json
{
  "ResourceTypes": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceTypes|object|false|none|none|

<h2 id="tocS_GetConformancePackComplianceDetailsResponse">GetConformancePackComplianceDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconformancepackcompliancedetailsresponse"></a>
<a id="schema_GetConformancePackComplianceDetailsResponse"></a>
<a id="tocSgetconformancepackcompliancedetailsresponse"></a>
<a id="tocsgetconformancepackcompliancedetailsresponse"></a>

```json
{
  "ConformancePackName": {},
  "ConformancePackRuleEvaluationResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConformancePackName|object|true|none|none|
|ConformancePackRuleEvaluationResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetConformancePackComplianceDetailsRequest">GetConformancePackComplianceDetailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconformancepackcompliancedetailsrequest"></a>
<a id="schema_GetConformancePackComplianceDetailsRequest"></a>
<a id="tocSgetconformancepackcompliancedetailsrequest"></a>
<a id="tocsgetconformancepackcompliancedetailsrequest"></a>

```json
{
  "ConformancePackName": {},
  "Filters": {
    "ConfigRuleNames": {},
    "ComplianceType": {},
    "ResourceType": {},
    "ResourceIds": {}
  },
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConformancePackName|object|true|none|none|
|Filters|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetConformancePackComplianceSummaryResponse">GetConformancePackComplianceSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconformancepackcompliancesummaryresponse"></a>
<a id="schema_GetConformancePackComplianceSummaryResponse"></a>
<a id="tocSgetconformancepackcompliancesummaryresponse"></a>
<a id="tocsgetconformancepackcompliancesummaryresponse"></a>

```json
{
  "ConformancePackComplianceSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConformancePackComplianceSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetConformancePackComplianceSummaryRequest">GetConformancePackComplianceSummaryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconformancepackcompliancesummaryrequest"></a>
<a id="schema_GetConformancePackComplianceSummaryRequest"></a>
<a id="tocSgetconformancepackcompliancesummaryrequest"></a>
<a id="tocsgetconformancepackcompliancesummaryrequest"></a>

```json
{
  "ConformancePackNames": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConformancePackNames|object|true|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetCustomRulePolicyResponse">GetCustomRulePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcustomrulepolicyresponse"></a>
<a id="schema_GetCustomRulePolicyResponse"></a>
<a id="tocSgetcustomrulepolicyresponse"></a>
<a id="tocsgetcustomrulepolicyresponse"></a>

```json
{
  "PolicyText": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyText|object|false|none|none|

<h2 id="tocS_GetCustomRulePolicyRequest">GetCustomRulePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcustomrulepolicyrequest"></a>
<a id="schema_GetCustomRulePolicyRequest"></a>
<a id="tocSgetcustomrulepolicyrequest"></a>
<a id="tocsgetcustomrulepolicyrequest"></a>

```json
{
  "ConfigRuleName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|false|none|none|

<h2 id="tocS_GetDiscoveredResourceCountsResponse">GetDiscoveredResourceCountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdiscoveredresourcecountsresponse"></a>
<a id="schema_GetDiscoveredResourceCountsResponse"></a>
<a id="tocSgetdiscoveredresourcecountsresponse"></a>
<a id="tocsgetdiscoveredresourcecountsresponse"></a>

```json
{
  "totalDiscoveredResources": {},
  "resourceCounts": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalDiscoveredResources|object|false|none|none|
|resourceCounts|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetDiscoveredResourceCountsRequest">GetDiscoveredResourceCountsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdiscoveredresourcecountsrequest"></a>
<a id="schema_GetDiscoveredResourceCountsRequest"></a>
<a id="tocSgetdiscoveredresourcecountsrequest"></a>
<a id="tocsgetdiscoveredresourcecountsrequest"></a>

```json
{
  "resourceTypes": {},
  "limit": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceTypes|object|false|none|none|
|limit|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetOrganizationConfigRuleDetailedStatusResponse">GetOrganizationConfigRuleDetailedStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetorganizationconfigruledetailedstatusresponse"></a>
<a id="schema_GetOrganizationConfigRuleDetailedStatusResponse"></a>
<a id="tocSgetorganizationconfigruledetailedstatusresponse"></a>
<a id="tocsgetorganizationconfigruledetailedstatusresponse"></a>

```json
{
  "OrganizationConfigRuleDetailedStatus": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConfigRuleDetailedStatus|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetOrganizationConfigRuleDetailedStatusRequest">GetOrganizationConfigRuleDetailedStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetorganizationconfigruledetailedstatusrequest"></a>
<a id="schema_GetOrganizationConfigRuleDetailedStatusRequest"></a>
<a id="tocSgetorganizationconfigruledetailedstatusrequest"></a>
<a id="tocsgetorganizationconfigruledetailedstatusrequest"></a>

```json
{
  "OrganizationConfigRuleName": {},
  "Filters": {
    "AccountId": {},
    "MemberAccountRuleStatus": {}
  },
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConfigRuleName|object|true|none|none|
|Filters|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetOrganizationConformancePackDetailedStatusResponse">GetOrganizationConformancePackDetailedStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetorganizationconformancepackdetailedstatusresponse"></a>
<a id="schema_GetOrganizationConformancePackDetailedStatusResponse"></a>
<a id="tocSgetorganizationconformancepackdetailedstatusresponse"></a>
<a id="tocsgetorganizationconformancepackdetailedstatusresponse"></a>

```json
{
  "OrganizationConformancePackDetailedStatuses": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConformancePackDetailedStatuses|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetOrganizationConformancePackDetailedStatusRequest">GetOrganizationConformancePackDetailedStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetorganizationconformancepackdetailedstatusrequest"></a>
<a id="schema_GetOrganizationConformancePackDetailedStatusRequest"></a>
<a id="tocSgetorganizationconformancepackdetailedstatusrequest"></a>
<a id="tocsgetorganizationconformancepackdetailedstatusrequest"></a>

```json
{
  "OrganizationConformancePackName": {},
  "Filters": {
    "AccountId": {},
    "Status": {}
  },
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConformancePackName|object|true|none|none|
|Filters|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetOrganizationCustomRulePolicyResponse">GetOrganizationCustomRulePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetorganizationcustomrulepolicyresponse"></a>
<a id="schema_GetOrganizationCustomRulePolicyResponse"></a>
<a id="tocSgetorganizationcustomrulepolicyresponse"></a>
<a id="tocsgetorganizationcustomrulepolicyresponse"></a>

```json
{
  "PolicyText": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyText|object|false|none|none|

<h2 id="tocS_GetOrganizationCustomRulePolicyRequest">GetOrganizationCustomRulePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetorganizationcustomrulepolicyrequest"></a>
<a id="schema_GetOrganizationCustomRulePolicyRequest"></a>
<a id="tocSgetorganizationcustomrulepolicyrequest"></a>
<a id="tocsgetorganizationcustomrulepolicyrequest"></a>

```json
{
  "OrganizationConfigRuleName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConfigRuleName|object|true|none|none|

<h2 id="tocS_GetResourceConfigHistoryResponse">GetResourceConfigHistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourceconfighistoryresponse"></a>
<a id="schema_GetResourceConfigHistoryResponse"></a>
<a id="tocSgetresourceconfighistoryresponse"></a>
<a id="tocsgetresourceconfighistoryresponse"></a>

```json
{
  "configurationItems": {},
  "nextToken": {}
}
```

The output for the <a>GetResourceConfigHistory</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationItems|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetResourceConfigHistoryRequest">GetResourceConfigHistoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourceconfighistoryrequest"></a>
<a id="schema_GetResourceConfigHistoryRequest"></a>
<a id="tocSgetresourceconfighistoryrequest"></a>
<a id="tocsgetresourceconfighistoryrequest"></a>

```json
{
  "resourceType": {},
  "resourceId": {},
  "laterTime": {},
  "earlierTime": {},
  "chronologicalOrder": {},
  "limit": {},
  "nextToken": {}
}
```

The input for the <a>GetResourceConfigHistory</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|true|none|none|
|resourceId|object|true|none|none|
|laterTime|object|false|none|none|
|earlierTime|object|false|none|none|
|chronologicalOrder|object|false|none|none|
|limit|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_InvalidTimeRangeException">InvalidTimeRangeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtimerangeexception"></a>
<a id="schema_InvalidTimeRangeException"></a>
<a id="tocSinvalidtimerangeexception"></a>
<a id="tocsinvalidtimerangeexception"></a>

```json
null
```

<h2 id="tocS_GetResourceEvaluationSummaryResponse">GetResourceEvaluationSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourceevaluationsummaryresponse"></a>
<a id="schema_GetResourceEvaluationSummaryResponse"></a>
<a id="tocSgetresourceevaluationsummaryresponse"></a>
<a id="tocsgetresourceevaluationsummaryresponse"></a>

```json
{
  "ResourceEvaluationId": {},
  "EvaluationMode": {},
  "EvaluationStatus": {
    "Status": {},
    "FailureReason": {}
  },
  "EvaluationStartTimestamp": {},
  "Compliance": {},
  "EvaluationContext": {
    "EvaluationContextIdentifier": {}
  },
  "ResourceDetails": {
    "ResourceId": {},
    "ResourceType": {},
    "ResourceConfiguration": {},
    "ResourceConfigurationSchemaType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceEvaluationId|object|false|none|none|
|EvaluationMode|object|false|none|none|
|EvaluationStatus|object|false|none|none|
|EvaluationStartTimestamp|object|false|none|none|
|Compliance|object|false|none|none|
|EvaluationContext|object|false|none|none|
|ResourceDetails|object|false|none|none|

<h2 id="tocS_GetResourceEvaluationSummaryRequest">GetResourceEvaluationSummaryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourceevaluationsummaryrequest"></a>
<a id="schema_GetResourceEvaluationSummaryRequest"></a>
<a id="tocSgetresourceevaluationsummaryrequest"></a>
<a id="tocsgetresourceevaluationsummaryrequest"></a>

```json
{
  "ResourceEvaluationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceEvaluationId|object|true|none|none|

<h2 id="tocS_GetStoredQueryResponse">GetStoredQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstoredqueryresponse"></a>
<a id="schema_GetStoredQueryResponse"></a>
<a id="tocSgetstoredqueryresponse"></a>
<a id="tocsgetstoredqueryresponse"></a>

```json
{
  "StoredQuery": {
    "QueryId": {},
    "QueryArn": {},
    "QueryName": {},
    "Description": {},
    "Expression": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StoredQuery|object|false|none|none|

<h2 id="tocS_GetStoredQueryRequest">GetStoredQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstoredqueryrequest"></a>
<a id="schema_GetStoredQueryRequest"></a>
<a id="tocSgetstoredqueryrequest"></a>
<a id="tocsgetstoredqueryrequest"></a>

```json
{
  "QueryName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryName|object|true|none|none|

<h2 id="tocS_ListAggregateDiscoveredResourcesResponse">ListAggregateDiscoveredResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaggregatediscoveredresourcesresponse"></a>
<a id="schema_ListAggregateDiscoveredResourcesResponse"></a>
<a id="tocSlistaggregatediscoveredresourcesresponse"></a>
<a id="tocslistaggregatediscoveredresourcesresponse"></a>

```json
{
  "ResourceIdentifiers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceIdentifiers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAggregateDiscoveredResourcesRequest">ListAggregateDiscoveredResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaggregatediscoveredresourcesrequest"></a>
<a id="schema_ListAggregateDiscoveredResourcesRequest"></a>
<a id="tocSlistaggregatediscoveredresourcesrequest"></a>
<a id="tocslistaggregatediscoveredresourcesrequest"></a>

```json
{
  "ConfigurationAggregatorName": {},
  "ResourceType": {},
  "Filters": {
    "AccountId": {},
    "ResourceId": {},
    "ResourceName": {},
    "Region": {}
  },
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationAggregatorName|object|true|none|none|
|ResourceType|object|true|none|none|
|Filters|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListConformancePackComplianceScoresResponse">ListConformancePackComplianceScoresResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconformancepackcompliancescoresresponse"></a>
<a id="schema_ListConformancePackComplianceScoresResponse"></a>
<a id="tocSlistconformancepackcompliancescoresresponse"></a>
<a id="tocslistconformancepackcompliancescoresresponse"></a>

```json
{
  "NextToken": {},
  "ConformancePackComplianceScores": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|ConformancePackComplianceScores|object|true|none|none|

<h2 id="tocS_ListConformancePackComplianceScoresRequest">ListConformancePackComplianceScoresRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconformancepackcompliancescoresrequest"></a>
<a id="schema_ListConformancePackComplianceScoresRequest"></a>
<a id="tocSlistconformancepackcompliancescoresrequest"></a>
<a id="tocslistconformancepackcompliancescoresrequest"></a>

```json
{
  "Filters": {
    "ConformancePackNames": {}
  },
  "SortOrder": {},
  "SortBy": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|SortOrder|object|false|none|none|
|SortBy|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDiscoveredResourcesResponse">ListDiscoveredResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdiscoveredresourcesresponse"></a>
<a id="schema_ListDiscoveredResourcesResponse"></a>
<a id="tocSlistdiscoveredresourcesresponse"></a>
<a id="tocslistdiscoveredresourcesresponse"></a>

```json
{
  "resourceIdentifiers": {},
  "nextToken": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceIdentifiers|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDiscoveredResourcesRequest">ListDiscoveredResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdiscoveredresourcesrequest"></a>
<a id="schema_ListDiscoveredResourcesRequest"></a>
<a id="tocSlistdiscoveredresourcesrequest"></a>
<a id="tocslistdiscoveredresourcesrequest"></a>

```json
{
  "resourceType": {},
  "resourceIds": {},
  "resourceName": {},
  "limit": {},
  "includeDeletedResources": {},
  "nextToken": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|true|none|none|
|resourceIds|object|false|none|none|
|resourceName|object|false|none|none|
|limit|object|false|none|none|
|includeDeletedResources|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListResourceEvaluationsResponse">ListResourceEvaluationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresourceevaluationsresponse"></a>
<a id="schema_ListResourceEvaluationsResponse"></a>
<a id="tocSlistresourceevaluationsresponse"></a>
<a id="tocslistresourceevaluationsresponse"></a>

```json
{
  "ResourceEvaluations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceEvaluations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListResourceEvaluationsRequest">ListResourceEvaluationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourceevaluationsrequest"></a>
<a id="schema_ListResourceEvaluationsRequest"></a>
<a id="tocSlistresourceevaluationsrequest"></a>
<a id="tocslistresourceevaluationsrequest"></a>

```json
{
  "Filters": {
    "EvaluationMode": {},
    "TimeWindow": {
      "StartTime": {},
      "EndTime": {}
    },
    "EvaluationContextIdentifier": {}
  },
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListStoredQueriesResponse">ListStoredQueriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliststoredqueriesresponse"></a>
<a id="schema_ListStoredQueriesResponse"></a>
<a id="tocSliststoredqueriesresponse"></a>
<a id="tocsliststoredqueriesresponse"></a>

```json
{
  "StoredQueryMetadata": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StoredQueryMetadata|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListStoredQueriesRequest">ListStoredQueriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaliststoredqueriesrequest"></a>
<a id="schema_ListStoredQueriesRequest"></a>
<a id="tocSliststoredqueriesrequest"></a>
<a id="tocsliststoredqueriesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

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

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceArn": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PutAggregationAuthorizationResponse">PutAggregationAuthorizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputaggregationauthorizationresponse"></a>
<a id="schema_PutAggregationAuthorizationResponse"></a>
<a id="tocSputaggregationauthorizationresponse"></a>
<a id="tocsputaggregationauthorizationresponse"></a>

```json
{
  "AggregationAuthorization": {
    "AggregationAuthorizationArn": {},
    "AuthorizedAccountId": {},
    "AuthorizedAwsRegion": {},
    "CreationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AggregationAuthorization|object|false|none|none|

<h2 id="tocS_PutAggregationAuthorizationRequest">PutAggregationAuthorizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputaggregationauthorizationrequest"></a>
<a id="schema_PutAggregationAuthorizationRequest"></a>
<a id="tocSputaggregationauthorizationrequest"></a>
<a id="tocsputaggregationauthorizationrequest"></a>

```json
{
  "AuthorizedAccountId": {},
  "AuthorizedAwsRegion": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizedAccountId|object|true|none|none|
|AuthorizedAwsRegion|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_PutConfigRuleRequest">PutConfigRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputconfigrulerequest"></a>
<a id="schema_PutConfigRuleRequest"></a>
<a id="tocSputconfigrulerequest"></a>
<a id="tocsputconfigrulerequest"></a>

```json
{
  "ConfigRule": {
    "ConfigRuleName": {},
    "ConfigRuleArn": {},
    "ConfigRuleId": {},
    "Description": {},
    "Scope": {
      "ComplianceResourceTypes": {},
      "TagKey": {},
      "TagValue": {},
      "ComplianceResourceId": {}
    },
    "Source": {
      "Owner": {},
      "SourceIdentifier": {},
      "SourceDetails": {},
      "CustomPolicyDetails": {
        "PolicyRuntime": {},
        "PolicyText": {},
        "EnableDebugLogDelivery": {}
      }
    },
    "InputParameters": {},
    "MaximumExecutionFrequency": {},
    "ConfigRuleState": {},
    "CreatedBy": {},
    "EvaluationModes": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRule|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_MaxNumberOfConfigRulesExceededException">MaxNumberOfConfigRulesExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaxnumberofconfigrulesexceededexception"></a>
<a id="schema_MaxNumberOfConfigRulesExceededException"></a>
<a id="tocSmaxnumberofconfigrulesexceededexception"></a>
<a id="tocsmaxnumberofconfigrulesexceededexception"></a>

```json
null
```

<h2 id="tocS_PutConfigurationAggregatorResponse">PutConfigurationAggregatorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputconfigurationaggregatorresponse"></a>
<a id="schema_PutConfigurationAggregatorResponse"></a>
<a id="tocSputconfigurationaggregatorresponse"></a>
<a id="tocsputconfigurationaggregatorresponse"></a>

```json
{
  "ConfigurationAggregator": {
    "ConfigurationAggregatorName": {},
    "ConfigurationAggregatorArn": {},
    "AccountAggregationSources": {},
    "OrganizationAggregationSource": {
      "RoleArn": {},
      "AwsRegions": {},
      "AllAwsRegions": {}
    },
    "CreationTime": {},
    "LastUpdatedTime": {},
    "CreatedBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationAggregator|object|false|none|none|

<h2 id="tocS_PutConfigurationAggregatorRequest">PutConfigurationAggregatorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputconfigurationaggregatorrequest"></a>
<a id="schema_PutConfigurationAggregatorRequest"></a>
<a id="tocSputconfigurationaggregatorrequest"></a>
<a id="tocsputconfigurationaggregatorrequest"></a>

```json
{
  "ConfigurationAggregatorName": {},
  "AccountAggregationSources": {},
  "OrganizationAggregationSource": {
    "RoleArn": {},
    "AwsRegions": {},
    "AllAwsRegions": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationAggregatorName|object|true|none|none|
|AccountAggregationSources|object|false|none|none|
|OrganizationAggregationSource|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidRoleException">InvalidRoleException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidroleexception"></a>
<a id="schema_InvalidRoleException"></a>
<a id="tocSinvalidroleexception"></a>
<a id="tocsinvalidroleexception"></a>

```json
null
```

<h2 id="tocS_NoAvailableOrganizationException">NoAvailableOrganizationException</h2>
<!-- backwards compatibility -->
<a id="schemanoavailableorganizationexception"></a>
<a id="schema_NoAvailableOrganizationException"></a>
<a id="tocSnoavailableorganizationexception"></a>
<a id="tocsnoavailableorganizationexception"></a>

```json
null
```

<h2 id="tocS_OrganizationAllFeaturesNotEnabledException">OrganizationAllFeaturesNotEnabledException</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationallfeaturesnotenabledexception"></a>
<a id="schema_OrganizationAllFeaturesNotEnabledException"></a>
<a id="tocSorganizationallfeaturesnotenabledexception"></a>
<a id="tocsorganizationallfeaturesnotenabledexception"></a>

```json
null
```

<h2 id="tocS_PutConfigurationRecorderRequest">PutConfigurationRecorderRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputconfigurationrecorderrequest"></a>
<a id="schema_PutConfigurationRecorderRequest"></a>
<a id="tocSputconfigurationrecorderrequest"></a>
<a id="tocsputconfigurationrecorderrequest"></a>

```json
{
  "ConfigurationRecorder": {
    "name": {},
    "roleARN": {},
    "recordingGroup": {
      "allSupported": {},
      "includeGlobalResourceTypes": {},
      "resourceTypes": {}
    }
  }
}
```

The input for the <a>PutConfigurationRecorder</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationRecorder|object|true|none|none|

<h2 id="tocS_MaxNumberOfConfigurationRecordersExceededException">MaxNumberOfConfigurationRecordersExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaxnumberofconfigurationrecordersexceededexception"></a>
<a id="schema_MaxNumberOfConfigurationRecordersExceededException"></a>
<a id="tocSmaxnumberofconfigurationrecordersexceededexception"></a>
<a id="tocsmaxnumberofconfigurationrecordersexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidConfigurationRecorderNameException">InvalidConfigurationRecorderNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidconfigurationrecordernameexception"></a>
<a id="schema_InvalidConfigurationRecorderNameException"></a>
<a id="tocSinvalidconfigurationrecordernameexception"></a>
<a id="tocsinvalidconfigurationrecordernameexception"></a>

```json
null
```

<h2 id="tocS_InvalidRecordingGroupException">InvalidRecordingGroupException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrecordinggroupexception"></a>
<a id="schema_InvalidRecordingGroupException"></a>
<a id="tocSinvalidrecordinggroupexception"></a>
<a id="tocsinvalidrecordinggroupexception"></a>

```json
null
```

<h2 id="tocS_PutConformancePackResponse">PutConformancePackResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputconformancepackresponse"></a>
<a id="schema_PutConformancePackResponse"></a>
<a id="tocSputconformancepackresponse"></a>
<a id="tocsputconformancepackresponse"></a>

```json
{
  "ConformancePackArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConformancePackArn|object|false|none|none|

<h2 id="tocS_PutConformancePackRequest">PutConformancePackRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputconformancepackrequest"></a>
<a id="schema_PutConformancePackRequest"></a>
<a id="tocSputconformancepackrequest"></a>
<a id="tocsputconformancepackrequest"></a>

```json
{
  "ConformancePackName": {},
  "TemplateS3Uri": {},
  "TemplateBody": {},
  "DeliveryS3Bucket": {},
  "DeliveryS3KeyPrefix": {},
  "ConformancePackInputParameters": {},
  "TemplateSSMDocumentDetails": {
    "DocumentName": {},
    "DocumentVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConformancePackName|object|true|none|none|
|TemplateS3Uri|object|false|none|none|
|TemplateBody|object|false|none|none|
|DeliveryS3Bucket|object|false|none|none|
|DeliveryS3KeyPrefix|object|false|none|none|
|ConformancePackInputParameters|object|false|none|none|
|TemplateSSMDocumentDetails|object|false|none|none|

<h2 id="tocS_ConformancePackTemplateValidationException">ConformancePackTemplateValidationException</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepacktemplatevalidationexception"></a>
<a id="schema_ConformancePackTemplateValidationException"></a>
<a id="tocSconformancepacktemplatevalidationexception"></a>
<a id="tocsconformancepacktemplatevalidationexception"></a>

```json
null
```

<h2 id="tocS_MaxNumberOfConformancePacksExceededException">MaxNumberOfConformancePacksExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaxnumberofconformancepacksexceededexception"></a>
<a id="schema_MaxNumberOfConformancePacksExceededException"></a>
<a id="tocSmaxnumberofconformancepacksexceededexception"></a>
<a id="tocsmaxnumberofconformancepacksexceededexception"></a>

```json
null
```

<h2 id="tocS_PutDeliveryChannelRequest">PutDeliveryChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputdeliverychannelrequest"></a>
<a id="schema_PutDeliveryChannelRequest"></a>
<a id="tocSputdeliverychannelrequest"></a>
<a id="tocsputdeliverychannelrequest"></a>

```json
{
  "DeliveryChannel": {
    "name": {},
    "s3BucketName": {},
    "s3KeyPrefix": {},
    "s3KmsKeyArn": {},
    "snsTopicARN": {},
    "configSnapshotDeliveryProperties": {
      "deliveryFrequency": {}
    }
  }
}
```

The input for the <a>PutDeliveryChannel</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryChannel|object|true|none|none|

<h2 id="tocS_MaxNumberOfDeliveryChannelsExceededException">MaxNumberOfDeliveryChannelsExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaxnumberofdeliverychannelsexceededexception"></a>
<a id="schema_MaxNumberOfDeliveryChannelsExceededException"></a>
<a id="tocSmaxnumberofdeliverychannelsexceededexception"></a>
<a id="tocsmaxnumberofdeliverychannelsexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidDeliveryChannelNameException">InvalidDeliveryChannelNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddeliverychannelnameexception"></a>
<a id="schema_InvalidDeliveryChannelNameException"></a>
<a id="tocSinvaliddeliverychannelnameexception"></a>
<a id="tocsinvaliddeliverychannelnameexception"></a>

```json
null
```

<h2 id="tocS_NoSuchBucketException">NoSuchBucketException</h2>
<!-- backwards compatibility -->
<a id="schemanosuchbucketexception"></a>
<a id="schema_NoSuchBucketException"></a>
<a id="tocSnosuchbucketexception"></a>
<a id="tocsnosuchbucketexception"></a>

```json
null
```

<h2 id="tocS_InvalidS3KeyPrefixException">InvalidS3KeyPrefixException</h2>
<!-- backwards compatibility -->
<a id="schemainvalids3keyprefixexception"></a>
<a id="schema_InvalidS3KeyPrefixException"></a>
<a id="tocSinvalids3keyprefixexception"></a>
<a id="tocsinvalids3keyprefixexception"></a>

```json
null
```

<h2 id="tocS_InvalidS3KmsKeyArnException">InvalidS3KmsKeyArnException</h2>
<!-- backwards compatibility -->
<a id="schemainvalids3kmskeyarnexception"></a>
<a id="schema_InvalidS3KmsKeyArnException"></a>
<a id="tocSinvalids3kmskeyarnexception"></a>
<a id="tocsinvalids3kmskeyarnexception"></a>

```json
null
```

<h2 id="tocS_InvalidSNSTopicARNException">InvalidSNSTopicARNException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsnstopicarnexception"></a>
<a id="schema_InvalidSNSTopicARNException"></a>
<a id="tocSinvalidsnstopicarnexception"></a>
<a id="tocsinvalidsnstopicarnexception"></a>

```json
null
```

<h2 id="tocS_InsufficientDeliveryPolicyException">InsufficientDeliveryPolicyException</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientdeliverypolicyexception"></a>
<a id="schema_InsufficientDeliveryPolicyException"></a>
<a id="tocSinsufficientdeliverypolicyexception"></a>
<a id="tocsinsufficientdeliverypolicyexception"></a>

```json
null
```

<h2 id="tocS_PutEvaluationsResponse">PutEvaluationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputevaluationsresponse"></a>
<a id="schema_PutEvaluationsResponse"></a>
<a id="tocSputevaluationsresponse"></a>
<a id="tocsputevaluationsresponse"></a>

```json
{
  "FailedEvaluations": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedEvaluations|object|false|none|none|

<h2 id="tocS_PutEvaluationsRequest">PutEvaluationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputevaluationsrequest"></a>
<a id="schema_PutEvaluationsRequest"></a>
<a id="tocSputevaluationsrequest"></a>
<a id="tocsputevaluationsrequest"></a>

```json
{
  "Evaluations": {},
  "ResultToken": {},
  "TestMode": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Evaluations|object|false|none|none|
|ResultToken|object|true|none|none|
|TestMode|object|false|none|none|

<h2 id="tocS_InvalidResultTokenException">InvalidResultTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidresulttokenexception"></a>
<a id="schema_InvalidResultTokenException"></a>
<a id="tocSinvalidresulttokenexception"></a>
<a id="tocsinvalidresulttokenexception"></a>

```json
null
```

<h2 id="tocS_PutExternalEvaluationResponse">PutExternalEvaluationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputexternalevaluationresponse"></a>
<a id="schema_PutExternalEvaluationResponse"></a>
<a id="tocSputexternalevaluationresponse"></a>
<a id="tocsputexternalevaluationresponse"></a>

```json
{}
```

<h2 id="tocS_PutExternalEvaluationRequest">PutExternalEvaluationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputexternalevaluationrequest"></a>
<a id="schema_PutExternalEvaluationRequest"></a>
<a id="tocSputexternalevaluationrequest"></a>
<a id="tocsputexternalevaluationrequest"></a>

```json
{
  "ConfigRuleName": {},
  "ExternalEvaluation": {
    "ComplianceResourceType": {},
    "ComplianceResourceId": {},
    "ComplianceType": {},
    "Annotation": {},
    "OrderingTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|true|none|none|
|ExternalEvaluation|object|true|none|none|

<h2 id="tocS_PutOrganizationConfigRuleResponse">PutOrganizationConfigRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputorganizationconfigruleresponse"></a>
<a id="schema_PutOrganizationConfigRuleResponse"></a>
<a id="tocSputorganizationconfigruleresponse"></a>
<a id="tocsputorganizationconfigruleresponse"></a>

```json
{
  "OrganizationConfigRuleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConfigRuleArn|object|false|none|none|

<h2 id="tocS_PutOrganizationConfigRuleRequest">PutOrganizationConfigRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputorganizationconfigrulerequest"></a>
<a id="schema_PutOrganizationConfigRuleRequest"></a>
<a id="tocSputorganizationconfigrulerequest"></a>
<a id="tocsputorganizationconfigrulerequest"></a>

```json
{
  "OrganizationConfigRuleName": {},
  "OrganizationManagedRuleMetadata": {
    "Description": {},
    "RuleIdentifier": {},
    "InputParameters": {},
    "MaximumExecutionFrequency": {},
    "ResourceTypesScope": {},
    "ResourceIdScope": {},
    "TagKeyScope": {},
    "TagValueScope": {}
  },
  "OrganizationCustomRuleMetadata": {
    "Description": {},
    "LambdaFunctionArn": {},
    "OrganizationConfigRuleTriggerTypes": {},
    "InputParameters": {},
    "MaximumExecutionFrequency": {},
    "ResourceTypesScope": {},
    "ResourceIdScope": {},
    "TagKeyScope": {},
    "TagValueScope": {}
  },
  "ExcludedAccounts": {},
  "OrganizationCustomPolicyRuleMetadata": {
    "Description": {},
    "OrganizationConfigRuleTriggerTypes": {},
    "InputParameters": {},
    "MaximumExecutionFrequency": {},
    "ResourceTypesScope": {},
    "ResourceIdScope": {},
    "TagKeyScope": {},
    "TagValueScope": {},
    "PolicyRuntime": {},
    "PolicyText": {},
    "DebugLogDeliveryAccounts": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConfigRuleName|object|true|none|none|
|OrganizationManagedRuleMetadata|object|false|none|none|
|OrganizationCustomRuleMetadata|object|false|none|none|
|ExcludedAccounts|object|false|none|none|
|OrganizationCustomPolicyRuleMetadata|object|false|none|none|

<h2 id="tocS_MaxNumberOfOrganizationConfigRulesExceededException">MaxNumberOfOrganizationConfigRulesExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaxnumberoforganizationconfigrulesexceededexception"></a>
<a id="schema_MaxNumberOfOrganizationConfigRulesExceededException"></a>
<a id="tocSmaxnumberoforganizationconfigrulesexceededexception"></a>
<a id="tocsmaxnumberoforganizationconfigrulesexceededexception"></a>

```json
null
```

<h2 id="tocS_PutOrganizationConformancePackResponse">PutOrganizationConformancePackResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputorganizationconformancepackresponse"></a>
<a id="schema_PutOrganizationConformancePackResponse"></a>
<a id="tocSputorganizationconformancepackresponse"></a>
<a id="tocsputorganizationconformancepackresponse"></a>

```json
{
  "OrganizationConformancePackArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConformancePackArn|object|false|none|none|

<h2 id="tocS_PutOrganizationConformancePackRequest">PutOrganizationConformancePackRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputorganizationconformancepackrequest"></a>
<a id="schema_PutOrganizationConformancePackRequest"></a>
<a id="tocSputorganizationconformancepackrequest"></a>
<a id="tocsputorganizationconformancepackrequest"></a>

```json
{
  "OrganizationConformancePackName": {},
  "TemplateS3Uri": {},
  "TemplateBody": {},
  "DeliveryS3Bucket": {},
  "DeliveryS3KeyPrefix": {},
  "ConformancePackInputParameters": {},
  "ExcludedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConformancePackName|object|true|none|none|
|TemplateS3Uri|object|false|none|none|
|TemplateBody|object|false|none|none|
|DeliveryS3Bucket|object|false|none|none|
|DeliveryS3KeyPrefix|object|false|none|none|
|ConformancePackInputParameters|object|false|none|none|
|ExcludedAccounts|object|false|none|none|

<h2 id="tocS_MaxNumberOfOrganizationConformancePacksExceededException">MaxNumberOfOrganizationConformancePacksExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaxnumberoforganizationconformancepacksexceededexception"></a>
<a id="schema_MaxNumberOfOrganizationConformancePacksExceededException"></a>
<a id="tocSmaxnumberoforganizationconformancepacksexceededexception"></a>
<a id="tocsmaxnumberoforganizationconformancepacksexceededexception"></a>

```json
null
```

<h2 id="tocS_OrganizationConformancePackTemplateValidationException">OrganizationConformancePackTemplateValidationException</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconformancepacktemplatevalidationexception"></a>
<a id="schema_OrganizationConformancePackTemplateValidationException"></a>
<a id="tocSorganizationconformancepacktemplatevalidationexception"></a>
<a id="tocsorganizationconformancepacktemplatevalidationexception"></a>

```json
null
```

<h2 id="tocS_PutRemediationConfigurationsResponse">PutRemediationConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputremediationconfigurationsresponse"></a>
<a id="schema_PutRemediationConfigurationsResponse"></a>
<a id="tocSputremediationconfigurationsresponse"></a>
<a id="tocsputremediationconfigurationsresponse"></a>

```json
{
  "FailedBatches": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedBatches|object|false|none|none|

<h2 id="tocS_PutRemediationConfigurationsRequest">PutRemediationConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputremediationconfigurationsrequest"></a>
<a id="schema_PutRemediationConfigurationsRequest"></a>
<a id="tocSputremediationconfigurationsrequest"></a>
<a id="tocsputremediationconfigurationsrequest"></a>

```json
{
  "RemediationConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RemediationConfigurations|object|true|none|none|

<h2 id="tocS_PutRemediationExceptionsResponse">PutRemediationExceptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputremediationexceptionsresponse"></a>
<a id="schema_PutRemediationExceptionsResponse"></a>
<a id="tocSputremediationexceptionsresponse"></a>
<a id="tocsputremediationexceptionsresponse"></a>

```json
{
  "FailedBatches": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedBatches|object|false|none|none|

<h2 id="tocS_PutRemediationExceptionsRequest">PutRemediationExceptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputremediationexceptionsrequest"></a>
<a id="schema_PutRemediationExceptionsRequest"></a>
<a id="tocSputremediationexceptionsrequest"></a>
<a id="tocsputremediationexceptionsrequest"></a>

```json
{
  "ConfigRuleName": {},
  "ResourceKeys": {},
  "Message": {},
  "ExpirationTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|true|none|none|
|ResourceKeys|object|true|none|none|
|Message|object|false|none|none|
|ExpirationTime|object|false|none|none|

<h2 id="tocS_PutResourceConfigRequest">PutResourceConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputresourceconfigrequest"></a>
<a id="schema_PutResourceConfigRequest"></a>
<a id="tocSputresourceconfigrequest"></a>
<a id="tocsputresourceconfigrequest"></a>

```json
{
  "ResourceType": {},
  "SchemaVersionId": {},
  "ResourceId": {},
  "ResourceName": {},
  "Configuration": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|true|none|none|
|SchemaVersionId|object|true|none|none|
|ResourceId|object|true|none|none|
|ResourceName|object|false|none|none|
|Configuration|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_MaxActiveResourcesExceededException">MaxActiveResourcesExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaxactiveresourcesexceededexception"></a>
<a id="schema_MaxActiveResourcesExceededException"></a>
<a id="tocSmaxactiveresourcesexceededexception"></a>
<a id="tocsmaxactiveresourcesexceededexception"></a>

```json
null
```

<h2 id="tocS_PutRetentionConfigurationResponse">PutRetentionConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputretentionconfigurationresponse"></a>
<a id="schema_PutRetentionConfigurationResponse"></a>
<a id="tocSputretentionconfigurationresponse"></a>
<a id="tocsputretentionconfigurationresponse"></a>

```json
{
  "RetentionConfiguration": {
    "Name": {},
    "RetentionPeriodInDays": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RetentionConfiguration|object|false|none|none|

<h2 id="tocS_PutRetentionConfigurationRequest">PutRetentionConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputretentionconfigurationrequest"></a>
<a id="schema_PutRetentionConfigurationRequest"></a>
<a id="tocSputretentionconfigurationrequest"></a>
<a id="tocsputretentionconfigurationrequest"></a>

```json
{
  "RetentionPeriodInDays": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RetentionPeriodInDays|object|true|none|none|

<h2 id="tocS_MaxNumberOfRetentionConfigurationsExceededException">MaxNumberOfRetentionConfigurationsExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaxnumberofretentionconfigurationsexceededexception"></a>
<a id="schema_MaxNumberOfRetentionConfigurationsExceededException"></a>
<a id="tocSmaxnumberofretentionconfigurationsexceededexception"></a>
<a id="tocsmaxnumberofretentionconfigurationsexceededexception"></a>

```json
null
```

<h2 id="tocS_PutStoredQueryResponse">PutStoredQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputstoredqueryresponse"></a>
<a id="schema_PutStoredQueryResponse"></a>
<a id="tocSputstoredqueryresponse"></a>
<a id="tocsputstoredqueryresponse"></a>

```json
{
  "QueryArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryArn|object|false|none|none|

<h2 id="tocS_PutStoredQueryRequest">PutStoredQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputstoredqueryrequest"></a>
<a id="schema_PutStoredQueryRequest"></a>
<a id="tocSputstoredqueryrequest"></a>
<a id="tocsputstoredqueryrequest"></a>

```json
{
  "StoredQuery": {
    "QueryId": {},
    "QueryArn": {},
    "QueryName": {},
    "Description": {},
    "Expression": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StoredQuery|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_TooManyTagsException">TooManyTagsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagsexception"></a>
<a id="schema_TooManyTagsException"></a>
<a id="tocStoomanytagsexception"></a>
<a id="tocstoomanytagsexception"></a>

```json
null
```

<h2 id="tocS_ResourceConcurrentModificationException">ResourceConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceconcurrentmodificationexception"></a>
<a id="schema_ResourceConcurrentModificationException"></a>
<a id="tocSresourceconcurrentmodificationexception"></a>
<a id="tocsresourceconcurrentmodificationexception"></a>

```json
null
```

<h2 id="tocS_SelectAggregateResourceConfigResponse">SelectAggregateResourceConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaselectaggregateresourceconfigresponse"></a>
<a id="schema_SelectAggregateResourceConfigResponse"></a>
<a id="tocSselectaggregateresourceconfigresponse"></a>
<a id="tocsselectaggregateresourceconfigresponse"></a>

```json
{
  "Results": {},
  "QueryInfo": {
    "SelectFields": {}
  },
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Results|object|false|none|none|
|QueryInfo|[QueryInfo](#schemaqueryinfo)|false|none|Details about the query.|
|NextToken|object|false|none|none|

<h2 id="tocS_SelectAggregateResourceConfigRequest">SelectAggregateResourceConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaselectaggregateresourceconfigrequest"></a>
<a id="schema_SelectAggregateResourceConfigRequest"></a>
<a id="tocSselectaggregateresourceconfigrequest"></a>
<a id="tocsselectaggregateresourceconfigrequest"></a>

```json
{
  "Expression": {},
  "ConfigurationAggregatorName": {},
  "Limit": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expression|object|true|none|none|
|ConfigurationAggregatorName|object|true|none|none|
|Limit|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidExpressionException">InvalidExpressionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidexpressionexception"></a>
<a id="schema_InvalidExpressionException"></a>
<a id="tocSinvalidexpressionexception"></a>
<a id="tocsinvalidexpressionexception"></a>

```json
null
```

<h2 id="tocS_SelectResourceConfigResponse">SelectResourceConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaselectresourceconfigresponse"></a>
<a id="schema_SelectResourceConfigResponse"></a>
<a id="tocSselectresourceconfigresponse"></a>
<a id="tocsselectresourceconfigresponse"></a>

```json
{
  "Results": {},
  "QueryInfo": {
    "SelectFields": {}
  },
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Results|object|false|none|none|
|QueryInfo|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_SelectResourceConfigRequest">SelectResourceConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaselectresourceconfigrequest"></a>
<a id="schema_SelectResourceConfigRequest"></a>
<a id="tocSselectresourceconfigrequest"></a>
<a id="tocsselectresourceconfigrequest"></a>

```json
{
  "Expression": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expression|object|true|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_StartConfigRulesEvaluationResponse">StartConfigRulesEvaluationResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartconfigrulesevaluationresponse"></a>
<a id="schema_StartConfigRulesEvaluationResponse"></a>
<a id="tocSstartconfigrulesevaluationresponse"></a>
<a id="tocsstartconfigrulesevaluationresponse"></a>

```json
{}
```

The output when you start the evaluation for the specified Config rule.

<h2 id="tocS_StartConfigRulesEvaluationRequest">StartConfigRulesEvaluationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartconfigrulesevaluationrequest"></a>
<a id="schema_StartConfigRulesEvaluationRequest"></a>
<a id="tocSstartconfigrulesevaluationrequest"></a>
<a id="tocsstartconfigrulesevaluationrequest"></a>

```json
{
  "ConfigRuleNames": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleNames|object|false|none|none|

<h2 id="tocS_StartConfigurationRecorderRequest">StartConfigurationRecorderRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartconfigurationrecorderrequest"></a>
<a id="schema_StartConfigurationRecorderRequest"></a>
<a id="tocSstartconfigurationrecorderrequest"></a>
<a id="tocsstartconfigurationrecorderrequest"></a>

```json
{
  "ConfigurationRecorderName": {}
}
```

The input for the <a>StartConfigurationRecorder</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationRecorderName|object|true|none|none|

<h2 id="tocS_NoAvailableDeliveryChannelException">NoAvailableDeliveryChannelException</h2>
<!-- backwards compatibility -->
<a id="schemanoavailabledeliverychannelexception"></a>
<a id="schema_NoAvailableDeliveryChannelException"></a>
<a id="tocSnoavailabledeliverychannelexception"></a>
<a id="tocsnoavailabledeliverychannelexception"></a>

```json
null
```

<h2 id="tocS_StartRemediationExecutionResponse">StartRemediationExecutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartremediationexecutionresponse"></a>
<a id="schema_StartRemediationExecutionResponse"></a>
<a id="tocSstartremediationexecutionresponse"></a>
<a id="tocsstartremediationexecutionresponse"></a>

```json
{
  "FailureMessage": {},
  "FailedItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailureMessage|object|false|none|none|
|FailedItems|object|false|none|none|

<h2 id="tocS_StartRemediationExecutionRequest">StartRemediationExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartremediationexecutionrequest"></a>
<a id="schema_StartRemediationExecutionRequest"></a>
<a id="tocSstartremediationexecutionrequest"></a>
<a id="tocsstartremediationexecutionrequest"></a>

```json
{
  "ConfigRuleName": {},
  "ResourceKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|true|none|none|
|ResourceKeys|object|true|none|none|

<h2 id="tocS_StartResourceEvaluationResponse">StartResourceEvaluationResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartresourceevaluationresponse"></a>
<a id="schema_StartResourceEvaluationResponse"></a>
<a id="tocSstartresourceevaluationresponse"></a>
<a id="tocsstartresourceevaluationresponse"></a>

```json
{
  "ResourceEvaluationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceEvaluationId|object|false|none|none|

<h2 id="tocS_StartResourceEvaluationRequest">StartResourceEvaluationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartresourceevaluationrequest"></a>
<a id="schema_StartResourceEvaluationRequest"></a>
<a id="tocSstartresourceevaluationrequest"></a>
<a id="tocsstartresourceevaluationrequest"></a>

```json
{
  "ResourceDetails": {
    "ResourceId": {},
    "ResourceType": {},
    "ResourceConfiguration": {},
    "ResourceConfigurationSchemaType": {}
  },
  "EvaluationContext": {
    "EvaluationContextIdentifier": {}
  },
  "EvaluationMode": {},
  "EvaluationTimeout": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceDetails|object|true|none|none|
|EvaluationContext|object|false|none|none|
|EvaluationMode|object|true|none|none|
|EvaluationTimeout|object|false|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_IdempotentParameterMismatch">IdempotentParameterMismatch</h2>
<!-- backwards compatibility -->
<a id="schemaidempotentparametermismatch"></a>
<a id="schema_IdempotentParameterMismatch"></a>
<a id="tocSidempotentparametermismatch"></a>
<a id="tocsidempotentparametermismatch"></a>

```json
null
```

<h2 id="tocS_StopConfigurationRecorderRequest">StopConfigurationRecorderRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopconfigurationrecorderrequest"></a>
<a id="schema_StopConfigurationRecorderRequest"></a>
<a id="tocSstopconfigurationrecorderrequest"></a>
<a id="tocsstopconfigurationrecorderrequest"></a>

```json
{
  "ConfigurationRecorderName": {}
}
```

The input for the <a>StopConfigurationRecorder</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationRecorderName|object|true|none|none|

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

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

<h2 id="tocS_ARN">ARN</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_ARN"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_AccountAggregationSourceAccountList">AccountAggregationSourceAccountList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountaggregationsourceaccountlist"></a>
<a id="schema_AccountAggregationSourceAccountList"></a>
<a id="tocSaccountaggregationsourceaccountlist"></a>
<a id="tocsaccountaggregationsourceaccountlist"></a>

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

<h2 id="tocS_AggregatorRegionList">AggregatorRegionList</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatorregionlist"></a>
<a id="schema_AggregatorRegionList"></a>
<a id="tocSaggregatorregionlist"></a>
<a id="tocsaggregatorregionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AccountAggregationSource">AccountAggregationSource</h2>
<!-- backwards compatibility -->
<a id="schemaaccountaggregationsource"></a>
<a id="schema_AccountAggregationSource"></a>
<a id="tocSaccountaggregationsource"></a>
<a id="tocsaccountaggregationsource"></a>

```json
{
  "AccountIds": {},
  "AllAwsRegions": {},
  "AwsRegions": {}
}
```

A collection of accounts and regions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountIds|object|true|none|none|
|AllAwsRegions|object|false|none|none|
|AwsRegions|object|false|none|none|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"string"
```

<h2 id="tocS_AccountAggregationSourceList">AccountAggregationSourceList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountaggregationsourcelist"></a>
<a id="schema_AccountAggregationSourceList"></a>
<a id="tocSaccountaggregationsourcelist"></a>
<a id="tocsaccountaggregationsourcelist"></a>

```json
[
  {
    "AccountIds": {},
    "AllAwsRegions": {},
    "AwsRegions": {}
  }
]
```

<h2 id="tocS_ConfigRuleName">ConfigRuleName</h2>
<!-- backwards compatibility -->
<a id="schemaconfigrulename"></a>
<a id="schema_ConfigRuleName"></a>
<a id="tocSconfigrulename"></a>
<a id="tocsconfigrulename"></a>

```json
"string"
```

<h2 id="tocS_Compliance">Compliance</h2>
<!-- backwards compatibility -->
<a id="schemacompliance"></a>
<a id="schema_Compliance"></a>
<a id="tocScompliance"></a>
<a id="tocscompliance"></a>

```json
{
  "ComplianceType": {},
  "ComplianceContributorCount": {
    "CappedCount": {},
    "CapExceeded": {}
  }
}
```

Indicates whether an Amazon Web Services resource or Config rule is compliant and provides the number of contributors that affect the compliance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComplianceType|object|false|none|none|
|ComplianceContributorCount|object|false|none|none|

<h2 id="tocS_AwsRegion">AwsRegion</h2>
<!-- backwards compatibility -->
<a id="schemaawsregion"></a>
<a id="schema_AwsRegion"></a>
<a id="tocSawsregion"></a>
<a id="tocsawsregion"></a>

```json
"string"
```

<h2 id="tocS_AggregateComplianceByConfigRule">AggregateComplianceByConfigRule</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatecompliancebyconfigrule"></a>
<a id="schema_AggregateComplianceByConfigRule"></a>
<a id="tocSaggregatecompliancebyconfigrule"></a>
<a id="tocsaggregatecompliancebyconfigrule"></a>

```json
{
  "ConfigRuleName": {},
  "Compliance": {
    "ComplianceType": {},
    "ComplianceContributorCount": {
      "CappedCount": {},
      "CapExceeded": {}
    }
  },
  "AccountId": {},
  "AwsRegion": {}
}
```

<p>Indicates whether an Config rule is compliant based on account ID, region, compliance, and rule name.</p> <p>A rule is compliant if all of the resources that the rule evaluated comply with it. It is noncompliant if any of these resources do not comply.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|false|none|none|
|Compliance|object|false|none|none|
|AccountId|object|false|none|none|
|AwsRegion|object|false|none|none|

<h2 id="tocS_AggregateComplianceByConfigRuleList">AggregateComplianceByConfigRuleList</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatecompliancebyconfigrulelist"></a>
<a id="schema_AggregateComplianceByConfigRuleList"></a>
<a id="tocSaggregatecompliancebyconfigrulelist"></a>
<a id="tocsaggregatecompliancebyconfigrulelist"></a>

```json
[
  {
    "ConfigRuleName": {},
    "Compliance": {
      "ComplianceType": {},
      "ComplianceContributorCount": {
        "CappedCount": {},
        "CapExceeded": {}
      }
    },
    "AccountId": {},
    "AwsRegion": {}
  }
]
```

<h2 id="tocS_ConformancePackName">ConformancePackName</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackname"></a>
<a id="schema_ConformancePackName"></a>
<a id="tocSconformancepackname"></a>
<a id="tocsconformancepackname"></a>

```json
"string"
```

<h2 id="tocS_AggregateConformancePackCompliance">AggregateConformancePackCompliance</h2>
<!-- backwards compatibility -->
<a id="schemaaggregateconformancepackcompliance"></a>
<a id="schema_AggregateConformancePackCompliance"></a>
<a id="tocSaggregateconformancepackcompliance"></a>
<a id="tocsaggregateconformancepackcompliance"></a>

```json
{
  "ComplianceType": {},
  "CompliantRuleCount": {},
  "NonCompliantRuleCount": {},
  "TotalRuleCount": {}
}
```

<p>Provides the number of compliant and noncompliant rules within a conformance pack. Also provides the compliance status of the conformance pack and the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p> <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant. The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data. If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComplianceType|object|false|none|none|
|CompliantRuleCount|object|false|none|none|
|NonCompliantRuleCount|object|false|none|none|
|TotalRuleCount|object|false|none|none|

<h2 id="tocS_AggregateComplianceByConformancePack">AggregateComplianceByConformancePack</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatecompliancebyconformancepack"></a>
<a id="schema_AggregateComplianceByConformancePack"></a>
<a id="tocSaggregatecompliancebyconformancepack"></a>
<a id="tocsaggregatecompliancebyconformancepack"></a>

```json
{
  "ConformancePackName": {},
  "Compliance": {
    "ComplianceType": {},
    "CompliantRuleCount": {},
    "NonCompliantRuleCount": {},
    "TotalRuleCount": {}
  },
  "AccountId": {},
  "AwsRegion": {}
}
```

<p>Provides aggregate compliance of the conformance pack. Indicates whether a conformance pack is compliant based on the name of the conformance pack, account ID, and region.</p> <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant. The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data. If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConformancePackName|object|false|none|none|
|Compliance|object|false|none|none|
|AccountId|object|false|none|none|
|AwsRegion|object|false|none|none|

<h2 id="tocS_AggregateComplianceByConformancePackList">AggregateComplianceByConformancePackList</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatecompliancebyconformancepacklist"></a>
<a id="schema_AggregateComplianceByConformancePackList"></a>
<a id="tocSaggregatecompliancebyconformancepacklist"></a>
<a id="tocsaggregatecompliancebyconformancepacklist"></a>

```json
[
  {
    "ConformancePackName": {},
    "Compliance": {
      "ComplianceType": {},
      "CompliantRuleCount": {},
      "NonCompliantRuleCount": {},
      "TotalRuleCount": {}
    },
    "AccountId": {},
    "AwsRegion": {}
  }
]
```

<h2 id="tocS_StringWithCharLimit256">StringWithCharLimit256</h2>
<!-- backwards compatibility -->
<a id="schemastringwithcharlimit256"></a>
<a id="schema_StringWithCharLimit256"></a>
<a id="tocSstringwithcharlimit256"></a>
<a id="tocsstringwithcharlimit256"></a>

```json
"string"
```

<h2 id="tocS_ComplianceSummary">ComplianceSummary</h2>
<!-- backwards compatibility -->
<a id="schemacompliancesummary"></a>
<a id="schema_ComplianceSummary"></a>
<a id="tocScompliancesummary"></a>
<a id="tocscompliancesummary"></a>

```json
{
  "CompliantResourceCount": {
    "CappedCount": {},
    "CapExceeded": {}
  },
  "NonCompliantResourceCount": {
    "CappedCount": {},
    "CapExceeded": {}
  },
  "ComplianceSummaryTimestamp": {}
}
```

The number of Config rules or Amazon Web Services resources that are compliant and noncompliant.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CompliantResourceCount|object|false|none|none|
|NonCompliantResourceCount|object|false|none|none|
|ComplianceSummaryTimestamp|object|false|none|none|

<h2 id="tocS_AggregateComplianceCount">AggregateComplianceCount</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatecompliancecount"></a>
<a id="schema_AggregateComplianceCount"></a>
<a id="tocSaggregatecompliancecount"></a>
<a id="tocsaggregatecompliancecount"></a>

```json
{
  "GroupName": {},
  "ComplianceSummary": {
    "CompliantResourceCount": {
      "CappedCount": {},
      "CapExceeded": {}
    },
    "NonCompliantResourceCount": {
      "CappedCount": {},
      "CapExceeded": {}
    },
    "ComplianceSummaryTimestamp": {}
  }
}
```

Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|false|none|none|
|ComplianceSummary|object|false|none|none|

<h2 id="tocS_AggregateComplianceCountList">AggregateComplianceCountList</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatecompliancecountlist"></a>
<a id="schema_AggregateComplianceCountList"></a>
<a id="tocSaggregatecompliancecountlist"></a>
<a id="tocsaggregatecompliancecountlist"></a>

```json
[
  {
    "GroupName": {},
    "ComplianceSummary": {
      "CompliantResourceCount": {
        "CappedCount": {},
        "CapExceeded": {}
      },
      "NonCompliantResourceCount": {
        "CappedCount": {},
        "CapExceeded": {}
      },
      "ComplianceSummaryTimestamp": {}
    }
  }
]
```

<h2 id="tocS_ConformancePackComplianceType">ConformancePackComplianceType</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackcompliancetype"></a>
<a id="schema_ConformancePackComplianceType"></a>
<a id="tocSconformancepackcompliancetype"></a>
<a id="tocsconformancepackcompliancetype"></a>

```json
"COMPLIANT"
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

<h2 id="tocS_AggregateConformancePackComplianceCount">AggregateConformancePackComplianceCount</h2>
<!-- backwards compatibility -->
<a id="schemaaggregateconformancepackcompliancecount"></a>
<a id="schema_AggregateConformancePackComplianceCount"></a>
<a id="tocSaggregateconformancepackcompliancecount"></a>
<a id="tocsaggregateconformancepackcompliancecount"></a>

```json
{
  "CompliantConformancePackCount": {},
  "NonCompliantConformancePackCount": {}
}
```

The number of conformance packs that are compliant and noncompliant.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CompliantConformancePackCount|object|false|none|none|
|NonCompliantConformancePackCount|object|false|none|none|

<h2 id="tocS_AggregateConformancePackComplianceFilters">AggregateConformancePackComplianceFilters</h2>
<!-- backwards compatibility -->
<a id="schemaaggregateconformancepackcompliancefilters"></a>
<a id="schema_AggregateConformancePackComplianceFilters"></a>
<a id="tocSaggregateconformancepackcompliancefilters"></a>
<a id="tocsaggregateconformancepackcompliancefilters"></a>

```json
{
  "ConformancePackName": {},
  "ComplianceType": {},
  "AccountId": {},
  "AwsRegion": {}
}
```

Filters the conformance packs based on an account ID, region, compliance type, and the name of the conformance pack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConformancePackName|object|false|none|none|
|ComplianceType|object|false|none|none|
|AccountId|object|false|none|none|
|AwsRegion|object|false|none|none|

<h2 id="tocS_AggregateConformancePackComplianceSummary">AggregateConformancePackComplianceSummary</h2>
<!-- backwards compatibility -->
<a id="schemaaggregateconformancepackcompliancesummary"></a>
<a id="schema_AggregateConformancePackComplianceSummary"></a>
<a id="tocSaggregateconformancepackcompliancesummary"></a>
<a id="tocsaggregateconformancepackcompliancesummary"></a>

```json
{
  "ComplianceSummary": {
    "CompliantConformancePackCount": {},
    "NonCompliantConformancePackCount": {}
  },
  "GroupName": {}
}
```

Provides a summary of compliance based on either account ID or region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComplianceSummary|object|false|none|none|
|GroupName|object|false|none|none|

<h2 id="tocS_AggregateConformancePackComplianceSummaryFilters">AggregateConformancePackComplianceSummaryFilters</h2>
<!-- backwards compatibility -->
<a id="schemaaggregateconformancepackcompliancesummaryfilters"></a>
<a id="schema_AggregateConformancePackComplianceSummaryFilters"></a>
<a id="tocSaggregateconformancepackcompliancesummaryfilters"></a>
<a id="tocsaggregateconformancepackcompliancesummaryfilters"></a>

```json
{
  "AccountId": {},
  "AwsRegion": {}
}
```

Filters the results based on account ID and region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|AwsRegion|object|false|none|none|

<h2 id="tocS_AggregateConformancePackComplianceSummaryGroupKey">AggregateConformancePackComplianceSummaryGroupKey</h2>
<!-- backwards compatibility -->
<a id="schemaaggregateconformancepackcompliancesummarygroupkey"></a>
<a id="schema_AggregateConformancePackComplianceSummaryGroupKey"></a>
<a id="tocSaggregateconformancepackcompliancesummarygroupkey"></a>
<a id="tocsaggregateconformancepackcompliancesummarygroupkey"></a>

```json
"ACCOUNT_ID"
```

<h2 id="tocS_AggregateConformancePackComplianceSummaryList">AggregateConformancePackComplianceSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaaggregateconformancepackcompliancesummarylist"></a>
<a id="schema_AggregateConformancePackComplianceSummaryList"></a>
<a id="tocSaggregateconformancepackcompliancesummarylist"></a>
<a id="tocsaggregateconformancepackcompliancesummarylist"></a>

```json
[
  {
    "ComplianceSummary": {
      "CompliantConformancePackCount": {},
      "NonCompliantConformancePackCount": {}
    },
    "GroupName": {}
  }
]
```

<h2 id="tocS_EvaluationResultIdentifier">EvaluationResultIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationresultidentifier"></a>
<a id="schema_EvaluationResultIdentifier"></a>
<a id="tocSevaluationresultidentifier"></a>
<a id="tocsevaluationresultidentifier"></a>

```json
{
  "EvaluationResultQualifier": {
    "ConfigRuleName": {},
    "ResourceType": {},
    "ResourceId": {},
    "EvaluationMode": {}
  },
  "OrderingTimestamp": {},
  "ResourceEvaluationId": {}
}
```

Uniquely identifies an evaluation result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EvaluationResultQualifier|object|false|none|none|
|OrderingTimestamp|object|false|none|none|
|ResourceEvaluationId|object|false|none|none|

<h2 id="tocS_ComplianceType">ComplianceType</h2>
<!-- backwards compatibility -->
<a id="schemacompliancetype"></a>
<a id="schema_ComplianceType"></a>
<a id="tocScompliancetype"></a>
<a id="tocscompliancetype"></a>

```json
"COMPLIANT"
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

<h2 id="tocS_AggregateEvaluationResult">AggregateEvaluationResult</h2>
<!-- backwards compatibility -->
<a id="schemaaggregateevaluationresult"></a>
<a id="schema_AggregateEvaluationResult"></a>
<a id="tocSaggregateevaluationresult"></a>
<a id="tocsaggregateevaluationresult"></a>

```json
{
  "EvaluationResultIdentifier": {
    "EvaluationResultQualifier": {
      "ConfigRuleName": {},
      "ResourceType": {},
      "ResourceId": {},
      "EvaluationMode": {}
    },
    "OrderingTimestamp": {},
    "ResourceEvaluationId": {}
  },
  "ComplianceType": {},
  "ResultRecordedTime": {},
  "ConfigRuleInvokedTime": {},
  "Annotation": {},
  "AccountId": {},
  "AwsRegion": {}
}
```

The details of an Config evaluation for an account ID and region in an aggregator. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EvaluationResultIdentifier|object|false|none|none|
|ComplianceType|object|false|none|none|
|ResultRecordedTime|object|false|none|none|
|ConfigRuleInvokedTime|object|false|none|none|
|Annotation|object|false|none|none|
|AccountId|object|false|none|none|
|AwsRegion|object|false|none|none|

<h2 id="tocS_AggregateEvaluationResultList">AggregateEvaluationResultList</h2>
<!-- backwards compatibility -->
<a id="schemaaggregateevaluationresultlist"></a>
<a id="schema_AggregateEvaluationResultList"></a>
<a id="tocSaggregateevaluationresultlist"></a>
<a id="tocsaggregateevaluationresultlist"></a>

```json
[
  {
    "EvaluationResultIdentifier": {
      "EvaluationResultQualifier": {
        "ConfigRuleName": {},
        "ResourceType": {},
        "ResourceId": {},
        "EvaluationMode": {}
      },
      "OrderingTimestamp": {},
      "ResourceEvaluationId": {}
    },
    "ComplianceType": {},
    "ResultRecordedTime": {},
    "ConfigRuleInvokedTime": {},
    "Annotation": {},
    "AccountId": {},
    "AwsRegion": {}
  }
]
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

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"AWS::EC2::CustomerGateway"
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

<h2 id="tocS_AggregateResourceIdentifier">AggregateResourceIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaaggregateresourceidentifier"></a>
<a id="schema_AggregateResourceIdentifier"></a>
<a id="tocSaggregateresourceidentifier"></a>
<a id="tocsaggregateresourceidentifier"></a>

```json
{
  "SourceAccountId": {},
  "SourceRegion": {},
  "ResourceId": {},
  "ResourceType": {},
  "ResourceName": {}
}
```

The details that identify a resource that is collected by Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceAccountId|object|true|none|none|
|SourceRegion|object|true|none|none|
|ResourceId|object|true|none|none|
|ResourceType|object|true|none|none|
|ResourceName|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_AggregatedSourceType">AggregatedSourceType</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatedsourcetype"></a>
<a id="schema_AggregatedSourceType"></a>
<a id="tocSaggregatedsourcetype"></a>
<a id="tocsaggregatedsourcetype"></a>

```json
"ACCOUNT"
```

<h2 id="tocS_AggregatedSourceStatusType">AggregatedSourceStatusType</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatedsourcestatustype"></a>
<a id="schema_AggregatedSourceStatusType"></a>
<a id="tocSaggregatedsourcestatustype"></a>
<a id="tocsaggregatedsourcestatustype"></a>

```json
"FAILED"
```

<h2 id="tocS_AggregatedSourceStatus">AggregatedSourceStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatedsourcestatus"></a>
<a id="schema_AggregatedSourceStatus"></a>
<a id="tocSaggregatedsourcestatus"></a>
<a id="tocsaggregatedsourcestatus"></a>

```json
{
  "SourceId": {},
  "SourceType": {},
  "AwsRegion": {},
  "LastUpdateStatus": {},
  "LastUpdateTime": {},
  "LastErrorCode": {},
  "LastErrorMessage": {}
}
```

The current sync status between the source and the aggregator account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceId|object|false|none|none|
|SourceType|object|false|none|none|
|AwsRegion|object|false|none|none|
|LastUpdateStatus|object|false|none|none|
|LastUpdateTime|object|false|none|none|
|LastErrorCode|object|false|none|none|
|LastErrorMessage|object|false|none|none|

<h2 id="tocS_AggregatedSourceStatusList">AggregatedSourceStatusList</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatedsourcestatuslist"></a>
<a id="schema_AggregatedSourceStatusList"></a>
<a id="tocSaggregatedsourcestatuslist"></a>
<a id="tocsaggregatedsourcestatuslist"></a>

```json
[
  {
    "SourceId": {},
    "SourceType": {},
    "AwsRegion": {},
    "LastUpdateStatus": {},
    "LastUpdateTime": {},
    "LastErrorCode": {},
    "LastErrorMessage": {}
  }
]
```

<h2 id="tocS_AggregatedSourceStatusTypeList">AggregatedSourceStatusTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatedsourcestatustypelist"></a>
<a id="schema_AggregatedSourceStatusTypeList"></a>
<a id="tocSaggregatedsourcestatustypelist"></a>
<a id="tocsaggregatedsourcestatustypelist"></a>

```json
[
  "FAILED"
]
```

<h2 id="tocS_AggregationAuthorization">AggregationAuthorization</h2>
<!-- backwards compatibility -->
<a id="schemaaggregationauthorization"></a>
<a id="schema_AggregationAuthorization"></a>
<a id="tocSaggregationauthorization"></a>
<a id="tocsaggregationauthorization"></a>

```json
{
  "AggregationAuthorizationArn": {},
  "AuthorizedAccountId": {},
  "AuthorizedAwsRegion": {},
  "CreationTime": {}
}
```

An object that represents the authorizations granted to aggregator accounts and regions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AggregationAuthorizationArn|object|false|none|none|
|AuthorizedAccountId|object|false|none|none|
|AuthorizedAwsRegion|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_AggregationAuthorizationList">AggregationAuthorizationList</h2>
<!-- backwards compatibility -->
<a id="schemaaggregationauthorizationlist"></a>
<a id="schema_AggregationAuthorizationList"></a>
<a id="tocSaggregationauthorizationlist"></a>
<a id="tocsaggregationauthorizationlist"></a>

```json
[
  {
    "AggregationAuthorizationArn": {},
    "AuthorizedAccountId": {},
    "AuthorizedAwsRegion": {},
    "CreationTime": {}
  }
]
```

<h2 id="tocS_AllSupported">AllSupported</h2>
<!-- backwards compatibility -->
<a id="schemaallsupported"></a>
<a id="schema_AllSupported"></a>
<a id="tocSallsupported"></a>
<a id="tocsallsupported"></a>

```json
true
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

<h2 id="tocS_Annotation">Annotation</h2>
<!-- backwards compatibility -->
<a id="schemaannotation"></a>
<a id="schema_Annotation"></a>
<a id="tocSannotation"></a>
<a id="tocsannotation"></a>

```json
"string"
```

<h2 id="tocS_AutoRemediationAttemptSeconds">AutoRemediationAttemptSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaautoremediationattemptseconds"></a>
<a id="schema_AutoRemediationAttemptSeconds"></a>
<a id="tocSautoremediationattemptseconds"></a>
<a id="tocsautoremediationattemptseconds"></a>

```json
1
```

<h2 id="tocS_AutoRemediationAttempts">AutoRemediationAttempts</h2>
<!-- backwards compatibility -->
<a id="schemaautoremediationattempts"></a>
<a id="schema_AutoRemediationAttempts"></a>
<a id="tocSautoremediationattempts"></a>
<a id="tocsautoremediationattempts"></a>

```json
1
```

<h2 id="tocS_AvailabilityZone">AvailabilityZone</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzone"></a>
<a id="schema_AvailabilityZone"></a>
<a id="tocSavailabilityzone"></a>
<a id="tocsavailabilityzone"></a>

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

<h2 id="tocS_ConfigurationItemCaptureTime">ConfigurationItemCaptureTime</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationitemcapturetime"></a>
<a id="schema_ConfigurationItemCaptureTime"></a>
<a id="tocSconfigurationitemcapturetime"></a>
<a id="tocsconfigurationitemcapturetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ConfigurationItemStatus">ConfigurationItemStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationitemstatus"></a>
<a id="schema_ConfigurationItemStatus"></a>
<a id="tocSconfigurationitemstatus"></a>
<a id="tocsconfigurationitemstatus"></a>

```json
"OK"
```

<h2 id="tocS_ConfigurationStateId">ConfigurationStateId</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationstateid"></a>
<a id="schema_ConfigurationStateId"></a>
<a id="tocSconfigurationstateid"></a>
<a id="tocsconfigurationstateid"></a>

```json
"string"
```

<h2 id="tocS_ResourceCreationTime">ResourceCreationTime</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecreationtime"></a>
<a id="schema_ResourceCreationTime"></a>
<a id="tocSresourcecreationtime"></a>
<a id="tocsresourcecreationtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Configuration">Configuration</h2>
<!-- backwards compatibility -->
<a id="schemaconfiguration"></a>
<a id="schema_Configuration"></a>
<a id="tocSconfiguration"></a>
<a id="tocsconfiguration"></a>

```json
"string"
```

<h2 id="tocS_SupplementaryConfiguration">SupplementaryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasupplementaryconfiguration"></a>
<a id="schema_SupplementaryConfiguration"></a>
<a id="tocSsupplementaryconfiguration"></a>
<a id="tocssupplementaryconfiguration"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SupplementaryConfigurationValue](#schemasupplementaryconfigurationvalue)|false|none|none|

<h2 id="tocS_BaseConfigurationItem">BaseConfigurationItem</h2>
<!-- backwards compatibility -->
<a id="schemabaseconfigurationitem"></a>
<a id="schema_BaseConfigurationItem"></a>
<a id="tocSbaseconfigurationitem"></a>
<a id="tocsbaseconfigurationitem"></a>

```json
{
  "version": {},
  "accountId": {},
  "configurationItemCaptureTime": {},
  "configurationItemStatus": {},
  "configurationStateId": {},
  "arn": {},
  "resourceType": {},
  "resourceId": {},
  "resourceName": {},
  "awsRegion": {},
  "availabilityZone": {},
  "resourceCreationTime": {},
  "configuration": {},
  "supplementaryConfiguration": {
    "property1": "string",
    "property2": "string"
  }
}
```

The detailed configuration of a specified resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|object|false|none|none|
|accountId|object|false|none|none|
|configurationItemCaptureTime|object|false|none|none|
|configurationItemStatus|object|false|none|none|
|configurationStateId|object|false|none|none|
|arn|object|false|none|none|
|resourceType|object|false|none|none|
|resourceId|object|false|none|none|
|resourceName|object|false|none|none|
|awsRegion|object|false|none|none|
|availabilityZone|object|false|none|none|
|resourceCreationTime|object|false|none|none|
|configuration|object|false|none|none|
|supplementaryConfiguration|object|false|none|none|

<h2 id="tocS_BaseConfigurationItems">BaseConfigurationItems</h2>
<!-- backwards compatibility -->
<a id="schemabaseconfigurationitems"></a>
<a id="schema_BaseConfigurationItems"></a>
<a id="tocSbaseconfigurationitems"></a>
<a id="tocsbaseconfigurationitems"></a>

```json
[
  {
    "version": {},
    "accountId": {},
    "configurationItemCaptureTime": {},
    "configurationItemStatus": {},
    "configurationStateId": {},
    "arn": {},
    "resourceType": {},
    "resourceId": {},
    "resourceName": {},
    "awsRegion": {},
    "availabilityZone": {},
    "resourceCreationTime": {},
    "configuration": {},
    "supplementaryConfiguration": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_BaseResourceId">BaseResourceId</h2>
<!-- backwards compatibility -->
<a id="schemabaseresourceid"></a>
<a id="schema_BaseResourceId"></a>
<a id="tocSbaseresourceid"></a>
<a id="tocsbaseresourceid"></a>

```json
"string"
```

<h2 id="tocS_ConfigurationAggregatorName">ConfigurationAggregatorName</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationaggregatorname"></a>
<a id="schema_ConfigurationAggregatorName"></a>
<a id="tocSconfigurationaggregatorname"></a>
<a id="tocsconfigurationaggregatorname"></a>

```json
"string"
```

<h2 id="tocS_ResourceIdentifiersList">ResourceIdentifiersList</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidentifierslist"></a>
<a id="schema_ResourceIdentifiersList"></a>
<a id="tocSresourceidentifierslist"></a>
<a id="tocsresourceidentifierslist"></a>

```json
[
  {
    "SourceAccountId": {},
    "SourceRegion": {},
    "ResourceId": {},
    "ResourceType": {},
    "ResourceName": {}
  }
]
```

<h2 id="tocS_UnprocessedResourceIdentifierList">UnprocessedResourceIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedresourceidentifierlist"></a>
<a id="schema_UnprocessedResourceIdentifierList"></a>
<a id="tocSunprocessedresourceidentifierlist"></a>
<a id="tocsunprocessedresourceidentifierlist"></a>

```json
[
  {
    "SourceAccountId": {},
    "SourceRegion": {},
    "ResourceId": {},
    "ResourceType": {},
    "ResourceName": {}
  }
]
```

<h2 id="tocS_ResourceKeys">ResourceKeys</h2>
<!-- backwards compatibility -->
<a id="schemaresourcekeys"></a>
<a id="schema_ResourceKeys"></a>
<a id="tocSresourcekeys"></a>
<a id="tocsresourcekeys"></a>

```json
[
  {
    "resourceType": {},
    "resourceId": {}
  }
]
```

<h2 id="tocS_ChannelName">ChannelName</h2>
<!-- backwards compatibility -->
<a id="schemachannelname"></a>
<a id="schema_ChannelName"></a>
<a id="tocSchannelname"></a>
<a id="tocschannelname"></a>

```json
"string"
```

<h2 id="tocS_ChronologicalOrder">ChronologicalOrder</h2>
<!-- backwards compatibility -->
<a id="schemachronologicalorder"></a>
<a id="schema_ChronologicalOrder"></a>
<a id="tocSchronologicalorder"></a>
<a id="tocschronologicalorder"></a>

```json
"Reverse"
```

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"stringstringstringstringstringstringstringstringstringstringstri"
```

<h2 id="tocS_ComplianceContributorCount">ComplianceContributorCount</h2>
<!-- backwards compatibility -->
<a id="schemacompliancecontributorcount"></a>
<a id="schema_ComplianceContributorCount"></a>
<a id="tocScompliancecontributorcount"></a>
<a id="tocscompliancecontributorcount"></a>

```json
{
  "CappedCount": {},
  "CapExceeded": {}
}
```

The number of Amazon Web Services resources or Config rules responsible for the current compliance of the item, up to a maximum number.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CappedCount|object|false|none|none|
|CapExceeded|object|false|none|none|

<h2 id="tocS_StringWithCharLimit64">StringWithCharLimit64</h2>
<!-- backwards compatibility -->
<a id="schemastringwithcharlimit64"></a>
<a id="schema_StringWithCharLimit64"></a>
<a id="tocSstringwithcharlimit64"></a>
<a id="tocsstringwithcharlimit64"></a>

```json
"string"
```

<h2 id="tocS_ComplianceByConfigRule">ComplianceByConfigRule</h2>
<!-- backwards compatibility -->
<a id="schemacompliancebyconfigrule"></a>
<a id="schema_ComplianceByConfigRule"></a>
<a id="tocScompliancebyconfigrule"></a>
<a id="tocscompliancebyconfigrule"></a>

```json
{
  "ConfigRuleName": {},
  "Compliance": {
    "ComplianceType": {},
    "ComplianceContributorCount": {
      "CappedCount": {},
      "CapExceeded": {}
    }
  }
}
```

Indicates whether an Config rule is compliant. A rule is compliant if all of the resources that the rule evaluated comply with it. A rule is noncompliant if any of these resources do not comply.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|false|none|none|
|Compliance|object|false|none|none|

<h2 id="tocS_ComplianceByConfigRules">ComplianceByConfigRules</h2>
<!-- backwards compatibility -->
<a id="schemacompliancebyconfigrules"></a>
<a id="schema_ComplianceByConfigRules"></a>
<a id="tocScompliancebyconfigrules"></a>
<a id="tocscompliancebyconfigrules"></a>

```json
[
  {
    "ConfigRuleName": {},
    "Compliance": {
      "ComplianceType": {},
      "ComplianceContributorCount": {
        "CappedCount": {},
        "CapExceeded": {}
      }
    }
  }
]
```

<h2 id="tocS_ComplianceByResource">ComplianceByResource</h2>
<!-- backwards compatibility -->
<a id="schemacompliancebyresource"></a>
<a id="schema_ComplianceByResource"></a>
<a id="tocScompliancebyresource"></a>
<a id="tocscompliancebyresource"></a>

```json
{
  "ResourceType": {},
  "ResourceId": {},
  "Compliance": {
    "ComplianceType": {},
    "ComplianceContributorCount": {
      "CappedCount": {},
      "CapExceeded": {}
    }
  }
}
```

Indicates whether an Amazon Web Services resource that is evaluated according to one or more Config rules is compliant. A resource is compliant if it complies with all of the rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|false|none|none|
|ResourceId|object|false|none|none|
|Compliance|object|false|none|none|

<h2 id="tocS_ComplianceByResources">ComplianceByResources</h2>
<!-- backwards compatibility -->
<a id="schemacompliancebyresources"></a>
<a id="schema_ComplianceByResources"></a>
<a id="tocScompliancebyresources"></a>
<a id="tocscompliancebyresources"></a>

```json
[
  {
    "ResourceType": {},
    "ResourceId": {},
    "Compliance": {
      "ComplianceType": {},
      "ComplianceContributorCount": {
        "CappedCount": {},
        "CapExceeded": {}
      }
    }
  }
]
```

<h2 id="tocS_ComplianceResourceTypes">ComplianceResourceTypes</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceresourcetypes"></a>
<a id="schema_ComplianceResourceTypes"></a>
<a id="tocScomplianceresourcetypes"></a>
<a id="tocscomplianceresourcetypes"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ComplianceScore">ComplianceScore</h2>
<!-- backwards compatibility -->
<a id="schemacompliancescore"></a>
<a id="schema_ComplianceScore"></a>
<a id="tocScompliancescore"></a>
<a id="tocscompliancescore"></a>

```json
"string"
```

<h2 id="tocS_ComplianceSummaryByResourceType">ComplianceSummaryByResourceType</h2>
<!-- backwards compatibility -->
<a id="schemacompliancesummarybyresourcetype"></a>
<a id="schema_ComplianceSummaryByResourceType"></a>
<a id="tocScompliancesummarybyresourcetype"></a>
<a id="tocscompliancesummarybyresourcetype"></a>

```json
{
  "ResourceType": {},
  "ComplianceSummary": {
    "CompliantResourceCount": {
      "CappedCount": {},
      "CapExceeded": {}
    },
    "NonCompliantResourceCount": {
      "CappedCount": {},
      "CapExceeded": {}
    },
    "ComplianceSummaryTimestamp": {}
  }
}
```

The number of Amazon Web Services resources of a specific type that are compliant or noncompliant, up to a maximum of 100 for each.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|false|none|none|
|ComplianceSummary|object|false|none|none|

<h2 id="tocS_ComplianceSummariesByResourceType">ComplianceSummariesByResourceType</h2>
<!-- backwards compatibility -->
<a id="schemacompliancesummariesbyresourcetype"></a>
<a id="schema_ComplianceSummariesByResourceType"></a>
<a id="tocScompliancesummariesbyresourcetype"></a>
<a id="tocscompliancesummariesbyresourcetype"></a>

```json
[
  {
    "ResourceType": {},
    "ComplianceSummary": {
      "CompliantResourceCount": {
        "CappedCount": {},
        "CapExceeded": {}
      },
      "NonCompliantResourceCount": {
        "CappedCount": {},
        "CapExceeded": {}
      },
      "ComplianceSummaryTimestamp": {}
    }
  }
]
```

<h2 id="tocS_ComplianceTypes">ComplianceTypes</h2>
<!-- backwards compatibility -->
<a id="schemacompliancetypes"></a>
<a id="schema_ComplianceTypes"></a>
<a id="tocScompliancetypes"></a>
<a id="tocscompliancetypes"></a>

```json
[
  "COMPLIANT"
]
```

<h2 id="tocS_DeliveryStatus">DeliveryStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeliverystatus"></a>
<a id="schema_DeliveryStatus"></a>
<a id="tocSdeliverystatus"></a>
<a id="tocsdeliverystatus"></a>

```json
"Success"
```

<h2 id="tocS_ConfigExportDeliveryInfo">ConfigExportDeliveryInfo</h2>
<!-- backwards compatibility -->
<a id="schemaconfigexportdeliveryinfo"></a>
<a id="schema_ConfigExportDeliveryInfo"></a>
<a id="tocSconfigexportdeliveryinfo"></a>
<a id="tocsconfigexportdeliveryinfo"></a>

```json
{
  "lastStatus": {},
  "lastErrorCode": {},
  "lastErrorMessage": {},
  "lastAttemptTime": {},
  "lastSuccessfulTime": {},
  "nextDeliveryTime": {}
}
```

Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastStatus|object|false|none|none|
|lastErrorCode|object|false|none|none|
|lastErrorMessage|object|false|none|none|
|lastAttemptTime|object|false|none|none|
|lastSuccessfulTime|object|false|none|none|
|nextDeliveryTime|object|false|none|none|

<h2 id="tocS_EmptiableStringWithCharLimit256">EmptiableStringWithCharLimit256</h2>
<!-- backwards compatibility -->
<a id="schemaemptiablestringwithcharlimit256"></a>
<a id="schema_EmptiableStringWithCharLimit256"></a>
<a id="tocSemptiablestringwithcharlimit256"></a>
<a id="tocsemptiablestringwithcharlimit256"></a>

```json
"string"
```

<h2 id="tocS_Scope">Scope</h2>
<!-- backwards compatibility -->
<a id="schemascope"></a>
<a id="schema_Scope"></a>
<a id="tocSscope"></a>
<a id="tocsscope"></a>

```json
{
  "ComplianceResourceTypes": {},
  "TagKey": {},
  "TagValue": {},
  "ComplianceResourceId": {}
}
```

Defines which resources trigger an evaluation for an Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComplianceResourceTypes|object|false|none|none|
|TagKey|object|false|none|none|
|TagValue|object|false|none|none|
|ComplianceResourceId|object|false|none|none|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "Owner": {},
  "SourceIdentifier": {},
  "SourceDetails": {},
  "CustomPolicyDetails": {
    "PolicyRuntime": {},
    "PolicyText": {},
    "EnableDebugLogDelivery": {}
  }
}
```

Provides the CustomPolicyDetails, the rule owner (<code>Amazon Web Services</code> for managed rules, <code>CUSTOM_POLICY</code> for Custom Policy rules, and <code>CUSTOM_LAMBDA</code> for Custom Lambda rules), the rule identifier, and the events that cause the evaluation of your Amazon Web Services resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Owner|object|true|none|none|
|SourceIdentifier|object|false|none|none|
|SourceDetails|object|false|none|none|
|CustomPolicyDetails|object|false|none|none|

<h2 id="tocS_StringWithCharLimit1024">StringWithCharLimit1024</h2>
<!-- backwards compatibility -->
<a id="schemastringwithcharlimit1024"></a>
<a id="schema_StringWithCharLimit1024"></a>
<a id="tocSstringwithcharlimit1024"></a>
<a id="tocsstringwithcharlimit1024"></a>

```json
"string"
```

<h2 id="tocS_MaximumExecutionFrequency">MaximumExecutionFrequency</h2>
<!-- backwards compatibility -->
<a id="schemamaximumexecutionfrequency"></a>
<a id="schema_MaximumExecutionFrequency"></a>
<a id="tocSmaximumexecutionfrequency"></a>
<a id="tocsmaximumexecutionfrequency"></a>

```json
"One_Hour"
```

<h2 id="tocS_ConfigRuleState">ConfigRuleState</h2>
<!-- backwards compatibility -->
<a id="schemaconfigrulestate"></a>
<a id="schema_ConfigRuleState"></a>
<a id="tocSconfigrulestate"></a>
<a id="tocsconfigrulestate"></a>

```json
"ACTIVE"
```

<h2 id="tocS_EvaluationModes">EvaluationModes</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationmodes"></a>
<a id="schema_EvaluationModes"></a>
<a id="tocSevaluationmodes"></a>
<a id="tocsevaluationmodes"></a>

```json
[
  {
    "Mode": {}
  }
]
```

<h2 id="tocS_ConfigRule">ConfigRule</h2>
<!-- backwards compatibility -->
<a id="schemaconfigrule"></a>
<a id="schema_ConfigRule"></a>
<a id="tocSconfigrule"></a>
<a id="tocsconfigrule"></a>

```json
{
  "ConfigRuleName": {},
  "ConfigRuleArn": {},
  "ConfigRuleId": {},
  "Description": {},
  "Scope": {
    "ComplianceResourceTypes": {},
    "TagKey": {},
    "TagValue": {},
    "ComplianceResourceId": {}
  },
  "Source": {
    "Owner": {},
    "SourceIdentifier": {},
    "SourceDetails": {},
    "CustomPolicyDetails": {
      "PolicyRuntime": {},
      "PolicyText": {},
      "EnableDebugLogDelivery": {}
    }
  },
  "InputParameters": {},
  "MaximumExecutionFrequency": {},
  "ConfigRuleState": {},
  "CreatedBy": {},
  "EvaluationModes": {}
}
```

<p>Config rules evaluate the configuration settings of your Amazon Web Services resources. A rule can run when Config detects a configuration change to an Amazon Web Services resource or at a periodic frequency that you choose (for example, every 24 hours). There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>For more information about developing and using Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating Resource with Config Rules</a> in the <i>Config Developer Guide</i>.</p> <note> <p>You can use the Amazon Web Services CLI and Amazon Web Services SDKs if you want to create a rule that triggers evaluations for your resources when Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|false|none|none|
|ConfigRuleArn|object|false|none|none|
|ConfigRuleId|object|false|none|none|
|Description|object|false|none|none|
|Scope|object|false|none|none|
|Source|object|true|none|none|
|InputParameters|object|false|none|none|
|MaximumExecutionFrequency|object|false|none|none|
|ConfigRuleState|object|false|none|none|
|CreatedBy|object|false|none|none|
|EvaluationModes|object|false|none|none|

<h2 id="tocS_ConfigRuleComplianceFilters">ConfigRuleComplianceFilters</h2>
<!-- backwards compatibility -->
<a id="schemaconfigrulecompliancefilters"></a>
<a id="schema_ConfigRuleComplianceFilters"></a>
<a id="tocSconfigrulecompliancefilters"></a>
<a id="tocsconfigrulecompliancefilters"></a>

```json
{
  "ConfigRuleName": {},
  "ComplianceType": {},
  "AccountId": {},
  "AwsRegion": {}
}
```

Filters the compliance results based on account ID, region, compliance type, and rule name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|false|none|none|
|ComplianceType|object|false|none|none|
|AccountId|object|false|none|none|
|AwsRegion|object|false|none|none|

<h2 id="tocS_ConfigRuleComplianceSummaryFilters">ConfigRuleComplianceSummaryFilters</h2>
<!-- backwards compatibility -->
<a id="schemaconfigrulecompliancesummaryfilters"></a>
<a id="schema_ConfigRuleComplianceSummaryFilters"></a>
<a id="tocSconfigrulecompliancesummaryfilters"></a>
<a id="tocsconfigrulecompliancesummaryfilters"></a>

```json
{
  "AccountId": {},
  "AwsRegion": {}
}
```

Filters the results based on the account IDs and regions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|AwsRegion|object|false|none|none|

<h2 id="tocS_ConfigRuleComplianceSummaryGroupKey">ConfigRuleComplianceSummaryGroupKey</h2>
<!-- backwards compatibility -->
<a id="schemaconfigrulecompliancesummarygroupkey"></a>
<a id="schema_ConfigRuleComplianceSummaryGroupKey"></a>
<a id="tocSconfigrulecompliancesummarygroupkey"></a>
<a id="tocsconfigrulecompliancesummarygroupkey"></a>

```json
"ACCOUNT_ID"
```

<h2 id="tocS_ConfigRuleEvaluationStatus">ConfigRuleEvaluationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconfigruleevaluationstatus"></a>
<a id="schema_ConfigRuleEvaluationStatus"></a>
<a id="tocSconfigruleevaluationstatus"></a>
<a id="tocsconfigruleevaluationstatus"></a>

```json
{
  "ConfigRuleName": {},
  "ConfigRuleArn": {},
  "ConfigRuleId": {},
  "LastSuccessfulInvocationTime": {},
  "LastFailedInvocationTime": {},
  "LastSuccessfulEvaluationTime": {},
  "LastFailedEvaluationTime": {},
  "FirstActivatedTime": {},
  "LastDeactivatedTime": {},
  "LastErrorCode": {},
  "LastErrorMessage": {},
  "FirstEvaluationStarted": {},
  "LastDebugLogDeliveryStatus": {},
  "LastDebugLogDeliveryStatusReason": {},
  "LastDebugLogDeliveryTime": {}
}
```

<p>Status information for your Config Managed rules and Config Custom Policy rules. The status includes information such as the last time the rule ran, the last time it failed, and the related error for the last failure.</p> <p>This action does not return status information about Config Custom Lambda rules.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|false|none|none|
|ConfigRuleArn|object|false|none|none|
|ConfigRuleId|object|false|none|none|
|LastSuccessfulInvocationTime|object|false|none|none|
|LastFailedInvocationTime|object|false|none|none|
|LastSuccessfulEvaluationTime|object|false|none|none|
|LastFailedEvaluationTime|object|false|none|none|
|FirstActivatedTime|object|false|none|none|
|LastDeactivatedTime|object|false|none|none|
|LastErrorCode|object|false|none|none|
|LastErrorMessage|object|false|none|none|
|FirstEvaluationStarted|object|false|none|none|
|LastDebugLogDeliveryStatus|object|false|none|none|
|LastDebugLogDeliveryStatusReason|object|false|none|none|
|LastDebugLogDeliveryTime|object|false|none|none|

<h2 id="tocS_ConfigRuleEvaluationStatusList">ConfigRuleEvaluationStatusList</h2>
<!-- backwards compatibility -->
<a id="schemaconfigruleevaluationstatuslist"></a>
<a id="schema_ConfigRuleEvaluationStatusList"></a>
<a id="tocSconfigruleevaluationstatuslist"></a>
<a id="tocsconfigruleevaluationstatuslist"></a>

```json
[
  {
    "ConfigRuleName": {},
    "ConfigRuleArn": {},
    "ConfigRuleId": {},
    "LastSuccessfulInvocationTime": {},
    "LastFailedInvocationTime": {},
    "LastSuccessfulEvaluationTime": {},
    "LastFailedEvaluationTime": {},
    "FirstActivatedTime": {},
    "LastDeactivatedTime": {},
    "LastErrorCode": {},
    "LastErrorMessage": {},
    "FirstEvaluationStarted": {},
    "LastDebugLogDeliveryStatus": {},
    "LastDebugLogDeliveryStatusReason": {},
    "LastDebugLogDeliveryTime": {}
  }
]
```

<h2 id="tocS_ConfigRuleNames">ConfigRuleNames</h2>
<!-- backwards compatibility -->
<a id="schemaconfigrulenames"></a>
<a id="schema_ConfigRuleNames"></a>
<a id="tocSconfigrulenames"></a>
<a id="tocsconfigrulenames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ConfigRules">ConfigRules</h2>
<!-- backwards compatibility -->
<a id="schemaconfigrules"></a>
<a id="schema_ConfigRules"></a>
<a id="tocSconfigrules"></a>
<a id="tocsconfigrules"></a>

```json
[
  {
    "ConfigRuleName": {},
    "ConfigRuleArn": {},
    "ConfigRuleId": {},
    "Description": {},
    "Scope": {
      "ComplianceResourceTypes": {},
      "TagKey": {},
      "TagValue": {},
      "ComplianceResourceId": {}
    },
    "Source": {
      "Owner": {},
      "SourceIdentifier": {},
      "SourceDetails": {},
      "CustomPolicyDetails": {
        "PolicyRuntime": {},
        "PolicyText": {},
        "EnableDebugLogDelivery": {}
      }
    },
    "InputParameters": {},
    "MaximumExecutionFrequency": {},
    "ConfigRuleState": {},
    "CreatedBy": {},
    "EvaluationModes": {}
  }
]
```

<h2 id="tocS_ConfigSnapshotDeliveryProperties">ConfigSnapshotDeliveryProperties</h2>
<!-- backwards compatibility -->
<a id="schemaconfigsnapshotdeliveryproperties"></a>
<a id="schema_ConfigSnapshotDeliveryProperties"></a>
<a id="tocSconfigsnapshotdeliveryproperties"></a>
<a id="tocsconfigsnapshotdeliveryproperties"></a>

```json
{
  "deliveryFrequency": {}
}
```

<p>Provides options for how often Config delivers configuration snapshots to the Amazon S3 bucket in your delivery channel.</p> <p>The frequency for a rule that triggers evaluations for your resources when Config delivers the configuration snapshot is set by one of two values, depending on which is less frequent:</p> <ul> <li> <p>The value for the <code>deliveryFrequency</code> parameter within the delivery channel configuration, which sets how often Config delivers configuration snapshots. This value also sets how often Config invokes evaluations for Config rules.</p> </li> <li> <p>The value for the <code>MaximumExecutionFrequency</code> parameter, which sets the maximum frequency with which Config invokes evaluations for the rule. For more information, see <a>ConfigRule</a>.</p> </li> </ul> <p>If the <code>deliveryFrequency</code> value is less frequent than the <code>MaximumExecutionFrequency</code> value for a rule, Config invokes the rule only as often as the <code>deliveryFrequency</code> value.</p> <ol> <li> <p>For example, you want your rule to run evaluations when Config delivers the configuration snapshot.</p> </li> <li> <p>You specify the <code>MaximumExecutionFrequency</code> value for <code>Six_Hours</code>. </p> </li> <li> <p>You then specify the delivery channel <code>deliveryFrequency</code> value for <code>TwentyFour_Hours</code>.</p> </li> <li> <p>Because the value for <code>deliveryFrequency</code> is less frequent than <code>MaximumExecutionFrequency</code>, Config invokes evaluations for the rule every 24 hours. </p> </li> </ol> <p>You should set the <code>MaximumExecutionFrequency</code> value to be at least as frequent as the <code>deliveryFrequency</code> value. You can view the <code>deliveryFrequency</code> value by using the <code>DescribeDeliveryChannnels</code> action.</p> <p>To update the <code>deliveryFrequency</code> with which Config delivers your configuration snapshots, use the <code>PutDeliveryChannel</code> action.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryFrequency|object|false|none|none|

<h2 id="tocS_ConfigStreamDeliveryInfo">ConfigStreamDeliveryInfo</h2>
<!-- backwards compatibility -->
<a id="schemaconfigstreamdeliveryinfo"></a>
<a id="schema_ConfigStreamDeliveryInfo"></a>
<a id="tocSconfigstreamdeliveryinfo"></a>
<a id="tocsconfigstreamdeliveryinfo"></a>

```json
{
  "lastStatus": {},
  "lastErrorCode": {},
  "lastErrorMessage": {},
  "lastStatusChangeTime": {}
}
```

A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastStatus|object|false|none|none|
|lastErrorCode|object|false|none|none|
|lastErrorMessage|object|false|none|none|
|lastStatusChangeTime|object|false|none|none|

<h2 id="tocS_ConfigurationAggregatorArn">ConfigurationAggregatorArn</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationaggregatorarn"></a>
<a id="schema_ConfigurationAggregatorArn"></a>
<a id="tocSconfigurationaggregatorarn"></a>
<a id="tocsconfigurationaggregatorarn"></a>

```json
"string"
```

<h2 id="tocS_OrganizationAggregationSource">OrganizationAggregationSource</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationaggregationsource"></a>
<a id="schema_OrganizationAggregationSource"></a>
<a id="tocSorganizationaggregationsource"></a>
<a id="tocsorganizationaggregationsource"></a>

```json
{
  "RoleArn": {},
  "AwsRegions": {},
  "AllAwsRegions": {}
}
```

This object contains regions to set up the aggregator and an IAM role to retrieve organization details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|true|none|none|
|AwsRegions|object|false|none|none|
|AllAwsRegions|object|false|none|none|

<h2 id="tocS_ConfigurationAggregator">ConfigurationAggregator</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationaggregator"></a>
<a id="schema_ConfigurationAggregator"></a>
<a id="tocSconfigurationaggregator"></a>
<a id="tocsconfigurationaggregator"></a>

```json
{
  "ConfigurationAggregatorName": {},
  "ConfigurationAggregatorArn": {},
  "AccountAggregationSources": {},
  "OrganizationAggregationSource": {
    "RoleArn": {},
    "AwsRegions": {},
    "AllAwsRegions": {}
  },
  "CreationTime": {},
  "LastUpdatedTime": {},
  "CreatedBy": {}
}
```

The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationAggregatorName|object|false|none|none|
|ConfigurationAggregatorArn|object|false|none|none|
|AccountAggregationSources|object|false|none|none|
|OrganizationAggregationSource|object|false|none|none|
|CreationTime|object|false|none|none|
|LastUpdatedTime|object|false|none|none|
|CreatedBy|object|false|none|none|

<h2 id="tocS_ConfigurationAggregatorList">ConfigurationAggregatorList</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationaggregatorlist"></a>
<a id="schema_ConfigurationAggregatorList"></a>
<a id="tocSconfigurationaggregatorlist"></a>
<a id="tocsconfigurationaggregatorlist"></a>

```json
[
  {
    "ConfigurationAggregatorName": {},
    "ConfigurationAggregatorArn": {},
    "AccountAggregationSources": {},
    "OrganizationAggregationSource": {
      "RoleArn": {},
      "AwsRegions": {},
      "AllAwsRegions": {}
    },
    "CreationTime": {},
    "LastUpdatedTime": {},
    "CreatedBy": {}
  }
]
```

<h2 id="tocS_ConfigurationAggregatorNameList">ConfigurationAggregatorNameList</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationaggregatornamelist"></a>
<a id="schema_ConfigurationAggregatorNameList"></a>
<a id="tocSconfigurationaggregatornamelist"></a>
<a id="tocsconfigurationaggregatornamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ConfigurationItemMD5Hash">ConfigurationItemMD5Hash</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationitemmd5hash"></a>
<a id="schema_ConfigurationItemMD5Hash"></a>
<a id="tocSconfigurationitemmd5hash"></a>
<a id="tocsconfigurationitemmd5hash"></a>

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
|**additionalProperties**|[Value](#schemavalue)|false|none|none|

<h2 id="tocS_RelatedEventList">RelatedEventList</h2>
<!-- backwards compatibility -->
<a id="schemarelatedeventlist"></a>
<a id="schema_RelatedEventList"></a>
<a id="tocSrelatedeventlist"></a>
<a id="tocsrelatedeventlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RelationshipList">RelationshipList</h2>
<!-- backwards compatibility -->
<a id="schemarelationshiplist"></a>
<a id="schema_RelationshipList"></a>
<a id="tocSrelationshiplist"></a>
<a id="tocsrelationshiplist"></a>

```json
[
  {
    "resourceType": {},
    "resourceId": {},
    "resourceName": {},
    "relationshipName": {}
  }
]
```

<h2 id="tocS_ConfigurationItem">ConfigurationItem</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationitem"></a>
<a id="schema_ConfigurationItem"></a>
<a id="tocSconfigurationitem"></a>
<a id="tocsconfigurationitem"></a>

```json
{
  "version": {},
  "accountId": {},
  "configurationItemCaptureTime": {},
  "configurationItemStatus": {},
  "configurationStateId": {},
  "configurationItemMD5Hash": {},
  "arn": {},
  "resourceType": {},
  "resourceId": {},
  "resourceName": {},
  "awsRegion": {},
  "availabilityZone": {},
  "resourceCreationTime": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "relatedEvents": {},
  "relationships": {},
  "configuration": {},
  "supplementaryConfiguration": {
    "property1": "string",
    "property2": "string"
  }
}
```

A list that contains detailed configurations of a specified resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|object|false|none|none|
|accountId|object|false|none|none|
|configurationItemCaptureTime|object|false|none|none|
|configurationItemStatus|object|false|none|none|
|configurationStateId|object|false|none|none|
|configurationItemMD5Hash|object|false|none|none|
|arn|object|false|none|none|
|resourceType|object|false|none|none|
|resourceId|object|false|none|none|
|resourceName|object|false|none|none|
|awsRegion|object|false|none|none|
|availabilityZone|object|false|none|none|
|resourceCreationTime|object|false|none|none|
|tags|object|false|none|none|
|relatedEvents|object|false|none|none|
|relationships|object|false|none|none|
|configuration|object|false|none|none|
|supplementaryConfiguration|object|false|none|none|

<h2 id="tocS_ConfigurationItemList">ConfigurationItemList</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationitemlist"></a>
<a id="schema_ConfigurationItemList"></a>
<a id="tocSconfigurationitemlist"></a>
<a id="tocsconfigurationitemlist"></a>

```json
[
  {
    "version": {},
    "accountId": {},
    "configurationItemCaptureTime": {},
    "configurationItemStatus": {},
    "configurationStateId": {},
    "configurationItemMD5Hash": {},
    "arn": {},
    "resourceType": {},
    "resourceId": {},
    "resourceName": {},
    "awsRegion": {},
    "availabilityZone": {},
    "resourceCreationTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "relatedEvents": {},
    "relationships": {},
    "configuration": {},
    "supplementaryConfiguration": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_RecorderName">RecorderName</h2>
<!-- backwards compatibility -->
<a id="schemarecordername"></a>
<a id="schema_RecorderName"></a>
<a id="tocSrecordername"></a>
<a id="tocsrecordername"></a>

```json
"string"
```

<h2 id="tocS_RecordingGroup">RecordingGroup</h2>
<!-- backwards compatibility -->
<a id="schemarecordinggroup"></a>
<a id="schema_RecordingGroup"></a>
<a id="tocSrecordinggroup"></a>
<a id="tocsrecordinggroup"></a>

```json
{
  "allSupported": {},
  "includeGlobalResourceTypes": {},
  "resourceTypes": {}
}
```

<p>Specifies which Amazon Web Services resource types Config records for configuration changes. In the recording group, you specify whether you want to record all supported resource types or only specific types of resources.</p> <p>By default, Config records the configuration changes for all supported types of <i>regional resources</i> that Config discovers in the region in which it is running. Regional resources are tied to a region and can be used only in that region. Examples of regional resources are EC2 instances and EBS volumes.</p> <p>You can also have Config record supported types of <i>global resources</i>. Global resources are not tied to a specific region and can be used in all regions. The global resource types that Config supports include IAM users, groups, roles, and customer managed policies.</p> <important> <p>Global resource types onboarded to Config recording after February 2022 will only be recorded in the service's home region for the commercial partition and Amazon Web Services GovCloud (US) West for the GovCloud partition. You can view the Configuration Items for these new global resource types only in their home region and Amazon Web Services GovCloud (US) West.</p> <p>Supported global resource types onboarded before February 2022 such as <code>AWS::IAM::Group</code>, <code>AWS::IAM::Policy</code>, <code>AWS::IAM::Role</code>, <code>AWS::IAM::User</code> remain unchanged, and they will continue to deliver Configuration Items in all supported regions in Config. The change will only affect new global resource types onboarded after February 2022.</p> <p>To record global resource types onboarded after February 2022, enable All Supported Resource Types in the home region of the global resource type you want to record.</p> </important> <p>If you don't want Config to record all resources, you can specify which types of resources it will record with the <code>resourceTypes</code> parameter.</p> <p>For a list of supported resource types, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Resource Types</a>.</p> <p>For more information and a table of the Home Regions for Global Resource Types Onboarded after February 2022, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html">Selecting Which Resources Config Records</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allSupported|object|false|none|none|
|includeGlobalResourceTypes|object|false|none|none|
|resourceTypes|object|false|none|none|

<h2 id="tocS_ConfigurationRecorder">ConfigurationRecorder</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationrecorder"></a>
<a id="schema_ConfigurationRecorder"></a>
<a id="tocSconfigurationrecorder"></a>
<a id="tocsconfigurationrecorder"></a>

```json
{
  "name": {},
  "roleARN": {},
  "recordingGroup": {
    "allSupported": {},
    "includeGlobalResourceTypes": {},
    "resourceTypes": {}
  }
}
```

An object that represents the recording of configuration changes of an Amazon Web Services resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|roleARN|object|false|none|none|
|recordingGroup|object|false|none|none|

<h2 id="tocS_ConfigurationRecorderList">ConfigurationRecorderList</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationrecorderlist"></a>
<a id="schema_ConfigurationRecorderList"></a>
<a id="tocSconfigurationrecorderlist"></a>
<a id="tocsconfigurationrecorderlist"></a>

```json
[
  {
    "name": {},
    "roleARN": {},
    "recordingGroup": {
      "allSupported": {},
      "includeGlobalResourceTypes": {},
      "resourceTypes": {}
    }
  }
]
```

<h2 id="tocS_ConfigurationRecorderNameList">ConfigurationRecorderNameList</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationrecordernamelist"></a>
<a id="schema_ConfigurationRecorderNameList"></a>
<a id="tocSconfigurationrecordernamelist"></a>
<a id="tocsconfigurationrecordernamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RecorderStatus">RecorderStatus</h2>
<!-- backwards compatibility -->
<a id="schemarecorderstatus"></a>
<a id="schema_RecorderStatus"></a>
<a id="tocSrecorderstatus"></a>
<a id="tocsrecorderstatus"></a>

```json
"Pending"
```

<h2 id="tocS_ConfigurationRecorderStatus">ConfigurationRecorderStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationrecorderstatus"></a>
<a id="schema_ConfigurationRecorderStatus"></a>
<a id="tocSconfigurationrecorderstatus"></a>
<a id="tocsconfigurationrecorderstatus"></a>

```json
{
  "name": {},
  "lastStartTime": {},
  "lastStopTime": {},
  "recording": {},
  "lastStatus": {},
  "lastErrorCode": {},
  "lastErrorMessage": {},
  "lastStatusChangeTime": {}
}
```

<p>The current status of the configuration recorder.</p> <note> <p>For a detailed status of recording events over time, add your Config events to CloudWatch metrics and use CloudWatch metrics.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|lastStartTime|object|false|none|none|
|lastStopTime|object|false|none|none|
|recording|object|false|none|none|
|lastStatus|object|false|none|none|
|lastErrorCode|object|false|none|none|
|lastErrorMessage|object|false|none|none|
|lastStatusChangeTime|object|false|none|none|

<h2 id="tocS_ConfigurationRecorderStatusList">ConfigurationRecorderStatusList</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationrecorderstatuslist"></a>
<a id="schema_ConfigurationRecorderStatusList"></a>
<a id="tocSconfigurationrecorderstatuslist"></a>
<a id="tocsconfigurationrecorderstatuslist"></a>

```json
[
  {
    "name": {},
    "lastStartTime": {},
    "lastStopTime": {},
    "recording": {},
    "lastStatus": {},
    "lastErrorCode": {},
    "lastErrorMessage": {},
    "lastStatusChangeTime": {}
  }
]
```

<h2 id="tocS_ConformancePackArn">ConformancePackArn</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackarn"></a>
<a id="schema_ConformancePackArn"></a>
<a id="tocSconformancepackarn"></a>
<a id="tocsconformancepackarn"></a>

```json
"string"
```

<h2 id="tocS_ConformancePackConfigRuleNames">ConformancePackConfigRuleNames</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackconfigrulenames"></a>
<a id="schema_ConformancePackConfigRuleNames"></a>
<a id="tocSconformancepackconfigrulenames"></a>
<a id="tocsconformancepackconfigrulenames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ConformancePackComplianceFilters">ConformancePackComplianceFilters</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackcompliancefilters"></a>
<a id="schema_ConformancePackComplianceFilters"></a>
<a id="tocSconformancepackcompliancefilters"></a>
<a id="tocsconformancepackcompliancefilters"></a>

```json
{
  "ConfigRuleNames": {},
  "ComplianceType": {}
}
```

Filters the conformance pack by compliance types and Config rule names.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleNames|object|false|none|none|
|ComplianceType|object|false|none|none|

<h2 id="tocS_ConformancePackComplianceResourceIds">ConformancePackComplianceResourceIds</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackcomplianceresourceids"></a>
<a id="schema_ConformancePackComplianceResourceIds"></a>
<a id="tocSconformancepackcomplianceresourceids"></a>
<a id="tocsconformancepackcomplianceresourceids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LastUpdatedTime">LastUpdatedTime</h2>
<!-- backwards compatibility -->
<a id="schemalastupdatedtime"></a>
<a id="schema_LastUpdatedTime"></a>
<a id="tocSlastupdatedtime"></a>
<a id="tocslastupdatedtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ConformancePackComplianceScore">ConformancePackComplianceScore</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackcompliancescore"></a>
<a id="schema_ConformancePackComplianceScore"></a>
<a id="tocSconformancepackcompliancescore"></a>
<a id="tocsconformancepackcompliancescore"></a>

```json
{
  "Score": {},
  "ConformancePackName": {},
  "LastUpdatedTime": {}
}
```

A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack. This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand the level of compliance in your conformance packs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Score|object|false|none|none|
|ConformancePackName|object|false|none|none|
|LastUpdatedTime|object|false|none|none|

<h2 id="tocS_ConformancePackComplianceScores">ConformancePackComplianceScores</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackcompliancescores"></a>
<a id="schema_ConformancePackComplianceScores"></a>
<a id="tocSconformancepackcompliancescores"></a>
<a id="tocsconformancepackcompliancescores"></a>

```json
[
  {
    "Score": {},
    "ConformancePackName": {},
    "LastUpdatedTime": {}
  }
]
```

<h2 id="tocS_ConformancePackNameFilter">ConformancePackNameFilter</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepacknamefilter"></a>
<a id="schema_ConformancePackNameFilter"></a>
<a id="tocSconformancepacknamefilter"></a>
<a id="tocsconformancepacknamefilter"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ConformancePackComplianceScoresFilters">ConformancePackComplianceScoresFilters</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackcompliancescoresfilters"></a>
<a id="schema_ConformancePackComplianceScoresFilters"></a>
<a id="tocSconformancepackcompliancescoresfilters"></a>
<a id="tocsconformancepackcompliancescoresfilters"></a>

```json
{
  "ConformancePackNames": {}
}
```

A list of filters to apply to the conformance pack compliance score result set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConformancePackNames|object|true|none|none|

<h2 id="tocS_ConformancePackComplianceSummary">ConformancePackComplianceSummary</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackcompliancesummary"></a>
<a id="schema_ConformancePackComplianceSummary"></a>
<a id="tocSconformancepackcompliancesummary"></a>
<a id="tocsconformancepackcompliancesummary"></a>

```json
{
  "ConformancePackName": {},
  "ConformancePackComplianceStatus": {}
}
```

Summary includes the name and status of the conformance pack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConformancePackName|object|true|none|none|
|ConformancePackComplianceStatus|object|true|none|none|

<h2 id="tocS_ConformancePackComplianceSummaryList">ConformancePackComplianceSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackcompliancesummarylist"></a>
<a id="schema_ConformancePackComplianceSummaryList"></a>
<a id="tocSconformancepackcompliancesummarylist"></a>
<a id="tocsconformancepackcompliancesummarylist"></a>

```json
[
  {
    "ConformancePackName": {},
    "ConformancePackComplianceStatus": {}
  }
]
```

<h2 id="tocS_ConformancePackId">ConformancePackId</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackid"></a>
<a id="schema_ConformancePackId"></a>
<a id="tocSconformancepackid"></a>
<a id="tocsconformancepackid"></a>

```json
"string"
```

<h2 id="tocS_DeliveryS3Bucket">DeliveryS3Bucket</h2>
<!-- backwards compatibility -->
<a id="schemadeliverys3bucket"></a>
<a id="schema_DeliveryS3Bucket"></a>
<a id="tocSdeliverys3bucket"></a>
<a id="tocsdeliverys3bucket"></a>

```json
"string"
```

<h2 id="tocS_DeliveryS3KeyPrefix">DeliveryS3KeyPrefix</h2>
<!-- backwards compatibility -->
<a id="schemadeliverys3keyprefix"></a>
<a id="schema_DeliveryS3KeyPrefix"></a>
<a id="tocSdeliverys3keyprefix"></a>
<a id="tocsdeliverys3keyprefix"></a>

```json
"string"
```

<h2 id="tocS_ConformancePackInputParameters">ConformancePackInputParameters</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackinputparameters"></a>
<a id="schema_ConformancePackInputParameters"></a>
<a id="tocSconformancepackinputparameters"></a>
<a id="tocsconformancepackinputparameters"></a>

```json
[
  {
    "ParameterName": {},
    "ParameterValue": {}
  }
]
```

<h2 id="tocS_TemplateSSMDocumentDetails">TemplateSSMDocumentDetails</h2>
<!-- backwards compatibility -->
<a id="schematemplatessmdocumentdetails"></a>
<a id="schema_TemplateSSMDocumentDetails"></a>
<a id="tocStemplatessmdocumentdetails"></a>
<a id="tocstemplatessmdocumentdetails"></a>

```json
{
  "DocumentName": {},
  "DocumentVersion": {}
}
```

<p>This API allows you to create a conformance pack template with an Amazon Web Services Systems Manager document (SSM document). To deploy a conformance pack using an SSM document, first create an SSM document with conformance pack content, and then provide the <code>DocumentName</code> in the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html">PutConformancePack API</a>. You can also provide the <code>DocumentVersion</code>.</p> <p>The <code>TemplateSSMDocumentDetails</code> object contains the name of the SSM document and the version of the SSM document.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentName|object|true|none|none|
|DocumentVersion|object|false|none|none|

<h2 id="tocS_ConformancePackDetail">ConformancePackDetail</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackdetail"></a>
<a id="schema_ConformancePackDetail"></a>
<a id="tocSconformancepackdetail"></a>
<a id="tocsconformancepackdetail"></a>

```json
{
  "ConformancePackName": {},
  "ConformancePackArn": {},
  "ConformancePackId": {},
  "DeliveryS3Bucket": {},
  "DeliveryS3KeyPrefix": {},
  "ConformancePackInputParameters": {},
  "LastUpdateRequestedTime": {},
  "CreatedBy": {},
  "TemplateSSMDocumentDetails": {
    "DocumentName": {},
    "DocumentVersion": {}
  }
}
```

Returns details of a conformance pack. A conformance pack is a collection of Config rules and remediation actions that can be easily deployed in an account and a region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConformancePackName|object|true|none|none|
|ConformancePackArn|object|true|none|none|
|ConformancePackId|object|true|none|none|
|DeliveryS3Bucket|object|false|none|none|
|DeliveryS3KeyPrefix|object|false|none|none|
|ConformancePackInputParameters|object|false|none|none|
|LastUpdateRequestedTime|object|false|none|none|
|CreatedBy|object|false|none|none|
|TemplateSSMDocumentDetails|object|false|none|none|

<h2 id="tocS_ConformancePackDetailList">ConformancePackDetailList</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackdetaillist"></a>
<a id="schema_ConformancePackDetailList"></a>
<a id="tocSconformancepackdetaillist"></a>
<a id="tocsconformancepackdetaillist"></a>

```json
[
  {
    "ConformancePackName": {},
    "ConformancePackArn": {},
    "ConformancePackId": {},
    "DeliveryS3Bucket": {},
    "DeliveryS3KeyPrefix": {},
    "ConformancePackInputParameters": {},
    "LastUpdateRequestedTime": {},
    "CreatedBy": {},
    "TemplateSSMDocumentDetails": {
      "DocumentName": {},
      "DocumentVersion": {}
    }
  }
]
```

<h2 id="tocS_ConformancePackEvaluationFilters">ConformancePackEvaluationFilters</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackevaluationfilters"></a>
<a id="schema_ConformancePackEvaluationFilters"></a>
<a id="tocSconformancepackevaluationfilters"></a>
<a id="tocsconformancepackevaluationfilters"></a>

```json
{
  "ConfigRuleNames": {},
  "ComplianceType": {},
  "ResourceType": {},
  "ResourceIds": {}
}
```

Filters a conformance pack by Config rule names, compliance types, Amazon Web Services resource types, and resource IDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleNames|object|false|none|none|
|ComplianceType|object|false|none|none|
|ResourceType|object|false|none|none|
|ResourceIds|object|false|none|none|

<h2 id="tocS_ConformancePackEvaluationResult">ConformancePackEvaluationResult</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackevaluationresult"></a>
<a id="schema_ConformancePackEvaluationResult"></a>
<a id="tocSconformancepackevaluationresult"></a>
<a id="tocsconformancepackevaluationresult"></a>

```json
{
  "ComplianceType": {},
  "EvaluationResultIdentifier": {
    "EvaluationResultQualifier": {
      "ConfigRuleName": {},
      "ResourceType": {},
      "ResourceId": {},
      "EvaluationMode": {}
    },
    "OrderingTimestamp": {},
    "ResourceEvaluationId": {}
  },
  "ConfigRuleInvokedTime": {},
  "ResultRecordedTime": {},
  "Annotation": {}
}
```

The details of a conformance pack evaluation. Provides Config rule and Amazon Web Services resource type that was evaluated, the compliance of the conformance pack, related time stamps, and supplementary information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComplianceType|object|true|none|none|
|EvaluationResultIdentifier|[EvaluationResultIdentifier](#schemaevaluationresultidentifier)|true|none|Uniquely identifies an evaluation result.|
|ConfigRuleInvokedTime|object|true|none|none|
|ResultRecordedTime|object|true|none|none|
|Annotation|object|false|none|none|

<h2 id="tocS_ParameterName">ParameterName</h2>
<!-- backwards compatibility -->
<a id="schemaparametername"></a>
<a id="schema_ParameterName"></a>
<a id="tocSparametername"></a>
<a id="tocsparametername"></a>

```json
"string"
```

<h2 id="tocS_ParameterValue">ParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemaparametervalue"></a>
<a id="schema_ParameterValue"></a>
<a id="tocSparametervalue"></a>
<a id="tocsparametervalue"></a>

```json
"string"
```

<h2 id="tocS_ConformancePackInputParameter">ConformancePackInputParameter</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackinputparameter"></a>
<a id="schema_ConformancePackInputParameter"></a>
<a id="tocSconformancepackinputparameter"></a>
<a id="tocsconformancepackinputparameter"></a>

```json
{
  "ParameterName": {},
  "ParameterValue": {}
}
```

Input parameters in the form of key-value pairs for the conformance pack, both of which you define. Keys can have a maximum character length of 255 characters, and values can have a maximum length of 4096 characters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterName|object|true|none|none|
|ParameterValue|object|true|none|none|

<h2 id="tocS_ConformancePackNamesList">ConformancePackNamesList</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepacknameslist"></a>
<a id="schema_ConformancePackNamesList"></a>
<a id="tocSconformancepacknameslist"></a>
<a id="tocsconformancepacknameslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ConformancePackNamesToSummarizeList">ConformancePackNamesToSummarizeList</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepacknamestosummarizelist"></a>
<a id="schema_ConformancePackNamesToSummarizeList"></a>
<a id="tocSconformancepacknamestosummarizelist"></a>
<a id="tocsconformancepacknamestosummarizelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ControlsList">ControlsList</h2>
<!-- backwards compatibility -->
<a id="schemacontrolslist"></a>
<a id="schema_ControlsList"></a>
<a id="tocScontrolslist"></a>
<a id="tocscontrolslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ConformancePackRuleCompliance">ConformancePackRuleCompliance</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackrulecompliance"></a>
<a id="schema_ConformancePackRuleCompliance"></a>
<a id="tocSconformancepackrulecompliance"></a>
<a id="tocsconformancepackrulecompliance"></a>

```json
{
  "ConfigRuleName": {},
  "ComplianceType": {},
  "Controls": {}
}
```

Compliance information of one or more Config rules within a conformance pack. You can filter using Config rule names and compliance types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|false|none|none|
|ComplianceType|object|false|none|none|
|Controls|object|false|none|none|

<h2 id="tocS_ConformancePackRuleComplianceList">ConformancePackRuleComplianceList</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackrulecompliancelist"></a>
<a id="schema_ConformancePackRuleComplianceList"></a>
<a id="tocSconformancepackrulecompliancelist"></a>
<a id="tocsconformancepackrulecompliancelist"></a>

```json
[
  {
    "ConfigRuleName": {},
    "ComplianceType": {},
    "Controls": {}
  }
]
```

<h2 id="tocS_ConformancePackRuleEvaluationResultsList">ConformancePackRuleEvaluationResultsList</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackruleevaluationresultslist"></a>
<a id="schema_ConformancePackRuleEvaluationResultsList"></a>
<a id="tocSconformancepackruleevaluationresultslist"></a>
<a id="tocsconformancepackruleevaluationresultslist"></a>

```json
[
  {
    "ComplianceType": {},
    "EvaluationResultIdentifier": {
      "EvaluationResultQualifier": {
        "ConfigRuleName": {},
        "ResourceType": {},
        "ResourceId": {},
        "EvaluationMode": {}
      },
      "OrderingTimestamp": {},
      "ResourceEvaluationId": {}
    },
    "ConfigRuleInvokedTime": {},
    "ResultRecordedTime": {},
    "Annotation": {}
  }
]
```

<h2 id="tocS_ConformancePackState">ConformancePackState</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackstate"></a>
<a id="schema_ConformancePackState"></a>
<a id="tocSconformancepackstate"></a>
<a id="tocsconformancepackstate"></a>

```json
"CREATE_IN_PROGRESS"
```

<h2 id="tocS_StackArn">StackArn</h2>
<!-- backwards compatibility -->
<a id="schemastackarn"></a>
<a id="schema_StackArn"></a>
<a id="tocSstackarn"></a>
<a id="tocsstackarn"></a>

```json
"string"
```

<h2 id="tocS_ConformancePackStatusReason">ConformancePackStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackstatusreason"></a>
<a id="schema_ConformancePackStatusReason"></a>
<a id="tocSconformancepackstatusreason"></a>
<a id="tocsconformancepackstatusreason"></a>

```json
"string"
```

<h2 id="tocS_ConformancePackStatusDetail">ConformancePackStatusDetail</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackstatusdetail"></a>
<a id="schema_ConformancePackStatusDetail"></a>
<a id="tocSconformancepackstatusdetail"></a>
<a id="tocsconformancepackstatusdetail"></a>

```json
{
  "ConformancePackName": {},
  "ConformancePackId": {},
  "ConformancePackArn": {},
  "ConformancePackState": {},
  "StackArn": {},
  "ConformancePackStatusReason": {},
  "LastUpdateRequestedTime": {},
  "LastUpdateCompletedTime": {}
}
```

Status details of a conformance pack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConformancePackName|object|true|none|none|
|ConformancePackId|object|true|none|none|
|ConformancePackArn|object|true|none|none|
|ConformancePackState|object|true|none|none|
|StackArn|object|true|none|none|
|ConformancePackStatusReason|object|false|none|none|
|LastUpdateRequestedTime|object|true|none|none|
|LastUpdateCompletedTime|object|false|none|none|

<h2 id="tocS_ConformancePackStatusDetailsList">ConformancePackStatusDetailsList</h2>
<!-- backwards compatibility -->
<a id="schemaconformancepackstatusdetailslist"></a>
<a id="schema_ConformancePackStatusDetailsList"></a>
<a id="tocSconformancepackstatusdetailslist"></a>
<a id="tocsconformancepackstatusdetailslist"></a>

```json
[
  {
    "ConformancePackName": {},
    "ConformancePackId": {},
    "ConformancePackArn": {},
    "ConformancePackState": {},
    "StackArn": {},
    "ConformancePackStatusReason": {},
    "LastUpdateRequestedTime": {},
    "LastUpdateCompletedTime": {}
  }
]
```

<h2 id="tocS_StringWithCharLimit128">StringWithCharLimit128</h2>
<!-- backwards compatibility -->
<a id="schemastringwithcharlimit128"></a>
<a id="schema_StringWithCharLimit128"></a>
<a id="tocSstringwithcharlimit128"></a>
<a id="tocsstringwithcharlimit128"></a>

```json
"string"
```

<h2 id="tocS_CosmosPageLimit">CosmosPageLimit</h2>
<!-- backwards compatibility -->
<a id="schemacosmospagelimit"></a>
<a id="schema_CosmosPageLimit"></a>
<a id="tocScosmospagelimit"></a>
<a id="tocscosmospagelimit"></a>

```json
0
```

<h2 id="tocS_PolicyRuntime">PolicyRuntime</h2>
<!-- backwards compatibility -->
<a id="schemapolicyruntime"></a>
<a id="schema_PolicyRuntime"></a>
<a id="tocSpolicyruntime"></a>
<a id="tocspolicyruntime"></a>

```json
"string"
```

<h2 id="tocS_PolicyText">PolicyText</h2>
<!-- backwards compatibility -->
<a id="schemapolicytext"></a>
<a id="schema_PolicyText"></a>
<a id="tocSpolicytext"></a>
<a id="tocspolicytext"></a>

```json
"string"
```

<h2 id="tocS_CustomPolicyDetails">CustomPolicyDetails</h2>
<!-- backwards compatibility -->
<a id="schemacustompolicydetails"></a>
<a id="schema_CustomPolicyDetails"></a>
<a id="tocScustompolicydetails"></a>
<a id="tocscustompolicydetails"></a>

```json
{
  "PolicyRuntime": {},
  "PolicyText": {},
  "EnableDebugLogDelivery": {}
}
```

Provides the runtime system, policy definition, and whether debug logging enabled. You can specify the following CustomPolicyDetails parameter values only for Config Custom Policy rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyRuntime|object|true|none|none|
|PolicyText|object|true|none|none|
|EnableDebugLogDelivery|object|false|none|none|

<h2 id="tocS_DebugLogDeliveryAccounts">DebugLogDeliveryAccounts</h2>
<!-- backwards compatibility -->
<a id="schemadebuglogdeliveryaccounts"></a>
<a id="schema_DebugLogDeliveryAccounts"></a>
<a id="tocSdebuglogdeliveryaccounts"></a>
<a id="tocsdebuglogdeliveryaccounts"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OrganizationConfigRuleName">OrganizationConfigRuleName</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconfigrulename"></a>
<a id="schema_OrganizationConfigRuleName"></a>
<a id="tocSorganizationconfigrulename"></a>
<a id="tocsorganizationconfigrulename"></a>

```json
"string"
```

<h2 id="tocS_OrganizationConformancePackName">OrganizationConformancePackName</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconformancepackname"></a>
<a id="schema_OrganizationConformancePackName"></a>
<a id="tocSorganizationconformancepackname"></a>
<a id="tocsorganizationconformancepackname"></a>

```json
"string"
```

<h2 id="tocS_RemediationExceptionResourceKeys">RemediationExceptionResourceKeys</h2>
<!-- backwards compatibility -->
<a id="schemaremediationexceptionresourcekeys"></a>
<a id="schema_RemediationExceptionResourceKeys"></a>
<a id="tocSremediationexceptionresourcekeys"></a>
<a id="tocsremediationexceptionresourcekeys"></a>

```json
[
  {
    "ResourceType": {},
    "ResourceId": {}
  }
]
```

<h2 id="tocS_FailedDeleteRemediationExceptionsBatches">FailedDeleteRemediationExceptionsBatches</h2>
<!-- backwards compatibility -->
<a id="schemafaileddeleteremediationexceptionsbatches"></a>
<a id="schema_FailedDeleteRemediationExceptionsBatches"></a>
<a id="tocSfaileddeleteremediationexceptionsbatches"></a>
<a id="tocsfaileddeleteremediationexceptionsbatches"></a>

```json
[
  {
    "FailureMessage": {},
    "FailedItems": {}
  }
]
```

<h2 id="tocS_ResourceTypeString">ResourceTypeString</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetypestring"></a>
<a id="schema_ResourceTypeString"></a>
<a id="tocSresourcetypestring"></a>
<a id="tocsresourcetypestring"></a>

```json
"string"
```

<h2 id="tocS_RetentionConfigurationName">RetentionConfigurationName</h2>
<!-- backwards compatibility -->
<a id="schemaretentionconfigurationname"></a>
<a id="schema_RetentionConfigurationName"></a>
<a id="tocSretentionconfigurationname"></a>
<a id="tocsretentionconfigurationname"></a>

```json
"string"
```

<h2 id="tocS_QueryName">QueryName</h2>
<!-- backwards compatibility -->
<a id="schemaqueryname"></a>
<a id="schema_QueryName"></a>
<a id="tocSqueryname"></a>
<a id="tocsqueryname"></a>

```json
"string"
```

<h2 id="tocS_DeliveryChannel">DeliveryChannel</h2>
<!-- backwards compatibility -->
<a id="schemadeliverychannel"></a>
<a id="schema_DeliveryChannel"></a>
<a id="tocSdeliverychannel"></a>
<a id="tocsdeliverychannel"></a>

```json
{
  "name": {},
  "s3BucketName": {},
  "s3KeyPrefix": {},
  "s3KmsKeyArn": {},
  "snsTopicARN": {},
  "configSnapshotDeliveryProperties": {
    "deliveryFrequency": {}
  }
}
```

The channel through which Config delivers notifications and updated configuration states.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|s3BucketName|object|false|none|none|
|s3KeyPrefix|object|false|none|none|
|s3KmsKeyArn|object|false|none|none|
|snsTopicARN|object|false|none|none|
|configSnapshotDeliveryProperties|object|false|none|none|

<h2 id="tocS_DeliveryChannelList">DeliveryChannelList</h2>
<!-- backwards compatibility -->
<a id="schemadeliverychannellist"></a>
<a id="schema_DeliveryChannelList"></a>
<a id="tocSdeliverychannellist"></a>
<a id="tocsdeliverychannellist"></a>

```json
[
  {
    "name": {},
    "s3BucketName": {},
    "s3KeyPrefix": {},
    "s3KmsKeyArn": {},
    "snsTopicARN": {},
    "configSnapshotDeliveryProperties": {
      "deliveryFrequency": {}
    }
  }
]
```

<h2 id="tocS_DeliveryChannelNameList">DeliveryChannelNameList</h2>
<!-- backwards compatibility -->
<a id="schemadeliverychannelnamelist"></a>
<a id="schema_DeliveryChannelNameList"></a>
<a id="tocSdeliverychannelnamelist"></a>
<a id="tocsdeliverychannelnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DeliveryChannelStatus">DeliveryChannelStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeliverychannelstatus"></a>
<a id="schema_DeliveryChannelStatus"></a>
<a id="tocSdeliverychannelstatus"></a>
<a id="tocsdeliverychannelstatus"></a>

```json
{
  "name": {},
  "configSnapshotDeliveryInfo": {
    "lastStatus": {},
    "lastErrorCode": {},
    "lastErrorMessage": {},
    "lastAttemptTime": {},
    "lastSuccessfulTime": {},
    "nextDeliveryTime": {}
  },
  "configHistoryDeliveryInfo": {
    "lastStatus": {},
    "lastErrorCode": {},
    "lastErrorMessage": {},
    "lastAttemptTime": {},
    "lastSuccessfulTime": {},
    "nextDeliveryTime": {}
  },
  "configStreamDeliveryInfo": {
    "lastStatus": {},
    "lastErrorCode": {},
    "lastErrorMessage": {},
    "lastStatusChangeTime": {}
  }
}
```

<p>The status of a specified delivery channel.</p> <p>Valid values: <code>Success</code> | <code>Failure</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|configSnapshotDeliveryInfo|object|false|none|none|
|configHistoryDeliveryInfo|object|false|none|none|
|configStreamDeliveryInfo|object|false|none|none|

<h2 id="tocS_DeliveryChannelStatusList">DeliveryChannelStatusList</h2>
<!-- backwards compatibility -->
<a id="schemadeliverychannelstatuslist"></a>
<a id="schema_DeliveryChannelStatusList"></a>
<a id="tocSdeliverychannelstatuslist"></a>
<a id="tocsdeliverychannelstatuslist"></a>

```json
[
  {
    "name": {},
    "configSnapshotDeliveryInfo": {
      "lastStatus": {},
      "lastErrorCode": {},
      "lastErrorMessage": {},
      "lastAttemptTime": {},
      "lastSuccessfulTime": {},
      "nextDeliveryTime": {}
    },
    "configHistoryDeliveryInfo": {
      "lastStatus": {},
      "lastErrorCode": {},
      "lastErrorMessage": {},
      "lastAttemptTime": {},
      "lastSuccessfulTime": {},
      "nextDeliveryTime": {}
    },
    "configStreamDeliveryInfo": {
      "lastStatus": {},
      "lastErrorCode": {},
      "lastErrorMessage": {},
      "lastStatusChangeTime": {}
    }
  }
]
```

<h2 id="tocS_GroupByAPILimit">GroupByAPILimit</h2>
<!-- backwards compatibility -->
<a id="schemagroupbyapilimit"></a>
<a id="schema_GroupByAPILimit"></a>
<a id="tocSgroupbyapilimit"></a>
<a id="tocsgroupbyapilimit"></a>

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

<h2 id="tocS_Limit">Limit</h2>
<!-- backwards compatibility -->
<a id="schemalimit"></a>
<a id="schema_Limit"></a>
<a id="tocSlimit"></a>
<a id="tocslimit"></a>

```json
0
```

<h2 id="tocS_RuleLimit">RuleLimit</h2>
<!-- backwards compatibility -->
<a id="schemarulelimit"></a>
<a id="schema_RuleLimit"></a>
<a id="tocSrulelimit"></a>
<a id="tocsrulelimit"></a>

```json
0
```

<h2 id="tocS_EvaluationMode">EvaluationMode</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationmode"></a>
<a id="schema_EvaluationMode"></a>
<a id="tocSevaluationmode"></a>
<a id="tocsevaluationmode"></a>

```json
"DETECTIVE"
```

<h2 id="tocS_DescribeConfigRulesFilters">DescribeConfigRulesFilters</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigrulesfilters"></a>
<a id="schema_DescribeConfigRulesFilters"></a>
<a id="tocSdescribeconfigrulesfilters"></a>
<a id="tocsdescribeconfigrulesfilters"></a>

```json
{
  "EvaluationMode": {}
}
```

Returns a filtered list of Detective or Proactive Config rules. By default, if the filter is not defined, this API returns an unfiltered list. For more information on Detective or Proactive Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config-rules.html"> <b>Evaluation Mode</b> </a> in the Config Developer Guide.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EvaluationMode|object|false|none|none|

<h2 id="tocS_DescribeConformancePackComplianceLimit">DescribeConformancePackComplianceLimit</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconformancepackcompliancelimit"></a>
<a id="schema_DescribeConformancePackComplianceLimit"></a>
<a id="tocSdescribeconformancepackcompliancelimit"></a>
<a id="tocsdescribeconformancepackcompliancelimit"></a>

```json
0
```

<h2 id="tocS_PageSizeLimit">PageSizeLimit</h2>
<!-- backwards compatibility -->
<a id="schemapagesizelimit"></a>
<a id="schema_PageSizeLimit"></a>
<a id="tocSpagesizelimit"></a>
<a id="tocspagesizelimit"></a>

```json
0
```

<h2 id="tocS_OrganizationConfigRuleNames">OrganizationConfigRuleNames</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconfigrulenames"></a>
<a id="schema_OrganizationConfigRuleNames"></a>
<a id="tocSorganizationconfigrulenames"></a>
<a id="tocsorganizationconfigrulenames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OrganizationConfigRuleStatuses">OrganizationConfigRuleStatuses</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconfigrulestatuses"></a>
<a id="schema_OrganizationConfigRuleStatuses"></a>
<a id="tocSorganizationconfigrulestatuses"></a>
<a id="tocsorganizationconfigrulestatuses"></a>

```json
[
  {
    "OrganizationConfigRuleName": {},
    "OrganizationRuleStatus": {},
    "ErrorCode": {},
    "ErrorMessage": {},
    "LastUpdateTime": {}
  }
]
```

<h2 id="tocS_OrganizationConfigRules">OrganizationConfigRules</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconfigrules"></a>
<a id="schema_OrganizationConfigRules"></a>
<a id="tocSorganizationconfigrules"></a>
<a id="tocsorganizationconfigrules"></a>

```json
[
  {
    "OrganizationConfigRuleName": {},
    "OrganizationConfigRuleArn": {},
    "OrganizationManagedRuleMetadata": {
      "Description": {},
      "RuleIdentifier": {},
      "InputParameters": {},
      "MaximumExecutionFrequency": {},
      "ResourceTypesScope": {},
      "ResourceIdScope": {},
      "TagKeyScope": {},
      "TagValueScope": {}
    },
    "OrganizationCustomRuleMetadata": {
      "Description": {},
      "LambdaFunctionArn": {},
      "OrganizationConfigRuleTriggerTypes": {},
      "InputParameters": {},
      "MaximumExecutionFrequency": {},
      "ResourceTypesScope": {},
      "ResourceIdScope": {},
      "TagKeyScope": {},
      "TagValueScope": {}
    },
    "ExcludedAccounts": {},
    "LastUpdateTime": {},
    "OrganizationCustomPolicyRuleMetadata": {
      "Description": {},
      "OrganizationConfigRuleTriggerTypes": {},
      "InputParameters": {},
      "MaximumExecutionFrequency": {},
      "ResourceTypesScope": {},
      "ResourceIdScope": {},
      "TagKeyScope": {},
      "TagValueScope": {},
      "PolicyRuntime": {},
      "DebugLogDeliveryAccounts": {}
    }
  }
]
```

<h2 id="tocS_OrganizationConformancePackNames">OrganizationConformancePackNames</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconformancepacknames"></a>
<a id="schema_OrganizationConformancePackNames"></a>
<a id="tocSorganizationconformancepacknames"></a>
<a id="tocsorganizationconformancepacknames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OrganizationConformancePackStatuses">OrganizationConformancePackStatuses</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconformancepackstatuses"></a>
<a id="schema_OrganizationConformancePackStatuses"></a>
<a id="tocSorganizationconformancepackstatuses"></a>
<a id="tocsorganizationconformancepackstatuses"></a>

```json
[
  {
    "OrganizationConformancePackName": {},
    "Status": {},
    "ErrorCode": {},
    "ErrorMessage": {},
    "LastUpdateTime": {}
  }
]
```

<h2 id="tocS_OrganizationConformancePacks">OrganizationConformancePacks</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconformancepacks"></a>
<a id="schema_OrganizationConformancePacks"></a>
<a id="tocSorganizationconformancepacks"></a>
<a id="tocsorganizationconformancepacks"></a>

```json
[
  {
    "OrganizationConformancePackName": {},
    "OrganizationConformancePackArn": {},
    "DeliveryS3Bucket": {},
    "DeliveryS3KeyPrefix": {},
    "ConformancePackInputParameters": {},
    "ExcludedAccounts": {},
    "LastUpdateTime": {}
  }
]
```

<h2 id="tocS_DescribePendingAggregationRequestsLimit">DescribePendingAggregationRequestsLimit</h2>
<!-- backwards compatibility -->
<a id="schemadescribependingaggregationrequestslimit"></a>
<a id="schema_DescribePendingAggregationRequestsLimit"></a>
<a id="tocSdescribependingaggregationrequestslimit"></a>
<a id="tocsdescribependingaggregationrequestslimit"></a>

```json
0
```

<h2 id="tocS_PendingAggregationRequestList">PendingAggregationRequestList</h2>
<!-- backwards compatibility -->
<a id="schemapendingaggregationrequestlist"></a>
<a id="schema_PendingAggregationRequestList"></a>
<a id="tocSpendingaggregationrequestlist"></a>
<a id="tocspendingaggregationrequestlist"></a>

```json
[
  {
    "RequesterAccountId": {},
    "RequesterAwsRegion": {}
  }
]
```

<h2 id="tocS_RemediationConfigurations">RemediationConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaremediationconfigurations"></a>
<a id="schema_RemediationConfigurations"></a>
<a id="tocSremediationconfigurations"></a>
<a id="tocsremediationconfigurations"></a>

```json
[
  {
    "ConfigRuleName": {},
    "TargetType": {},
    "TargetId": {},
    "TargetVersion": {},
    "Parameters": {
      "property1": {
        "ResourceValue": {
          "Value": {}
        },
        "StaticValue": {
          "Values": {}
        }
      },
      "property2": {
        "ResourceValue": {
          "Value": {}
        },
        "StaticValue": {
          "Values": {}
        }
      }
    },
    "ResourceType": {},
    "Automatic": {},
    "ExecutionControls": {
      "SsmControls": {
        "ConcurrentExecutionRatePercentage": {},
        "ErrorPercentage": {}
      }
    },
    "MaximumAutomaticAttempts": {},
    "RetryAttemptSeconds": {},
    "Arn": {},
    "CreatedByService": {}
  }
]
```

<h2 id="tocS_RemediationExceptions">RemediationExceptions</h2>
<!-- backwards compatibility -->
<a id="schemaremediationexceptions"></a>
<a id="schema_RemediationExceptions"></a>
<a id="tocSremediationexceptions"></a>
<a id="tocsremediationexceptions"></a>

```json
[
  {
    "ConfigRuleName": {},
    "ResourceType": {},
    "ResourceId": {},
    "Message": {},
    "ExpirationTime": {}
  }
]
```

<h2 id="tocS_RemediationExecutionStatuses">RemediationExecutionStatuses</h2>
<!-- backwards compatibility -->
<a id="schemaremediationexecutionstatuses"></a>
<a id="schema_RemediationExecutionStatuses"></a>
<a id="tocSremediationexecutionstatuses"></a>
<a id="tocsremediationexecutionstatuses"></a>

```json
[
  {
    "ResourceKey": {
      "resourceType": {},
      "resourceId": {}
    },
    "State": {},
    "StepDetails": {},
    "InvocationTime": {},
    "LastUpdatedTime": {}
  }
]
```

<h2 id="tocS_RetentionConfigurationNameList">RetentionConfigurationNameList</h2>
<!-- backwards compatibility -->
<a id="schemaretentionconfigurationnamelist"></a>
<a id="schema_RetentionConfigurationNameList"></a>
<a id="tocSretentionconfigurationnamelist"></a>
<a id="tocsretentionconfigurationnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RetentionConfigurationList">RetentionConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemaretentionconfigurationlist"></a>
<a id="schema_RetentionConfigurationList"></a>
<a id="tocSretentionconfigurationlist"></a>
<a id="tocsretentionconfigurationlist"></a>

```json
[
  {
    "Name": {},
    "RetentionPeriodInDays": {}
  }
]
```

<h2 id="tocS_DiscoveredResourceIdentifierList">DiscoveredResourceIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemadiscoveredresourceidentifierlist"></a>
<a id="schema_DiscoveredResourceIdentifierList"></a>
<a id="tocSdiscoveredresourceidentifierlist"></a>
<a id="tocsdiscoveredresourceidentifierlist"></a>

```json
[
  {
    "SourceAccountId": {},
    "SourceRegion": {},
    "ResourceId": {},
    "ResourceType": {},
    "ResourceName": {}
  }
]
```

<h2 id="tocS_EarlierTime">EarlierTime</h2>
<!-- backwards compatibility -->
<a id="schemaearliertime"></a>
<a id="schema_EarlierTime"></a>
<a id="tocSearliertime"></a>
<a id="tocsearliertime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_OrderingTimestamp">OrderingTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemaorderingtimestamp"></a>
<a id="schema_OrderingTimestamp"></a>
<a id="tocSorderingtimestamp"></a>
<a id="tocsorderingtimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Evaluation">Evaluation</h2>
<!-- backwards compatibility -->
<a id="schemaevaluation"></a>
<a id="schema_Evaluation"></a>
<a id="tocSevaluation"></a>
<a id="tocsevaluation"></a>

```json
{
  "ComplianceResourceType": {},
  "ComplianceResourceId": {},
  "ComplianceType": {},
  "Annotation": {},
  "OrderingTimestamp": {}
}
```

Identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that it was evaluated against.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComplianceResourceType|object|true|none|none|
|ComplianceResourceId|object|true|none|none|
|ComplianceType|object|true|none|none|
|Annotation|object|false|none|none|
|OrderingTimestamp|object|true|none|none|

<h2 id="tocS_EvaluationContextIdentifier">EvaluationContextIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationcontextidentifier"></a>
<a id="schema_EvaluationContextIdentifier"></a>
<a id="tocSevaluationcontextidentifier"></a>
<a id="tocsevaluationcontextidentifier"></a>

```json
"string"
```

<h2 id="tocS_EvaluationContext">EvaluationContext</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationcontext"></a>
<a id="schema_EvaluationContext"></a>
<a id="tocSevaluationcontext"></a>
<a id="tocsevaluationcontext"></a>

```json
{
  "EvaluationContextIdentifier": {}
}
```

Use EvaluationContext to group independently initiated proactive resource evaluations. For example, CFN Stack. If you want to check just a resource definition, you do not need to provide evaluation context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EvaluationContextIdentifier|object|false|none|none|

<h2 id="tocS_EvaluationModeConfiguration">EvaluationModeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationmodeconfiguration"></a>
<a id="schema_EvaluationModeConfiguration"></a>
<a id="tocSevaluationmodeconfiguration"></a>
<a id="tocsevaluationmodeconfiguration"></a>

```json
{
  "Mode": {}
}
```

The configuration object for Config rule evaluation mode. The Supported valid values are Detective or Proactive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mode|object|false|none|none|

<h2 id="tocS_EvaluationResult">EvaluationResult</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationresult"></a>
<a id="schema_EvaluationResult"></a>
<a id="tocSevaluationresult"></a>
<a id="tocsevaluationresult"></a>

```json
{
  "EvaluationResultIdentifier": {
    "EvaluationResultQualifier": {
      "ConfigRuleName": {},
      "ResourceType": {},
      "ResourceId": {},
      "EvaluationMode": {}
    },
    "OrderingTimestamp": {},
    "ResourceEvaluationId": {}
  },
  "ComplianceType": {},
  "ResultRecordedTime": {},
  "ConfigRuleInvokedTime": {},
  "Annotation": {},
  "ResultToken": {}
}
```

The details of an Config evaluation. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EvaluationResultIdentifier|object|false|none|none|
|ComplianceType|object|false|none|none|
|ResultRecordedTime|object|false|none|none|
|ConfigRuleInvokedTime|object|false|none|none|
|Annotation|object|false|none|none|
|ResultToken|object|false|none|none|

<h2 id="tocS_EvaluationResultQualifier">EvaluationResultQualifier</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationresultqualifier"></a>
<a id="schema_EvaluationResultQualifier"></a>
<a id="tocSevaluationresultqualifier"></a>
<a id="tocsevaluationresultqualifier"></a>

```json
{
  "ConfigRuleName": {},
  "ResourceType": {},
  "ResourceId": {},
  "EvaluationMode": {}
}
```

Identifies an Config rule that evaluated an Amazon Web Services resource, and provides the type and ID of the resource that the rule evaluated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|false|none|none|
|ResourceType|object|false|none|none|
|ResourceId|object|false|none|none|
|EvaluationMode|object|false|none|none|

<h2 id="tocS_ResourceEvaluationId">ResourceEvaluationId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceevaluationid"></a>
<a id="schema_ResourceEvaluationId"></a>
<a id="tocSresourceevaluationid"></a>
<a id="tocsresourceevaluationid"></a>

```json
"string"
```

<h2 id="tocS_EvaluationResults">EvaluationResults</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationresults"></a>
<a id="schema_EvaluationResults"></a>
<a id="tocSevaluationresults"></a>
<a id="tocsevaluationresults"></a>

```json
[
  {
    "EvaluationResultIdentifier": {
      "EvaluationResultQualifier": {
        "ConfigRuleName": {},
        "ResourceType": {},
        "ResourceId": {},
        "EvaluationMode": {}
      },
      "OrderingTimestamp": {},
      "ResourceEvaluationId": {}
    },
    "ComplianceType": {},
    "ResultRecordedTime": {},
    "ConfigRuleInvokedTime": {},
    "Annotation": {},
    "ResultToken": {}
  }
]
```

<h2 id="tocS_ResourceEvaluationStatus">ResourceEvaluationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresourceevaluationstatus"></a>
<a id="schema_ResourceEvaluationStatus"></a>
<a id="tocSresourceevaluationstatus"></a>
<a id="tocsresourceevaluationstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_EvaluationStatus">EvaluationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationstatus"></a>
<a id="schema_EvaluationStatus"></a>
<a id="tocSevaluationstatus"></a>
<a id="tocsevaluationstatus"></a>

```json
{
  "Status": {},
  "FailureReason": {}
}
```

Returns status details of an evaluation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|
|FailureReason|object|false|none|none|

<h2 id="tocS_EvaluationTimeout">EvaluationTimeout</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationtimeout"></a>
<a id="schema_EvaluationTimeout"></a>
<a id="tocSevaluationtimeout"></a>
<a id="tocsevaluationtimeout"></a>

```json
0
```

<h2 id="tocS_Evaluations">Evaluations</h2>
<!-- backwards compatibility -->
<a id="schemaevaluations"></a>
<a id="schema_Evaluations"></a>
<a id="tocSevaluations"></a>
<a id="tocsevaluations"></a>

```json
[
  {
    "ComplianceResourceType": {},
    "ComplianceResourceId": {},
    "ComplianceType": {},
    "Annotation": {},
    "OrderingTimestamp": {}
  }
]
```

<h2 id="tocS_EventSource">EventSource</h2>
<!-- backwards compatibility -->
<a id="schemaeventsource"></a>
<a id="schema_EventSource"></a>
<a id="tocSeventsource"></a>
<a id="tocseventsource"></a>

```json
"aws.config"
```

<h2 id="tocS_ExcludedAccounts">ExcludedAccounts</h2>
<!-- backwards compatibility -->
<a id="schemaexcludedaccounts"></a>
<a id="schema_ExcludedAccounts"></a>
<a id="tocSexcludedaccounts"></a>
<a id="tocsexcludedaccounts"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SsmControls">SsmControls</h2>
<!-- backwards compatibility -->
<a id="schemassmcontrols"></a>
<a id="schema_SsmControls"></a>
<a id="tocSssmcontrols"></a>
<a id="tocsssmcontrols"></a>

```json
{
  "ConcurrentExecutionRatePercentage": {},
  "ErrorPercentage": {}
}
```

Amazon Web Services Systems Manager (SSM) specific remediation controls.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConcurrentExecutionRatePercentage|object|false|none|none|
|ErrorPercentage|object|false|none|none|

<h2 id="tocS_ExecutionControls">ExecutionControls</h2>
<!-- backwards compatibility -->
<a id="schemaexecutioncontrols"></a>
<a id="schema_ExecutionControls"></a>
<a id="tocSexecutioncontrols"></a>
<a id="tocsexecutioncontrols"></a>

```json
{
  "SsmControls": {
    "ConcurrentExecutionRatePercentage": {},
    "ErrorPercentage": {}
  }
}
```

The controls that Config uses for executing remediations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SsmControls|object|false|none|none|

<h2 id="tocS_Expression">Expression</h2>
<!-- backwards compatibility -->
<a id="schemaexpression"></a>
<a id="schema_Expression"></a>
<a id="tocSexpression"></a>
<a id="tocsexpression"></a>

```json
"string"
```

<h2 id="tocS_ExternalEvaluation">ExternalEvaluation</h2>
<!-- backwards compatibility -->
<a id="schemaexternalevaluation"></a>
<a id="schema_ExternalEvaluation"></a>
<a id="tocSexternalevaluation"></a>
<a id="tocsexternalevaluation"></a>

```json
{
  "ComplianceResourceType": {},
  "ComplianceResourceId": {},
  "ComplianceType": {},
  "Annotation": {},
  "OrderingTimestamp": {}
}
```

Identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that it was evaluated against.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComplianceResourceType|object|true|none|none|
|ComplianceResourceId|object|true|none|none|
|ComplianceType|object|true|none|none|
|Annotation|object|false|none|none|
|OrderingTimestamp|object|true|none|none|

<h2 id="tocS_FailedDeleteRemediationExceptionsBatch">FailedDeleteRemediationExceptionsBatch</h2>
<!-- backwards compatibility -->
<a id="schemafaileddeleteremediationexceptionsbatch"></a>
<a id="schema_FailedDeleteRemediationExceptionsBatch"></a>
<a id="tocSfaileddeleteremediationexceptionsbatch"></a>
<a id="tocsfaileddeleteremediationexceptionsbatch"></a>

```json
{
  "FailureMessage": {},
  "FailedItems": {}
}
```

List of each of the failed delete remediation exceptions with specific reasons.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailureMessage|object|false|none|none|
|FailedItems|object|false|none|none|

<h2 id="tocS_FailedRemediationBatch">FailedRemediationBatch</h2>
<!-- backwards compatibility -->
<a id="schemafailedremediationbatch"></a>
<a id="schema_FailedRemediationBatch"></a>
<a id="tocSfailedremediationbatch"></a>
<a id="tocsfailedremediationbatch"></a>

```json
{
  "FailureMessage": {},
  "FailedItems": {}
}
```

List of each of the failed remediations with specific reasons.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailureMessage|object|false|none|none|
|FailedItems|object|false|none|none|

<h2 id="tocS_FailedRemediationBatches">FailedRemediationBatches</h2>
<!-- backwards compatibility -->
<a id="schemafailedremediationbatches"></a>
<a id="schema_FailedRemediationBatches"></a>
<a id="tocSfailedremediationbatches"></a>
<a id="tocsfailedremediationbatches"></a>

```json
[
  {
    "FailureMessage": {},
    "FailedItems": {}
  }
]
```

<h2 id="tocS_FailedRemediationExceptionBatch">FailedRemediationExceptionBatch</h2>
<!-- backwards compatibility -->
<a id="schemafailedremediationexceptionbatch"></a>
<a id="schema_FailedRemediationExceptionBatch"></a>
<a id="tocSfailedremediationexceptionbatch"></a>
<a id="tocsfailedremediationexceptionbatch"></a>

```json
{
  "FailureMessage": {},
  "FailedItems": {}
}
```

List of each of the failed remediation exceptions with specific reasons.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailureMessage|object|false|none|none|
|FailedItems|object|false|none|none|

<h2 id="tocS_FailedRemediationExceptionBatches">FailedRemediationExceptionBatches</h2>
<!-- backwards compatibility -->
<a id="schemafailedremediationexceptionbatches"></a>
<a id="schema_FailedRemediationExceptionBatches"></a>
<a id="tocSfailedremediationexceptionbatches"></a>
<a id="tocsfailedremediationexceptionbatches"></a>

```json
[
  {
    "FailureMessage": {},
    "FailedItems": {}
  }
]
```

<h2 id="tocS_FieldName">FieldName</h2>
<!-- backwards compatibility -->
<a id="schemafieldname"></a>
<a id="schema_FieldName"></a>
<a id="tocSfieldname"></a>
<a id="tocsfieldname"></a>

```json
"string"
```

<h2 id="tocS_FieldInfo">FieldInfo</h2>
<!-- backwards compatibility -->
<a id="schemafieldinfo"></a>
<a id="schema_FieldInfo"></a>
<a id="tocSfieldinfo"></a>
<a id="tocsfieldinfo"></a>

```json
{
  "Name": {}
}
```

Details about the fields such as name of the field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_FieldInfoList">FieldInfoList</h2>
<!-- backwards compatibility -->
<a id="schemafieldinfolist"></a>
<a id="schema_FieldInfoList"></a>
<a id="tocSfieldinfolist"></a>
<a id="tocsfieldinfolist"></a>

```json
[
  {
    "Name": {}
  }
]
```

<h2 id="tocS_ResourceCountFilters">ResourceCountFilters</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecountfilters"></a>
<a id="schema_ResourceCountFilters"></a>
<a id="tocSresourcecountfilters"></a>
<a id="tocsresourcecountfilters"></a>

```json
{
  "ResourceType": {},
  "AccountId": {},
  "Region": {}
}
```

Filters the resource count based on account ID, region, and resource type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|false|none|none|
|AccountId|object|false|none|none|
|Region|object|false|none|none|

<h2 id="tocS_ResourceCountGroupKey">ResourceCountGroupKey</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecountgroupkey"></a>
<a id="schema_ResourceCountGroupKey"></a>
<a id="tocSresourcecountgroupkey"></a>
<a id="tocsresourcecountgroupkey"></a>

```json
"RESOURCE_TYPE"
```

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_GroupedResourceCountList">GroupedResourceCountList</h2>
<!-- backwards compatibility -->
<a id="schemagroupedresourcecountlist"></a>
<a id="schema_GroupedResourceCountList"></a>
<a id="tocSgroupedresourcecountlist"></a>
<a id="tocsgroupedresourcecountlist"></a>

```json
[
  {
    "GroupName": {},
    "ResourceCount": {}
  }
]
```

<h2 id="tocS_ResourceTypes">ResourceTypes</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetypes"></a>
<a id="schema_ResourceTypes"></a>
<a id="tocSresourcetypes"></a>
<a id="tocsresourcetypes"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GetConformancePackComplianceDetailsLimit">GetConformancePackComplianceDetailsLimit</h2>
<!-- backwards compatibility -->
<a id="schemagetconformancepackcompliancedetailslimit"></a>
<a id="schema_GetConformancePackComplianceDetailsLimit"></a>
<a id="tocSgetconformancepackcompliancedetailslimit"></a>
<a id="tocsgetconformancepackcompliancedetailslimit"></a>

```json
0
```

<h2 id="tocS_ResourceCounts">ResourceCounts</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecounts"></a>
<a id="schema_ResourceCounts"></a>
<a id="tocSresourcecounts"></a>
<a id="tocsresourcecounts"></a>

```json
[
  {
    "resourceType": {},
    "count": {}
  }
]
```

<h2 id="tocS_StatusDetailFilters">StatusDetailFilters</h2>
<!-- backwards compatibility -->
<a id="schemastatusdetailfilters"></a>
<a id="schema_StatusDetailFilters"></a>
<a id="tocSstatusdetailfilters"></a>
<a id="tocsstatusdetailfilters"></a>

```json
{
  "AccountId": {},
  "MemberAccountRuleStatus": {}
}
```

Status filter object to filter results based on specific member account ID or status type for an organization Config rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|MemberAccountRuleStatus|object|false|none|none|

<h2 id="tocS_OrganizationConfigRuleDetailedStatus">OrganizationConfigRuleDetailedStatus</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconfigruledetailedstatus"></a>
<a id="schema_OrganizationConfigRuleDetailedStatus"></a>
<a id="tocSorganizationconfigruledetailedstatus"></a>
<a id="tocsorganizationconfigruledetailedstatus"></a>

```json
[
  {
    "AccountId": {},
    "ConfigRuleName": {},
    "MemberAccountRuleStatus": {},
    "ErrorCode": {},
    "ErrorMessage": {},
    "LastUpdateTime": {}
  }
]
```

<h2 id="tocS_OrganizationResourceDetailedStatusFilters">OrganizationResourceDetailedStatusFilters</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationresourcedetailedstatusfilters"></a>
<a id="schema_OrganizationResourceDetailedStatusFilters"></a>
<a id="tocSorganizationresourcedetailedstatusfilters"></a>
<a id="tocsorganizationresourcedetailedstatusfilters"></a>

```json
{
  "AccountId": {},
  "Status": {}
}
```

Status filter object to filter results based on specific member account ID or status type for an organization conformance pack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_OrganizationConformancePackDetailedStatuses">OrganizationConformancePackDetailedStatuses</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconformancepackdetailedstatuses"></a>
<a id="schema_OrganizationConformancePackDetailedStatuses"></a>
<a id="tocSorganizationconformancepackdetailedstatuses"></a>
<a id="tocsorganizationconformancepackdetailedstatuses"></a>

```json
[
  {
    "AccountId": {},
    "ConformancePackName": {},
    "Status": {},
    "ErrorCode": {},
    "ErrorMessage": {},
    "LastUpdateTime": {}
  }
]
```

<h2 id="tocS_LaterTime">LaterTime</h2>
<!-- backwards compatibility -->
<a id="schemalatertime"></a>
<a id="schema_LaterTime"></a>
<a id="tocSlatertime"></a>
<a id="tocslatertime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ResourceDetails">ResourceDetails</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedetails"></a>
<a id="schema_ResourceDetails"></a>
<a id="tocSresourcedetails"></a>
<a id="tocsresourcedetails"></a>

```json
{
  "ResourceId": {},
  "ResourceType": {},
  "ResourceConfiguration": {},
  "ResourceConfigurationSchemaType": {}
}
```

Returns information about the resource being evaluated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|ResourceType|object|true|none|none|
|ResourceConfiguration|object|true|none|none|
|ResourceConfigurationSchemaType|object|false|none|none|

<h2 id="tocS_StoredQuery">StoredQuery</h2>
<!-- backwards compatibility -->
<a id="schemastoredquery"></a>
<a id="schema_StoredQuery"></a>
<a id="tocSstoredquery"></a>
<a id="tocsstoredquery"></a>

```json
{
  "QueryId": {},
  "QueryArn": {},
  "QueryName": {},
  "Description": {},
  "Expression": {}
}
```

Provides the details of a stored query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryId|object|false|none|none|
|QueryArn|object|false|none|none|
|QueryName|object|true|none|none|
|Description|object|false|none|none|
|Expression|object|false|none|none|

<h2 id="tocS_GroupedResourceCount">GroupedResourceCount</h2>
<!-- backwards compatibility -->
<a id="schemagroupedresourcecount"></a>
<a id="schema_GroupedResourceCount"></a>
<a id="tocSgroupedresourcecount"></a>
<a id="tocsgroupedresourcecount"></a>

```json
{
  "GroupName": {},
  "ResourceCount": {}
}
```

The count of resources that are grouped by the group name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|true|none|none|
|ResourceCount|object|true|none|none|

<h2 id="tocS_IncludeGlobalResourceTypes">IncludeGlobalResourceTypes</h2>
<!-- backwards compatibility -->
<a id="schemaincludeglobalresourcetypes"></a>
<a id="schema_IncludeGlobalResourceTypes"></a>
<a id="tocSincludeglobalresourcetypes"></a>
<a id="tocsincludeglobalresourcetypes"></a>

```json
true
```

<h2 id="tocS_ResourceFilters">ResourceFilters</h2>
<!-- backwards compatibility -->
<a id="schemaresourcefilters"></a>
<a id="schema_ResourceFilters"></a>
<a id="tocSresourcefilters"></a>
<a id="tocsresourcefilters"></a>

```json
{
  "AccountId": {},
  "ResourceId": {},
  "ResourceName": {},
  "Region": {}
}
```

Filters the results by resource account ID, region, resource ID, and resource name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|ResourceId|object|false|none|none|
|ResourceName|object|false|none|none|
|Region|object|false|none|none|

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"ASCENDING"
```

<h2 id="tocS_SortBy">SortBy</h2>
<!-- backwards compatibility -->
<a id="schemasortby"></a>
<a id="schema_SortBy"></a>
<a id="tocSsortby"></a>
<a id="tocssortby"></a>

```json
"SCORE"
```

<h2 id="tocS_ResourceIdList">ResourceIdList</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidlist"></a>
<a id="schema_ResourceIdList"></a>
<a id="tocSresourceidlist"></a>
<a id="tocsresourceidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceIdentifierList">ResourceIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidentifierlist"></a>
<a id="schema_ResourceIdentifierList"></a>
<a id="tocSresourceidentifierlist"></a>
<a id="tocsresourceidentifierlist"></a>

```json
[
  {
    "resourceType": {},
    "resourceId": {},
    "resourceName": {},
    "resourceDeletionTime": {}
  }
]
```

<h2 id="tocS_ListResourceEvaluationsPageItemLimit">ListResourceEvaluationsPageItemLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistresourceevaluationspageitemlimit"></a>
<a id="schema_ListResourceEvaluationsPageItemLimit"></a>
<a id="tocSlistresourceevaluationspageitemlimit"></a>
<a id="tocslistresourceevaluationspageitemlimit"></a>

```json
0
```

<h2 id="tocS_ResourceEvaluationFilters">ResourceEvaluationFilters</h2>
<!-- backwards compatibility -->
<a id="schemaresourceevaluationfilters"></a>
<a id="schema_ResourceEvaluationFilters"></a>
<a id="tocSresourceevaluationfilters"></a>
<a id="tocsresourceevaluationfilters"></a>

```json
{
  "EvaluationMode": {},
  "TimeWindow": {
    "StartTime": {},
    "EndTime": {}
  },
  "EvaluationContextIdentifier": {}
}
```

Returns details of a resource evaluation based on the selected filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EvaluationMode|object|false|none|none|
|TimeWindow|object|false|none|none|
|EvaluationContextIdentifier|object|false|none|none|

<h2 id="tocS_ResourceEvaluations">ResourceEvaluations</h2>
<!-- backwards compatibility -->
<a id="schemaresourceevaluations"></a>
<a id="schema_ResourceEvaluations"></a>
<a id="tocSresourceevaluations"></a>
<a id="tocsresourceevaluations"></a>

```json
[
  {
    "ResourceEvaluationId": {},
    "EvaluationMode": {},
    "EvaluationStartTimestamp": {}
  }
]
```

<h2 id="tocS_StoredQueryMetadataList">StoredQueryMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemastoredquerymetadatalist"></a>
<a id="schema_StoredQueryMetadataList"></a>
<a id="tocSstoredquerymetadatalist"></a>
<a id="tocsstoredquerymetadatalist"></a>

```json
[
  {
    "QueryId": {},
    "QueryArn": {},
    "QueryName": {},
    "Description": {}
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

<h2 id="tocS_MemberAccountRuleStatus">MemberAccountRuleStatus</h2>
<!-- backwards compatibility -->
<a id="schemamemberaccountrulestatus"></a>
<a id="schema_MemberAccountRuleStatus"></a>
<a id="tocSmemberaccountrulestatus"></a>
<a id="tocsmemberaccountrulestatus"></a>

```json
"CREATE_SUCCESSFUL"
```

<h2 id="tocS_MemberAccountStatus">MemberAccountStatus</h2>
<!-- backwards compatibility -->
<a id="schemamemberaccountstatus"></a>
<a id="schema_MemberAccountStatus"></a>
<a id="tocSmemberaccountstatus"></a>
<a id="tocsmemberaccountstatus"></a>

```json
{
  "AccountId": {},
  "ConfigRuleName": {},
  "MemberAccountRuleStatus": {},
  "ErrorCode": {},
  "ErrorMessage": {},
  "LastUpdateTime": {}
}
```

Organization Config rule creation or deletion status in each member account. This includes the name of the rule, the status, error code and error message when the rule creation or deletion failed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|ConfigRuleName|object|true|none|none|
|MemberAccountRuleStatus|object|true|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|
|LastUpdateTime|object|false|none|none|

<h2 id="tocS_MessageType">MessageType</h2>
<!-- backwards compatibility -->
<a id="schemamessagetype"></a>
<a id="schema_MessageType"></a>
<a id="tocSmessagetype"></a>
<a id="tocsmessagetype"></a>

```json
"ConfigurationItemChangeNotification"
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

<h2 id="tocS_OrganizationManagedRuleMetadata">OrganizationManagedRuleMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationmanagedrulemetadata"></a>
<a id="schema_OrganizationManagedRuleMetadata"></a>
<a id="tocSorganizationmanagedrulemetadata"></a>
<a id="tocsorganizationmanagedrulemetadata"></a>

```json
{
  "Description": {},
  "RuleIdentifier": {},
  "InputParameters": {},
  "MaximumExecutionFrequency": {},
  "ResourceTypesScope": {},
  "ResourceIdScope": {},
  "TagKeyScope": {},
  "TagValueScope": {}
}
```

An object that specifies organization managed rule metadata such as resource type and ID of Amazon Web Services resource along with the rule identifier. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|RuleIdentifier|object|true|none|none|
|InputParameters|object|false|none|none|
|MaximumExecutionFrequency|object|false|none|none|
|ResourceTypesScope|object|false|none|none|
|ResourceIdScope|object|false|none|none|
|TagKeyScope|object|false|none|none|
|TagValueScope|object|false|none|none|

<h2 id="tocS_OrganizationCustomRuleMetadata">OrganizationCustomRuleMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationcustomrulemetadata"></a>
<a id="schema_OrganizationCustomRuleMetadata"></a>
<a id="tocSorganizationcustomrulemetadata"></a>
<a id="tocsorganizationcustomrulemetadata"></a>

```json
{
  "Description": {},
  "LambdaFunctionArn": {},
  "OrganizationConfigRuleTriggerTypes": {},
  "InputParameters": {},
  "MaximumExecutionFrequency": {},
  "ResourceTypesScope": {},
  "ResourceIdScope": {},
  "TagKeyScope": {},
  "TagValueScope": {}
}
```

An object that specifies organization custom rule metadata such as resource type, resource ID of Amazon Web Services resource, Lambda function ARN, and organization trigger types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|LambdaFunctionArn|object|true|none|none|
|OrganizationConfigRuleTriggerTypes|object|true|none|none|
|InputParameters|object|false|none|none|
|MaximumExecutionFrequency|object|false|none|none|
|ResourceTypesScope|object|false|none|none|
|ResourceIdScope|object|false|none|none|
|TagKeyScope|object|false|none|none|
|TagValueScope|object|false|none|none|

<h2 id="tocS_OrganizationCustomPolicyRuleMetadataNoPolicy">OrganizationCustomPolicyRuleMetadataNoPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationcustompolicyrulemetadatanopolicy"></a>
<a id="schema_OrganizationCustomPolicyRuleMetadataNoPolicy"></a>
<a id="tocSorganizationcustompolicyrulemetadatanopolicy"></a>
<a id="tocsorganizationcustompolicyrulemetadatanopolicy"></a>

```json
{
  "Description": {},
  "OrganizationConfigRuleTriggerTypes": {},
  "InputParameters": {},
  "MaximumExecutionFrequency": {},
  "ResourceTypesScope": {},
  "ResourceIdScope": {},
  "TagKeyScope": {},
  "TagValueScope": {},
  "PolicyRuntime": {},
  "DebugLogDeliveryAccounts": {}
}
```

An object that specifies metadata for your organization Config Custom Policy rule including the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata such as resource type, resource ID of Amazon Web Services resource, and organization trigger types that trigger Config to evaluate Amazon Web Services resources against a rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|OrganizationConfigRuleTriggerTypes|object|false|none|none|
|InputParameters|object|false|none|none|
|MaximumExecutionFrequency|object|false|none|none|
|ResourceTypesScope|object|false|none|none|
|ResourceIdScope|object|false|none|none|
|TagKeyScope|object|false|none|none|
|TagValueScope|object|false|none|none|
|PolicyRuntime|object|false|none|none|
|DebugLogDeliveryAccounts|object|false|none|none|

<h2 id="tocS_OrganizationConfigRule">OrganizationConfigRule</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconfigrule"></a>
<a id="schema_OrganizationConfigRule"></a>
<a id="tocSorganizationconfigrule"></a>
<a id="tocsorganizationconfigrule"></a>

```json
{
  "OrganizationConfigRuleName": {},
  "OrganizationConfigRuleArn": {},
  "OrganizationManagedRuleMetadata": {
    "Description": {},
    "RuleIdentifier": {},
    "InputParameters": {},
    "MaximumExecutionFrequency": {},
    "ResourceTypesScope": {},
    "ResourceIdScope": {},
    "TagKeyScope": {},
    "TagValueScope": {}
  },
  "OrganizationCustomRuleMetadata": {
    "Description": {},
    "LambdaFunctionArn": {},
    "OrganizationConfigRuleTriggerTypes": {},
    "InputParameters": {},
    "MaximumExecutionFrequency": {},
    "ResourceTypesScope": {},
    "ResourceIdScope": {},
    "TagKeyScope": {},
    "TagValueScope": {}
  },
  "ExcludedAccounts": {},
  "LastUpdateTime": {},
  "OrganizationCustomPolicyRuleMetadata": {
    "Description": {},
    "OrganizationConfigRuleTriggerTypes": {},
    "InputParameters": {},
    "MaximumExecutionFrequency": {},
    "ResourceTypesScope": {},
    "ResourceIdScope": {},
    "TagKeyScope": {},
    "TagValueScope": {},
    "PolicyRuntime": {},
    "DebugLogDeliveryAccounts": {}
  }
}
```

An organization Config rule that has information about Config rules that Config creates in member accounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConfigRuleName|object|true|none|none|
|OrganizationConfigRuleArn|object|true|none|none|
|OrganizationManagedRuleMetadata|object|false|none|none|
|OrganizationCustomRuleMetadata|object|false|none|none|
|ExcludedAccounts|object|false|none|none|
|LastUpdateTime|object|false|none|none|
|OrganizationCustomPolicyRuleMetadata|object|false|none|none|

<h2 id="tocS_OrganizationRuleStatus">OrganizationRuleStatus</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationrulestatus"></a>
<a id="schema_OrganizationRuleStatus"></a>
<a id="tocSorganizationrulestatus"></a>
<a id="tocsorganizationrulestatus"></a>

```json
"CREATE_SUCCESSFUL"
```

<h2 id="tocS_OrganizationConfigRuleStatus">OrganizationConfigRuleStatus</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconfigrulestatus"></a>
<a id="schema_OrganizationConfigRuleStatus"></a>
<a id="tocSorganizationconfigrulestatus"></a>
<a id="tocsorganizationconfigrulestatus"></a>

```json
{
  "OrganizationConfigRuleName": {},
  "OrganizationRuleStatus": {},
  "ErrorCode": {},
  "ErrorMessage": {},
  "LastUpdateTime": {}
}
```

Returns the status for an organization Config rule in an organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConfigRuleName|object|true|none|none|
|OrganizationRuleStatus|object|true|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|
|LastUpdateTime|object|false|none|none|

<h2 id="tocS_OrganizationConfigRuleTriggerType">OrganizationConfigRuleTriggerType</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconfigruletriggertype"></a>
<a id="schema_OrganizationConfigRuleTriggerType"></a>
<a id="tocSorganizationconfigruletriggertype"></a>
<a id="tocsorganizationconfigruletriggertype"></a>

```json
"ConfigurationItemChangeNotification"
```

<h2 id="tocS_OrganizationConfigRuleTriggerTypeNoSN">OrganizationConfigRuleTriggerTypeNoSN</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconfigruletriggertypenosn"></a>
<a id="schema_OrganizationConfigRuleTriggerTypeNoSN"></a>
<a id="tocSorganizationconfigruletriggertypenosn"></a>
<a id="tocsorganizationconfigruletriggertypenosn"></a>

```json
"ConfigurationItemChangeNotification"
```

<h2 id="tocS_OrganizationConfigRuleTriggerTypeNoSNs">OrganizationConfigRuleTriggerTypeNoSNs</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconfigruletriggertypenosns"></a>
<a id="schema_OrganizationConfigRuleTriggerTypeNoSNs"></a>
<a id="tocSorganizationconfigruletriggertypenosns"></a>
<a id="tocsorganizationconfigruletriggertypenosns"></a>

```json
[
  "ConfigurationItemChangeNotification"
]
```

<h2 id="tocS_OrganizationConfigRuleTriggerTypes">OrganizationConfigRuleTriggerTypes</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconfigruletriggertypes"></a>
<a id="schema_OrganizationConfigRuleTriggerTypes"></a>
<a id="tocSorganizationconfigruletriggertypes"></a>
<a id="tocsorganizationconfigruletriggertypes"></a>

```json
[
  "ConfigurationItemChangeNotification"
]
```

<h2 id="tocS_OrganizationConformancePack">OrganizationConformancePack</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconformancepack"></a>
<a id="schema_OrganizationConformancePack"></a>
<a id="tocSorganizationconformancepack"></a>
<a id="tocsorganizationconformancepack"></a>

```json
{
  "OrganizationConformancePackName": {},
  "OrganizationConformancePackArn": {},
  "DeliveryS3Bucket": {},
  "DeliveryS3KeyPrefix": {},
  "ConformancePackInputParameters": {},
  "ExcludedAccounts": {},
  "LastUpdateTime": {}
}
```

An organization conformance pack that has information about conformance packs that Config creates in member accounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConformancePackName|object|true|none|none|
|OrganizationConformancePackArn|object|true|none|none|
|DeliveryS3Bucket|object|false|none|none|
|DeliveryS3KeyPrefix|object|false|none|none|
|ConformancePackInputParameters|object|false|none|none|
|ExcludedAccounts|object|false|none|none|
|LastUpdateTime|object|true|none|none|

<h2 id="tocS_OrganizationResourceDetailedStatus">OrganizationResourceDetailedStatus</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationresourcedetailedstatus"></a>
<a id="schema_OrganizationResourceDetailedStatus"></a>
<a id="tocSorganizationresourcedetailedstatus"></a>
<a id="tocsorganizationresourcedetailedstatus"></a>

```json
"CREATE_SUCCESSFUL"
```

<h2 id="tocS_OrganizationConformancePackDetailedStatus">OrganizationConformancePackDetailedStatus</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconformancepackdetailedstatus"></a>
<a id="schema_OrganizationConformancePackDetailedStatus"></a>
<a id="tocSorganizationconformancepackdetailedstatus"></a>
<a id="tocsorganizationconformancepackdetailedstatus"></a>

```json
{
  "AccountId": {},
  "ConformancePackName": {},
  "Status": {},
  "ErrorCode": {},
  "ErrorMessage": {},
  "LastUpdateTime": {}
}
```

Organization conformance pack creation or deletion status in each member account. This includes the name of the conformance pack, the status, error code and error message when the conformance pack creation or deletion failed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|ConformancePackName|object|true|none|none|
|Status|object|true|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|
|LastUpdateTime|object|false|none|none|

<h2 id="tocS_OrganizationResourceStatus">OrganizationResourceStatus</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationresourcestatus"></a>
<a id="schema_OrganizationResourceStatus"></a>
<a id="tocSorganizationresourcestatus"></a>
<a id="tocsorganizationresourcestatus"></a>

```json
"CREATE_SUCCESSFUL"
```

<h2 id="tocS_OrganizationConformancePackStatus">OrganizationConformancePackStatus</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconformancepackstatus"></a>
<a id="schema_OrganizationConformancePackStatus"></a>
<a id="tocSorganizationconformancepackstatus"></a>
<a id="tocsorganizationconformancepackstatus"></a>

```json
{
  "OrganizationConformancePackName": {},
  "Status": {},
  "ErrorCode": {},
  "ErrorMessage": {},
  "LastUpdateTime": {}
}
```

Returns the status for an organization conformance pack in an organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationConformancePackName|object|true|none|none|
|Status|object|true|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|
|LastUpdateTime|object|false|none|none|

<h2 id="tocS_StringWithCharLimit256Min0">StringWithCharLimit256Min0</h2>
<!-- backwards compatibility -->
<a id="schemastringwithcharlimit256min0"></a>
<a id="schema_StringWithCharLimit256Min0"></a>
<a id="tocSstringwithcharlimit256min0"></a>
<a id="tocsstringwithcharlimit256min0"></a>

```json
"string"
```

<h2 id="tocS_StringWithCharLimit2048">StringWithCharLimit2048</h2>
<!-- backwards compatibility -->
<a id="schemastringwithcharlimit2048"></a>
<a id="schema_StringWithCharLimit2048"></a>
<a id="tocSstringwithcharlimit2048"></a>
<a id="tocsstringwithcharlimit2048"></a>

```json
"string"
```

<h2 id="tocS_ResourceTypesScope">ResourceTypesScope</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetypesscope"></a>
<a id="schema_ResourceTypesScope"></a>
<a id="tocSresourcetypesscope"></a>
<a id="tocsresourcetypesscope"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StringWithCharLimit768">StringWithCharLimit768</h2>
<!-- backwards compatibility -->
<a id="schemastringwithcharlimit768"></a>
<a id="schema_StringWithCharLimit768"></a>
<a id="tocSstringwithcharlimit768"></a>
<a id="tocsstringwithcharlimit768"></a>

```json
"string"
```

<h2 id="tocS_OrganizationCustomPolicyRuleMetadata">OrganizationCustomPolicyRuleMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationcustompolicyrulemetadata"></a>
<a id="schema_OrganizationCustomPolicyRuleMetadata"></a>
<a id="tocSorganizationcustompolicyrulemetadata"></a>
<a id="tocsorganizationcustompolicyrulemetadata"></a>

```json
{
  "Description": {},
  "OrganizationConfigRuleTriggerTypes": {},
  "InputParameters": {},
  "MaximumExecutionFrequency": {},
  "ResourceTypesScope": {},
  "ResourceIdScope": {},
  "TagKeyScope": {},
  "TagValueScope": {},
  "PolicyRuntime": {},
  "PolicyText": {},
  "DebugLogDeliveryAccounts": {}
}
```

An object that specifies metadata for your organization's Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata, such as resource type, resource ID of Amazon Web Services resource, and organization trigger types that initiate Config to evaluate Amazon Web Services resources against a rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|OrganizationConfigRuleTriggerTypes|object|false|none|none|
|InputParameters|object|false|none|none|
|MaximumExecutionFrequency|object|false|none|none|
|ResourceTypesScope|object|false|none|none|
|ResourceIdScope|object|false|none|none|
|TagKeyScope|object|false|none|none|
|TagValueScope|object|false|none|none|
|PolicyRuntime|object|true|none|none|
|PolicyText|object|true|none|none|
|DebugLogDeliveryAccounts|object|false|none|none|

<h2 id="tocS_Owner">Owner</h2>
<!-- backwards compatibility -->
<a id="schemaowner"></a>
<a id="schema_Owner"></a>
<a id="tocSowner"></a>
<a id="tocsowner"></a>

```json
"CUSTOM_LAMBDA"
```

<h2 id="tocS_PendingAggregationRequest">PendingAggregationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapendingaggregationrequest"></a>
<a id="schema_PendingAggregationRequest"></a>
<a id="tocSpendingaggregationrequest"></a>
<a id="tocspendingaggregationrequest"></a>

```json
{
  "RequesterAccountId": {},
  "RequesterAwsRegion": {}
}
```

An object that represents the account ID and region of an aggregator account that is requesting authorization but is not yet authorized.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequesterAccountId|object|false|none|none|
|RequesterAwsRegion|object|false|none|none|

<h2 id="tocS_Percentage">Percentage</h2>
<!-- backwards compatibility -->
<a id="schemapercentage"></a>
<a id="schema_Percentage"></a>
<a id="tocSpercentage"></a>
<a id="tocspercentage"></a>

```json
1
```

<h2 id="tocS_TagsList">TagsList</h2>
<!-- backwards compatibility -->
<a id="schematagslist"></a>
<a id="schema_TagsList"></a>
<a id="tocStagslist"></a>
<a id="tocstagslist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_TemplateS3Uri">TemplateS3Uri</h2>
<!-- backwards compatibility -->
<a id="schematemplates3uri"></a>
<a id="schema_TemplateS3Uri"></a>
<a id="tocStemplates3uri"></a>
<a id="tocstemplates3uri"></a>

```json
"string"
```

<h2 id="tocS_TemplateBody">TemplateBody</h2>
<!-- backwards compatibility -->
<a id="schematemplatebody"></a>
<a id="schema_TemplateBody"></a>
<a id="tocStemplatebody"></a>
<a id="tocstemplatebody"></a>

```json
"string"
```

<h2 id="tocS_SchemaVersionId">SchemaVersionId</h2>
<!-- backwards compatibility -->
<a id="schemaschemaversionid"></a>
<a id="schema_SchemaVersionId"></a>
<a id="tocSschemaversionid"></a>
<a id="tocsschemaversionid"></a>

```json
"string"
```

<h2 id="tocS_RetentionPeriodInDays">RetentionPeriodInDays</h2>
<!-- backwards compatibility -->
<a id="schemaretentionperiodindays"></a>
<a id="schema_RetentionPeriodInDays"></a>
<a id="tocSretentionperiodindays"></a>
<a id="tocsretentionperiodindays"></a>

```json
30
```

<h2 id="tocS_RetentionConfiguration">RetentionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaretentionconfiguration"></a>
<a id="schema_RetentionConfiguration"></a>
<a id="tocSretentionconfiguration"></a>
<a id="tocsretentionconfiguration"></a>

```json
{
  "Name": {},
  "RetentionPeriodInDays": {}
}
```

An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in Config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|RetentionPeriodInDays|object|true|none|none|

<h2 id="tocS_QueryArn">QueryArn</h2>
<!-- backwards compatibility -->
<a id="schemaqueryarn"></a>
<a id="schema_QueryArn"></a>
<a id="tocSqueryarn"></a>
<a id="tocsqueryarn"></a>

```json
"string"
```

<h2 id="tocS_QueryDescription">QueryDescription</h2>
<!-- backwards compatibility -->
<a id="schemaquerydescription"></a>
<a id="schema_QueryDescription"></a>
<a id="tocSquerydescription"></a>
<a id="tocsquerydescription"></a>

```json
"string"
```

<h2 id="tocS_QueryExpression">QueryExpression</h2>
<!-- backwards compatibility -->
<a id="schemaqueryexpression"></a>
<a id="schema_QueryExpression"></a>
<a id="tocSqueryexpression"></a>
<a id="tocsqueryexpression"></a>

```json
"string"
```

<h2 id="tocS_QueryId">QueryId</h2>
<!-- backwards compatibility -->
<a id="schemaqueryid"></a>
<a id="schema_QueryId"></a>
<a id="tocSqueryid"></a>
<a id="tocsqueryid"></a>

```json
"string"
```

<h2 id="tocS_QueryInfo">QueryInfo</h2>
<!-- backwards compatibility -->
<a id="schemaqueryinfo"></a>
<a id="schema_QueryInfo"></a>
<a id="tocSqueryinfo"></a>
<a id="tocsqueryinfo"></a>

```json
{
  "SelectFields": {}
}
```

Details about the query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SelectFields|object|false|none|none|

<h2 id="tocS_ResourceTypeList">ResourceTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetypelist"></a>
<a id="schema_ResourceTypeList"></a>
<a id="tocSresourcetypelist"></a>
<a id="tocsresourcetypelist"></a>

```json
[
  "AWS::EC2::CustomerGateway"
]
```

<h2 id="tocS_ReevaluateConfigRuleNames">ReevaluateConfigRuleNames</h2>
<!-- backwards compatibility -->
<a id="schemareevaluateconfigrulenames"></a>
<a id="schema_ReevaluateConfigRuleNames"></a>
<a id="tocSreevaluateconfigrulenames"></a>
<a id="tocsreevaluateconfigrulenames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RelatedEvent">RelatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemarelatedevent"></a>
<a id="schema_RelatedEvent"></a>
<a id="tocSrelatedevent"></a>
<a id="tocsrelatedevent"></a>

```json
"string"
```

<h2 id="tocS_RelationshipName">RelationshipName</h2>
<!-- backwards compatibility -->
<a id="schemarelationshipname"></a>
<a id="schema_RelationshipName"></a>
<a id="tocSrelationshipname"></a>
<a id="tocsrelationshipname"></a>

```json
"string"
```

<h2 id="tocS_Relationship">Relationship</h2>
<!-- backwards compatibility -->
<a id="schemarelationship"></a>
<a id="schema_Relationship"></a>
<a id="tocSrelationship"></a>
<a id="tocsrelationship"></a>

```json
{
  "resourceType": {},
  "resourceId": {},
  "resourceName": {},
  "relationshipName": {}
}
```

The relationship of the related resource to the main resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|false|none|none|
|resourceId|object|false|none|none|
|resourceName|object|false|none|none|
|relationshipName|object|false|none|none|

<h2 id="tocS_RemediationTargetType">RemediationTargetType</h2>
<!-- backwards compatibility -->
<a id="schemaremediationtargettype"></a>
<a id="schema_RemediationTargetType"></a>
<a id="tocSremediationtargettype"></a>
<a id="tocsremediationtargettype"></a>

```json
"SSM_DOCUMENT"
```

<h2 id="tocS_RemediationParameters">RemediationParameters</h2>
<!-- backwards compatibility -->
<a id="schemaremediationparameters"></a>
<a id="schema_RemediationParameters"></a>
<a id="tocSremediationparameters"></a>
<a id="tocsremediationparameters"></a>

```json
{
  "property1": {
    "ResourceValue": {
      "Value": {}
    },
    "StaticValue": {
      "Values": {}
    }
  },
  "property2": {
    "ResourceValue": {
      "Value": {}
    },
    "StaticValue": {
      "Values": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[RemediationParameterValue](#schemaremediationparametervalue)|false|none|The value is either a dynamic (resource) value or a static value. You must select either a dynamic value or a static value.|

<h2 id="tocS_RemediationConfiguration">RemediationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaremediationconfiguration"></a>
<a id="schema_RemediationConfiguration"></a>
<a id="tocSremediationconfiguration"></a>
<a id="tocsremediationconfiguration"></a>

```json
{
  "ConfigRuleName": {},
  "TargetType": {},
  "TargetId": {},
  "TargetVersion": {},
  "Parameters": {
    "property1": {
      "ResourceValue": {
        "Value": {}
      },
      "StaticValue": {
        "Values": {}
      }
    },
    "property2": {
      "ResourceValue": {
        "Value": {}
      },
      "StaticValue": {
        "Values": {}
      }
    }
  },
  "ResourceType": {},
  "Automatic": {},
  "ExecutionControls": {
    "SsmControls": {
      "ConcurrentExecutionRatePercentage": {},
      "ErrorPercentage": {}
    }
  },
  "MaximumAutomaticAttempts": {},
  "RetryAttemptSeconds": {},
  "Arn": {},
  "CreatedByService": {}
}
```

An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|true|none|none|
|TargetType|object|true|none|none|
|TargetId|object|true|none|none|
|TargetVersion|object|false|none|none|
|Parameters|object|false|none|none|
|ResourceType|object|false|none|none|
|Automatic|object|false|none|none|
|ExecutionControls|object|false|none|none|
|MaximumAutomaticAttempts|object|false|none|none|
|RetryAttemptSeconds|object|false|none|none|
|Arn|object|false|none|none|
|CreatedByService|object|false|none|none|

<h2 id="tocS_RemediationException">RemediationException</h2>
<!-- backwards compatibility -->
<a id="schemaremediationexception"></a>
<a id="schema_RemediationException"></a>
<a id="tocSremediationexception"></a>
<a id="tocsremediationexception"></a>

```json
{
  "ConfigRuleName": {},
  "ResourceType": {},
  "ResourceId": {},
  "Message": {},
  "ExpirationTime": {}
}
```

An object that represents the details about the remediation exception. The details include the rule name, an explanation of an exception, the time when the exception will be deleted, the resource ID, and resource type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRuleName|object|true|none|none|
|ResourceType|object|true|none|none|
|ResourceId|object|true|none|none|
|Message|object|false|none|none|
|ExpirationTime|object|false|none|none|

<h2 id="tocS_RemediationExceptionResourceKey">RemediationExceptionResourceKey</h2>
<!-- backwards compatibility -->
<a id="schemaremediationexceptionresourcekey"></a>
<a id="schema_RemediationExceptionResourceKey"></a>
<a id="tocSremediationexceptionresourcekey"></a>
<a id="tocsremediationexceptionresourcekey"></a>

```json
{
  "ResourceType": {},
  "ResourceId": {}
}
```

The details that identify a resource within Config, including the resource type and resource ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|false|none|none|
|ResourceId|object|false|none|none|

<h2 id="tocS_RemediationExecutionState">RemediationExecutionState</h2>
<!-- backwards compatibility -->
<a id="schemaremediationexecutionstate"></a>
<a id="schema_RemediationExecutionState"></a>
<a id="tocSremediationexecutionstate"></a>
<a id="tocsremediationexecutionstate"></a>

```json
"QUEUED"
```

<h2 id="tocS_ResourceKey">ResourceKey</h2>
<!-- backwards compatibility -->
<a id="schemaresourcekey"></a>
<a id="schema_ResourceKey"></a>
<a id="tocSresourcekey"></a>
<a id="tocsresourcekey"></a>

```json
{
  "resourceType": {},
  "resourceId": {}
}
```

The details that identify a resource within Config, including the resource type and resource ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|true|none|none|
|resourceId|object|true|none|none|

<h2 id="tocS_RemediationExecutionSteps">RemediationExecutionSteps</h2>
<!-- backwards compatibility -->
<a id="schemaremediationexecutionsteps"></a>
<a id="schema_RemediationExecutionSteps"></a>
<a id="tocSremediationexecutionsteps"></a>
<a id="tocsremediationexecutionsteps"></a>

```json
[
  {
    "Name": {},
    "State": {},
    "ErrorMessage": {},
    "StartTime": {},
    "StopTime": {}
  }
]
```

<h2 id="tocS_RemediationExecutionStatus">RemediationExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaremediationexecutionstatus"></a>
<a id="schema_RemediationExecutionStatus"></a>
<a id="tocSremediationexecutionstatus"></a>
<a id="tocsremediationexecutionstatus"></a>

```json
{
  "ResourceKey": {
    "resourceType": {},
    "resourceId": {}
  },
  "State": {},
  "StepDetails": {},
  "InvocationTime": {},
  "LastUpdatedTime": {}
}
```

Provides details of the current status of the invoked remediation action for that resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceKey|[ResourceKey](#schemaresourcekey)|false|none|The details that identify a resource within Config, including the resource type and resource ID.|
|State|object|false|none|none|
|StepDetails|object|false|none|none|
|InvocationTime|object|false|none|none|
|LastUpdatedTime|object|false|none|none|

<h2 id="tocS_RemediationExecutionStepState">RemediationExecutionStepState</h2>
<!-- backwards compatibility -->
<a id="schemaremediationexecutionstepstate"></a>
<a id="schema_RemediationExecutionStepState"></a>
<a id="tocSremediationexecutionstepstate"></a>
<a id="tocsremediationexecutionstepstate"></a>

```json
"SUCCEEDED"
```

<h2 id="tocS_RemediationExecutionStep">RemediationExecutionStep</h2>
<!-- backwards compatibility -->
<a id="schemaremediationexecutionstep"></a>
<a id="schema_RemediationExecutionStep"></a>
<a id="tocSremediationexecutionstep"></a>
<a id="tocsremediationexecutionstep"></a>

```json
{
  "Name": {},
  "State": {},
  "ErrorMessage": {},
  "StartTime": {},
  "StopTime": {}
}
```

Name of the step from the SSM document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|State|object|false|none|none|
|ErrorMessage|object|false|none|none|
|StartTime|object|false|none|none|
|StopTime|object|false|none|none|

<h2 id="tocS_ResourceValue">ResourceValue</h2>
<!-- backwards compatibility -->
<a id="schemaresourcevalue"></a>
<a id="schema_ResourceValue"></a>
<a id="tocSresourcevalue"></a>
<a id="tocsresourcevalue"></a>

```json
{
  "Value": {}
}
```

The dynamic value of the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|true|none|none|

<h2 id="tocS_StaticValue">StaticValue</h2>
<!-- backwards compatibility -->
<a id="schemastaticvalue"></a>
<a id="schema_StaticValue"></a>
<a id="tocSstaticvalue"></a>
<a id="tocsstaticvalue"></a>

```json
{
  "Values": {}
}
```

The static value of the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Values|object|true|none|none|

<h2 id="tocS_RemediationParameterValue">RemediationParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemaremediationparametervalue"></a>
<a id="schema_RemediationParameterValue"></a>
<a id="tocSremediationparametervalue"></a>
<a id="tocsremediationparametervalue"></a>

```json
{
  "ResourceValue": {
    "Value": {}
  },
  "StaticValue": {
    "Values": {}
  }
}
```

The value is either a dynamic (resource) value or a static value. You must select either a dynamic value or a static value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceValue|object|false|none|none|
|StaticValue|object|false|none|none|

<h2 id="tocS_ResourceConfiguration">ResourceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaresourceconfiguration"></a>
<a id="schema_ResourceConfiguration"></a>
<a id="tocSresourceconfiguration"></a>
<a id="tocsresourceconfiguration"></a>

```json
"string"
```

<h2 id="tocS_ResourceConfigurationSchemaType">ResourceConfigurationSchemaType</h2>
<!-- backwards compatibility -->
<a id="schemaresourceconfigurationschematype"></a>
<a id="schema_ResourceConfigurationSchemaType"></a>
<a id="tocSresourceconfigurationschematype"></a>
<a id="tocsresourceconfigurationschematype"></a>

```json
"CFN_RESOURCE_SCHEMA"
```

<h2 id="tocS_ResourceCount">ResourceCount</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecount"></a>
<a id="schema_ResourceCount"></a>
<a id="tocSresourcecount"></a>
<a id="tocsresourcecount"></a>

```json
{
  "resourceType": {},
  "count": {}
}
```

An object that contains the resource type and the number of resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|false|none|none|
|count|object|false|none|none|

<h2 id="tocS_ResourceDeletionTime">ResourceDeletionTime</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedeletiontime"></a>
<a id="schema_ResourceDeletionTime"></a>
<a id="tocSresourcedeletiontime"></a>
<a id="tocsresourcedeletiontime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ResourceEvaluation">ResourceEvaluation</h2>
<!-- backwards compatibility -->
<a id="schemaresourceevaluation"></a>
<a id="schema_ResourceEvaluation"></a>
<a id="tocSresourceevaluation"></a>
<a id="tocsresourceevaluation"></a>

```json
{
  "ResourceEvaluationId": {},
  "EvaluationMode": {},
  "EvaluationStartTimestamp": {}
}
```

Returns details of a resource evaluation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceEvaluationId|object|false|none|none|
|EvaluationMode|object|false|none|none|
|EvaluationStartTimestamp|object|false|none|none|

<h2 id="tocS_TimeWindow">TimeWindow</h2>
<!-- backwards compatibility -->
<a id="schematimewindow"></a>
<a id="schema_TimeWindow"></a>
<a id="tocStimewindow"></a>
<a id="tocstimewindow"></a>

```json
{
  "StartTime": {},
  "EndTime": {}
}
```

Filters evaluation results based on start and end times.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|

<h2 id="tocS_ResourceIdentifier">ResourceIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidentifier"></a>
<a id="schema_ResourceIdentifier"></a>
<a id="tocSresourceidentifier"></a>
<a id="tocsresourceidentifier"></a>

```json
{
  "resourceType": {},
  "resourceId": {},
  "resourceName": {},
  "resourceDeletionTime": {}
}
```

The details that identify a resource that is discovered by Config, including the resource type, ID, and (if available) the custom resource name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|false|none|none|
|resourceId|object|false|none|none|
|resourceName|object|false|none|none|
|resourceDeletionTime|object|false|none|none|

<h2 id="tocS_ResourceValueType">ResourceValueType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcevaluetype"></a>
<a id="schema_ResourceValueType"></a>
<a id="tocSresourcevaluetype"></a>
<a id="tocsresourcevaluetype"></a>

```json
"RESOURCE_ID"
```

<h2 id="tocS_Results">Results</h2>
<!-- backwards compatibility -->
<a id="schemaresults"></a>
<a id="schema_Results"></a>
<a id="tocSresults"></a>
<a id="tocsresults"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SSMDocumentName">SSMDocumentName</h2>
<!-- backwards compatibility -->
<a id="schemassmdocumentname"></a>
<a id="schema_SSMDocumentName"></a>
<a id="tocSssmdocumentname"></a>
<a id="tocsssmdocumentname"></a>

```json
"string"
```

<h2 id="tocS_SSMDocumentVersion">SSMDocumentVersion</h2>
<!-- backwards compatibility -->
<a id="schemassmdocumentversion"></a>
<a id="schema_SSMDocumentVersion"></a>
<a id="tocSssmdocumentversion"></a>
<a id="tocsssmdocumentversion"></a>

```json
"string"
```

<h2 id="tocS_SourceDetails">SourceDetails</h2>
<!-- backwards compatibility -->
<a id="schemasourcedetails"></a>
<a id="schema_SourceDetails"></a>
<a id="tocSsourcedetails"></a>
<a id="tocssourcedetails"></a>

```json
[
  {
    "EventSource": {},
    "MessageType": {},
    "MaximumExecutionFrequency": {}
  }
]
```

<h2 id="tocS_SourceDetail">SourceDetail</h2>
<!-- backwards compatibility -->
<a id="schemasourcedetail"></a>
<a id="schema_SourceDetail"></a>
<a id="tocSsourcedetail"></a>
<a id="tocssourcedetail"></a>

```json
{
  "EventSource": {},
  "MessageType": {},
  "MaximumExecutionFrequency": {}
}
```

Provides the source and the message types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic. You can specify the parameter values for <code>SourceDetail</code> only for custom rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventSource|object|false|none|none|
|MessageType|object|false|none|none|
|MaximumExecutionFrequency|object|false|none|none|

<h2 id="tocS_StaticParameterValues">StaticParameterValues</h2>
<!-- backwards compatibility -->
<a id="schemastaticparametervalues"></a>
<a id="schema_StaticParameterValues"></a>
<a id="tocSstaticparametervalues"></a>
<a id="tocsstaticparametervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StoredQueryMetadata">StoredQueryMetadata</h2>
<!-- backwards compatibility -->
<a id="schemastoredquerymetadata"></a>
<a id="schema_StoredQueryMetadata"></a>
<a id="tocSstoredquerymetadata"></a>
<a id="tocsstoredquerymetadata"></a>

```json
{
  "QueryId": {},
  "QueryArn": {},
  "QueryName": {},
  "Description": {}
}
```

Returns details of a specific query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryId|object|true|none|none|
|QueryArn|object|true|none|none|
|QueryName|object|true|none|none|
|Description|object|false|none|none|

<h2 id="tocS_SupplementaryConfigurationValue">SupplementaryConfigurationValue</h2>
<!-- backwards compatibility -->
<a id="schemasupplementaryconfigurationvalue"></a>
<a id="schema_SupplementaryConfigurationValue"></a>
<a id="tocSsupplementaryconfigurationvalue"></a>
<a id="tocssupplementaryconfigurationvalue"></a>

```json
"string"
```

<h2 id="tocS_SupplementaryConfigurationName">SupplementaryConfigurationName</h2>
<!-- backwards compatibility -->
<a id="schemasupplementaryconfigurationname"></a>
<a id="schema_SupplementaryConfigurationName"></a>
<a id="tocSsupplementaryconfigurationname"></a>
<a id="tocssupplementaryconfigurationname"></a>

```json
"string"
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

The tags for the resource. The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

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

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
"string"
```
