<h1 id="awsmarketplace-metering">AWSMarketplace Metering v2016-01-14</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>AWS Marketplace Metering Service</fullname> <p>This reference provides descriptions of the low-level AWS Marketplace Metering Service API.</p> <p>AWS Marketplace sellers can use this API to submit usage data for custom usage dimensions.</p> <p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/iam-user-policy-for-aws-marketplace-actions.html">AWS Marketplace metering and entitlement API permissions</a> in the <i>AWS Marketplace Seller Guide.</i> </p> <p> <b>Submitting Metering Records</b> </p> <ul> <li> <p> <i>MeterUsage</i> - Submits the metering record for an AWS Marketplace product. <code>MeterUsage</code> is called from an EC2 instance or a container running on EKS or ECS.</p> </li> <li> <p> <i>BatchMeterUsage</i> - Submits the metering record for a set of customers. <code>BatchMeterUsage</code> is called from a software-as-a-service (SaaS) application.</p> </li> </ul> <p> <b>Accepting New Customers</b> </p> <ul> <li> <p> <i>ResolveCustomer</i> - Called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a Registration Token through the browser. The Registration Token is resolved through this API to obtain a <code>CustomerIdentifier</code> along with the <code>CustomerAWSAccountId</code> and <code>ProductCode</code>.</p> </li> </ul> <p> <b>Entitlement and Metering for Paid Container Products</b> </p> <ul> <li> <p>Paid container software products sold through AWS Marketplace must integrate with the AWS Marketplace Metering Service and call the <code>RegisterUsage</code> operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call <code>RegisterUsage</code>, but you can do so if you want to receive usage data in your seller reports. For more information on using the <code>RegisterUsage</code> operation, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/container-based-products.html">Container-Based Products</a>. </p> </li> </ul> <p> <code>BatchMeterUsage</code> API calls are captured by AWS CloudTrail. You can use Cloudtrail to verify that the SaaS metering records that you sent are accurate by searching for records with the <code>eventName</code> of <code>BatchMeterUsage</code>. You can also use CloudTrail to audit records over time. For more information, see the <i> <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html">AWS CloudTrail User Guide</a>.</i> </p>

Base URLs:

* <a href="http://metering.marketplace.us-east-1.amazonaws.com">http://metering.marketplace.us-east-1.amazonaws.com</a> - The AWSMarketplace Metering multi-region endpoint

* <a href="https://metering.marketplace.us-east-1.amazonaws.com">https://metering.marketplace.us-east-1.amazonaws.com</a> - The AWSMarketplace Metering multi-region endpoint

* <a href="http://metering.marketplace.cn-north-1.amazonaws.com.cn">http://metering.marketplace.cn-north-1.amazonaws.com.cn</a> - The AWSMarketplace Metering endpoint for China (Beijing) and China (Ningxia)

* <a href="https://metering.marketplace.cn-north-1.amazonaws.com.cn">https://metering.marketplace.cn-north-1.amazonaws.com.cn</a> - The AWSMarketplace Metering endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/marketplace/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="awsmarketplace-metering-default">Default</h1>

## BatchMeterUsage

<a id="opIdBatchMeterUsage"></a>

> Code samples

```bash
curl 'https://meteringmarketplace.us-east-1.amazonaws.com/#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMPMeteringService.BatchMeterUsage' \
  -d '{
    "UsageRecords": {},
    "ProductCode": {}
  }'
```

`POST /#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage`

<p> <code>BatchMeterUsage</code> is called from a SaaS application listed on AWS Marketplace to post metering records for a set of customers.</p> <p>For identical requests, the API is idempotent; requests can be retried with the same records or a subset of the input records.</p> <p>Every request to <code>BatchMeterUsage</code> is for one product. If you need to meter usage for multiple products, you must make multiple calls to <code>BatchMeterUsage</code>.</p> <p>Usage records are expected to be submitted as quickly as possible after the event that is being recorded, and are not accepted more than 6 hours after the event.</p> <p> <code>BatchMeterUsage</code> can process up to 25 <code>UsageRecords</code> at a time.</p> <p>A <code>UsageRecord</code> can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define (or allow the customer to define).</p> <p> <code>BatchMeterUsage</code> returns a list of <code>UsageRecordResult</code> objects, showing the result for each <code>UsageRecord</code>, as well as a list of <code>UnprocessedRecords</code>, indicating errors in the service side that you should retry.</p> <p> <code>BatchMeterUsage</code> requests must be less than 1MB in size.</p> <note> <p>For an example of using <code>BatchMeterUsage</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-batchmeterusage-example"> BatchMeterUsage code example</a> in the <i>AWS Marketplace Seller Guide</i>.</p> </note>

