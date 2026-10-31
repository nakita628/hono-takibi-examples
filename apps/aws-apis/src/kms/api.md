<h1 id="aws-key-management-service">AWS Key Management Service v2014-11-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Key Management Service</fullname> <p>Key Management Service (KMS) is an encryption and key management web service. This guide describes the KMS operations that you can call programmatically. For general information about KMS, see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/"> <i>Key Management Service Developer Guide</i> </a>.</p> <note> <p>KMS has replaced the term <i>customer master key (CMK)</i> with <i>KMS key</i> and <i>KMS key</i>. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term.</p> <p>Amazon Web Services provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, macOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to KMS and other Amazon Web Services services. For example, the SDKs take care of tasks such as signing requests (see below), managing errors, and retrying requests automatically. For more information about the Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note> <p>We recommend that you use the Amazon Web Services SDKs to make programmatic API calls to KMS.</p> <p>If you need to use FIPS 140-2 validated cryptographic modules when communicating with Amazon Web Services, use the FIPS endpoint in your preferred Amazon Web Services Region. For more information about the available FIPS endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/kms.html#kms_region">Service endpoints</a> in the Key Management Service topic of the <i>Amazon Web Services General Reference</i>.</p> <p>All KMS API calls must be signed and be transmitted using Transport Layer Security (TLS). KMS recommends you always use the latest supported TLS version. Clients must also support cipher suites with Perfect Forward Secrecy (PFS) such as Ephemeral Diffie-Hellman (DHE) or Elliptic Curve Ephemeral Diffie-Hellman (ECDHE). Most modern systems such as Java 7 and later support these modes.</p> <p> <b>Signing Requests</b> </p> <p>Requests must be signed using an access key ID and a secret access key. We strongly recommend that you do not use your Amazon Web Services account root access key ID and secret access key for everyday work. You can use the access key ID and secret access key for an IAM user or you can use the Security Token Service (STS) to generate temporary security credentials and use those to sign requests. </p> <p>All KMS requests must be signed with <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> <p> <b>Logging API Requests</b> </p> <p>KMS supports CloudTrail, a service that logs Amazon Web Services API calls and related events for your Amazon Web Services account and delivers them to an Amazon S3 bucket that you specify. By using the information collected by CloudTrail, you can determine what requests were made to KMS, who made the request, when it was made, and so on. To learn more about CloudTrail, including how to turn it on and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/">CloudTrail User Guide</a>.</p> <p> <b>Additional Resources</b> </p> <p>For more information about credentials and request signing, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html">Amazon Web Services Security Credentials</a> - This topic provides general information about the types of credentials used to access Amazon Web Services.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html">Temporary Security Credentials</a> - This section of the <i>IAM User Guide</i> describes how to create and use temporary security credentials.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a> - This set of topics walks you through the process of signing a request using an access key ID and a secret access key.</p> </li> </ul> <p> <b>Commonly Used API Operations</b> </p> <p>Of the API operations discussed in this guide, the following will prove the most useful for most applications. You will likely perform operations other than these, such as creating keys and assigning policies, by using the console.</p> <ul> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyWithoutPlaintext</a> </p> </li> </ul>

Base URLs:

* <a href="http://kms.us-east-1.amazonaws.com">http://kms.us-east-1.amazonaws.com</a> - The KMS multi-region endpoint

* <a href="https://kms.us-east-1.amazonaws.com">https://kms.us-east-1.amazonaws.com</a> - The KMS multi-region endpoint

* <a href="http://kms.cn-north-1.amazonaws.com.cn">http://kms.cn-north-1.amazonaws.com.cn</a> - The KMS endpoint for China (Beijing) and China (Ningxia)

* <a href="https://kms.cn-north-1.amazonaws.com.cn">https://kms.cn-north-1.amazonaws.com.cn</a> - The KMS endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/kms/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-key-management-service-default">Default</h1>

## CancelKeyDeletion

<a id="opIdCancelKeyDeletion"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.CancelKeyDeletion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.CancelKeyDeletion' \
  -d '{
    "KeyId": {}
  }'
```

`POST /#X-Amz-Target=TrentService.CancelKeyDeletion`

<p>Cancels the deletion of a KMS key. When this operation succeeds, the key state of the KMS key is <code>Disabled</code>. To enable the KMS key, use <a>EnableKey</a>. </p> <p>For more information about scheduling and canceling deletion of a KMS key, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html">Deleting KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CancelKeyDeletion</a> (key policy)</p> <p> <b>Related operations</b>: <a>ScheduleKeyDeletion</a> </p>

> Body parameter

```json
{
  "KeyId": {}
}
```

<h3 id="cancelkeydeletion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CancelKeyDeletionRequest](#schemacancelkeydeletionrequest)|true|none|
|» KeyId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.CancelKeyDeletion|

> Example responses

> 200 Response

```json
{
  "KeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="cancelkeydeletion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelKeyDeletionResponse](#schemacancelkeydeletionresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|483|483|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|484|484|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ConnectCustomKeyStore

<a id="opIdConnectCustomKeyStore"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.ConnectCustomKeyStore' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.ConnectCustomKeyStore' \
  -d '{
    "CustomKeyStoreId": {}
  }'
```

`POST /#X-Amz-Target=TrentService.ConnectCustomKeyStore`

<p>Connects or reconnects a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> to its backing key store. For an CloudHSM key store, <code>ConnectCustomKeyStore</code> connects the key store to its associated CloudHSM cluster. For an external key store, <code>ConnectCustomKeyStore</code> connects the key store to the external key store proxy that communicates with your external key manager.</p> <p>The custom key store must be connected before you can create KMS keys in the key store or use the KMS keys it contains. You can disconnect and reconnect a custom key store at any time.</p> <p>The connection process for a custom key store can take an extended amount of time to complete. This operation starts the connection process, but it does not wait for it to complete. When it succeeds, this operation quickly returns an HTTP 200 response and a JSON object with no properties. However, this response does not indicate that the custom key store is connected. To get the connection state of the custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p> <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage.</p> <p>The <code>ConnectCustomKeyStore</code> operation might fail for various reasons. To find the reason, use the <a>DescribeCustomKeyStores</a> operation and see the <code>ConnectionErrorCode</code> in the response. For help interpreting the <code>ConnectionErrorCode</code>, see <a>CustomKeyStoresListEntry</a>.</p> <p>To fix the failure, use the <a>DisconnectCustomKeyStore</a> operation to disconnect the custom key store, correct the error, use the <a>UpdateCustomKeyStore</a> operation if necessary, and then use <code>ConnectCustomKeyStore</code> again.</p> <p> <b>CloudHSM key store</b> </p> <p>During the connection process for an CloudHSM key store, KMS finds the CloudHSM cluster that is associated with the custom key store, creates the connection infrastructure, connects to the cluster, logs into the CloudHSM client as the <code>kmsuser</code> CU, and rotates its password.</p> <p>To connect an CloudHSM key store, its associated CloudHSM cluster must have at least one active HSM. To get the number of active HSMs in a cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation. To add HSMs to the cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateHsm.html">CreateHsm</a> operation. Also, the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-concepts.html#concept-kmsuser"> <code>kmsuser</code> crypto user</a> (CU) must not be logged into the cluster. This prevents KMS from using this account to log in.</p> <p>If you are having trouble connecting or disconnecting a CloudHSM key store, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting an CloudHSM key store</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>External key store</b> </p> <p>When you connect an external key store that uses public endpoint connectivity, KMS tests its ability to communicate with your external key manager by sending a request via the external key store proxy.</p> <p>When you connect to an external key store that uses VPC endpoint service connectivity, KMS establishes the networking elements that it needs to communicate with your external key manager via the external key store proxy. This includes creating an interface endpoint to the VPC endpoint service and a private hosted zone for traffic between KMS and the VPC endpoint service.</p> <p>To connect an external key store, KMS must be able to connect to the external key store proxy, the external key store proxy must be able to communicate with your external key manager, and the external key manager must be available for cryptographic operations.</p> <p>If you are having trouble connecting or disconnecting an external key store, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/xks-troubleshooting.html">Troubleshooting an external key store</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ConnectCustomKeyStore</a> (IAM policy)</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateCustomKeyStore</a> </p> </li> <li> <p> <a>DeleteCustomKeyStore</a> </p> </li> <li> <p> <a>DescribeCustomKeyStores</a> </p> </li> <li> <p> <a>DisconnectCustomKeyStore</a> </p> </li> <li> <p> <a>UpdateCustomKeyStore</a> </p> </li> </ul>

> Body parameter

```json
{
  "CustomKeyStoreId": {}
}
```

<h3 id="connectcustomkeystore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ConnectCustomKeyStoreRequest](#schemaconnectcustomkeystorerequest)|true|none|
|» CustomKeyStoreId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.ConnectCustomKeyStore|

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

