<h1 id="amazon-cloudhsm">Amazon CloudHSM v2014-05-30</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>AWS CloudHSM Service</fullname> <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p>

Base URLs:

* <a href="http://cloudhsm.us-east-1.amazonaws.com">http://cloudhsm.us-east-1.amazonaws.com</a> - The CloudHSM multi-region endpoint

* <a href="https://cloudhsm.us-east-1.amazonaws.com">https://cloudhsm.us-east-1.amazonaws.com</a> - The CloudHSM multi-region endpoint

* <a href="http://cloudhsm.cn-north-1.amazonaws.com.cn">http://cloudhsm.cn-north-1.amazonaws.com.cn</a> - The CloudHSM endpoint for China (Beijing) and China (Ningxia)

* <a href="https://cloudhsm.cn-north-1.amazonaws.com.cn">https://cloudhsm.cn-north-1.amazonaws.com.cn</a> - The CloudHSM endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/cloudhsm/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-cloudhsm-default">Default</h1>

## AddTagsToResource

<a id="opIdAddTagsToResource"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.AddTagsToResource' \
  -d '{
    "ResourceArn": {},
    "TagList": {}
  }'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Adds or overwrites one or more tags for the specified AWS CloudHSM resource.</p> <p>Each tag consists of a key and a value. Tag keys must be unique to each resource.</p>

> Body parameter

```json
{
  "ResourceArn": {},
  "TagList": {}
}
```

<h3 id="addtagstoresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AddTagsToResourceRequest](#schemaaddtagstoresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|
|» TagList|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.AddTagsToResource|

> Example responses

> 200 Response

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

<h3 id="addtagstoresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddTagsToResourceResponse](#schemaaddtagstoresourceresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|481|481|CloudHsmInternalException|[CloudHsmInternalException](#schemacloudhsminternalexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateHapg

<a id="opIdCreateHapg"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.CreateHapg' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.CreateHapg' \
  -d '{
    "Label": {}
  }'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.CreateHapg`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates a high-availability partition group. A high-availability partition group is a group of partitions that spans multiple physical HSMs.</p>

> Body parameter

```json
{
  "Label": {}
}
```

<h3 id="createhapg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateHapgRequest](#schemacreatehapgrequest)|true|none|
|» Label|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.CreateHapg|

> Example responses

> 200 Response

```json
{
  "HapgArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="createhapg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateHapgResponse](#schemacreatehapgresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|481|481|CloudHsmInternalException|[CloudHsmInternalException](#schemacloudhsminternalexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateHsm

<a id="opIdCreateHsm"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.CreateHsm' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.CreateHsm' \
  -d '{
    "SubnetId": {},
    "SshKey": {},
    "EniIp": {},
    "IamRoleArn": {},
    "ExternalId": {},
    "SubscriptionType": "PRODUCTION",
    "ClientToken": {},
    "SyslogIp": {}
  }'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.CreateHsm`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates an uninitialized HSM instance.</p> <p>There is an upfront fee charged for each HSM instance that you create with the <code>CreateHsm</code> operation. If you accidentally provision an HSM and want to request a refund, delete the instance using the <a>DeleteHsm</a> operation, go to the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a>, create a new case, and select <b>Account and Billing Support</b>.</p> <important> <p>It can take up to 20 minutes to create and provision an HSM. You can monitor the status of the HSM with the <a>DescribeHsm</a> operation. The HSM is ready to be initialized when the status changes to <code>RUNNING</code>.</p> </important>

> Body parameter

```json
{
  "SubnetId": {},
  "SshKey": {},
  "EniIp": {},
  "IamRoleArn": {},
  "ExternalId": {},
  "SubscriptionType": "PRODUCTION",
  "ClientToken": {},
  "SyslogIp": {}
}
```

<h3 id="createhsm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateHsmRequest](#schemacreatehsmrequest)|true|none|
|» SubnetId|body|object|true|none|
|» SshKey|body|object|true|none|
|» EniIp|body|object|false|none|
|» IamRoleArn|body|object|true|none|
|» ExternalId|body|object|false|none|
|» SubscriptionType|body|[SubscriptionType](#schemasubscriptiontype)|true|<p>Specifies the type of subscription for the HSM.</p> <ul> <li> <p> <b>PRODUCTION</b> - The HSM is being used in a production environment.</p> </li> <li> <p> <b>TRIAL</b> - The HSM is being used in a product trial.</p> </li> </ul>|
|» ClientToken|body|object|false|none|
|» SyslogIp|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.CreateHsm|
|» SubscriptionType|PRODUCTION|

> Example responses

> 200 Response

```json
{
  "HsmArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="createhsm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateHsmResponse](#schemacreatehsmresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|481|481|CloudHsmInternalException|[CloudHsmInternalException](#schemacloudhsminternalexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLunaClient

<a id="opIdCreateLunaClient"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.CreateLunaClient' \
  -d '{
    "Label": {},
    "Certificate": {}
  }'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates an HSM client.</p>

> Body parameter

```json
{
  "Label": {},
  "Certificate": {}
}
```

<h3 id="createlunaclient-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateLunaClientRequest](#schemacreatelunaclientrequest)|true|none|
|» Label|body|object|false|none|
|» Certificate|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.CreateLunaClient|

> Example responses

> 200 Response

```json
{
  "ClientArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="createlunaclient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLunaClientResponse](#schemacreatelunaclientresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|481|481|CloudHsmInternalException|[CloudHsmInternalException](#schemacloudhsminternalexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteHapg

<a id="opIdDeleteHapg"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.DeleteHapg' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.DeleteHapg' \
  -d '{
    "HapgArn": {}
  }'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.DeleteHapg`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes a high-availability partition group.</p>

> Body parameter

```json
{
  "HapgArn": {}
}
```

<h3 id="deletehapg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteHapgRequest](#schemadeletehapgrequest)|true|none|
|» HapgArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.DeleteHapg|

> Example responses

> 200 Response

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

<h3 id="deletehapg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteHapgResponse](#schemadeletehapgresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|481|481|CloudHsmInternalException|[CloudHsmInternalException](#schemacloudhsminternalexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteHsm

<a id="opIdDeleteHsm"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.DeleteHsm' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.DeleteHsm' \
  -d '{
    "HsmArn": {}
  }'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.DeleteHsm`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes an HSM. After completion, this operation cannot be undone and your key material cannot be recovered.</p>