> Body parameter

```json
{
  "UsageRecords": {},
  "ProductCode": {}
}
```

<h3 id="batchmeterusage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[BatchMeterUsageRequest](#schemabatchmeterusagerequest)|true|none|
|» UsageRecords|body|object|true|none|
|» ProductCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMPMeteringService.BatchMeterUsage|

> Example responses

> 200 Response

```json
{
  "Results": {},
  "UnprocessedRecords": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="batchmeterusage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchMeterUsageResult](#schemabatchmeterusageresult)|
|480|480|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|481|481|InvalidProductCodeException|[InvalidProductCodeException](#schemainvalidproductcodeexception)|
|482|482|InvalidUsageDimensionException|[InvalidUsageDimensionException](#schemainvalidusagedimensionexception)|
|483|483|InvalidTagException|[InvalidTagException](#schemainvalidtagexception)|
|484|484|InvalidUsageAllocationsException|[InvalidUsageAllocationsException](#schemainvalidusageallocationsexception)|
|485|485|InvalidCustomerIdentifierException|[InvalidCustomerIdentifierException](#schemainvalidcustomeridentifierexception)|
|486|486|TimestampOutOfBoundsException|[TimestampOutOfBoundsException](#schematimestampoutofboundsexception)|
|487|487|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|488|488|DisabledApiException|[DisabledApiException](#schemadisabledapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## MeterUsage

<a id="opIdMeterUsage"></a>

> Code samples

```bash
curl 'https://meteringmarketplace.us-east-1.amazonaws.com/#X-Amz-Target=AWSMPMeteringService.MeterUsage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMPMeteringService.MeterUsage' \
  -d '{
    "ProductCode": {},
    "Timestamp": {},
    "UsageDimension": {},
    "UsageQuantity": {},
    "DryRun": {},
    "UsageAllocations": {}
  }'
```

`POST /#X-Amz-Target=AWSMPMeteringService.MeterUsage`

<p>API to emit metering records. For identical requests, the API is idempotent. It simply returns the metering record ID.</p> <p> <code>MeterUsage</code> is authenticated on the buyer's AWS account using credentials from the EC2 instance, ECS task, or EKS pod.</p> <p> <code>MeterUsage</code> can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define (or allow the customer to define).</p> <p>Usage records are expected to be submitted as quickly as possible after the event that is being recorded, and are not accepted more than 6 hours after the event.</p>

> Body parameter

```json
{
  "ProductCode": {},
  "Timestamp": {},
  "UsageDimension": {},
  "UsageQuantity": {},
  "DryRun": {},
  "UsageAllocations": {}
}
```

<h3 id="meterusage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[MeterUsageRequest](#schemameterusagerequest)|true|none|
|» ProductCode|body|object|true|none|
|» Timestamp|body|object|true|none|
|» UsageDimension|body|object|true|none|
|» UsageQuantity|body|object|false|none|
|» DryRun|body|object|false|none|
|» UsageAllocations|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMPMeteringService.MeterUsage|

> Example responses

> 200 Response

```json
{
  "MeteringRecordId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="meterusage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MeterUsageResult](#schemameterusageresult)|
|480|480|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|481|481|InvalidProductCodeException|[InvalidProductCodeException](#schemainvalidproductcodeexception)|
|482|482|InvalidUsageDimensionException|[InvalidUsageDimensionException](#schemainvalidusagedimensionexception)|
|483|483|InvalidTagException|[InvalidTagException](#schemainvalidtagexception)|
|484|484|InvalidUsageAllocationsException|[InvalidUsageAllocationsException](#schemainvalidusageallocationsexception)|
|485|485|InvalidEndpointRegionException|[InvalidEndpointRegionException](#schemainvalidendpointregionexception)|
|486|486|TimestampOutOfBoundsException|[TimestampOutOfBoundsException](#schematimestampoutofboundsexception)|
|487|487|DuplicateRequestException|[DuplicateRequestException](#schemaduplicaterequestexception)|
|488|488|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|489|489|CustomerNotEntitledException|[CustomerNotEntitledException](#schemacustomernotentitledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterUsage

<a id="opIdRegisterUsage"></a>

> Code samples

```bash
curl 'https://meteringmarketplace.us-east-1.amazonaws.com/#X-Amz-Target=AWSMPMeteringService.RegisterUsage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMPMeteringService.RegisterUsage' \
  -d '{
    "ProductCode": {},
    "PublicKeyVersion": {},
    "Nonce": {}
  }'
