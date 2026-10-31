<h1 id="aws-certificate-manager">AWS Certificate Manager v2015-12-08</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Certificate Manager</fullname> <p>You can use Certificate Manager (ACM) to manage SSL/TLS certificates for your Amazon Web Services-based websites and applications. For more information about using ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">Certificate Manager User Guide</a>.</p>

Base URLs:

* <a href="http://acm.us-east-1.amazonaws.com">http://acm.us-east-1.amazonaws.com</a> - The ACM multi-region endpoint

* <a href="https://acm.us-east-1.amazonaws.com">https://acm.us-east-1.amazonaws.com</a> - The ACM multi-region endpoint

* <a href="http://acm.cn-north-1.amazonaws.com.cn">http://acm.cn-north-1.amazonaws.com.cn</a> - The ACM endpoint for China (Beijing) and China (Ningxia)

* <a href="https://acm.cn-north-1.amazonaws.com.cn">https://acm.cn-north-1.amazonaws.com.cn</a> - The ACM endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/acm/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-certificate-manager-default">Default</h1>

## AddTagsToCertificate

<a id="opIdAddTagsToCertificate"></a>

> Code samples

```bash
curl 'https://acm.us-east-1.amazonaws.com/#X-Amz-Target=CertificateManager.AddTagsToCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CertificateManager.AddTagsToCertificate' \
  -d '{
    "CertificateArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=CertificateManager.AddTagsToCertificate`

<p>Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a <code>key</code> and an optional <code>value</code>. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. </p> <p>You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/tags.html">Tagging ACM certificates</a>. </p> <p>To remove one or more tags, use the <a>RemoveTagsFromCertificate</a> action. To view all of the tags that have been applied to the certificate, use the <a>ListTagsForCertificate</a> action. </p>

> Body parameter

```json
{
  "CertificateArn": {},
  "Tags": {}
}
```

<h3 id="addtagstocertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AddTagsToCertificateRequest](#schemaaddtagstocertificaterequest)|true|none|
|» CertificateArn|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CertificateManager.AddTagsToCertificate|

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

<h3 id="addtagstocertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|InvalidTagException|[InvalidTagException](#schemainvalidtagexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|484|484|TagPolicyException|[TagPolicyException](#schematagpolicyexception)|
|485|485|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCertificate

<a id="opIdDeleteCertificate"></a>

> Code samples

```bash
curl 'https://acm.us-east-1.amazonaws.com/#X-Amz-Target=CertificateManager.DeleteCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CertificateManager.DeleteCertificate' \
  -d '{
    "CertificateArn": {}
  }'
```

`POST /#X-Amz-Target=CertificateManager.DeleteCertificate`

<p>Deletes a certificate and its associated private key. If this action succeeds, the certificate no longer appears in the list that can be displayed by calling the <a>ListCertificates</a> action or be retrieved by calling the <a>GetCertificate</a> action. The certificate will not be available for use by Amazon Web Services services integrated with ACM. </p> <note> <p>You cannot delete an ACM certificate that is being used by another Amazon Web Services service. To delete a certificate that is in use, the certificate association must first be removed.</p> </note>

> Body parameter

```json
{
  "CertificateArn": {}
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
|» CertificateArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CertificateManager.DeleteCertificate|

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

<h3 id="deletecertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCertificate

<a id="opIdDescribeCertificate"></a>

> Code samples

```bash
curl 'https://acm.us-east-1.amazonaws.com/#X-Amz-Target=CertificateManager.DescribeCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CertificateManager.DescribeCertificate' \
  -d '{
    "CertificateArn": {}
  }'
```

`POST /#X-Amz-Target=CertificateManager.DescribeCertificate`

<p>Returns detailed metadata about the specified ACM certificate.</p> <p>If you have just created a certificate using the <code>RequestCertificate</code> action, there is a delay of several seconds before you can retrieve information about it.</p>

> Body parameter

```json
{
  "CertificateArn": {}
}
```

<h3 id="describecertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeCertificateRequest](#schemadescribecertificaterequest)|true|none|
|» CertificateArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CertificateManager.DescribeCertificate|

> Example responses

> 200 Response

```json
{
  "Certificate": {
    "CertificateArn": {},
    "DomainName": {},
    "SubjectAlternativeNames": {},
    "DomainValidationOptions": {},
    "Serial": {},
    "Subject": {},
    "Issuer": {},
    "CreatedAt": {},
    "IssuedAt": {},
    "ImportedAt": {},
    "Status": {},
    "RevokedAt": {},
    "RevocationReason": {},
    "NotBefore": {},
    "NotAfter": {},
    "KeyAlgorithm": {},
    "SignatureAlgorithm": {},
    "InUseBy": {},
    "FailureReason": {},
    "Type": {},
    "RenewalSummary": {
      "RenewalStatus": {},
      "DomainValidationOptions": {},
      "RenewalStatusReason": {},
      "UpdatedAt": {}
    },
    "KeyUsages": {},
    "ExtendedKeyUsages": {},
    "CertificateAuthorityArn": {},
    "RenewalEligibility": {},
    "Options": {
      "CertificateTransparencyLoggingPreference": {}
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

<h3 id="describecertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCertificateResponse](#schemadescribecertificateresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExportCertificate

<a id="opIdExportCertificate"></a>

> Code samples

```bash
curl 'https://acm.us-east-1.amazonaws.com/#X-Amz-Target=CertificateManager.ExportCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CertificateManager.ExportCertificate' \
  -d '{
    "CertificateArn": {},
    "Passphrase": {}
  }'
```

`POST /#X-Amz-Target=CertificateManager.ExportCertificate`

<p>Exports a private certificate issued by a private certificate authority (CA) for use anywhere. The exported file contains the certificate, the certificate chain, and the encrypted private 2048-bit RSA key associated with the public key that is embedded in the certificate. For security, you must assign a passphrase for the private key when exporting it. </p> <p>For information about exporting and formatting a certificate using the ACM console or CLI, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-export-private.html">Export a Private Certificate</a>.</p>

> Body parameter

```json
{
  "CertificateArn": {},
  "Passphrase": {}
}
```

<h3 id="exportcertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ExportCertificateRequest](#schemaexportcertificaterequest)|true|none|
|» CertificateArn|body|object|true|none|
|» Passphrase|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CertificateManager.ExportCertificate|

> Example responses

> 200 Response

```json
{
  "Certificate": {},
  "CertificateChain": {},
  "PrivateKey": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="exportcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportCertificateResponse](#schemaexportcertificateresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|RequestInProgressException|[RequestInProgressException](#schemarequestinprogressexception)|
|482|482|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccountConfiguration

<a id="opIdGetAccountConfiguration"></a>

> Code samples

```bash
curl 'https://acm.us-east-1.amazonaws.com/#X-Amz-Target=CertificateManager.GetAccountConfiguration' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CertificateManager.GetAccountConfiguration'
```

`POST /#X-Amz-Target=CertificateManager.GetAccountConfiguration`

Returns the account configuration options associated with an Amazon Web Services account.

<h3 id="getaccountconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
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
|X-Amz-Target|CertificateManager.GetAccountConfiguration|

> Example responses

> 200 Response