> Body parameter

```json
{
  "HsmArn": {}
}
```

<h3 id="deletehsm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteHsmRequest](#schemadeletehsmrequest)|true|none|
|» HsmArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.DeleteHsm|

> Example responses

> 200 Response

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

<h3 id="deletehsm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteHsmResponse](#schemadeletehsmresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|481|481|CloudHsmInternalException|[CloudHsmInternalException](#schemacloudhsminternalexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLunaClient

<a id="opIdDeleteLunaClient"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.DeleteLunaClient' \
  -d '{
    "ClientArn": {}
  }'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes a client.</p>

> Body parameter

```json
{
  "ClientArn": {}
}
```

<h3 id="deletelunaclient-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteLunaClientRequest](#schemadeletelunaclientrequest)|true|none|
|» ClientArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.DeleteLunaClient|

> Example responses

> 200 Response

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

<h3 id="deletelunaclient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLunaClientResponse](#schemadeletelunaclientresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|481|481|CloudHsmInternalException|[CloudHsmInternalException](#schemacloudhsminternalexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeHapg

<a id="opIdDescribeHapg"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.DescribeHapg' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.DescribeHapg' \
  -d '{
    "HapgArn": {}
  }'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.DescribeHapg`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about a high-availability partition group.</p>

> Body parameter

```json
{
  "HapgArn": {}
}
```

<h3 id="describehapg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeHapgRequest](#schemadescribehapgrequest)|true|none|
|» HapgArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.DescribeHapg|

> Example responses

> 200 Response

```json
{
  "HapgArn": {},
  "HapgSerial": {},
  "HsmsLastActionFailed": {},
  "HsmsPendingDeletion": {},
  "HsmsPendingRegistration": {},
  "Label": {},
  "LastModifiedTimestamp": {},
  "PartitionSerialList": {},
  "State": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="describehapg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeHapgResponse](#schemadescribehapgresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|481|481|CloudHsmInternalException|[CloudHsmInternalException](#schemacloudhsminternalexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeHsm

<a id="opIdDescribeHsm"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.DescribeHsm' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.DescribeHsm' \
  -d '{
    "HsmArn": {},
    "HsmSerialNumber": {}
  }'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.DescribeHsm`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about an HSM. You can identify the HSM by its ARN or its serial number.</p>

> Body parameter

```json
{
  "HsmArn": {},
  "HsmSerialNumber": {}
}
```

<h3 id="describehsm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeHsmRequest](#schemadescribehsmrequest)|true|none|
|» HsmArn|body|object|false|none|
|» HsmSerialNumber|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.DescribeHsm|

> Example responses

> 200 Response