```

`POST /#X-Amz-Target=AWSMPMeteringService.RegisterUsage`

<p>Paid container software products sold through AWS Marketplace must integrate with the AWS Marketplace Metering Service and call the <code>RegisterUsage</code> operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call <code>RegisterUsage</code>, but you may choose to do so if you would like to receive usage data in your seller reports. The sections below explain the behavior of <code>RegisterUsage</code>. <code>RegisterUsage</code> performs two primary functions: metering and entitlement.</p> <ul> <li> <p> <i>Entitlement</i>: <code>RegisterUsage</code> allows you to verify that the customer running your paid software is subscribed to your product on AWS Marketplace, enabling you to guard against unauthorized use. Your container image that integrates with <code>RegisterUsage</code> is only required to guard against unauthorized use at container startup, as such a <code>CustomerNotSubscribedException</code> or <code>PlatformNotSupportedException</code> will only be thrown on the initial call to <code>RegisterUsage</code>. Subsequent calls from the same Amazon ECS task instance (e.g. task-id) or Amazon EKS pod will not throw a <code>CustomerNotSubscribedException</code>, even if the customer unsubscribes while the Amazon ECS task or Amazon EKS pod is still running.</p> </li> <li> <p> <i>Metering</i>: <code>RegisterUsage</code> meters software use per ECS task, per hour, or per pod for Amazon EKS with usage prorated to the second. A minimum of 1 minute of usage applies to tasks that are short lived. For example, if a customer has a 10 node Amazon ECS or Amazon EKS cluster and a service configured as a Daemon Set, then Amazon ECS or Amazon EKS will launch a task on all 10 cluster nodes and the customer will be charged: (10 * hourly_rate). Metering for software use is automatically handled by the AWS Marketplace Metering Control Plane -- your software is not required to perform any metering specific actions, other than call <code>RegisterUsage</code> once for metering of software use to commence. The AWS Marketplace Metering Control Plane will also continue to bill customers for running ECS tasks and Amazon EKS pods, regardless of the customers subscription state, removing the need for your software to perform entitlement checks at runtime.</p> </li> </ul>

> Body parameter

```json
{
  "ProductCode": {},
  "PublicKeyVersion": {},
  "Nonce": {}
}
```

<h3 id="registerusage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RegisterUsageRequest](#schemaregisterusagerequest)|true|none|
|» ProductCode|body|object|true|none|
|» PublicKeyVersion|body|object|true|none|
|» Nonce|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMPMeteringService.RegisterUsage|

> Example responses

> 200 Response

```json
{
  "PublicKeyRotationTimestamp": {},
  "Signature": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="registerusage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterUsageResult](#schemaregisterusageresult)|
|480|480|InvalidProductCodeException|[InvalidProductCodeException](#schemainvalidproductcodeexception)|
|481|481|InvalidRegionException|[InvalidRegionException](#schemainvalidregionexception)|
|482|482|InvalidPublicKeyVersionException|[InvalidPublicKeyVersionException](#schemainvalidpublickeyversionexception)|
|483|483|PlatformNotSupportedException|[PlatformNotSupportedException](#schemaplatformnotsupportedexception)|
|484|484|CustomerNotEntitledException|[CustomerNotEntitledException](#schemacustomernotentitledexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|487|487|DisabledApiException|[DisabledApiException](#schemadisabledapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResolveCustomer

<a id="opIdResolveCustomer"></a>

> Code samples

```bash
curl 'https://meteringmarketplace.us-east-1.amazonaws.com/#X-Amz-Target=AWSMPMeteringService.ResolveCustomer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMPMeteringService.ResolveCustomer' \
  -d '{
    "RegistrationToken": {}
  }'
```

`POST /#X-Amz-Target=AWSMPMeteringService.ResolveCustomer`

