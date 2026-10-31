<h1 id="aws-certificate-manager-private-certificate-authority">AWS Certificate Manager Private Certificate Authority v2017-08-22</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>This is the <i>Amazon Web Services Private Certificate Authority API Reference</i>. It provides descriptions, syntax, and usage examples for each of the actions and data types involved in creating and managing a private certificate authority (CA) for your organization.</p> <p>The documentation for each action shows the API request parameters and the JSON response. Alternatively, you can use one of the Amazon Web Services SDKs to access an API that is tailored to the programming language or platform that you prefer. For more information, see <a href="https://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p> <p>Each Amazon Web Services Private CA API operation has a quota that determines the number of times the operation can be called per second. Amazon Web Services Private CA throttles API requests at different rates depending on the operation. Throttling means that Amazon Web Services Private CA rejects an otherwise valid request because the request exceeds the operation's quota for the number of requests per second. When a request is throttled, Amazon Web Services Private CA returns a <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/CommonErrors.html">ThrottlingException</a> error. Amazon Web Services Private CA does not guarantee a minimum request rate for APIs. </p> <p>To see an up-to-date list of your Amazon Web Services Private CA quotas, or to request a quota increase, log into your Amazon Web Services account and visit the <a href="https://console.aws.amazon.com/servicequotas/">Service Quotas</a> console.</p>

Base URLs:

* <a href="http://acm-pca.us-east-1.amazonaws.com">http://acm-pca.us-east-1.amazonaws.com</a> - The ACM-PCA multi-region endpoint

* <a href="https://acm-pca.us-east-1.amazonaws.com">https://acm-pca.us-east-1.amazonaws.com</a> - The ACM-PCA multi-region endpoint

* <a href="http://acm-pca.cn-north-1.amazonaws.com.cn">http://acm-pca.cn-north-1.amazonaws.com.cn</a> - The ACM-PCA endpoint for China (Beijing) and China (Ningxia)

* <a href="https://acm-pca.cn-north-1.amazonaws.com.cn">https://acm-pca.cn-north-1.amazonaws.com.cn</a> - The ACM-PCA endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/acm-pca/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-certificate-manager-private-certificate-authority-default">Default</h1>

## CreateCertificateAuthority