<h3 id="connectcustomkeystore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConnectCustomKeyStoreResponse](#schemaconnectcustomkeystoreresponse)|
|480|480|CloudHsmClusterNotActiveException|[CloudHsmClusterNotActiveException](#schemacloudhsmclusternotactiveexception)|
|481|481|CustomKeyStoreInvalidStateException|[CustomKeyStoreInvalidStateException](#schemacustomkeystoreinvalidstateexception)|
|482|482|CustomKeyStoreNotFoundException|[CustomKeyStoreNotFoundException](#schemacustomkeystorenotfoundexception)|
|483|483|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|484|484|CloudHsmClusterInvalidConfigurationException|[CloudHsmClusterInvalidConfigurationException](#schemacloudhsmclusterinvalidconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAlias

<a id="opIdCreateAlias"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.CreateAlias' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.CreateAlias' \
  -d '{
    "AliasName": {},
    "TargetKeyId": {}
  }'
```

`POST /#X-Amz-Target=TrentService.CreateAlias`

<p>Creates a friendly name for a KMS key. </p> <note> <p>Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">ABAC for KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> </note> <p>You can use an alias to identify a KMS key in the KMS console, in the <a>DescribeKey</a> operation and in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>, such as <a>Encrypt</a> and <a>GenerateDataKey</a>. You can also change the KMS key that's associated with the alias (<a>UpdateAlias</a>) or delete the alias (<a>DeleteAlias</a>) at any time. These operations don't affect the underlying KMS key. </p> <p>You can associate the alias with any customer managed key in the same Amazon Web Services Region. Each alias is associated with only one KMS key at a time, but a KMS key can have multiple aliases. A valid KMS key is required. You can't create an alias without a KMS key.</p> <p>The alias must be unique in the account and Region, but you can have aliases with the same name in different Regions. For detailed information about aliases, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html">Using aliases</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>This operation does not return a response. To get the alias that you created, use the <a>ListAliases</a> operation.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on an alias in a different Amazon Web Services account.</p> <p> <b>Required permissions</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateAlias</a> on the alias (IAM policy).</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateAlias</a> on the KMS key (key policy).</p> </li> </ul> <p>For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html#alias-access">Controlling access to aliases</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> </ul>

> Body parameter

```json
{
  "AliasName": {},
  "TargetKeyId": {}
}
```

<h3 id="createalias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateAliasRequest](#schemacreatealiasrequest)|true|none|
|» AliasName|body|object|true|none|
|» TargetKeyId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.CreateAlias|

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

<h3 id="createalias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|481|481|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InvalidAliasNameException|[InvalidAliasNameException](#schemainvalidaliasnameexception)|
|484|484|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCustomKeyStore

<a id="opIdCreateCustomKeyStore"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.CreateCustomKeyStore' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.CreateCustomKeyStore' \
  -d '{
    "CustomKeyStoreName": {},
    "CloudHsmClusterId": {},
    "TrustAnchorCertificate": {},
    "KeyStorePassword": {},
    "CustomKeyStoreType": {},
    "XksProxyUriEndpoint": {},
    "XksProxyUriPath": {},
    "XksProxyVpcEndpointServiceName": {},
    "XksProxyAuthenticationCredential": {
      "AccessKeyId": {},
      "RawSecretAccessKey": {}
    },
    "XksProxyConnectivity": {}
  }'
```

`POST /#X-Amz-Target=TrentService.CreateCustomKeyStore`

<p>Creates a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> backed by a key store that you own and manage. When you use a KMS key in a custom key store for a cryptographic operation, the cryptographic operation is actually performed in your key store using your keys. KMS supports <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-cloudhsm.html">CloudHSM key stores</a> backed by an <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/clusters.html">CloudHSM cluster</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html">external key stores</a> backed by an external key store proxy and external key manager outside of Amazon Web Services.</p> <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage.</p> <p>Before you create the custom key store, the required elements must be in place and operational. We recommend that you use the test tools that KMS provides to verify the configuration your external key store proxy. For details about the required elements and verification tests, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keystore.html#before-keystore">Assemble the prerequisites (for CloudHSM key stores)</a> or <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-xks-keystore.html#xks-requirements">Assemble the prerequisites (for external key stores)</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>To create a custom key store, use the following parameters.</p> <ul> <li> <p>To create an CloudHSM key store, specify the <code>CustomKeyStoreName</code>, <code>CloudHsmClusterId</code>, <code>KeyStorePassword</code>, and <code>TrustAnchorCertificate</code>. The <code>CustomKeyStoreType</code> parameter is optional for CloudHSM key stores. If you include it, set it to the default value, <code>AWS_CLOUDHSM</code>. For help with failures, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting an CloudHSM key store</a> in the <i>Key Management Service Developer Guide</i>.</p> </li> <li> <p>To create an external key store, specify the <code>CustomKeyStoreName</code> and a <code>CustomKeyStoreType</code> of <code>EXTERNAL_KEY_STORE</code>. Also, specify values for <code>XksProxyConnectivity</code>, <code>XksProxyAuthenticationCredential</code>, <code>XksProxyUriEndpoint</code>, and <code>XksProxyUriPath</code>. If your <code>XksProxyConnectivity</code> value is <code>VPC_ENDPOINT_SERVICE</code>, specify the <code>XksProxyVpcEndpointServiceName</code> parameter. For help with failures, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/xks-troubleshooting.html">Troubleshooting an external key store</a> in the <i>Key Management Service Developer Guide</i>.</p> </li> </ul> <note> <p>For external key stores:</p> <p>Some external key managers provide a simpler method for creating an external key store. For details, see your external key manager documentation.</p> <p>When creating an external key store in the KMS console, you can upload a JSON-based proxy configuration file with the desired values. You cannot use a proxy configuration with the <code>CreateCustomKeyStore</code> operation. However, you can use the values in the file to help you determine the correct values for the <code>CreateCustomKeyStore</code> parameters.</p> </note> <p>When the operation completes successfully, it returns the ID of the new custom key store. Before you can use your new custom key store, you need to use the <a>ConnectCustomKeyStore</a> operation to connect a new CloudHSM key store to its CloudHSM cluster, or to connect a new external key store to the external key store proxy for your external key manager. Even if you are not going to use your custom key store immediately, you might want to connect it to verify that all settings are correct and then disconnect it until you are ready to use it.</p> <p>For help with failures, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting a custom key store</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateCustomKeyStore</a> (IAM policy).</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ConnectCustomKeyStore</a> </p> </li> <li> <p> <a>DeleteCustomKeyStore</a> </p> </li> <li> <p> <a>DescribeCustomKeyStores</a> </p> </li> <li> <p> <a>DisconnectCustomKeyStore</a> </p> </li> <li> <p> <a>UpdateCustomKeyStore</a> </p> </li> </ul>

> Body parameter

```json
{
  "CustomKeyStoreName": {},
  "CloudHsmClusterId": {},
  "TrustAnchorCertificate": {},
  "KeyStorePassword": {},
  "CustomKeyStoreType": {},
  "XksProxyUriEndpoint": {},
  "XksProxyUriPath": {},
  "XksProxyVpcEndpointServiceName": {},
  "XksProxyAuthenticationCredential": {
    "AccessKeyId": {},
    "RawSecretAccessKey": {}
  },
  "XksProxyConnectivity": {}
}
```

<h3 id="createcustomkeystore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateCustomKeyStoreRequest](#schemacreatecustomkeystorerequest)|true|none|
|» CustomKeyStoreName|body|object|true|none|
|» CloudHsmClusterId|body|object|false|none|
|» TrustAnchorCertificate|body|object|false|none|
|» KeyStorePassword|body|object|false|none|
|» CustomKeyStoreType|body|object|false|none|
|» XksProxyUriEndpoint|body|object|false|none|
|» XksProxyUriPath|body|object|false|none|
|» XksProxyVpcEndpointServiceName|body|object|false|none|
|» XksProxyAuthenticationCredential|body|object|false|none|
|» » AccessKeyId|body|object|true|none|
|» » RawSecretAccessKey|body|object|true|none|
|» XksProxyConnectivity|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.CreateCustomKeyStore|

> Example responses

> 200 Response

```json
{
  "CustomKeyStoreId": "cks-987654321abcdef0"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="createcustomkeystore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCustomKeyStoreResponse](#schemacreatecustomkeystoreresponse)|
|480|480|CloudHsmClusterInUseException|[CloudHsmClusterInUseException](#schemacloudhsmclusterinuseexception)|
|481|481|CustomKeyStoreNameInUseException|[CustomKeyStoreNameInUseException](#schemacustomkeystorenameinuseexception)|
|482|482|CloudHsmClusterNotFoundException|[CloudHsmClusterNotFoundException](#schemacloudhsmclusternotfoundexception)|
|483|483|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|484|484|CloudHsmClusterNotActiveException|[CloudHsmClusterNotActiveException](#schemacloudhsmclusternotactiveexception)|
|485|485|IncorrectTrustAnchorException|[IncorrectTrustAnchorException](#schemaincorrecttrustanchorexception)|
|486|486|CloudHsmClusterInvalidConfigurationException|[CloudHsmClusterInvalidConfigurationException](#schemacloudhsmclusterinvalidconfigurationexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|488|488|XksProxyUriInUseException|[XksProxyUriInUseException](#schemaxksproxyuriinuseexception)|
|489|489|XksProxyUriEndpointInUseException|[XksProxyUriEndpointInUseException](#schemaxksproxyuriendpointinuseexception)|
|490|490|XksProxyUriUnreachableException|[XksProxyUriUnreachableException](#schemaxksproxyuriunreachableexception)|
|491|491|XksProxyIncorrectAuthenticationCredentialException|[XksProxyIncorrectAuthenticationCredentialException](#schemaxksproxyincorrectauthenticationcredentialexception)|
|492|492|XksProxyVpcEndpointServiceInUseException|[XksProxyVpcEndpointServiceInUseException](#schemaxksproxyvpcendpointserviceinuseexception)|
|493|493|XksProxyVpcEndpointServiceNotFoundException|[XksProxyVpcEndpointServiceNotFoundException](#schemaxksproxyvpcendpointservicenotfoundexception)|
|494|494|XksProxyVpcEndpointServiceInvalidConfigurationException|[XksProxyVpcEndpointServiceInvalidConfigurationException](#schemaxksproxyvpcendpointserviceinvalidconfigurationexception)|
|495|495|XksProxyInvalidResponseException|[XksProxyInvalidResponseException](#schemaxksproxyinvalidresponseexception)|
|496|496|XksProxyInvalidConfigurationException|[XksProxyInvalidConfigurationException](#schemaxksproxyinvalidconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGrant

<a id="opIdCreateGrant"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.CreateGrant' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.CreateGrant' \
  -d '{
    "KeyId": {},
    "GranteePrincipal": {},
    "RetiringPrincipal": {},
    "Operations": {},
    "Constraints": {
      "EncryptionContextSubset": {
        "property1": "string",
        "property2": "string"
      },
      "EncryptionContextEquals": {
        "property1": "string",
        "property2": "string"
      }
    },
    "GrantTokens": {},
    "Name": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=TrentService.CreateGrant`

<p>Adds a grant to a KMS key. </p> <p>A <i>grant</i> is a policy instrument that allows Amazon Web Services principals to use KMS keys in cryptographic operations. It also can allow them to view a KMS key (<a>DescribeKey</a>) and create and manage grants. When authorizing access to a KMS key, grants are considered along with key policies and IAM policies. Grants are often used for temporary permissions because you can create one, use its permissions, and delete it without changing your key policies or IAM policies. </p> <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants in KMS</a> in the <i> <i>Key Management Service Developer Guide</i> </i>. For examples of working with grants in several programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p> <p>The <code>CreateGrant</code> operation returns a <code>GrantToken</code> and a <code>GrantId</code>.</p> <ul> <li> <p>When you create, retire, or revoke a grant, there might be a brief delay, usually less than five minutes, until the grant is available throughout KMS. This state is known as <i>eventual consistency</i>. Once the grant has achieved eventual consistency, the grantee principal can use the permissions in the grant without identifying the grant. </p> <p>However, to use the permissions in the grant immediately, use the <code>GrantToken</code> that <code>CreateGrant</code> returns. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the <i> <i>Key Management Service Developer Guide</i> </i>.</p> </li> <li> <p>The <code>CreateGrant</code> operation also returns a <code>GrantId</code>. You can use the <code>GrantId</code> and a key identifier to identify the grant in the <a>RetireGrant</a> and <a>RevokeGrant</a> operations. To find the grant ID, use the <a>ListGrants</a> or <a>ListRetirableGrants</a> operations.</p> </li> </ul> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the <code>KeyId</code> parameter. </p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateGrant</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ListGrants</a> </p> </li> <li> <p> <a>ListRetirableGrants</a> </p> </li> <li> <p> <a>RetireGrant</a> </p> </li> <li> <p> <a>RevokeGrant</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {},
  "GranteePrincipal": {},
  "RetiringPrincipal": {},
  "Operations": {},
  "Constraints": {
    "EncryptionContextSubset": {
      "property1": "string",
      "property2": "string"
    },
    "EncryptionContextEquals": {
      "property1": "string",
      "property2": "string"
    }
  },
  "GrantTokens": {},
  "Name": {},
  "DryRun": {}
}
```

<h3 id="creategrant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateGrantRequest](#schemacreategrantrequest)|true|none|
|» KeyId|body|object|true|none|
|» GranteePrincipal|body|object|true|none|
|» RetiringPrincipal|body|object|false|none|
|» Operations|body|object|true|none|
|» Constraints|body|object|false|none|
|» » EncryptionContextSubset|body|object|false|none|
|» » » **additionalProperties**|body|[EncryptionContextValue](#schemaencryptioncontextvalue)|false|none|
|» » EncryptionContextEquals|body|object|false|none|
|» » » **additionalProperties**|body|[EncryptionContextValue](#schemaencryptioncontextvalue)|false|none|
|» GrantTokens|body|object|false|none|
|» Name|body|object|false|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.CreateGrant|

> Example responses

> 200 Response

```json
{
  "GrantId": "0c237476b39f8bc44e45212e08498fbe3151305030726c0590dd8d3e9f3d6a60",
  "GrantToken": "AQpAM2RhZTk1MGMyNTk2ZmZmMzEyYWVhOWViN2I1MWM4Mzc0MWFiYjc0ZDE1ODkyNGFlNTIzODZhMzgyZjBlNGY3NiKIAgEBAgB4Pa6VDCWW__MSrqnre1HIN0Grt00ViSSuUjhqOC8OT3YAAADfMIHcBgkqhkiG9w0BBwaggc4wgcsCAQAwgcUGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMmqLyBTAegIn9XlK5AgEQgIGXZQjkBcl1dykDdqZBUQ6L1OfUivQy7JVYO2-ZJP7m6f1g8GzV47HX5phdtONAP7K_HQIflcgpkoCqd_fUnE114mSmiagWkbQ5sqAVV3ov-VeqgrvMe5ZFEWLMSluvBAqdjHEdMIkHMlhlj4ENZbzBfo9Wxk8b8SnwP4kc4gGivedzFXo-dwN8fxjjq_ZZ9JFOj2ijIbj5FyogDCN0drOfi8RORSEuCEmPvjFRMFAwcmwFkN2NPp89amA"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="creategrant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGrantResponse](#schemacreategrantresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|DisabledException|[DisabledException](#schemadisabledexception)|
|482|482|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|483|483|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|484|484|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|485|485|InvalidGrantTokenException|[InvalidGrantTokenException](#schemainvalidgranttokenexception)|
|486|486|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|487|487|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|488|488|DryRunOperationException|[DryRunOperationException](#schemadryrunoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateKey

<a id="opIdCreateKey"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.CreateKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.CreateKey' \
  -d '{
    "Policy": {},
    "Description": {},
    "KeyUsage": {},
    "CustomerMasterKeySpec": {},
    "KeySpec": {},
    "Origin": {},
    "CustomKeyStoreId": {},
    "BypassPolicyLockoutSafetyCheck": {},
    "Tags": {},
    "MultiRegion": {},
    "XksKeyId": {}
  }'
```

`POST /#X-Amz-Target=TrentService.CreateKey`

<p>Creates a unique customer managed <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms-keys">KMS key</a> in your Amazon Web Services account and Region. You can use a KMS key in cryptographic operations, such as encryption and signing. Some Amazon Web Services services let you use KMS keys that you create and manage to protect your service resources.</p> <p>A KMS key is a logical representation of a cryptographic key. In addition to the key material used in cryptographic operations, a KMS key includes metadata, such as the key ID, key policy, creation date, description, and key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/getting-started.html">Managing keys</a> in the <i>Key Management Service Developer Guide</i> </p> <p>Use the parameters of <code>CreateKey</code> to specify the type of KMS key, the source of its key material, its key policy, description, tags, and other properties.</p> <note> <p>KMS has replaced the term <i>customer master key (CMK)</i> with <i>KMS key</i> and <i>KMS key</i>. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term.</p> </note> <p>To create different types of KMS keys, use the following guidance:</p> <dl> <dt>Symmetric encryption KMS key</dt> <dd> <p>By default, <code>CreateKey</code> creates a symmetric encryption KMS key with key material that KMS generates. This is the basic and most widely used type of KMS key, and provides the best performance.</p> <p>To create a symmetric encryption KMS key, you don't need to specify any parameters. The default value for <code>KeySpec</code>, <code>SYMMETRIC_DEFAULT</code>, the default value for <code>KeyUsage</code>, <code>ENCRYPT_DECRYPT</code>, and the default value for <code>Origin</code>, <code>AWS_KMS</code>, create a symmetric encryption KMS key with KMS key material.</p> <p>If you need a key for basic encryption and decryption or you are creating a KMS key to protect your resources in an Amazon Web Services service, create a symmetric encryption KMS key. The key material in a symmetric encryption key never leaves KMS unencrypted. You can use a symmetric encryption KMS key to encrypt and decrypt data up to 4,096 bytes, but they are typically used to generate data keys and data keys pairs. For details, see <a>GenerateDataKey</a> and <a>GenerateDataKeyPair</a>.</p> <p> </p> </dd> <dt>Asymmetric KMS keys</dt> <dd> <p>To create an asymmetric KMS key, use the <code>KeySpec</code> parameter to specify the type of key material in the KMS key. Then, use the <code>KeyUsage</code> parameter to determine whether the KMS key will be used to encrypt and decrypt or sign and verify. You can't change these properties after the KMS key is created.</p> <p>Asymmetric KMS keys contain an RSA key pair, Elliptic Curve (ECC) key pair, or an SM2 key pair (China Regions only). The private key in an asymmetric KMS key never leaves KMS unencrypted. However, you can use the <a>GetPublicKey</a> operation to download the public key so it can be used outside of KMS. KMS keys with RSA or SM2 key pairs can be used to encrypt or decrypt data or sign and verify messages (but not both). KMS keys with ECC key pairs can be used only to sign and verify messages. For information about asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> </p> </dd> <dt>HMAC KMS key</dt> <dd> <p>To create an HMAC KMS key, set the <code>KeySpec</code> parameter to a key spec value for HMAC KMS keys. Then set the <code>KeyUsage</code> parameter to <code>GENERATE_VERIFY_MAC</code>. You must set the key usage even though <code>GENERATE_VERIFY_MAC</code> is the only valid key usage value for HMAC KMS keys. You can't change these properties after the KMS key is created.</p> <p>HMAC KMS keys are symmetric keys that never leave KMS unencrypted. You can use HMAC keys to generate (<a>GenerateMac</a>) and verify (<a>VerifyMac</a>) HMAC codes for messages up to 4096 bytes.</p> <p> </p> </dd> <dt>Multi-Region primary keys</dt> <dt>Imported key material</dt> <dd> <p>To create a multi-Region <i>primary key</i> in the local Amazon Web Services Region, use the <code>MultiRegion</code> parameter with a value of <code>True</code>. To create a multi-Region <i>replica key</i>, that is, a KMS key with the same key ID and key material as a primary key, but in a different Amazon Web Services Region, use the <a>ReplicateKey</a> operation. To change a replica key to a primary key, and its primary key to a replica key, use the <a>UpdatePrimaryRegion</a> operation.</p> <p>You can create multi-Region KMS keys for all supported KMS key types: symmetric encryption KMS keys, HMAC KMS keys, asymmetric encryption KMS keys, and asymmetric signing KMS keys. You can also create multi-Region keys with imported key material. However, you can't create multi-Region keys in a custom key store.</p> <p>This operation supports <i>multi-Region keys</i>, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Multi-Region keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> </p> </dd> <dd> <p>To import your own key material into a KMS key, begin by creating a KMS key with no key material. To do this, use the <code>Origin</code> parameter of <code>CreateKey</code> with a value of <code>EXTERNAL</code>. Next, use <a>GetParametersForImport</a> operation to get a public key and import token. Use the wrapping public key to encrypt your key material. Then, use <a>ImportKeyMaterial</a> with your import token to import the key material. For step-by-step instructions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i> <i>Key Management Service Developer Guide</i> </i>.</p> <p>You can import key material into KMS keys of all supported KMS key types: symmetric encryption KMS keys, HMAC KMS keys, asymmetric encryption KMS keys, and asymmetric signing KMS keys. You can also create multi-Region keys with imported key material. However, you can't import key material into a KMS key in a custom key store.</p> <p>To create a multi-Region primary key with imported key material, use the <code>Origin</code> parameter of <code>CreateKey</code> with a value of <code>EXTERNAL</code> and the <code>MultiRegion</code> parameter with a value of <code>True</code>. To create replicas of the multi-Region primary key, use the <a>ReplicateKey</a> operation. For instructions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-import.html ">Importing key material into multi-Region keys</a>. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Multi-Region keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> </p> </dd> <dt>Custom key store</dt> <dd> <p>A <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> lets you protect your Amazon Web Services resources using keys in a backing key store that you own and manage. When you request a cryptographic operation with a KMS key in a custom key store, the operation is performed in the backing key store using its cryptographic keys.</p> <p>KMS supports <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-cloudhsm.html">CloudHSM key stores</a> backed by an CloudHSM cluster and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html">external key stores</a> backed by an external key manager outside of Amazon Web Services. When you create a KMS key in an CloudHSM key store, KMS generates an encryption key in the CloudHSM cluster and associates it with the KMS key. When you create a KMS key in an external key store, you specify an existing encryption key in the external key manager.</p> <note> <p>Some external key managers provide a simpler method for creating a KMS key in an external key store. For details, see your external key manager documentation.</p> </note> <p>Before you create a KMS key in a custom key store, the <code>ConnectionState</code> of the key store must be <code>CONNECTED</code>. To connect the custom key store, use the <a>ConnectCustomKeyStore</a> operation. To find the <code>ConnectionState</code>, use the <a>DescribeCustomKeyStores</a> operation.</p> <p>To create a KMS key in a custom key store, use the <code>CustomKeyStoreId</code>. Use the default <code>KeySpec</code> value, <code>SYMMETRIC_DEFAULT</code>, and the default <code>KeyUsage</code> value, <code>ENCRYPT_DECRYPT</code> to create a symmetric encryption key. No other key type is supported in a custom key store.</p> <p>To create a KMS key in an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-cloudhsm.html">CloudHSM key store</a>, use the <code>Origin</code> parameter with a value of <code>AWS_CLOUDHSM</code>. The CloudHSM cluster that is associated with the custom key store must have at least two active HSMs in different Availability Zones in the Amazon Web Services Region.</p> <p>To create a KMS key in an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html">external key store</a>, use the <code>Origin</code> parameter with a value of <code>EXTERNAL_KEY_STORE</code> and an <code>XksKeyId</code> parameter that identifies an existing external key.</p> <note> <p>Some external key managers provide a simpler method for creating a KMS key in an external key store. For details, see your external key manager documentation.</p> </note> </dd> </dl> <p> <b>Cross-account use</b>: No. You cannot use this operation to create a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateKey</a> (IAM policy). To use the <code>Tags</code> parameter, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:TagResource</a> (IAM policy). For examples and information about related permissions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/iam-policies.html#iam-policy-example-create-key">Allow a user to create KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DescribeKey</a> </p> </li> <li> <p> <a>ListKeys</a> </p> </li> <li> <p> <a>ScheduleKeyDeletion</a> </p> </li> </ul>

> Body parameter

```json
{
  "Policy": {},
  "Description": {},
  "KeyUsage": {},
  "CustomerMasterKeySpec": {},
  "KeySpec": {},
  "Origin": {},
  "CustomKeyStoreId": {},
  "BypassPolicyLockoutSafetyCheck": {},
  "Tags": {},
  "MultiRegion": {},
  "XksKeyId": {}
}
```

<h3 id="createkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateKeyRequest](#schemacreatekeyrequest)|true|none|
|» Policy|body|object|false|none|
|» Description|body|object|false|none|
|» KeyUsage|body|object|false|none|
|» CustomerMasterKeySpec|body|object|false|none|
|» KeySpec|body|object|false|none|
|» Origin|body|object|false|none|
|» CustomKeyStoreId|body|object|false|none|
|» BypassPolicyLockoutSafetyCheck|body|object|false|none|
|» Tags|body|object|false|none|
|» MultiRegion|body|object|false|none|
|» XksKeyId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.CreateKey|

> Example responses

> 200 Response

```json
{
  "KeyMetadata": {
    "AWSAccountId": "111122223333",
    "Arn": "arn:aws:kms:us-east-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321",
    "CreationDate": "2022-02-02T07:48:55-07:00",
    "CustomKeyStoreId": "cks-9876543210fedcba9",
    "CustomerMasterKeySpec": "SYMMETRIC_DEFAULT",
    "Description": "",
    "Enabled": true,
    "EncryptionAlgorithms": [
      "SYMMETRIC_DEFAULT"
    ],
    "KeyId": "0987dcba-09fe-87dc-65ba-ab0987654321",
    "KeyManager": "CUSTOMER",
    "KeySpec": "SYMMETRIC_DEFAULT",
    "KeyState": "Enabled",
    "KeyUsage": "ENCRYPT_DECRYPT",
    "MultiRegion": false,
    "Origin": "EXTERNAL_KEY_STORE",
    "XksKeyConfiguration": {
      "Id": "bb8562717f809024"
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

<h3 id="createkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateKeyResponse](#schemacreatekeyresponse)|
|480|480|MalformedPolicyDocumentException|[MalformedPolicyDocumentException](#schemamalformedpolicydocumentexception)|
|481|481|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|482|482|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|483|483|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|484|484|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|TagException|[TagException](#schematagexception)|
|487|487|CustomKeyStoreNotFoundException|[CustomKeyStoreNotFoundException](#schemacustomkeystorenotfoundexception)|
|488|488|CustomKeyStoreInvalidStateException|[CustomKeyStoreInvalidStateException](#schemacustomkeystoreinvalidstateexception)|
|489|489|CloudHsmClusterInvalidConfigurationException|[CloudHsmClusterInvalidConfigurationException](#schemacloudhsmclusterinvalidconfigurationexception)|
|490|490|XksKeyInvalidConfigurationException|[XksKeyInvalidConfigurationException](#schemaxkskeyinvalidconfigurationexception)|
|491|491|XksKeyAlreadyInUseException|[XksKeyAlreadyInUseException](#schemaxkskeyalreadyinuseexception)|
|492|492|XksKeyNotFoundException|[XksKeyNotFoundException](#schemaxkskeynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## Decrypt

<a id="opIdDecrypt"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.Decrypt' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.Decrypt' \
  -d '{
    "CiphertextBlob": {},
    "EncryptionContext": {
      "property1": "string",
      "property2": "string"
    },
    "GrantTokens": {},
    "KeyId": {},
    "EncryptionAlgorithm": {},
    "Recipient": {
      "KeyEncryptionAlgorithm": {},
      "AttestationDocument": {}
    },
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=TrentService.Decrypt`

<p>Decrypts ciphertext that was encrypted by a KMS key using any of the following operations:</p> <ul> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> <li> <p> <a>GenerateDataKeyWithoutPlaintext</a> </p> </li> <li> <p> <a>GenerateDataKeyPairWithoutPlaintext</a> </p> </li> </ul> <p>You can use this operation to decrypt ciphertext that was encrypted under a symmetric encryption KMS key or an asymmetric encryption KMS key. When the KMS key is asymmetric, you must specify the KMS key and the encryption algorithm that was used to encrypt the ciphertext. For information about asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The <code>Decrypt</code> operation also decrypts ciphertext that was encrypted outside of KMS by the public key in an KMS asymmetric KMS key. However, it cannot decrypt symmetric ciphertext produced by other libraries, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">Amazon Web Services Encryption SDK</a> or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 client-side encryption</a>. These libraries return a ciphertext format that is incompatible with KMS.</p> <p>If the ciphertext was encrypted under a symmetric encryption KMS key, the <code>KeyId</code> parameter is optional. KMS can get this information from metadata that it adds to the symmetric ciphertext blob. This feature adds durability to your implementation by ensuring that authorized users can decrypt ciphertext decades after it was encrypted, even if they've lost track of the key ID. However, specifying the KMS key is always recommended as a best practice. When you use the <code>KeyId</code> parameter to specify a KMS key, KMS only uses the KMS key you specify. If the ciphertext was encrypted under a different KMS key, the <code>Decrypt</code> operation fails. This practice ensures that you use the KMS key that you intend.</p> <p>Whenever possible, use key policies to give users permission to call the <code>Decrypt</code> operation on a particular KMS key, instead of using &amp;IAM; policies. Otherwise, you might create an &amp;IAM; policy that gives the user <code>Decrypt</code> permission on all KMS keys. This user could decrypt ciphertext that was encrypted by KMS keys in other accounts if the key policy for the cross-account KMS key permits it. If you must use an IAM policy for <code>Decrypt</code> permissions, limit the user to particular KMS keys or particular trusted accounts. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/iam-policies.html#iam-policies-best-practices">Best practices for IAM policies</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <code>Decrypt</code> also supports <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitro-enclave.html">Amazon Web Services Nitro Enclaves</a>, which provide an isolated compute environment in Amazon EC2. To call <code>Decrypt</code> for a Nitro enclave, use the <a href="https://docs.aws.amazon.com/enclaves/latest/user/developing-applications.html#sdk">Amazon Web Services Nitro Enclaves SDK</a> or any Amazon Web Services SDK. Use the <code>Recipient</code> parameter to provide the attestation document for the enclave. Instead of the plaintext data, the response includes the plaintext data encrypted with the public key from the attestation document (<code>CiphertextForRecipient</code>).For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves uses KMS</a> in the <i>Key Management Service Developer Guide</i>..</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. If you use the <code>KeyId</code> parameter to identify a KMS key in a different Amazon Web Services account, specify the key ARN or the alias ARN of the KMS key.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Decrypt</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> <li> <p> <a>ReEncrypt</a> </p> </li> </ul>

> Body parameter

```json
{
  "CiphertextBlob": {},
  "EncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "GrantTokens": {},
  "KeyId": {},
  "EncryptionAlgorithm": {},
  "Recipient": {
    "KeyEncryptionAlgorithm": {},
    "AttestationDocument": {}
  },
  "DryRun": {}
}
```

<h3 id="decrypt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DecryptRequest](#schemadecryptrequest)|true|none|
|» CiphertextBlob|body|object|true|none|
|» EncryptionContext|body|object|false|none|
|» » **additionalProperties**|body|[EncryptionContextValue](#schemaencryptioncontextvalue)|false|none|
|» GrantTokens|body|object|false|none|
|» KeyId|body|object|false|none|
|» EncryptionAlgorithm|body|object|false|none|
|» Recipient|body|object|false|none|
|» » KeyEncryptionAlgorithm|body|object|false|none|
|» » AttestationDocument|body|object|false|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.Decrypt|

> Example responses

> 200 Response

```json
{
  "CiphertextForRecipient": "<binary data>",
  "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
  "Plaintext": ""
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="decrypt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DecryptResponse](#schemadecryptresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|DisabledException|[DisabledException](#schemadisabledexception)|
|482|482|InvalidCiphertextException|[InvalidCiphertextException](#schemainvalidciphertextexception)|
|483|483|KeyUnavailableException|[KeyUnavailableException](#schemakeyunavailableexception)|
|484|484|IncorrectKeyException|[IncorrectKeyException](#schemaincorrectkeyexception)|
|485|485|InvalidKeyUsageException|[InvalidKeyUsageException](#schemainvalidkeyusageexception)|
|486|486|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|487|487|InvalidGrantTokenException|[InvalidGrantTokenException](#schemainvalidgranttokenexception)|
|488|488|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|489|489|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|490|490|DryRunOperationException|[DryRunOperationException](#schemadryrunoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAlias

<a id="opIdDeleteAlias"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.DeleteAlias' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.DeleteAlias' \
  -d '{
    "AliasName": {}
  }'
```

`POST /#X-Amz-Target=TrentService.DeleteAlias`

<p>Deletes the specified alias. </p> <note> <p>Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">ABAC for KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> </note> <p>Because an alias is not a property of a KMS key, you can delete and change the aliases of a KMS key without affecting the KMS key. Also, aliases do not appear in the response from the <a>DescribeKey</a> operation. To get the aliases of all KMS keys, use the <a>ListAliases</a> operation. </p> <p>Each KMS key can have multiple aliases. To change the alias of a KMS key, use <a>DeleteAlias</a> to delete the current alias and <a>CreateAlias</a> to create a new alias. To associate an existing alias with a different KMS key, call <a>UpdateAlias</a>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on an alias in a different Amazon Web Services account.</p> <p> <b>Required permissions</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DeleteAlias</a> on the alias (IAM policy).</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DeleteAlias</a> on the KMS key (key policy).</p> </li> </ul> <p>For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html#alias-access">Controlling access to aliases</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> </ul>

> Body parameter

```json
{
  "AliasName": {}
}
```

<h3 id="deletealias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteAliasRequest](#schemadeletealiasrequest)|true|none|
|» AliasName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.DeleteAlias|

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
|200|OK|Success|None|
|480|480|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|483|483|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCustomKeyStore

<a id="opIdDeleteCustomKeyStore"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.DeleteCustomKeyStore' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.DeleteCustomKeyStore' \
  -d '{
    "CustomKeyStoreId": {}
  }'
```

`POST /#X-Amz-Target=TrentService.DeleteCustomKeyStore`

<p>Deletes a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. This operation does not affect any backing elements of the custom key store. It does not delete the CloudHSM cluster that is associated with an CloudHSM key store, or affect any users or keys in the cluster. For an external key store, it does not affect the external key store proxy, external key manager, or any external keys.</p> <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage.</p> <p>The custom key store that you delete cannot contain any <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys">KMS keys</a>. Before deleting the key store, verify that you will never need to use any of the KMS keys in the key store for any <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>. Then, use <a>ScheduleKeyDeletion</a> to delete the KMS keys from the key store. After the required waiting period expires and all KMS keys are deleted from the custom key store, use <a>DisconnectCustomKeyStore</a> to disconnect the key store from KMS. Then, you can delete the custom key store.</p> <p>For keys in an CloudHSM key store, the <code>ScheduleKeyDeletion</code> operation makes a best effort to delete the key material from the associated cluster. However, you might need to manually <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-orphaned-key">delete the orphaned key material</a> from the cluster and its backups. KMS never creates, manages, or deletes cryptographic keys in the external key manager associated with an external key store. You must manage them using your external key manager tools.</p> <p>Instead of deleting the custom key store, consider using the <a>DisconnectCustomKeyStore</a> operation to disconnect the custom key store from its backing key store. While the key store is disconnected, you cannot create or use the KMS keys in the key store. But, you do not need to delete KMS keys and you can reconnect a disconnected custom key store at any time.</p> <p>If the operation succeeds, it returns a JSON object with no properties.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DeleteCustomKeyStore</a> (IAM policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ConnectCustomKeyStore</a> </p> </li> <li> <p> <a>CreateCustomKeyStore</a> </p> </li> <li> <p> <a>DescribeCustomKeyStores</a> </p> </li> <li> <p> <a>DisconnectCustomKeyStore</a> </p> </li> <li> <p> <a>UpdateCustomKeyStore</a> </p> </li> </ul>

> Body parameter

```json
{
  "CustomKeyStoreId": {}
}
```

<h3 id="deletecustomkeystore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteCustomKeyStoreRequest](#schemadeletecustomkeystorerequest)|true|none|
|» CustomKeyStoreId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.DeleteCustomKeyStore|

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

<h3 id="deletecustomkeystore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCustomKeyStoreResponse](#schemadeletecustomkeystoreresponse)|
|480|480|CustomKeyStoreHasCMKsException|[CustomKeyStoreHasCMKsException](#schemacustomkeystorehascmksexception)|
|481|481|CustomKeyStoreInvalidStateException|[CustomKeyStoreInvalidStateException](#schemacustomkeystoreinvalidstateexception)|
|482|482|CustomKeyStoreNotFoundException|[CustomKeyStoreNotFoundException](#schemacustomkeystorenotfoundexception)|
|483|483|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteImportedKeyMaterial

<a id="opIdDeleteImportedKeyMaterial"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.DeleteImportedKeyMaterial' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.DeleteImportedKeyMaterial' \
  -d '{
    "KeyId": {}
  }'
```

`POST /#X-Amz-Target=TrentService.DeleteImportedKeyMaterial`

<p>Deletes key material that was previously imported. This operation makes the specified KMS key temporarily unusable. To restore the usability of the KMS key, reimport the same key material. For more information about importing key material into KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>When the specified KMS key is in the <code>PendingDeletion</code> state, this operation does not change the KMS key's state. Otherwise, it changes the KMS key's state to <code>PendingImport</code>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DeleteImportedKeyMaterial</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>GetParametersForImport</a> </p> </li> <li> <p> <a>ImportKeyMaterial</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {}
}
```

<h3 id="deleteimportedkeymaterial-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteImportedKeyMaterialRequest](#schemadeleteimportedkeymaterialrequest)|true|none|
|» KeyId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.DeleteImportedKeyMaterial|

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

<h3 id="deleteimportedkeymaterial-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|481|481|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|482|482|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|485|485|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCustomKeyStores

<a id="opIdDescribeCustomKeyStores"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.DescribeCustomKeyStores' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.DescribeCustomKeyStores' \
  -d '{
    "CustomKeyStoreId": {},
    "CustomKeyStoreName": {},
    "Limit": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=TrentService.DescribeCustomKeyStores`

<p>Gets information about <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> in the account and Region.</p> <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage.</p> <p>By default, this operation returns information about all custom key stores in the account and Region. To get only information about a particular custom key store, use either the <code>CustomKeyStoreName</code> or <code>CustomKeyStoreId</code> parameter (but not both).</p> <p>To determine whether the custom key store is connected to its CloudHSM cluster or external key store proxy, use the <code>ConnectionState</code> element in the response. If an attempt to connect the custom key store failed, the <code>ConnectionState</code> value is <code>FAILED</code> and the <code>ConnectionErrorCode</code> element in the response indicates the cause of the failure. For help interpreting the <code>ConnectionErrorCode</code>, see <a>CustomKeyStoresListEntry</a>.</p> <p>Custom key stores have a <code>DISCONNECTED</code> connection state if the key store has never been connected or you used the <a>DisconnectCustomKeyStore</a> operation to disconnect it. Otherwise, the connection state is CONNECTED. If your custom key store connection state is <code>CONNECTED</code> but you are having trouble using it, verify that the backing store is active and available. For an CloudHSM key store, verify that the associated CloudHSM cluster is active and contains the minimum number of HSMs required for the operation, if any. For an external key store, verify that the external key store proxy and its associated external key manager are reachable and enabled.</p> <p> For help repairing your CloudHSM key store, see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting CloudHSM key stores</a>. For help repairing your external key store, see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/xks-troubleshooting.html">Troubleshooting external key stores</a>. Both topics are in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DescribeCustomKeyStores</a> (IAM policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ConnectCustomKeyStore</a> </p> </li> <li> <p> <a>CreateCustomKeyStore</a> </p> </li> <li> <p> <a>DeleteCustomKeyStore</a> </p> </li> <li> <p> <a>DisconnectCustomKeyStore</a> </p> </li> <li> <p> <a>UpdateCustomKeyStore</a> </p> </li> </ul>

> Body parameter

```json
{
  "CustomKeyStoreId": {},
  "CustomKeyStoreName": {},
  "Limit": {},
  "Marker": {}
}
```

<h3 id="describecustomkeystores-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeCustomKeyStoresRequest](#schemadescribecustomkeystoresrequest)|true|none|
|» CustomKeyStoreId|body|object|false|none|
|» CustomKeyStoreName|body|object|false|none|
|» Limit|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.DescribeCustomKeyStores|

> Example responses

> 200 Response

```json
{
  "CustomKeyStores": [
    {
      "ConnectionState": "CONNECTED",
      "CreationDate": "1.643057863.842",
      "CustomKeyStoreId": "cks-876543210fedcba98",
      "CustomKeyStoreName": "ExampleVPCExternalKeyStore",
      "CustomKeyStoreType": "EXTERNAL_KEY_STORE",
      "XksProxyConfiguration": {
        "AccessKeyId": "ABCDE12345670EXAMPLE",
        "Connectivity": "VPC_ENDPOINT_SERVICE",
        "UriEndpoint": "https://myproxy-private.xks.example.com",
        "UriPath": "/example-prefix/kms/xks/v1",
        "VpcEndpointServiceName": "com.amazonaws.vpce.us-east-1.vpce-svc-example1"
      }
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

<h3 id="describecustomkeystores-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCustomKeyStoresResponse](#schemadescribecustomkeystoresresponse)|
|480|480|CustomKeyStoreNotFoundException|[CustomKeyStoreNotFoundException](#schemacustomkeystorenotfoundexception)|
|481|481|InvalidMarkerException|[InvalidMarkerException](#schemainvalidmarkerexception)|
|482|482|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeKey

<a id="opIdDescribeKey"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.DescribeKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.DescribeKey' \
  -d '{
    "KeyId": {},
    "GrantTokens": {}
  }'
```

`POST /#X-Amz-Target=TrentService.DescribeKey`

<p>Provides detailed information about a KMS key. You can run <code>DescribeKey</code> on a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed key</a> or an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed key</a>.</p> <p>This detailed information includes the key ARN, creation date (and deletion date, if applicable), the key state, and the origin and expiration date (if any) of the key material. It includes fields, like <code>KeySpec</code>, that help you distinguish different types of KMS keys. It also displays the key usage (encryption, signing, or generating and verifying MACs) and the algorithms that the KMS key supports. </p> <p>For <a href="kms/latest/developerguide/multi-region-keys-overview.html">multi-Region keys</a>, <code>DescribeKey</code> displays the primary key and all related replica keys. For KMS keys in <a href="kms/latest/developerguide/keystore-cloudhsm.html">CloudHSM key stores</a>, it includes information about the key store, such as the key store ID and the CloudHSM cluster ID. For KMS keys in <a href="kms/latest/developerguide/keystore-external.html">external key stores</a>, it includes the custom key store ID and the ID of the external key.</p> <p> <code>DescribeKey</code> does not return the following information:</p> <ul> <li> <p>Aliases associated with the KMS key. To get this information, use <a>ListAliases</a>.</p> </li> <li> <p>Whether automatic key rotation is enabled on the KMS key. To get this information, use <a>GetKeyRotationStatus</a>. Also, some key states prevent a KMS key from being automatically rotated. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-keys-how-it-works">How Automatic Key Rotation Works</a> in the <i>Key Management Service Developer Guide</i>.</p> </li> <li> <p>Tags on the KMS key. To get this information, use <a>ListResourceTags</a>.</p> </li> <li> <p>Key policies and grants on the KMS key. To get this information, use <a>GetKeyPolicy</a> and <a>ListGrants</a>.</p> </li> </ul> <p>In general, <code>DescribeKey</code> is a non-mutating operation. It returns data about KMS keys, but doesn't change them. However, Amazon Web Services services use <code>DescribeKey</code> to create <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a> from a <i>predefined Amazon Web Services alias</i> with no key ID.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DescribeKey</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>GetKeyPolicy</a> </p> </li> <li> <p> <a>GetKeyRotationStatus</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>ListGrants</a> </p> </li> <li> <p> <a>ListKeys</a> </p> </li> <li> <p> <a>ListResourceTags</a> </p> </li> <li> <p> <a>ListRetirableGrants</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {},
  "GrantTokens": {}
}
```

<h3 id="describekey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeKeyRequest](#schemadescribekeyrequest)|true|none|
|» KeyId|body|object|true|none|
|» GrantTokens|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.DescribeKey|

> Example responses

> 200 Response

```json
{
  "KeyMetadata": {
    "AWSAccountId": "123456789012",
    "Arn": "arn:aws:kms:us-west-2:123456789012:key/1234abcd-12ab-34cd-56ef-1234567890ab",
    "CreationDate": 1646160362.664,
    "CustomKeyStoreId": "cks-1234567890abcdef0",
    "CustomerMasterKeySpec": "SYMMETRIC_DEFAULT",
    "Description": "External key store test key",
    "Enabled": true,
    "EncryptionAlgorithms": [
      "SYMMETRIC_DEFAULT"
    ],
    "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab",
    "KeyManager": "CUSTOMER",
    "KeySpec": "SYMMETRIC_DEFAULT",
    "KeyState": "Enabled",
    "KeyUsage": "ENCRYPT_DECRYPT",
    "MultiRegion": false,
    "Origin": "EXTERNAL_KEY_STORE",
    "XksKeyConfiguration": {
      "Id": "bb8562717f809024"
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

<h3 id="describekey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeKeyResponse](#schemadescribekeyresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|483|483|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableKey

<a id="opIdDisableKey"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.DisableKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.DisableKey' \
  -d '{
    "KeyId": {}
  }'
```

`POST /#X-Amz-Target=TrentService.DisableKey`

<p>Sets the state of a KMS key to disabled. This change temporarily prevents use of the KMS key for <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>. </p> <p>For more information about how key state affects the use of a KMS key, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i> <i>Key Management Service Developer Guide</i> </i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DisableKey</a> (key policy)</p> <p> <b>Related operations</b>: <a>EnableKey</a> </p>

> Body parameter

```json
{
  "KeyId": {}
}
```

<h3 id="disablekey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DisableKeyRequest](#schemadisablekeyrequest)|true|none|
|» KeyId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.DisableKey|

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

<h3 id="disablekey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|483|483|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|484|484|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableKeyRotation

<a id="opIdDisableKeyRotation"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.DisableKeyRotation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.DisableKeyRotation' \
  -d '{
    "KeyId": {}
  }'
```

`POST /#X-Amz-Target=TrentService.DisableKeyRotation`

<p>Disables <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation of the key material</a> of the specified symmetric encryption KMS key.</p> <p>Automatic key rotation is supported only on symmetric encryption KMS keys. You cannot enable automatic rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">asymmetric KMS keys</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC KMS keys</a>, KMS keys with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key material</a>, or KMS keys in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. To enable or disable automatic rotation of a set of related <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-manage.html#multi-region-rotate">multi-Region keys</a>, set the property on the primary key.</p> <p>You can enable (<a>EnableKeyRotation</a>) and disable automatic rotation of the key material in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed KMS keys</a>. Key material rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed KMS keys</a> is not configurable. KMS always rotates the key material for every year. Rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk">Amazon Web Services owned KMS keys</a> varies.</p> <note> <p>In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three years to every year. For details, see <a>EnableKeyRotation</a>.</p> </note> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DisableKeyRotation</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>EnableKeyRotation</a> </p> </li> <li> <p> <a>GetKeyRotationStatus</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {}
}
```

<h3 id="disablekeyrotation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DisableKeyRotationRequest](#schemadisablekeyrotationrequest)|true|none|
|» KeyId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.DisableKeyRotation|

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

<h3 id="disablekeyrotation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|DisabledException|[DisabledException](#schemadisabledexception)|
|482|482|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|483|483|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|484|484|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|485|485|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|486|486|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisconnectCustomKeyStore

<a id="opIdDisconnectCustomKeyStore"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.DisconnectCustomKeyStore' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.DisconnectCustomKeyStore' \
  -d '{
    "CustomKeyStoreId": {}
  }'
```

`POST /#X-Amz-Target=TrentService.DisconnectCustomKeyStore`

<p>Disconnects the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> from its backing key store. This operation disconnects an CloudHSM key store from its associated CloudHSM cluster or disconnects an external key store from the external key store proxy that communicates with your external key manager.</p> <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage.</p> <p>While a custom key store is disconnected, you can manage the custom key store and its KMS keys, but you cannot create or use its KMS keys. You can reconnect the custom key store at any time.</p> <note> <p>While a custom key store is disconnected, all attempts to create KMS keys in the custom key store or to use existing KMS keys in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> will fail. This action can prevent users from storing and accessing sensitive data.</p> </note> <p>When you disconnect a custom key store, its <code>ConnectionState</code> changes to <code>Disconnected</code>. To find the connection state of a custom key store, use the <a>DescribeCustomKeyStores</a> operation. To reconnect a custom key store, use the <a>ConnectCustomKeyStore</a> operation.</p> <p>If the operation succeeds, it returns a JSON object with no properties.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DisconnectCustomKeyStore</a> (IAM policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ConnectCustomKeyStore</a> </p> </li> <li> <p> <a>CreateCustomKeyStore</a> </p> </li> <li> <p> <a>DeleteCustomKeyStore</a> </p> </li> <li> <p> <a>DescribeCustomKeyStores</a> </p> </li> <li> <p> <a>UpdateCustomKeyStore</a> </p> </li> </ul>

> Body parameter

```json
{
  "CustomKeyStoreId": {}
}
```

<h3 id="disconnectcustomkeystore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DisconnectCustomKeyStoreRequest](#schemadisconnectcustomkeystorerequest)|true|none|
|» CustomKeyStoreId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.DisconnectCustomKeyStore|

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

<h3 id="disconnectcustomkeystore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisconnectCustomKeyStoreResponse](#schemadisconnectcustomkeystoreresponse)|
|480|480|CustomKeyStoreInvalidStateException|[CustomKeyStoreInvalidStateException](#schemacustomkeystoreinvalidstateexception)|
|481|481|CustomKeyStoreNotFoundException|[CustomKeyStoreNotFoundException](#schemacustomkeystorenotfoundexception)|
|482|482|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableKey

<a id="opIdEnableKey"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.EnableKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.EnableKey' \
  -d '{
    "KeyId": {}
  }'
```

`POST /#X-Amz-Target=TrentService.EnableKey`

<p>Sets the key state of a KMS key to enabled. This allows you to use the KMS key for <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:EnableKey</a> (key policy)</p> <p> <b>Related operations</b>: <a>DisableKey</a> </p>

> Body parameter

```json
{
  "KeyId": {}
}
```

<h3 id="enablekey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[EnableKeyRequest](#schemaenablekeyrequest)|true|none|
|» KeyId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.EnableKey|

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

<h3 id="enablekey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|483|483|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableKeyRotation

<a id="opIdEnableKeyRotation"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.EnableKeyRotation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.EnableKeyRotation' \
  -d '{
    "KeyId": {}
  }'
```

`POST /#X-Amz-Target=TrentService.EnableKeyRotation`

<p>Enables <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation of the key material</a> of the specified symmetric encryption KMS key. </p> <p>When you enable automatic rotation of a<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed KMS key</a>, KMS rotates the key material of the KMS key one year (approximately 365 days) from the enable date and every year thereafter. You can monitor rotation of the key material for your KMS keys in CloudTrail and Amazon CloudWatch. To disable rotation of the key material in a customer managed KMS key, use the <a>DisableKeyRotation</a> operation.</p> <p>Automatic key rotation is supported only on <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#symmetric-cmks">symmetric encryption KMS keys</a>. You cannot enable automatic rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">asymmetric KMS keys</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC KMS keys</a>, KMS keys with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key material</a>, or KMS keys in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. To enable or disable automatic rotation of a set of related <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-manage.html#multi-region-rotate">multi-Region keys</a>, set the property on the primary key. </p> <p>You cannot enable or disable automatic rotation <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed KMS keys</a>. KMS always rotates the key material of Amazon Web Services managed keys every year. Rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk">Amazon Web Services owned KMS keys</a> varies.</p> <note> <p>In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three years (approximately 1,095 days) to every year (approximately 365 days).</p> <p>New Amazon Web Services managed keys are automatically rotated one year after they are created, and approximately every year thereafter. </p> <p>Existing Amazon Web Services managed keys are automatically rotated one year after their most recent rotation, and every year thereafter.</p> </note> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:EnableKeyRotation</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DisableKeyRotation</a> </p> </li> <li> <p> <a>GetKeyRotationStatus</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {}
}
```

<h3 id="enablekeyrotation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[EnableKeyRotationRequest](#schemaenablekeyrotationrequest)|true|none|
|» KeyId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.EnableKeyRotation|

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

<h3 id="enablekeyrotation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|DisabledException|[DisabledException](#schemadisabledexception)|
|482|482|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|483|483|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|484|484|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|485|485|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|486|486|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## Encrypt

<a id="opIdEncrypt"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.Encrypt' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.Encrypt' \
  -d '{
    "KeyId": {},
    "Plaintext": {},
    "EncryptionContext": {
      "property1": "string",
      "property2": "string"
    },
    "GrantTokens": {},
    "EncryptionAlgorithm": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=TrentService.Encrypt`

<p>Encrypts plaintext of up to 4,096 bytes using a KMS key. You can use a symmetric or asymmetric KMS key with a <code>KeyUsage</code> of <code>ENCRYPT_DECRYPT</code>.</p> <p>You can use this operation to encrypt small amounts of arbitrary data, such as a personal identifier or database password, or other sensitive information. You don't need to use the <code>Encrypt</code> operation to encrypt a data key. The <a>GenerateDataKey</a> and <a>GenerateDataKeyPair</a> operations return a plaintext data key and an encrypted copy of that data key.</p> <p>If you use a symmetric encryption KMS key, you can use an encryption context to add additional security to your encryption operation. If you specify an <code>EncryptionContext</code> when encrypting data, you must specify the same encryption context (a case-sensitive exact match) when decrypting the data. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>If you specify an asymmetric KMS key, you must also specify the encryption algorithm. The algorithm must be compatible with the KMS key spec.</p> <important> <p>When you use an asymmetric KMS key to encrypt or reencrypt data, be sure to record the KMS key and encryption algorithm that you choose. You will be required to provide the same KMS key and encryption algorithm when you decrypt the data. If the KMS key and algorithm do not match the values used to encrypt the data, the decrypt operation fails.</p> <p>You are not required to supply the key ID and encryption algorithm when you decrypt with symmetric encryption KMS keys because KMS stores this information in the ciphertext blob. KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.</p> </important> <p>The maximum size of the data that you can encrypt varies with the type of KMS key and the encryption algorithm that you choose.</p> <ul> <li> <p>Symmetric encryption KMS keys</p> <ul> <li> <p> <code>SYMMETRIC_DEFAULT</code>: 4096 bytes</p> </li> </ul> </li> <li> <p> <code>RSA_2048</code> </p> <ul> <li> <p> <code>RSAES_OAEP_SHA_1</code>: 214 bytes</p> </li> <li> <p> <code>RSAES_OAEP_SHA_256</code>: 190 bytes</p> </li> </ul> </li> <li> <p> <code>RSA_3072</code> </p> <ul> <li> <p> <code>RSAES_OAEP_SHA_1</code>: 342 bytes</p> </li> <li> <p> <code>RSAES_OAEP_SHA_256</code>: 318 bytes</p> </li> </ul> </li> <li> <p> <code>RSA_4096</code> </p> <ul> <li> <p> <code>RSAES_OAEP_SHA_1</code>: 470 bytes</p> </li> <li> <p> <code>RSAES_OAEP_SHA_256</code>: 446 bytes</p> </li> </ul> </li> <li> <p> <code>SM2PKE</code>: 1024 bytes (China Regions only)</p> </li> </ul> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Encrypt</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {},
  "Plaintext": {},
  "EncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "GrantTokens": {},
  "EncryptionAlgorithm": {},
  "DryRun": {}
}
```

<h3 id="encrypt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[EncryptRequest](#schemaencryptrequest)|true|none|
|» KeyId|body|object|true|none|
|» Plaintext|body|object|true|none|
|» EncryptionContext|body|object|false|none|
|» » **additionalProperties**|body|[EncryptionContextValue](#schemaencryptioncontextvalue)|false|none|
|» GrantTokens|body|object|false|none|
|» EncryptionAlgorithm|body|object|false|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.Encrypt|

> Example responses

> 200 Response

```json
{
  "CiphertextBlob": "<binary data>",
  "EncryptionAlgorithm": "RSAES_OAEP_SHA_256",
  "KeyId": "arn:aws:kms:us-west-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="encrypt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EncryptResponse](#schemaencryptresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|DisabledException|[DisabledException](#schemadisabledexception)|
|482|482|KeyUnavailableException|[KeyUnavailableException](#schemakeyunavailableexception)|
|483|483|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|484|484|InvalidKeyUsageException|[InvalidKeyUsageException](#schemainvalidkeyusageexception)|
|485|485|InvalidGrantTokenException|[InvalidGrantTokenException](#schemainvalidgranttokenexception)|
|486|486|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|487|487|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|488|488|DryRunOperationException|[DryRunOperationException](#schemadryrunoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GenerateDataKey

<a id="opIdGenerateDataKey"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.GenerateDataKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.GenerateDataKey' \
  -d '{
    "KeyId": {},
    "EncryptionContext": {
      "property1": "string",
      "property2": "string"
    },
    "NumberOfBytes": {},
    "KeySpec": {},
    "GrantTokens": {},
    "Recipient": {
      "KeyEncryptionAlgorithm": {},
      "AttestationDocument": {}
    },
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=TrentService.GenerateDataKey`

<p>Returns a unique symmetric data key for use outside of KMS. This operation returns a plaintext copy of the data key and a copy that is encrypted under a symmetric encryption KMS key that you specify. The bytes in the plaintext key are random; they are not related to the caller or the KMS key. You can use the plaintext key to encrypt your data outside of KMS and store the encrypted data key with the encrypted data.</p> <p>To generate a data key, specify the symmetric encryption KMS key that will be used to encrypt the data key. You cannot use an asymmetric KMS key to encrypt data keys. To get the type of your KMS key, use the <a>DescribeKey</a> operation.</p> <p>You must also specify the length of the data key. Use either the <code>KeySpec</code> or <code>NumberOfBytes</code> parameters (but not both). For 128-bit and 256-bit data keys, use the <code>KeySpec</code> parameter.</p> <p>To generate a 128-bit SM4 data key (China Regions only), specify a <code>KeySpec</code> value of <code>AES_128</code> or a <code>NumberOfBytes</code> value of <code>16</code>. The symmetric encryption key used in China Regions to encrypt your data key is an SM4 encryption key.</p> <p>To get only an encrypted copy of the data key, use <a>GenerateDataKeyWithoutPlaintext</a>. To generate an asymmetric data key pair, use the <a>GenerateDataKeyPair</a> or <a>GenerateDataKeyPairWithoutPlaintext</a> operation. To get a cryptographically secure random byte string, use <a>GenerateRandom</a>.</p> <p>You can use an optional encryption context to add additional security to the encryption operation. If you specify an <code>EncryptionContext</code>, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <code>GenerateDataKey</code> also supports <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitro-enclave.html">Amazon Web Services Nitro Enclaves</a>, which provide an isolated compute environment in Amazon EC2. To call <code>GenerateDataKey</code> for an Amazon Web Services Nitro enclave, use the <a href="https://docs.aws.amazon.com/enclaves/latest/user/developing-applications.html#sdk">Amazon Web Services Nitro Enclaves SDK</a> or any Amazon Web Services SDK. Use the <code>Recipient</code> parameter to provide the attestation document for the enclave. <code>GenerateDataKey</code> returns a copy of the data key encrypted under the specified KMS key, as usual. But instead of a plaintext copy of the data key, the response includes a copy of the data key encrypted under the public key from the attestation document (<code>CiphertextForRecipient</code>). For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves uses KMS</a> in the <i>Key Management Service Developer Guide</i>..</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>How to use your data key</b> </p> <p>We recommend that you use the following pattern to encrypt data locally in your application. You can write your own code or use a client-side encryption library, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">Amazon Web Services Encryption SDK</a>, the <a href="https://docs.aws.amazon.com/dynamodb-encryption-client/latest/devguide/">Amazon DynamoDB Encryption Client</a>, or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 client-side encryption</a> to do these tasks for you.</p> <p>To encrypt data outside of KMS:</p> <ol> <li> <p>Use the <code>GenerateDataKey</code> operation to get a data key.</p> </li> <li> <p>Use the plaintext data key (in the <code>Plaintext</code> field of the response) to encrypt your data outside of KMS. Then erase the plaintext data key from memory.</p> </li> <li> <p>Store the encrypted data key (in the <code>CiphertextBlob</code> field of the response) with the encrypted data.</p> </li> </ol> <p>To decrypt data outside of KMS:</p> <ol> <li> <p>Use the <a>Decrypt</a> operation to decrypt the encrypted data key. The operation returns a plaintext copy of the data key.</p> </li> <li> <p>Use the plaintext data key to decrypt data outside of KMS, then erase the plaintext data key from memory.</p> </li> </ol> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKey</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> <li> <p> <a>GenerateDataKeyPairWithoutPlaintext</a> </p> </li> <li> <p> <a>GenerateDataKeyWithoutPlaintext</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {},
  "EncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "NumberOfBytes": {},
  "KeySpec": {},
  "GrantTokens": {},
  "Recipient": {
    "KeyEncryptionAlgorithm": {},
    "AttestationDocument": {}
  },
  "DryRun": {}
}
```

<h3 id="generatedatakey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GenerateDataKeyRequest](#schemageneratedatakeyrequest)|true|none|
|» KeyId|body|object|true|none|
|» EncryptionContext|body|object|false|none|
|» » **additionalProperties**|body|[EncryptionContextValue](#schemaencryptioncontextvalue)|false|none|
|» NumberOfBytes|body|object|false|none|
|» KeySpec|body|object|false|none|
|» GrantTokens|body|object|false|none|
|» Recipient|body|object|false|none|
|» » KeyEncryptionAlgorithm|body|object|false|none|
|» » AttestationDocument|body|object|false|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.GenerateDataKey|

> Example responses

> 200 Response

```json
{
  "CiphertextBlob": "<binary data>",
  "CiphertextForRecipient": "<binary data>",
  "KeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
  "Plaintext": ""
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="generatedatakey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GenerateDataKeyResponse](#schemageneratedatakeyresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|DisabledException|[DisabledException](#schemadisabledexception)|
|482|482|KeyUnavailableException|[KeyUnavailableException](#schemakeyunavailableexception)|
|483|483|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|484|484|InvalidKeyUsageException|[InvalidKeyUsageException](#schemainvalidkeyusageexception)|
|485|485|InvalidGrantTokenException|[InvalidGrantTokenException](#schemainvalidgranttokenexception)|
|486|486|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|487|487|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|488|488|DryRunOperationException|[DryRunOperationException](#schemadryrunoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GenerateDataKeyPair

<a id="opIdGenerateDataKeyPair"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.GenerateDataKeyPair' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.GenerateDataKeyPair' \
  -d '{
    "EncryptionContext": {
      "property1": "string",
      "property2": "string"
    },
    "KeyId": {},
    "KeyPairSpec": {},
    "GrantTokens": {},
    "Recipient": {
      "KeyEncryptionAlgorithm": {},
      "AttestationDocument": {}
    },
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=TrentService.GenerateDataKeyPair`

<p>Returns a unique asymmetric data key pair for use outside of KMS. This operation returns a plaintext public key, a plaintext private key, and a copy of the private key that is encrypted under the symmetric encryption KMS key you specify. You can use the data key pair to perform asymmetric cryptography and implement digital signatures outside of KMS. The bytes in the keys are random; they not related to the caller or to the KMS key that is used to encrypt the private key. </p> <p>You can use the public key that <code>GenerateDataKeyPair</code> returns to encrypt data or verify a signature outside of KMS. Then, store the encrypted private key with the data. When you are ready to decrypt data or sign a message, you can use the <a>Decrypt</a> operation to decrypt the encrypted private key.</p> <p>To generate a data key pair, you must specify a symmetric encryption KMS key to encrypt the private key in a data key pair. You cannot use an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the <a>DescribeKey</a> operation. </p> <p>Use the <code>KeyPairSpec</code> parameter to choose an RSA or Elliptic Curve (ECC) data key pair. In China Regions, you can also choose an SM2 data key pair. KMS recommends that you use ECC key pairs for signing, and use RSA and SM2 key pairs for either encryption or signing, but not both. However, KMS cannot enforce any restrictions on the use of data key pairs outside of KMS.</p> <p>If you are using the data key pair to encrypt data, or for any operation where you don't immediately need a private key, consider using the <a>GenerateDataKeyPairWithoutPlaintext</a> operation. <code>GenerateDataKeyPairWithoutPlaintext</code> returns a plaintext public key and an encrypted private key, but omits the plaintext private key that you need only to decrypt ciphertext or sign a message. Later, when you need to decrypt the data or sign a message, use the <a>Decrypt</a> operation to decrypt the encrypted private key in the data key pair.</p> <p> <code>GenerateDataKeyPair</code> returns a unique data key pair for each request. The bytes in the keys are random; they are not related to the caller or the KMS key that is used to encrypt the private key. The public key is a DER-encoded X.509 SubjectPublicKeyInfo, as specified in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>. The private key is a DER-encoded PKCS8 PrivateKeyInfo, as specified in <a href="https://tools.ietf.org/html/rfc5958">RFC 5958</a>.</p> <p> <code>GenerateDataKeyPair</code> also supports <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitro-enclave.html">Amazon Web Services Nitro Enclaves</a>, which provide an isolated compute environment in Amazon EC2. To call <code>GenerateDataKeyPair</code> for an Amazon Web Services Nitro enclave, use the <a href="https://docs.aws.amazon.com/enclaves/latest/user/developing-applications.html#sdk">Amazon Web Services Nitro Enclaves SDK</a> or any Amazon Web Services SDK. Use the <code>Recipient</code> parameter to provide the attestation document for the enclave. <code>GenerateDataKeyPair</code> returns the public data key and a copy of the private data key encrypted under the specified KMS key, as usual. But instead of a plaintext copy of the private data key (<code>PrivateKeyPlaintext</code>), the response includes a copy of the private data key encrypted under the public key from the attestation document (<code>CiphertextForRecipient</code>). For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves uses KMS</a> in the <i>Key Management Service Developer Guide</i>..</p> <p>You can use an optional encryption context to add additional security to the encryption operation. If you specify an <code>EncryptionContext</code>, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKeyPair</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPairWithoutPlaintext</a> </p> </li> <li> <p> <a>GenerateDataKeyWithoutPlaintext</a> </p> </li> </ul>

> Body parameter

```json
{
  "EncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "KeyId": {},
  "KeyPairSpec": {},
  "GrantTokens": {},
  "Recipient": {
    "KeyEncryptionAlgorithm": {},
    "AttestationDocument": {}
  },
  "DryRun": {}
}
```

<h3 id="generatedatakeypair-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GenerateDataKeyPairRequest](#schemageneratedatakeypairrequest)|true|none|
|» EncryptionContext|body|object|false|none|
|» » **additionalProperties**|body|[EncryptionContextValue](#schemaencryptioncontextvalue)|false|none|
|» KeyId|body|object|true|none|
|» KeyPairSpec|body|object|true|none|
|» GrantTokens|body|object|false|none|
|» Recipient|body|object|false|none|
|» » KeyEncryptionAlgorithm|body|object|false|none|
|» » AttestationDocument|body|object|false|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.GenerateDataKeyPair|

> Example responses

> 200 Response

```json
{
  "CiphertextForRecipient": "<binary data>",
  "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
  "KeyPairSpec": "RSA_3072",
  "PrivateKeyCiphertextBlob": "<binary data>",
  "PrivateKeyPlaintext": "",
  "PublicKey": "<binary data>"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="generatedatakeypair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GenerateDataKeyPairResponse](#schemageneratedatakeypairresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|DisabledException|[DisabledException](#schemadisabledexception)|
|482|482|KeyUnavailableException|[KeyUnavailableException](#schemakeyunavailableexception)|
|483|483|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|484|484|InvalidKeyUsageException|[InvalidKeyUsageException](#schemainvalidkeyusageexception)|
|485|485|InvalidGrantTokenException|[InvalidGrantTokenException](#schemainvalidgranttokenexception)|
|486|486|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|487|487|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|488|488|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|489|489|DryRunOperationException|[DryRunOperationException](#schemadryrunoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GenerateDataKeyPairWithoutPlaintext

<a id="opIdGenerateDataKeyPairWithoutPlaintext"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.GenerateDataKeyPairWithoutPlaintext' \
  -d '{
    "EncryptionContext": {
      "property1": "string",
      "property2": "string"
    },
    "KeyId": {},
    "KeyPairSpec": {},
    "GrantTokens": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext`

<p>Returns a unique asymmetric data key pair for use outside of KMS. This operation returns a plaintext public key and a copy of the private key that is encrypted under the symmetric encryption KMS key you specify. Unlike <a>GenerateDataKeyPair</a>, this operation does not return a plaintext private key. The bytes in the keys are random; they are not related to the caller or to the KMS key that is used to encrypt the private key. </p> <p>You can use the public key that <code>GenerateDataKeyPairWithoutPlaintext</code> returns to encrypt data or verify a signature outside of KMS. Then, store the encrypted private key with the data. When you are ready to decrypt data or sign a message, you can use the <a>Decrypt</a> operation to decrypt the encrypted private key.</p> <p>To generate a data key pair, you must specify a symmetric encryption KMS key to encrypt the private key in a data key pair. You cannot use an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the <a>DescribeKey</a> operation. </p> <p>Use the <code>KeyPairSpec</code> parameter to choose an RSA or Elliptic Curve (ECC) data key pair. In China Regions, you can also choose an SM2 data key pair. KMS recommends that you use ECC key pairs for signing, and use RSA and SM2 key pairs for either encryption or signing, but not both. However, KMS cannot enforce any restrictions on the use of data key pairs outside of KMS.</p> <p> <code>GenerateDataKeyPairWithoutPlaintext</code> returns a unique data key pair for each request. The bytes in the key are not related to the caller or KMS key that is used to encrypt the private key. The public key is a DER-encoded X.509 SubjectPublicKeyInfo, as specified in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>.</p> <p>You can use an optional encryption context to add additional security to the encryption operation. If you specify an <code>EncryptionContext</code>, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKeyPairWithoutPlaintext</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> <li> <p> <a>GenerateDataKeyWithoutPlaintext</a> </p> </li> </ul>

> Body parameter

```json
{
  "EncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "KeyId": {},
  "KeyPairSpec": {},
  "GrantTokens": {},
  "DryRun": {}
}
```

<h3 id="generatedatakeypairwithoutplaintext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GenerateDataKeyPairWithoutPlaintextRequest](#schemageneratedatakeypairwithoutplaintextrequest)|true|none|
|» EncryptionContext|body|object|false|none|
|» » **additionalProperties**|body|[EncryptionContextValue](#schemaencryptioncontextvalue)|false|none|
|» KeyId|body|object|true|none|
|» KeyPairSpec|body|object|true|none|
|» GrantTokens|body|object|false|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.GenerateDataKeyPairWithoutPlaintext|

> Example responses

> 200 Response

```json
{
  "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
  "KeyPairSpec": "ECC_NIST_P521",
  "PrivateKeyCiphertextBlob": "<binary data>",
  "PublicKey": "<binary data>"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="generatedatakeypairwithoutplaintext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GenerateDataKeyPairWithoutPlaintextResponse](#schemageneratedatakeypairwithoutplaintextresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|DisabledException|[DisabledException](#schemadisabledexception)|
|482|482|KeyUnavailableException|[KeyUnavailableException](#schemakeyunavailableexception)|
|483|483|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|484|484|InvalidKeyUsageException|[InvalidKeyUsageException](#schemainvalidkeyusageexception)|
|485|485|InvalidGrantTokenException|[InvalidGrantTokenException](#schemainvalidgranttokenexception)|
|486|486|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|487|487|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|488|488|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|489|489|DryRunOperationException|[DryRunOperationException](#schemadryrunoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GenerateDataKeyWithoutPlaintext

<a id="opIdGenerateDataKeyWithoutPlaintext"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.GenerateDataKeyWithoutPlaintext' \
  -d '{
    "KeyId": {},
    "EncryptionContext": {
      "property1": "string",
      "property2": "string"
    },
    "KeySpec": {},
    "NumberOfBytes": {},
    "GrantTokens": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext`

<p>Returns a unique symmetric data key for use outside of KMS. This operation returns a data key that is encrypted under a symmetric encryption KMS key that you specify. The bytes in the key are random; they are not related to the caller or to the KMS key.</p> <p> <code>GenerateDataKeyWithoutPlaintext</code> is identical to the <a>GenerateDataKey</a> operation except that it does not return a plaintext copy of the data key. </p> <p>This operation is useful for systems that need to encrypt data at some point, but not immediately. When you need to encrypt the data, you call the <a>Decrypt</a> operation on the encrypted copy of the key.</p> <p>It's also useful in distributed systems with different levels of trust. For example, you might store encrypted data in containers. One component of your system creates new containers and stores an encrypted data key with each container. Then, a different component puts the data into the containers. That component first decrypts the data key, uses the plaintext data key to encrypt data, puts the encrypted data into the container, and then destroys the plaintext data key. In this system, the component that creates the containers never sees the plaintext data key.</p> <p>To request an asymmetric data key pair, use the <a>GenerateDataKeyPair</a> or <a>GenerateDataKeyPairWithoutPlaintext</a> operations.</p> <p>To generate a data key, you must specify the symmetric encryption KMS key that is used to encrypt the data key. You cannot use an asymmetric KMS key or a key in a custom key store to generate a data key. To get the type of your KMS key, use the <a>DescribeKey</a> operation.</p> <p>You must also specify the length of the data key. Use either the <code>KeySpec</code> or <code>NumberOfBytes</code> parameters (but not both). For 128-bit and 256-bit data keys, use the <code>KeySpec</code> parameter.</p> <p>To generate an SM4 data key (China Regions only), specify a <code>KeySpec</code> value of <code>AES_128</code> or <code>NumberOfBytes</code> value of <code>16</code>. The symmetric encryption key used in China Regions to encrypt your data key is an SM4 encryption key.</p> <p>If the operation succeeds, you will find the encrypted copy of the data key in the <code>CiphertextBlob</code> field.</p> <p>You can use an optional encryption context to add additional security to the encryption operation. If you specify an <code>EncryptionContext</code>, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKeyWithoutPlaintext</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> <li> <p> <a>GenerateDataKeyPairWithoutPlaintext</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {},
  "EncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "KeySpec": {},
  "NumberOfBytes": {},
  "GrantTokens": {},
  "DryRun": {}
}
```

<h3 id="generatedatakeywithoutplaintext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GenerateDataKeyWithoutPlaintextRequest](#schemageneratedatakeywithoutplaintextrequest)|true|none|
|» KeyId|body|object|true|none|
|» EncryptionContext|body|object|false|none|
|» » **additionalProperties**|body|[EncryptionContextValue](#schemaencryptioncontextvalue)|false|none|
|» KeySpec|body|object|false|none|
|» NumberOfBytes|body|object|false|none|
|» GrantTokens|body|object|false|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.GenerateDataKeyWithoutPlaintext|

> Example responses

> 200 Response

```json
{
  "CiphertextBlob": "<binary data>",
  "KeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="generatedatakeywithoutplaintext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GenerateDataKeyWithoutPlaintextResponse](#schemageneratedatakeywithoutplaintextresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|DisabledException|[DisabledException](#schemadisabledexception)|
|482|482|KeyUnavailableException|[KeyUnavailableException](#schemakeyunavailableexception)|
|483|483|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|484|484|InvalidKeyUsageException|[InvalidKeyUsageException](#schemainvalidkeyusageexception)|
|485|485|InvalidGrantTokenException|[InvalidGrantTokenException](#schemainvalidgranttokenexception)|
|486|486|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|487|487|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|488|488|DryRunOperationException|[DryRunOperationException](#schemadryrunoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GenerateMac

<a id="opIdGenerateMac"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.GenerateMac' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.GenerateMac' \
  -d '{
    "Message": {},
    "KeyId": {},
    "MacAlgorithm": {},
    "GrantTokens": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=TrentService.GenerateMac`

<p>Generates a hash-based message authentication code (HMAC) for a message using an HMAC KMS key and a MAC algorithm that the key supports. HMAC KMS keys and the HMAC algorithms that KMS uses conform to industry standards defined in <a href="https://datatracker.ietf.org/doc/html/rfc2104">RFC 2104</a>.</p> <p>You can use value that GenerateMac returns in the <a>VerifyMac</a> operation to demonstrate that the original message has not changed. Also, because a secret key is used to create the hash, you can verify that the party that generated the hash has the required secret key. You can also use the raw result to implement HMAC-based algorithms such as key derivation functions. This operation is part of KMS support for HMAC KMS keys. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC keys in KMS</a> in the <i> <i>Key Management Service Developer Guide</i> </i>.</p> <note> <p>Best practices recommend that you limit the time during which any signing mechanism, including an HMAC, is effective. This deters an attack where the actor uses a signed message to establish validity repeatedly or long after the message is superseded. HMAC tags do not include a timestamp, but you can include a timestamp in the token or message to help you detect when its time to refresh the HMAC. </p> </note> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter. </p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateMac</a> (key policy)</p> <p> <b>Related operations</b>: <a>VerifyMac</a> </p>

> Body parameter

```json
{
  "Message": {},
  "KeyId": {},
  "MacAlgorithm": {},
  "GrantTokens": {},
  "DryRun": {}
}
```

<h3 id="generatemac-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GenerateMacRequest](#schemageneratemacrequest)|true|none|
|» Message|body|object|true|none|
|» KeyId|body|object|true|none|
|» MacAlgorithm|body|object|true|none|
|» GrantTokens|body|object|false|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.GenerateMac|

> Example responses

> 200 Response

```json
{
  "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
  "Mac": "<HMAC_TAG>",
  "MacAlgorithm": "HMAC_SHA_384"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="generatemac-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GenerateMacResponse](#schemageneratemacresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|DisabledException|[DisabledException](#schemadisabledexception)|
|482|482|KeyUnavailableException|[KeyUnavailableException](#schemakeyunavailableexception)|
|483|483|InvalidKeyUsageException|[InvalidKeyUsageException](#schemainvalidkeyusageexception)|
|484|484|InvalidGrantTokenException|[InvalidGrantTokenException](#schemainvalidgranttokenexception)|
|485|485|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|486|486|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|487|487|DryRunOperationException|[DryRunOperationException](#schemadryrunoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GenerateRandom

<a id="opIdGenerateRandom"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.GenerateRandom' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.GenerateRandom' \
  -d '{
    "NumberOfBytes": {},
    "CustomKeyStoreId": {},
    "Recipient": {
      "KeyEncryptionAlgorithm": {},
      "AttestationDocument": {}
    }
  }'
```

`POST /#X-Amz-Target=TrentService.GenerateRandom`

<p>Returns a random byte string that is cryptographically secure.</p> <p>You must use the <code>NumberOfBytes</code> parameter to specify the length of the random byte string. There is no default value for string length.</p> <p>By default, the random byte string is generated in KMS. To generate the byte string in the CloudHSM cluster associated with an CloudHSM key store, use the <code>CustomKeyStoreId</code> parameter.</p> <p> <code>GenerateRandom</code> also supports <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitro-enclave.html">Amazon Web Services Nitro Enclaves</a>, which provide an isolated compute environment in Amazon EC2. To call <code>GenerateRandom</code> for a Nitro enclave, use the <a href="https://docs.aws.amazon.com/enclaves/latest/user/developing-applications.html#sdk">Amazon Web Services Nitro Enclaves SDK</a> or any Amazon Web Services SDK. Use the <code>Recipient</code> parameter to provide the attestation document for the enclave. Instead of plaintext bytes, the response includes the plaintext bytes encrypted under the public key from the attestation document (<code>CiphertextForRecipient</code>).For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves uses KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>For more information about entropy and random number generation, see <a href="https://docs.aws.amazon.com/kms/latest/cryptographic-details/">Key Management Service Cryptographic Details</a>.</p> <p> <b>Cross-account use</b>: Not applicable. <code>GenerateRandom</code> does not use any account-specific resources, such as KMS keys.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateRandom</a> (IAM policy)</p>

> Body parameter

```json
{
  "NumberOfBytes": {},
  "CustomKeyStoreId": {},
  "Recipient": {
    "KeyEncryptionAlgorithm": {},
    "AttestationDocument": {}
  }
}
```

<h3 id="generaterandom-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GenerateRandomRequest](#schemageneraterandomrequest)|true|none|
|» NumberOfBytes|body|object|false|none|
|» CustomKeyStoreId|body|object|false|none|
|» Recipient|body|object|false|none|
|» » KeyEncryptionAlgorithm|body|object|false|none|
|» » AttestationDocument|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.GenerateRandom|

> Example responses

> 200 Response

```json
{
  "CiphertextForRecipient": "<binary data>",
  "Plaintext": ""
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="generaterandom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GenerateRandomResponse](#schemageneraterandomresponse)|
|480|480|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|481|481|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|482|482|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|483|483|CustomKeyStoreNotFoundException|[CustomKeyStoreNotFoundException](#schemacustomkeystorenotfoundexception)|
|484|484|CustomKeyStoreInvalidStateException|[CustomKeyStoreInvalidStateException](#schemacustomkeystoreinvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetKeyPolicy

<a id="opIdGetKeyPolicy"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.GetKeyPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.GetKeyPolicy' \
  -d '{
    "KeyId": {},
    "PolicyName": {}
  }'
```

`POST /#X-Amz-Target=TrentService.GetKeyPolicy`

<p>Gets a key policy attached to the specified KMS key.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetKeyPolicy</a> (key policy)</p> <p> <b>Related operations</b>: <a>PutKeyPolicy</a> </p>

> Body parameter

```json
{
  "KeyId": {},
  "PolicyName": {}
}
```

<h3 id="getkeypolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetKeyPolicyRequest](#schemagetkeypolicyrequest)|true|none|
|» KeyId|body|object|true|none|
|» PolicyName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.GetKeyPolicy|

> Example responses

> 200 Response

```json
{
  "Policy": "{\n  \"Version\" : \"2012-10-17\",\n  \"Id\" : \"key-default-1\",\n  \"Statement\" : [ {\n    \"Sid\" : \"Enable IAM User Permissions\",\n    \"Effect\" : \"Allow\",\n    \"Principal\" : {\n      \"AWS\" : \"arn:aws:iam::111122223333:root\"\n    },\n    \"Action\" : \"kms:*\",\n    \"Resource\" : \"*\"\n  } ]\n}"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="getkeypolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetKeyPolicyResponse](#schemagetkeypolicyresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|483|483|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|484|484|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetKeyRotationStatus

<a id="opIdGetKeyRotationStatus"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.GetKeyRotationStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.GetKeyRotationStatus' \
  -d '{
    "KeyId": {}
  }'
```

`POST /#X-Amz-Target=TrentService.GetKeyRotationStatus`

<p>Gets a Boolean value that indicates whether <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation of the key material</a> is enabled for the specified KMS key.</p> <p>When you enable automatic rotation for <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed KMS keys</a>, KMS rotates the key material of the KMS key one year (approximately 365 days) from the enable date and every year thereafter. You can monitor rotation of the key material for your KMS keys in CloudTrail and Amazon CloudWatch.</p> <p>Automatic key rotation is supported only on <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#symmetric-cmks">symmetric encryption KMS keys</a>. You cannot enable automatic rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">asymmetric KMS keys</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC KMS keys</a>, KMS keys with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key material</a>, or KMS keys in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. To enable or disable automatic rotation of a set of related <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-manage.html#multi-region-rotate">multi-Region keys</a>, set the property on the primary key..</p> <p>You can enable (<a>EnableKeyRotation</a>) and disable automatic rotation (<a>DisableKeyRotation</a>) of the key material in customer managed KMS keys. Key material rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed KMS keys</a> is not configurable. KMS always rotates the key material in Amazon Web Services managed KMS keys every year. The key rotation status for Amazon Web Services managed KMS keys is always <code>true</code>.</p> <note> <p>In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three years to every year. For details, see <a>EnableKeyRotation</a>.</p> </note> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <ul> <li> <p>Disabled: The key rotation status does not change when you disable a KMS key. However, while the KMS key is disabled, KMS does not rotate the key material. When you re-enable the KMS key, rotation resumes. If the key material in the re-enabled KMS key hasn't been rotated in one year, KMS rotates it immediately, and every year thereafter. If it's been less than a year since the key material in the re-enabled KMS key was rotated, the KMS key resumes its prior rotation schedule.</p> </li> <li> <p>Pending deletion: While a KMS key is pending deletion, its key rotation status is <code>false</code> and KMS does not rotate the key material. If you cancel the deletion, the original key rotation status returns to <code>true</code>.</p> </li> </ul> <p> <b>Cross-account use</b>: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetKeyRotationStatus</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DisableKeyRotation</a> </p> </li> <li> <p> <a>EnableKeyRotation</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {}
}
```

<h3 id="getkeyrotationstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetKeyRotationStatusRequest](#schemagetkeyrotationstatusrequest)|true|none|
|» KeyId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.GetKeyRotationStatus|

> Example responses

> 200 Response

```json
{
  "KeyRotationEnabled": true
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="getkeyrotationstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetKeyRotationStatusResponse](#schemagetkeyrotationstatusresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|483|483|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|484|484|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetParametersForImport

<a id="opIdGetParametersForImport"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.GetParametersForImport' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.GetParametersForImport' \
  -d '{
    "KeyId": {},
    "WrappingAlgorithm": {},
    "WrappingKeySpec": {}
  }'
```

`POST /#X-Amz-Target=TrentService.GetParametersForImport`

<p>Returns the public key and an import token you need to import or reimport key material for a KMS key. </p> <p>By default, KMS keys are created with key material that KMS generates. This operation supports <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing key material</a>, an advanced feature that lets you generate and import the cryptographic key material for a KMS key. For more information about importing key material into KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing key material</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>Before calling <code>GetParametersForImport</code>, use the <a>CreateKey</a> operation with an <code>Origin</code> value of <code>EXTERNAL</code> to create a KMS key with no key material. You can import key material for a symmetric encryption KMS key, HMAC KMS key, asymmetric encryption KMS key, or asymmetric signing KMS key. You can also import key material into a <a href="kms/latest/developerguide/multi-region-keys-overview.html">multi-Region key</a> of any supported type. However, you can't import key material into a KMS key in a <a href="kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. You can also use <code>GetParametersForImport</code> to get a public key and import token to <a href="kms/latest/developerguide/importing-keys.html#reimport-key-material">reimport the original key material</a> into a KMS key whose key material expired or was deleted.</p> <p> <code>GetParametersForImport</code> returns the items that you need to import your key material.</p> <ul> <li> <p>The public key (or "wrapping key") of an RSA key pair that KMS generates.</p> <p>You will use this public key to encrypt ("wrap") your key material while it's in transit to KMS. </p> </li> <li> <p>A import token that ensures that KMS can decrypt your key material and associate it with the correct KMS key.</p> </li> </ul> <p>The public key and its import token are permanently linked and must be used together. Each public key and import token set is valid for 24 hours. The expiration date and time appear in the <code>ParametersValidTo</code> field in the <code>GetParametersForImport</code> response. You cannot use an expired public key or import token in an <a>ImportKeyMaterial</a> request. If your key and token expire, send another <code>GetParametersForImport</code> request.</p> <p> <code>GetParametersForImport</code> requires the following information:</p> <ul> <li> <p>The key ID of the KMS key for which you are importing the key material.</p> </li> <li> <p>The key spec of the public key ("wrapping key") that you will use to encrypt your key material during import.</p> </li> <li> <p>The wrapping algorithm that you will use with the public key to encrypt your key material.</p> </li> </ul> <p>You can use the same or a different public key spec and wrapping algorithm each time you import or reimport the same key material. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetParametersForImport</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ImportKeyMaterial</a> </p> </li> <li> <p> <a>DeleteImportedKeyMaterial</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {},
  "WrappingAlgorithm": {},
  "WrappingKeySpec": {}
}
```

<h3 id="getparametersforimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetParametersForImportRequest](#schemagetparametersforimportrequest)|true|none|
|» KeyId|body|object|true|none|
|» WrappingAlgorithm|body|object|true|none|
|» WrappingKeySpec|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.GetParametersForImport|

> Example responses

> 200 Response

```json
{
  "ImportToken": "<binary data>",
  "KeyId": "arn:aws:kms:us-east-2:111122223333:key/2468abcd-12ab-34cd-56ef-1234567890ab",
  "ParametersValidTo": "2023-04-02T13:02:02-07:00",
  "PublicKey": "<binary data>"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="getparametersforimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetParametersForImportResponse](#schemagetparametersforimportresponse)|
|480|480|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|481|481|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|482|482|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|485|485|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPublicKey

<a id="opIdGetPublicKey"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.GetPublicKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.GetPublicKey' \
  -d '{
    "KeyId": {},
    "GrantTokens": {}
  }'
```

`POST /#X-Amz-Target=TrentService.GetPublicKey`

<p>Returns the public key of an asymmetric KMS key. Unlike the private key of a asymmetric KMS key, which never leaves KMS unencrypted, callers with <code>kms:GetPublicKey</code> permission can download the public key of an asymmetric KMS key. You can share the public key to allow others to encrypt messages and verify signatures outside of KMS. For information about asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>You do not need to download the public key. Instead, you can use the public key within KMS by calling the <a>Encrypt</a>, <a>ReEncrypt</a>, or <a>Verify</a> operations with the identifier of an asymmetric KMS key. When you use the public key within KMS, you benefit from the authentication, authorization, and logging that are part of every KMS operation. You also reduce of risk of encrypting data that cannot be decrypted. These features are not effective outside of KMS.</p> <p>To help you use the public key safely outside of KMS, <code>GetPublicKey</code> returns important information about the public key in the response, including:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-KeySpec">KeySpec</a>: The type of key material in the public key, such as <code>RSA_4096</code> or <code>ECC_NIST_P521</code>.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-KeyUsage">KeyUsage</a>: Whether the key is used for encryption or signing.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-EncryptionAlgorithms">EncryptionAlgorithms</a> or <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-SigningAlgorithms">SigningAlgorithms</a>: A list of the encryption algorithms or the signing algorithms for the key.</p> </li> </ul> <p>Although KMS cannot enforce these restrictions on external operations, it is crucial that you use this information to prevent the public key from being used improperly. For example, you can prevent a public signing key from being used encrypt data, or prevent a public key from being used with an encryption algorithm that is not supported by KMS. You can also avoid errors, such as using the wrong signing algorithm in a verification operation.</p> <p>To verify a signature outside of KMS with an SM2 public key (China Regions only), you must specify the distinguishing ID. By default, KMS uses <code>1234567812345678</code> as the distinguishing ID. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/asymmetric-key-specs.html#key-spec-sm-offline-verification">Offline verification with SM2 key pairs</a>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetPublicKey</a> (key policy)</p> <p> <b>Related operations</b>: <a>CreateKey</a> </p>

> Body parameter

```json
{
  "KeyId": {},
  "GrantTokens": {}
}
```

<h3 id="getpublickey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetPublicKeyRequest](#schemagetpublickeyrequest)|true|none|
|» KeyId|body|object|true|none|
|» GrantTokens|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.GetPublicKey|

> Example responses

> 200 Response

```json
{
  "CustomerMasterKeySpec": "RSA_4096",
  "EncryptionAlgorithms": [
    "RSAES_OAEP_SHA_1",
    "RSAES_OAEP_SHA_256"
  ],
  "KeyId": "arn:aws:kms:us-west-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321",
  "KeyUsage": "ENCRYPT_DECRYPT",
  "PublicKey": "<binary data>"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="getpublickey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPublicKeyResponse](#schemagetpublickeyresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|DisabledException|[DisabledException](#schemadisabledexception)|
|482|482|KeyUnavailableException|[KeyUnavailableException](#schemakeyunavailableexception)|
|483|483|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|485|485|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|486|486|InvalidGrantTokenException|[InvalidGrantTokenException](#schemainvalidgranttokenexception)|
|487|487|InvalidKeyUsageException|[InvalidKeyUsageException](#schemainvalidkeyusageexception)|
|488|488|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|489|489|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportKeyMaterial

<a id="opIdImportKeyMaterial"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.ImportKeyMaterial' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.ImportKeyMaterial' \
  -d '{
    "KeyId": {},
    "ImportToken": {},
    "EncryptedKeyMaterial": {},
    "ValidTo": {},
    "ExpirationModel": {}
  }'
```

`POST /#X-Amz-Target=TrentService.ImportKeyMaterial`

<p>Imports or reimports key material into an existing KMS key that was created without key material. <code>ImportKeyMaterial</code> also sets the expiration model and expiration date of the imported key material.</p> <p>By default, KMS keys are created with key material that KMS generates. This operation supports <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing key material</a>, an advanced feature that lets you generate and import the cryptographic key material for a KMS key. For more information about importing key material into KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing key material</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>After you successfully import key material into a KMS key, you can <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html#reimport-key-material">reimport the same key material</a> into that KMS key, but you cannot import different key material. You might reimport key material to replace key material that expired or key material that you deleted. You might also reimport key material to change the expiration model or expiration date of the key material. Before reimporting key material, if necessary, call <a>DeleteImportedKeyMaterial</a> to delete the current imported key material. </p> <p>Each time you import key material into KMS, you can determine whether (<code>ExpirationModel</code>) and when (<code>ValidTo</code>) the key material expires. To change the expiration of your key material, you must import it again, either by calling <code>ImportKeyMaterial</code> or using the <a href="kms/latest/developerguide/importing-keys-import-key-material.html#importing-keys-import-key-material-console">import features</a> of the KMS console.</p> <p>Before calling <code>ImportKeyMaterial</code>:</p> <ul> <li> <p>Create or identify a KMS key with no key material. The KMS key must have an <code>Origin</code> value of <code>EXTERNAL</code>, which indicates that the KMS key is designed for imported key material. </p> <p>To create an new KMS key for imported key material, call the <a>CreateKey</a> operation with an <code>Origin</code> value of <code>EXTERNAL</code>. You can create a symmetric encryption KMS key, HMAC KMS key, asymmetric encryption KMS key, or asymmetric signing KMS key. You can also import key material into a <a href="kms/latest/developerguide/multi-region-keys-overview.html">multi-Region key</a> of any supported type. However, you can't import key material into a KMS key in a <a href="kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>.</p> </li> <li> <p>Use the <a>DescribeKey</a> operation to verify that the <code>KeyState</code> of the KMS key is <code>PendingImport</code>, which indicates that the KMS key has no key material. </p> <p>If you are reimporting the same key material into an existing KMS key, you might need to call the <a>DeleteImportedKeyMaterial</a> to delete its existing key material.</p> </li> <li> <p>Call the <a>GetParametersForImport</a> operation to get a public key and import token set for importing key material. </p> </li> <li> <p>Use the public key in the <a>GetParametersForImport</a> response to encrypt your key material.</p> </li> </ul> <p> Then, in an <code>ImportKeyMaterial</code> request, you submit your encrypted key material and import token. When calling this operation, you must specify the following values:</p> <ul> <li> <p>The key ID or key ARN of the KMS key to associate with the imported key material. Its <code>Origin</code> must be <code>EXTERNAL</code> and its <code>KeyState</code> must be <code>PendingImport</code>. You cannot perform this operation on a KMS key in a <a href="kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, or on a KMS key in a different Amazon Web Services account. To get the <code>Origin</code> and <code>KeyState</code> of a KMS key, call <a>DescribeKey</a>.</p> </li> <li> <p>The encrypted key material. </p> </li> <li> <p>The import token that <a>GetParametersForImport</a> returned. You must use a public key and token from the same <code>GetParametersForImport</code> response.</p> </li> <li> <p>Whether the key material expires (<code>ExpirationModel</code>) and, if so, when (<code>ValidTo</code>). For help with this choice, see <a href="https://docs.aws.amazon.com/en_us/kms/latest/developerguide/importing-keys.html#importing-keys-expiration">Setting an expiration time</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>If you set an expiration date, KMS deletes the key material from the KMS key on the specified date, making the KMS key unusable. To use the KMS key in cryptographic operations again, you must reimport the same key material. However, you can delete and reimport the key material at any time, including before the key material expires. Each time you reimport, you can eliminate or reset the expiration time.</p> </li> </ul> <p>When this operation is successful, the key state of the KMS key changes from <code>PendingImport</code> to <code>Enabled</code>, and you can use the KMS key in cryptographic operations.</p> <p>If this operation fails, use the exception to help determine the problem. If the error is related to the key material, the import token, or wrapping key, use <a>GetParametersForImport</a> to get a new public key and import token for the KMS key and repeat the import procedure. For help, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html#importing-keys-overview">How To Import Key Material</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ImportKeyMaterial</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DeleteImportedKeyMaterial</a> </p> </li> <li> <p> <a>GetParametersForImport</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {},
  "ImportToken": {},
  "EncryptedKeyMaterial": {},
  "ValidTo": {},
  "ExpirationModel": {}
}
```

<h3 id="importkeymaterial-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ImportKeyMaterialRequest](#schemaimportkeymaterialrequest)|true|none|
|» KeyId|body|object|true|none|
|» ImportToken|body|object|true|none|
|» EncryptedKeyMaterial|body|object|true|none|
|» ValidTo|body|object|false|none|
|» ExpirationModel|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.ImportKeyMaterial|

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

<h3 id="importkeymaterial-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportKeyMaterialResponse](#schemaimportkeymaterialresponse)|
|480|480|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|481|481|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|482|482|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|485|485|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|486|486|InvalidCiphertextException|[InvalidCiphertextException](#schemainvalidciphertextexception)|
|487|487|IncorrectKeyMaterialException|[IncorrectKeyMaterialException](#schemaincorrectkeymaterialexception)|
|488|488|ExpiredImportTokenException|[ExpiredImportTokenException](#schemaexpiredimporttokenexception)|
|489|489|InvalidImportTokenException|[InvalidImportTokenException](#schemainvalidimporttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAliases

<a id="opIdListAliases"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.ListAliases' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.ListAliases' \
  -d '{
    "KeyId": {},
    "Limit": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=TrentService.ListAliases`

<p>Gets a list of aliases in the caller's Amazon Web Services account and region. For more information about aliases, see <a>CreateAlias</a>.</p> <p>By default, the <code>ListAliases</code> operation returns all aliases in the account and region. To get only the aliases associated with a particular KMS key, use the <code>KeyId</code> parameter.</p> <p>The <code>ListAliases</code> response can include aliases that you created and associated with your customer managed keys, and aliases that Amazon Web Services created and associated with Amazon Web Services managed keys in your account. You can recognize Amazon Web Services aliases because their names have the format <code>aws/&lt;service-name&gt;</code>, such as <code>aws/dynamodb</code>.</p> <p>The response might also include aliases that have no <code>TargetKeyId</code> field. These are predefined aliases that Amazon Web Services has created but has not yet associated with a KMS key. Aliases that Amazon Web Services creates in your account, including predefined aliases, do not count against your <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#aliases-limit">KMS aliases quota</a>.</p> <p> <b>Cross-account use</b>: No. <code>ListAliases</code> does not return aliases in other Amazon Web Services accounts.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListAliases</a> (IAM policy)</p> <p>For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html#alias-access">Controlling access to aliases</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {},
  "Limit": {},
  "Marker": {}
}
```

<h3 id="listaliases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListAliasesRequest](#schemalistaliasesrequest)|true|none|
|» KeyId|body|object|false|none|
|» Limit|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.ListAliases|

> Example responses

> 200 Response

```json
{
  "Aliases": [
    {
      "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/aws/acm",
      "AliasName": "alias/aws/acm",
      "TargetKeyId": "da03f6f7-d279-427a-9cae-de48d07e5b66"
    },
    {
      "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/aws/ebs",
      "AliasName": "alias/aws/ebs",
      "TargetKeyId": "25a217e7-7170-4b8c-8bf6-045ea5f70e5b"
    },
    {
      "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/aws/rds",
      "AliasName": "alias/aws/rds",
      "TargetKeyId": "7ec3104e-c3f2-4b5c-bf42-bfc4772c6685"
    },
    {
      "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/aws/redshift",
      "AliasName": "alias/aws/redshift",
      "TargetKeyId": "08f7a25a-69e2-4fb5-8f10-393db27326fa"
    },
    {
      "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/aws/s3",
      "AliasName": "alias/aws/s3",
      "TargetKeyId": "d2b0f1a3-580d-4f79-b836-bc983be8cfa5"
    },
    {
      "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/example1",
      "AliasName": "alias/example1",
      "TargetKeyId": "4da1e216-62d0-46c5-a7c0-5f3a3d2f8046"
    },
    {
      "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/example2",
      "AliasName": "alias/example2",
      "TargetKeyId": "f32fef59-2cc2-445b-8573-2d73328acbee"
    },
    {
      "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/example3",
      "AliasName": "alias/example3",
      "TargetKeyId": "1374ef38-d34e-4d5f-b2c9-4e0daee38855"
    }
  ],
  "Truncated": false
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="listaliases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAliasesResponse](#schemalistaliasesresponse)|
|480|480|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|481|481|InvalidMarkerException|[InvalidMarkerException](#schemainvalidmarkerexception)|
|482|482|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|483|483|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGrants

<a id="opIdListGrants"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.ListGrants' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.ListGrants' \
  -d '{
    "Limit": {},
    "Marker": {},
    "KeyId": {},
    "GrantId": {},
    "GranteePrincipal": {}
  }'
```

`POST /#X-Amz-Target=TrentService.ListGrants`

<p>Gets a list of all grants for the specified KMS key. </p> <p>You must specify the KMS key in all requests. You can filter the grant list by grant ID or grantee principal.</p> <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants in KMS</a> in the <i> <i>Key Management Service Developer Guide</i> </i>. For examples of working with grants in several programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p> <note> <p>The <code>GranteePrincipal</code> field in the <code>ListGrants</code> response usually contains the user or role designated as the grantee principal in the grant. However, when the grantee principal in the grant is an Amazon Web Services service, the <code>GranteePrincipal</code> field contains the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services">service principal</a>, which might represent several different grantee principals.</p> </note> <p> <b>Cross-account use</b>: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListGrants</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateGrant</a> </p> </li> <li> <p> <a>ListRetirableGrants</a> </p> </li> <li> <p> <a>RetireGrant</a> </p> </li> <li> <p> <a>RevokeGrant</a> </p> </li> </ul>

> Body parameter

```json
{
  "Limit": {},
  "Marker": {},
  "KeyId": {},
  "GrantId": {},
  "GranteePrincipal": {}
}
```

<h3 id="listgrants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListGrantsRequest](#schemalistgrantsrequest)|true|none|
|» Limit|body|object|false|none|
|» Marker|body|object|false|none|
|» KeyId|body|object|true|none|
|» GrantId|body|object|false|none|
|» GranteePrincipal|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.ListGrants|

> Example responses

> 200 Response

```json
{
  "Grants": [
    {
      "CreationDate": "2016-12-07T11:09:35-08:00",
      "GrantId": "0c237476b39f8bc44e45212e08498fbe3151305030726c0590dd8d3e9f3d6a60",
      "GranteePrincipal": "arn:aws:iam::111122223333:role/ExampleRole",
      "IssuingAccount": "arn:aws:iam::444455556666:root",
      "KeyId": "arn:aws:kms:us-east-2:444455556666:key/1234abcd-12ab-34cd-56ef-1234567890ab",
      "Operations": [
        "Decrypt",
        "Encrypt"
      ],
      "RetiringPrincipal": "arn:aws:iam::111122223333:role/ExampleRole"
    }
  ],
  "Truncated": false
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="listgrants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGrantsResponse](#schemalistgrantsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|482|482|InvalidMarkerException|[InvalidMarkerException](#schemainvalidmarkerexception)|
|483|483|InvalidGrantIdException|[InvalidGrantIdException](#schemainvalidgrantidexception)|
|484|484|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|485|485|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|486|486|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListKeyPolicies

<a id="opIdListKeyPolicies"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.ListKeyPolicies' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.ListKeyPolicies' \
  -d '{
    "KeyId": {},
    "Limit": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=TrentService.ListKeyPolicies`

<p>Gets the names of the key policies that are attached to a KMS key. This operation is designed to get policy names that you can use in a <a>GetKeyPolicy</a> operation. However, the only valid policy name is <code>default</code>. </p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListKeyPolicies</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>GetKeyPolicy</a> </p> </li> <li> <p> <a>PutKeyPolicy</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {},
  "Limit": {},
  "Marker": {}
}
```

<h3 id="listkeypolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListKeyPoliciesRequest](#schemalistkeypoliciesrequest)|true|none|
|» KeyId|body|object|true|none|
|» Limit|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.ListKeyPolicies|

> Example responses

> 200 Response

```json
{
  "PolicyNames": [
    "default"
  ],
  "Truncated": false
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="listkeypolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListKeyPoliciesResponse](#schemalistkeypoliciesresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|483|483|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|484|484|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListKeys

<a id="opIdListKeys"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.ListKeys' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.ListKeys' \
  -d '{
    "Limit": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=TrentService.ListKeys`

<p>Gets a list of all KMS keys in the caller's Amazon Web Services account and Region.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListKeys</a> (IAM policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>DescribeKey</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>ListResourceTags</a> </p> </li> </ul>

> Body parameter

```json
{
  "Limit": {},
  "Marker": {}
}
```

<h3 id="listkeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListKeysRequest](#schemalistkeysrequest)|true|none|
|» Limit|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.ListKeys|

> Example responses

> 200 Response

```json
{
  "Keys": [
    {
      "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/0d990263-018e-4e65-a703-eff731de951e",
      "KeyId": "0d990263-018e-4e65-a703-eff731de951e"
    },
    {
      "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/144be297-0ae1-44ac-9c8f-93cd8c82f841",
      "KeyId": "144be297-0ae1-44ac-9c8f-93cd8c82f841"
    },
    {
      "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/21184251-b765-428e-b852-2c7353e72571",
      "KeyId": "21184251-b765-428e-b852-2c7353e72571"
    },
    {
      "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/214fe92f-5b03-4ae1-b350-db2a45dbe10c",
      "KeyId": "214fe92f-5b03-4ae1-b350-db2a45dbe10c"
    },
    {
      "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/339963f2-e523-49d3-af24-a0fe752aa458",
      "KeyId": "339963f2-e523-49d3-af24-a0fe752aa458"
    },
    {
      "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/b776a44b-df37-4438-9be4-a27494e4271a",
      "KeyId": "b776a44b-df37-4438-9be4-a27494e4271a"
    },
    {
      "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/deaf6c9e-cf2c-46a6-bf6d-0b6d487cffbb",
      "KeyId": "deaf6c9e-cf2c-46a6-bf6d-0b6d487cffbb"
    }
  ],
  "Truncated": false
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listkeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListKeysResponse](#schemalistkeysresponse)|
|480|480|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|481|481|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|482|482|InvalidMarkerException|[InvalidMarkerException](#schemainvalidmarkerexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourceTags

<a id="opIdListResourceTags"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.ListResourceTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.ListResourceTags' \
  -d '{
    "KeyId": {},
    "Limit": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=TrentService.ListResourceTags`

<p>Returns all tags on the specified KMS key.</p> <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>. For information about using tags in KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">Tagging keys</a>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListResourceTags</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>ReplicateKey</a> </p> </li> <li> <p> <a>TagResource</a> </p> </li> <li> <p> <a>UntagResource</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {},
  "Limit": {},
  "Marker": {}
}
```

<h3 id="listresourcetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListResourceTagsRequest](#schemalistresourcetagsrequest)|true|none|
|» KeyId|body|object|true|none|
|» Limit|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.ListResourceTags|

> Example responses

> 200 Response

```json
{
  "Tags": [
    {
      "TagKey": "CostCenter",
      "TagValue": "87654"
    },
    {
      "TagKey": "CreatedBy",
      "TagValue": "ExampleUser"
    },
    {
      "TagKey": "Purpose",
      "TagValue": "Test"
    }
  ],
  "Truncated": false
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listresourcetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourceTagsResponse](#schemalistresourcetagsresponse)|
|480|480|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|483|483|InvalidMarkerException|[InvalidMarkerException](#schemainvalidmarkerexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRetirableGrants

<a id="opIdListRetirableGrants"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.ListRetirableGrants' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.ListRetirableGrants' \
  -d '{
    "Limit": {},
    "Marker": {},
    "RetiringPrincipal": {}
  }'
```

`POST /#X-Amz-Target=TrentService.ListRetirableGrants`

<p>Returns information about all grants in the Amazon Web Services account and Region that have the specified retiring principal. </p> <p>You can specify any principal in your Amazon Web Services account. The grants that are returned include grants for KMS keys in your Amazon Web Services account and other Amazon Web Services accounts. You might use this operation to determine which grants you may retire. To retire a grant, use the <a>RetireGrant</a> operation.</p> <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants in KMS</a> in the <i> <i>Key Management Service Developer Guide</i> </i>. For examples of working with grants in several programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p> <p> <b>Cross-account use</b>: You must specify a principal in your Amazon Web Services account. However, this operation can return grants in any Amazon Web Services account. You do not need <code>kms:ListRetirableGrants</code> permission (or any other additional permission) in any Amazon Web Services account other than your own.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListRetirableGrants</a> (IAM policy) in your Amazon Web Services account.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateGrant</a> </p> </li> <li> <p> <a>ListGrants</a> </p> </li> <li> <p> <a>RetireGrant</a> </p> </li> <li> <p> <a>RevokeGrant</a> </p> </li> </ul>

> Body parameter

```json
{
  "Limit": {},
  "Marker": {},
  "RetiringPrincipal": {}
}
```

<h3 id="listretirablegrants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListRetirableGrantsRequest](#schemalistretirablegrantsrequest)|true|none|
|» Limit|body|object|false|none|
|» Marker|body|object|false|none|
|» RetiringPrincipal|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.ListRetirableGrants|

> Example responses

> 200 Response

```json
{
  "Grants": [
    {
      "CreationDate": "2016-12-07T11:09:35-08:00",
      "GrantId": "0c237476b39f8bc44e45212e08498fbe3151305030726c0590dd8d3e9f3d6a60",
      "GranteePrincipal": "arn:aws:iam::111122223333:role/ExampleRole",
      "IssuingAccount": "arn:aws:iam::444455556666:root",
      "KeyId": "arn:aws:kms:us-east-2:444455556666:key/1234abcd-12ab-34cd-56ef-1234567890ab",
      "Operations": [
        "Decrypt",
        "Encrypt"
      ],
      "RetiringPrincipal": "arn:aws:iam::111122223333:role/ExampleRole"
    }
  ],
  "Truncated": false
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="listretirablegrants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGrantsResponse](#schemalistgrantsresponse)|
|480|480|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|481|481|InvalidMarkerException|[InvalidMarkerException](#schemainvalidmarkerexception)|
|482|482|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutKeyPolicy

<a id="opIdPutKeyPolicy"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.PutKeyPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.PutKeyPolicy' \
  -d '{
    "KeyId": {},
    "PolicyName": {},
    "Policy": {},
    "BypassPolicyLockoutSafetyCheck": {}
  }'
```

`POST /#X-Amz-Target=TrentService.PutKeyPolicy`

<p>Attaches a key policy to the specified KMS key. </p> <p>For more information about key policies, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Key Policies</a> in the <i>Key Management Service Developer Guide</i>. For help writing and formatting a JSON policy document, see the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html">IAM JSON Policy Reference</a> in the <i> <i>Identity and Access Management User Guide</i> </i>. For examples of adding a key policy in multiple programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-key-policies.html#put-policy">Setting a key policy</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:PutKeyPolicy</a> (key policy)</p> <p> <b>Related operations</b>: <a>GetKeyPolicy</a> </p>

> Body parameter

```json
{
  "KeyId": {},
  "PolicyName": {},
  "Policy": {},
  "BypassPolicyLockoutSafetyCheck": {}
}
```

<h3 id="putkeypolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutKeyPolicyRequest](#schemaputkeypolicyrequest)|true|none|
|» KeyId|body|object|true|none|
|» PolicyName|body|object|true|none|
|» Policy|body|object|true|none|
|» BypassPolicyLockoutSafetyCheck|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.PutKeyPolicy|

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

<h3 id="putkeypolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|MalformedPolicyDocumentException|[MalformedPolicyDocumentException](#schemamalformedpolicydocumentexception)|
|483|483|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|485|485|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|486|486|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|487|487|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ReEncrypt

<a id="opIdReEncrypt"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.ReEncrypt' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.ReEncrypt' \
  -d '{
    "CiphertextBlob": {},
    "SourceEncryptionContext": {
      "property1": "string",
      "property2": "string"
    },
    "SourceKeyId": {},
    "DestinationKeyId": {},
    "DestinationEncryptionContext": {
      "property1": "string",
      "property2": "string"
    },
    "SourceEncryptionAlgorithm": {},
    "DestinationEncryptionAlgorithm": {},
    "GrantTokens": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=TrentService.ReEncrypt`

<p>Decrypts ciphertext and then reencrypts it entirely within KMS. You can use this operation to change the KMS key under which data is encrypted, such as when you <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-keys-manually">manually rotate</a> a KMS key or change the KMS key that protects a ciphertext. You can also use it to reencrypt ciphertext under the same KMS key, such as to change the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a> of a ciphertext.</p> <p>The <code>ReEncrypt</code> operation can decrypt ciphertext that was encrypted by using a KMS key in an KMS operation, such as <a>Encrypt</a> or <a>GenerateDataKey</a>. It can also decrypt ciphertext that was encrypted by using the public key of an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#asymmetric-cmks">asymmetric KMS key</a> outside of KMS. However, it cannot decrypt ciphertext produced by other libraries, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">Amazon Web Services Encryption SDK</a> or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 client-side encryption</a>. These libraries return a ciphertext format that is incompatible with KMS.</p> <p>When you use the <code>ReEncrypt</code> operation, you need to provide information for the decrypt operation and the subsequent encrypt operation.</p> <ul> <li> <p>If your ciphertext was encrypted under an asymmetric KMS key, you must use the <code>SourceKeyId</code> parameter to identify the KMS key that encrypted the ciphertext. You must also supply the encryption algorithm that was used. This information is required to decrypt the data.</p> </li> <li> <p>If your ciphertext was encrypted under a symmetric encryption KMS key, the <code>SourceKeyId</code> parameter is optional. KMS can get this information from metadata that it adds to the symmetric ciphertext blob. This feature adds durability to your implementation by ensuring that authorized users can decrypt ciphertext decades after it was encrypted, even if they've lost track of the key ID. However, specifying the source KMS key is always recommended as a best practice. When you use the <code>SourceKeyId</code> parameter to specify a KMS key, KMS uses only the KMS key you specify. If the ciphertext was encrypted under a different KMS key, the <code>ReEncrypt</code> operation fails. This practice ensures that you use the KMS key that you intend.</p> </li> <li> <p>To reencrypt the data, you must use the <code>DestinationKeyId</code> parameter to specify the KMS key that re-encrypts the data after it is decrypted. If the destination KMS key is an asymmetric KMS key, you must also provide the encryption algorithm. The algorithm that you choose must be compatible with the KMS key.</p> <important> <p>When you use an asymmetric KMS key to encrypt or reencrypt data, be sure to record the KMS key and encryption algorithm that you choose. You will be required to provide the same KMS key and encryption algorithm when you decrypt the data. If the KMS key and algorithm do not match the values used to encrypt the data, the decrypt operation fails.</p> <p>You are not required to supply the key ID and encryption algorithm when you decrypt with symmetric encryption KMS keys because KMS stores this information in the ciphertext blob. KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.</p> </important> </li> </ul> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. The source KMS key and destination KMS key can be in different Amazon Web Services accounts. Either or both KMS keys can be in a different account than the caller. To specify a KMS key in a different account, you must use its key ARN or alias ARN.</p> <p> <b>Required permissions</b>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ReEncryptFrom</a> permission on the source KMS key (key policy)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ReEncryptTo</a> permission on the destination KMS key (key policy)</p> </li> </ul> <p>To permit reencryption from or to a KMS key, include the <code>"kms:ReEncrypt*"</code> permission in your <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">key policy</a>. This permission is automatically included in the key policy when you use the console to create a KMS key. But you must include it manually when you create a KMS key programmatically or when you use the <a>PutKeyPolicy</a> operation to set a key policy.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> </ul>

> Body parameter

```json
{
  "CiphertextBlob": {},
  "SourceEncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "SourceKeyId": {},
  "DestinationKeyId": {},
  "DestinationEncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "SourceEncryptionAlgorithm": {},
  "DestinationEncryptionAlgorithm": {},
  "GrantTokens": {},
  "DryRun": {}
}
```

<h3 id="reencrypt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ReEncryptRequest](#schemareencryptrequest)|true|none|
|» CiphertextBlob|body|object|true|none|
|» SourceEncryptionContext|body|object|false|none|
|» » **additionalProperties**|body|[EncryptionContextValue](#schemaencryptioncontextvalue)|false|none|
|» SourceKeyId|body|object|false|none|
|» DestinationKeyId|body|object|true|none|
|» DestinationEncryptionContext|body|object|false|none|
|» » **additionalProperties**|body|[EncryptionContextValue](#schemaencryptioncontextvalue)|false|none|
|» SourceEncryptionAlgorithm|body|object|false|none|
|» DestinationEncryptionAlgorithm|body|object|false|none|
|» GrantTokens|body|object|false|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.ReEncrypt|

> Example responses

> 200 Response

```json
{
  "CiphertextBlob": "<binary data>",
  "KeyId": "arn:aws:kms:us-east-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321",
  "SourceKeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="reencrypt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReEncryptResponse](#schemareencryptresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|DisabledException|[DisabledException](#schemadisabledexception)|
|482|482|InvalidCiphertextException|[InvalidCiphertextException](#schemainvalidciphertextexception)|
|483|483|KeyUnavailableException|[KeyUnavailableException](#schemakeyunavailableexception)|
|484|484|IncorrectKeyException|[IncorrectKeyException](#schemaincorrectkeyexception)|
|485|485|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|486|486|InvalidKeyUsageException|[InvalidKeyUsageException](#schemainvalidkeyusageexception)|
|487|487|InvalidGrantTokenException|[InvalidGrantTokenException](#schemainvalidgranttokenexception)|
|488|488|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|489|489|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|490|490|DryRunOperationException|[DryRunOperationException](#schemadryrunoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ReplicateKey

<a id="opIdReplicateKey"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.ReplicateKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.ReplicateKey' \
  -d '{
    "KeyId": {},
    "ReplicaRegion": {},
    "Policy": {},
    "BypassPolicyLockoutSafetyCheck": {},
    "Description": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=TrentService.ReplicateKey`

<p>Replicates a multi-Region key into the specified Region. This operation creates a multi-Region replica key based on a multi-Region primary key in a different Region of the same Amazon Web Services partition. You can create multiple replicas of a primary key, but each must be in a different Region. To create a multi-Region primary key, use the <a>CreateKey</a> operation.</p> <p>This operation supports <i>multi-Region keys</i>, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Multi-Region keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>A <i>replica key</i> is a fully-functional KMS key that can be used independently of its primary and peer replica keys. A primary key and its replica keys share properties that make them interoperable. They have the same <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id">key ID</a> and key material. They also have the same <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-spec">key spec</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-usage">key usage</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-origin">key material origin</a>, and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic key rotation status</a>. KMS automatically synchronizes these shared properties among related multi-Region keys. All other properties of a replica key can differ, including its <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">key policy</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">tags</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html">aliases</a>, and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a>. KMS pricing and quotas for KMS keys apply to each primary key and replica key.</p> <p>When this operation completes, the new replica key has a transient key state of <code>Creating</code>. This key state changes to <code>Enabled</code> (or <code>PendingImport</code>) after a few seconds when the process of creating the new replica key is complete. While the key state is <code>Creating</code>, you can manage key, but you cannot yet use it in cryptographic operations. If you are creating and using the replica key programmatically, retry on <code>KMSInvalidStateException</code> or call <code>DescribeKey</code> to check its <code>KeyState</code> value before using it. For details about the <code>Creating</code> key state, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>You cannot create more than one replica of a primary key in any Region. If the Region already includes a replica of the key you're trying to replicate, <code>ReplicateKey</code> returns an <code>AlreadyExistsException</code> error. If the key state of the existing replica is <code>PendingDeletion</code>, you can cancel the scheduled key deletion (<a>CancelKeyDeletion</a>) or wait for the key to be deleted. The new replica key you create will have the same <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html#mrk-sync-properties">shared properties</a> as the original replica key.</p> <p>The CloudTrail log of a <code>ReplicateKey</code> operation records a <code>ReplicateKey</code> operation in the primary key's Region and a <a>CreateKey</a> operation in the replica key's Region.</p> <p>If you replicate a multi-Region primary key with imported key material, the replica key is created with no key material. You must import the same key material that you imported into the primary key. For details, see <a href="kms/latest/developerguide/multi-region-keys-import.html">Importing key material into multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>To convert a replica key to a primary key, use the <a>UpdatePrimaryRegion</a> operation.</p> <note> <p> <code>ReplicateKey</code> uses different default values for the <code>KeyPolicy</code> and <code>Tags</code> parameters than those used in the KMS console. For details, see the parameter descriptions.</p> </note> <p> <b>Cross-account use</b>: No. You cannot use this operation to create a replica key in a different Amazon Web Services account. </p> <p> <b>Required permissions</b>: </p> <ul> <li> <p> <code>kms:ReplicateKey</code> on the primary key (in the primary key's Region). Include this permission in the primary key's key policy.</p> </li> <li> <p> <code>kms:CreateKey</code> in an IAM policy in the replica Region.</p> </li> <li> <p>To use the <code>Tags</code> parameter, <code>kms:TagResource</code> in an IAM policy in the replica Region.</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>UpdatePrimaryRegion</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {},
  "ReplicaRegion": {},
  "Policy": {},
  "BypassPolicyLockoutSafetyCheck": {},
  "Description": {},
  "Tags": {}
}
```

<h3 id="replicatekey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ReplicateKeyRequest](#schemareplicatekeyrequest)|true|none|
|» KeyId|body|object|true|none|
|» ReplicaRegion|body|object|true|none|
|» Policy|body|object|false|none|
|» BypassPolicyLockoutSafetyCheck|body|object|false|none|
|» Description|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.ReplicateKey|

> Example responses

> 200 Response

```json
{
  "ReplicaKeyMetadata": {
    "AWSAccountId": "111122223333",
    "Arn": "arn:aws:kms:us-west-2:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
    "CreationDate": 1607472987.918,
    "CustomerMasterKeySpec": "SYMMETRIC_DEFAULT",
    "Description": "",
    "Enabled": true,
    "EncryptionAlgorithms": [
      "SYMMETRIC_DEFAULT"
    ],
    "KeyId": "mrk-1234abcd12ab34cd56ef1234567890ab",
    "KeyManager": "CUSTOMER",
    "KeyState": "Enabled",
    "KeyUsage": "ENCRYPT_DECRYPT",
    "MultiRegion": true,
    "MultiRegionConfiguration": {
      "MultiRegionKeyType": "REPLICA",
      "PrimaryKey": {
        "Arn": "arn:aws:kms:us-east-1:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
        "Region": "us-east-1"
      },
      "ReplicaKeys": [
        {
          "Arn": "arn:aws:kms:us-west-2:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
          "Region": "us-west-2"
        }
      ]
    },
    "Origin": "AWS_KMS"
  },
  "ReplicaPolicy": "{\n  \"Version\" : \"2012-10-17\",\n  \"Id\" : \"key-default-1\",...}",
  "ReplicaTags": []
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="replicatekey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReplicateKeyResponse](#schemareplicatekeyresponse)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|DisabledException|[DisabledException](#schemadisabledexception)|
|482|482|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|483|483|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|484|484|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|MalformedPolicyDocumentException|[MalformedPolicyDocumentException](#schemamalformedpolicydocumentexception)|
|487|487|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|488|488|TagException|[TagException](#schematagexception)|
|489|489|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RetireGrant

<a id="opIdRetireGrant"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.RetireGrant' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.RetireGrant' \
  -d '{
    "GrantToken": {},
    "KeyId": {},
    "GrantId": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=TrentService.RetireGrant`

<p>Deletes a grant. Typically, you retire a grant when you no longer need its permissions. To identify the grant to retire, use a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">grant token</a>, or both the grant ID and a key identifier (key ID or key ARN) of the KMS key. The <a>CreateGrant</a> operation returns both values.</p> <p>This operation can be called by the <i>retiring principal</i> for a grant, by the <i>grantee principal</i> if the grant allows the <code>RetireGrant</code> operation, and by the Amazon Web Services account in which the grant is created. It can also be called by principals to whom permission for retiring a grant is delegated. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#grant-delete">Retiring and revoking grants</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants in KMS</a> in the <i> <i>Key Management Service Developer Guide</i> </i>. For examples of working with grants in several programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p> <p> <b>Cross-account use</b>: Yes. You can retire a grant on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions:</b>:Permission to retire a grant is determined primarily by the grant. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#grant-delete">Retiring and revoking grants</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateGrant</a> </p> </li> <li> <p> <a>ListGrants</a> </p> </li> <li> <p> <a>ListRetirableGrants</a> </p> </li> <li> <p> <a>RevokeGrant</a> </p> </li> </ul>

> Body parameter

```json
{
  "GrantToken": {},
  "KeyId": {},
  "GrantId": {},
  "DryRun": {}
}
```

<h3 id="retiregrant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RetireGrantRequest](#schemaretiregrantrequest)|true|none|
|» GrantToken|body|object|false|none|
|» KeyId|body|object|false|none|
|» GrantId|body|object|false|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.RetireGrant|

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

<h3 id="retiregrant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|481|481|InvalidGrantTokenException|[InvalidGrantTokenException](#schemainvalidgranttokenexception)|
|482|482|InvalidGrantIdException|[InvalidGrantIdException](#schemainvalidgrantidexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|485|485|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|486|486|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|487|487|DryRunOperationException|[DryRunOperationException](#schemadryrunoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RevokeGrant

<a id="opIdRevokeGrant"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.RevokeGrant' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.RevokeGrant' \
  -d '{
    "KeyId": {},
    "GrantId": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=TrentService.RevokeGrant`

<p>Deletes the specified grant. You revoke a grant to terminate the permissions that the grant allows. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/managing-grants.html#grant-delete">Retiring and revoking grants</a> in the <i> <i>Key Management Service Developer Guide</i> </i>.</p> <p>When you create, retire, or revoke a grant, there might be a brief delay, usually less than five minutes, until the grant is available throughout KMS. This state is known as <i>eventual consistency</i>. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#terms-eventual-consistency">Eventual consistency</a> in the <i> <i>Key Management Service Developer Guide</i> </i>. </p> <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants in KMS</a> in the <i> <i>Key Management Service Developer Guide</i> </i>. For examples of working with grants in several programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p> <p> <b>Cross-account use</b>: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:RevokeGrant</a> (key policy).</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateGrant</a> </p> </li> <li> <p> <a>ListGrants</a> </p> </li> <li> <p> <a>ListRetirableGrants</a> </p> </li> <li> <p> <a>RetireGrant</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {},
  "GrantId": {},
  "DryRun": {}
}
```

<h3 id="revokegrant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RevokeGrantRequest](#schemarevokegrantrequest)|true|none|
|» KeyId|body|object|true|none|
|» GrantId|body|object|true|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.RevokeGrant|

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

<h3 id="revokegrant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|482|482|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|483|483|InvalidGrantIdException|[InvalidGrantIdException](#schemainvalidgrantidexception)|
|484|484|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|485|485|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|486|486|DryRunOperationException|[DryRunOperationException](#schemadryrunoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ScheduleKeyDeletion

<a id="opIdScheduleKeyDeletion"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.ScheduleKeyDeletion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.ScheduleKeyDeletion' \
  -d '{
    "KeyId": {},
    "PendingWindowInDays": {}
  }'
```

`POST /#X-Amz-Target=TrentService.ScheduleKeyDeletion`

<p>Schedules the deletion of a KMS key. By default, KMS applies a waiting period of 30 days, but you can specify a waiting period of 7-30 days. When this operation is successful, the key state of the KMS key changes to <code>PendingDeletion</code> and the key can't be used in any cryptographic operations. It remains in this state for the duration of the waiting period. Before the waiting period ends, you can use <a>CancelKeyDeletion</a> to cancel the deletion of the KMS key. After the waiting period ends, KMS deletes the KMS key, its key material, and all KMS data associated with it, including all aliases that refer to it.</p> <important> <p>Deleting a KMS key is a destructive and potentially dangerous operation. When a KMS key is deleted, all data that was encrypted under the KMS key is unrecoverable. (The only exception is a <a href="kms/latest/developerguide/multi-region-keys-delete.html">multi-Region replica key</a>, or an <a href="kms/latest/developerguide/importing-keys-managing.html#import-delete-key">asymmetric or HMAC KMS key with imported key material</a>.) To prevent the use of a KMS key without deleting it, use <a>DisableKey</a>. </p> </important> <p>You can schedule the deletion of a multi-Region primary key and its replica keys at any time. However, KMS will not delete a multi-Region primary key with existing replica keys. If you schedule the deletion of a primary key with replicas, its key state changes to <code>PendingReplicaDeletion</code> and it cannot be replicated or used in cryptographic operations. This status can continue indefinitely. When the last of its replicas keys is deleted (not just scheduled), the key state of the primary key changes to <code>PendingDeletion</code> and its waiting period (<code>PendingWindowInDays</code>) begins. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-delete.html">Deleting multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>When KMS <a href="https://docs.aws.amazon.com/kms/latest/developerguide/delete-cmk-keystore.html">deletes a KMS key from an CloudHSM key store</a>, it makes a best effort to delete the associated key material from the associated CloudHSM cluster. However, you might need to manually <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-orphaned-key">delete the orphaned key material</a> from the cluster and its backups. <a href="https://docs.aws.amazon.com/kms/latest/developerguide/delete-xks-key.html">Deleting a KMS key from an external key store</a> has no effect on the associated external key. However, for both types of custom key stores, deleting a KMS key is destructive and irreversible. You cannot decrypt ciphertext encrypted under the KMS key by using only its associated external key or CloudHSM key. Also, you cannot recreate a KMS key in an external key store by creating a new KMS key with the same key material.</p> <p>For more information about scheduling a KMS key for deletion, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html">Deleting KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: kms:ScheduleKeyDeletion (key policy)</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CancelKeyDeletion</a> </p> </li> <li> <p> <a>DisableKey</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {},
  "PendingWindowInDays": {}
}
```

<h3 id="schedulekeydeletion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ScheduleKeyDeletionRequest](#schemaschedulekeydeletionrequest)|true|none|
|» KeyId|body|object|true|none|
|» PendingWindowInDays|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.ScheduleKeyDeletion|

> Example responses

> 200 Response

```json
{
  "DeletionDate": "2016-12-17T16:00:00-08:00",
  "KeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="schedulekeydeletion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScheduleKeyDeletionResponse](#schemaschedulekeydeletionresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|483|483|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|484|484|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## Sign

<a id="opIdSign"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.Sign' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.Sign' \
  -d '{
    "KeyId": {},
    "Message": {},
    "MessageType": {},
    "GrantTokens": {},
    "SigningAlgorithm": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=TrentService.Sign`

<p>Creates a <a href="https://en.wikipedia.org/wiki/Digital_signature">digital signature</a> for a message or message digest by using the private key in an asymmetric signing KMS key. To verify the signature, use the <a>Verify</a> operation, or use the public key in the same asymmetric KMS key outside of KMS. For information about asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>Digital signatures are generated and verified by using asymmetric key pair, such as an RSA or ECC pair that is represented by an asymmetric KMS key. The key owner (or an authorized user) uses their private key to sign a message. Anyone with the public key can verify that the message was signed with that particular private key and that the message hasn't changed since it was signed. </p> <p>To use the <code>Sign</code> operation, provide the following information:</p> <ul> <li> <p>Use the <code>KeyId</code> parameter to identify an asymmetric KMS key with a <code>KeyUsage</code> value of <code>SIGN_VERIFY</code>. To get the <code>KeyUsage</code> value of a KMS key, use the <a>DescribeKey</a> operation. The caller must have <code>kms:Sign</code> permission on the KMS key.</p> </li> <li> <p>Use the <code>Message</code> parameter to specify the message or message digest to sign. You can submit messages of up to 4096 bytes. To sign a larger message, generate a hash digest of the message, and then provide the hash digest in the <code>Message</code> parameter. To indicate whether the message is a full message or a digest, use the <code>MessageType</code> parameter.</p> </li> <li> <p>Choose a signing algorithm that is compatible with the KMS key. </p> </li> </ul> <important> <p>When signing a message, be sure to record the KMS key and the signing algorithm. This information is required to verify the signature.</p> </important> <note> <p>Best practices recommend that you limit the time during which any signature is effective. This deters an attack where the actor uses a signed message to establish validity repeatedly or long after the message is superseded. Signatures do not include a timestamp, but you can include a timestamp in the signed message to help you detect when its time to refresh the signature. </p> </note> <p>To verify the signature that this operation generates, use the <a>Verify</a> operation. Or use the <a>GetPublicKey</a> operation to download the public key and then use the public key to verify the signature outside of KMS. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Sign</a> (key policy)</p> <p> <b>Related operations</b>: <a>Verify</a> </p>

> Body parameter

```json
{
  "KeyId": {},
  "Message": {},
  "MessageType": {},
  "GrantTokens": {},
  "SigningAlgorithm": {},
  "DryRun": {}
}
```

<h3 id="sign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SignRequest](#schemasignrequest)|true|none|
|» KeyId|body|object|true|none|
|» Message|body|object|true|none|
|» MessageType|body|object|false|none|
|» GrantTokens|body|object|false|none|
|» SigningAlgorithm|body|object|true|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.Sign|

> Example responses

> 200 Response

```json
{
  "KeyId": "arn:aws:kms:us-east-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321",
  "Signature": "<binary data>",
  "SigningAlgorithm": "RSASSA_PKCS1_V1_5_SHA_256"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="sign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SignResponse](#schemasignresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|DisabledException|[DisabledException](#schemadisabledexception)|
|482|482|KeyUnavailableException|[KeyUnavailableException](#schemakeyunavailableexception)|
|483|483|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|484|484|InvalidKeyUsageException|[InvalidKeyUsageException](#schemainvalidkeyusageexception)|
|485|485|InvalidGrantTokenException|[InvalidGrantTokenException](#schemainvalidgranttokenexception)|
|486|486|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|487|487|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|488|488|DryRunOperationException|[DryRunOperationException](#schemadryrunoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.TagResource' \
  -d '{
    "KeyId": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=TrentService.TagResource`

<p>Adds or edits tags on a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed key</a>.</p> <note> <p>Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">ABAC for KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> </note> <p>Each tag consists of a tag key and a tag value, both of which are case-sensitive strings. The tag value can be an empty (null) string. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value.</p> <p>You can use this operation to tag a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed key</a>, but you cannot tag an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed key</a>, an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk">Amazon Web Services owned key</a>, a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#keystore-concept">custom key store</a>, or an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#alias-concept">alias</a>.</p> <p>You can also add tags to a KMS key while creating it (<a>CreateKey</a>) or replicating it (<a>ReplicateKey</a>).</p> <p>For information about using tags in KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">Tagging keys</a>. For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. </p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:TagResource</a> (key policy)</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>ListResourceTags</a> </p> </li> <li> <p> <a>ReplicateKey</a> </p> </li> <li> <p> <a>UntagResource</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {},
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
|» KeyId|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|483|483|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|TagException|[TagException](#schematagexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.UntagResource' \
  -d '{
    "KeyId": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=TrentService.UntagResource`

<p>Deletes tags from a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed key</a>. To delete a tag, specify the tag key and the KMS key.</p> <note> <p>Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">ABAC for KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> </note> <p>When it succeeds, the <code>UntagResource</code> operation doesn't return any output. Also, if the specified tag key isn't found on the KMS key, it doesn't throw an exception or return a response. To confirm that the operation worked, use the <a>ListResourceTags</a> operation.</p> <p>For information about using tags in KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">Tagging keys</a>. For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UntagResource</a> (key policy)</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>ListResourceTags</a> </p> </li> <li> <p> <a>ReplicateKey</a> </p> </li> <li> <p> <a>TagResource</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {},
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
|» KeyId|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.UntagResource|

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
|200|OK|Success|None|
|480|480|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|483|483|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|484|484|TagException|[TagException](#schematagexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAlias

<a id="opIdUpdateAlias"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.UpdateAlias' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.UpdateAlias' \
  -d '{
    "AliasName": {},
    "TargetKeyId": {}
  }'
```

`POST /#X-Amz-Target=TrentService.UpdateAlias`

<p>Associates an existing KMS alias with a different KMS key. Each alias is associated with only one KMS key at a time, although a KMS key can have multiple aliases. The alias and the KMS key must be in the same Amazon Web Services account and Region.</p> <note> <p>Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">ABAC for KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> </note> <p>The current and new KMS key must be the same type (both symmetric or both asymmetric or both HMAC), and they must have the same key usage. This restriction prevents errors in code that uses aliases. If you must assign an alias to a different type of KMS key, use <a>DeleteAlias</a> to delete the old alias and <a>CreateAlias</a> to create a new alias.</p> <p>You cannot use <code>UpdateAlias</code> to change an alias name. To change an alias name, use <a>DeleteAlias</a> to delete the old alias and <a>CreateAlias</a> to create a new alias.</p> <p>Because an alias is not a property of a KMS key, you can create, update, and delete the aliases of a KMS key without affecting the KMS key. Also, aliases do not appear in the response from the <a>DescribeKey</a> operation. To get the aliases of all KMS keys in the account, use the <a>ListAliases</a> operation. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. </p> <p> <b>Required permissions</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateAlias</a> on the alias (IAM policy).</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateAlias</a> on the current KMS key (key policy).</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateAlias</a> on the new KMS key (key policy).</p> </li> </ul> <p>For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html#alias-access">Controlling access to aliases</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> </ul>

> Body parameter

```json
{
  "AliasName": {},
  "TargetKeyId": {}
}
```

<h3 id="updatealias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateAliasRequest](#schemaupdatealiasrequest)|true|none|
|» AliasName|body|object|true|none|
|» TargetKeyId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.UpdateAlias|

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

<h3 id="updatealias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCustomKeyStore

<a id="opIdUpdateCustomKeyStore"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.UpdateCustomKeyStore' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.UpdateCustomKeyStore' \
  -d '{
    "CustomKeyStoreId": {},
    "NewCustomKeyStoreName": {},
    "KeyStorePassword": {},
    "CloudHsmClusterId": {},
    "XksProxyUriEndpoint": {},
    "XksProxyUriPath": {},
    "XksProxyVpcEndpointServiceName": {},
    "XksProxyAuthenticationCredential": {
      "AccessKeyId": {},
      "RawSecretAccessKey": {}
    },
    "XksProxyConnectivity": {}
  }'
```

`POST /#X-Amz-Target=TrentService.UpdateCustomKeyStore`

<p>Changes the properties of a custom key store. You can use this operation to change the properties of an CloudHSM key store or an external key store.</p> <p>Use the required <code>CustomKeyStoreId</code> parameter to identify the custom key store. Use the remaining optional parameters to change its properties. This operation does not return any property values. To verify the updated property values, use the <a>DescribeCustomKeyStores</a> operation.</p> <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage.</p> <important> <p>When updating the properties of an external key store, verify that the updated settings connect your key store, via the external key store proxy, to the same external key manager as the previous settings, or to a backup or snapshot of the external key manager with the same cryptographic keys. If the updated connection settings fail, you can fix them and retry, although an extended delay might disrupt Amazon Web Services services. However, if KMS permanently loses its access to cryptographic keys, ciphertext encrypted under those keys is unrecoverable.</p> </important> <note> <p>For external key stores:</p> <p>Some external key managers provide a simpler method for updating an external key store. For details, see your external key manager documentation.</p> <p>When updating an external key store in the KMS console, you can upload a JSON-based proxy configuration file with the desired values. You cannot upload the proxy configuration file to the <code>UpdateCustomKeyStore</code> operation. However, you can use the file to help you determine the correct values for the <code>UpdateCustomKeyStore</code> parameters.</p> </note> <p>For an CloudHSM key store, you can use this operation to change the custom key store friendly name (<code>NewCustomKeyStoreName</code>), to tell KMS about a change to the <code>kmsuser</code> crypto user password (<code>KeyStorePassword</code>), or to associate the custom key store with a different, but related, CloudHSM cluster (<code>CloudHsmClusterId</code>). To update any property of an CloudHSM key store, the <code>ConnectionState</code> of the CloudHSM key store must be <code>DISCONNECTED</code>. </p> <p>For an external key store, you can use this operation to change the custom key store friendly name (<code>NewCustomKeyStoreName</code>), or to tell KMS about a change to the external key store proxy authentication credentials (<code>XksProxyAuthenticationCredential</code>), connection method (<code>XksProxyConnectivity</code>), external proxy endpoint (<code>XksProxyUriEndpoint</code>) and path (<code>XksProxyUriPath</code>). For external key stores with an <code>XksProxyConnectivity</code> of <code>VPC_ENDPOINT_SERVICE</code>, you can also update the Amazon VPC endpoint service name (<code>XksProxyVpcEndpointServiceName</code>). To update most properties of an external key store, the <code>ConnectionState</code> of the external key store must be <code>DISCONNECTED</code>. However, you can update the <code>CustomKeyStoreName</code>, <code>XksProxyAuthenticationCredential</code>, and <code>XksProxyUriPath</code> of an external key store when it is in the CONNECTED or DISCONNECTED state. </p> <p>If your update requires a <code>DISCONNECTED</code> state, before using <code>UpdateCustomKeyStore</code>, use the <a>DisconnectCustomKeyStore</a> operation to disconnect the custom key store. After the <code>UpdateCustomKeyStore</code> operation completes, use the <a>ConnectCustomKeyStore</a> to reconnect the custom key store. To find the <code>ConnectionState</code> of the custom key store, use the <a>DescribeCustomKeyStores</a> operation. </p> <p> </p> <p>Before updating the custom key store, verify that the new values allow KMS to connect the custom key store to its backing key store. For example, before you change the <code>XksProxyUriPath</code> value, verify that the external key store proxy is reachable at the new path.</p> <p>If the operation succeeds, it returns a JSON object with no properties.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateCustomKeyStore</a> (IAM policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ConnectCustomKeyStore</a> </p> </li> <li> <p> <a>CreateCustomKeyStore</a> </p> </li> <li> <p> <a>DeleteCustomKeyStore</a> </p> </li> <li> <p> <a>DescribeCustomKeyStores</a> </p> </li> <li> <p> <a>DisconnectCustomKeyStore</a> </p> </li> </ul>

> Body parameter

```json
{
  "CustomKeyStoreId": {},
  "NewCustomKeyStoreName": {},
  "KeyStorePassword": {},
  "CloudHsmClusterId": {},
  "XksProxyUriEndpoint": {},
  "XksProxyUriPath": {},
  "XksProxyVpcEndpointServiceName": {},
  "XksProxyAuthenticationCredential": {
    "AccessKeyId": {},
    "RawSecretAccessKey": {}
  },
  "XksProxyConnectivity": {}
}
```

<h3 id="updatecustomkeystore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateCustomKeyStoreRequest](#schemaupdatecustomkeystorerequest)|true|none|
|» CustomKeyStoreId|body|object|true|none|
|» NewCustomKeyStoreName|body|object|false|none|
|» KeyStorePassword|body|object|false|none|
|» CloudHsmClusterId|body|object|false|none|
|» XksProxyUriEndpoint|body|object|false|none|
|» XksProxyUriPath|body|object|false|none|
|» XksProxyVpcEndpointServiceName|body|object|false|none|
|» XksProxyAuthenticationCredential|body|object|false|none|
|» » AccessKeyId|body|object|true|none|
|» » RawSecretAccessKey|body|object|true|none|
|» XksProxyConnectivity|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.UpdateCustomKeyStore|

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

<h3 id="updatecustomkeystore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCustomKeyStoreResponse](#schemaupdatecustomkeystoreresponse)|
|480|480|CustomKeyStoreNotFoundException|[CustomKeyStoreNotFoundException](#schemacustomkeystorenotfoundexception)|
|481|481|CustomKeyStoreNameInUseException|[CustomKeyStoreNameInUseException](#schemacustomkeystorenameinuseexception)|
|482|482|CloudHsmClusterNotFoundException|[CloudHsmClusterNotFoundException](#schemacloudhsmclusternotfoundexception)|
|483|483|CloudHsmClusterNotRelatedException|[CloudHsmClusterNotRelatedException](#schemacloudhsmclusternotrelatedexception)|
|484|484|CustomKeyStoreInvalidStateException|[CustomKeyStoreInvalidStateException](#schemacustomkeystoreinvalidstateexception)|
|485|485|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|486|486|CloudHsmClusterNotActiveException|[CloudHsmClusterNotActiveException](#schemacloudhsmclusternotactiveexception)|
|487|487|CloudHsmClusterInvalidConfigurationException|[CloudHsmClusterInvalidConfigurationException](#schemacloudhsmclusterinvalidconfigurationexception)|
|488|488|XksProxyUriInUseException|[XksProxyUriInUseException](#schemaxksproxyuriinuseexception)|
|489|489|XksProxyUriEndpointInUseException|[XksProxyUriEndpointInUseException](#schemaxksproxyuriendpointinuseexception)|
|490|490|XksProxyUriUnreachableException|[XksProxyUriUnreachableException](#schemaxksproxyuriunreachableexception)|
|491|491|XksProxyIncorrectAuthenticationCredentialException|[XksProxyIncorrectAuthenticationCredentialException](#schemaxksproxyincorrectauthenticationcredentialexception)|
|492|492|XksProxyVpcEndpointServiceInUseException|[XksProxyVpcEndpointServiceInUseException](#schemaxksproxyvpcendpointserviceinuseexception)|
|493|493|XksProxyVpcEndpointServiceNotFoundException|[XksProxyVpcEndpointServiceNotFoundException](#schemaxksproxyvpcendpointservicenotfoundexception)|
|494|494|XksProxyVpcEndpointServiceInvalidConfigurationException|[XksProxyVpcEndpointServiceInvalidConfigurationException](#schemaxksproxyvpcendpointserviceinvalidconfigurationexception)|
|495|495|XksProxyInvalidResponseException|[XksProxyInvalidResponseException](#schemaxksproxyinvalidresponseexception)|
|496|496|XksProxyInvalidConfigurationException|[XksProxyInvalidConfigurationException](#schemaxksproxyinvalidconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateKeyDescription

<a id="opIdUpdateKeyDescription"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.UpdateKeyDescription' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.UpdateKeyDescription' \
  -d '{
    "KeyId": {},
    "Description": {}
  }'
```

`POST /#X-Amz-Target=TrentService.UpdateKeyDescription`

<p>Updates the description of a KMS key. To see the description of a KMS key, use <a>DescribeKey</a>. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. </p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateKeyDescription</a> (key policy)</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>DescribeKey</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {},
  "Description": {}
}
```

<h3 id="updatekeydescription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateKeyDescriptionRequest](#schemaupdatekeydescriptionrequest)|true|none|
|» KeyId|body|object|true|none|
|» Description|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.UpdateKeyDescription|

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

<h3 id="updatekeydescription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|483|483|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|484|484|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePrimaryRegion

<a id="opIdUpdatePrimaryRegion"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.UpdatePrimaryRegion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.UpdatePrimaryRegion' \
  -d '{
    "KeyId": {},
    "PrimaryRegion": {}
  }'
```

`POST /#X-Amz-Target=TrentService.UpdatePrimaryRegion`

<p>Changes the primary key of a multi-Region key. </p> <p>This operation changes the replica key in the specified Region to a primary key and changes the former primary key to a replica key. For example, suppose you have a primary key in <code>us-east-1</code> and a replica key in <code>eu-west-2</code>. If you run <code>UpdatePrimaryRegion</code> with a <code>PrimaryRegion</code> value of <code>eu-west-2</code>, the primary key is now the key in <code>eu-west-2</code>, and the key in <code>us-east-1</code> becomes a replica key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-manage.html#multi-region-update">Updating the primary Region</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>This operation supports <i>multi-Region keys</i>, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Multi-Region keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The <i>primary key</i> of a multi-Region key is the source for properties that are always shared by primary and replica keys, including the key material, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id">key ID</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-spec">key spec</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-usage">key usage</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-origin">key material origin</a>, and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic key rotation</a>. It's the only key that can be replicated. You cannot <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html">delete the primary key</a> until all replica keys are deleted.</p> <p>The key ID and primary Region that you specify uniquely identify the replica key that will become the primary key. The primary Region must already have a replica key. This operation does not create a KMS key in the specified Region. To find the replica keys, use the <a>DescribeKey</a> operation on the primary key or any replica key. To create a replica key, use the <a>ReplicateKey</a> operation.</p> <p>You can run this operation while using the affected multi-Region keys in cryptographic operations. This operation should not delay, interrupt, or cause failures in cryptographic operations. </p> <p>Even after this operation completes, the process of updating the primary Region might still be in progress for a few more seconds. Operations such as <code>DescribeKey</code> might display both the old and new primary keys as replicas. The old and new primary keys have a transient key state of <code>Updating</code>. The original key state is restored when the update is complete. While the key state is <code>Updating</code>, you can use the keys in cryptographic operations, but you cannot replicate the new primary key or perform certain management operations, such as enabling or disabling these keys. For details about the <code>Updating</code> key state, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>This operation does not return any output. To verify that primary key is changed, use the <a>DescribeKey</a> operation.</p> <p> <b>Cross-account use</b>: No. You cannot use this operation in a different Amazon Web Services account. </p> <p> <b>Required permissions</b>: </p> <ul> <li> <p> <code>kms:UpdatePrimaryRegion</code> on the current primary key (in the primary key's Region). Include this permission primary key's key policy.</p> </li> <li> <p> <code>kms:UpdatePrimaryRegion</code> on the current replica key (in the replica key's Region). Include this permission in the replica key's key policy.</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>ReplicateKey</a> </p> </li> </ul>

> Body parameter

```json
{
  "KeyId": {},
  "PrimaryRegion": {}
}
```

<h3 id="updateprimaryregion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdatePrimaryRegionRequest](#schemaupdateprimaryregionrequest)|true|none|
|» KeyId|body|object|true|none|
|» PrimaryRegion|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.UpdatePrimaryRegion|

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

<h3 id="updateprimaryregion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|DisabledException|[DisabledException](#schemadisabledexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|483|483|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## Verify

<a id="opIdVerify"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.Verify' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.Verify' \
  -d '{
    "KeyId": {},
    "Message": {},
    "MessageType": {},
    "Signature": {},
    "SigningAlgorithm": {},
    "GrantTokens": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=TrentService.Verify`

<p>Verifies a digital signature that was generated by the <a>Sign</a> operation. </p> <p/> <p>Verification confirms that an authorized user signed the message with the specified KMS key and signing algorithm, and the message hasn't changed since it was signed. If the signature is verified, the value of the <code>SignatureValid</code> field in the response is <code>True</code>. If the signature verification fails, the <code>Verify</code> operation fails with an <code>KMSInvalidSignatureException</code> exception.</p> <p>A digital signature is generated by using the private key in an asymmetric KMS key. The signature is verified by using the public key in the same asymmetric KMS key. For information about asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>To use the <code>Verify</code> operation, specify the same asymmetric KMS key, message, and signing algorithm that were used to produce the signature. The message type does not need to be the same as the one used for signing, but it must indicate whether the value of the <code>Message</code> parameter should be hashed as part of the verification process.</p> <p>You can also verify the digital signature by using the public key of the KMS key outside of KMS. Use the <a>GetPublicKey</a> operation to download the public key in the asymmetric KMS key and then use the public key to verify the signature outside of KMS. The advantage of using the <code>Verify</code> operation is that it is performed within KMS. As a result, it's easy to call, the operation is performed within the FIPS boundary, it is logged in CloudTrail, and you can use key policy and IAM policy to determine who is authorized to use the KMS key to verify signatures.</p> <p>To verify a signature outside of KMS with an SM2 public key (China Regions only), you must specify the distinguishing ID. By default, KMS uses <code>1234567812345678</code> as the distinguishing ID. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/asymmetric-key-specs.html#key-spec-sm-offline-verification">Offline verification with SM2 key pairs</a>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter. </p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Verify</a> (key policy)</p> <p> <b>Related operations</b>: <a>Sign</a> </p>

> Body parameter

```json
{
  "KeyId": {},
  "Message": {},
  "MessageType": {},
  "Signature": {},
  "SigningAlgorithm": {},
  "GrantTokens": {},
  "DryRun": {}
}
```

<h3 id="verify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[VerifyRequest](#schemaverifyrequest)|true|none|
|» KeyId|body|object|true|none|
|» Message|body|object|true|none|
|» MessageType|body|object|false|none|
|» Signature|body|object|true|none|
|» SigningAlgorithm|body|object|true|none|
|» GrantTokens|body|object|false|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.Verify|

> Example responses

> 200 Response

```json
{
  "KeyId": "arn:aws:kms:us-east-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321",
  "SignatureValid": true,
  "SigningAlgorithm": "RSASSA_PSS_SHA_512"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="verify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VerifyResponse](#schemaverifyresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|DisabledException|[DisabledException](#schemadisabledexception)|
|482|482|KeyUnavailableException|[KeyUnavailableException](#schemakeyunavailableexception)|
|483|483|DependencyTimeoutException|[DependencyTimeoutException](#schemadependencytimeoutexception)|
|484|484|InvalidKeyUsageException|[InvalidKeyUsageException](#schemainvalidkeyusageexception)|
|485|485|InvalidGrantTokenException|[InvalidGrantTokenException](#schemainvalidgranttokenexception)|
|486|486|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|487|487|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|488|488|KMSInvalidSignatureException|[KMSInvalidSignatureException](#schemakmsinvalidsignatureexception)|
|489|489|DryRunOperationException|[DryRunOperationException](#schemadryrunoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## VerifyMac

<a id="opIdVerifyMac"></a>

> Code samples

```bash
curl 'https://kms.us-east-1.amazonaws.com/#X-Amz-Target=TrentService.VerifyMac' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TrentService.VerifyMac' \
  -d '{
    "Message": {},
    "KeyId": {},
    "MacAlgorithm": {},
    "Mac": {},
    "GrantTokens": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=TrentService.VerifyMac`

<p>Verifies the hash-based message authentication code (HMAC) for a specified message, HMAC KMS key, and MAC algorithm. To verify the HMAC, <code>VerifyMac</code> computes an HMAC using the message, HMAC KMS key, and MAC algorithm that you specify, and compares the computed HMAC to the HMAC that you specify. If the HMACs are identical, the verification succeeds; otherwise, it fails. Verification indicates that the message hasn't changed since the HMAC was calculated, and the specified key was used to generate and verify the HMAC.</p> <p>HMAC KMS keys and the HMAC algorithms that KMS uses conform to industry standards defined in <a href="https://datatracker.ietf.org/doc/html/rfc2104">RFC 2104</a>.</p> <p>This operation is part of KMS support for HMAC KMS keys. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter. </p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:VerifyMac</a> (key policy)</p> <p> <b>Related operations</b>: <a>GenerateMac</a> </p>

> Body parameter

```json
{
  "Message": {},
  "KeyId": {},
  "MacAlgorithm": {},
  "Mac": {},
  "GrantTokens": {},
  "DryRun": {}
}
```

<h3 id="verifymac-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[VerifyMacRequest](#schemaverifymacrequest)|true|none|
|» Message|body|object|true|none|
|» KeyId|body|object|true|none|
|» MacAlgorithm|body|object|true|none|
|» Mac|body|object|true|none|
|» GrantTokens|body|object|false|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TrentService.VerifyMac|

> Example responses

> 200 Response

```json
{
  "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
  "MacAlgorithm": "HMAC_SHA_384",
  "MacValid": true
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="verifymac-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VerifyMacResponse](#schemaverifymacresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|DisabledException|[DisabledException](#schemadisabledexception)|
|482|482|KeyUnavailableException|[KeyUnavailableException](#schemakeyunavailableexception)|
|483|483|InvalidKeyUsageException|[InvalidKeyUsageException](#schemainvalidkeyusageexception)|
|484|484|InvalidGrantTokenException|[InvalidGrantTokenException](#schemainvalidgranttokenexception)|
|485|485|KMSInternalException|[KMSInternalException](#schemakmsinternalexception)|
|486|486|KMSInvalidMacException|[KMSInvalidMacException](#schemakmsinvalidmacexception)|
|487|487|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|488|488|DryRunOperationException|[DryRunOperationException](#schemadryrunoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CancelKeyDeletionResponse">CancelKeyDeletionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelkeydeletionresponse"></a>
<a id="schema_CancelKeyDeletionResponse"></a>
<a id="tocScancelkeydeletionresponse"></a>
<a id="tocscancelkeydeletionresponse"></a>

```json
{
  "KeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|false|none|none|

<h2 id="tocS_CancelKeyDeletionRequest">CancelKeyDeletionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelkeydeletionrequest"></a>
<a id="schema_CancelKeyDeletionRequest"></a>
<a id="tocScancelkeydeletionrequest"></a>
<a id="tocscancelkeydeletionrequest"></a>

```json
{
  "KeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_InvalidArnException">InvalidArnException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidarnexception"></a>
<a id="schema_InvalidArnException"></a>
<a id="tocSinvalidarnexception"></a>
<a id="tocsinvalidarnexception"></a>

```json
null
```

<h2 id="tocS_DependencyTimeoutException">DependencyTimeoutException</h2>
<!-- backwards compatibility -->
<a id="schemadependencytimeoutexception"></a>
<a id="schema_DependencyTimeoutException"></a>
<a id="tocSdependencytimeoutexception"></a>
<a id="tocsdependencytimeoutexception"></a>

```json
null
```

<h2 id="tocS_KMSInternalException">KMSInternalException</h2>
<!-- backwards compatibility -->
<a id="schemakmsinternalexception"></a>
<a id="schema_KMSInternalException"></a>
<a id="tocSkmsinternalexception"></a>
<a id="tocskmsinternalexception"></a>

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

<h2 id="tocS_ConnectCustomKeyStoreResponse">ConnectCustomKeyStoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconnectcustomkeystoreresponse"></a>
<a id="schema_ConnectCustomKeyStoreResponse"></a>
<a id="tocSconnectcustomkeystoreresponse"></a>
<a id="tocsconnectcustomkeystoreresponse"></a>

```json
{}
```

<h2 id="tocS_ConnectCustomKeyStoreRequest">ConnectCustomKeyStoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconnectcustomkeystorerequest"></a>
<a id="schema_ConnectCustomKeyStoreRequest"></a>
<a id="tocSconnectcustomkeystorerequest"></a>
<a id="tocsconnectcustomkeystorerequest"></a>

```json
{
  "CustomKeyStoreId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomKeyStoreId|object|true|none|none|

<h2 id="tocS_CloudHsmClusterNotActiveException">CloudHsmClusterNotActiveException</h2>
<!-- backwards compatibility -->
<a id="schemacloudhsmclusternotactiveexception"></a>
<a id="schema_CloudHsmClusterNotActiveException"></a>
<a id="tocScloudhsmclusternotactiveexception"></a>
<a id="tocscloudhsmclusternotactiveexception"></a>

```json
null
```

<h2 id="tocS_CustomKeyStoreInvalidStateException">CustomKeyStoreInvalidStateException</h2>
<!-- backwards compatibility -->
<a id="schemacustomkeystoreinvalidstateexception"></a>
<a id="schema_CustomKeyStoreInvalidStateException"></a>
<a id="tocScustomkeystoreinvalidstateexception"></a>
<a id="tocscustomkeystoreinvalidstateexception"></a>

```json
null
```

<h2 id="tocS_CustomKeyStoreNotFoundException">CustomKeyStoreNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemacustomkeystorenotfoundexception"></a>
<a id="schema_CustomKeyStoreNotFoundException"></a>
<a id="tocScustomkeystorenotfoundexception"></a>
<a id="tocscustomkeystorenotfoundexception"></a>

```json
null
```

<h2 id="tocS_CloudHsmClusterInvalidConfigurationException">CloudHsmClusterInvalidConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemacloudhsmclusterinvalidconfigurationexception"></a>
<a id="schema_CloudHsmClusterInvalidConfigurationException"></a>
<a id="tocScloudhsmclusterinvalidconfigurationexception"></a>
<a id="tocscloudhsmclusterinvalidconfigurationexception"></a>

```json
null
```

<h2 id="tocS_CreateAliasRequest">CreateAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatealiasrequest"></a>
<a id="schema_CreateAliasRequest"></a>
<a id="tocScreatealiasrequest"></a>
<a id="tocscreatealiasrequest"></a>

```json
{
  "AliasName": {},
  "TargetKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AliasName|object|true|none|none|
|TargetKeyId|object|true|none|none|

<h2 id="tocS_AlreadyExistsException">AlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaalreadyexistsexception"></a>
<a id="schema_AlreadyExistsException"></a>
<a id="tocSalreadyexistsexception"></a>
<a id="tocsalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_InvalidAliasNameException">InvalidAliasNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidaliasnameexception"></a>
<a id="schema_InvalidAliasNameException"></a>
<a id="tocSinvalidaliasnameexception"></a>
<a id="tocsinvalidaliasnameexception"></a>

```json
null
```

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateCustomKeyStoreResponse">CreateCustomKeyStoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustomkeystoreresponse"></a>
<a id="schema_CreateCustomKeyStoreResponse"></a>
<a id="tocScreatecustomkeystoreresponse"></a>
<a id="tocscreatecustomkeystoreresponse"></a>

```json
{
  "CustomKeyStoreId": "cks-987654321abcdef0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomKeyStoreId|object|false|none|none|

<h2 id="tocS_CreateCustomKeyStoreRequest">CreateCustomKeyStoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustomkeystorerequest"></a>
<a id="schema_CreateCustomKeyStoreRequest"></a>
<a id="tocScreatecustomkeystorerequest"></a>
<a id="tocscreatecustomkeystorerequest"></a>

```json
{
  "CustomKeyStoreName": {},
  "CloudHsmClusterId": {},
  "TrustAnchorCertificate": {},
  "KeyStorePassword": {},
  "CustomKeyStoreType": {},
  "XksProxyUriEndpoint": {},
  "XksProxyUriPath": {},
  "XksProxyVpcEndpointServiceName": {},
  "XksProxyAuthenticationCredential": {
    "AccessKeyId": {},
    "RawSecretAccessKey": {}
  },
  "XksProxyConnectivity": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomKeyStoreName|object|true|none|none|
|CloudHsmClusterId|object|false|none|none|
|TrustAnchorCertificate|object|false|none|none|
|KeyStorePassword|object|false|none|none|
|CustomKeyStoreType|object|false|none|none|
|XksProxyUriEndpoint|object|false|none|none|
|XksProxyUriPath|object|false|none|none|
|XksProxyVpcEndpointServiceName|object|false|none|none|
|XksProxyAuthenticationCredential|object|false|none|none|
|XksProxyConnectivity|object|false|none|none|

<h2 id="tocS_CloudHsmClusterInUseException">CloudHsmClusterInUseException</h2>
<!-- backwards compatibility -->
<a id="schemacloudhsmclusterinuseexception"></a>
<a id="schema_CloudHsmClusterInUseException"></a>
<a id="tocScloudhsmclusterinuseexception"></a>
<a id="tocscloudhsmclusterinuseexception"></a>

```json
null
```

<h2 id="tocS_CustomKeyStoreNameInUseException">CustomKeyStoreNameInUseException</h2>
<!-- backwards compatibility -->
<a id="schemacustomkeystorenameinuseexception"></a>
<a id="schema_CustomKeyStoreNameInUseException"></a>
<a id="tocScustomkeystorenameinuseexception"></a>
<a id="tocscustomkeystorenameinuseexception"></a>

```json
null
```

<h2 id="tocS_CloudHsmClusterNotFoundException">CloudHsmClusterNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemacloudhsmclusternotfoundexception"></a>
<a id="schema_CloudHsmClusterNotFoundException"></a>
<a id="tocScloudhsmclusternotfoundexception"></a>
<a id="tocscloudhsmclusternotfoundexception"></a>

```json
null
```

<h2 id="tocS_IncorrectTrustAnchorException">IncorrectTrustAnchorException</h2>
<!-- backwards compatibility -->
<a id="schemaincorrecttrustanchorexception"></a>
<a id="schema_IncorrectTrustAnchorException"></a>
<a id="tocSincorrecttrustanchorexception"></a>
<a id="tocsincorrecttrustanchorexception"></a>

```json
null
```

<h2 id="tocS_XksProxyUriInUseException">XksProxyUriInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaxksproxyuriinuseexception"></a>
<a id="schema_XksProxyUriInUseException"></a>
<a id="tocSxksproxyuriinuseexception"></a>
<a id="tocsxksproxyuriinuseexception"></a>

```json
null
```

<h2 id="tocS_XksProxyUriEndpointInUseException">XksProxyUriEndpointInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaxksproxyuriendpointinuseexception"></a>
<a id="schema_XksProxyUriEndpointInUseException"></a>
<a id="tocSxksproxyuriendpointinuseexception"></a>
<a id="tocsxksproxyuriendpointinuseexception"></a>

```json
null
```

<h2 id="tocS_XksProxyUriUnreachableException">XksProxyUriUnreachableException</h2>
<!-- backwards compatibility -->
<a id="schemaxksproxyuriunreachableexception"></a>
<a id="schema_XksProxyUriUnreachableException"></a>
<a id="tocSxksproxyuriunreachableexception"></a>
<a id="tocsxksproxyuriunreachableexception"></a>

```json
null
```

<h2 id="tocS_XksProxyIncorrectAuthenticationCredentialException">XksProxyIncorrectAuthenticationCredentialException</h2>
<!-- backwards compatibility -->
<a id="schemaxksproxyincorrectauthenticationcredentialexception"></a>
<a id="schema_XksProxyIncorrectAuthenticationCredentialException"></a>
<a id="tocSxksproxyincorrectauthenticationcredentialexception"></a>
<a id="tocsxksproxyincorrectauthenticationcredentialexception"></a>

```json
null
```

<h2 id="tocS_XksProxyVpcEndpointServiceInUseException">XksProxyVpcEndpointServiceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaxksproxyvpcendpointserviceinuseexception"></a>
<a id="schema_XksProxyVpcEndpointServiceInUseException"></a>
<a id="tocSxksproxyvpcendpointserviceinuseexception"></a>
<a id="tocsxksproxyvpcendpointserviceinuseexception"></a>

```json
null
```

<h2 id="tocS_XksProxyVpcEndpointServiceNotFoundException">XksProxyVpcEndpointServiceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaxksproxyvpcendpointservicenotfoundexception"></a>
<a id="schema_XksProxyVpcEndpointServiceNotFoundException"></a>
<a id="tocSxksproxyvpcendpointservicenotfoundexception"></a>
<a id="tocsxksproxyvpcendpointservicenotfoundexception"></a>

```json
null
```

<h2 id="tocS_XksProxyVpcEndpointServiceInvalidConfigurationException">XksProxyVpcEndpointServiceInvalidConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemaxksproxyvpcendpointserviceinvalidconfigurationexception"></a>
<a id="schema_XksProxyVpcEndpointServiceInvalidConfigurationException"></a>
<a id="tocSxksproxyvpcendpointserviceinvalidconfigurationexception"></a>
<a id="tocsxksproxyvpcendpointserviceinvalidconfigurationexception"></a>

```json
null
```

<h2 id="tocS_XksProxyInvalidResponseException">XksProxyInvalidResponseException</h2>
<!-- backwards compatibility -->
<a id="schemaxksproxyinvalidresponseexception"></a>
<a id="schema_XksProxyInvalidResponseException"></a>
<a id="tocSxksproxyinvalidresponseexception"></a>
<a id="tocsxksproxyinvalidresponseexception"></a>

```json
null
```

<h2 id="tocS_XksProxyInvalidConfigurationException">XksProxyInvalidConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemaxksproxyinvalidconfigurationexception"></a>
<a id="schema_XksProxyInvalidConfigurationException"></a>
<a id="tocSxksproxyinvalidconfigurationexception"></a>
<a id="tocsxksproxyinvalidconfigurationexception"></a>

```json
null
```

<h2 id="tocS_CreateGrantResponse">CreateGrantResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategrantresponse"></a>
<a id="schema_CreateGrantResponse"></a>
<a id="tocScreategrantresponse"></a>
<a id="tocscreategrantresponse"></a>

```json
{
  "GrantId": "0c237476b39f8bc44e45212e08498fbe3151305030726c0590dd8d3e9f3d6a60",
  "GrantToken": "AQpAM2RhZTk1MGMyNTk2ZmZmMzEyYWVhOWViN2I1MWM4Mzc0MWFiYjc0ZDE1ODkyNGFlNTIzODZhMzgyZjBlNGY3NiKIAgEBAgB4Pa6VDCWW__MSrqnre1HIN0Grt00ViSSuUjhqOC8OT3YAAADfMIHcBgkqhkiG9w0BBwaggc4wgcsCAQAwgcUGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMmqLyBTAegIn9XlK5AgEQgIGXZQjkBcl1dykDdqZBUQ6L1OfUivQy7JVYO2-ZJP7m6f1g8GzV47HX5phdtONAP7K_HQIflcgpkoCqd_fUnE114mSmiagWkbQ5sqAVV3ov-VeqgrvMe5ZFEWLMSluvBAqdjHEdMIkHMlhlj4ENZbzBfo9Wxk8b8SnwP4kc4gGivedzFXo-dwN8fxjjq_ZZ9JFOj2ijIbj5FyogDCN0drOfi8RORSEuCEmPvjFRMFAwcmwFkN2NPp89amA"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GrantToken|object|false|none|none|
|GrantId|object|false|none|none|

<h2 id="tocS_CreateGrantRequest">CreateGrantRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategrantrequest"></a>
<a id="schema_CreateGrantRequest"></a>
<a id="tocScreategrantrequest"></a>
<a id="tocscreategrantrequest"></a>

```json
{
  "KeyId": {},
  "GranteePrincipal": {},
  "RetiringPrincipal": {},
  "Operations": {},
  "Constraints": {
    "EncryptionContextSubset": {
      "property1": "string",
      "property2": "string"
    },
    "EncryptionContextEquals": {
      "property1": "string",
      "property2": "string"
    }
  },
  "GrantTokens": {},
  "Name": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|GranteePrincipal|object|true|none|none|
|RetiringPrincipal|object|false|none|none|
|Operations|object|true|none|none|
|Constraints|object|false|none|none|
|GrantTokens|object|false|none|none|
|Name|object|false|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_DisabledException">DisabledException</h2>
<!-- backwards compatibility -->
<a id="schemadisabledexception"></a>
<a id="schema_DisabledException"></a>
<a id="tocSdisabledexception"></a>
<a id="tocsdisabledexception"></a>

```json
null
```

<h2 id="tocS_InvalidGrantTokenException">InvalidGrantTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidgranttokenexception"></a>
<a id="schema_InvalidGrantTokenException"></a>
<a id="tocSinvalidgranttokenexception"></a>
<a id="tocsinvalidgranttokenexception"></a>

```json
null
```

<h2 id="tocS_DryRunOperationException">DryRunOperationException</h2>
<!-- backwards compatibility -->
<a id="schemadryrunoperationexception"></a>
<a id="schema_DryRunOperationException"></a>
<a id="tocSdryrunoperationexception"></a>
<a id="tocsdryrunoperationexception"></a>

```json
null
```

<h2 id="tocS_CreateKeyResponse">CreateKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatekeyresponse"></a>
<a id="schema_CreateKeyResponse"></a>
<a id="tocScreatekeyresponse"></a>
<a id="tocscreatekeyresponse"></a>

```json
{
  "KeyMetadata": {
    "AWSAccountId": "111122223333",
    "Arn": "arn:aws:kms:us-east-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321",
    "CreationDate": "2022-02-02T07:48:55-07:00",
    "CustomKeyStoreId": "cks-9876543210fedcba9",
    "CustomerMasterKeySpec": "SYMMETRIC_DEFAULT",
    "Description": "",
    "Enabled": true,
    "EncryptionAlgorithms": [
      "SYMMETRIC_DEFAULT"
    ],
    "KeyId": "0987dcba-09fe-87dc-65ba-ab0987654321",
    "KeyManager": "CUSTOMER",
    "KeySpec": "SYMMETRIC_DEFAULT",
    "KeyState": "Enabled",
    "KeyUsage": "ENCRYPT_DECRYPT",
    "MultiRegion": false,
    "Origin": "EXTERNAL_KEY_STORE",
    "XksKeyConfiguration": {
      "Id": "bb8562717f809024"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyMetadata|object|false|none|none|

<h2 id="tocS_CreateKeyRequest">CreateKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatekeyrequest"></a>
<a id="schema_CreateKeyRequest"></a>
<a id="tocScreatekeyrequest"></a>
<a id="tocscreatekeyrequest"></a>

```json
{
  "Policy": {},
  "Description": {},
  "KeyUsage": {},
  "CustomerMasterKeySpec": {},
  "KeySpec": {},
  "Origin": {},
  "CustomKeyStoreId": {},
  "BypassPolicyLockoutSafetyCheck": {},
  "Tags": {},
  "MultiRegion": {},
  "XksKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|
|Description|object|false|none|none|
|KeyUsage|object|false|none|none|
|CustomerMasterKeySpec|object|false|none|none|
|KeySpec|object|false|none|none|
|Origin|object|false|none|none|
|CustomKeyStoreId|object|false|none|none|
|BypassPolicyLockoutSafetyCheck|object|false|none|none|
|Tags|object|false|none|none|
|MultiRegion|object|false|none|none|
|XksKeyId|object|false|none|none|

<h2 id="tocS_MalformedPolicyDocumentException">MalformedPolicyDocumentException</h2>
<!-- backwards compatibility -->
<a id="schemamalformedpolicydocumentexception"></a>
<a id="schema_MalformedPolicyDocumentException"></a>
<a id="tocSmalformedpolicydocumentexception"></a>
<a id="tocsmalformedpolicydocumentexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedOperationException">UnsupportedOperationException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedoperationexception"></a>
<a id="schema_UnsupportedOperationException"></a>
<a id="tocSunsupportedoperationexception"></a>
<a id="tocsunsupportedoperationexception"></a>

```json
null
```

<h2 id="tocS_TagException">TagException</h2>
<!-- backwards compatibility -->
<a id="schematagexception"></a>
<a id="schema_TagException"></a>
<a id="tocStagexception"></a>
<a id="tocstagexception"></a>

```json
null
```

<h2 id="tocS_XksKeyInvalidConfigurationException">XksKeyInvalidConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemaxkskeyinvalidconfigurationexception"></a>
<a id="schema_XksKeyInvalidConfigurationException"></a>
<a id="tocSxkskeyinvalidconfigurationexception"></a>
<a id="tocsxkskeyinvalidconfigurationexception"></a>

```json
null
```

<h2 id="tocS_XksKeyAlreadyInUseException">XksKeyAlreadyInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaxkskeyalreadyinuseexception"></a>
<a id="schema_XksKeyAlreadyInUseException"></a>
<a id="tocSxkskeyalreadyinuseexception"></a>
<a id="tocsxkskeyalreadyinuseexception"></a>

```json
null
```

<h2 id="tocS_XksKeyNotFoundException">XksKeyNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaxkskeynotfoundexception"></a>
<a id="schema_XksKeyNotFoundException"></a>
<a id="tocSxkskeynotfoundexception"></a>
<a id="tocsxkskeynotfoundexception"></a>

```json
null
```

<h2 id="tocS_DecryptResponse">DecryptResponse</h2>
<!-- backwards compatibility -->
<a id="schemadecryptresponse"></a>
<a id="schema_DecryptResponse"></a>
<a id="tocSdecryptresponse"></a>
<a id="tocsdecryptresponse"></a>

```json
{
  "CiphertextForRecipient": "<binary data>",
  "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
  "Plaintext": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|false|none|none|
|Plaintext|object|false|none|none|
|EncryptionAlgorithm|object|false|none|none|
|CiphertextForRecipient|object|false|none|none|

<h2 id="tocS_DecryptRequest">DecryptRequest</h2>
<!-- backwards compatibility -->
<a id="schemadecryptrequest"></a>
<a id="schema_DecryptRequest"></a>
<a id="tocSdecryptrequest"></a>
<a id="tocsdecryptrequest"></a>

```json
{
  "CiphertextBlob": {},
  "EncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "GrantTokens": {},
  "KeyId": {},
  "EncryptionAlgorithm": {},
  "Recipient": {
    "KeyEncryptionAlgorithm": {},
    "AttestationDocument": {}
  },
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CiphertextBlob|object|true|none|none|
|EncryptionContext|object|false|none|none|
|GrantTokens|object|false|none|none|
|KeyId|object|false|none|none|
|EncryptionAlgorithm|object|false|none|none|
|Recipient|object|false|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_InvalidCiphertextException">InvalidCiphertextException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidciphertextexception"></a>
<a id="schema_InvalidCiphertextException"></a>
<a id="tocSinvalidciphertextexception"></a>
<a id="tocsinvalidciphertextexception"></a>

```json
null
```

<h2 id="tocS_KeyUnavailableException">KeyUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemakeyunavailableexception"></a>
<a id="schema_KeyUnavailableException"></a>
<a id="tocSkeyunavailableexception"></a>
<a id="tocskeyunavailableexception"></a>

```json
null
```

<h2 id="tocS_IncorrectKeyException">IncorrectKeyException</h2>
<!-- backwards compatibility -->
<a id="schemaincorrectkeyexception"></a>
<a id="schema_IncorrectKeyException"></a>
<a id="tocSincorrectkeyexception"></a>
<a id="tocsincorrectkeyexception"></a>

```json
null
```

<h2 id="tocS_InvalidKeyUsageException">InvalidKeyUsageException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidkeyusageexception"></a>
<a id="schema_InvalidKeyUsageException"></a>
<a id="tocSinvalidkeyusageexception"></a>
<a id="tocsinvalidkeyusageexception"></a>

```json
null
```

<h2 id="tocS_DeleteAliasRequest">DeleteAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletealiasrequest"></a>
<a id="schema_DeleteAliasRequest"></a>
<a id="tocSdeletealiasrequest"></a>
<a id="tocsdeletealiasrequest"></a>

```json
{
  "AliasName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AliasName|object|true|none|none|

<h2 id="tocS_DeleteCustomKeyStoreResponse">DeleteCustomKeyStoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecustomkeystoreresponse"></a>
<a id="schema_DeleteCustomKeyStoreResponse"></a>
<a id="tocSdeletecustomkeystoreresponse"></a>
<a id="tocsdeletecustomkeystoreresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteCustomKeyStoreRequest">DeleteCustomKeyStoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecustomkeystorerequest"></a>
<a id="schema_DeleteCustomKeyStoreRequest"></a>
<a id="tocSdeletecustomkeystorerequest"></a>
<a id="tocsdeletecustomkeystorerequest"></a>

```json
{
  "CustomKeyStoreId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomKeyStoreId|object|true|none|none|

<h2 id="tocS_CustomKeyStoreHasCMKsException">CustomKeyStoreHasCMKsException</h2>
<!-- backwards compatibility -->
<a id="schemacustomkeystorehascmksexception"></a>
<a id="schema_CustomKeyStoreHasCMKsException"></a>
<a id="tocScustomkeystorehascmksexception"></a>
<a id="tocscustomkeystorehascmksexception"></a>

```json
null
```

<h2 id="tocS_DeleteImportedKeyMaterialRequest">DeleteImportedKeyMaterialRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteimportedkeymaterialrequest"></a>
<a id="schema_DeleteImportedKeyMaterialRequest"></a>
<a id="tocSdeleteimportedkeymaterialrequest"></a>
<a id="tocsdeleteimportedkeymaterialrequest"></a>

```json
{
  "KeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|

<h2 id="tocS_DescribeCustomKeyStoresResponse">DescribeCustomKeyStoresResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecustomkeystoresresponse"></a>
<a id="schema_DescribeCustomKeyStoresResponse"></a>
<a id="tocSdescribecustomkeystoresresponse"></a>
<a id="tocsdescribecustomkeystoresresponse"></a>

```json
{
  "CustomKeyStores": [
    {
      "ConnectionState": "CONNECTED",
      "CreationDate": "1.643057863.842",
      "CustomKeyStoreId": "cks-876543210fedcba98",
      "CustomKeyStoreName": "ExampleVPCExternalKeyStore",
      "CustomKeyStoreType": "EXTERNAL_KEY_STORE",
      "XksProxyConfiguration": {
        "AccessKeyId": "ABCDE12345670EXAMPLE",
        "Connectivity": "VPC_ENDPOINT_SERVICE",
        "UriEndpoint": "https://myproxy-private.xks.example.com",
        "UriPath": "/example-prefix/kms/xks/v1",
        "VpcEndpointServiceName": "com.amazonaws.vpce.us-east-1.vpce-svc-example1"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomKeyStores|object|false|none|none|
|NextMarker|object|false|none|none|
|Truncated|object|false|none|none|

<h2 id="tocS_DescribeCustomKeyStoresRequest">DescribeCustomKeyStoresRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecustomkeystoresrequest"></a>
<a id="schema_DescribeCustomKeyStoresRequest"></a>
<a id="tocSdescribecustomkeystoresrequest"></a>
<a id="tocsdescribecustomkeystoresrequest"></a>

```json
{
  "CustomKeyStoreId": {},
  "CustomKeyStoreName": {},
  "Limit": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomKeyStoreId|object|false|none|none|
|CustomKeyStoreName|object|false|none|none|
|Limit|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_InvalidMarkerException">InvalidMarkerException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidmarkerexception"></a>
<a id="schema_InvalidMarkerException"></a>
<a id="tocSinvalidmarkerexception"></a>
<a id="tocsinvalidmarkerexception"></a>

```json
null
```

<h2 id="tocS_DescribeKeyResponse">DescribeKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribekeyresponse"></a>
<a id="schema_DescribeKeyResponse"></a>
<a id="tocSdescribekeyresponse"></a>
<a id="tocsdescribekeyresponse"></a>

```json
{
  "KeyMetadata": {
    "AWSAccountId": "123456789012",
    "Arn": "arn:aws:kms:us-west-2:123456789012:key/1234abcd-12ab-34cd-56ef-1234567890ab",
    "CreationDate": 1646160362.664,
    "CustomKeyStoreId": "cks-1234567890abcdef0",
    "CustomerMasterKeySpec": "SYMMETRIC_DEFAULT",
    "Description": "External key store test key",
    "Enabled": true,
    "EncryptionAlgorithms": [
      "SYMMETRIC_DEFAULT"
    ],
    "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab",
    "KeyManager": "CUSTOMER",
    "KeySpec": "SYMMETRIC_DEFAULT",
    "KeyState": "Enabled",
    "KeyUsage": "ENCRYPT_DECRYPT",
    "MultiRegion": false,
    "Origin": "EXTERNAL_KEY_STORE",
    "XksKeyConfiguration": {
      "Id": "bb8562717f809024"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyMetadata|object|false|none|none|

<h2 id="tocS_DescribeKeyRequest">DescribeKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribekeyrequest"></a>
<a id="schema_DescribeKeyRequest"></a>
<a id="tocSdescribekeyrequest"></a>
<a id="tocsdescribekeyrequest"></a>

```json
{
  "KeyId": {},
  "GrantTokens": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|GrantTokens|object|false|none|none|

<h2 id="tocS_DisableKeyRequest">DisableKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisablekeyrequest"></a>
<a id="schema_DisableKeyRequest"></a>
<a id="tocSdisablekeyrequest"></a>
<a id="tocsdisablekeyrequest"></a>

```json
{
  "KeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|

<h2 id="tocS_DisableKeyRotationRequest">DisableKeyRotationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisablekeyrotationrequest"></a>
<a id="schema_DisableKeyRotationRequest"></a>
<a id="tocSdisablekeyrotationrequest"></a>
<a id="tocsdisablekeyrotationrequest"></a>

```json
{
  "KeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|

<h2 id="tocS_DisconnectCustomKeyStoreResponse">DisconnectCustomKeyStoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisconnectcustomkeystoreresponse"></a>
<a id="schema_DisconnectCustomKeyStoreResponse"></a>
<a id="tocSdisconnectcustomkeystoreresponse"></a>
<a id="tocsdisconnectcustomkeystoreresponse"></a>

```json
{}
```

<h2 id="tocS_DisconnectCustomKeyStoreRequest">DisconnectCustomKeyStoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisconnectcustomkeystorerequest"></a>
<a id="schema_DisconnectCustomKeyStoreRequest"></a>
<a id="tocSdisconnectcustomkeystorerequest"></a>
<a id="tocsdisconnectcustomkeystorerequest"></a>

```json
{
  "CustomKeyStoreId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomKeyStoreId|object|true|none|none|

<h2 id="tocS_EnableKeyRequest">EnableKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenablekeyrequest"></a>
<a id="schema_EnableKeyRequest"></a>
<a id="tocSenablekeyrequest"></a>
<a id="tocsenablekeyrequest"></a>

```json
{
  "KeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|

<h2 id="tocS_EnableKeyRotationRequest">EnableKeyRotationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenablekeyrotationrequest"></a>
<a id="schema_EnableKeyRotationRequest"></a>
<a id="tocSenablekeyrotationrequest"></a>
<a id="tocsenablekeyrotationrequest"></a>

```json
{
  "KeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|

<h2 id="tocS_EncryptResponse">EncryptResponse</h2>
<!-- backwards compatibility -->
<a id="schemaencryptresponse"></a>
<a id="schema_EncryptResponse"></a>
<a id="tocSencryptresponse"></a>
<a id="tocsencryptresponse"></a>

```json
{
  "CiphertextBlob": "<binary data>",
  "EncryptionAlgorithm": "RSAES_OAEP_SHA_256",
  "KeyId": "arn:aws:kms:us-west-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CiphertextBlob|object|false|none|none|
|KeyId|object|false|none|none|
|EncryptionAlgorithm|object|false|none|none|

<h2 id="tocS_EncryptRequest">EncryptRequest</h2>
<!-- backwards compatibility -->
<a id="schemaencryptrequest"></a>
<a id="schema_EncryptRequest"></a>
<a id="tocSencryptrequest"></a>
<a id="tocsencryptrequest"></a>

```json
{
  "KeyId": {},
  "Plaintext": {},
  "EncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "GrantTokens": {},
  "EncryptionAlgorithm": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|Plaintext|object|true|none|none|
|EncryptionContext|object|false|none|none|
|GrantTokens|object|false|none|none|
|EncryptionAlgorithm|object|false|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_GenerateDataKeyResponse">GenerateDataKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemageneratedatakeyresponse"></a>
<a id="schema_GenerateDataKeyResponse"></a>
<a id="tocSgeneratedatakeyresponse"></a>
<a id="tocsgeneratedatakeyresponse"></a>

```json
{
  "CiphertextBlob": "<binary data>",
  "CiphertextForRecipient": "<binary data>",
  "KeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
  "Plaintext": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CiphertextBlob|object|false|none|none|
|Plaintext|object|false|none|none|
|KeyId|object|false|none|none|
|CiphertextForRecipient|object|false|none|none|

<h2 id="tocS_GenerateDataKeyRequest">GenerateDataKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneratedatakeyrequest"></a>
<a id="schema_GenerateDataKeyRequest"></a>
<a id="tocSgeneratedatakeyrequest"></a>
<a id="tocsgeneratedatakeyrequest"></a>

```json
{
  "KeyId": {},
  "EncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "NumberOfBytes": {},
  "KeySpec": {},
  "GrantTokens": {},
  "Recipient": {
    "KeyEncryptionAlgorithm": {},
    "AttestationDocument": {}
  },
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|EncryptionContext|object|false|none|none|
|NumberOfBytes|object|false|none|none|
|KeySpec|object|false|none|none|
|GrantTokens|object|false|none|none|
|Recipient|object|false|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_GenerateDataKeyPairResponse">GenerateDataKeyPairResponse</h2>
<!-- backwards compatibility -->
<a id="schemageneratedatakeypairresponse"></a>
<a id="schema_GenerateDataKeyPairResponse"></a>
<a id="tocSgeneratedatakeypairresponse"></a>
<a id="tocsgeneratedatakeypairresponse"></a>

```json
{
  "CiphertextForRecipient": "<binary data>",
  "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
  "KeyPairSpec": "RSA_3072",
  "PrivateKeyCiphertextBlob": "<binary data>",
  "PrivateKeyPlaintext": "",
  "PublicKey": "<binary data>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PrivateKeyCiphertextBlob|object|false|none|none|
|PrivateKeyPlaintext|object|false|none|none|
|PublicKey|object|false|none|none|
|KeyId|object|false|none|none|
|KeyPairSpec|object|false|none|none|
|CiphertextForRecipient|object|false|none|none|

<h2 id="tocS_GenerateDataKeyPairRequest">GenerateDataKeyPairRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneratedatakeypairrequest"></a>
<a id="schema_GenerateDataKeyPairRequest"></a>
<a id="tocSgeneratedatakeypairrequest"></a>
<a id="tocsgeneratedatakeypairrequest"></a>

```json
{
  "EncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "KeyId": {},
  "KeyPairSpec": {},
  "GrantTokens": {},
  "Recipient": {
    "KeyEncryptionAlgorithm": {},
    "AttestationDocument": {}
  },
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EncryptionContext|object|false|none|none|
|KeyId|object|true|none|none|
|KeyPairSpec|object|true|none|none|
|GrantTokens|object|false|none|none|
|Recipient|object|false|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_GenerateDataKeyPairWithoutPlaintextResponse">GenerateDataKeyPairWithoutPlaintextResponse</h2>
<!-- backwards compatibility -->
<a id="schemageneratedatakeypairwithoutplaintextresponse"></a>
<a id="schema_GenerateDataKeyPairWithoutPlaintextResponse"></a>
<a id="tocSgeneratedatakeypairwithoutplaintextresponse"></a>
<a id="tocsgeneratedatakeypairwithoutplaintextresponse"></a>

```json
{
  "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
  "KeyPairSpec": "ECC_NIST_P521",
  "PrivateKeyCiphertextBlob": "<binary data>",
  "PublicKey": "<binary data>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PrivateKeyCiphertextBlob|object|false|none|none|
|PublicKey|object|false|none|none|
|KeyId|object|false|none|none|
|KeyPairSpec|object|false|none|none|

<h2 id="tocS_GenerateDataKeyPairWithoutPlaintextRequest">GenerateDataKeyPairWithoutPlaintextRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneratedatakeypairwithoutplaintextrequest"></a>
<a id="schema_GenerateDataKeyPairWithoutPlaintextRequest"></a>
<a id="tocSgeneratedatakeypairwithoutplaintextrequest"></a>
<a id="tocsgeneratedatakeypairwithoutplaintextrequest"></a>

```json
{
  "EncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "KeyId": {},
  "KeyPairSpec": {},
  "GrantTokens": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EncryptionContext|object|false|none|none|
|KeyId|object|true|none|none|
|KeyPairSpec|object|true|none|none|
|GrantTokens|object|false|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_GenerateDataKeyWithoutPlaintextResponse">GenerateDataKeyWithoutPlaintextResponse</h2>
<!-- backwards compatibility -->
<a id="schemageneratedatakeywithoutplaintextresponse"></a>
<a id="schema_GenerateDataKeyWithoutPlaintextResponse"></a>
<a id="tocSgeneratedatakeywithoutplaintextresponse"></a>
<a id="tocsgeneratedatakeywithoutplaintextresponse"></a>

```json
{
  "CiphertextBlob": "<binary data>",
  "KeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CiphertextBlob|object|false|none|none|
|KeyId|object|false|none|none|

<h2 id="tocS_GenerateDataKeyWithoutPlaintextRequest">GenerateDataKeyWithoutPlaintextRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneratedatakeywithoutplaintextrequest"></a>
<a id="schema_GenerateDataKeyWithoutPlaintextRequest"></a>
<a id="tocSgeneratedatakeywithoutplaintextrequest"></a>
<a id="tocsgeneratedatakeywithoutplaintextrequest"></a>

```json
{
  "KeyId": {},
  "EncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "KeySpec": {},
  "NumberOfBytes": {},
  "GrantTokens": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|EncryptionContext|object|false|none|none|
|KeySpec|object|false|none|none|
|NumberOfBytes|object|false|none|none|
|GrantTokens|object|false|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_GenerateMacResponse">GenerateMacResponse</h2>
<!-- backwards compatibility -->
<a id="schemageneratemacresponse"></a>
<a id="schema_GenerateMacResponse"></a>
<a id="tocSgeneratemacresponse"></a>
<a id="tocsgeneratemacresponse"></a>

```json
{
  "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
  "Mac": "<HMAC_TAG>",
  "MacAlgorithm": "HMAC_SHA_384"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mac|object|false|none|none|
|MacAlgorithm|object|false|none|none|
|KeyId|object|false|none|none|

<h2 id="tocS_GenerateMacRequest">GenerateMacRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneratemacrequest"></a>
<a id="schema_GenerateMacRequest"></a>
<a id="tocSgeneratemacrequest"></a>
<a id="tocsgeneratemacrequest"></a>

```json
{
  "Message": {},
  "KeyId": {},
  "MacAlgorithm": {},
  "GrantTokens": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|true|none|none|
|KeyId|object|true|none|none|
|MacAlgorithm|object|true|none|none|
|GrantTokens|object|false|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_GenerateRandomResponse">GenerateRandomResponse</h2>
<!-- backwards compatibility -->
<a id="schemageneraterandomresponse"></a>
<a id="schema_GenerateRandomResponse"></a>
<a id="tocSgeneraterandomresponse"></a>
<a id="tocsgeneraterandomresponse"></a>

```json
{
  "CiphertextForRecipient": "<binary data>",
  "Plaintext": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Plaintext|object|false|none|none|
|CiphertextForRecipient|object|false|none|none|

<h2 id="tocS_GenerateRandomRequest">GenerateRandomRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneraterandomrequest"></a>
<a id="schema_GenerateRandomRequest"></a>
<a id="tocSgeneraterandomrequest"></a>
<a id="tocsgeneraterandomrequest"></a>

```json
{
  "NumberOfBytes": {},
  "CustomKeyStoreId": {},
  "Recipient": {
    "KeyEncryptionAlgorithm": {},
    "AttestationDocument": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NumberOfBytes|object|false|none|none|
|CustomKeyStoreId|object|false|none|none|
|Recipient|object|false|none|none|

<h2 id="tocS_GetKeyPolicyResponse">GetKeyPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetkeypolicyresponse"></a>
<a id="schema_GetKeyPolicyResponse"></a>
<a id="tocSgetkeypolicyresponse"></a>
<a id="tocsgetkeypolicyresponse"></a>

```json
{
  "Policy": "{\n  \"Version\" : \"2012-10-17\",\n  \"Id\" : \"key-default-1\",\n  \"Statement\" : [ {\n    \"Sid\" : \"Enable IAM User Permissions\",\n    \"Effect\" : \"Allow\",\n    \"Principal\" : {\n      \"AWS\" : \"arn:aws:iam::111122223333:root\"\n    },\n    \"Action\" : \"kms:*\",\n    \"Resource\" : \"*\"\n  } ]\n}"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_GetKeyPolicyRequest">GetKeyPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetkeypolicyrequest"></a>
<a id="schema_GetKeyPolicyRequest"></a>
<a id="tocSgetkeypolicyrequest"></a>
<a id="tocsgetkeypolicyrequest"></a>

```json
{
  "KeyId": {},
  "PolicyName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|PolicyName|object|true|none|none|

<h2 id="tocS_GetKeyRotationStatusResponse">GetKeyRotationStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetkeyrotationstatusresponse"></a>
<a id="schema_GetKeyRotationStatusResponse"></a>
<a id="tocSgetkeyrotationstatusresponse"></a>
<a id="tocsgetkeyrotationstatusresponse"></a>

```json
{
  "KeyRotationEnabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyRotationEnabled|object|false|none|none|

<h2 id="tocS_GetKeyRotationStatusRequest">GetKeyRotationStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetkeyrotationstatusrequest"></a>
<a id="schema_GetKeyRotationStatusRequest"></a>
<a id="tocSgetkeyrotationstatusrequest"></a>
<a id="tocsgetkeyrotationstatusrequest"></a>

```json
{
  "KeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|

<h2 id="tocS_GetParametersForImportResponse">GetParametersForImportResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetparametersforimportresponse"></a>
<a id="schema_GetParametersForImportResponse"></a>
<a id="tocSgetparametersforimportresponse"></a>
<a id="tocsgetparametersforimportresponse"></a>

```json
{
  "ImportToken": "<binary data>",
  "KeyId": "arn:aws:kms:us-east-2:111122223333:key/2468abcd-12ab-34cd-56ef-1234567890ab",
  "ParametersValidTo": "2023-04-02T13:02:02-07:00",
  "PublicKey": "<binary data>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|false|none|none|
|ImportToken|object|false|none|none|
|PublicKey|object|false|none|none|
|ParametersValidTo|object|false|none|none|

<h2 id="tocS_GetParametersForImportRequest">GetParametersForImportRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetparametersforimportrequest"></a>
<a id="schema_GetParametersForImportRequest"></a>
<a id="tocSgetparametersforimportrequest"></a>
<a id="tocsgetparametersforimportrequest"></a>

```json
{
  "KeyId": {},
  "WrappingAlgorithm": {},
  "WrappingKeySpec": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|WrappingAlgorithm|object|true|none|none|
|WrappingKeySpec|object|true|none|none|

<h2 id="tocS_GetPublicKeyResponse">GetPublicKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpublickeyresponse"></a>
<a id="schema_GetPublicKeyResponse"></a>
<a id="tocSgetpublickeyresponse"></a>
<a id="tocsgetpublickeyresponse"></a>

```json
{
  "CustomerMasterKeySpec": "RSA_4096",
  "EncryptionAlgorithms": [
    "RSAES_OAEP_SHA_1",
    "RSAES_OAEP_SHA_256"
  ],
  "KeyId": "arn:aws:kms:us-west-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321",
  "KeyUsage": "ENCRYPT_DECRYPT",
  "PublicKey": "<binary data>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|false|none|none|
|PublicKey|object|false|none|none|
|CustomerMasterKeySpec|object|false|none|none|
|KeySpec|object|false|none|none|
|KeyUsage|object|false|none|none|
|EncryptionAlgorithms|object|false|none|none|
|SigningAlgorithms|object|false|none|none|

<h2 id="tocS_GetPublicKeyRequest">GetPublicKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpublickeyrequest"></a>
<a id="schema_GetPublicKeyRequest"></a>
<a id="tocSgetpublickeyrequest"></a>
<a id="tocsgetpublickeyrequest"></a>

```json
{
  "KeyId": {},
  "GrantTokens": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|GrantTokens|object|false|none|none|

<h2 id="tocS_ImportKeyMaterialResponse">ImportKeyMaterialResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportkeymaterialresponse"></a>
<a id="schema_ImportKeyMaterialResponse"></a>
<a id="tocSimportkeymaterialresponse"></a>
<a id="tocsimportkeymaterialresponse"></a>

```json
{}
```

<h2 id="tocS_ImportKeyMaterialRequest">ImportKeyMaterialRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportkeymaterialrequest"></a>
<a id="schema_ImportKeyMaterialRequest"></a>
<a id="tocSimportkeymaterialrequest"></a>
<a id="tocsimportkeymaterialrequest"></a>

```json
{
  "KeyId": {},
  "ImportToken": {},
  "EncryptedKeyMaterial": {},
  "ValidTo": {},
  "ExpirationModel": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|ImportToken|object|true|none|none|
|EncryptedKeyMaterial|object|true|none|none|
|ValidTo|object|false|none|none|
|ExpirationModel|object|false|none|none|

<h2 id="tocS_IncorrectKeyMaterialException">IncorrectKeyMaterialException</h2>
<!-- backwards compatibility -->
<a id="schemaincorrectkeymaterialexception"></a>
<a id="schema_IncorrectKeyMaterialException"></a>
<a id="tocSincorrectkeymaterialexception"></a>
<a id="tocsincorrectkeymaterialexception"></a>

```json
null
```

<h2 id="tocS_ExpiredImportTokenException">ExpiredImportTokenException</h2>
<!-- backwards compatibility -->
<a id="schemaexpiredimporttokenexception"></a>
<a id="schema_ExpiredImportTokenException"></a>
<a id="tocSexpiredimporttokenexception"></a>
<a id="tocsexpiredimporttokenexception"></a>

```json
null
```

<h2 id="tocS_InvalidImportTokenException">InvalidImportTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidimporttokenexception"></a>
<a id="schema_InvalidImportTokenException"></a>
<a id="tocSinvalidimporttokenexception"></a>
<a id="tocsinvalidimporttokenexception"></a>

```json
null
```

<h2 id="tocS_ListAliasesResponse">ListAliasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaliasesresponse"></a>
<a id="schema_ListAliasesResponse"></a>
<a id="tocSlistaliasesresponse"></a>
<a id="tocslistaliasesresponse"></a>

```json
{
  "Aliases": [
    {
      "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/aws/acm",
      "AliasName": "alias/aws/acm",
      "TargetKeyId": "da03f6f7-d279-427a-9cae-de48d07e5b66"
    },
    {
      "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/aws/ebs",
      "AliasName": "alias/aws/ebs",
      "TargetKeyId": "25a217e7-7170-4b8c-8bf6-045ea5f70e5b"
    },
    {
      "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/aws/rds",
      "AliasName": "alias/aws/rds",
      "TargetKeyId": "7ec3104e-c3f2-4b5c-bf42-bfc4772c6685"
    },
    {
      "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/aws/redshift",
      "AliasName": "alias/aws/redshift",
      "TargetKeyId": "08f7a25a-69e2-4fb5-8f10-393db27326fa"
    },
    {
      "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/aws/s3",
      "AliasName": "alias/aws/s3",
      "TargetKeyId": "d2b0f1a3-580d-4f79-b836-bc983be8cfa5"
    },
    {
      "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/example1",
      "AliasName": "alias/example1",
      "TargetKeyId": "4da1e216-62d0-46c5-a7c0-5f3a3d2f8046"
    },
    {
      "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/example2",
      "AliasName": "alias/example2",
      "TargetKeyId": "f32fef59-2cc2-445b-8573-2d73328acbee"
    },
    {
      "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/example3",
      "AliasName": "alias/example3",
      "TargetKeyId": "1374ef38-d34e-4d5f-b2c9-4e0daee38855"
    }
  ],
  "Truncated": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Aliases|object|false|none|none|
|NextMarker|object|false|none|none|
|Truncated|object|false|none|none|

<h2 id="tocS_ListAliasesRequest">ListAliasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaliasesrequest"></a>
<a id="schema_ListAliasesRequest"></a>
<a id="tocSlistaliasesrequest"></a>
<a id="tocslistaliasesrequest"></a>

```json
{
  "KeyId": {},
  "Limit": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|false|none|none|
|Limit|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListGrantsResponse">ListGrantsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgrantsresponse"></a>
<a id="schema_ListGrantsResponse"></a>
<a id="tocSlistgrantsresponse"></a>
<a id="tocslistgrantsresponse"></a>

```json
{
  "Grants": [
    {
      "CreationDate": "2016-12-07T11:09:35-08:00",
      "GrantId": "0c237476b39f8bc44e45212e08498fbe3151305030726c0590dd8d3e9f3d6a60",
      "GranteePrincipal": "arn:aws:iam::111122223333:role/ExampleRole",
      "IssuingAccount": "arn:aws:iam::444455556666:root",
      "KeyId": "arn:aws:kms:us-east-2:444455556666:key/1234abcd-12ab-34cd-56ef-1234567890ab",
      "Operations": [
        "Decrypt",
        "Encrypt"
      ],
      "RetiringPrincipal": "arn:aws:iam::111122223333:role/ExampleRole"
    }
  ],
  "Truncated": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Grants|object|false|none|none|
|NextMarker|object|false|none|none|
|Truncated|object|false|none|none|

<h2 id="tocS_ListGrantsRequest">ListGrantsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgrantsrequest"></a>
<a id="schema_ListGrantsRequest"></a>
<a id="tocSlistgrantsrequest"></a>
<a id="tocslistgrantsrequest"></a>

```json
{
  "Limit": {},
  "Marker": {},
  "KeyId": {},
  "GrantId": {},
  "GranteePrincipal": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Limit|object|false|none|none|
|Marker|object|false|none|none|
|KeyId|object|true|none|none|
|GrantId|object|false|none|none|
|GranteePrincipal|object|false|none|none|

<h2 id="tocS_InvalidGrantIdException">InvalidGrantIdException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidgrantidexception"></a>
<a id="schema_InvalidGrantIdException"></a>
<a id="tocSinvalidgrantidexception"></a>
<a id="tocsinvalidgrantidexception"></a>

```json
null
```

<h2 id="tocS_ListKeyPoliciesResponse">ListKeyPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistkeypoliciesresponse"></a>
<a id="schema_ListKeyPoliciesResponse"></a>
<a id="tocSlistkeypoliciesresponse"></a>
<a id="tocslistkeypoliciesresponse"></a>

```json
{
  "PolicyNames": [
    "default"
  ],
  "Truncated": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyNames|object|false|none|none|
|NextMarker|object|false|none|none|
|Truncated|object|false|none|none|

<h2 id="tocS_ListKeyPoliciesRequest">ListKeyPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistkeypoliciesrequest"></a>
<a id="schema_ListKeyPoliciesRequest"></a>
<a id="tocSlistkeypoliciesrequest"></a>
<a id="tocslistkeypoliciesrequest"></a>

```json
{
  "KeyId": {},
  "Limit": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|Limit|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListKeysResponse">ListKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistkeysresponse"></a>
<a id="schema_ListKeysResponse"></a>
<a id="tocSlistkeysresponse"></a>
<a id="tocslistkeysresponse"></a>

```json
{
  "Keys": [
    {
      "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/0d990263-018e-4e65-a703-eff731de951e",
      "KeyId": "0d990263-018e-4e65-a703-eff731de951e"
    },
    {
      "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/144be297-0ae1-44ac-9c8f-93cd8c82f841",
      "KeyId": "144be297-0ae1-44ac-9c8f-93cd8c82f841"
    },
    {
      "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/21184251-b765-428e-b852-2c7353e72571",
      "KeyId": "21184251-b765-428e-b852-2c7353e72571"
    },
    {
      "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/214fe92f-5b03-4ae1-b350-db2a45dbe10c",
      "KeyId": "214fe92f-5b03-4ae1-b350-db2a45dbe10c"
    },
    {
      "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/339963f2-e523-49d3-af24-a0fe752aa458",
      "KeyId": "339963f2-e523-49d3-af24-a0fe752aa458"
    },
    {
      "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/b776a44b-df37-4438-9be4-a27494e4271a",
      "KeyId": "b776a44b-df37-4438-9be4-a27494e4271a"
    },
    {
      "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/deaf6c9e-cf2c-46a6-bf6d-0b6d487cffbb",
      "KeyId": "deaf6c9e-cf2c-46a6-bf6d-0b6d487cffbb"
    }
  ],
  "Truncated": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Keys|object|false|none|none|
|NextMarker|object|false|none|none|
|Truncated|object|false|none|none|

<h2 id="tocS_ListKeysRequest">ListKeysRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistkeysrequest"></a>
<a id="schema_ListKeysRequest"></a>
<a id="tocSlistkeysrequest"></a>
<a id="tocslistkeysrequest"></a>

```json
{
  "Limit": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Limit|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListResourceTagsResponse">ListResourceTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcetagsresponse"></a>
<a id="schema_ListResourceTagsResponse"></a>
<a id="tocSlistresourcetagsresponse"></a>
<a id="tocslistresourcetagsresponse"></a>

```json
{
  "Tags": [
    {
      "TagKey": "CostCenter",
      "TagValue": "87654"
    },
    {
      "TagKey": "CreatedBy",
      "TagValue": "ExampleUser"
    },
    {
      "TagKey": "Purpose",
      "TagValue": "Test"
    }
  ],
  "Truncated": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|
|NextMarker|object|false|none|none|
|Truncated|object|false|none|none|

<h2 id="tocS_ListResourceTagsRequest">ListResourceTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcetagsrequest"></a>
<a id="schema_ListResourceTagsRequest"></a>
<a id="tocSlistresourcetagsrequest"></a>
<a id="tocslistresourcetagsrequest"></a>

```json
{
  "KeyId": {},
  "Limit": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|Limit|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListRetirableGrantsRequest">ListRetirableGrantsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistretirablegrantsrequest"></a>
<a id="schema_ListRetirableGrantsRequest"></a>
<a id="tocSlistretirablegrantsrequest"></a>
<a id="tocslistretirablegrantsrequest"></a>

```json
{
  "Limit": {},
  "Marker": {},
  "RetiringPrincipal": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Limit|object|false|none|none|
|Marker|object|false|none|none|
|RetiringPrincipal|object|true|none|none|

<h2 id="tocS_PutKeyPolicyRequest">PutKeyPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputkeypolicyrequest"></a>
<a id="schema_PutKeyPolicyRequest"></a>
<a id="tocSputkeypolicyrequest"></a>
<a id="tocsputkeypolicyrequest"></a>

```json
{
  "KeyId": {},
  "PolicyName": {},
  "Policy": {},
  "BypassPolicyLockoutSafetyCheck": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|PolicyName|object|true|none|none|
|Policy|object|true|none|none|
|BypassPolicyLockoutSafetyCheck|object|false|none|none|

<h2 id="tocS_ReEncryptResponse">ReEncryptResponse</h2>
<!-- backwards compatibility -->
<a id="schemareencryptresponse"></a>
<a id="schema_ReEncryptResponse"></a>
<a id="tocSreencryptresponse"></a>
<a id="tocsreencryptresponse"></a>

```json
{
  "CiphertextBlob": "<binary data>",
  "KeyId": "arn:aws:kms:us-east-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321",
  "SourceKeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CiphertextBlob|object|false|none|none|
|SourceKeyId|object|false|none|none|
|KeyId|object|false|none|none|
|SourceEncryptionAlgorithm|object|false|none|none|
|DestinationEncryptionAlgorithm|object|false|none|none|

<h2 id="tocS_ReEncryptRequest">ReEncryptRequest</h2>
<!-- backwards compatibility -->
<a id="schemareencryptrequest"></a>
<a id="schema_ReEncryptRequest"></a>
<a id="tocSreencryptrequest"></a>
<a id="tocsreencryptrequest"></a>

```json
{
  "CiphertextBlob": {},
  "SourceEncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "SourceKeyId": {},
  "DestinationKeyId": {},
  "DestinationEncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "SourceEncryptionAlgorithm": {},
  "DestinationEncryptionAlgorithm": {},
  "GrantTokens": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CiphertextBlob|object|true|none|none|
|SourceEncryptionContext|object|false|none|none|
|SourceKeyId|object|false|none|none|
|DestinationKeyId|object|true|none|none|
|DestinationEncryptionContext|object|false|none|none|
|SourceEncryptionAlgorithm|object|false|none|none|
|DestinationEncryptionAlgorithm|object|false|none|none|
|GrantTokens|object|false|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_ReplicateKeyResponse">ReplicateKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemareplicatekeyresponse"></a>
<a id="schema_ReplicateKeyResponse"></a>
<a id="tocSreplicatekeyresponse"></a>
<a id="tocsreplicatekeyresponse"></a>

```json
{
  "ReplicaKeyMetadata": {
    "AWSAccountId": "111122223333",
    "Arn": "arn:aws:kms:us-west-2:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
    "CreationDate": 1607472987.918,
    "CustomerMasterKeySpec": "SYMMETRIC_DEFAULT",
    "Description": "",
    "Enabled": true,
    "EncryptionAlgorithms": [
      "SYMMETRIC_DEFAULT"
    ],
    "KeyId": "mrk-1234abcd12ab34cd56ef1234567890ab",
    "KeyManager": "CUSTOMER",
    "KeyState": "Enabled",
    "KeyUsage": "ENCRYPT_DECRYPT",
    "MultiRegion": true,
    "MultiRegionConfiguration": {
      "MultiRegionKeyType": "REPLICA",
      "PrimaryKey": {
        "Arn": "arn:aws:kms:us-east-1:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
        "Region": "us-east-1"
      },
      "ReplicaKeys": [
        {
          "Arn": "arn:aws:kms:us-west-2:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
          "Region": "us-west-2"
        }
      ]
    },
    "Origin": "AWS_KMS"
  },
  "ReplicaPolicy": "{\n  \"Version\" : \"2012-10-17\",\n  \"Id\" : \"key-default-1\",...}",
  "ReplicaTags": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicaKeyMetadata|object|false|none|none|
|ReplicaPolicy|object|false|none|none|
|ReplicaTags|object|false|none|none|

<h2 id="tocS_ReplicateKeyRequest">ReplicateKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemareplicatekeyrequest"></a>
<a id="schema_ReplicateKeyRequest"></a>
<a id="tocSreplicatekeyrequest"></a>
<a id="tocsreplicatekeyrequest"></a>

```json
{
  "KeyId": {},
  "ReplicaRegion": {},
  "Policy": {},
  "BypassPolicyLockoutSafetyCheck": {},
  "Description": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|ReplicaRegion|object|true|none|none|
|Policy|object|false|none|none|
|BypassPolicyLockoutSafetyCheck|object|false|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_RetireGrantRequest">RetireGrantRequest</h2>
<!-- backwards compatibility -->
<a id="schemaretiregrantrequest"></a>
<a id="schema_RetireGrantRequest"></a>
<a id="tocSretiregrantrequest"></a>
<a id="tocsretiregrantrequest"></a>

```json
{
  "GrantToken": {},
  "KeyId": {},
  "GrantId": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GrantToken|object|false|none|none|
|KeyId|object|false|none|none|
|GrantId|object|false|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_RevokeGrantRequest">RevokeGrantRequest</h2>
<!-- backwards compatibility -->
<a id="schemarevokegrantrequest"></a>
<a id="schema_RevokeGrantRequest"></a>
<a id="tocSrevokegrantrequest"></a>
<a id="tocsrevokegrantrequest"></a>

```json
{
  "KeyId": {},
  "GrantId": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|GrantId|object|true|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_ScheduleKeyDeletionResponse">ScheduleKeyDeletionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaschedulekeydeletionresponse"></a>
<a id="schema_ScheduleKeyDeletionResponse"></a>
<a id="tocSschedulekeydeletionresponse"></a>
<a id="tocsschedulekeydeletionresponse"></a>

```json
{
  "DeletionDate": "2016-12-17T16:00:00-08:00",
  "KeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|false|none|none|
|DeletionDate|object|false|none|none|
|KeyState|object|false|none|none|
|PendingWindowInDays|object|false|none|none|

<h2 id="tocS_ScheduleKeyDeletionRequest">ScheduleKeyDeletionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaschedulekeydeletionrequest"></a>
<a id="schema_ScheduleKeyDeletionRequest"></a>
<a id="tocSschedulekeydeletionrequest"></a>
<a id="tocsschedulekeydeletionrequest"></a>

```json
{
  "KeyId": {},
  "PendingWindowInDays": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|PendingWindowInDays|object|false|none|none|

<h2 id="tocS_SignResponse">SignResponse</h2>
<!-- backwards compatibility -->
<a id="schemasignresponse"></a>
<a id="schema_SignResponse"></a>
<a id="tocSsignresponse"></a>
<a id="tocssignresponse"></a>

```json
{
  "KeyId": "arn:aws:kms:us-east-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321",
  "Signature": "<binary data>",
  "SigningAlgorithm": "RSASSA_PKCS1_V1_5_SHA_256"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|false|none|none|
|Signature|object|false|none|none|
|SigningAlgorithm|object|false|none|none|

<h2 id="tocS_SignRequest">SignRequest</h2>
<!-- backwards compatibility -->
<a id="schemasignrequest"></a>
<a id="schema_SignRequest"></a>
<a id="tocSsignrequest"></a>
<a id="tocssignrequest"></a>

```json
{
  "KeyId": {},
  "Message": {},
  "MessageType": {},
  "GrantTokens": {},
  "SigningAlgorithm": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|Message|object|true|none|none|
|MessageType|object|false|none|none|
|GrantTokens|object|false|none|none|
|SigningAlgorithm|object|true|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "KeyId": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "KeyId": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateAliasRequest">UpdateAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatealiasrequest"></a>
<a id="schema_UpdateAliasRequest"></a>
<a id="tocSupdatealiasrequest"></a>
<a id="tocsupdatealiasrequest"></a>

```json
{
  "AliasName": {},
  "TargetKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AliasName|object|true|none|none|
|TargetKeyId|object|true|none|none|

<h2 id="tocS_UpdateCustomKeyStoreResponse">UpdateCustomKeyStoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecustomkeystoreresponse"></a>
<a id="schema_UpdateCustomKeyStoreResponse"></a>
<a id="tocSupdatecustomkeystoreresponse"></a>
<a id="tocsupdatecustomkeystoreresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateCustomKeyStoreRequest">UpdateCustomKeyStoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecustomkeystorerequest"></a>
<a id="schema_UpdateCustomKeyStoreRequest"></a>
<a id="tocSupdatecustomkeystorerequest"></a>
<a id="tocsupdatecustomkeystorerequest"></a>

```json
{
  "CustomKeyStoreId": {},
  "NewCustomKeyStoreName": {},
  "KeyStorePassword": {},
  "CloudHsmClusterId": {},
  "XksProxyUriEndpoint": {},
  "XksProxyUriPath": {},
  "XksProxyVpcEndpointServiceName": {},
  "XksProxyAuthenticationCredential": {
    "AccessKeyId": {},
    "RawSecretAccessKey": {}
  },
  "XksProxyConnectivity": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomKeyStoreId|object|true|none|none|
|NewCustomKeyStoreName|object|false|none|none|
|KeyStorePassword|object|false|none|none|
|CloudHsmClusterId|object|false|none|none|
|XksProxyUriEndpoint|object|false|none|none|
|XksProxyUriPath|object|false|none|none|
|XksProxyVpcEndpointServiceName|object|false|none|none|
|XksProxyAuthenticationCredential|object|false|none|none|
|XksProxyConnectivity|object|false|none|none|

<h2 id="tocS_CloudHsmClusterNotRelatedException">CloudHsmClusterNotRelatedException</h2>
<!-- backwards compatibility -->
<a id="schemacloudhsmclusternotrelatedexception"></a>
<a id="schema_CloudHsmClusterNotRelatedException"></a>
<a id="tocScloudhsmclusternotrelatedexception"></a>
<a id="tocscloudhsmclusternotrelatedexception"></a>

```json
null
```

<h2 id="tocS_UpdateKeyDescriptionRequest">UpdateKeyDescriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatekeydescriptionrequest"></a>
<a id="schema_UpdateKeyDescriptionRequest"></a>
<a id="tocSupdatekeydescriptionrequest"></a>
<a id="tocsupdatekeydescriptionrequest"></a>

```json
{
  "KeyId": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|Description|object|true|none|none|

<h2 id="tocS_UpdatePrimaryRegionRequest">UpdatePrimaryRegionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprimaryregionrequest"></a>
<a id="schema_UpdatePrimaryRegionRequest"></a>
<a id="tocSupdateprimaryregionrequest"></a>
<a id="tocsupdateprimaryregionrequest"></a>

```json
{
  "KeyId": {},
  "PrimaryRegion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|PrimaryRegion|object|true|none|none|

<h2 id="tocS_VerifyResponse">VerifyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifyresponse"></a>
<a id="schema_VerifyResponse"></a>
<a id="tocSverifyresponse"></a>
<a id="tocsverifyresponse"></a>

```json
{
  "KeyId": "arn:aws:kms:us-east-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321",
  "SignatureValid": true,
  "SigningAlgorithm": "RSASSA_PSS_SHA_512"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|false|none|none|
|SignatureValid|object|false|none|none|
|SigningAlgorithm|object|false|none|none|

<h2 id="tocS_VerifyRequest">VerifyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifyrequest"></a>
<a id="schema_VerifyRequest"></a>
<a id="tocSverifyrequest"></a>
<a id="tocsverifyrequest"></a>

```json
{
  "KeyId": {},
  "Message": {},
  "MessageType": {},
  "Signature": {},
  "SigningAlgorithm": {},
  "GrantTokens": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|
|Message|object|true|none|none|
|MessageType|object|false|none|none|
|Signature|object|true|none|none|
|SigningAlgorithm|object|true|none|none|
|GrantTokens|object|false|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_KMSInvalidSignatureException">KMSInvalidSignatureException</h2>
<!-- backwards compatibility -->
<a id="schemakmsinvalidsignatureexception"></a>
<a id="schema_KMSInvalidSignatureException"></a>
<a id="tocSkmsinvalidsignatureexception"></a>
<a id="tocskmsinvalidsignatureexception"></a>

```json
null
```

<h2 id="tocS_VerifyMacResponse">VerifyMacResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifymacresponse"></a>
<a id="schema_VerifyMacResponse"></a>
<a id="tocSverifymacresponse"></a>
<a id="tocsverifymacresponse"></a>

```json
{
  "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
  "MacAlgorithm": "HMAC_SHA_384",
  "MacValid": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|false|none|none|
|MacValid|object|false|none|none|
|MacAlgorithm|object|false|none|none|

<h2 id="tocS_VerifyMacRequest">VerifyMacRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifymacrequest"></a>
<a id="schema_VerifyMacRequest"></a>
<a id="tocSverifymacrequest"></a>
<a id="tocsverifymacrequest"></a>

```json
{
  "Message": {},
  "KeyId": {},
  "MacAlgorithm": {},
  "Mac": {},
  "GrantTokens": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|true|none|none|
|KeyId|object|true|none|none|
|MacAlgorithm|object|true|none|none|
|Mac|object|true|none|none|
|GrantTokens|object|false|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_KMSInvalidMacException">KMSInvalidMacException</h2>
<!-- backwards compatibility -->
<a id="schemakmsinvalidmacexception"></a>
<a id="schema_KMSInvalidMacException"></a>
<a id="tocSkmsinvalidmacexception"></a>
<a id="tocskmsinvalidmacexception"></a>

```json
null
```

<h2 id="tocS_AWSAccountIdType">AWSAccountIdType</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountidtype"></a>
<a id="schema_AWSAccountIdType"></a>
<a id="tocSawsaccountidtype"></a>
<a id="tocsawsaccountidtype"></a>

```json
"string"
```

<h2 id="tocS_AlgorithmSpec">AlgorithmSpec</h2>
<!-- backwards compatibility -->
<a id="schemaalgorithmspec"></a>
<a id="schema_AlgorithmSpec"></a>
<a id="tocSalgorithmspec"></a>
<a id="tocsalgorithmspec"></a>

```json
"RSAES_PKCS1_V1_5"
```

<h2 id="tocS_AliasListEntry">AliasListEntry</h2>
<!-- backwards compatibility -->
<a id="schemaaliaslistentry"></a>
<a id="schema_AliasListEntry"></a>
<a id="tocSaliaslistentry"></a>
<a id="tocsaliaslistentry"></a>

```json
{
  "AliasName": {},
  "AliasArn": {},
  "TargetKeyId": {},
  "CreationDate": {},
  "LastUpdatedDate": {}
}
```

Contains information about an alias.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AliasName|object|false|none|none|
|AliasArn|object|false|none|none|
|TargetKeyId|object|false|none|none|
|CreationDate|object|false|none|none|
|LastUpdatedDate|object|false|none|none|

<h2 id="tocS_AliasList">AliasList</h2>
<!-- backwards compatibility -->
<a id="schemaaliaslist"></a>
<a id="schema_AliasList"></a>
<a id="tocSaliaslist"></a>
<a id="tocsaliaslist"></a>

```json
[
  {
    "AliasName": {},
    "AliasArn": {},
    "TargetKeyId": {},
    "CreationDate": {},
    "LastUpdatedDate": {}
  }
]
```

<h2 id="tocS_AliasNameType">AliasNameType</h2>
<!-- backwards compatibility -->
<a id="schemaaliasnametype"></a>
<a id="schema_AliasNameType"></a>
<a id="tocSaliasnametype"></a>
<a id="tocsaliasnametype"></a>

```json
"string"
```

<h2 id="tocS_ArnType">ArnType</h2>
<!-- backwards compatibility -->
<a id="schemaarntype"></a>
<a id="schema_ArnType"></a>
<a id="tocSarntype"></a>
<a id="tocsarntype"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_KeyIdType">KeyIdType</h2>
<!-- backwards compatibility -->
<a id="schemakeyidtype"></a>
<a id="schema_KeyIdType"></a>
<a id="tocSkeyidtype"></a>
<a id="tocskeyidtype"></a>

```json
"string"
```

<h2 id="tocS_DateType">DateType</h2>
<!-- backwards compatibility -->
<a id="schemadatetype"></a>
<a id="schema_DateType"></a>
<a id="tocSdatetype"></a>
<a id="tocsdatetype"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_AttestationDocumentType">AttestationDocumentType</h2>
<!-- backwards compatibility -->
<a id="schemaattestationdocumenttype"></a>
<a id="schema_AttestationDocumentType"></a>
<a id="tocSattestationdocumenttype"></a>
<a id="tocsattestationdocumenttype"></a>

```json
"string"
```

<h2 id="tocS_BooleanType">BooleanType</h2>
<!-- backwards compatibility -->
<a id="schemabooleantype"></a>
<a id="schema_BooleanType"></a>
<a id="tocSbooleantype"></a>
<a id="tocsbooleantype"></a>

```json
true
```

<h2 id="tocS_CiphertextType">CiphertextType</h2>
<!-- backwards compatibility -->
<a id="schemaciphertexttype"></a>
<a id="schema_CiphertextType"></a>
<a id="tocSciphertexttype"></a>
<a id="tocsciphertexttype"></a>

```json
"string"
```

<h2 id="tocS_CloudHsmClusterIdType">CloudHsmClusterIdType</h2>
<!-- backwards compatibility -->
<a id="schemacloudhsmclusteridtype"></a>
<a id="schema_CloudHsmClusterIdType"></a>
<a id="tocScloudhsmclusteridtype"></a>
<a id="tocscloudhsmclusteridtype"></a>

```json
"stringstringstrings"
```

<h2 id="tocS_CustomKeyStoreIdType">CustomKeyStoreIdType</h2>
<!-- backwards compatibility -->
<a id="schemacustomkeystoreidtype"></a>
<a id="schema_CustomKeyStoreIdType"></a>
<a id="tocScustomkeystoreidtype"></a>
<a id="tocscustomkeystoreidtype"></a>

```json
"string"
```

<h2 id="tocS_ConnectionErrorCodeType">ConnectionErrorCodeType</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionerrorcodetype"></a>
<a id="schema_ConnectionErrorCodeType"></a>
<a id="tocSconnectionerrorcodetype"></a>
<a id="tocsconnectionerrorcodetype"></a>

```json
"INVALID_CREDENTIALS"
```

<h2 id="tocS_ConnectionStateType">ConnectionStateType</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstatetype"></a>
<a id="schema_ConnectionStateType"></a>
<a id="tocSconnectionstatetype"></a>
<a id="tocsconnectionstatetype"></a>

```json
"CONNECTED"
```

<h2 id="tocS_CustomKeyStoreNameType">CustomKeyStoreNameType</h2>
<!-- backwards compatibility -->
<a id="schemacustomkeystorenametype"></a>
<a id="schema_CustomKeyStoreNameType"></a>
<a id="tocScustomkeystorenametype"></a>
<a id="tocscustomkeystorenametype"></a>

```json
"string"
```

<h2 id="tocS_TrustAnchorCertificateType">TrustAnchorCertificateType</h2>
<!-- backwards compatibility -->
<a id="schematrustanchorcertificatetype"></a>
<a id="schema_TrustAnchorCertificateType"></a>
<a id="tocStrustanchorcertificatetype"></a>
<a id="tocstrustanchorcertificatetype"></a>

```json
"string"
```

<h2 id="tocS_KeyStorePasswordType">KeyStorePasswordType</h2>
<!-- backwards compatibility -->
<a id="schemakeystorepasswordtype"></a>
<a id="schema_KeyStorePasswordType"></a>
<a id="tocSkeystorepasswordtype"></a>
<a id="tocskeystorepasswordtype"></a>

```json
"password"
```

<h2 id="tocS_CustomKeyStoreType">CustomKeyStoreType</h2>
<!-- backwards compatibility -->
<a id="schemacustomkeystoretype"></a>
<a id="schema_CustomKeyStoreType"></a>
<a id="tocScustomkeystoretype"></a>
<a id="tocscustomkeystoretype"></a>

```json
"AWS_CLOUDHSM"
```

<h2 id="tocS_XksProxyUriEndpointType">XksProxyUriEndpointType</h2>
<!-- backwards compatibility -->
<a id="schemaxksproxyuriendpointtype"></a>
<a id="schema_XksProxyUriEndpointType"></a>
<a id="tocSxksproxyuriendpointtype"></a>
<a id="tocsxksproxyuriendpointtype"></a>

```json
"stringstri"
```

<h2 id="tocS_XksProxyUriPathType">XksProxyUriPathType</h2>
<!-- backwards compatibility -->
<a id="schemaxksproxyuripathtype"></a>
<a id="schema_XksProxyUriPathType"></a>
<a id="tocSxksproxyuripathtype"></a>
<a id="tocsxksproxyuripathtype"></a>

```json
"stringstri"
```

<h2 id="tocS_XksProxyVpcEndpointServiceNameType">XksProxyVpcEndpointServiceNameType</h2>
<!-- backwards compatibility -->
<a id="schemaxksproxyvpcendpointservicenametype"></a>
<a id="schema_XksProxyVpcEndpointServiceNameType"></a>
<a id="tocSxksproxyvpcendpointservicenametype"></a>
<a id="tocsxksproxyvpcendpointservicenametype"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_XksProxyAuthenticationCredentialType">XksProxyAuthenticationCredentialType</h2>
<!-- backwards compatibility -->
<a id="schemaxksproxyauthenticationcredentialtype"></a>
<a id="schema_XksProxyAuthenticationCredentialType"></a>
<a id="tocSxksproxyauthenticationcredentialtype"></a>
<a id="tocsxksproxyauthenticationcredentialtype"></a>

```json
{
  "AccessKeyId": {},
  "RawSecretAccessKey": {}
}
```

<p>KMS uses the authentication credential to sign requests that it sends to the external key store proxy (XKS proxy) on your behalf. You establish these credentials on your external key store proxy and report them to KMS.</p> <p>The <code>XksProxyAuthenticationCredential</code> includes two required elements.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessKeyId|object|true|none|none|
|RawSecretAccessKey|object|true|none|none|

<h2 id="tocS_XksProxyConnectivityType">XksProxyConnectivityType</h2>
<!-- backwards compatibility -->
<a id="schemaxksproxyconnectivitytype"></a>
<a id="schema_XksProxyConnectivityType"></a>
<a id="tocSxksproxyconnectivitytype"></a>
<a id="tocsxksproxyconnectivitytype"></a>

```json
"PUBLIC_ENDPOINT"
```

<h2 id="tocS_PrincipalIdType">PrincipalIdType</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalidtype"></a>
<a id="schema_PrincipalIdType"></a>
<a id="tocSprincipalidtype"></a>
<a id="tocsprincipalidtype"></a>

```json
"string"
```

<h2 id="tocS_GrantOperationList">GrantOperationList</h2>
<!-- backwards compatibility -->
<a id="schemagrantoperationlist"></a>
<a id="schema_GrantOperationList"></a>
<a id="tocSgrantoperationlist"></a>
<a id="tocsgrantoperationlist"></a>

```json
[
  "Decrypt"
]
```

<h2 id="tocS_GrantConstraints">GrantConstraints</h2>
<!-- backwards compatibility -->
<a id="schemagrantconstraints"></a>
<a id="schema_GrantConstraints"></a>
<a id="tocSgrantconstraints"></a>
<a id="tocsgrantconstraints"></a>

```json
{
  "EncryptionContextSubset": {
    "property1": "string",
    "property2": "string"
  },
  "EncryptionContextEquals": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p>Use this structure to allow <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> in the grant only when the operation request includes the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>. </p> <p>KMS applies the grant constraints only to cryptographic operations that support an encryption context, that is, all cryptographic operations with a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#symmetric-cmks">symmetric KMS key</a>. Grant constraints are not applied to operations that do not support an encryption context, such as cryptographic operations with asymmetric KMS keys and management operations, such as <a>DescribeKey</a> or <a>RetireGrant</a>.</p> <important> <p>In a cryptographic operation, the encryption context in the decryption operation must be an exact, case-sensitive match for the keys and values in the encryption context of the encryption operation. Only the order of the pairs can vary.</p> <p>However, in a grant constraint, the key in each key-value pair is not case sensitive, but the value is case sensitive.</p> <p>To avoid confusion, do not use multiple encryption context pairs that differ only by case. To require a fully case-sensitive encryption context, use the <code>kms:EncryptionContext:</code> and <code>kms:EncryptionContextKeys</code> conditions in an IAM or key policy. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context">kms:EncryptionContext:</a> in the <i> <i>Key Management Service Developer Guide</i> </i>.</p> </important>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EncryptionContextSubset|object|false|none|none|
|EncryptionContextEquals|object|false|none|none|

<h2 id="tocS_GrantTokenList">GrantTokenList</h2>
<!-- backwards compatibility -->
<a id="schemagranttokenlist"></a>
<a id="schema_GrantTokenList"></a>
<a id="tocSgranttokenlist"></a>
<a id="tocsgranttokenlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GrantNameType">GrantNameType</h2>
<!-- backwards compatibility -->
<a id="schemagrantnametype"></a>
<a id="schema_GrantNameType"></a>
<a id="tocSgrantnametype"></a>
<a id="tocsgrantnametype"></a>

```json
"string"
```

<h2 id="tocS_NullableBooleanType">NullableBooleanType</h2>
<!-- backwards compatibility -->
<a id="schemanullablebooleantype"></a>
<a id="schema_NullableBooleanType"></a>
<a id="tocSnullablebooleantype"></a>
<a id="tocsnullablebooleantype"></a>

```json
true
```

<h2 id="tocS_GrantTokenType">GrantTokenType</h2>
<!-- backwards compatibility -->
<a id="schemagranttokentype"></a>
<a id="schema_GrantTokenType"></a>
<a id="tocSgranttokentype"></a>
<a id="tocsgranttokentype"></a>

```json
"string"
```

<h2 id="tocS_GrantIdType">GrantIdType</h2>
<!-- backwards compatibility -->
<a id="schemagrantidtype"></a>
<a id="schema_GrantIdType"></a>
<a id="tocSgrantidtype"></a>
<a id="tocsgrantidtype"></a>

```json
"string"
```

<h2 id="tocS_PolicyType">PolicyType</h2>
<!-- backwards compatibility -->
<a id="schemapolicytype"></a>
<a id="schema_PolicyType"></a>
<a id="tocSpolicytype"></a>
<a id="tocspolicytype"></a>

```json
"string"
```

<h2 id="tocS_DescriptionType">DescriptionType</h2>
<!-- backwards compatibility -->
<a id="schemadescriptiontype"></a>
<a id="schema_DescriptionType"></a>
<a id="tocSdescriptiontype"></a>
<a id="tocsdescriptiontype"></a>

```json
"string"
```

<h2 id="tocS_KeyUsageType">KeyUsageType</h2>
<!-- backwards compatibility -->
<a id="schemakeyusagetype"></a>
<a id="schema_KeyUsageType"></a>
<a id="tocSkeyusagetype"></a>
<a id="tocskeyusagetype"></a>

```json
"SIGN_VERIFY"
```

<h2 id="tocS_CustomerMasterKeySpec">CustomerMasterKeySpec</h2>
<!-- backwards compatibility -->
<a id="schemacustomermasterkeyspec"></a>
<a id="schema_CustomerMasterKeySpec"></a>
<a id="tocScustomermasterkeyspec"></a>
<a id="tocscustomermasterkeyspec"></a>

```json
"RSA_2048"
```

This enum has been deprecated. Instead, use the KeySpec enum.

<h2 id="tocS_KeySpec">KeySpec</h2>
<!-- backwards compatibility -->
<a id="schemakeyspec"></a>
<a id="schema_KeySpec"></a>
<a id="tocSkeyspec"></a>
<a id="tocskeyspec"></a>

```json
"RSA_2048"
```

<h2 id="tocS_OriginType">OriginType</h2>
<!-- backwards compatibility -->
<a id="schemaorigintype"></a>
<a id="schema_OriginType"></a>
<a id="tocSorigintype"></a>
<a id="tocsorigintype"></a>

```json
"AWS_KMS"
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
    "TagKey": {},
    "TagValue": {}
  }
]
```

<h2 id="tocS_XksKeyIdType">XksKeyIdType</h2>
<!-- backwards compatibility -->
<a id="schemaxkskeyidtype"></a>
<a id="schema_XksKeyIdType"></a>
<a id="tocSxkskeyidtype"></a>
<a id="tocsxkskeyidtype"></a>

```json
"string"
```

<h2 id="tocS_KeyMetadata">KeyMetadata</h2>
<!-- backwards compatibility -->
<a id="schemakeymetadata"></a>
<a id="schema_KeyMetadata"></a>
<a id="tocSkeymetadata"></a>
<a id="tocskeymetadata"></a>

```json
{
  "AWSAccountId": {},
  "KeyId": {},
  "Arn": {},
  "CreationDate": {},
  "Enabled": {},
  "Description": {},
  "KeyUsage": {},
  "KeyState": {},
  "DeletionDate": {},
  "ValidTo": {},
  "Origin": {},
  "CustomKeyStoreId": {},
  "CloudHsmClusterId": {},
  "ExpirationModel": {},
  "KeyManager": {},
  "CustomerMasterKeySpec": {},
  "KeySpec": {},
  "EncryptionAlgorithms": {},
  "SigningAlgorithms": {},
  "MultiRegion": {},
  "MultiRegionConfiguration": {
    "MultiRegionKeyType": {},
    "PrimaryKey": {
      "Arn": {},
      "Region": {}
    },
    "ReplicaKeys": {}
  },
  "PendingDeletionWindowInDays": {},
  "MacAlgorithms": {},
  "XksKeyConfiguration": {
    "Id": {}
  }
}
```

<p>Contains metadata about a KMS key.</p> <p>This data type is used as a response element for the <a>CreateKey</a>, <a>DescribeKey</a>, and <a>ReplicateKey</a> operations.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AWSAccountId|object|false|none|none|
|KeyId|object|true|none|none|
|Arn|object|false|none|none|
|CreationDate|object|false|none|none|
|Enabled|object|false|none|none|
|Description|object|false|none|none|
|KeyUsage|object|false|none|none|
|KeyState|object|false|none|none|
|DeletionDate|object|false|none|none|
|ValidTo|object|false|none|none|
|Origin|object|false|none|none|
|CustomKeyStoreId|object|false|none|none|
|CloudHsmClusterId|object|false|none|none|
|ExpirationModel|object|false|none|none|
|KeyManager|object|false|none|none|
|CustomerMasterKeySpec|object|false|none|none|
|KeySpec|object|false|none|none|
|EncryptionAlgorithms|object|false|none|none|
|SigningAlgorithms|object|false|none|none|
|MultiRegion|object|false|none|none|
|MultiRegionConfiguration|object|false|none|none|
|PendingDeletionWindowInDays|object|false|none|none|
|MacAlgorithms|object|false|none|none|
|XksKeyConfiguration|object|false|none|none|

<h2 id="tocS_CustomKeyStoresListEntry">CustomKeyStoresListEntry</h2>
<!-- backwards compatibility -->
<a id="schemacustomkeystoreslistentry"></a>
<a id="schema_CustomKeyStoresListEntry"></a>
<a id="tocScustomkeystoreslistentry"></a>
<a id="tocscustomkeystoreslistentry"></a>

```json
{
  "CustomKeyStoreId": {},
  "CustomKeyStoreName": {},
  "CloudHsmClusterId": {},
  "TrustAnchorCertificate": {},
  "ConnectionState": {},
  "ConnectionErrorCode": {},
  "CreationDate": {},
  "CustomKeyStoreType": {},
  "XksProxyConfiguration": {
    "Connectivity": {},
    "AccessKeyId": {},
    "UriEndpoint": {},
    "UriPath": {},
    "VpcEndpointServiceName": {}
  }
}
```

Contains information about each custom key store in the custom key store list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomKeyStoreId|object|false|none|none|
|CustomKeyStoreName|object|false|none|none|
|CloudHsmClusterId|object|false|none|none|
|TrustAnchorCertificate|object|false|none|none|
|ConnectionState|object|false|none|none|
|ConnectionErrorCode|object|false|none|none|
|CreationDate|object|false|none|none|
|CustomKeyStoreType|object|false|none|none|
|XksProxyConfiguration|object|false|none|none|

<h2 id="tocS_CustomKeyStoresList">CustomKeyStoresList</h2>
<!-- backwards compatibility -->
<a id="schemacustomkeystoreslist"></a>
<a id="schema_CustomKeyStoresList"></a>
<a id="tocScustomkeystoreslist"></a>
<a id="tocscustomkeystoreslist"></a>

```json
[
  {
    "CustomKeyStoreId": {},
    "CustomKeyStoreName": {},
    "CloudHsmClusterId": {},
    "TrustAnchorCertificate": {},
    "ConnectionState": {},
    "ConnectionErrorCode": {},
    "CreationDate": {},
    "CustomKeyStoreType": {},
    "XksProxyConfiguration": {
      "Connectivity": {},
      "AccessKeyId": {},
      "UriEndpoint": {},
      "UriPath": {},
      "VpcEndpointServiceName": {}
    }
  }
]
```

<h2 id="tocS_XksProxyConfigurationType">XksProxyConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemaxksproxyconfigurationtype"></a>
<a id="schema_XksProxyConfigurationType"></a>
<a id="tocSxksproxyconfigurationtype"></a>
<a id="tocsxksproxyconfigurationtype"></a>

```json
{
  "Connectivity": {},
  "AccessKeyId": {},
  "UriEndpoint": {},
  "UriPath": {},
  "VpcEndpointServiceName": {}
}
```

Detailed information about the external key store proxy (XKS proxy). Your external key store proxy translates KMS requests into a format that your external key manager can understand. These fields appear in a <a>DescribeCustomKeyStores</a> response only when the <code>CustomKeyStoreType</code> is <code>EXTERNAL_KEY_STORE</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Connectivity|object|false|none|none|
|AccessKeyId|object|false|none|none|
|UriEndpoint|object|false|none|none|
|UriPath|object|false|none|none|
|VpcEndpointServiceName|object|false|none|none|

<h2 id="tocS_DataKeyPairSpec">DataKeyPairSpec</h2>
<!-- backwards compatibility -->
<a id="schemadatakeypairspec"></a>
<a id="schema_DataKeyPairSpec"></a>
<a id="tocSdatakeypairspec"></a>
<a id="tocsdatakeypairspec"></a>

```json
"RSA_2048"
```

<h2 id="tocS_DataKeySpec">DataKeySpec</h2>
<!-- backwards compatibility -->
<a id="schemadatakeyspec"></a>
<a id="schema_DataKeySpec"></a>
<a id="tocSdatakeyspec"></a>
<a id="tocsdatakeyspec"></a>

```json
"AES_256"
```

<h2 id="tocS_EncryptionContextType">EncryptionContextType</h2>
<!-- backwards compatibility -->
<a id="schemaencryptioncontexttype"></a>
<a id="schema_EncryptionContextType"></a>
<a id="tocSencryptioncontexttype"></a>
<a id="tocsencryptioncontexttype"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[EncryptionContextValue](#schemaencryptioncontextvalue)|false|none|none|

<h2 id="tocS_EncryptionAlgorithmSpec">EncryptionAlgorithmSpec</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionalgorithmspec"></a>
<a id="schema_EncryptionAlgorithmSpec"></a>
<a id="tocSencryptionalgorithmspec"></a>
<a id="tocsencryptionalgorithmspec"></a>

```json
"SYMMETRIC_DEFAULT"
```

<h2 id="tocS_RecipientInfo">RecipientInfo</h2>
<!-- backwards compatibility -->
<a id="schemarecipientinfo"></a>
<a id="schema_RecipientInfo"></a>
<a id="tocSrecipientinfo"></a>
<a id="tocsrecipientinfo"></a>

```json
{
  "KeyEncryptionAlgorithm": {},
  "AttestationDocument": {}
}
```

<p>Contains information about the party that receives the response from the API operation.</p> <p>This data type is designed to support Amazon Web Services Nitro Enclaves, which lets you create an isolated compute environment in Amazon EC2. For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves uses KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyEncryptionAlgorithm|object|false|none|none|
|AttestationDocument|object|false|none|none|

<h2 id="tocS_PlaintextType">PlaintextType</h2>
<!-- backwards compatibility -->
<a id="schemaplaintexttype"></a>
<a id="schema_PlaintextType"></a>
<a id="tocSplaintexttype"></a>
<a id="tocsplaintexttype"></a>

```json
"password"
```

<h2 id="tocS_LimitType">LimitType</h2>
<!-- backwards compatibility -->
<a id="schemalimittype"></a>
<a id="schema_LimitType"></a>
<a id="tocSlimittype"></a>
<a id="tocslimittype"></a>

```json
1
```

<h2 id="tocS_MarkerType">MarkerType</h2>
<!-- backwards compatibility -->
<a id="schemamarkertype"></a>
<a id="schema_MarkerType"></a>
<a id="tocSmarkertype"></a>
<a id="tocsmarkertype"></a>

```json
"string"
```

<h2 id="tocS_EncryptionAlgorithmSpecList">EncryptionAlgorithmSpecList</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionalgorithmspeclist"></a>
<a id="schema_EncryptionAlgorithmSpecList"></a>
<a id="tocSencryptionalgorithmspeclist"></a>
<a id="tocsencryptionalgorithmspeclist"></a>

```json
[
  "SYMMETRIC_DEFAULT"
]
```

<h2 id="tocS_EncryptionContextKey">EncryptionContextKey</h2>
<!-- backwards compatibility -->
<a id="schemaencryptioncontextkey"></a>
<a id="schema_EncryptionContextKey"></a>
<a id="tocSencryptioncontextkey"></a>
<a id="tocsencryptioncontextkey"></a>

```json
"string"
```

<h2 id="tocS_EncryptionContextValue">EncryptionContextValue</h2>
<!-- backwards compatibility -->
<a id="schemaencryptioncontextvalue"></a>
<a id="schema_EncryptionContextValue"></a>
<a id="tocSencryptioncontextvalue"></a>
<a id="tocsencryptioncontextvalue"></a>

```json
"string"
```

<h2 id="tocS_ExpirationModelType">ExpirationModelType</h2>
<!-- backwards compatibility -->
<a id="schemaexpirationmodeltype"></a>
<a id="schema_ExpirationModelType"></a>
<a id="tocSexpirationmodeltype"></a>
<a id="tocsexpirationmodeltype"></a>

```json
"KEY_MATERIAL_EXPIRES"
```

<h2 id="tocS_PublicKeyType">PublicKeyType</h2>
<!-- backwards compatibility -->
<a id="schemapublickeytype"></a>
<a id="schema_PublicKeyType"></a>
<a id="tocSpublickeytype"></a>
<a id="tocspublickeytype"></a>

```json
"string"
```

<h2 id="tocS_NumberOfBytesType">NumberOfBytesType</h2>
<!-- backwards compatibility -->
<a id="schemanumberofbytestype"></a>
<a id="schema_NumberOfBytesType"></a>
<a id="tocSnumberofbytestype"></a>
<a id="tocsnumberofbytestype"></a>

```json
1
```

<h2 id="tocS_MacAlgorithmSpec">MacAlgorithmSpec</h2>
<!-- backwards compatibility -->
<a id="schemamacalgorithmspec"></a>
<a id="schema_MacAlgorithmSpec"></a>
<a id="tocSmacalgorithmspec"></a>
<a id="tocsmacalgorithmspec"></a>

```json
"HMAC_SHA_224"
```

<h2 id="tocS_PolicyNameType">PolicyNameType</h2>
<!-- backwards compatibility -->
<a id="schemapolicynametype"></a>
<a id="schema_PolicyNameType"></a>
<a id="tocSpolicynametype"></a>
<a id="tocspolicynametype"></a>

```json
"string"
```

<h2 id="tocS_WrappingKeySpec">WrappingKeySpec</h2>
<!-- backwards compatibility -->
<a id="schemawrappingkeyspec"></a>
<a id="schema_WrappingKeySpec"></a>
<a id="tocSwrappingkeyspec"></a>
<a id="tocswrappingkeyspec"></a>

```json
"RSA_2048"
```

<h2 id="tocS_SigningAlgorithmSpecList">SigningAlgorithmSpecList</h2>
<!-- backwards compatibility -->
<a id="schemasigningalgorithmspeclist"></a>
<a id="schema_SigningAlgorithmSpecList"></a>
<a id="tocSsigningalgorithmspeclist"></a>
<a id="tocssigningalgorithmspeclist"></a>

```json
[
  "RSASSA_PSS_SHA_256"
]
```

<h2 id="tocS_GrantListEntry">GrantListEntry</h2>
<!-- backwards compatibility -->
<a id="schemagrantlistentry"></a>
<a id="schema_GrantListEntry"></a>
<a id="tocSgrantlistentry"></a>
<a id="tocsgrantlistentry"></a>

```json
{
  "KeyId": {},
  "GrantId": {},
  "Name": {},
  "CreationDate": {},
  "GranteePrincipal": {},
  "RetiringPrincipal": {},
  "IssuingAccount": {},
  "Operations": {},
  "Constraints": {
    "EncryptionContextSubset": {
      "property1": "string",
      "property2": "string"
    },
    "EncryptionContextEquals": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Contains information about a grant.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|false|none|none|
|GrantId|object|false|none|none|
|Name|object|false|none|none|
|CreationDate|object|false|none|none|
|GranteePrincipal|object|false|none|none|
|RetiringPrincipal|object|false|none|none|
|IssuingAccount|object|false|none|none|
|Operations|object|false|none|none|
|Constraints|object|false|none|none|

<h2 id="tocS_GrantList">GrantList</h2>
<!-- backwards compatibility -->
<a id="schemagrantlist"></a>
<a id="schema_GrantList"></a>
<a id="tocSgrantlist"></a>
<a id="tocsgrantlist"></a>

```json
[
  {
    "KeyId": {},
    "GrantId": {},
    "Name": {},
    "CreationDate": {},
    "GranteePrincipal": {},
    "RetiringPrincipal": {},
    "IssuingAccount": {},
    "Operations": {},
    "Constraints": {
      "EncryptionContextSubset": {
        "property1": "string",
        "property2": "string"
      },
      "EncryptionContextEquals": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
]
```

<h2 id="tocS_GrantOperation">GrantOperation</h2>
<!-- backwards compatibility -->
<a id="schemagrantoperation"></a>
<a id="schema_GrantOperation"></a>
<a id="tocSgrantoperation"></a>
<a id="tocsgrantoperation"></a>

```json
"Decrypt"
```

<h2 id="tocS_KeyEncryptionMechanism">KeyEncryptionMechanism</h2>
<!-- backwards compatibility -->
<a id="schemakeyencryptionmechanism"></a>
<a id="schema_KeyEncryptionMechanism"></a>
<a id="tocSkeyencryptionmechanism"></a>
<a id="tocskeyencryptionmechanism"></a>

```json
"RSAES_OAEP_SHA_256"
```

<h2 id="tocS_KeyListEntry">KeyListEntry</h2>
<!-- backwards compatibility -->
<a id="schemakeylistentry"></a>
<a id="schema_KeyListEntry"></a>
<a id="tocSkeylistentry"></a>
<a id="tocskeylistentry"></a>

```json
{
  "KeyId": {},
  "KeyArn": {}
}
```

Contains information about each entry in the key list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|false|none|none|
|KeyArn|object|false|none|none|

<h2 id="tocS_KeyList">KeyList</h2>
<!-- backwards compatibility -->
<a id="schemakeylist"></a>
<a id="schema_KeyList"></a>
<a id="tocSkeylist"></a>
<a id="tocskeylist"></a>

```json
[
  {
    "KeyId": {},
    "KeyArn": {}
  }
]
```

<h2 id="tocS_KeyManagerType">KeyManagerType</h2>
<!-- backwards compatibility -->
<a id="schemakeymanagertype"></a>
<a id="schema_KeyManagerType"></a>
<a id="tocSkeymanagertype"></a>
<a id="tocskeymanagertype"></a>

```json
"AWS"
```

<h2 id="tocS_KeyState">KeyState</h2>
<!-- backwards compatibility -->
<a id="schemakeystate"></a>
<a id="schema_KeyState"></a>
<a id="tocSkeystate"></a>
<a id="tocskeystate"></a>

```json
"Creating"
```

<h2 id="tocS_MultiRegionConfiguration">MultiRegionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamultiregionconfiguration"></a>
<a id="schema_MultiRegionConfiguration"></a>
<a id="tocSmultiregionconfiguration"></a>
<a id="tocsmultiregionconfiguration"></a>

```json
{
  "MultiRegionKeyType": {},
  "PrimaryKey": {
    "Arn": {},
    "Region": {}
  },
  "ReplicaKeys": {}
}
```

<p>Describes the configuration of this multi-Region key. This field appears only when the KMS key is a primary or replica of a multi-Region key.</p> <p>For more information about any listed KMS key, use the <a>DescribeKey</a> operation.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MultiRegionKeyType|object|false|none|none|
|PrimaryKey|object|false|none|none|
|ReplicaKeys|object|false|none|none|

<h2 id="tocS_PendingWindowInDaysType">PendingWindowInDaysType</h2>
<!-- backwards compatibility -->
<a id="schemapendingwindowindaystype"></a>
<a id="schema_PendingWindowInDaysType"></a>
<a id="tocSpendingwindowindaystype"></a>
<a id="tocspendingwindowindaystype"></a>

```json
1
```

<h2 id="tocS_MacAlgorithmSpecList">MacAlgorithmSpecList</h2>
<!-- backwards compatibility -->
<a id="schemamacalgorithmspeclist"></a>
<a id="schema_MacAlgorithmSpecList"></a>
<a id="tocSmacalgorithmspeclist"></a>
<a id="tocsmacalgorithmspeclist"></a>

```json
[
  "HMAC_SHA_224"
]
```

<h2 id="tocS_XksKeyConfigurationType">XksKeyConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemaxkskeyconfigurationtype"></a>
<a id="schema_XksKeyConfigurationType"></a>
<a id="tocSxkskeyconfigurationtype"></a>
<a id="tocsxkskeyconfigurationtype"></a>

```json
{
  "Id": {}
}
```

<p>Information about the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-external-key">external key </a>that is associated with a KMS key in an external key store. </p> <p>This element appears in a <a>CreateKey</a> or <a>DescribeKey</a> response only for a KMS key in an external key store.</p> <p>The <i>external key</i> is a symmetric encryption key that is hosted by an external key manager outside of Amazon Web Services. When you use the KMS key in an external key store in a cryptographic operation, the cryptographic operation is performed in the external key manager using the specified external key. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-external-key">External key</a> in the <i>Key Management Service Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|

<h2 id="tocS_PolicyNameList">PolicyNameList</h2>
<!-- backwards compatibility -->
<a id="schemapolicynamelist"></a>
<a id="schema_PolicyNameList"></a>
<a id="tocSpolicynamelist"></a>
<a id="tocspolicynamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MessageType">MessageType</h2>
<!-- backwards compatibility -->
<a id="schemamessagetype"></a>
<a id="schema_MessageType"></a>
<a id="tocSmessagetype"></a>
<a id="tocsmessagetype"></a>

```json
"RAW"
```

<h2 id="tocS_MultiRegionKeyType">MultiRegionKeyType</h2>
<!-- backwards compatibility -->
<a id="schemamultiregionkeytype"></a>
<a id="schema_MultiRegionKeyType"></a>
<a id="tocSmultiregionkeytype"></a>
<a id="tocsmultiregionkeytype"></a>

```json
"PRIMARY"
```

<h2 id="tocS_MultiRegionKey">MultiRegionKey</h2>
<!-- backwards compatibility -->
<a id="schemamultiregionkey"></a>
<a id="schema_MultiRegionKey"></a>
<a id="tocSmultiregionkey"></a>
<a id="tocsmultiregionkey"></a>

```json
{
  "Arn": {},
  "Region": {}
}
```

Describes the primary or replica key in a multi-Region key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Region|object|false|none|none|

<h2 id="tocS_MultiRegionKeyList">MultiRegionKeyList</h2>
<!-- backwards compatibility -->
<a id="schemamultiregionkeylist"></a>
<a id="schema_MultiRegionKeyList"></a>
<a id="tocSmultiregionkeylist"></a>
<a id="tocsmultiregionkeylist"></a>

```json
[
  {
    "Arn": {},
    "Region": {}
  }
]
```

<h2 id="tocS_RegionType">RegionType</h2>
<!-- backwards compatibility -->
<a id="schemaregiontype"></a>
<a id="schema_RegionType"></a>
<a id="tocSregiontype"></a>
<a id="tocsregiontype"></a>

```json
"string"
```

<h2 id="tocS_SigningAlgorithmSpec">SigningAlgorithmSpec</h2>
<!-- backwards compatibility -->
<a id="schemasigningalgorithmspec"></a>
<a id="schema_SigningAlgorithmSpec"></a>
<a id="tocSsigningalgorithmspec"></a>
<a id="tocssigningalgorithmspec"></a>

```json
"RSASSA_PSS_SHA_256"
```

<h2 id="tocS_TagKeyType">TagKeyType</h2>
<!-- backwards compatibility -->
<a id="schematagkeytype"></a>
<a id="schema_TagKeyType"></a>
<a id="tocStagkeytype"></a>
<a id="tocstagkeytype"></a>

```json
"string"
```

<h2 id="tocS_TagValueType">TagValueType</h2>
<!-- backwards compatibility -->
<a id="schematagvaluetype"></a>
<a id="schema_TagValueType"></a>
<a id="tocStagvaluetype"></a>
<a id="tocstagvaluetype"></a>

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
  "TagKey": {},
  "TagValue": {}
}
```

<p>A key-value pair. A tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.</p> <important> <p>Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p> </important> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagKey|object|true|none|none|
|TagValue|object|true|none|none|

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

<h2 id="tocS_XksProxyAuthenticationAccessKeyIdType">XksProxyAuthenticationAccessKeyIdType</h2>
<!-- backwards compatibility -->
<a id="schemaxksproxyauthenticationaccesskeyidtype"></a>
<a id="schema_XksProxyAuthenticationAccessKeyIdType"></a>
<a id="tocSxksproxyauthenticationaccesskeyidtype"></a>
<a id="tocsxksproxyauthenticationaccesskeyidtype"></a>

```json
"password"
```

<h2 id="tocS_XksProxyAuthenticationRawSecretAccessKeyType">XksProxyAuthenticationRawSecretAccessKeyType</h2>
<!-- backwards compatibility -->
<a id="schemaxksproxyauthenticationrawsecretaccesskeytype"></a>
<a id="schema_XksProxyAuthenticationRawSecretAccessKeyType"></a>
<a id="tocSxksproxyauthenticationrawsecretaccesskeytype"></a>
<a id="tocsxksproxyauthenticationrawsecretaccesskeytype"></a>

```json
"password"
```