```json
{
  "HsmArn": {},
  "Status": {},
  "StatusDetails": {},
  "AvailabilityZone": {},
  "EniId": {},
  "EniIp": {},
  "SubscriptionType": "PRODUCTION",
  "SubscriptionStartDate": {},
  "SubscriptionEndDate": {},
  "VpcId": {},
  "SubnetId": {},
  "IamRoleArn": {},
  "SerialNumber": {},
  "VendorName": {},
  "HsmType": {},
  "SoftwareVersion": {},
  "SshPublicKey": {},
  "SshKeyLastUpdated": {},
  "ServerCertUri": {},
  "ServerCertLastUpdated": {},
  "Partitions": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="describehsm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeHsmResponse](#schemadescribehsmresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|481|481|CloudHsmInternalException|[CloudHsmInternalException](#schemacloudhsminternalexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLunaClient

<a id="opIdDescribeLunaClient"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.DescribeLunaClient' \
  -d '{
    "ClientArn": {},
    "CertificateFingerprint": {}
  }'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about an HSM client.</p>

> Body parameter

```json
{
  "ClientArn": {},
  "CertificateFingerprint": {}
}
```

<h3 id="describelunaclient-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeLunaClientRequest](#schemadescribelunaclientrequest)|true|none|
|» ClientArn|body|object|false|none|
|» CertificateFingerprint|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.DescribeLunaClient|

> Example responses

> 200 Response

```json
{
  "ClientArn": {},
  "Certificate": {},
  "CertificateFingerprint": {},
  "LastModifiedTimestamp": {},
  "Label": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="describelunaclient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLunaClientResponse](#schemadescribelunaclientresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|481|481|CloudHsmInternalException|[CloudHsmInternalException](#schemacloudhsminternalexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConfig

<a id="opIdGetConfig"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.GetConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.GetConfig' \
  -d '{
    "ClientArn": {},
    "ClientVersion": {},
    "HapgList": {}
  }'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.GetConfig`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Gets the configuration files necessary to connect to all high availability partition groups the client is associated with.</p>

> Body parameter

```json
{
  "ClientArn": {},
  "ClientVersion": {},
  "HapgList": {}
}
```

<h3 id="getconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetConfigRequest](#schemagetconfigrequest)|true|none|
|» ClientArn|body|object|true|none|
|» ClientVersion|body|object|true|none|
|» HapgList|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.GetConfig|

> Example responses

> 200 Response

```json
{
  "ConfigType": {},
  "ConfigFile": {},
  "ConfigCred": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConfigResponse](#schemagetconfigresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|481|481|CloudHsmInternalException|[CloudHsmInternalException](#schemacloudhsminternalexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAvailableZones

<a id="opIdListAvailableZones"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.ListAvailableZones' \
  -d '{}'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists the Availability Zones that have available AWS CloudHSM capacity.</p>

> Body parameter

```json
{}
```

<h3 id="listavailablezones-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListAvailableZonesRequest](#schemalistavailablezonesrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.ListAvailableZones|

> Example responses

> 200 Response

```json
{
  "AZList": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listavailablezones-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAvailableZonesResponse](#schemalistavailablezonesresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|481|481|CloudHsmInternalException|[CloudHsmInternalException](#schemacloudhsminternalexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListHapgs

<a id="opIdListHapgs"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.ListHapgs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.ListHapgs' \
  -d '{
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.ListHapgs`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists the high-availability partition groups for the account.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListHapgs</code> to retrieve the next set of items.</p>

> Body parameter

```json
{
  "NextToken": {}
}
```

<h3 id="listhapgs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListHapgsRequest](#schemalisthapgsrequest)|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.ListHapgs|

> Example responses

> 200 Response

```json
{
  "HapgList": {},
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

<h3 id="listhapgs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListHapgsResponse](#schemalisthapgsresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|481|481|CloudHsmInternalException|[CloudHsmInternalException](#schemacloudhsminternalexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListHsms

<a id="opIdListHsms"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.ListHsms' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.ListHsms' \
  -d '{
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.ListHsms`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves the identifiers of all of the HSMs provisioned for the current customer.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListHsms</code> to retrieve the next set of items.</p>

> Body parameter

```json
{
  "NextToken": {}
}
```

<h3 id="listhsms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListHsmsRequest](#schemalisthsmsrequest)|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.ListHsms|

> Example responses

> 200 Response

```json
{
  "HsmList": {},
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

<h3 id="listhsms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListHsmsResponse](#schemalisthsmsresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|481|481|CloudHsmInternalException|[CloudHsmInternalException](#schemacloudhsminternalexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLunaClients

<a id="opIdListLunaClients"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.ListLunaClients' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.ListLunaClients' \
  -d '{
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.ListLunaClients`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists all of the clients.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListLunaClients</code> to retrieve the next set of items.</p>

> Body parameter

```json
{
  "NextToken": {}
}
```

<h3 id="listlunaclients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListLunaClientsRequest](#schemalistlunaclientsrequest)|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.ListLunaClients|

> Example responses

> 200 Response

```json
{
  "ClientList": {},
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

<h3 id="listlunaclients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLunaClientsResponse](#schemalistlunaclientsresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|481|481|CloudHsmInternalException|[CloudHsmInternalException](#schemacloudhsminternalexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.ListTagsForResource' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Returns a list of all tags for the specified AWS CloudHSM resource.</p>

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
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "TagList": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|481|481|CloudHsmInternalException|[CloudHsmInternalException](#schemacloudhsminternalexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyHapg

<a id="opIdModifyHapg"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.ModifyHapg' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.ModifyHapg' \
  -d '{
    "HapgArn": {},
    "Label": {},
    "PartitionSerialList": {}
  }'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.ModifyHapg`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies an existing high-availability partition group.</p>

> Body parameter

```json
{
  "HapgArn": {},
  "Label": {},
  "PartitionSerialList": {}
}
```

<h3 id="modifyhapg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ModifyHapgRequest](#schemamodifyhapgrequest)|true|none|
|» HapgArn|body|object|true|none|
|» Label|body|object|false|none|
|» PartitionSerialList|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.ModifyHapg|

> Example responses

> 200 Response

```json
{
  "HapgArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="modifyhapg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyHapgResponse](#schemamodifyhapgresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|481|481|CloudHsmInternalException|[CloudHsmInternalException](#schemacloudhsminternalexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyHsm

<a id="opIdModifyHsm"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.ModifyHsm' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.ModifyHsm' \
  -d '{
    "HsmArn": {},
    "SubnetId": {},
    "EniIp": {},
    "IamRoleArn": {},
    "ExternalId": {},
    "SyslogIp": {}
  }'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.ModifyHsm`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies an HSM.</p> <important> <p>This operation can result in the HSM being offline for up to 15 minutes while the AWS CloudHSM service is reconfigured. If you are modifying a production HSM, you should ensure that your AWS CloudHSM service is configured for high availability, and consider executing this operation during a maintenance window.</p> </important>

> Body parameter

```json
{
  "HsmArn": {},
  "SubnetId": {},
  "EniIp": {},
  "IamRoleArn": {},
  "ExternalId": {},
  "SyslogIp": {}
}
```

<h3 id="modifyhsm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ModifyHsmRequest](#schemamodifyhsmrequest)|true|none|
|» HsmArn|body|object|true|none|
|» SubnetId|body|object|false|none|
|» EniIp|body|object|false|none|
|» IamRoleArn|body|object|false|none|
|» ExternalId|body|object|false|none|
|» SyslogIp|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.ModifyHsm|

> Example responses

> 200 Response

```json
{
  "HsmArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="modifyhsm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyHsmResponse](#schemamodifyhsmresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|481|481|CloudHsmInternalException|[CloudHsmInternalException](#schemacloudhsminternalexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyLunaClient

<a id="opIdModifyLunaClient"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.ModifyLunaClient' \
  -d '{
    "ClientArn": {},
    "Certificate": {}
  }'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies the certificate used by the client.</p> <p>This action can potentially start a workflow to install the new certificate on the client's HSMs.</p>

> Body parameter

```json
{
  "ClientArn": {},
  "Certificate": {}
}
```

<h3 id="modifylunaclient-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ModifyLunaClientRequest](#schemamodifylunaclientrequest)|true|none|
|» ClientArn|body|object|true|none|
|» Certificate|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.ModifyLunaClient|

> Example responses

> 200 Response

```json
{
  "ClientArn": {}
}
```

> 480 Response

```json
null
```

<h3 id="modifylunaclient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyLunaClientResponse](#schemamodifylunaclientresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveTagsFromResource

<a id="opIdRemoveTagsFromResource"></a>

> Code samples

```bash
curl 'https://cloudhsm.us-east-1.amazonaws.com/#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CloudHsmFrontendService.RemoveTagsFromResource' \
  -d '{
    "ResourceArn": {},
    "TagKeyList": {}
  }'
```

`POST /#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource`

<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Removes one or more tags from the specified AWS CloudHSM resource.</p> <p>To remove a tag, specify only the tag key to remove (not the value). To overwrite the value for an existing tag, use <a>AddTagsToResource</a>.</p>

> Body parameter

```json
{
  "ResourceArn": {},
  "TagKeyList": {}
}
```

<h3 id="removetagsfromresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RemoveTagsFromResourceRequest](#schemaremovetagsfromresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|
|» TagKeyList|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CloudHsmFrontendService.RemoveTagsFromResource|

> Example responses

> 200 Response

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

<h3 id="removetagsfromresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveTagsFromResourceResponse](#schemaremovetagsfromresourceresponse)|
|480|480|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|481|481|CloudHsmInternalException|[CloudHsmInternalException](#schemacloudhsminternalexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddTagsToResourceResponse">AddTagsToResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagstoresourceresponse"></a>
<a id="schema_AddTagsToResourceResponse"></a>
<a id="tocSaddtagstoresourceresponse"></a>
<a id="tocsaddtagstoresourceresponse"></a>

```json
{
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_AddTagsToResourceRequest">AddTagsToResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagstoresourcerequest"></a>
<a id="schema_AddTagsToResourceRequest"></a>
<a id="tocSaddtagstoresourcerequest"></a>
<a id="tocsaddtagstoresourcerequest"></a>

```json
{
  "ResourceArn": {},
  "TagList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|TagList|object|true|none|none|

<h2 id="tocS_CloudHsmServiceException">CloudHsmServiceException</h2>
<!-- backwards compatibility -->
<a id="schemacloudhsmserviceexception"></a>
<a id="schema_CloudHsmServiceException"></a>
<a id="tocScloudhsmserviceexception"></a>
<a id="tocscloudhsmserviceexception"></a>

```json
null
```

<h2 id="tocS_CloudHsmInternalException">CloudHsmInternalException</h2>
<!-- backwards compatibility -->
<a id="schemacloudhsminternalexception"></a>
<a id="schema_CloudHsmInternalException"></a>
<a id="tocScloudhsminternalexception"></a>
<a id="tocscloudhsminternalexception"></a>

```json
null
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

<h2 id="tocS_CreateHapgResponse">CreateHapgResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatehapgresponse"></a>
<a id="schema_CreateHapgResponse"></a>
<a id="tocScreatehapgresponse"></a>
<a id="tocscreatehapgresponse"></a>

```json
{
  "HapgArn": {}
}
```

Contains the output of the <a>CreateHAPartitionGroup</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HapgArn|object|false|none|none|

<h2 id="tocS_CreateHapgRequest">CreateHapgRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatehapgrequest"></a>
<a id="schema_CreateHapgRequest"></a>
<a id="tocScreatehapgrequest"></a>
<a id="tocscreatehapgrequest"></a>

```json
{
  "Label": {}
}
```

Contains the inputs for the <a>CreateHapgRequest</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Label|object|true|none|none|

<h2 id="tocS_CreateHsmResponse">CreateHsmResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatehsmresponse"></a>
<a id="schema_CreateHsmResponse"></a>
<a id="tocScreatehsmresponse"></a>
<a id="tocscreatehsmresponse"></a>

```json
{
  "HsmArn": {}
}
```

Contains the output of the <code>CreateHsm</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HsmArn|object|false|none|none|

<h2 id="tocS_CreateHsmRequest">CreateHsmRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatehsmrequest"></a>
<a id="schema_CreateHsmRequest"></a>
<a id="tocScreatehsmrequest"></a>
<a id="tocscreatehsmrequest"></a>

```json
{
  "SubnetId": {},
  "SshKey": {},
  "EniIp": {},
  "IamRoleArn": {},
  "ExternalId": {},
  "SubscriptionType": "PRODUCTION",
  "ClientToken": {},
  "SyslogIp": {}
}
```

Contains the inputs for the <code>CreateHsm</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetId|object|true|none|none|
|SshKey|object|true|none|none|
|EniIp|object|false|none|none|
|IamRoleArn|object|true|none|none|
|ExternalId|object|false|none|none|
|SubscriptionType|[SubscriptionType](#schemasubscriptiontype)|true|none|<p>Specifies the type of subscription for the HSM.</p> <ul> <li> <p> <b>PRODUCTION</b> - The HSM is being used in a production environment.</p> </li> <li> <p> <b>TRIAL</b> - The HSM is being used in a product trial.</p> </li> </ul>|
|ClientToken|object|false|none|none|
|SyslogIp|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|SubscriptionType|PRODUCTION|

<h2 id="tocS_CreateLunaClientResponse">CreateLunaClientResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelunaclientresponse"></a>
<a id="schema_CreateLunaClientResponse"></a>
<a id="tocScreatelunaclientresponse"></a>
<a id="tocscreatelunaclientresponse"></a>

```json
{
  "ClientArn": {}
}
```

Contains the output of the <a>CreateLunaClient</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientArn|object|false|none|none|

<h2 id="tocS_CreateLunaClientRequest">CreateLunaClientRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelunaclientrequest"></a>
<a id="schema_CreateLunaClientRequest"></a>
<a id="tocScreatelunaclientrequest"></a>
<a id="tocscreatelunaclientrequest"></a>

```json
{
  "Label": {},
  "Certificate": {}
}
```

Contains the inputs for the <a>CreateLunaClient</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Label|object|false|none|none|
|Certificate|object|true|none|none|

<h2 id="tocS_DeleteHapgResponse">DeleteHapgResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletehapgresponse"></a>
<a id="schema_DeleteHapgResponse"></a>
<a id="tocSdeletehapgresponse"></a>
<a id="tocsdeletehapgresponse"></a>

```json
{
  "Status": {}
}
```

Contains the output of the <a>DeleteHapg</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_DeleteHapgRequest">DeleteHapgRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletehapgrequest"></a>
<a id="schema_DeleteHapgRequest"></a>
<a id="tocSdeletehapgrequest"></a>
<a id="tocsdeletehapgrequest"></a>

```json
{
  "HapgArn": {}
}
```

Contains the inputs for the <a>DeleteHapg</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HapgArn|object|true|none|none|

<h2 id="tocS_DeleteHsmResponse">DeleteHsmResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletehsmresponse"></a>
<a id="schema_DeleteHsmResponse"></a>
<a id="tocSdeletehsmresponse"></a>
<a id="tocsdeletehsmresponse"></a>

```json
{
  "Status": {}
}
```

Contains the output of the <a>DeleteHsm</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_DeleteHsmRequest">DeleteHsmRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletehsmrequest"></a>
<a id="schema_DeleteHsmRequest"></a>
<a id="tocSdeletehsmrequest"></a>
<a id="tocsdeletehsmrequest"></a>

```json
{
  "HsmArn": {}
}
```

Contains the inputs for the <a>DeleteHsm</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HsmArn|object|true|none|none|

<h2 id="tocS_DeleteLunaClientResponse">DeleteLunaClientResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletelunaclientresponse"></a>
<a id="schema_DeleteLunaClientResponse"></a>
<a id="tocSdeletelunaclientresponse"></a>
<a id="tocsdeletelunaclientresponse"></a>

```json
{
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_DeleteLunaClientRequest">DeleteLunaClientRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelunaclientrequest"></a>
<a id="schema_DeleteLunaClientRequest"></a>
<a id="tocSdeletelunaclientrequest"></a>
<a id="tocsdeletelunaclientrequest"></a>

```json
{
  "ClientArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientArn|object|true|none|none|

<h2 id="tocS_DescribeHapgResponse">DescribeHapgResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribehapgresponse"></a>
<a id="schema_DescribeHapgResponse"></a>
<a id="tocSdescribehapgresponse"></a>
<a id="tocsdescribehapgresponse"></a>

```json
{
  "HapgArn": {},
  "HapgSerial": {},
  "HsmsLastActionFailed": {},
  "HsmsPendingDeletion": {},
  "HsmsPendingRegistration": {},
  "Label": {},
  "LastModifiedTimestamp": {},
  "PartitionSerialList": {},
  "State": {}
}
```

Contains the output of the <a>DescribeHapg</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HapgArn|object|false|none|none|
|HapgSerial|object|false|none|none|
|HsmsLastActionFailed|object|false|none|none|
|HsmsPendingDeletion|object|false|none|none|
|HsmsPendingRegistration|object|false|none|none|
|Label|object|false|none|none|
|LastModifiedTimestamp|object|false|none|none|
|PartitionSerialList|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_DescribeHapgRequest">DescribeHapgRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribehapgrequest"></a>
<a id="schema_DescribeHapgRequest"></a>
<a id="tocSdescribehapgrequest"></a>
<a id="tocsdescribehapgrequest"></a>

```json
{
  "HapgArn": {}
}
```

Contains the inputs for the <a>DescribeHapg</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HapgArn|object|true|none|none|

<h2 id="tocS_DescribeHsmResponse">DescribeHsmResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribehsmresponse"></a>
<a id="schema_DescribeHsmResponse"></a>
<a id="tocSdescribehsmresponse"></a>
<a id="tocsdescribehsmresponse"></a>

```json
{
  "HsmArn": {},
  "Status": {},
  "StatusDetails": {},
  "AvailabilityZone": {},
  "EniId": {},
  "EniIp": {},
  "SubscriptionType": "PRODUCTION",
  "SubscriptionStartDate": {},
  "SubscriptionEndDate": {},
  "VpcId": {},
  "SubnetId": {},
  "IamRoleArn": {},
  "SerialNumber": {},
  "VendorName": {},
  "HsmType": {},
  "SoftwareVersion": {},
  "SshPublicKey": {},
  "SshKeyLastUpdated": {},
  "ServerCertUri": {},
  "ServerCertLastUpdated": {},
  "Partitions": {}
}
```

Contains the output of the <a>DescribeHsm</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HsmArn|object|false|none|none|
|Status|object|false|none|none|
|StatusDetails|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|EniId|object|false|none|none|
|EniIp|object|false|none|none|
|SubscriptionType|[SubscriptionType](#schemasubscriptiontype)|false|none|<p>Specifies the type of subscription for the HSM.</p> <ul> <li> <p> <b>PRODUCTION</b> - The HSM is being used in a production environment.</p> </li> <li> <p> <b>TRIAL</b> - The HSM is being used in a product trial.</p> </li> </ul>|
|SubscriptionStartDate|object|false|none|none|
|SubscriptionEndDate|object|false|none|none|
|VpcId|object|false|none|none|
|SubnetId|object|false|none|none|
|IamRoleArn|object|false|none|none|
|SerialNumber|object|false|none|none|
|VendorName|object|false|none|none|
|HsmType|object|false|none|none|
|SoftwareVersion|object|false|none|none|
|SshPublicKey|object|false|none|none|
|SshKeyLastUpdated|object|false|none|none|
|ServerCertUri|object|false|none|none|
|ServerCertLastUpdated|object|false|none|none|
|Partitions|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|SubscriptionType|PRODUCTION|

<h2 id="tocS_DescribeHsmRequest">DescribeHsmRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribehsmrequest"></a>
<a id="schema_DescribeHsmRequest"></a>
<a id="tocSdescribehsmrequest"></a>
<a id="tocsdescribehsmrequest"></a>

```json
{
  "HsmArn": {},
  "HsmSerialNumber": {}
}
```

Contains the inputs for the <a>DescribeHsm</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HsmArn|object|false|none|none|
|HsmSerialNumber|object|false|none|none|

<h2 id="tocS_DescribeLunaClientResponse">DescribeLunaClientResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribelunaclientresponse"></a>
<a id="schema_DescribeLunaClientResponse"></a>
<a id="tocSdescribelunaclientresponse"></a>
<a id="tocsdescribelunaclientresponse"></a>

```json
{
  "ClientArn": {},
  "Certificate": {},
  "CertificateFingerprint": {},
  "LastModifiedTimestamp": {},
  "Label": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientArn|object|false|none|none|
|Certificate|object|false|none|none|
|CertificateFingerprint|object|false|none|none|
|LastModifiedTimestamp|object|false|none|none|
|Label|object|false|none|none|

<h2 id="tocS_DescribeLunaClientRequest">DescribeLunaClientRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelunaclientrequest"></a>
<a id="schema_DescribeLunaClientRequest"></a>
<a id="tocSdescribelunaclientrequest"></a>
<a id="tocsdescribelunaclientrequest"></a>

```json
{
  "ClientArn": {},
  "CertificateFingerprint": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientArn|object|false|none|none|
|CertificateFingerprint|object|false|none|none|

<h2 id="tocS_GetConfigResponse">GetConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconfigresponse"></a>
<a id="schema_GetConfigResponse"></a>
<a id="tocSgetconfigresponse"></a>
<a id="tocsgetconfigresponse"></a>

```json
{
  "ConfigType": {},
  "ConfigFile": {},
  "ConfigCred": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigType|object|false|none|none|
|ConfigFile|object|false|none|none|
|ConfigCred|object|false|none|none|

<h2 id="tocS_GetConfigRequest">GetConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconfigrequest"></a>
<a id="schema_GetConfigRequest"></a>
<a id="tocSgetconfigrequest"></a>
<a id="tocsgetconfigrequest"></a>

```json
{
  "ClientArn": {},
  "ClientVersion": {},
  "HapgList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientArn|object|true|none|none|
|ClientVersion|object|true|none|none|
|HapgList|object|true|none|none|

<h2 id="tocS_ListAvailableZonesResponse">ListAvailableZonesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistavailablezonesresponse"></a>
<a id="schema_ListAvailableZonesResponse"></a>
<a id="tocSlistavailablezonesresponse"></a>
<a id="tocslistavailablezonesresponse"></a>

```json
{
  "AZList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AZList|object|false|none|none|

<h2 id="tocS_ListAvailableZonesRequest">ListAvailableZonesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistavailablezonesrequest"></a>
<a id="schema_ListAvailableZonesRequest"></a>
<a id="tocSlistavailablezonesrequest"></a>
<a id="tocslistavailablezonesrequest"></a>

```json
{}
```

Contains the inputs for the <a>ListAvailableZones</a> action.

<h2 id="tocS_ListHapgsResponse">ListHapgsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthapgsresponse"></a>
<a id="schema_ListHapgsResponse"></a>
<a id="tocSlisthapgsresponse"></a>
<a id="tocslisthapgsresponse"></a>

```json
{
  "HapgList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HapgList|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListHapgsRequest">ListHapgsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisthapgsrequest"></a>
<a id="schema_ListHapgsRequest"></a>
<a id="tocSlisthapgsrequest"></a>
<a id="tocslisthapgsrequest"></a>

```json
{
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|

<h2 id="tocS_ListHsmsResponse">ListHsmsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthsmsresponse"></a>
<a id="schema_ListHsmsResponse"></a>
<a id="tocSlisthsmsresponse"></a>
<a id="tocslisthsmsresponse"></a>

```json
{
  "HsmList": {},
  "NextToken": {}
}
```

Contains the output of the <code>ListHsms</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HsmList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListHsmsRequest">ListHsmsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisthsmsrequest"></a>
<a id="schema_ListHsmsRequest"></a>
<a id="tocSlisthsmsrequest"></a>
<a id="tocslisthsmsrequest"></a>

```json
{
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLunaClientsResponse">ListLunaClientsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlunaclientsresponse"></a>
<a id="schema_ListLunaClientsResponse"></a>
<a id="tocSlistlunaclientsresponse"></a>
<a id="tocslistlunaclientsresponse"></a>

```json
{
  "ClientList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientList|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLunaClientsRequest">ListLunaClientsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlunaclientsrequest"></a>
<a id="schema_ListLunaClientsRequest"></a>
<a id="tocSlistlunaclientsrequest"></a>
<a id="tocslistlunaclientsrequest"></a>

```json
{
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "TagList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagList|object|true|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_ModifyHapgResponse">ModifyHapgResponse</h2>
<!-- backwards compatibility -->
<a id="schemamodifyhapgresponse"></a>
<a id="schema_ModifyHapgResponse"></a>
<a id="tocSmodifyhapgresponse"></a>
<a id="tocsmodifyhapgresponse"></a>

```json
{
  "HapgArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HapgArn|object|false|none|none|

<h2 id="tocS_ModifyHapgRequest">ModifyHapgRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifyhapgrequest"></a>
<a id="schema_ModifyHapgRequest"></a>
<a id="tocSmodifyhapgrequest"></a>
<a id="tocsmodifyhapgrequest"></a>

```json
{
  "HapgArn": {},
  "Label": {},
  "PartitionSerialList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HapgArn|object|true|none|none|
|Label|object|false|none|none|
|PartitionSerialList|object|false|none|none|

<h2 id="tocS_ModifyHsmResponse">ModifyHsmResponse</h2>
<!-- backwards compatibility -->
<a id="schemamodifyhsmresponse"></a>
<a id="schema_ModifyHsmResponse"></a>
<a id="tocSmodifyhsmresponse"></a>
<a id="tocsmodifyhsmresponse"></a>

```json
{
  "HsmArn": {}
}
```

Contains the output of the <a>ModifyHsm</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HsmArn|object|false|none|none|

<h2 id="tocS_ModifyHsmRequest">ModifyHsmRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifyhsmrequest"></a>
<a id="schema_ModifyHsmRequest"></a>
<a id="tocSmodifyhsmrequest"></a>
<a id="tocsmodifyhsmrequest"></a>

```json
{
  "HsmArn": {},
  "SubnetId": {},
  "EniIp": {},
  "IamRoleArn": {},
  "ExternalId": {},
  "SyslogIp": {}
}
```

Contains the inputs for the <a>ModifyHsm</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HsmArn|object|true|none|none|
|SubnetId|object|false|none|none|
|EniIp|object|false|none|none|
|IamRoleArn|object|false|none|none|
|ExternalId|object|false|none|none|
|SyslogIp|object|false|none|none|

<h2 id="tocS_ModifyLunaClientResponse">ModifyLunaClientResponse</h2>
<!-- backwards compatibility -->
<a id="schemamodifylunaclientresponse"></a>
<a id="schema_ModifyLunaClientResponse"></a>
<a id="tocSmodifylunaclientresponse"></a>
<a id="tocsmodifylunaclientresponse"></a>

```json
{
  "ClientArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientArn|object|false|none|none|

<h2 id="tocS_ModifyLunaClientRequest">ModifyLunaClientRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifylunaclientrequest"></a>
<a id="schema_ModifyLunaClientRequest"></a>
<a id="tocSmodifylunaclientrequest"></a>
<a id="tocsmodifylunaclientrequest"></a>

```json
{
  "ClientArn": {},
  "Certificate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientArn|object|true|none|none|
|Certificate|object|true|none|none|

<h2 id="tocS_RemoveTagsFromResourceResponse">RemoveTagsFromResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsfromresourceresponse"></a>
<a id="schema_RemoveTagsFromResourceResponse"></a>
<a id="tocSremovetagsfromresourceresponse"></a>
<a id="tocsremovetagsfromresourceresponse"></a>

```json
{
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_RemoveTagsFromResourceRequest">RemoveTagsFromResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsfromresourcerequest"></a>
<a id="schema_RemoveTagsFromResourceRequest"></a>
<a id="tocSremovetagsfromresourcerequest"></a>
<a id="tocsremovetagsfromresourcerequest"></a>

```json
{
  "ResourceArn": {},
  "TagKeyList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|TagKeyList|object|true|none|none|

<h2 id="tocS_AZ">AZ</h2>
<!-- backwards compatibility -->
<a id="schemaaz"></a>
<a id="schema_AZ"></a>
<a id="tocSaz"></a>
<a id="tocsaz"></a>

```json
"string"
```

<h2 id="tocS_AZList">AZList</h2>
<!-- backwards compatibility -->
<a id="schemaazlist"></a>
<a id="schema_AZList"></a>
<a id="tocSazlist"></a>
<a id="tocsazlist"></a>

```json
[
  "string"
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

<h2 id="tocS_Certificate">Certificate</h2>
<!-- backwards compatibility -->
<a id="schemacertificate"></a>
<a id="schema_Certificate"></a>
<a id="tocScertificate"></a>
<a id="tocscertificate"></a>

```json
"stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstring"
```

<h2 id="tocS_CertificateFingerprint">CertificateFingerprint</h2>
<!-- backwards compatibility -->
<a id="schemacertificatefingerprint"></a>
<a id="schema_CertificateFingerprint"></a>
<a id="tocScertificatefingerprint"></a>
<a id="tocscertificatefingerprint"></a>

```json
"string"
```

<h2 id="tocS_ClientArn">ClientArn</h2>
<!-- backwards compatibility -->
<a id="schemaclientarn"></a>
<a id="schema_ClientArn"></a>
<a id="tocSclientarn"></a>
<a id="tocsclientarn"></a>

```json
"string"
```

<h2 id="tocS_ClientLabel">ClientLabel</h2>
<!-- backwards compatibility -->
<a id="schemaclientlabel"></a>
<a id="schema_ClientLabel"></a>
<a id="tocSclientlabel"></a>
<a id="tocsclientlabel"></a>

```json
"string"
```

<h2 id="tocS_ClientList">ClientList</h2>
<!-- backwards compatibility -->
<a id="schemaclientlist"></a>
<a id="schema_ClientList"></a>
<a id="tocSclientlist"></a>
<a id="tocsclientlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"string"
```

<h2 id="tocS_ClientVersion">ClientVersion</h2>
<!-- backwards compatibility -->
<a id="schemaclientversion"></a>
<a id="schema_ClientVersion"></a>
<a id="tocSclientversion"></a>
<a id="tocsclientversion"></a>

```json
"5.1"
```

<h2 id="tocS_CloudHsmObjectState">CloudHsmObjectState</h2>
<!-- backwards compatibility -->
<a id="schemacloudhsmobjectstate"></a>
<a id="schema_CloudHsmObjectState"></a>
<a id="tocScloudhsmobjectstate"></a>
<a id="tocscloudhsmobjectstate"></a>

```json
"READY"
```

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
"string"
```

<h2 id="tocS_HapgArn">HapgArn</h2>
<!-- backwards compatibility -->
<a id="schemahapgarn"></a>
<a id="schema_HapgArn"></a>
<a id="tocShapgarn"></a>
<a id="tocshapgarn"></a>

```json
"string"
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

<h2 id="tocS_SshKey">SshKey</h2>
<!-- backwards compatibility -->
<a id="schemasshkey"></a>
<a id="schema_SshKey"></a>
<a id="tocSsshkey"></a>
<a id="tocssshkey"></a>

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

<h2 id="tocS_IamRoleArn">IamRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaiamrolearn"></a>
<a id="schema_IamRoleArn"></a>
<a id="tocSiamrolearn"></a>
<a id="tocsiamrolearn"></a>

```json
"string"
```

<h2 id="tocS_ExternalId">ExternalId</h2>
<!-- backwards compatibility -->
<a id="schemaexternalid"></a>
<a id="schema_ExternalId"></a>
<a id="tocSexternalid"></a>
<a id="tocsexternalid"></a>

```json
"string"
```

<h2 id="tocS_SubscriptionType">SubscriptionType</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptiontype"></a>
<a id="schema_SubscriptionType"></a>
<a id="tocSsubscriptiontype"></a>
<a id="tocssubscriptiontype"></a>

```json
"PRODUCTION"
```

<p>Specifies the type of subscription for the HSM.</p> <ul> <li> <p> <b>PRODUCTION</b> - The HSM is being used in a production environment.</p> </li> <li> <p> <b>TRIAL</b> - The HSM is being used in a product trial.</p> </li> </ul>

<h2 id="tocS_HsmArn">HsmArn</h2>
<!-- backwards compatibility -->
<a id="schemahsmarn"></a>
<a id="schema_HsmArn"></a>
<a id="tocShsmarn"></a>
<a id="tocshsmarn"></a>

```json
"string"
```

An ARN that identifies an HSM.

<h2 id="tocS_HsmList">HsmList</h2>
<!-- backwards compatibility -->
<a id="schemahsmlist"></a>
<a id="schema_HsmList"></a>
<a id="tocShsmlist"></a>
<a id="tocshsmlist"></a>

```json
[
  "string"
]
```

Contains a list of ARNs that identify the HSMs.

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"string"
```

<h2 id="tocS_PartitionSerialList">PartitionSerialList</h2>
<!-- backwards compatibility -->
<a id="schemapartitionseriallist"></a>
<a id="schema_PartitionSerialList"></a>
<a id="tocSpartitionseriallist"></a>
<a id="tocspartitionseriallist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_HsmSerialNumber">HsmSerialNumber</h2>
<!-- backwards compatibility -->
<a id="schemahsmserialnumber"></a>
<a id="schema_HsmSerialNumber"></a>
<a id="tocShsmserialnumber"></a>
<a id="tocshsmserialnumber"></a>

```json
"string"
```

<h2 id="tocS_HsmStatus">HsmStatus</h2>
<!-- backwards compatibility -->
<a id="schemahsmstatus"></a>
<a id="schema_HsmStatus"></a>
<a id="tocShsmstatus"></a>
<a id="tocshsmstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_EniId">EniId</h2>
<!-- backwards compatibility -->
<a id="schemaeniid"></a>
<a id="schema_EniId"></a>
<a id="tocSeniid"></a>
<a id="tocseniid"></a>

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

<h2 id="tocS_PartitionList">PartitionList</h2>
<!-- backwards compatibility -->
<a id="schemapartitionlist"></a>
<a id="schema_PartitionList"></a>
<a id="tocSpartitionlist"></a>
<a id="tocspartitionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_HapgList">HapgList</h2>
<!-- backwards compatibility -->
<a id="schemahapglist"></a>
<a id="schema_HapgList"></a>
<a id="tocShapglist"></a>
<a id="tocshapglist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_PartitionArn">PartitionArn</h2>
<!-- backwards compatibility -->
<a id="schemapartitionarn"></a>
<a id="schema_PartitionArn"></a>
<a id="tocSpartitionarn"></a>
<a id="tocspartitionarn"></a>

```json
"string"
```

<h2 id="tocS_PartitionSerial">PartitionSerial</h2>
<!-- backwards compatibility -->
<a id="schemapartitionserial"></a>
<a id="schema_PartitionSerial"></a>
<a id="tocSpartitionserial"></a>
<a id="tocspartitionserial"></a>

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

A key-value pair that identifies or specifies metadata about an AWS CloudHSM resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|