<a id="opIdCreateCertificateAuthority"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.CreateCertificateAuthority' \
  -d '{
    "CertificateAuthorityConfiguration": {
      "KeyAlgorithm": {},
      "SigningAlgorithm": {},
      "Subject": {
        "Country": {},
        "Organization": {},
        "OrganizationalUnit": {},
        "DistinguishedNameQualifier": {},
        "State": {},
        "CommonName": {},
        "SerialNumber": {},
        "Locality": {},
        "Title": {},
        "Surname": {},
        "GivenName": {},
        "Initials": {},
        "Pseudonym": {},
        "GenerationQualifier": {},
        "CustomAttributes": {}
      },
      "CsrExtensions": {
        "KeyUsage": {
          "DigitalSignature": {},
          "NonRepudiation": {},
          "KeyEncipherment": {},
          "DataEncipherment": {},
          "KeyAgreement": {},
          "KeyCertSign": {},
          "CRLSign": {},
          "EncipherOnly": {},
          "DecipherOnly": {}
        },
        "SubjectInformationAccess": {}
      }
    },
    "RevocationConfiguration": {
      "CrlConfiguration": {
        "Enabled": {},
        "ExpirationInDays": {},
        "CustomCname": {},
        "S3BucketName": {},
        "S3ObjectAcl": {}
      },
      "OcspConfiguration": {
        "Enabled": {},
        "OcspCustomCname": {}
      }
    },
    "CertificateAuthorityType": {},
    "IdempotencyToken": {},
    "KeyStorageSecurityStandard": {},
    "Tags": {},
    "UsageMode": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority`

<p>Creates a root or subordinate private certificate authority (CA). You must specify the CA configuration, an optional configuration for Online Certificate Status Protocol (OCSP) and/or a certificate revocation list (CRL), the CA type, and an optional idempotency token to avoid accidental creation of multiple CAs. The CA configuration specifies the name of the algorithm and key size to be used to create the CA private key, the type of signing algorithm that the CA uses, and X.500 subject information. The OCSP configuration can optionally specify a custom URL for the OCSP responder. The CRL configuration specifies the CRL expiration period in days (the validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME alias for the S3 bucket that is included in certificates issued by the CA. If successful, this action returns the Amazon Resource Name (ARN) of the CA.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#crl-encryption">Encrypting Your CRLs</a>.</p>

> Body parameter

```json
{
  "CertificateAuthorityConfiguration": {
    "KeyAlgorithm": {},
    "SigningAlgorithm": {},
    "Subject": {
      "Country": {},
      "Organization": {},
      "OrganizationalUnit": {},
      "DistinguishedNameQualifier": {},
      "State": {},
      "CommonName": {},
      "SerialNumber": {},
      "Locality": {},
      "Title": {},
      "Surname": {},
      "GivenName": {},
      "Initials": {},
      "Pseudonym": {},
      "GenerationQualifier": {},
      "CustomAttributes": {}
    },
    "CsrExtensions": {
      "KeyUsage": {
        "DigitalSignature": {},
        "NonRepudiation": {},
        "KeyEncipherment": {},
        "DataEncipherment": {},
        "KeyAgreement": {},
        "KeyCertSign": {},
        "CRLSign": {},
        "EncipherOnly": {},
        "DecipherOnly": {}
      },
      "SubjectInformationAccess": {}
    }
  },
  "RevocationConfiguration": {
    "CrlConfiguration": {
      "Enabled": {},
      "ExpirationInDays": {},
      "CustomCname": {},
      "S3BucketName": {},
      "S3ObjectAcl": {}
    },
    "OcspConfiguration": {
      "Enabled": {},
      "OcspCustomCname": {}
    }
  },
  "CertificateAuthorityType": {},
  "IdempotencyToken": {},
  "KeyStorageSecurityStandard": {},
  "Tags": {},
  "UsageMode": {}
}
```

<h3 id="createcertificateauthority-parameters">Parameters</h3>

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
|body|body|[CreateCertificateAuthorityRequest](#schemacreatecertificateauthorityrequest)|true|none|
|» CertificateAuthorityConfiguration|body|object|true|none|
|» » KeyAlgorithm|body|object|true|none|
|» » SigningAlgorithm|body|object|true|none|
|» » Subject|body|object|true|none|
|» » » Country|body|object|false|none|
|» » » Organization|body|object|false|none|
|» » » OrganizationalUnit|body|object|false|none|
|» » » DistinguishedNameQualifier|body|object|false|none|
|» » » State|body|object|false|none|
|» » » CommonName|body|object|false|none|
|» » » SerialNumber|body|object|false|none|
|» » » Locality|body|object|false|none|
|» » » Title|body|object|false|none|
|» » » Surname|body|object|false|none|
|» » » GivenName|body|object|false|none|
|» » » Initials|body|object|false|none|
|» » » Pseudonym|body|object|false|none|
|» » » GenerationQualifier|body|object|false|none|
|» » » CustomAttributes|body|object|false|none|
|» » CsrExtensions|body|object|false|none|
|» » » KeyUsage|body|object|false|none|
|» » » » DigitalSignature|body|object|false|none|
|» » » » NonRepudiation|body|object|false|none|
|» » » » KeyEncipherment|body|object|false|none|
|» » » » DataEncipherment|body|object|false|none|
|» » » » KeyAgreement|body|object|false|none|
|» » » » KeyCertSign|body|object|false|none|
|» » » » CRLSign|body|object|false|none|
|» » » » EncipherOnly|body|object|false|none|
|» » » » DecipherOnly|body|object|false|none|
|» » » SubjectInformationAccess|body|object|false|none|
|» RevocationConfiguration|body|object|false|none|
|» » CrlConfiguration|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » ExpirationInDays|body|object|false|none|
|» » » CustomCname|body|object|false|none|
|» » » S3BucketName|body|object|false|none|
|» » » S3ObjectAcl|body|object|false|none|
|» » OcspConfiguration|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » OcspCustomCname|body|object|false|none|
|» CertificateAuthorityType|body|object|true|none|
|» IdempotencyToken|body|object|false|none|
|» KeyStorageSecurityStandard|body|object|false|none|
|» Tags|body|object|false|none|
|» UsageMode|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.CreateCertificateAuthority|

> Example responses

> 200 Response

```json
{
  "CertificateAuthorityArn": {}
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

<h3 id="createcertificateauthority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCertificateAuthorityResponse](#schemacreatecertificateauthorityresponse)|
|480|480|InvalidArgsException|[InvalidArgsException](#schemainvalidargsexception)|
|481|481|InvalidPolicyException|[InvalidPolicyException](#schemainvalidpolicyexception)|
|482|482|InvalidTagException|[InvalidTagException](#schemainvalidtagexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCertificateAuthorityAuditReport

<a id="opIdCreateCertificateAuthorityAuditReport"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.CreateCertificateAuthorityAuditReport' \
  -d '{
    "CertificateAuthorityArn": {},
    "S3BucketName": {},
    "AuditReportResponseFormat": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport`

<p>Creates an audit report that lists every time that your CA private key is used. The report is saved in the Amazon S3 bucket that you specify on input. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> actions use the private key. </p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaAuditReport.html#audit-report-encryption">Encrypting Your Audit Reports</a>.</p> <note> <p>You can generate a maximum of one report every 30 minutes.</p> </note>

> Body parameter

```json
{
  "CertificateAuthorityArn": {},
  "S3BucketName": {},
  "AuditReportResponseFormat": {}
}
```

<h3 id="createcertificateauthorityauditreport-parameters">Parameters</h3>

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
|body|body|[CreateCertificateAuthorityAuditReportRequest](#schemacreatecertificateauthorityauditreportrequest)|true|none|
|» CertificateAuthorityArn|body|object|true|none|
|» S3BucketName|body|object|true|none|
|» AuditReportResponseFormat|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.CreateCertificateAuthorityAuditReport|

> Example responses

> 200 Response

```json
{
  "AuditReportId": {},
  "S3Key": {}
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

<h3 id="createcertificateauthorityauditreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCertificateAuthorityAuditReportResponse](#schemacreatecertificateauthorityauditreportresponse)|
|480|480|RequestInProgressException|[RequestInProgressException](#schemarequestinprogressexception)|
|481|481|RequestFailedException|[RequestFailedException](#schemarequestfailedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|484|484|InvalidArgsException|[InvalidArgsException](#schemainvalidargsexception)|
|485|485|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePermission

<a id="opIdCreatePermission"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.CreatePermission' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.CreatePermission' \
  -d '{
    "CertificateAuthorityArn": {},
    "Principal": {},
    "SourceAccount": {},
    "Actions": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.CreatePermission`

<p>Grants one or more permissions on a private CA to the Certificate Manager (ACM) service principal (<code>acm.amazonaws.com</code>). These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA.</p> <p>You can list current permissions with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action and revoke them with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action.</p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>

> Body parameter

```json
{
  "CertificateAuthorityArn": {},
  "Principal": {},
  "SourceAccount": {},
  "Actions": {}
}
```

<h3 id="createpermission-parameters">Parameters</h3>

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
|body|body|[CreatePermissionRequest](#schemacreatepermissionrequest)|true|none|
|» CertificateAuthorityArn|body|object|true|none|
|» Principal|body|object|true|none|
|» SourceAccount|body|object|false|none|
|» Actions|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.CreatePermission|

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

<h3 id="createpermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|PermissionAlreadyExistsException|[PermissionAlreadyExistsException](#schemapermissionalreadyexistsexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|485|485|RequestFailedException|[RequestFailedException](#schemarequestfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCertificateAuthority

<a id="opIdDeleteCertificateAuthority"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.DeleteCertificateAuthority' \
  -d '{
    "CertificateAuthorityArn": {},
    "PermanentDeletionTimeInDays": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority`

<p>Deletes a private certificate authority (CA). You must provide the Amazon Resource Name (ARN) of the private CA that you want to delete. You can find the ARN by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. </p> <note> <p>Deleting a CA will invalidate other CAs and certificates below it in your CA hierarchy.</p> </note> <p>Before you can delete a CA that you have created and activated, you must disable it. To do this, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action and set the <b>CertificateAuthorityStatus</b> parameter to <code>DISABLED</code>. </p> <p>Additionally, you can delete a CA if you are waiting for it to be created (that is, the status of the CA is <code>CREATING</code>). You can also delete it if the CA has been created but you haven't yet imported the signed certificate into Amazon Web Services Private CA (that is, the status of the CA is <code>PENDING_CERTIFICATE</code>). </p> <p>When you successfully call <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a>, the CA's status changes to <code>DELETED</code>. However, the CA won't be permanently deleted until the restoration period has passed. By default, if you do not set the <code>PermanentDeletionTimeInDays</code> parameter, the CA remains restorable for 30 days. You can set the parameter from 7 to 30 days. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> action returns the time remaining in the restoration window of a private CA in the <code>DELETED</code> state. To restore an eligible CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RestoreCertificateAuthority.html">RestoreCertificateAuthority</a> action.</p>

> Body parameter

```json
{
  "CertificateAuthorityArn": {},
  "PermanentDeletionTimeInDays": {}
}
```

<h3 id="deletecertificateauthority-parameters">Parameters</h3>

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
|body|body|[DeleteCertificateAuthorityRequest](#schemadeletecertificateauthorityrequest)|true|none|
|» CertificateAuthorityArn|body|object|true|none|
|» PermanentDeletionTimeInDays|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.DeleteCertificateAuthority|

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

<h3 id="deletecertificateauthority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|483|483|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePermission

<a id="opIdDeletePermission"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.DeletePermission' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.DeletePermission' \
  -d '{
    "CertificateAuthorityArn": {},
    "Principal": {},
    "SourceAccount": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.DeletePermission`

<p>Revokes permissions on a private CA granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). </p> <p>These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. If you revoke these permissions, ACM will no longer renew the affected certificates automatically.</p> <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and listed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action. </p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>

> Body parameter

```json
{
  "CertificateAuthorityArn": {},
  "Principal": {},
  "SourceAccount": {}
}
```

<h3 id="deletepermission-parameters">Parameters</h3>

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
|body|body|[DeletePermissionRequest](#schemadeletepermissionrequest)|true|none|
|» CertificateAuthorityArn|body|object|true|none|
|» Principal|body|object|true|none|
|» SourceAccount|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.DeletePermission|

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

<h3 id="deletepermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|483|483|RequestFailedException|[RequestFailedException](#schemarequestfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePolicy

<a id="opIdDeletePolicy"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.DeletePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.DeletePolicy' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.DeletePolicy`

<p>Deletes the resource-based policy attached to a private CA. Deletion will remove any access that the policy has granted. If there is no policy attached to the private CA, this action will return successful.</p> <p>If you delete a policy that was applied through Amazon Web Services Resource Access Manager (RAM), the CA will be removed from all shares in which it was included. </p> <p>The Certificate Manager Service Linked Role that the policy supports is not affected when you delete the policy. </p> <p>The current policy can be shown with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="deletepolicy-parameters">Parameters</h3>

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
|body|body|[DeletePolicyRequest](#schemadeletepolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.DeletePolicy|

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

<h3 id="deletepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|483|483|LockoutPreventedException|[LockoutPreventedException](#schemalockoutpreventedexception)|
|484|484|RequestFailedException|[RequestFailedException](#schemarequestfailedexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCertificateAuthority

<a id="opIdDescribeCertificateAuthority"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.DescribeCertificateAuthority' \
  -d '{
    "CertificateAuthorityArn": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority`

<p>Lists information about your private certificate authority (CA) or one that has been shared with you. You specify the private CA on input by its ARN (Amazon Resource Name). The output contains the status of your CA. This can be any of the following: </p> <ul> <li> <p> <code>CREATING</code> - Amazon Web Services Private CA is creating your private certificate authority.</p> </li> <li> <p> <code>PENDING_CERTIFICATE</code> - The certificate is pending. You must use your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA to sign your private CA CSR and then import it into Amazon Web Services Private CA. </p> </li> <li> <p> <code>ACTIVE</code> - Your private CA is active.</p> </li> <li> <p> <code>DISABLED</code> - Your private CA has been disabled.</p> </li> <li> <p> <code>EXPIRED</code> - Your private CA certificate has expired.</p> </li> <li> <p> <code>FAILED</code> - Your private CA has failed. Your CA can fail because of problems such a network outage or back-end Amazon Web Services failure or other errors. A failed CA can never return to the pending state. You must create a new CA. </p> </li> <li> <p> <code>DELETED</code> - Your private CA is within the restoration period, after which it is permanently deleted. The length of time remaining in the CA's restoration period is also included in this action's output.</p> </li> </ul>

> Body parameter

```json
{
  "CertificateAuthorityArn": {}
}
```

<h3 id="describecertificateauthority-parameters">Parameters</h3>

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
|body|body|[DescribeCertificateAuthorityRequest](#schemadescribecertificateauthorityrequest)|true|none|
|» CertificateAuthorityArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.DescribeCertificateAuthority|

> Example responses

> 200 Response

```json
{
  "CertificateAuthority": {
    "Arn": {},
    "OwnerAccount": {},
    "CreatedAt": {},
    "LastStateChangeAt": {},
    "Type": {},
    "Serial": {},
    "Status": {},
    "NotBefore": {},
    "NotAfter": {},
    "FailureReason": {},
    "CertificateAuthorityConfiguration": {
      "KeyAlgorithm": {},
      "SigningAlgorithm": {},
      "Subject": {
        "Country": {},
        "Organization": {},
        "OrganizationalUnit": {},
        "DistinguishedNameQualifier": {},
        "State": {},
        "CommonName": {},
        "SerialNumber": {},
        "Locality": {},
        "Title": {},
        "Surname": {},
        "GivenName": {},
        "Initials": {},
        "Pseudonym": {},
        "GenerationQualifier": {},
        "CustomAttributes": {}
      },
      "CsrExtensions": {
        "KeyUsage": {
          "DigitalSignature": {},
          "NonRepudiation": {},
          "KeyEncipherment": {},
          "DataEncipherment": {},
          "KeyAgreement": {},
          "KeyCertSign": {},
          "CRLSign": {},
          "EncipherOnly": {},
          "DecipherOnly": {}
        },
        "SubjectInformationAccess": {}
      }
    },
    "RevocationConfiguration": {
      "CrlConfiguration": {
        "Enabled": {},
        "ExpirationInDays": {},
        "CustomCname": {},
        "S3BucketName": {},
        "S3ObjectAcl": {}
      },
      "OcspConfiguration": {
        "Enabled": {},
        "OcspCustomCname": {}
      }
    },
    "RestorableUntil": {},
    "KeyStorageSecurityStandard": {},
    "UsageMode": {}
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

<h3 id="describecertificateauthority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCertificateAuthorityResponse](#schemadescribecertificateauthorityresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCertificateAuthorityAuditReport

<a id="opIdDescribeCertificateAuthorityAuditReport"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.DescribeCertificateAuthorityAuditReport' \
  -d '{
    "CertificateAuthorityArn": {},
    "AuditReportId": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport`

Lists information about a specific audit report created by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action or the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> action. 

> Body parameter

```json
{
  "CertificateAuthorityArn": {},
  "AuditReportId": {}
}
```

<h3 id="describecertificateauthorityauditreport-parameters">Parameters</h3>

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
|body|body|[DescribeCertificateAuthorityAuditReportRequest](#schemadescribecertificateauthorityauditreportrequest)|true|none|
|» CertificateAuthorityArn|body|object|true|none|
|» AuditReportId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.DescribeCertificateAuthorityAuditReport|

> Example responses

> 200 Response

```json
{
  "AuditReportStatus": {},
  "S3BucketName": {},
  "S3Key": {},
  "CreatedAt": {}
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

<h3 id="describecertificateauthorityauditreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCertificateAuthorityAuditReportResponse](#schemadescribecertificateauthorityauditreportresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|InvalidArgsException|[InvalidArgsException](#schemainvalidargsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCertificate

<a id="opIdGetCertificate"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.GetCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.GetCertificate' \
  -d '{
    "CertificateAuthorityArn": {},
    "CertificateArn": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.GetCertificate`

Retrieves a certificate from your private CA or one that has been shared with you. The ARN of the certificate is returned when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action. You must specify both the ARN of your private CA and the ARN of the issued certificate when calling the <b>GetCertificate</b> action. You can retrieve the certificate if it is in the <b>ISSUED</b> state. You can call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action to create a report that contains information about all of the certificates issued and revoked by your private CA. 

> Body parameter

```json
{
  "CertificateAuthorityArn": {},
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
|» CertificateAuthorityArn|body|object|true|none|
|» CertificateArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.GetCertificate|

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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCertificateResponse](#schemagetcertificateresponse)|
|480|480|RequestInProgressException|[RequestInProgressException](#schemarequestinprogressexception)|
|481|481|RequestFailedException|[RequestFailedException](#schemarequestfailedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|484|484|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCertificateAuthorityCertificate

<a id="opIdGetCertificateAuthorityCertificate"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.GetCertificateAuthorityCertificate' \
  -d '{
    "CertificateAuthorityArn": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate`

Retrieves the certificate and certificate chain for your private certificate authority (CA) or one that has been shared with you. Both the certificate and the chain are base64 PEM-encoded. The chain does not include the CA certificate. Each certificate in the chain signs the one before it. 

> Body parameter

```json
{
  "CertificateAuthorityArn": {}
}
```

<h3 id="getcertificateauthoritycertificate-parameters">Parameters</h3>

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
|body|body|[GetCertificateAuthorityCertificateRequest](#schemagetcertificateauthoritycertificaterequest)|true|none|
|» CertificateAuthorityArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.GetCertificateAuthorityCertificate|

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

<h3 id="getcertificateauthoritycertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCertificateAuthorityCertificateResponse](#schemagetcertificateauthoritycertificateresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|482|482|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCertificateAuthorityCsr

<a id="opIdGetCertificateAuthorityCsr"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.GetCertificateAuthorityCsr' \
  -d '{
    "CertificateAuthorityArn": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr`

Retrieves the certificate signing request (CSR) for your private certificate authority (CA). The CSR is created when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. Sign the CSR with your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA. Then import the signed certificate back into Amazon Web Services Private CA by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action. The CSR is returned as a base64 PEM-encoded string. 

> Body parameter

```json
{
  "CertificateAuthorityArn": {}
}
```

<h3 id="getcertificateauthoritycsr-parameters">Parameters</h3>

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
|body|body|[GetCertificateAuthorityCsrRequest](#schemagetcertificateauthoritycsrrequest)|true|none|
|» CertificateAuthorityArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.GetCertificateAuthorityCsr|

> Example responses

> 200 Response

```json
{
  "Csr": {}
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

<h3 id="getcertificateauthoritycsr-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCertificateAuthorityCsrResponse](#schemagetcertificateauthoritycsrresponse)|
|480|480|RequestInProgressException|[RequestInProgressException](#schemarequestinprogressexception)|
|481|481|RequestFailedException|[RequestFailedException](#schemarequestfailedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|484|484|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPolicy

<a id="opIdGetPolicy"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.GetPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.GetPolicy' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.GetPolicy`

<p>Retrieves the resource-based policy attached to a private CA. If either the private CA resource or the policy cannot be found, this action returns a <code>ResourceNotFoundException</code>. </p> <p>The policy can be attached or updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="getpolicy-parameters">Parameters</h3>

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
|body|body|[GetPolicyRequest](#schemagetpolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.GetPolicy|

> Example responses

> 200 Response

```json
{
  "Policy": {}
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
|480|480|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|481|481|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|482|482|RequestFailedException|[RequestFailedException](#schemarequestfailedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportCertificateAuthorityCertificate

<a id="opIdImportCertificateAuthorityCertificate"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.ImportCertificateAuthorityCertificate' \
  -d '{
    "CertificateAuthorityArn": {},
    "Certificate": {},
    "CertificateChain": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate`

<p>Imports a signed private CA certificate into Amazon Web Services Private CA. This action is used when you are using a chain of trust whose root is located outside Amazon Web Services Private CA. Before you can call this action, the following preparations must in place:</p> <ol> <li> <p>In Amazon Web Services Private CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create the private CA that you plan to back with the imported certificate.</p> </li> <li> <p>Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCsr.html">GetCertificateAuthorityCsr</a> action to generate a certificate signing request (CSR).</p> </li> <li> <p>Sign the CSR using a root or intermediate CA hosted by either an on-premises PKI hierarchy or by a commercial CA.</p> </li> <li> <p>Create a certificate chain and copy the signed certificate and the certificate chain to your working directory.</p> </li> </ol> <p>Amazon Web Services Private CA supports three scenarios for installing a CA certificate:</p> <ul> <li> <p>Installing a certificate for a root CA hosted by Amazon Web Services Private CA.</p> </li> <li> <p>Installing a subordinate CA certificate whose parent authority is hosted by Amazon Web Services Private CA.</p> </li> <li> <p>Installing a subordinate CA certificate whose parent authority is externally hosted.</p> </li> </ul> <p>The following additional requirements apply when you import a CA certificate.</p> <ul> <li> <p>Only a self-signed certificate can be imported as a root CA.</p> </li> <li> <p>A self-signed certificate cannot be imported as a subordinate CA.</p> </li> <li> <p>Your certificate chain must not include the private CA certificate that you are importing.</p> </li> <li> <p>Your root CA must be the last certificate in your chain. The subordinate certificate, if any, that your root CA signed must be next to last. The subordinate certificate signed by the preceding subordinate CA must come next, and so on until your chain is built. </p> </li> <li> <p>The chain must be PEM-encoded.</p> </li> <li> <p>The maximum allowed size of a certificate is 32 KB.</p> </li> <li> <p>The maximum allowed size of a certificate chain is 2 MB.</p> </li> </ul> <p> <i>Enforcement of Critical Constraints</i> </p> <p>Amazon Web Services Private CA allows the following extensions to be marked critical in the imported CA certificate or chain.</p> <ul> <li> <p>Basic constraints (<i>must</i> be marked critical)</p> </li> <li> <p>Subject alternative names</p> </li> <li> <p>Key usage</p> </li> <li> <p>Extended key usage</p> </li> <li> <p>Authority key identifier</p> </li> <li> <p>Subject key identifier</p> </li> <li> <p>Issuer alternative name</p> </li> <li> <p>Subject directory attributes</p> </li> <li> <p>Subject information access</p> </li> <li> <p>Certificate policies</p> </li> <li> <p>Policy mappings</p> </li> <li> <p>Inhibit anyPolicy</p> </li> </ul> <p>Amazon Web Services Private CA rejects the following extensions when they are marked critical in an imported CA certificate or chain.</p> <ul> <li> <p>Name constraints</p> </li> <li> <p>Policy constraints</p> </li> <li> <p>CRL distribution points</p> </li> <li> <p>Authority information access</p> </li> <li> <p>Freshest CRL</p> </li> <li> <p>Any other extension</p> </li> </ul>

> Body parameter

```json
{
  "CertificateAuthorityArn": {},
  "Certificate": {},
  "CertificateChain": {}
}
```

<h3 id="importcertificateauthoritycertificate-parameters">Parameters</h3>

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
|body|body|[ImportCertificateAuthorityCertificateRequest](#schemaimportcertificateauthoritycertificaterequest)|true|none|
|» CertificateAuthorityArn|body|object|true|none|
|» Certificate|body|object|true|none|
|» CertificateChain|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.ImportCertificateAuthorityCertificate|

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

> 488 Response

```json
null
```

<h3 id="importcertificateauthoritycertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|RequestInProgressException|[RequestInProgressException](#schemarequestinprogressexception)|
|482|482|RequestFailedException|[RequestFailedException](#schemarequestfailedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|486|486|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|487|487|MalformedCertificateException|[MalformedCertificateException](#schemamalformedcertificateexception)|
|488|488|CertificateMismatchException|[CertificateMismatchException](#schemacertificatemismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## IssueCertificate

<a id="opIdIssueCertificate"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.IssueCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.IssueCertificate' \
  -d '{
    "ApiPassthrough": {
      "Extensions": {
        "CertificatePolicies": {},
        "ExtendedKeyUsage": {},
        "KeyUsage": {
          "DigitalSignature": {},
          "NonRepudiation": {},
          "KeyEncipherment": {},
          "DataEncipherment": {},
          "KeyAgreement": {},
          "KeyCertSign": {},
          "CRLSign": {},
          "EncipherOnly": {},
          "DecipherOnly": {}
        },
        "SubjectAlternativeNames": {},
        "CustomExtensions": {}
      },
      "Subject": {
        "Country": {},
        "Organization": {},
        "OrganizationalUnit": {},
        "DistinguishedNameQualifier": {},
        "State": {},
        "CommonName": {},
        "SerialNumber": {},
        "Locality": {},
        "Title": {},
        "Surname": {},
        "GivenName": {},
        "Initials": {},
        "Pseudonym": {},
        "GenerationQualifier": {},
        "CustomAttributes": {}
      }
    },
    "CertificateAuthorityArn": {},
    "Csr": {},
    "SigningAlgorithm": {},
    "TemplateArn": {},
    "Validity": {
      "Value": {},
      "Type": {}
    },
    "ValidityNotBefore": {
      "Value": {},
      "Type": {}
    },
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.IssueCertificate`

<p>Uses your private certificate authority (CA), or one that has been shared with you, to issue a client certificate. This action returns the Amazon Resource Name (ARN) of the certificate. You can retrieve the certificate by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificate.html">GetCertificate</a> action and specifying the ARN. </p> <note> <p>You cannot use the ACM <b>ListCertificateAuthorities</b> action to retrieve the ARNs of the certificates that you issue by using Amazon Web Services Private CA.</p> </note>

> Body parameter

```json
{
  "ApiPassthrough": {
    "Extensions": {
      "CertificatePolicies": {},
      "ExtendedKeyUsage": {},
      "KeyUsage": {
        "DigitalSignature": {},
        "NonRepudiation": {},
        "KeyEncipherment": {},
        "DataEncipherment": {},
        "KeyAgreement": {},
        "KeyCertSign": {},
        "CRLSign": {},
        "EncipherOnly": {},
        "DecipherOnly": {}
      },
      "SubjectAlternativeNames": {},
      "CustomExtensions": {}
    },
    "Subject": {
      "Country": {},
      "Organization": {},
      "OrganizationalUnit": {},
      "DistinguishedNameQualifier": {},
      "State": {},
      "CommonName": {},
      "SerialNumber": {},
      "Locality": {},
      "Title": {},
      "Surname": {},
      "GivenName": {},
      "Initials": {},
      "Pseudonym": {},
      "GenerationQualifier": {},
      "CustomAttributes": {}
    }
  },
  "CertificateAuthorityArn": {},
  "Csr": {},
  "SigningAlgorithm": {},
  "TemplateArn": {},
  "Validity": {
    "Value": {},
    "Type": {}
  },
  "ValidityNotBefore": {
    "Value": {},
    "Type": {}
  },
  "IdempotencyToken": {}
}
```

<h3 id="issuecertificate-parameters">Parameters</h3>

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
|body|body|[IssueCertificateRequest](#schemaissuecertificaterequest)|true|none|
|» ApiPassthrough|body|object|false|none|
|» » Extensions|body|object|false|none|
|» » » CertificatePolicies|body|object|false|none|
|» » » ExtendedKeyUsage|body|object|false|none|
|» » » KeyUsage|body|[KeyUsage](#schemakeyusage)|false|Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.|
|» » » SubjectAlternativeNames|body|object|false|none|
|» » » CustomExtensions|body|object|false|none|
|» » Subject|body|[ASN1Subject](#schemaasn1subject)|false|Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject </code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.|
|» CertificateAuthorityArn|body|object|true|none|
|» Csr|body|object|true|none|
|» SigningAlgorithm|body|object|true|none|
|» TemplateArn|body|object|false|none|
|» Validity|body|object|true|none|
|» » Value|body|object|true|none|
|» » Type|body|object|true|none|
|» ValidityNotBefore|body|object|false|none|
|» » Value|body|object|true|none|
|» » Type|body|object|true|none|
|» IdempotencyToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.IssueCertificate|

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

<h3 id="issuecertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IssueCertificateResponse](#schemaissuecertificateresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|483|483|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|484|484|InvalidArgsException|[InvalidArgsException](#schemainvalidargsexception)|
|485|485|MalformedCSRException|[MalformedCSRException](#schemamalformedcsrexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCertificateAuthorities

<a id="opIdListCertificateAuthorities"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.ListCertificateAuthorities' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "ResourceOwner": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities`

Lists the private certificate authorities that you created by using the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "ResourceOwner": {}
}
```

<h3 id="listcertificateauthorities-parameters">Parameters</h3>

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
|body|body|[ListCertificateAuthoritiesRequest](#schemalistcertificateauthoritiesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» ResourceOwner|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.ListCertificateAuthorities|

> Example responses

> 200 Response

```json
{
  "CertificateAuthorities": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listcertificateauthorities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCertificateAuthoritiesResponse](#schemalistcertificateauthoritiesresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPermissions

<a id="opIdListPermissions"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.ListPermissions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.ListPermissions' \
  -d '{
    "CertificateAuthorityArn": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.ListPermissions`

<p>List all permissions on a private CA, if any, granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). </p> <p>These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. </p> <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and revoked with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action.</p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>

> Body parameter

```json
{
  "CertificateAuthorityArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listpermissions-parameters">Parameters</h3>

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
|body|body|[ListPermissionsRequest](#schemalistpermissionsrequest)|true|none|
|» CertificateAuthorityArn|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.ListPermissions|

> Example responses

> 200 Response

```json
{
  "Permissions": {},
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

<h3 id="listpermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPermissionsResponse](#schemalistpermissionsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|484|484|RequestFailedException|[RequestFailedException](#schemarequestfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTags

<a id="opIdListTags"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.ListTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.ListTags' \
  -d '{
    "CertificateAuthorityArn": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.ListTags`

Lists the tags, if any, that are associated with your private CA or one that has been shared with you. Tags are labels that you can use to identify and organize your CAs. Each tag consists of a key and an optional value. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a> action to add one or more tags to your CA. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action to remove tags. 

> Body parameter

```json
{
  "CertificateAuthorityArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listtags-parameters">Parameters</h3>

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
|body|body|[ListTagsRequest](#schemalisttagsrequest)|true|none|
|» CertificateAuthorityArn|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.ListTags|

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

<h3 id="listtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsResponse](#schemalisttagsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutPolicy

<a id="opIdPutPolicy"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.PutPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.PutPolicy' \
  -d '{
    "ResourceArn": {},
    "Policy": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.PutPolicy`

<p>Attaches a resource-based policy to a private CA. </p> <p>A policy can also be applied by sharing a private CA through Amazon Web Services Resource Access Manager (RAM). For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> <p>The policy can be displayed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>

> Body parameter

```json
{
  "ResourceArn": {},
  "Policy": {}
}
```

<h3 id="putpolicy-parameters">Parameters</h3>

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
|body|body|[PutPolicyRequest](#schemaputpolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|
|» Policy|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.PutPolicy|

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

<h3 id="putpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|483|483|InvalidPolicyException|[InvalidPolicyException](#schemainvalidpolicyexception)|
|484|484|LockoutPreventedException|[LockoutPreventedException](#schemalockoutpreventedexception)|
|485|485|RequestFailedException|[RequestFailedException](#schemarequestfailedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RestoreCertificateAuthority

<a id="opIdRestoreCertificateAuthority"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.RestoreCertificateAuthority' \
  -d '{
    "CertificateAuthorityArn": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority`

Restores a certificate authority (CA) that is in the <code>DELETED</code> state. You can restore a CA during the period that you defined in the <b>PermanentDeletionTimeInDays</b> parameter of the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a> action. Currently, you can specify 7 to 30 days. If you did not specify a <b>PermanentDeletionTimeInDays</b> value, by default you can restore the CA at any time in a 30 day period. You can check the time remaining in the restoration period of a private CA in the <code>DELETED</code> state by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> or <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> actions. The status of a restored CA is set to its pre-deletion status when the <b>RestoreCertificateAuthority</b> action returns. To change its status to <code>ACTIVE</code>, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action. If the private CA was in the <code>PENDING_CERTIFICATE</code> state at deletion, you must use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import a certificate authority into the private CA before it can be activated. You cannot restore a CA after the restoration period has ended.

> Body parameter

```json
{
  "CertificateAuthorityArn": {}
}
```

<h3 id="restorecertificateauthority-parameters">Parameters</h3>

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
|body|body|[RestoreCertificateAuthorityRequest](#schemarestorecertificateauthorityrequest)|true|none|
|» CertificateAuthorityArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.RestoreCertificateAuthority|

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

<h3 id="restorecertificateauthority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|482|482|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RevokeCertificate

<a id="opIdRevokeCertificate"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.RevokeCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.RevokeCertificate' \
  -d '{
    "CertificateAuthorityArn": {},
    "CertificateSerial": {},
    "RevocationReason": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.RevokeCertificate`

<p>Revokes a certificate that was issued inside Amazon Web Services Private CA. If you enable a certificate revocation list (CRL) when you create or update your private CA, information about the revoked certificates will be included in the CRL. Amazon Web Services Private CA writes the CRL to an S3 bucket that you specify. A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason the CRL update fails, Amazon Web Services Private CA attempts makes further attempts every 15 minutes. With Amazon CloudWatch, you can create alarms for the metrics <code>CRLGenerated</code> and <code>MisconfiguredCRLBucket</code>. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCloudWatch.html">Supported CloudWatch Metrics</a>.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA also writes revocation information to the audit report. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a>.</p> <note> <p>You cannot revoke a root CA self-signed certificate.</p> </note>

> Body parameter

```json
{
  "CertificateAuthorityArn": {},
  "CertificateSerial": {},
  "RevocationReason": {}
}
```

<h3 id="revokecertificate-parameters">Parameters</h3>

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
|body|body|[RevokeCertificateRequest](#schemarevokecertificaterequest)|true|none|
|» CertificateAuthorityArn|body|object|true|none|
|» CertificateSerial|body|object|true|none|
|» RevocationReason|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.RevokeCertificate|

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

> 488 Response

```json
null
```

<h3 id="revokecertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|RequestAlreadyProcessedException|[RequestAlreadyProcessedException](#schemarequestalreadyprocessedexception)|
|487|487|RequestInProgressException|[RequestInProgressException](#schemarequestinprogressexception)|
|488|488|RequestFailedException|[RequestFailedException](#schemarequestfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagCertificateAuthority

<a id="opIdTagCertificateAuthority"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.TagCertificateAuthority' \
  -d '{
    "CertificateAuthorityArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority`

<p>Adds one or more tags to your private CA. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one private CA if you want to identify a specific characteristic of that CA, or you can apply the same tag to multiple private CAs if you want to filter for a common relationship among those CAs. To remove one or more tags, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are associated with your CA. </p> <note> <p>To attach tags to a private CA during the creation procedure, a CA administrator must first associate an inline IAM policy with the <code>CreateCertificateAuthority</code> action and explicitly allow tagging. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/auth-InlinePolicies.html#policy-tag-ca">Attaching tags to a CA at the time of creation</a>.</p> </note>

> Body parameter

```json
{
  "CertificateAuthorityArn": {},
  "Tags": {}
}
```

<h3 id="tagcertificateauthority-parameters">Parameters</h3>

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
|body|body|[TagCertificateAuthorityRequest](#schematagcertificateauthorityrequest)|true|none|
|» CertificateAuthorityArn|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.TagCertificateAuthority|

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

<h3 id="tagcertificateauthority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|483|483|InvalidTagException|[InvalidTagException](#schemainvalidtagexception)|
|484|484|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagCertificateAuthority

<a id="opIdUntagCertificateAuthority"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.UntagCertificateAuthority' \
  -d '{
    "CertificateAuthorityArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority`

Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this action, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a private CA, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a>. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are associated with your CA. 

> Body parameter

```json
{
  "CertificateAuthorityArn": {},
  "Tags": {}
}
```

<h3 id="untagcertificateauthority-parameters">Parameters</h3>

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
|body|body|[UntagCertificateAuthorityRequest](#schemauntagcertificateauthorityrequest)|true|none|
|» CertificateAuthorityArn|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.UntagCertificateAuthority|

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

<h3 id="untagcertificateauthority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|483|483|InvalidTagException|[InvalidTagException](#schemainvalidtagexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCertificateAuthority

<a id="opIdUpdateCertificateAuthority"></a>

> Code samples

```bash
curl 'https://acm-pca.us-east-1.amazonaws.com/#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ACMPrivateCA.UpdateCertificateAuthority' \
  -d '{
    "CertificateAuthorityArn": {},
    "RevocationConfiguration": {
      "CrlConfiguration": {
        "Enabled": {},
        "ExpirationInDays": {},
        "CustomCname": {},
        "S3BucketName": {},
        "S3ObjectAcl": {}
      },
      "OcspConfiguration": {
        "Enabled": {},
        "OcspCustomCname": {}
      }
    },
    "Status": {}
  }'
```

`POST /#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority`

<p>Updates the status or configuration of a private certificate authority (CA). Your private CA must be in the <code>ACTIVE</code> or <code>DISABLED</code> state before you can update it. You can disable a private CA that is in the <code>ACTIVE</code> state or make a CA that is in the <code>DISABLED</code> state active again.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note>

> Body parameter

```json
{
  "CertificateAuthorityArn": {},
  "RevocationConfiguration": {
    "CrlConfiguration": {
      "Enabled": {},
      "ExpirationInDays": {},
      "CustomCname": {},
      "S3BucketName": {},
      "S3ObjectAcl": {}
    },
    "OcspConfiguration": {
      "Enabled": {},
      "OcspCustomCname": {}
    }
  },
  "Status": {}
}
```

<h3 id="updatecertificateauthority-parameters">Parameters</h3>

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
|body|body|[UpdateCertificateAuthorityRequest](#schemaupdatecertificateauthorityrequest)|true|none|
|» CertificateAuthorityArn|body|object|true|none|
|» RevocationConfiguration|body|object|false|none|
|» » CrlConfiguration|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » ExpirationInDays|body|object|false|none|
|» » » CustomCname|body|object|false|none|
|» » » S3BucketName|body|object|false|none|
|» » » S3ObjectAcl|body|object|false|none|
|» » OcspConfiguration|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » OcspCustomCname|body|object|false|none|
|» Status|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ACMPrivateCA.UpdateCertificateAuthority|

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

<h3 id="updatecertificateauthority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidArgsException|[InvalidArgsException](#schemainvalidargsexception)|
|483|483|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|484|484|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|485|485|InvalidPolicyException|[InvalidPolicyException](#schemainvalidpolicyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateCertificateAuthorityResponse">CreateCertificateAuthorityResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecertificateauthorityresponse"></a>
<a id="schema_CreateCertificateAuthorityResponse"></a>
<a id="tocScreatecertificateauthorityresponse"></a>
<a id="tocscreatecertificateauthorityresponse"></a>

```json
{
  "CertificateAuthorityArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArn|object|false|none|none|

<h2 id="tocS_CreateCertificateAuthorityRequest">CreateCertificateAuthorityRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecertificateauthorityrequest"></a>
<a id="schema_CreateCertificateAuthorityRequest"></a>
<a id="tocScreatecertificateauthorityrequest"></a>
<a id="tocscreatecertificateauthorityrequest"></a>

```json
{
  "CertificateAuthorityConfiguration": {
    "KeyAlgorithm": {},
    "SigningAlgorithm": {},
    "Subject": {
      "Country": {},
      "Organization": {},
      "OrganizationalUnit": {},
      "DistinguishedNameQualifier": {},
      "State": {},
      "CommonName": {},
      "SerialNumber": {},
      "Locality": {},
      "Title": {},
      "Surname": {},
      "GivenName": {},
      "Initials": {},
      "Pseudonym": {},
      "GenerationQualifier": {},
      "CustomAttributes": {}
    },
    "CsrExtensions": {
      "KeyUsage": {
        "DigitalSignature": {},
        "NonRepudiation": {},
        "KeyEncipherment": {},
        "DataEncipherment": {},
        "KeyAgreement": {},
        "KeyCertSign": {},
        "CRLSign": {},
        "EncipherOnly": {},
        "DecipherOnly": {}
      },
      "SubjectInformationAccess": {}
    }
  },
  "RevocationConfiguration": {
    "CrlConfiguration": {
      "Enabled": {},
      "ExpirationInDays": {},
      "CustomCname": {},
      "S3BucketName": {},
      "S3ObjectAcl": {}
    },
    "OcspConfiguration": {
      "Enabled": {},
      "OcspCustomCname": {}
    }
  },
  "CertificateAuthorityType": {},
  "IdempotencyToken": {},
  "KeyStorageSecurityStandard": {},
  "Tags": {},
  "UsageMode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityConfiguration|object|true|none|none|
|RevocationConfiguration|object|false|none|none|
|CertificateAuthorityType|object|true|none|none|
|IdempotencyToken|object|false|none|none|
|KeyStorageSecurityStandard|object|false|none|none|
|Tags|object|false|none|none|
|UsageMode|object|false|none|none|

<h2 id="tocS_InvalidArgsException">InvalidArgsException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidargsexception"></a>
<a id="schema_InvalidArgsException"></a>
<a id="tocSinvalidargsexception"></a>
<a id="tocsinvalidargsexception"></a>

```json
null
```

<h2 id="tocS_InvalidPolicyException">InvalidPolicyException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpolicyexception"></a>
<a id="schema_InvalidPolicyException"></a>
<a id="tocSinvalidpolicyexception"></a>
<a id="tocsinvalidpolicyexception"></a>

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

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateCertificateAuthorityAuditReportResponse">CreateCertificateAuthorityAuditReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecertificateauthorityauditreportresponse"></a>
<a id="schema_CreateCertificateAuthorityAuditReportResponse"></a>
<a id="tocScreatecertificateauthorityauditreportresponse"></a>
<a id="tocscreatecertificateauthorityauditreportresponse"></a>

```json
{
  "AuditReportId": {},
  "S3Key": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuditReportId|object|false|none|none|
|S3Key|object|false|none|none|

<h2 id="tocS_CreateCertificateAuthorityAuditReportRequest">CreateCertificateAuthorityAuditReportRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecertificateauthorityauditreportrequest"></a>
<a id="schema_CreateCertificateAuthorityAuditReportRequest"></a>
<a id="tocScreatecertificateauthorityauditreportrequest"></a>
<a id="tocscreatecertificateauthorityauditreportrequest"></a>

```json
{
  "CertificateAuthorityArn": {},
  "S3BucketName": {},
  "AuditReportResponseFormat": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArn|object|true|none|none|
|S3BucketName|object|true|none|none|
|AuditReportResponseFormat|object|true|none|none|

<h2 id="tocS_RequestInProgressException">RequestInProgressException</h2>
<!-- backwards compatibility -->
<a id="schemarequestinprogressexception"></a>
<a id="schema_RequestInProgressException"></a>
<a id="tocSrequestinprogressexception"></a>
<a id="tocsrequestinprogressexception"></a>

```json
null
```

<h2 id="tocS_RequestFailedException">RequestFailedException</h2>
<!-- backwards compatibility -->
<a id="schemarequestfailedexception"></a>
<a id="schema_RequestFailedException"></a>
<a id="tocSrequestfailedexception"></a>
<a id="tocsrequestfailedexception"></a>

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

<h2 id="tocS_InvalidArnException">InvalidArnException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidarnexception"></a>
<a id="schema_InvalidArnException"></a>
<a id="tocSinvalidarnexception"></a>
<a id="tocsinvalidarnexception"></a>

```json
null
```

<h2 id="tocS_InvalidStateException">InvalidStateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidstateexception"></a>
<a id="schema_InvalidStateException"></a>
<a id="tocSinvalidstateexception"></a>
<a id="tocsinvalidstateexception"></a>

```json
null
```

<h2 id="tocS_CreatePermissionRequest">CreatePermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepermissionrequest"></a>
<a id="schema_CreatePermissionRequest"></a>
<a id="tocScreatepermissionrequest"></a>
<a id="tocscreatepermissionrequest"></a>

```json
{
  "CertificateAuthorityArn": {},
  "Principal": {},
  "SourceAccount": {},
  "Actions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArn|object|true|none|none|
|Principal|object|true|none|none|
|SourceAccount|object|false|none|none|
|Actions|object|true|none|none|

<h2 id="tocS_PermissionAlreadyExistsException">PermissionAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemapermissionalreadyexistsexception"></a>
<a id="schema_PermissionAlreadyExistsException"></a>
<a id="tocSpermissionalreadyexistsexception"></a>
<a id="tocspermissionalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_DeleteCertificateAuthorityRequest">DeleteCertificateAuthorityRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecertificateauthorityrequest"></a>
<a id="schema_DeleteCertificateAuthorityRequest"></a>
<a id="tocSdeletecertificateauthorityrequest"></a>
<a id="tocsdeletecertificateauthorityrequest"></a>

```json
{
  "CertificateAuthorityArn": {},
  "PermanentDeletionTimeInDays": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArn|object|true|none|none|
|PermanentDeletionTimeInDays|object|false|none|none|

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

```json
null
```

<h2 id="tocS_DeletePermissionRequest">DeletePermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepermissionrequest"></a>
<a id="schema_DeletePermissionRequest"></a>
<a id="tocSdeletepermissionrequest"></a>
<a id="tocsdeletepermissionrequest"></a>

```json
{
  "CertificateAuthorityArn": {},
  "Principal": {},
  "SourceAccount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArn|object|true|none|none|
|Principal|object|true|none|none|
|SourceAccount|object|false|none|none|

<h2 id="tocS_DeletePolicyRequest">DeletePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepolicyrequest"></a>
<a id="schema_DeletePolicyRequest"></a>
<a id="tocSdeletepolicyrequest"></a>
<a id="tocsdeletepolicyrequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_LockoutPreventedException">LockoutPreventedException</h2>
<!-- backwards compatibility -->
<a id="schemalockoutpreventedexception"></a>
<a id="schema_LockoutPreventedException"></a>
<a id="tocSlockoutpreventedexception"></a>
<a id="tocslockoutpreventedexception"></a>

```json
null
```

<h2 id="tocS_DescribeCertificateAuthorityResponse">DescribeCertificateAuthorityResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecertificateauthorityresponse"></a>
<a id="schema_DescribeCertificateAuthorityResponse"></a>
<a id="tocSdescribecertificateauthorityresponse"></a>
<a id="tocsdescribecertificateauthorityresponse"></a>

```json
{
  "CertificateAuthority": {
    "Arn": {},
    "OwnerAccount": {},
    "CreatedAt": {},
    "LastStateChangeAt": {},
    "Type": {},
    "Serial": {},
    "Status": {},
    "NotBefore": {},
    "NotAfter": {},
    "FailureReason": {},
    "CertificateAuthorityConfiguration": {
      "KeyAlgorithm": {},
      "SigningAlgorithm": {},
      "Subject": {
        "Country": {},
        "Organization": {},
        "OrganizationalUnit": {},
        "DistinguishedNameQualifier": {},
        "State": {},
        "CommonName": {},
        "SerialNumber": {},
        "Locality": {},
        "Title": {},
        "Surname": {},
        "GivenName": {},
        "Initials": {},
        "Pseudonym": {},
        "GenerationQualifier": {},
        "CustomAttributes": {}
      },
      "CsrExtensions": {
        "KeyUsage": {
          "DigitalSignature": {},
          "NonRepudiation": {},
          "KeyEncipherment": {},
          "DataEncipherment": {},
          "KeyAgreement": {},
          "KeyCertSign": {},
          "CRLSign": {},
          "EncipherOnly": {},
          "DecipherOnly": {}
        },
        "SubjectInformationAccess": {}
      }
    },
    "RevocationConfiguration": {
      "CrlConfiguration": {
        "Enabled": {},
        "ExpirationInDays": {},
        "CustomCname": {},
        "S3BucketName": {},
        "S3ObjectAcl": {}
      },
      "OcspConfiguration": {
        "Enabled": {},
        "OcspCustomCname": {}
      }
    },
    "RestorableUntil": {},
    "KeyStorageSecurityStandard": {},
    "UsageMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthority|object|false|none|none|

<h2 id="tocS_DescribeCertificateAuthorityRequest">DescribeCertificateAuthorityRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecertificateauthorityrequest"></a>
<a id="schema_DescribeCertificateAuthorityRequest"></a>
<a id="tocSdescribecertificateauthorityrequest"></a>
<a id="tocsdescribecertificateauthorityrequest"></a>

```json
{
  "CertificateAuthorityArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArn|object|true|none|none|

<h2 id="tocS_DescribeCertificateAuthorityAuditReportResponse">DescribeCertificateAuthorityAuditReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecertificateauthorityauditreportresponse"></a>
<a id="schema_DescribeCertificateAuthorityAuditReportResponse"></a>
<a id="tocSdescribecertificateauthorityauditreportresponse"></a>
<a id="tocsdescribecertificateauthorityauditreportresponse"></a>

```json
{
  "AuditReportStatus": {},
  "S3BucketName": {},
  "S3Key": {},
  "CreatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuditReportStatus|object|false|none|none|
|S3BucketName|object|false|none|none|
|S3Key|object|false|none|none|
|CreatedAt|object|false|none|none|

<h2 id="tocS_DescribeCertificateAuthorityAuditReportRequest">DescribeCertificateAuthorityAuditReportRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecertificateauthorityauditreportrequest"></a>
<a id="schema_DescribeCertificateAuthorityAuditReportRequest"></a>
<a id="tocSdescribecertificateauthorityauditreportrequest"></a>
<a id="tocsdescribecertificateauthorityauditreportrequest"></a>

```json
{
  "CertificateAuthorityArn": {},
  "AuditReportId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArn|object|true|none|none|
|AuditReportId|object|true|none|none|

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
  "CertificateAuthorityArn": {},
  "CertificateArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArn|object|true|none|none|
|CertificateArn|object|true|none|none|

<h2 id="tocS_GetCertificateAuthorityCertificateResponse">GetCertificateAuthorityCertificateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcertificateauthoritycertificateresponse"></a>
<a id="schema_GetCertificateAuthorityCertificateResponse"></a>
<a id="tocSgetcertificateauthoritycertificateresponse"></a>
<a id="tocsgetcertificateauthoritycertificateresponse"></a>

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

<h2 id="tocS_GetCertificateAuthorityCertificateRequest">GetCertificateAuthorityCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcertificateauthoritycertificaterequest"></a>
<a id="schema_GetCertificateAuthorityCertificateRequest"></a>
<a id="tocSgetcertificateauthoritycertificaterequest"></a>
<a id="tocsgetcertificateauthoritycertificaterequest"></a>

```json
{
  "CertificateAuthorityArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArn|object|true|none|none|

<h2 id="tocS_GetCertificateAuthorityCsrResponse">GetCertificateAuthorityCsrResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcertificateauthoritycsrresponse"></a>
<a id="schema_GetCertificateAuthorityCsrResponse"></a>
<a id="tocSgetcertificateauthoritycsrresponse"></a>
<a id="tocsgetcertificateauthoritycsrresponse"></a>

```json
{
  "Csr": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Csr|object|false|none|none|

<h2 id="tocS_GetCertificateAuthorityCsrRequest">GetCertificateAuthorityCsrRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcertificateauthoritycsrrequest"></a>
<a id="schema_GetCertificateAuthorityCsrRequest"></a>
<a id="tocSgetcertificateauthoritycsrrequest"></a>
<a id="tocsgetcertificateauthoritycsrrequest"></a>

```json
{
  "CertificateAuthorityArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArn|object|true|none|none|

<h2 id="tocS_GetPolicyResponse">GetPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpolicyresponse"></a>
<a id="schema_GetPolicyResponse"></a>
<a id="tocSgetpolicyresponse"></a>
<a id="tocsgetpolicyresponse"></a>

```json
{
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_GetPolicyRequest">GetPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpolicyrequest"></a>
<a id="schema_GetPolicyRequest"></a>
<a id="tocSgetpolicyrequest"></a>
<a id="tocsgetpolicyrequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_ImportCertificateAuthorityCertificateRequest">ImportCertificateAuthorityCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportcertificateauthoritycertificaterequest"></a>
<a id="schema_ImportCertificateAuthorityCertificateRequest"></a>
<a id="tocSimportcertificateauthoritycertificaterequest"></a>
<a id="tocsimportcertificateauthoritycertificaterequest"></a>

```json
{
  "CertificateAuthorityArn": {},
  "Certificate": {},
  "CertificateChain": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArn|object|true|none|none|
|Certificate|object|true|none|none|
|CertificateChain|object|false|none|none|

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_MalformedCertificateException">MalformedCertificateException</h2>
<!-- backwards compatibility -->
<a id="schemamalformedcertificateexception"></a>
<a id="schema_MalformedCertificateException"></a>
<a id="tocSmalformedcertificateexception"></a>
<a id="tocsmalformedcertificateexception"></a>

```json
null
```

<h2 id="tocS_CertificateMismatchException">CertificateMismatchException</h2>
<!-- backwards compatibility -->
<a id="schemacertificatemismatchexception"></a>
<a id="schema_CertificateMismatchException"></a>
<a id="tocScertificatemismatchexception"></a>
<a id="tocscertificatemismatchexception"></a>

```json
null
```

<h2 id="tocS_IssueCertificateResponse">IssueCertificateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaissuecertificateresponse"></a>
<a id="schema_IssueCertificateResponse"></a>
<a id="tocSissuecertificateresponse"></a>
<a id="tocsissuecertificateresponse"></a>

```json
{
  "CertificateArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|false|none|none|

<h2 id="tocS_IssueCertificateRequest">IssueCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaissuecertificaterequest"></a>
<a id="schema_IssueCertificateRequest"></a>
<a id="tocSissuecertificaterequest"></a>
<a id="tocsissuecertificaterequest"></a>

```json
{
  "ApiPassthrough": {
    "Extensions": {
      "CertificatePolicies": {},
      "ExtendedKeyUsage": {},
      "KeyUsage": {
        "DigitalSignature": {},
        "NonRepudiation": {},
        "KeyEncipherment": {},
        "DataEncipherment": {},
        "KeyAgreement": {},
        "KeyCertSign": {},
        "CRLSign": {},
        "EncipherOnly": {},
        "DecipherOnly": {}
      },
      "SubjectAlternativeNames": {},
      "CustomExtensions": {}
    },
    "Subject": {
      "Country": {},
      "Organization": {},
      "OrganizationalUnit": {},
      "DistinguishedNameQualifier": {},
      "State": {},
      "CommonName": {},
      "SerialNumber": {},
      "Locality": {},
      "Title": {},
      "Surname": {},
      "GivenName": {},
      "Initials": {},
      "Pseudonym": {},
      "GenerationQualifier": {},
      "CustomAttributes": {}
    }
  },
  "CertificateAuthorityArn": {},
  "Csr": {},
  "SigningAlgorithm": {},
  "TemplateArn": {},
  "Validity": {
    "Value": {},
    "Type": {}
  },
  "ValidityNotBefore": {
    "Value": {},
    "Type": {}
  },
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiPassthrough|object|false|none|none|
|CertificateAuthorityArn|object|true|none|none|
|Csr|object|true|none|none|
|SigningAlgorithm|object|true|none|none|
|TemplateArn|object|false|none|none|
|Validity|object|true|none|none|
|ValidityNotBefore|object|false|none|none|
|IdempotencyToken|object|false|none|none|

<h2 id="tocS_MalformedCSRException">MalformedCSRException</h2>
<!-- backwards compatibility -->
<a id="schemamalformedcsrexception"></a>
<a id="schema_MalformedCSRException"></a>
<a id="tocSmalformedcsrexception"></a>
<a id="tocsmalformedcsrexception"></a>

```json
null
```

<h2 id="tocS_ListCertificateAuthoritiesResponse">ListCertificateAuthoritiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcertificateauthoritiesresponse"></a>
<a id="schema_ListCertificateAuthoritiesResponse"></a>
<a id="tocSlistcertificateauthoritiesresponse"></a>
<a id="tocslistcertificateauthoritiesresponse"></a>

```json
{
  "CertificateAuthorities": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorities|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCertificateAuthoritiesRequest">ListCertificateAuthoritiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcertificateauthoritiesrequest"></a>
<a id="schema_ListCertificateAuthoritiesRequest"></a>
<a id="tocSlistcertificateauthoritiesrequest"></a>
<a id="tocslistcertificateauthoritiesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "ResourceOwner": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|ResourceOwner|object|false|none|none|

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_ListPermissionsResponse">ListPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissionsresponse"></a>
<a id="schema_ListPermissionsResponse"></a>
<a id="tocSlistpermissionsresponse"></a>
<a id="tocslistpermissionsresponse"></a>

```json
{
  "Permissions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Permissions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPermissionsRequest">ListPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissionsrequest"></a>
<a id="schema_ListPermissionsRequest"></a>
<a id="tocSlistpermissionsrequest"></a>
<a id="tocslistpermissionsrequest"></a>

```json
{
  "CertificateAuthorityArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArn|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListTagsResponse">ListTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsresponse"></a>
<a id="schema_ListTagsResponse"></a>
<a id="tocSlisttagsresponse"></a>
<a id="tocslisttagsresponse"></a>

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

<h2 id="tocS_ListTagsRequest">ListTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsrequest"></a>
<a id="schema_ListTagsRequest"></a>
<a id="tocSlisttagsrequest"></a>
<a id="tocslisttagsrequest"></a>

```json
{
  "CertificateAuthorityArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArn|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_PutPolicyRequest">PutPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputpolicyrequest"></a>
<a id="schema_PutPolicyRequest"></a>
<a id="tocSputpolicyrequest"></a>
<a id="tocsputpolicyrequest"></a>

```json
{
  "ResourceArn": {},
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Policy|object|true|none|none|

<h2 id="tocS_RestoreCertificateAuthorityRequest">RestoreCertificateAuthorityRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestorecertificateauthorityrequest"></a>
<a id="schema_RestoreCertificateAuthorityRequest"></a>
<a id="tocSrestorecertificateauthorityrequest"></a>
<a id="tocsrestorecertificateauthorityrequest"></a>

```json
{
  "CertificateAuthorityArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArn|object|true|none|none|

<h2 id="tocS_RevokeCertificateRequest">RevokeCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemarevokecertificaterequest"></a>
<a id="schema_RevokeCertificateRequest"></a>
<a id="tocSrevokecertificaterequest"></a>
<a id="tocsrevokecertificaterequest"></a>

```json
{
  "CertificateAuthorityArn": {},
  "CertificateSerial": {},
  "RevocationReason": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArn|object|true|none|none|
|CertificateSerial|object|true|none|none|
|RevocationReason|object|true|none|none|

<h2 id="tocS_RequestAlreadyProcessedException">RequestAlreadyProcessedException</h2>
<!-- backwards compatibility -->
<a id="schemarequestalreadyprocessedexception"></a>
<a id="schema_RequestAlreadyProcessedException"></a>
<a id="tocSrequestalreadyprocessedexception"></a>
<a id="tocsrequestalreadyprocessedexception"></a>

```json
null
```

<h2 id="tocS_TagCertificateAuthorityRequest">TagCertificateAuthorityRequest</h2>
<!-- backwards compatibility -->
<a id="schematagcertificateauthorityrequest"></a>
<a id="schema_TagCertificateAuthorityRequest"></a>
<a id="tocStagcertificateauthorityrequest"></a>
<a id="tocstagcertificateauthorityrequest"></a>

```json
{
  "CertificateAuthorityArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArn|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_TooManyTagsException">TooManyTagsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagsexception"></a>
<a id="schema_TooManyTagsException"></a>
<a id="tocStoomanytagsexception"></a>
<a id="tocstoomanytagsexception"></a>

```json
null
```

<h2 id="tocS_UntagCertificateAuthorityRequest">UntagCertificateAuthorityRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagcertificateauthorityrequest"></a>
<a id="schema_UntagCertificateAuthorityRequest"></a>
<a id="tocSuntagcertificateauthorityrequest"></a>
<a id="tocsuntagcertificateauthorityrequest"></a>

```json
{
  "CertificateAuthorityArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArn|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UpdateCertificateAuthorityRequest">UpdateCertificateAuthorityRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecertificateauthorityrequest"></a>
<a id="schema_UpdateCertificateAuthorityRequest"></a>
<a id="tocSupdatecertificateauthorityrequest"></a>
<a id="tocsupdatecertificateauthorityrequest"></a>

```json
{
  "CertificateAuthorityArn": {},
  "RevocationConfiguration": {
    "CrlConfiguration": {
      "Enabled": {},
      "ExpirationInDays": {},
      "CustomCname": {},
      "S3BucketName": {},
      "S3ObjectAcl": {}
    },
    "OcspConfiguration": {
      "Enabled": {},
      "OcspCustomCname": {}
    }
  },
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArn|object|true|none|none|
|RevocationConfiguration|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_ASN1PrintableString64">ASN1PrintableString64</h2>
<!-- backwards compatibility -->
<a id="schemaasn1printablestring64"></a>
<a id="schema_ASN1PrintableString64"></a>
<a id="tocSasn1printablestring64"></a>
<a id="tocsasn1printablestring64"></a>

```json
"string"
```

<h2 id="tocS_CountryCodeString">CountryCodeString</h2>
<!-- backwards compatibility -->
<a id="schemacountrycodestring"></a>
<a id="schema_CountryCodeString"></a>
<a id="tocScountrycodestring"></a>
<a id="tocscountrycodestring"></a>

```json
"st"
```

<h2 id="tocS_String64">String64</h2>
<!-- backwards compatibility -->
<a id="schemastring64"></a>
<a id="schema_String64"></a>
<a id="tocSstring64"></a>
<a id="tocsstring64"></a>

```json
"string"
```

<h2 id="tocS_String128">String128</h2>
<!-- backwards compatibility -->
<a id="schemastring128"></a>
<a id="schema_String128"></a>
<a id="tocSstring128"></a>
<a id="tocsstring128"></a>

```json
"string"
```

<h2 id="tocS_String40">String40</h2>
<!-- backwards compatibility -->
<a id="schemastring40"></a>
<a id="schema_String40"></a>
<a id="tocSstring40"></a>
<a id="tocsstring40"></a>

```json
"string"
```

<h2 id="tocS_String16">String16</h2>
<!-- backwards compatibility -->
<a id="schemastring16"></a>
<a id="schema_String16"></a>
<a id="tocSstring16"></a>
<a id="tocsstring16"></a>

```json
"string"
```

<h2 id="tocS_String5">String5</h2>
<!-- backwards compatibility -->
<a id="schemastring5"></a>
<a id="schema_String5"></a>
<a id="tocSstring5"></a>
<a id="tocsstring5"></a>

```json
"strin"
```

<h2 id="tocS_String3">String3</h2>
<!-- backwards compatibility -->
<a id="schemastring3"></a>
<a id="schema_String3"></a>
<a id="tocSstring3"></a>
<a id="tocsstring3"></a>

```json
"str"
```

<h2 id="tocS_CustomAttributeList">CustomAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemacustomattributelist"></a>
<a id="schema_CustomAttributeList"></a>
<a id="tocScustomattributelist"></a>
<a id="tocscustomattributelist"></a>

```json
[
  {
    "ObjectIdentifier": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ASN1Subject">ASN1Subject</h2>
<!-- backwards compatibility -->
<a id="schemaasn1subject"></a>
<a id="schema_ASN1Subject"></a>
<a id="tocSasn1subject"></a>
<a id="tocsasn1subject"></a>

```json
{
  "Country": {},
  "Organization": {},
  "OrganizationalUnit": {},
  "DistinguishedNameQualifier": {},
  "State": {},
  "CommonName": {},
  "SerialNumber": {},
  "Locality": {},
  "Title": {},
  "Surname": {},
  "GivenName": {},
  "Initials": {},
  "Pseudonym": {},
  "GenerationQualifier": {},
  "CustomAttributes": {}
}
```

Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject </code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Country|object|false|none|none|
|Organization|object|false|none|none|
|OrganizationalUnit|object|false|none|none|
|DistinguishedNameQualifier|object|false|none|none|
|State|object|false|none|none|
|CommonName|object|false|none|none|
|SerialNumber|object|false|none|none|
|Locality|object|false|none|none|
|Title|object|false|none|none|
|Surname|object|false|none|none|
|GivenName|object|false|none|none|
|Initials|object|false|none|none|
|Pseudonym|object|false|none|none|
|GenerationQualifier|object|false|none|none|
|CustomAttributes|object|false|none|none|

<h2 id="tocS_AWSPolicy">AWSPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaawspolicy"></a>
<a id="schema_AWSPolicy"></a>
<a id="tocSawspolicy"></a>
<a id="tocsawspolicy"></a>

```json
"string"
```

<h2 id="tocS_AccessMethod">AccessMethod</h2>
<!-- backwards compatibility -->
<a id="schemaaccessmethod"></a>
<a id="schema_AccessMethod"></a>
<a id="tocSaccessmethod"></a>
<a id="tocsaccessmethod"></a>

```json
{
  "CustomObjectIdentifier": {},
  "AccessMethodType": {}
}
```

Describes the type and format of extension access. Only one of <code>CustomObjectIdentifier</code> or <code>AccessMethodType</code> may be provided. Providing both results in <code>InvalidArgsException</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomObjectIdentifier|object|false|none|none|
|AccessMethodType|object|false|none|none|

<h2 id="tocS_GeneralName">GeneralName</h2>
<!-- backwards compatibility -->
<a id="schemageneralname"></a>
<a id="schema_GeneralName"></a>
<a id="tocSgeneralname"></a>
<a id="tocsgeneralname"></a>

```json
{
  "OtherName": {
    "TypeId": {},
    "Value": {}
  },
  "Rfc822Name": {},
  "DnsName": {},
  "DirectoryName": {
    "Country": {},
    "Organization": {},
    "OrganizationalUnit": {},
    "DistinguishedNameQualifier": {},
    "State": {},
    "CommonName": {},
    "SerialNumber": {},
    "Locality": {},
    "Title": {},
    "Surname": {},
    "GivenName": {},
    "Initials": {},
    "Pseudonym": {},
    "GenerationQualifier": {},
    "CustomAttributes": {}
  },
  "EdiPartyName": {
    "PartyName": {},
    "NameAssigner": {}
  },
  "UniformResourceIdentifier": {},
  "IpAddress": {},
  "RegisteredId": {}
}
```

Describes an ASN.1 X.400 <code>GeneralName</code> as defined in <a href="https://datatracker.ietf.org/doc/html/rfc5280">RFC 5280</a>. Only one of the following naming options should be provided. Providing more than one option results in an <code>InvalidArgsException</code> error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OtherName|object|false|none|none|
|Rfc822Name|object|false|none|none|
|DnsName|object|false|none|none|
|DirectoryName|[ASN1Subject](#schemaasn1subject)|false|none|Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject </code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.|
|EdiPartyName|object|false|none|none|
|UniformResourceIdentifier|object|false|none|none|
|IpAddress|object|false|none|none|
|RegisteredId|object|false|none|none|

<h2 id="tocS_AccessDescription">AccessDescription</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdescription"></a>
<a id="schema_AccessDescription"></a>
<a id="tocSaccessdescription"></a>
<a id="tocsaccessdescription"></a>

```json
{
  "AccessMethod": {
    "CustomObjectIdentifier": {},
    "AccessMethodType": {}
  },
  "AccessLocation": {
    "OtherName": {
      "TypeId": {},
      "Value": {}
    },
    "Rfc822Name": {},
    "DnsName": {},
    "DirectoryName": {
      "Country": {},
      "Organization": {},
      "OrganizationalUnit": {},
      "DistinguishedNameQualifier": {},
      "State": {},
      "CommonName": {},
      "SerialNumber": {},
      "Locality": {},
      "Title": {},
      "Surname": {},
      "GivenName": {},
      "Initials": {},
      "Pseudonym": {},
      "GenerationQualifier": {},
      "CustomAttributes": {}
    },
    "EdiPartyName": {
      "PartyName": {},
      "NameAssigner": {}
    },
    "UniformResourceIdentifier": {},
    "IpAddress": {},
    "RegisteredId": {}
  }
}
```

Provides access information used by the <code>authorityInfoAccess</code> and <code>subjectInfoAccess</code> extensions described in <a href="https://datatracker.ietf.org/doc/html/rfc5280">RFC 5280</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessMethod|object|true|none|none|
|AccessLocation|object|true|none|none|

<h2 id="tocS_AccessDescriptionList">AccessDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdescriptionlist"></a>
<a id="schema_AccessDescriptionList"></a>
<a id="tocSaccessdescriptionlist"></a>
<a id="tocsaccessdescriptionlist"></a>

```json
[
  {
    "AccessMethod": {
      "CustomObjectIdentifier": {},
      "AccessMethodType": {}
    },
    "AccessLocation": {
      "OtherName": {
        "TypeId": {},
        "Value": {}
      },
      "Rfc822Name": {},
      "DnsName": {},
      "DirectoryName": {
        "Country": {},
        "Organization": {},
        "OrganizationalUnit": {},
        "DistinguishedNameQualifier": {},
        "State": {},
        "CommonName": {},
        "SerialNumber": {},
        "Locality": {},
        "Title": {},
        "Surname": {},
        "GivenName": {},
        "Initials": {},
        "Pseudonym": {},
        "GenerationQualifier": {},
        "CustomAttributes": {}
      },
      "EdiPartyName": {
        "PartyName": {},
        "NameAssigner": {}
      },
      "UniformResourceIdentifier": {},
      "IpAddress": {},
      "RegisteredId": {}
    }
  }
]
```

<h2 id="tocS_CustomObjectIdentifier">CustomObjectIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemacustomobjectidentifier"></a>
<a id="schema_CustomObjectIdentifier"></a>
<a id="tocScustomobjectidentifier"></a>
<a id="tocscustomobjectidentifier"></a>

```json
"string"
```

<h2 id="tocS_AccessMethodType">AccessMethodType</h2>
<!-- backwards compatibility -->
<a id="schemaaccessmethodtype"></a>
<a id="schema_AccessMethodType"></a>
<a id="tocSaccessmethodtype"></a>
<a id="tocsaccessmethodtype"></a>

```json
"CA_REPOSITORY"
```

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"stringstring"
```

<h2 id="tocS_ActionType">ActionType</h2>
<!-- backwards compatibility -->
<a id="schemaactiontype"></a>
<a id="schema_ActionType"></a>
<a id="tocSactiontype"></a>
<a id="tocsactiontype"></a>

```json
"IssueCertificate"
```

<h2 id="tocS_ActionList">ActionList</h2>
<!-- backwards compatibility -->
<a id="schemaactionlist"></a>
<a id="schema_ActionList"></a>
<a id="tocSactionlist"></a>
<a id="tocsactionlist"></a>

```json
[
  "IssueCertificate"
]
```

<h2 id="tocS_Extensions">Extensions</h2>
<!-- backwards compatibility -->
<a id="schemaextensions"></a>
<a id="schema_Extensions"></a>
<a id="tocSextensions"></a>
<a id="tocsextensions"></a>

```json
{
  "CertificatePolicies": {},
  "ExtendedKeyUsage": {},
  "KeyUsage": {
    "DigitalSignature": {},
    "NonRepudiation": {},
    "KeyEncipherment": {},
    "DataEncipherment": {},
    "KeyAgreement": {},
    "KeyCertSign": {},
    "CRLSign": {},
    "EncipherOnly": {},
    "DecipherOnly": {}
  },
  "SubjectAlternativeNames": {},
  "CustomExtensions": {}
}
```

Contains X.509 extension information for a certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificatePolicies|object|false|none|none|
|ExtendedKeyUsage|object|false|none|none|
|KeyUsage|[KeyUsage](#schemakeyusage)|false|none|Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.|
|SubjectAlternativeNames|object|false|none|none|
|CustomExtensions|object|false|none|none|

<h2 id="tocS_ApiPassthrough">ApiPassthrough</h2>
<!-- backwards compatibility -->
<a id="schemaapipassthrough"></a>
<a id="schema_ApiPassthrough"></a>
<a id="tocSapipassthrough"></a>
<a id="tocsapipassthrough"></a>

```json
{
  "Extensions": {
    "CertificatePolicies": {},
    "ExtendedKeyUsage": {},
    "KeyUsage": {
      "DigitalSignature": {},
      "NonRepudiation": {},
      "KeyEncipherment": {},
      "DataEncipherment": {},
      "KeyAgreement": {},
      "KeyCertSign": {},
      "CRLSign": {},
      "EncipherOnly": {},
      "DecipherOnly": {}
    },
    "SubjectAlternativeNames": {},
    "CustomExtensions": {}
  },
  "Subject": {
    "Country": {},
    "Organization": {},
    "OrganizationalUnit": {},
    "DistinguishedNameQualifier": {},
    "State": {},
    "CommonName": {},
    "SerialNumber": {},
    "Locality": {},
    "Title": {},
    "Surname": {},
    "GivenName": {},
    "Initials": {},
    "Pseudonym": {},
    "GenerationQualifier": {},
    "CustomAttributes": {}
  }
}
```

<p>Contains X.509 certificate information to be placed in an issued certificate. An <code>APIPassthrough</code> or <code>APICSRPassthrough</code> template variant must be selected, or else this parameter is ignored. </p> <p>If conflicting or duplicate certificate information is supplied from other sources, Amazon Web Services Private CA applies <a href="https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations">order of operation rules</a> to determine what information is used.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Extensions|object|false|none|none|
|Subject|[ASN1Subject](#schemaasn1subject)|false|none|Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject </code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.|

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_AuditReportId">AuditReportId</h2>
<!-- backwards compatibility -->
<a id="schemaauditreportid"></a>
<a id="schema_AuditReportId"></a>
<a id="tocSauditreportid"></a>
<a id="tocsauditreportid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_AuditReportResponseFormat">AuditReportResponseFormat</h2>
<!-- backwards compatibility -->
<a id="schemaauditreportresponseformat"></a>
<a id="schema_AuditReportResponseFormat"></a>
<a id="tocSauditreportresponseformat"></a>
<a id="tocsauditreportresponseformat"></a>

```json
"JSON"
```

<h2 id="tocS_AuditReportStatus">AuditReportStatus</h2>
<!-- backwards compatibility -->
<a id="schemaauditreportstatus"></a>
<a id="schema_AuditReportStatus"></a>
<a id="tocSauditreportstatus"></a>
<a id="tocsauditreportstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_Base64String1To4096">Base64String1To4096</h2>
<!-- backwards compatibility -->
<a id="schemabase64string1to4096"></a>
<a id="schema_Base64String1To4096"></a>
<a id="tocSbase64string1to4096"></a>
<a id="tocsbase64string1to4096"></a>

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

<h2 id="tocS_CertificateAuthority">CertificateAuthority</h2>
<!-- backwards compatibility -->
<a id="schemacertificateauthority"></a>
<a id="schema_CertificateAuthority"></a>
<a id="tocScertificateauthority"></a>
<a id="tocscertificateauthority"></a>

```json
{
  "Arn": {},
  "OwnerAccount": {},
  "CreatedAt": {},
  "LastStateChangeAt": {},
  "Type": {},
  "Serial": {},
  "Status": {},
  "NotBefore": {},
  "NotAfter": {},
  "FailureReason": {},
  "CertificateAuthorityConfiguration": {
    "KeyAlgorithm": {},
    "SigningAlgorithm": {},
    "Subject": {
      "Country": {},
      "Organization": {},
      "OrganizationalUnit": {},
      "DistinguishedNameQualifier": {},
      "State": {},
      "CommonName": {},
      "SerialNumber": {},
      "Locality": {},
      "Title": {},
      "Surname": {},
      "GivenName": {},
      "Initials": {},
      "Pseudonym": {},
      "GenerationQualifier": {},
      "CustomAttributes": {}
    },
    "CsrExtensions": {
      "KeyUsage": {
        "DigitalSignature": {},
        "NonRepudiation": {},
        "KeyEncipherment": {},
        "DataEncipherment": {},
        "KeyAgreement": {},
        "KeyCertSign": {},
        "CRLSign": {},
        "EncipherOnly": {},
        "DecipherOnly": {}
      },
      "SubjectInformationAccess": {}
    }
  },
  "RevocationConfiguration": {
    "CrlConfiguration": {
      "Enabled": {},
      "ExpirationInDays": {},
      "CustomCname": {},
      "S3BucketName": {},
      "S3ObjectAcl": {}
    },
    "OcspConfiguration": {
      "Enabled": {},
      "OcspCustomCname": {}
    }
  },
  "RestorableUntil": {},
  "KeyStorageSecurityStandard": {},
  "UsageMode": {}
}
```

Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate <b>Subject</b> field owns or controls the public key contained in the <b>Subject Public Key Info</b> field. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create your private CA. You must then call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCertificate.html">GetCertificateAuthorityCertificate</a> action to retrieve a private CA certificate signing request (CSR). Sign the CSR with your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA certificate. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import the signed certificate into Certificate Manager (ACM).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|OwnerAccount|object|false|none|none|
|CreatedAt|object|false|none|none|
|LastStateChangeAt|object|false|none|none|
|Type|object|false|none|none|
|Serial|object|false|none|none|
|Status|object|false|none|none|
|NotBefore|object|false|none|none|
|NotAfter|object|false|none|none|
|FailureReason|object|false|none|none|
|CertificateAuthorityConfiguration|object|false|none|none|
|RevocationConfiguration|object|false|none|none|
|RestorableUntil|object|false|none|none|
|KeyStorageSecurityStandard|object|false|none|none|
|UsageMode|object|false|none|none|

<h2 id="tocS_CertificateAuthorities">CertificateAuthorities</h2>
<!-- backwards compatibility -->
<a id="schemacertificateauthorities"></a>
<a id="schema_CertificateAuthorities"></a>
<a id="tocScertificateauthorities"></a>
<a id="tocscertificateauthorities"></a>

```json
[
  {
    "Arn": {},
    "OwnerAccount": {},
    "CreatedAt": {},
    "LastStateChangeAt": {},
    "Type": {},
    "Serial": {},
    "Status": {},
    "NotBefore": {},
    "NotAfter": {},
    "FailureReason": {},
    "CertificateAuthorityConfiguration": {
      "KeyAlgorithm": {},
      "SigningAlgorithm": {},
      "Subject": {
        "Country": {},
        "Organization": {},
        "OrganizationalUnit": {},
        "DistinguishedNameQualifier": {},
        "State": {},
        "CommonName": {},
        "SerialNumber": {},
        "Locality": {},
        "Title": {},
        "Surname": {},
        "GivenName": {},
        "Initials": {},
        "Pseudonym": {},
        "GenerationQualifier": {},
        "CustomAttributes": {}
      },
      "CsrExtensions": {
        "KeyUsage": {
          "DigitalSignature": {},
          "NonRepudiation": {},
          "KeyEncipherment": {},
          "DataEncipherment": {},
          "KeyAgreement": {},
          "KeyCertSign": {},
          "CRLSign": {},
          "EncipherOnly": {},
          "DecipherOnly": {}
        },
        "SubjectInformationAccess": {}
      }
    },
    "RevocationConfiguration": {
      "CrlConfiguration": {
        "Enabled": {},
        "ExpirationInDays": {},
        "CustomCname": {},
        "S3BucketName": {},
        "S3ObjectAcl": {}
      },
      "OcspConfiguration": {
        "Enabled": {},
        "OcspCustomCname": {}
      }
    },
    "RestorableUntil": {},
    "KeyStorageSecurityStandard": {},
    "UsageMode": {}
  }
]
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

<h2 id="tocS_CertificateAuthorityType">CertificateAuthorityType</h2>
<!-- backwards compatibility -->
<a id="schemacertificateauthoritytype"></a>
<a id="schema_CertificateAuthorityType"></a>
<a id="tocScertificateauthoritytype"></a>
<a id="tocscertificateauthoritytype"></a>

```json
"ROOT"
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

<h2 id="tocS_CertificateAuthorityStatus">CertificateAuthorityStatus</h2>
<!-- backwards compatibility -->
<a id="schemacertificateauthoritystatus"></a>
<a id="schema_CertificateAuthorityStatus"></a>
<a id="tocScertificateauthoritystatus"></a>
<a id="tocscertificateauthoritystatus"></a>

```json
"CREATING"
```

<h2 id="tocS_FailureReason">FailureReason</h2>
<!-- backwards compatibility -->
<a id="schemafailurereason"></a>
<a id="schema_FailureReason"></a>
<a id="tocSfailurereason"></a>
<a id="tocsfailurereason"></a>

```json
"REQUEST_TIMED_OUT"
```

<h2 id="tocS_CertificateAuthorityConfiguration">CertificateAuthorityConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacertificateauthorityconfiguration"></a>
<a id="schema_CertificateAuthorityConfiguration"></a>
<a id="tocScertificateauthorityconfiguration"></a>
<a id="tocscertificateauthorityconfiguration"></a>

```json
{
  "KeyAlgorithm": {},
  "SigningAlgorithm": {},
  "Subject": {
    "Country": {},
    "Organization": {},
    "OrganizationalUnit": {},
    "DistinguishedNameQualifier": {},
    "State": {},
    "CommonName": {},
    "SerialNumber": {},
    "Locality": {},
    "Title": {},
    "Surname": {},
    "GivenName": {},
    "Initials": {},
    "Pseudonym": {},
    "GenerationQualifier": {},
    "CustomAttributes": {}
  },
  "CsrExtensions": {
    "KeyUsage": {
      "DigitalSignature": {},
      "NonRepudiation": {},
      "KeyEncipherment": {},
      "DataEncipherment": {},
      "KeyAgreement": {},
      "KeyCertSign": {},
      "CRLSign": {},
      "EncipherOnly": {},
      "DecipherOnly": {}
    },
    "SubjectInformationAccess": {}
  }
}
```

Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyAlgorithm|object|true|none|none|
|SigningAlgorithm|object|true|none|none|
|Subject|object|true|none|none|
|CsrExtensions|object|false|none|none|

<h2 id="tocS_RevocationConfiguration">RevocationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemarevocationconfiguration"></a>
<a id="schema_RevocationConfiguration"></a>
<a id="tocSrevocationconfiguration"></a>
<a id="tocsrevocationconfiguration"></a>

```json
{
  "CrlConfiguration": {
    "Enabled": {},
    "ExpirationInDays": {},
    "CustomCname": {},
    "S3BucketName": {},
    "S3ObjectAcl": {}
  },
  "OcspConfiguration": {
    "Enabled": {},
    "OcspCustomCname": {}
  }
}
```

Certificate revocation information used by the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> actions. Your private certificate authority (CA) can configure Online Certificate Status Protocol (OCSP) support and/or maintain a certificate revocation list (CRL). OCSP returns validation information about certificates as requested by clients, and a CRL contains an updated list of certificates revoked by your CA. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> and <a href="https://docs.aws.amazon.com/privateca/latest/userguide/revocation-setup.html">Setting up a certificate revocation method</a> in the <i>Amazon Web Services Private Certificate Authority User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CrlConfiguration|object|false|none|none|
|OcspConfiguration|object|false|none|none|

<h2 id="tocS_KeyStorageSecurityStandard">KeyStorageSecurityStandard</h2>
<!-- backwards compatibility -->
<a id="schemakeystoragesecuritystandard"></a>
<a id="schema_KeyStorageSecurityStandard"></a>
<a id="tocSkeystoragesecuritystandard"></a>
<a id="tocskeystoragesecuritystandard"></a>

```json
"FIPS_140_2_LEVEL_2_OR_HIGHER"
```

<h2 id="tocS_CertificateAuthorityUsageMode">CertificateAuthorityUsageMode</h2>
<!-- backwards compatibility -->
<a id="schemacertificateauthorityusagemode"></a>
<a id="schema_CertificateAuthorityUsageMode"></a>
<a id="tocScertificateauthorityusagemode"></a>
<a id="tocscertificateauthorityusagemode"></a>

```json
"GENERAL_PURPOSE"
```

<h2 id="tocS_KeyAlgorithm">KeyAlgorithm</h2>
<!-- backwards compatibility -->
<a id="schemakeyalgorithm"></a>
<a id="schema_KeyAlgorithm"></a>
<a id="tocSkeyalgorithm"></a>
<a id="tocskeyalgorithm"></a>

```json
"RSA_2048"
```

<h2 id="tocS_SigningAlgorithm">SigningAlgorithm</h2>
<!-- backwards compatibility -->
<a id="schemasigningalgorithm"></a>
<a id="schema_SigningAlgorithm"></a>
<a id="tocSsigningalgorithm"></a>
<a id="tocssigningalgorithm"></a>

```json
"SHA256WITHECDSA"
```

<h2 id="tocS_CsrExtensions">CsrExtensions</h2>
<!-- backwards compatibility -->
<a id="schemacsrextensions"></a>
<a id="schema_CsrExtensions"></a>
<a id="tocScsrextensions"></a>
<a id="tocscsrextensions"></a>

```json
{
  "KeyUsage": {
    "DigitalSignature": {},
    "NonRepudiation": {},
    "KeyEncipherment": {},
    "DataEncipherment": {},
    "KeyAgreement": {},
    "KeyCertSign": {},
    "CRLSign": {},
    "EncipherOnly": {},
    "DecipherOnly": {}
  },
  "SubjectInformationAccess": {}
}
```

Describes the certificate extensions to be added to the certificate signing request (CSR).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyUsage|object|false|none|none|
|SubjectInformationAccess|object|false|none|none|

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

<h2 id="tocS_PolicyInformation">PolicyInformation</h2>
<!-- backwards compatibility -->
<a id="schemapolicyinformation"></a>
<a id="schema_PolicyInformation"></a>
<a id="tocSpolicyinformation"></a>
<a id="tocspolicyinformation"></a>

```json
{
  "CertPolicyId": {},
  "PolicyQualifiers": {}
}
```

Defines the X.509 <code>CertificatePolicies</code> extension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertPolicyId|object|true|none|none|
|PolicyQualifiers|object|false|none|none|

<h2 id="tocS_CertificatePolicyList">CertificatePolicyList</h2>
<!-- backwards compatibility -->
<a id="schemacertificatepolicylist"></a>
<a id="schema_CertificatePolicyList"></a>
<a id="tocScertificatepolicylist"></a>
<a id="tocscertificatepolicylist"></a>

```json
[
  {
    "CertPolicyId": {},
    "PolicyQualifiers": {}
  }
]
```

<h2 id="tocS_CnameString">CnameString</h2>
<!-- backwards compatibility -->
<a id="schemacnamestring"></a>
<a id="schema_CnameString"></a>
<a id="tocScnamestring"></a>
<a id="tocscnamestring"></a>

```json
"string"
```

<h2 id="tocS_S3BucketName">S3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketname"></a>
<a id="schema_S3BucketName"></a>
<a id="tocSs3bucketname"></a>
<a id="tocss3bucketname"></a>

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

<h2 id="tocS_IdempotencyToken">IdempotencyToken</h2>
<!-- backwards compatibility -->
<a id="schemaidempotencytoken"></a>
<a id="schema_IdempotencyToken"></a>
<a id="tocSidempotencytoken"></a>
<a id="tocsidempotencytoken"></a>

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

<h2 id="tocS_Principal">Principal</h2>
<!-- backwards compatibility -->
<a id="schemaprincipal"></a>
<a id="schema_Principal"></a>
<a id="tocSprincipal"></a>
<a id="tocsprincipal"></a>

```json
"string"
```

<h2 id="tocS_Integer1To5000">Integer1To5000</h2>
<!-- backwards compatibility -->
<a id="schemainteger1to5000"></a>
<a id="schema_Integer1To5000"></a>
<a id="tocSinteger1to5000"></a>
<a id="tocsinteger1to5000"></a>

```json
1
```

<h2 id="tocS_S3BucketName3To255">S3BucketName3To255</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketname3to255"></a>
<a id="schema_S3BucketName3To255"></a>
<a id="tocSs3bucketname3to255"></a>
<a id="tocss3bucketname3to255"></a>

```json
"string"
```

<h2 id="tocS_S3ObjectAcl">S3ObjectAcl</h2>
<!-- backwards compatibility -->
<a id="schemas3objectacl"></a>
<a id="schema_S3ObjectAcl"></a>
<a id="tocSs3objectacl"></a>
<a id="tocss3objectacl"></a>

```json
"PUBLIC_READ"
```

<h2 id="tocS_CrlConfiguration">CrlConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacrlconfiguration"></a>
<a id="schema_CrlConfiguration"></a>
<a id="tocScrlconfiguration"></a>
<a id="tocscrlconfiguration"></a>

```json
{
  "Enabled": {},
  "ExpirationInDays": {},
  "CustomCname": {},
  "S3BucketName": {},
  "S3ObjectAcl": {}
}
```

<p>Contains configuration information for a certificate revocation list (CRL). Your private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You can enable CRLs for your new or an existing private CA by setting the <b>Enabled</b> parameter to <code>true</code>. Your private CA writes CRLs to an S3 bucket that you specify in the <b>S3BucketName</b> parameter. You can hide the name of your bucket by specifying a value for the <b>CustomCname</b> parameter. Your private CA copies the CNAME or the S3 bucket name to the <b>CRL Distribution Points</b> extension of each certificate it issues. Your S3 bucket policy must give write permission to Amazon Web Services Private CA. </p> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#crl-encryption">Encrypting Your CRLs</a>.</p> <p>Your private CA uses the value in the <b>ExpirationInDays</b> parameter to calculate the <b>nextUpdate</b> field in the CRL. The CRL is refreshed prior to a certificate's expiration date or when a certificate is revoked. When a certificate is revoked, it appears in the CRL until the certificate expires, and then in one additional CRL after expiration, and it always appears in the audit report.</p> <p>A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason a CRL update fails, Amazon Web Services Private CA makes further attempts every 15 minutes.</p> <p>CRLs contain the following fields:</p> <ul> <li> <p> <b>Version</b>: The current version number defined in RFC 5280 is V2. The integer value is 0x1. </p> </li> <li> <p> <b>Signature Algorithm</b>: The name of the algorithm used to sign the CRL.</p> </li> <li> <p> <b>Issuer</b>: The X.500 distinguished name of your private CA that issued the CRL.</p> </li> <li> <p> <b>Last Update</b>: The issue date and time of this CRL.</p> </li> <li> <p> <b>Next Update</b>: The day and time by which the next CRL will be issued.</p> </li> <li> <p> <b>Revoked Certificates</b>: List of revoked certificates. Each list item contains the following information.</p> <ul> <li> <p> <b>Serial Number</b>: The serial number, in hexadecimal format, of the revoked certificate.</p> </li> <li> <p> <b>Revocation Date</b>: Date and time the certificate was revoked.</p> </li> <li> <p> <b>CRL Entry Extensions</b>: Optional extensions for the CRL entry.</p> <ul> <li> <p> <b>X509v3 CRL Reason Code</b>: Reason the certificate was revoked.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>CRL Extensions</b>: Optional extensions for the CRL.</p> <ul> <li> <p> <b>X509v3 Authority Key Identifier</b>: Identifies the public key associated with the private key used to sign the certificate.</p> </li> <li> <p> <b>X509v3 CRL Number:</b>: Decimal sequence number for the CRL.</p> </li> </ul> </li> <li> <p> <b>Signature Algorithm</b>: Algorithm used by your private CA to sign the CRL.</p> </li> <li> <p> <b>Signature Value</b>: Signature computed over the CRL.</p> </li> </ul> <p>Certificate revocation lists created by Amazon Web Services Private CA are DER-encoded. You can use the following OpenSSL command to list a CRL.</p> <p> <code>openssl crl -inform DER -text -in <i>crl_path</i> -noout</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html">Planning a certificate revocation list (CRL)</a> in the <i>Amazon Web Services Private Certificate Authority User Guide</i> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|ExpirationInDays|object|false|none|none|
|CustomCname|object|false|none|none|
|S3BucketName|object|false|none|none|
|S3ObjectAcl|object|false|none|none|

<h2 id="tocS_CsrBlob">CsrBlob</h2>
<!-- backwards compatibility -->
<a id="schemacsrblob"></a>
<a id="schema_CsrBlob"></a>
<a id="tocScsrblob"></a>
<a id="tocscsrblob"></a>

```json
"string"
```

<h2 id="tocS_CsrBody">CsrBody</h2>
<!-- backwards compatibility -->
<a id="schemacsrbody"></a>
<a id="schema_CsrBody"></a>
<a id="tocScsrbody"></a>
<a id="tocscsrbody"></a>

```json
"string"
```

<h2 id="tocS_KeyUsage">KeyUsage</h2>
<!-- backwards compatibility -->
<a id="schemakeyusage"></a>
<a id="schema_KeyUsage"></a>
<a id="tocSkeyusage"></a>
<a id="tocskeyusage"></a>

```json
{
  "DigitalSignature": {},
  "NonRepudiation": {},
  "KeyEncipherment": {},
  "DataEncipherment": {},
  "KeyAgreement": {},
  "KeyCertSign": {},
  "CRLSign": {},
  "EncipherOnly": {},
  "DecipherOnly": {}
}
```

Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DigitalSignature|object|false|none|none|
|NonRepudiation|object|false|none|none|
|KeyEncipherment|object|false|none|none|
|DataEncipherment|object|false|none|none|
|KeyAgreement|object|false|none|none|
|KeyCertSign|object|false|none|none|
|CRLSign|object|false|none|none|
|EncipherOnly|object|false|none|none|
|DecipherOnly|object|false|none|none|

<h2 id="tocS_String1To256">String1To256</h2>
<!-- backwards compatibility -->
<a id="schemastring1to256"></a>
<a id="schema_String1To256"></a>
<a id="tocSstring1to256"></a>
<a id="tocsstring1to256"></a>

```json
"string"
```

<h2 id="tocS_CustomAttribute">CustomAttribute</h2>
<!-- backwards compatibility -->
<a id="schemacustomattribute"></a>
<a id="schema_CustomAttribute"></a>
<a id="tocScustomattribute"></a>
<a id="tocscustomattribute"></a>

```json
{
  "ObjectIdentifier": {},
  "Value": {}
}
```

Defines the X.500 relative distinguished name (RDN).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectIdentifier|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_CustomExtension">CustomExtension</h2>
<!-- backwards compatibility -->
<a id="schemacustomextension"></a>
<a id="schema_CustomExtension"></a>
<a id="tocScustomextension"></a>
<a id="tocscustomextension"></a>

```json
{
  "ObjectIdentifier": {},
  "Value": {},
  "Critical": {}
}
```

<p/> <p>Specifies the X.509 extension information for a certificate.</p> <p>Extensions present in <code>CustomExtensions</code> follow the <code>ApiPassthrough</code> <a href="https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations">template rules</a>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectIdentifier|object|true|none|none|
|Value|object|true|none|none|
|Critical|object|false|none|none|

<h2 id="tocS_CustomExtensionList">CustomExtensionList</h2>
<!-- backwards compatibility -->
<a id="schemacustomextensionlist"></a>
<a id="schema_CustomExtensionList"></a>
<a id="tocScustomextensionlist"></a>
<a id="tocscustomextensionlist"></a>

```json
[
  {
    "ObjectIdentifier": {},
    "Value": {},
    "Critical": {}
  }
]
```

<h2 id="tocS_PermanentDeletionTimeInDays">PermanentDeletionTimeInDays</h2>
<!-- backwards compatibility -->
<a id="schemapermanentdeletiontimeindays"></a>
<a id="schema_PermanentDeletionTimeInDays"></a>
<a id="tocSpermanentdeletiontimeindays"></a>
<a id="tocspermanentdeletiontimeindays"></a>

```json
7
```

<h2 id="tocS_String256">String256</h2>
<!-- backwards compatibility -->
<a id="schemastring256"></a>
<a id="schema_String256"></a>
<a id="tocSstring256"></a>
<a id="tocsstring256"></a>

```json
"string"
```

<h2 id="tocS_EdiPartyName">EdiPartyName</h2>
<!-- backwards compatibility -->
<a id="schemaedipartyname"></a>
<a id="schema_EdiPartyName"></a>
<a id="tocSedipartyname"></a>
<a id="tocsedipartyname"></a>

```json
{
  "PartyName": {},
  "NameAssigner": {}
}
```

Describes an Electronic Data Interchange (EDI) entity as described in as defined in <a href="https://datatracker.ietf.org/doc/html/rfc5280">Subject Alternative Name</a> in RFC 5280.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PartyName|object|true|none|none|
|NameAssigner|object|false|none|none|

<h2 id="tocS_ExtendedKeyUsageType">ExtendedKeyUsageType</h2>
<!-- backwards compatibility -->
<a id="schemaextendedkeyusagetype"></a>
<a id="schema_ExtendedKeyUsageType"></a>
<a id="tocSextendedkeyusagetype"></a>
<a id="tocsextendedkeyusagetype"></a>

```json
"SERVER_AUTH"
```

<h2 id="tocS_ExtendedKeyUsage">ExtendedKeyUsage</h2>
<!-- backwards compatibility -->
<a id="schemaextendedkeyusage"></a>
<a id="schema_ExtendedKeyUsage"></a>
<a id="tocSextendedkeyusage"></a>
<a id="tocsextendedkeyusage"></a>

```json
{
  "ExtendedKeyUsageType": {},
  "ExtendedKeyUsageObjectIdentifier": {}
}
```

Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the <code>KeyUsage</code> extension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExtendedKeyUsageType|object|false|none|none|
|ExtendedKeyUsageObjectIdentifier|object|false|none|none|

<h2 id="tocS_ExtendedKeyUsageList">ExtendedKeyUsageList</h2>
<!-- backwards compatibility -->
<a id="schemaextendedkeyusagelist"></a>
<a id="schema_ExtendedKeyUsageList"></a>
<a id="tocSextendedkeyusagelist"></a>
<a id="tocsextendedkeyusagelist"></a>

```json
[
  {
    "ExtendedKeyUsageType": {},
    "ExtendedKeyUsageObjectIdentifier": {}
  }
]
```

<h2 id="tocS_GeneralNameList">GeneralNameList</h2>
<!-- backwards compatibility -->
<a id="schemageneralnamelist"></a>
<a id="schema_GeneralNameList"></a>
<a id="tocSgeneralnamelist"></a>
<a id="tocsgeneralnamelist"></a>

```json
[
  {
    "OtherName": {
      "TypeId": {},
      "Value": {}
    },
    "Rfc822Name": {},
    "DnsName": {},
    "DirectoryName": {
      "Country": {},
      "Organization": {},
      "OrganizationalUnit": {},
      "DistinguishedNameQualifier": {},
      "State": {},
      "CommonName": {},
      "SerialNumber": {},
      "Locality": {},
      "Title": {},
      "Surname": {},
      "GivenName": {},
      "Initials": {},
      "Pseudonym": {},
      "GenerationQualifier": {},
      "CustomAttributes": {}
    },
    "EdiPartyName": {
      "PartyName": {},
      "NameAssigner": {}
    },
    "UniformResourceIdentifier": {},
    "IpAddress": {},
    "RegisteredId": {}
  }
]
```

<h2 id="tocS_OtherName">OtherName</h2>
<!-- backwards compatibility -->
<a id="schemaothername"></a>
<a id="schema_OtherName"></a>
<a id="tocSothername"></a>
<a id="tocsothername"></a>

```json
{
  "TypeId": {},
  "Value": {}
}
```

Defines a custom ASN.1 X.400 <code>GeneralName</code> using an object identifier (OID) and value. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier (OID)</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeId|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_String253">String253</h2>
<!-- backwards compatibility -->
<a id="schemastring253"></a>
<a id="schema_String253"></a>
<a id="tocSstring253"></a>
<a id="tocsstring253"></a>

```json
"string"
```

<h2 id="tocS_String39">String39</h2>
<!-- backwards compatibility -->
<a id="schemastring39"></a>
<a id="schema_String39"></a>
<a id="tocSstring39"></a>
<a id="tocsstring39"></a>

```json
"string"
```

<h2 id="tocS_Validity">Validity</h2>
<!-- backwards compatibility -->
<a id="schemavalidity"></a>
<a id="schema_Validity"></a>
<a id="tocSvalidity"></a>
<a id="tocsvalidity"></a>

```json
{
  "Value": {},
  "Type": {}
}
```

<p>Validity specifies the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the validity of a certificate starts or expires, or as a span of time after issuance, stated in days, months, or years. For more information, see <a href="https://tools.ietf.org/html/rfc5280#section-4.1.2.5">Validity</a> in RFC 5280.</p> <p>Amazon Web Services Private CA API consumes the <code>Validity</code> data type differently in two distinct parameters of the <code>IssueCertificate</code> action. The required parameter <code>IssueCertificate</code>:<code>Validity</code> specifies the end of a certificate's validity period. The optional parameter <code>IssueCertificate</code>:<code>ValidityNotBefore</code> specifies a customized starting time for the validity period.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

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
1
```

<h2 id="tocS_ResourceOwner">ResourceOwner</h2>
<!-- backwards compatibility -->
<a id="schemaresourceowner"></a>
<a id="schema_ResourceOwner"></a>
<a id="tocSresourceowner"></a>
<a id="tocsresourceowner"></a>

```json
"SELF"
```

<h2 id="tocS_PermissionList">PermissionList</h2>
<!-- backwards compatibility -->
<a id="schemapermissionlist"></a>
<a id="schema_PermissionList"></a>
<a id="tocSpermissionlist"></a>
<a id="tocspermissionlist"></a>

```json
[
  {
    "CertificateAuthorityArn": {},
    "CreatedAt": {},
    "Principal": {},
    "SourceAccount": {},
    "Actions": {},
    "Policy": {}
  }
]
```

<h2 id="tocS_OcspConfiguration">OcspConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaocspconfiguration"></a>
<a id="schema_OcspConfiguration"></a>
<a id="tocSocspconfiguration"></a>
<a id="tocsocspconfiguration"></a>

```json
{
  "Enabled": {},
  "OcspCustomCname": {}
}
```

<p>Contains information to enable and configure Online Certificate Status Protocol (OCSP) for validating certificate revocation status.</p> <p>When you revoke a certificate, OCSP responses may take up to 60 minutes to reflect the new status.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|OcspCustomCname|object|false|none|none|

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
{
  "CertificateAuthorityArn": {},
  "CreatedAt": {},
  "Principal": {},
  "SourceAccount": {},
  "Actions": {},
  "Policy": {}
}
```

Permissions designate which private CA actions can be performed by an Amazon Web Services service or entity. In order for ACM to automatically renew private certificates, you must give the ACM service principal all available permissions (<code>IssueCertificate</code>, <code>GetCertificate</code>, and <code>ListPermissions</code>). Permissions can be assigned with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action, removed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action, and listed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArn|object|false|none|none|
|CreatedAt|object|false|none|none|
|Principal|object|false|none|none|
|SourceAccount|object|false|none|none|
|Actions|object|false|none|none|
|Policy|object|false|none|none|

<h2 id="tocS_PolicyQualifierInfoList">PolicyQualifierInfoList</h2>
<!-- backwards compatibility -->
<a id="schemapolicyqualifierinfolist"></a>
<a id="schema_PolicyQualifierInfoList"></a>
<a id="tocSpolicyqualifierinfolist"></a>
<a id="tocspolicyqualifierinfolist"></a>

```json
[
  {
    "PolicyQualifierId": {},
    "Qualifier": {
      "CpsUri": {}
    }
  }
]
```

<h2 id="tocS_PolicyQualifierId">PolicyQualifierId</h2>
<!-- backwards compatibility -->
<a id="schemapolicyqualifierid"></a>
<a id="schema_PolicyQualifierId"></a>
<a id="tocSpolicyqualifierid"></a>
<a id="tocspolicyqualifierid"></a>

```json
"CPS"
```

<h2 id="tocS_Qualifier">Qualifier</h2>
<!-- backwards compatibility -->
<a id="schemaqualifier"></a>
<a id="schema_Qualifier"></a>
<a id="tocSqualifier"></a>
<a id="tocsqualifier"></a>

```json
{
  "CpsUri": {}
}
```

Defines a <code>PolicyInformation</code> qualifier. Amazon Web Services Private CA supports the <a href="https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.4">certification practice statement (CPS) qualifier</a> defined in RFC 5280.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CpsUri|object|true|none|none|

<h2 id="tocS_PolicyQualifierInfo">PolicyQualifierInfo</h2>
<!-- backwards compatibility -->
<a id="schemapolicyqualifierinfo"></a>
<a id="schema_PolicyQualifierInfo"></a>
<a id="tocSpolicyqualifierinfo"></a>
<a id="tocspolicyqualifierinfo"></a>

```json
{
  "PolicyQualifierId": {},
  "Qualifier": {
    "CpsUri": {}
  }
}
```

Modifies the <code>CertPolicyId</code> of a <code>PolicyInformation</code> object with a qualifier. Amazon Web Services Private CA supports the certification practice statement (CPS) qualifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyQualifierId|object|true|none|none|
|Qualifier|object|true|none|none|

<h2 id="tocS_PositiveLong">PositiveLong</h2>
<!-- backwards compatibility -->
<a id="schemapositivelong"></a>
<a id="schema_PositiveLong"></a>
<a id="tocSpositivelong"></a>
<a id="tocspositivelong"></a>

```json
1
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

Tags are labels that you can use to identify and organize your private CAs. Each tag consists of a key and an optional value. You can associate up to 50 tags with a private CA. To add one or more tags to a private CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a> action. To remove a tag, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|false|none|none|

<h2 id="tocS_ValidityPeriodType">ValidityPeriodType</h2>
<!-- backwards compatibility -->
<a id="schemavalidityperiodtype"></a>
<a id="schema_ValidityPeriodType"></a>
<a id="tocSvalidityperiodtype"></a>
<a id="tocsvalidityperiodtype"></a>

```json
"END_DATE"
```