<p> <code>ResolveCustomer</code> is called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a registration token through their browser. The registration token is resolved through this API to obtain a <code>CustomerIdentifier</code> along with the <code>CustomerAWSAccountId</code> and <code>ProductCode</code>.</p> <note> <p>The API needs to called from the seller account id used to publish the SaaS application to successfully resolve the token.</p> <p>For an example of using <code>ResolveCustomer</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-resolvecustomer-example"> ResolveCustomer code example</a> in the <i>AWS Marketplace Seller Guide</i>.</p> </note>

> Body parameter

```json
{
  "RegistrationToken": {}
}
```

<h3 id="resolvecustomer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ResolveCustomerRequest](#schemaresolvecustomerrequest)|true|none|
|» RegistrationToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMPMeteringService.ResolveCustomer|

> Example responses

> 200 Response

```json
{
  "CustomerIdentifier": {},
  "ProductCode": {},
  "CustomerAWSAccountId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="resolvecustomer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResolveCustomerResult](#schemaresolvecustomerresult)|
|480|480|InvalidTokenException|[InvalidTokenException](#schemainvalidtokenexception)|
|481|481|ExpiredTokenException|[ExpiredTokenException](#schemaexpiredtokenexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|DisabledApiException|[DisabledApiException](#schemadisabledapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BatchMeterUsageResult">BatchMeterUsageResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchmeterusageresult"></a>
<a id="schema_BatchMeterUsageResult"></a>
<a id="tocSbatchmeterusageresult"></a>
<a id="tocsbatchmeterusageresult"></a>

```json
{
  "Results": {},
  "UnprocessedRecords": {}
}
```

Contains the <code>UsageRecords</code> processed by <code>BatchMeterUsage</code> and any records that have failed due to transient error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Results|object|false|none|none|
|UnprocessedRecords|object|false|none|none|

<h2 id="tocS_BatchMeterUsageRequest">BatchMeterUsageRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchmeterusagerequest"></a>
<a id="schema_BatchMeterUsageRequest"></a>
<a id="tocSbatchmeterusagerequest"></a>
<a id="tocsbatchmeterusagerequest"></a>

```json
{
  "UsageRecords": {},
  "ProductCode": {}
}
```

A <code>BatchMeterUsageRequest</code> contains <code>UsageRecords</code>, which indicate quantities of usage within your application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UsageRecords|object|true|none|none|
|ProductCode|object|true|none|none|

<h2 id="tocS_InternalServiceErrorException">InternalServiceErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceerrorexception"></a>
<a id="schema_InternalServiceErrorException"></a>
<a id="tocSinternalserviceerrorexception"></a>
<a id="tocsinternalserviceerrorexception"></a>

```json
null
```

<h2 id="tocS_InvalidProductCodeException">InvalidProductCodeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidproductcodeexception"></a>
<a id="schema_InvalidProductCodeException"></a>
<a id="tocSinvalidproductcodeexception"></a>
<a id="tocsinvalidproductcodeexception"></a>

```json
null
```

<h2 id="tocS_InvalidUsageDimensionException">InvalidUsageDimensionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidusagedimensionexception"></a>
<a id="schema_InvalidUsageDimensionException"></a>
<a id="tocSinvalidusagedimensionexception"></a>
<a id="tocsinvalidusagedimensionexception"></a>

```json
null
```

<h2 id="tocS_InvalidTagException">InvalidTagException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtagexception"></a>
<a id="schema_InvalidTagException"></a>
<a id="tocSinvalidtagexception"></a>
<a id="tocsinvalidtagexception"></a>

```json
null
```

<h2 id="tocS_InvalidUsageAllocationsException">InvalidUsageAllocationsException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidusageallocationsexception"></a>
<a id="schema_InvalidUsageAllocationsException"></a>
<a id="tocSinvalidusageallocationsexception"></a>
<a id="tocsinvalidusageallocationsexception"></a>

```json
null
```

<h2 id="tocS_InvalidCustomerIdentifierException">InvalidCustomerIdentifierException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcustomeridentifierexception"></a>
<a id="schema_InvalidCustomerIdentifierException"></a>
<a id="tocSinvalidcustomeridentifierexception"></a>
<a id="tocsinvalidcustomeridentifierexception"></a>

```json
null
```

<h2 id="tocS_TimestampOutOfBoundsException">TimestampOutOfBoundsException</h2>
<!-- backwards compatibility -->
<a id="schematimestampoutofboundsexception"></a>
<a id="schema_TimestampOutOfBoundsException"></a>
<a id="tocStimestampoutofboundsexception"></a>
<a id="tocstimestampoutofboundsexception"></a>

```json
null
```

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_DisabledApiException">DisabledApiException</h2>
<!-- backwards compatibility -->
<a id="schemadisabledapiexception"></a>
<a id="schema_DisabledApiException"></a>
<a id="tocSdisabledapiexception"></a>
<a id="tocsdisabledapiexception"></a>

```json
null
```

<h2 id="tocS_MeterUsageResult">MeterUsageResult</h2>
<!-- backwards compatibility -->
<a id="schemameterusageresult"></a>
<a id="schema_MeterUsageResult"></a>
<a id="tocSmeterusageresult"></a>
<a id="tocsmeterusageresult"></a>

```json
{
  "MeteringRecordId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MeteringRecordId|object|false|none|none|

<h2 id="tocS_MeterUsageRequest">MeterUsageRequest</h2>
<!-- backwards compatibility -->
<a id="schemameterusagerequest"></a>
<a id="schema_MeterUsageRequest"></a>
<a id="tocSmeterusagerequest"></a>
<a id="tocsmeterusagerequest"></a>

```json
{
  "ProductCode": {},
  "Timestamp": {},
  "UsageDimension": {},
  "UsageQuantity": {},
  "DryRun": {},
  "UsageAllocations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductCode|object|true|none|none|
|Timestamp|object|true|none|none|
|UsageDimension|object|true|none|none|
|UsageQuantity|object|false|none|none|
|DryRun|object|false|none|none|
|UsageAllocations|object|false|none|none|

<h2 id="tocS_InvalidEndpointRegionException">InvalidEndpointRegionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidendpointregionexception"></a>
<a id="schema_InvalidEndpointRegionException"></a>
<a id="tocSinvalidendpointregionexception"></a>
<a id="tocsinvalidendpointregionexception"></a>

```json
null
```

<h2 id="tocS_DuplicateRequestException">DuplicateRequestException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicaterequestexception"></a>
<a id="schema_DuplicateRequestException"></a>
<a id="tocSduplicaterequestexception"></a>
<a id="tocsduplicaterequestexception"></a>

```json
null
```

<h2 id="tocS_CustomerNotEntitledException">CustomerNotEntitledException</h2>
<!-- backwards compatibility -->
<a id="schemacustomernotentitledexception"></a>
<a id="schema_CustomerNotEntitledException"></a>
<a id="tocScustomernotentitledexception"></a>
<a id="tocscustomernotentitledexception"></a>

```json
null
```

<h2 id="tocS_RegisterUsageResult">RegisterUsageResult</h2>
<!-- backwards compatibility -->
<a id="schemaregisterusageresult"></a>
<a id="schema_RegisterUsageResult"></a>
<a id="tocSregisterusageresult"></a>
<a id="tocsregisterusageresult"></a>

```json
{
  "PublicKeyRotationTimestamp": {},
  "Signature": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublicKeyRotationTimestamp|object|false|none|none|
|Signature|object|false|none|none|

<h2 id="tocS_RegisterUsageRequest">RegisterUsageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterusagerequest"></a>
<a id="schema_RegisterUsageRequest"></a>
<a id="tocSregisterusagerequest"></a>
<a id="tocsregisterusagerequest"></a>

```json
{
  "ProductCode": {},
  "PublicKeyVersion": {},
  "Nonce": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductCode|object|true|none|none|
|PublicKeyVersion|object|true|none|none|
|Nonce|object|false|none|none|

<h2 id="tocS_InvalidRegionException">InvalidRegionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidregionexception"></a>
<a id="schema_InvalidRegionException"></a>
<a id="tocSinvalidregionexception"></a>
<a id="tocsinvalidregionexception"></a>

```json
null
```

<h2 id="tocS_InvalidPublicKeyVersionException">InvalidPublicKeyVersionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpublickeyversionexception"></a>
<a id="schema_InvalidPublicKeyVersionException"></a>
<a id="tocSinvalidpublickeyversionexception"></a>
<a id="tocsinvalidpublickeyversionexception"></a>

```json
null
```

<h2 id="tocS_PlatformNotSupportedException">PlatformNotSupportedException</h2>
<!-- backwards compatibility -->
<a id="schemaplatformnotsupportedexception"></a>
<a id="schema_PlatformNotSupportedException"></a>
<a id="tocSplatformnotsupportedexception"></a>
<a id="tocsplatformnotsupportedexception"></a>

```json
null
```

<h2 id="tocS_ResolveCustomerResult">ResolveCustomerResult</h2>
<!-- backwards compatibility -->
<a id="schemaresolvecustomerresult"></a>
<a id="schema_ResolveCustomerResult"></a>
<a id="tocSresolvecustomerresult"></a>
<a id="tocsresolvecustomerresult"></a>

```json
{
  "CustomerIdentifier": {},
  "ProductCode": {},
  "CustomerAWSAccountId": {}
}
```

The result of the <code>ResolveCustomer</code> operation. Contains the <code>CustomerIdentifier</code> along with the <code>CustomerAWSAccountId</code> and <code>ProductCode</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomerIdentifier|object|false|none|none|
|ProductCode|object|false|none|none|
|CustomerAWSAccountId|object|false|none|none|

<h2 id="tocS_ResolveCustomerRequest">ResolveCustomerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresolvecustomerrequest"></a>
<a id="schema_ResolveCustomerRequest"></a>
<a id="tocSresolvecustomerrequest"></a>
<a id="tocsresolvecustomerrequest"></a>

```json
{
  "RegistrationToken": {}
}
```

Contains input to the <code>ResolveCustomer</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegistrationToken|object|true|none|none|

<h2 id="tocS_InvalidTokenException">InvalidTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtokenexception"></a>
<a id="schema_InvalidTokenException"></a>
<a id="tocSinvalidtokenexception"></a>
<a id="tocsinvalidtokenexception"></a>

```json
null
```

<h2 id="tocS_ExpiredTokenException">ExpiredTokenException</h2>
<!-- backwards compatibility -->
<a id="schemaexpiredtokenexception"></a>
<a id="schema_ExpiredTokenException"></a>
<a id="tocSexpiredtokenexception"></a>
<a id="tocsexpiredtokenexception"></a>

```json
null
```

<h2 id="tocS_AllocatedUsageQuantity">AllocatedUsageQuantity</h2>
<!-- backwards compatibility -->
<a id="schemaallocatedusagequantity"></a>
<a id="schema_AllocatedUsageQuantity"></a>
<a id="tocSallocatedusagequantity"></a>
<a id="tocsallocatedusagequantity"></a>

```json
0
```

<h2 id="tocS_UsageRecordList">UsageRecordList</h2>
<!-- backwards compatibility -->
<a id="schemausagerecordlist"></a>
<a id="schema_UsageRecordList"></a>
<a id="tocSusagerecordlist"></a>
<a id="tocsusagerecordlist"></a>

```json
[
  {
    "Timestamp": {},
    "CustomerIdentifier": {},
    "Dimension": {},
    "Quantity": {},
    "UsageAllocations": {}
  }
]
```

<h2 id="tocS_ProductCode">ProductCode</h2>
<!-- backwards compatibility -->
<a id="schemaproductcode"></a>
<a id="schema_ProductCode"></a>
<a id="tocSproductcode"></a>
<a id="tocsproductcode"></a>

```json
"string"
```

<h2 id="tocS_UsageRecordResultList">UsageRecordResultList</h2>
<!-- backwards compatibility -->
<a id="schemausagerecordresultlist"></a>
<a id="schema_UsageRecordResultList"></a>
<a id="tocSusagerecordresultlist"></a>
<a id="tocsusagerecordresultlist"></a>

```json
[
  {
    "UsageRecord": {
      "Timestamp": {},
      "CustomerIdentifier": {},
      "Dimension": {},
      "Quantity": {},
      "UsageAllocations": {}
    },
    "MeteringRecordId": {},
    "Status": {}
  }
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

<h2 id="tocS_CustomerAWSAccountId">CustomerAWSAccountId</h2>
<!-- backwards compatibility -->
<a id="schemacustomerawsaccountid"></a>
<a id="schema_CustomerAWSAccountId"></a>
<a id="tocScustomerawsaccountid"></a>
<a id="tocscustomerawsaccountid"></a>

```json
"string"
```

<h2 id="tocS_CustomerIdentifier">CustomerIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemacustomeridentifier"></a>
<a id="schema_CustomerIdentifier"></a>
<a id="tocScustomeridentifier"></a>
<a id="tocscustomeridentifier"></a>

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

<h2 id="tocS_UsageDimension">UsageDimension</h2>
<!-- backwards compatibility -->
<a id="schemausagedimension"></a>
<a id="schema_UsageDimension"></a>
<a id="tocSusagedimension"></a>
<a id="tocsusagedimension"></a>

```json
"string"
```

<h2 id="tocS_UsageQuantity">UsageQuantity</h2>
<!-- backwards compatibility -->
<a id="schemausagequantity"></a>
<a id="schema_UsageQuantity"></a>
<a id="tocSusagequantity"></a>
<a id="tocsusagequantity"></a>

```json
0
```

<h2 id="tocS_UsageAllocations">UsageAllocations</h2>
<!-- backwards compatibility -->
<a id="schemausageallocations"></a>
<a id="schema_UsageAllocations"></a>
<a id="tocSusageallocations"></a>
<a id="tocsusageallocations"></a>

```json
[
  {
    "AllocatedUsageQuantity": {},
    "Tags": {}
  }
]
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

<h2 id="tocS_NonEmptyString">NonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystring"></a>
<a id="schema_NonEmptyString"></a>
<a id="tocSnonemptystring"></a>
<a id="tocsnonemptystring"></a>

```json
"string"
```

<h2 id="tocS_Nonce">Nonce</h2>
<!-- backwards compatibility -->
<a id="schemanonce"></a>
<a id="schema_Nonce"></a>
<a id="tocSnonce"></a>
<a id="tocsnonce"></a>

```json
"string"
```

<h2 id="tocS_VersionInteger">VersionInteger</h2>
<!-- backwards compatibility -->
<a id="schemaversioninteger"></a>
<a id="schema_VersionInteger"></a>
<a id="tocSversioninteger"></a>
<a id="tocsversioninteger"></a>

```json
1
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

Metadata assigned to an allocation. Each tag is made up of a <code>key</code> and a <code>value</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

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

<h2 id="tocS_UsageAllocation">UsageAllocation</h2>
<!-- backwards compatibility -->
<a id="schemausageallocation"></a>
<a id="schema_UsageAllocation"></a>
<a id="tocSusageallocation"></a>
<a id="tocsusageallocation"></a>

```json
{
  "AllocatedUsageQuantity": {},
  "Tags": {}
}
```

<p>Usage allocations allow you to split usage into buckets by tags.</p> <p>Each <code>UsageAllocation</code> indicates the usage quantity for a specific set of tags.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllocatedUsageQuantity|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_UsageRecord">UsageRecord</h2>
<!-- backwards compatibility -->
<a id="schemausagerecord"></a>
<a id="schema_UsageRecord"></a>
<a id="tocSusagerecord"></a>
<a id="tocsusagerecord"></a>

```json
{
  "Timestamp": {},
  "CustomerIdentifier": {},
  "Dimension": {},
  "Quantity": {},
  "UsageAllocations": {}
}
```

<p>A <code>UsageRecord</code> indicates a quantity of usage for a given product, customer, dimension and time.</p> <p>Multiple requests with the same <code>UsageRecords</code> as input will be de-duplicated to prevent double charges.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timestamp|object|true|none|none|
|CustomerIdentifier|object|true|none|none|
|Dimension|object|true|none|none|
|Quantity|object|false|none|none|
|UsageAllocations|object|false|none|none|

<h2 id="tocS_UsageRecordResultStatus">UsageRecordResultStatus</h2>
<!-- backwards compatibility -->
<a id="schemausagerecordresultstatus"></a>
<a id="schema_UsageRecordResultStatus"></a>
<a id="tocSusagerecordresultstatus"></a>
<a id="tocsusagerecordresultstatus"></a>

```json
"Success"
```

<h2 id="tocS_UsageRecordResult">UsageRecordResult</h2>
<!-- backwards compatibility -->
<a id="schemausagerecordresult"></a>
<a id="schema_UsageRecordResult"></a>
<a id="tocSusagerecordresult"></a>
<a id="tocsusagerecordresult"></a>

```json
{
  "UsageRecord": {
    "Timestamp": {},
    "CustomerIdentifier": {},
    "Dimension": {},
    "Quantity": {},
    "UsageAllocations": {}
  },
  "MeteringRecordId": {},
  "Status": {}
}
```

A <code>UsageRecordResult</code> indicates the status of a given <code>UsageRecord</code> processed by <code>BatchMeterUsage</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UsageRecord|object|false|none|none|
|MeteringRecordId|object|false|none|none|
|Status|object|false|none|none|