```json
{
  "ExpiryEvents": {
    "DaysBeforeExpiry": {}
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

<h3 id="getaccountconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccountConfigurationResponse](#schemagetaccountconfigurationresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCertificate

<a id="opIdGetCertificate"></a>

> Code samples

```bash
curl 'https://acm.us-east-1.amazonaws.com/#X-Amz-Target=CertificateManager.GetCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CertificateManager.GetCertificate' \
  -d '{
    "CertificateArn": {}
  }'
```

`POST /#X-Amz-Target=CertificateManager.GetCertificate`

Retrieves an Amazon-issued certificate and its certificate chain. The chain consists of the certificate of the issuing CA and the intermediate certificates of any other subordinate CAs. All of the certificates are base64 encoded. You can use <a href="https://wiki.openssl.org/index.php/Command_Line_Utilities">OpenSSL</a> to decode the certificates and inspect individual fields.

> Body parameter

```json
{
  "CertificateArn": {}
}
```

<h3 id="getcertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetCertificateRequest](#schemagetcertificaterequest)|true|none|
|» CertificateArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CertificateManager.GetCertificate|

> Example responses

> 200 Response

```json
{
  "Certificate": {},
  "CertificateChain": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCertificateResponse](#schemagetcertificateresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|RequestInProgressException|[RequestInProgressException](#schemarequestinprogressexception)|
|482|482|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportCertificate

<a id="opIdImportCertificate"></a>

> Code samples

```bash
curl 'https://acm.us-east-1.amazonaws.com/#X-Amz-Target=CertificateManager.ImportCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CertificateManager.ImportCertificate' \
  -d '{
    "CertificateArn": {},
    "Certificate": {},
    "PrivateKey": {},
    "CertificateChain": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=CertificateManager.ImportCertificate`

<p>Imports a certificate into Certificate Manager (ACM) to use with services that are integrated with ACM. Note that <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-services.html">integrated services</a> allow only certificate types and keys they support to be associated with their resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM. For more information, see the documentation for each service. For more information about importing certificates into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the <i>Certificate Manager User Guide</i>. </p> <note> <p>ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for certificates that you import.</p> </note> <p>Note the following guidelines when importing third party certificates:</p> <ul> <li> <p>You must enter the private key that matches the certificate you are importing.</p> </li> <li> <p>The private key must be unencrypted. You cannot import a private key that is protected by a password or a passphrase.</p> </li> <li> <p>The private key must be no larger than 5 KB (5,120 bytes).</p> </li> <li> <p>If the certificate you are importing is not self-signed, you must enter its certificate chain.</p> </li> <li> <p>If a certificate chain is included, the issuer must be the subject of one of the certificates in the chain.</p> </li> <li> <p>The certificate, private key, and certificate chain must be PEM-encoded.</p> </li> <li> <p>The current time must be between the <code>Not Before</code> and <code>Not After</code> certificate fields.</p> </li> <li> <p>The <code>Issuer</code> field must not be empty.</p> </li> <li> <p>The OCSP authority URL, if present, must not exceed 1000 characters.</p> </li> <li> <p>To import a new certificate, omit the <code>CertificateArn</code> argument. Include this argument only when you want to replace a previously imported certificate.</p> </li> <li> <p>When you import a certificate by using the CLI, you must specify the certificate, the certificate chain, and the private key by their file names preceded by <code>fileb://</code>. For example, you can specify a certificate saved in the <code>C:\temp</code> folder as <code>fileb://C:\temp\certificate_to_import.pem</code>. If you are making an HTTP or HTTPS Query request, include these arguments as BLOBs. </p> </li> <li> <p>When you import a certificate by using an SDK, you must specify the certificate, the certificate chain, and the private key files in the manner required by the programming language you're using. </p> </li> <li> <p>The cryptographic algorithm of an imported certificate must match the algorithm of the signing CA. For example, if the signing CA key type is RSA, then the certificate key type must also be RSA.</p> </li> </ul> <p>This operation returns the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the imported certificate.</p>

> Body parameter

```json
{
  "CertificateArn": {},
  "Certificate": {},
  "PrivateKey": {},
  "CertificateChain": {},
  "Tags": {}
}
```

<h3 id="importcertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ImportCertificateRequest](#schemaimportcertificaterequest)|true|none|
|» CertificateArn|body|object|false|none|
|» Certificate|body|object|true|none|
|» PrivateKey|body|object|true|none|
|» CertificateChain|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CertificateManager.ImportCertificate|

> Example responses

> 200 Response

```json
{
  "CertificateArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="importcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportCertificateResponse](#schemaimportcertificateresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InvalidTagException|[InvalidTagException](#schemainvalidtagexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|484|484|TagPolicyException|[TagPolicyException](#schematagpolicyexception)|
|485|485|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|486|486|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCertificates

<a id="opIdListCertificates"></a>

> Code samples

```bash
curl 'https://acm.us-east-1.amazonaws.com/#X-Amz-Target=CertificateManager.ListCertificates' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CertificateManager.ListCertificates' \
  -d '{
    "CertificateStatuses": {},
    "Includes": {
      "extendedKeyUsage": {},
      "keyUsage": {},
      "keyTypes": {}
    },
    "NextToken": {},
    "MaxItems": {},
    "SortBy": {},
    "SortOrder": {}
  }'
```

`POST /#X-Amz-Target=CertificateManager.ListCertificates`

Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a specific status be listed. You can also filter by specific attributes of the certificate. Default filtering returns only <code>RSA_2048</code> certificates. For more information, see <a>Filters</a>.

> Body parameter

```json
{
  "CertificateStatuses": {},
  "Includes": {
    "extendedKeyUsage": {},
    "keyUsage": {},
    "keyTypes": {}
  },
  "NextToken": {},
  "MaxItems": {},
  "SortBy": {},
  "SortOrder": {}
}
```

<h3 id="listcertificates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxItems|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListCertificatesRequest](#schemalistcertificatesrequest)|true|none|
|» CertificateStatuses|body|object|false|none|
|» Includes|body|object|false|none|
|» » extendedKeyUsage|body|object|false|none|
|» » keyUsage|body|object|false|none|
|» » keyTypes|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxItems|body|object|false|none|
|» SortBy|body|object|false|none|
|» SortOrder|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CertificateManager.ListCertificates|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "CertificateSummaryList": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listcertificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCertificatesResponse](#schemalistcertificatesresponse)|
|480|480|InvalidArgsException|[InvalidArgsException](#schemainvalidargsexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForCertificate

<a id="opIdListTagsForCertificate"></a>

> Code samples

```bash
curl 'https://acm.us-east-1.amazonaws.com/#X-Amz-Target=CertificateManager.ListTagsForCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CertificateManager.ListTagsForCertificate' \
  -d '{
    "CertificateArn": {}
  }'
```

`POST /#X-Amz-Target=CertificateManager.ListTagsForCertificate`

Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate, use the <a>AddTagsToCertificate</a> action. To delete a tag, use the <a>RemoveTagsFromCertificate</a> action. 

> Body parameter

```json
{
  "CertificateArn": {}
}
```

<h3 id="listtagsforcertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTagsForCertificateRequest](#schemalisttagsforcertificaterequest)|true|none|
|» CertificateArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CertificateManager.ListTagsForCertificate|

> Example responses

> 200 Response

```json
{
  "Tags": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listtagsforcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForCertificateResponse](#schemalisttagsforcertificateresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAccountConfiguration

<a id="opIdPutAccountConfiguration"></a>

> Code samples

```bash
curl 'https://acm.us-east-1.amazonaws.com/#X-Amz-Target=CertificateManager.PutAccountConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CertificateManager.PutAccountConfiguration' \
  -d '{
    "ExpiryEvents": {
      "DaysBeforeExpiry": {}
    },
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=CertificateManager.PutAccountConfiguration`

<p>Adds or modifies account-level configurations in ACM. </p> <p>The supported configuration option is <code>DaysBeforeExpiry</code>. This option specifies the number of days prior to certificate expiration when ACM starts generating <code>EventBridge</code> events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive events starting 45 days before certificate expiration.</p>

> Body parameter

```json
{
  "ExpiryEvents": {
    "DaysBeforeExpiry": {}
  },
  "IdempotencyToken": {}
}
```

<h3 id="putaccountconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutAccountConfigurationRequest](#schemaputaccountconfigurationrequest)|true|none|
|» ExpiryEvents|body|object|false|none|
|» » DaysBeforeExpiry|body|object|false|none|
|» IdempotencyToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CertificateManager.PutAccountConfiguration|

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

<h3 id="putaccountconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveTagsFromCertificate

<a id="opIdRemoveTagsFromCertificate"></a>

> Code samples

```bash
curl 'https://acm.us-east-1.amazonaws.com/#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CertificateManager.RemoveTagsFromCertificate' \
  -d '{
    "CertificateArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate`

<p>Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. </p> <p>To add tags to a certificate, use the <a>AddTagsToCertificate</a> action. To view all of the tags that have been applied to a specific ACM certificate, use the <a>ListTagsForCertificate</a> action. </p>

> Body parameter

```json
{
  "CertificateArn": {},
  "Tags": {}
}
```

<h3 id="removetagsfromcertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RemoveTagsFromCertificateRequest](#schemaremovetagsfromcertificaterequest)|true|none|
|» CertificateArn|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CertificateManager.RemoveTagsFromCertificate|

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

<h3 id="removetagsfromcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|InvalidTagException|[InvalidTagException](#schemainvalidtagexception)|
|483|483|TagPolicyException|[TagPolicyException](#schematagpolicyexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RenewCertificate

<a id="opIdRenewCertificate"></a>

> Code samples

```bash
curl 'https://acm.us-east-1.amazonaws.com/#X-Amz-Target=CertificateManager.RenewCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CertificateManager.RenewCertificate' \
  -d '{
    "CertificateArn": {}
  }'
```

`POST /#X-Amz-Target=CertificateManager.RenewCertificate`

Renews an eligible ACM certificate. At this time, only exported private certificates can be renewed with this operation. In order to renew your Amazon Web Services Private CA certificates with ACM, you must first <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaPermissions.html">grant the ACM service principal permission to do so</a>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/manual-renewal.html">Testing Managed Renewal</a> in the ACM User Guide.

> Body parameter

```json
{
  "CertificateArn": {}
}
```

<h3 id="renewcertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RenewCertificateRequest](#schemarenewcertificaterequest)|true|none|
|» CertificateArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CertificateManager.RenewCertificate|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="renewcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RequestCertificate

<a id="opIdRequestCertificate"></a>

> Code samples

```bash
curl 'https://acm.us-east-1.amazonaws.com/#X-Amz-Target=CertificateManager.RequestCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CertificateManager.RequestCertificate' \
  -d '{
    "DomainName": {},
    "ValidationMethod": {},
    "SubjectAlternativeNames": {},
    "IdempotencyToken": {},
    "DomainValidationOptions": {},
    "Options": {
      "CertificateTransparencyLoggingPreference": {}
    },
    "CertificateAuthorityArn": {},
    "Tags": {},
    "KeyAlgorithm": {}
  }'
```

`POST /#X-Amz-Target=CertificateManager.RequestCertificate`

<p>Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the <code>DomainName</code> parameter. You can also specify additional FQDNs in the <code>SubjectAlternativeNames</code> parameter. </p> <p>If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">email validation</a>. We recommend that you use DNS validation. ACM issues public certificates after receiving approval from the domain owner. </p> <note> <p>ACM behavior differs from the <a href="https://datatracker.ietf.org/doc/html/rfc6125#appendix-B.2">RFC 6125</a> specification of the certificate validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common name (CN).</p> </note> <p>After successful completion of the <code>RequestCertificate</code> action, there is a delay of several seconds before you can retrieve information about the new certificate.</p>

> Body parameter

```json
{
  "DomainName": {},
  "ValidationMethod": {},
  "SubjectAlternativeNames": {},
  "IdempotencyToken": {},
  "DomainValidationOptions": {},
  "Options": {
    "CertificateTransparencyLoggingPreference": {}
  },
  "CertificateAuthorityArn": {},
  "Tags": {},
  "KeyAlgorithm": {}
}
```

<h3 id="requestcertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RequestCertificateRequest](#schemarequestcertificaterequest)|true|none|
|» DomainName|body|object|true|none|
|» ValidationMethod|body|object|false|none|
|» SubjectAlternativeNames|body|object|false|none|
|» IdempotencyToken|body|object|false|none|
|» DomainValidationOptions|body|object|false|none|
|» Options|body|object|false|none|
|» » CertificateTransparencyLoggingPreference|body|object|false|none|
|» CertificateAuthorityArn|body|object|false|none|
|» Tags|body|object|false|none|
|» KeyAlgorithm|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CertificateManager.RequestCertificate|

> Example responses

> 200 Response

```json
{
  "CertificateArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="requestcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RequestCertificateResponse](#schemarequestcertificateresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InvalidDomainValidationOptionsException|[InvalidDomainValidationOptionsException](#schemainvaliddomainvalidationoptionsexception)|
|482|482|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|483|483|InvalidTagException|[InvalidTagException](#schemainvalidtagexception)|
|484|484|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|485|485|TagPolicyException|[TagPolicyException](#schematagpolicyexception)|
|486|486|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResendValidationEmail

<a id="opIdResendValidationEmail"></a>

> Code samples

```bash
curl 'https://acm.us-east-1.amazonaws.com/#X-Amz-Target=CertificateManager.ResendValidationEmail' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CertificateManager.ResendValidationEmail' \
  -d '{
    "CertificateArn": {},
    "Domain": {},
    "ValidationDomain": {}
  }'
```

`POST /#X-Amz-Target=CertificateManager.ResendValidationEmail`

Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking <b>I Approve</b>. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/setup-email.html">Configure Email for your Domain</a>. 

> Body parameter

```json
{
  "CertificateArn": {},
  "Domain": {},
  "ValidationDomain": {}
}
```

<h3 id="resendvalidationemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ResendValidationEmailRequest](#schemaresendvalidationemailrequest)|true|none|
|» CertificateArn|body|object|true|none|
|» Domain|body|object|true|none|
|» ValidationDomain|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CertificateManager.ResendValidationEmail|

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

<h3 id="resendvalidationemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|482|482|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|483|483|InvalidDomainValidationOptionsException|[InvalidDomainValidationOptionsException](#schemainvaliddomainvalidationoptionsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCertificateOptions

<a id="opIdUpdateCertificateOptions"></a>

> Code samples

```bash
curl 'https://acm.us-east-1.amazonaws.com/#X-Amz-Target=CertificateManager.UpdateCertificateOptions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CertificateManager.UpdateCertificateOptions' \
  -d '{
    "CertificateArn": {},
    "Options": {
      "CertificateTransparencyLoggingPreference": {}
    }
  }'
```

`POST /#X-Amz-Target=CertificateManager.UpdateCertificateOptions`

Updates a certificate. Currently, you can use this function to specify whether to opt in to or out of recording your certificate in a certificate transparency log. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency"> Opting Out of Certificate Transparency Logging</a>. 

> Body parameter

```json
{
  "CertificateArn": {},
  "Options": {
    "CertificateTransparencyLoggingPreference": {}
  }
}
```

<h3 id="updatecertificateoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateCertificateOptionsRequest](#schemaupdatecertificateoptionsrequest)|true|none|
|» CertificateArn|body|object|true|none|
|» Options|body|object|true|none|
|» » CertificateTransparencyLoggingPreference|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CertificateManager.UpdateCertificateOptions|

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

<h3 id="updatecertificateoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|483|483|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddTagsToCertificateRequest">AddTagsToCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagstocertificaterequest"></a>
<a id="schema_AddTagsToCertificateRequest"></a>
<a id="tocSaddtagstocertificaterequest"></a>
<a id="tocsaddtagstocertificaterequest"></a>

```json
{
  "CertificateArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

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

<h2 id="tocS_InvalidTagException">InvalidTagException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtagexception"></a>
<a id="schema_InvalidTagException"></a>
<a id="tocSinvalidtagexception"></a>
<a id="tocsinvalidtagexception"></a>

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

<h2 id="tocS_TagPolicyException">TagPolicyException</h2>
<!-- backwards compatibility -->
<a id="schematagpolicyexception"></a>
<a id="schema_TagPolicyException"></a>
<a id="tocStagpolicyexception"></a>
<a id="tocstagpolicyexception"></a>

```json
null
```

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

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

<h2 id="tocS_DeleteCertificateRequest">DeleteCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecertificaterequest"></a>
<a id="schema_DeleteCertificateRequest"></a>
<a id="tocSdeletecertificaterequest"></a>
<a id="tocsdeletecertificaterequest"></a>

```json
{
  "CertificateArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|true|none|none|

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

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

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_DescribeCertificateResponse">DescribeCertificateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecertificateresponse"></a>
<a id="schema_DescribeCertificateResponse"></a>
<a id="tocSdescribecertificateresponse"></a>
<a id="tocsdescribecertificateresponse"></a>

```json
{
  "Certificate": {
    "CertificateArn": {},
    "DomainName": {},
    "SubjectAlternativeNames": {},
    "DomainValidationOptions": {},
    "Serial": {},
    "Subject": {},
    "Issuer": {},
    "CreatedAt": {},
    "IssuedAt": {},
    "ImportedAt": {},
    "Status": {},
    "RevokedAt": {},
    "RevocationReason": {},
    "NotBefore": {},
    "NotAfter": {},
    "KeyAlgorithm": {},
    "SignatureAlgorithm": {},
    "InUseBy": {},
    "FailureReason": {},
    "Type": {},
    "RenewalSummary": {
      "RenewalStatus": {},
      "DomainValidationOptions": {},
      "RenewalStatusReason": {},
      "UpdatedAt": {}
    },
    "KeyUsages": {},
    "ExtendedKeyUsages": {},
    "CertificateAuthorityArn": {},
    "RenewalEligibility": {},
    "Options": {
      "CertificateTransparencyLoggingPreference": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Certificate|object|false|none|none|

<h2 id="tocS_DescribeCertificateRequest">DescribeCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecertificaterequest"></a>
<a id="schema_DescribeCertificateRequest"></a>
<a id="tocSdescribecertificaterequest"></a>
<a id="tocsdescribecertificaterequest"></a>

```json
{
  "CertificateArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|true|none|none|

<h2 id="tocS_ExportCertificateResponse">ExportCertificateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportcertificateresponse"></a>
<a id="schema_ExportCertificateResponse"></a>
<a id="tocSexportcertificateresponse"></a>
<a id="tocsexportcertificateresponse"></a>

```json
{
  "Certificate": {},
  "CertificateChain": {},
  "PrivateKey": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Certificate|object|false|none|none|
|CertificateChain|object|false|none|none|
|PrivateKey|object|false|none|none|

<h2 id="tocS_ExportCertificateRequest">ExportCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportcertificaterequest"></a>
<a id="schema_ExportCertificateRequest"></a>
<a id="tocSexportcertificaterequest"></a>
<a id="tocsexportcertificaterequest"></a>

```json
{
  "CertificateArn": {},
  "Passphrase": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|true|none|none|
|Passphrase|object|true|none|none|

<h2 id="tocS_RequestInProgressException">RequestInProgressException</h2>
<!-- backwards compatibility -->
<a id="schemarequestinprogressexception"></a>
<a id="schema_RequestInProgressException"></a>
<a id="tocSrequestinprogressexception"></a>
<a id="tocsrequestinprogressexception"></a>

```json
null
```

<h2 id="tocS_GetAccountConfigurationResponse">GetAccountConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountconfigurationresponse"></a>
<a id="schema_GetAccountConfigurationResponse"></a>
<a id="tocSgetaccountconfigurationresponse"></a>
<a id="tocsgetaccountconfigurationresponse"></a>

```json
{
  "ExpiryEvents": {
    "DaysBeforeExpiry": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExpiryEvents|object|false|none|none|

<h2 id="tocS_GetCertificateResponse">GetCertificateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcertificateresponse"></a>
<a id="schema_GetCertificateResponse"></a>
<a id="tocSgetcertificateresponse"></a>
<a id="tocsgetcertificateresponse"></a>

```json
{
  "Certificate": {},
  "CertificateChain": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Certificate|object|false|none|none|
|CertificateChain|object|false|none|none|

<h2 id="tocS_GetCertificateRequest">GetCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcertificaterequest"></a>
<a id="schema_GetCertificateRequest"></a>
<a id="tocSgetcertificaterequest"></a>
<a id="tocsgetcertificaterequest"></a>

```json
{
  "CertificateArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|true|none|none|

<h2 id="tocS_ImportCertificateResponse">ImportCertificateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportcertificateresponse"></a>
<a id="schema_ImportCertificateResponse"></a>
<a id="tocSimportcertificateresponse"></a>
<a id="tocsimportcertificateresponse"></a>

```json
{
  "CertificateArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|false|none|none|

<h2 id="tocS_ImportCertificateRequest">ImportCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportcertificaterequest"></a>
<a id="schema_ImportCertificateRequest"></a>
<a id="tocSimportcertificaterequest"></a>
<a id="tocsimportcertificaterequest"></a>

```json
{
  "CertificateArn": {},
  "Certificate": {},
  "PrivateKey": {},
  "CertificateChain": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|false|none|none|
|Certificate|object|true|none|none|
|PrivateKey|object|true|none|none|
|CertificateChain|object|false|none|none|
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

<h2 id="tocS_ListCertificatesResponse">ListCertificatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcertificatesresponse"></a>
<a id="schema_ListCertificatesResponse"></a>
<a id="tocSlistcertificatesresponse"></a>
<a id="tocslistcertificatesresponse"></a>

```json
{
  "NextToken": {},
  "CertificateSummaryList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|CertificateSummaryList|object|false|none|none|

<h2 id="tocS_ListCertificatesRequest">ListCertificatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcertificatesrequest"></a>
<a id="schema_ListCertificatesRequest"></a>
<a id="tocSlistcertificatesrequest"></a>
<a id="tocslistcertificatesrequest"></a>

```json
{
  "CertificateStatuses": {},
  "Includes": {
    "extendedKeyUsage": {},
    "keyUsage": {},
    "keyTypes": {}
  },
  "NextToken": {},
  "MaxItems": {},
  "SortBy": {},
  "SortOrder": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateStatuses|object|false|none|none|
|Includes|object|false|none|none|
|NextToken|object|false|none|none|
|MaxItems|object|false|none|none|
|SortBy|object|false|none|none|
|SortOrder|object|false|none|none|

<h2 id="tocS_InvalidArgsException">InvalidArgsException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidargsexception"></a>
<a id="schema_InvalidArgsException"></a>
<a id="tocSinvalidargsexception"></a>
<a id="tocsinvalidargsexception"></a>

```json
null
```

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_ListTagsForCertificateResponse">ListTagsForCertificateResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforcertificateresponse"></a>
<a id="schema_ListTagsForCertificateResponse"></a>
<a id="tocSlisttagsforcertificateresponse"></a>
<a id="tocslisttagsforcertificateresponse"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListTagsForCertificateRequest">ListTagsForCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforcertificaterequest"></a>
<a id="schema_ListTagsForCertificateRequest"></a>
<a id="tocSlisttagsforcertificaterequest"></a>
<a id="tocslisttagsforcertificaterequest"></a>

```json
{
  "CertificateArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|true|none|none|

<h2 id="tocS_PutAccountConfigurationRequest">PutAccountConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputaccountconfigurationrequest"></a>
<a id="schema_PutAccountConfigurationRequest"></a>
<a id="tocSputaccountconfigurationrequest"></a>
<a id="tocsputaccountconfigurationrequest"></a>

```json
{
  "ExpiryEvents": {
    "DaysBeforeExpiry": {}
  },
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExpiryEvents|object|false|none|none|
|IdempotencyToken|object|true|none|none|

<h2 id="tocS_RemoveTagsFromCertificateRequest">RemoveTagsFromCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsfromcertificaterequest"></a>
<a id="schema_RemoveTagsFromCertificateRequest"></a>
<a id="tocSremovetagsfromcertificaterequest"></a>
<a id="tocsremovetagsfromcertificaterequest"></a>

```json
{
  "CertificateArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_RenewCertificateRequest">RenewCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemarenewcertificaterequest"></a>
<a id="schema_RenewCertificateRequest"></a>
<a id="tocSrenewcertificaterequest"></a>
<a id="tocsrenewcertificaterequest"></a>

```json
{
  "CertificateArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|true|none|none|

<h2 id="tocS_RequestCertificateResponse">RequestCertificateResponse</h2>
<!-- backwards compatibility -->
<a id="schemarequestcertificateresponse"></a>
<a id="schema_RequestCertificateResponse"></a>
<a id="tocSrequestcertificateresponse"></a>
<a id="tocsrequestcertificateresponse"></a>

```json
{
  "CertificateArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|false|none|none|

<h2 id="tocS_RequestCertificateRequest">RequestCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemarequestcertificaterequest"></a>
<a id="schema_RequestCertificateRequest"></a>
<a id="tocSrequestcertificaterequest"></a>
<a id="tocsrequestcertificaterequest"></a>

```json
{
  "DomainName": {},
  "ValidationMethod": {},
  "SubjectAlternativeNames": {},
  "IdempotencyToken": {},
  "DomainValidationOptions": {},
  "Options": {
    "CertificateTransparencyLoggingPreference": {}
  },
  "CertificateAuthorityArn": {},
  "Tags": {},
  "KeyAlgorithm": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|ValidationMethod|object|false|none|none|
|SubjectAlternativeNames|object|false|none|none|
|IdempotencyToken|object|false|none|none|
|DomainValidationOptions|object|false|none|none|
|Options|object|false|none|none|
|CertificateAuthorityArn|object|false|none|none|
|Tags|object|false|none|none|
|KeyAlgorithm|object|false|none|none|

<h2 id="tocS_InvalidDomainValidationOptionsException">InvalidDomainValidationOptionsException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddomainvalidationoptionsexception"></a>
<a id="schema_InvalidDomainValidationOptionsException"></a>
<a id="tocSinvaliddomainvalidationoptionsexception"></a>
<a id="tocsinvaliddomainvalidationoptionsexception"></a>

```json
null
```

<h2 id="tocS_ResendValidationEmailRequest">ResendValidationEmailRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresendvalidationemailrequest"></a>
<a id="schema_ResendValidationEmailRequest"></a>
<a id="tocSresendvalidationemailrequest"></a>
<a id="tocsresendvalidationemailrequest"></a>

```json
{
  "CertificateArn": {},
  "Domain": {},
  "ValidationDomain": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|true|none|none|
|Domain|object|true|none|none|
|ValidationDomain|object|true|none|none|

<h2 id="tocS_InvalidStateException">InvalidStateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidstateexception"></a>
<a id="schema_InvalidStateException"></a>
<a id="tocSinvalidstateexception"></a>
<a id="tocsinvalidstateexception"></a>

```json
null
```

<h2 id="tocS_UpdateCertificateOptionsRequest">UpdateCertificateOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecertificateoptionsrequest"></a>
<a id="schema_UpdateCertificateOptionsRequest"></a>
<a id="tocSupdatecertificateoptionsrequest"></a>
<a id="tocsupdatecertificateoptionsrequest"></a>

```json
{
  "CertificateArn": {},
  "Options": {
    "CertificateTransparencyLoggingPreference": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|true|none|none|
|Options|object|true|none|none|

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"stringstringstringst"
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

<h2 id="tocS_CertificateBody">CertificateBody</h2>
<!-- backwards compatibility -->
<a id="schemacertificatebody"></a>
<a id="schema_CertificateBody"></a>
<a id="tocScertificatebody"></a>
<a id="tocscertificatebody"></a>

```json
"string"
```

<h2 id="tocS_CertificateBodyBlob">CertificateBodyBlob</h2>
<!-- backwards compatibility -->
<a id="schemacertificatebodyblob"></a>
<a id="schema_CertificateBodyBlob"></a>
<a id="tocScertificatebodyblob"></a>
<a id="tocscertificatebodyblob"></a>

```json
"string"
```

<h2 id="tocS_CertificateChain">CertificateChain</h2>
<!-- backwards compatibility -->
<a id="schemacertificatechain"></a>
<a id="schema_CertificateChain"></a>
<a id="tocScertificatechain"></a>
<a id="tocscertificatechain"></a>

```json
"string"
```

<h2 id="tocS_CertificateChainBlob">CertificateChainBlob</h2>
<!-- backwards compatibility -->
<a id="schemacertificatechainblob"></a>
<a id="schema_CertificateChainBlob"></a>
<a id="tocScertificatechainblob"></a>
<a id="tocscertificatechainblob"></a>

```json
"string"
```

<h2 id="tocS_DomainNameString">DomainNameString</h2>
<!-- backwards compatibility -->
<a id="schemadomainnamestring"></a>
<a id="schema_DomainNameString"></a>
<a id="tocSdomainnamestring"></a>
<a id="tocsdomainnamestring"></a>

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
  "string"
]
```

<h2 id="tocS_DomainValidationList">DomainValidationList</h2>
<!-- backwards compatibility -->
<a id="schemadomainvalidationlist"></a>
<a id="schema_DomainValidationList"></a>
<a id="tocSdomainvalidationlist"></a>
<a id="tocsdomainvalidationlist"></a>

```json
[
  {
    "DomainName": {},
    "ValidationEmails": {},
    "ValidationDomain": {},
    "ValidationStatus": {},
    "ResourceRecord": {
      "Name": {},
      "Type": {},
      "Value": {}
    },
    "ValidationMethod": {}
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

<h2 id="tocS_TStamp">TStamp</h2>
<!-- backwards compatibility -->
<a id="schematstamp"></a>
<a id="schema_TStamp"></a>
<a id="tocStstamp"></a>
<a id="tocststamp"></a>

```json
"1970-01-01T00:00:00Z"
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

<h2 id="tocS_RevocationReason">RevocationReason</h2>
<!-- backwards compatibility -->
<a id="schemarevocationreason"></a>
<a id="schema_RevocationReason"></a>
<a id="tocSrevocationreason"></a>
<a id="tocsrevocationreason"></a>

```json
"UNSPECIFIED"
```

<h2 id="tocS_KeyAlgorithm">KeyAlgorithm</h2>
<!-- backwards compatibility -->
<a id="schemakeyalgorithm"></a>
<a id="schema_KeyAlgorithm"></a>
<a id="tocSkeyalgorithm"></a>
<a id="tocskeyalgorithm"></a>

```json
"RSA_1024"
```

<h2 id="tocS_InUseList">InUseList</h2>
<!-- backwards compatibility -->
<a id="schemainuselist"></a>
<a id="schema_InUseList"></a>
<a id="tocSinuselist"></a>
<a id="tocsinuselist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FailureReason">FailureReason</h2>
<!-- backwards compatibility -->
<a id="schemafailurereason"></a>
<a id="schema_FailureReason"></a>
<a id="tocSfailurereason"></a>
<a id="tocsfailurereason"></a>

```json
"NO_AVAILABLE_CONTACTS"
```

<h2 id="tocS_CertificateType">CertificateType</h2>
<!-- backwards compatibility -->
<a id="schemacertificatetype"></a>
<a id="schema_CertificateType"></a>
<a id="tocScertificatetype"></a>
<a id="tocscertificatetype"></a>

```json
"IMPORTED"
```

<h2 id="tocS_RenewalSummary">RenewalSummary</h2>
<!-- backwards compatibility -->
<a id="schemarenewalsummary"></a>
<a id="schema_RenewalSummary"></a>
<a id="tocSrenewalsummary"></a>
<a id="tocsrenewalsummary"></a>

```json
{
  "RenewalStatus": {},
  "DomainValidationOptions": {},
  "RenewalStatusReason": {},
  "UpdatedAt": {}
}
```

Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This structure exists only when the certificate type is <code>AMAZON_ISSUED</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RenewalStatus|object|true|none|none|
|DomainValidationOptions|object|true|none|none|
|RenewalStatusReason|object|false|none|none|
|UpdatedAt|object|true|none|none|

<h2 id="tocS_KeyUsageList">KeyUsageList</h2>
<!-- backwards compatibility -->
<a id="schemakeyusagelist"></a>
<a id="schema_KeyUsageList"></a>
<a id="tocSkeyusagelist"></a>
<a id="tocskeyusagelist"></a>

```json
[
  {
    "Name": {}
  }
]
```

<h2 id="tocS_ExtendedKeyUsageList">ExtendedKeyUsageList</h2>
<!-- backwards compatibility -->
<a id="schemaextendedkeyusagelist"></a>
<a id="schema_ExtendedKeyUsageList"></a>
<a id="tocSextendedkeyusagelist"></a>
<a id="tocsextendedkeyusagelist"></a>

```json
[
  {
    "Name": {},
    "OID": {}
  }
]
```

<h2 id="tocS_RenewalEligibility">RenewalEligibility</h2>
<!-- backwards compatibility -->
<a id="schemarenewaleligibility"></a>
<a id="schema_RenewalEligibility"></a>
<a id="tocSrenewaleligibility"></a>
<a id="tocsrenewaleligibility"></a>

```json
"ELIGIBLE"
```

<h2 id="tocS_CertificateOptions">CertificateOptions</h2>
<!-- backwards compatibility -->
<a id="schemacertificateoptions"></a>
<a id="schema_CertificateOptions"></a>
<a id="tocScertificateoptions"></a>
<a id="tocscertificateoptions"></a>

```json
{
  "CertificateTransparencyLoggingPreference": {}
}
```

Structure that contains options for your certificate. Currently, you can use this only to specify whether to opt in to or out of certificate transparency logging. Some browsers require that public certificates issued for your domain be recorded in a log. Certificates that are not logged typically generate a browser error. Transparency makes it possible for you to detect SSL/TLS certificates that have been mistakenly or maliciously issued for your domain. For general information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency">Certificate Transparency Logging</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateTransparencyLoggingPreference|object|false|none|none|

<h2 id="tocS_CertificateDetail">CertificateDetail</h2>
<!-- backwards compatibility -->
<a id="schemacertificatedetail"></a>
<a id="schema_CertificateDetail"></a>
<a id="tocScertificatedetail"></a>
<a id="tocscertificatedetail"></a>

```json
{
  "CertificateArn": {},
  "DomainName": {},
  "SubjectAlternativeNames": {},
  "DomainValidationOptions": {},
  "Serial": {},
  "Subject": {},
  "Issuer": {},
  "CreatedAt": {},
  "IssuedAt": {},
  "ImportedAt": {},
  "Status": {},
  "RevokedAt": {},
  "RevocationReason": {},
  "NotBefore": {},
  "NotAfter": {},
  "KeyAlgorithm": {},
  "SignatureAlgorithm": {},
  "InUseBy": {},
  "FailureReason": {},
  "Type": {},
  "RenewalSummary": {
    "RenewalStatus": {},
    "DomainValidationOptions": {},
    "RenewalStatusReason": {},
    "UpdatedAt": {}
  },
  "KeyUsages": {},
  "ExtendedKeyUsages": {},
  "CertificateAuthorityArn": {},
  "RenewalEligibility": {},
  "Options": {
    "CertificateTransparencyLoggingPreference": {}
  }
}
```

Contains metadata about an ACM certificate. This structure is returned in the response to a <a>DescribeCertificate</a> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|false|none|none|
|DomainName|object|false|none|none|
|SubjectAlternativeNames|object|false|none|none|
|DomainValidationOptions|object|false|none|none|
|Serial|object|false|none|none|
|Subject|object|false|none|none|
|Issuer|object|false|none|none|
|CreatedAt|object|false|none|none|
|IssuedAt|object|false|none|none|
|ImportedAt|object|false|none|none|
|Status|object|false|none|none|
|RevokedAt|object|false|none|none|
|RevocationReason|object|false|none|none|
|NotBefore|object|false|none|none|
|NotAfter|object|false|none|none|
|KeyAlgorithm|object|false|none|none|
|SignatureAlgorithm|object|false|none|none|
|InUseBy|object|false|none|none|
|FailureReason|object|false|none|none|
|Type|object|false|none|none|
|RenewalSummary|object|false|none|none|
|KeyUsages|object|false|none|none|
|ExtendedKeyUsages|object|false|none|none|
|CertificateAuthorityArn|object|false|none|none|
|RenewalEligibility|object|false|none|none|
|Options|object|false|none|none|

<h2 id="tocS_CertificateTransparencyLoggingPreference">CertificateTransparencyLoggingPreference</h2>
<!-- backwards compatibility -->
<a id="schemacertificatetransparencyloggingpreference"></a>
<a id="schema_CertificateTransparencyLoggingPreference"></a>
<a id="tocScertificatetransparencyloggingpreference"></a>
<a id="tocscertificatetransparencyloggingpreference"></a>

```json
"ENABLED"
```

<h2 id="tocS_CertificateStatuses">CertificateStatuses</h2>
<!-- backwards compatibility -->
<a id="schemacertificatestatuses"></a>
<a id="schema_CertificateStatuses"></a>
<a id="tocScertificatestatuses"></a>
<a id="tocscertificatestatuses"></a>

```json
[
  "PENDING_VALIDATION"
]
```

<h2 id="tocS_NullableBoolean">NullableBoolean</h2>
<!-- backwards compatibility -->
<a id="schemanullableboolean"></a>
<a id="schema_NullableBoolean"></a>
<a id="tocSnullableboolean"></a>
<a id="tocsnullableboolean"></a>

```json
true
```

<h2 id="tocS_KeyUsageNames">KeyUsageNames</h2>
<!-- backwards compatibility -->
<a id="schemakeyusagenames"></a>
<a id="schema_KeyUsageNames"></a>
<a id="tocSkeyusagenames"></a>
<a id="tocskeyusagenames"></a>

```json
[
  "DIGITAL_SIGNATURE"
]
```

<h2 id="tocS_ExtendedKeyUsageNames">ExtendedKeyUsageNames</h2>
<!-- backwards compatibility -->
<a id="schemaextendedkeyusagenames"></a>
<a id="schema_ExtendedKeyUsageNames"></a>
<a id="tocSextendedkeyusagenames"></a>
<a id="tocsextendedkeyusagenames"></a>

```json
[
  "TLS_WEB_SERVER_AUTHENTICATION"
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
  "CertificateArn": {},
  "DomainName": {},
  "SubjectAlternativeNameSummaries": {},
  "HasAdditionalSubjectAlternativeNames": {},
  "Status": {},
  "Type": {},
  "KeyAlgorithm": {},
  "KeyUsages": {},
  "ExtendedKeyUsages": {},
  "InUse": {},
  "Exported": {},
  "RenewalEligibility": {},
  "NotBefore": {},
  "NotAfter": {},
  "CreatedAt": {},
  "IssuedAt": {},
  "ImportedAt": {},
  "RevokedAt": {}
}
```

This structure is returned in the response object of <a>ListCertificates</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|false|none|none|
|DomainName|object|false|none|none|
|SubjectAlternativeNameSummaries|object|false|none|none|
|HasAdditionalSubjectAlternativeNames|object|false|none|none|
|Status|object|false|none|none|
|Type|object|false|none|none|
|KeyAlgorithm|object|false|none|none|
|KeyUsages|object|false|none|none|
|ExtendedKeyUsages|object|false|none|none|
|InUse|object|false|none|none|
|Exported|object|false|none|none|
|RenewalEligibility|object|false|none|none|
|NotBefore|object|false|none|none|
|NotAfter|object|false|none|none|
|CreatedAt|object|false|none|none|
|IssuedAt|object|false|none|none|
|ImportedAt|object|false|none|none|
|RevokedAt|object|false|none|none|

<h2 id="tocS_CertificateSummaryList">CertificateSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemacertificatesummarylist"></a>
<a id="schema_CertificateSummaryList"></a>
<a id="tocScertificatesummarylist"></a>
<a id="tocscertificatesummarylist"></a>

```json
[
  {
    "CertificateArn": {},
    "DomainName": {},
    "SubjectAlternativeNameSummaries": {},
    "HasAdditionalSubjectAlternativeNames": {},
    "Status": {},
    "Type": {},
    "KeyAlgorithm": {},
    "KeyUsages": {},
    "ExtendedKeyUsages": {},
    "InUse": {},
    "Exported": {},
    "RenewalEligibility": {},
    "NotBefore": {},
    "NotAfter": {},
    "CreatedAt": {},
    "IssuedAt": {},
    "ImportedAt": {},
    "RevokedAt": {}
  }
]
```

<h2 id="tocS_DomainStatus">DomainStatus</h2>
<!-- backwards compatibility -->
<a id="schemadomainstatus"></a>
<a id="schema_DomainStatus"></a>
<a id="tocSdomainstatus"></a>
<a id="tocsdomainstatus"></a>

```json
"PENDING_VALIDATION"
```

<h2 id="tocS_ValidationEmailList">ValidationEmailList</h2>
<!-- backwards compatibility -->
<a id="schemavalidationemaillist"></a>
<a id="schema_ValidationEmailList"></a>
<a id="tocSvalidationemaillist"></a>
<a id="tocsvalidationemaillist"></a>

```json
[
  "string"
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
  "Name": {},
  "Type": {},
  "Value": {}
}
```

Contains a DNS record value that you can use to validate ownership or control of a domain. This is used by the <a>DescribeCertificate</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Type|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_ValidationMethod">ValidationMethod</h2>
<!-- backwards compatibility -->
<a id="schemavalidationmethod"></a>
<a id="schema_ValidationMethod"></a>
<a id="tocSvalidationmethod"></a>
<a id="tocsvalidationmethod"></a>

```json
"EMAIL"
```

<h2 id="tocS_DomainValidation">DomainValidation</h2>
<!-- backwards compatibility -->
<a id="schemadomainvalidation"></a>
<a id="schema_DomainValidation"></a>
<a id="tocSdomainvalidation"></a>
<a id="tocsdomainvalidation"></a>

```json
{
  "DomainName": {},
  "ValidationEmails": {},
  "ValidationDomain": {},
  "ValidationStatus": {},
  "ResourceRecord": {
    "Name": {},
    "Type": {},
    "Value": {}
  },
  "ValidationMethod": {}
}
```

Contains information about the validation of each domain name in the certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|ValidationEmails|object|false|none|none|
|ValidationDomain|object|false|none|none|
|ValidationStatus|object|false|none|none|
|ResourceRecord|object|false|none|none|
|ValidationMethod|object|false|none|none|

<h2 id="tocS_DomainValidationOption">DomainValidationOption</h2>
<!-- backwards compatibility -->
<a id="schemadomainvalidationoption"></a>
<a id="schema_DomainValidationOption"></a>
<a id="tocSdomainvalidationoption"></a>
<a id="tocsdomainvalidationoption"></a>

```json
{
  "DomainName": {},
  "ValidationDomain": {}
}
```

Contains information about the domain names that you want ACM to use to send you emails that enable you to validate domain ownership.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|ValidationDomain|object|true|none|none|

<h2 id="tocS_DomainValidationOptionList">DomainValidationOptionList</h2>
<!-- backwards compatibility -->
<a id="schemadomainvalidationoptionlist"></a>
<a id="schema_DomainValidationOptionList"></a>
<a id="tocSdomainvalidationoptionlist"></a>
<a id="tocsdomainvalidationoptionlist"></a>

```json
[
  {
    "DomainName": {},
    "ValidationDomain": {}
  }
]
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

<h2 id="tocS_ExpiryEventsConfiguration">ExpiryEventsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaexpiryeventsconfiguration"></a>
<a id="schema_ExpiryEventsConfiguration"></a>
<a id="tocSexpiryeventsconfiguration"></a>
<a id="tocsexpiryeventsconfiguration"></a>

```json
{
  "DaysBeforeExpiry": {}
}
```

Object containing expiration events options associated with an Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DaysBeforeExpiry|object|false|none|none|

<h2 id="tocS_PassphraseBlob">PassphraseBlob</h2>
<!-- backwards compatibility -->
<a id="schemapassphraseblob"></a>
<a id="schema_PassphraseBlob"></a>
<a id="tocSpassphraseblob"></a>
<a id="tocspassphraseblob"></a>

```json
"password"
```

<h2 id="tocS_PrivateKey">PrivateKey</h2>
<!-- backwards compatibility -->
<a id="schemaprivatekey"></a>
<a id="schema_PrivateKey"></a>
<a id="tocSprivatekey"></a>
<a id="tocsprivatekey"></a>

```json
"password"
```

<h2 id="tocS_ExtendedKeyUsageName">ExtendedKeyUsageName</h2>
<!-- backwards compatibility -->
<a id="schemaextendedkeyusagename"></a>
<a id="schema_ExtendedKeyUsageName"></a>
<a id="tocSextendedkeyusagename"></a>
<a id="tocsextendedkeyusagename"></a>

```json
"TLS_WEB_SERVER_AUTHENTICATION"
```

<h2 id="tocS_ExtendedKeyUsage">ExtendedKeyUsage</h2>
<!-- backwards compatibility -->
<a id="schemaextendedkeyusage"></a>
<a id="schema_ExtendedKeyUsage"></a>
<a id="tocSextendedkeyusage"></a>
<a id="tocsextendedkeyusage"></a>

```json
{
  "Name": {},
  "OID": {}
}
```

The Extended Key Usage X.509 v3 extension defines one or more purposes for which the public key can be used. This is in addition to or in place of the basic purposes specified by the Key Usage extension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|OID|object|false|none|none|

<h2 id="tocS_ExtendedKeyUsageFilterList">ExtendedKeyUsageFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaextendedkeyusagefilterlist"></a>
<a id="schema_ExtendedKeyUsageFilterList"></a>
<a id="tocSextendedkeyusagefilterlist"></a>
<a id="tocsextendedkeyusagefilterlist"></a>

```json
[
  "TLS_WEB_SERVER_AUTHENTICATION"
]
```

<h2 id="tocS_KeyUsageFilterList">KeyUsageFilterList</h2>
<!-- backwards compatibility -->
<a id="schemakeyusagefilterlist"></a>
<a id="schema_KeyUsageFilterList"></a>
<a id="tocSkeyusagefilterlist"></a>
<a id="tocskeyusagefilterlist"></a>

```json
[
  "DIGITAL_SIGNATURE"
]
```

<h2 id="tocS_KeyAlgorithmList">KeyAlgorithmList</h2>
<!-- backwards compatibility -->
<a id="schemakeyalgorithmlist"></a>
<a id="schema_KeyAlgorithmList"></a>
<a id="tocSkeyalgorithmlist"></a>
<a id="tocskeyalgorithmlist"></a>

```json
[
  "RSA_1024"
]
```

<h2 id="tocS_Filters">Filters</h2>
<!-- backwards compatibility -->
<a id="schemafilters"></a>
<a id="schema_Filters"></a>
<a id="tocSfilters"></a>
<a id="tocsfilters"></a>

```json
{
  "extendedKeyUsage": {},
  "keyUsage": {},
  "keyTypes": {}
}
```

This structure can be used in the <a>ListCertificates</a> action to filter the output of the certificate list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extendedKeyUsage|object|false|none|none|
|keyUsage|object|false|none|none|
|keyTypes|object|false|none|none|

<h2 id="tocS_IdempotencyToken">IdempotencyToken</h2>
<!-- backwards compatibility -->
<a id="schemaidempotencytoken"></a>
<a id="schema_IdempotencyToken"></a>
<a id="tocSidempotencytoken"></a>
<a id="tocsidempotencytoken"></a>

```json
"string"
```

<h2 id="tocS_PrivateKeyBlob">PrivateKeyBlob</h2>
<!-- backwards compatibility -->
<a id="schemaprivatekeyblob"></a>
<a id="schema_PrivateKeyBlob"></a>
<a id="tocSprivatekeyblob"></a>
<a id="tocsprivatekeyblob"></a>

```json
"password"
```

<h2 id="tocS_KeyUsageName">KeyUsageName</h2>
<!-- backwards compatibility -->
<a id="schemakeyusagename"></a>
<a id="schema_KeyUsageName"></a>
<a id="tocSkeyusagename"></a>
<a id="tocskeyusagename"></a>

```json
"DIGITAL_SIGNATURE"
```

<h2 id="tocS_KeyUsage">KeyUsage</h2>
<!-- backwards compatibility -->
<a id="schemakeyusage"></a>
<a id="schema_KeyUsage"></a>
<a id="tocSkeyusage"></a>
<a id="tocskeyusage"></a>

```json
{
  "Name": {}
}
```

The Key Usage X.509 v3 extension defines the purpose of the public key contained in the certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
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

<h2 id="tocS_SortBy">SortBy</h2>
<!-- backwards compatibility -->
<a id="schemasortby"></a>
<a id="schema_SortBy"></a>
<a id="tocSsortby"></a>
<a id="tocssortby"></a>

```json
"CREATED_AT"
```

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"ASCENDING"
```

<h2 id="tocS_PcaArn">PcaArn</h2>
<!-- backwards compatibility -->
<a id="schemapcaarn"></a>
<a id="schema_PcaArn"></a>
<a id="tocSpcaarn"></a>
<a id="tocspcaarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_RecordType">RecordType</h2>
<!-- backwards compatibility -->
<a id="schemarecordtype"></a>
<a id="schema_RecordType"></a>
<a id="tocSrecordtype"></a>
<a id="tocsrecordtype"></a>

```json
"CNAME"
```

<h2 id="tocS_RenewalStatus">RenewalStatus</h2>
<!-- backwards compatibility -->
<a id="schemarenewalstatus"></a>
<a id="schema_RenewalStatus"></a>
<a id="tocSrenewalstatus"></a>
<a id="tocsrenewalstatus"></a>

```json
"PENDING_AUTO_RENEWAL"
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

A key-value pair that identifies or specifies metadata about an ACM resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|false|none|none|
